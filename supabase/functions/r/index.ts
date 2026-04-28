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
    return new Response(
      `<!DOCTYPE html><html><head><title>Link não encontrado</title></head>
      <body style="font-family:monospace;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#0A0A0A;color:#fff;">
        <div style="text-align:center"><p style="font-size:2rem;margin:0">404</p><p style="color:#666">Link não encontrado</p></div>
      </body></html>`,
      { status: 404, headers: { "Content-Type": "text/html" } }
    );
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
