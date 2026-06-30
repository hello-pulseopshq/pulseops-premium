# Typography Language Foundation

**Phase:** IV.1A — Typography Foundation  
**Date:** 2026-06-20  
**Status:** Implemented (foundation only — zero visual intent)  
**Canonical QA:** PulseOps Supplement Demo `#183028121915`  
**Audit baseline:** [`TYPOGRAPHY-LANGUAGE-AUDIT-v1.md`](TYPOGRAPHY-LANGUAGE-AUDIT-v1.md)
**System authority:** [`pulseops-design-system.md`](pulseops-design-system.md) defines the PulseOps language stack and ownership hierarchy.

---

## Purpose

Establish a single, maintainable typography authority that future craftsmanship sprints can build on. This sprint implements **Pass 1 only** — token consolidation and ownership resolution. No chapter voice differentiation, no rhythm tuning, no visual redesign.

**Target:** 99% visual parity before and after.

---

## Typography Authority Hierarchy

```
Visual System §6 (intent — frozen)
        ↓
sp-typography-language.css          ← VOICE AUTHORITY (IV.1A)
  --sp-voice-* tokens
  --sp-es-type-* aliases
  Future Self statement lock
        ↓
sp-demo-supplement-type.css         ← GLOBAL PRIMITIVES
  --sp-type-* scale, weights, RTE, buttons, PDP/cart
        ↓
sp-editorial-system.css             ← EDITORIAL PRIMITIVE CLASSES
  .sp-editorial-type--* classes
  chapter spacing, supplement presentation overrides
        ↓
sp-composition-system.css           ← COMPOSITION MEASURE + BAND CLAMPS
  layout grids, max-width, proof-value size aliases
        ↓
sp-demo-supplement-hero.css         ← HERO (FROZEN — no changes)
        ↓
sp-cta-offer-future-self.css        ← FUTURE SELF FINALE
  consumes --sp-voice-minimal-*
        ↓
sp-social-proof-human-story.css     ← HUMAN PROOF MICRO-TYPE
  consumes --sp-voice-emotional-* via --sp-hs-quote-size
        ↓
sp-* section CSS                    ← SECTION MICRO-TYPE ONLY
  matrix labels, outcome cards, checkpoints
```

---

## Voice Token Map

All tokens live on `.sp-demo-supplement` in `assets/sp-typography-language.css`. Values **alias current computed output** — identical to pre-IV.1A.

| Voice | Chapter | Token prefix | Aliased tier (today) |
|-------|---------|--------------|----------------------|
| **Expressive** | Hero | `--sp-voice-expressive-*` | Reference slot only — hero CSS frozen |
| **Confident** | Editorial Outcomes | `--sp-voice-confident-*` | `--sp-es-type-chapter` |
| **Documentary** | Ingredients | `--sp-voice-documentary-*` | Same as Confident (IV.1B splits) |
| **Collective** | Community Confidence | `--sp-voice-collective-*` | `--sp-es-type-statement` |
| **Collective moment** | Community proof values | `--sp-voice-collective-moment-*` | Composition band clamp |
| **Manifesto** | Formulation Philosophy | `--sp-voice-manifesto-*` | Same as Collective (IV.1B splits) |
| **Precise** | Scientific Confidence | `--sp-voice-precise-*` | Same as Collective (IV.1B splits) |
| **Emotional** | Human Proof | `--sp-voice-emotional-*` | Quote + lead slots |
| **Minimal** | Future Self | `--sp-voice-minimal-*` | Finale headline |
| **Quiet** | FAQ | `--sp-voice-quiet-*` | Utility heading |
| **Whisper** | Footer | `--sp-voice-whisper-*` | `--sp-type-body-sm` / caption |
| **Caption** | Eyebrows, labels | `--sp-voice-caption-*` | `--sp-es-type-caption` |

### Primitive bridge

`.sp-editorial-chapter` receives `--sp-es-type-*` aliases from voice tokens (with fallbacks for non-supplement editorial chapters):

| Primitive | Voice source |
|-----------|--------------|
| `--sp-es-type-hero` | `--sp-voice-expressive-size` |
| `--sp-es-type-chapter` | `--sp-voice-confident-size` |
| `--sp-es-type-statement` | `--sp-voice-collective-size` |
| `--sp-es-type-quote` | `--sp-voice-emotional-quote-size` |
| `--sp-es-type-caption` | `--sp-voice-caption-size` |

