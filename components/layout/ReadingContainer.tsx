import type { ReactNode } from "react";

/** Reading-width column (720px) for prose. */
export function ReadingContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-read ${className}`}>{children}</div>;
}
