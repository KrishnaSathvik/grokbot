import { expect, test } from "@playwright/test";
import { seoPage, ogPath } from "../../data/seo";

const ROUTES = [
  { href: "/", h1: /never/, title: /Grok Bot Explained/ },
  { href: "/how-it-works", h1: /keeps working/, title: /How Grok Bot Works/ },
  { href: "/jobs", h1: /56 jobs/, title: /56 Jobs/ },
  { href: "/avatar-system", h1: /One character/, title: /avatar system/i },
  { href: "/getting-started", h1: /day one/, title: /Getting Started/ },
  { href: "/trust-and-cost", h1: /hand over/, title: /trust/i },
  { href: "/sources", h1: /Sources/, title: /Sources/ },
  { href: "/blog", h1: /Explainers/, title: /Grok Bot Blog/ },
  { href: "/in-the-wild", h1: /in the wild/i, title: /in the Wild/i },
];

const CONTENT_ROUTES = [
  { href: "/blog/real-grok-bot-projects", h1: /15 Real Grok Bot Projects/, title: /15 Real Grok Bot Projects/ },
  { href: "/blog/grok-bot-for-marketing", h1: /Grok Bot for Marketing/, title: /Grok Bot for Marketing/ },
  { href: "/blog/grok-bot-security-shared-computer", h1: /Shared Computer/, title: /Shared Computer/ },
  { href: "/in-the-wild/grokbotdev", h1: /GrokBotDev/, title: /GrokBotDev/ },
];

test.describe("routes", () => {
  for (const r of ROUTES) {
    test(`${r.href} renders with one h1 and its own title`, async ({ page }) => {
      const res = await page.goto(r.href);
      expect(res?.status()).toBe(200);
      await expect(page).toHaveTitle(r.title);
      const seo = seoPage(r.href);
      await expect(page.locator("head title")).toHaveCount(1);
      await expect(page).toHaveTitle(seo.title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", seo.description);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", seo.ogTitle);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", seo.ogDescription);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", new RegExp(`${ogPath(r.href)}$`));
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
      const h1 = page.locator("h1");
      await expect(h1).toHaveCount(1);
      await expect(h1).toContainText(r.h1);
      await expect(page.locator("main#main")).toHaveCount(1);
    });
  }

  for (const r of CONTENT_ROUTES) {
    test(`${r.href} renders researched content with one h1`, async ({ page }) => {
      const res = await page.goto(r.href);
      expect(res?.status()).toBe(200);
      await expect(page).toHaveTitle(r.title);
      const h1 = page.locator("h1");
      await expect(h1).toHaveCount(1);
      await expect(h1).toContainText(r.h1);
      await expect(page.locator("main#main")).toHaveCount(1);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    });
  }

  test("pages end at the footer, without a previous/next band", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Guide", exact: true })).toHaveCount(0);
    await expect(page.getByText("Continue the guide")).toHaveCount(0);
  });

  test("sitemap respects indexing configuration", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    const html = await (await request.get("/")).text();
    if (/name="robots" content="[^"]*noindex/.test(html)) {
      expect(xml).not.toContain("<loc>");
    } else {
      for (const r of ROUTES) expect(xml).toContain(`${r.href === "/" ? "/" : r.href}</loc>`);
      expect(xml).toContain("/blog/real-grok-bot-projects</loc>");
      expect(xml).toContain("/in-the-wild/grokbotdev</loc>");
    }
  });
});

test.describe("navigation", () => {
  test("mobile menu opens, lists pages and navigates", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile only");
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Menu" });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();
    await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute("aria-expanded", "true");
    const menu = page.getByRole("navigation", { name: "Guide pages" }).last();
    for (const label of ["Overview", "How it works", "Jobs", "Avatar system", "Getting started", "Trust & cost", "Blog", "In the wild", "Sources"]) {
      await expect(menu.getByRole("link", { name: label })).toBeVisible();
    }
    await menu.getByRole("link", { name: "Trust & cost" }).click();
    await expect(page).toHaveURL(/\/trust-and-cost$/);
    await expect(page.getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
  });

  test("desktop header links to the pages and marks the current one", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop only");
    await page.goto("/jobs");
    const nav = page.getByRole("navigation", { name: "Guide pages" }).first();
    for (const label of ["Overview", "How it works", "Jobs", "Avatar system", "Getting started", "Trust & cost"]) {
      await expect(nav.getByRole("link", { name: label })).toBeVisible();
    }
    await expect(nav.getByRole("link", { name: "Jobs" })).toHaveAttribute("aria-current", "page");
    await expect(nav.getByRole("link", { name: "Sources" })).toHaveCount(0);
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByRole("link")).toHaveCount(0);
    await nav.getByRole("link", { name: "Avatar system" }).click();
    await expect(page).toHaveURL(/\/avatar-system$/);
  });
});

