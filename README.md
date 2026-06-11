# Amos Wolff — Bike Fitting & Cycling Performance

A bilingual (Hebrew / English) marketing landing page for **Amos Wolff**, a master-level bike fitter and cycling event manager. The site presents his bike fitting service on the GURU platform, professional event management, the fitting process, an about/credentials section, and a WhatsApp-driven contact form.

## Features

- **Bilingual UI (he/en)** with full RTL/LTR support — Hebrew is the default language, toggled in-page (no reload).
- **Single-page landing** with Hero, Services, Process, About, and Contact sections plus smooth in-page anchor navigation.
- **Embedded YouTube** (privacy-enhanced `youtube-nocookie`) for the hero and fitting videos.
- **WhatsApp contact form** — submissions open a pre-filled WhatsApp message instead of hitting a backend.
- **SEO/social meta** (Open Graph, Twitter cards) configured per-route.
- **Server-side rendering** via TanStack Start.

## Tech stack

- [React 19](https://react.dev/)
- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) + [TanStack Query](https://tanstack.com/query)
- [Vite 7](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (New York style) + Radix UI
- [TypeScript](https://www.typescriptlang.org/)
- [Nitro](https://nitro.build/) for the build (Cloudflare as the default target)

## Getting started

This project uses [Bun](https://bun.sh/) (see `bun.lock` / `bunfig.toml`), but npm also works (`package-lock.json` is committed).

```bash
# install dependencies
bun install        # or: npm install

# start the dev server
bun run dev        # or: npm run dev
```

The dev server runs on Vite. Open the printed local URL in your browser.

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the Vite dev server |
| `build` | Production build |
| `build:dev` | Build in development mode |
| `preview` | Preview the production build locally |
| `lint` | Run ESLint |
| `format` | Format the codebase with Prettier |

## Project structure

```
src/
  routes/
    __root.tsx        # Root layout, head/meta, error & 404 boundaries
    index.tsx         # The full landing page (i18n dict, sections, contact form)
  components/ui/       # shadcn/ui component library
  assets/              # Images (hero, portrait, services, logo)
  lib/                 # Utilities, config, error reporting, API helpers
  hooks/               # Custom hooks (e.g. use-mobile)
  styles.css           # Tailwind entry + design tokens
  router.tsx           # Router setup
  server.ts            # SSR entry (error wrapper)
public/                # Static assets (favicon)
```

## Editing content

All copy and translations live in the `dict` object inside `src/routes/index.tsx` (`en` and `he` keys). Contact details (phone, email, WhatsApp number, social links) are defined as constants near the top of the contact-related components in the same file.

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a fully static, prerendered version of the site and publishes it to GitHub Pages.

- The build runs with `BASE_PATH=/<repo>/` because project sites are served from `https://<user>.github.io/<repo>/`. Locally `BASE_PATH` is unset, so the base stays `/`.
- `vite.config.ts` enables `prerender`, so each route is rendered to static HTML in `dist/client` — no Node server is required.
- The workflow adds `.nojekyll` and copies `index.html` to `404.html` so client-side deep links resolve.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

## Notes

- The Vite config (`vite.config.ts`) wires up the TanStack Start, Tailwind, tsconfig-paths, and React plugins, plus Nitro for the production server build.
- `bunfig.toml` enforces a 24h supply-chain guard (`minimumReleaseAge`) on new packages.
