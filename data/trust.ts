export const TRUST = {
  handOver: {
    title: "Usually safe to delegate",
    items: [
      "Dull, repetitive jobs you already know how to do",
      "Gathering and tidying things up overnight, ready for you in the morning",
      "Writing drafts that you read before anything goes out",
      "Anything you could undo in a minute if it got it wrong",
      "Websites and systems that are a chore to click through",
      "Pulling scattered notes into one place before a meeting",
    ],
  },
  oversight: {
    title: "Keep a human in the loop",
    items: [
      "Anything that spends money or pays someone",
      "Messages to customers or public posts, which can't be taken back",
      "Anything legal, medical or official, where a person has to be answerable",
      "Giving someone access, or deleting things",
      "Long stretches with nobody checking — it's new, and still in beta",
      "Treating two helpers as a wall between jobs — they share one computer and the logins on it",
    ],
  },
  note: "The usual problem with helpers like this isn't refusing to do things. It's doing something slightly wrong with complete confidence, and nobody noticing until later. Treat it like a capable new hire in their first week: give it real work, then read what it did. Some sites will still block automation, ask for a CAPTCHA, or need you to take over — it should hand those steps back rather than push through.",
};

/**
 * The two lists above, sorted into three levels of trust. Same examples, one
 * extra distinction: things you read before they go out, versus things that
 * should never happen without your yes.
 */
export interface TrustLevel {
  id: "hand-over" | "review" | "approve";
  title: string;
  /** One line under the title: what the level means for you. */
  tagline: string;
  /** 1–3: how many dots are filled on the oversight scale. */
  oversight: 1 | 2 | 3;
  summary: string;
  examples: string[];
}

export const TRUST_LEVELS: TrustLevel[] = [
  {
    id: "hand-over",
    title: "Hand over",
    tagline: "Can run alone",
    oversight: 1,
    summary: "Low-risk, repeatable work you could undo in a minute.",
    examples: [
      "Gathering and tidying overnight",
      "Repetitive jobs you already know how to do",
      "Clicking through chore websites and old systems",
      "Pulling scattered notes together before a meeting",
    ],
  },
  {
    id: "review",
    title: "Review",
    tagline: "Check the result",
    oversight: 2,
    summary: "Work that goes out under your name. It drafts, you read, then it goes.",
    examples: [
      "Replies to customers",
      "Public posts and announcements",
      "Anything legal, medical or official",
      "Any long unattended run — read what it did",
    ],
  },
  {
    id: "approve",
    title: "Approve",
    tagline: "Nothing happens until you say yes",
    oversight: 3,
    summary: "Irreversible or sensitive actions stay behind your yes, every time.",
    examples: [
      "Spending money or paying someone",
      "Giving someone access",
      "Deleting things",
      "Sending anything that can't be taken back",
    ],
  },
];

export interface TrustMatrixRow {
  task: string;
  autonomy: "High" | "Medium" | "Low";
  review: string;
}

export const AUTONOMY_LEVEL: Record<TrustMatrixRow["autonomy"], 1 | 2 | 3> = { High: 3, Medium: 2, Low: 1 };

export const TRUST_MATRIX: TrustMatrixRow[] = [
  { task: "Gathering and tidying", autonomy: "High", review: "Light — skim the morning summary" },
  { task: "Watching a queue or inbox", autonomy: "High", review: "When it flags something" },
  { task: "Drafting replies and posts", autonomy: "Medium", review: "Yes — read before it goes out" },
  { task: "Booking, buying, paying", autonomy: "Low", review: "Required — your approval each time" },
  { task: "Access and deleting", autonomy: "Low", review: "Required — and rarely worth delegating" },
];
