import type { Metadata } from "next";
import { AfterWeekOne } from "@/components/getting-started/AfterWeekOne";
import { ChooseFirstTask } from "@/components/getting-started/ChooseFirstTask";
import { FirstWeek } from "@/components/getting-started/FirstWeek";
import { StarterPrompts } from "@/components/getting-started/StarterPrompts";
import { WeekStrip } from "@/components/getting-started/WeekStrip";
import { PageHeader } from "@/components/layout/PageHeader";
import { pageMetadata } from "@/lib/site";

const HREF = "/getting-started";
export const metadata: Metadata = pageMetadata(HREF);

export default function Page() {
  return (
    <>
      <PageHeader href={HREF} title={<>Don&rsquo;t hand over everything on day one.</>} aside={<WeekStrip />}>
        <p>
          You understand it. Now what do you actually do? Say one of these, pick one small job, and give it a week: observe,
          delegate, refine, then loosen the reins.
        </p>
      </PageHeader>
      <main id="main">
        <StarterPrompts />
        <ChooseFirstTask />
        <FirstWeek />
        <AfterWeekOne />
      </main>
    </>
  );
}
