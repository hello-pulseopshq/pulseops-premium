# Codebase Hygiene Audit v1

**Phase:** III.5 — Codebase Hygiene & Systems Audit  
**Date:** 2026-06-20  
**Architecture baseline:** `pulseops-architecture-v1` @ `73b4b1a`  
**Scope:** Full repository — CSS, Liquid, templates, JS, design systems, documentation, naming  
**Rule:** Audit-first; only zero-behavior-change fixes applied in this sprint

---

## Executive Summary

PulseOps is **architecturally mature on the canonical Supplement demo** (`index.supplement.json`) and **structurally sound at SP Core level**, but the **wider demo pack layer has not yet migrated** to Architecture v1. The codebase can support long-term development **if Phase IV craftsmanship proceeds on Supplement first** and demo-template migration is scheduled as a separate platform track.

| Score | Rating | Notes |
|-------|--------|-------|
| **Overall Health** | **7.4 / 10** | Strong core; uneven demo coverage |
| **Maintainability** | **7.0 / 10** | Good section/snippet patterns; CSS layering debt |
| **Technical Debt** | **6.5 / 10** | Demo drift, legacy CSS paths, schema naming lag |
| **Architecture Integrity** | **9.0 / 10** | Supplement matches frozen IA; other demos do not |
| **Documentation** | **8.5 / 10** | Architecture docs current; implementation docs lag naming |
| **Merchant Readability** | **6.0 / 10** | Theme editor labels use implementation names |

### Overall Verdict

## **Minor Cleanup Remaining**

The codebase is **clean enough for Phase IV (Craftsmanship) on the Supplement canonical demo**. It is **not yet uniformly clean across all vertical demo templates**. No blocking refactor required before Sprint IV.1 Typography Language — provided craftsmanship stays scoped to frozen Supplement architecture until demo packs are migrated.

---

## Section Reports

### CSS Architecture

**Files reviewed:** 21 SP-owned CSS files + `sp-composition-system.css`, `sp-editorial-system.css`, section CSS, demo CSS, Dawn `base.css` (inherited).

**Healthy patterns**

- Clear load order via `snippets/sp-supplement-head.liquid`: presets → supplement → editorial → composition → type
- Composition archetypes centralized in `sp-composition-system.css` (543 lines)
- Global tokens in `snippets/sp-root-tokens.liquid` (single `:root` injection point)
- Supplement overrides scoped under `.sp-supplement`

**Issues found**

| Issue | Severity | Detail |
|-------|----------|--------|
| Dual styling paths for middle chapters | **High** | Section CSS (`sp-metrics.css`, `sp-editorial-differentiation.css`, etc.) **and** composition overrides in `sp-editorial-system.css` both target same chapters |
| Legacy `image-led` rules retained | **Medium** | `sp-editorial-system.css` still carries pre-7.2 image-led paths guarded by `:not(.sp-composition--gallery-immersion)` — dead weight for Supplement |
| `!important` concentration in hero demo CSS | **Medium** | ~100 uses in `sp-supplement-hero.css`; ~58 in `section-sp-hero.css` — intentional override layer but hard to maintain |
| Competing `--media-radius` definitions | **Low** | Set in `sp-supplement.css`, `sp-commerce-premium.css`, Dawn `base.css` — cascade-resolved but not single source |
| Per-section padding in Liquid `{%- style -%}` blocks | **Low** | Duplicates pattern across 10+ sections; not wrong, but repeated boilerplate |
| Dawn component CSS bulk | **Cosmetic** | ~60 inherited files; expected for Shopify theme base — not PulseOps debt |

**Recommendation:** Phase IV+ may consolidate section CSS into composition + editorial layers incrementally. Do not rewrite in one pass.

---

### Liquid Architecture

**Files reviewed:** 24 `sections/sp-*.liquid`, 29 `snippets/sp-*.liquid`, layout hooks.

**Healthy patterns**

