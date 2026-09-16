import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { KEY_CONCEPTS } from "@/data/concepts";

export function KeyConcepts() {
  return (
    <Section id="concepts" tone="wash">
      <SectionHead id="concepts" label="Four things to understand" title="What makes a helper different">
        <ol className="mt-10 grid list-none grid-cols-1 gap-x-10 gap-y-0 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {KEY_CONCEPTS.map((c, i) => (
            <li key={c.title} className="border-t border-ink">
              <Link href={c.href} className="group block py-6 no-underline md:py-7">
                <span className="block font-display text-[32px] font-light leading-none tracking-tight text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[22px] group-hover:underline">{c.title}</h3>
                <p className="mt-2.5 max-w-[34ch] text-[16px] leading-[1.55] text-muted">{c.body}</p>
              </Link>
            </li>
          ))}
        </ol>
        <Link href="/how-it-works" className="arrow-link mt-8 inline-block font-display text-[15px] font-semibold no-underline hover:text-muted">
          All five, in full{" "}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </SectionHead>
    </Section>
  );
}
