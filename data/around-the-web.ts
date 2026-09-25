/** Editorial “Around the web” feed — summary + attribution + outbound link only. */

export type WebSource = "Medium" | "X" | "GitHub" | "Community" | "News";

export interface AroundTheWebItem {
  source: WebSource;
  title: string;
  author: string;
  venue?: string;
  description: string;
  href: string;
  lastChecked: string;
}

export const AROUND_THE_WEB: AroundTheWebItem[] = [
  {
    source: "News",
    title: "Setting Grok Bot loose on procurement",
    author: "xAI",
    venue: "x.ai/news",
    description:
      "Official case study for Haggle Bot: unused SaaS seats, renewals, and office-supply shopping with human approval on every vendor-facing send—author-reported savings figures.",
    href: "https://x.ai/news/grok-bot-procurement",
    lastChecked: "2026-09-25",
  },
  {
    source: "Community",
    title: "8 open-source Grok Bot alternatives",
    author: "Open Source Alternatives",
    venue: "opensourcealternatives.to",
    description:
      "Independent roundup ranking self-hosted stacks that aim at persistent bots + computers (Rakazo, OpenBot, OpenMausBot, and others)—useful context, not Marketplace listings.",
    href: "https://www.opensourcealternatives.to/alternative-to/grok-bot",
    lastChecked: "2026-09-25",
  },
  {
    source: "GitHub",
    title: "Rakazo — open-source persistent AI teammates",
    author: "elie222",
    venue: "GitHub",
    description:
      "Self-hosted alternative with persistent bots, shared/private computers, browser/terminal access, and schedules. Inspired by Grok Bot; not affiliated with xAI.",
    href: "https://github.com/elie222/rakazo",
    lastChecked: "2026-09-25",
  },
  {
    source: "GitHub",
    title: "OpenBot — AI coworkers with policy and audit",
    author: "CopilotKit",
    venue: "GitHub",
    description:
      "Open-source bots with isolated computers, action policy before execution, and an audit trail—another angle on the shared-computer trust problem.",
    href: "https://github.com/CopilotKit/openbot",
    lastChecked: "2026-09-25",
  },
  {
    source: "Community",
    title: "Marketing Grok Bots — plugins & use cases",
    author: "grokbot.dev",
    venue: "Community index",
    description:
      "Indexed marketing plugins and workflows, including open-source Marketing OS and multi-bot content setups—labeled community-reported.",
    href: "https://grokbot.dev/categories/marketing/",
    lastChecked: "2026-09-25",
  },
  {
    source: "GitHub",
    title: "GrokBotDev — agent-run directory",
    author: "ZeroPointRepo",
    venue: "GitHub",
    description: "Open directory where scouts, a curator and a builder maintain public Grok Bot examples via PRs.",
    href: "https://github.com/ZeroPointRepo/GrokBotDev",
    lastChecked: "2026-09-25",
  },
  {
    source: "GitHub",
    title: "usegrokbot — searchable workflow library",
    author: "a70win-wq",
    venue: "GitHub",
    description: "Searchable library of public Grok Bot use cases, prompts and workflows with attribution.",
    href: "https://github.com/a70win-wq/usegrokbot",
    lastChecked: "2026-09-25",
  },
  {
    source: "GitHub",
    title: "botdirectory.ai",
    author: "elie222",
    venue: "GitHub",
    description: "Git-backed reusable Bot briefs for inbox, SEO, churn monitoring and other agent jobs.",
    href: "https://github.com/elie222/botdirectory.ai",
    lastChecked: "2026-09-25",
  },
  {
    source: "GitHub",
    title: "grokbot-for-gtm outbound playbook",
    author: "bcharleson",
    venue: "GitHub",
    description: "Open-source outbound GTM motion: list research, cold email, LinkedIn, replies and meeting logging.",
    href: "https://github.com/bcharleson/grokbot-for-gtm",
    lastChecked: "2026-09-25",
  },
];
