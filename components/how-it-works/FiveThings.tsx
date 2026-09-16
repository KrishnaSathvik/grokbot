import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";

const ITEMS = [
  {
    title: "It works on a cloud computer",
    body: (
      <>
        Always switched on, out in the cloud. It stays logged into your accounts between jobs, so it picks up where it
        left off instead of starting cold. Every helper on your account shares that computer, and each one gets its own
        screen on it.
      </>
    ),
  },
  {
    title: "You show it once",
    body: (
      <>
        Rather than setting anything up, you do the job yourself one time while it watches. It remembers the steps and
        does it on its own from then on.
      </>
    ),
  },
  {
    title: "It runs on a schedule",
    body: (
      <>
        Every weekday at seven, or whenever a certain kind of email lands. You can look back at what it did on any
        given day.
      </>
    ),
  },
  {
    title: "It learns your way",
    body: (
      <>
        It picks up how you write, your usual exceptions, who signs off on what, and when to interrupt you versus carry
        on quietly.
      </>
    ),
  },
  {
    title: "They work together",
    body: (
      <>
        Put a few helpers in one chat and they hand jobs between themselves, with one of them keeping the others on
        track. You step in for the real decisions. You can also{" "}
        <a href="https://x.ai/news/grok-bot-and-x" target="_blank" rel="noopener">
          connect X
        </a>
        , so a helper can search posts, read your timeline and check mentions. Paid users get some free X API credits
        to start.
      </>
    ),
  },
];

export function FiveThings() {
  return (
    <Section id="five-things">
      <SectionHead id="five-things" label="Five things to know" title="How it works, in five">
        <ol className="mt-10 max-w-[1040px] list-none border-t border-ink p-0">
          {ITEMS.map((item, i) => (
            <li
              key={item.title}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-rule py-10 md:grid-cols-[4.5rem_minmax(12rem,30%)_minmax(0,1fr)] md:gap-x-8"
            >
              <span className="font-display text-[32px] font-light leading-none tracking-tight text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[24px] leading-tight">{item.title}</h3>
              <p className="col-start-2 max-w-[58ch] text-[17.5px] leading-[1.7] text-muted md:col-start-3 md:pt-1">{item.body}</p>
            </li>
          ))}
        </ol>
      </SectionHead>
    </Section>
  );
}
