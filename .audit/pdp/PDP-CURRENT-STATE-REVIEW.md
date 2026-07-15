# PulseOps Supplement PDP — Current-State Review

**Audit date:** 2026-07-15
**Repository baseline:** `main` at `ca99ef90ad0bf4c6b4f990c6bfe08ef2643a7091`; clean; `0 ahead / 0 behind origin/main`
**Homepage benchmark:** `pulseops-homepage-v1` peeled to `49f993702f1edb61a0c7bb9e25b6f04cf24d0e1b`
**Canonical PDP:** `/products/daily-vitality-complex?view=supplement`
**Audit mode:** runtime at 1440, 768, and 390 CSS pixels plus confirmed active repository path

## 1. Executive assessment

The PDP is commerce-functional and visibly branded, but it is not yet a convincing premium-theme showcase at the level established by the frozen Supplement Homepage. A shopper can understand the product, change quantity, use accelerated checkout, add to cart successfully, review reassurance, and reach FAQs. A merchant can see substantial section/schema infrastructure and competent Dawn-derived commerce coverage.

One **Critical premium-theme demonstration defect** was confirmed in the desktop/tablet media treatment. The active stacked twelve-media sequence combines repetitive bottle framing, extremely low-contrast media, excessive document height, and no useful desktop media-navigation hierarchy. It produces thousands of pixels of apparent blank space before the trust and narrative sections; runtime page heights were 8,415px at desktop and 7,771px at tablet versus 6,090px on mobile. This fundamentally disqualifies the current PDP as a premium-theme demonstration even though the media files exist and core checkout remains available. No Critical commerce blocker was confirmed.

The buy box is usable but reads as lightly restyled Dawn rather than a designed premium purchase system. Essential supplement facts—60 capsules, dosage, supply duration, delivery, guarantee—are fragmented between bottle art, description, trust strip, and later copy. Subscription/selling-plan support is not present in the active product form, and the one-variant demo cannot demonstrate variant architecture, sold-out allocation, or subscription states. Trust content is abundant but often asserted as demo copy without linked evidence, app-backed reviews, documents, or traceability.

**Stage 1 verdict:** not strong enough yet to be the primary PDP sales proof for a premium single-product Shopify theme. One Critical premium-theme demonstration defect was confirmed; no Critical commerce blocker was confirmed. Core commerce is sound enough to redesign rather than rebuild, but the active media composition, purchase hierarchy, data portability, accessibility metadata, and demo-state coverage require a focused PDP redesign/implementation phase.

## 2. Scores

| Dimension | Score | Evidence-based justification |
|---|---:|---|
| **Overall PDP quality** | **5.6/10** | Functional purchase flow and coherent lower-page sections are outweighed by the broken-looking desktop/tablet gallery rhythm and generic buy box. |
| Shopper conversion readiness | 6.2/10 | Title, price, quantity, ATC, Buy it now, trust, proof, reviews, FAQ, and sticky support exist; essential value facts and purchase options are incomplete. |
| Merchant purchase confidence | 5.1/10 | Strong schema breadth and vertical routing, but the runtime presentation does not consistently demonstrate premium finish or broad product portability. |
| Commerce completeness | 6.4/10 | ATC succeeded and cart drawer updated; dynamic checkout and status/error containers exist. No active subscription selector and only one available default variant is demonstrated. |
| Premium perception | 4.8/10 | Product image and serif headings carry brand intent, but Dawn residue, repetitive cards, weak media sequence, and large dead zones fall below the homepage benchmark. |
| Responsive quality | 6.0/10 | Mobile reflows into a comprehensible single column; tablet/desktop suffer gallery-driven page elongation, and mobile cards become dense swipe strips. |
| Merchant configurability | 6.8/10 | Nine ordered OS 2.0 sections, reorderable blocks, optional-content guards, and broad section schemas; supplement copy and trust claims dominate the preset, while purchase-plan support is absent. |
| Accessibility readiness | 5.8/10 | H1, labeled quantity, focusable gallery/modal controls, alerts/live regions, FAQ ARIA, and keyboard toggling exist; all 15 product-media images have empty alt text and some gallery controls lack accessible labels. |
| Architecture health | 6.7/10 | Ownership is traceable and responsibilities are separated, but the page combines Dawn product primitives, global premium overrides, supplement overrides, section-inline CSS, and a parallel sticky form, increasing cascade/state risk. |

