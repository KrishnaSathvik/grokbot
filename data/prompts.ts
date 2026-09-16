import type { AvatarAppearance } from "@/lib/avatar";

export interface Prompt {
  who: string;
  /** Slug of the job on the Jobs page this message is an example for. */
  job: string;
  text: string;
  href: string;
  avatar: AvatarAppearance;
}

export const PROMPTS: Prompt[] = [
  {
    who: "Inbox helper",
    job: "inbox-helper",
    text: "Go through my inbox every morning, sort out what's urgent, and write replies for me to check.",
    href: "https://x.ai/bot/s4f048c7b7da9e010c2c3",
    avatar: { shape: "cloud", color: "blue", expression: "attentive" },
  },
  {
    who: "Your assistant",
    job: "your-assistant",
    text: "Read my messages, email and calendar overnight and tell me the three things that matter today.",
    href: "https://x.ai/bot/sc0a0ec3ce9c675824106",
    avatar: { shape: "circle", color: "blue", expression: "neutral" },
  },
  {
    who: "Meeting prep",
    job: "meeting-prep",
    text: "Before each meeting, put together who's coming, what we said last time, and what's still open.",
    href: "https://x.ai/bot/s445a0c9a2ca4bea7729e",
    avatar: { shape: "squircle", color: "blue", expression: "happy" },
  },
  {
    who: "Finding candidates",
    job: "finding-candidates",
    text: "Look for people who'd suit this role, write a first message in my voice, and leave me a shortlist.",
    href: "https://x.ai/bot/sac3a109dfe021c555c7c",
    avatar: { shape: "triangle", color: "blue", expression: "attentive" },
  },
  {
    who: "Expenses",
    job: "expenses",
    text: "Every Friday, pull the week's expenses together and chase anyone who hasn't sent a receipt.",
    href: "https://x.ai/bot/s50bb9361d891bd788a23",
    avatar: { shape: "hexagon", color: "blue", expression: "happy" },
  },
  {
    who: "Ticket sorting",
    job: "ticket-sorting",
    text: "Check the support queue twice a day, draft the replies, and only message me if something looks serious.",
    href: "https://x.ai/bot/s7aaf6431077930df326f",
    avatar: { shape: "capsule", color: "blue", expression: "attentive" },
  },
  {
    who: "Travel",
    job: "travel",
    text: "Find flights and a hotel for Chicago next month within my usual budget, check with me, then book it.",
    href: "https://x.ai/bot/sc693906bdeded166b7ba",
    avatar: { shape: "droplet", color: "blue", expression: "excited" },
  },
  {
    who: "Subscriptions",
    job: "subscriptions",
    text: "Go through my receipts and find every subscription I'm paying for. Suggest what to cancel.",
    href: "https://x.ai/bot/sb36667ce9e1fdc00cfe7",
    avatar: { shape: "circle", color: "blue", expression: "suspicious" },
  },
];

export const PROMPT_CTAS = [
  { label: "Get Grok Bot", href: "https://x.ai/bot", solid: true },
  { label: "Browse all ready-made helpers", href: "https://x.ai/bot/marketplace", solid: false },
  { label: "Read xAI's guides", href: "https://x.ai/bot/guides", solid: false },
];

export function promptForJob(slug: string): Prompt | undefined {
  return PROMPTS.find((p) => p.job === slug);
}
