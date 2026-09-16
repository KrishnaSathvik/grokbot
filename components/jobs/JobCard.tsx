import { Avatar } from "@/components/avatar/Avatar";
import { CADENCE_LABEL, OVERSIGHT_LABEL, type Job, type JobCategory } from "@/data/jobs";
import type { AvatarAppearance } from "@/lib/avatar";

export const CATEGORY_AVATAR: Record<JobCategory, AvatarAppearance> = {
  Everyday: { shape: "cloud", color: "blue", expression: "attentive" },
  Sales: { shape: "squircle", color: "blue", expression: "excited" },
  Marketing: { shape: "pebble", color: "blue", expression: "happy" },
  Support: { shape: "capsule", color: "blue", expression: "neutral" },
  Hiring: { shape: "triangle", color: "blue", expression: "attentive" },
  Money: { shape: "hexagon", color: "blue", expression: "happy" },
  Product: { shape: "droplet", color: "blue", expression: "surprised" },
  Technical: { shape: "circle", color: "red", expression: "suspicious" },
  Personal: { shape: "circle", color: "blue", expression: "laughing" },
};

export function jobMeta(job: Job): string {
  return `${CADENCE_LABEL[job.cadence]} · ${OVERSIGHT_LABEL[job.oversight]} oversight`;
}

/**
 * One job. The whole card is one button that opens the detail dialog; the
 * title carries the accessible name and the overlay makes the card the hit area.
 */
export function JobCard({ job, onOpen, featured = false }: { job: Job; onOpen: (job: Job) => void; featured?: boolean }) {
  return (
    <article
      id={`${featured ? "starter" : "job"}-${job.slug}`}
      className={`job-card arrow-link row-link relative flex min-h-full flex-col px-5 pb-5 pt-5 font-display ${featured ? "border border-ink" : "border border-rule"}`}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <Avatar appearance={CATEGORY_AVATAR[job.category]} time={0} size={28} tight />
        <p className="eyebrow text-[11.5px] text-muted">{job.category}</p>
      </div>
      <h4 className="text-[19px] leading-tight">
        <button
          type="button"
          onClick={() => onOpen(job)}
          className="text-left after:absolute after:inset-0 after:content-['']"
          aria-haspopup="dialog"
        >
          {job.title}
        </button>
      </h4>
      <p className="mt-2 flex-1 text-[16px] leading-[1.5] text-muted">{job.description}</p>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-rule pt-3 text-[13px]">
        <p className="text-muted">{jobMeta(job)}</p>
        <span aria-hidden="true" className="arrow inline-block font-semibold">→</span>
      </div>
    </article>
  );
}
