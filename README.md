# Anay Consultants & Engineers (ACE)

Premium marketing site for **Anay Consultants & Engineers** — an integrated technical collaboration for testing, surveying, inspection and consultancy. Formerly Volmaken.

Stack: **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4**. Backend routes deploy to a **Cloudflare Worker** on the free tier.

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

## Cloudflare Workers

This project is wired for **OpenNext Cloudflare** (`@opennextjs/cloudflare`) — the current replacement for `@cloudflare/next-on-pages`.

```bash
npm run cf:build     # emit the Worker + assets
npm run cf:preview   # wrangler dev against the build
npm run cf:deploy    # deploy to Cloudflare (free tier)
```

This app uses a server-rendered Next.js route and an API route, so deploy it as a **Worker** (not a static Cloudflare Pages project).

When importing the GitHub repository in **Workers & Pages → Create application → Import a repository**, use:

| Dashboard field | Value |
| --- | --- |
| Project name | `anayglobal` |
| Production branch | `main` |
| Build command | `npm run cf:build` |
| Deploy command | `npx @opennextjs/cloudflare deploy` |
| Non-production deploy command | `npx @opennextjs/cloudflare upload` |
| Root directory / Path | `/` |
| API token | Create a new token (for example, `Workers Builds – anayglobal`) |

Then add runtime environment variables in **Worker → Settings → Variables and Secrets** if you want the quote form to deliver mail:

1. Set `WEB3FORMS_ACCESS_KEY` *or* `RESEND_API_KEY` as a secret. For Resend, also set `QUOTE_FROM_EMAIL`; `QUOTE_TO_EMAIL` is optional and defaults to `quotes@anayglobalservices.com`.
2. Set compatibility flag `nodejs_compat` (already configured in `wrangler.jsonc`).
3. Bind nothing else — no D1 / KV / R2 is required.

Push to `main` to deploy production. Push another branch to create a preview version.

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

Anay Consultants & Engineers (ACE) — Integrated Technical Collaboration
Testing | Surveying | Inspection | Consultancy  
Accurate Data. Reliable Solutions. Sustainable Tomorrow.
