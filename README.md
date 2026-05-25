# Roger Anderson — Executive IT Portfolio

Personal portfolio site for Roger Anderson, senior IT executive (CTO / CIO / VP of IT).

**Live site:** https://rokkiiss.github.io/portfolio

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- GitHub Pages — hosting (auto-deploys on push to `main`)

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/portfolio
npm run build      # production build → dist/
```

## Updating content

All content lives in `src/pages/index.astro`:

- **Hero stats** — update the `stat` / `label` array near the top
- **Career timeline** — update the `timeline` array (role, company, period, highlights)
- **Skills** — update the `skills` object (category → list of items)
- **LinkedIn URL** — search for `linkedin.com` and update the `href`

## Deployment

Pushes to `main` automatically deploy via GitHub Actions → GitHub Pages.

Enable Pages in the repo settings: **Settings → Pages → Source → GitHub Actions**

## Content checklist

- [ ] Update LinkedIn URL in Hero section
- [ ] Fill in real company names in Career Timeline
- [ ] Add/remove career highlights to match your actual experience
- [ ] Update Hero stats (years, budget, team size)
- [ ] Add headshot photo (optional)
