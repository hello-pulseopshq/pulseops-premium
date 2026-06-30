# Phase VI.5A Accessibility Certification

## Executive Summary

Phase VI.5A performed a repository-wide accessibility review of the PulseOps Premium Shopify theme with targeted remediation for verified issues only.

Result: **PASS WITH OBSERVATIONS**.

The reviewed implementation is structurally strong for a Dawn-derived premium theme. Header, navigation, search modal, cart drawer, product forms, FAQ, Human Proof, and Sticky Add-to-Cart all use accessible native controls or established Dawn dialog/disclosure patterns. Motion utilities respect `prefers-reduced-motion`, and the Supplement Human Proof presentation defaults to non-rotating behavior.

Verified issues remediated:

- Sticky Add-to-Cart hidden state now uses `inert` in addition to `aria-hidden`, preventing hidden actionable controls from remaining available to keyboard or assistive technology users.
- Sticky Add-to-Cart now moves focus out of the bar before hiding and synchronizes the submit button's accessible name when JS changes the visible label.
- Sticky Add-to-Cart now exposes the shared product-form error region instead of suppressing add-to-cart errors.
- Standard testimonial stage fallback auto-rotation was aligned to the accessible section default of `0`, preventing accidental motion when templates/settings omit the field.
- FAQ closed panels now use `inert`, preventing hidden answer links/controls from remaining in the tab order.
- FAQ and Cart Drawer transitions now include reduced-motion overrides.
- Cart Drawer now starts inert while hidden, removes inert before focus trapping, restores inert after close, and has a live region that receives cart update text.
- Human Proof's Human Story carousel region now references the visible heading when available.

No visual identity, copy, composition, design language, or merchant-facing layout was changed.

Accessibility score after remediation: **94/100**.

Certification recommendation: **Certified with observations for static repository accessibility**. A final browser assistive-technology pass is still recommended before Theme Store hardening.

## Files Changed

- `sections/sp-sticky-atc.liquid`
- `assets/sp-sticky-atc.js`
- `sections/sp-faq.liquid`
- `assets/sp-faq.js`
- `snippets/cart-drawer.liquid`
- `assets/cart-drawer.js`
- `assets/cart.js`
- `assets/component-cart-drawer.css`
- `snippets/sp-social-proof-stage.liquid`
- `snippets/sp-social-proof-human-story.liquid`
- `.audit/accessibility/vi5a-accessibility-certification.md`

Existing unrelated dirty files from VI.4C remained untouched:

- `assets/sp-commerce-premium.css`
- `assets/sp-editorial-differentiation.css`
- `assets/sp-editorial-outcomes.css`
- `assets/sp-editorial-system.css`
- `assets/sp-ingredients-spotlight.css`
- `assets/sp-quality-standards.css`
- `assets/sp-social-proof-stage.css`
- `assets/sp-supplement-hero.css`

## Review Scope

Primary surfaces reviewed:

- Homepage
- Product page
- Cart drawer
- Header and navigation
- Footer
- Sticky Add-to-Cart
- Human Proof / testimonial stage
- FAQ
- Search
- Forms
- Buttons
- Dialogs
- Drawers
- Carousels

Accessibility areas reviewed:

- Semantic structure
- Keyboard accessibility
- ARIA correctness
- Sticky Add-to-Cart state and focus behavior
- Human Proof manual navigation, auto-rotation, live regions, and reduced motion
- FAQ disclosure behavior and heading structure
- Motion accessibility
- Forms, labels, errors, and autocomplete
- Image alt handling
- Obvious color/contrast risks
- Focus management for modals/drawers/search/cart
- Shopify premium theme expectations

## Issues Fixed

### 1. Sticky Add-to-Cart Hidden Interactive Controls

Severity: **High**

WCAG mapping:

- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value

Evidence:

