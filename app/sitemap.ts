import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/content";
import { SITE } from "@/lib/site";

const ROUTES = ["", "/about", "/services", "/sound-healing", "/blessing", "/yoga-movement-sessions", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...ROUTES.map((r) => ({ url: `${SITE.url}${r}`, changeFrequency: "monthly" as const, priority: r === "" ? 1 : 0.7 })),
    ...POSTS.map((p) => ({ url: `${SITE.url}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
