# PulseOps Editorial System

Design foundation for making Shopify homepages feel like **premium editorial chapters**, not stacked sections.

**Status:** Supplement Demo Editorial Foundation v1 (`supplement-editorial-foundation-v1`)  
**Stylesheet:** `assets/sp-editorial-system.css`  
**Loaded by:** `snippets/sp-demo-supplement-head.liquid` (supplement demo only)

---

## Philosophy

PulseOps treats a homepage as a **single long-form story** told in chapters. Each chapter has a clear narrative job, a typographic voice, and a handoff into the next — like a wellness magazine spread, not a theme section list.

**Goal:** Merchants get Dawn-level flexibility with AG1/Ritual-level polish. Shoppers scroll one continuous editorial experience; they should never feel a hard “new section loaded” break unless the narrative intentionally shifts.

### Benchmark principles

Patterns observed across premium supplement and wellness brands (Greenlight, AG1, Seed, Ritual, Momentous, Huel):

| Principle | What it means in practice |
|-----------|---------------------------|
| **Chapter, not card** | One idea per scroll beat; avoid boxed modules with heavy chrome |
| **Image-led authority** | Cinematic photography carries credibility; copy supports, not competes |
| **Quiet confidence** | Muted palettes, generous whitespace, restrained motion |
| **Science as narrative** | Data and proof read as editorial, not dashboard widgets |
| **Progressive disclosure** | Hero converts; mid-page invites reading; finale converts again |
| **Mobile as first draft** | Rhythm and handoffs are designed mobile-first; desktop adds asymmetry |
| **Fewer, better controls** | Presets and density — not per-pixel padding sliders |

---

## Chapter taxonomy

Ten reusable chapter types for the PulseOps Editorial Chapter Library (next phase):

| # | Chapter type | Narrative job | Supplement demo mapping (current) |
|---|--------------|---------------|-----------------------------------|
| 01 | **Hero Chapter** | Establish product, promise, primary conversion | `sp-hero` |
| 02 | **Transformation Chapter** | Outcomes, benefits, before/after story | `sp-editorial-outcomes` |
| 03 | **Editorial Story / Ingredients Chapter** | What’s inside, purposeful formulation | `sp-ingredients-spotlight` |
| 04 | **Scientific Narrative** | Mechanism, standards, credibility depth | `sp-quality-standards` — architecture frozen; `sp-scientific-proof` deprecated (disabled) |
| 05 | **Community Confidence** | Collective habit and adoption proof | Editorial proof moments, community statement | None (typographic) | `sp-community-confidence` — dedicated flagship section (`#sp-community`); `sp-metrics` is generic metrics for other templates |
| 06 | **Cinematic Lifestyle** | Brand world, ritual, aspiration | Partially in hero / ingredients media |
| 07 | **Human Proof** | Reviews, testimonials, social trust | `sp-social-proof` (needs Human Proof redesign) |
| 08 | **Founder / Philosophy** | Why we exist, brand POV | Future chapter |
| 09 | **Comparison Chapter** | Differentiation vs alternatives | `sp-editorial-differentiation` |
| 10 | **Conversion Finale** | Offer, urgency, last CTA | `sp-cta-offer`, FAQ |

Chapters share structural primitives (`sp-editorial-chapter`, type scale, CTAs, handoffs). Section-specific CSS extends the system; it does not replace it.

---

## CTA philosophy

| Intent | Treatment | Class |
|--------|-----------|-------|
| **High conversion** (hero, finale) | Primary pill — one per viewport beat | `sp-editorial-cta sp-editorial-cta--primary` |
| **Reading / continuation** (mid-page chapters) | Quiet editorial link with arrow | `sp-editorial-cta sp-editorial-cta--quiet-link` |
| **Editorial emphasis** (optional) | Underlined text link | `sp-editorial-cta sp-editorial-cta--editorial-link` |

**Rules:**

- **Primary CTA only where conversion intent is high** — typically hero and conversion finale.
- **Quiet editorial links for reading chapters** — outcomes, ingredients, differentiation story beats.
- **Avoid button fatigue** — no green pill CTAs in every section; legacy pill styles are scoped with `:not(.sp-editorial-cta)` in section CSS.
- Preserve existing schema fields (`button_label`, `button_link`); change presentation, not merchant data model.

---

## Typography hierarchy

Token-driven scale on `.sp-editorial-chapter`:

| Class | Role | Token |
|-------|------|-------|
| `sp-editorial-type--hero` | Page-level headline (hero only) | `--sp-es-type-hero` |
| `sp-editorial-type--chapter` | Chapter headline | `--sp-es-type-chapter` |
| `sp-editorial-type--statement` | Sub-chapter / pull statement | `--sp-es-type-statement` |
| `sp-editorial-type--quote` | Pull quote, testimonial lead | `--sp-es-type-quote` |
| `sp-editorial-type--caption` | Eyebrow, matrix label, meta | `--sp-es-type-caption` |

**Hierarchy rules:**

- One chapter headline per chapter (`--chapter`); captions label, they don’t compete.
- Body copy uses section RTE styles; keep line length readable (~65ch contained).
- Supplement demo inherits ink tokens from `--sp-type-ink`, `--sp-supplement-green-deep`.

---

## Image / media philosophy

| Modifier | Use |
|----------|-----|
| `sp-editorial-chapter--image-led` | Copy + cinematic media split; media carries mood |
| `sp-editorial-chapter--cinematic` | Larger media min-height, softer radius |
| `sp-editorial-chapter__lead` | Text column in image-led layouts |
| `sp-editorial-chapter__media` | Image column; object-fit cover, tokenized radius |

