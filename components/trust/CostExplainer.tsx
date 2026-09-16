import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { COST } from "@/data/cost";

export function CostExplainer() {
  return (
    <Section id="cost" tone="wash">
      <SectionHead id="cost" label="Getting it" title="What it costs">
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(280px,5fr)] lg:gap-20">
          <p className="container-read">{COST.intro}</p>
          <div className="self-start border-2 border-ink bg-paper p-6 font-display">
            <p className="eyebrow text-muted">For most people there are two costs</p>
            <ol className="mt-3 list-none p-0">
              {COST.takeaway.map((t, i) => (
                <li key={t} className="flex gap-4 border-t border-rule py-3 text-[17px] font-semibold leading-snug first:border-t-0">
                  <span className="text-[13px] font-extrabold tracking-[0.08em] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <h3 className="eyebrow mt-12 text-muted">Plans that include it</h3>
        <p className="mt-2 font-display text-[13px] text-muted">Prices last checked September 2026</p>
        <div className="mt-4 grid grid-cols-1 gap-3.5 font-display sm:grid-cols-2 lg:grid-cols-4">
          {COST.plans.map((p) => (
            <article key={p.name} className={`bg-paper px-5 pb-6 pt-5 ${p.primary ? "border-2 border-ink" : "border border-rule"}`}>
              <p className="eyebrow text-muted">{p.name}</p>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                {p.qualifier ? <span className="text-[13px] font-semibold text-muted">{p.qualifier}</span> : null}
                <span className="text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold leading-none tracking-tight">{p.amount}</span>
                {p.per ? <span className="text-[14px] text-muted">{p.per}</span> : null}
              </p>
              <p className="mt-4 text-[15.5px] leading-[1.5] text-muted">{p.body}</p>
            </article>
          ))}
        </div>

        <h3 className="eyebrow mt-12 text-muted">What affects the bill</h3>
        <ol className="mt-4 grid list-none grid-cols-1 gap-x-6 gap-y-5 p-0 font-display sm:grid-cols-2 lg:grid-cols-4">
          {COST.drivers.map((d, i) => (
            <li key={d.title} className="border-t border-ink pt-3">
              <span className="block text-[28px] font-light leading-none tracking-tight text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-3 text-[17px]">{d.title}</h4>
              <p className="mt-2 text-[15.5px] leading-[1.5] text-muted">{d.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[64ch] text-[16.5px] leading-[1.6] text-muted">{COST.note}</p>
      </SectionHead>
    </Section>
  );
}
