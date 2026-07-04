# 03 — Cascade Conflict Report

**Sprint:** AH-1  
**Method:** Static analysis + Community Confidence computed-style audit (`.audit/community-confidence-cascade-audit-report.md`) as validated case study  
**Severity scale:** Critical / High / Medium / Low

---

## Summary

| Severity | Count | Primary layer |
|----------|------:|---------------|
| Critical | 4 | Editorial system ID overrides, multi-file presentation |
| High | 12 | Duplicate selectors, specificity chains |
| Medium | 18 | Redundant declarations, legacy paths |
| Low | 10+ | Cosmetic duplication, token aliases |

---

## Critical conflicts

### CC-01 — Section padding replaced by ID selector

| Field | Value |
|-------|-------|
| **Severity** | Critical |
| **Affected** | Community Confidence (`#sp-community`), potentially all `#sp-*` handoff blocks |
| **Winning selector** | `.sp-supplement #sp-community` |
| **File:line** | `assets/sp-editorial-system.css:666–669` *(removed in cascade fix sprint)* |
| **Overridden** | `.section-{{ section.id }}-padding` (merchant 88px/96px) |
| **Root cause** | Handoff rhythm applied at section shell via ID specificity `(1,1,0)` |
| **Risk** | Merchant padding settings silently ignored |
| **Status** | Documented + fixed in cascade fix sprint |

---

### CC-02 — Headline measure owned by 4 files

| Field | Value |
|-------|-------|
| **Severity** | Critical |
| **Affected** | Community Confidence `.sp-metrics__statement` |
| **Selectors** | `sp-typography-language.css` (16ch collective), `sp-metrics.css` (46ch), ~~editorial-system~~ (24ch), ~~composition-system~~ (24ch) |
| **Root cause** | Refinement added section rules without removing system duplicates; collective class on markup adds third path |
| **Risk** | "Fix in one file" has no effect; refinement sprints appear to fail |
| **Status** | Documented + consolidated in cascade fix sprint |

---

### CC-03 — Wide width mode neutralized

| Field | Value |
|-------|-------|
| **Severity** | Critical |
| **Affected** | All sections with `sp_width_mode: wide` on supplement vertical |
| **Winning selector** | `.sp-supplement .sp-section__inner--wide` → same token as contained |
| **File:line** | `assets/sp-supplement.css:410–416` *(fixed in cascade sprint)* |
| **Root cause** | Supplement refactor mapped both modes to `--sp-supplement-content-max` |
| **Risk** | Template setting `wide` has no visual effect |
| **Status** | Fixed |

---

### CC-04 — Editorial system god-file overrides section owners

| Field | Value |
|-------|-------|
| **Severity** | Critical |
| **Affected** | Metrics, Ingredients, Differentiation, Social Proof, FAQ, CTA |
| **Pattern** | `.sp-supplement .{section}...` blocks in `sp-editorial-system.css` |
| **File:line** | `assets/sp-editorial-system.css:334–410, 526–588, 598–674, 849–940, 948–1076` |
| **Root cause** | Phase IV polish sprint velocity — fastest path was editorial system supplement blocks |
| **Risk** | Any section CSS edit may be invisible if editorial rule has higher specificity |
| **Status** | Open |

---

## High severity conflicts

### CC-05 — Ingredients image-led layout duplicated

| Selectors | `sp-editorial-system.css:341–406` ↔ `sp-ingredients-spotlight.css:478–724` |
| **Severity** | High |
| **Root cause** | Architecture v1 moved layout to section file; editorial paths not removed |
| **Winner** | Section CSS (later load) per property — unpredictable when specificity differs |
| **Risk** | Edit one file, see no change |

---

### CC-06 — Metrics editorial_story triplication

| Files | `sp-metrics.css`, `sp-composition-system.css:217–263`, `sp-editorial-system.css:598–674` |
| **Severity** | High |
| **Duplicate properties** | `gap`, `max-width`, `padding-top`, proof-value `font-size`, subheading `color` |
| **Example** | Composition zeros `.sp-metrics__proof-moments { padding-top: 0 }`; editorial re-adds clamp |

---

### CC-07 — Hero dual !important stacks

