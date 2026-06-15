# SP Motion — Final Adoption Summary

**Status: Complete** — all 17 `sp-*` sections now use SP Motion via `{% render 'sp-motion-class' %}`.

Governance: `docs/MOTION_ARCHITECTURE.md`

---

## Final adoption table

| Section | Motion added | Custom motion removed | Exceptions |
|---------|--------------|----------------------|------------|
| **sp-hero** | Content `stagger`, media `fade-in`, float `stagger`, `hover-button/card` | Keyframe reveals, `animation_level`, local button/float hover CSS | `sp-hero-float` ambient (premium only); sticky CTA `.is-visible` |
| **sp-benefits** | Header `fade-up`, list `stagger`, `hover-card-subtle` | Local card hover CSS + transitions | — |
| **sp-social-proof** | Header `fade-up`, review `stagger`, `hover-card-subtle` | Local card hover CSS + transitions | — |
| **sp-guarantee** | Card `fade-up` | `@keyframes`, `animation-timeline`, Dawn `scroll-trigger` | — |
| **sp-results** | Header `fade-up`, list `stagger`, `hover-card-subtle` | Item opacity IO, `.is-visible`, card hover CSS, `initCards()` in JS | Progress bar IO; arrow pulse on `.is-revealed` |
| **sp-faq** | Header `fade-up`, accordion `stagger` | — | Accordion panel/icon transitions (`is-open`) |
| **sp-comparison** | Header `fade-up`, wrapper `fade-up`, row `stagger` | — | — |
| **sp-how-it-works** | Header `fade-up`, steps `stagger`, `hover-card-subtle` | — | — |
| **sp-problem** | Header `fade-up`, list `stagger`, `hover-card-subtle` | Local card hover CSS + transitions | — |
| **sp-features** | Header `fade-up`, feature `stagger`, media `fade-up`, `hover-image`, `hover-button` | — | — |
| **sp-before-after** | Heading `fade-up` | — | Placeholder section — motion ready for future blocks |
| **sp-bundles** | Heading `fade-up` | — | Placeholder section — motion ready for future blocks |
| **sp-cta-offer** | Card `fade-up`, `hover-button` | — | — |
| **sp-scientific-proof** | Heading `fade-up` | — | Placeholder section — motion ready for future blocks |
| **sp-ugc** | Heading `fade-up` | — | Placeholder section — motion ready for future blocks |
| **sp-video** | Center header `stagger`; split content `stagger`; media `fade-up`; highlights/badges `stagger`; `hover-button` | — | `sp-video.js` playback behavior (functional) |
| **sp-sticky-atc** | — | — | Bar visibility IO + slide transform (functional commerce UI) |

---

## Coverage metrics

| Metric | Count |
|--------|-------|
| SP sections total | 17 |
| Sections with `sp-motion-class` | 17 |
| Dawn `scroll-trigger` in SP sections | 0 |
| Section-local reveal IO (non-functional) | 0 |
| `animation-timeline` in SP sections | 0 |

---

## Approved platform exceptions (not debt)

| System | Location | Reason |
|--------|----------|--------|
| Premium ambient float | `sp-hero` | Decorative; `data-sp-motion='premium'` |
| Sticky / visibility IO | `sp-hero.js`, `sp-sticky-atc.js` | Functional UI |
| Progress bar fill | `sp-results.js` | Domain-specific data animation |
| Arrow accent pulse | `sp-results.liquid` | Post-reveal accent; respects reduced motion |
| FAQ accordion | `sp-faq.liquid` | Interactive expand/collapse |
| Video player | `sp-video.js` | Media playback |
| Dawn animations | Non-`sp-*` sections | Separate ownership boundary |

---

## Remaining motion debt

1. **Placeholder sections** (`before-after`, `bundles`, `scientific-proof`, `ugc`) — only heading `fade-up` until real block markup ships; apply full stagger pattern when blocks are built.
2. **Dawn body hover** (`animate--hover-*`) may stack with `sp-hover-button` on shared `.button` class — document or scope in a future pass.
3. **Theme Check lint** — no CI rule yet to block `scroll-trigger` / local reveal keyframes in `sp-*` files.
4. **Locale keys** — SP Motion merchant settings are English-only.
5. **Hero micro-interactions** — logo link and scroll-cue opacity hover remain section-local (not card/button hover duplicates).

---

## Verification

| Check | Result |
|-------|--------|
| `sp_motion_style: disabled` | `sp-motion-class` returns empty; `sp-motion.js` not loaded |
| `prefers-reduced-motion` | CSS + JS disable transforms; functional animations respect media query |
| Theme editor | `shopify-design-mode` reveals content; `section:load` / `reorder` handled |
| No JS / no motion script | Content visible by default; `sp-motion-active` only from JS |

---

## Standard pattern reference

```liquid
<h2 class="sp-section__heading{% render 'sp-motion-class', type: 'fade-up' %}">

<ul class="sp-section__list{% render 'sp-motion-class', type: 'stagger' %}" data-sp-stagger>
  <li class="sp-section__item{% render 'sp-motion-class', type: 'stagger-item' %}">
    <article class="sp-section__card{% render 'sp-motion-class', type: 'hover-card-subtle' %}">
```

Single-card sections (guarantee, cta-offer): `fade-up` on card.  
Media columns: `fade-up` + optional `hover-image` on wrapper.
