export const PAGE_SEO = {
  "/": {
    "title": "Grok Bot Explained — A Practical Guide to xAI’s Always-On Helpers",
    "description": "A clear, practical guide to Grok Bot: what it is, how it works, what makes it different, and where to start if you want to use xAI’s always-on helpers.",
    "ogTitle": "Grok Bot Explained",
    "ogDescription": "What Grok Bot is, how it works, and how to start using xAI’s always-on helpers.",
    "headline": "They never log off.",
    "support": "A practical guide to Grok Bot — xAI’s always-on helpers."
  },
  "/how-it-works": {
    "title": "How Grok Bot Works — Persistent AI Helpers Explained",
    "description": "Understand how Grok Bot works: cloud computers, repeated tasks, schedules, tool use, decision handoffs, and what happens when a helper keeps working.",
    "ogTitle": "How Grok Bot Works",
    "ogDescription": "A plain-English explanation of how Grok Bot helpers work, from setup to schedules, tools, and handoffs.",
    "headline": "How Grok Bot works",
    "support": "From assignment to tool use, schedules, and returning when a decision is needed."
  },
  "/jobs": {
    "title": "56 Jobs You Could Hand Over to Grok Bot",
    "description": "Browse 56 practical Grok Bot jobs across research, operations, writing, marketing, recruiting, travel, and personal admin — organized by category and oversight level.",
    "ogTitle": "56 Jobs You Could Hand Over",
    "ogDescription": "Practical Grok Bot jobs you can hand over, from inbox sorting and research to travel, reporting, and recurring admin work.",
    "headline": "56 jobs you could hand over",
    "support": "Practical Grok Bot use cases across research, writing, operations, recruiting, travel, and personal admin."
  },
  "/avatar-system": {
    "title": "Grok Bot Avatar System — Shapes, Colours, Expressions & Animations",
    "description": "Explore the Grok Bot avatar system: shapes, colours, expressions, state previews, and a live studio showing how the character is customized.",
    "ogTitle": "Grok Bot Avatar System",
    "ogDescription": "Explore Grok Bot’s avatar system: 8 shapes, 12 colours, 16 expressions, and 15 state previews.",
    "headline": "Avatar system",
    "support": "Shapes, colours, expressions and state previews."
  },
  "/getting-started": {
    "title": "Getting Started With Grok Bot — What to Say and Your First Week",
    "description": "Learn how to get started with Grok Bot: what to say on day one, how to pick a good first job, and how to approach your first week step by step.",
    "ogTitle": "Getting Started With Grok Bot",
    "ogDescription": "What to say on day one, how to choose a first task, and how to structure your first week with Grok Bot.",
    "headline": "Getting started",
    "support": "What to say on day one, how to pick a first job, and how to structure your first week."
  },
  "/trust-and-cost": {
    "title": "What to Trust Grok Bot With — Oversight, Control & Cost",
    "description": "Learn what to hand over to Grok Bot, what to review, what to keep control of, and how to think about costs, plans, and predictable usage.",
    "ogTitle": "What to Trust Grok Bot With",
    "ogDescription": "A practical guide to delegation, oversight, and cost: what Grok Bot can run alone, what needs review, and how to keep usage predictable.",
    "headline": "What to trust it with",
    "support": "What to hand over, what to review, what to keep control of, and how to keep costs predictable."
  },
  "/sources": {
    "title": "Sources & Methodology — Grok Bot Explained",
    "description": "See where the information in this guide comes from: official Grok Bot pages, xAI documentation, community avatar research, and the methodology behind this guide.",
    "ogTitle": "Sources & Methodology",
    "ogDescription": "Official sources, community references, and the methodology behind this Grok Bot guide.",
    "headline": "Sources & methodology",
    "support": "Official pages, community references, and the methodology behind this guide."
  }
} as const;
export type SeoPath = keyof typeof PAGE_SEO;
export function seoPage(href: string) {
  if (!(href in PAGE_SEO)) throw new Error(`Unknown SEO page: ${href}`);
  return PAGE_SEO[href as SeoPath];
}
export const ogPath = (href: string) => `/og/${href === "/" ? "overview" : href.slice(1)}.png`;
