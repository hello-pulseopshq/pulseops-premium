# Supplement Demo Editorial Foundation v1 — Checkpoint

**Date:** 2026-06-20  
**Tag:** `supplement-editorial-foundation-v1`  
**Commit message:** `Establish supplement editorial foundation`

---

## What changed in this phase

This checkpoint captures the **editorial system layer** and the first rhythm unification pass on the supplement homepage — not a full homepage redesign.

### Editorial system (new)

- Added `assets/sp-editorial-system.css` — reusable chapter tokens, type scale, CTA variants, handoff primitives, and supplement-scoped cinematic overrides.
- Wired into supplement demo via `snippets/sp-demo-supplement-head.liquid`.

### Chapter adoption

| Section | Editorial integration |
|---------|----------------------|
| `sp-editorial-outcomes` | `sp-editorial-chapter`, handoff-out, quiet-link CTA, chapter divider |
| `sp-ingredients-spotlight` | Cinematic image-led chapter, `__body` wrapper (matrix + commitment), handoff-in, unified assurance row |
| `sp-editorial-differentiation` | Cinematic image-led chapter, quiet-link CTA (prior editorial pass) |

### Rhythm pass (Outcomes → Ingredients)

- Reduced Outcomes → Ingredients dead air (mobile target ~2.4–2.8rem) via anchor padding overrides on `#sp-outcomes` / `#sp-ingredients`.
- Replaced Outcomes dominant green pill with quiet editorial link; preserved schema/link behavior.
- Unified Ingredients as one chapter: tighter hero→matrix gap, left-aligned matrix caption, inline commitment assurance (no boxed band).
- Pill button CSS scoped with `:not(.sp-editorial-cta)` in outcomes/differentiation/ingredients stylesheets.

### Documentation

- `docs/editorial-system.md` — philosophy, taxonomy, CTA rules, build guidelines for Chapter Library phase.

### Explicitly out of scope

- Hero (`sp-hero`) — frozen
- Metrics (`sp-metrics`) — not yet editorialized
- Reviews (`sp-social-proof`), Quality (`sp-quality-standards`) — need taxonomy redesigns
- Footer — still Dawn-like
- Ingredient thumbnail images in `templates/index.supplement.json` — prior content work, excluded from this commit

---

## Files in this checkpoint

| File | Change |
|------|--------|
| `assets/sp-editorial-system.css` | **Added** — editorial foundation |
| `snippets/sp-demo-supplement-head.liquid` | Load editorial system CSS |
| `sections/sp-editorial-outcomes.liquid` | Chapter classes, quiet CTA, handoff |
| `sections/sp-ingredients-spotlight.liquid` | Chapter body, handoff-in, grid caption |
| `sections/sp-editorial-differentiation.liquid` | Chapter classes, quiet CTA |
| `assets/sp-editorial-outcomes.css` | Pill scope for editorial CTA |
| `assets/sp-ingredients-spotlight.css` | Editorial CTA compatibility |
| `assets/sp-editorial-differentiation.css` | Editorial CTA compatibility |
| `docs/editorial-system.md` | **Added** — system documentation |
| `.audit/editorial-foundation-v1-checkpoint.md` | **Added** — this report |

---

## Files intentionally excluded

| File | Reason |
|------|--------|
| `templates/index.supplement.json` | Six ingredient thumbnail `image` fields only — prior demo content pass, not editorial foundation |

---

## Validation results

**Theme Check:** 250 files inspected — **0 errors**, 11 warnings (all pre-existing, unrelated to editorial pass).

| File | Warning type |
|------|----------------|
| `layout/password.liquid` | UndefinedObject `scheme_classes` |
| `layout/theme.liquid` | UndefinedObject `scheme_classes` |
| `sections/featured-product.liquid` | UnusedAssign `seo_media` |
| `sections/main-article.liquid` | VariableName `anchorId` |
| `sections/main-list-collections.liquid` | VariableName `moduloResult` |
| `sections/main-product.liquid` | UnusedAssign `seo_media`, UndefinedObject `continue` |
| `sections/main-search.liquid` | UnusedAssign `product_settings` |
| `sections/sp-features.liquid` | UnusedAssign `features_frame_class` |
| `snippets/quick-order-product-row.liquid` | OrphanedSnippet |
| `snippets/sp-image-class.liquid` | OrphanedSnippet |

**Rhythm screenshots (reference):** `.audit/screenshots/homepage-rhythm-v2/` — captured after rhythm pass; not committed (audit artifacts).

---

## Homepage score estimate

**~7.7–8.0 / 10** for the supplement homepage rhythm in the Outcomes → Ingredients band.

| Area | Score note |
|------|------------|
| Hero → Outcomes | Strong (prior work) |
| Outcomes → Ingredients | Major improvement — handoff reads continuous |
| Ingredients chapter | Unified — hero, matrix, assurance feel like one story |
| Ingredients → Metrics | Still a seam; metrics reads as widget band |
| Mid/lower page | Reviews, Quality, Footer still section-stacked |

---

## Why this is a foundation checkpoint, not final quality

This commit establishes **shared primitives** (tokens, chapter anatomy, CTA philosophy, handoff patterns) and proves them on three chapters. It does **not**:

- Rebuild Metrics as a Data Story chapter
- Redesign Reviews as Human Proof
- Redesign Quality / Scientific Proof as Scientific Narrative
- Unify footer or conversion finale editorially
- Replace raw padding schema with density presets

Final homepage quality requires the **PulseOps Editorial Chapter Library** — implementing taxonomy slots #04–#10 with the same primitives.

---

## Remaining blockers

1. **Split-chapter repetition** — some sections still open with the same cinematic hero pattern back-to-back (Ingredients + Differentiation).
2. **Metrics still feels like widget/data band** — needs Data Story (#05) editorial treatment and better handoff from Ingredients.
3. **Reviews needs Human Proof redesign** — taxonomy #07; currently Dawn-like cards.
4. **Quality needs Scientific Narrative redesign** — taxonomy #04; trust pillars feel module-stacked.
5. **Footer still Dawn-like** — breaks premium editorial close.

---

## Recommended next phase: PulseOps Editorial Chapter Library

**Goal:** Implement reusable chapter section templates mapped to taxonomy #01–#10, starting with highest-impact gaps:

1. **Data Story** — refactor `sp-metrics` with `sp-editorial-chapter`, editorial stat typography, handoff from Ingredients.
2. **Human Proof** — redesign `sp-social-proof` as testimonial chapter with quote scale and calm grid.
3. **Scientific Narrative** — merge/redesign `sp-quality-standards` + `sp-scientific-proof` rhythm.
4. **Schema presets** — density + media style settings per `docs/editorial-system.md`.
5. **Chapter seam audit** — full-page rhythm pass targeting 8.5+/10.

Each new chapter should consume `sp-editorial-system.css` primitives before adding section-specific CSS.
