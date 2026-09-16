import type { AvatarAppearance, AvatarState } from "@/lib/avatar";

export const PRODUCT_MOODS = ["Idle", "Working", "Waiting", "Blocked", "Thinking", "Done"];

export interface MoodLegend {
  name: string;
  /** What the state tells you, in one line. */
  meaning: string;
  body: string;
  state: AvatarState;
  avatar: AvatarAppearance;
}

export const MOOD_LEGEND: MoodLegend[] = [
  { name: "Idle", meaning: "Nothing needs you.", body: "Calm, slightly curious. Nothing on right now.", state: "idle", avatar: { shape: "pebble", color: "ink", expression: "neutral" } },
  { name: "Thinking", meaning: "Work is happening. Three dots.", body: "Three dots. It's working something out.", state: "thinking", avatar: { shape: "pebble", color: "ink", expression: "neutral" } },
  { name: "Orbit", meaning: "Longer-running work. Rings spinning; leave it be.", body: "Rings spinning. Hard at work — leave it be.", state: "orbit", avatar: { shape: "pebble", color: "ink", expression: "neutral" } },
  { name: "Notification", meaning: "It needs your attention. A blue dot appears.", body: "A blue dot appears. It needs you.", state: "notification", avatar: { shape: "pebble", color: "ink", expression: "neutral" } },
];
