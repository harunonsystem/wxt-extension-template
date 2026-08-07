# wxt-extension-template

Browser extension template built with [WXT](https://wxt.dev/) + TypeScript + pnpm.

Based on the stack used in [gcal-auto-fill](https://github.com/harunonsystem/gcal-auto-fill).

## Tech Stack

| Tool | Purpose |
|------|---------|
| [WXT](https://wxt.dev/) | Extension framework (Chrome / Firefox, MV3) |
| TypeScript | Language (strict, via WXT's generated tsconfig) |
| [pnpm](https://pnpm.io/) | Package manager / script runner |
| [Vitest](https://vitest.dev/) | Unit testing (with `WxtVitest` plugin) |
| [oxlint](https://oxc.rs/) | Linting |
| [oxfmt](https://oxc.rs/) | Formatting (single quotes, no semicolons) |
| Renovate | Dependency updates (GitHub Actions digest pinning) |

## Getting Started

1. Click **"Use this template"** on GitHub
2. Clone your new repo, then:

```bash
pnpm install
pnpm run dev          # Chrome dev mode
pnpm run dev:firefox  # Firefox dev mode
```

### Rename Checklist

- [ ] `package.json` — `name`, `description`
- [ ] `wxt.config.ts` — `manifest.name`, permissions, host_permissions
- [ ] `src/entrypoints/content/index.ts` — `matches` pattern
- [ ] `public/icon/*.png` — replace placeholder icons (16 / 32 / 48 / 96 / 128)
- [ ] `README.md` / `AGENTS.md` — rewrite for your project
- [ ] Delete unused entrypoints (`background.ts` / `content/` / `popup/`)

## Commands

```bash
pnpm run dev           # Dev server (Chrome)
pnpm run build         # Production build
pnpm run check         # typecheck + lint + format:check + test + build
pnpm run test          # Unit tests (run once)
pnpm run test:watch    # Unit tests (watch)
pnpm run lint:fix      # Auto-fix lint issues
pnpm run format        # Format code
pnpm run zip           # Package for Chrome Web Store
pnpm run zip:firefox   # Package for Firefox Add-ons
```

## Project Structure

```
src/
├── entrypoints/
│   ├── background.ts     # Service worker (delete if unused)
│   ├── content/          # Content script (delete if unused)
│   │   ├── index.ts
│   │   └── style.css
│   └── popup/            # Popup UI (delete if unused)
│       ├── index.html
│       ├── main.ts
│       └── style.css
└── lib/                  # Shared logic + co-located tests
    ├── greet.ts
    └── greet.test.ts
public/
└── icon/                 # Extension icons (auto-detected by WXT)
```

## Release Flow

1. `pnpm run release:patch` (or `release:minor` / `release:major`)
   - Bumps version in `package.json`, creates a `vX.Y.Z` tag, pushes
2. The `Release` workflow runs checks, builds zips for Chrome + Firefox, and attaches them to a GitHub Release

## CI

Every push / PR to `main` runs: typecheck → lint → format check → test → build.

## License

[MIT](./LICENSE)