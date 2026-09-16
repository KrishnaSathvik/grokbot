import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { LevelDots } from "@/components/ui/LevelDots";
import { TRUST_LEVELS } from "@/data/trust";

export function TrustLevels() {
  return (
    <Section id="levels">
      <SectionHead id="levels" label="Three levels" title="Hand over, review, approve">
        <p className="container-read mt-5">
          Most jobs sort themselves into one of three piles. The question is never whether to trust it, but which pile the
          job belongs in.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-8">
          {TRUST_LEVELS.map((lvl, i) => (
            <div key={lvl.id} id={lvl.id} data-anchor className="border-t-2 border-ink py-6 font-display md:py-0 md:pt-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[32px] font-light leading-none tracking-tight text-subtle">{String(i + 1).padStart(2, "0")}</p>
                <LevelDots level={lvl.oversight} label={`Oversight ${lvl.oversight} of 3`} />
              </div>
              <h3 className="mt-5 text-[28px] uppercase leading-none tracking-[-0.02em]">{lvl.title}</h3>
              <p className="mt-1.5 text-[15px] font-semibold text-muted">{lvl.tagline}</p>
              <p className="mt-4 max-w-[32ch] font-body text-[16.5px] leading-[1.55]">{lvl.summary}</p>
              <ul className="mt-5 list-none p-0">
                {lvl.examples.map((e) => (
                  <li key={e} className="border-t border-rule py-2.5 text-[15px] leading-[1.5] text-muted">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionHead>
    </Section>
  );
}
