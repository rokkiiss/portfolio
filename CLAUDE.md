# Portfolio — CLAUDE.md

## Project Overview

A narrative-driven IT executive portfolio built as a static site with Astro. Instead of a traditional resume layout, the site tells a career story through a cinematic timeline ("chapters"), animated stats, particle effects, and scroll-reveal interactions. Deploys automatically to GitHub Pages on push to `main`.

Live URL: https://rokkiiss.github.io/portfolio

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Site generator | Astro | ^6.3.7 |
| Styling | Tailwind CSS (via Vite plugin) | ^4.3.0 |
| Language | TypeScript (strict) | via Astro |
| Fonts | Google Fonts (Playfair Display + Inter) | CDN |
| Hosting | GitHub Pages | — |

No database, backend, or external APIs. Everything is static HTML/CSS/JS.

---

## Folder Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build & deploy to GitHub Pages on push to main
├── public/                     # Static assets served as-is (favicons, images)
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML shell: head, fonts, global CSS slot
│   ├── pages/
│   │   ├── index.astro         # Main portfolio page (hero, timeline, skills, footer)
│   │   └── test.astro          # Deploy smoke-test page
│   └── styles/
│       └── global.css          # Tailwind import + CSS variables + reusable classes
├── astro.config.mjs            # Astro config (site URL, base path, Tailwind Vite plugin)
├── package.json
└── tsconfig.json               # Extends Astro strict TS config
```

All meaningful content (career chapters, skills, stats) lives in `src/pages/index.astro` as hardcoded TypeScript arrays rendered via `.map()`.

---

## How to Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321/portfolio)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

Requires Node >= 22.12.0. No environment variables needed.

---

## Content — Where Things Live

| Content | Location |
|---|---|
| Hero stats (years, metrics) | `index.astro` — `chapters[]` array header area |
| Career timeline chapters | `index.astro` — `chapters[]` array |
| Skill bars | `index.astro` — `skills[]` array |
| Additional skills grid | `index.astro` — hardcoded near line 266 |
| Social/contact links | `index.astro` — footer section |
| Site metadata & fonts | `src/layouts/Layout.astro` |
| CSS variables & shared classes | `src/styles/global.css` |

---

## Coding Conventions

### General
- Single-page architecture — all content in `src/pages/index.astro`; avoid splitting into many small components unless a section becomes independently reusable
- Data-driven rendering: define content in typed arrays at the top of the file, render with `.map()`
- No external JS libraries — use the browser's native APIs (Canvas 2D, IntersectionObserver, requestAnimationFrame)

### Styling
- Tailwind utility classes for layout and spacing
- Global CSS (`global.css`) for reusable patterns (`.card`, `.gradient-text`, `.nav-link`, etc.) and CSS custom properties
- Inline styles only for dynamic/computed values (e.g. particle canvas dimensions, progress bar width)
- CSS variables defined on `:root`: `--navy`, `--surface`, `--border`, `--accent`, `--text`, `--muted`
- Responsive sizing via `clamp()` for typography and `repeat(auto-fit, minmax())` for grids

### Animations & Interactivity
- Scroll reveal: `data-reveal` attribute + IntersectionObserver (fade + slide-up)
- Stat counters: `data-count` attribute + IntersectionObserver with easing (~1800ms)
- Typewriter effect: CSS animation on `.typewriter` class with a blinking cursor
- Particles: Canvas 2D, mouse repulsion, connecting lines between nearby particles — all in a `<script>` block in `index.astro`

### TypeScript
- `tsconfig.json` extends Astro's strict preset — keep it strict, no `any` unless unavoidable
- Script blocks in `.astro` files use `<script>` (client-side, no TS strict checking); keep logic minimal and DOM-focused

### Commits & CI
- Push to `main` triggers the GitHub Actions deploy pipeline automatically
- Build artifacts go to `dist/` — never commit this directory
- The deploy base path is `/portfolio` — all internal links must respect this (Astro handles it via `base` in `astro.config.mjs`)
