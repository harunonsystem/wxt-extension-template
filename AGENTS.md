# AGENTS.md

## Project Overview

A browser extension built with WXT + TypeScript.
<!-- Describe what your extension does here. -->

## Tech Stack

- **Framework**: WXT (Browser Extension Framework, Chrome MV3 / Firefox MV2)
- **Language**: TypeScript (strict)
- **Package Manager**: pnpm
- **Testing**: Vitest (`WxtVitest` plugin)
- **Linting / Formatting**: oxlint / oxfmt

## Commands

```bash
pnpm run dev      # Dev server (Chrome)
pnpm run build    # Production build
pnpm run check    # All quality gates (typecheck + lint + format + test + Chrome/Firefox builds)
pnpm run test     # Unit tests
pnpm run zip      # Package for distribution
```

## Directory Structure

```
src/
├── entrypoints/   # WXT entrypoints (background / content / popup)
└── lib/           # Shared logic + co-located *.test.ts
```

## Implementation Rules

1. **Entrypoints stay thin**: Logic lives in `src/lib/`, entrypoints only wire things up.
2. **Co-located tests**: Put `foo.test.ts` next to `foo.ts`. Add tests for any logic changes.
3. **Imports**: Use `@/` alias for `src/`, `#imports` for WXT APIs.
4. **Style**: single quotes, no semicolons (enforced by oxfmt). Run `pnpm run check` before committing.

## Git Workflow

- GitHub Flow: feature branch → PR → main
- Conventional commits: `feat:`, `fix:`, `refactor:`, `chore:`
- Release: bump the version with `pnpm run release:patch`, `release:minor`, or `release:major`; merge the version PR; then tag the merged commit to trigger GitHub Release with zips.
