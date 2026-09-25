import type { ReactNode } from "react";
import { Container } from "./Container";

/** Page head for Blog / In the wild — same editorial treatment without guide numbers. */
export function ContentHeader({
  eyebrow,
  title,
  children,
  aside,
  wideTitle,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  wideTitle?: boolean;
  className?: string;
}) {
  return (
    <header className={`pb-12 pt-10 md:pb-16 md:pt-16 lg:pt-18 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(96px,120px)_minmax(0,1fr)] lg:gap-8">
          <p className="eyebrow text-muted lg:pt-4">{eyebrow}</p>
          <div className="min-w-0">
            <h1 className={`internal-page-title ${wideTitle ? "internal-page-title-trust" : ""}`}>{title}</h1>
            <div
              className={
                aside
                  ? "mt-6 grid grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(300px,5fr)] lg:gap-12"
                  : "mt-6"
              }
            >
              {children ? <div className="container-read min-w-0 text-lede font-light">{children}</div> : null}
              {aside ? <div className="min-w-0">{aside}</div> : null}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
