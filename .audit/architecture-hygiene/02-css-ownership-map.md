# 02 — CSS Ownership Map

**Sprint:** AH-1  
**Scope:** All PulseOps-owned CSS (`assets/sp-*.css`, `assets/section-sp-*.css`)  
**Method:** File header analysis, load-order tracing, cross-reference grep, chapter dependency mapping

---

## Load order reference

### Global (all pages) — `layout/theme.liquid`

| Order | File | Lines |
|------:|------|------:|
| 1 | `base.css` (Dawn) | ~3600 |
| 2 | `sp-visual-hierarchy.css` | 155 |
| 3 | `sp-motion.css` | 172 |
| 4 | `sp-image-experience.css` | 207 |
| 5 | `sp-storefront-polish.css` | 75 |
| 6 | `sp-commerce-premium.css` | 201 |

### Supplement vertical head — `snippets/sp-supplement-head.liquid`

| Order | File | Lines |
|------:|------|------:|
| 7 | `sp-vertical-presets.css` | 51 |
| 8 | `sp-supplement.css` | 648 |
| 9 | `sp-typography-language.css` | 269 |
| 10 | `sp-surface-language.css` | 97 |
| 11 | `sp-editorial-system.css` | 925 |
| 12 | `sp-composition-system.css` | 401 |
| 13 | `sp-supplement-type.css` | 449 |
| 14 | `sp-supplement-hero.css` | 548 |

### Section-scoped (body, template order on supplement homepage)

| Order | File | Loaded by | Lines |
|------:|------|-----------|------:|
| 15 | `section-sp-hero.css` | `sp-hero.liquid` | 1178 |
| 16 | `sp-editorial-outcomes.css` | `sp-editorial-outcomes.liquid` | 505 |
| 17 | `sp-ingredients-spotlight.css` | `sp-ingredients-spotlight.liquid` | 804 |
| 18 | `sp-metrics.css` | `sp-metrics.liquid` | 534 |
| 19 | `sp-editorial-differentiation.css` | `sp-editorial-differentiation.liquid` | 553 |
| 20 | `sp-quality-standards.css` | `sp-quality-standards.liquid` | 578 |
| 21 | `sp-social-proof-human-story.css` | `sp-social-proof.liquid` | 211 |
| 22 | `sp-social-proof-human-story-editorial-portrait.css` | `sp-social-proof.liquid` | 368 |
| 23 | *(none — FAQ inline)* | `sp-faq.liquid` | — |
| 24 | `sp-cta-offer-future-self.css` | `sp-cta-offer.liquid` | 201 |

**Not loaded on canonical supplement homepage:** `sp-social-proof-stage.css` (261 lines), `section-sp-results.css`, `section-sp-sticky-atc.css`

---

## Per-file ownership matrix

### `sp-vertical-presets.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Vertical visual preset modes; neutral chrome suppression |
| **Owns** | `.sp-vertical-visual-neutral` section chrome hiding |
| **Must never own** | Chapter typography, section layout |
| **Dependencies** | None |
| **Consumers** | All supplement pages when preset active |
| **Conflicts** | Uses `!important` (11×) to collapse Dawn section wrappers |
| **Expected vs actual** | ✓ Aligned — utility scope only |

---

### `sp-supplement.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Flagship supplement brand layer — palette, header, cards, CTAs, demo asset fixes |
| **Owns** | `--sp-supplement-*` tokens, `.sp-supplement` scope, header wordmark, feature demo fixes, motion disable, section inner max-width |
| **Must never own** | Chapter-specific typography measure, composition grid internals |
| **Dependencies** | `sp-surface-language.css` token aliases |
| **Consumers** | All supplement vertical pages |
| **Conflicts** | Overrides `sp-visual-hierarchy.css` width modes; `:has()` backgrounds for social proof stage; hardcoded CDN URL for stage background (~L293); 26× `:has()` selectors |
| **Expected vs actual** | **Leak** — owns Human Story stage backgrounds and per-section `:has()` chrome despite being "brand layer" |

---

### `sp-typography-language.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Typography authority IV.1 — voice tokens, rhythm, editorial-type voice variants |
| **Owns** | `--sp-voice-*` tokens, `.sp-editorial-type--chapter--*`, `.sp-editorial-type--statement--*`, Future Self headline lock |
| **Must never own** | Section BEM layout, grid columns |
| **Dependencies** | `--sp-type-*` from supplement-type |
| **Consumers** | All editorial chapters via class markup |
| **Conflicts** | `--collective-measure: 16ch` on `.sp-editorial-type--statement--collective` conflicts with metrics headline ownership; Future Self lock duplicates section CSS |
| **Expected vs actual** | **Partial leak** — voice variants correct; section files also set font-size on BEM bypassing classes |