## 3. Merchant purchase-confidence assessment

The repository shows more capability than the rendered page communicates. A technical merchant or reviewer would find a flexible template, reusable sections, safe empty guards, native product forms, responsive images, media-modal/model hooks, dynamic checkout, pickup-availability support, and a separate sticky purchase system. A visual merchant, however, sees the output first: at desktop and tablet the gallery looks partially unloaded and dominates the page length; the purchase panel is small and generic; proof and review sections look like configured marketing cards rather than integrated premium commerce features.

Confidence is therefore **moderate-low**. The PDP indicates a viable platform foundation, but not yet the finish that justifies premium-theme pricing. The frozen homepage feels authored; the PDP feels assembled from Dawn commerce plus PulseOps content sections.

## 4. Shopper conversion assessment

The shortest purchase path works. The shopper sees product, title, sale price, quantity, Add to cart, Buy it now, description, benefits, guarantee, shipping, scientific claims, reviews, FAQ, and a later CTA. In an isolated session, quantity changed from 1 to 2; Add to cart opened the cart drawer; the cart bubble reported one item; no visible product-form error appeared. **Buy it now is the visually dominant action** because its solid black fill carries materially more authority than the outlined Add to cart control. The bright blue Sale badge also competes for attention outside the restrained PulseOps visual language, while quantity and product metadata remain low-authority. The resulting conversion hierarchy privileges accelerated checkout over the standard cart path without presenting that choice as an authored PulseOps commitment system.

Conversion friction is primarily informational and compositional:

- No explicit supply-duration or price-per-day statement near price.
- Dosage appears in lower copy rather than as decisive metadata at the buy box.
- No active one-time/subscription choice despite supplement-category expectations.
- The desktop/tablet media column postpones downstream reassurance by several screenfuls.
- Claims, review totals, certifications, and customer counts are repeated without inspectable substantiation.
- The final CTA repeats commitment but its empty link falls back to a button-like control rather than clearly connecting to the active product form.

## 5. What already works

- **Core product form:** native `/cart/add` form, loading state, disabled/unavailable logic, error alert, and cart-drawer integration are present; successful ATC was runtime-confirmed.
- **Quantity:** visible and operable at all viewports; runtime increment worked.
- **Accelerated checkout:** `show_dynamic_checkout: true`; “Buy it now” rendered at all viewports. Shop Pay’s external hop timed out in the headless local environment, which is an environment limitation rather than proof of theme failure.
- **Product recognition:** bottle photography, brand wordmark, title, price, sale badge, and short description are above the fold.
- **Responsive mobile order:** gallery precedes information, then trust and narrative sections; the page is more compact than desktop/tablet.
- **Sticky purchase:** separate native product form appears in the middle journey and hides near the footer. Mobile ARIA state matched visual state in the focused test.
- **FAQ interaction:** six button-based controls; first item was open; click changed `aria-expanded` from true to false and panel `aria-hidden` from false to true.
- **Schema breadth:** active sections expose blocks, spacing, surface, alignment, layout, and optional-content settings with empty guards.
- **Media adaptability in code:** native image, video, external video, and model paths are inherited through Dawn media snippets; modal/zoom and model assets are conditionally owned.

## 6–9. Classified findings

The table is the canonical finding register; viewport and audit sections below cross-reference IDs rather than restating findings.

