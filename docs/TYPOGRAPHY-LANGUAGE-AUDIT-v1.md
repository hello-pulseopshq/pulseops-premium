# Typography Language Audit v1

**Phase:** IV.1 — Typography Language (audit + proposal)  
**Date:** 2026-06-20  
**Status:** Audit only — no implementation  
**Canonical QA:** PulseOps Supplement Demo `#183028121915`  
**Architecture baseline:** `pulseops-architecture-v1` · `pulseops-phase-iii-complete`

**Authority chain:** [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md) (locked IA) → [`pulseops-visual-system-v1.md`](pulseops-visual-system-v1.md) §6 (typography system) → this audit → implementation sprint

**Scope:** Supplement homepage typography only. Composition silhouettes, chapter order, buyer journey, and copy are frozen.

---

## 1. Current Typography Diagnosis

PulseOps has **substantial typography infrastructure** but **incomplete editorial voice differentiation**. The supplement demo reads premium at Hero and Future Self, functional in the middle, and utility-whisper at FAQ/Footer — but **too many middle chapters share the same headline grammar** despite distinct composition archetypes.

### What exists today

| Layer | File | Role |
|-------|------|------|
| **Supplement type tokens** | `assets/sp-demo-supplement-type.css` | Global `--sp-type-*` scale, RTE, buttons, legacy section headings |
| **Editorial type helpers** | `assets/sp-editorial-system.css` | `--sp-es-type-*` + `.sp-editorial-type--*` classes |
| **Composition typography** | `assets/sp-composition-system.css` | Archetype-specific clamps (band proof values, manifesto rails, etc.) |
| **Hero isolation** | `assets/sp-demo-supplement-hero.css` | Massive display scale (`~5.5–9.8rem`) separate from editorial tokens |
| **Human story** | `assets/sp-social-proof-human-story.css` | Quote/portrait tokens (`--sp-hs-quote-size`) |
| **Future Self** | `assets/sp-cta-offer-future-self.css` | Finale headline/CTA overrides |
| **Section CSS** | `sp-*-*.css` per section | Local clamps, matrix labels, outcome cards |

### Core diagnosis

1. **Three competing token systems** — `--sp-type-*`, `--sp-es-type-*`, and composition-local `clamp()` values are not mapped to chapter voice.
2. **Voice collapse in the middle** — Community Confidence and Scientific Confidence share: `sp-editorial-type--statement`, `font-weight: 800`, `max-width: 16–18ch`, `--sp-supplement-green-deep` ink. They look like siblings, not distinct editorial beats.
3. **Chapter vs statement scale underused** — Outcomes and Ingredients both use `sp-editorial-type--chapter` (~3.85–5.8rem); Philosophy correctly uses `--statement` but still shares color/weight patterns with Community/Scientific.
4. **Hero is correctly isolated** — expressive scale works; frozen per hero policy. Future Self has its own finale CSS but `.sp-cta-offer__heading` still references `--sp-type-display-1` in supplement-type (potential conflict).
5. **Eyebrow system is consistent** — `sp-editorial-type--caption` (uppercase, 0.14em tracking) used across editorial chapters. Good foundation.
6. **FAQ/Footer correctly whisper** — utility scale already matches Visual System intent.
7. **Legacy band/metrics styles remain** — `sp-metrics__value` stat-scale rules and `sp-type-stat` token still imply KPI widget grammar; editorial proof moments inherit stat sizing from composition (`clamp(2.75rem, 3.6vw, 3.65rem)`).
8. **Measure discipline is partial** — Philosophy manifesto body (`38ch`), Scientific/Community headlines (`16ch`) show intent; Outcomes body (`40–42rem` px width) and Ingredients matrix use mixed px/ch units.

### Overall grade

| Dimension | Score | Notes |
|-----------|-------|-------|
| Token foundation | 7/10 | Exists but fragmented |
| Chapter voice differentiation | 5/10 | Middle collapse |
| Reading rhythm | 6/10 | Density OK; voice flat |
| Premium perception | 7/10 | Hero/finale strong; middle generic |
| Buyer-journey support | 6/10 | Copy roles clear; type roles lag |
| Maintainability | 5/10 | Rules spread across 6+ files |

