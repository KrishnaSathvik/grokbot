/** Blog posts — narrower intent than the seven guide pillars. */

import { BLOG_CLUSTER_POSTS } from "./blog-cluster";

export type ContentBadge = "OFFICIAL" | "GITHUB" | "X / COMMUNITY" | "MEDIUM" | "MARKETPLACE";
export type BlogGroup = "start" | "role" | "workflow";

export interface BlogBlock {
  type: "p" | "h2" | "h3" | "quote" | "ul" | "table";
  text?: string;
  items?: string[];
  badge?: ContentBadge;
  /** Outbound link for a project heading (official guide, Marketplace, GitHub, etc.). */
  href?: string;
  headers?: string[];
  rows?: string[][];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  publishedAt: string;
  modifiedAt: string;
  category: string;
  group: BlogGroup;
  related: Array<{ href: string; label: string }>;
  blocks: BlogBlock[];
}

export const BLOG_INTRO =
  "Narrower explainers than the seven pillars: real projects, Marketplace tours, role playbooks, and operating guides. Written to answer a specific search—and to send you back into Jobs, Getting started, Trust & cost, or In the wild when you are ready to act.";

export const BLOG_SECTIONS: Array<{ id: BlogGroup; title: string; blurb: string }> = [
  { id: "start", title: "Start here", blurb: "Projects, team setup and the Marketplace—orientation before role deep-dives." },
  { id: "role", title: "By role", blurb: "Marketing, engineering, sales & GTM, product and Chief of Staff." },
  { id: "workflow", title: "Build better workflows", blurb: "SEO & AEO, GitHub, security and X—cross-cutting operating guides." },
];

