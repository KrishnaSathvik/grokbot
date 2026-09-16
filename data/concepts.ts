/** The four ideas the overview page leads with. Each is a short cut of one "five things" entry. */
export interface Concept {
  title: string;
  body: string;
  href: string;
}

export const KEY_CONCEPTS: Concept[] = [
  {
    title: "It keeps working",
    body: "The work happens on a computer in the cloud that stays on, not on your laptop. It keeps going when your laptop is shut.",
    href: "/how-it-works#five-things",
  },
  {
    title: "You show it once",
    body: "Do the job yourself one time while it watches. It remembers the steps and does it on its own from then on.",
    href: "/how-it-works#five-things",
  },
  {
    title: "It comes back for decisions",
    body: "It returns when the job is finished, or when it needs you to decide something. The real calls stay with you.",
    href: "/how-it-works#basics",
  },
  {
    title: "It runs on a schedule",
    body: "Every weekday at seven, or whenever a certain kind of email lands. You can look back at what it did on any day.",
    href: "/how-it-works#five-things",
  },
];

export const START_HERE = [
  { label: "Understand it", why: "Learn what a helper actually is", href: "/how-it-works" },
  { label: "Choose one useful job", why: "Browse 56 practical examples", href: "/jobs" },
  { label: "Try it for one week", why: "Follow the four-stage guide", href: "/getting-started#first-week" },
];
