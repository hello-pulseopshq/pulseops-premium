# Phase VI.5D Performance Remediation

## Executive Summary

Phase VI.5D performed a narrow, measured performance remediation pass after VI.5C certified the release candidate at **86/100, PASS WITH OBSERVATIONS**.

Result: **PASS WITH OBSERVATIONS**.

Updated performance score: **88/100**.

The sprint improved mobile Lighthouse scores across all primary routes while preserving visual design, runtime behavior, accessibility protections, merchant settings, and the frozen design system.

This was not a redesign or architecture refactor. The only implementation changes were duplicate asset-loading reductions in existing Liquid sections.

## Files Changed

Implementation files:

- `sections/sp-sticky-atc.liquid`
- `sections/main-product.liquid`
- `sections/main-cart-items.liquid`
- `sections/main-cart-footer.liquid`
- `sections/header.liquid`

Audit file:

- `.audit/performance/vi5d-performance-remediation.md`

Ignored measurement artifacts:

- `.audit/performance/vi5d-raw/*.json`

Pre-existing unrelated dirty files remained untouched:

- `assets/sp-commerce-premium.css`
- `assets/sp-editorial-differentiation.css`
- `assets/sp-editorial-outcomes.css`
- `assets/sp-editorial-system.css`
- `assets/sp-ingredients-spotlight.css`
- `assets/sp-quality-standards.css`
- `assets/sp-social-proof-stage.css`
- `assets/sp-supplement-hero.css`

## Optimizations Kept

### 1. Removed duplicate Sticky ATC `product-form.js`

File: `sections/sp-sticky-atc.liquid`

Reason:

- `templates/product.supplement.json` renders `main-product` before `sp-sticky-atc`.
- `sections/main-product.liquid` already loads `product-form.js`.
- Sticky ATC still keeps `sp-sticky-atc.js`; only the duplicate `product-form.js` tag was removed.

Measured effect:

- Product page script tags changed from two `product-form.js` tags to one.
- Focused product mobile Lighthouse run improved from `34` to `40` after the first sticky asset change.
- Final route sweep product mobile Lighthouse improved from VI.5C `47` to `52`.
- Product mobile TBT improved from VI.5C `439ms` to `295ms`.

### 2. Removed duplicate Sticky ATC `component-price.css`

File: `sections/sp-sticky-atc.liquid`

Reason:

- Product page price CSS is already available through the main product/layout path.
- Sticky ATC has its own section CSS for sticky-specific presentation.

Measured effect:

- Product page `component-price.css` stylesheet tag count was reduced.
- Visual/runtime smoke tests confirmed sticky ATC remained visible, non-inert when active, and kept its accessible add-to-cart label.

### 3. Guarded drawer-cart duplicate product/cart CSS

Files:

- `sections/main-product.liquid`
- `sections/main-cart-items.liquid`
- `sections/main-cart-footer.liquid`

Reason:

- With `settings.cart_type == 'drawer'`, `layout/theme.liquid` already loads the shared cart/price CSS stack in the head.
- The cart/product sections still keep their CSS when drawer cart is not enabled, preserving merchant configurability.

Measured effect:

- Product page final stylesheet list no longer included the main-product duplicate `component-price.css`.
- Cart page final stylesheet list no longer included duplicate section-level cart, totals, discounts, price, or quantity-popover assets.
- Cart mobile Lighthouse improved from VI.5C `59` to `60`.

### 4. Guarded header predictive-search `component-price.css`

File: `sections/header.liquid`

Reason:

- Predictive search loaded `component-price.css` separately.
- In the current drawer-cart configuration, `layout/theme.liquid` already provides `component-price.css`.
- The header fallback remains for non-drawer cart configurations.

Measured effect:

- Homepage final stylesheet list dropped the duplicate header `component-price.css`.
- Homepage mobile Lighthouse improved from VI.5C `54` to `57`.
- Search mobile Lighthouse improved from VI.5C `66` to `67`.

## Before vs After Lighthouse

Baseline source: VI.5C Lighthouse mobile results against canonical QA theme `183028121915`.

