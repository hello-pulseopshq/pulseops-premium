# Surface Language Foundation

**Phase:** IV.2A — Surface Language Foundation  
**Date:** 2026-06-20  
**Status:** Implemented (foundation only — zero visual intent)  
**Canonical QA:** PulseOps Supplement Demo `#183028121915`  
**Typography baseline:** `pulseops-typography-rhythm-v1` (`2bbcbf3`)

---

## Purpose

Establish a single, maintainable **surface authority** that future craftsmanship sprints can build on. This sprint implements **Pass 1 only** — token consolidation and ownership resolution. No material expression, no shadow tuning, no border redesign, no chapter surface differentiation.

**Target:** 95–99% visual parity before and after.

Surfaces answer: *What material does each chapter feel like?* IV.2A defines the vocabulary; IV.2B expresses it; IV.2C polishes it.

---

## Surface Philosophy

From Design Language §3 and Visual System:

- Surfaces are **emotional punctuation** — they signal chapter turns, not decoration.
- **Photography is the texture** — UI surfaces stay clean; depth comes from images where possible.
- **Light dominates** — ivory editorial daylight; dark/inverse is finale punctuation only.
- **Warm → cool → warm arc** — story temperature shifts are intentional (full expression in IV.2B).
- **Glass/elevated material is rare** — Hero accent once; Outcomes reuses the same elevated dialect.
- **Bleed vs contained** is a composition decision (frozen); surface tokens do not change silhouettes.

---

## Surface Authority Hierarchy

```
Visual System §3 + Design Language §3 (intent — frozen)
        ↓
sp-demo-supplement.css              ← BRAND PALETTE (RGB primitives, legacy card shells)
        ↓
sp-surface-language.css             ← SURFACE AUTHORITY (IV.2A)
  --sp-surface-* tokens
  --sp-es-media-radius-* aliases
        ↓
sp-visual-hierarchy.css             ← SECTION UTILITIES
  .sp-section--surface-{alternate,accent,transparent,inverse}
  .sp-section--emphasis-*
        ↓
sp-editorial-system.css             ← CHAPTER ORCHESTRATION
  :has() section backgrounds, supplement presentation overrides
        ↓
sp-composition-system.css           ← COMPOSITION SURFACES
  ledger rules, typographic band fill (consumes --sp-surface-ledger-*)
        ↓
sp-demo-supplement-hero.css         ← HERO CANVAS + GLASS (FROZEN)
  --sp-hero-canvas, --sp-hero-surface-card-*
        ↓
sp-* section CSS                    ← MODULE SHELLS + FRAMES
  *-shell--tone-*, media frames, evidence panels, matrix rows
        ↓
sp-cta-offer-future-self.css        ← FINALE CINEMATIC (L4 consumer)
sp-social-proof-human-story.css     ← HUMAN STAGE (portrait frame)
sp-commerce-premium.css             ← PDP / cart (out of homepage narrative)
```

---

## Surface Taxonomy

Five levels — maps to how CSS already behaves, made explicit for IV.2B.

| Level | Name | Material question | Token family | Primary owners |
|-------|------|-------------------|--------------|----------------|
| **L0** | **Canvas** | What is the page ground? | `--sp-surface-canvas-*` | `sp-demo-supplement.css`, `sp-demo-supplement-hero.css` |
| **L1** | **Chapter Field** | What field does this chapter sit in? | `--sp-surface-chapter-*` | Shell classes, `sp-visual-hierarchy.css`, `sp-editorial-system.css` |
| **L2** | **Composition Surface** | What archetype punctuation applies? | `--sp-surface-ledger-*`, `--sp-surface-band-*` | `sp-composition-system.css` |
| **L3** | **Elevated Material** | What reads as a lifted reading card? | `--sp-surface-elevated-*` | Hero glass (frozen) → Outcomes cards, Ingredients media |
| **L4** | **Cinematic Void** | Where does UI disappear for photography? | Transparent utilities, scrims | Future Self, stage, bleed frames |
| **L5** | **Inverse Punctuation** | Where does dark mark a finale? | Inverse section utilities | Future Self, Human Proof stage, Footer |

### Surface types audited (homepage)

