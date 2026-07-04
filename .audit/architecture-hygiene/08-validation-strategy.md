# 08 — Validation Strategy

**Sprint:** AH-1  
**Purpose:** Define how architectural cleanup must be validated before merge  
**Principle:** Cascade validation is mandatory — visual diff alone is insufficient

---

## Validation stack (ordered)

```
1. Static analysis (Theme Check, git diff --check)
        ↓
2. Cascade harness (computed styles, Playwright + CDP)
        ↓
3. DOM / template verification (classes, settings, anchors)
        ↓
4. Visual parity (screenshot diff — supplement homepage)
        ↓
5. Merchant configurability smoke test
        ↓
6. Accessibility regression
        ↓
7. Performance budget check
```

**Gate rule:** Failure at layer 2 blocks merge for any CSS ownership change.

---

## 1. Theme Check

### Command

```bash
shopify theme check --fail-level error
```

### Scope

- All Liquid, JSON templates, schema
- Run on every cleanup PR

### Pass criteria

- Zero errors
- Warnings triaged — no new warnings in touched files without justification

### Limitations

- Does **not** detect CSS cascade conflicts
- Does **not** validate computed styles
- FAQ inline CSS partially escapes asset analysis

---

## 2. Computed-style validation (PRIMARY)

### Reference implementation

`.audit/community-confidence-cascade-audit.mjs`

### Required expansion (Phase 0)

| Chapter | Selectors to probe | Properties |
|---------|-------------------|--------------|
| Hero | `.sp-hero`, shell inner | padding, max-width, font-size |
| Outcomes | `.sp-editorial-outcomes`, cards | gap, grid, heading measure |
| Ingredients | `#sp-ingredients`, hero split | max-width, grid, padding-top |
| Community | `#sp-community`, metrics grid | padding, columns, headline measure |
| Philosophy | `.sp-editorial-differentiation` | manifesto measure, gap |
| Quality | `.sp-quality-standards` | evidence grid, statement size |
| Human Story | `#sp-reviews`, `.sp-hs-ep-*` | quote size, layout columns |
| FAQ | `#sp-faq`, accordion | padding, background |
| Future Self | `#sp-cta`, headline | font-size, bleed width |

### Viewports (mandatory)

| Width | Purpose |
|------:|---------|
| 390px | Mobile |
| 900px | Tablet |
| 1440px | Desktop |
| 2000px | Wide vs contained differentiation |

### Per-property report fields

- Winning selector
- Source file + line
- Expected value (from baseline JSON)
- Actual computed value
- PASS / FAIL

### Baseline management

```
.audit/baselines/
  supplement-homepage-v1.json     ← canonical computed snapshot
  supplement-homepage-v1.diff     ← PR diff output
```

**Rule:** Cleanup PR must not change computed values outside declared intent document.

### CSS chain fidelity

Harness must load CSS in exact storefront order:

1. `theme.liquid` global stack
2. `sp-supplement-head.liquid` vertical stack
3. Section CSS in `index.supplement.json` order

---

## 3. Playwright visual parity

### Scope

- Supplement homepage only (`?view=supplement`)
- Full-page screenshots at 390 / 1440

### Pass criteria

- No unintended visual diff > 0.1% pixel threshold on chapter regions
- Intended changes documented in PR with before/after crops

### Chapter region crops

Define bounding boxes per `#sp-*` anchor for isolated diff.

### Limitations

- Cannot detect "wrong but pretty" cascade (e.g. accidental improvement)
- Pair with computed-style validation always

---

## 4. DOM / template verification

### Automated checks

```javascript
// Per chapter
assert(section.classList.contains('sp-section--width-wide'), 'wide mode');
assert(metrics.classList.contains('sp-metrics--editorial-story'), 'presentation');
assert(document.querySelector('#sp-community'), 'anchor present');
```

### Template JSON drift

- Compare `index.supplement.json` settings against harness DOM
- Flag: setting present in JSON but not reflected in computed style (Community Confidence padding case)

---

## 5. Merchant configurability smoke test

### Manual checklist (Theme Editor)

| Setting | Section | Verify |
|---------|---------|--------|
| `padding_top` / `padding_bottom` | Each chapter | Computed padding matches merchant value |
| `sp_width_mode` | Wide chapters | Inner max-width differs from contained at 2000px |
| `presentation` | metrics, social-proof, cta | Correct CSS branch loads |
| `content_alignment` | metrics, faq | Layout direction changes |
| Block add/remove | metrics, ingredients | Grid adapts without CSS break |
| `color_scheme` | All | Surface tokens apply |

### Architectural rule

**Any cleanup must not reduce schema-exposed settings without migration plan.**

---

## 6. Accessibility regression

### Tools