- Presentation modes encode architecture: `editorial_story`, `philosophy_manifesto`, `scientific_confidence`, `human_story`, `future_self`
- Hierarchy wrappers: `sp-section-hierarchy-open/close`, `sp-section-hierarchy-surface`
- Reusable snippets: `sp-image`, `sp-motion-class`, `sp-hero-media`, `sp-cta-offer-future-self`
- No hardcoded supplement copy in Liquid (demo content lives in JSON)

**Issues found**

| Issue | Severity | Detail |
|-------|----------|--------|
| Section file names ≠ chapter identity | **High** | `sp-metrics` = Community Confidence; `sp-editorial-differentiation` = Formulation Philosophy — merchant/schema mismatch |
| `sp-scientific-proof.liquid` still active in other templates | **Medium** | Section exists; deprecated for Supplement architecture only |
| Inline `{%- style -%}` per section | **Medium** | Padding/scoping duplicated; increases diff noise |
| `sp-features.liquid` unused assign | **Low** | Theme Check: `features_frame_class` assigned but unused |
| Duplicate social proof render paths | **Low** | `sp-social-proof.liquid` branches human_story vs stage — intentional, both used |
| Orphan snippet `sp-image-class.liquid` | **Low** | **Fixed** — deleted (zero references) |

**Recommendation:** Schema display `name` alignment in a future Merchant Experience sprint — not Liquid refactor.

---

### Template Architecture

**Files reviewed:** All `templates/*.json` (20+ demo/homepage/product variants).

**Canonical Supplement (`index.supplement.json`)**

| Check | Status |
|-------|--------|
| Chapter order matches Architecture v1 | ✅ |
| Composition presentation modes correct | ✅ |
| Disabled `sp-scientific-proof` ghost | ✅ **Fixed** — section removed |
| Orphan block definitions | ✅ **Fixed** — empty hero blocks, trust points, commitments, metric-4 removed |
| Buyer journey copy ownership | ✅ |

**Platform-wide template drift**

| Issue | Severity | Detail |
|-------|----------|--------|
| Only Supplement uses Architecture v1 stack | **Critical** | `index.skincare.json`, `index.coffee.json`, etc. still use legacy: Hero → Metrics → Benefits → Features → Scientific Proof — **no** Outcomes, Ingredients, Philosophy, Quality Standards |
| `sp-scientific-proof` active in 9+ templates | **High** | Conflicts with frozen Supplement IA; valid for legacy demos until migration |
| Product templates include scientific-proof | **Medium** | All vertical product templates still wire `sp-scientific-proof` |
| Default `index.json` minimal stack | **Low** | SP Metrics only — acceptable for Liquid Collection demo |

**Recommendation:** Schedule **Demo Pack Migration** track (post-IV or parallel) to apply Architecture v1 JSON to all vertical index templates — not a Phase III.5 auto-fix.

---

### JavaScript Architecture

**Files reviewed:** 11 `assets/sp-*.js` files.

**Healthy patterns**

- Section-scoped init with `shopify:section:load` / `section:reorder` handlers (motion, FAQ, sticky ATC, testimonial stage)
- Reduced-motion respected in `sp-motion.js`
- No duplicate global scroll listeners across SP scripts (each module owns its scope)
- Sticky ATC cleans up observers on disconnect pattern (partial)

**Issues found**

| Issue | Severity | Detail |
|-------|----------|--------|
| Multiple independent `IntersectionObserver` implementations | **Medium** | `sp-motion.js`, `sp-anchor-nav.js`, `sp-sticky-atc.js`, `sp-results.js`, `sp-hero.js` — no shared observer utility |
| `sp-testimonial-stage.js` complexity | **Medium** | 420+ lines; carousel + drag + autopause — works but high maintenance surface |
| `MutationObserver` on cart/notification in sticky ATC | **Low** | Necessary for visibility; no leak if section removed (re-init on load) |
| `sp-vertical-routing.js` only on supplement head | **Low** | Correct scoping |

**Recommendation:** Observer consolidation is a deferred refactor — zero user benefit in Phase IV.

---

### Design System Architecture

