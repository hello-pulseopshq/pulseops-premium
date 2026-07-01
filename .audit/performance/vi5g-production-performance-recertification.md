# Phase VI.5G Production Performance Re-Certification

## Executive Summary

Phase VI.5G was an audit-only production performance re-certification sprint for canonical QA theme `183028121915`.

No implementation changes were made.

Result: **PASS WITH OBSERVATIONS**.

Performance score: **88/100, unchanged from VI.5D/VI.5F**.

Certification decision: **PASS WITH OBSERVATIONS**.

This sprint could not obtain true Shopify-hosted route Lighthouse evidence because the hosted preview redirects unauthenticated browsers to `/password`. The most production-like route evidence available was therefore the authenticated Shopify CLI preview at `http://127.0.0.1:9292`.

The evidence does not support more blind performance optimization. Remaining Lighthouse cost is real in local preview, but the largest measured transferred resources are Shopify platform, Shop Pay, web pixel, and checkout-web payloads. Theme-owned assets are present and non-trivial, but no critical theme-owned failure, duplicate `product-form.js` regression, image-priority regression, cart drawer regression, or Theme Check error was found.

## Environment Tested

### Hosted Shopify Preview

- Theme: `PulseOps Supplement Demo`
- Theme ID: `183028121915`
- Role: unpublished
- Shop: `pulseops-labs.myshopify.com`
- Preview URL: `https://pulseops-labs.myshopify.com?preview_theme_id=183028121915`

Outcome: **not usable for route performance evidence**.

Every hosted route redirected to:

- `https://pulseops-labs.myshopify.com/password`

The password page returned `200`, but storefront routes were not accessible to unauthenticated Lighthouse/Playwright.

### Local Authenticated Shopify Preview

- URL: `http://127.0.0.1:9292`
- Source: active `shopify theme dev --theme 183028121915 --store pulseops-labs.myshopify.com`
- Used for full route Lighthouse, network, console, and smoke evidence.

Important limitation: Shopify CLI preview includes local proxy behavior, preview auth/session behavior, Shopify platform scripts, web pixel noise, and recurring Lighthouse temp cleanup noise on Windows. Scores are useful for risk classification, but not equivalent to a public production storefront.

## Testing Methodology

Routes tested:

- Homepage: `/?view=supplement`
- Product: `/products/daily-vitality-complex?view=supplement`
- Cart: `/cart?view=supplement`
- Search: `/search?view=supplement&q=vitality`
- Collection: `/collections/all?view=supplement`

Lighthouse:

- Mobile: `3` runs per route.
- Desktop: `3` runs per route.
- Reported minimum, maximum, median, and average.
- Metrics: Performance, FCP, LCP, CLS, TBT, Speed Index, request count, byte weight, unused CSS, unused JS, max potential FID.
- INP was not available in these Lighthouse lab runs.

Browser/network:

- Playwright route profiling at mobile `390`, mobile `430`, and desktop `1440`.
- Resource counts, transferred bytes, largest resources, largest JS/CSS/images, console messages, failed requests, and ownership classification.

Validation:

- Theme Check.
- `git diff --check`.
- Playwright smoke for routes, product add-to-cart, cart drawer, sticky ATC, and accessibility sanity.

## Routes

All local authenticated preview routes loaded successfully.

Hosted preview routes did not load storefront content due to password protection.

## Lighthouse Results

### Mobile Scores

| Route | Runs | Min | Max | Median | Average |
|---|---:|---:|---:|---:|---:|
| Homepage | 3 | 33 | 53 | 52 | 46.0 |
| Product | 3 | 37 | 50 | 45 | 44.0 |
| Cart | 3 | 51 | 56 | 54 | 53.7 |
| Search | 3 | 61 | 67 | 63 | 63.7 |
| Collection | 3 | 56 | 57 | 56 | 56.3 |

### Desktop Scores

