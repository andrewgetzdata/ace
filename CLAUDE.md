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

## Business docs (`docs/`)

Source of truth for ACE Solutions strategy, positioning, and operations. Mirrored from the [Google Drive folder](https://drive.google.com/drive/folders/1Gp6bx6vwiKyOQUbNHcqY5kFjbCeYsIBf) so the canonical version is versioned alongside the code. When something changes in Drive, re-pull and overwrite — drop the version suffix (`v5`, etc.) on commit; git history holds the versioning.

### Top-level documents

- **[`docs/business-overview.md`](./docs/business-overview.md)** — the canonical doc for everything ACE. Positioning ("judgment over tooling"), the four-question decision filter, all three engagement tiers (Advise / Coach / Execute) with current pricing, portfolio economics, ICP, About section, and open questions for the next coaching session. Start here for any question about what ACE is, how it works, or what it costs.

- **[`docs/discovery-session.md`](./docs/discovery-session.md)** — full template for paid Discovery engagements. Both the half-day Executive format and the full-day Operator format, including pre-meeting prep, agenda, workshop blocks, and follow-up structure. Use when scoping or running a Discovery with a prospect.

- **[`docs/engagement-lifecycle-map.md`](./docs/engagement-lifecycle-map.md)** — the full client lifecycle from first contact through ongoing engagement. Five stages: 30-min Qualifying Call → 90-min Pitch Meeting → paid Discovery (Executive or Operator) → Tiered Engagement (Advise / Coach / Execute). Maps each ACE stage to its EOS equivalent. The high-level framing reference; the operational docs slot into specific stages.

### Not yet mirrored

These exist in Drive only as HTML exports (not native Google Docs), so they couldn't be pulled via the Drive API. Export from Drive as Markdown manually and add when ready:

- **Session Template v3** — template for ongoing client sessions across the three session types (Strategic, Execution, AI 101). Each session opens with an "AI Level-Set" segment so vocabulary stays current.
- **AI 101 for Operators v2** — 75-minute literacy session for leadership teams or broad org training. Eight segments covering what AI is, where it works and doesn't, costs, security, vendor evaluation, and what to do next.

### Archive

The Drive `Archive/` subfolder contains older versions of every doc above (Business Overview v1–v4, Discovery Session v1–v4, Session Template v1–v2, AI 101 v1, old Lifecycle Map copies). Don't pull current facts from them — they may have outdated tier names, old pricing, or pre-correction copy.
