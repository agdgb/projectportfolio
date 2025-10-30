# Project Portfolio

A personal portfolio web application built with React, TypeScript, and Vite. It showcases projects, a short MDX blog, and contact information. The codebase is intentionally small and easy to customize for a personal website.

## Features

- Responsive layout and project cards
- MDX-powered blog with frontmatter support
- Light/dark theme toggle
- Accessible, reusable components and client-side routing with React Router
- Tailwind CSS for utility-first styling

## Tech stack

- React 19 + TypeScript
- Vite for development server and build
- Tailwind CSS
- MDX via `@mdx-js/react`
- ESLint + TypeScript for linting and type checking

These dependencies are declared in `package.json` (for example: `react`, `vite`, `tailwindcss`, `@mdx-js/react`).

## Quick start

Prerequisites: Node.js 18+ and npm.

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Build and preview the production output:

```powershell
npm run build
npm run preview
```

Useful npm scripts (see `package.json`):

- `dev` — run Vite dev server
- `build` — compile TypeScript and build with Vite
- `preview` — serve the production build locally
- `lint` — run ESLint

## Project layout

- `src/` — application source
  - `components/` — shared UI components (Navbar, Footer, ProjectCard, etc.)
  - `pages/` — route views (Home, About, Projects, Blog, Contact)
  - `features/` — page-specific UI pieces (Hero, FeaturedProjects)
  - `content/` — MDX posts and project metadata
  - `lib/` — helpers and utilities (MDX loader, SEO helpers, theme)
- `public/` — static assets
- Tooling files: `vite.config.ts`, `tsconfig.json`, `eslint.config.js`

## Customization

- Edit `src/content/projects.ts` to change the projects shown on the Projects page.
- Add MDX files under `src/content/posts/` to publish blog posts. Use YAML frontmatter for metadata (title, date, description).
- Adjust Tailwind configuration or global styles in `src/index.css` / `src/App.css`.

## Tests & code quality

This project includes ESLint and TypeScript. Run `npm run lint` to check code quality. There are no unit tests configured by default; consider adding Vitest or Jest for automated testing.

## Contact

Open an issue or submit a PR for suggestions or fixes.

