# 05 — Duplicate Code Report

**Sprint:** AH-1  
**Scope:** Duplicate selectors, declarations, utilities, responsive rules, presentation branches  
**Method:** Cross-file grep, manual diff of flagged pairs from CSS ownership map

---

## Summary

| Duplicate type | Instances | Highest risk area |
|----------------|----------:|-------------------|
| Duplicate selectors (same target) | 45+ | Editorial system ↔ section CSS |
| Duplicate declarations (same property/value) | 30+ | Metrics editorial_story |
| Duplicate utilities | 12 patterns | Shell tones, handoffs |
| Duplicate responsive rules | 18+ | Metrics grid breakpoints |
| Duplicate presentation branches | 6 sections | sp-metrics, sp-social-proof |

---

## Duplicate selectors

### Metrics — Community Confidence (`sp-metrics--editorial-story`)

| Selector target | Files | Lines (approx) |
|-----------------|-------|----------------|
| `.sp-metrics--editorial-story { gap }` | sp-metrics.css, sp-composition-system.css, sp-editorial-system.css | 171, 217, 606 |
| `.sp-metrics__intro { max-width: 68rem }` | sp-metrics.css, sp-composition-system.css, sp-editorial-system.css | 189, 244, 614 |
| `.sp-metrics__statement { max-width }` | sp-metrics.css, ~~editorial-system~~, ~~composition-system~~, typography-language | consolidated in fix sprint |
| `.sp-metrics__proof-moments { max-width: none }` | sp-metrics.css, sp-editorial-system.css | 265, 636 |
| `.sp-metrics__proof-moments { gap }` | sp-metrics.css, sp-editorial-system.css | 464+, 639 |
| `.sp-composition--typographic-band .sp-metrics__proof-moments` | sp-composition-system.css, sp-editorial-system.css | 221, 643 |

### Ingredients — image-led layout

| Selector | File A | File B |
|----------|--------|--------|
| `.sp-ingredients-spotlight.sp-editorial-chapter--image-led .sp-ingredients-spotlight__hero` | sp-editorial-system.css:341+ | sp-ingredients-spotlight.css:478+ |
| `.sp-ingredients-spotlight__media-frame` sizing | Both files | Near-identical |
| `#sp-ingredients` padding | sp-ingredients-spotlight.css:28+ | sp-editorial-system.css:263+ |

### Section shell tones (copy-pasted pattern)

Identical structural pattern in:

- `sp-editorial-outcomes.css` — `sp-editorial-outcomes-shell--tone-*`
- `sp-ingredients-spotlight.css` — `sp-ingredients-spotlight-shell--tone-*`
- `sp-editorial-differentiation.css` — `sp-editorial-differentiation-shell--tone-*`
- `sp-quality-standards.css` — `sp-quality-standards-shell--tone-*`

Each defines: `--tone-soft`, `--tone-default`, `--tone-contrast` with `--sp-surface-*` token mapping.

### Editorial chapter token aliases (triplicate)

```css
/* Same aliases on .sp-editorial-chapter in three files */
--sp-es-chapter-gap-*     → editorial-system.css:12-24
--sp-es-type-*            → typography-language.css:162-168
--sp-es-media-radius-*    → surface-language.css:109-112
```

### `.sp-section__inner--wide/contained`

| File | Rule |
|------|------|
| sp-visual-hierarchy.css:55-62 | Base max-width with page-width + offset |
| sp-supplement.css:410-415 | Supplement token override |

---

## Duplicate declarations

### Same property, same value, different files

| Property | Value | Files |
|----------|-------|-------|
| `gap` on editorial_story | `clamp(2.75rem, 4vw, 3.75rem)` | metrics, composition, editorial-system |
| `max-width` intro | `min(100%, 68rem)` | metrics, composition @750px, editorial-system |
| `border-top: none` proof-moments | none | metrics, composition, editorial-system |
| `color` subheading metrics | `rgba(var(--sp-hero-body-ink...), 0.78)` | metrics + editorial-system |
| `font-size` proof-value | `clamp(3.15rem, 4.5vw, 4.35rem)` | metrics + editorial-system |
| `background: transparent` typographic-band | transparent | composition @750px + editorial-system |
| Handoff padding `#sp-*` | `clamp(1.15rem, 1.6vw, 1.45rem)` | editorial-system multiple IDs |

### Same property, conflicting values (duplicate selector family)

| Property | File A | File B | Winner |
|----------|--------|--------|--------|
| `padding-top` proof-moments | composition: `0` | editorial-system: `clamp(...)` | Editorial (specificity) |
| `max-width` statement | typography: `16ch` | metrics: `46ch` | Metrics (specificity + order) |
| `grid-template-columns` columns-4 @750px | metrics: `repeat(2,...)` | metrics editorial override: `repeat(4,...)` | Editorial override (post-fix) |
| `padding-top` #sp-community | section inline: `88px` | editorial `#sp-community`: `clamp(...)` | ID rule (pre-fix) |

---

## Duplicate utilities

### `{%- style -%}` section padding pattern

Repeated in **10+ sections** with identical structure:

```liquid
.section-{{ section.id }}-padding {
  padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
  ...
}
@media screen and (min-width: 750px) { ... }
```