---

## 2. Repeated Patterns (Problems)

| Pattern | Where | Impact |
|---------|-------|--------|
| **Green-deep display headlines** | Community, Philosophy, Scientific | Middle chapters feel like one trust family |
| **`sp-editorial-type--statement` + 16ch** | Community, Scientific | Same headline silhouette at different objections |
| **`sp-editorial-type--chapter`** | Outcomes, Ingredients | Correct scale tier but identical voice for different objections |
| **Stat-scale proof values** | Community band (`proof-value` clamps) | Editorial phrases still sized like KPI numerals |
| **Body at `1.55–1.85rem` / lh 1.6** | Outcomes, Ingredients, Philosophy body | Documentary and manifesto voices not differentiated |
| **Weight 800 headlines** | Most editorial chapters | One weight tier dominates; lacks emotional range |
| **Dual token naming** | `--sp-type-display-2` vs `--sp-es-type-chapter` | Developers/merchants cannot reason about hierarchy |
| **Section + editorial + composition overrides** | All middle chapters | Same property set in 2–3 files (hygiene audit C-02) |

---

## 3. Typography Hierarchy Map

### Target voice arc (from Visual System §6 — frozen intent)

```
SCROLL →  Hero          Outcomes       Ingredients    Community      Philosophy     Scientific     Human Proof    FAQ           Future Self    Footer
VOICE     EXPRESSIVE    CONFIDENT      DOCUMENTARY    COLLECTIVE     MANIFESTO      PRECISE        EMOTIONAL      QUIET         MINIMAL        WHISPER
SCALE     XL display    L chapter      L chapter      M statement    L statement    M statement    L quote        S utility     M display      XS links
MEASURE   narrow        medium         wide matrix    narrow band    wide manifesto medium process portrait       full          narrow         full
WEIGHT    800           700–800        500–600 body   700 moments    700–800        600–700        600 quote      500           650           500
COLOR     ink           ink            muted body     ink + whisper  ink            cool muted     warm quote     muted         inverse/light  muted
```

### Current vs target (summary)

| Chapter | Target voice | Current voice | Match |
|---------|--------------|---------------|-------|
| Hero | Expressive | Expressive (isolated hero CSS) | ✅ Strong |
| Editorial Outcomes | Confident | Chapter scale + warm body | ⚠️ Partial |
| Ingredients | Documentary | Chapter scale + matrix captions | ⚠️ Partial |
| Community Confidence | Collective | Statement + stat-scale moments | ❌ Weak |
| Formulation Philosophy | Manifesto | Statement + rail titles | ✅ Good |
| Scientific Confidence | Precise | Statement (same as Community) | ❌ Weak |
| Human Proof | Emotional | Quote system (human-story CSS) | ✅ Good |
| FAQ | Quiet | Utility scale | ✅ Strong |
| Future Self | Minimal | Future-self CSS (partial conflict) | ⚠️ Partial |
| Footer | Whisper | Supplement-type footer rules | ⚠️ Dawn inheritance |

---

## 4. Chapter-by-Chapter Issues

### 1 — Hero

| Attribute | Current | Issue | Buyer objection support |
|-----------|---------|-------|-------------------------|
| Heading scale | `clamp(5.45rem, 7.56vw, 9.24rem)` in hero CSS | Correctly expressive; frozen | ✅ "Why should I care?" — strong arrival |
| Heading voice | Weight implied via hero; tight tracking | Works | ✅ |
| Line-height | 0.95 | Appropriate for display | ✅ |
| Measure | `--sp-hero-headline-measure` | Controlled | ✅ |
| Body/subhead | `1.7–1.85rem`, lh 1.6, max 40rem | Readable but same body grammar as Outcomes | ⚠️ |
| Eyebrow | `1.1rem`, 0.12em tracking | Consistent caption system | ✅ |
| CTA | `1.5rem`, weight 800, pill | Clear conversion peak | ✅ |
| Distinct? | Yes — only chapter at hero scale | — | ✅ |
| Objection | — | Typography supports desire/clarity | ✅ |

**Verdict:** Strong. **Do not redesign hero typography** (frozen). Align downstream body tokens to defer to hero, not compete.