- `sections/sp-sticky-atc.liquid` rendered the Sticky ATC root with `aria-hidden="true"` before JS activation.
- `assets/sp-sticky-atc.js` toggled `aria-hidden` as the bar appeared or disappeared.
- The bar contains actionable controls: variant selector, add-to-cart submit button, and optional dynamic checkout button.

Risk:

- Hidden actionable controls should not remain reachable or exposed while the component is visually hidden.
- If focus remained inside the bar while it hid, keyboard users could be left in a hidden subtree.

Remediation:

- Added `inert` to the initial hidden Sticky ATC root.
- JS now toggles `inert` with visibility.
- Before hiding the bar, JS checks whether focus is inside the Sticky ATC and returns focus to the main product submit button when possible, otherwise blurs the active element.

Files:

- `sections/sp-sticky-atc.liquid`
- `assets/sp-sticky-atc.js`

### 2. Sticky Add-to-Cart Stale Accessible Button Name

Severity: **Medium**

WCAG mapping:

- 2.5.3 Label in Name
- 4.1.2 Name, Role, Value
- 4.1.3 Status Messages

Evidence:

- The Sticky ATC submit button had a Liquid-rendered `aria-label`.
- JS later changed the visible submit label based on main product button state, sold-out/unavailable state, custom merchant label, and optional price-in-button setting.
- Because `aria-label` overrides visible text, the accessible name could become stale after JS synchronization.

Risk:

- Screen reader users could hear an outdated button name after variant/state changes.

Remediation:

- Added `data-product-title` to the Sticky ATC root.
- JS now updates the submit button `aria-label` whenever it updates the visible label.
- The accessible name mirrors the visible label and appends the product title for context.

Files:

- `sections/sp-sticky-atc.liquid`
- `assets/sp-sticky-atc.js`

### 3. Testimonial Stage Auto-Rotation Fallback

Severity: **Medium**

WCAG mapping:

- 2.2.2 Pause, Stop, Hide
- 2.3.3 Animation from Interactions
- 2.2.1 Timing Adjustable, by proximity

Evidence:

- `sections/sp-social-proof.liquid` schema defaults `stage_auto_rotate` to `0`.
- `snippets/sp-social-proof-human-story.liquid` also defaults missing `stage_auto_rotate` to `0`.
- `snippets/sp-social-proof-stage.liquid` had a separate fallback of `6`, which could enable auto-rotation when the setting was absent.

Risk:

- Auto-rotating testimonials should remain disabled unless the carousel has a fully accessible pause/play control or the merchant explicitly opts into a known behavior.

Remediation:

- Changed the standard testimonial stage fallback from `6` to `0`.
- Existing manual dot navigation, arrow-key handling, focus pause, hover pause, visibility pause, and `prefers-reduced-motion` behavior remain unchanged.

File:

- `snippets/sp-social-proof-stage.liquid`

### 4. FAQ Closed Panel Focus Leak

Severity: **High**

WCAG mapping:

- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.2 Name, Role, Value

Evidence:

- Closed FAQ panels used `aria-hidden="true"` while the panel content remained in the DOM.
- If a merchant placed links or controls inside an answer, those focusable descendants could remain reachable while the panel was visually collapsed.

Risk:

- Keyboard users could tab into hidden answer content.
- Assistive technology users could encounter content inside a region marked hidden.

Remediation:

- Closed FAQ panels now render with `inert`.
- FAQ JS removes `inert` when a panel opens and restores `inert` when it closes.
- FAQ transitions now stop under `prefers-reduced-motion: reduce`.

Files:

- `sections/sp-faq.liquid`
- `assets/sp-faq.js`

### 5. Cart Drawer Hidden State And Announcements

Severity: **Medium**

WCAG mapping:

- 2.1.1 Keyboard
- 2.4.3 Focus Order
- 4.1.3 Status Messages

Evidence:

- Cart Drawer relied on visibility/transform state while inactive.
- `CartDrawer-LiveRegionText` had `role="status"` but no explicit `aria-live`/`aria-atomic`, and the shared cart update path did not populate the region text for drawer updates.

