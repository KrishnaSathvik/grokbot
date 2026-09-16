# Grok Bot Explained

A static-first [Next.js](https://nextjs.org) guide to **Grok Bot** — xAI’s always-on helpers. Seven chapters cover what it is, how it works, 56 jobs, the avatar system, getting started, trust & cost, and sources.

Live stack: Next.js 16, React 19, Tailwind CSS 4, TypeScript.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production preview:

```bash
npm run build
npm start
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run lint` | ESLint |
| `npm test` | Vitest unit tests |
| `npm run test:e2e` | Playwright e2e (build first; needs `npx playwright install chromium`) |

## Deploy

1. Copy `.env.example` → `.env.local` (or set vars in your host).
2. Set `SITE_URL` to your real HTTPS origin (no path), e.g. `https://example.com`.
3. Set `SITE_INDEXING=true` only on the production deployment.
4. Deploy from this folder (Vercel works out of the box).

Canonical URLs, Open Graph, sitemap, and robots all read from `lib/site.ts`. Without `SITE_URL`, canonical tags are omitted and social URLs fall back to localhost for local work. Details: [`docs/seo.md`](docs/seo.md).

## Pages

| Route | Chapter | Content |
| --- | --- | --- |
| `/` | 01 | Overview — hero, live roster, key concepts, guide nav |
| `/how-it-works` | 02 | What it is, Grok variants, five things to know, morning flow |
| `/jobs` | 03 | Searchable catalogue of 56 jobs with detail dialog |
| `/avatar-system` | 04 | Studio, 14 states, moods, how the avatar is drawn |
| `/getting-started` | 05 | Day-one prompts, first job, first week |
| `/trust-and-cost` | 06 | Trust levels, oversight matrix, plans & cost controls |
| `/sources` | 07 | Grouped sources and methodology |

Page order, titles, and descriptions live in `data/navigation.ts` and `data/seo.ts`. Header, footer, mobile menu, prev/next, sitemap, and metadata all consume that data.

## Layout

- `app/` — routes, root layout, sitemap, robots, OG image route
- `components/` — layout shell plus one folder per page; mostly Server Components
- `components/avatar/` — SVG renderer and client islands (studio, state explorer)
- `lib/avatar/` — pure TypeScript avatar engine (no React)
- `data/` — typed content (jobs, prompts, trust, cost, sources, SEO)
- `public/` — favicons, avatars, `llms.txt` / `llms-full.txt`
- `tests/` — Vitest unit tests and Playwright e2e

## License

Private / all rights reserved unless otherwise noted.