---

### 2 — Editorial Outcomes

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `sp-editorial-type--chapter` (~3.85–5.8rem), weight 800 | Same class as Ingredients |
| Body | `clamp(1.55–1.7rem)`, lh 1.6, max ~42rem | Reads documentary, not confident/lifestyle |
| Eyebrow | `sp-editorial-type--caption` | ✅ |
| Outcome cards | Title `1.6–1.85rem`, body `1.28rem` | Card typography competes with chapter headline |
| CTA | Quiet link via editorial-cta | ✅ |
| Distinct? | Partially — split layout helps; type voice overlaps Ingredients | |

**Buyer objection:** "How does this fit my life?" — needs **warm, confident, rhythmic** voice. Current body reads like explainer copy.

**Recommend:** Confident voice = slightly tighter headline measure, outcome card titles as **rhythm markers** (not second headlines), body one step lighter weight than Ingredients.

---

### 3 — Ingredients (Substance)

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `sp-editorial-type--chapter` | Same as Outcomes |
| Body | `1.55–1.85rem`, lh 1.6 | OK for transparency |
| Eyebrow | Caption uppercase | ✅ |
| Matrix | Name `1.38rem`, role italic, description `1.14–1.26rem` | Good caption hierarchy emerging |
| CTA | Quiet link "See full formula" | ✅ |
| Distinct? | Matrix density distinguishes; headline voice does not | |

**Buyer objection:** "What am I actually taking?" — needs **documentary, caption-led, precise**. Matrix typography is closest to target; chapter headline should feel **spec-sheet confident**, not marketing display.

**Recommend:** Documentary voice = slightly smaller headline tier than Outcomes OR same tier with cooler weight (700 not 800); matrix labels whisper more.

---

### 4 — Community Confidence

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `sp-editorial-type--statement` + `max-width: 16ch` + green-deep | Same grammar as Scientific |
| Subheading | Body-lg, 42ch, 0.78 opacity | OK |
| Proof moments | `proof-value` at `clamp(2.75rem, 3.6vw, 3.65rem)`, weight 800 | **Stat/KPI scale for editorial phrases** |
| Proof labels | `1.02–1.12rem`, max 12ch | Good whisper |
| Eyebrow | Caption | ✅ |
| Distinct? | Composition band helps; typography still KPI-adjacent | |

**Buyer objection:** "Will people like me stick with this?" — needs **collective, calm, habit language**. Stat-scale proof values undermine editorial habit framing (post-7.2b copy fix).

**Recommend:** Collective voice = **reduce proof-value scale** to statement/large-ui tier (not stat tier); sans-serif or mixed voice for moments; keep labels caption-whisper; headline ink returns to primary ink (not green-deep) OR shared accent used only once in middle.

---

### 5 — Formulation Philosophy

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `sp-editorial-type--statement`, 18ch, weight 800, green-deep | Strong manifesto |
| Body | Manifesto intro, muted 0.8 | ✅ |
| Principles | Title `clamp(1.65–1.95rem)`, text `1.28–1.42rem`, 38ch | Best chapter-specific hierarchy in middle |
| Closer | Muted caption-like | ✅ |
| Distinct? | Yes — rails + inset image + principle stagger | ✅ |

**Buyer objection:** "Why is this approach different?" — typography **mostly supports** manifesto role.

**Recommend:** Minor polish only — widen manifesto body measure slightly; ensure green-deep is **philosophy-only** in middle sequence (ownership color).

---

### 6 — Scientific Confidence

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `sp-editorial-type--statement`, 16ch, weight 800, green-deep | **Duplicates Community** |
| Body | Documentary muted 0.8 | OK |
| Process steps | Index accent, value/label/checkpoint hierarchy in section CSS | Good precise direction |
| Supporting text | Caption scale | ✅ |
| Distinct? | Evidence panel layout helps; headline typography does not | |

**Buyer objection:** "Why should I trust the claims?" — needs **precise, cool, caption-led, process-first**. Currently reads as Community Confidence with lab photo.

