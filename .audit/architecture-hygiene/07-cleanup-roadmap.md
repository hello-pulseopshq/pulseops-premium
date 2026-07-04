# 07 — Cleanup Roadmap

**Sprint:** AH-1 (planning only — no implementation)  
**Principle:** Adapt implementation to frozen governance; highest cascade risk first  
**Reference case study:** Community Confidence cascade fix sprint (validated pattern)

---

## Phase overview

| Phase | Focus | Risk | Effort | Depends on |
|-------|-------|------|--------|------------|
| **0** | Validation infrastructure | Low | 1–2 days | — |
| **1** | Cascade hotfixes (proven pattern) | Medium | 3–5 days | Phase 0 |
| **2** | Editorial system decomposition | **High** | 5–8 days | Phase 1 |
| **3** | Section CSS consolidation | High | 8–12 days | Phase 2 |
| **4** | Dead code retirement | Medium | 4–6 days | Phase 3 |
| **5** | Demo pack migration | Medium | 10–15 days | Phase 3 |
| **6** | Hero override reduction | **Critical** | 5–10 days | Separate track |
| **7** | Merchant/nav alignment | Low | 2–3 days | Phase 1 |

**Total estimated effort:** 38–61 dev-days (can parallelize Phase 6)

---

## Phase 0 — Validation infrastructure (LOWEST RISK, DO FIRST)

**Goal:** No CSS merge without computed-style proof.

### Tasks

1. Generalize `.audit/community-confidence-cascade-audit.mjs` into chapter-agnostic harness template
2. Add harness targets for all 9 homepage chapters at 390 / 900 / 1440 / 2000px
3. Document CSS chain per vertical in harness config
4. CI gate: `shopify theme check --fail-level error` + cascade harness on PR
5. Baseline snapshot JSON for supplement homepage (visual parity reference)

### Exit criteria

- Harness covers all canonical chapters
- Baseline committed to `.audit/baselines/supplement-homepage-v1.json`
- Team agrees: no CSS cleanup PR without harness diff

**Effort:** 1–2 days  
**Risk:** Low  
**Blocks:** Everything else

---

## Phase 1 — Cascade hotfixes (HIGHEST ROI, PROVEN)

**Goal:** Fix ownership conflicts that make refinement sprints appear to fail.

**Pattern:** Community Confidence cascade fix — remove duplicate/conflicting rules; single owner per property; no redesign.

### Priority queue (risk × impact)

| # | Target | Action type | Risk |
|---|--------|-------------|------|
| 1.1 | All `#sp-*` padding ID overrides in editorial-system | Remove; preserve merchant `{%- style -%}` | Medium |
| 1.2 | Wide vs contained in sp-supplement.css | ✓ Done for Community Confidence sprint — verify other sections | Low |
| 1.3 | Per-chapter headline/measure duplicates | Consolidate to section CSS owner | Medium |
| 1.4 | Metrics band vs editorial_story | Document file regions; add `:not()` audit | Medium |
| 1.5 | Nav anchor `#sp-science` → `#sp-quality` | Config-only | Low |
| 1.6 | Add `#sp-community` to anchor nav (optional product decision) | JS + menu | Low |

### Exit criteria

- No ID selector overrides merchant section padding
- Each presentation has documented single owner file per property class
- Harness PASS for all chapters

**Effort:** 3–5 days  
**Risk:** Medium (regression if harness incomplete)  
**Depends on:** Phase 0

---

## Phase 2 — Editorial system decomposition (HIGHEST ARCHITECTURAL RISK)

**Goal:** Stop `sp-editorial-system.css` from being shadow section CSS.

### Approach (safest order)

1. **Inventory** supplement blocks in editorial-system by chapter (already in report 06)
2. **Move** chapter polish to respective section CSS files (not new god-file)
3. **Retain** in editorial-system only:
   - `.sp-editorial-chapter` tokens
   - `.sp-editorial-type--*` primitives
   - `.sp-editorial-cta--*` primitives
   - Cross-chapter handoff tokens (not ID padding)
4. **Delete** moved blocks from editorial-system one chapter at a time with harness gate

### Chapter order (safest → riskiest)

| Order | Chapter | Reason |
|------:|---------|--------|
| 1 | FAQ | Smallest surface; inline CSS → extract asset first |
| 2 | Formulation Philosophy | Clean composition ownership |
| 3 | Quality Standards | Similar to philosophy |
| 4 | Editorial Outcomes | Moderate editorial-system presence |
| 5 | Community Confidence | Recently audited; metrics owner clarified |
| 6 | Ingredients | **High** — must dedupe not move duplicates |
| 7 | Human Story | **High** — class migration + portrait CSS |
| 8 | Future Self | `:has()` bleed shell rules |
| 9 | Hero | **Do not touch in this phase** — separate Phase 6 |

### Exit criteria

- editorial-system.css reduced to ≤500 lines (primitives + tokens only)
- Zero duplicate selectors between editorial-system and any section CSS
- Harness PASS all chapters

**Effort:** 5–8 days  
**Risk:** **High**  
**Depends on:** Phase 1 complete

---

## Phase 3 — Section CSS consolidation (HIGH RISK)

**Goal:** One primary owner per chapter; composition owns silhouette only.

### Tasks

1. Extract shared shell tone utility (single `--sp-chapter-shell-tone-*` pattern)
2. Wire Ingredients `sp-composition--gallery-immersion` OR remove unused composition rules
3. Split `sp-metrics.css` into documented regions: band / editorial_story
4. Extract FAQ inline styles → `sp-faq.css` section asset
5. Unify hero body tokens → neutral `--sp-type-body-ink` references (rename, alias old tokens)

