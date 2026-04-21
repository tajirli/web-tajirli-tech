# Tajirli Tech Hub (GitHub Pages)

This repository is now GitHub Pages ready.

## Why the 404 happened

GitHub Pages needs an `index.html` file at the repository root (or inside the selected Pages source directory).
The previous structure only had documentation inside `.internal-docs/`, so the project root URL returned 404.

## What is now fixed

- Added a root landing page: `index.html`
- Added a custom fallback page: `404.html`
- Added `.nojekyll` for static file compatibility
- Mirrored internal docs to public path: `docs/`

## Main URLs after deployment

- Home: `/web-tajirli-tech/`
- Website docs: `/web-tajirli-tech/docs/index.html`
- App docs: `/web-tajirli-tech/docs/app-tajirli/index.html`

## GitHub Pages configuration

In repository settings:

1. Open **Pages**.
2. Set source to **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**.
4. Save and wait for deployment.

If you use a custom domain, keep your `CNAME` file at repository root.