**Recommend:** Precise voice = **smaller headline tier** than Community/Philosophy OR same tier with **600–700 weight**; monospace-adjacent label rhythm for checkpoints; **cooler ink** (body-ink not green-deep); tabular numerals only if numbers appear.

---

### 7 — Human Proof

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `clamp(2.4rem, 4vw, 3.4rem)`, 16ch, weight from human-story CSS | Emotional, portrait-led |
| Quote | `--sp-hs-quote-size: clamp(2.15rem, 2.8vw, 3.35rem)`, lh 1.18 | ✅ Quote scale distinct |
| Attribution | Name/context/verification caption scale | ✅ |
| Distinct? | Yes — strongest emotional differentiation in lower page | ✅ |

**Buyer objection:** "Can I picture myself succeeding?" — typography supports identification.

**Recommend:** Preserve human-story token block; ensure heading does not compete with quote (quote owns viewport).

---

### 8 — FAQ

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | `clamp(1.55rem, 1.85rem)`, weight 600 | ✅ Utility — not display |
| Questions | `--sp-type-ui`, weight 500 | ✅ |
| Answers | `--sp-type-body-sm`, muted | ✅ |
| Distinct? | Yes — deliberate whisper after Future Self | ✅ |

**Buyer objection:** "What is still stopping me?" — typography correctly subordinate.

**Recommend:** No scale increase. Optional: slightly tighter question/answer contrast.

---

### 9 — Future Self

| Attribute | Current | Issue |
|-----------|---------|-------|
| Heading | Future-self CSS: `clamp(2.05rem, 3.4vw, 2.85rem)`, weight 650 | Minimal intent ✅ |
| Conflict | `sp-demo-supplement-type.css` also sets `.sp-cta-offer__heading` to `--sp-type-display-1` | **Two authority sources** |
| CTA | Smaller than hero; weight 600 | ✅ |
| Distinct? | Atmosphere + inverse field distinguish; token conflict risks regression | |

**Buyer objection:** "What happens if I commit?" — minimal headline correct; atmosphere carries emotion.

**Recommend:** Resolve CTA-offer type authority — future-self presentation owns typography exclusively.

---

### 10 — Footer (Brand Close)

| Attribute | Current | Issue |
|-----------|---------|-------|
| Block headings | `--sp-type-ui`, weight heading | OK utility |
| Links/body | `--sp-type-body-sm`, soft opacity | ✅ Whisper |
| Distinct? | Partial — still feels Dawn-inherited vs editorial close | |

**Buyer objection:** Implicit brand trust — typography adequate; brand close craftsmanship is surface/footer structure (deferred).

**Recommend:** Phase IV.1 scope = type scale only. Footer brand-owned close remains later sprint.

---

## 5. Proposed Typography Principles

These principles implement Visual System §6 within **frozen architecture**:

1. **One voice per chapter** — map every homepage chapter to exactly one typographic voice token; two consecutive chapters must not share voice + scale + ink.
2. **Hierarchy follows objection, not layout** — typography reinforces buyer journey; composition changes silhouette, typography changes voice.
3. **Single token authority** — chapter voice resolves from `--sp-voice-*` tokens; section/composition files consume tokens, do not invent parallel clamps except for hero (frozen) and composition-specific sub-elements (matrix, rails).
4. **Headlines shrink as utility rises** — Hero → Future Self peak, then FAQ/Footer whisper (already correct direction).
5. **Measure is emotional** — narrow for statements/quotes (10–18ch), medium for process (38–48ch), wide for documentary body (42–55ch); never full-bleed text walls.
6. **Weight over decoration** — differentiate with scale, measure, weight, and ink temperature — not boxes, badges, or color blocks on text.
7. **Labels whisper** — eyebrows, matrix labels, checkpoint details, FAQ answers stay caption/ui tier.
8. **Collective ≠ stat** — Community proof moments use **editorial phrase scale**, not KPI stat scale.
9. **Precise ≠ manifesto** — Scientific Confidence uses cooler, lighter, process-caption grammar — not green-deep manifesto headlines.
10. **Silence is typographic** — Community subheading optional; Human Proof body absent; Future Self one line — do not add body copy to fill space.

---

## 6. Proposed Token System

