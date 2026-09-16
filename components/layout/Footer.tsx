import Link from "next/link";
import { FOOTER_PAGES } from "@/data/navigation";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-rule pb-12 pt-8">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <p className="max-w-[36ch] font-display text-[14px] text-muted">
            A practical guide to Grok Bot, xAI&rsquo;s always-on helpers. Not affiliated with xAI.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="font-display text-sm font-semibold text-muted no-underline hover:text-ink"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
