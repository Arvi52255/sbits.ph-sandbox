# SBITS.ph — what's in this update

This adds five real pages on top of your existing Next.js 14 + TypeScript + Tailwind
scaffold: **Services, About, Partners, Contact, and Get a Quote**, plus a redesigned
**Home** page, a shared Navbar/Footer, and two working form endpoints
(`/api/contact`, `/api/quote`) that email submissions using **Resend** — matching the
integration already stubbed in your `.env.example` (Sanity, Resend, Turnstile, Azure SWA).

## How to install

1. Unzip this into your project root (it will merge with your existing folders —
   nothing outside the files listed below is touched).
2. `npm install` — this pulls in the new dependencies added to `package.json`:
   `react-hook-form`, `@hookform/resolvers`, `zod`, `resend`, `clsx`.
3. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`, `EMAIL_FROM`,
   `EMAIL_TO` at minimum — that's all the forms need to start sending real email.
4. `npm run dev` and check `/`, `/services`, `/about`, `/partners`, `/contact`, `/quote`.

## Files added / changed

- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css` — **replaced** (new
  design system: Space Grotesk + Inter fonts, ink/signal/circuit color palette, nav + footer).
- `src/app/{services,about,partners,contact,quote}/page.tsx` — **new**.
- `src/app/api/{contact,quote}/route.ts` — **new**, send email via Resend, validate with Zod,
  include a honeypot field so basic bots are rejected with zero extra services required.
- `src/app/{sitemap.ts,robots.ts,not-found.tsx}` — **new**, basic SEO hygiene.
- `src/components/*`, `src/lib/*` — **new** (Navbar, Footer, forms, shared content config).
- `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`,
  `postcss.config.mjs`, `.env.example` — **updated/replaced** to support the above.

**Not touched:** `azure-pipelines.yml`, `staticwebapp.config.json`, `.eslintrc.json`,
`.editorconfig`, `.gitignore`, `.nvmrc`, `check-images.js`, `public/images`. See the
deployment note below before you push — you added API routes, which changes what
Azure SWA needs to do at build time.

## One thing to check before deploying

Your repo already has `staticwebapp.config.json` and an Azure Pipeline, which suggests
Azure Static Web Apps. Static Web Apps needs to know this is now a **hybrid** Next.js
app (server rendering + API routes), not a static export — otherwise `/api/contact`
and `/api/quote` won't run. Confirm your SWA app is on the "Standard" plan with the
Next.js hybrid build preset (Azure's docs: "Deploy Next.js hybrid rendering on Static
Web Apps"), or point the two routes at Azure Functions if your pipeline expects a fully
static `out/` export instead.

## Editable content, in one place

Company name, tagline, address, phone, email, the six services, partner list, and
industries all live in `src/lib/site.ts` — edit that file and it flows through every
page. The name expansion ("Smart Business IT Solutions"), address, and phone numbers
are **placeholders** — swap in the real details before launch.

---

# Recommendations for sbits.ph

Grounded in what an IT-services company selling to Philippine SMEs actually needs to
convert visitors into quote requests — roughly in priority order.

### Trust and credibility (the biggest lever for an IT services company)
- **Client logos and case studies.** "We fixed X's network downtime" converts far better
  than a services list. Even 3–4 short before/after stories with real (or anonymized)
  clients would outperform most of the site's other content combined.
- **Local credibility signals.** DTI/SEC registration, BIR receipts, any vendor
  certifications (Microsoft Partner, Fortinet, etc.) — Philippine SMEs are wary of
  unregistered "IT guys," and this is cheap to add and high-trust.
- **Named response-time SLAs**, not just "fast support" — a number is more convincing
  than an adjective.

### Lead capture, tuned for the PH market
- **Messenger/Viber/WhatsApp click-to-chat**, not just email — a large share of PH SME
  decision-makers will message before they'll fill out a form. A floating chat button
  linking to your business Messenger or Viber is often the highest-converting element
  on a PH B2B site.
- **A shorter "quick inquiry" path** alongside the full quote form, for visitors who
  just want a callback rather than filling in budget/timeline right away.
- Turn on **Cloudflare Turnstile** (already stubbed in `.env.example`) once the forms
  are live and getting real traffic, as a second spam layer on top of the honeypot.

### Content that brings in search traffic
- A **/resources or /blog** section (Sanity CMS is already in your stack for this) —
  "how much does managed IT cost in the Philippines," "signs your business needs
  managed IT," etc. This is where SEO traffic for an IT services company actually comes
  from; the six service pages alone won't rank for much.
- **Location/industry landing pages** if you serve specific cities or verticals heavily
  (e.g. "IT support for retail chains in Metro Manila") — these convert well and are
  easy to spin up once Sanity is wired in.

### Product/site mechanics
- **Case studies or portfolio schema** in Sanity, separate from the static Services
  content, so non-technical staff can publish new client wins without a deploy.
- **Analytics + form-conversion tracking** (Plausible or GA4) — right now there's no
  way to see which page or CTA is actually driving quote requests.
- **Accessibility pass** — the design system here uses visible focus rings and
  sufficient contrast by default, but run an axe/Lighthouse pass once real content and
  images are in.
- **Careers page**, once you're hiring — for a services company, "the team is growing"
  is itself a trust signal.

### Suggested next build order
1. Wire up Resend + verify the two forms end-to-end in production.
2. Swap placeholder copy in `src/lib/site.ts` for real company details.
3. Add 3–4 real case studies (even a simple `/about` addition works before Sanity is fully wired).
4. Add Messenger/Viber click-to-chat.
5. Bring Sanity online for Services + a Resources/blog section.
