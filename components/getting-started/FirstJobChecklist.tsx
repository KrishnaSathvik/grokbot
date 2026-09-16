"use client";

import { useId, useState } from "react";

export interface Criterion {
  title: string;
  body: string;
}

/** Four criteria as a tick list. Three or four ticks means a good first job. */
export function FirstJobChecklist({ criteria }: { criteria: Criterion[] }) {
  const [ticked, setTicked] = useState<boolean[]>(() => criteria.map(() => false));
  const base = useId();
  const n = ticked.filter(Boolean).length;
  const verdict =
    n === 0
      ? "Tick the ones that describe the job you have in mind."
      : n === 4
        ? "Great first job. Keep the first run supervised."
        : n === 3
        ? "Looks like a good first job."
        : "Probably not the first one. Pick something smaller, or read what it did more closely.";

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(280px,5fr)] lg:gap-16">
      <ul className="list-none border-t border-ink p-0 font-display">
        {criteria.map((c, i) => {
          const id = `${base}-${i}`;
          return (
            <li key={c.title} className="border-b border-rule">
              <label htmlFor={id} className="row-link -mx-4 flex cursor-pointer items-start gap-4 px-4 py-4">
                <input
                  id={id}
                  type="checkbox"
                  checked={ticked[i]}
                  onChange={() => setTicked((t) => t.map((v, k) => (k === i ? !v : v)))}
                  className="mt-1 h-5 w-5 flex-none cursor-pointer accent-black"
                />
                <span>
                  <span className="block text-[19px] font-extrabold tracking-tight">{c.title}</span>
                  <span className="mt-1 block max-w-[52ch] text-[16px] leading-[1.55] text-muted">{c.body}</span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="self-start border border-ink p-6 font-display lg:sticky lg:top-24">
        <p className="eyebrow text-muted">Your job matches</p>
        <p className="mt-2 text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none tracking-tight" aria-live="polite">
          {n}
          <span className="text-subtle">/{criteria.length}</span>
        </p>
        <p className="mt-3 text-[16px] leading-[1.5]" aria-live="polite">
          {verdict}
        </p>
        <p className="mt-4 text-[13px] text-muted">If it matches three or four, it&rsquo;s probably a good first job.</p>
      </div>
    </div>
  );
}
