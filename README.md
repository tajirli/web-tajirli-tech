# Tajirli Tech Hub (GitHub Pages)

This repository is now GitHub Pages ready.

## UX and Information Hierarchy

The homepage is intentionally structured into three decision layers:

- Start layer: hero and quick start actions.
- Task layer: destination cards for architecture, app docs, runbook, and tracker.
- Role layer: direct paths for engineering, product/PM, and operations.

This reduces navigation ambiguity and supports onboarding for mixed teams.

## i18n Support (EN / FR / AR)

The public pages now support three languages:

- English (`en`)
- French (`fr`)
- Arabic (`ar`, with RTL direction)

Implementation notes:

- Translation engine: `site-i18n.js`
- Language persistence: `localStorage` key `tajirli-site-language-v1`
- Home page id: `data-page="home"`
- 404 page id: `data-page="404"`
- Translatable text uses `data-i18n="translation.key"`
- Translatable attributes use `data-i18n-attr="attrName:translation.key"`

## Core Public Files

- `index.html` (home and navigation hierarchy)
- `404.html` (recoverable not-found page)
- `site.css` (design system + responsive + RTL styles)
- `site-i18n.js` (language switching and translation mapping)

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

## Engineering Documentation

Detailed software engineering guide:

- `UI_I18N_ENGINEERING_GUIDE.md`

## GitHub Pages configuration

In repository settings:

1. Open **Pages**.
2. Set source to **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**.
4. Save and wait for deployment.

If you use a custom domain, keep your `CNAME` file at repository root.