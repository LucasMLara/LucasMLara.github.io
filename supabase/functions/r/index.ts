import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

Deno.serve(async (req: Request) => {
  // Extrai o slug da URL: /functions/v1/r/[slug]
  const url = new URL(req.url);
  const parts  = url.pathname.split("/").filter(Boolean);
  // path: /functions/v1/r/<domain>/<slug>
  const domain = parts[parts.length - 2];
  const slug   = parts[parts.length - 1];

  if (!slug || !domain || domain === "r") {
    return new Response("Not found", { status: 404 });
  }

  const { data: link, error } = await supabase
    .from("links")
    .select("id, url")
    .eq("domain", domain)
    .eq("slug", slug)
    .single();

  if (error || !link) {
    return new Response(null, {
      status: 302,
      headers: { Location: "https://lucaslara.dev/encurtador/nao-encontrado" },
    });
  }

  await supabase.rpc("increment_clicks", { link_id: link.id });

  return new Response(null, {
    status: 301,
    headers: {
      Location: link.url,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
});
