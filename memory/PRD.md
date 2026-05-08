# PRD — لجنة إعمار الخليل (Hebron Reconstruction Committee Website)

## Original Problem Statement
Recreate a pixel-perfect UI clone of `syrianidentity.sy` in React + Tailwind + Framer Motion, then rebrand fully to "لجنة إعمار الخليل" (Hebron Rehabilitation Committee) with custom assets, colors, dropdown navbar, rotating Islamic pattern in the Hero, and Arabic-first UX with English toggle.

## Brand & Tokens
- Primary beige: `#BA9B70`
- Primary brown: `#553B2E`
- Soft cream BG: `#FAF6EE`
- Hero font: `'Qasira', 'IBM Plex Sans Arabic', sans-serif`
- Primary logo: `/public/logo-optimized.webp` (11 KB, replaces 938 KB jpg)

## Architecture
```
/app/frontend/
├── public/
│   ├── logo-optimized.webp   ← preloaded with high priority
│   ├── pattern-original.jpg
│   ├── old-town.jpg
│   ├── committee-building.png
│   └── ... (other assets)
└── src/
    ├── App.js                ← BrowserRouter + Routes
    ├── pages/
    │   ├── Home.jsx          ← landing page
    │   └── About.jsx         ← /about (NEW)
    ├── components/
    │   ├── Header.jsx        ← uses Link, /about routes
    │   ├── Hero.jsx
    │   ├── Loader.jsx        ← rotating optimized logo
    │   ├── Manifesto.jsx
    │   ├── ContentCards.jsx
    │   ├── StorySection.jsx
    │   ├── UniteSection.jsx
    │   ├── PressSection.jsx
    │   └── Footer.jsx
    └── utils/mockData.js
```

## What's Implemented
### 2026-05-07
- Cloned syrianidentity.sy structure & motion
- Rebranded to "لجنة إعمار الخليل"
- Custom colors (#BA9B70, #553B2E)
- Custom dropdown navbar + English toggle (translation only switches dir/labels)
- Islamic pattern (rotating circular) in Hero
- Mobile responsive: hamburger, line-heights, arrow above old-town image

### 2026-05-08
- **Logo perf:** 938 KB → 11 KB (WebP) + `<link rel="preload" fetchpriority="high">` + `decoding="async"` on `<img>`. Restored rotation animation in Loader (had been silently removed).
- **Mobile menu cleanup:** removed logo block, ENGLISH button now sits directly under close button (small `pt-16`).
- **Sizing tweaks:** navbar logo `h-11` mobile (was `h-14`); Hero text `text-5xl` mobile (was `text-4xl`).
- **NEW: /about page** — 4 sections (Figma-matched):
  1. Hero intro (image left, title + underline + paragraph + CTA right)
  2. "رؤيتنا ورسالتنا" — 3 cards (Mission/Vision/Values) with floating icons
  3. "نبذة عن اللجنة" — image + vertical timeline (2010/2013/2016/2023) + text + CTA
  4. Stats row — 5 metrics (+50, +300, +70, +15, +14) with Lucide icons
- React Router setup with `<BrowserRouter>` + `ScrollToTop`. Header logo & "معلومات عن اللجنة" dropdown link to `/about`.

## Pending / Future
- P1: Implement actual content translation across all components (English toggle currently only flips RTL/labels, not section copy fully wired? — verify)
- P1: Hook up "أهداف اللجنة" and "الفريق" dropdown items (currently `#`)
- P2: Backend (FastAPI + MongoDB) for dynamic content (news, contact form, donations)
- P2: Cleanup unused public assets (old `logo-hebron.png` 0 bytes, duplicate jpgs)

## Critical Notes for Next Agent
- Always respond in Arabic (user's preferred language)
- DO NOT change the brand hex colors without explicit user request
- HEIC images are not browser-renderable — convert before use
- Frontend-only; no backend yet
- Use `data-testid` on all interactive elements
- Loader animation (rotating logo) had been accidentally removed — preserve it