const STARTER_POSTS: BlogPost[] = [
  {
    slug: "real-grok-bot-projects",
    title: "15 Real Grok Bot Projects and Workflows People Are Building",
    seoTitle: "15 Real Grok Bot Projects and Workflows People Are Building in 2026",
    description:
      "From mobile apps and marketing teams to GTM workflows, engineering fleets and open-source directories, here are real Grok Bot projects published by xAI and the community.",
    ogTitle: "15 Real Grok Bot Projects",
    ogDescription: "Official and community Grok Bot projects people are actually publishing in 2026.",
    publishedAt: "2026-09-24",
    modifiedAt: "2026-09-24",
    category: "Projects",
    group: "start",
    related: [
      { href: "/in-the-wild", label: "In the wild" },
      { href: "/jobs", label: "56 jobs" },
      { href: "/getting-started", label: "Getting started" },
    ],
    blocks: [
      {
        type: "p",
        text: "Grok Bot has only been public since August 2026, but the interesting part is already moving beyond demos.",
      },
      {
        type: "p",
        text: "People are not only asking Bots questions. They are giving them persistent jobs, connecting them to tools, having specialized Bots hand work to one another, and publishing the systems that result.",
      },
      {
        type: "p",
        text: "Some examples below come directly from xAI. Others are open-source projects or community builds. Those distinctions matter: an official case tells us what the product is designed to support; a community post tells us what someone says they built, not necessarily what has been independently verified.",
      },
      { type: "h2", text: "1. A six-Bot mobile game studio", href: "https://x.ai/bot/guides/grok-bot-for-mobile-app-development", badge: "OFFICIAL" },
      {
        type: "p",
        text: "One of xAI’s most concrete examples is Rank’em, a mobile game operated with a team of six Grok Bots. Different Bots handle different parts of the work around the app, including analytics and user acquisition. The author reported that the game had crossed 1,000 iOS and Android downloads during the week described in the guide.",
      },
      {
        type: "p",
        text: "The useful lesson is not “AI built a game.” It is the division of labor. One persistent agent is not being asked to remember every job in the company.",
      },
      { type: "h2", text: "2. An engineering team managing other coding agents", href: "https://x.ai/bot/guides/grok-bot-for-engineering", badge: "OFFICIAL" },
      {
        type: "p",
        text: "An xAI engineering guide describes Grok Bots supervising cloud coding agents, checking work and keeping engineering jobs moving while the human is away. The post also reports significant internal development output, including an early Grok Bot iOS build completed using Grok Bot.",
      },
      {
        type: "p",
        text: "This suggests a different use for persistent agents: managing agent work, not necessarily writing every line themselves.",
      },
      { type: "h2", text: "3. A six-seat marketing department", href: "https://x.ai/bot/guides/grok-bot-for-marketing", badge: "OFFICIAL" },
      {
        type: "p",
        text: "Another official guide describes six marketing roles: Market Researcher, Product Marketer, Performance Marketer, Website Ops, Marketing Analyst and Project Manager.",
      },
      {
        type: "p",
        text: "Research can flow into positioning in Google Docs, approved copy into Google Ads structures, page briefs into code and GitHub PRs, and campaign data back into analysis. The human still owns the judgment layer and live-account approvals.",
      },
      { type: "h2", text: "4. A GTM team that works overnight", href: "https://x.ai/bot/guides/grok-bot-for-gtm", badge: "OFFICIAL" },
      {
        type: "p",
        text: "xAI’s GTM guide includes a Chief of Staff, prospecting Bot, customer experts, forecasting, slides and sales coaching. The prospecting setup can research accounts overnight and leave material ready for review the next morning.",
      },
      { type: "h2", text: "5. A PM with an agent team", href: "https://x.ai/bot/guides/grok-bot-for-pms", badge: "OFFICIAL" },
      {
        type: "p",
        text: "xAI product manager Kevin Niparko describes using specialized Bots for engineering management, engineering, analytics, product work and recruiting. One particularly interesting idea is an attention list generated from the work actually happening across Slack, email, meetings and calendar activity.",
      },
      { type: "h2", text: "6. Projects Manager", href: "https://x.ai/bot/marketplace/bots/projects-manager", badge: "MARKETPLACE" },
      {
        type: "p",
        text: "The official Marketplace includes Projects Manager, which uses Notion projects and tasks as an operating layer for specialist Bots. The manager coordinates; the specialists execute.",
      },
      { type: "h2", text: "7. SEO & AEO Desk", href: "https://x.ai/bot/marketplace", badge: "MARKETPLACE" },
      {
        type: "p",
        text: "The Marketplace’s SEO & AEO Desk converts keyword or Search Console input into content ideas and writer-ready briefs.",
      },
      { type: "h2", text: "8. Stalk Bot", href: "https://x.ai/bot/marketplace/product", badge: "MARKETPLACE" },
      {
        type: "p",
        text: "Stalk Bot takes competitive research unusually far: its Marketplace description says it can sign up for competitor newsletters and products, walk onboarding, and monitor pricing, changelogs, hiring and X.",
      },
      { type: "h2", text: "9. GrokBotDev", href: "https://github.com/ZeroPointRepo/GrokBotDev", badge: "GITHUB" },
      {
        type: "p",
        text: "The open-source GrokBotDev project turns Grok Bot discovery itself into an agent-run operation. Scout agents look for public examples, a curator decides what belongs, and a builder maintains the site through reviewable pull requests.",
      },
      { type: "h2", text: "10. UseGrokBot", href: "https://github.com/a70win-wq/usegrokbot", badge: "GITHUB" },
      {
        type: "p",
        text: "UseGrokBot is another open-source attempt to organize the ecosystem. It collects public workflows, preserves attribution, assigns trust labels, and connects interesting examples to reusable workflows.",
      },
      { type: "h2", text: "11. botdirectory.ai", href: "https://github.com/elie222/botdirectory.ai", badge: "GITHUB" },
      {
        type: "p",
        text: "botdirectory.ai stores reusable agent jobs as Markdown and uses GitHub as the contribution workflow. Its examples include email triage, daily briefings, SEO work and churn monitoring.",
      },
      { type: "h2", text: "12. An open-source GTM operating system", href: "https://github.com/bcharleson/grokbot-for-gtm", badge: "GITHUB" },
      {
        type: "p",
        text: "The grokbot-for-gtm repository packages a complete outbound workflow: account research, cold email, LinkedIn activity, reply handling and meeting logging.",
      },
      { type: "h2", text: "13. Physical-world and home experiments", href: "https://x.ai/bot/marketplace/personal", badge: "MARKETPLACE" },
      {
        type: "p",
        text: "The ecosystem is already moving outside browser-only knowledge work. The official Marketplace includes Home robots and Flora for plant care—exactly the kinds of projects worth watching because they reveal what happens when persistent agents gain narrow tools rather than being asked to “do everything.”",
      },
      { type: "h2", text: "14. An open-source marketing OS", href: "https://grokbot.dev/categories/marketing/", badge: "X / COMMUNITY" },
      {
        type: "p",
        text: "Community indexes have documented a public Marketing OS built around Grok Bot with modules for audits, copy, ads, GEO, email, social, launches and positioning. This belongs in the community example bucket rather than the official-capability bucket.",
      },
      { type: "h2", text: "15. last30days research Bot", href: "https://x.ai/bot/marketplace/product", badge: "MARKETPLACE" },
      {
        type: "p",
        text: "last30days researches what people actually say about a topic across Reddit, X, YouTube, TikTok, Hacker News, GitHub and the web—then writes a grounded brief. It is a strong Marketplace example of multi-source research with receipts.",
      },
      { type: "h2", text: "The pattern behind the interesting builds", href: "https://docs.x.ai/grok-bot/bots" },
      {
        type: "p",
        text: "The best examples do not start with “make me an AI employee.” They start with a job.",
      },
      {
        type: "p",
        text: "A useful Bot usually has a narrow outcome, a known set of tools, a repeatable workflow and a clear point where a person reviews or approves the result. That is also consistent with xAI’s current guidance for creating Bots.",
      },
      {
        type: "p",
        text: "Next: browse the full discovery list on In the wild, or jump to the 56 jobs catalogue and Getting started.",
      },
    ],
  },
  {
    slug: "grok-bot-team-workflows",
    title: "How to Build a Team of Grok Bots Without Creating Chaos",
    seoTitle: "How to Build a Team of Grok Bots Without Creating Chaos",
    description:
      "A practical framework for dividing work between multiple Grok Bots, using specialist roles, handoffs, routines and human approval without building an unmanageable agent org.",
    ogTitle: "Grok Bot Team Workflows",
    ogDescription: "Specialize when jobs differ—don’t add Bots for the sake of an org chart.",
    publishedAt: "2026-09-24",
    modifiedAt: "2026-09-24",
    category: "Teams",
    group: "start",
    related: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/trust-and-cost", label: "Trust & cost" },
      { href: "/getting-started", label: "Getting started" },
    ],
    blocks: [
      {
        type: "p",
        text: "A lot of public Grok Bot screenshots now look like org charts.",
      },
      {
        type: "p",
        text: "Research Bot. Marketing Bot. Engineering Bot. Finance Bot. Chief of Staff.",
      },
      {
        type: "p",
        text: "The tempting conclusion is that more Bots means more automation. The public examples suggest something slightly different: specialization helps when the jobs are genuinely different; adding Bots for the sake of having a team does not.",
      },
      {
        type: "p",
        text: "xAI’s own Bot guidance recommends creating separate Bots when work has a distinct goal, set of tools, working style, approval boundary or recurring schedule.",
      },
      {
        type: "p",
        text: "That gives us a much better rule than “one Bot per department.”",
      },
      { type: "h2", text: "Start with one job that produces an observable result" },
      {
        type: "p",
        text: "A good first role might be Morning Briefing: it reads the sources you specify and produces one report.",
      },
      {
        type: "p",
        text: "Not General Assistant, which could theoretically touch everything and has no obvious definition of done.",
      },
      { type: "h2", text: "Add another Bot only when the job changes" },
      {
        type: "p",
        text: "The official marketing setup is a good example. Research, positioning, ads, website work and analytics are separate jobs because they operate on different artifacts and require different judgment. A Project Manager only becomes useful once those handoffs become painful.",
      },
      {
        type: "p",
        text: "That suggests a practical progression:",
      },
      {
        type: "quote",
        text: "one specialist → two specialists with a handoff → coordinator only when coordination becomes work",
      },
      { type: "h2", text: "Give each Bot an approval boundary" },
      {
        type: "p",
        text: "The official examples repeatedly preserve human approval for important external or irreversible actions. xAI’s GTM and product guides both describe keeping humans involved in sends, purchases, destructive changes and other consequential actions.",
      },
      {
        type: "p",
        text: "A Bot job description therefore needs two parts:",
      },
      {
        type: "ul",
        items: [
          "Own: what it should finish.",
          "Do not do without approval: what still belongs to you.",
        ],
      },
      { type: "h2", text: "Let memory stay local to the job" },
      {
        type: "p",
        text: "One reason specialized Bots are useful is scoped context. The engineering manager needs engineering conventions. The sales Bot needs account context. The writing Bot needs voice.",
      },
      {
        type: "p",
        text: "Trying to make every Bot know everything makes the system harder to understand and harder to correct.",
      },
      { type: "h2", text: "Use one front door only when you need one" },
      {
        type: "p",
        text: "A Chief of Staff pattern appears repeatedly in public setups. It can receive the request, call a specialist and bring the result back.",
      },
      {
        type: "p",
        text: "But the coordinator is not automatically the first Bot you should create. If you only have one useful workflow, introducing a manager for it is overhead.",
      },
      { type: "h2", text: "The goal is not a bigger roster" },
      {
        type: "p",
        text: "The goal is to reach the point where work can move:",
      },
      {
        type: "quote",
        text: "job → specialist → review/approval → finished result",
      },
      {
        type: "p",
        text: "without forcing you to babysit every intermediate step. That is the useful shift from chat to delegation.",
      },
    ],
  },
  {
    slug: "grok-bot-marketplace-guide",
    title: "Grok Bot Marketplace Guide: Bots and Templates Worth Studying",
    seoTitle: "Grok Bot Marketplace Guide: Bots and Templates Worth Studying",
    description:
      "A practical tour of the Grok Bot Marketplace, including engineering, marketing, sales, product and personal Bots—and what to check before adding one.",
    ogTitle: "Grok Bot Marketplace Guide",
    ogDescription: "Useful Marketplace Bots to study—and what to inspect before you add one.",
    publishedAt: "2026-09-24",
    modifiedAt: "2026-09-25",
    category: "Marketplace",
    group: "start",
    related: [
      { href: "/getting-started", label: "Getting started" },
      { href: "/in-the-wild", label: "In the wild" },
      { href: "/jobs", label: "56 jobs" },
    ],
    blocks: [
      {
        type: "p",
        text: "The Grok Bot Marketplace is becoming one of the easiest ways to understand what people think persistent AI agents are actually good for.",
      },
      {
        type: "p",
        text: "Instead of starting from a blank prompt, you can inspect Bots built around specific jobs.",
      },
      {
        type: "p",
        text: "The official Marketplace currently lists on the order of eighty public templates across engineering, sales, marketing, design, personal work, recruiting, product and operations—with a Featured row that rotates notable bots.",
      },
      { type: "h2", text: "Haggle Bot", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/haggle-bot" },
      {
        type: "p",
        text: "From Grok Bot Team: maps vendor spend, unused seats and renewals, then drafts negotiation moves. xAI’s procurement write-up is the best public case study—savings figures are author-reported, and every vendor-facing send still needs a human yes.",
      },
      { type: "h2", text: "Projects Manager", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/projects-manager" },
      {
        type: "p",
        text: "Projects Manager turns Notion projects and tasks into a coordination layer for specialist Bots.",
      },
      {
        type: "p",
        text: "What makes it interesting is what it doesn’t do: it manages the project rather than pretending to be every specialist itself.",
      },
      { type: "h2", text: "SEO & AEO Desk", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/seo-aeo-desk" },
      {
        type: "p",
        text: "This Bot takes keyword input or Search Console data and turns it into content ideas and writer-ready briefs.",
      },
      {
        type: "p",
        text: "For teams experimenting with agent-assisted content operations, this is a more grounded starting point than “write 100 SEO posts.”",
      },
      { type: "h2", text: "Researchy", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/researchy" },
      {
        type: "p",
        text: "Researchy is positioned as a sourced research and fact-check desk using live search. That makes it useful to study if your Bot’s output needs dated evidence rather than pure model memory.",
      },
      { type: "h2", text: "Lingxi’s Engineer Bot", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/engineer-bot" },
      {
        type: "p",
        text: "This one acts more like an engineering supervisor: it boards work, launches cloud coding agents, watches pull requests and escalates merge decisions.",
      },
      { type: "h2", text: "Stalk Bot", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/stalk-bot" },
      {
        type: "p",
        text: "Stalk Bot is a competitor-intelligence setup that monitors products, newsletters, pricing, jobs, changelogs and public X activity.",
      },
      { type: "h2", text: "Flora", badge: "MARKETPLACE", href: "https://x.ai/bot/marketplace/bots/flora" },
      {
        type: "p",
        text: "Not every Bot is corporate. Flora keeps a private plant-care log and weekly reminders, showing how persistent memory plus a routine can produce a useful personal workflow.",
      },
      { type: "h2", text: "What to inspect before adding a Bot" },
      {
        type: "p",
        text: "A good Marketplace entry should make four things obvious:",
      },
      {
        type: "ul",
        items: [
          "What does it own?",
          "What tools does it need?",
          "What can it change?",
          "Where does it stop for approval?",
        ],
      },
      {
        type: "p",
        text: "If those answers are fuzzy, installing the Bot does not make the job clearer.",
      },
      {
        type: "p",
        text: "Treat a template as a starting configuration, not as proof that a workflow is safe or appropriate for your accounts.",
      },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [...STARTER_POSTS, ...BLOG_CLUSTER_POSTS];

export function blogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function blogPostsInGroup(group: BlogGroup): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.group === group);
}