**Files:** sp-hero, sp-metrics, sp-editorial-outcomes, sp-ingredients-spotlight, sp-editorial-differentiation, sp-quality-standards, sp-social-proof, sp-cta-offer, others.

### `sp-motion-class` render calls

Every editorial section appends motion classes via same snippet — not duplicate code but duplicate pattern.

### CTA quiet link styling

`.sp-editorial-cta--quiet-link` styled in:

- sp-editorial-system.css (base)
- sp-metrics.css (metrics button variant)
- Section CSS files (outcomes, differentiation, quality, ingredients)

### Proof divider borders (metrics)

Duplicate nth-child border logic:

- `@media (min-width: 750px)` — 2-col assumptions
- `@media (min-width: 990px)` — 4-col row
- Editorial_story 4-col override block (post-fix) — third copy

---

## Duplicate responsive rules

### Metrics grid breakpoints

| Breakpoint | Rule set | Conflict |
|------------|----------|----------|
| default | 1 column | OK |
| 750px | 2-col shim for columns-4/5/6 | Conflicts with editorial 4-col intent |
| 990px | True column count | OK for desktop |
| 749px mobile | Editorial_story rhythm | Separate block |

### Composition typographic-band media queries

- `@media (min-width: 750px)` block — duplicates metrics desktop rules
- `@media (max-width: 749px)` block — duplicates mobile transparent shell

### Ingredients responsive

- Section CSS `@media` blocks
- Editorial-system `@media` blocks for same image-led selectors

### Hero responsive

- `section-sp-hero.css` extensive breakpoints
- `sp-supplement-hero.css` supplement overrides at same breakpoints

---

## Duplicate presentation branches

### `sp-metrics.liquid`

| Branch | CSS owner | Status |
|--------|-----------|--------|
| `presentation: band` (default) | sp-metrics.css band section + sp-supplement `:not(.sp-metrics--editorial-story)` | Legacy demos |
| `presentation: editorial_story` | metrics + composition + editorial-system | Canonical supplement |

**Duplication cost:** ~40% of sp-metrics.css is band-only; guards in supplement CSS preserve band path.

### `sp-social-proof.liquid`

| Branch | CSS loaded |
|--------|------------|
| `presentation: human_story` + `editorial_portrait` | human-story.css + portrait.css |
| `layout_style: stage` | stage.css + supplement :has() stage rules |
| Legacy grid | human-story.css |

**Duplication:** Both human-story and portrait CSS load for active template.

### `sp-editorial-differentiation.liquid`

| Branch | CSS |
|--------|-----|
| `philosophy_manifesto` | differentiation.css + composition linear-manifesto |
| `split_proof` | differentiation.css split branch (unused on supplement) |

### `sp-quality-standards.liquid`

| Branch | CSS |
|--------|-----|
| `scientific_confidence` | quality.css + composition evidence-panel |
| `split` | quality.css split branch (unused on supplement) |

### `sp-cta-offer.liquid`

| Branch | CSS |
|--------|-----|
| `future_self` | sp-cta-offer-future-self.css |
| default card | inline + Dawn card styles |

---

## Duplicate JavaScript patterns

| Pattern | Files | Notes |
|---------|-------|-------|
| Anchor nav fallback ID injection | sp-anchor-nav.js | Duplicates hierarchy-open anchor logic |
| Motion reveal boot | sp-motion-boot.liquid + sp-motion.css | Paired — OK |
| Vertical routing class | sp-vertical-routing.js | Single owner — OK |

---

## Duplicate Liquid schema patterns

| Pattern | Sections |
|---------|----------|
| Visual hierarchy settings block (`sp_surface_style`, `sp_width_mode`, `sp_divider_style`) | All SP editorial sections |
| `{%- render 'sp-section-hierarchy-open' -%}` | All homepage chapters |
| `{%- render 'sp-motion-class' -%}` | Most sections |
| Metric/block loops with strip + blank checks | metrics, quality, differentiation |

**Not problematic** — intentional platform consistency.

---

## Root cause of duplication

| Cause | Example |
|-------|---------|
| Refinement without removal | 24ch measure kept in 3 files while adding 46ch |
| Phase IV polish in editorial-system | Ingredients layout copied, not moved |
| Presentation fork | Band + editorial_story share section file |
| Shell tone craft sprint | Copy-paste per chapter instead of shared utility |
| Demo fix in supplement layer | Stage background rules duplicate stage CSS intent |

---

## Duplication heat map

```
                    metrics  ingredients  hero  social-proof  FAQ
sp-editorial-system    ████      ████      ██       ███        ██
sp-composition-system  ██        ░         ░        ░          ░
sp-supplement.css      ██        ██       ███       ███        ░
section CSS            ███       ███      ███       ███        ██
typography-language    ██        ██        ░        ██         ░

████ = heavy duplicate   ██ = moderate   ░ = minimal
```

---

## Cleanup priority (duplicates only)

1. Consolidate metrics editorial_story to single file (section CSS)
2. Remove ingredients duplicate from editorial-system
3. Extract shell tone utility to surface or editorial layer (single definition)
4. Retire human-story legacy selectors from editorial-system
5. Split or document band vs editorial_story CSS in metrics with clear file sections
6. Unify section padding pattern into shared snippet (Liquid DRY — separate sprint)

---

## Do not fix in AH-1

Documentation only. See `07-cleanup-roadmap.md` for phased approach.
