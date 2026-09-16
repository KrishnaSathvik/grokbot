# SEO configuration

- `data/seo.ts`: exact page titles, descriptions, social copy and image headlines. `ogPath()` points at static cards in `public/og/`.
- `lib/site.ts`: site identity, canonical origin and metadata helper.
- `public/og/*.png`: seven static 1200 × 630 Open Graph cards (one per guide page).
- `app/sitemap.ts` and `app/robots.ts`: crawl discovery.
- `docs/og-image-prompts.md`: reusable prompts if the cards need regenerating.

## Production setup

Set `SITE_URL` to the final HTTPS origin (no path), and `SITE_INDEXING=true` only for production, then rebuild. Copy `.env.example` for local configuration. No real domain was supplied, so none is invented. Without a URL, canonical tags are omitted and social URLs use localhost for development only.

Indexing requires a configured origin, a production build and explicit opt-in. Vercel preview/development deployments remain noindex even if they inherit the production settings. For other hosts, leave `SITE_INDEXING=false` on previews and staging. The sitemap is empty while indexing is disabled. Robots allows crawling so crawlers can read the noindex meta tags; robots exclusion alone does not prevent indexing.

All pages export absolute titles to avoid duplicated brand suffixes. Every page has its own OG and Twitter image with alt text. The sitemap contains the seven canonical routes only. Job filters remain local UI state on `/jobs`.

## Artwork

The existing supplied logo is preserved, including its baked-in checkerboard background. A transparent logo export is still needed for a clean final mark. The avatar count is 15 exported state previews, matching the current app; PNG previews are not advertised as live animations.

## Verification

Run `npm run lint`, `npm run test`, `npm run build`, then `npm run test:e2e`. Inspect the static cards at `/og/overview.png`, `/og/how-it-works.png`, `/og/jobs.png`, `/og/avatar-system.png`, `/og/getting-started.png`, `/og/trust-and-cost.png`, `/og/sources.png`.
