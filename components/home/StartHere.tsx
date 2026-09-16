import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { START_HERE } from "@/data/concepts";

export function StartHere() {
  return (
    <Section id="start-here" className="!py-12 md:!py-16">
      <SectionHead id="start-here" label="Not sure where to begin?" title="Start here">
        <p className="container-read mt-5 text-muted">Three pages, in order. Half an hour, and you&rsquo;ll know what to hand over first.</p>
        <ol className="mt-10 grid list-none grid-cols-1 gap-x-8 p-0 md:grid-cols-3">
          {START_HERE.map((s, i) => (
            <li key={s.href} className="border-t border-rule">
              <Link
                href={s.href}
                className="arrow-link row-link -mx-4 flex min-h-full flex-col px-4 py-6 no-underline md:py-7"
              >
                <span className="font-display text-[32px] font-light leading-none tracking-tight text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 font-display text-[24px] font-extrabold leading-tight tracking-tight">{s.label}</span>
                <span className="mt-1.5 font-display text-[15px] text-muted">{s.why}</span>
                <span aria-hidden="true" className="arrow mt-6 font-display text-[22px] font-light leading-none">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </SectionHead>
    </Section>
  );
}
