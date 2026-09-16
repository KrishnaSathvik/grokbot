import type { MetadataRoute } from "next";
import { GUIDE_PAGES } from "@/data/navigation";
import { LAST_UPDATED_ISO, SITE_URL, SITE_INDEXABLE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXABLE) return [];
  return GUIDE_PAGES.map((p) => ({
    url: `${SITE_URL}${p.href === "/" ? "/" : p.href}`,
    lastModified: LAST_UPDATED_ISO,
    changeFrequency: "weekly" as const,
    priority: p.href === "/" ? 1 : 0.8,
  }));
}
