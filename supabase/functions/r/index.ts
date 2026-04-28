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
      `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Link não encontrado</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <style>
    :root { --bg:#06080F; --surface:#0D1117; --accent:#1E5FCC; --accent2:#3575E8; --text:#F0F4FF; --muted:#8899BB; --border:rgba(42,63,126,0.45); }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:var(--bg); color:var(--text); font-family:'DM Mono',monospace; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px; }
    .badge { font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:var(--accent); margin-bottom:20px; display:flex; align-items:center; gap:10px; }
    .badge::before { content:''; display:inline-block; width:20px; height:1px; background:var(--accent); }
    h1 { font-family:'Syne',sans-serif; font-weight:800; font-size:clamp(64px,14vw,120px); line-height:1; color:var(--text); letter-spacing:-2px; margin-bottom:8px; }
    p { font-size:13px; color:var(--muted); line-height:1.7; max-width:320px; text-align:center; margin-bottom:32px; }
    a { display:inline-flex; align-items:center; gap:8px; background:var(--accent); color:#fff; padding:12px 28px; border-radius:8px; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:0.08em; text-decoration:none; transition:background 0.2s; }
    a:hover { background:var(--accent2); }
  </style>
</head>
<body>
  <div class="badge">ByLara — encurtador</div>
  <h1>404</h1>
  <p>Este link foi deletado ou nunca existiu. Verifique o endereço ou volte para o início.</p>
  <a href="https://lucaslara.dev">← lucaslara.dev</a>
</body>
</html>`,
      { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
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