Introduce a **chapter-voice layer** in `sp-demo-supplement-type.css` (or new `sp-typography-language.css` loaded after editorial tokens) — **consumes**, does not replace, hero frozen CSS.

### 6.1 Voice tokens (new)

```css
/* Conceptual — implementation sprint only */
--sp-voice-expressive-size:    /* hero — reference only, frozen in hero CSS */
--sp-voice-confident-size:     clamp(3.2rem, 5vw, 5.2rem);
--sp-voice-documentary-size:   clamp(2.85rem, 4.2vw, 4.6rem);
--sp-voice-collective-size:    clamp(2.4rem, 3.2vw, 3.4rem);
--sp-voice-manifesto-size:     clamp(2.6rem, 3.8vw, 3.8rem);
--sp-voice-precise-size:       clamp(2.2rem, 3vw, 3.2rem);
--sp-voice-emotional-size:     clamp(2.15rem, 2.8vw, 3.35rem);  /* aligns w/ quote */
--sp-voice-minimal-size:       clamp(2rem, 3.2vw, 2.75rem);
--sp-voice-quiet-size:         clamp(1.45rem, 1.8vw, 1.75rem);
--sp-voice-whisper-size:       clamp(1.1rem, 1.2vw, 1.25rem);
```

### 6.2 Shared rhythm tokens (consolidate)

| Token | Proposed value | Replaces |
|-------|----------------|----------|
| `--sp-type-lh-display` | 1.02–1.06 by voice | Mixed 0.96–1.08 |
| `--sp-type-lh-body` | 1.55 documentary / 1.65 manifesto | Single 1.6 everywhere |
| `--sp-type-measure-statement` | 16–18ch | Ad-hoc ch limits |
| `--sp-type-measure-body` | 42–48ch | px-based max-widths |
| `--sp-type-ink-primary` | `--sp-type-ink` | green-deep overuse |
| `--sp-type-ink-accent` | `--sp-supplement-green-deep` | one chapter owner |
| `--sp-type-ink-muted` | body-ink @ 0.78–0.82 | inconsistent opacities |

### 6.3 Class mapping (align with Liquid)

| Class | Voice | Chapters |
|-------|-------|----------|
| `.sp-editorial-type--hero` | Expressive | Hero (frozen) |
| `.sp-editorial-type--chapter` | Confident / Documentary | Outcomes (confident), Ingredients (documentary) — **split by modifier** |
| `.sp-editorial-type--statement` | Collective / Manifesto / Precise | Community, Philosophy, Scientific — **split by modifier** |
| `.sp-editorial-type--quote` | Emotional | Human Proof |
| `.sp-editorial-type--caption` | Labels | All eyebrows, matrix, checkpoints |
| *(new)* `.sp-editorial-type--moment` | Collective phrases | Community proof values |
| *(new)* `.sp-editorial-type--utility` | Quiet / Whisper | FAQ, Footer |

### 6.4 File ownership (implementation)

| File | Owns after IV.1 |
|------|-----------------|
| `sp-demo-supplement-type.css` | Global tokens + voice map |
| `sp-editorial-system.css` | Primitive classes + chapter modifiers |
| `sp-composition-system.css` | Layout measure only; **typography via tokens** |
| `sp-demo-supplement-hero.css` | **Frozen** — no changes |
| Section CSS | Matrix/outcome/checkpoint micro-type only |
| `sp-cta-offer-future-self.css` | Finale authority; remove duplicate rules from supplement-type |

---

## 7. Risk Areas

| Risk | Severity | Mitigation |
|------|----------|------------|
| Hero regression | **Critical** | Do not touch `sp-demo-supplement-hero.css` |
| Middle chapter convergence reintroduced | **High** | Explicit ink/scale/weight separation Community vs Scientific |
| Composition layout break | **High** | Typography-only pass; no grid/gap changes |
| Mobile headline overflow | **Medium** | Test 390px; Philosophy/Outcomes multi-line headlines |
| Legacy `band` metrics demos | **Medium** | Scope IV.1 to supplement demo; band presentation unchanged |
| Token migration breaks PDP/cart | **Medium** | Supplement-type also styles PDP — isolate homepage voice selectors |
| `!important` in hero/nav | **Low** | Do not expand; avoid new `!important` |
| Font variant A/B/C experiments | **Low** | Defer; Variant A (theme default) is canonical QA |