| ID | Material finding | Classification | Priority | Evidence | Viewport | Concrete owner/region | Shopper impact | Merchant/theme-buyer impact | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| F-01 | The stacked twelve-media gallery combines repetitive bottle framing, extremely low-contrast media, excessive document height (~5,000px of faint/blank-looking sequence), and no useful desktop navigation hierarchy. | Design; Merchant-experience; Content/demo; Performance consequence | **Critical** | Runtime + Code | Desktop, Tablet | `.product--stacked`, `media-gallery`, `templates/product.supplement.json` `gallery_layout: stacked`, `constrain_to_viewport: true`; gallery/full-page captures | Downstream proof feels missing or unreachable; page appears broken even though purchase remains possible. | Fundamentally disqualifies the current PDP as a premium-theme demonstration and fails to prove adaptable premium media capability. | Confirmed |
| F-02 | Buy box remains compact and utilitarian: small vendor/metadata, plain low-authority quantity, and long description directly below the actions. | Design | **High** | Runtime + Code | Cross-viewport | `.product__info-wrapper`, `sections/main-product.liquid`, `assets/section-main-product.css`, `assets/sp-commerce-premium.css` | Decisive product information and purchase controls lack authored hierarchy. | Signals “styled Dawn” rather than owned premium commerce. | Confirmed |
| F-02A | Purchase-action hierarchy makes solid black **Buy it now** visually dominant over outlined **Add to cart**; the bright blue Sale badge competes with both and falls outside the PulseOps visual language, while quantity and product metadata have low authority. | Design; Commerce | **High** | Runtime + Code | Cross-viewport | `.product-form__submit.button--secondary`, `.shopify-payment-button`, `.badge.price__badge-sale`, quantity/product metadata in `.product__info-wrapper` | Directs attention to accelerated checkout over the standard cart path without explaining the tradeoff and weakens confident comparison of price, quantity, and purchase choice. | Resembles default Dawn action hierarchy rather than an authored PulseOps commitment system, reducing premium-theme purchase confidence. | Confirmed |
| F-03 | Essential supplement facts are not consolidated at commitment: dosage, 60 capsules/supply duration, price-per-day, delivery timing, and guarantee are split across media/description/trust. | Content/demo; Commerce | **High** | Runtime + Code | Cross-viewport | Main product block order and trust strip | Requires scanning and inference before commitment. | Preset under-demonstrates configurable product-fact architecture. | Confirmed |
| F-04 | Active product form has no selling-plan/subscription selector or allocation handling; cart surfaces can display selling-plan names only after the fact. | Commerce; Merchant-experience | **High** | Code | Cross-viewport | `main-product.liquid`, `buy-buttons.liquid`; selling-plan references only in cart/order owners | No visible one-time vs subscribe comparison or savings. | Important premium single-product capability is missing, not merely undemonstrated. | Confirmed |
| F-05 | Canonical product has only the default variant; picker is absent, so variants, unavailable combinations, and sold-out transitions cannot be judged at runtime. | Content/demo; Merchant-experience | **Medium** | Runtime + Code | Cross-viewport | `variantPickerVisible: false`; conditional `product-variant-picker` | No current shopper friction, but state robustness is unproven. | Demo does not prove portability to multi-variant products. | Confirmed demo limitation; code path unverified |
| F-06 | All 15 main product-media images have empty alt attributes; only the 88px sticky image had “Daily Vitality Complex.” | Accessibility; Content/demo | **High** | Runtime + Code | Cross-viewport | `product-media` output; product media Admin alt data | Product/evidence media is unavailable to screen-reader users. | Demonstrates poor out-of-box content governance even if merchant data owns alt copy. | Confirmed |
| F-07 | Desktop gallery reported three visible buttons with no `aria-label`; mobile’s first slider button was labeled “Slide left.” Modal buttons do have visible accessible text. | Accessibility | **Medium** | Runtime | Desktop, Tablet | `media-gallery` controls and slider buttons | Some gallery navigation purpose may be unclear non-visually. | Weakens accessibility readiness claim. | Confirmed for captured controls |
| F-08 | Trust/proof repeats 30-day guarantee, shipping, review score/count, GMP, testing, and customer counts across multiple sections without links, documents, dates, or app-backed provenance. | Content/demo; Design | **High** | Runtime + Code | Cross-viewport | `sp-trust-icons`, `sp-benefits`, `sp-scientific-proof`, `sp-social-proof`, description | Repetition can reduce credibility rather than increase it. | Looks like hard-coded demo persuasion rather than reusable proof capability. | Confirmed |
| F-09 | Scientific claim “92%” and certification/testing language are editable text blocks, not connected to documents, metafields, citations, or traceability. | Merchant-experience; Content/demo | **High** | Code | Cross-viewport | `sp-scientific-proof` proof blocks/schema | Health-category proof is not inspectable at decision time. | Creates merchant compliance/content-governance risk. | Confirmed architecture; legal sufficiency unverified |
| F-10 | Mobile is the strongest layout, but benefits/proof/reviews use dense cards or horizontal swipe treatments with small copy and partially visible next cards. | Design; Accessibility | **Medium** | Runtime + Code | Mobile | `.sp-benefits__list--swipe`, `.sp-scientific-proof__list--swipe`, `.sp-social-proof__list--swipe` | Reading and comparison become effortful; swipe affordance is implicit. | Feels like a component-library pattern repeated three times. | Confirmed |
| F-11 | Sticky purchase uses a second product form and independent variant/price synchronization JavaScript. | Architecture; Commerce | **Medium** | Runtime + Code | Cross-viewport | `sp-sticky-atc.liquid`, `sp-sticky-atc.js`, shared `product-form.js` | Works for the default variant, but creates potential divergence under complex variants/plans. | Raises maintenance and cross-template regression risk. | Confirmed architecture; complex-state failure unverified |
| F-12 | CTA offer has `button_link: ""`; the visual CTA is not tied to the main form or a configured destination. | Commerce; Merchant-experience | **Medium** | Runtime + Code | Cross-viewport | `sp-cta-offer` settings and blank-link branch | Late-stage commitment action may not advance purchase predictably. | Preset ships an incomplete action configuration. | Confirmed |
| F-13 | Product photography starts strong, but sequence repeats the same bottle/video framing and then fails visually on desktop/tablet; no clear thumbnail hierarchy there. | Design; Content/demo | **High** | Runtime | Desktop, Tablet | `pdp-media-gallery-closeup.png` | Media does not progressively answer packaging, facts, use, scale, or evidence questions. | Does not demonstrate a premium reusable media system. | Confirmed |
| F-14 | Product title is the only visible H1, but cart/header DOM contains empty or utility H2s, and active PDP sections use repeated H2/H3 card grammar. | Accessibility; Design | **Safe to defer** | Runtime + Code | Cross-viewport | Heading snapshot; active section headings | Main outline remains understandable, but landmark heading noise is possible. | Minor implementation polish gap. | Strong inference |
| F-15 | Local runtime showed no page exceptions, but analytics/pixel requests aborted and Shop Pay’s external hop timed out. | Performance | **Safe to defer** | Runtime | Cross-viewport | Console/network evidence | No observed core interaction failure; accelerated payment could not be completed locally. | Should not be misreported as production breakage. | Confirmed local limitation |
| F-16 | Global premium CSS plus supplement head layers plus Dawn component assets and section-inline styles produce several ownership layers for one PDP. | Architecture | **Medium** | Code | Cross-viewport | `layout/theme.liquid`, `sp-supplement-head`, `main-product`, active SP sections | Current rendering works, but cascade changes can cause viewport-specific regressions. | Implementation discipline is less legible than homepage component ownership. | Confirmed |

