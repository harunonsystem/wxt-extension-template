# wxt-extension-template

Browser extension template built with [WXT](https://wxt.dev/) + TypeScript + pnpm.

Based on the stack used in [gcal-auto-fill](https://github.com/harunonsystem/gcal-auto-fill).

## Tech Stack

| Tool | Purpose |
|------|---------|
| [WXT](https://wxt.dev/) | Extension framework (Chrome MV3 / Firefox MV2) |
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
- [ ] `wxt.config.ts` — `manifest.name`, permissions, host_permissions, and a unique Firefox `browser_specific_settings.gecko.id`
- [ ] Review `data_collection_permissions` if you add data collection or transmission. The sample declares `none`; see [Firefox data consent](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).
- [ ] `src/entrypoints/content/index.ts` — `matches` pattern
- [ ] `public/icon/*.png` — replace placeholder icons (16 / 32 / 48 / 96 / 128)
- [ ] `README.md` / `AGENTS.md` — rewrite for your project
- [ ] Delete unused entrypoints (`background.ts` / `content/` / `popup/`)

## Commands

```bash
pnpm run dev           # Dev server (Chrome)
pnpm run build         # Production build
pnpm run check         # typecheck + lint + format:check + test + Chrome/Firefox builds
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

1. On a feature branch, run `pnpm run release:patch` (or `release:minor` / `release:major`) to update `package.json` without creating a commit or tag.
2. Commit the version change, open a PR, and merge after CI passes.
3. Tag the merged commit with the matching version and push that tag:
   ```bash
   git tag vX.Y.Z <merged-commit-sha>
   git push origin vX.Y.Z
   ```
4. The `Release` workflow runs checks, builds zips for Chrome + Firefox, and attaches them to a GitHub Release.

## CI

Every push / PR to `main` runs: typecheck → lint → format check → test → Chrome build → Firefox build.

## License

[MIT](./LICENSE)

## Repository Settings

After creating a repository from this template:

1. Enable the Renovate GitHub App for the new repository.
2. Enable **Allow auto-merge** and **Allow squash merging** in repository settings.
3. Protect `main`: require a pull request and the GitHub Actions `check` status check. Keep required approvals at zero for unattended dependency updates.

GitHub does not copy App access or branch protection settings from templates. Renovate automerges non-major updates after the release-age checks and CI pass; major updates require manual review.