**Layers reviewed:** `sp-root-tokens.liquid`, `sp-visual-hierarchy.css`, `sp-editorial-system.css`, `sp-composition-system.css`, `sp-motion.css`, `sp-image-experience.css`, demo CSS.

**Single source of truth map**

| Concern | Authority | Drift? |
|---------|-----------|--------|
| Homepage IA / buyer journey | `PULSEOPS-ARCHITECTURE-v1.md` | ✅ Locked |
| Creative philosophy | `pulseops-visual-system-v1.md` | ✅ |
| Composition silhouettes | `sp-composition-system.css` | ✅ |
| Editorial primitives | `sp-editorial-system.css` | ⚠️ Contains supplement-specific composition overrides |
| Global SP settings tokens | `sp-root-tokens.liquid` | ✅ |
| Supplement typography | `sp-supplement-type.css` | ✅ Scoped |
| Motion | `sp-motion.css` + `settings.sp_motion_style` | ✅ |

**Issues**

| Issue | Severity | Detail |
|-------|----------|--------|
| Composition + editorial override overlap | **High** | Typographic-band rules split between `sp-composition-system.css` and `sp-editorial-system.css` |
| Visual System vs implementation naming | **Medium** | Docs say "Substance" chapter; section is `sp-ingredients-spotlight` — documented but not unified |
| Legacy `band` presentation on metrics | **Medium** | Still default schema path for non-supplement demos |

---

### Documentation Architecture

**Files reviewed:** All `docs/*.md` governance files.

| Doc | Status |
|-----|--------|
| `PULSEOPS-ARCHITECTURE-v1.md` | ✅ Current — LOCKED |
| `ARCHITECTURE-FREEZE-REVIEW.md` | ✅ Current |
| `pulseops-visual-system-v1.md` | ✅ Synced (Community owner) |
| `chapter-identity.md` | ✅ Synced to frozen status |
| `LAUNCH-CHECKLIST.md` | ✅ Current; Phase IV next step documented |
| `RELEASES.md` | ✅ Current |
| `editorial-system.md` | ⚠️ Taxonomy table still uses legacy chapter numbers |
| `editorial-art-direction.md` | ⚠️ Not re-audited line-by-line — may predate 7.2 composition |
| `SP-IMAGE-EXPERIENCE.md` | ✅ **Fixed** — removed deleted `sp-image-class` reference |

**Stale references:** Sprint 7.x history in RELEASES/LAUNCH-CHECKLIST is intentional audit trail — not stale.

---

### Naming Consistency

**Three naming layers (intentional but confusing)**

| Layer | Example | Where |
|-------|---------|-------|
| **Platform / editorial** | Community Confidence | Architecture docs, merchant copy |
| **Implementation** | `sp-metrics`, `SP Metrics` | File names, schema |
| **Presentation** | `editorial_story` | Section settings |

**Key mismatches**

| Editorial name | Implementation name | Schema label | Severity |
|----------------|---------------------|--------------|----------|
| Community Confidence | `sp-metrics` | SP Metrics | **High** |
| Formulation Philosophy | `sp-editorial-differentiation` | SP Why Choose | **High** |
| Substance / Ingredients | `sp-ingredients-spotlight` | SP Ingredients Spotlight | **Medium** |
| Scientific Confidence | `sp-quality-standards` | SP Quality Standards | **Medium** |
| Human Proof | `sp-social-proof` | SP Social Proof | **Medium** |

**Justified:** Implementation names are stable API surface — renaming files would break templates. **Fix path:** schema `name` + preset labels only.

---

## Issue Table

