# UX pass 2 — "what should I do on this screen?"

Source: the six-page UX review (Sep 15 2026). Architecture stays; this pass fixes hierarchy, discoverability, density and interaction cues. Black-and-white direction is kept.

## Decisions

- **Side labels once per page.** `PageHeader` keeps the editorial side number ("02 / How it works"). `SectionHead` becomes stacked: eyebrow directly above the heading, full container width for content. Prose still sits in the 720px reading column.
- **Two type modes.** Serif (`font-body`) for prose, quotes, ledes. Sans (`font-display`) for cards, filters, controls, metadata, tables, instructions. Applied per component, no new tokens.
- **Header.** 64px, nav 14px, active = 2px underline, `rgba(255,255,255,.96)` background.
- **Interaction cues.** `.arrow-link` (arrow moves 4px on hover), `.row-link` (wash background on hover, whole row clickable), `.tile[aria-checked=true]` (2px ink border + ✓), pills fill black when selected. 44px touch targets kept.
- **Page heroes get a visual.** How it works: 4-stage process strip. Jobs: search in the hero. Avatar: live avatar. Getting started: 1-week/4-stage strip. Trust & cost: hand over / review / approve scale.
- **Jobs is a finder.** Search + bigger chips in the hero, "Good first jobs" (six slugs in `data/jobs.ts`) when unfiltered, cards with one-line meta and a "View →", detail in a native `<dialog>` (what it does, example request when a day-one prompt exists, best as, review needed, copy / open). No `/jobs/[slug]` yet.
- **Avatar studio.** Avatar left and large, controls right. State explorer: big live avatar over the tiles with Replay. "Working moods" renamed "How states communicate status". Engine details collapsed under a `<details>`.
- **First week.** Day labels, thick progress segment on the active stage, panel uses the width, numbered steps, "Next: Delegate →".
- **Trust & cost.** Level dots (●○○) on the three levels and the autonomy table; list titles become "Usually safe to delegate" / "Keep a human in the loop"; cost leads with the two-cost takeaway and dominant prices.
- **Local nav** (`SectionNav`) on Jobs, Avatar, Trust & cost only.
- **Previous/Next merges with the footer** under one "Continue the guide" band.

Not done: `/jobs/[slug]` routes, per-job example prompts beyond the eight existing day-one prompts (no invented content).
