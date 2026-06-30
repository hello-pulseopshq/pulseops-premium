# Chapter Identity Framework — Supplement Demo

Narrative blueprint for the supplement homepage as an **editorial conversation**, not a stack of Shopify sections.

**Architecture status:** **LOCKED** — see [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md) (tag `pulseops-architecture-v1`)

**System authority:** Start with [`pulseops-design-system.md`](pulseops-design-system.md) for the PulseOps language stack and ownership hierarchy.

**Checkpoint:** `supplement-editorial-foundation-v1`  
**Companion:** [`docs/editorial-system.md`](editorial-system.md) — tokens, classes, CTA rules, build primitives  
**Scope:** `templates/index.supplement.json` supplement homepage only; Dawn/default unaffected

---

## 1. Core principle

**Every chapter must answer one unique visitor question.**

If two chapters answer the same question, one must be **redesigned**, **merged**, or **removed**.

| Rule | Meaning |
|------|---------|
| One question per chapter | Shoppers should never think “didn’t I just read this?” |
| One emotional beat per chapter | Each scroll moment shifts feeling, not just content |
| One visual grammar per chapter | Repeated split-image + proof cards = same chapter twice |
| Conversion is role-based | Only high-intent moments get primary CTAs |

The homepage is a single story: introduction → relevance → transparency → confidence → belief → trust → feeling → commitment → utility → brand close.

---

## 2. Homepage narrative sequence

Current template order (for reference): Hero → Outcomes → Ingredients → Metrics → Differentiation → Quality → Scientific Proof → Reviews → FAQ → CTA → Footer.

The narrative framework below defines **identity**, not necessarily final section count. `sp-scientific-proof` is flagged in the overlap audit as a candidate to fold into Scientific Confidence.

---

### 01 — Product Introduction

| Field | Definition |
|-------|------------|
| **Current section** | `sp-hero` |
| **Visitor question** | What is this? |
| **Emotional goal** | Clarity, confidence, desire |
| **Visual language** | Product-led hero, premium merchandising, direct promise |
| **Conversion role** | Primary conversion — highest intent on page |
| **Status** | **Locked** — do not redesign in narrative passes |

**Handoff:** From promise to personal relevance (Transformation Story).

---

### 02 — Transformation Story

| Field | Definition |
|-------|------------|
| **Current section** | `sp-editorial-outcomes` (`#sp-outcomes`) |
| **Visitor question** | Why should I care? |
| **Emotional goal** | Possibility, daily-life relevance |
| **Visual language** | Warm lifestyle ritual, outcome cards, quiet editorial CTA |
| **Conversion role** | Soft continuation — quiet link, not pill CTA |
| **Status** | **Mostly locked** — rhythm/handoff polish only |

**Handoff:** From “why” to “what’s inside” (Ingredient Narrative).

---

### 03 — Ingredient Narrative

| Field | Definition |
|-------|------------|
| **Current section** | `sp-ingredients-spotlight` (`#sp-ingredients`) |
| **Visitor question** | What is inside? |
| **Emotional goal** | Curiosity, transparency, formulation interest |
| **Visual language** | Cinematic ingredient flat-lay, ingredient matrix, calm inline assurance |
| **Conversion role** | Educational continuation — quiet link to full formula |
| **Status** | **Mostly locked** — unified chapter body complete |

**Handoff:** From formulation detail to social proof at scale (Community Confidence).

---

### 04 — Community Confidence

| Field | Definition |
|-------|------------|
| **Current section** | `sp-metrics` |
| **Visitor question** | Do other people trust this? |
| **Emotional goal** | Safety in numbers, social validation |
| **Visual language** | Editorial data story — typographic stats, softer evidence rhythm, fewer dashboard/card cues |
| **Conversion role** | Confidence builder — no CTA; earns trust before philosophy/science |
| **Status** | **Architecture frozen** |

**Handoff:** From crowd validation to product thinking (Formulation Philosophy).

**Mobile behavior target:** Compact stat row or editorial pull-quote band; no horizontal “metric widget” feel.

---

### 05 — Formulation Philosophy

| Field | Definition |
|-------|------------|
| **Current section** | `sp-editorial-differentiation` (`#sp-differentiation`) |
| **Visitor question** | What makes this formula different? |
| **Emotional goal** | Belief in product thinking |
| **Visual language** | Philosophy-led composition, formulation principles — **not** another proof split identical to Outcomes/Quality |
| **Conversion role** | Belief deepening — quiet editorial link optional |
| **Status** | **Architecture frozen** |

**Handoff:** From “why we’re different” to “how we make it” (Scientific Confidence).

**Anti-pattern today:** Cinematic image-led split + numbered proof list mirrors other chapters; reads as second trust chapter.

---

### 06 — Scientific Confidence

| Field | Definition |
|-------|------------|
| **Current section** | `sp-quality-standards` (`#sp-quality`) + `sp-scientific-proof` (overlap) |
| **Visitor question** | How do I know it is well made? |
| **Emotional goal** | Trust, precision, safety |
| **Visual language** | Lab/manufacturing narrative, testing process, quality assurance — scientific editorial, not certification cards |
| **Conversion role** | Credibility anchor — optional quiet shop link |
| **Status** | **Architecture frozen** |

