import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { LevelDots } from "@/components/ui/LevelDots";
import { AUTONOMY_LEVEL, TRUST_MATRIX } from "@/data/trust";

export function TrustMatrix() {
  return (
    <Section id="matrix">
      <SectionHead id="matrix" label="A simple rule" title="How much rope, by kind of job">
        <div className="mt-8 max-w-[960px] overflow-x-auto font-display">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="eyebrow py-3 pr-4 font-semibold text-muted">
                  Kind of job
                </th>
                <th scope="col" className="eyebrow py-3 pr-4 font-semibold text-muted">
                  Autonomy
                </th>
                <th scope="col" className="eyebrow py-3 font-semibold text-muted">
                  Your review
                </th>
              </tr>
            </thead>
            <tbody>
              {TRUST_MATRIX.map((r) => (
                <tr key={r.task} className="border-b border-rule align-middle">
                  <th scope="row" className="py-5 pr-4 text-[17px] font-extrabold tracking-tight">
                    {r.task}
                  </th>
                  <td className="py-5 pr-6">
                    <span className="flex items-center gap-3 text-[15px] font-semibold">
                      <LevelDots level={AUTONOMY_LEVEL[r.autonomy]} label={`Autonomy ${r.autonomy}`} />
                      {r.autonomy}
                    </span>
                  </td>
                  <td className="py-5 text-[16px] leading-[1.5] text-muted">{r.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionHead>
    </Section>
  );
}