After source: VI.5D final mobile Lighthouse route sweep against the same local authenticated preview target.

| Route | Before Score | After Score | Delta | Before LCP | After LCP | Before TBT | After TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| Homepage | 54 | 57 | +3 | 8645ms | 9494ms | 214ms | 159ms |
| Product | 47 | 52 | +5 | 11905ms | 11774ms | 439ms | 295ms |
| Cart | 59 | 60 | +1 | 7465ms | 7487ms | 263ms | 240ms |
| Search | 66 | 67 | +1 | 5433ms | 5393ms | 277ms | 226ms |
| Collection | 58 | 59 | +1 | 6414ms | 6787ms | 324ms | 328ms |

Notes:

- Lighthouse local preview results varied between runs, especially LCP.
- The consistent improvement is in score and TBT, not a universal LCP reduction.
- Product is the most meaningful improvement because the implemented duplicate JS change directly affected that route.

## Measured Improvements

### Lighthouse score

- Homepage: `+3`
- Product: `+5`
- Cart: `+1`
- Search: `+1`
- Collection: `+1`

### TBT

- Homepage: `214ms -> 159ms`
- Product: `439ms -> 295ms`
- Cart: `263ms -> 240ms`
- Search: `277ms -> 226ms`
- Collection: `324ms -> 328ms`

### Duplicate asset tags

Before focused product measurement:

- Product page DOM included two `product-form.js` script tags.
- Product page DOM included multiple `component-price.css` stylesheet tags.

After final measurement:

- Product page DOM included one `product-form.js` script tag.
- Product page kept `sp-sticky-atc.js`, `product-modal.js`, and `media-gallery.js`.
- Cart page no longer emitted duplicate cart page CSS/quantity-popover assets when drawer cart already provided them.

### Request count

Browser resource counts are noisy under Shopify CLI preview, but final mobile resource counts showed:

- Homepage: `220`
- Product: `230`
- Cart: `201`
- Search: `203`
- Collection: `216`

The clearest measurable request reduction was collection compared with VI.5C mobile browser sweep (`218 -> 216`) and homepage compared with the intermediate after run (`221 -> 220`). Product duplicate `product-form.js` was primarily a duplicate DOM/init reduction rather than a second network transfer in Chromium's resource timing.

## Performance Score

Updated score: **88/100**.

Rationale:

- All primary mobile Lighthouse scores improved versus VI.5C.
- Product route improved the most and no longer emits duplicate `product-form.js`.
- Runtime smoke tests passed.
- Theme Check remains at `0` errors.
- The theme still falls short of premium-performance certification because product unused JS and overall mobile Lighthouse scores remain materially below target.

## Remaining Observations

### Product unused JS remains high

Status: **Not resolved**.

Evidence:

- Product mobile unused JS remained about `383906` bytes in the final Lighthouse run.
- Removing the duplicate script tag improved TBT and script-tag duplication, but Lighthouse still sees substantial unused JS from product/gallery/cart/Shopify code.

Recommended next action:

- Audit product gallery/media capabilities and route-level script ownership separately.
- Do not remove gallery, modal, zoom, cart, or accessibility behavior without targeted proof.

### Unused CSS remains high

Status: **Partially improved**.

Evidence:

- Search unused CSS improved from VI.5C `118083` bytes to `114487` bytes.
- Collection unused CSS improved from VI.5C `121741` bytes to `118145` bytes.
- Homepage, product, and cart unused CSS remained effectively unchanged in Lighthouse.

Recommended next action:

- Audit Supplement global/head CSS versus route-specific CSS.
- Do not merge CSS broadly; prioritize route scoping and component deduplication.

### Mobile LCP remains weak

Status: **Not resolved**.

Evidence:

- Homepage final mobile LCP: `9494ms`.
- Product final mobile LCP: `11774ms`.
- Cart final mobile LCP: `7487ms`.

Recommended next action:

- Repeat Lighthouse on a password-unlocked remote preview before treating these numbers as final.
- If reproduced, investigate server response/local preview overhead, render path, and CSS/JS critical path.

