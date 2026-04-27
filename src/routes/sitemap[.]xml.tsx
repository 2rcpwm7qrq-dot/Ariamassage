import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://ariabalimassage.com";
const ROUTES = ["/", "/body-treatments", "/packages", "/gallery", "/about", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = ROUTES.map(
          (p) =>
            `<url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
        ).join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
