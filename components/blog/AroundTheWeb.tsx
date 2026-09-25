import { AROUND_THE_WEB } from "@/data/around-the-web";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function AroundTheWeb() {
  return (
    <Section id="around-the-web" labelledBy="around-title">
      <Container>
        <h2 id="around-title" className="text-section">
          Around the web
        </h2>
        <p className="mt-3 max-w-[52ch] text-lede font-light text-muted">
          Official news, independent roundups and repos we are watching—summary plus the original link.
        </p>
        <ul className="mt-8 list-none border-t border-rule p-0">
          {AROUND_THE_WEB.map((item) => (
            <li key={item.href} className="border-b border-rule">
              <a
                href={item.href}
                target="_blank"
                rel="noopener"
                className="group flex flex-col gap-2 py-5 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="min-w-0">
                  <span className="eyebrow text-muted">{item.source}</span>
                  <span className="mt-2 block font-display text-[18px] font-semibold group-hover:underline">
                    {item.title}
                  </span>
                  <span className="mt-1 block font-display text-[13px] text-muted">
                    {item.author}
                    {item.venue ? ` · ${item.venue}` : ""}
                  </span>
                  <span className="mt-2 block max-w-[56ch] text-[15.5px] leading-[1.5] text-muted">
                    {item.description}
                  </span>
                </span>
                <span className="shrink-0 font-display text-sm font-semibold" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
