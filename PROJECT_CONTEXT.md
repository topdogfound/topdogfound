# Project Context

## Repository Layout
- Root path: `/home/superman/topdogfound`
- Active application lives in: `portfolio/`
- Root-level [`README.md`](/home/superman/topdogfound/README.md) is profile content; app-specific implementation is under `portfolio/`.

## Application Stack
- Framework: Next.js `16.2.6` (App Router)
- UI: React `19`, TypeScript, Tailwind CSS v4
- Component libraries: shadcn/ui, Radix UI, Magic UI
- Content system: `content-collections` + MDX (`@content-collections/mdx`)
- Theme: local client provider in `src/components/theme-provider.tsx`; `next-themes` was removed to avoid script-tag console errors in Next/React 16.
- Package manager: pnpm. The npm lockfiles were removed because they were stale and caused false audit output.

## Key Commands
Run inside `portfolio/`:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm lint:fix
pnpm audit --prod
```

Node engine requirement: `>=18.0.0`.

## Core Architecture
- Global app shell and metadata: [`portfolio/src/app/layout.tsx`](/home/superman/topdogfound/portfolio/src/app/layout.tsx)
- Home page: [`portfolio/src/app/page.tsx`](/home/superman/topdogfound/portfolio/src/app/page.tsx)
- Blog index: [`portfolio/src/app/blogs/page.tsx`](/home/superman/topdogfound/portfolio/src/app/blogs/page.tsx)
- Blog detail route: [`portfolio/src/app/blogs/[slug]/page.tsx`](/home/superman/topdogfound/portfolio/src/app/blogs/[slug]/page.tsx)
- Legacy `/blog` and `/blog/:slug` paths are handled by redirects in `next.config.mjs`; duplicate App Router files under `src/app/blog/` were removed.
- Navigation dock: [`portfolio/src/components/navbar.tsx`](/home/superman/topdogfound/portfolio/src/components/navbar.tsx)

## Primary Data Source
- Main profile/work/projects/social config:
  [`portfolio/src/data/resume.tsx`](/home/superman/topdogfound/portfolio/src/data/resume.tsx)
- Most personalized content in the UI comes from `DATA` in this file.

## Content Pipeline (Blog)
- Source content directory: `portfolio/content/*.mdx`
- Collection + schema + transform:
  [`portfolio/content-collections.ts`](/home/superman/topdogfound/portfolio/content-collections.ts)
- The content-collections config uses the newer `content: [posts]` property, not deprecated `collections`.
- MDX runtime component mapping:
  [`portfolio/src/mdx-components.tsx`](/home/superman/topdogfound/portfolio/src/mdx-components.tsx)
- Custom remark plugin for code metadata:
  [`portfolio/src/lib/remark-code-meta.ts`](/home/superman/topdogfound/portfolio/src/lib/remark-code-meta.ts)
- Pagination helper:
  [`portfolio/src/lib/pagination.ts`](/home/superman/topdogfound/portfolio/src/lib/pagination.ts)

## Styling and Theming
- Global CSS variables, dark mode tokens, prose/table/code styling:
  [`portfolio/src/app/globals.css`](/home/superman/topdogfound/portfolio/src/app/globals.css)
- `ThemeProvider` and `ModeToggle` are wired in layout/navbar.
- `ThemeProvider` reads `localStorage.theme` on mount and toggles the root `dark` class. It intentionally does not render an inline initialization script.
- `Navbar` is client-mounted via `useSyncExternalStore` to avoid hydration mismatches from the interactive Radix Tooltip + Motion dock tree.

## Notable UI Sections
- Work accordion: [`portfolio/src/components/section/work-section.tsx`](/home/superman/topdogfound/portfolio/src/components/section/work-section.tsx)
- Projects grid: [`portfolio/src/components/section/projects-section.tsx`](/home/superman/topdogfound/portfolio/src/components/section/projects-section.tsx)
- Contact CTA: [`portfolio/src/components/section/contact-section.tsx`](/home/superman/topdogfound/portfolio/src/components/section/contact-section.tsx)

## Media and Assets
- Static media in `portfolio/public/` (profile images, company logos, project thumbnails, SVG logos, local fonts).

## Security Headers
- Configured in:
  [`portfolio/next.config.mjs`](/home/superman/topdogfound/portfolio/next.config.mjs)
- Includes `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- `images.unsplash.com` is restricted with a pathname in `remotePatterns`.
- pnpm overrides currently force patched transitive versions for `defu`, `picomatch`, `postcss`, and `yaml`.

## Performance Notes
- The global dot background is static by default; `glow` was removed from layout to avoid many perpetual Motion animations.
- `CoolMode` only starts its animation loop while particles are active.
- Local project/work/MDX images were moved toward `next/image`.
- Blog JSON-LD uses `next/script`, not a raw `<script>` tag in a component.

## Current Content State
- Current blog posts:
  [`portfolio/content/research-for-disease-free-long-life.mdx`](/home/superman/topdogfound/portfolio/content/research-for-disease-free-long-life.mdx)
  and
  [`portfolio/content/agriculture-needs-experiments.mdx`](/home/superman/topdogfound/portfolio/content/agriculture-needs-experiments.mdx)

## Current Verification Baseline
- `pnpm lint`: passes
- `pnpm build`: passes
- `pnpm audit --prod`: `No known vulnerabilities found`
- Build still reports the expected warning that the edge runtime disables static generation for the OG image route.

## Notes for Future Changes
- For profile edits, start with `src/data/resume.tsx`.
- For blog behavior, check `/blogs` list/detail routes plus `pagination.ts`.
- For MDX rendering behavior, check `mdx-components.tsx` and `remark-code-meta.ts`.
