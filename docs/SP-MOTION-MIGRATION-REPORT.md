# SP Motion Migration Report

Audit date: platform standardization pass.  
Authority: `docs/MOTION_ARCHITECTURE.md`

> **Note:** `sp-story` does not exist as a section. **SP How it works** (`sp-how-it-works.liquid`) is the storytelling/steps section and was migrated in its place.

---

## Full section audit

| Section | Current motion system (pre-migration) | SP Motion equivalent | Difficulty | Risk | Status |
|---------|--------------------------------------|----------------------|------------|------|--------|
| **sp-hero** | SP Motion stagger + premium ambient float | `stagger`, `fade-in`, `hover-button/card` + `sp-hero-float` exception | Done | Low | **Migrated** |
| **sp-benefits** | SP Motion | `fade-up`, `stagger`, `hover-card-subtle` | Done | Low | **Migrated** |
| **sp-social-proof** | SP Motion | Same as benefits | Done | Low | **Migrated** |
| **sp-guarantee** | CSS `animation-timeline`, keyframes, Dawn `scroll-trigger` | `fade-up` on card | Easy | Medium | **Migrated** |
| **sp-results** | Custom IO + `.is-visible`, card hover CSS, arrow keyframes | `stagger`, `hover-card-subtle`; keep progress IO + arrow pulse | Medium | Medium | **Migrated** |
| **sp-faq** | Accordion open/close transitions only | `fade-up` header, `stagger` items | Easy | Low | **Migrated** |
| **sp-comparison** | None | `fade-up` header/wrapper, `stagger` rows | Easy | Low | **Migrated** |
| **sp-how-it-works** (story) | None | `fade-up`, `stagger`, `hover-card-subtle` | Easy | Low | **Migrated** |
| **sp-problem** | Local card `:hover` transform | `fade-up`, `stagger`, `hover-card-subtle` | Easy | Low | Pending |
| **sp-features** | None | `fade-up`, `stagger`, `hover-card-subtle` | Easy | Low | Pending |
| **sp-before-after** | None | `fade-up`, optional image `hover-image` | Easy | Low | Pending |
| **sp-bundles** | None | `fade-up`, `stagger` | Easy | Low | Pending |
| **sp-cta-offer** | None | `fade-up`, `hover-button` on CTA | Easy | Low | Pending |
| **sp-scientific-proof** | None | `fade-up`, `stagger` | Easy | Low | Pending |
| **sp-ugc** | None | `fade-up`, `stagger`, `hover-image` | Easy | Low | Pending |
| **sp-video** | None | `fade-up` on header/media | Easy | Low | Pending |
| **sp-sticky-atc** | Functional `.is-visible` slide-in bar | Keep — not a reveal silo | N/A | Low | **Exception** |

---

## Priority migrations completed

### sp-guarantee
- Removed `@keyframes sp-guarantee-reveal`, `animation-timeline: view()`, `--reveal` class
- Removed Dawn `scroll-trigger animate--slide-in`
- Added `{% render 'sp-motion-class', type: 'fade-up' %}` on card

### sp-results
- Removed `.sp-results__item` opacity/transform + `.is-visible` reveal CSS
- Removed `initCards()` from `sp-results.js` (card reveals → SP Motion)
- Added header `fade-up`, list `stagger`, items `stagger-item`, cards `hover-card-subtle`
- **Kept:** progress bar width IO in `sp-results.js`, `sp-results-arrow-pulse` keyed to `.is-revealed`

### sp-faq
- Added header `fade-up`, list `stagger`, items `stagger-item`
- **Kept:** accordion panel/icon transitions (`is-open`, grid-template-rows) — functional UI

### sp-comparison
- Header `fade-up`, wrapper `fade-up`, tbody `stagger`, rows `stagger-item`

### sp-how-it-works (sp-story stand-in)
- Header `fade-up`, steps list `stagger`, cards `stagger-item` + `hover-card-subtle`

---

## Remaining custom motion exceptions (approved)

| Location | Motion | Why it stays |
|----------|--------|--------------|
| `sp-hero.liquid` | `sp-hero-float` keyframes | Premium ambient decoration; gated by `data-sp-motion='premium'` |
| `sp-hero.liquid` | Sticky CTA `.is-visible` slide | Functional show/hide, not scroll reveal |
| `sp-hero.js` | IO for sticky CTA anchor | Functional |
| `sp-results.liquid` + `sp-results.js` | Progress bar width animation | Domain-specific data viz |
| `sp-results.liquid` | `sp-results-arrow-pulse` | One-shot accent after SP Motion reveal (`.is-revealed`) |
| `sp-faq.liquid` | Accordion expand/collapse | Interactive UI state |
| `sp-sticky-atc.liquid` + `.js` | Bar visibility IO + transform | Functional commerce UI |
| Dawn `animations.js` | Catalog sections only | Out of SP scope |

---

## Verification checklist

| Check | Mechanism |
|-------|-----------|
| **Reduced motion** | CSS `@media (prefers-reduced-motion)` + `sp-motion.js` removes `sp-motion-active` |
| **Motion disabled** | `sp_motion_style == 'disabled'` → `sp-motion-class` returns empty; no JS load |
| **Theme editor** | `shopify-design-mode` + `shopify:section:load` / `reorder` in `sp-motion.js` |
| **No hidden content without JS** | Default visible; `sp-motion-active` only set by `sp-motion.js`; `no-js` + `<noscript>` in boot snippet |

---

## Next wave (P1)

Apply the benefits pattern to: `sp-problem`, `sp-features`, `sp-before-after`, `sp-bundles`, `sp-cta-offer`, `sp-scientific-proof`, `sp-ugc`, `sp-video`.

Estimated effort: ~15 minutes per section (header fade-up + stagger grid).

---

## Technical debt after this pass

1. Eight SP sections still without SP Motion markup
2. `sp-problem` local hover CSS still present
3. Dawn body `animate--hover-*` may stack with SP button hovers on shared `.button` class
4. No automated Theme Check rule for `scroll-trigger` in `sp-*` files
5. `sp-story` naming — document alias to `sp-how-it-works` for pack authors
