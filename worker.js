export default {
    async fetch(request, env, ctx) {
        return new Response("Hello from Nashco Global Cloudflare Worker!", {
            headers: { 'content-type': 'text/plain' },
        });
    },
};
