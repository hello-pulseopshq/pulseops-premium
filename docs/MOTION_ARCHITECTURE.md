# SP Motion Architecture

Governance document for motion across the PulseOps Premium theme (Dawn + Single Product OS pack).

## Principle

**SP Motion is the single source of truth for all `sp-*` sections.**

Dawn’s animation system remains for catalog, content, and utility sections only. The two systems must not be combined on the same element.

---

## Ownership boundaries

### Dawn motion system

| Scope | Mechanism | Theme setting |
|-------|-----------|---------------|
| Blog, collection, footer, generic Dawn sections | `scroll-trigger` + `animate--fade-in` / `animate--slide-in` | **Animations → Reveal on scroll** |
| Product/collection cards, buttons (non-SP) | `animate--hover-*` on `<body>` | **Animations → Hover effect** |
| Ambient product media | `animate--ambient`, `animate--zoom-in` | Per-section image behavior |

**Owns:** Store-wide pages outside the SP product pack.  
**Does not own:** Any `sections/sp-*.liquid` file.

### SP Motion system

| Scope | Mechanism | Theme setting |
|-------|-----------|---------------|
| Scroll reveals | `.sp-reveal`, `sp-motion-class` types `fade-in` / `fade-up` | **SP Motion → Motion style** |
| Card grids, lists | `.sp-stagger` + `data-sp-stagger` + `stagger-item` | Same |
| Hover (desktop) | `hover-card`, `hover-image`, `hover-button` | Same |
| Tokens | CSS variables in `layout/theme.liquid` | `disabled` / `minimal` / `balanced` / `premium` |

**Owns:** All `sp-*` sections and their snippets.  
**Implementation:** `assets/sp-motion.css`, `assets/sp-motion.js`, `snippets/sp-motion-class.liquid`, `snippets/sp-motion-boot.liquid`.

### Section-specific behavior (allowed)

Motion that is **functional or decorative but not a scroll reveal** may live in a section when it cannot be expressed with SP Motion utilities:

| Example | Section | Status |
|---------|---------|--------|
| Hero ambient float on media | `sp-hero` | Allowed — gated by `html[data-sp-motion='premium']` |
| Progress bar width animation | `sp-results` | Allowed — domain-specific |
| Sticky ATC visibility IO | `sp-sticky-atc` | Allowed — functional, not decorative reveal |
| Mobile sticky CTA show/hide | `sp-hero.js` | Allowed — functional |

**Rule:** Section-specific motion must not duplicate reveal/stagger/hover patterns that SP Motion already provides.

---

## Approved patterns

```liquid
{%- comment -%} Single reveal {%- endcomment -%}
<h2 class="sp-benefits__heading{% render 'sp-motion-class', type: 'fade-up' %}">

{%- comment -%} Staggered grid {%- endcomment -%}
<ul class="sp-benefits__list{% render 'sp-motion-class', type: 'stagger' %}" data-sp-stagger>
  <li class="sp-benefits__item{% render 'sp-motion-class', type: 'stagger-item' %}">
    <article class="sp-benefits__card{% render 'sp-motion-class', type: 'hover-card-subtle' %}">

{%- comment -%} Always visible (above-fold, critical content) {%- endcomment -%}
<div class="sp-critical sp-reveal--static">
```

- Use `{% render 'sp-motion-class', … %}` exclusively — never hardcode `sp-reveal` without the snippet (snippet respects `sp_motion_style == 'disabled'`).
- One IntersectionObserver stack: `sp-motion.js` only for SP reveals.
- Progressive enhancement: content visible without JS (`html.no-js`, no `sp-motion-active`).

---

## Prohibited patterns (in `sp-*` sections)

| Pattern | Why |
|---------|-----|
| `{% if settings.animations_reveal_on_scroll %} scroll-trigger …` | Dawn system; duplicates SP Motion |
| Section-local `@keyframes` for fade-up / slide-in reveals | Use `sp-motion-class` |
| Section-local `IntersectionObserver` for card reveals | Use `sp-stagger` |
| `data-animation` section settings parallel to `sp_motion_style` | Single global control |
| Mixing `sp-hover-button` with expecting Dawn `animate--hover-*` on same button | Double transform |
| `opacity: 0` on content without `html.sp-motion-active` gate | Breaks no-JS / slow-JS |

---

## Progressive enhancement