| ID | Severity | Location | Why it matters | Recommended fix | Risk |
|----|----------|----------|----------------|-----------------|------|
| C-01 | **Critical** | `templates/index.*.json` (non-supplement) | Architecture v1 only on Supplement; platform rule violated for 9 demos | Demo Pack Migration sprint | High |
| C-02 | **High** | CSS: section + composition dual paths | Cascade debugging hard; Phase IV typography may fight overrides | Incremental CSS consolidation | Medium |
| C-03 | **High** | Schema names: metrics, differentiation | Merchant editor confusion | Update schema `name` strings + docs | Low |
| C-04 | **High** | `sp-scientific-proof` in product templates | Legacy trust pattern vs frozen IA | Migrate with demo packs | Medium |
| L-01 | **Medium** | `sp-editorial-system.css` legacy image-led | Dead code weight (~200 lines guarded) | Remove after confirming no demo uses image-led | Low |
| L-02 | **Medium** | 5× separate IntersectionObserver JS | Maintenance duplication | Shared observer utility (deferred) | Medium |
| L-03 | **Medium** | Hero CSS `!important` density | Hard to override safely in Phase IV | Typography sprint scoped overrides | Low |
| L-04 | **Medium** | `sp-features.liquid` unused variable | Theme Check warning | Remove unused assign | Low |
| L-05 | **Medium** | Metrics `band` vs `editorial_story` split | Two presentation codepaths | Deprecate band when demos migrate | Medium |
| T-01 | **Low** | `index.supplement.json` orphan blocks | Editor noise, JSON bloat | **Fixed** | None |
| T-02 | **Low** | Disabled `sp-scientific-proof` in supplement order | Editor ghost section | **Fixed** — removed | None |
| S-01 | **Low** | `snippets/sp-image-class.liquid` orphan | Dead code | **Fixed** — deleted | None |
| D-01 | **Low** | `editorial-art-direction.md` age | May predate composition archetypes | Doc sync in craftsmanship sprint | None |
| N-01 | **Cosmetic** | Dawn `component-*.css` bulk | Inherited Theme Store base | Ignore | None |

---

## Quick Wins (Applied This Sprint)

| Fix | File(s) | Impact |
|-----|---------|--------|
| Removed deprecated `sp-scientific-proof` section + order entry | `templates/index.supplement.json` | Zero render change; cleaner theme editor |
| Removed orphan blocks (empty hero chips, trust points, commitments, metric-4) | `templates/index.supplement.json` | Zero render change; smaller JSON |
| Deleted unreferenced `sp-image-class.liquid` | `snippets/` | Removes Theme Check orphan; zero render change |
| Updated `SP-IMAGE-EXPERIENCE.md` | `docs/` | Doc consistency |
| Added audit to docs index | `docs/README.md` | Discoverability |

---

## Deferred Refactors (Intentionally Not Changed)

| Refactor | Why deferred |
|----------|--------------|
| Migrate all vertical `index.*.json` to Architecture v1 | Behavior change across 9 demos; requires content + QA per vertical |
| Rename section files (`sp-metrics` → etc.) | Breaks all templates, presets, CSS selectors |
| Consolidate CSS into composition-only layer | Large diff; Phase IV typography needs stable baseline first |
| Extract shared CTA/image Liquid snippets | Architecture change; no user-visible bug |
| Remove `sp-scientific-proof.liquid` section file | Still used by legacy demo templates |
| Consolidate JS IntersectionObservers | No bug; refactor-only |
| Remove hero `!important` layer | Risk of hero regression; hero is frozen |
| Schema/preset merchant label pass | Merchant Experience track — not hygiene |
| `editorial-art-direction.md` full rewrite | Craftsmanship doc sync — not blocking |

---

## Validation

| Check | Result |
|-------|--------|
| Theme Check | 252 files, **0 errors**, 10 warnings (was 11; `sp-image-class` orphan resolved) |
| `git diff --check` | Clean |
| Homepage render path | Unchanged — same sections, order, copy |
| Architecture v1 | Intact — no chapter/order/journey changes |
| Buyer journey | Intact |

---

## Recommendation

Proceed to **Phase IV — Craftsmanship · Sprint IV.1 Typography Language** on the **Supplement canonical demo** (`#183028121915`).

Schedule **Demo Pack Migration** as a parallel platform track before treating non-Supplement verticals as Architecture v1-compliant.

---

*Phase III.5 — Codebase Hygiene & Systems Audit. Governs engineering hygiene; does not amend Architecture v1.*
