# Anay Global Project Change Rules

These rules apply to all changes made in this repository.

## Primary objective

Improve the existing Anay Global / Anay Consultants & Engineers Next.js project while preserving its architecture, routes, assets, service documents, and Cloudflare CI/CD deployment pipeline.

## Protected project structure

- Keep the existing Next.js architecture and folders, including:
  - `src/app/`
  - `src/components/`
  - `src/lib/`
  - `public/images/`
  - `public/docs/`
  - `docs/service-guides/`
- Do not rename, move, delete, or reorganize existing folders.
- Do not create a replacement application architecture or switch frameworks.
- Do not change the routing structure. Existing service routes must continue to work:
  - `/services`
  - `/services/[slug]`
- Do not remove existing pages, services, API routes, assets, content, or service guide documents without explicit approval.
- Do not create a separate service application or parallel directory structure.

## Cloudflare deployment protection

- Keep Cloudflare Workers and OpenNext as the deployment platform and adapter.
- Do not modify Cloudflare, OpenNext, Wrangler, deployment, or CI/CD configuration unless explicitly requested.
- Preserve this deployment behavior and command sequence:

  ```text
  npm clean-install --progress=false
  npm run cf:build
  opennextjs-cloudflare build
  npx @opennextjs/cloudflare deploy
  ```

- Do not modify CI/CD workflow files or deployment commands.

## Allowed implementation changes

Changes may improve the existing implementation inside the current structure, including:

- Visual design, responsive layouts, spacing, typography, colors, borders, shadows, and alignment.
- Service section presentation, service cards, service hero sections, section ordering, and content alignment.
- Existing image selection, placement, cropping, sizing, aspect ratios, overlays, galleries, grids, sliders, and split layouts.
- Animations and transitions when accessibility and performance are preserved.
- Navigation, buttons, cards, calls to action, labels, headings, and metadata where appropriate.
- Mobile, tablet, and desktop behavior.
- Small reusable components that fit the current architecture.
- Bugs directly related to the requested change.
- Documentation only when it directly describes changed behavior.

Prefer existing components, utilities, images, and assets before adding new ones. Avoid unnecessary dependencies and unrelated refactors.

## Service section rules

For existing services, photo selection and presentation, layout, hero composition, content alignment, spacing, icons, badges, calls to action, and responsive behavior may change.

Do not:

- Change service route structure.
- Rename existing service slugs without explicit approval.
- Remove service content or service guide documents.
- Break links to existing service pages or documents.
- Move service assets outside their current locations.

## Content, assets, and SEO

- Prefer existing assets in `public/images/` before adding new assets.
- Do not introduce copyrighted, unlicensed, or unverifiable assets.
- Never expose secrets, API keys, credentials, or private configuration.
- Preserve service guide documents and their links.
- Keep image `alt` text accurate and meaningful; do not use empty or misleading labels.
- Preserve SEO metadata, canonical URLs, sitemap behavior, and robots behavior unless explicitly requested.

## Required workflow

Before editing:

1. Inspect the existing components, routes, styles, and data structures.
2. Identify the smallest set of files required for the requested change.
3. Reuse existing components and utilities whenever possible.
4. Follow existing naming, formatting, TypeScript, and styling conventions.
5. Avoid unrelated refactors.

After editing:

1. Verify existing routes still work.
2. Verify service pages still load correctly.
3. Verify images and service guide links resolve correctly.
4. Verify mobile, tablet, and desktop behavior when relevant.
5. Run the relevant lint, type-check, test, and build commands.
6. Confirm the Cloudflare/OpenNext build remains compatible.

When multiple implementations are possible, choose the existing project structure, an existing component, and the smallest surgical change. Ask for clarification before changing routing, deployment, data models, API behavior, or project architecture.
