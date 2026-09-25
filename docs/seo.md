# SEO configuration

- `data/seo.ts`: exact page titles, descriptions, social copy and image headlines. `ogPath()` points at static cards in `public/og/`.
- `lib/site.ts`: site identity, canonical origin, guide `pageMetadata`, and article `articleMetadata` helpers.
- `public/og/*.png`: static 1200 × 630 Open Graph cards (guide pages plus `blog.png` and `in-the-wild.png` hubs).
- `app/sitemap.ts` and `app/robots.ts`: crawl discovery for guide pages, `/blog`, `/in-the-wild`, posts and project entries.
- `docs/og-image-prompts.md`: reusable prompts if the cards need regenerating.

## Content layers

- **Guide pillars** (seven numbered pages) stay the canonical explanations.
- **`/blog`** targets narrower search intent; the index leads with a featured post and section jump list. Posts link back into Jobs, How it works, Getting started, Trust & cost, and In the wild. Each post ships `BlogPosting` + `BreadcrumbList` JSON-LD and uses the shared `/og/blog.png` card.
- **`/in-the-wild`** groups curated entries by how we found them (xAI guides, Marketplace, open source) with takeaway-led detail pages. Community entries note that claims are not independently audited. Hub social cards use `/og/in-the-wild.png`.
- **Around the web** on the blog index is summary + attribution + outbound link only—never a republication.

## Production setup

Set `SITE_URL` to the final HTTPS origin (no path), and `SITE_INDEXING=true` only for production, then rebuild. Copy `.env.example` for local configuration. No real domain was supplied, so none is invented. Without a URL, canonical tags are omitted and social URLs use localhost for development only.

Indexing requires a configured origin, a production build and explicit opt-in. Vercel preview/development deployments remain noindex even if they inherit the production settings. For other hosts, leave `SITE_INDEXING=false` on previews and staging. The sitemap is empty while indexing is disabled. Robots allows crawling so crawlers can read the noindex meta tags; robots exclusion alone does not prevent indexing.

All pages export absolute titles to avoid duplicated brand suffixes. Every page has its own OG and Twitter image with alt text. Job filters remain local UI state on `/jobs`.

## Artwork

The existing supplied logo is preserved, including its baked-in checkerboard background. A transparent logo export is still needed for a clean final mark. The avatar count is 15 exported state previews, matching the current app; PNG previews are not advertised as live animations.

## Verification

Run `npm run lint`, `npm run test`, `npm run build`, then `npm run test:e2e`. Inspect the static cards at `/og/overview.png`, `/og/how-it-works.png`, `/og/jobs.png`, `/og/avatar-system.png`, `/og/getting-started.png`, `/og/trust-and-cost.png`, `/og/sources.png`, `/og/blog.png`, `/og/in-the-wild.png`.