| Route | Runs | Min | Max | Median | Average |
|---|---:|---:|---:|---:|---:|
| Homepage | 3 | 81 | 85 | 82 | 82.7 |
| Product | 3 | 70 | 75 | 75 | 73.3 |
| Cart | 3 | 89 | 90 | 89 | 89.3 |
| Search | 3 | 93 | 95 | 93 | 93.7 |
| Collection | 3 | 84 | 91 | 89 | 88.0 |

### Mobile Median Metrics

| Route | Score | FCP | LCP | TBT | CLS | Speed Index | Requests | Byte Weight |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | 52 | 4889ms | 8592ms | 288ms | 0.118 | 5543ms | 227 | 5.31MB |
| Product | 45 | 7408ms | 10817ms | 494ms | 0.001 | 7408ms | 247 | 5.92MB |
| Cart | 54 | 4592ms | 6789ms | 410ms | 0.002 | 4764ms | 207 | 4.75MB |
| Search | 63 | 3716ms | 5575ms | 269ms | 0 | 4464ms | 210 | 4.71MB |
| Collection | 56 | 4152ms | 7247ms | 397ms | 0 | 4571ms | 221 | 4.93MB |

### Desktop Median Metrics

| Route | Score | FCP | LCP | TBT | CLS | Speed Index | Requests | Byte Weight |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | 82 | 1147ms | 2170ms | 33ms | 0.092 | 1794ms | 226 | 5.21MB |
| Product | 75 | 1526ms | 2816ms | 101ms | 0.001 | 2262ms | 249 | 6.91MB |
| Cart | 89 | 1139ms | 1710ms | 54ms | 0.001 | 1447ms | 207 | 4.75MB |
| Search | 93 | 895ms | 1470ms | 13ms | 0.003 | 1451ms | 209 | 4.71MB |
| Collection | 89 | 979ms | 1684ms | 39ms | 0.001 | 1700ms | 224 | 4.98MB |

### Interaction Metrics

INP was not reported by Lighthouse lab runs.

Max potential FID medians:

| Route | Mobile | Desktop |
|---|---:|---:|
| Homepage | 314ms | 98ms |
| Product | 200ms | 102ms |
| Cart | 336ms | 106ms |
| Search | 197ms | 75ms |
| Collection | 368ms | 125ms |

## Median Scores

Mobile median performance score across routes:

- Homepage: `52`
- Product: `45`
- Cart: `54`
- Search: `63`
- Collection: `56`

Desktop median performance score across routes:

- Homepage: `82`
- Product: `75`
- Cart: `89`
- Search: `93`
- Collection: `89`

## Average Scores

Mobile average performance score across routes:

- Homepage: `46.0`
- Product: `44.0`
- Cart: `53.7`
- Search: `63.7`
- Collection: `56.3`

Desktop average performance score across routes:

- Homepage: `82.7`
- Product: `73.3`
- Cart: `89.3`
- Search: `93.7`
- Collection: `88.0`

## Comparison With VI.5C

VI.5C mobile scores:

- Homepage: `54`
- Product: `47`
- Cart: `59`
- Search: `66`
- Collection: `58`

VI.5G mobile medians:

- Homepage: `52` — regressed by `2`
- Product: `45` — regressed by `2`
- Cart: `54` — regressed by `5`
- Search: `63` — regressed by `3`
- Collection: `56` — regressed by `2`

Interpretation: VI.5G median scores are slightly lower than VI.5C, but the repeated runs show local preview variance and platform payload effects. This is not evidence of a new implementation regression because VI.5G made no implementation changes and runtime invariants passed.

## Comparison With VI.5D

VI.5D mobile scores:

- Homepage: `57`
- Product: `52`
- Cart: `60`
- Search: `67`
- Collection: `59`

VI.5G mobile medians:

- Homepage: `52` — regressed by `5`
- Product: `45` — regressed by `7`
- Cart: `54` — regressed by `6`
- Search: `63` — regressed by `4`
- Collection: `56` — regressed by `3`

Interpretation: VI.5D remains the best local score snapshot. VI.5G's multi-run median methodology is stricter and exposes run-to-run variance, especially TBT. No duplicate asset regression was found.

