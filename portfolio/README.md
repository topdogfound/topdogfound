# Portfolio

A personal portfolio and blog built with Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Magic UI, and MDX content collections.

## Features

- Resume-driven portfolio content from a single config file
- Blog support with MDX
- Responsive layout
- Dark mode support
- Project, work, education, skills, and contact sections
- Optimized for deployment on Vercel

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Magic UI
- Motion
- Content Collections
- MDX

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize

Update the main portfolio content in:

```bash
src/data/resume.tsx
```

This file controls the name, bio, location, social links, work experience, education, skills, and projects shown on the site.

Add or edit blog posts in:

```bash
content
```

Static assets such as profile images, company logos, and project images live in:

```bash
public
```

## Available Scripts

Run the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

Run linting:

```bash
pnpm lint
```

Fix lint issues:

```bash
pnpm lint:fix
```

## Deploy

The easiest way to deploy this project is with Vercel.

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

## License

Licensed under the [MIT license](./LICENSE).