| Type | Examples | Level | Current owner |
|------|----------|-------|---------------|
| Transparent | `.sp-section--surface-transparent`, Future Self canvas | L4 | `sp-visual-hierarchy.css`, `sp-cta-offer-future-self.css` |
| Ivory paper | `--sp-supplement-ivory`, shell `--tone-soft` | L0/L1 | `sp-demo-supplement.css`, section shells |
| Contrast tint | `*-shell--tone-contrast`, sage alternate | L1 | Section shells, `sp-demo-supplement.css` |
| Typographic band | `.sp-composition--typographic-band` fill + ledger | L2 | `sp-composition-system.css` |
| Ledger rule | Outcome cards, proof moments, process steps | L2 | `sp-composition-system.css` + module dividers |
| Elevated glass | Hero float cards, Outcomes outcome cards | L3 | `sp-demo-supplement-hero.css` → consumers |
| Contained card | Ingredients media frame, legacy FAQ/reviews | L3 | Section CSS, `sp-demo-supplement.css` |
| Inset panel | Ingredients commitment strip | L3 | `sp-ingredients-spotlight.css` |
| Evidence panel | Scientific lab frame (borderless bleed) | L4 | `sp-quality-standards.css` |
| Image frame | Cinematic `border-radius: 0` vs contained radius | L4/L3 | `--sp-es-media-radius-*`, module frames |
| Proof card | Metrics band (legacy `.sp-metrics__list--band`) | L2 | `sp-metrics.css` |
| CTA panel | Future Self transparent panel | L4 | `sp-cta-offer-future-self.css` |
| Footer | Cream ground | L0 | `sp-demo-supplement.css` |

---

## Token Map (IV.2A)

All tokens live on `.sp-demo-supplement` in `assets/sp-surface-language.css`. Values **alias current computed output**.

### L0 — Canvas

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-canvas-ivory` | `--sp-supplement-ivory` |
| `--sp-surface-canvas-cream` | `--sp-supplement-cream` |
| `--sp-surface-canvas-hero` | `--sp-hero-canvas` (reference; hero CSS frozen) |

### L1 — Chapter field

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-chapter-soft` | `rgb(--sp-supplement-ivory)` |
| `--sp-surface-chapter-contrast` | `rgba(--sp-supplement-green-deep, 0.04)` |
| `--sp-surface-chapter-soft-generic` | `rgba(--color-foreground, 0.025)` |
| `--sp-surface-chapter-contrast-generic` | `rgba(--color-foreground, 0.05)` |

### L2 — Composition / ledger

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-ledger-rule` | `rgba(--color-foreground, 0.1)` |
| `--sp-surface-ledger-rule-supplement` | `rgba(--sp-supplement-green-deep, 0.12)` |
| `--sp-surface-band-fill-generic` | `rgba(--color-foreground, 0.018)` |
| `--sp-surface-band-fill-supplement` | `rgba(--sp-supplement-green-deep, 0.025)` |

### Dividers

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-divider-neutral` | `rgba(--color-foreground, 0.1)` |
| `--sp-surface-divider-editorial` | `rgba(--sp-hero-body-ink, 0.12)` |
| `--sp-surface-divider-matrix` | `rgba(--color-foreground, 0.12)` |
| `--sp-surface-divider-matrix-supplement` | `rgba(--sp-supplement-green-deep, 0.14)` |

### L3 — Elevated material

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-elevated-fill-glass` | `--sp-hero-surface-card-bg` |
| `--sp-surface-elevated-border-glass` | `--sp-hero-surface-card-border` |
| `--sp-surface-elevated-shadow-glass` | `--sp-hero-surface-card-shadow` |
| `--sp-surface-elevated-shadow-soft` | Generic outcome card shadow |
| `--sp-surface-elevated-shadow-contained` | Ingredients contained shadow |

### Radius

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-radius-{sm,md,lg,xl,pill}` | `--sp-supplement-radius-*` |
| `--sp-surface-radius-elevated` | `--sp-hero-surface-card-radius` |
| `--sp-surface-radius-contained` | Former `--sp-es-media-radius-contained` |
| `--sp-surface-radius-cinematic` | Former `--sp-es-media-radius-cinematic` |

### Elevation RGB

| Token | Aliased source |
|-------|----------------|
| `--sp-surface-shadow-brand` | `--sp-supplement-shadow` |
| `--sp-surface-shadow-neutral` | `--sp-hero-neutral-shadow` |

---

## Ownership Rules

| Decision | Owner | Do not duplicate in |
|----------|-------|---------------------|
| Surface taxonomy + material tokens | `sp-surface-language.css` | Section CSS, composition |
| Brand RGB palette | `sp-demo-supplement.css` | Surface layer (consume via alias) |
| Section surface utilities | `sp-visual-hierarchy.css` | Section modules |
| Composition ledger + band fill | `sp-composition-system.css` | Module dividers (consume tokens) |
| Hero canvas + glass material | `sp-demo-supplement-hero.css` | Outcomes (consume `--sp-surface-elevated-*`) |
| Media frame radius class | `--sp-es-media-radius-*` via surface bridge | Raw clamp duplicates |
| Chapter shell tone **classes** | Section shell CSS (IV.2B consolidates) | New one-off backgrounds |
| Cinematic scrim / inverse gradient | Section finale CSS | Global utilities |
| Commerce card chrome | `sp-commerce-premium.css` | Homepage narrative CSS |

