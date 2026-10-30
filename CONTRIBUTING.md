# Contributing

Thank you for contributing to Kaiyn Website. This document describes how to set up the project locally, the conventions we follow, and what to expect when opening a pull request.

## Getting Started

### Prerequisites

- Node.js 25 (pinned in `.nvmrc`). Use `nvm`, `fnm`, or `volta` so your shell picks up the repo version automatically.
- pnpm 10 (pinned via the `packageManager` field in `package.json`). With Corepack enabled, the right version is selected automatically:

  ```bash
  corepack enable
  ```

### Install and run

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000`. Locale routes:
- `/` — English (default, no prefix)
- `/zh-TW` — Traditional Chinese
- `/zh-CN` — Simplified Chinese

## Scripts

```bash
pnpm dev            # Start the local dev server
pnpm build          # Create a production build
pnpm start          # Start the production server
pnpm typecheck      # Run TypeScript checks (tsc --noEmit)
pnpm lint           # Run Biome lint and format checks (biome check)
pnpm format         # Apply Biome formatting (biome format --write)
pnpm format:check   # Check formatting without writing (biome format)
pnpm check          # Run typecheck + biome check + biome format
pnpm clean          # Remove generated build/cache files
pnpm clean:all      # Remove generated files and reinstall dependencies
```

Run `pnpm check` before pushing — it runs the same checks CI does.

## Project Structure

```text
src/app/[locale]/
  layout.tsx              Locale-aware root layout
  (home)/                 Home page route group

src/components/
  ui/                     shadcn/ui primitives (third-party - do not edit)
  custom/                 Project-specific feature components
  layout/                 Layout shells (Container, Header, LanguageSwitcher)

src/i18n/
  routing.ts              Locale list and prefix policy
  request.ts              next-intl request configuration
  navigation.ts           Locale-aware Link, useRouter, etc.

src/lib/
  utils.ts                shadcn utility (third-party - do not edit)

messages/
  en.json                 English copy
  zh-TW.json              Traditional Chinese copy
  zh-CN.json              Simplified Chinese copy

public/                   Static assets (images, video)
```

## Branching and Commits

### Branches

Create a topic branch from `main`. Use a `type/short-description` form:
- `feat/timeline-step-5`
- `fix/locale-redirect`
- `chore/add-basic-ci-pipeline`

### Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/) with one project-specific rule:

**Do not use scopes.** Use `type: description`, never `type(scope): description`.

Good:

```
feat: add CTA button to hero
fix: prevent locale prefix duplication on /zh-TW
ci: add lint typecheck format and build pipeline
```

Avoid:

```
feat(home): add CTA button to hero       # do not include the (home) scope
```

Common types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`, `ci`, `build`, `perf`.

Guidelines:
- Subject line in lowercase, imperative mood, no trailing period, under 72 characters.
- One logical change per commit; keep commits atomic.
- The body (optional) should explain _why_, not _what_ — the diff already shows what changed.
- Do not bundle unrelated changes (a fix and an unrelated formatting sweep should be two commits).
- Do not add `Co-Authored-By` trailers for tools or assistants. Only real human collaborators belong in commit metadata.

## Pull Requests and CI

1. Push your branch and open a PR against `main`.
2. CI runs four parallel jobs (see `.github/workflows/ci.yml`):
   - `typecheck` — `tsc --noEmit`
   - `lint` — `biome check`
   - `format-check` — `biome format`
   - `build` — `next build`
3. All four must pass before merge.

PR description should explain _why_ the change is needed. A short summary of _what_ changed is helpful but the diff is the source of truth. If the change is visual, include a screenshot or short clip.

The workflow uses `concurrency` to cancel superseded runs on the same branch, so pushing repeatedly to a PR will not pile up CI usage.

## Code Style

Formatting and lint rules are enforced by **Biome** (`biome.json`). Run `pnpm format` to fix everything, or `pnpm lint` to see violations.

TypeScript runs in strict mode (`tsconfig.json`). Avoid `any`; prefer narrowing with type guards or `unknown`.

## Component Conventions

### Never modify third-party code

`src/components/ui/` (shadcn/ui) and `src/lib/utils.ts` are treated as vendored third-party code. Do not edit them in place. Biome is configured to skip these paths, and re-running the shadcn CLI will overwrite manual edits.

When customization is required, build a wrapper under `src/components/custom/`:

```tsx
// src/components/custom/primary-button.tsx
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

export function PrimaryButton(props: ComponentProps<typeof Button>) {
  return <Button variant="default" size="lg" {...props} />;
}
```

### Prefer wrapping shadcn over building from scratch

For a new UI primitive:
1. First check whether shadcn has an official equivalent.
2. If yes, install it: `pnpm dlx shadcn@latest add <name>`. The component lands in `src/components/ui/`. Wrap it in `src/components/custom/`.
3. If no, compose directly from `@base-ui/react` primitives and place the result in `custom/`.

### base-ui uses `render`, not `asChild`

The underlying primitive is base-ui (not Radix). Use the `render` prop:

```tsx
<DropdownMenuTrigger
  render={
    <Button variant="ghost" size="icon" aria-label="Open menu">
      <Globe />
    </Button>
  }
/>;
```

Do not use the `<Trigger asChild><Button /></Trigger>` pattern from Radix examples — `asChild` is not a base-ui API.

## Layout and Padding

The horizontal inset token is defined in `src/app/globals.css`:

```css
--page-inline: clamp(1rem, 4vw, 2.5rem);
```

This gives 16px padding on narrow viewports scaling to 40px on wide ones with no breakpoint jumps. Do not apply `env(safe-area-inset-*)` to horizontal gutters — it has no visual effect on pages without `viewport-fit=cover`.

Use `Container` from `src/components/layout/container.tsx` for content alignment. It applies `mx-auto` and `px-(--page-inline)` and exposes three width variants:
- `narrow` — `max-w-3xl` (48rem), for prose
- `default` — `max-w-7xl` (80rem), for standard landing sections
- `wide` — `max-w-screen-2xl` (96rem), for feature grids

Standard pattern — full-bleed background with aligned content:

```tsx
<section className="bg-muted">
  <Container>
    <div>Content aligns with the header</div>
  </Container>
</section>;
```

Narrow prose:

```tsx
<Container variant="narrow">
  <article>...</article>
</Container>;
```

For true full-bleed (hero images, color bands), use `<section>` directly without `Container`.

## Internationalization

Locale configuration lives in `src/i18n/routing.ts`. Three locales are supported:
- `en` — default, served from `/` (no prefix)
- `zh-TW` — Traditional Chinese, served from `/zh-TW`
- `zh-CN` — Simplified Chinese, served from `/zh-CN`

Page copy is namespaced in:
- `messages/en.json`
- `messages/zh-TW.json`
- `messages/zh-CN.json`

When adding or renaming a translation key, **update all three locale files in the same commit**. Missing keys cause runtime errors during static generation, which CI's `build` job will catch.

Use the helpers from `src/i18n/navigation.ts` (`Link`, `useRouter`, `redirect`, etc.) instead of importing from `next/link` or `next/navigation` directly — these helpers preserve locale prefixes correctly across routes.
