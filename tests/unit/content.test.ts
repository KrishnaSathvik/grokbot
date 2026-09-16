import { describe, expect, it } from "vitest";
import { JOB_CATEGORIES, JOBS, STARTER_JOB_SLUGS, STARTER_JOBS } from "@/data/jobs";
import { PROMPTS } from "@/data/prompts";
import { FOOTER_PAGES, GUIDE_PAGES, guideNeighbours, HEADER_PAGES } from "@/data/navigation";
import { SOURCES } from "@/data/sources";
import { TRUST_LEVELS } from "@/data/trust";

describe("jobs catalogue", () => {
  it("still has all 56 jobs", () => {
    expect(JOBS).toHaveLength(56);
  });
  it("has a unique, URL-safe slug per job", () => {
    const slugs = JOBS.map((j) => j.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  it("uses only known categories, cadences and oversight levels", () => {
    for (const j of JOBS) {
      expect(JOB_CATEGORIES).toContain(j.category);
      expect(["one-off", "recurring", "monitoring"]).toContain(j.cadence);
      expect(["low", "review", "approval"]).toContain(j.oversight);
    }
  });
  it("covers every category", () => {
    for (const c of JOB_CATEGORIES) expect(JOBS.some((j) => j.category === c)).toBe(true);
  });
  it("picks six real, low-risk starter jobs", () => {
    expect(STARTER_JOB_SLUGS).toHaveLength(6);
    expect(STARTER_JOBS.map((j) => j.slug)).toEqual([...STARTER_JOB_SLUGS]);
    for (const j of STARTER_JOBS) expect(j.oversight).not.toBe("approval");
  });
  it("links every day-one prompt to a job in the catalogue", () => {
    for (const p of PROMPTS) expect(JOBS.some((j) => j.slug === p.job)).toBe(true);
  });
});

describe("guide navigation", () => {
  it("has seven numbered pages in order, Sources last and out of the header", () => {
    expect(GUIDE_PAGES.map((p) => p.href)).toEqual([
      "/",
      "/how-it-works",
      "/jobs",
      "/avatar-system",
      "/getting-started",
      "/trust-and-cost",
      "/sources",
    ]);
    expect(GUIDE_PAGES.map((p) => p.number)).toEqual(["01", "02", "03", "04", "05", "06", "07"]);
    expect(HEADER_PAGES.map((p) => p.href)).not.toContain("/sources");
    expect(FOOTER_PAGES.map((p) => p.href)).toEqual(["/sources"]);
  });
  it("gives every page unique metadata", () => {
    const titles = new Set(GUIDE_PAGES.map((p) => p.title));
    const descriptions = new Set(GUIDE_PAGES.map((p) => p.description));
    expect(titles.size).toBe(GUIDE_PAGES.length);
    expect(descriptions.size).toBe(GUIDE_PAGES.length);
  });
  it("links previous and next as a chain", () => {
    expect(guideNeighbours("/").previous).toBeNull();
    expect(guideNeighbours("/").next?.href).toBe("/how-it-works");
    expect(guideNeighbours("/sources").next).toBeNull();
    expect(guideNeighbours("/sources").previous?.href).toBe("/trust-and-cost");
    expect(() => guideNeighbours("/nope")).toThrow();
  });
});

describe("trust and sources", () => {
  it("has three trust levels with examples", () => {
    expect(TRUST_LEVELS.map((l) => l.id)).toEqual(["hand-over", "review", "approve"]);
    for (const l of TRUST_LEVELS) expect(l.examples.length).toBeGreaterThan(0);
  });
  it("has https sources with unique links and a kind", () => {
    const hrefs = SOURCES.map((s) => s.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
    for (const s of SOURCES) {
      expect(s.href).toMatch(/^https:\/\//);
      expect(["official", "community", "outside"]).toContain(s.kind);
    }
  });
});
