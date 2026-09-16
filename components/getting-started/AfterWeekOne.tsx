import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function AfterWeekOne() {
  return (
    <Section id="after" labelledBy="after-title">
      <Container>
        <div>
          <p className="eyebrow text-muted">After week one</p>
          <div className="min-w-0">
            <h2 id="after-title" className="mt-3 max-w-[18ch] text-section">
              You don&rsquo;t need twenty helpers.
            </h2>
            <p className="container-read mt-6 text-lede font-light">
              You need a few jobs that run quietly and reliably save you time. Add the next one only when the last one has
              stopped surprising you, and keep the real decisions — money, sending, deleting — behind your approval.
            </p>
            <Link
              href="/trust-and-cost"
              className="arrow-link mt-8 inline-block font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-extrabold tracking-tight no-underline hover:text-muted"
            >
              Understand trust &amp; cost{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
