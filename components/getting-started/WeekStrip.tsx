import { WEEK } from "@/data/week";

/** "One week, four stages" for the page hero. Static. */
export function WeekStrip() {
  return (
    <div className="font-display">
      <p className="eyebrow text-muted">One week · four stages</p>
      <ol className="mt-3 grid list-none grid-cols-4 gap-2 p-0" aria-label="The four stages of your first week">
        {WEEK.map((s, i) => (
          <li key={s.title} className="border-t-2 border-ink pt-2.5">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{s.day}</span>
            <span className={`mt-1 block text-[14px] font-extrabold leading-tight tracking-tight sm:text-[15px] ${i === 0 ? "" : "text-muted"}`}>
              {s.title}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
