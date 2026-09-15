# Anay Global Services (AGS)

Premium marketing site for **Anay Global Services** — an integrated technical collaboration for testing, surveying, inspection and consultancy. Formerly Volmaken.

Stack: **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4**. Backend routes are **Edge-compatible** and deploy to **Cloudflare Pages + Workers** on the free tier.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run lint
```

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home — hero, trust bar, services, network, industries, stats, testimonials |
| `/about` | Story, journey timeline, mission / vision / values |
| `/services` | Six service pillars |
| `/services/[slug]` | Pillar detail |
| `/network` | Collaborative model and partner cards |
| `/projects` | Sector work, stats, client names, testimonials |
| `/resources` | Knowledge hub, company profile, standards links |
| `/contact` | Quote form, three offices, map |

The **Request a Quote** control is sticky in the header and opens a modal. The same form lives on `/contact`.

## Quote form (no Node server)

`POST /api/quote` runs on the **Edge runtime**.

1. Validates the brief.
2. If `WEB3FORMS_ACCESS_KEY` is set, forwards to [Web3Forms](https://web3forms.com) (free, Workers-compatible `fetch`).
3. Else if `RESEND_API_KEY` is set, sends mail via Resend.
4. Else acknowledges the request (`delivered: false`) so the UI still works on a fresh deploy.

Copy `.env.example` to `.env.local` (or Cloudflare Pages environment variables / `.dev.vars`).

## Cloudflare Pages + Workers

This project is wired for **OpenNext Cloudflare** (`@opennextjs/cloudflare`) — the current replacement for `@cloudflare/next-on-pages`.

```bash
npm run cf:build     # emit the Worker + assets
npm run cf:preview   # wrangler dev against the build
npm run cf:deploy    # deploy to Cloudflare (free tier)
```

In the Cloudflare dashboard:

1. Create a Pages project (or deploy via Wrangler).
2. Set compatibility flags: `nodejs_compat`.
3. Add the env vars from `.env.example` if you want the form to deliver mail.
4. Bind nothing else — no D1 / KV / R2 is required.

`next/image` is set to `unoptimized: true` so the site does not depend on Next’s Node image optimizer.

## Design system

Warm brown / gold palette only — no blue, no green.

| Token | Hex |
| --- | --- |
| Espresso | `#3C2F2F` |
| Brown | `#4A3728` |
| Caramel / bronze | `#8B5E3C` / `#A67C52` |
| Gold / champagne | `#C9A66B` / `#D4AF37` |
| Cream | `#F8F4F0` |
| Charcoal footer | `#1C1917` |

Type: **Cormorant Garamond** (display) + **Manrope** (UI).

Photography lives in `public/images/` (Unsplash stand-ins, warm-graded in layout with espresso overlays). Replace with project photography when ready — keep the same filenames.

## Content

Copy, offices, services, partners, projects and articles are centralised in `src/lib/content.ts`. Swap addresses, phones and client lists there.

## Brand line

Anay Global Services (AGS) — Integrated Technical Collaboration  
Testing | Surveying | Inspection | Consultancy  
Accurate Data. Reliable Solutions. Sustainable Tomorrow.
