import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { COST } from "@/data/cost";

export function CostControls() {
  return (
    <Section id="cost-control">
      <SectionHead id="cost-control" label="Keeping a lid on it" title="Keep costs predictable">
        <p className="container-read mt-5">Five habits. Each one restates something already on this page or in the first-week plan.</p>
        <ol className="mt-10 max-w-[1040px] list-none border-t border-ink p-0">
          {COST.controls.map((c, i) => (
            <li
              key={c.title}
              className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-rule py-8 md:grid-cols-[4.5rem_minmax(12rem,30%)_minmax(0,1fr)] md:gap-x-8"
            >
              <span className="font-display text-[32px] font-light leading-none tracking-tight text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[22px] leading-tight">{c.title}</h3>
              <p className="col-start-2 max-w-[58ch] font-display text-[16px] leading-[1.6] text-muted md:col-start-3 md:pt-1">{c.body}</p>
            </li>
          ))}
        </ol>
      </SectionHead>
    </Section>
  );
}