### Critical gaps

**One Critical premium-theme demonstration defect was confirmed: F-01.** Its desktop/tablet media-composition and demo-content failure fundamentally disqualifies the current PDP as a premium-theme demonstration. **No Critical commerce blocker was confirmed:** core purchase was not blocked, no serious runtime exception occurred, and the default product remained purchasable.

### High-priority gaps

F-02, F-02A, F-03, F-04, F-06, F-08, F-09, and F-13. Together they explain the low premium perception below the Critical gallery defect: the page works, but its commitment hierarchy, subscription commerce, evidence, photography sequence, and accessibility metadata do not meet premium-demo quality.

### Medium-priority gaps

F-05, F-07, F-10, F-11, F-12, and F-16. These affect portability, responsive refinement, state architecture, and late-stage commitment without blocking the current single-variant purchase.

### Safe-to-defer observations

F-14 and F-15. Address after the main media/purchase architecture is corrected, while keeping local third-party request failures distinct from production defects.

## 10. Desktop-specific findings

- Above fold has a credible two-column product recognition moment, but gallery width dominates while the buy box looks underscaled. Solid black Buy it now is visually dominant over outlined Add to cart, and the blue Sale badge competes with both (F-02A).
- The stacked gallery continues far below the purchase panel; most subsequent media are near-white/faint in the full-page capture, forming a severe dead zone (F-01/F-13).
- Sticky purchase appeared after mid-page scrolling, preserving a commitment path once the main form is gone.
- Lower sections become legible again, but card grids and centered headings feel more generic than the frozen homepage’s editorial pacing.
- The final dark CTA gives closure, but does not repair the long media interruption and has no configured link (F-12).

