export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const slug = url.searchParams.get("slug");

    if (!slug || !/^[a-z0-9-/]+$/.test(slug)) {
      return new Response("Bad slug", { status: 400 });
    }

    const headers = {
      "Access-Control-Allow-Origin": "https://jluk.me",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    const key = `likes:${slug}`;

    if (request.method === "GET") {
      const count = (await env.LIKES.get(key)) || "0";
      return new Response(JSON.stringify({ count: parseInt(count) }), { headers });
    }

    if (request.method === "POST") {
      const current = parseInt((await env.LIKES.get(key)) || "0");
      const next = current + 1;
      await env.LIKES.put(key, next.toString());
      return new Response(JSON.stringify({ count: next }), { headers });
    }

    return new Response("Method not allowed", { status: 405, headers });
  },
};
