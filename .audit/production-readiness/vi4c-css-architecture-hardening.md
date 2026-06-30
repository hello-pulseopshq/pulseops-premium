# Phase VI.4C Production CSS Architecture Hardening

## Executive Summary

Phase VI.4C completed a conservative CSS architecture hardening pass with no intended visual output change. The sprint focused on replacing repeated, obvious constants with existing or narrowly scoped tokens, documenting the current CSS loading architecture, and identifying future consolidation opportunities without merging files.

The main production change is pill-radius normalization: repeated `999px` controls and dividers now consume the existing `--sp-supplement-radius-pill` token with a `999px` fallback. A repeated Hero sticky-header z-index was promoted to a named Hero token. No spacing scale, typography scale, breakpoints, section order, merchant settings, or motion behavior were changed.

## Files Touched

- `assets/sp-commerce-premium.css`
- `assets/sp-editorial-differentiation.css`
- `assets/sp-editorial-outcomes.css`
- `assets/sp-editorial-system.css`
- `assets/sp-ingredients-spotlight.css`
- `assets/sp-quality-standards.css`
- `assets/sp-social-proof-stage.css`
- `assets/sp-supplement-hero.css`

## Magic Numbers Replaced

### Pill Radius

Replaced repeated `border-radius: 999px` values with:

```css
var(--sp-supplement-radius-pill, 999px)
```

Affected patterns:

- Commerce drawer progress track and buttons.
- Editorial primary CTA.
- Ingredients, Editorial Outcomes, Editorial Differentiation, and Quality Standards CTA buttons.
- Social Proof stage divider.
- Supplement Hero CTA button.

Rationale: `999px` represents the same reusable pill-shape design decision already owned by `--sp-supplement-radius-pill`.

### Hero Z-Index

Introduced:

```css
--sp-hero-z-sticky-header: 4;
```

Used by:

- `assets/sp-supplement-hero.css` sticky header layer.

Rationale: `z-index: 4` controls a named layering decision for the Hero/header canvas. The value remains unchanged.

## Tokens Introduced

| Token | File | Purpose | Value |
| --- | --- | --- | --- |
| `--sp-hero-z-sticky-header` | `assets/sp-supplement-hero.css` | Sticky header layer above the Hero canvas | `4` |

No new global spacing, radius, timing, opacity, elevation, or breakpoint tokens were introduced.

## Tokens Reused

| Token | Existing owner | Newly normalized usage |
| --- | --- | --- |
| `--sp-supplement-radius-pill` | `assets/sp-supplement.css` | Pill CTAs, commerce buttons, proof divider, Hero CTA |

## Duplicate Patterns Found

### Repeated Pill Radius

Multiple chapter-level CTAs and commerce controls used raw `999px`. These were obvious shared pill controls and were normalized.

### Repeated CTA Structure

Several chapter CTA blocks repeat:

- `min-height: var(--sp-hero-cta-min-height, 4.8rem)`
- `padding: 0 2.4rem`
- bold weight
- pill radius
- arrow spacing

Only the radius was normalized in this sprint. The rest is intentionally deferred because extracting a shared CTA component class or token set would risk cascade changes and belongs in a future component hardening sprint.

### Repeated Small Icon Widths

Several files repeat `width: 1.6rem` for arrow/icon elements. These were not tokenized because the values are local component geometry, not a clear cross-system design decision.

### Repeated Spacing Constants

Common values like `0.8rem`, `1.2rem`, `1.6rem`, and `2.4rem` appear throughout the CSS. Most are component-local rhythm decisions. No new spacing tokens were introduced because the repo already has higher-level rhythm and section tokens, and tokenizing every occurrence would increase complexity.

### Repeated Transition Durations

Raw `0.2s` and `0.3s` transitions remain in a few component-specific files. The main motion system already uses `--sp-motion-duration*` tokens. The remaining raw values are local micro-interactions and should be reviewed in a future motion-token pass rather than changed opportunistically here.

### Raw Z-Index Values

Raw z-index values remain in:

- `assets/sp-supplement-hero.css`: floating cards layer.
- `assets/sp-commerce-premium.css`: sticky commerce layer.
- `assets/sp-editorial-system.css`, `assets/sp-cta-offer-future-self.css`, `assets/sp-visual-hierarchy.css`: local stacking contexts.