### Exit criteria

- Every section has dedicated CSS asset
- Composition file contains zero font-size / color declarations on section BEM
- Typography language is sole voice owner via classes (section CSS stops duplicating font-size on classified elements)

**Effort:** 8–12 days  
**Risk:** High  
**Depends on:** Phase 2

---

## Phase 4 — Dead code retirement (MEDIUM RISK)

**Goal:** Remove confirmed orphan CSS/Liquid without breaking legacy demos.

### Order (by confidence)

| Step | Target | Confidence |
|------|--------|------------|
| 4.1 | editorial-system human-story legacy selectors | High |
| 4.2 | supplement.css stage `:has()` blocks (if stage retired on supplement) | High |
| 4.3 | Unused gallery-immersion composition (if unwired) | High |
| 4.4 | `sp-social-proof-human-story.css` overlap with portrait | Medium |
| 4.5 | Band presentation CSS (only if band deprecated platform-wide) | Medium — **blocked** until product decision |
| 4.6 | Legacy `:not(.sp-composition--gallery-immersion)` guards | High |

### Exit criteria

- Dead code report items marked High → resolved or explicitly retained with comment
- CSS bundle size reduction measurable
- Legacy demo templates still pass theme check (if retained)

**Effort:** 4–6 days  
**Risk:** Medium  
**Depends on:** Phase 3 (avoid deleting still-referenced paths)

---

## Phase 5 — Demo pack migration (MEDIUM RISK, PLATFORM TRACK)

**Goal:** All vertical demos use Architecture v1 IA or are marked legacy/experimental.

### Tasks

1. Audit each `templates/index.*.json` against Architecture v1 chapter map
2. Migrate or deprecate `sp-scientific-proof` → `sp-quality-standards` pattern
3. Update product templates similarly
4. Update `docs/DEMO_PRESETS.md` with architecture alignment status
5. Theme editor labels → chapter identity names

**Effort:** 10–15 days  
**Risk:** Medium (merchant-facing if demos are published)  
**Depends on:** Phase 3 (stable section CSS)

---

## Phase 6 — Hero override reduction (CRITICAL, PARALLEL TRACK)

**Goal:** Reduce 158× `!important` hero pair without visual regression.

### Approach

1. Map every `!important` to Dawn rule it defeats
2. Increase specificity via structure selectors instead of `!important` where possible
3. Consolidate `section-sp-hero.css` + `sp-supplement-hero.css` ownership docs
4. Fix stale comment (sp-supplement.css → sp-supplement-hero.css)
5. Visual regression on hero at 390/1440 only — isolated harness

**Do not start until:** Dedicated hero harness + stakeholder sign-off on frozen hero craft

**Effort:** 5–10 days  
**Risk:** **Critical**  
**Depends on:** Phase 0 harness; independent of Phase 2–3

---

## Phase 7 — Merchant / nav alignment (LOW RISK)

| Task | Effort |
|------|--------|
| Fix `#sp-science` → `#sp-quality` in menus | 0.5 day |
| Align chapter-identity.md with quality-standards | 0.5 day |
| Evaluate `#sp-community` nav inclusion | Product decision |
| Schema labels → chapter names | 1 day |

**Effort:** 2–3 days  
**Risk:** Low

---

## Dependency graph

```
Phase 0 (harness)
    ↓
Phase 1 (hotfixes) ──→ Phase 7 (nav/docs)
    ↓
Phase 2 (editorial decompose)
    ↓
Phase 3 (section consolidate)
    ↓
Phase 4 (dead code)     Phase 5 (demo migration)
                            
Phase 6 (hero) ← parallel from Phase 0, independent
```

---

## What NOT to do in cleanup

1. **No big-bang CSS rewrite** — one chapter per PR
2. **No governance edits** — implementation adapts
3. **No redesign** — cascade ownership only
4. **No hero changes** in Phase 2–3
5. **No deleting band presentation** until demo migration decision
6. **No removing `!important`** without per-rule Dawn mapping

---

## Recommended first cleanup sprint (after AH-1 review)

**Sprint AC-1: Validation + Phase 1 remainder**

1. Generalize cascade harness (Phase 0)
2. Remove remaining `#sp-*` ID padding overrides (Phase 1.1)
3. Ingredients dedupe plan (prep for Phase 2 — analysis only in PR 1)
4. Nav anchor fix (Phase 7)

**Estimated:** 4–6 days  
**Risk:** Medium  
**Score impact:** 6.8 → 7.4

---

## Score projection

| Milestone | Overall score |
|-----------|--------------|
| Current (AH-1) | **6.8 / 10** |
| After Phase 0–1 | 7.4 |
| After Phase 2–3 | 8.0 |
| After Phase 4–5 | 8.5 |
| After Phase 6 (hero) | 8.7 |

**Target after full cleanup: 8.5 / 10** (10/10 unrealistic with Dawn inheritance)

---

## Effort summary

| Phase | Days | Cumulative |
|-------|-----:|-----------:|
| 0 | 1–2 | 2 |
| 1 | 3–5 | 7 |
| 2 | 5–8 | 15 |
| 3 | 8–12 | 27 |
| 4 | 4–6 | 33 |
| 5 | 10–15 | 48 |
| 6 | 5–10 | 58 |
| 7 | 2–3 | 61 |
