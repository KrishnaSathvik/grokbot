/** Public Grok Bot projects for /in-the-wild. Verified against public sources on lastChecked. */

export type WildSource = "Official" | "X" | "GitHub" | "Medium" | "Marketplace";
export type WildStatus = "Official" | "Community";
export type WildSection = "guides" | "marketplace" | "community";
export type WildEvidence =
  | "Official guide"
  | "Official Marketplace"
  | "Official news"
  | "Public repository"
  | "Community index"
  | "Public X-derived record";

export type WildFilter =
  | "All"
  | "Official"
  | "X"
  | "GitHub"
  | "Medium"
  | "Marketplace"
  | "Engineering"
  | "Marketing"
  | "Personal";

export const WILD_FILTERS: WildFilter[] = [
  "All",
  "Official",
  "X",
  "GitHub",
  "Medium",
  "Marketplace",
  "Engineering",
  "Marketing",
  "Personal",
];

export const WILD_SECTIONS: Array<{ id: WildSection; label: string; title: string; blurb: string }> = [
  {
    id: "guides",
    label: "From xAI",
    title: "Official team walkthroughs",
    blurb: "Multi-bot setups published as guides by xAI authors—the clearest picture of how Grok Bot is meant to work as a team.",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    title: "Importable bots worth studying",
    blurb: "Hand-picked templates from the public Marketplace. Import them, then tighten permissions before anything can send or spend.",
  },
  {
    id: "community",
    label: "Open source",
    title: "Directories, playbooks and experiments",
    blurb: "Public repos and community indexes. Useful for discovery and contribution—not product certification.",
  },
];

export interface WildProject {
  slug: string;
  project: string;
  creator: string;
  source: WildSource;
  section: WildSection;
  whatItDoes: string;
  evidence: WildEvidence;
  status: WildStatus;
  lastChecked: string;
  lastCheckedLabel: string;
  href: string;
  /** Extra filter tags beyond source (Engineering / Marketing / Personal). */
  domains: Array<"Engineering" | "Marketing" | "Personal">;
  /** Longer summary for the detail page. */
  summary: string;
  /** Concrete takeaways for the detail page. */
  takeaways: string[];
  /** Job categories this relates to on /jobs. */
  relatedJobsHref?: string;
  relatedGuideHref?: string;
}

const CHECKED = "2026-09-25";
const CHECKED_LABEL = "Sep 25, 2026";

export const WILD_INTRO =
  "A curated look at real Grok Bot work in public: xAI team guides, Marketplace templates you can import, and open-source directories people are building around them. We write what each one actually does—and where human approval still matters.";

