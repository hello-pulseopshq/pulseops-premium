# 01 — Platform Architecture Audit

**Sprint:** AH-1 Architecture Hygiene  
**Date:** 2026-07-04  
**Scope:** PulseOps Premium — full implementation architecture (read-only)  
**Canonical reference:** `index.supplement.json` + frozen governance stack  
**Baseline:** Architecture v1 (`pulseops-architecture-v1`), prior hygiene audit v1 (2026-06-20)

---

## Executive summary

PulseOps Premium is **architecturally sound at the narrative and section level** but **operationally complex at the CSS cascade layer**. The frozen governance stack (Constitution → Playbook → Design System → Architecture → Language layers → Implementation Standards) describes a clean ownership hierarchy. The implementation evolved through Phase IV craftsmanship sprints, each adding vertical polish without retiring earlier paths.

**Community Confidence** is the clearest recent example: visual defects were caused by **CSS ownership conflicts** (section padding overridden by ID selectors, headline measure split across four files, wide mode neutralized in supplement layer) — not Liquid or template errors.

The platform is **production-viable on the Supplement canonical demo** but carries **significant maintenance risk** from:

1. `sp-editorial-system.css` acting as a cross-chapter polish god-file (~925 lines)
2. Presentation variants styled from 3–4 CSS files simultaneously
3. Demo vertical templates still on pre-Architecture-v1 IA (`sp-scientific-proof`, legacy stacks)
4. Hero override warfare (~158 `!important` across hero CSS alone)
5. Anchor-ID and `:has()` coupling between system CSS and one template's DOM

**Overall engineering quality score: 6.8 / 10**  
**Target after disciplined cleanup: 8.5 / 10**

---

## Current architecture

### Platform shape

```
Shopify OS 2.0 theme (Dawn base)
├── layout/theme.liquid          — global head stack + supplement head injection
├── snippets/sp-supplement-head  — vertical language stack (8 CSS files)
├── sections/sp-*                — frozen SP section library (24 sections)
├── snippets/sp-*                — composable partials (30 snippets)
├── templates/index.supplement   — canonical Architecture v1 homepage (9 SP sections + footer)
├── templates/index.*            — legacy demo packs (pre-v1 IA, 10+ verticals)
└── assets/sp-*.css              — PulseOps design system + section CSS (22 SP files)
```

### Intended CSS layer model (governance)

| Layer | Intended owner | Implementation files |
|-------|----------------|----------------------|
| Design tokens | `sp-root-tokens.liquid`, Dawn `:root` | `:root`, `.sp-supplement` token blocks |
| Design languages | Typography, Surface, Motion, Image | `sp-typography-language.css`, `sp-surface-language.css`, `sp-motion.css`, `sp-image-experience.css` |
| Composition | Archetype silhouettes | `sp-composition-system.css` |
| Editorial system | Chapter primitives, spacing, handoffs | `sp-editorial-system.css` |
| Section CSS | Module layout + BEM | `sp-metrics.css`, `sp-ingredients-spotlight.css`, etc. |
| Vertical overrides | Supplement brand layer | `sp-supplement.css`, `sp-supplement-hero.css`, `sp-supplement-type.css` |
| Responsive overrides | Section or language owners | Split across all of the above |

### Actual cascade load order (Supplement homepage)

**Head (all pages):**
`base.css` → `sp-visual-hierarchy.css` → `sp-motion.css` → `sp-image-experience.css` → `sp-storefront-polish.css` → `sp-commerce-premium.css`

**Supplement vertical head:**
`sp-vertical-presets.css` → `sp-supplement.css` → `sp-typography-language.css` → `sp-surface-language.css` → `sp-editorial-system.css` → `sp-composition-system.css` → `sp-supplement-type.css` → `sp-supplement-hero.css`

**Body (per section, template order):**
`section-sp-hero.css` → `sp-editorial-outcomes.css` → `sp-ingredients-spotlight.css` → `sp-metrics.css` → `sp-editorial-differentiation.css` → `sp-quality-standards.css` → `sp-social-proof-human-story.css` + portrait CSS → *(FAQ: inline styles only)* → `sp-cta-offer-future-self.css`

