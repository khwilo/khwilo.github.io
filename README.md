# khwilo.dev

Personal site built with [Astro](https://astro.build). Static output, no client-side JavaScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # production build into dist/, drafts hidden
npm run preview  # serve the production build locally
```

Requires Node 22 or newer.

## Before you deploy

- [ ] `src/data/site.ts`: fill in `[DATES]` and `[TITLE]` for Dynamo Digital
- [ ] `src/data/site.ts`: add your email and GitHub URL (empty links are hidden)
- [ ] Put your CV at `public/cv.pdf` and set `cvUrl: '/cv.pdf'` (every CV link stays hidden until then)
- [ ] Write the three case studies in `src/content/work/` and set `draft: false`
- [ ] Decide whether to keep the footer line "Open to senior backend roles." (`availability` in `site.ts`)
- [ ] Search the project for `[` to catch any placeholder you missed

## Where things live

| What | Where |
|---|---|
| Name, headline, intro, links, experience | `src/data/site.ts` |
| Case studies | `src/content/work/*.md` |
| Blog posts | `src/content/writing/*.md` |
| Colours, fonts, spacing | `src/styles/global.css` (light and dark variables at the top) |
| Header, footer, meta tags | `src/layouts/Base.astro` |
| Home page | `src/pages/index.astro` |

## Light and dark

Design: off-white and cobalt with ledger details (Inter Tight, Inter, JetBrains Mono).
The site follows the visitor's system setting with CSS only (no JavaScript).
Both palettes are the variables at the top of `src/styles/global.css`.
Every text colour passes WCAG AA contrast on its background.

## How drafts work

Every content file has `draft: true` for now.

- `npm run dev` shows drafts so you can write and preview.
- `npm run build` hides them. Work entries still appear on the home page but show
  "Write-up coming soon" instead of a link. The Writing section on the home page
  only appears once at least one post is published.

To publish, finish the file and set `draft: false`.

## Adding a post

Create `src/content/writing/my-post.md`:

```md
---
title: My post title
description: One line shown under the title and in search results.
date: 2026-12-01
---

Post body in Markdown.
```

To list something published elsewhere, copy `_external-example.md` without the
leading underscore and set `externalUrl` and `source`.

## Deploy (GitHub Pages, khwilo/khwilo.github.io)

The site deploys from `.github/workflows/deploy.yml` on every push to `main`.
`public/CNAME` keeps the custom domain `www.khwilo.dev`.

Switching over from the old HTML site:

1. Push this project to a new branch (for example `astro-redesign`) and open a pull request.
2. Merge it into `main`. This replaces the old `index.html`, `css/` and `images/`.
3. In the repo on GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
   Do this right after merging. Until you do, Pages keeps serving files from the branch, which will be this project's raw source, not the built site.
4. Check the Actions tab for a green run, then open https://www.khwilo.dev.
5. Confirm the custom domain still shows in Settings → Pages, with HTTPS enforced.
