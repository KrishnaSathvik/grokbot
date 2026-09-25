"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { GuidePage, SecondaryPage } from "@/data/navigation";

type NavItem = Pick<GuidePage, "href" | "label"> | SecondaryPage;

export function MobileMenu({ pages, extra }: { pages: GuidePage[]; extra: NavItem[] }) {
  const id = useId();
  const pathname = usePathname();
  // Open only while the path that opened the menu is still current — navigating closes it.
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;
  const setOpen = (next: boolean | ((prev: boolean) => boolean)) => {
    const value = typeof next === "function" ? next(open) : next;
    setOpenForPath(value ? pathname : null);
  };
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const prev = {
      htmlOverflow: htmlEl.style.overflow,
      htmlOverscroll: htmlEl.style.overscrollBehavior,
      bodyOverflow: bodyEl.style.overflow,
      bodyPosition: bodyEl.style.position,
      bodyTop: bodyEl.style.top,
      bodyLeft: bodyEl.style.left,
      bodyRight: bodyEl.style.right,
      bodyWidth: bodyEl.style.width,
    };

    htmlEl.style.overflow = "hidden";
    htmlEl.style.overscrollBehavior = "none";
    bodyEl.style.overflow = "hidden";
    bodyEl.style.position = "fixed";
    bodyEl.style.top = `-${scrollY}px`;
    bodyEl.style.left = "0";
    bodyEl.style.right = "0";
    bodyEl.style.width = "100%";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenForPath(null);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      htmlEl.style.overflow = prev.htmlOverflow;
      htmlEl.style.overscrollBehavior = prev.htmlOverscroll;
      bodyEl.style.overflow = prev.bodyOverflow;
      bodyEl.style.position = prev.bodyPosition;
      bodyEl.style.top = prev.bodyTop;
      bodyEl.style.left = prev.bodyLeft;
      bodyEl.style.right = prev.bodyRight;
      bodyEl.style.width = prev.bodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const all = [...pages, ...extra];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink px-3 font-display text-[13px] font-semibold"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id={id}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 bottom-0 top-16 z-30 overscroll-none bg-paper"
        >
          <nav
            aria-label="Guide pages"
            className="h-full overflow-y-auto overscroll-contain px-6 pb-10 pt-3 [-webkit-overflow-scrolling:touch]"
          >
            {all.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                aria-current={isCurrent(p.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block border-b border-rule py-4 font-display text-[22px] font-semibold no-underline ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
