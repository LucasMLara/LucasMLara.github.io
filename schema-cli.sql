-- ==========================================
-- Link Shortener - Supabase Schema (multi-tenant)
-- ==========================================

-- Tabela principal de links
create table if not exists public.links (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references auth.users(id) on delete cascade not null,
  domain      text not null,
  slug        text not null,
  url         text not null,
  label       text,
  clicks      integer default 0 not null,
  created_at  timestamptz default now() not null,
  constraint links_domain_slug_key unique (domain, slug)
);

-- Índice composto para busca rápida na Edge Function
create index if not exists links_domain_slug_idx on public.links (domain, slug);

-- RLS
alter table public.links enable row level security;

create policy "user reads own links"
  on public.links for select
  using (auth.uid() = user_id);

create policy "user inserts own links"
  on public.links for insert
  with check (auth.uid() = user_id);

create policy "user updates own links"
  on public.links for update
  using (auth.uid() = user_id);

create policy "user deletes own links"
  on public.links for delete
  using (auth.uid() = user_id);

-- Função RPC para incrementar clicks atomicamente
create or replace function increment_clicks(link_id uuid)
returns void
language sql
security definer
as $$
  update public.links
  set clicks = clicks + 1
  where id = link_id;
$$;

-- ==========================================
-- Tabela de domínios (multi-tenant)
-- ==========================================

create table if not exists public.domains (
  domain      text primary key,
  user_id     uuid references auth.users(id) on delete cascade not null,
  label       text,
  created_at  timestamptz default now() not null
);

alter table public.domains enable row level security;

create policy "user reads own domains"
  on public.domains for select
  using (auth.uid() = user_id);

create policy "user inserts own domains"
  on public.domains for insert
  with check (auth.uid() = user_id);

create policy "user deletes own domains"
  on public.domains for delete
  using (auth.uid() = user_id);

-- ==========================================
-- Migration (se o projeto já existia sem multi-tenant)
-- ==========================================
-- Rodar no Supabase SQL Editor após criar o schema acima:
--
-- alter table public.links add column if not exists domain text;
-- update public.links set domain = 'lucaslara.dev' where domain is null;
-- alter table public.links alter column domain set not null;
-- alter table public.links drop constraint if exists links_slug_key;
-- alter table public.links add constraint links_domain_slug_key unique (domain, slug);
-- drop index if exists links_slug_idx;
-- create index if not exists links_domain_slug_idx on public.links (domain, slug);
--
-- Seed (rodar logado como você no SQL Editor — usa auth.uid()):
-- insert into public.domains (domain, user_id, label) values
--   ('lucaslara.dev',  auth.uid(), 'Meu portfolio'),
--   ('<DOMINIO_IMM>',  auth.uid(), 'Cliente IMM')
-- on conflict do nothing;
