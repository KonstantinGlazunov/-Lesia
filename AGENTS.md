# AGENTS.md

## Cursor Cloud specific instructions

This is a **React 19 + TypeScript + Vite 5** single-page application (bilingual portfolio site). All source code lives under `app/`.

### Key commands (run from `app/`)

| Task | Command |
|------|---------|
| Install deps | `npm ci` |
| Dev server | `npm run dev` (port 5173) |
| Lint | `npm run lint` |
| Build | `npm run build` (runs `tsc -b && vite build`) |

### Non-obvious caveats

- **Base path**: Vite is configured with `base: '/-Lesia/'`, so the local URL is `http://localhost:5173/-Lesia/` (not root `/`).
- **No backend / no env vars**: The app is fully static with no API calls, no `.env` files, and no external services.
- **Lint baseline**: There are 9 pre-existing ESLint errors (shadcn/ui components exporting variants alongside components, and a `Math.random` purity warning in `sidebar.tsx`). These are not regressions.
- **Node version**: CI uses Node 20; Node 22 also works.
