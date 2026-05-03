# CLAUDE.md

Guidance for Claude Code working in this repository.

## Repository layout

This repo is a monorepo for ACE Solutions. Each top-level folder is a self-contained project.

```
.
├── acesolutions.ai/   ← the website (Astro 6, Tailwind v4, npm)
└── docs/              ← (none yet — repo-level docs go here when they exist)
```

`acesolutions.ai/` has its own `package.json`, `package-lock.json`, and tooling. It is **not** an npm workspace member of the root — there is no root `package.json`. To work on the site, `cd acesolutions.ai/` first.

## Website (`acesolutions.ai/`)

- **Stack**: Astro 6 + TypeScript strict, Tailwind v4, sitemap, astro-icon
- **Node**: `>=22.12.0`
- **Common commands** (run from inside `acesolutions.ai/`):
  - `npm install`
  - `npm run dev` — local dev server
  - `npm run build` — static build into `dist/`
  - `npm run preview` — preview the built site
- **Astro config**: `base: '/ace'`, `site: 'https://andrewgetzdata.github.io'`. Internal links use `import.meta.env.BASE_URL` so they resolve correctly under the `/ace/` subpath. When a custom domain (e.g. `acesolutions.ai`) is connected, set `base: '/'` and update `site`.

## Deployment

GitHub Pages deploys the website on every push to `main` via `.github/workflows/deploy.yml`. The workflow:

1. Checks out the repo
2. Installs Node 22 with caching keyed on `acesolutions.ai/package-lock.json`
3. Runs `npm ci` and `npm run build` inside `acesolutions.ai/`
4. Uploads `acesolutions.ai/dist` as the Pages artifact

Live URL: `https://andrewgetzdata.github.io/ace/` (matches the repo name `ace`).

## Adding a new project

To add another sibling (e.g. an internal CLI, a docs site, a brand-asset repo):

1. Create a new top-level folder with its own README and tooling
2. If it's deployable, add a separate workflow under `.github/workflows/`
3. GitHub Pages only supports one site per repo — additional deployable apps need a different host (Cloudflare Pages, Vercel, etc.)
