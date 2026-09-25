export type SourceKind = "official" | "community" | "outside";

export interface Source {
  title: string;
  href: string;
  description: string;
  kind: SourceKind;
}

export const SOURCES_INTRO =
  "This guide is based on xAI's own pages, plus one outside write-up for the honest bits. Older reviews still quote prices and plan limits that have already changed. This is a fast-moving product, so check anything important at the source.";

export const SOURCES: Source[] = [
  // Official
  { kind: "official", title: "Grok Bot — the official page", href: "https://x.ai/bot", description: "Product page, plans and platforms. The source for what it is and where it runs." },
  { kind: "official", title: "Introducing Grok Bot", href: "https://x.ai/news/introducing-grok-bot", description: "The launch announcement, August 2026: the cloud computer, showing it once, schedules." },
  { kind: "official", title: "The full list of ready-made helpers", href: "https://x.ai/bot/use-cases", description: "All 56 jobs on the Jobs page come from here. Titles and descriptions are rewritten in plain English." },
  { kind: "official", title: "Ready-made helpers marketplace", href: "https://x.ai/bot/marketplace", description: "Where the eight day-one messages link to; each opens xAI's own version of that helper." },
  { kind: "official", title: "xAI's guides", href: "https://x.ai/bot/guides", description: "Official how-tos, linked from Getting started, Blog, and In the wild." },
  { kind: "official", title: "Grok Bot for Marketing", href: "https://x.ai/bot/guides/grok-bot-for-marketing", description: "Six-seat marketing team used on Blog and In the wild." },
  { kind: "official", title: "Grok Bot for Engineering", href: "https://x.ai/bot/guides/grok-bot-for-engineering", description: "Engineering fleet supervising cloud agents; source for official engineering examples." },
  { kind: "official", title: "Grok Bot for GTM", href: "https://x.ai/bot/guides/grok-bot-for-gtm", description: "Enterprise GTM roster: Chief of Staff, prospecting, forecasting, slides." },
  { kind: "official", title: "Grok Bot for PMs", href: "https://x.ai/bot/guides/grok-bot-for-pms", description: "PM agent team and attention-list pattern." },
  { kind: "official", title: "Grok Bot for mobile app development", href: "https://x.ai/bot/guides/grok-bot-for-mobile-app-development", description: "Rank'em six-bot mobile studio example." },
  { kind: "official", title: "Create and manage Bots", href: "https://docs.x.ai/grok-bot/bots", description: "Official guidance on when to create separate Bots and approval boundaries." },
  { kind: "official", title: "Grok Bot FAQ", href: "https://docs.x.ai/grok-bot/faq", description: "xAI's official questions and answers." },
  { kind: "official", title: "Grok Bot for enterprise", href: "https://x.ai/news/grok-bot-for-enterprise", description: "How companies are using it, September 2026." },
  { kind: "official", title: "More plans", href: "https://x.ai/news/grok-bot-more-plans", description: "Further plans that include helpers." },
  { kind: "official", title: "Grok Bot and X", href: "https://x.ai/news/grok-bot-and-x", description: "The X connector: searching posts, reading your timeline, checking mentions, and the free API credits." },
  { kind: "official", title: "Designing Grok Bot", href: "https://x.ai/news/designing-grok-bot", description: "xAI's design write-up. The source for the six working moods on the Avatar system page." },
  // Community
  { kind: "community", title: "Jérémy Perret — bloub", href: "https://github.com/jeremy-prt/bloub", description: "Open-source SVG recreation of the avatar. Background for the procedural avatar recreation, its shapes, faces and colours. The current preview artwork comes from supplied exports." },
  { kind: "community", title: "grokbots.ai/studio", href: "https://grokbots.ai/studio", description: "Community avatar studio built on bloub: pick a shape, expression and colour, play every animation, download it as a picture. Not xAI's." },
  { kind: "community", title: "GrokBotDev", href: "https://github.com/ZeroPointRepo/GrokBotDev", description: "Open, agent-run directory of Grok Bot prompts, plugins and use cases. Catalogued on In the wild." },
  { kind: "community", title: "UseGrokBot", href: "https://github.com/a70win-wq/usegrokbot", description: "Searchable library of public Grok Bot workflows with attribution." },
  { kind: "community", title: "botdirectory.ai", href: "https://github.com/elie222/botdirectory.ai", description: "Git-backed directory of reusable agent-bot briefs." },
  { kind: "community", title: "grokbot-for-gtm", href: "https://github.com/bcharleson/grokbot-for-gtm", description: "Open-source outbound GTM playbook for Grok Bot." },
  { kind: "community", title: "grokbot.dev marketing index", href: "https://grokbot.dev/categories/marketing/", description: "Community index of marketing plugins and use cases, including Marketing OS." },
  // Outside
  { kind: "outside", title: "Vellum — an outside review of the limits", href: "https://www.vellum.ai/blog/official-grok-bot-breakdown", description: "An independent breakdown of the limits, used for the honest bits." },
];

export const SOURCE_GROUPS: { kind: SourceKind; title: string; blurb: string }[] = [
  { kind: "official", title: "Official", blurb: "xAI's own product pages, announcements and documentation. Treated as fact, dated to when they were read." },
  { kind: "community", title: "Community", blurb: "Avatar research plus public GitHub and community indexes catalogued on In the wild. Ecosystem entries are labeled community, not independently verified product claims." },
  { kind: "outside", title: "Other references", blurb: "Independent write-ups. Used where xAI's pages are quiet, and checked against them." },
];

export const METHODOLOGY = [
  {
    title: "What is official",
    body: "Everything about what Grok Bot does, which plans include it, what it costs, where it runs and how usage is metered comes from xAI's pages listed above. Where a number appears in this guide, it appears on one of those pages.",
  },
  {
    title: "What is inferred",
    body: "The 'Best as' and 'Oversight' tags on the Jobs page, the three trust levels, the oversight matrix and the first-week plan are this guide's reading of xAI's descriptions and its own advice. They are labelled as suggestions, not as product features.",
  },
  {
    title: "What comes from community implementations",
    body: "The avatar page uses supplied PNG exports for the eight shape thumbnails, sixteen face thumbnails and fifteen state previews, including Swirl. The studio falls back to an original SVG approximation for unexported combinations. Its fourteen procedural loops are separate from the exported stills. xAI's design write-up is the source for the six working moods only.",
  },
  {
    title: "Where labels are normalised",
    body: "xAI uses 'bot', 'agent' and 'Grok Bot' in different places; this guide says 'helper' throughout for a non-technical reader. Job titles are shortened and descriptions rewritten in plain English; each keeps the meaning of xAI's own listing.",
  },
  {
    title: "Last verified",
    body: "This guide was last updated on the date shown at the top of this page. Prices and plan inclusion have already changed more than once since launch; treat anything about cost as a snapshot and check it at the source.",
  },
];
