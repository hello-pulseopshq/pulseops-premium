# Phase VI.5F Performance Remediation Pass 2

## Executive Summary

Phase VI.5F reviewed the Shopify Sidekick deep-dive findings after VI.5C certified performance at **86/100** and VI.5D raised the remediation score to **88/100**.

Result: **PASS WITH OBSERVATIONS**.

Updated performance score: **88/100, unchanged from VI.5D**.

One safe implementation change was kept: the above-the-fold product media image now emits `loading="eager"` and `fetchpriority="high"` when `product-media-gallery` passes `lazy_load: false` for the featured media. The homepage Supplement hero was already correct and required no change.

Several Sidekick-suggested CSS deferrals were tested and rejected because they did not meet the sprint's safety bar. Cart drawer CSS deferral caused severe CLS regressions in Lighthouse, and `sp-motion.css` deferral reduced or failed to improve mobile scores. Those experiments were reverted.

## Files Changed

Implementation:

- `snippets/product-thumbnail.liquid`

Audit/reporting:

- `.audit/performance/vi5f-performance-remediation-pass-2.md`

Raw evidence artifacts:

- `.audit/performance/vi5f-raw/*.json`

Pre-existing unrelated dirty files were present before VI.5F and were not modified for this sprint:

- `assets/sp-commerce-premium.css`
- `assets/sp-editorial-differentiation.css`
- `assets/sp-editorial-outcomes.css`
- `assets/sp-editorial-system.css`
- `assets/sp-ingredients-spotlight.css`
- `assets/sp-quality-standards.css`
- `assets/sp-social-proof-stage.css`
- `assets/sp-supplement-hero.css`

## Sidekick Findings Reviewed

### `assets/animations.js`

Reviewed and syntax checked with `node --check assets/animations.js`.

Outcome: **not reproduced**. No syntax error was found, and no animation behavior was rewritten.

### Homepage hero image priority

Reviewed `snippets/sp-hero-media.liquid` and verified runtime output on the Supplement homepage.

Actual rendered hero image attributes:

- `fetchpriority="high"`
- `loading="eager"`
- `width="1600"`
- `height="1067"`
- responsive `srcset`
- `sizes="100vw"`

Outcome: **already compliant**. No crop, art direction, or markup behavior changed.

### Product media LCP priority

The PDP's first visible product image had dimensions and responsive sources, but no `loading` or `fetchpriority` attribute. Because `product-media-gallery` already passes `lazy_load: false` for the featured media, this was a safe place to convert the existing intent into explicit browser priority.

Outcome: **implemented**.

### Cart drawer CSS render blocking

Tested deferring:

- `component-cart-drawer.css`
- `component-cart.css`
- `component-totals.css`
- `component-discounts.css`

`component-price.css` was kept render-blocking during the experiment because product, predictive search, and cart pricing surfaces use it above the fold.

Outcome: **rejected and reverted**. The experiment caused material CLS regressions:

- Product mobile CLS: `0.531`
- Cart mobile CLS: `0.870`

This failed the sprint's no visual regression and no accessibility/runtime regression safety criteria.

### PulseOps global CSS deferral

Classified global CSS:

- `sp-visual-hierarchy.css`: critical visual foundation.
- `sp-motion.css`: interaction/motion only; safe by behavior, but not measurably beneficial in Lighthouse.
- `sp-image-experience.css`: critical image and media-frame layout.
- `sp-storefront-polish.css`: lower-page and commerce polish, but affects product, collection, and cart surfaces.
- `sp-commerce-premium.css`: commerce UI, cart drawer, cart page, PDP, and header polish.

Outcome: **rejected and reverted for VI.5F**. A targeted `sp-motion.css` deferral preserved behavior but did not produce a stable performance win:

- Homepage mobile score fell to `52`.
- Product mobile score fell to `47`.
- Unused CSS bytes were unchanged.

### Hero image transform

Reviewed `assets/sp-supplement-hero.css`.

The rule `transform: scale(var(--sp-hero-media-scale))` is present on the Supplement hero media image with `--sp-hero-media-scale: 1.03`.

Outcome: **rejected**. Removing it would change the approved hero crop/composition, so it was left intact.

### Root background `!important`

Reviewed root-level Supplement background overrides in `assets/sp-supplement-hero.css`.

Outcome: **rejected for this sprint**. The overrides enforce the frozen warm ivory Supplement canvas over Dawn gradient/background defaults. Removing them safely would require a broader token/color-scheme consolidation, not a performance remediation pass.

### Global JS bundling

Outcome: **not implemented by instruction**. Bundling `constants.js`, `pubsub.js`, and `global.js` remains future build-pipeline work.

### Cart drawer JS lazy loading

Outcome: **not implemented by instruction**. Cart drawer JavaScript remains globally available to preserve add-to-cart and drawer accessibility behavior.

## Findings Implemented

`snippets/product-thumbnail.liquid` now treats `lazy_load: false` as explicit eager, high-priority media:

- Featured product media receives `loading="eager"`.
- Featured product media receives `fetchpriority="high"`.
- Secondary gallery media remain `loading="lazy"` and do not receive `fetchpriority`.
- Image dimensions, `sizes`, widths, crop, media zoom, modal, video/model behavior, and gallery ordering were not changed.

Runtime PDP verification after the change:

- First visible product image: `loading="eager"`, `fetchpriority="high"`, `width="1946"`, `height="1946"`.
- Secondary visible media: `loading="lazy"`, no `fetchpriority`.

## Findings Rejected