Only the sticky Hero header layer was tokenized. The remaining values are either local stacking contexts or broader commerce/visual hierarchy ownership and should not be renamed without a dedicated layer-index map.

## CSS Loading Architecture

Current Supplement vertical load order:

1. `base.css`
2. `sp-visual-hierarchy.css`
3. `sp-motion.css`
4. `sp-image-experience.css`
5. `sp-storefront-polish.css`
6. `sp-commerce-premium.css`
7. `sp-vertical-presets.css`
8. `sp-supplement.css`
9. `sp-typography-language.css`
10. `sp-surface-language.css`
11. `sp-editorial-system.css`
12. `sp-composition-system.css`
13. `sp-supplement-type.css`
14. `sp-supplement-hero.css`

Notes:

- Global SP foundations load in `layout/theme.liquid`.
- Supplement vertical assets load through `snippets/sp-supplement-head.liquid`.
- Section CSS still loads from individual Liquid sections.
- This sprint did not consolidate files or change asset order.

## CSS Variable Naming Review

Findings:

- Current production naming is mostly consistent with `--sp-*`.
- Supplement-specific tokens correctly use `--sp-supplement-*`.
- Hero-specific tokens correctly use `--sp-hero-*`.
- Surface and typography system tokens have clear ownership files.
- No production CSS `sp-demo-*` selectors were found.

Comment updates:

- Updated `assets/sp-supplement-hero.css` header comment from "Supplement Demo" to "Supplement vertical".
- Updated the Hero CSS loading comment to point to `snippets/sp-supplement-head.liquid`.

## Items Intentionally Deferred

- No file consolidation.
- No shared CTA component extraction.
- No spacing scale rewrite.
- No timing token rewrite for local micro-interactions.
- No global z-index layer map.
- No change to section CSS ownership.
- No typography token changes.
- No responsive breakpoint changes.

## Potential Future CSS Consolidation Plan

1. Create a read-only map of every CSS file, load source, and dependency.
2. Separate concerns into foundation, vertical, chapter, and component ownership groups.
3. Identify dead legacy selectors after runtime evidence confirms they are unused.
4. Consider a shared CTA/control primitive only if it can preserve cascade and visual output.
5. Consider a small z-index layer map for sticky commerce, header, drawer, overlay, and Hero float cards.
6. Consolidate only after visual regression screenshots are available across homepage, PDP, cart, and mobile.

## Risk Assessment

| Risk | Level | Notes |
| --- | --- | --- |
| Visual output change | Very Low | Token substitutions preserve the same fallback values. |
| Cascade regression | Very Low | Existing variables are scoped to `.sp-supplement` with fallbacks for non-Supplement contexts. |
| CTA shape regression | Very Low | `--sp-supplement-radius-pill` resolves to `999px`. |
| Header layering regression | Very Low | `--sp-hero-z-sticky-header` preserves value `4`. |
| CSS complexity increase | Low | One narrow z-index token added; repeated radius constants use an existing token. |

## Validation Results

Commands run:

- `git diff --check`
- `shopify theme check --fail-level error --output json`
- raw z-index search
- repeated transition duration search
- repeated border-radius search
- repeated spacing constant search
- stale `sp-demo` search
- mojibake search
- ReadLints on changed files

Results:

- `git diff --check`: passed with line-ending warnings only.
- Theme Check JSON: `0` errors; existing unrelated warning baseline remains.
- Raw z-index search: remaining values are documented as deferred/local stacking contexts.
- Repeated transition duration search: remaining values are documented as deferred local micro-interactions.
- Repeated border-radius search: shared pill CTAs/controls normalized; one decorative nav underline remains raw.
- Repeated spacing constants: reviewed and deferred as component-local rhythm.
- Stale `sp-demo` search: production CSS remains clean; historical docs still preserve old names.
- Mojibake search: no matches.
- ReadLints: no linter errors on changed CSS files.

## Certification

PASS

The CSS architecture is cleaner without changing visual intent. The sprint reduced obvious duplicated constants, improved naming clarity, documented current loading order, and deferred larger consolidation work to a future evidence-backed sprint.