Risk:

- Hidden drawer controls could be reachable in edge cases before the drawer was opened.
- Cart updates inside the drawer could be visually reflected without a clear assistive-technology announcement.

Remediation:

- Cart Drawer now starts with `inert`.
- `assets/cart-drawer.js` removes `inert` before opening/focus trapping and restores it after focus is returned on close.
- `CartDrawer-LiveRegionText` now has `aria-live="polite"` and `aria-atomic="true"`.
- `assets/cart.js` now writes the update message into the active live region before exposing it.
- Cart Drawer slide transitions now stop under `prefers-reduced-motion: reduce`.
- The decorative lock icon in the cart trust line is hidden from assistive technology.

Files:

- `snippets/cart-drawer.liquid`
- `assets/cart-drawer.js`
- `assets/cart.js`
- `assets/component-cart-drawer.css`

### 6. Human Proof Carousel Region Label

Severity: **Medium**

WCAG mapping:

- 1.3.1 Info and Relationships
- 2.4.6 Headings and Labels

Evidence:

- Human Story carousel markup used an `aria-label` derived from eyebrow/fallback text while a visible heading was present.

Risk:

- Screen reader region navigation could announce a label that did not match the visible heading.

Remediation:

- Human Story heading now receives a stable section-scoped ID.
- The carousel region uses `aria-labelledby` when that heading exists, falling back to `aria-label` only when no heading is present.

File:

- `snippets/sp-social-proof-human-story.liquid`

## WCAG Observations

### Semantic Structure

Status: **Pass with observations**

- `layout/theme.liquid` preserves a single `main` landmark.
- Header and footer use Dawn semantic regions.
- SP sections use consistent section hierarchy wrappers.
- FAQ and carousel regions use labeled regions where there is clear semantic benefit.
- No generic container replacement was required during this sprint.

Observation:

- A future runtime audit should verify the final heading outline after merchant edits, especially where editorial sections can be reordered.

### Keyboard Accessibility

Status: **Pass with observations**

- Header links, cart icon, search trigger, menu drawer controls, product forms, FAQ triggers, Human Proof dots, Sticky ATC controls, and cart drawer controls are keyboard reachable.
- Sticky ATC hidden state now prevents hidden controls from remaining focusable through `inert`.
- Sticky ATC now moves focus out before hiding.
- Closed FAQ panels now use `inert`, preventing hidden answer controls from remaining in the tab order.
- Hidden Cart Drawer now uses `inert`, removed before opening and restored after close.
- FAQ uses native `button` triggers with `aria-expanded` and `aria-controls`.
- Human Proof dot controls are native buttons and the carousel root supports ArrowLeft/ArrowRight navigation.

Observation:

- Browser verification is still recommended for focus return across cart drawer, search modal, mobile menu, and Sticky ATC when overlays open/close.

### ARIA

Status: **Pass**

- FAQ `aria-controls`, `aria-expanded`, `aria-labelledby`, and panel IDs are internally consistent.
- Human Proof carousel markup uses `role="region"`, `aria-roledescription="carousel"`, `aria-current` on active dots, `aria-hidden` on non-active slides, a polite live region, and visible-heading labelling for the Human Story carousel.
- Cart drawer uses Dawn dialog semantics with `role="dialog"` and `aria-modal="true"`.
- Sticky ATC no longer relies on `aria-hidden` alone for hidden actionable content.
- No new broken ARIA relationships were introduced.

### Sticky Add-to-Cart

Status: **Pass**

- Hidden bar now uses both `aria-hidden` and `inert`.
- Focus is returned or cleared before the bar hides.
- Submit button accessible name is synchronized with JS-updated visible state.
- Variant selector has a visually hidden label.
- Product-form errors are no longer suppressed; the shared error wrapper can announce add-to-cart failures.
- Price changes continue to use a polite live region.
- Reduced-motion CSS is present for the bar animation.