**Critical implication:** Section CSS loads last and wins at equal specificity — but system-layer rules with higher specificity (`.sp-supplement` prefix, `#anchor-id`, `:has()`) often override section owners anyway.

### Homepage chapter map (canonical)

| # | Chapter | Section | Composition | Anchor |
|---|---------|---------|-------------|--------|
| 1 | Hero | `sp-hero` | — | *(none)* |
| 2 | Editorial Outcomes | `sp-editorial-outcomes` | split-transformation | `#sp-outcomes` |
| 3 | Ingredients | `sp-ingredients-spotlight` | *(missing gallery-immersion class)* | `#sp-ingredients` |
| 4 | Community Confidence | `sp-metrics` (editorial_story) | typographic-band | `#sp-community` |
| 5 | Formulation Philosophy | `sp-editorial-differentiation` | linear-manifesto | `#sp-differentiation` |
| 6 | Quality Standards | `sp-quality-standards` | evidence-panel | `#sp-quality` |
| 7 | Human Story | `sp-social-proof` (editorial_portrait) | — | `#sp-reviews` |
| 8 | FAQ | `sp-faq` | — | `#sp-faq` |
| 9 | Future Self | `sp-cta-offer` (future_self) | — | `#sp-cta` |

---

## Strengths

1. **Frozen narrative IA** — Supplement template matches Architecture v1 chapter sequence and buyer-journey mapping.
2. **Documented language stack** — Typography, surface, composition, and editorial files carry ownership comments aligned to governance IDs (IV.1A, IV.2A, etc.).
3. **Section + presentation pattern** — `presentation` settings (`editorial_story`, `philosophy_manifesto`, `scientific_confidence`, `human_story`, `future_self`) enable merchant configurability without new sections.
4. **Hierarchy shell** — `sp-section-hierarchy-open/close` standardizes width, surface, divider, anchor across chapters.
5. **Scoped vertical** — `.sp-supplement` root prevents brand rules leaking to non-supplement templates (when vertical routing is active).
6. **Cascade audit tooling** — `.audit/community-confidence-cascade-audit.mjs` proves computed-style validation is feasible.
7. **Composition archetypes centralized** — `sp-composition-system.css` owns silhouette intent even when execution leaks.

---

## Weaknesses

1. **Editorial system absorbs section polish** — `sp-editorial-system.css` contains supplement-specific blocks for metrics, ingredients, differentiation, social proof, FAQ, CTA sequencing (~40% of file).
2. **Multi-file presentation ownership** — Community Confidence spans `sp-metrics.css`, `sp-composition-system.css`, `sp-editorial-system.css`, `sp-typography-language.css`.
3. **Duplicate layout rules** — Ingredients image-led selectors duplicated verbatim in editorial system and section CSS.
4. **Hero !important layer** — 100 + 58 `!important` declarations fighting Dawn canvas.
5. **Demo pack drift** — 10+ non-supplement index templates still use `sp-scientific-proof`, `sp-benefits`, `sp-features` stacks instead of Architecture v1 sections.
6. **FAQ has no section CSS asset** — styles live in inline `{%- style -%}` + editorial system overrides.
7. **Human Story class migration incomplete** — editorial system targets legacy `.sp-social-proof__human-story-*`; live template uses `sp-hs-ep-*`.
8. **Nav anchor drift** — Menu links `#sp-science`; page uses `#sp-quality`. `#sp-community` exists but is not in nav.
9. **Token naming couples chapters to Hero** — `--sp-hero-body-ink`, `--sp-hero-headline-ink` used in metrics, ingredients, quality CSS.
10. **Refinement sprints add without subtracting** — Each craftsmanship pass adds override rules; retirement of superseded paths is rare.

---

## Major risks

