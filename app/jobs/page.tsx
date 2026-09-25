import type { Metadata } from "next";
import { Suspense } from "react";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { JobsExplorer } from "@/components/jobs/JobsExplorer";
import { JobsLegend } from "@/components/jobs/JobsLegend";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { JOBS } from "@/data/jobs";
import { pageMetadata } from "@/lib/site";

const HREF = "/jobs";
export const metadata: Metadata = pageMetadata(HREF);

export default function Page() {
  return (
    <>
      <PageHeader href={HREF} title={`${JOBS.length} jobs you could hand over`}>
        <p>
          These are the ready-made helpers xAI offers. Not every one needs to become a full automation: start with something
          repeatable, observable and easy to review. Most of the popular ones have nothing to do with computers.
          They&rsquo;re sales, hiring, marketing and money.
        </p>
      </PageHeader>
      <main id="main">
        <section id="explorer" aria-labelledby="explorer-title" className="pb-24 pt-8 md:pb-32 md:pt-10">
          <Container>
            <h2 id="explorer-title" className="visually-hidden">
              Search and filter the jobs
            </h2>
            <Suspense fallback={<p className="font-display text-muted">Loading jobs…</p>}>
              <JobsExplorer jobs={JOBS} />
            </Suspense>
            <JobsLegend />
          </Container>
        </section>
        <RelatedPosts
          title="Role guides"
          slugs={["grok-bot-for-marketing", "grok-bot-for-engineering", "grok-bot-for-sales-gtm"]}
        />
      </main>
    </>
  );
}
