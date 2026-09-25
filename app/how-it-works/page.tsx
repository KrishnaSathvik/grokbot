import type { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Comparison } from "@/components/how-it-works/Comparison";
import { FiveThings } from "@/components/how-it-works/FiveThings";
import { MorningTimeline } from "@/components/how-it-works/MorningTimeline";
import { ProcessStrip } from "@/components/how-it-works/ProcessStrip";
import { WhatItIs } from "@/components/how-it-works/WhatItIs";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMetadata } from "@/lib/site";

const HREF = "/how-it-works";
export const metadata: Metadata = pageMetadata(HREF);

export default function Page() {
  return (
    <>
      <PageHeader href={HREF} title="What actually happens when a helper keeps working" aside={<ProcessStrip />}>
        <p>
          A helper is not a chat window. It&rsquo;s a colleague with a computer of its own. This page explains what that
          computer is, which Grok this is, the five things worth knowing, and one morning start to finish.
        </p>
      </PageHeader>
      <main id="main">
        <WhatItIs />
        <Comparison />
        <FiveThings />
        <MorningTimeline />
        <RelatedPosts
          title="Related explainers"
          slugs={["grok-bot-team-workflows", "grok-bot-security-shared-computer", "real-grok-bot-projects"]}
        />
      </main>
    </>
  );
}
