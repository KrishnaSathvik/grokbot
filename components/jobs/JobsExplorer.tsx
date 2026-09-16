"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import { CADENCE_LABEL, JOB_CATEGORIES, OVERSIGHT_LABEL, STARTER_JOBS, type Job, type JobCategory } from "@/data/jobs";
import { JobCard } from "./JobCard";
import { JobDialog } from "./JobDialog";

type Filter = "All" | JobCategory;

export function JobsExplorer({ jobs }: { jobs: Job[] }) {
  const [active, setActive] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Job | null>(null);
  const q = useDeferredValue(query.trim().toLowerCase());
  const inputId = useId();

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: jobs.length };
    for (const j of jobs) c[j.category] = (c[j.category] ?? 0) + 1;
    return c;
  }, [jobs]);

  const list = useMemo(() => {
    let l = active === "All" ? jobs : jobs.filter((j) => j.category === active);
    if (q) {
      l = l.filter((j) =>
        `${j.category} ${j.title} ${j.description} ${CADENCE_LABEL[j.cadence]} ${OVERSIGHT_LABEL[j.oversight]}`
          .toLowerCase()
          .includes(q),
      );
    }
    return l;
  }, [jobs, active, q]);

  const browsing = active === "All" && !q;
  const suffix = q ? " matching" : active === "All" ? " in total" : ` for ${active.toLowerCase()}`;
  const filters: Filter[] = ["All", ...JOB_CATEGORIES];
  const grid = "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div>
      {/* Finder */}
      <div id="find" data-anchor className="jobs-finder">
        <label htmlFor={inputId} className="visually-hidden">
          What do you want help with?
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-[560px]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="pointer-events-none absolute left-3.5 top-3.5 h-5 w-5 text-muted">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search jobs…"
              autoComplete="off"
              aria-label="Search jobs"
              className="min-h-12 w-full rounded-sm border border-rule bg-wash py-2 pl-11 pr-4 font-display text-[16px] text-ink placeholder:text-subtle focus:border-ink"
            />
          </div>
          <p className="shrink-0 font-display text-[14px] text-muted" aria-live="polite">
            {list.length} {list.length === 1 ? "job" : "jobs"}{suffix}
          </p>
        </div>
        <div className="mt-3 sm:hidden">
          <label htmlFor={`${inputId}-category`} className="mb-1.5 block font-display text-[13px] font-semibold">Category</label>
          <select
            id={`${inputId}-category`}
            value={active}
            onChange={(e) => setActive(e.target.value as Filter)}
            className="min-h-12 w-full rounded-sm border border-rule bg-paper px-3 font-display text-[16px] text-ink"
          >
            {filters.map((f) => <option key={f} value={f}>{f} ({counts[f] ?? 0})</option>)}
          </select>
        </div>
        <div role="group" aria-label="Filter by group" className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={active === f} onClick={() => setActive(f)} className="job-filter">
              {f}
              <span className={active === f ? "opacity-70" : "text-muted"}>{counts[f] ?? 0}</span>
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <div className="mt-8 border-t border-rule pt-6">
          <p className="font-display text-muted">No jobs match that search.</p>
          <button type="button" className="pill mt-4" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      ) : browsing ? (
        <>
          <div id="starters" data-anchor className="mt-14">
            <p className="eyebrow text-muted">Not sure where to start?</p>
            <h3 className="mt-2 text-[clamp(1.5rem,2.5vw,1.75rem)]">Good first jobs</h3>
            <p className="mt-2 max-w-[60ch] text-[16.5px] text-muted">
              Repeatable, easy to check, and nothing sends, pays or deletes. Six this guide would pick first.
            </p>
            <div className={`${grid} mt-6`}>
              {STARTER_JOBS.map((j) => (
                <JobCard key={j.slug} job={j} onOpen={setOpen} featured />
              ))}
            </div>
          </div>

          <div id="all" data-anchor className="mt-16 border-t border-ink pt-8">
            <h3 className="text-[clamp(1.5rem,2.5vw,1.75rem)]">All {jobs.length} jobs</h3>
            {JOB_CATEGORIES.map((cat) => {
              const items = list.filter((j) => j.category === cat);
              return (
                <div key={cat} id={`group-${cat.toLowerCase()}`}>
                  <h4 className="eyebrow mb-3 mt-10 text-[13px] font-extrabold text-muted">
                    {cat} · {items.length}
                  </h4>
                  <div className={grid}>
                    {items.map((j) => (
                      <JobCard key={j.slug} job={j} onOpen={setOpen} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className={`${grid} mt-8`}>
          {list.map((j) => (
            <JobCard key={j.slug} job={j} onOpen={setOpen} />
          ))}
        </div>
      )}

      <JobDialog job={open} onClose={() => setOpen(null)} />
    </div>
  );
}