**Principles:**

- **Contained** (`--sp-es-media-radius-contained`) for cards and matrix thumbnails.
- **Cinematic** (`--sp-es-media-radius-cinematic`) for chapter hero photography.
- No arbitrary image-height fields — use **media style presets** (contained / cinematic / bleed) in future schema.
- Lifestyle + ingredient flat-lays reinforce “purposeful formulation” without stock cliché.

---

## Spacing & mobile rhythm

### Chapter spacing modifiers

| Class | Gap token | When |
|-------|-----------|------|
| `sp-editorial-chapter--spacing-tight` | `--sp-es-chapter-gap-tight` | Dense continuation (matrix, assurance) |
| `sp-editorial-chapter--spacing-standard` | `--sp-es-chapter-gap-standard` | Default chapter internal rhythm |
| `sp-editorial-chapter--spacing-cinematic` | `--sp-es-chapter-gap-cinematic` | Hero-scale media chapters |

### Handoff modifiers (chapter seams)

| Class | Role |
|-------|------|
| `sp-editorial-chapter--handoff-out` | Closing chapter; optional `sp-editorial-chapter__handoff` + divider |
| `sp-editorial-chapter--handoff-in` | Opening chapter; reduced top padding via anchor overrides |

**Mobile rhythm rules:**

- Target **2.4rem–2.8rem** visual gap at intentional handoffs (not 5rem+ dead air).
- Use `#sp-outcomes` / `#sp-ingredients` anchor overrides in supplement scope — not negative margins.
- Matrix + commitment live in `sp-editorial-chapter__body` — one chapter, not three sections.
- Commitment assurance: inline editorial row, not boxed band.

### Structural primitives

```
.sp-editorial-chapter
  .sp-editorial-chapter__lead      ← hero copy block
  .sp-editorial-chapter__media     ← cinematic image
  .sp-editorial-chapter__body      ← matrix, lists, assurance
  .sp-editorial-chapter__handoff   ← optional seam divider
```

---

## Merchant customization rules

**Direction for future schema work (Chapter Library phase):**

| Prefer | Over |
|--------|------|
| **Density** (compact / standard / airy) | Raw padding top/bottom sliders |
| **Media style presets** (contained, cinematic, bleed) | Image min-height micromanagement |
| **Chapter tone** (soft, standard, inverse) | Per-section color pickers |
| **Fewer settings, better presets** | 20 toggles merchants won’t touch |

**Current foundation:**

- Existing section schemas unchanged where possible.
- Editorial classes applied in Liquid; supplement polish scoped under `.sp-demo-supplement`.
- Stable anchors (`#sp-outcomes`, `#sp-ingredients`, `#sp-differentiation`) for handoff CSS — never Shopify section instance IDs.

---

## Do / Don’t

### Do

- Wrap narrative sections in `sp-editorial-chapter` + spacing/handoff modifiers.
- Use quiet links for mid-page continuation CTAs.
- Scope supplement-specific overrides under `.sp-demo-supplement`.
- Use token variables (`--sp-es-*`) for gaps, type, ink.
- Keep Dawn/default templates unaffected — editorial CSS loads only via supplement head snippet.
- Preserve blocks, anchors, and merchant-editable content.

### Don’t

- Hardcode `section-{{ section.id }}` in shared editorial CSS.
- Add a primary pill CTA to every chapter.
- Box assurance/commitment content in heavy cards.
- Center matrix headers like isolated modules — use left-aligned caption rhythm.
- Chase unrelated Theme Check warnings in legacy Dawn files.
- Community Confidence dedicated section complete for supplement demo (`sp-community-confidence`). Remaining chapter library work follows Architecture Cleanup Sprints.

---

## Future chapter build rules

When implementing chapters in the **PulseOps Editorial Chapter Library**:

1. **Reusable classes first** — extend `sp-editorial-system.css` before section-specific CSS.
2. **No hardcoded section IDs** — use stable `anchor_id` from `sp-section-hierarchy-open` or BEM roots.
3. **Schema-compatible** — presentation changes should not break existing JSON templates.
4. **Supplement demo scoped** — `.sp-demo-supplement` for vertical polish; base tokens work globally.
5. **Dawn unaffected** — no global overrides on `.shopify-section` or Dawn section classes.
6. **One chapter per section file** — but multiple internal beats via `__lead`, `__body`, `__handoff`.
7. **Handoff awareness** — every chapter knows if it closes, opens, or continues a story.
8. **Document the taxonomy slot** — map new sections to taxonomy #01–#10.

---

## File reference (Foundation v1)

| File | Role |
|------|------|
| `assets/sp-editorial-system.css` | Shared tokens, CTAs, handoffs, supplement cinematic overrides |
| `sections/sp-editorial-outcomes.liquid` | Transformation chapter + handoff-out |
| `sections/sp-ingredients-spotlight.liquid` | Ingredients chapter + chapter body |
| `sections/sp-editorial-differentiation.liquid` | Comparison chapter (cinematic image-led) |
| `assets/sp-editorial-outcomes.css` | Section styles; pills scoped `:not(.sp-editorial-cta)` |
| `assets/sp-ingredients-spotlight.css` | Matrix, hero, commitment base styles |
| `assets/sp-editorial-differentiation.css` | Differentiation base styles |
| `snippets/sp-demo-supplement-head.liquid` | Loads editorial system on supplement demo |

**Related docs:** `docs/SP-VISUAL-HIERARCHY.md`, `docs/sp-schema-conventions.md`, `docs/SP-IMAGE-EXPERIENCE.md`