- axe-core via Playwright on supplement homepage
- Manual keyboard nav for FAQ accordion, anchor nav

### Focus areas after cleanup

| Area | Risk |
|------|------|
| FAQ accordion | Inline CSS + editorial override |
| Anchor nav | Missing `#sp-community` |
| Human Story portrait | Quote semantics, contrast |
| Future Self CTA | Focus ring on primary button |
| Motion disable | Supplement forces visible — OK for a11y |

### Pass criteria

- Zero new critical/serious axe violations
- No focus trap regressions

---

## 7. Performance budget

### Metrics (informational gate — not blocking Phase 1–2)

| Metric | Current estimate | Target post-cleanup |
|--------|-----------------|---------------------|
| SP CSS total (22 files) | ~7,500 lines | −15% after dead code |
| Homepage CSS requests | ~24 stylesheets | No increase |
| `!important` count (SP) | ~226 | −50% after hero phase |
| Inline FAQ CSS | ~N lines in Liquid | Extract to asset |

### Tools

- Chrome Coverage tab on supplement homepage load
- Lighthouse performance (secondary — editorial site is CSS-heavy by design)

### DOM complexity

- No cleanup should increase block depth
- Liquid dedupe must not expand render tree

---

## 8. Regression testing matrix

### By cleanup phase

| Phase | Theme Check | Harness | Visual | A11y | Merchant |
|-------|:-----------:|:-------:|:------:|:----:|:--------:|
| 0 Harness | ✓ | baseline | ✓ | ✓ | — |
| 1 Hotfixes | ✓ | ✓ | ✓ | ✓ | ✓ |
| 2 Editorial decompose | ✓ | ✓ | ✓ | ✓ | ✓ |
| 3 Section consolidate | ✓ | ✓ | ✓ | ✓ | ✓ |
| 4 Dead code | ✓ | ✓ | ✓ | — | — |
| 5 Demo migration | ✓ | per template | per template | ✓ | ✓ |
| 6 Hero | ✓ | hero-only | ✓✓ | ✓ | — |

---

## 9. PR requirements for cleanup sprints

Every Architecture Cleanup PR must include:

1. **Intent doc** — which cascade conflicts resolved (IDs from report 03)
2. **Harness output** — PASS for affected chapters
3. **Selectors removed/changed** — explicit list (Community Confidence fix pattern)
4. **Theme check** — pass
5. **Screenshots** — if any visual change expected
6. **Out of scope confirmation** — other chapters untouched

### PR title format

```
arch(cleanup): [chapter/system] — [one-line cascade fix]
```

---

## 10. Continuous validation (post-cleanup steady state)

### Required before any visual CSS merge (per `pulseops-implementation-quality-rules.md`)

1. Identify affected selector/property
2. Run harness at required breakpoints
3. Confirm winning cascade matches intended owner file
4. Attach evidence to PR

### Scheduled audits

| Audit | Frequency |
|-------|-----------|
| Full homepage harness | Each cleanup PR |
| Full platform AH-style audit | Quarterly |
| Dead code scan | After each phase |
| Demo template IA alignment | Before vertical launch |

---

## 11. Failure response protocol

| Failure type | Action |
|--------------|--------|
| Harness FAIL on intended change | Update baseline with documented approval |
| Harness FAIL unintended | Revert CSS change; re-audit cascade |
| Visual diff unintended | Block merge; run harness to find property |
| Theme check error | Fix before any other validation |
| Merchant setting ignored | Treat as Critical — same class as CC-01 |

---

## 12. Tooling roadmap

| Tool | Status | Next step |
|------|--------|-----------|
| `community-confidence-cascade-audit.mjs` | ✓ Exists | Generalize to all chapters |
| Baseline JSON store | ✗ Missing | Phase 0 |
| CI integration | ✗ Missing | GitHub Action on PR |
| Visual diff | Partial (manual) | Per-chapter crop automation |
| axe Playwright | ✗ Missing | Add to harness suite |
| CSS coverage | Manual | Script unused selector scan |

---

## Validation ownership

| Role | Responsibility |
|------|----------------|
| Cleanup PR author | Run harness + theme check; attach output |
| Reviewer | Verify selectors removed match report 03 IDs |
| QA | Merchant smoke + a11y on staging preview |
| Platform lead | Approve baseline updates |

---

## Success definition

Architectural cleanup is **validated** when:

1. All homepage chapters PASS harness at 4 viewports
2. `sp-editorial-system.css` contains no section BEM selectors (post Phase 2)
3. Zero ID selectors override merchant section padding
4. Each presentation has documented single CSS owner per property category
5. Theme check clean; no new a11y violations
6. Overall architecture score ≥ 8.5 / 10 on re-audit