**Handoff:** From institutional trust to personal experience (Human Story).

**Merge note:** `sp-scientific-proof` (stat/certification cards) currently duplicates Scientific Confidence. Target state: one Scientific Confidence chapter or clearly subordinated proof beats inside Quality.

---

### 07 — Human Story

| Field | Definition |
|-------|------------|
| **Current section** | `sp-social-proof` (testimonial stage) |
| **Visitor question** | What does it actually feel like? |
| **Emotional goal** | Emotional proof, identification, confidence |
| **Visual language** | Cinematic testimonial stage, person-led story — fewer review-widget cues (stars grid, card chrome) |
| **Conversion role** | Emotional validation — no shop CTA |
| **Status** | **Architecture frozen** |

**Handoff:** From felt experience to commitment (Future Self).

**Today:** Stage layout + lifestyle background is directionally right; quote typography and widget residue need Human Story identity, not “reviews section.”

---

### 08 — Future Self

| Field | Definition |
|-------|------------|
| **Current section** | `sp-cta-offer` |
| **Visitor question** | Am I ready to start? |
| **Emotional goal** | Commitment, calm momentum |
| **Visual language** | Aspirational lifestyle, minimal offer, confident conversion |
| **Conversion role** | Primary conversion — second high-intent moment on page |
| **Status** | **Architecture frozen** — craftsmanship polish may continue |

**Handoff:** From decision to practical clearance (Utility Support).

---

### 09 — Utility Support

| Field | Definition |
|-------|------------|
| **Current section** | `sp-faq` |
| **Visitor question** | What practical concerns do I still have? |
| **Emotional goal** | Reassurance, friction removal |
| **Visual language** | Quiet, compact, non-dominant — accordion utility, not a chapter headline competing with CTA |
| **Conversion role** | Objection handling — supports conversion, does not replace it |
| **Status** | **Architecture frozen** — functional; craftsmanship polish may continue |

**Handoff:** Implicit close toward footer (Brand Close).

---

### 10 — Brand Close

| Field | Definition |
|-------|------------|
| **Current section** | Dawn `footer` (supplement nav via pack registry) |
| **Visitor question** | Is this a real, trustworthy brand? |
| **Emotional goal** | Trust, completeness |
| **Visual language** | Custom premium footer — brand-owned, not Dawn-inherited |
| **Conversion role** | Persistent trust + navigation — no hard sell |
| **Status** | **Architecture frozen** — craftsmanship polish may continue |

---

## 3. Chapter overlap audit

**Status (2026-06-20):** Overlaps resolved in Sprint 7.2 (composition) and Sprint 7.2b (buyer journey). Retained below for historical reference.

### Critical overlaps (same question, different wrappers)

| Overlap | Chapters involved | Shared failure mode | Resolution direction |
|---------|-------------------|---------------------|----------------------|
| **Trust / product proof** | Formulation Philosophy (`sp-editorial-differentiation`) + Scientific Confidence (`sp-quality-standards`, `sp-scientific-proof`) | Both answer “can I trust this product?” with split layouts, proof lists, and lab imagery | Differentiate: Philosophy = *thinking*; Science = *making*. Merge or demote `sp-scientific-proof` card grid into Quality narrative |
| **Social proof vs data** | Community Confidence (`sp-metrics`) vs Hero social proof | Hero already shows rating/review count; Metrics repeats numbers in widget UI | Metrics becomes editorial *community* story, not duplicate hero stats |
| **Human proof vs community** | Human Story (`sp-social-proof`) vs Community Confidence | Reviews quote satisfaction; Metrics cites 35k+ / 4.9★ | Metrics = scale; Reviews = felt experience — must feel like different chapters |

### Structural repetition (same geometry, different copy)

| Pattern | Where it appears | Risk |
|---------|------------------|------|
| Cinematic split + image right | Outcomes, Ingredients hero, Differentiation, Quality | Page feels like the same section skin repeated |
| Numbered / card proof lists | Outcomes cards, Differentiation proof, Quality pillars, Scientific Proof cards | “Proof fatigue” — visitor stops reading |
| Banded alternate surface | Metrics band, Scientific Proof cards | Dashboard/widget rhythm breaks editorial flow |

### Identity gaps (right slot, wrong voice)

| Chapter | Gap |
|---------|-----|
| **Community Confidence** | `sp-metrics` reads as KPI dashboard (dividers, swipe band, centered widget grid) — not “people like me trust this” |
| **Human Story** | Testimonial stage is strong directionally but still labeled/structured like a reviews widget (eyebrow, carousel dots, card idioms) |
| **Brand Close** | Dawn footer breaks premium editorial close — typography, density, and nav feel inherited |

### Sections outside the 10-chapter narrative (candidates for merge)

| Section | Current role | Recommendation |
|---------|--------------|----------------|
| `sp-scientific-proof` | Certification/stat cards after Quality | Fold into Scientific Confidence or reduce to inline assurance beats inside Quality — avoid third “trust band” |

