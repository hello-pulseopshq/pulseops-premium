# 04 — Dead Code Report

**Sprint:** AH-1  
**Rule:** Classify only — **no deletions**  
**Confidence:** High / Medium / Low / Unknown

---

## Summary

| Category | High | Medium | Low | Unknown |
|----------|-----:|-------:|----:|--------:|
| CSS | 8 | 14 | 12 | 6 |
| Liquid sections | 2 | 8 | 4 | 2 |
| Snippets | 1 | 4 | 3 | 2 |
| JS | 0 | 2 | 1 | 1 |
| Tokens | 3 | 6 | 8 | — |

---

## Potential dead CSS

### High confidence

| Asset | Evidence | Notes |
|-------|----------|-------|
| `sp-editorial-system.css` Human Story blocks targeting `.sp-social-proof__human-story-*` | Active template uses `sp-hs-ep-*` via editorial-portrait snippet; grep shows 15 legacy refs in editorial-system vs 30 in legacy human-story.css | Rules never match live DOM on `index.supplement.json` |
| `sp-social-proof-stage.css` on canonical homepage | `presentation: human_story` branch loads human-story CSS, not stage; `layout_style: stage` unused | 261 lines not loaded |
| `sp-supplement.css` `.sp-social-proof--stage` `:has()` blocks (~12 refs) | Stage presentation not active on supplement homepage | Dead for canonical demo |
| `sp-composition-system.css` `.sp-composition--gallery-immersion` for ingredients | Ingredients Liquid missing `sp-composition` class on root | Archetype defined but not wired |
| `sp-editorial-system.css` `:not(.sp-composition--gallery-immersion)` guards | Guard protects path that isn't active | Legacy pre-7.2 |
| `sp-metrics.css` band presentation rules guarded by absence of `--editorial-story` | Still needed if `presentation: band` used elsewhere | **High for supplement homepage**; Medium globally |
| `sp-social-proof-human-story.css` partial orphan | Loaded alongside portrait CSS; some rules duplicated/superseded | Both files load on every human_story render |

### Medium confidence

| Asset | Evidence |
|-------|----------|
| `section-sp-results.css` | Section exists; not in `index.supplement.json` |
| `sp-editorial-system.css` metrics band `:not(.sp-metrics--editorial-story)` adjacent rules | Legacy band path |
| `sp-supplement.css` feature demo `:has(img[src*='daily-vitality'])` rules | Demo-specific asset coupling |
| `sp-ingredients-spotlight.css` rules duplicated in editorial-system | One copy effectively dead per property |
| `sp-vertical-presets.css` rules when preset not active | Conditional on html class |
| `assets/sp-social-proof-stage.css` grid/stage layout | Used only when `layout_style: stage` + non-human_story |
| `section-sp-sticky-atc.css` | Not on homepage; product pages only |
| Hero floating cards CSS in `section-sp-hero.css` | Template may omit blocks |
| `sp-editorial-differentiation.css` split_proof branch styles | Template uses philosophy_manifesto |
| `sp-quality-standards.css` split branch | Template uses scientific_confidence |
| Composition linear-manifesto rules for non-manifesto presentations | Guarded by Liquid class |
| `sp-commerce-premium.css` feature card emphasis | Homepage doesn't use sp-features |
| `sp-storefront-polish.css` collection rules | Homepage is index template |
| `sp-before-after`, `sp-comparison`, `sp-ugc` section CSS if any | Sections not in supplement template |

### Low confidence

| Asset | Evidence |
|-------|----------|
| Dawn `component-*.css` not loaded on homepage | Conditional in theme.liquid — needed on other pages |
| `sp-motion.css` reveal animations on supplement | Disabled by supplement.css — motion rules inert |
| Duplicate `--sp-es-*` alias blocks | Redundant but harmless |
| `sp-trust-icons` styling in supplement | Product page only |
| Multiple `--media-radius` definitions | Cascade-resolved |

### Unknown

| Asset | Why unknown |
|-------|-------------|
| `sections/sp-scientific-proof.liquid` CSS inline blocks | Still used in 10+ legacy demo templates |
| `sp-benefits`, `sp-features` section styling in supplement.css | Legacy demos + product pages |
| `snippets/sp-social-proof-stage.liquid` | May render in merchant-customized templates |
| Portrait vs legacy human-story CSS overlap extent | Requires computed-style diff per branch |

---

## Dead Liquid (sections)

### High confidence

| Section | Status on canonical supplement |
|---------|-------------------------------|
| `sp-scientific-proof.liquid` | **Not in** `index.supplement.json` — replaced by `sp-quality-standards` |

### Medium confidence (not on supplement homepage, active elsewhere)

| Section |
|---------|
| `sp-benefits.liquid` |
| `sp-features.liquid` |
| `sp-before-after.liquid` |
| `sp-comparison.liquid` |
| `sp-bundles.liquid` |
| `sp-guarantee.liquid` |
| `sp-how-it-works.liquid` |
| `sp-problem.liquid` |
| `sp-results.liquid` |
| `sp-trust-icons.liquid` |
| `sp-ugc.liquid` |
| `sp-video.liquid` |
| `sp-featured-in.liquid` |

### Low confidence

