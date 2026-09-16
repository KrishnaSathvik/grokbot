import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { METHODOLOGY } from "@/data/sources";
import { LAST_UPDATED_LABEL } from "@/lib/site";

export function Methodology() {
  return (
    <Section id="methodology" tone="wash">
      <SectionHead id="methodology" label="Methodology" title="How the guide tells them apart">
        <p className="eyebrow mt-5 text-muted">Last updated {LAST_UPDATED_LABEL}</p>
        <dl className="mt-8 max-w-[920px] border-t border-rule">
          {METHODOLOGY.map((m) => (
            <div key={m.title} className="grid grid-cols-1 gap-2 border-b border-rule py-6 md:grid-cols-[minmax(11rem,30%)_minmax(0,1fr)] md:gap-x-7">
              <dt className="font-display text-[18px] font-extrabold tracking-tight">{m.title}</dt>
              <dd className="m-0 text-[16.5px] leading-[1.6] text-muted">{m.body}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-[60ch] text-[15px] leading-[1.55] text-muted">
          Not affiliated with xAI. The avatar engine here is an independent implementation; the product&rsquo;s own avatars
          may differ in detail.
        </p>
      </SectionHead>
    </Section>
  );
}
