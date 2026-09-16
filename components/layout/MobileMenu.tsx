"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { GuidePage } from "@/data/navigation";

export function MobileMenu({ pages, extra }: { pages: GuidePage[]; extra: GuidePage[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const item = (p: GuidePage, i: number, size: string) => (
    <Link
      key={p.href}
      href={p.href}
      aria-current={pathname === p.href ? "page" : undefined}
      onClick={() => setOpen(false)}
      className={`flex items-baseline justify-between border-b border-rule py-4 font-display font-semibold no-underline ${size} ${
        i === 0 ? "border-t" : ""
      }`}
    >
      <span>{p.label}</span>
      {pathname === p.href ? <span className="eyebrow text-muted">Here</span> : null}
    </Link>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink px-3 font-display text-[13px] font-semibold"
      >
        {open ? "Close" : "Menu"}
      </button>
      <div id={id} hidden={!open} className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-auto bg-paper px-6 pb-10 pt-3">
        <nav aria-label="Guide pages">
          {pages.map((p, i) => item(p, i, "text-[22px]"))}
          <div className="mt-8">{extra.map((p, i) => item(p, i, "text-[17px]"))}</div>
        </nav>
      </div>
    </div>
  );
}
