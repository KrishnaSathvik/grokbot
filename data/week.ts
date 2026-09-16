export interface WeekStage {
  day: string;
  title: string;
  summary: string;
  steps: string[];
  learning: string;
}

export const WEEK_INTRO = "Start small, learn what works, then hand over more.";

export const WEEK: WeekStage[] = [
  {
    day: "Day 1",
    title: "Observe",
    summary: "Pick one small job you already do well, so you'd spot a mistake straight away.",
    steps: [
      "Only log it into the accounts that one job needs — not everything at once.",
      "Decide who it should come to when something looks odd.",
    ],
    learning: "Whether it understands the job the way you do, before it touches anything that matters.",
  },
  {
    day: "Days 2–3",
    title: "Delegate",
    summary: "Let it write drafts only at first. Nothing sends, nothing pays, nothing gets deleted.",
    steps: ["Do the job once with it watching, then let it copy you."],
    learning: "How closely it copies your way of working, and where it improvises.",
  },
  {
    day: "Days 4–5",
    title: "Refine",
    summary: "Let it copy you for the rest of the week while you check the results.",
    steps: ["Read what it did each morning."],
    learning: "The small corrections that become how it does the job tomorrow.",
  },
  {
    day: "Days 6–7",
    title: "Loosen",
    summary: "When you stop finding problems, loosen the reins.",
    steps: ["Keep the real decisions — money, sending, deleting — behind your approval."],
    learning: "What it can safely own, and what should always come back to you.",
  },
];
