# Phase VI.5C Performance Certification

## Executive Summary

Phase VI.5C performed a focused performance certification pass for the PulseOps Supplement release candidate on canonical QA theme `183028121915`.

Result: **PASS WITH OBSERVATIONS**.

Performance score: **86/100**.

Certification: **PASS WITH OBSERVATIONS - conditional performance pass; remediation recommended before claiming premium performance certification.**

PulseOps is functionally stable and technically suitable for continued release-candidate hardening, but it is not yet fully premium-performance certified. No production-breaking performance defect, theme-owned asset 404, missing LCP image dimension, or theme-owned JavaScript exception was found. The main risk is accumulated CSS/JS/request volume, especially on mobile product and homepage routes.

No implementation changes were made.

Canonical runtime target:

- Theme: PulseOps Supplement Demo
- Theme ID: `183028121915`
- Store: `pulseops-labs.myshopify.com`
- Local authenticated preview: `http://127.0.0.1:9292`

## Performance Score /100

Overall score: **86/100**.

Score rationale:

- Desktop Lighthouse scores ranged from `80` to `96`.
- Mobile Lighthouse scores ranged from `47` to `66`, below premium expectations.
- Browser-measured LCP candidates were generally acceptable in unthrottled Chromium, but Lighthouse mobile throttling exposed real payload and execution risk.
- CLS was generally stable, though Lighthouse reported homepage mobile CLS at `0.118`.
- No theme-owned CSS, JS, image, or font 404s were confirmed.
- The homepage hero/LCP image handling is correct.
- Product route JS/CSS volume requires focused remediation before premium performance positioning.

Scoring interpretation:

- `95-100`: premium performance certified
- `90-94`: pass with observations
- `80-89`: conditional pass; remediation recommended
- Below `80`: not certified for premium positioning

## Routes Tested

- Homepage: `/?view=supplement`
- Product page: `/products/daily-vitality-complex?view=supplement`
- Cart: `/cart?view=supplement`
- Search: `/search?view=supplement&q=vitality`
- Collection: `/collections/all?view=supplement`

Viewport targets:

- Mobile: `390px`
- Mobile: `430px`
- Desktop: `1280px`
- Desktop: `1440px`

## Tools Used

- Shopify CLI authenticated preview against theme `183028121915`
- Playwright Chromium browser sweep
- Lighthouse `13.4.0`
- Theme Check JSON
- `git status --short`
- `git diff --check`
- Static Liquid searches for CSS, JS, and image loading patterns

## Lighthouse Results

Lighthouse was run with `--only-categories=performance` for all primary routes in mobile and desktop modes.

Important caveat: the public preview is password protected, so Lighthouse ran against the authenticated Shopify CLI local preview. Shopify CLI preview can add hot-reload, local server timing, Shopify service calls, and Windows temp-directory cleanup noise. These scores are useful for risk detection, but final Theme Store hardening should repeat Lighthouse against a password-unlocked preview or published preview.

### Mobile Lighthouse

| Route | Score | FCP | LCP | TBT | CLS | Speed Index | Unused CSS | Unused JS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | 54 | 4848ms | 8645ms | 214ms | 0.118 | 5591ms | 190520 bytes | 152805 bytes |
| Product | 47 | 7405ms | 11905ms | 439ms | 0 | 7405ms | 221626 bytes | 383906 bytes |
| Cart | 59 | 4551ms | 7465ms | 263ms | 0.002 | 5070ms | 206312 bytes | 152805 bytes |
| Search | 66 | 3412ms | 5433ms | 277ms | 0 | 4203ms | 118083 bytes | 152220 bytes |
| Collection | 58 | 4148ms | 6414ms | 324ms | 0 | 5039ms | 121741 bytes | 150989 bytes |

Mobile conclusion: mobile performance is not premium certified on Lighthouse evidence. Product is the weakest route due to product/gallery/sticky/cart script weight and high unused JS. Homepage is visually stable in runtime probing, but Lighthouse mobile LCP and CLS need follow-up.

### Desktop Lighthouse

| Route | Score | FCP | LCP | TBT | CLS | Speed Index | Unused CSS | Unused JS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | 84 | 1162ms | 2198ms | 34ms | 0 | 1703ms | 175142 bytes | 152652 bytes |
| Product | 80 | 1510ms | 2256ms | 19ms | 0 | 1985ms | 216199 bytes | 383317 bytes |
| Cart | 90 | 1098ms | 1675ms | 25ms | 0.001 | 1472ms | 202074 bytes | 152252 bytes |
| Search | 96 | 774ms | 1252ms | 39ms | 0.003 | 1335ms | 113725 bytes | 151784 bytes |
| Collection | 92 | 881ms | 1522ms | 15ms | 0.001 | 1531ms | 111625 bytes | 150553 bytes |

