# SP Motion System

Theme-wide motion utilities for all Single Product OS (`sp-*`) sections. No GSAP, AOS, or jQuery — CSS variables + IntersectionObserver only.

## Overview

| Motion style | Duration | Reveal distance | Stagger delay | Hover lift |
|--------------|----------|-----------------|---------------|------------|
| **Disabled** | 0 | 0 | 0 | 0 |
| **Minimal** | 400ms | 1.2rem | 60ms | 0.2rem |
| **Balanced** (default) | 550ms | 2rem | 80ms | 0.35rem |
| **Premium** | 700ms | 2.8rem | 120ms | 0.5rem |

Configure under **Theme settings → SP Motion**.

`prefers-reduced-motion: reduce` disables all transforms and transitions while keeping full functionality.

## Progressive enhancement

| State | Content visibility |
|-------|-------------------|
| `html.no-js` | Always visible |
| `html.js` (before / without `sp-motion.js`) | Always visible |
| `html.js.sp-motion-active` | Hidden until `.is-revealed` |
| Motion disabled / reduced motion | Always visible |

Boot: `snippets/sp-motion-boot.liquid` swaps `no-js` → `js` in `<head>`.  
`sp-motion-active` is armed only by `sp-motion.js` — if the script fails to load, content stays visible.

Governance and migration: `docs/MOTION_ARCHITECTURE.md`.

---

## Quick start

### Single reveal

```liquid
<h2 class="sp-benefits__heading{% render 'sp-motion-class', type: 'fade-up' %}">
  {{ section.settings.heading }}
</h2>
```

Or with data attributes (no snippet):

```html
<p data-sp-reveal="fade-in">Fade in only</p>
<div data-sp-reveal="fade-up">Fade up from below</div>
```

### Staggered cards (grids, icon lists, testimonials, logos)

```liquid
<ul class="sp-benefits__grid sp-stagger" data-sp-stagger>
  {% for block in section.blocks %}
    <li class="sp-benefits__card{% render 'sp-motion-class', type: 'stagger-item' %}" {{ block.shopify_attributes }}>
      …
    </li>
  {% endfor %}
</ul>
```

Children receive `--sp-motion-stagger-index` automatically. Delay = index × `--sp-motion-stagger-delay` (80ms balanced, 120ms premium).

Alias container class: `sp-stagger-cards` (same behavior as `sp-stagger`).

### Hover (desktop only)

```liquid
<article class="sp-testimonial{% render 'sp-motion-class', type: 'hover-card' %}">…</article>
<div class="sp-ugc__thumb{% render 'sp-motion-class', type: 'hover-image' %}">
  {{ block.settings.image | image_url: width: 600 | image_tag: class: 'sp-hover-image__target' }}
</div>
<a class="button{% render 'sp-motion-class', type: 'hover-button' %}">Shop now</a>
```

Use `hover-card-subtle` for lighter lift on dense grids.

### Sticky storytelling (desktop)

```liquid
<div class="sp-how-it-works__layout{% render 'sp-motion-class', type: 'story-split' %}">
  <div class="{% render 'sp-motion-class', type: 'sticky-col' %}">
    …copy…
  </div>
  <div class="{% render 'sp-motion-class', type: 'sticky-col-media' %}">
    …image or video…
  </div>
</div>
```

Utilities: `sp-sticky-story`, `sp-sticky-story--split`, `sp-sticky-col`, `sp-sticky-col--media`, `sp-sticky-media`.

---

## Class reference

| Class / attribute | Purpose |
|-------------------|---------|
| `.sp-reveal` / `[data-sp-reveal]` | Base reveal (hidden until in viewport) |
| `.sp-reveal--fade-in` / `data-sp-reveal="fade-in"` | Opacity only |
| `.sp-reveal--fade-up` / `data-sp-reveal="fade-up"` | Opacity + translateY |
| `.sp-stagger` / `[data-sp-stagger]` | Stagger parent |
| `.sp-stagger__item` / `[data-sp-stagger-item]` | Stagger child |
| `.sp-hover-card` | Card lift + shadow |
| `.sp-hover-image` | Image scale (max 1.03) |
| `.sp-hover-button` | Button micro-movement |

Add `.sp-reveal--static` to skip animation for always-visible elements.

---

## Architecture

| File | Role |
|------|------|
| `assets/sp-motion.css` | Tokens, reveal/hover/sticky utilities, reduced-motion |
| `assets/sp-motion.js` | Lazy IO init, stagger indices, theme editor + section reload |
| `snippets/sp-motion-class.liquid` | Liquid helper — returns empty when motion disabled |
| `config/sp-motion.schema.json` | Token reference (not loaded by Shopify) |
| `layout/theme.liquid` | `data-sp-motion` on `<html>`, CSS variable tokens, global asset load |

### JavaScript API

```js
window.SpMotion.init(rootElement); // Re-scan after dynamic DOM changes
window.SpMotion.reveal(element);   // Force reveal
window.SpMotion.isActive();        // false when disabled or reduced motion
```

### Performance rules

- GPU-friendly: `opacity`, `translate3d`, `scale3d` only
- Reveal triggers once per element (unobserve after intersect)
- No layout shift: elements occupy space before reveal
- IntersectionObserver lazy-initializes on `DOMContentLoaded`
- `shopify:section:load` re-inits for theme editor

### Coexistence with Dawn animations

Dawn’s `animations.js` and `animate--hover-*` body classes remain independent. SP sections should use **SP Motion** classes exclusively to avoid duplicate reveal logic.

---

## Integration checklist (new SP section)

1. Add reveal classes to headings, media, or blocks via `sp-motion-class` snippet.
2. Wrap card grids in `sp-stagger` + `data-sp-stagger`; items use `stagger-item`.
3. Add `hover-card` / `hover-image` / `hover-button` where appropriate.
4. Do **not** add section-specific IntersectionObserver or keyframe duplication.
5. Test with Motion style = Disabled and with OS reduced-motion enabled.
