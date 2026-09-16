import type { ReactNode } from "react";
import { guidePage } from "@/data/navigation";
import { Container } from "./Container";

/**
 * Editorial page head: "02 / How it works" side label, large title, short intro,
 * and an optional visual (`aside`) that gives each chapter its own character.
 * This is the one place per page that uses the side-label treatment.
 */
export function PageHeader({
  href,
  title,
  children,
  aside,
}: {
  href: string;
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const page = guidePage(href);
  return (
    <header className="pb-12 pt-10 md:pb-16 md:pt-16 lg:pt-18">
      <Container>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(96px,120px)_minmax(0,1fr)] lg:gap-8">
          <p className="eyebrow text-muted lg:pt-4">
            {page.number} / {page.label}
          </p>
          <div className="min-w-0">
            <h1 className={`internal-page-title ${href === "/trust-and-cost" ? "internal-page-title-trust" : ""}`}>
              {title}
            </h1>
            <div className={aside ? "mt-6 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(300px,5fr)] lg:gap-12" : "mt-6"}>
              {children ? <div className="container-read min-w-0 text-lede font-light">{children}</div> : null}
              {aside ? <div className="min-w-0">{aside}</div> : null}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
