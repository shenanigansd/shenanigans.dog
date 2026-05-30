# Copilot Instructions

This is the personal site for Bradley Reynolds at [shenanigans.dog](https://shenanigans.dog), built with Astro and deployed to Cloudflare.

## Tech stack

- **Astro** static site, TypeScript with `strictest` tsconfig
- **Biome** for linting and formatting — do **not** suggest Prettier or ESLint
- **Cloudflare** deploy via `wrangler.jsonc`
- **Node** >= 24.12.0

## Code style

- 2-space indent, spaces (not tabs), double quotes for JS/TS
- Imports are auto-organized by Biome
- `noUnusedImports` and `noUnusedVariables` rules are disabled
- Lint command: `npx @biomejs/biome check --write`
