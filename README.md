# Scriptorium · Poster Factory

A medieval scriptorium that strikes living posters: choose a city, and the sheet takes
the true hour of that place — dawn, highday, eventide or nightwatch — with sun or moon,
ink and parchment coloured to match the moment.

**Stack:** Vue 3 (Composition API) · Vite · Pinia · Tailwind CSS v4 · native SVG export (no html2canvas)

**Type:** Grenze Gotisch (display) · IM Fell English / IM Fell English SC (text)

**Palette:** parchment `#E9DFC8` · ink-nut `#2A2119` · oxblood `#7E2F2A` · moss `#5C6B3C` · brass `#C8A24B` · oak `#4A3826`

## Features

- Live local time per city via `Intl` (no network, works offline)
- Automatic phase of day with manual override (Dawn / Highday / Eventide / Nightwatch)
- Six silhouettes: Big Ben, Eiffel, Torii, Citadel, Cathedral, Longship
- Export to PNG (canvas render) and SVG (serialization)
- Accessible: focus-visible brass outlines, aria labels, prefers-reduced-motion
- GitHub Pages deploy via Actions workflow

## Run locally

npm install
npm run dev

## Deploy

Push to `main`; the `deploy-pages` workflow builds and publishes to GitHub Pages.