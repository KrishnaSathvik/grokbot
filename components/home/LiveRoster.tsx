"use client";

import { useEffect, useState } from "react";
import { AnimatedAvatar } from "@/components/avatar/AnimatedAvatar";
import { ROSTER_STATUS, type RosterEntry, type RosterStatus } from "@/data/hero";

const dot: Record<RosterStatus, string> = {
  thinking: "bg-ink animate-pulse",
  done: "bg-ink",
  waiting: "bg-[#3b93f0]",
  idle: "bg-subtle",
};

const TICK_MS = 6500;

/**
 * The hero roster. Every few seconds one helper quietly changes status, so
 * the panel reads as things happening in the background rather than a table.
 * Static under reduced motion.
 */
export function LiveRoster({ entries, label }: { entries: RosterEntry[]; label: string }) {
  const [status, setStatus] = useState<RosterStatus[]>(() => entries.map((e) => e.status));
  const [changed, setChanged] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = window.setInterval(() => {
      const row = i % entries.length;
      i += 1;
      setStatus((s) => s.map((st, k) => (k === row ? ROSTER_STATUS[st].next : st)));
      setChanged(row);
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [entries.length]);

  return (
    <div className="border border-ink px-4 pb-2 pt-1.5 sm:px-5" aria-label="Example roster of helpers">
      <p className="eyebrow flex items-center justify-between border-b border-rule py-3 text-muted">
        {label}
        <span className="flex items-center gap-1.5 normal-case tracking-normal">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ink animate-pulse" />
          live
        </span>
      </p>
      <ul className="m-0 list-none p-0">
        {entries.map((r, k) => {
          const st = status[k];
          const meta = ROSTER_STATUS[st];
          return (
            <li
              key={r.name}
              className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b border-rule py-3 last:border-b-0 sm:grid-cols-[52px_1fr_auto]"
            >
              <AnimatedAvatar appearance={r.avatar} state={meta.state} className="h-11 w-11 sm:h-[52px] sm:w-[52px]" />
              <div className="min-w-0">
                <p className="font-display text-[15px] font-semibold">{r.name}</p>
                <p className="font-display text-[13px] text-muted">{r.role}</p>
              </div>
              <p
                key={`${k}-${st}`}
                className={`flex items-center gap-2 font-display text-[13px] text-muted ${changed === k ? "motion-safe:animate-fade-in" : ""}`}
                aria-live={changed === k ? "polite" : undefined}
              >
                <span className={`h-[7px] w-[7px] flex-none rounded-full ${dot[st]}`} aria-hidden="true" />
                {st === "done" ? "✓ " : null}
                {meta.label}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