---

### `sp-surface-language.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Surface authority IV.2 — canvas/chapter/elevated tokens |
| **Owns** | `--sp-surface-*`, media-radius aliases on `.sp-editorial-chapter` |
| **Must never own** | Typography, layout grids |
| **Dependencies** | None |
| **Consumers** | Section shells, composition, hero |
| **Conflicts** | Minimal — triplicated token aliases also on editorial-system |
| **Expected vs actual** | ✓ Mostly aligned |

---

### `sp-editorial-system.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Editorial chapter layer — primitives, spacing, handoffs |
| **Owns (expected)** | `.sp-editorial-chapter`, `.sp-editorial-type--*` primitives, `--sp-es-*` tokens, handoff rhythm |
| **Owns (actual)** | **+** Supplement polish for metrics, ingredients, differentiation, social proof, FAQ, CTA; `#anchor-id` padding; `:has()` surface resets |
| **Must never own** | Section grid internals, presentation-specific measure, merchant padding |
| **Dependencies** | Typography + surface language tokens |
| **Consumers** | Every supplement editorial chapter |
| **Conflicts** | **Primary god-file** — duplicates ingredients layout, metrics editorial_story rules, human story legacy selectors, FAQ accordion |
| **Expected vs actual** | **Major violation** — acts as shadow section CSS for 6+ chapters |

---

### `sp-composition-system.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Composition archetypes — chapter silhouettes |
| **Owns** | `.sp-composition--split-transformation`, `--gallery-immersion`, `--typographic-band`, `--linear-manifesto`, `--evidence-panel` |
| **Must never own** | Voice typography tokens, supplement brand colors |
| **Dependencies** | Section BEM class names |
| **Consumers** | Outcomes, Community Confidence, Philosophy, Quality |
| **Conflicts** | Typographic-band metrics rules overlap `sp-metrics.css` and `sp-editorial-system.css`; gallery-immersion unused on Ingredients (missing class) |
| **Expected vs actual** | **Partial** — archetypes defined but not always applied in Liquid |

---

### `sp-supplement-type.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Global type primitives for supplement vertical |
| **Owns** | `--sp-type-*`, body/display scale, font-variant presets |
| **Must never own** | Chapter layout |
| **Dependencies** | Dawn font settings |
| **Consumers** | Supplement.css selectors, typography language |
| **Conflicts** | 8× `!important` on specific heading overrides |
| **Expected vs actual** | ✓ Aligned |

---

### `sp-supplement-hero.css`

| Field | Detail |
|-------|--------|
| **Purpose** | **Frozen** hero + header canvas SSoT for supplement |
| **Owns** | Hero canvas reset, header transparency, hero typography, CTA pill, media frame |
| **Must never own** | Non-hero chapter styling |
| **Dependencies** | Dawn layout structure, `#MainContent` |
| **Consumers** | Hero section only |
| **Conflicts** | 100× `!important`; loads before `section-sp-hero.css` which adds 58× more |
| **Expected vs actual** | **Intentional warfare** — documented frozen but creates highest-risk file pair |

---

### `sp-visual-hierarchy.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Theme-wide section shell — width modes, surface, emphasis, dividers |
| **Owns** | `.sp-section`, `.sp-section__inner--*`, emphasis, divider utilities |
| **Must never own** | Chapter content styling |
| **Dependencies** | `--page-width`, `--sp-section-padding-inline` |
| **Consumers** | All SP sections via hierarchy shell |
| **Conflicts** | Overridden by `sp-supplement.css` for contained/wide max-width |
| **Expected vs actual** | ✓ Correct layer; supplement override is expected vertical layer |

---

### `sp-motion.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Reveal, stagger, hover utilities |
| **Owns** | `.sp-reveal`, `[data-sp-stagger]`, reduced-motion |
| **Must never own** | Layout |
| **Dependencies** | `sp-motion-boot.liquid` |
| **Consumers** | All sections using `sp-motion-class` snippet |
| **Conflicts** | Disabled by `sp-supplement.css` with `!important` on supplement vertical |
| **Expected vs actual** | **Vertical override negates system** — intentional for supplement? |

---

### `sp-image-experience.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Media frames, aspect presets, progressive reveal |
| **Owns** | `.sp-media-frame`, aspect utilities |
| **Must never own** | Typography |
| **Dependencies** | None |
| **Consumers** | Hero, ingredients, metrics avatars, social proof |
| **Conflicts** | Minimal |
| **Expected vs actual** | ✓ Aligned |