### Conflicts resolved (IV.2A)

| Conflict | Resolution |
|----------|------------|
| `--sp-es-media-radius-*` defined in editorial-system | Bridged to `--sp-surface-radius-contained/cinematic` |
| `--sp-comp-ledger-rule` defined in composition-system | Bridged to `--sp-surface-ledger-rule(-supplement)` |
| Outcomes `--sp-eo-card-*` pointed directly at hero tokens | Bridged to `--sp-surface-elevated-*` |
| Ingredients `--sp-is-card-shadow` pointed at hero | Bridged to `--sp-surface-elevated-shadow-glass` |
| Module dividers (`--sp-qs-divider`, `--sp-ed-proof-divider`, `--sp-is-row-divider`) | Bridged to `--sp-surface-divider-*` |
| Outcomes supplement shell backgrounds hardcoded | Consume `--sp-surface-chapter-soft/contrast` |

### Conflicts documented, deferred (IV.2B/C)

| Conflict | Why deferred |
|----------|--------------|
| `--sp-hero-canvas` (247,242,234) vs `--sp-supplement-ivory` (252,250,246) | Unifying changes hero seam — IV.2C canvas polish |
| Five copy-pasted `*-shell--tone-*` blocks | Consolidation is expression pass, not foundation |
| Three metrics band treatments | Requires archetype surface expression |
| Legacy `--sp-supplement-card` FAQ/reviews shells | Utility chapters — IV.2B whisper surfaces |
| Multiple shadow RGB sources | Tuning is IV.2C polish, not architecture |
| `sp-editorial-system.css` `:has()` section backgrounds vs visual-hierarchy tints | Orchestration layering — express in IV.2B |

---

## CSS Load Order (updated)

Via `snippets/sp-demo-supplement-head.liquid`:

1. `sp-demo-presets.css`
2. `sp-demo-supplement.css`
3. `sp-typography-language.css`
4. **`sp-surface-language.css`** ← new
5. `sp-editorial-system.css`
6. `sp-composition-system.css`
7. `sp-demo-supplement-type.css`

Hero CSS loads per-section from `sections/sp-hero.liquid` (frozen path unchanged).

---

## Implementation Roadmap

```
IV.2A  Foundation           ← this sprint (token aliases, ownership)
   ↓
IV.2B  Surface Expression   chapter material voices (warm paper, cool evidence, band ledger)
   ↓
IV.2C  Surface Polish       shadow tuning, canvas seam, shell consolidation, inverse finale
```

---

## Intentionally NOT Implemented Yet

- Hero surface changes (frozen)
- Canvas ivory unification (hero vs chapter seam)
- Consolidated `sp-surface-chapter-shell.css` (replace 5 shell copies)
- Chapter material differentiation (warm Outcomes paper vs cool Scientific evidence)
- Typographic band fill expression tuning
- Shadow depth normalization across modules
- Border radius harmonization beyond token aliases
- Future Self inverse surface punctuation upgrade
- FAQ/Footer whisper surface pass
- Glass/backdrop-filter expansion beyond Hero + Outcomes
- New gradients, textures, grain, or decorative effects
- Commerce PDP/cart surface migration
- Motion/hover surface interactions

---

## Definition of Done (IV.2A)

- [x] `sp-surface-language.css` created with `--sp-surface-*` tokens
- [x] Surface tokens alias existing values (no visual intent)
- [x] `--sp-es-media-radius-*` and `--sp-comp-ledger-rule` bridged to surface layer
- [x] Elevated material and divider consumers bridged (Outcomes, Ingredients, Philosophy, Scientific)
- [x] Load order updated in `sp-demo-supplement-head.liquid`
- [x] Ownership documented in code comments + this file
- [x] Hero CSS untouched
- [x] No chapter order, composition, typography, buyer journey, or copy changes
- [x] Theme check: 0 errors

---

## Files Changed (IV.2A)

| File | Change |
|------|--------|
| `assets/sp-surface-language.css` | **New** — surface authority |
| `snippets/sp-demo-supplement-head.liquid` | Load surface-language |
| `assets/sp-editorial-system.css` | Bridge media radius to surface tokens |
| `assets/sp-composition-system.css` | Bridge ledger rule to surface tokens |
| `assets/sp-editorial-outcomes.css` | Bridge elevated + shell + shadow tokens |
| `assets/sp-ingredients-spotlight.css` | Bridge elevated shadow + matrix dividers |
| `assets/sp-editorial-differentiation.css` | Bridge proof dividers |
| `assets/sp-quality-standards.css` | Bridge process dividers |
| `assets/sp-demo-supplement.css` | Surface ownership comment |
| `docs/SURFACE-LANGUAGE-FOUNDATION.md` | **New** — this document |

---

*Phase IV.2A complete — ready for IV.2B Surface Expression after review.*