## 11. Tablet-specific findings

- At 768px, the page still uses a two-column product layout: gallery and purchase panel are both compressed rather than purposefully reorganized.
- Page height remained 7,771px because the stacked gallery problem persists.
- Lower four-column content compresses into smaller cards; hierarchy remains technically intact but typography becomes less authoritative.
- Sticky purchase was runtime-visible at the sampled middle scroll.
- Tablet should be treated as its own composition in redesign scope, not a narrow desktop breakpoint.

## 12. Mobile-specific findings

- Mobile is materially more coherent: gallery becomes horizontal, title and purchase controls follow directly, then trust and narrative sections.
- First gallery control had “Slide left”; two visible gallery buttons were detected. Product thumbnails are hidden by template setting, so position/progress carries discovery responsibility.
- Quantity, ATC, and Buy it now occupy obvious full-width paths. ATC success was tested in a 390px isolated session, but solid black Buy it now remains visually dominant over the outlined standard cart action (F-02A).
- Sticky bar was hidden at top/10%, visible at 25%/50%, and hidden at 75%/90% near the footer. This behavior matches its threshold/footer intent.
- Card swipes for benefits, proof, and reviews create repeated interaction grammar and dense type (F-10).
- Footer text is very small in the full-page capture and should be rechecked under browser text zoom during implementation QA.

## 13. Commerce capability audit

| Capability | Status | Evidence / classification |
|---|---|---|
| Add to Cart | **Present and strong technically** | Successful isolated-session add; cart drawer active; cart bubble “1 item”; no form error. |
| Quantity | **Present** | Visible all viewports; increment 1→2 worked. |
| Variant support | **Technically supported, not demonstrated** | Dawn picker and product-info update paths exist; canonical product exposes no picker. |
| Unavailable/sold-out | **Technically supported, not demonstrated** | Disabled input/button and translated states in `buy-buttons`; no representative product state. |
| One-time purchase | **Present by default** | Native product form. It is not explicitly labeled as an option because there is no competing plan. |
| Selling plans/subscriptions | **Missing from active product purchase form** | No selector/allocation rendering in PDP owners. |
| Subscription savings | **Missing** | No active plan UI or comparison. |
| Dynamic checkout | **Present** | “Buy it now” rendered; external Shop Pay hop could not complete locally. |
| Accelerated payment | **Exposed, locally unverified end-to-end** | Shopify payment button output present. |
| Delivery/shipping | **Present as demo copy** | “Ships within 24 hours / 3–5 business days / free shipping”; not calculated or contextual. |
| Returns/guarantee | **Present but repetitive** | Trust strip, benefits, description, FAQ, CTA reassurance. |
| Payment confidence | **Present but generic** | Secure checkout claim + accelerated button; no payment icon treatment at buy box. |
| Inventory messaging | **Technically supported only** | Sold-out logic exists; no low-stock/current inventory message demonstrated. |
| Sticky purchase | **Present** | Runtime visibility confirmed mid-journey; independent form architecture noted in F-11. |
| Form errors/status | **Present** | `role=alert`, hidden error wrapper, loading spinner, shared form handler; failure state not forced. |
| Successful feedback | **Present** | Cart drawer and cart bubble update confirmed. |
| Pickup availability | **Technically supported** | Conditional `pickup-availability` owner; no current store availability shown. |