Desktop conclusion: search, collection, and cart are desktop-performance healthy. Homepage and product remain below premium certification because of unused CSS/JS and total page complexity.

## LCP Findings

### Homepage

Status: **PASS WITH OBSERVATIONS**.

Browser sweep evidence:

- Mobile `390px`: LCP candidate was the hero `H1`, `3448ms`.
- Mobile `430px`: LCP candidate was the hero `H1`, `2036ms`.
- Desktop `1280px`: LCP candidate was the hero `H1`, `1552ms`.
- Desktop `1440px`: LCP candidate was a hero image, `1628ms`.

Hero image handling evidence:

- `sections/sp-hero.liquid` sets high priority when `section.settings.prioritize_lcp` is enabled or `section.index == 1`.
- `snippets/sp-hero-media.liquid` passes `loading`, `fetchpriority`, responsive `widths`, `sizes`, and image classes through the image tag.
- Browser sweep saw the main hero product image with `loading="eager"`, `fetchpriority="high"`, `width="1600"`, `height="1067"`, and responsive Shopify CDN URLs.

Conclusion: the concern that the homepage hero/LCP image lacks priority or dimensions was **not reproduced**.

### Product Page

Status: **PASS WITH OBSERVATIONS**.

Browser sweep evidence:

- Mobile `390px`: LCP candidate was product media `IMG`, `2180ms`.
- Mobile `430px`: LCP candidate was product media `IMG`, `1692ms`.
- Desktop `1280px`: LCP candidate was product media `IMG`, `1676ms`.
- Desktop `1440px`: LCP candidate was product media `IMG`, `1664ms`.

Static evidence:

- `snippets/product-media-gallery.liquid` passes `lazy_load: false` for the selected featured media.
- `snippets/product-thumbnail.liquid` only assigns `loading="lazy"` unless `lazy_load == false`.
- Product media image tags include responsive `sizes` and broad `widths`.

Conclusion: product media LCP handling is structurally reasonable. Product mobile Lighthouse remains weak because page-level resource volume is high, especially JS.

## CSS Findings

### Major: CSS request and unused CSS volume are above premium expectations

Severity: **Major**.

Routes affected: homepage, product, cart, search, collection.

Evidence:

- Browser sweep observed `43` stylesheet responses on the homepage mobile `390px` check.
- Homepage mobile resource timing reported `45` link-initiated resources and about `556870` encoded bytes.
- Lighthouse unused CSS estimates included product mobile `221626` bytes, cart mobile `206312` bytes, homepage mobile `190520` bytes, and product desktop `216199` bytes.

Theme-owned loading sources:

- `layout/theme.liquid` loads Dawn base CSS, six global PulseOps CSS assets, cart drawer CSS when drawer cart is enabled, localization CSS when needed, and predictive search CSS when enabled.
- `snippets/sp-supplement-head.liquid` loads eight Supplement/vertical CSS assets.
- Homepage sections then load chapter CSS assets such as `section-sp-hero.css`, `sp-editorial-outcomes.css`, `sp-ingredients-spotlight.css`, `sp-metrics.css`, `sp-quality-standards.css`, and social proof/Future Self CSS.

Recommendation: do not start with broad design-system CSS consolidation. First audit whether Supplement head CSS can be split into critical/global vs route-specific layers and whether repeated Dawn component CSS can be deduplicated safely.

### Minor: duplicate Dawn component CSS appears at runtime

Severity: **Minor**.

Evidence:

- Runtime/performance sweeps observed repeated names such as `component-price.css`, `component-card.css`, `component-list-menu.css`, `quantity-popover.css`, and `component-slider.css`.

Recommendation: defer to a route-specific component deduplication sprint.

## JS Findings

### Major: product route ships high unused JS and repeated product behavior

Severity: **Major**.

Route affected: `/products/daily-vitality-complex?view=supplement`.

Evidence:

- Product mobile Lighthouse score: `47`.
- Product mobile unused JS estimate: `383906` bytes.
- Product desktop unused JS estimate: `383317` bytes.
- Product mobile TBT: `439ms`.
- Browser sweep saw product route response count above `230` responses.

Static sources:

- `sections/main-product.liquid` loads `product-info.js`, `product-form.js`, optional product helpers, zoom/media/gallery scripts, and model scripts when applicable.
- `sections/sp-sticky-atc.liquid` also loads `product-form.js` and `sp-sticky-atc.js` when the sticky bar is enabled.
- `sections/sp-hero.liquid` can also load `product-form.js` when hero CTA is add-to-cart.

Conclusion: product-page performance concerns are **partially reproduced**. The route is functional, but its JS payload is not premium-performance certified.

Recommendation: identify whether `product-form.js` can be emitted once per route or guarded by an idempotent loading strategy. Review whether sticky ATC can reuse already loaded product-form behavior.

