import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HERO, ROSTER } from "@/data/hero";
import { LiveRoster } from "./LiveRoster";

export function Hero() {
  return (
    <header className="pb-12 pt-9 md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 items-end gap-9 md:grid-cols-[minmax(0,11fr)_minmax(280px,9fr)] md:gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:gap-20">
          <div>
            <p className="eyebrow mb-5 text-muted">{HERO.eyebrow}</p>
            <h1 className="text-hero font-extrabold">
              {HERO.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[28ch] text-lede font-light">{HERO.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href={HERO.primaryCta.href} className="pill pill-solid arrow-link">
                {HERO.primaryCta.label}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link
                href={HERO.secondaryCta.href}
                className="arrow-link font-display text-[15px] font-semibold text-ink no-underline hover:text-muted"
              >
                {HERO.secondaryCta.label}{" "}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
          <LiveRoster entries={ROSTER} label={HERO.rosterLabel} />
        </div>
      </Container>
    </header>
  );
}