export const WILD_PROJECTS: WildProject[] = [
  {
    slug: "rankem-mobile-game-studio",
    project: "Rank'em mobile game studio",
    creator: "Ryan Perry",
    source: "Official",
    section: "guides",
    whatItDoes:
      "Six Grok Bots covering analytics, UA, development and other parts of running a mobile game. The author reports the app passed 1,000 downloads across iOS and Android during the referenced week.",
    evidence: "Official guide",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/guides/grok-bot-for-mobile-app-development",
    domains: ["Engineering", "Marketing"],
    summary:
      "xAI’s mobile-app guide walks through a six-seat studio for Rank’em: orchestrator, analytics/UA, creatives, engineering, infra/deploy, and QA. Handoffs between bots replace pasting context between chat windows. Download and retention claims are author-reported in the official guide.",
    takeaways: [
        "Read the handoffs between bots—not just the job titles.",
        "Note which steps require a human yes before anything ships.",
        "Compare the setup to a single-chat workflow you already run.",
      ],
    relatedJobsHref: "/jobs",
    relatedGuideHref: "/how-it-works",
  },
  {
    slug: "grok-bot-engineering-fleet",
    project: "Grok Bot engineering fleet",
    creator: "Lingxi Li",
    source: "Official",
    section: "guides",
    whatItDoes:
      "Bots supervising cloud coding agents and engineering work; xAI’s author reports Grok Bot iOS v0 was built in three weeks and describes substantial internal PR output.",
    evidence: "Official guide",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/guides/grok-bot-for-engineering",
    domains: ["Engineering"],
    summary:
      "An official engineering guide describes specialist engineer bots that launch and monitor cloud coding agents, review PRs on a cadence, and hand merge decisions back to a human when blast radius is high. Productivity figures (including iOS v0 in three weeks) are xAI-reported.",
    takeaways: [
        "Read the handoffs between bots—not just the job titles.",
        "Note which steps require a human yes before anything ships.",
        "Compare the setup to a single-chat workflow you already run.",
      ],
    relatedJobsHref: "/jobs",
    relatedGuideHref: "/trust-and-cost",
  },
  {
    slug: "six-bot-marketing-team",
    project: "Six-Bot marketing team",
    creator: "Josh Kim",
    source: "Official",
    section: "guides",
    whatItDoes:
      "Research → positioning → Google Docs → Google Ads → website PR → analytics, coordinated by a project-manager Bot.",
    evidence: "Official guide",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/guides/grok-bot-for-marketing",
    domains: ["Marketing"],
    summary:
      "Six marketing seats (researcher, product marketer, performance marketer, website ops, analyst, project manager) hand work through Docs, Ads, and GitHub PRs while the human owns judgment and live-account approvals.",
    takeaways: [
        "Read the handoffs between bots—not just the job titles.",
        "Note which steps require a human yes before anything ships.",
        "Compare the setup to a single-chat workflow you already run.",
      ],
    relatedJobsHref: "/jobs",
    relatedGuideHref: "/getting-started",
  },
  {
    slug: "enterprise-gtm-bot-team",
    project: "Enterprise GTM Bot team",
    creator: "Krista Letz",
    source: "Official",
    section: "guides",
    whatItDoes:
      "Chief of Staff, prospecting, customer experts, forecasting, slides and sales coaching across Gmail, Slack, Salesforce, Gong, Figma and other tools.",
    evidence: "Official guide",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/guides/grok-bot-for-gtm",
    domains: ["Marketing"],
    summary:
      "xAI’s GTM guide shows overnight prospecting, account experts, forecasting updates, Figma slides, and sales coaching—with the Chief of Staff as the main front door and humans still approving consequential sends.",
    takeaways: [
        "Read the handoffs between bots—not just the job titles.",
        "Note which steps require a human yes before anything ships.",
        "Compare the setup to a single-chat workflow you already run.",
      ],
    relatedJobsHref: "/jobs",
    relatedGuideHref: "/getting-started",
  },
  {
    slug: "pm-agent-team",
    project: "PM agent team",
    creator: "Kevin Niparko",
    source: "Official",
    section: "guides",
    whatItDoes:
      "Chief of Staff, engineering manager, five engineering Bots, analyst, PM and recruiter; includes an automatically maintained “attention list.”",
    evidence: "Official guide",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/guides/grok-bot-for-pms",
    domains: ["Engineering"],
    summary:
      "Product manager Kevin Niparko describes specialized bots plus an attention list generated from Slack, email, meetings and calendar—emergent priorities rather than a stale weekly goals doc.",
    takeaways: [
        "Read the handoffs between bots—not just the job titles.",
        "Note which steps require a human yes before anything ships.",
        "Compare the setup to a single-chat workflow you already run.",
      ],
    relatedJobsHref: "/jobs",
    relatedGuideHref: "/how-it-works",
  },
  {
    slug: "projects-manager",
    project: "Projects Manager",
    creator: "Eric Zakariasson",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Notion-based manager where project rows become channels and specialist Bots claim tasks.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/projects-manager",
    domains: [],
    summary:
      "Marketplace Bot that coordinates projects from Notion: one row per project, a channel per project, specialists claim tasks. It manages rather than doing every specialist job itself.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
    relatedGuideHref: "/getting-started",
  },
  {
    slug: "seo-aeo-desk",
    project: "SEO & AEO Desk",
    creator: "Adam Tanguay",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Turns keywords/Search Console input into content ideas and writer-ready briefs.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/seo-aeo-desk",
    domains: ["Marketing"],
    summary:
      "From Grok Bot Team on the Marketplace: paste keywords or connect Search Console to get content ideas and writer-ready briefs aimed at search and AI answers.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
    relatedJobsHref: "/jobs",
  },
  {
    slug: "stalk-bot",
    project: "Stalk Bot",
    creator: "Shub Gaur",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes:
      "Competitor research Bot that signs up for competitor products/newsletters and watches pricing, product, jobs and X.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/stalk-bot",
    domains: ["Marketing"],
    summary:
      "Marketplace product Bot that uses its own research email to walk competitor onboarding on video and pulse pricing, changelogs, jobs and X—never posting or contacting anyone.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
    relatedJobsHref: "/jobs",
  },
  {
    slug: "last30days",
    project: "last30days",
    creator: "Matt Van Horn",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Research Bot spanning Reddit, X, YouTube, TikTok, Hacker News, GitHub and the web.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/last30days",
    domains: ["Marketing"],
    summary:
      "Marketplace research Bot that installs the last30days skill and writes a grounded brief from recent public conversation across major platforms.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
    relatedJobsHref: "/jobs",
  },
  {
    slug: "researchy",
    project: "Researchy",
    creator: "Farzad",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Sourced research and fact-check desk using live web search.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/researchy",
    domains: ["Engineering"],
    summary:
      "Engineering Marketplace entry positioned as a research and fact-check desk that runs every pass with live web search for sourced, dated claims.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
    relatedJobsHref: "/jobs",
  },
  {
    slug: "lingxis-engineer-bot",
    project: "Lingxi's Engineer Bot",
    creator: "Lingxi Li",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Boards work, launches cloud coding agents, watches PRs, escalates merge decisions.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/engineer-bot",
    domains: ["Engineering"],
    summary:
      "Hands-off engineering supervisor on the Marketplace: boards work, launches cloud agents on a named repo, watches PRs on a cadence, and asks you to merge.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
    relatedJobsHref: "/jobs",
    relatedGuideHref: "/trust-and-cost",
  },
  {
    slug: "flora-plant-care",
    project: "Flora",
    creator: "Rich Silver",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Private plant-care log and weekly reminders on the Bot’s own computer.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/flora",
    domains: ["Personal"],
    summary:
      "Personal Marketplace Bot that keeps a private houseplant care log and weekly reminders—an example of persistent memory plus a routine outside corporate workflows.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
  },
  {
    slug: "home-robots",
    project: "Home robots",
    creator: "Sawyer Merritt",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Control home robots (mowers, vacuums, Matter devices) from chat after connecting once.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/home-robots",
    domains: ["Personal"],
    summary:
      "Personal Marketplace Bot for controlling supported home robots from chat—showing how persistent agents gain narrow physical-world tools.",
    takeaways: [
        "Import as a starting template, then edit permissions for your risk level.",
        "Check what the bot drafts versus what it is allowed to send or change.",
        "Pair it with a related Jobs page category before you scale the routine.",
      ],
  },
  {
    slug: "grokbotdev",
    project: "GrokBotDev",
    creator: "ZeroPointRepo",
    source: "GitHub",
    section: "community",
    whatItDoes: "Agent-run directory of plugins, prompts and public Grok Bot use cases. PRs are the write API.",
    evidence: "Public repository",
    status: "Community",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://github.com/ZeroPointRepo/GrokBotDev",
    domains: ["Engineering"],
    summary:
      "Open GitHub project that turns Grok Bot discovery into an agent-run operation: scouts find public examples, a curator evaluates them, and a builder maintains the site through reviewable pull requests.",
    takeaways: [
        "Open the repo README before treating any claim as verified.",
        "Prefer projects with an obvious contribution path (issues or PRs).",
        "Use as discovery material—not as an official product endorsement.",
      ],
    relatedGuideHref: "/getting-started",
  },
  {
    slug: "usegrokbot",
    project: "UseGrokBot",
    creator: "a70win-wq",
    source: "GitHub",
    section: "community",
    whatItDoes:
      "Open-source searchable library that ingests public Grok Bot workflows while retaining attribution and verification labels.",
    evidence: "Public repository",
    status: "Community",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://github.com/a70win-wq/usegrokbot",
    domains: ["Engineering"],
    summary:
      "Searchable library of Grok Bot use cases, prompts and workflows with attribution-oriented collection of public examples.",
    takeaways: [
        "Open the repo README before treating any claim as verified.",
        "Prefer projects with an obvious contribution path (issues or PRs).",
        "Use as discovery material—not as an official product endorsement.",
      ],
  },
  {
    slug: "botdirectory-ai",
    project: "botdirectory.ai",
    creator: "elie222",
    source: "GitHub",
    section: "community",
    whatItDoes: "Git-backed directory of reusable Bot briefs for inbox, SEO, churn monitoring and other jobs.",
    evidence: "Public repository",
    status: "Community",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://github.com/elie222/botdirectory.ai",
    domains: ["Engineering", "Marketing"],
    summary:
      "Open-source directory of agent-bot prompts as Markdown, using GitHub as the contribution workflow for reusable jobs across Grok Bot and other agents.",
    takeaways: [
        "Open the repo README before treating any claim as verified.",
        "Prefer projects with an obvious contribution path (issues or PRs).",
        "Use as discovery material—not as an official product endorsement.",
      ],
  },
  {
    slug: "grokbot-for-gtm",
    project: "Grok Bot for GTM",
    creator: "bcharleson",
    source: "GitHub",
    section: "community",
    whatItDoes:
      "Open-source outbound playbook covering list research, cold email, LinkedIn, replies and meeting logging.",
    evidence: "Public repository",
    status: "Community",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://github.com/bcharleson/grokbot-for-gtm",
    domains: ["Marketing"],
    summary:
      "Open-source playbook for a complete outbound GTM motion with Instantly, HeyReach, and list/enrichment CLIs—packaged as reusable Bot workflow material.",
    takeaways: [
        "Open the repo README before treating any claim as verified.",
        "Prefer projects with an obvious contribution path (issues or PRs).",
        "Use as discovery material—not as an official product endorsement.",
      ],
    relatedJobsHref: "/jobs",
  },
  {
    slug: "marketing-os",
    project: "Marketing OS",
    creator: "Vlad Dubchak / Maxfusion",
    source: "X",
    section: "community",
    whatItDoes:
      "Community-reported open-source marketing system with modules for audits, copy, ads, GEO, email, social and positioning.",
    evidence: "Community index",
    status: "Community",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://grokbot.dev/categories/marketing/",
    domains: ["Marketing"],
    summary:
      "Indexed on grokbot.dev as an open-sourced marketing department skill with fourteen modules. Treat reported results as community claims, not independently verified benchmarks.",
    takeaways: [
        "Treat reported results as community claims until you can reproduce them.",
        "Follow the linked index or repo rather than screenshots alone.",
        "Cross-check against Jobs and Getting started before copying the setup.",
      ],
    relatedJobsHref: "/jobs",
  },
  {
    slug: "haggle-bot",
    project: "Haggle Bot",
    creator: "Daniel Gartshein / xAI",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes:
      "Inventories SaaS spend from Ramp and bills, finds evidence-backed savings, and drafts vendor counters—never spends, signs, or sends without you.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/haggle-bot",
    domains: [],
    summary:
      "Featured on the Marketplace and covered in xAI’s procurement write-up: Haggle Bot maps vendors, unused seats, and renewals, then drafts negotiation moves while a human keeps final say. xAI reports six-figure savings identified in its own run—treat those figures as author-reported.",
    takeaways: [
      "Start with read-only spend and contract access before enabling any vendor-facing drafts.",
      "Require approval for every external send, signature, or purchase.",
      "Use the public system-prompt pattern as a teaching example for permission lines.",
    ],
    relatedJobsHref: "/jobs?category=Money",
    relatedGuideHref: "/trust-and-cost",
  },
  {
    slug: "overheard",
    project: "Overheard",
    creator: "Lenny Rachitsky",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes: "Featured Marketplace bot for product and community listening workflows from Lenny Rachitsky.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/overheard",
    domains: ["Marketing", "Personal"],
    summary:
      "A featured Marketplace template from Lenny Rachitsky. Import it as a listening/research seat, then tune sources and approval rules for your team before trusting any published summary.",
    takeaways: [
      "Treat featured status as discoverability, not a completed setup.",
      "Define which channels the bot may read versus draft into.",
      "Pair with Trust & cost before enabling scheduled posts or alerts.",
    ],
    relatedJobsHref: "/jobs?category=Marketing",
  },
  {
    slug: "tech-demos",
    project: "Tech Demos",
    creator: "Matt Palmer",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes:
      "Weekday X-bookmark scout that picks one library to demo, asks for approval, then builds it in a sticky monorepo with a cloud coding agent.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/tech-demos",
    domains: ["Engineering"],
    summary:
      "An engineering playground Bot: scouts X bookmarks, proposes one demo, waits for approval, then launches a cloud agent into a single monorepo with screenshot/video validation. Write actions on X stay blocked by default.",
    takeaways: [
      "Keep the sticky-monorepo rule—avoid a new repo per demo.",
      "Require human approval before any cloud-agent build starts.",
      "Use PR screenshots/videos as the acceptance check, not chat claims.",
    ],
    relatedJobsHref: "/jobs?category=Technical",
    relatedGuideHref: "/trust-and-cost",
  },
  {
    slug: "alfred-org-design",
    project: "Alfred",
    creator: "Robin Delta",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes:
      "Designs and audits your Grok Bot organization so seats map to real outcomes—recommends the smallest useful structure and never creates bots without your exact yes.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/alfred",
    domains: [],
    summary:
      "An operations Bot for org design: map existing bots to outcomes, spot duplicate jobs, and propose the smallest useful roster. Defaults new bots to zero and waits for an explicit yes before creating or changing anything.",
    takeaways: [
      "Run Alfred before cloning a six-bot marketing team you do not need.",
      "Use it to assign human owners to every consequential seat.",
      "Keep create/change actions behind explicit approval.",
    ],
    relatedGuideHref: "/getting-started",
  },
  {
    slug: "ai-search-visibility",
    project: "AI Search Visibility",
    creator: "Adam Tanguay",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes:
      "Checks whether AI assistants and search results recommend you for buyer questions—and who they name instead.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/ai-search-visibility",
    domains: ["Marketing"],
    summary:
      "Pairs with SEO & AEO Desk: run a fixed set of buyer prompts across answer surfaces, score recommended/cited/mentioned/absent, and turn movement into a weekly brief with one named action. Drafts only—never posts without your yes.",
    takeaways: [
      "Start from real buyer questions, not vanity brand queries.",
      "Require quoted sentences and source links on every claim.",
      "Use the weekly brief as input to content work—not as auto-publish.",
    ],
    relatedJobsHref: "/jobs?category=Marketing",
  },
  {
    slug: "nightly-audit-engineer",
    project: "Nightly Audit Engineer",
    creator: "Lingxi Li",
    source: "Marketplace",
    section: "marketplace",
    whatItDoes:
      "Nightly engineering auditor that researches a codebase and ships one cleanup PR per area—defaults to 4am and asks when to run first.",
    evidence: "Official Marketplace",
    status: "Official",
    lastChecked: CHECKED,
    lastCheckedLabel: CHECKED_LABEL,
    href: "https://x.ai/bot/marketplace/bots/nightly-audit-engineer",
    domains: ["Engineering"],
    summary:
      "Complements Lingxi’s Engineer Bot with a scheduled audit loop: pick an area, research the repo, open one cleanup PR, and leave merge decisions to you. Confirm timezone and scope before enabling the routine.",
    takeaways: [
      "Keep the schedule off until the first manual dry run looks good.",
      "Limit blast radius to cleanup PRs—not production deploys.",
      "Review the PR like any human-authored change.",
    ],
    relatedJobsHref: "/jobs?category=Technical",
    relatedGuideHref: "/trust-and-cost",
  },
];

export function wildProject(slug: string): WildProject | undefined {
  return WILD_PROJECTS.find((p) => p.slug === slug);
}

export function wildMatches(project: WildProject, filter: WildFilter): boolean {
  if (filter === "All") return true;
  if (filter === "Official") return project.status === "Official" || project.source === "Official";
  if (filter === "X" || filter === "GitHub" || filter === "Medium" || filter === "Marketplace") {
    return project.source === filter;
  }
  if (filter === "Engineering" || filter === "Marketing" || filter === "Personal") {
    return project.domains.includes(filter);
  }
  const _exhaustive: never = filter;
  return _exhaustive;
}

export function wildProjectsInSection(section: WildSection): WildProject[] {
  return WILD_PROJECTS.filter((p) => p.section === section);
}

export function relatedWildProjects(slug: string, limit = 3): WildProject[] {
  const current = wildProject(slug);
  if (!current) return [];
  return WILD_PROJECTS.filter((p) => p.slug !== slug && p.section === current.section).slice(0, limit);
}
