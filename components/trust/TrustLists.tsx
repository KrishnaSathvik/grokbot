import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { TRUST } from "@/data/trust";

function Column({ title, items, marker, primary }: { title: string; items: string[]; marker: "check" | "review"; primary?: boolean }) {
  return (
    <div className={`${primary ? "bg-paper" : "bg-[#fafafa]"} px-6 pb-7 pt-6 font-display sm:px-7 ${primary ? "border-2 border-ink" : "border border-rule"}`}>
      <h3 className="flex items-center gap-3 text-[22px] tracking-tight">
        <span
          aria-hidden="true"
          className={`inline-flex h-7 w-7 flex-none items-center justify-center rounded-full text-[13px] font-extrabold ${
            primary ? "bg-ink text-paper" : "border border-ink"
          }`}
        >
          {marker === "check" ? "✓" : "!"}
        </span>
        {title}
      </h3>
      <ul className="mt-5 list-none p-0">
        {items.map((it) => (
          <li key={it} className="border-t border-rule py-3.5 text-[16px] leading-[1.5]">
            <span className="visually-hidden">{marker === "check" ? "Hand over: " : "Review: "}</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The original two lists, in full. */
export function TrustLists() {
  return (
    <Section id="trust" tone="wash">
      <SectionHead id="trust" label="Good sense" title="What to trust it with">
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Column title={TRUST.handOver.title} items={TRUST.handOver.items} marker="check" primary />
          <Column title={TRUST.oversight.title} items={TRUST.oversight.items} marker="review" />
        </div>
        <p className="mt-8 max-w-[64ch] text-[16.5px] leading-[1.6] text-muted">{TRUST.note}</p>
      </SectionHead>
    </Section>
  );
}
