# 06 — File Responsibility Matrix

**Sprint:** AH-1  
**Scope:** Implementation files — purpose, allowed ownership, current ownership, violations  
**Legend:** ✓ aligned · ⚠ partial · ✗ violation

---

## Governance documents (read-only reference)

| File | Purpose | Modify in cleanup? |
|------|---------|-------------------|
| `docs/pulseops-production-constitution.md` | Supreme governance | **Never** |
| `docs/pulseops-production-playbook.md` | Workflow | **Never** |
| `docs/pulseops-design-system.md` | Language stack hierarchy | **Never** |
| `docs/PULSEOPS-ARCHITECTURE-v1.md` | Frozen IA + chapter roles | **Never** |
| `docs/TYPOGRAPHY-LANGUAGE-FOUNDATION.md` | Voice tokens | **Never** |
| `docs/SURFACE-LANGUAGE-FOUNDATION.md` | Surface tokens | **Never** |
| `docs/pulseops-implementation-quality-rules.md` | Cascade validation rules | **Never** |
| `docs/CODEBASE-HYGIENE-AUDIT-v1.md` | Prior hygiene baseline | Reference only |

---

## Layout & config

| File | Purpose | Allowed ownership | Current | Violations |
|------|---------|-----------------|---------|------------|
| `layout/theme.liquid` | Global head, body class, SP boot | Load order, snippet renders | Global CSS chain + supplement head | ⚠ Large conditional Dawn CSS |
| `snippets/sp-supplement-head.liquid` | Supplement vertical CSS stack | Language file order only | 8 CSS files | ✓ |
| `snippets/sp-root-tokens.liquid` | `:root` design tokens | Token primitives | Single injection | ✓ |
| `snippets/sp-pack-registry.liquid` | Vertical pack resolution | Routing logic | Resolves head snippet | ✓ |
| `snippets/sp-section-hierarchy-open.liquid` | Section shell + anchor | Width, surface, divider classes | Anchor map + defaults | ⚠ Missing hero anchor |
| `snippets/sp-section-hierarchy-close.liquid` | Close shell | Markup only | ✓ | ✓ |
| `config/menus/supplement-main-menu.json` | Nav links | URL targets | `#sp-science` stale | ✗ Anchor drift |

---

## Homepage sections (canonical supplement)

### Hero — `sections/sp-hero.liquid`

| Aspect | Detail |
|--------|--------|
| **Purpose** | Product introduction, primary conversion |
| **CSS loaded** | `section-sp-hero.css` |
| **Global CSS** | `sp-supplement-hero.css`, `sp-image-experience.css` |
| **Primary owner** | `sp-supplement-hero.css` (frozen) |
| **Secondary** | `section-sp-hero.css` |
| **Unexpected** | Dawn `base.css`, 158× `!important` stack |
| **Allowed** | Hero owns canvas, media, CTA, headline |
| **Violations** | ✗ Dual hero CSS war; ✗ No `#sp-hero` anchor; ⚠ Stale defer comment in section-sp-hero.css |
| **Legacy deps** | Hero snippet partials (8 snippets) |

---

### Editorial Outcomes — `sections/sp-editorial-outcomes.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-editorial-outcomes.css` |
| **Composition** | `sp-composition--split-transformation` |
| **Primary owner** | Section CSS + composition |
| **Secondary** | editorial-system (`#sp-outcomes`), typography (confident voice) |
| **Violations** | ⚠ ID padding handoff; ⚠ Shell tone duplicated pattern |
| **Anchor** | `#sp-outcomes` |

---

### Ingredients — `sections/sp-ingredients-spotlight.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-ingredients-spotlight.css` |
| **Composition** | **Missing** `sp-composition--gallery-immersion` |
| **Primary owner** | Section CSS (should be sole layout owner) |
| **Secondary** | editorial-system (duplicate image-led), typography (documentary) |
| **Unexpected** | Hero body tokens in section CSS |
| **Violations** | ✗ Layout duplicated in editorial-system; ✗ Composition archetype not applied |
| **Anchor** | `#sp-ingredients` |

---

### Community Confidence — `sections/sp-metrics.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-metrics.css` |
| **Presentation** | `editorial_story` |
| **Composition** | `sp-composition--typographic-band` |
| **Primary owner** | `sp-metrics.css` (post cascade-fix) |
| **Secondary** | composition-system, editorial-system, typography-language |
| **Violations** | ⚠ Was ✗ triple ownership — partially remediated |
| **Anchor** | `#sp-community` |
| **Case study** | `.audit/community-confidence-cascade-audit-report.md` |

---

### Formulation Philosophy — `sections/sp-editorial-differentiation.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-editorial-differentiation.css` |
| **Presentation** | `philosophy_manifesto` |
| **Composition** | `sp-composition--linear-manifesto` |
| **Primary owner** | Section CSS + composition |
| **Secondary** | editorial-system, typography (manifesto voice) |
| **Violations** | ⚠ Supplement polish in editorial-system; split_proof branch dead on homepage |
| **Anchor** | `#sp-differentiation` |

---

### Quality Standards — `sections/sp-quality-standards.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-quality-standards.css` |
| **Presentation** | `scientific_confidence` |
| **Composition** | `sp-composition--evidence-panel` |
| **Primary owner** | Section CSS + composition |
| **Secondary** | editorial-system, typography (precise voice) |
| **Violations** | ⚠ Hero ink tokens; ⚠ Nav `#sp-science` mismatch |
| **Anchor** | `#sp-quality` |

---

