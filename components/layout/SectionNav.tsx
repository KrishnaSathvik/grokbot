"use client";

import { useEffect, useState } from "react";

export interface SectionNavItem {
  id: string;
  label: string;
}

/**
 * Page-local navigation for long chapters. Sticky under the header on desktop,
 * a scrollable strip on mobile. Marks the section currently in view.
 */
export function SectionNav({ items, sticky = true }: { items: SectionNavItem[]; sticky?: boolean }) {
  const [current, setCurrent] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        if (visible.size) {
          const top = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0];
          setCurrent(top);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className={`${sticky ? "sticky top-16 z-30" : "relative"} border-b border-rule bg-paper`}>
      <div className="container-wide">
        <ul className="no-scrollbar -mx-5 flex list-none gap-1 overflow-x-auto px-5 py-2 sm:mx-0 sm:px-0">
          {items.map((i) => {
            const active = i.id === current;
            return (
              <li key={i.id} className="flex-none">
                <a
                  href={`#${i.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-3.5 font-display text-[13.5px] font-semibold no-underline transition-colors ${
                    active ? "bg-ink text-paper" : "text-muted hover:text-ink"
                  }`}
                >
                  {i.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
