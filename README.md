# wxt-extension-template

Browser extension template built with [WXT](https://wxt.dev/) + TypeScript + Bun.

Based on the stack used in [gcal-auto-fill](https://github.com/harunonsystem/gcal-auto-fill).

## Tech Stack

| Tool | Purpose |
|------|---------|
| [WXT](https://wxt.dev/) | Extension framework (Chrome / Firefox, MV3) |
| TypeScript | Language (strict, via WXT's generated tsconfig) |
| [Bun](https://bun.sh/) | Package manager / script runner |
| [Vitest](https://vitest.dev/) | Unit testing (with `WxtVitest` plugin) |
| [oxlint](https://oxc.rs/) | Linting |
| [oxfmt](https://oxc.rs/) | Formatting (single quotes, no semicolons) |
| Renovate | Dependency updates (GitHub Actions digest pinning) |

## Getting Started

1. Click **"Use this template"** on GitHub
2. Clone your new repo, then:

```bash
bun install
bun run dev          # Chrome dev mode
bun run dev:firefox  # Firefox dev mode
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
bun run dev           # Dev server (Chrome)
bun run build         # Production build
bun run check         # typecheck + lint + format:check + test + build
bun run test          # Unit tests (run once)
bun run test:watch    # Unit tests (watch)
bun run lint:fix      # Auto-fix lint issues
bun run format        # Format code
bun run zip           # Package for Chrome Web Store
bun run zip:firefox   # Package for Firefox Add-ons
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

1. `bun run release:patch` (or `release:minor` / `release:major`)
   - Bumps version in `package.json`, creates a `vX.Y.Z` tag, pushes
2. The `Release` workflow runs checks, builds zips for Chrome + Firefox, and attaches them to a GitHub Release

## CI

Every push / PR to `main` runs: typecheck → lint → format check → test → build.

## License

[MIT](./LICENSE)
