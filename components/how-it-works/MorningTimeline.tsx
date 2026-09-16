import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";

const STEPS = [
  { t: "You ask", title: "The job", body: "“Check the support inbox every morning and write the replies. Don’t send anything — leave them for me.”" },
  { t: "Once", title: "Getting in", body: "You log it into the support account once, on its computer. It only ever reaches the accounts you’ve signed it into." },
  { t: "06:00", title: "Overnight", body: "At six it reads the new messages, looks up what was said last time, checks the help pages, and writes each reply the way you would." },
  { t: "Morning", title: "The handover", body: "A short summary, the drafts waiting for a quick read, and nothing at all on quiet days. Your edits become how it writes tomorrow." },
];

export function MorningTimeline() {
  return (
    <Section id="example">
      <SectionHead id="example" label="An example" title="A morning, start to finish">
        <p className="container-read mt-5 text-muted">One helper looking after customer emails.</p>
        <ol className="mt-14 grid list-none grid-cols-1 gap-y-10 p-0 sm:grid-cols-2 sm:gap-x-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-0">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-l border-rule pl-6 sm:border-l-0 sm:pl-0 lg:pr-6">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1 h-[13px] w-[13px] rounded-full border-2 border-ink bg-paper sm:hidden"
              />
              <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold uppercase leading-none tracking-[-0.02em]">{s.t}</p>
              {/* Rule with a dot on it: the timeline itself, at sm and up. */}
              <span aria-hidden="true" className="relative mt-5 hidden h-[13px] sm:block">
                <span className={`absolute inset-y-0 left-0 my-auto h-px bg-rule ${i === STEPS.length - 1 ? "right-6" : "-right-8 lg:right-0"}`} />
                <span className="absolute left-0 top-0 h-[13px] w-[13px] rounded-full bg-ink" />
              </span>
              <p className="eyebrow mt-4 text-muted">
                {String(i + 1).padStart(2, "0")} · {s.title}
              </p>
              <p className="mt-2.5 max-w-[30ch] text-[17px] leading-[1.6] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 border-t border-rule pt-8">
          <p className="text-lg text-muted">Ready to see what work you could hand over?</p>
          <Link href="/jobs" className="arrow-link mt-3 inline-block font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-extrabold tracking-tight no-underline hover:text-muted">
            Explore 56 jobs{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </SectionHead>
    </Section>
  );
}