---

## 8. Implementation Plan

**Sprint IV.1 implementation** (after this audit approval) — estimated 4 passes, zero architecture change.

### Pass 1 — Token consolidation (foundation)

- Add `--sp-voice-*` tokens to `sp-demo-supplement-type.css`
- Document mapping in code comments referencing this audit
- Add chapter modifiers: `--confident`, `--documentary`, `--collective`, `--manifesto`, `--precise`
- **No visual change yet** — alias existing values

### Pass 2 — Middle chapter differentiation

- Community: reduce proof-value scale; shift headline ink to primary; keep band layout
- Scientific: reduce headline weight/size; cool ink; strengthen checkpoint caption hierarchy
- Philosophy: retain manifesto scale; own `--sp-type-ink-accent` exclusively in middle
- Outcomes vs Ingredients: split `--chapter` into confident vs documentary modifiers

### Pass 3 — Rhythm + measure

- Normalize body line-height by voice (documentary 1.55, manifesto 1.65)
- Convert px max-widths to ch-based measure tokens where headline/emotional
- FAQ/Footer: confirm whisper (likely no change)
- Future Self: resolve supplement-type vs future-self CSS conflict

### Pass 4 — QA + documentation

- Desktop 1440 + mobile 390 screenshots per chapter
- Squint test: middle chapters distinct by **type voice**, not just layout
- Update `pulseops-design-language-v1.md` §2 typography cross-reference (status sync only)
- Tag: `supplement-typography-language-v1`

**Out of scope IV.1:** font family changes, motion/type reveal, footer redesign, demo pack migration, PDP typography overhaul.

---

## 9. Definition of Done

Sprint IV.1 Typography Language is complete when:

- [ ] Every homepage chapter maps to one Visual System voice (§3 hierarchy map — all ✅)
- [ ] Community proof moments no longer use stat-tier scale
- [ ] Scientific Confidence headline is visually distinct from Community Confidence at squint test
- [ ] Outcomes and Ingredients share no identical headline weight + size + measure combination
- [ ] Hero typography untouched (byte-stable hero CSS)
- [ ] Future Self has single typography authority (no conflicting `.sp-cta-offer__heading` rules)
- [ ] Token system documented: voice tokens + class mapping in `sp-demo-supplement-type.css` header
- [ ] No chapter order, composition class, or buyer journey changes
- [ ] Theme check: 0 errors
- [ ] Desktop + mobile screenshot QA on `#183028121915`
- [ ] No new `!important` rules in editorial/composition CSS

---

## Appendix — Source file reference

| Chapter | Primary Liquid classes | Primary CSS sources |
|---------|------------------------|---------------------|
| Hero | `sp-hero__headline` | `sp-demo-supplement-hero.css`, `section-sp-hero.css` |
| Outcomes | `sp-editorial-type--chapter` | `sp-editorial-outcomes.css`, `sp-editorial-system.css` |
| Ingredients | `sp-editorial-type--chapter` | `sp-ingredients-spotlight.css`, `sp-composition-system.css` |
| Community | `sp-editorial-type--statement`, `sp-metrics__proof-*` | `sp-metrics.css`, `sp-composition-system.css`, `sp-editorial-system.css` |
| Philosophy | `sp-editorial-type--statement` | `sp-composition-system.css`, `sp-editorial-system.css` |
| Scientific | `sp-editorial-type--statement` | `sp-quality-standards.css`, `sp-editorial-system.css` |
| Human Proof | human-story classes | `sp-social-proof-human-story.css`, `sp-editorial-system.css` |
| FAQ | `sp-faq__heading/question/answer` | `sp-demo-supplement-type.css` |
| Future Self | `sp-cta-offer--future-self` | `sp-cta-offer-future-self.css`, `sp-demo-supplement-type.css` |
| Footer | Dawn footer + supplement-type | `sp-demo-supplement-type.css` |

---

*Phase IV.1 audit — proposal only. Implementation requires explicit sprint approval after review.*
