import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";

const FLOW = [
  { label: "You give it", lines: ["“Keep an eye on this inbox.”"] },
  { label: "It", lines: ["opens the account", "checks the messages", "does the repetitive work"] },
  { label: "It returns when", lines: ["something is done", "or a decision is needed"] },
];

export function WhatItIs() {
  return (
    <Section id="basics">
      <SectionHead id="basics" label="The basics" title="What it is">
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(280px,5fr)] lg:gap-20">
          <div className="container-read">
            <p className="text-kicker max-w-[40ch]">Think of it as hiring an assistant rather than using an app.</p>
            <div className="prose-flow mt-5">
              <p>
                You create a helper for one job — sorting your inbox, keeping expenses tidy, chasing job applicants. You
                log it into the accounts it needs, the same way you&rsquo;d give a new colleague access on their first
                day.
              </p>
              <p>Then you message it like you&rsquo;d text a coworker, and it goes and does the work.</p>
              <p>
                The work happens on a computer in the cloud, always on, not on your laptop. It opens websites and clicks
                through them exactly like a person would, including the clunky old systems that never work with anything
                else.
              </p>
              <p>
                All the helpers on your account share that one computer, so they can hand jobs off — they aren&rsquo;t
                separate locked rooms. It comes back when the job is finished, or when it needs you to decide something.
                You can have several running at once, each on a different job.
              </p>
            </div>
            <p className="mt-7 max-w-[46ch] border-l-2 border-ink py-3.5 pl-6 text-[clamp(1.125rem,1.6vw,1.375rem)] italic leading-[1.4]">
              These aren&rsquo;t chatbots you keep prompting. They keep going when your laptop is shut.
            </p>
          </div>

          <ol className="m-0 list-none self-start border border-rule p-6 font-display lg:sticky lg:top-24" aria-label="One job, step by step">
            {FLOW.map((f, i) => (
              <li key={f.label}>
                {i > 0 ? (
                  <span aria-hidden="true" className="block py-3 text-center text-subtle">
                    ↓
                  </span>
                ) : null}
                <p className="eyebrow text-muted">{f.label}</p>
                <ul className="mt-1.5 list-none p-0">
                  {f.lines.map((l) => (
                    <li key={l} className="text-[16px] font-semibold leading-snug">
                      {l}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </SectionHead>
    </Section>
  );
}
