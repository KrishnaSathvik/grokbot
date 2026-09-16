import type { AvatarAppearance, AvatarState } from "@/lib/avatar";

export type RosterStatus = "thinking" | "done" | "waiting" | "idle";

export interface RosterEntry {
  name: string;
  role: string;
  status: RosterStatus;
  statusLabel: string;
  avatar: AvatarAppearance;
  state: AvatarState;
}

export const HERO = {
  eyebrow: "Grok Bot, explained",
  headline: ["They", "never", "log off"],
  lede: "Grok Bot isn't a chatbot you ask questions. It's a small team of helpers you hand real work to, and they finish it while you're asleep.",
  primaryCta: { label: "See 56 jobs", href: "/jobs" },
  secondaryCta: { label: "How it works", href: "/how-it-works" },
  rosterLabel: "On the roster",
} as const;

/** What each status looks like in the roster, and which status it quietly moves to next. */
export const ROSTER_STATUS: Record<RosterStatus, { label: string; state: AvatarState; next: RosterStatus }> = {
  thinking: { label: "working", state: "thinking", next: "done" },
  done: { label: "done", state: "idle", next: "idle" },
  idle: { label: "idle", state: "idle", next: "thinking" },
  waiting: { label: "waiting on you", state: "notification", next: "thinking" },
};

export const ROSTER: RosterEntry[] = [
  {
    name: "Inbox helper",
    role: "Sorting your email",
    status: "thinking",
    statusLabel: "thinking",
    avatar: { shape: "circle", color: "red", expression: "attentive" },
    state: "thinking",
  },
  {
    name: "Hiring helper",
    role: "Finding candidates",
    status: "thinking",
    statusLabel: "thinking",
    avatar: { shape: "circle", color: "red", expression: "curious" },
    state: "thinking",
  },
  {
    name: "Expenses helper",
    role: "Weekly summary",
    status: "done",
    statusLabel: "done",
    avatar: { shape: "circle", color: "red", expression: "proud" },
    state: "idle",
  },
  {
    name: "Your assistant",
    role: "Needs a decision",
    status: "waiting",
    statusLabel: "waiting on you",
    avatar: { shape: "circle", color: "red", expression: "attentive" },
    state: "notification",
  },
  {
    name: "Travel helper",
    role: "Nothing to do today",
    status: "idle",
    statusLabel: "idle",
    avatar: { shape: "circle", color: "red", expression: "sleepy" },
    state: "idle",
  },
];
