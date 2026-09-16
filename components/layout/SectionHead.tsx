import type { ReactNode } from "react";
import { Container } from "./Container";

/**
 * Section head: a small eyebrow attached directly above the heading, then the
 * content at full container width. The big side-label treatment is reserved
 * for the page header so it appears once per page.
 */
export function SectionHead({
  id,
  label,
  title,
  dark = false,
  children,
}: {
  id: string;
  label: string;
  title: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <Container>
      <p className={`eyebrow ${dark ? "text-inv-muted" : "text-muted"}`}>{label}</p>
      <h2 id={`${id}-title`} className="mt-3 max-w-[18ch] text-section">
        {title}
      </h2>
      {children}
    </Container>
  );
}