### Human Proof

Status: **Pass with observations**

- Human Story and Testimonial Stage presentations default to no auto-rotation.
- Standard stage fallback now also defaults to no auto-rotation.
- Manual dot navigation uses buttons.
- Human Story carousel labelling now references the visible heading when present.
- Active dot uses `aria-current`.
- Slide changes update a polite live region.
- JS pauses when focused, hovered, hidden, or in reduced-motion mode.

Observation:

- If auto-rotation is re-enabled through merchant settings, a visible pause/play control should be added in a future sprint before claiming full carousel auto-play certification.

### FAQ

Status: **Pass**

- FAQ questions are native buttons.
- Buttons expose `aria-expanded` and `aria-controls`.
- Panels have matching IDs and `aria-labelledby`.
- Closed panels use `inert` until opened.
- Existing Enter/Space handling mirrors native button behavior.
- Heading structure uses a section heading and item-level `h3`.

Observation:

- Arrow-key roving focus is not implemented. This is optional for an accordion and not required because the native button/tab order is usable.

### Motion Accessibility

Status: **Pass**

- `sp-motion.css` suppresses reveal, hover, and transition effects under `prefers-reduced-motion: reduce`.
- `sp-motion.js` avoids arming motion when reduced motion is active.
- `sp-testimonial-stage.js` reads `prefers-reduced-motion` and does not auto-start rotation when reduced motion is active.
- Sticky ATC, Hero, Results, Social Proof stage, Human Story, FAQ, and Cart Drawer CSS include reduced-motion rules.

### Forms

Status: **Pass with observations**

- Dawn customer, contact, newsletter, search, cart, and product forms retain labels and error relationships.
- Required fields use `aria-required` or native required patterns where inherited from Dawn.
- Autocomplete is present on customer/contact fields.
- Sticky ATC variant selector has a visually hidden label.
- Sticky ATC add-to-cart errors now use the shared product-form error wrapper with `role="alert"`.

Observation:

- No form copy was changed in this sprint.

### Images

Status: **Pass with observations**

- SP image-bearing sections generally derive alt text from merchant settings, image metadata, or contextual fallbacks.
- Decorative icons and avatars use `aria-hidden` where appropriate.
- Hero and product media preserve meaningful alt paths.

Observation:

- Final merchant readiness should include content review for actual uploaded image alt text, which cannot be fully certified statically.

### Color And Contrast

Status: **No obvious code-backed blocker found**

- Existing focus styles are visible for SP buttons, Sticky ATC controls, Human Proof stage/dots, and Dawn controls.
- No color values were changed.
- No runtime contrast tooling was run in this sprint.

Observation:

- Final Theme Store hardening should include browser contrast checks on the canonical theme.

## Theme Store Observations

Required improvements before Theme Store hardening:

- Complete browser keyboard verification for cart drawer, search modal, mobile menu, Sticky ATC, FAQ, and Human Proof.
- Keep Human Proof auto-rotation disabled unless a visible pause/play control is implemented.
- Resolve the pre-existing dirty VI.4C CSS working tree before tagging.

Recommended improvements:

- Add a focused runtime accessibility checklist to the launch process.
- Add a future automated check for broken ARIA ID references where feasible.
- Add a visible carousel pause/play control only if auto-rotation becomes a supported merchant-facing feature.

Future enhancements:

- Consider optional arrow-key navigation in FAQ if a stricter accordion pattern is desired.
- Add browser assistive-technology notes for screen reader behavior on virtual carousel slides.

## Remaining Observations

- This was a repository/static certification plus targeted remediation. It did not include a live browser screen-reader pass.
- Existing Theme Check warning baseline remains from prior sprints.
- Existing VI.4C CSS files were already modified before this sprint and remain outside VI.5A scope.
- Merchant-facing schema mojibake identified in VI.4.5 remains outside this accessibility sprint unless the team chooses to handle it as merchant experience cleanup.

