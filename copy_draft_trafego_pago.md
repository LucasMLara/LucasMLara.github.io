# Rascunho — Serviço de Tráfego Pago (ByLara)

**Status:** 🔒 RASCUNHO — NÃO PUBLICAR no site ainda.
**Gatilho para publicar:** ter pelo menos 1 case com número real (Beaufy ou cliente pagante) rodando campanha.
**Data:** Setembro 2026

---

## 1. Por que esperar

O site hoje vende "resultado, não portfólio" (ver `copy_audit_bylara.md`). Anunciar gestão de tráfego pago sem case comprovado quebra essa promessa. Este arquivo existe pra ficar pronto e ser publicado rápido assim que o Beaufy (ou primeiro cliente pagante) tiver métrica real — não pra ir ao ar agora.

---

## 2. Ângulo de posicionamento

O diferencial não é "eu também faço tráfego pago" (isso qualquer gestor faz). É: **sou dev, então a parte técnica que trava a maioria dos gestores de tráfego (Pixel, Conversions API, velocidade de site, ajuste de landing page) eu resolvo sozinho, sem terceirizar e sem atraso.**

**PT:**
> A maioria de quem gerencia tráfego pago depende de um dev pra instalar Pixel, ajustar a página ou configurar conversão. Eu sou os dois — sem intermediário, sem atraso.

**EN:**
> Most people running ads depend on a developer to install the Pixel, tweak the page, or set up conversions. I'm both — no middleman, no delay.

---

## 3. Novo card de serviço (seção `#services`)

**Nome:** Tráfego Pago / Paid Traffic

**PT:**
> Site bonito sem rastreamento é dinheiro voando às cegas. Instalo Pixel da Meta, Conversions API e conversão do Google Ads certinha — e, se fizer sentido pro seu negócio, assumo a gestão da campanha rodando.

**EN:**
> A pretty site with no tracking is money spent blind. I install Meta Pixel, Conversions API, and proper Google Ads conversion tracking — and if it fits your business, I run the campaign too.

**Tags:** `Meta Ads` · `Google Ads` · `Pixel + CAPI` · `GTM / GA4`

---

## 4. FAQ nova (seção `#faq`)

**PT:** Vocês cuidam de tráfego pago também?
> Sim. Além do site e do agente de IA, deixo tudo pronto pra rodar anúncio — Pixel, conversões, GTM — e, se fizer sentido, assumo a gestão das campanhas.

**EN:** Do you also handle paid traffic?
> Yes. Besides the site and AI agent, I set everything up to run ads — Pixel, conversions, GTM — and if it fits, I manage the campaigns too.

**PT:** Como funciona a cobrança da gestão de tráfego?
> Valor de entrada pra estruturar tudo (Pixel, conversões, estrutura de campanha) + gestão contínua **[fixo mensal ou % do budget investido — decisão de negócio pendente, não travar aqui]**. Mesmo modelo do site: sem contrato longo, aviso de 30 dias.

> ⚠️ Pendência: decidir fixo vs. % antes de publicar essa resposta — não é decisão de copy, é decisão de precificação.

---

## 5. Template do case Beaufy (preencher quando tiver dados)

| Campo | Conteúdo |
|---|---|
| **Nicho** | [preencher] |
| **Problema** | [ex: sem tráfego pago, dependia só de orgânico/indicação] |
| **Solução** | Setup completo de Pixel + Conversions API + campanha [Meta/Google] Ads, gerido internamente |
| **Resultado** | [CPL, ROAS, nº de leads/vendas — número real] |
| **Resumo persuasivo (PT)** | *De [situação antes] pra [resultado], com [métrica] comprovada na própria campanha — sem terceirizar nada.* |
| **Resumo persuasivo (EN)** | *From [before] to [result], with [metric] proven on the campaign itself — nothing outsourced.* |

---

## 6. Checklist antes de publicar qualquer coisa deste arquivo

- [ ] Beaufy (ou cliente pagante) com campanha rodando e métrica real registrada
- [ ] Decidir modelo de cobrança da gestão (fixo vs. % de budget)
- [ ] Instalar GA4 + GTM + Pixel no próprio `lucaslara.dev` (dogfooding — hoje o site não tem nenhum)
- [ ] Banner de consentimento de cookies (LGPD) se o site do cliente for coletar dados via Pixel/GTM
- [ ] Atualizar Schema JSON-LD do `index.html` se o serviço virar oferta oficial

---

## 7. Onde isso entra no site quando for publicado

1. Novo card na seção `#services` (item 3 deste arquivo)
2. Nova pergunta na seção `#faq` (item 4)
3. Case do Beaufy na seção `#projects` (item 5, preenchido)
4. Fase posterior (SEO de cauda longa): página dedicada `/trafego-pago`, seguindo o padrão de `/clinicas`, `/advogados` já sugerido em `copy_audit_bylara.md`
