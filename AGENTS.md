# AGENTS.md

This is the personal site for Bradley Reynolds at [shenanigans.dog](https://shenanigans.dog).

## Tech stack

- **Framework:** [Astro](https://astro.build) (static site)
- **Language:** TypeScript (`strictest` tsconfig)
- **Linter/Formatter:** [Biome](https://biomejs.dev) — do **not** use Prettier or ESLint
- **Deploy:** Cloudflare via the experimental TypeScript config
  (`cloudflare.config.ts` for runtime + `wrangler.config.ts` for tooling),
  deployed with `wrangler --x-new-config` (see `npm run deploy`).
- **Node:** >= 24.12.0

## Project structure

```
/
├── public/            # static assets served as-is
├── src/
│   ├── components/    # Astro components (e.g. Header)
│   ├── images/        # optimized images
│   ├── layouts/       # BaseLayout, MarkdownPostLayout
│   ├── pages/         # routes (index, now, posts/)
│   ├── styles/        # global.css
│   └── constants.ts   # repo URL + git commit hash
├── astro.config.mjs
├── cloudflare.config.ts   # Worker runtime config (--x-new-config)
└── wrangler.config.ts     # Worker tooling/assets config (--x-new-config)
```

## Commands

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full list. Key commands:

```sh
npm install                             # install dependencies
npm run dev                             # dev server at localhost:4321
npm run build                           # production build to ./dist/
npx @biomejs/biome check --write        # lint and auto-fix
```

## Code style

- **Formatting:** 2-space indent, spaces (not tabs), double quotes for JS/TS strings
- **Imports:** auto-organized by Biome (`organizeImports: on`)
- **Unused imports/variables:** rules are disabled — don't add `_` prefixes to suppress them
- Run `npx @biomejs/biome check --write` before committing to auto-fix formatting and lint issues