```
html.no-js                    → content visible
html.js (no sp-motion-active) → content visible (motion disabled / reduced motion)
html.js.sp-motion-active      → pre-reveal hidden until .is-revealed
```

Boot: `snippets/sp-motion-boot.liquid` (sync in `<head>`).  
JS: `assets/sp-motion.js` (deferred, skipped when motion disabled). `sp-motion-active` is set by JS only — failed script load leaves content visible.

---

## Reference adoptions (complete)

| Section | File | Motion applied | Status |
|---------|------|----------------|--------|
| SP Hero | `sp-hero.liquid` + snippets | Content stagger, media fade-in, float cards, hover buttons | Done |
| SP Benefits | `sp-benefits.liquid` | Header fade-up, card stagger, hover cards | Done |
| SP Testimonials | `sp-social-proof.liquid` | Header fade-up, review stagger, hover cards | Done |
| SP Guarantee | `sp-guarantee.liquid` | Card fade-up | Done |
| SP Results | `sp-results.liquid` | Stagger cards, hover; progress bar IO retained | Done |
| SP FAQ | `sp-faq.liquid` | Header fade-up, accordion stagger | Done |
| SP Comparison | `sp-comparison.liquid` | Header/wrapper fade-up, row stagger | Done |
| SP How it works | `sp-how-it-works.liquid` | Story steps — stagger + hover | Done |

Full audit: `docs/SP-MOTION-MIGRATION-REPORT.md`

---

## Migration table

| Current system | Location | Replacement | Priority | Risk |
|----------------|----------|-------------|----------|------|
| Hero `animation_level` + keyframe reveals | `sp-hero.liquid` | SP Motion stagger + fade-in | **Done** | Low |
| Hero button / float card hover CSS | `sp-hero.liquid` | `hover-button`, `hover-card-subtle` | **Done** | Low |
| Hero ambient `sp-hero-float` | `sp-hero.liquid` | Keep — `premium` motion style only | P2 | Low |
| Benefits card hover CSS | `sp-benefits.liquid` | `hover-card-subtle` | **Done** | Low |
| Social proof card hover CSS | `sp-social-proof.liquid` | `hover-card-subtle` | **Done** | Low |
| Guarantee scroll-timeline reveal | `sp-guarantee.liquid` | `fade-up` + remove `scroll-trigger` | **Done** | — |
| Guarantee Dawn `scroll-trigger` | `sp-guarantee.liquid` | Remove | **Done** | — |
| Results card IO (`sp-results.js`) | `assets/sp-results.js` | `stagger-item`; keep progress bar IO | **Done** | — |
| Results arrow pulse keyframes | `sp-results.liquid` | Keep — triggers on `.is-revealed` | Done | Low |
| SP FAQ / Comparison / How it works | Various | Stagger + fade-up | **Done** | Low |
| Remaining 8 `sp-*` sections | Various | Apply reference pattern | P1 | Low per section |
| Dawn `scroll-trigger` on any `sp-*` | None remaining | — | **Done** | — |
| `sp-hero.js` sticky IO | `assets/sp-hero.js` | Keep — functional | — | — |
| `sp-sticky-atc.js` anchor IO | `assets/sp-sticky-atc.js` | Keep — functional | — | — |
| Dawn body `animate--hover-*` vs SP hovers | `layout/theme.liquid` | Document; avoid on SP buttons | P2 | Low |

---

## Remaining technical debt (post-adoption)

1. **Placeholder sections** — before-after, bundles, scientific-proof, ugc have heading motion only until block UI ships
2. **Dawn hover on `<body>`** can stack with `sp-hover-button` on `.button` elements
3. **Theme Check rule** — lint for `scroll-trigger` inside `sp-*` sections
4. **Locale keys** for SP Motion settings (English-only today)
5. **Hero** logo/scroll-cue opacity hovers remain section-local (non-duplicate micro-interactions)

---

## Developer checklist (new `sp-*` section)

1. Add reveals via `{% render 'sp-motion-class', type: '…' %}` only.
2. Wrap card grids: `stagger` + `data-sp-stagger` on parent, `stagger-item` on children.
3. Do not add `scroll-trigger`, local IO for reveals, or reveal keyframes.
4. Test: Motion style **Disabled**, **Premium**, and OS **reduced motion**.
5. Test: Disable JavaScript — all content must remain visible.

---

## Related docs

- `docs/SP-MOTION.md` — API reference and class table
- `config/sp-motion.schema.json` — token reference