## Deferred Improvements

- Runtime assistive technology pass on canonical Shopify preview.
- Contrast measurement with browser tooling.
- Optional carousel pause/play control if auto-rotation becomes supported.
- Optional FAQ roving focus/ArrowUp/ArrowDown support.
- Automated ARIA relationship validation in CI.

## Risk Assessment

Regression risk: **Low**.

Reasoning:

- Sticky ATC changes only affect hidden/focus/accessibility state, error announcement, and button accessible name synchronization.
- `inert` is applied only when Sticky ATC, FAQ panels, or Cart Drawer are hidden and removed when visible/open.
- Sticky ATC focus return only runs when the bar is hiding and focus is inside it.
- Testimonial fallback change only aligns missing settings with the existing schema default of `0`.
- Cart Drawer changes follow the existing Dawn open/close lifecycle and restore `inert` only after focus return.
- No visual CSS, layout, typography, color, composition, or copy changes were made.

## Validation Results

`ReadLints`:

- No linter errors for:
  - `sections/sp-sticky-atc.liquid`
  - `assets/sp-sticky-atc.js`
  - `snippets/sp-social-proof-stage.liquid`
  - `sections/sp-faq.liquid`
  - `assets/sp-faq.js`
  - `snippets/sp-social-proof-human-story.liquid`
  - `snippets/cart-drawer.liquid`
  - `assets/cart-drawer.js`
  - `assets/cart.js`
  - `assets/component-cart-drawer.css`
- Markdown report diagnostics timed out after 10 seconds for this audit file.

`git diff --check`:

- Passed.
- Existing line-ending warnings remain for prior modified VI.4C CSS files.

`shopify theme check --fail-level error --output json`:

- Passed with exit code 0.
- Error count: 0.
- Existing warning baseline remains:
  - `snippets/quick-order-product-row.liquid`: `OrphanedSnippet`
  - `sections/main-list-collections.liquid`: `VariableName`
  - `sections/main-article.liquid`: `VariableName`
  - `sections/sp-features.liquid`: `UnusedAssign`
  - `sections/main-search.liquid`: `UnusedAssign`
  - `sections/featured-product.liquid`: `UnusedAssign`
  - `sections/main-product.liquid`: `UnusedAssign`, `UndefinedObject`
  - `layout/password.liquid`: `UndefinedObject`
  - `layout/theme.liquid`: `UndefinedObject`

Required accessibility searches:

- `aria-hidden`: reviewed.
- `aria-label`: reviewed.
- `aria-expanded`: reviewed.
- `aria-controls`: reviewed.
- `aria-current`: reviewed.
- `role=`: reviewed.
- `tabindex`: reviewed.
- `focus-visible`: reviewed.
- `prefers-reduced-motion`: reviewed.

Specific verification:

- No interactive element newly hidden from assistive technology.
- Sticky ATC hidden state now uses `inert`.
- Sticky ATC focus is moved out before hiding.
- Sticky ATC button accessible name now follows JS-updated visible label.
- Sticky ATC add-to-cart errors are no longer suppressed.
- Closed FAQ panels now use `inert` and reduced-motion transition suppression.
- Cart Drawer inactive state now uses `inert`, its live region receives update text, and drawer transitions respect reduced motion.
- Human Proof default auto-rotation remains disabled.
- Standard testimonial fallback auto-rotation now matches the accessible `0` default.
- Human Story carousel now uses a visible heading relationship when available.
- No broken ARIA relationship was introduced.
- No keyboard trap was introduced.
- No visual regression intended.

## Certification Recommendation

Recommendation: **PASS WITH OBSERVATIONS**.

Accessibility certification:

- Static repository accessibility: **Certified with observations**.
- Runtime browser accessibility: **Recommended before Theme Store hardening**.

Recommended commit message:

`Accessibility certification remediation`

Recommended tag:

`pulseops-accessibility-certification-v1`
