# AGENTS.md

## Cursor Cloud specific instructions

This is a Docusaurus 3.9.2 documentation site for P2P Foundation with a Python preprocessing step. No database, Docker, or external services required.

### Services

| Service | How to run |
|---------|-----------|
| Docusaurus dev server | `npm run start` (port 3000) |
| Python doc builder | `python3 build_docs.py` (must run before Docusaurus if source markdown in `sources/` changed) |

### Development workflow

1. `python3 build_docs.py` — generates docs, sidebars, and `docusaurus.config.ts` from `sources/*.md` and `docs.config.json`
2. `npm run start` — starts Docusaurus dev server with hot reload
3. `npm run build` — production build (also needed for local search index)

### Non-obvious caveats

- **`python3 build_docs.py` must run before the dev server** whenever source markdown files in `sources/` change. The generated files (`docs/`, sidebars/, `docusaurus.config.ts`) are committed but may be stale.
- **Search only works after `npm run build`** — the `@easyops-cn/docusaurus-search-local` plugin builds its index during production build, not in dev mode.
- **TypeScript typecheck (`npm run typecheck`) has a pre-existing error** in `src/components/CursorGlow.tsx` (JSX namespace issue with React 19). This does not block the build.
- Standard commands are in `README.md` and `package.json` scripts.