test.describe("in the wild", () => {
  test("lists projects and opens a detail page", async ({ page }) => {
    await page.goto("/in-the-wild");
    await expect(page.getByText(/^\d+ entr/)).toBeVisible();
    await expect(page.getByRole("button", { name: /^GitHub/ })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "GrokBotDev" })).toBeVisible();
    await page.getByRole("heading", { name: "GrokBotDev" }).getByRole("link").click();
    await expect(page).toHaveURL(/\/in-the-wild\//);
    await expect(page.getByRole("link", { name: /View original/ })).toBeVisible();
  });
});

test.describe("blog", () => {
  test("lists published posts and related guide links on a post", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("heading", { name: "Start here" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "By role" })).toBeVisible();
    await expect(page.getByRole("link", { name: /15 Real Grok Bot Projects/ })).toBeVisible();
    await expect(page.getByRole("link", { name: /Grok Bot for Marketing/ })).toBeVisible();
    await page.getByRole("link", { name: /15 Real Grok Bot Projects/ }).click();
    await expect(page).toHaveURL(/\/blog\/real-grok-bot-projects/);
    await expect(page.getByRole("navigation", { name: "Related guide pages" })).toBeVisible();
  });
});

test.describe("jobs", () => {
  test("filters by group, searches, and shows an empty state", async ({ page, isMobile }) => {
    await page.goto("/jobs");
    const count = page.getByText(/jobs? (in total|for|matching)/);
    await expect(count).toHaveText("56 jobs in total");
    if (isMobile) await page.getByLabel("Category", { exact: true }).selectOption("Hiring");
    else await page.getByRole("button", { name: /^Hiring/ }).click();
    await expect(count).toHaveText("4 jobs for hiring");
    if (isMobile) await page.getByLabel("Category", { exact: true }).selectOption("All");
    else await page.getByRole("button", { name: /^All/ }).click();
    await page.getByLabel("Search jobs").fill("receipt");
    await expect(count).toHaveText("1 job matching");
    await expect(page.locator("article")).toHaveCount(1);
    await expect(page.locator("article")).toContainText("Recurring · Low oversight");
    await page.getByLabel("Search jobs").fill("zzzz-nothing");
    await expect(page.getByText("No jobs match that search.")).toBeVisible();
    await page.getByRole("button", { name: "Clear search" }).click();
    await expect(count).toHaveText("56 jobs in total");
  });

  test("shows six good first jobs when browsing, and opens a job in a dialog", async ({ page, isMobile }) => {
    await page.goto("/jobs");
    const starters = page.locator("#starters article");
    await expect(starters).toHaveCount(6);
    await page.locator("#starters").getByRole("button", { name: "Expenses" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: "Expenses" })).toBeVisible();
    await expect(dialog).toContainText("Every Friday, pull the week's expenses together");
    await expect(dialog.getByRole("link", { name: /Open in Grok Bot/ })).toHaveAttribute("href", /x\.ai\/bot/);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    if (isMobile) await page.getByLabel("Category", { exact: true }).selectOption("Hiring");
    else await page.getByRole("button", { name: /^Hiring/ }).click();
    await expect(page.locator("#starters")).toHaveCount(0);
  });
});

test.describe("first week", () => {
  test("switches stages by click, Next, and keyboard", async ({ page }) => {
    await page.goto("/getting-started#first-week");
    const tabs = page.getByRole("tablist", { name: "Your first week, by stage" });
    const panel = page.locator("#first-week [role=tabpanel]:not([hidden])");
    await expect(panel).toContainText("01 / 04");
    await tabs.getByRole("tab", { name: /Delegate/ }).click();
    await expect(panel).toContainText("02 / 04");
    await expect(panel).toContainText("Nothing sends, nothing pays");
    await expect(page.getByRole("button", { name: "Next stage" })).toContainText("Refine");
    await page.getByRole("button", { name: "Next stage" }).click();
    await expect(panel).toContainText("03 / 04");
    await tabs.getByRole("tab", { selected: true }).press("ArrowRight");
    await expect(panel).toContainText("04 / 04");
    await tabs.getByRole("tab", { selected: true }).press("ArrowRight");
    await expect(panel).toContainText("01 / 04");
  });
});

