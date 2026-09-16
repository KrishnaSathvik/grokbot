import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";

const CARDS = [
  {
    meta: "Chat",
    word: "Talk",
    title: "Grok",
    best: "Best for answers",
    body: "Use when you want a conversation at grok.com or in the phone apps. You ask, it answers. It can also search, talk out loud, and make pictures and video.",
    isThis: false,
  },
  {
    meta: "Social",
    word: "Reply",
    title: "@grok on X",
    best: "Best for a reply in a thread",
    body: "Use when you tag it under a post on X. Free, with limits. This is what most people mean when they say “the Grok bot” — but it’s not the thing this guide is about.",
    isThis: false,
  },
  {
    meta: "Agent · this guide",
    word: "Work",
    title: "Grok Bot",
    best: "Best for finishing jobs",
    body: "Use when you want helpers that do work inside your own accounts, on a cloud computer that stays on around the clock.",
    isThis: true,
  },
];

export function Comparison() {
  return (
    <Section id="which" tone="wash">
      <SectionHead id="which" label="Easily confused" title="Which Grok is which">
        <p className="container-read mt-5">Three different things share the name, and most of the confusion starts here.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className={`bg-paper px-6 pb-7 pt-6 font-display ${c.isThis ? "border-2 border-ink" : "border border-rule"}`}
            >
              <p className={`eyebrow ${c.isThis ? "" : "text-muted"}`}>{c.meta}</p>
              <p className={`mt-4 text-[clamp(2.5rem,4.5vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em] ${c.isThis ? "" : "text-subtle"}`}>
                {c.word}
              </p>
              <h3 className="mt-5 text-[22px]">{c.title}</h3>
              <p className="mt-1.5 text-[15px] font-semibold text-muted">{c.best}</p>
              <p className="mt-3 font-body text-[16.5px] leading-[1.55] text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </SectionHead>
    </Section>
  );
}
