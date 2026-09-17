# Logo marquee update

Extract this zip into your `sbits.ph/` project root, overwriting the two
existing files and adding the one new file. Paths match your project
exactly:

- `src/components/content/LogoMarquee.tsx`  → NEW file
- `src/app/page.tsx`                        → REPLACES your current homepage
- `tailwind.config.ts`                      → REPLACES your current config

## What changed

- **page.tsx**: the old Stats section (10+ yrs / 120+ / <15 min / 24/7) is
  swapped for a "Trusted by teams running on" logo marquee. The `Stat`
  import was dropped since it's no longer used on this page (About page
  is untouched). `PartnerBadge` and the "Backed by" grid further down the
  page are untouched.
- **tailwind.config.ts**: only addition is a `marquee` keyframe + animation
  next to your existing `pulseline` one. Nothing else in the file changed.
- **LogoMarquee.tsx**: new server component, pulls from your existing
  `lib/content/partners.ts` data, auto-skips any partner whose SVG isn't
  in `/public/images/partners/` yet.

No other files, no new dependencies. Re-run `npm run dev` after copying
these in.