---

### `sp-commerce-premium.css`

| Field | Detail |
|-------|--------|
| **Purpose** | Premium commerce UX — cart, PDP, nav polish |
| **Owns** | Cart drawer, feature cards, nav treatments |
| **Must never own** | Editorial chapter styling |
| **Dependencies** | Dawn components |
| **Consumers** | Store-wide commerce surfaces |
| **Conflicts** | Competing `--media-radius`; touches `.sp-section__inner` for emphasis-feature |
| **Expected vs actual** | ✓ Mostly aligned |

---

### Section CSS files (summary)

| File | Primary owner chapter | Secondary owners affecting it | Unexpected owners |
|------|----------------------|------------------------------|-------------------|
| `section-sp-hero.css` | Hero | `sp-supplement-hero.css` | Dawn `base.css` |
| `sp-editorial-outcomes.css` | Outcomes | `sp-composition-system.css`, `sp-editorial-system.css` | `#sp-outcomes` ID rules |
| `sp-ingredients-spotlight.css` | Ingredients | **`sp-editorial-system.css` (duplicate layout)** | Hero body tokens |
| `sp-metrics.css` | Metrics / Community Confidence | composition + editorial system | Typography collective class |
| `sp-editorial-differentiation.css` | Formulation Philosophy | composition + editorial system | — |
| `sp-quality-standards.css` | Quality Standards | composition + editorial system | Hero ink tokens |
| `sp-social-proof-human-story.css` | Human Story (legacy branch) | editorial system (orphan selectors) | — |
| `sp-social-proof-human-story-editorial-portrait.css` | Human Story (active) | editorial system (partial orphan) | — |
| `sp-social-proof-stage.css` | Stage presentation | `sp-supplement.css` `:has()` | **Not loaded on canonical homepage** |
| `sp-cta-offer-future-self.css` | Future Self | `sp-typography-language.css` (headline lock) | editorial `:has()` bleed rules |

---

## Multi-owner visual responsibilities

| Responsibility | Files claiming ownership | Winner pattern |
|----------------|-------------------------|----------------|
| **Headline measure (Community Confidence)** | `sp-typography-language.css`, `sp-metrics.css`, ~~editorial-system~~, ~~composition-system~~ | Highest specificity + load order |
| **Section padding** | Section `{%- style -%}`, `sp-editorial-system.css` `#id` | ID selector beats class |
| **Section max-width (wide)** | `sp-visual-hierarchy.css`, `sp-supplement.css` | `.sp-supplement` prefix |
| **Ingredients image-led layout** | `sp-ingredients-spotlight.css`, `sp-editorial-system.css` | Section file (body load order) |
| **Chapter gap / handoff** | `sp-editorial-system.css`, section CSS, composition | Mixed by chapter |
| **Human Story quote typography** | portrait CSS, editorial system (legacy), typography language | Portrait CSS for active template |
| **FAQ accordion surface** | inline Liquid styles, `sp-editorial-system.css` | Both active |
| **Future Self headline size** | typography language, section CSS | Typography language (specificity) |
| **Hero canvas background** | `sp-supplement-hero.css`, `section-sp-hero.css`, Dawn | `!important` in supplement-hero |
| **Motion reveal visibility** | `sp-motion.css`, `sp-supplement.css` | Supplement disables with `!important` |
| **Shell tone backgrounds** | Section `*-shell--tone-*`, `sp-supplement.css`, editorial `:has()` | Three layers |

---

## Ownership principle violations (summary)

1. **Section CSS should be primary module owner** — violated by editorial system polish blocks.
2. **Composition owns silhouette only** — violated by typographic-band duplicating metrics internals.
3. **Typography language owns voice via classes** — violated by direct BEM font rules in section CSS.
4. **Vertical layer owns brand, not chapter internals** — violated by supplement `:has()` per-section backgrounds.
5. **Merchant section padding owned by Liquid `{%- style -%}`** — violated by `#anchor-id` overrides (recent Community Confidence case).

---

## File dependency graph (simplified)

```
sp-root-tokens.liquid (:root)
        ↓
base.css (Dawn)
        ↓
sp-visual-hierarchy.css ←── sp-supplement.css (overrides width/surface)
        ↓
sp-typography-language.css ←── sp-supplement-type.css (--sp-type-*)
sp-surface-language.css
        ↓
sp-editorial-system.css ←── CROSS-CUTS ALL CHAPTERS
sp-composition-system.css
        ↓
sp-supplement-hero.css (frozen hero)
        ↓
[section CSS per template order] ←── should win; often doesn't
```