| Files | `sp-supplement-hero.css` (100×), `section-sp-hero.css` (58×) |
| **Severity** | High |
| **Root cause** | Dawn canvas inheritance requires override warfare |
| **Risk** | Theme upgrade or load-order change breaks hero |

---

### CC-08 — Future Self headline split

| Files | `sp-typography-language.css:174–186`, `sp-cta-offer-future-self.css:87–99` |
| **Severity** | High |
| **Winner** | Typography language (higher specificity despite loading before section CSS) |
| **Root cause** | Intentional lock documented in typography file |

---

### CC-09 — Human Story legacy selectors orphaned

| Files | `sp-editorial-system.css` targets `.sp-social-proof__human-story-*`; active template uses `sp-hs-ep-*` |
| **Severity** | High |
| **Root cause** | Presentation variant migration without editorial system cleanup |
| **Risk** | Developers edit dead rules; miss active portrait CSS |

---

### CC-10 — Tablet metrics grid 2-col shim

| File:line | `sp-metrics.css:478–481` forced 2 columns for `--columns-4` at 750–989px |
| **Severity** | High *(fixed in cascade sprint for editorial_story)* |
| **Root cause** | Legacy band presentation grid logic applied to editorial_story |

---

### CC-11 — Metric inner stacked at desktop

| File:line | `sp-metrics.css:484–489` `@media (min-width: 750px)` single-column inner grid |
| **Severity** | High *(fixed in cascade sprint for editorial_story)* |
| **Root cause** | Band presentation centered stack applied globally at tablet+ |

---

### CC-12 — Collective typography class vs metrics BEM

| Selectors | `.sp-editorial-type--statement--collective` (16ch) vs `.sp-metrics__statement` (46ch) |
| **Severity** | High |
| **Root cause** | Dual class markup — voice token + section override |
| **Risk** | Removing metrics override reverts to 16ch |

---

### CC-13 — `#sp-outcomes`, `#sp-ingredients`, `#sp-quality` padding handoffs

| File:line | `sp-editorial-system.css:263–268, 676–684` |
| **Severity** | High |
| **Pattern** | Same ID-override anti-pattern as CC-01 |
| **Risk** | Merchant padding conflicts on other chapters |

---

### CC-14 — Social proof stage background in supplement layer

| File:line | `sp-supplement.css:293–301` hardcoded CDN background via `:has(.sp-social-proof--stage)` |
| **Severity** | High |
| **Root cause** | Demo asset fix in brand layer |
| **Risk** | Wrong layer; inactive on canonical homepage (human_story presentation) |

---

### CC-15 — Motion system disabled on supplement

| File:line | `sp-supplement.css:402–408` |
| **Severity** | High |
| **Effect** | `opacity: 1 !important` on all reveals |
| **Root cause** | Prevent empty below-fold flash on supplement demo |

---

### CC-16 — FAQ dual ownership

| Files | Inline `{%- style -%}` in `sp-faq.liquid` + `sp-editorial-system.css` accordion overrides |
| **Severity** | High |
| **Root cause** | FAQ never received dedicated section CSS asset |

---

## Medium severity conflicts

| ID | Conflict | Files | Property |
|----|----------|-------|----------|
| CC-17 | `.sp-section__inner--contained` max-width | visual-hierarchy vs supplement | max-width |
| CC-18 | Subheading color duplicated | editorial-system vs sp-metrics | color (same value) |
| CC-19 | Shell tone pattern copy-pasted | 4 section CSS files | `--tone-soft` blocks |
| CC-20 | `--media-radius` triple definition | supplement, commerce-premium, base | token |
| CC-21 | Hero tokens in non-hero chapters | metrics, ingredients, quality CSS | `--sp-hero-body-ink` |
| CC-22 | `:has()` surface transparent resets | editorial-system multiple blocks | background |
| CC-23 | Gallery-immersion composition unused | composition-system vs ingredients Liquid | class missing |
| CC-24 | Stage CSS loaded conditionally but dead | sp-social-proof-stage.css + supplement :has() | presentation branch |
| CC-25 | `.sp-editorial-chapter` token triplication | editorial-system, typography, surface | CSS variables |
| CC-26 | Proof strip text measure | sp-metrics.css 46ch cap | max-width |
| CC-27 | Composition typographic-band padding zero | composition vs editorial proof-moments | padding-top |
| CC-28 | Nav `#sp-science` vs page `#sp-quality` | menus vs hierarchy-open | anchor mismatch |
| CC-29 | Per-section `{%- style -%}` padding boilerplate | 10+ sections | DRY not cascade but maintenance |
| CC-30 | Stale hero comment | section-sp-hero.css:5–6 points to wrong file | documentation |
| CC-31 | `:not(.sp-metrics--editorial-story)` guards | sp-supplement.css | legacy band preserved |
| CC-32 | Editorial portrait + legacy human-story CSS both loaded | sp-social-proof.liquid | bundle |
| CC-33 | CTA offer gradient card vs future_self bleed | sp-editorial-system `:has()` | shell width |
| CC-34 | Ingredients `#sp-ingredients` shell padding | ingredients CSS + editorial ID | padding |