### Minor: dual motion systems remain present

Severity: **Minor**.

Evidence:

- `layout/theme.liquid` loads Dawn `animations.js` when `settings.animations_reveal_on_scroll` is enabled.
- `layout/theme.liquid` also loads `sp-motion.js` unless `settings.sp_motion_style == 'disabled'`.
- `assets/sp-motion.js` uses IntersectionObserver and respects reduced motion.

Conclusion: no JS exception or blocking script defect was found, but dual motion systems are a performance risk.

Recommendation: in a future performance sprint, decide whether Dawn scroll-trigger animations can be disabled for Supplement templates while preserving merchant expectations.

## Network Findings

Status: **PASS WITH OBSERVATIONS**.

Browser sweep:

- 20 route/viewport combinations completed.
- No horizontal overflow detected.
- No theme-owned CSS/JS/image/font 404s confirmed.
- Shopify service noise was present in local preview and treated as non-theme-owned.

Representative response counts:

| Route / viewport | Responses | Response bytes |
|---|---:|---:|
| Home mobile 390 | 124 | 676894 |
| Product mobile 390 | 238 | 644821 |
| Cart mobile 390 | 204 | 539385 |
| Search mobile 390 | 204 | 442245 |
| Collection mobile 390 | 218 | 443245 |
| Home desktop 1440 | 222 | 676894 |
| Product desktop 1440 | 247 | 644821 |
| Cart desktop 1440 | 203 | 539385 |
| Search desktop 1440 | 204 | 442245 |
| Collection desktop 1440 | 220 | 443245 |

Observation: response byte counts are underreported for some CDN resources in local preview, so Lighthouse unused-byte estimates and resource timing are more useful than response headers alone. Request count is high enough to warrant remediation.

## Image / Media Findings

Status: **PASS WITH OBSERVATIONS**.

Positive findings:

- Homepage hero image priority and dimensions are correct.
- Lower-page homepage images observed in the hero checks generally used lazy loading.
- Product gallery selected media is not forced lazy.
- Sticky ATC product image is small, lazy, and fixed at `44x44`.
- No broken images were found in the runtime sweep.

Observations:

- Product gallery responsive image candidates are broad up to `1946w`, which is standard Dawn behavior but may be heavier than needed for a focused single-product PDP.
- Search/collection card images used standard Dawn card behavior and did not activate Supplement global classes because those utility routes are not registered as Supplement templates.

Recommendation: do not change image art direction. If product page remains weak after CSS/JS work, evaluate gallery candidate widths and zoom/media settings.

## Shopify Theme Store Risk

Risk level: **Medium**.

Risks:

- Mobile Lighthouse scores are below premium-performance expectations.
- Product route has high unused JS.
- Homepage and product route have high unused CSS.
- Request counts are high for a premium single-product theme.
- Shopify CLI local preview adds noise, so final certification should be repeated in a more production-like preview environment.

Non-risks:

- Theme Check returned `0` errors.
- No theme-owned production asset 404s were found.
- No missing LCP image dimensions were found on the Supplement hero.
- No blocking synchronous theme-owned script was found in the main layout loading path; theme scripts are generally `defer`.

## Critical Issues

None found.

## Major Issues

### 1. Mobile Lighthouse scores are not premium-certified

Severity: **Major**.

Evidence:

- Mobile Lighthouse scores ranged from `47` to `66`.
- Product mobile scored `47`, with `11905ms` LCP and `439ms` TBT.
- Homepage mobile scored `54`, with `8645ms` LCP and `0.118` CLS.

Affected files:

- `layout/theme.liquid`
- `snippets/sp-supplement-head.liquid`
- `sections/main-product.liquid`
- `sections/sp-sticky-atc.liquid`
- `sections/sp-hero.liquid`
- route sections that emit component CSS/JS

Recommended remediation: run a focused performance remediation sprint targeting CSS/JS request count and product route JS duplication.

### 2. CSS and JS payload are high for premium single-product positioning

Severity: **Major**.

Evidence:

- Product mobile unused JS: `383906` bytes.
- Product desktop unused JS: `383317` bytes.
- Product mobile unused CSS: `221626` bytes.
- Homepage mobile unused CSS: `190520` bytes.
- Cart mobile unused CSS: `206312` bytes.

Affected files:

- `layout/theme.liquid`
- `snippets/sp-supplement-head.liquid`
- `sections/main-product.liquid`
- `sections/sp-sticky-atc.liquid`
- `snippets/cart-drawer.liquid`
- `sections/main-cart-items.liquid`
- `sections/main-search.liquid`
- `sections/main-collection-product-grid.liquid`

Recommended remediation: start with deduplicating repeated Dawn component/script loads and route-scoping product/cart/search assets. Do not begin with broad PulseOps design-system CSS consolidation.

## Minor Observations

