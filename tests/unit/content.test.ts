import { describe, expect, it } from "vitest";
import { AROUND_THE_WEB } from "@/data/around-the-web";
import { BLOG_POSTS, blogPost } from "@/data/blog";
import { JOB_CATEGORIES, JOBS, STARTER_JOB_SLUGS, STARTER_JOBS } from "@/data/jobs";
import { PROMPTS } from "@/data/prompts";
import { FOOTER_PAGES, GUIDE_PAGES, guideNeighbours, HEADER_PAGES, SECONDARY_PAGES } from "@/data/navigation";
import { SOURCES } from "@/data/sources";
import { TRUST_LEVELS } from "@/data/trust";
import { WILD_FILTERS, WILD_PROJECTS, wildMatches, wildProject } from "@/data/wild";

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
    expect(SECONDARY_PAGES.map((p) => p.href)).toEqual(["/blog", "/in-the-wild", "/sources"]);
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

describe("blog catalogue", () => {
  it("publishes the full twelve-post cluster with unique slugs", () => {
    expect(BLOG_POSTS).toHaveLength(12);
    expect(new Set(BLOG_POSTS.map((p) => p.slug)).size).toBe(12);
    expect(BLOG_POSTS.map((p) => p.slug)).toEqual(
      expect.arrayContaining([
        "real-grok-bot-projects",
        "grok-bot-team-workflows",
        "grok-bot-marketplace-guide",
        "grok-bot-for-marketing",
        "grok-bot-for-engineering",
        "grok-bot-for-sales-gtm",
        "grok-bot-for-product-managers",
        "grok-bot-chief-of-staff",
        "grok-bot-seo-aeo",
        "grok-bot-github-projects",
        "grok-bot-security-shared-computer",
        "grok-bot-x-integration",
      ]),
    );
  });

  it("keeps related pillar links and group metadata on every post", () => {
    for (const post of BLOG_POSTS) {
      expect(post.related.length).toBeGreaterThan(0);
      expect(["start", "role", "workflow"]).toContain(post.group);
      expect(post.category.length).toBeGreaterThan(0);
      expect(post.blocks.some((b) => b.type === "p")).toBe(true);
      expect(blogPost(post.slug)?.title).toBe(post.title);
    }
  });

  it("links project headings in the real-projects post to originals", () => {
    const post = blogPost("real-grok-bot-projects");
    expect(post).toBeDefined();
    const linked = (post?.blocks ?? []).filter((b) => b.type === "h2" && b.href);
    expect(linked.length).toBeGreaterThanOrEqual(15);
    for (const b of linked) {
      expect(b.href).toMatch(/^https:\/\//);
    }
  });
});

describe("in-the-wild catalogue", () => {
  it("seeds distinct projects with section and takeaways", () => {
    expect(WILD_PROJECTS.length).toBeGreaterThanOrEqual(20);
    expect(new Set(WILD_PROJECTS.map((p) => p.slug)).size).toBe(WILD_PROJECTS.length);
    for (const p of WILD_PROJECTS) {
      expect(p.project.length).toBeGreaterThan(0);
      expect(p.href.startsWith("http")).toBe(true);
      expect(p.evidence.length).toBeGreaterThan(0);
      expect(["guides", "marketplace", "community"]).toContain(p.section);
      expect(p.takeaways.length).toBeGreaterThanOrEqual(2);
      expect(wildProject(p.slug)?.slug).toBe(p.slug);
    }
  });

  it("supports source and domain matching helpers", () => {
    expect(wildMatches(WILD_PROJECTS[0], "All")).toBe(true);
    const github = WILD_PROJECTS.filter((p) => wildMatches(p, "GitHub"));
    expect(github.every((p) => p.source === "GitHub")).toBe(true);
    const marketing = WILD_PROJECTS.filter((p) => wildMatches(p, "Marketing"));
    expect(marketing.every((p) => p.domains.includes("Marketing"))).toBe(true);
    expect(WILD_FILTERS).toContain("Marketplace");
  });
});

describe("around the web feed", () => {
  it("only summarizes outbound originals", () => {
    expect(AROUND_THE_WEB.length).toBeGreaterThan(0);
    for (const item of AROUND_THE_WEB) {
      expect(item.href.startsWith("http")).toBe(true);
      expect(item.description.length).toBeGreaterThan(20);
    }
  });
});