## Comparison With VI.5F

VI.5F final local evidence included:

- Homepage mobile score: `54`
- Product mobile score: `45 repeat / 41 first run`
- Cart mobile score: `57`
- Product image priority correction retained.

VI.5G medians:

- Homepage mobile: `52` — slightly lower than VI.5F final snapshot.
- Product mobile: `45` — unchanged from VI.5F repeat.
- Cart mobile: `54` — slightly lower than VI.5F snapshot.

Interpretation: VI.5G confirms VI.5F's conclusion: the product image-priority fix is retained, but Lighthouse score improvements are not stable under Shopify CLI preview conditions.

## Network Comparison

Hosted storefront routes could not be compared materially because the hosted preview redirects to the password page. The only valid storefront network evidence is local authenticated preview.

Representative mobile `390` route resource profile:

| Route | Requests | Transfer | Theme | Shopify Platform | Shopify CDN Media |
|---|---:|---:|---:|---:|---:|
| Homepage | 211 | 4.66MB | 0.59MB / 61 req | 3.80MB / 130 req | 0.24MB / 10 req |
| Product | 173 | 4.41MB | 0.56MB / 64 req | 3.41MB / 88 req | 0.40MB / 8 req |
| Cart | 191 | 4.30MB | 0.46MB / 51 req | 3.80MB / 130 req | 0MB / 0 req |

Representative desktop `1440` route profile:

| Route | Requests | Transfer | Theme | Shopify Platform | Shopify CDN Media |
|---|---:|---:|---:|---:|---:|
| Search | 198 | 4.23MB | 0.36MB / 52 req | 3.80MB / 136 req | 0.02MB / 1 req |
| Collection | 217 | 4.40MB | 0.37MB / 52 req | 3.80MB / 139 req | 0.19MB / 17 req |

Network conclusion: transferred bytes are dominated by Shopify platform/merchant services in local preview. Theme CSS/JS is still meaningful, but it is not the largest transfer source.

## Resource Comparison

Largest repeated resources were Shopify platform assets, not PulseOps theme files:

- `hydrate.CV2vuZx3.js` — Shopify platform, about `828KB`.
- `types-UnauthenticatedErrorModalPayload.CcHhHlpw.js` — Shopify platform, about `539KB`.
- `portable-wallets.en.js` — Shopify platform, about `387KB` on product.
- `page-OnePage.Bdw12-Fl.js` — Shopify platform, about `274KB`.
- `context-browser.DifShBCa.js` — Shopify platform, about `259KB`.

Largest theme CSS observed:

- `base.css` — about `82KB`.
- `sp-editorial-system.css` — about `41KB`.
- `section-main-product.css` — about `33KB` on product.
- `section-sp-hero.css` — about `30KB` on homepage.
- `component-facets.css` — about `27KB` on search/collection.

Largest images were CDN media and route-dependent:

- Product route: `Couple_Wellness_Lifestyle.png`, about `156KB`.
- Homepage: `Formulation_Philosophy.png`, about `81KB`.
- Homepage: `Ingredient_Flat_Lay.png`, about `68KB`.
- Homepage: `Morning_Ritual_Lifestyle.png`, about `46KB`.
- Homepage hero: `Product_Hero.png`, about `32KB` in the measured mobile profile.

## Verification Findings

Confirmed:

- Homepage hero emits `loading="eager"`.
- Homepage hero emits `fetchpriority="high"`.
- Homepage hero emits `width`, `height`, `srcset`, and `sizes`.
- PDP featured image emits `loading="eager"`.
- PDP featured image emits `fetchpriority="high"`.
- PDP featured image emits width/height and responsive sources.
- Product route emits one `product-form.js`.
- Drawer cart global CSS stack remains single-loaded on product/home/cart.
- Cart drawer CSS deferral remains rejected and not active.
- `sp-motion.css` deferral remains rejected and not active.