## 14. Merchant configurability audit

**Strong:** JSON section ordering; reorderable main-product blocks; reusable SP section blocks; alignment, surface, spacing, column, card, and mobile-layout settings; optional-content guards; media-type inheritance; native dynamic-source text setting in caption; theme-editor block attributes; presets.

**Weak:** no subscription architecture; no dedicated near-price product-fact block; proof is free-text rather than structured/linkable evidence; CTA ships with a blank destination; sticky form duplicates purchase state; canonical demo does not exercise variants, inventory, pickup, models, or diverse aspect ratios.

**Demo-specific content:** Daily Vitality title, supplement benefit copy, 92% study, GMP/testing claims, 35k customers, 8.4k reviews, dosage, shipping/guarantee claims.

**Reusable capability:** native product media/form, quantity, variant conditional paths, accelerated checkout, modal/model readiness, SP section schemas, sticky purchase, FAQ, configurable proof/reviews/benefits.

**Platform-level limitations:** external accelerated-payment behavior and pixel telemetry cannot be fully judged through a local development host; app-injected reviews/subscriptions require representative integrations.

**Merchant-configuration weaknesses:** product media alt text is empty; CTA destination blank; evidence has no URLs/documents; current product data lacks representative variants/plans/states.

Cross-vertical portability is mixed. Main-product primitives can serve skincare, coffee, electronics, and other verticals. The lower PDP preset is strongly supplement-specific in claims and chapter naming, while schemas mostly remain generic. Portability depends on merchants replacing substantial content rather than selecting a truly product-agnostic proof/facts model.

## 15. Accessibility audit

**Confirmed strengths:** visible single H1; skip links; semantic native forms; quantity label; FAQ buttons with `aria-expanded`/`aria-controls` behavior; product-form `role=alert`; sticky polite live region; modal media buttons with accessible text; keyboard-focusable header, gallery, form, FAQ, and footer controls; sticky `aria-hidden` tracks visibility.

**Confirmed gaps:** F-06 empty alt text across all main media; F-07 unlabeled desktop gallery controls; dense small card/footer copy; repeated implicit horizontal swipes; utility/empty heading noise. Focus order successfully traversed mobile controls, although the captured 28-tab sample wrapped through FAQ/footer/header/gallery rather than constituting a complete formal screen-reader audit.

**Unverified:** forced form error announcement, unavailable option narration, screen-reader output, Windows high-contrast mode, 200–400% zoom, reduced-motion rendering, modal focus trap, video captions/transcripts, and color contrast measured against WCAG ratios.

## 16. Performance and implementation assessment

The page rendered without JavaScript exceptions. Product imagery uses responsive CDN widths and eager-loads the lead image while later media are lazy. Most images reported valid intrinsic dimensions; some below-viewport mobile media were still `0x0` when captured, consistent with lazy/non-rendered state. The lead experience was stable enough for screenshots, but no formal Web Vitals trace was run.

