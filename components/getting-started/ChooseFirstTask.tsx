import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/layout/SectionHead";
import { FirstJobChecklist } from "./FirstJobChecklist";

const CRITERIA = [
  { title: "Repeatable", body: "A job you already do the same way each time, so there's a way of doing it to show." },
  { title: "Easy to review", body: "You know it well enough to spot a mistake straight away when you read the result." },
  { title: "Not irreversible", body: "Nothing sends, pays or deletes. Anything it gets wrong, you could undo in a minute." },
  { title: "Useful enough to matter", body: "Dull enough that you're glad to hand it over, and real enough that you'll actually read what it did." },
];

export function ChooseFirstTask() {
  return (
    <Section id="first-task">
      <SectionHead id="first-task" label="Your first job" title="Choose something small you already do well">
        <p className="container-read mt-5">
          The first job sets the pattern for everything after it. Think of one, then tick what&rsquo;s true of it:
        </p>
        <FirstJobChecklist criteria={CRITERIA} />
        <p className="mt-8 max-w-[60ch] text-[16.5px] leading-[1.6] text-muted">
          Sorting an inbox into piles, pulling the week&rsquo;s expenses together, prepping a meeting: all three fit. Not sure?{" "}
          <Link href="/jobs#starters">See six good first jobs</Link>.
        </p>
      </SectionHead>
    </Section>
  );
}
