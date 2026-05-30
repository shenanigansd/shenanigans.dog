# shenanigans.dog

Personal site for Bradley Reynolds, built with [Astro](https://astro.build) and deployed to Cloudflare.

## Project structure

```text
/
├── public/            # static assets served as-is
├── src/
│   ├── components/    # Header
│   ├── images/        # optimized images
│   ├── layouts/       # BaseLayout, MarkdownPostLayout
│   ├── pages/         # routes (index, now, posts/)
│   ├── styles/        # global.css
│   └── constants.ts   # repo URL + git commit hash
├── astro.config.mjs
└── wrangler.jsonc     # Cloudflare deploy config
```

## Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deploying   |

