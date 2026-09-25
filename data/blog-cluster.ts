import type { BlogPost } from "./blog";

const DATE = "2026-09-24";

/** Remaining nine posts in the researched blog cluster. */
export const BLOG_CLUSTER_POSTS: BlogPost[] = [
  {
    slug: "grok-bot-for-marketing",
    title: "Grok Bot for Marketing: 6 Jobs That Actually Finish Work",
    seoTitle: "Grok Bot for Marketing: 6 Jobs That Actually Finish Work",
    description:
      "See how Grok Bot can support competitor research, positioning, ads, website operations, analytics, and project coordination—plus where human approval still matters.",
    ogTitle: "Grok Bot for Marketing",
    ogDescription: "Research → positioning → ads → website → analytics.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Marketing",
    group: "role",
    related: [
      { href: "/jobs?category=Marketing", label: "Marketing jobs" },
      { href: "/trust-and-cost", label: "Trust & cost" },
      { href: "/getting-started", label: "Getting started" },
      { href: "/in-the-wild", label: "In the wild" },
    ],
    blocks: [
      {
        type: "p",
        text: "Most AI marketing advice still stops at “generate copy.” The more interesting Grok Bot workflows begin after the copy exists: researching competitors, moving positioning into documents, preparing ad structures, opening website pull requests, and bringing performance data back into the next round.",
      },
      {
        type: "p",
        text: "xAI’s marketing guide describes six specialized Bots across research, product marketing, performance marketing, website operations, analytics and project management. The human still owns judgment and live-account approvals.",
      },
      {
        type: "h2",
        text: "1. Market Researcher",
        href: "https://x.ai/bot/guides/grok-bot-for-marketing",
      },
      {
        type: "p",
        text: "Competitor and category research with evidence gathering. The job is a strategic read you can hand to a product marketer—not a vague “tell me about the market” chat dump.",
      },
      {
        type: "h2",
        text: "2. Product Marketer",
        href: "https://x.ai/bot/guides/grok-bot-for-marketing",
      },
      {
        type: "p",
        text: "Turns research into positioning briefs, landing outlines and ad variants in shared docs. You review the Doc the way you review a teammate; the Bot revises from comments.",
      },
      {
        type: "h2",
        text: "3. Performance Marketer",
        href: "https://x.ai/bot/guides/grok-bot-for-marketing",
      },
      {
        type: "p",
        text: "Prepares campaign shells and traffics approved copy into them. Useful when the output is structure you can inspect—not when the Bot is free to change live bids and budgets without you.",
      },
      {
        type: "h2",
        text: "4. Website Ops",
        href: "https://x.ai/bot/marketplace/bots/website-ops",
      },
      {
        type: "p",
        text: "This seat deserves special attention. The Marketplace Website Ops Bot ships site changes as pull requests, runs evidence-backed SEO, a11y, CRO and schema audits, and turns product-marketer briefs into landing-page PRs with in-chat screenshots.",
      },
      {
        type: "p",
        text: "Its anti-jobs are equally clear: never merge, push to the default branch, deploy, change DNS or hosting, or edit analytics or tag-manager code without an explicit yes in the same conversation.",
      },
      {
        type: "h2",
        text: "5. Marketing Analyst",
        href: "https://x.ai/bot/guides/grok-bot-for-marketing",
      },
      {
        type: "p",
        text: "Pulls campaign and page data into a scoreboard and recommends what to scale, cut or test. The decision to spend still stays with you.",
      },
      {
        type: "h2",
        text: "6. Project Manager",
        href: "https://x.ai/bot/guides/grok-bot-for-marketing",
      },
      {
        type: "p",
        text: "Coordinates handoffs only once coordination itself becomes work. If you only have one specialist spinning, a manager Bot is overhead.",
      },
      { type: "h2", text: "A practical setup" },
      {
        type: "quote",
        text: "Research → Positioning → Campaign / page draft → Human review → PR / campaign shell → Performance analysis",
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Start with one specialist that finishes an observable artifact. Add the next Bot when the job or toolset changes. Keep live Ads writes, merges and publishes behind approval. Study the six-seat marketing example and Website Ops on In the wild when you want receipts.",
      },
    ],
  },
  {
    slug: "grok-bot-for-engineering",
    title: "Grok Bot for Engineering: From Bug Reproduction to Agent Teams",
    seoTitle: "Grok Bot for Engineering: Coding Agents, PRs and Always-On Workflows",
    description:
      "Learn how engineering teams are using Grok Bot to manage coding agents, reproduce bugs, review work, maintain feedback loops, and keep development moving asynchronously.",
    ogTitle: "Grok Bot for Engineering",
    ogDescription: "Sit one level above coding agents—with clear approval for merges.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Engineering",
    group: "role",
    related: [
      { href: "/jobs?category=Technical", label: "Technical jobs" },
      { href: "/in-the-wild", label: "In the wild" },
      { href: "/trust-and-cost", label: "Trust & cost" },
    ],
    blocks: [
      {
        type: "p",
        text: "Do not write “Grok Bot replaces software engineers.” The interesting story is different: Grok Bot can sit one level above coding agents and operational engineering work.",
      },
      {
        type: "p",
        text: "xAI’s engineering guide describes a fleet of engineer Bots that launch cloud agents, monitor transcripts and proofs, review pull requests on a cadence, and keep work moving while the human is away, asleep or in meetings.",
      },
      {
        type: "quote",
        text: "xAI-reported results: xAI’s engineering team reports high internal output using Grok Bot, including thousands of PRs and rapid internal app builds. These are first-party examples, not independent benchmarks.",
      },
      {
        type: "h2",
        text: "1. Bug reproduction",
        href: "https://x.ai/bot/guides/grok-bot-for-engineering",
      },
      {
        type: "p",
        text: "A narrow Bot that owns reproduction—opening the app, capturing screenshots, writing a minimal failing case—beats asking a generalist chat to “fix everything.”",
      },
      {
        type: "h2",
        text: "2. Managing coding agents",
        href: "https://x.ai/bot/guides/grok-bot-for-engineering",
      },
      {
        type: "p",
        text: "Engineer Bots can start cloud agents with a thorough prompt and expected proof, queue follow-ups, interrupt stalled runs, and verify screenshots before declaring done. The Bot manages the agent loop; you manage the bar.",
      },
      {
        type: "h2",
        text: "3. PR preparation and review loops",
        href: "https://x.ai/bot/guides/grok-bot-for-engineering",
      },
      {
        type: "p",
        text: "Shared Notion or board rows for PRs, CI failures and merge conflicts give Bots something durable beyond chat context. High-confidence, low blast-radius merges may be automated; everything else waits for you.",
      },
      { type: "h2", text: "4. Repository and context memory" },
      {
        type: "p",
        text: "Specialist seats keep sharper memory when each Bot owns a domain—mobile shared layer, desktop client, infra, harness. Cross-area work is possible; unfocused generalists forget why you hired them.",
      },
      { type: "h2", text: "5. Keeping work moving while you are away" },
      {
        type: "p",
        text: "Nightly audits, morning ready-for-review queues and ops Bots that run postmortems when a Bot misses the bar are examples of always-on engineering hygiene—not magic autonomy.",
      },
      { type: "h2", text: "6. Where approval remains necessary" },
      {
        type: "ul",
        items: [
          "Merges with large blast radius",
          "Production deploys and secrets",
          "Destructive git history or infra changes",
          "Anything your security policy marks as Ask first",
        ],
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Treat Grok Bot as a talented intern that manages agents and closes feedback loops. Attribute xAI’s internal productivity claims as first-party reports. Keep Trust & cost open while you decide what auto-merges.",
      },
    ],
  },
  {
    slug: "grok-bot-for-sales-gtm",
    title: "Grok Bot for Sales & GTM: Prospecting, Meeting Prep and Forecasting",
    seoTitle: "Grok Bot for Sales & GTM: Prospecting, Meeting Prep and Follow-Up",
    description:
      "A practical guide to Grok Bot for sales and GTM teams: account research, prospecting, meeting prep, CRM updates, follow-ups, forecasting, and approval boundaries.",
    ogTitle: "Grok Bot for Sales & GTM",
    ogDescription: "Research can be autonomous. Sending should usually stay an approval boundary.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Sales & GTM",
    group: "role",
    related: [
      { href: "/jobs?category=Sales", label: "Sales jobs" },
      { href: "/getting-started", label: "Getting started" },
      { href: "/trust-and-cost", label: "Trust & cost" },
    ],
    blocks: [
      {
        type: "p",
        text: "xAI’s GTM guide describes a connected workflow spanning tools such as Salesforce, Gmail, Calendar, Sheets, Drive, Slack, Notion, meeting notes, Figma, X, LinkedIn and data sources—with a Chief of Staff as a common front door.",
      },
      {
        type: "p",
        text: "The Marketplace also has concrete sales Bots such as Outbound Prospecting, GTM Loop Closer, Sales Call Coach and related meeting tools. The useful pattern is the same across them.",
      },
      {
        type: "quote",
        text: "Research can be autonomous. Sending should usually remain an approval boundary.",
      },
      { type: "h2", text: "Before the meeting" },
      {
        type: "ul",
        items: [
          "Account research and stakeholder context",
          "Recent activity from CRM, email and Slack",
          "A short, phone-readable prep brief",
          "Optional customized deck drafts for review",
        ],
      },
      {
        type: "p",
        text: "Overnight prospecting that leaves material ready for morning review is one of the clearest GTM wins in the official guide.",
      },
      { type: "h2", text: "During and after" },
      {
        type: "ul",
        items: [
          "Notes and promises captured from transcripts",
          "Action items drafted for your voice",
          "CRM opportunity note updates in your format",
          "Follow-up drafts that wait for your send",
        ],
      },
      {
        type: "p",
        text: "Marketplace Outbound Prospecting is explicit: every name is researched on the public web, and nothing sends without your yes.",
      },
      { type: "h2", text: "Between meetings" },
      {
        type: "ul",
        items: [
          "Prospect and account monitoring",
          "Weekly media rundowns on strategic accounts",
          "Forecast preparation from calls, Slack and email",
          "Sales coaching from call recordings or transcripts",
        ],
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Connect the tools you already use. Start with meeting prep or prospecting drafts. Keep external sends, CRM mass updates and purchases behind approval. Pair this with Getting started and Trust & cost before you widen access.",
      },
    ],
  },
  {
    slug: "grok-bot-for-product-managers",
    title: "Grok Bot for Product Managers: Research, Attention Lists and Shipping",
    seoTitle: "Grok Bot for Product Managers: Research, Attention Lists and Shipping",
    description:
      "See how product managers can use Grok Bot for research, engineering coordination, analytics, recruiting, attention lists, and shipping—not just brainstorming.",
    ogTitle: "Grok Bot for Product Managers",
    ogDescription: "Coordination and attention lists—not another brainstorming chat.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Product",
    group: "role",
    related: [
      { href: "/jobs?category=Product", label: "Product jobs" },
      { href: "/getting-started", label: "Getting started" },
      { href: "/how-it-works", label: "How it works" },
    ],
    blocks: [
      {
        type: "p",
        text: "The PM problem is rarely a shortage of ideas. It is coordination across Slack, email, meetings, research and engineering work—plus remembering what actually needs you right now.",
      },
      {
        type: "p",
        text: "xAI’s PM guide describes an agent team and an attention list that surfaces work from the activity already happening, rather than a weekly priorities doc that goes stale by Tuesday.",
      },
      {
        type: "quote",
        text: "The useful PM Bot is not another place to ask questions. It reduces the number of places you have to remember to check.",
      },
      {
        type: "h2",
        text: "1. The attention list",
        href: "https://x.ai/bot/guides/grok-bot-for-pms",
      },
      {
        type: "p",
        text: "Have a Chief of Staff review email, Slack, meeting notes and calendar on a cadence and maintain a succinct set of projects you are focused on and their next steps. Agents can then filter noise against that list.",
      },
      { type: "h2", text: "2. Research" },
      {
        type: "p",
        text: "PMs sit on transcripts, support tickets, warehouse data and Notion decisions. A research seat that synthesizes across those sources is more useful than yet another brainstorming prompt.",
      },
      { type: "h2", text: "3. Analytics" },
      {
        type: "p",
        text: "Tactical questions that used to go unanswered because of friction—funnel cuts, feature adoption, refresh of a known metric—fit a data analyst Bot connected to the warehouse.",
      },
      { type: "h2", text: "4. Engineering coordination" },
      {
        type: "p",
        text: "An eng-manager Bot that breaks work down and validates outputs against a goal, plus IC eng Bots that drive cloud agents, lets a PM operate at a higher abstraction without pretending to be the merge authority for everything.",
      },
      { type: "h2", text: "5. Recruiting context" },
      {
        type: "p",
        text: "Hiring loops and candidate coordination show up in the official PM roster as a specialist seat—useful when recruiting is real work, not when every Bot becomes a recruiter.",
      },
      { type: "h2", text: "6. When not to create another Bot" },
      {
        type: "p",
        text: "If a job does not have a distinct goal, toolset, schedule or approval boundary, adding a Bot dilutes memory. Prefer one clear owner over a decorative org chart.",
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Start with an attention list and one research or analytics seat. Keep external emails, purchases and destructive actions for final review. Read Getting started before staffing a full mini-org.",
      },
    ],
  },
  {
    slug: "grok-bot-chief-of-staff",
    title: "How to Use Grok Bot as a Chief of Staff",
    seoTitle: "How to Use Grok Bot as a Chief of Staff",
    description:
      "Build a practical Grok Bot Chief of Staff for morning briefs, follow-ups, calendar context, project coordination, attention lists, and specialist handoffs.",
    ogTitle: "Grok Bot as a Chief of Staff",
    ogDescription: "A routing and attention role—not a magical do-everything Bot.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Operations",
    group: "role",
    related: [
      { href: "/getting-started", label: "Getting started" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/trust-and-cost", label: "Trust & cost" },
    ],
    blocks: [
      {
        type: "p",
        text: "The Chief of Staff should be a routing and attention role—not a magical do-everything Bot.",
      },
      {
        type: "p",
        text: "xAI’s guidance recommends separate Bots when jobs differ in goals, tools, working style, approval boundaries or schedules. It warns that vague roles such as “General Helper” make saved context less useful.",
      },
      {
        type: "h2",
        text: "Recommended architecture",
        href: "https://docs.x.ai/grok-bot/bots",
      },
      {
        type: "quote",
        text: "Chief of Staff → Research / Operations / Writing specialists → review and return → You",
      },
      {
        type: "p",
        text: "The Chief of Staff receives the ask, calls a specialist when needed, and brings a result back. Specialists keep scoped memory. You keep consequential decisions.",
      },
      { type: "h2", text: "Good responsibilities" },
      {
        type: "ul",
        items: [
          "Morning briefing from the sources you name",
          "Unanswered follow-ups and deadline tracking",
          "Agenda and meeting prep",
          "“What needs me?” / attention list",
          "Routing work to specialists and summarizing blockers",
        ],
      },
      { type: "h2", text: "Bad responsibilities" },
      {
        type: "ul",
        items: [
          "Unrestricted sending",
          "Financial actions and purchases",
          "Deleting data or changing permissions",
          "Acting as a security boundary between jobs",
        ],
      },
      {
        type: "p",
        text: "Official GTM and PM guides both use a Chief of Staff pattern while keeping humans on external sends and destructive actions.",
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Create the Chief of Staff after you have at least one specialist worth coordinating—or as your first Bot if morning briefs and follow-ups are the whole job. Pin it if it is your main front door. Read How it works and Trust & cost before widening tool access.",
      },
    ],
  },
  {
    slug: "grok-bot-seo-aeo",
    title: "Grok Bot for SEO & AEO: What You Can Actually Automate",
    seoTitle: "Grok Bot for SEO & AEO: Research, Briefs, Audits and AI Search Visibility",
    description:
      "Learn how Grok Bot can support SEO and AEO workflows through keyword research, content briefs, page audits, Search Console analysis, and AI-search visibility checks.",
    ogTitle: "Grok Bot for SEO & AEO",
    ogDescription: "Briefs and audits—not unsupervised publishing.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "SEO & AEO",
    group: "workflow",
    related: [
      { href: "/jobs?category=Marketing", label: "Marketing jobs" },
      { href: "/sources", label: "Sources" },
      { href: "/in-the-wild", label: "In the wild" },
    ],
    blocks: [
      {
        type: "p",
        text: "The official Marketplace includes SEO & AEO Desk, which turns keywords or Search Console data into content opportunities and writer-ready briefs. It explicitly does not write the finished article or publish it.",
      },
      {
        type: "p",
        text: "There is also AI Search Visibility, which checks whether AI assistants and search results recommend a company for buyer questions—and who gets recommended instead.",
      },
      {
        type: "h2",
        text: "1. Keyword → opportunity",
        href: "https://x.ai/bot/marketplace/bots/seo-aeo-desk",
      },
      {
        type: "p",
        text: "Paste a keyword list or connect Search Console. Rank opportunities into page ideas without inventing volumes or difficulties the Bot cannot see.",
      },
      { type: "h2", text: "2. Search Console → pages that need work" },
      {
        type: "p",
        text: "Slipping pages and query changes become audit inputs. Business interpretation of what to prioritize still sits with you.",
      },
      { type: "h2", text: "3. Question mapping for AEO" },
      {
        type: "p",
        text: "Map what people ask AI and search about your category. That map feeds briefs aimed at answers, not only classic ten-blue-links SEO.",
      },
      { type: "h2", text: "4. Content brief generation" },
      {
        type: "p",
        text: "Writer-ready briefs are the Desk’s core product. Finished articles stay human-written or heavily reviewed.",
      },
      { type: "h2", text: "5. Page audit" },
      {
        type: "p",
        text: "Audits that name URLs, severity and dates beat vague “improve SEO” advice. Pair with Website Ops when changes should land as PRs.",
      },
      {
        type: "h2",
        text: "6. AI visibility testing",
        href: "https://x.ai/bot/marketplace/bots/ai-search-visibility",
      },
      {
        type: "p",
        text: "Run a fixed list of buyer prompts, score recommended / cited / mentioned / absent, and turn movement into a brief with one named action. Claims should carry quoted sentences and source links.",
      },
      { type: "h2", text: "7. Human-written final article" },
      {
        type: "p",
        text: "Publish remains an approval boundary. That matches how this guide site itself should work: research and briefs can be assisted; voice and claims stay editorial.",
      },
      { type: "h2", text: "Who owns what" },
      {
        type: "table",
        headers: ["Job", "Bot can own", "Human should own"],
        rows: [
          ["Keyword clustering", "Yes", "Priorities"],
          ["Search Console review", "Yes", "Business interpretation"],
          ["Brief", "Yes", "Editorial angle"],
          ["First draft", "Maybe", "Quality and voice"],
          ["Publish", "Approval only", "Final sign-off"],
          ["AI visibility monitoring", "Yes", "Response strategy"],
        ],
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Use SEO & AEO Desk for ideas and briefs. Use AI Search Visibility for recommendation checks. Link findings back to Sources & methodology on this site so readers can see how claims are grounded.",
      },
    ],
  },
  {
    slug: "grok-bot-github-projects",
    title: "The Grok Bot GitHub Ecosystem: Repos, Templates and Open Projects",
    seoTitle: "Grok Bot on GitHub: Open-Source Projects, Templates and Tools",
    description:
      "Explore the public Grok Bot ecosystem on GitHub: directories, templates, automation projects, open-source alternatives, integrations, and community experiments.",
    ogTitle: "Grok Bot on GitHub",
    ogDescription: "Directories, templates and tools—linked to originals, not ranked as “best.”",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Ecosystem",
    group: "workflow",
    related: [
      { href: "/in-the-wild", label: "In the wild" },
      { href: "/avatar-system", label: "Avatar system" },
      { href: "/blog/real-grok-bot-projects", label: "Real projects" },
    ],
    blocks: [
      {
        type: "p",
        text: "The public GitHub ecosystem around Grok Bot has grown quickly: directories of prompts and workflows, GTM playbooks, avatar recreations and agent experiments. This article is a map, not a “best of” ranking.",
      },
      {
        type: "p",
        text: "Sort and browse by category, recency or your own needs. Ranking “best Grok projects” ages badly.",
      },
      { type: "h2", text: "Directories" },
      {
        type: "h3",
        text: "GrokBotDev",
        href: "https://github.com/ZeroPointRepo/GrokBotDev",
      },
      {
        type: "p",
        text: "An open, agent-run directory of prompts, plugins and use cases. PRs are the write API.",
      },
      {
        type: "h3",
        text: "UseGrokBot",
        href: "https://github.com/a70win-wq/usegrokbot",
      },
      {
        type: "p",
        text: "Searchable library of use cases, prompts and workflows with attribution.",
      },
      {
        type: "h3",
        text: "botdirectory.ai",
        href: "https://github.com/elie222/botdirectory.ai",
      },
      {
        type: "p",
        text: "Git-backed Markdown briefs for inbox, SEO, churn monitoring and other agent jobs.",
      },
      { type: "h2", text: "Templates and playbooks" },
      {
        type: "h3",
        text: "grokbot-for-gtm",
        href: "https://github.com/bcharleson/grokbot-for-gtm",
      },
      {
        type: "p",
        text: "Open-source outbound GTM motion: list research, cold email, LinkedIn activity, replies and meeting logging.",
      },
      { type: "h2", text: "Open-source alternatives (adjacent)" },
      {
        type: "p",
        text: "Several self-hosted stacks explicitly aim at the Grok Bot shape—persistent bots plus a computer—without using xAI infrastructure. They are useful for comparison and for teams that need on-prem control; they are not Marketplace bots.",
      },
      {
        type: "h3",
        text: "Rakazo",
        href: "https://github.com/elie222/rakazo",
      },
      {
        type: "p",
        text: "Open-source persistent teammates with shared or private computers, browser/terminal access, schedules, and bring-your-own models. Apache-2.0; not affiliated with xAI.",
      },
      {
        type: "h3",
        text: "OpenBot",
        href: "https://github.com/CopilotKit/openbot",
      },
      {
        type: "p",
        text: "Bots with isolated computers, action policy before execution, and an audit trail—another answer to the shared-computer trust question.",
      },
      {
        type: "p",
        text: "For a broader ranked list, see the independent roundup of open-source Grok Bot alternatives (linked from Around the web on the blog index).",
      },
      { type: "h2", text: "Avatar and community tooling" },
      {
        type: "p",
        text: "Community avatar recreations such as bloub power studios outside xAI. See this site’s Avatar system page for how we treat supplied exports versus approximations.",
      },
      { type: "h2", text: "How to read a repo entry" },
      {
        type: "ul",
        items: [
          "Project and creator",
          "What it does in one sentence",
          "Evidence: public repository",
          "Status: community unless xAI publishes it",
          "Link to the original repo—never a republication",
        ],
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Use In the wild as the curated discovery layer on this site. Use GitHub topics and the repos above when you want to contribute or fork. Treat community stars as interest signals, not product certification.",
      },
    ],
  },
  {
    slug: "grok-bot-security-shared-computer",
    title: "Grok Bot Security: What the Shared Computer Model Actually Means",
    seoTitle: "Grok Bot Security: Shared Computers, Credentials and Approval Boundaries",
    description:
      "Understand Grok Bot’s security model: the shared cloud computer, credential access, local-computer permissions, approvals, and why separate Bots are not security boundaries.",
    ogTitle: "Grok Bot Security",
    ogDescription: "One user, one shared Bot computer. Separate Bots are not isolation.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "Security",
    group: "workflow",
    related: [
      { href: "/trust-and-cost", label: "Trust & cost" },
      { href: "/how-it-works", label: "How it works" },
    ],
    blocks: [
      {
        type: "p",
        text: "Grok Bot security is easy to misunderstand. People see a roster of Bots and assume isolation. xAI’s docs say something sharper.",
      },
      {
        type: "h2",
        text: "1. One user, one shared Bot computer",
        href: "https://docs.x.ai/grok-bot/approvals-security-and-privacy",
      },
      {
        type: "quote",
        text: "Your account → shared cloud computer → Research Bot, Hiring Bot, Finance Bot, Chief of Staff",
      },
      {
        type: "p",
        text: "All Bots belonging to one user share the same persistent cloud computer, including files, browser sessions and command-line credentials. Treat a login or file on that computer as available to every Bot that user runs.",
      },
      { type: "h2", text: "2. Separate Bots are organizational—not security—isolation" },
      {
        type: "p",
        text: "xAI explicitly says not to treat separate Bots as a security boundary. Between users, each person gets a dedicated Firecracker microVM with its own kernel, memory and virtual devices. Within one account, the computer is shared.",
      },
      {
        type: "h2",
        text: "3. Local computer execution is separate",
        href: "https://docs.x.ai/grok-bot/approvals-security-and-privacy",
      },
      {
        type: "p",
        text: "Access to the Mac or Windows machine in front of you is a separate capability from the cloud computer. Settings offer Ask every time, Always allow, or Never allow. The documented default is Ask every time. Use Never allow unless a Bot has a specific reason to work on local files.",
      },
      { type: "h2", text: "4. Secrets and sensitive steps" },
      {
        type: "p",
        text: "Passwords, passkeys, two-factor codes, CAPTCHAs and payment confirmations should be completed with you taking control of the computer—or via a secure secret request for supported connections. Do not paste passwords into ordinary chat.",
      },
      { type: "h2", text: "5. Practical configuration" },
      {
        type: "ul",
        items: [
          "Low risk research Bot → cloud tools only, drafts by default",
          "More sensitive operations Bot → approval before sends, publishes, purchases, deletes",
          "Local computer → Never allow unless genuinely required",
          "Connect only the tools a workflow needs; sign out when access should end",
        ],
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Use separate Bots for clearer jobs and memory—not for security isolation. Pair this article with Trust & cost. Do not treat this page as a blanket security guarantee; re-check xAI’s current Approvals, security, and privacy docs and Security FAQ when policies matter.",
      },
    ],
  },
  {
    slug: "grok-bot-x-integration",
    title: "Grok Bot + X: Search, Monitoring and Social Workflows",
    seoTitle: "Grok Bot + X: Search, Monitoring and Social Workflows",
    description:
      "Explore practical Grok Bot workflows involving X: public research, monitoring, competitor tracking, content discovery, and social workflows—with clear limits and approval boundaries.",
    ogTitle: "Grok Bot + X",
    ogDescription: "Monitor and research public conversation—don’t fully automate an X account.",
    publishedAt: DATE,
    modifiedAt: DATE,
    category: "X / Social",
    group: "workflow",
    related: [
      { href: "/jobs", label: "56 jobs" },
      { href: "/in-the-wild", label: "In the wild" },
      { href: "/trust-and-cost", label: "Trust & cost" },
    ],
    blocks: [
      {
        type: "p",
        text: "X is one of Grok Bot’s natural public research surfaces—mentions, themes, competitor chatter, product narrative shifts. Capabilities move, so treat this as a workflow guide with limits, not a permanent feature checklist.",
      },
      {
        type: "p",
        text: "Do not frame Grok Bot as “fully automate your X account.” Prefer research, monitoring and draft-for-approval patterns.",
      },
      { type: "h2", text: "Useful angles" },
      {
        type: "ul",
        items: [
          "Monitor mentions and themes relevant to your product",
          "Research public conversation for briefs and positioning",
          "Competitor and product monitoring alongside site and pricing watches",
          "Source posts for content and GTM prep",
          "Track changing narratives for weekly rundowns",
          "Draft responses that wait for your send",
        ],
      },
      {
        type: "h2",
        text: "Marketplace examples that include X",
        href: "https://x.ai/bot/marketplace/product",
      },
      {
        type: "p",
        text: "Stalk Bot watches competitor sites, pricing, changelogs, jobs and X as part of competitive intelligence—and is described as never posting or contacting anyone.",
      },
      {
        type: "p",
        text: "last30days researches recent public conversation across Reddit, X, YouTube, TikTok, Hacker News, GitHub and the web, then writes a grounded brief.",
      },
      {
        type: "h2",
        text: "GTM and account context",
        href: "https://x.ai/bot/guides/grok-bot-for-gtm",
      },
      {
        type: "p",
        text: "xAI’s GTM guide includes account media rundowns that search X for posts from or about strategic accounts—again as research input, not unsupervised posting.",
      },
      { type: "h2", text: "Approval boundaries" },
      {
        type: "ul",
        items: [
          "Draft replies and scheduled posts wait for approval",
          "Never treat a Bot roster as isolation for an X login on the shared computer",
          "Sign out or revoke access when a campaign ends",
        ],
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "p",
        text: "Use X as a research and monitoring feed. Keep publishing and DMs behind approval. Browse In the wild for Stalk Bot and last30days, and re-check official Marketplace and X connector notes when behavior changes.",
      },
    ],
  },
];
