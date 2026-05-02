---
name: preview-on-mobile
description: Capture screenshots of the local Astro dev server (desktop + mobile widths), commit them to docs/preview/ on the current branch, and update the open PR description so the user can review on GitHub mobile. Use when the user says "show me", "preview", "let me see it on mobile", or wants to approve UI changes from their phone.
---

# preview-on-mobile

Capture-and-publish flow for letting the user review UI changes from the GitHub mobile app.

## When to use

- User asks to "see" or "preview" the site
- User mentions reviewing on mobile / phone
- After meaningful UI changes that need approval
- Do NOT use for backend-only or non-visual changes

## Pre-flight

1. Confirm dev server is running on `http://localhost:4321`. If not, start it:
   ```bash
   npm run dev
   ```
   Then poll until ready:
   ```bash
   until curl -sf http://localhost:4321/ > /dev/null 2>&1; do sleep 0.5; done
   ```
2. Confirm Playwright + chromium are available:
   - `npx playwright --version` should report a version
   - `/opt/pw-browsers/chromium-*/chrome-linux/chrome` should exist (or `playwright install chromium` first)
3. Confirm the user is on a branch with an open PR (or be ready to create one).

## Steps

### 1. Capture screenshots

Write `.tmp-shot.mjs` at the repo root. Default routes to capture: `/` and any other distinctive route the user has changed (`/brand`, etc). Always capture at desktop (1440×900) and mobile (390×844). Save as JPEGs to `docs/preview/` — quality 70 for short pages, 55 for long full-page captures so file sizes stay manageable on GitHub.

```js
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const browser = await chromium.launch();
const shots = [
  { name: 'home-desktop', url: 'http://localhost:4321/', viewport: { width: 1440, height: 900 }, q: 70 },
  { name: 'home-mobile',  url: 'http://localhost:4321/', viewport: { width: 390,  height: 844 }, q: 70 },
  // add more routes as needed; lower q (55) for long pages
];

for (const s of shots) {
  const ctx = await browser.newContext({ viewport: s.viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(s.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800); // let fonts settle
  await page.screenshot({
    path: `docs/preview/${s.name}.jpg`,
    fullPage: true,
    type: 'jpeg',
    quality: s.q,
  });
  await ctx.close();
  console.log(s.name);
}
await browser.close();
```

Run it, then delete it:
```bash
node .tmp-shot.mjs && rm .tmp-shot.mjs
```

### 2. Commit and push

```bash
git add docs/preview/
git commit -m "Update preview screenshots"
git push origin <current-branch>
```

### 3. Surface in the PR

If a PR exists for the branch, **update its body** so screenshots render inline. Use `mcp__github__update_pull_request` with markdown like:

```md
![home desktop](https://raw.githubusercontent.com/<owner>/<repo>/<branch>/docs/preview/home-desktop.jpg)
![home mobile](https://raw.githubusercontent.com/<owner>/<repo>/<branch>/docs/preview/home-mobile.jpg)
```

If no PR exists, create one with `mcp__github__create_pull_request` and embed the same markdown in the body.

### 4. Reply to the user

Give them the PR URL (`https://github.com/<owner>/<repo>/pull/<n>`). The screenshots load inline in the GitHub mobile app — no clicking through.

## Notes / pitfalls

- **Don't use `Read` on the local PNG/JPG files** to "show" them — those previews only render in the assistant's view and never reach the mobile app.
- **Don't try to upload via Drive MCP** for >50 KB images — base64 encoding inflates them past tool-call input limits in this sandbox.
- **Don't use cloudflared / localtunnel / ngrok** — outbound to those domains is blocked from this environment.
- Using raw.githubusercontent.com URLs requires the branch to be pushed first; double-check the URL renders before claiming the PR is ready.
- Re-running the skill on the same branch overwrites the JPEGs; the PR body update will pick up the new versions automatically since the URLs are stable.
