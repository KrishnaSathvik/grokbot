import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { WEEK, WEEK_INTRO } from "@/data/week";
import { FirstWeekTimeline } from "./FirstWeekTimeline";

export function FirstWeek() {
  return (
    <Section id="first-week">
      <SectionHead id="first-week" label="Starting out" title="Your first week">
        <p className="container-read mt-5 text-muted">
          A calm way in, whether it&rsquo;s just you or a whole team. {WEEK_INTRO}
        </p>
        <FirstWeekTimeline stages={WEEK} />
      </SectionHead>
    </Section>
  );
}
