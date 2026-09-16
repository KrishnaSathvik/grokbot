import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => { vi.unstubAllEnvs(); vi.resetModules(); });
describe("indexing configuration", () => {
  it("keeps an unconfigured build unindexed without fake canonicals", async () => {
    vi.stubEnv("SITE_URL", "");
    const site = await import("@/lib/site");
    expect(site.SITE_INDEXABLE).toBe(false);
    expect(site.pageMetadata("/").alternates).toBeUndefined();
  });
  it("uses production canonicals and exposes all seven sitemap entries", async () => {
    vi.stubEnv("SITE_URL", "https://guide.test");
    vi.stubEnv("SITE_INDEXING", "true");
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "production");
    const site = await import("@/lib/site");
    expect(site.SITE_INDEXABLE).toBe(true);
    expect(site.pageMetadata("/jobs").alternates?.canonical).toBe("/jobs");
    const { default: sitemap } = await import("@/app/sitemap");
    expect(sitemap()).toHaveLength(7);
    expect(sitemap().every((entry) => entry.url.startsWith("https://guide.test/"))).toBe(true);
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
