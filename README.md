# Japan bachelor trip

A static, responsive itinerary for October 5–11, 2026. Plain HTML and CSS: no runtime JavaScript, framework, database, or third-party npm dependencies.

## Edit

- `public/index.html`: trip details and metadata.
- `public/styles.css`: responsive layout and styling.
- `public/favicon.svg`: site icon.

The inline icons retain the Lucide artwork used in the original site; see `LICENSE-icons.txt`. The banner photo is hosted on Unsplash and credited in the footer.

## Build

Run `npm ci`, then `npm run build` with a current Node.js LTS release. The build copies only the three public assets to `dist/`. Open `public/index.html` through a static web server for local development.

## Vercel

1. Import `itsTyger1/japan_bach` from GitHub.
2. Choose **Other** as the Framework Preset, with the repository root as Root Directory.
3. Deploy `main`.

`vercel.json` sets the build command (`npm run build`), install command (`npm ci`), and output directory (`dist`). No environment variables or server functions are required. Clear any old Vite/Next.js overrides in an existing Vercel project before redeploying.

The existing Sites project ID is retained in `.openai/hosting.json` with static hosting enabled, so the same output remains compatible with Sites. This does not affect Vercel.