The active page loads Dawn global assets, product-specific component assets, six main product scripts in relevant conditions, global SP premium CSS, ten supplement head assets, multiple section-local/inline style layers, FAQ JavaScript, and sticky ATC JavaScript. This is understandable but broad. F-01 is a confirmed media-composition and demo-content failure: the stacked twelve-media sequence, repetitive framing, extremely low-contrast media, missing useful desktop navigation hierarchy, and excessive document height are directly evidenced. Its supported performance consequence is the expanded document and the opportunity to decode/render numerous large media; the audit does not claim a confirmed cascade root cause.

Aborted Monorail, pixel, and local analytics requests plus a timed-out Shop Pay hop were recorded in the headless local environment. They did not prevent PDP rendering, FAQ, quantity, sticky behavior, or cart addition, so they are not classified as production theme defects.

## 17. Architecture and ownership map

```text
Product route ?view=supplement
└─ layout/theme.liquid
   ├─ global Dawn + SP premium assets
   ├─ sp-supplement-head → supplement CSS/routing
   └─ templates/product.supplement.json
      ├─ main-product
      │  ├─ product-media-gallery → product-media/thumbnail/modal
      │  ├─ product-variant-picker/options (conditional)
      │  ├─ quantity-input
      │  ├─ buy-buttons → product-form + payment_button + pickup availability
      │  └─ product-info/form/gallery/modal/model JS
      ├─ sp-trust-icons
      ├─ sp-benefits
      ├─ sp-features
      ├─ sp-scientific-proof
      ├─ sp-social-proof
      ├─ sp-faq → sp-faq.css/js
      ├─ sp-cta-offer
      └─ sp-sticky-atc → independent form + sticky CSS/JS
```

## 18. Active files and render path

The complete concise trace is stored in [`active-render-path.md`](../../.investigation-output/pdp-current-state/active-render-path.md). Runtime section IDs confirmed all nine template sections. Key code anchors include:

- `templates/product.supplement.json`: source of ordered sections, blocks, and settings.
- `layout/theme.liquid:274–279,332`: global/SP CSS and supplement head activation.
- `sections/main-product.liquid:12–60,79–86,481–483,718–726`: product assets, layout, snippets, and media scripts.
- `snippets/product-media-gallery.liquid:48–52,181–202`: sticky/stacked/thumbnail behavior.
- `snippets/buy-buttons.liquid:27–101,117–149`: main form, statuses, accelerated checkout, pickup.
- `sections/sp-sticky-atc.liquid:82–291`: sticky form and owner assets.
- `sections/sp-faq.liquid:1,40–113`: FAQ rendering, ARIA controls, asset loading.

## 19. Legacy, dormant, or ambiguous files discovered

- `templates/product.json` and nine other `product.<vertical>.json` files are alternate product presentations, not active here.
- `sections/featured-product.liquid` duplicates many product primitives for a different context and is dormant on this route.
- `sections/sp-quality-standards.liquid` is not active here; `sp-scientific-proof.liquid` owns PDP proof. This differs intentionally from the frozen homepage, where Formulation Philosophy is absent and should remain absent for v1.
- Homepage-specific assets/sections under `sp-hero`, editorial outcomes, ingredients spotlight, community confidence, and related systems are not PDP owners merely because the supplement head loads shared vertical layers.
- The global `sp-commerce-premium.css` is active across templates, so product selectors within it carry cross-template risk even though it is relevant here.

## 20. Risks for redesign and implementation

- Correcting gallery layout can affect native video/model/modal semantics and variant-media selection.
- Changing shared `main-product` markup or global `sp-commerce-premium.css` can regress default and other vertical product templates.
- A new subscription UI must preserve Shopify selling-plan allocation, price updates, cart payload, and sticky-form synchronization.
- Reducing repeated trust content requires separating demo copy from reusable schema capability without removing merchant flexibility.
- The frozen homepage is a quality benchmark, not a source of chapters to copy. Its Formulation Philosophy absence is intentional and must not be reversed.
- Sticky and main forms must share one authoritative state model before complex variants/plans are demonstrated.
- Product media alt remediation partly belongs to product data; the theme should still guide/fallback safely without inventing misleading descriptions.

