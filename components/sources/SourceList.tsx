import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SOURCE_GROUPS, SOURCES } from "@/data/sources";

export function SourceList() {
  return (
    <Section id="sources" labelledBy="sources-title">
      <Container>
        <h2 id="sources-title" className="visually-hidden">
          Sources by kind
        </h2>
        <div className="flex flex-col gap-14">
          {SOURCE_GROUPS.map((g) => {
            const items = SOURCES.filter((s) => s.kind === g.kind);
            return (
              <div key={g.kind} id={g.kind} data-anchor className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(140px,200px)_minmax(0,1fr)] lg:gap-14">
                <div className="lg:pt-1">
                  <h3 className="eyebrow text-ink">{g.title}</h3>
                  <p className="mt-2 max-w-[30ch] text-[14.5px] leading-[1.5] text-muted">{g.blurb}</p>
                </div>
                <ul className="container-read m-0 list-none border-t border-rule p-0">
                  {items.map((s) => (
                    <li key={s.href} className="border-b border-rule">
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener"
                        className="group flex items-baseline justify-between gap-4 py-4 no-underline"
                      >
                        <span className="min-w-0">
                          <span className="font-display text-[17px] font-semibold group-hover:underline">{s.title}</span>
                          <span className="ml-2 inline-block border border-rule px-1.5 py-0.5 align-middle font-display text-[10px] font-semibold uppercase tracking-wide">{s.kind === "outside" ? "Independent review" : s.kind}</span>
                          <span className="mt-1 block text-[15.5px] leading-[1.5] text-muted">{s.description}</span>
                          <span className="mt-1 block truncate font-mono text-[12px] text-subtle">{s.href.replace(/^https?:\/\//, "")}</span>
                        </span>
                        <span aria-hidden="true" className="flex-none font-display text-sm">
                          ↗
                        </span>
                        <span className="visually-hidden">(opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