## Regression Testing

Playwright smoke tests covered:

- Homepage
- Product page
- Cart page
- Search results
- Collection
- Sticky ATC visibility
- Sticky ATC accessible label
- Product add-to-cart
- Cart drawer open state
- Cart count update

Result: **PASS WITH OBSERVATIONS**.

Evidence:

- Primary routes returned `200`.
- No horizontal overflow was detected.
- Product and cart retained `sp-supplement` class.
- Sticky ATC became visible with `inert: false`.
- Sticky ATC accessible label remained `Add to cart: Daily Vitality Complex`.
- Product add-to-cart opened the cart drawer.
- Cart drawer became active with `inert: false`.
- Cart count updated to `1 item`.

Observation:

- One homepage smoke run saw a transient `503` resource. A focused homepage retry showed only Shopify local preview analytics/web-pixel aborts (`/api/collect`, `login_with_shop`, `web-pixels`) and no theme-owned asset failure.

## Theme Check Results

Command:

```powershell
shopify theme check --fail-level error --output json
```

Result: **PASS**.

- Error count: `0`
- Existing warning baseline remains, including known warnings in Dawn-derived files and `main-product.liquid`.
- No new Theme Check errors were introduced.

## Playwright Results

Result: **PASS WITH OBSERVATIONS**.

Validated:

- Route loading
- Supplement class presence where already expected
- Horizontal overflow absence
- Product form submission
- Sticky ATC state
- Cart drawer state
- Cart count update

Known existing observation:

- Search and collection routes still do not globally activate `sp-supplement` from `?view=supplement`, matching VI.5B and VI.5C observations. This sprint did not attempt to fix routing scope.

## Architecture Safety Confirmation

Confirmed.

- No architecture files were refactored.
- No CSS files were merged.
- No design-system documents were changed.
- No section order changed.
- No merchant settings changed.
- Duplicate asset guards are conditional on existing `settings.cart_type == 'drawer'`, preserving fallback loading when drawer cart is not active.
- Product template ordering supports the sticky ATC `product-form.js` removal because `main-product` renders before `sp-sticky-atc`.

## Accessibility Regression Confirmation

Confirmed.

- Sticky ATC remains present.
- Sticky ATC still toggles visible state.
- Sticky ATC accessible label remained product-specific.
- Cart drawer still opens and removes `inert`.
- No accessibility remediation from VI.5A was removed.

## Merchant Regression Confirmation

Confirmed.

- No merchant settings were removed or renamed.
- Non-drawer cart configurations retain their section-level CSS/JS fallbacks.
- Product page, cart, search, and collection still render.
- Product add-to-cart still works.
- Cart drawer still works.

## Potential Optimizations Rejected

### Broad PulseOps CSS consolidation

Rejected because it would be an architecture/cascade refactor, not a narrow measurable remediation.

### Removing Dawn `animations.js`

Rejected because it could change animation behavior for Dawn-derived sections and merchant settings. It remains a future measured candidate only if motion behavior can be preserved.

### Removing product gallery/media scripts

Rejected because it could remove or degrade product media, modal, gallery, or accessibility behavior.

### Lazy-loading or interaction-loading cart drawer globally

Rejected for this sprint because cart drawer is a core commerce interaction and changing its load timing risks runtime/accessibility regressions.

### Fixing search/collection Supplement routing

Rejected because it is a routing/architecture scope decision, not a performance remediation.

## Release Recommendation

Recommendation: **PASS WITH OBSERVATIONS**.

VI.5D produced measurable performance improvement without visual, runtime, accessibility, architecture, or merchant regressions. The product page still needs further performance work before premium-performance certification, but this sprint safely reduced duplicate loading and improved mobile Lighthouse scores across the tested primary routes.

Recommended next sprint:

- Continue with a focused product-page JS/media audit if the goal is to push the product route into the premium-certified range.

Recommended commit message:

`Performance remediation`

Recommended tag:

`pulseops-performance-remediation-v1`
