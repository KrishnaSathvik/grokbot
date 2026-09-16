import type { Metadata } from "next";
import { JobsExplorer } from "@/components/jobs/JobsExplorer";
import { JobsLegend } from "@/components/jobs/JobsLegend";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionNav } from "@/components/layout/SectionNav";
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
      <SectionNav sticky={false}
        items={[
          { id: "find", label: "Search" },
          { id: "starters", label: "Good first jobs" },
          { id: "all", label: "All 56" },
        ]}
      />
      <main id="main">
        <section id="explorer" aria-labelledby="explorer-title" className="pb-24 pt-2 md:pb-32">
          <Container>
            <h2 id="explorer-title" className="visually-hidden">
              Search and filter the jobs
            </h2>
            <JobsExplorer jobs={JOBS} />
            <JobsLegend />
          </Container>
        </section>
      </main>
    </>
  );
}