test.describe("avatar studio", () => {
  test("shape, colour and expression selection update the preview", async ({ page }) => {
    await page.goto("/avatar-system");
    const studio = page.locator("#studio");
    const preview = studio.getByRole("img", { name: /avatar/ });
    await expect(preview).toHaveAccessibleName(/Pebble Blue avatar, Happy/);

    await studio.getByRole("radio", { name: "Triangle" }).click();
    await expect(preview).toHaveAccessibleName(/Triangle Blue avatar, Happy/);

    await studio.getByRole("radio", { name: "Red", exact: true }).click();
    await expect(preview).toHaveAccessibleName(/Triangle Red avatar, Happy/);

    await studio.getByRole("radio", { name: "Sleepy" }).click();
    await expect(preview).toHaveAccessibleName(/Triangle Red avatar, Sleepy/);

    await studio.getByRole("button", { name: "Reset" }).click();
    await expect(preview).toHaveAccessibleName(/Pebble Blue avatar, Happy/);
  });

  test("animation state selection shows the chosen export", async ({ page }) => {
    await page.goto("/avatar-system#states");
    const group = page.getByRole("radiogroup", { name: "Animation state" });
    await expect(group.getByRole("radio")).toHaveCount(15);
    await group.getByRole("radio", { name: "Comet" }).click();
    await expect(group.getByRole("radio", { name: "Comet" })).toHaveAttribute("aria-checked", "true");
    await expect(page.getByRole("img", { name: "Comet state preview" })).toBeVisible();
  });
});

test.describe("first job checklist", () => {
  test("counts ticks and gives a verdict at three", async ({ page }) => {
    await page.goto("/getting-started#first-task");
    const box = page.locator("#first-task");
    await expect(box).toContainText("0/4");
    for (const name of ["Repeatable", "Easy to review", "Not irreversible"]) {
      await box.getByRole("checkbox", { name: new RegExp(name) }).check();
    }
    await expect(box).toContainText("3/4");
    await expect(box).toContainText("Looks like a good first job.");
  });
});

test.describe("local navigation", () => {
  for (const href of ["/avatar-system", "/trust-and-cost"]) {
    test(`${href} has an on-this-page nav whose links resolve`, async ({ page }) => {
      await page.goto(href);
      const nav = page.getByRole("navigation", { name: "On this page" });
      const links = nav.getByRole("link");
      expect(await links.count()).toBeGreaterThan(2);
      for (const l of await links.all()) {
        const id = (await l.getAttribute("href"))!.slice(1);
        await expect(page.locator(`#${id}`)).toHaveCount(1);
      }
    });
  }
  for (const href of ["/", "/how-it-works", "/getting-started", "/jobs"]) {
    test(`${href} has no on-this-page nav`, async ({ page }) => {
      await page.goto(href);
      await expect(page.getByRole("navigation", { name: "On this page" })).toHaveCount(0);
    });
  }
});

test.describe("prompts", () => {
  test("copy button writes to the clipboard and shows feedback", async ({ page, context, browserName }) => {
    test.skip(browserName !== "chromium", "clipboard permissions are chromium-only in tests");
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/getting-started");
    const btn = page.getByRole("button", { name: "Copy: Expenses" });
    await btn.click();
    await expect(btn).toHaveText("Copied");
    const text = await page.evaluate(() => navigator.clipboard.readText());
    expect(text).toContain("Every Friday, pull the week's expenses together");
    await expect(btn).toHaveText("Copy prompt", { timeout: 3000 });
  });
});

test.describe("responsive", () => {
  for (const width of [320, 375, 390, 430, 768, 820, 1024, 1280, 1440]) {
    for (const r of ROUTES) {
      test(`no horizontal overflow at ${width}px on ${r.href}`, async ({ page, isMobile }) => {
        test.skip(isMobile, "viewport is fixed on the mobile project");
        await page.setViewportSize({ width, height: 900 });
        await page.goto(r.href);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow).toBeLessThanOrEqual(0);
      });
    }
  }
});
