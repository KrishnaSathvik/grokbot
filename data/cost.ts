export interface Plan {
  name: string;
  /** The number, shown large. */
  amount: string;
  /** What the number is per, shown small. */
  per: string;
  /** "From", or empty. */
  qualifier: string;
  body: string;
  primary: boolean;
}

export const COST = {
  /** The takeaway, before any plan: what you actually pay for. */
  takeaway: ["Your Grok plan", "Extra usage, only if the job needs it and you turn it on"],
  intro:
    "You can't buy Grok Bot on its own. It comes with SuperGrok (not the Lite plan), with Cursor, or by linking X Premium+. Cost then depends on how much helper time you use: a weekly allowance of its own, then extra on demand if you turn that on — it doesn't eat your normal chat quota.",
  plans: [
    {
      name: "SuperGrok",
      amount: "$30",
      per: "a month",
      qualifier: "From",
      body: "Helpers, plus the newest Grok and higher limits everywhere else. Not the Lite plan. Bigger tiers add speed and more usage.",
      primary: true,
    },
    {
      name: "Cursor Pro",
      amount: "$20",
      per: "a month",
      qualifier: "From",
      body: "Helpers logged into your tools, running on a schedule, on desktop and phone. You don't need Cursor — it's just another door in.",
      primary: false,
    },
    {
      name: "Cursor Teams",
      amount: "$40",
      per: "per person, a month",
      qualifier: "",
      body: "The same, with one bill for the team and helpers you can share with colleagues.",
      primary: false,
    },
    {
      name: "Companies",
      amount: "On request",
      per: "",
      qualifier: "",
      body: "Everyone in the company can use it, with controls over who can do what and a record of what every helper did.",
      primary: false,
    },
  ] satisfies Plan[],
  drivers: [
    {
      title: "A plan that includes it",
      body: "There is no standalone Grok Bot price. You pay for SuperGrok, Cursor, or X Premium+, and helpers come with that.",
    },
    {
      title: "Weekly helper time",
      body: "Usage is metered on its own: a weekly allowance, separate from ordinary chat.",
    },
    {
      title: "Extra on demand",
      body: "If you turn it on, you can keep going past the weekly allowance. You don't have to.",
    },
    {
      title: "You can keep a lid on it",
      body: "Start with drafts only, one job, and the accounts that job needs. Prices and which plans include it have already changed more than once since launch.",
    },
  ],
  note: "Works on Mac, Windows, Linux, iPhone (iOS 18 or later) and Android (9 or later). Not on iPad. Check current prices at the source before you commit.",
  /** Ways to keep the bill predictable. Each one restates something already on this page or in the first-week plan. */
  controls: [
    { title: "One job first", body: "Give a helper one job you already know well. Add the second only when the first runs quietly." },
    { title: "Drafts before actions", body: "Let it write and gather at first. Nothing sends, pays or deletes until you've read a week of its work." },
    { title: "Only the accounts it needs", body: "Log it into what that one job needs, not everything at once. Less to watch, less to undo." },
    { title: "Leave extra-on-demand off", body: "The weekly allowance is the ceiling until you switch on-demand usage on. Don't, until you've seen what a normal week costs." },
    { title: "Check the price at the source", body: "Plans and prices have changed more than once since launch. Confirm on xAI's own page before you commit." },
  ],
};
