# Project Context

## Repository Layout
- Root path: `/home/superman/topdogfound`
- Active application lives in: `portfolio/`
- Root-level [`README.md`](/home/superman/topdogfound/README.md) is profile content; app-specific implementation is under `portfolio/`.

## Application Stack
- Framework: Next.js `16.1.1` (App Router)
- UI: React `19`, TypeScript, Tailwind CSS v4
- Component libraries: shadcn/ui, Radix UI, Magic UI
- Content system: `content-collections` + MDX (`@content-collections/mdx`)
- Theme: `next-themes`

## Key Commands
Run inside `portfolio/`:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run lint:fix
```

Node engine requirement: `>=18.0.0`.

## Core Architecture
- Global app shell and metadata: [`portfolio/src/app/layout.tsx`](/home/superman/topdogfound/portfolio/src/app/layout.tsx)
- Home page: [`portfolio/src/app/page.tsx`](/home/superman/topdogfound/portfolio/src/app/page.tsx)
- Blog index: [`portfolio/src/app/blog/page.tsx`](/home/superman/topdogfound/portfolio/src/app/blog/page.tsx)
- Blog detail route: [`portfolio/src/app/blog/[slug]/page.tsx`](/home/superman/topdogfound/portfolio/src/app/blog/[slug]/page.tsx)
- Navigation dock: [`portfolio/src/components/navbar.tsx`](/home/superman/topdogfound/portfolio/src/components/navbar.tsx)

## Primary Data Source
- Main profile/work/projects/social config:
  [`portfolio/src/data/resume.tsx`](/home/superman/topdogfound/portfolio/src/data/resume.tsx)
- Most personalized content in the UI comes from `DATA` in this file.

## Content Pipeline (Blog)
- Source content directory: `portfolio/content/*.mdx`
- Collection + schema + transform:
  [`portfolio/content-collections.ts`](/home/superman/topdogfound/portfolio/content-collections.ts)
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

## Notable UI Sections
- Work accordion: [`portfolio/src/components/section/work-section.tsx`](/home/superman/topdogfound/portfolio/src/components/section/work-section.tsx)
- Projects grid: [`portfolio/src/components/section/projects-section.tsx`](/home/superman/topdogfound/portfolio/src/components/section/projects-section.tsx)
- Contact CTA: [`portfolio/src/components/section/contact-section.tsx`](/home/superman/topdogfound/portfolio/src/components/section/contact-section.tsx)

## Media and Assets
- Static media in `portfolio/public/` (profile images, company logos, project thumbnails, SVG logos, local fonts).

## Security Headers
- Configured in:
  [`portfolio/next.config.mjs`](/home/superman/topdogfound/portfolio/next.config.mjs)
- Includes `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.

## Current Content State
- At least one blog post exists:
  [`portfolio/content/local-llm-and-laravel-boost.mdx`](/home/superman/topdogfound/portfolio/content/local-llm-and-laravel-boost.mdx)

## Notes for Future Changes
- For profile edits, start with `src/data/resume.tsx`.
- For blog behavior, check both list/detail routes plus `pagination.ts`.
- For MDX rendering behavior, check `mdx-components.tsx` and `remark-code-meta.ts`.