### Human Story — `sections/sp-social-proof.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-social-proof-human-story.css`, `sp-social-proof-human-story-editorial-portrait.css` |
| **Presentation** | `human_story` + `editorial_portrait` |
| **Primary owner** | Portrait CSS (active) |
| **Secondary** | editorial-system (legacy selectors), supplement (stage :has — inactive) |
| **Violations** | ✗ Legacy CSS + editorial rules orphaned; ✗ Dual CSS files loaded |
| **Anchor** | `#sp-reviews` |

---

### FAQ — `sections/sp-faq.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | **Inline `{%- style -%}` only** |
| **Composition** | None |
| **Primary owner** | Inline styles (de facto) |
| **Secondary** | editorial-system accordion overrides, supplement heading scale |
| **Violations** | ✗ No section CSS asset; ✗ Dual ownership; ⚠ Contained width unlike peers |
| **Anchor** | `#sp-faq` |

---

### Future Self — `sections/sp-cta-offer.liquid`

| Aspect | Detail |
|--------|--------|
| **CSS** | `sp-cta-offer-future-self.css` |
| **Presentation** | `future_self` |
| **Snippet** | `sp-cta-offer-future-self.liquid` |
| **Primary owner** | Section CSS + snippet |
| **Secondary** | typography-language (headline lock), editorial-system (`:has()` bleed) |
| **Violations** | ⚠ Headline split across typography + section |
| **Anchor** | `#sp-cta` |

---

## CSS system files

| File | Allowed ownership | Current | Status |
|------|-------------------|---------|--------|
| `sp-vertical-presets.css` | Vertical preset modes | Preset chrome | ✓ |
| `sp-supplement.css` | Brand palette, header, vertical tokens | + per-section `:has()` fixes | ⚠ |
| `sp-typography-language.css` | Voice tokens + editorial-type variants | + Future Self lock | ✓ |
| `sp-surface-language.css` | Surface tokens | Token aliases | ✓ |
| `sp-editorial-system.css` | Primitives, handoffs | + 6 chapter polish blocks | ✗ |
| `sp-composition-system.css` | Archetype silhouettes | + metrics internals | ⚠ |
| `sp-supplement-type.css` | Type primitives | Global supplement type | ✓ |
| `sp-supplement-hero.css` | Hero/header frozen SSoT | Hero warfare | ⚠ intentional |
| `sp-visual-hierarchy.css` | Section shell utilities | Shell only | ✓ |
| `sp-motion.css` | Motion utilities | Disabled on supplement | ⚠ |
| `sp-image-experience.css` | Media frames | Media only | ✓ |
| `sp-commerce-premium.css` | Commerce UX | Commerce surfaces | ✓ |
| `sp-storefront-polish.css` | Collection polish | Storefront | ✓ |

---

## JavaScript

| File | Purpose | Allowed | Violations |
|------|---------|---------|------------|
| `assets/sp-vertical-routing.js` | Vertical html class | Routing | ✓ |
| `assets/sp-anchor-nav.js` | Scroll spy / anchor fallback | Nav behavior | ⚠ Omits `#sp-community`; stale `#sp-science` |
| `assets/sp-motion.js` | Motion controller | Animation | ✓ (disabled on supplement) |
| Dawn JS bundles | Cart, facets, etc. | Commerce | ✓ inherited |

---

## Templates

| File | Purpose | Architecture alignment |
|------|---------|------------------------|
| `templates/index.supplement.json` | **Canonical** Architecture v1 homepage | ✓ Frozen IA |
| `templates/index.{coffee,pet,skincare,...}.json` | Legacy demo packs | ✗ Pre-v1 (`sp-scientific-proof`, benefits stack) |
| `templates/product.supplement.json` | Product page | Legacy SP stack |

---

## Audit artifacts (meta)

| File | Purpose |
|------|---------|
| `.audit/architecture-hygiene/*` | This sprint |
| `.audit/community-confidence-cascade-audit.mjs` | Cascade validation harness |
| `.audit/community-confidence-cascade-audit-report.md` | Validated case study |

---

## Violation summary by file

| File | Violation count | Severity |
|------|----------------|----------|
| `sp-editorial-system.css` | 8+ | Critical |
| `sp-supplement.css` | 5+ | High |
| `sp-metrics.css` + composition + editorial (combined) | 6+ | Critical (partially fixed) |
| `sp-ingredients-spotlight.css` + editorial-system | 3+ | High |
| `sp-faq.liquid` | 2+ | High |
| `sp-social-proof*.css` + editorial-system | 4+ | High |
| `section-sp-hero.css` + sp-supplement-hero.css | 2+ | High |
| `config/menus/supplement-main-menu.json` | 1 | Medium |

---

## Architecture compliance score by chapter

| Chapter | Liquid | CSS ownership | Cascade | Overall |
|---------|--------|---------------|---------|---------|
| Hero | ⚠ | ✗ | ✗ | 5/10 |
| Outcomes | ✓ | ⚠ | ⚠ | 7/10 |
| Ingredients | ⚠ | ✗ | ✗ | 5/10 |
| Community Confidence | ✓ | ⚠ (improving) | ⚠ | 6/10 |
| Philosophy | ✓ | ⚠ | ⚠ | 7/10 |
| Quality | ✓ | ⚠ | ⚠ | 7/10 |
| Human Story | ⚠ | ✗ | ⚠ | 5/10 |
| FAQ | ⚠ | ✗ | ⚠ | 4/10 |
| Future Self | ✓ | ⚠ | ⚠ | 7/10 |

**Platform mean: 5.9 / 10** for CSS ownership compliance on canonical homepage.
