import type { ReactNode } from "react";

type Tone = "paper" | "wash" | "dark";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink border-t border-rule",
  wash: "bg-wash text-ink border-t border-rule",
  dark: "dark-band bg-inv-bg text-inv-fg border-t border-ink",
};

export function Section({
  id,
  tone = "paper",
  children,
  className = "",
  labelledBy,
}: {
  id: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-title`}
      className={`section-pad ${toneClass[tone]} ${className}`}
    >
      {children}
    </section>
  );
}