---

## Ownership Rules

| Decision | Owner | Do not duplicate in |
|----------|-------|---------------------|
| Chapter voice scale/weight/measure | `sp-typography-language.css` | Section CSS, editorial overrides |
| Global UI/body/button scale | `sp-demo-supplement-type.css` | Editorial system |
| `.sp-editorial-type--*` class behavior | `sp-editorial-system.css` | Section CSS |
| Layout grids, band structure, ch max-width on containers | `sp-composition-system.css` | Editorial system |
| Hero display scale | `sp-demo-supplement-hero.css` | Any other file |
| Future Self headline typography | `sp-cta-offer-future-self.css` + voice lock in typography-language | `sp-demo-supplement-type.css` (card `.sp-cta-offer__heading` only) |
| Human Proof quote scale | `sp-social-proof-human-story.css` via `--sp-hs-quote-size` | — |
| Matrix/checkpoint/card micro-type | Section CSS (`sp-ingredients-spotlight.css`, etc.) | Composition (except band moment alias) |

### Conflicts resolved (IV.1A)

| Conflict | Resolution |
|----------|------------|
| Future Self: `sp-editorial-type--statement` vs `sp-cta-offer-future-self.css` vs `sp-editorial-system.css` | Voice lock in typography-language; finale CSS owns properties; editorial-system headline typography removed |
| Future Self: `.sp-cta-offer__heading` in supplement-type | Documented as card presentation only — Future Self uses `.sp-cta-offer__future-self-headline` |
| `--sp-es-type-*` vs `--sp-type-*` vs composition clamps | Voice layer unifies; composition band clamps alias `--sp-voice-collective-moment-*` |

---

## CSS Load Order (updated)

Via `snippets/sp-demo-supplement-head.liquid`:

1. `sp-demo-presets.css`
2. `sp-demo-supplement.css`
3. **`sp-typography-language.css`** ← new
4. `sp-editorial-system.css`
5. `sp-composition-system.css`
6. `sp-demo-supplement-type.css`

---

## Implementation Roadmap

```
IV.1A  Foundation          ← this sprint (token aliases, ownership)
   ↓
IV.1B  Chapter Voices      split Confident/Documentary, Collective/Manifesto/Precise
   ↓
IV.1C  Editorial Rhythm    body lh, ch measure normalization, composition clamp migration
```

---

## Intentionally NOT Implemented Yet

- Hero typography changes (frozen)
- Chapter voice differentiation (Confident ≠ Documentary, Collective ≠ Manifesto ≠ Precise)
- Community proof moment scale reduction (stat → editorial phrase tier)
- Body line-height split by voice (documentary 1.55 vs manifesto 1.65)
- px → ch measure migration for body columns
- Ink temperature differentiation (green-deep ownership per chapter)
- New `.sp-editorial-type--moment` / `--utility` classes
- Footer brand-close typography polish
- Demo pack migration (non-supplement templates)
- PDP/cart typography overhaul
- Font family / variant experiments

---

## Definition of Done (IV.1A)

- [x] `sp-typography-language.css` created with `--sp-voice-*` tokens
- [x] Voice tokens alias existing values (no visual intent)
- [x] `--sp-es-type-*` bridged to voice layer
- [x] Future Self typography authority resolved
- [x] Load order updated in `sp-demo-supplement-head.liquid`
- [x] Ownership documented in code comments + this file
- [x] Hero CSS untouched
- [x] No chapter order, composition, buyer journey, or copy changes
- [x] Theme check: 0 errors

---

## Files Changed (IV.1A)

| File | Change |
|------|--------|
| `assets/sp-typography-language.css` | **New** — voice authority |
| `snippets/sp-demo-supplement-head.liquid` | Load typography-language |
| `assets/sp-editorial-system.css` | Remove es-type defs; wire primitives; resolve Future Self conflict |
| `assets/sp-composition-system.css` | Alias proof-value clamps to voice tokens |
| `assets/sp-cta-offer-future-self.css` | Consume `--sp-voice-minimal-*` |
| `assets/sp-demo-supplement-type.css` | Header ownership comment; CTA card note |
| `docs/TYPOGRAPHY-LANGUAGE-FOUNDATION.md` | **New** — this document |

---

*Phase IV.1A complete — ready for IV.1B Chapter Voices after review.*
