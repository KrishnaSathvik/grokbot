/** Explains the two tags on every card. Static. */
export function JobsLegend() {
  return (
    <dl className="mt-14 grid max-w-[960px] grid-cols-1 gap-x-10 gap-y-5 border-t border-rule pt-6 font-display text-[15px] leading-[1.5] text-muted md:grid-cols-2">
      <div>
        <dt className="eyebrow text-ink">Best as</dt>
        <dd className="mt-1.5">
          <strong className="font-semibold text-ink">One-off</strong> when you ask for it,{" "}
          <strong className="font-semibold text-ink">Recurring</strong> on a schedule, or{" "}
          <strong className="font-semibold text-ink">Monitoring</strong>: it watches and only speaks up when something changes.
        </dd>
      </div>
      <div>
        <dt className="eyebrow text-ink">Oversight</dt>
        <dd className="mt-1.5">
          <strong className="font-semibold text-ink">Low</strong> means skim the summary,{" "}
          <strong className="font-semibold text-ink">Review</strong> means read before it goes out, and{" "}
          <strong className="font-semibold text-ink">Approval</strong> means nothing happens without your yes. Both tags are this guide&rsquo;s suggestion, read off each job&rsquo;s description, not an xAI label.
        </dd>
      </div>
    </dl>
  );
}