### 1. Lighthouse had Windows temp-directory cleanup warnings

Severity: **Minor / environment**.

Evidence: some Lighthouse runs emitted `EPERM, Permission denied` cleanup errors for temporary `lighthouse.*` directories. JSON reports were still generated and parsed for all route/device combinations.

### 2. Shopify CLI local preview adds non-theme service noise

Severity: **Minor / environment**.

Evidence: Shopify hot-reload, web pixel, analytics, and local service behavior appeared during preview checks and were separated from theme-owned failures.

### 3. Cart drawer and sticky ATC impact is acceptable but measurable

Severity: **Minor**.

Evidence:

- Sticky ATC became visible without added CLS in the targeted probe.
- Cart drawer opened after add-to-cart in about `1643ms` in local preview.
- Cart drawer active state and inert state were correct after open.

### 4. Search and collection routes are lighter but not Supplement-activated

Severity: **Minor**.

Evidence:

- Search desktop Lighthouse: `96`.
- Collection desktop Lighthouse: `92`.
- Search mobile Lighthouse: `66`.
- Collection mobile Lighthouse: `58`.
- Runtime certification already confirmed search/collection with `?view=supplement` do not receive global `sp-supplement` classes.

## Recommended Remediation Plan

1. Product route JS and duplicate script audit.
   - Confirm exactly how many times `product-form.js`, product media scripts, quick-add scripts, and cart scripts load on the Supplement PDP.
   - Remove or gate duplicate `product-form.js` emissions where safe.
   - Measure product mobile Lighthouse before and after.

2. CSS request count audit.
   - Inventory global PulseOps CSS, Supplement head CSS, and section CSS ownership.
   - Identify route-specific CSS currently loaded globally.
   - Deduplicate repeated Dawn component CSS before touching frozen design-system layers.

3. Product media feature audit.
   - Confirm whether zoom, modal, model, gallery, and thumbnail scripts are all needed for the Supplement PDP.
   - Defer any feature removal unless it is merchant-safe and measurable.

4. Repeat Lighthouse on a production-like preview.
   - Use a password-unlocked preview or published preview if available.
   - Keep the canonical theme ID documented in the report.

## What Not To Fix Yet

- Do not redesign the homepage or product page for performance.
- Do not change image art direction, crop, copy, typography, spacing, section order, or merchant settings.
- Do not merge all PulseOps CSS into one file without cascade proof.
- Do not remove the cart drawer, sticky ATC, product gallery, search, or motion systems without a focused implementation sprint.
- Do not treat Shopify CLI web pixel, hot-reload, or temp-directory cleanup noise as theme-owned defects.
- Do not optimize search/collection Supplement branding as part of this performance sprint; it is a routing/architecture scope decision.

## Validation Results

Commands and results:

- `git status --short`
  - Existing unrelated dirty files remained:
    - `assets/sp-commerce-premium.css`
    - `assets/sp-editorial-differentiation.css`
    - `assets/sp-editorial-outcomes.css`
    - `assets/sp-editorial-system.css`
    - `assets/sp-ingredients-spotlight.css`
    - `assets/sp-quality-standards.css`
    - `assets/sp-social-proof-stage.css`
    - `assets/sp-supplement-hero.css`
- `git diff --check`
  - Passed.
  - Reported line-ending warnings only.
- `shopify theme check --fail-level error --output json`
  - Passed with `0` errors.
  - Existing warning baseline remains.
- Playwright browser performance sweep
  - 20 route/viewport checks completed.
  - No theme-owned production asset failures confirmed.
  - No horizontal overflow confirmed.
  - No broken image failure confirmed.
- Lighthouse `13.4.0`
  - Mobile and desktop performance audits completed for all five primary routes.
  - Windows cleanup warnings appeared, but JSON summaries were generated and parsed.
- Static loading-pattern search
  - Confirmed CSS/JS loading sources in `layout/theme.liquid`, `snippets/sp-supplement-head.liquid`, and route sections.
  - Confirmed eager/high-priority search did not reveal Supplement homepage lower-page misuse; matches were outside the primary Supplement pages (`sections/main-article.liquid`, `templates/gift_card.liquid`).

Package script note:

- `package.json` only defines the placeholder `test` script, which exits with `Error: no test specified`; no project test suite was available.

## Release Recommendation

Recommendation: **Proceed to focused performance remediation before premium performance certification**.

PulseOps Supplement passes VI.5C with observations and no critical blocker. It is not yet premium-performance certified because mobile Lighthouse scores and product-page unused JS/CSS are below the standard implied by premium-theme positioning.

Recommended next sprint:

- VI.5D Performance Remediation, focused only on product route JS duplication, CSS/request count, and measurable Lighthouse improvements.

## Recommended Commit Message

`Performance certification`

## Recommended Tag

`pulseops-performance-certification-v1`