| Section | Notes |
|---------|-------|
| `sp-sticky-atc.liquid` | Product template only — valid |
| `sp-metrics.liquid` band branch | Valid for legacy demos using `presentation: band` |

---

## Dead snippets

### High confidence

| Snippet | Evidence |
|---------|----------|
| `sp-social-proof-human-story.liquid` | `sp-social-proof.liquid` uses editorial-portrait snippet for human_story presentation on supplement template |

### Medium confidence

| Snippet | Evidence |
|---------|----------|
| `sp-social-proof-stage.liquid` | Stage branch not active on canonical homepage |
| `sp-hero-floating-cards.liquid` | Conditional on hero settings |
| `sp-hero-logos.liquid` | Conditional on hero settings |
| `sp-cta-trust-row.liquid` | Empty CTA labels on several supplement sections |

### Low confidence

| Snippet | Notes |
|---------|-------|
| `sp-vertical-footer-nav.liquid` | May be layout-dependent |
| `sp-cart-shipping-bar.liquid` | Cart context only |

---

## Unused utilities / modifiers

| Utility / modifier | Confidence | Evidence |
|--------------------|------------|----------|
| `sp-composition--gallery-immersion` on ingredients | **High** | Class not in Liquid markup |
| `sp-metrics--editorial-story` on legacy demos | Medium | Demos use band presentation |
| `sp-editorial-chapter--cinematic` on ingredients | Medium | Class not on supplement ingredients root |
| `sp-section--surface-alternate` on several chapters | Low | Template defaults to `default` |
| `sp-social-proof--stage` modifier | **High** | human_story presentation active |
| `layout_style: stage` in template JSON | **High** | Superseded by presentation setting |
| `sp-editorial-differentiation--split-proof` | Medium | philosophy_manifesto active |
| `sp-quality-standards--split` branch | Medium | scientific_confidence active |

---

## Unused tokens (candidates)

### High confidence

| Token | Location | Evidence |
|-------|----------|----------|
| `--sp-voice-collective-measure: 16ch` | typography-language | Overridden by metrics.css for Community Confidence |
| `--sp-is-gap-matrix-to-commitment` | editorial-system | Ingredients-specific; verify usage |
| Legacy image-led tokens under `:not(.sp-composition--gallery-immersion)` | editorial-system | Guard path inactive |

### Medium confidence

| Token | Notes |
|-------|-------|
| `--sp-proof-chapter-max` | supplement.css — verify consumers |
| `--sp-supplement-section-gap` | Minimal usage |
| `--sp-es-chapter-gap-cinematic` | Not all cinematic classes used |
| `--sp-vertical-visual-neutral` presets | Conditional |
| `--sp-hero-floating-*` | Hero optional blocks |

### Low confidence

| Token | Notes |
|-------|-------|
| `--sp-supplement-gold`, `--sp-supplement-amber` | May be reserved for future craft |
| `--sp-surface-stage-*` | Stage presentation |
| Coffee/pet/skincare preset tokens in vertical-presets | Other verticals |

---

## Obsolete utilities

| Item | Confidence | Detail |
|------|------------|--------|
| `#sp-science` anchor in menus | **High** | Page uses `#sp-quality`; nav stale |
| `sp-scientific-proof` in `sp-section-hierarchy-open` case | Medium | Still valid for legacy templates |
| `docs/chapter-identity.md` references to scientific-proof as homepage chapter | **High** | IA drift vs implementation |
| `section-sp-hero.css` comment deferring to `sp-supplement.css` | **High** | Wrong file — should be `sp-supplement-hero.css` |

---

## Duplicate utilities (not dead but redundant)

| Pattern | Files | Confidence |
|---------|-------|------------|
| Shell tone modifiers `--tone-soft`, `--tone-default` | 4 section CSS files | High |
| `{%- style -%}` section padding blocks | 10+ sections | High |
| Handoff gap tokens | editorial-system + section CSS | Medium |
| Proof moment divider borders | metrics CSS duplicated logic at 750px and 990px | Medium |

---

## Classification methodology

1. **Template reach** — Is file/branch referenced in `index.supplement.json` or supplement head?
2. **DOM class match** — Do CSS selectors match rendered Liquid classes?
3. **Load path** — Is CSS loaded via `stylesheet_tag` for active presentation?
4. **Cross-ref grep** — Reference count across repo
5. **Confidence downgrade** if used in legacy demo templates (still merchant-facing)

---

## Safe investigation before deletion (future sprint)

1. Grep entire repo for selector/class name
2. Search all `templates/*.json` for section types and settings
3. Computed-style audit at 390/1440 for each presentation branch
4. Theme editor schema — are presentation options still exposed?
5. Never delete on High confidence alone if legacy demos reference item

---

## Estimated dead weight (approximate)

| Category | Lines (estimate) | Notes |
|----------|----------------:|-------|
| Orphan editorial-system human-story rules | ~90 | High confidence |
| Stage CSS + supplement stage :has() | ~320 | Canonical homepage |
| Gallery-immersion unused composition | ~80 | Composition file |
| Legacy demo-only section branches | ~2000+ | Intentional until demo migration |
| Duplicate ingredients layout | ~70 | One copy redundant |

**Do not remove in AH-1.** Quantify only.
