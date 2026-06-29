# SP Image Experience System

Governance and implementation reference for image handling across the Single Product OS (SP) pack.

## Principle

**SP Image Experience is the single source of truth for media presentation in `sp-*` sections.**

Focus: perceived quality through consistent frames, reserved aspect ratios (CLS prevention), placeholder tone, responsive srcsets, and optional progressive reveal — not decorative motion.

Dawn’s global **Media** settings (`media_radius`, shadow) remain the corner-radius source. SP Image Experience layers SP-specific polish on top.

---

## Architecture

### Core files

| File | Role |
|------|------|
| `assets/sp-image-experience.css` | Frame utilities, aspect ratios, placeholders, reveal |
| `assets/sp-image-experience.js` | Marks `.sp-image-loaded` + `.sp-media-frame--loaded` on load/error |
| `snippets/sp-image.liquid` | Standard frame + image render |
| `snippets/sp-image-boot.liquid` | Noscript fallback — images always visible |
| `layout/theme.liquid` | CSS/JS load, `data-sp-image-reveal`, CSS tokens |
| `config/settings_schema.json` | **SP Image Experience** theme settings |

### CSS utilities

| Class | Purpose |
|-------|---------|
| `.sp-media-frame` | Aspect-ratio container, overflow, radius, placeholder bg, shadow |
| `.sp-media-frame--square` | 1:1 |
| `.sp-media-frame--landscape` | 4:3 |
| `.sp-media-frame--portrait` | 4:5 |
| `.sp-media-frame--wide` | 16:9 |
| `.sp-media-frame--adapt` | Natural image height (no reserved box) |
| `.sp-media-frame--custom` | Uses `--sp-media-aspect` or hero ratio vars |
| `.sp-media-frame--circle` | Avatar / round thumb |
| `.sp-media-frame--intrinsic` | Parent sets width/height |
| `.sp-media-frame--logo` | Contain-fit logo strip |
| `.sp-image` | Absolute-fill img (`object-fit: cover` default) |
| `.sp-image--contain` | `object-fit: contain` |
| `.sp-image-reveal` | Optional fade-in when loaded (JS) |
| `.sp-image-loaded` | Applied by JS on load/error |
| `.sp-media-frame--loaded` | Clears placeholder background |

### Progressive enhancement

1. **No JS** — images render at full opacity; placeholder bg visible until paint.
2. **JS** — `sp-image-experience.js` adds `sp-image-loaded`; when `data-sp-image-reveal="true"`, unrevealed images start at `opacity: 0` and fade in.
3. **Reduced motion** — reveal transition disabled under `prefers-reduced-motion`.

### Snippet usage

```liquid
{%- render 'sp-image',
  image: block.settings.image,
  ratio: 'landscape',
  alt: block.settings.title,
  widths: '400, 600, 800, 1200, 1600',
  sizes: '(min-width: 990px) 50vw, 100vw',
  frame_class: 'my-section__frame' | append: motion classes via capture
-%}

{%- comment -%} Inside <picture> (hero) — img only {%- endcomment -%}
{%- render 'sp-image', image: img, img_only: true, loading: 'eager', fetchpriority: 'high' -%}
```

---

## Merchant controls

| Control | Location | Rationale |
|---------|----------|-----------|
| Corner radius | Theme → **Media** (`media_radius`) | Store-wide; Dawn standard |
| Media shadow (elevated) | Theme → **Media** | Reused when SP shadow = Elevated |
| Progressive reveal | Theme → **SP Image Experience** | Global polish toggle |
| Frame shadow | Theme → **SP Image Experience** | SP-specific (none / subtle / elevated) |
| Placeholder tone | Theme → **SP Image Experience** | Global placeholder bg strength |
| Hero desktop/mobile images & ratios | Section → **SP Hero** | Per-page storytelling |
| Features image ratio | Section → **SP Features** | Content-driven layout |
| Video poster | Section → **SP Video** | Per-video aspect |
| Avatar / logo picks | Section blocks | Content, not presentation |

**Nowhere (hardcoded):** aspect preset math, object-fit defaults, srcset width ladders.

---

## Mobile image strategy

| Context | Crop | Stack | Aspect rule |
|---------|------|-------|-------------|
| Hero | `object-fit: cover` | Media below content on mobile | Section-owned mobile/desktop ratios via `--sp-hero-ratio-*` |
| Features | `cover` (adapt = natural) | Image above copy per row | Section `image_ratio` setting |
| Video poster | `cover` | Full-width above copy in split | Poster `aspect_ratio` → deferred-media |
| Social proof avatars | `cover` circle | Inline in card footer | Fixed 48px frame (intrinsic) |
| Results avatars | `cover` circle | Inline in proof row | Fixed 36px frame |
| Hero social stack | `cover` circle | Horizontal overlap strip | Fixed 32px frame |
| Logos | `contain` | Horizontal wrap | Max-height 3.2rem, no aspect box |

