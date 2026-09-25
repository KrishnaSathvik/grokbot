import { afterEach, describe, expect, it, vi } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { BLOG_POSTS } from "@/data/blog";
import { GUIDE_PAGES } from "@/data/navigation";
import { ogPath } from "@/data/seo";
import { WILD_PROJECTS } from "@/data/wild";

afterEach(() => { vi.unstubAllEnvs(); vi.resetModules(); });

describe("static og cards", () => {
  it("maps every guide page to a public/og PNG", () => {
    for (const page of GUIDE_PAGES) {
      const path = ogPath(page.href);
      expect(path).toMatch(/^\/og\/[a-z0-9-]+\.png$/);
      expect(existsSync(join(process.cwd(), "public", path.slice(1)))).toBe(true);
    }
  });

  it("has OG cards for blog and in-the-wild hubs", () => {
    for (const href of ["/blog", "/in-the-wild"]) {
      const path = ogPath(href);
      expect(existsSync(join(process.cwd(), "public", path.slice(1)))).toBe(true);
    }
  });
});

describe("indexing configuration", () => {
  it("keeps an unconfigured build unindexed without fake canonicals", async () => {
    vi.stubEnv("SITE_URL", "");
    const site = await import("@/lib/site");
    expect(site.SITE_INDEXABLE).toBe(false);
    expect(site.pageMetadata("/").alternates).toBeUndefined();
  });
  it("uses production canonicals and exposes guide, hub, post and wild sitemap entries", async () => {
    vi.stubEnv("SITE_URL", "https://guide.test");
    vi.stubEnv("SITE_INDEXING", "true");
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "production");
    const site = await import("@/lib/site");
    expect(site.SITE_INDEXABLE).toBe(true);
    expect(site.pageMetadata("/jobs").alternates?.canonical).toBe("/jobs");
    const { default: sitemap } = await import("@/app/sitemap");
    const entries = sitemap();
    const expected = GUIDE_PAGES.length + 2 + BLOG_POSTS.length + WILD_PROJECTS.length;
    expect(entries).toHaveLength(expected);
    expect(entries.every((entry) => entry.url.startsWith("https://guide.test/"))).toBe(true);
    expect(entries.some((e) => e.url.endsWith("/blog"))).toBe(true);
    expect(entries.some((e) => e.url.endsWith("/in-the-wild"))).toBe(true);
    expect(entries.some((e) => e.url.includes("/blog/real-grok-bot-projects"))).toBe(true);
  });
  it("prevents preview indexing even with inherited production settings", async () => {
    vi.stubEnv("SITE_URL", "https://guide.test");
    vi.stubEnv("SITE_INDEXING", "true");
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "preview");
    expect((await import("@/lib/site")).SITE_INDEXABLE).toBe(false);
  });
  it("rejects placeholder production origins", async () => {
    vi.stubEnv("SITE_URL", "https://YOUR-DOMAIN.vercel.app");
    await expect(import("@/lib/site")).rejects.toThrow("real HTTPS production origin");
  });
});
