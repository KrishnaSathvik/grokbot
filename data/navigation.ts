import { seoPage } from "./seo";

export interface GuidePage {
  /** Editorial section number shown above page titles ("01 / Overview"). */
  number: string;
  href: string;
  /** Short label used in the header and footer. */
  label: string;
  /** Label used in previous/next navigation. */
  navTitle: string;
  /** <title> for the page. */
  title: string;
  /** Meta description for the page. */
  description: string;
  /** Whether the page sits in the main header navigation (Sources lives in the footer). */
  inHeader: boolean;
}

export const GUIDE_PAGES: GuidePage[] = [
  {
    number: "01",
    href: "/",
    label: "Overview",
    navTitle: "Overview",
    ...seoPage("/"),
    inHeader: true,
  },
  {
    number: "02",
    href: "/how-it-works",
    label: "How it works",
    navTitle: "How it works",
    ...seoPage("/how-it-works"),
    inHeader: true,
  },
  {
    number: "03",
    href: "/jobs",
    label: "Jobs",
    navTitle: "56 jobs",
    ...seoPage("/jobs"),
    inHeader: true,
  },
  {
    number: "04",
    href: "/avatar-system",
    label: "Avatar system",
    navTitle: "Avatar system",
    ...seoPage("/avatar-system"),
    inHeader: true,
  },
  {
    number: "05",
    href: "/getting-started",
    label: "Getting started",
    navTitle: "Getting started",
    ...seoPage("/getting-started"),
    inHeader: true,
  },
  {
    number: "06",
    href: "/trust-and-cost",
    label: "Trust & cost",
    navTitle: "Trust & cost",
    ...seoPage("/trust-and-cost"),
    inHeader: true,
  },
  {
    number: "07",
    href: "/sources",
    label: "Sources",
    navTitle: "Sources",
    ...seoPage("/sources"),
    inHeader: false,
  },
];

export const HEADER_PAGES = GUIDE_PAGES.filter((p) => p.inHeader);
export const FOOTER_PAGES = GUIDE_PAGES.filter((p) => !p.inHeader);

/** Discovery layers outside the numbered guide — footer + mobile menu. */
export interface SecondaryPage {
  href: string;
  label: string;
}

export const SECONDARY_PAGES: SecondaryPage[] = [
  { href: "/blog", label: "Blog" },
  { href: "/in-the-wild", label: "In the wild" },
  ...FOOTER_PAGES.map((p) => ({ href: p.href, label: p.label })),
];

export function guidePage(href: string): GuidePage {
  const page = GUIDE_PAGES.find((p) => p.href === href);
  if (!page) throw new Error(`Unknown guide page: ${href}`);
  return page;
}

export function guideNeighbours(href: string): { previous: GuidePage | null; next: GuidePage | null } {
  const i = GUIDE_PAGES.findIndex((p) => p.href === href);
  if (i < 0) throw new Error(`Unknown guide page: ${href}`);
  return { previous: GUIDE_PAGES[i - 1] ?? null, next: GUIDE_PAGES[i + 1] ?? null };
}
