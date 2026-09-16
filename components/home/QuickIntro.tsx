import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";

const COLUMNS = [
  { title: "Chatbot", steps: ["You ask", "It answers", "Conversation ends"] },
  { title: "Helper", steps: ["You assign", "It works", "Comes back when needed"], strong: true },
];

export function QuickIntro() {
  return (
    <Section id="intro">
      <SectionHead id="intro" label="In short" title="Think of it as hiring an assistant rather than using an app">
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(280px,5fr)] lg:gap-20">
          <div className="container-read prose-flow">
            <p>
              You create a helper for one job, log it into the accounts it needs, and message it like you&rsquo;d text a
              coworker. The work happens on a computer in the cloud that stays on, and it comes back when the job is
              finished or when it needs you to decide something.
            </p>
            <p className="max-w-[46ch] border-l-2 border-ink py-2 pl-6 text-[clamp(1.125rem,1.6vw,1.375rem)] italic leading-[1.4]">
              These aren&rsquo;t chatbots you keep prompting. They keep going when your laptop is shut.
            </p>
            <Link href="/how-it-works" className="arrow-link inline-block font-display text-[15px] font-semibold no-underline hover:text-muted">
              Learn how it works{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start font-display" aria-label="Chatbot compared with a helper">
            {COLUMNS.map((c) => (
              <div key={c.title} className={`border-t-2 pt-3 ${c.strong ? "border-ink" : "border-rule"}`}>
                <p className={`eyebrow ${c.strong ? "" : "text-muted"}`}>{c.title}</p>
                <ol className="mt-4 list-none p-0">
                  {c.steps.map((s, i) => (
                    <li key={s} className={`text-[15px] font-semibold leading-snug ${c.strong ? "" : "text-muted"}`}>
                      {i > 0 ? (
                        <span aria-hidden="true" className="block py-1.5 text-subtle">
                          ↓
                        </span>
                      ) : null}
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </SectionHead>
    </Section>
  );
}