---

## Section audit (13 requested)

| Section | Images today | Issues found | Status |
|---------|--------------|--------------|--------|
| **Hero** | Product lifestyle, logos, avatars | Duplicate frame CSS; no reveal; hardcoded radius on frame | ✅ P0 adopted |
| **Features** | Block images | Custom `--sp-features-radius: 2rem`; missing `sizes`; no placeholder system | ✅ P0 adopted |
| **Social Proof** | Review avatars | Ad-hoc circle CSS; no sizes on avatar | ✅ P0 adopted |
| **Comparison** | None (icon/text) | — | N/A |
| **How It Works** | None (icons) | — | N/A |
| **Results** | Customer avatars | Ad-hoc circle CSS | ✅ P0 adopted |
| **FAQ** | None | — | N/A |
| **UGC** | Placeholder section | No blocks yet | 🔜 P1 when blocks ship |
| **Video** | Poster | Local `--radius: 1.6rem`; poster without widths/sizes | ✅ P0 adopted |
| **CTA Offer** | None | — | N/A |
| **Scientific Proof** | Placeholder section | No blocks yet | 🔜 P1 when blocks ship |
| **Before/After** | Placeholder section | No blocks yet | 🔜 P1 when blocks ship |
| **Bundles** | Placeholder section | No blocks yet | 🔼 P2 when blocks ship |

Additional SP surfaces (not in original list): **Sticky ATC** product thumb — manual `src`, no `sp-image` (P1).

---

## Priority rollout

### P0 — Immediate (shipped)

- [x] Core CSS/JS/snippets + theme settings
- [x] Hero primary media + logos + avatars + floating card avatar
- [x] Features block images
- [x] Social proof + Results avatars
- [x] Video poster srcset + radius/shadow tokens

**Impact:** Eliminates pop-in traps, unifies radius/shadow/placeholder, adds `sizes` where missing, reserves aspect ratio boxes to reduce CLS.

### P1 — Premium enhancements

- [ ] **UGC grid** — `sp-media-frame--square` + lazy reveal when blocks ship
- [ ] **Before/After** — paired `sp-media-frame--portrait` sliders with shared ratio token
- [ ] **Scientific Proof** — logo/badge `sp-media-frame--logo` + chart `contain`
- [ ] **Sticky ATC** — product thumb via `sp-image` intrinsic 88px
- [ ] **Hero** — optional merchant `object-position` per desktop/mobile image
- [ ] Theme Check rule: forbid raw `image_tag` without `sizes` in `sp-*`

### P2 — Future opportunities

- [ ] **Bundles** — product stack frames with consistent 1:1 thumbs
- [ ] Low-quality image warning in theme editor (Shopify image width metadata)
- [ ] `srcset` width ladder code-gen from frame rendered size
- [ ] WebP/AVIF — rely on Shopify CDN (no external library)
- [ ] Blur-up LQIP via Shopify `image_url` width=20 preload (performance tradeoff review)

---

## Performance notes

- No external libraries.
- Hero LCP image: `fetchpriority: high`, `loading: eager` unchanged.
- All other SP images: `loading: lazy` + explicit `widths`/`sizes`.
- Aspect-ratio `::before` padding reserves space without JS.
- `sp-image-experience.js` is ~1KB, deferred, no layout reads.
- Progressive reveal is opt-out via theme setting; disabled = zero opacity manipulation.

---

## Integration checklist (new SP sections)

1. Use `{% render 'sp-image' %}` or add `sp-media-frame` + `sp-image` classes manually for `<picture>`.
2. Never hardcode `border-radius` on image wrappers — use `--media-radius` via `.sp-media-frame`.
3. Always pass `widths` and `sizes`.
4. Avatars: `sp-media-frame sp-media-frame--circle sp-media-frame--intrinsic` + sized parent.
5. Logos: `sp-media-frame--logo` + `fit: contain` + `reveal: false`.
6. Do not add image fade animations beyond `sp-image-reveal`.

---

## Related systems

- **SP Motion** — hover scale on features (`sp-hover-image`) stacks on `sp-media-frame`; do not duplicate.
- **SP Visual Hierarchy** — section shells unchanged; frames live inside hierarchy content.