- Cart drawer CSS deferral: rejected due to measured CLS regressions.
- `sp-motion.css` deferral: rejected due to no stable Lighthouse improvement.
- `sp-image-experience.css` deferral: rejected because it controls image/frame layout.
- `sp-storefront-polish.css` and `sp-commerce-premium.css` deferral: rejected because they affect visible commerce and collection/cart/PDP presentation.
- Hero media scale removal: rejected because it changes approved composition.
- Root background `!important` removal: rejected because it risks the frozen Supplement canvas.
- JS bundling: deferred to future build-pipeline work.
- Cart drawer JS lazy loading: deferred to future work.

## Before/After Lighthouse

Baseline references:

- VI.5C score: **86/100**.
- VI.5D score: **88/100**.
- VI.5D product mobile: `52`, LCP `11774ms`, TBT `295ms`.

Final VI.5F evidence was collected against the same local authenticated Shopify CLI preview. Lighthouse on this preview remains noisy and produced the recurring Windows temp cleanup warning after JSON output was generated.

| Route | VI.5C Score | VI.5D Score | VI.5F Final Score | VI.5F LCP | VI.5F TBT | VI.5F CLS |
|---|---:|---:|---:|---:|---:|---:|
| Homepage mobile | 54 | 57 | 54 | 8746ms | 233ms | 0.118 |
| Product mobile | 47 | 52 | 45 repeat / 41 first run | 11383ms repeat / 10821ms first run | 497ms repeat / 666ms first run | 0.001 |
| Cart mobile | 59 | 60 | 57 | 7448ms | 330ms | 0.002 |
| Homepage desktop | n/a | n/a | 83 | 2107ms | 35ms | 0.092 |
| Product desktop | n/a | n/a | 80 | 2197ms | 28ms | 0.006 |

Measured product image-priority effect:

- Current-state product mobile before the kept image-priority fix: score `46`, LCP `11953ms`, TBT `455ms`.
- Product mobile after the kept image-priority fix, first run: score `41`, LCP `10821ms`, TBT `666ms`.
- Product mobile after the kept image-priority fix, repeat run: score `45`, LCP `11383ms`, TBT `497ms`.

Interpretation:

- The product media priority fix improved product LCP timing versus the same-session pre-fix current-state run.
- It did not create a stable Lighthouse score uplift because TBT varied upward in the local Shopify preview.
- Homepage did not improve because its hero image priority was already correct and no safe CSS deferral was retained.
- VI.5F therefore remains **88/100 PASS WITH OBSERVATIONS**, not a premium-performance certification.

## Visual Regression Check

Playwright route smoke loaded:

- Homepage
- Product
- Cart
- Search
- Collection

Viewports:

- Mobile `390`
- Mobile `430`
- Desktop `1440`

Theme-owned route facts were stable:

- Homepage hero image retained expected priority/dimension/source attributes.
- Cart drawer was present and hidden before interaction.
- Product sticky ATC was present and inert/hidden before activation.
- No crop, typography, spacing, section order, or merchant settings were changed.

Known local preview noise:

- `/api/collect` aborted under Shopify CLI preview.
- Shopify `origin_trials` CORS errors appeared on search/collection.

These were already observed as non-theme-owned preview noise in prior certifications.

## Runtime Regression Check

Targeted Playwright interaction checks passed on:

- Mobile `390`
- Mobile `430`
- Desktop `1440`

Covered interactions:

- Product add-to-cart.
- Cart drawer open.
- Cart drawer close.
- Sticky ATC scroll-state sweep.

Observed:

- Drawer opened after add-to-cart.
- Drawer closed after close action.
- Sticky ATC stayed inert/hidden before activation zones.
- Sticky ATC became visible/non-inert in the expected scroll band on mobile.
- Sticky ATC retained the accessible label `Add to cart: Daily Vitality Complex`.

## Accessibility Regression Check

No accessibility behavior was removed.

Confirmed:

- Cart drawer close control remained present with label `Close`.
- Sticky ATC retained its `aria-label`.
- Sticky ATC inert state remained active while hidden.
- Secondary gallery media remained lazy-loaded; no gallery controls, modal behavior, or product media ordering changed.

## Validation

- `node --check assets/animations.js`: pass.
- Product image runtime attribute check: pass.
- Homepage hero runtime attribute check: pass.
- `git diff --check`: pass. Git reported pre-existing LF/CRLF warnings on unrelated dirty CSS files.
- `shopify theme check --fail-level error --output json`: pass, exit code `0`.
- `ReadLints` for `snippets/product-thumbnail.liquid`: timed out after 10 seconds; Theme Check and runtime verification were used as the authoritative validation.

## Remaining Performance Risks

- Product route still carries high unused JavaScript, especially gallery/product/cart infrastructure.
- Product mobile Lighthouse remains weak and did not improve reliably at the score level in VI.5F.
- Homepage mobile still has high LCP under Lighthouse throttling despite correct hero image priority.
- CSS volume remains high, but broad deferral caused CLS or score regressions in this pass.
- Cart drawer CSS appears layout-critical enough that deferral needs a dedicated critical-CSS extraction strategy, not blanket media-print loading.
- Shopify CLI preview introduces measurement noise; final performance certification should use a password-unlocked or production-like preview.

## Recommended Next Step

Proceed with a dedicated performance architecture sprint focused on build-pipeline or route-aware payload reduction:

- Bundle or tree-shake shared global JS only in a controlled build-pipeline branch.
- Split product/gallery/cart drawer JavaScript by route or interaction after proving cart accessibility remains intact.
- Extract true critical CSS for cart drawer and product above-the-fold surfaces instead of deferring whole component files.
- Repeat Lighthouse against a production-like unlocked preview with multiple runs per route and median reporting.

Recommended commit message: `Performance remediation pass 2`

Recommended tag: `pulseops-performance-remediation-v2`
