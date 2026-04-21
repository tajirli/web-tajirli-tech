# UI + i18n Engineering Guide

## 1. Objective

Build a clear, low-friction website entrypoint that:

- gives immediate direction to the user,
- supports multilingual teams,
- remains easy to maintain by engineers.

## 2. Information Architecture

The homepage follows a strict hierarchy:

1. Orientation: brand, global navigation, language selector.
2. Primary action: hero area with fast start actions.
3. Decision support: destination cards by task.
4. Process guidance: website hierarchy (step-by-step).
5. Role routing: direct paths for engineer, product/PM, operations.
6. System confidence: hosting status and usability rationale.

This sequence is intentional and should remain stable unless user research indicates otherwise.

## 3. i18n Technical Design

### 3.1 Source of truth

All UI copy for public pages is stored in `site-i18n.js`.

Structure:

- `translations.<lang>.common`: shared keys
- `translations.<lang>.pages.home`: homepage keys
- `translations.<lang>.pages["404"]`: not-found page keys

### 3.2 Runtime behavior

- User language is stored in `localStorage` (`tajirli-site-language-v1`).
- Language is applied on initial load.
- Arabic enables RTL (`dir="rtl"`) and RTL-specific CSS behavior.

### 3.3 Markup contract

- Use `data-i18n="key"` for text nodes.
- Use `data-i18n-attr="attr:key"` for attributes (example: aria-label).
- Use `data-page="home"` or `data-page="404"` on body.

## 4. Accessibility Baseline

- Keep skip-link on homepage.
- Ensure interactive controls are keyboard reachable.
- Keep language selector labeled.
- Preserve contrast and large click targets.

## 5. Style System Rules

- Main stylesheet is `site.css`.
- Use design tokens in `:root` for colors and spacing behavior.
- Avoid inline styles unless unavoidable.
- Keep responsive breakpoints consistent with existing media queries.

## 6. Change Workflow (Recommended)

1. Update markup keys in HTML.
2. Add translations for EN, FR, AR in `site-i18n.js`.
3. Verify RTL behavior for Arabic.
4. Validate pages in mobile and desktop widths.
5. Run quick content QA for missing keys and truncation.

## 7. QA Checklist

- Home page renders correctly in EN, FR, AR.
- 404 page renders correctly in EN, FR, AR.
- Language selection persists after refresh.
- Arabic layout is readable and directionally correct.
- Main call-to-actions remain visible above the fold.
- No broken links to docs pages.

## 8. Future Enhancements

- Add locale-aware date and number formatting.
- Add translation extraction tooling if page count grows.
- Add automated screenshot tests for EN/FR/AR layouts.
