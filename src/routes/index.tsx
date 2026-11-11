import { createFileRoute } from "@tanstack/react-router";
import siteHtml from "@/site/etnoherba.html?raw";

// The Etnoherba site is a self-contained HTML page; serve it as-is at "/".
export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(siteHtml, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
  head: () => ({
    meta: [
      { title: "Etnoherba - Türkiye Etnobotanik Haritası" },
      { name: "description", content: "Türkiye'nin 7 coğrafi bölgesindeki endemik ve özel bitkileri interaktif harita ile keşfedin." },
      { property: "og:title", content: "Etnoherba - Türkiye Etnobotanik Haritası" },
      { property: "og:description", content: "Türkiye'nin 7 coğrafi bölgesindeki endemik ve özel bitkileri interaktif harita ile keşfedin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => null,
});
