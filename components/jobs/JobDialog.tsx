"use client";

import { useEffect, useRef } from "react";
import { Avatar } from "@/components/avatar/Avatar";
import { CopyPrompt } from "@/components/ui/CopyPrompt";
import { CADENCE_LABEL, OVERSIGHT_LABEL, type Job } from "@/data/jobs";
import { promptForJob } from "@/data/prompts";
import { CATEGORY_AVATAR } from "./JobCard";

const CADENCE_NOTE: Record<Job["cadence"], string> = {
  "one-off": "You ask for it when you need it.",
  recurring: "Runs on a schedule you set.",
  monitoring: "Watches, and only speaks up when something changes.",
};

const OVERSIGHT_NOTE: Record<Job["oversight"], string> = {
  low: "Skim the summary.",
  review: "Read it before anything goes out.",
  approval: "Nothing happens without your yes.",
};

/**
 * Job detail in a native <dialog>: what it does, an example request when one
 * of the day-one messages matches, cadence, oversight, and where to try it.
 */
export function JobDialog({ job, onClose }: { job: Job | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (job && !el.open) el.showModal();
    if (!job && el.open) el.close();
  }, [job]);

  const matchedPrompt = job ? promptForJob(job.slug) : undefined;
  const prompt = job ? {
    text: matchedPrompt?.text ?? `Help me with ${job.title.toLowerCase()}. Here is the task: ${job.description} Ask me for the scope and any information you need before starting. Show me the first result for review, and ask for approval before sending, paying, deleting or making changes.`,
    href: matchedPrompt?.href ?? "https://x.ai/bot",
  } : undefined;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      aria-labelledby="job-dialog-title"
      className="m-auto w-[calc(100%-2rem)] max-w-[640px] max-h-[calc(100dvh-2rem)] overflow-y-auto border border-ink bg-paper p-0 text-ink font-display backdrop:bg-[rgba(0,0,0,0.45)]"
    >
      {job ? (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar appearance={CATEGORY_AVATAR[job.category]} time={0} size={40} tight />
              <p className="eyebrow text-muted">{job.category}</p>
            </div>
            <button type="button" onClick={() => ref.current?.close()} className="pill min-h-11 px-4 text-[14px]" aria-label="Close">
              Close ✕
            </button>
          </div>
          <h2 id="job-dialog-title" className="mt-5 text-[clamp(1.75rem,4vw,2.25rem)]">
            {job.title}
          </h2>

          <p className="eyebrow mt-7 text-muted">What it does</p>
          <p className="mt-2 max-w-[56ch] font-body text-[17.5px] leading-[1.6]">{job.description}</p>

          {prompt ? (
            <>
              <p className="eyebrow mt-7 text-muted">Example prompt</p>
              <p className="mt-2 max-w-[56ch] border-l-2 border-ink pl-5 text-[16px] leading-[1.5]">&ldquo;{prompt.text}&rdquo;</p>
            </>
          ) : null}

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-rule pt-5">
            <div>
              <dt className="eyebrow text-muted">Best as</dt>
              <dd className="mt-1.5 text-[16px] font-semibold">{CADENCE_LABEL[job.cadence]}</dd>
              <dd className="mt-0.5 text-[14px] text-muted">{CADENCE_NOTE[job.cadence]}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Review needed</dt>
              <dd className="mt-1.5 text-[16px] font-semibold">{OVERSIGHT_LABEL[job.oversight]}</dd>
              <dd className="mt-0.5 text-[14px] text-muted">{OVERSIGHT_NOTE[job.oversight]}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {prompt ? (
              <>
                <CopyPrompt text={prompt.text} label={job.title} className="pill pill-solid">
                  Copy prompt
                </CopyPrompt>
                <a href={prompt.href} target="_blank" rel="noopener" className="pill">
                  Open in Grok Bot ↗
                </a>
              </>
            ) : (
              <a href="https://x.ai/bot/use-cases" target="_blank" rel="noopener" className="pill pill-solid">
                See xAI&rsquo;s version ↗
              </a>
            )}
          </div>
          <p className="mt-5 text-[13px] text-muted">
            &ldquo;Best as&rdquo; and &ldquo;Review needed&rdquo; are this guide&rsquo;s suggestions, read off the job description, not xAI labels.
          </p>
        </div>
      ) : null}
    </dialog>
  );
}
