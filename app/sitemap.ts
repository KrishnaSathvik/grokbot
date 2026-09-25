import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";
import { GUIDE_PAGES } from "@/data/navigation";
import { WILD_PROJECTS } from "@/data/wild";
import { LAST_UPDATED_ISO, SITE_URL, SITE_INDEXABLE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_INDEXABLE) return [];

  const guides = GUIDE_PAGES.map((p) => ({
    url: `${SITE_URL}${p.href === "/" ? "/" : p.href}`,
    lastModified: LAST_UPDATED_ISO,
    changeFrequency: "weekly" as const,
    priority: p.href === "/" ? 1 : 0.8,
  }));

  const hubs = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: LAST_UPDATED_ISO,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/in-the-wild`,
      lastModified: LAST_UPDATED_ISO,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  const posts = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.modifiedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const wild = WILD_PROJECTS.map((p) => ({
    url: `${SITE_URL}/in-the-wild/${p.slug}`,
    lastModified: p.lastChecked,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...guides, ...hubs, ...posts, ...wild];
}