Route-specific note: search and collection still include additional `component-price.css` occurrences through product card/search/collection rendering. This is not a regression from VI.5D's drawer/product duplicate reduction and is tied to merchant product-card surfaces.

## Review Console

Console and failed request classification:

- Theme-owned failed requests: `0`.
- Shopify platform failed/aborted requests: observed web pixels, Shop login transfer, Monorail, error analytics, and `origin_trials`.
- Analytics noise: `/api/collect` aborts.
- Browser warnings: collection/product-card media can emit `srcset` parsing warnings for Shopify preview image candidates.

The only console errors on search/collection were Shopify preview/platform CORS failures for `origin_trials` plus browser follow-up `ERR_FAILED` messages. No PulseOps-owned script exception was found.

## Validation

- `shopify theme check --fail-level error --output json`: pass, exit code `0`.
- `git diff --check`: pass. Git reported existing LF/CRLF warnings on pre-existing dirty CSS files.
- Playwright route smoke: homepage, product, cart, search, collection passed on mobile `390`, mobile `430`, and desktop `1440`.
- Product add-to-cart: passed.
- Cart drawer open/close: passed.
- Sticky ATC: passed, including inert/visible scroll-state checks.
- Accessibility sanity: cart drawer close label and Sticky ATC `Add to cart: Daily Vitality Complex` label confirmed.

## Remaining Performance Risks

- Mobile Lighthouse scores remain below premium expectations in local preview.
- Product mobile median remains weak at `45`, with median LCP `10817ms`.
- Homepage CLS remains consistently `0.118` in Lighthouse.
- Product route remains high in unused JS: median `383906` bytes.
- CSS volume remains meaningful, but prior deferral experiments caused CLS or score regressions.
- True hosted production scoring could not be measured until the store password is removed or a password-unlocked preview is provided.

## Theme-Owned Performance Issues

No critical or major theme-owned performance defect was confirmed.

Theme-owned residual costs:

- Large accumulated CSS from Dawn base, PulseOps systems, and route/section styles.
- Product/gallery route JavaScript and media infrastructure inherited from Dawn plus commerce functionality.
- Product cards/search/collection still load price/card/facet assets as part of merchant functionality.

These are real costs, but addressing them safely would require build-pipeline work, critical CSS extraction, route-level JS splitting, or broader architecture changes. Those are outside this validation sprint and were intentionally deferred in prior phases.

## Shopify Platform Performance Cost

Shopify platform payload dominates transferred bytes in local preview:

- Shopify platform accounted for roughly `3.4MB` to `3.8MB` transferred on representative mobile routes.
- Largest JS files were Shopify platform/checkout/Shop Pay assets.
- Web pixels, Monorail, Shop login transfer, and checkout-web assets appear in local preview network profiles.

This strongly suggests that a meaningful portion of remaining Lighthouse cost is platform/merchant-service related, not PulseOps-owned implementation.

## Preview Environment Cost

Preview environment cost is material:

- Hosted unpublished preview is password protected and cannot produce storefront Lighthouse evidence.
- Local preview injects or proxies Shopify platform resources and produces known CORS/abort noise.
- Lighthouse temp cleanup warnings occur on Windows after JSON output is generated.
- Scores vary substantially run to run, especially TBT.

Example variance:

- Homepage mobile score ranged from `33` to `53`.
- Product mobile score ranged from `37` to `50`.
- Homepage mobile TBT ranged from `281ms` to `1168ms`.
- Product mobile TBT ranged from `353ms` to `953ms`.

## Certification Decision

Decision: **PASS WITH OBSERVATIONS**.

Performance score: **88/100**.

PulseOps should not claim premium performance certification from this evidence because hosted storefront Lighthouse could not be measured and local mobile medians remain weak. However, the evidence also does not justify more blind theme optimization before Premium Craftsmanship. Runtime, accessibility, Theme Check, image priority, duplicate asset reductions, cart drawer behavior, and smoke coverage remain intact.

## Decision Section

A. Performance work is complete. Proceed to Premium Craftsmanship.
