const STAGES = ["You assign", "Helper works", "Uses your tools", "Returns, or asks"];

/** Four-stage strip for the page hero: the whole chapter in one glance. Static. */
export function ProcessStrip() {
  return (
    <ol className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-6 p-0 font-display sm:grid-cols-4 sm:gap-y-0" aria-label="The four stages">
      {STAGES.map((s, i) => (
        <li key={s} className="border-t-2 border-ink pt-3">
          <span className="eyebrow text-muted">
            {String(i + 1).padStart(2, "0")}
            {i < STAGES.length - 1 ? (
              <span aria-hidden="true" className="ml-1.5 text-subtle">
                →
              </span>
            ) : null}
          </span>
          <span className="mt-1.5 block text-[15px] font-extrabold leading-tight tracking-tight sm:text-[16px]">{s}</span>
        </li>
      ))}
    </ol>
  );
}
