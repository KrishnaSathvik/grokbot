"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string };

/** Desktop header links with the current page marked. Client-only so the active state follows the route. */
export function NavLinks({ pages }: { pages: NavItem[] }) {
  const pathname = usePathname();
  return (
    <>
      {pages.map((p) => {
        const current = p.href === "/" ? pathname === "/" : pathname === p.href || pathname.startsWith(`${p.href}/`);
        return (
          <Link
            key={p.href}
            href={p.href}
            aria-current={current ? "page" : undefined}
            className={`relative px-3 py-2.5 font-display text-[14px] font-semibold no-underline transition-colors hover:text-ink ${
              current
                ? "text-ink after:absolute after:inset-x-3 after:-bottom-[13px] after:h-0.5 after:bg-ink"
                : "text-muted"
            }`}
          >
            {p.label}
          </Link>
        );
      })}
    </>
  );
}
