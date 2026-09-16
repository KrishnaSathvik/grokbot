import Image from "next/image";
import Link from "next/link";
import { FOOTER_PAGES, HEADER_PAGES } from "@/data/navigation";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <Container className="flex min-h-16 items-center justify-between gap-4 py-1.5">
        <Link
          href="/"
          className="flex flex-none items-center gap-2.5 font-display text-[15px] font-extrabold no-underline"
          aria-label="Grok Bot Explained — overview"
        >
          <Image src="/android-chrome-192x192.png" alt="" width={28} height={28} className="rounded-md" priority />
          Grok Bot
        </Link>
        <nav aria-label="Guide pages" className="hidden items-center gap-1 lg:flex">
          <NavLinks pages={HEADER_PAGES} />
        </nav>
        <MobileMenu pages={HEADER_PAGES} extra={FOOTER_PAGES} />
      </Container>
    </header>
  );
}
