# Chakra UI Docs (Docs-only)

This app is configured to serve only the documentation at `/docs`.

## Development

- Start dev server on port 3001:

```bash
pnpm dev
```

Open http://localhost:3001/docs/get-started/installation

## Build static site

- Generate content and build static export to `apps/www/out`:

```bash
pnpm build
```

Notes:

- Static export is enabled via `next.config.ts` with `output: "export"`,
  `trailingSlash: true`, and `images.unoptimized: true`.
- Redirects are handled in pages (client-side), not in Next.js config, since
  static export ignores `redirects()`.

## GitHub Pages deployment

1. Optional: If serving under a subpath (e.g. `/docs-site`), set base path:

```bash
export NEXT_PUBLIC_BASE_PATH=/docs-site
```

2. Build:

```bash
pnpm build
```

3. Deploy the `apps/www/out` folder to GitHub Pages:

- If using a separate branch like `gh-pages`, push `out` contents there.
- Or use an action to publish `out`.

Example manual publish:

```bash
cd apps/www/out
# create .nojekyll to disable Jekyll
printf "" > .nojekyll
# initialize and push
git init
git checkout -b gh-pages
git add .
git commit -m "Publish docs"
git remote add origin <your repo url>
git push -f origin gh-pages
```

You can also add a workflow that builds and deploys `apps/www/out` on push.
