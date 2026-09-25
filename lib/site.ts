import type { Metadata } from "next";
import { ogPath, seoPage } from "@/data/seo";

const configuredUrl = process.env.SITE_URL?.trim();
const origin = configuredUrl ? new URL(configuredUrl) : null;
if (origin && (origin.protocol !== "https:" || origin.pathname !== "/" || origin.search || origin.hash || origin.username || origin.password || /localhost|127\.0\.0\.1|your.?domain|example\./i.test(origin.hostname))) {
  throw new Error("SITE_URL must be a real HTTPS production origin, without a path or credentials.");
}
export const SITE_URL = origin?.origin ?? "http://localhost:3001";
export const SITE_INDEXABLE = Boolean(origin) && process.env.NODE_ENV === "production" && process.env.SITE_INDEXING === "true" && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
export const SITE_NAME = "Grok Bot Explained";
export const SITE_TITLE = seoPage("/").title;
export const SITE_SHORT_TITLE = SITE_NAME;
export const SITE_DESCRIPTION = "Learn what Grok Bot is, how it works, what jobs you can hand over, how the avatar system works, how to get started, and what to trust it with.";
export const LAST_UPDATED_ISO = "2026-09-24";

export function pageMetadata(href: string): Metadata {
  const page = seoPage(href);
  const image = { url: ogPath(href), width: 1200, height: 630, alt: `${page.headline} — ${page.support}`, type: "image/png" };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: origin ? { canonical: href } : undefined,
    openGraph: { type: "website", title: page.ogTitle, description: page.ogDescription, url: href, siteName: SITE_NAME, locale: "en_US", images: [image] },
    twitter: { card: "summary_large_image", title: page.ogTitle, description: page.ogDescription, images: [image] },
  };
}

/** Article / discovery page metadata with optional Article openGraph type. */
export function articleMetadata({
  href,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImageHref = "/blog",
  publishedAt,
  modifiedAt,
}: {
  href: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImageHref?: string;
  publishedAt?: string;
  modifiedAt?: string;
}): Metadata {
  const image = {
    url: ogPath(ogImageHref),
    width: 1200,
    height: 630,
    alt: `${ogTitle} — ${ogDescription}`,
    type: "image/png" as const,
  };
  return {
    title: { absolute: title },
    description,
    alternates: origin ? { canonical: href } : undefined,
    openGraph: {
      type: "article",
      title: ogTitle,
      description: ogDescription,
      url: href,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [image],
      ...(publishedAt ? { publishedTime: publishedAt } : {}),
      ...(modifiedAt ? { modifiedTime: modifiedAt } : {}),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images: [image] },
  };
}

export function absoluteUrl(href: string): string {
  return `${SITE_URL}${href === "/" ? "/" : href}`;
}