| Risk | Severity | Likelihood | Impact |
|------|----------|------------|--------|
| Cascade regression on any CSS touch | **Critical** | High | Chapter visual parity breaks silently |
| Editorial system god-file merge conflicts | **High** | High | Multi-chapter regressions from single edit |
| Demo vertical false confidence | **High** | Medium | Merchants on legacy templates see different architecture |
| Hero override fragility on Dawn update | **High** | Medium | Theme upgrade breaks canvas reset |
| Orphan CSS accumulation | **Medium** | High | Bundle size + developer confusion |
| Merchant schema vs implementation naming | **Medium** | Medium | Theme editor labels don't match chapter identity docs |
| `:has()` + hardcoded CDN URLs in supplement CSS | **Medium** | Low | Background assets break off canonical store |

---

## How complexity evolved (WHY)

1. **Phase IV craftsmanship model** — Each chapter sprint added polish in the fastest path: supplement editorial blocks + section CSS tweaks, without consolidating prior paths.
2. **Dawn inheritance** — Hero and commerce required `!important` escape hatches; pattern spread as acceptable override style.
3. **Presentation fork after architecture freeze** — Community Confidence reused `sp-metrics` with new `editorial_story` presentation; legacy band CSS remained, guarded by `:not()` rather than removed.
4. **Typography language retrofit** — Voice tokens applied via `.sp-editorial-type--*` classes on markup that also receives direct BEM styling in section CSS (dual ownership by design, then duplicated).
5. **Template-specific handoffs** — `#sp-outcomes`, `#sp-ingredients` padding tuned via ID selectors for one demo's rhythm — creates tight template coupling.
6. **Human Story variant swap** — Editorial portrait introduced new `sp-hs-ep-*` BEM; old human-story selectors in editorial system not retired.

---

## Architectural patterns that caused drift

| Pattern | Effect |
|---------|--------|
| **Polish in editorial system "temporarily"** | Becomes permanent; section file no longer sole owner |
| **Equal-specificity duplication across head files** | Load order decides winner unpredictably across breakpoints |
| **ID selector handoffs** | Beats merchant `{%- style -%}` section padding |
| **Presentation `:not()` guards** | Preserves dead legacy paths instead of deleting |
| **Inline FAQ styles** | Escapes asset pipeline and Theme Check CSS coverage |
| **Hero token reuse for body copy** | Semantic ownership blur across chapters |

---

## Overall engineering quality score

| Dimension | Score | Notes |
|-----------|------:|-------|
| Architecture integrity (IA) | 9.0 | Supplement matches frozen v1 |
| CSS ownership clarity | 5.5 | Multi-owner presentations |
| Cascade predictability | 5.0 | Recent Community Confidence audit proves fragility |
| Maintainability | 6.5 | Good Liquid patterns; CSS debt |
| Demo pack consistency | 4.5 | Legacy templates dominate count |
| Documentation ↔ implementation alignment | 7.0 | Governance current; hero comment stale |
| Merchant configurability | 7.5 | Presentation presets work; naming confuses |
| Test/validation readiness | 7.0 | Theme check + cascade harness exist |
| **Overall** | **6.8 / 10** | Strong story, fragile styling layer |

**Target after cleanup: 8.5 / 10** — requires ownership consolidation, not redesign.

---

## Related reports

| Report | Focus |
|--------|-------|
| `02-css-ownership-map.md` | Per-file ownership matrix |
| `03-cascade-conflict-report.md` | Documented conflicts with severity |
| `04-dead-code-report.md` | Orphan candidates by confidence |
| `05-duplicate-code-report.md` | Duplicate selectors and declarations |
| `06-file-responsibility-matrix.md` | All implementation files |
| `07-cleanup-roadmap.md` | Prioritized cleanup phases |
| `08-validation-strategy.md` | Post-cleanup validation protocol |

---

## Governance compliance note

This audit **did not modify** any governance documents or implementation files. Findings describe gaps between **frozen governance intent** and **current implementation reality**. Cleanup sprints must adapt implementation to governance — never the reverse.