---

## 4. Implementation order

**Status (2026-06-20):** Complete. Architecture frozen — see [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md).

Recommended passes — each pass defines chapter identity **before** visual redesign, then implements using `sp-editorial-system.css` primitives.

| Pass | Chapter identity | Section(s) | Why this order |
|------|------------------|------------|----------------|
| **Pass 1** | Community Confidence | `sp-metrics` | Largest remaining seam after Ingredients; fixes “widget stack” mid-page; unlocks cleaner handoff to Philosophy |
| **Pass 2** | Formulation Philosophy | `sp-editorial-differentiation` | Separates “different thinking” from science before Quality redesign |
| **Pass 3** | Scientific Confidence | `sp-quality-standards`, `sp-scientific-proof` | Consolidate trust/science into one narrative after Philosophy is distinct |
| **Pass 4** | Human Story | `sp-social-proof` | Emotional beat after rational trust is established |
| **Pass 5** | Future Self + Brand Close | `sp-cta-offer`, `footer` | Conversion finale + brand-owned close |

**Explicitly out of scope for these passes:** Hero (locked), Outcomes + Ingredients (mostly locked), FAQ (functional), photography swaps, `templates/index.supplement.json` structural reorder unless merge requires it.

---

## 5. Build rules

Every future chapter implementation must document these six fields **before** CSS/Liquid work:

| Field | Question to answer |
|-------|-------------------|
| **Visitor question** | What single question does this chapter resolve? |
| **Emotional goal** | What should the shopper *feel* at exit? |
| **Visual language** | What layout/typography/media grammar is unique to this chapter? |
| **Conversion role** | None / soft link / primary CTA — one per chapter max for primary |
| **Merchant-editable settings** | Which schema fields matter; prefer presets over raw knobs |
| **Mobile behavior** | How rhythm, density, and media crop differ on small viewports |

### System rules (non-negotiable)

- **Avoid repeated split-section geometry** — if the last chapter was image-led split, the next chapter must change grammar (full-bleed, inline, data band, stage, etc.).
- **Avoid button fatigue** — quiet `sp-editorial-cta--quiet-link` for reading chapters; `sp-editorial-cta--primary` only at Hero and Future Self.
- **Media by editorial role** — product hero for introduction, ritual for transformation, flat-lay for ingredients, data typography for community, lab for science, person for human story, aspiration for finale. No decorative reuse without narrative reason.
- **No hardcoded section IDs** — use stable anchors (`#sp-outcomes`, `#sp-ingredients`, etc.) or BEM roots; never `section-{{ section.id }}` in shared editorial CSS.
- **Preserve schema compatibility** where possible — change presentation and presets, not merchant data shape.
- **Keep Dawn/default pages unaffected** — supplement polish under `.sp-demo-supplement` and supplement head snippet only.
- **Prefer preset controls** — density (compact / standard / airy), media style (contained / cinematic / bleed), chapter tone — over padding sliders and image-height fields.
- **Reuse editorial primitives** — extend `sp-editorial-system.css` before section-specific CSS; adopt `sp-editorial-chapter`, handoff modifiers, type scale.

### Handoff checklist (between chapters)

- [ ] Exit spacing matches next chapter entry — no dead air (target ~2.4–2.8rem mobile at intentional seams)
- [ ] CTA intent does not compete with next chapter’s opening question
- [ ] Surface/background shift signals narrative change, not arbitrary alternation
- [ ] Mobile vertical length proportional to chapter importance

---

## 6. Chapter identity quick reference

| # | Identity | Section | Question | Status |
|---|----------|---------|----------|--------|
| 01 | Product Introduction | `sp-hero` | What is this? | Locked |
| 02 | Transformation Story | `sp-editorial-outcomes` | Why should I care? | Mostly locked |
| 03 | Ingredient Narrative | `sp-ingredients-spotlight` | What is inside? | Mostly locked |
| 04 | Community Confidence | `sp-metrics` | Will people like me stick with this? | Architecture frozen |
| 05 | Formulation Philosophy | `sp-editorial-differentiation` | Why is this approach different? | Architecture frozen |
| 06 | Scientific Confidence | `sp-quality-standards` (+ `sp-scientific-proof` disabled) | Why should I trust the claims? | Architecture frozen |
| 07 | Human Story | `sp-social-proof` | Can I picture myself succeeding? | Architecture frozen |
| 08 | Future Self | `sp-cta-offer` | What happens if I commit? | Architecture frozen |
| 09 | Utility Support | `sp-faq` | What is still stopping me? | Architecture frozen |
| 10 | Brand Close | `footer` | Is this a real brand? | Architecture frozen |

---

## Related checkpoints

| Tag / artifact | Role |
|----------------|------|
| `supplement-editorial-foundation-v1` | Editorial system + Outcomes→Ingredients rhythm |
| Asset integration pass (may be uncommitted) | Production photography mapping — separate from narrative identity |
| `supplement-composition-role-sharpening-v1` | Sprint 7.2 + 7.2b composition and buyer journey |
| `pulseops-architecture-v1` | **Current** — Platform architecture v1 LOCKED |
