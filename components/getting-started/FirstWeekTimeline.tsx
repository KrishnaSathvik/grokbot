"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { WeekStage } from "@/data/week";

export function FirstWeekTimeline({ stages }: { stages: WeekStage[] }) {
  const [index, setIndex] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();

  const go = (next: number) => {
    const i = (next + stages.length) % stages.length;
    setIndex(i);
    tabsRef.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(stages.length - 1);
    }
  };

  const nextStage = stages[(index + 1) % stages.length];
  const prevStage = stages[(index - 1 + stages.length) % stages.length];

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Your first week, by stage"
        className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-4"
      >
        {stages.map((s, i) => {
          const selected = i === index;
          return (
            <button
              key={s.title}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${base}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${base}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              onKeyDown={onKey}
              className={`group flex min-h-11 w-[46vw] flex-none flex-col items-start text-left transition-colors duration-200 sm:w-[200px] lg:w-auto ${
                selected ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              <span
                aria-hidden="true"
                className={`block h-1 w-full transition-colors duration-200 ${selected ? "bg-ink" : "bg-rule group-hover:bg-muted"}`}
              />
              <span className="eyebrow mt-4">{s.day}</span>
              <span
                className={`mt-1.5 font-display font-extrabold tracking-tight ${
                  selected ? "text-[clamp(1.5rem,2.6vw,2rem)] uppercase" : "text-[clamp(1.125rem,1.8vw,1.375rem)]"
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {stages.map((st, i) => (
        <div
          key={st.title}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== index}
          className="mt-10 grid grid-cols-1 gap-10 border-t border-rule pt-10 lg:grid-cols-[minmax(0,7fr)_minmax(280px,5fr)] lg:gap-16"
        >
          <div>
            <p className="eyebrow text-muted">
              {String(i + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")} · {st.day}
            </p>
            <h3 className="mt-3 text-[clamp(1.5rem,2.5vw,1.75rem)] uppercase">{st.title}</h3>
            <p className="mt-4 max-w-[40ch] text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.4]">{st.summary}</p>
            <ol className="mt-8 max-w-[600px] list-none border-t border-rule p-0 font-display">
              {st.steps.map((step, k) => (
                <li key={step} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-3 border-b border-rule py-4 text-[17px] leading-[1.5]">
                  <span className="text-[13px] font-extrabold tracking-[0.08em] text-muted">{String(k + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="font-display lg:pt-1">
            <p className="eyebrow text-muted">What you&rsquo;re learning</p>
            <p className="mt-3 text-[18px] leading-[1.5]">{st.learning}</p>
            <div className="mt-10 flex flex-wrap gap-2">
              <button type="button" className="pill" onClick={() => go(index - 1)} aria-label="Previous stage">
                ← {prevStage.title}
              </button>
              <button type="button" className="pill pill-solid arrow-link" onClick={() => go(index + 1)} aria-label="Next stage">
                Next: {nextStage.title}{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