---

## Low severity conflicts

| ID | Conflict | Notes |
|----|----------|-------|
| CC-35 | Duplicate gap tokens on metrics editorial_story | Same clamp in 3 files |
| CC-36 | `sp-vertical-presets` !important chrome hide | Intentional |
| CC-37 | Commerce premium emphasis-feature inner padding | Rarely used on homepage |
| CC-38 | Dawn component CSS inheritance on FAQ accordion | Expected |
| CC-39 | Multiple `--sp-supplement-content-*` aliases | Resolved by cascade |
| CC-40 | Portrait CSS 2 refs to legacy human-story class | Partial overlap |

---

## !important inventory (SP files)

| File | Count | Primary use |
|------|------:|-------------|
| `sp-supplement-hero.css` | 100 | Dawn hero reset |
| `section-sp-hero.css` | 58 | Generic hero + deferred comment |
| `sp-supplement.css` | 31 | Motion kill, demo hides |
| `sp-motion.css` | 13 | Reduced motion |
| `sp-vertical-presets.css` | 11 | Chrome suppression |
| `sp-supplement-type.css` | 8 | Ink forcing |
| `sp-editorial-system.css` | 3 | FAQ transparency |
| `sp-visual-hierarchy.css` | 2 | Transparent surfaces |

**Total SP !important:** ~226 (hero pair = 158 = 70%)

---

## High-specificity chain examples

```
.sp-supplement .sp-ingredients-spotlight.sp-editorial-chapter--cinematic
  .sp-ingredients-spotlight__heading.sp-editorial-type--chapter--documentary p
  → sp-editorial-system.css:410

.sp-supplement .shopify-section:has(.sp-cta-offer--future-self)
  .sp-section__inner--bleed
  → sp-editorial-system.css:966+
```

---

## Presentation override pattern (recurring)

```
Section CSS defines presentation branch
    ↓
Composition system adds archetype shell
    ↓
Editorial system adds supplement polish (same selectors)
    ↓
Typography language adds voice class rules (same elements)
    ↓
Refinement sprint edits one file → no visible change
    ↓
Cascade audit required to find winner
```

---

## Risk matrix by chapter

| Chapter | Cascade risk | Primary conflict IDs |
|---------|-------------|---------------------|
| Hero | **Critical** | CC-07 |
| Outcomes | High | CC-13, CC-04 |
| Ingredients | **Critical** | CC-05, CC-04 |
| Community Confidence | **Critical** | CC-01–03, CC-06, CC-10–12 |
| Philosophy | High | CC-04 |
| Quality | High | CC-04, CC-13, CC-28 |
| Human Story | High | CC-09, CC-14, CC-32 |
| FAQ | High | CC-16 |
| Future Self | High | CC-08, CC-33 |

---

## Likely root causes (pattern level)

1. **Speed over consolidation** during Phase IV craftsmanship
2. **No cascade validation gate** before merge (now documented in `pulseops-implementation-quality-rules.md` but not historically enforced)
3. **Presentation reuse** (`sp-metrics` band → editorial_story) without retiring band CSS paths
4. **Supplement vertical as catch-all** for demo fixes (`sp-supplement.css` `:has()` blocks)
5. **ID selectors for rhythm** instead of design tokens on chapter roots

---

## Do not fix in this sprint

This report is documentation only. Fixes belong to Architecture Cleanup Sprint(s) with validation per `08-validation-strategy.md`.