## 21. Recommended PDP redesign scope

The next phase should solve—not visually prescribe—the following:

1. Establish a reliable, aspect-ratio-tolerant media hierarchy at desktop, tablet, and mobile with no dead zones and complete image/video/model/zoom behavior.
2. Define a purchase-information hierarchy that consolidates decisive product facts, value, availability, delivery, guarantee, quantity, options, and status feedback at commitment.
3. Add merchant-safe selling-plan architecture covering one-time purchase, subscriptions, savings, allocation changes, and sticky synchronization.
4. Create structured, portable proof/trust models that can reference sources/documents and adapt beyond supplements.
5. Remove redundant narrative regions and ensure every section answers a distinct buyer question in recognition → relevance → evaluation → evidence → reassurance → commitment order.
6. Raise typography, spacing, surfaces, and interaction restraint to the frozen homepage benchmark while retaining PDP intent.
7. Demonstrate representative variants, unavailable/sold-out states, plans, media ratios/types, optional content, and empty states.
8. Close accessibility gaps in media alternatives, gallery naming, swipe affordance, text scale, focus/error/state testing, and motion/zoom QA.
9. Clarify CSS/JS ownership boundaries and the authoritative product state so redesign work remains safe across templates.

No visual concept, named direction, mockup, or implementation choice is selected by this scope.

## 22. Evidence index

All evidence is under `.investigation-output/pdp-current-state/`:

- `pdp-desktop-1440-full.png`
- `pdp-tablet-768-full.png`
- `pdp-mobile-390-full.png`
- `pdp-desktop-1440-above-fold.png`
- `pdp-mobile-390-above-fold.png`
- `pdp-purchase-panel-closeup.png`
- `pdp-media-gallery-closeup.png`
- `runtime-evidence.json` — viewport metadata, DOM/heading/form/image inventory, console/network and interaction samples
- `interaction-evidence.json` — FAQ, mobile sticky states, keyboard focus sample, and successful ATC evidence
- `active-render-path.md` — concise ownership trace
- `capture-runtime.cjs`, `interaction-runtime.cjs` — reproducible local capture helpers

## 23. Audit limitations and unverified states

- Canonical product has no visible variant picker and no selling plan, so complex variant, allocation, unavailable-combination, subscription, and plan-price behavior remain unverified.
- Sold-out, low-stock, pickup, volume pricing, quantity rules, gift-card recipient, video playback, 3D interaction, and forced product-form error states were not available from the canonical product.
- Dynamic checkout was rendered but payment was not pursued; Shop Pay’s external hop timed out locally.
- No Admin product/store/theme configuration was changed.
- No order or payment was submitted.
- No formal assistive-technology, contrast instrumentation, Web Vitals laboratory run, or network throttling was performed.
- Runtime review reflects the local Shopify development preview and product/store state on 2026-07-15.

## 24. Final Stage 1 verdict

**Proceed to redesign scoping, but do not treat the current PDP as premium-theme-ready.** One Critical premium-theme demonstration defect was confirmed in the desktop/tablet gallery; no Critical commerce blocker was confirmed. The active implementation has a credible native-commerce foundation and useful merchant schemas, so it does not require wholesale replacement. It does require resolution of Critical F-01 plus the High purchase-action hierarchy, subscription gap, proof credibility, media accessibility, photography sequence, and cross-viewport composition before a merchant is likely to see PulseOps as worth purchasing on the strength of its PDP.

The frozen Supplement Homepage remains materially ahead in editorial craft, typography, photography discipline, restraint, responsive composition, and premium perception. The PDP should meet that quality bar through PDP-specific problem solving—not by restoring Formulation Philosophy or copying homepage chapters.
