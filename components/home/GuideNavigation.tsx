import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { guidePage } from "@/data/navigation";

const CARDS = [
  { href: "/how-it-works", blurb: "Understand what it is, which Grok is which, the five things to know, and a morning start to finish." },
  { href: "/jobs", blurb: "Every ready-made helper xAI offers, searchable by group, with a suggested cadence and level of oversight." },
  { href: "/avatar-system", blurb: "Explore shapes, expressions, colours and all fifteen state previews in an interactive studio." },
  { href: "/getting-started", blurb: "Things to say on day one, how to pick a first job, and your first week stage by stage." },
];

const DISCOVERY = [
  {
    href: "/blog",
    label: "Blog",
    blurb: "Narrower explainers—real projects, Marketplace tours, and team workflows—that link back into the guide pillars.",
  },
  {
    href: "/in-the-wild",
    label: "In the wild",
    blurb: "Official team guides, Marketplace templates you can import, and open-source directories—grouped by how we found them.",
  },
];

export function GuideNavigation() {
  return (
    <Section id="explore">
      <Container>
        <p className="eyebrow text-muted">Want to explore?</p>
        <h2 id="explore-title" className="mt-3 text-section">
          Where to next
        </h2>
        <ul className="mt-8 grid list-none grid-cols-1 gap-x-10 p-0 md:grid-cols-2">
          {CARDS.map((c) => {
            const p = guidePage(c.href);
            return (
              <li key={c.href} className="border-t border-ink">
                <Link
                  href={c.href}
                  className="arrow-link row-link -mx-4 grid min-h-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 px-4 py-7 no-underline md:py-8"
                >
                  <div>
                    <span className="eyebrow text-muted">{p.number}</span>
                    <span className="mt-2 block font-display text-[clamp(1.625rem,3vw,2.25rem)] font-extrabold leading-none tracking-tight">
                      {p.label === "Jobs" ? "56 jobs" : p.label}
                    </span>
                    <span className="mt-3 block max-w-[40ch] font-display text-[15px] leading-[1.55] text-muted">{c.blurb}</span>
                  </div>
                  <span aria-hidden="true" className="arrow pt-7 font-display text-[28px] font-light leading-none">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
          {DISCOVERY.map((c) => (
            <li key={c.href} className="border-t border-ink">
              <Link
                href={c.href}
                className="arrow-link row-link -mx-4 grid min-h-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 px-4 py-7 no-underline md:py-8"
              >
                <div>
                  <span className="mt-2 block font-display text-[clamp(1.625rem,3vw,2.25rem)] font-extrabold leading-none tracking-tight">
                    {c.label}
                  </span>
                  <span className="mt-3 block max-w-[40ch] font-display text-[15px] leading-[1.55] text-muted">{c.blurb}</span>
                </div>
                <span aria-hidden="true" className="arrow pt-7 font-display text-[28px] font-light leading-none">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
