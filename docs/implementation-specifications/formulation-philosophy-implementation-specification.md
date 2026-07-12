# Formulation Philosophy — Implementation Specification

| Field | Value |
|---|---|
| Chapter | Formulation Philosophy |
| Document Type | Design Contract |
| Version | 1.0 |
| Status | Frozen |
| Workflow Stage | Production Stage 7b — Implementation Specification |
| Design Authority | `formulation_philosophy_annotated_mockup_desktop_20260709-49c15a6f-34c8-4185-80bf-96a75b77422a.png`, `formulation_philosophy_annotated_mockup_mobile_20260709-48af6539-0686-41ac-ba84-c62521036506.png` |
| Structural Authority | This Implementation Specification |
| Architecture Owner | `sections/sp-editorial-differentiation.liquid` |
| Presentation Branch | `philosophy_manifesto` |
| CSS Owner | `assets/sp-editorial-differentiation.css` |
| Generated From | Approved annotated mockups (2026-07-09); Pre-Spec Architecture Audit (`.audit/formulation-philosophy/FP-PRESPEC-ARCHITECTURE-AUDIT.md`); Baseline Resolution (`.audit/formulation-philosophy/FP-BASELINE-RESOLUTION.md`); `templates/index.supplement.json`; `sections/sp-editorial-differentiation.liquid` schema |
| Next Artifact | Formulation Philosophy Implementation Brief |
| Phase 1 Eligibility | Blocked until this correction pass is complete and the Implementation Brief is approved |

---

# Revision History

| Version | Date | Status | Change |
|---|---|---|---|
| 1.0 | 2026-07-09 | Draft | Initial complete six-section specification with appendices |
| 1.0-d1 | 2026-07-12 | Draft | Determinism completion pass: metadata, normative language, cross-references, glossary, and implementation values |
| 1.0-d2 | 2026-07-12 | Approved for Implementation Brief | Final determinism refinement: single-responsibility sections, Appendix A freeze, A5 unification, photography resolution, Appendix E traceability |
| 1.0-d3 | 2026-07-12 | Final Specification Correction Pass | Clarified canonical Region ID mapping, A5 ownership, fixed five-principle composition, and moved implementation mechanics to the Implementation Brief |

---

# Conformance Language

- **Normative** — mandatory implementation requirement. Uses “must,” “shall,” “must not,” or “shall not.”
- **Informative** — explanation or context that helps interpret a normative requirement.
- **Reference** — factual evidence such as an annotated mockup, repository file, token, or asset.

> Unless a passage is explicitly marked Informative or Reference, requirements in Sections 2–6 and Appendices A–E are normative.

---

# Document Position

This document is the **Implementation Specification** in the PulseOps production workflow.

| Field | Value |
|---|---|
| Input Artifact | Approved annotated desktop and mobile mockups (2026-07-09) |
| Output Artifact | Formulation Philosophy Implementation Brief |
| Previous Stage | Annotated Mockups |
| Next Stage | Implementation Brief |

## Workflow

```text
Annotated Mockups
        ↓
Implementation Specification   ← this document
        ↓
Implementation Brief
        ↓
Phase 1 Composition Build
        ↓
Composition Approval
        ↓
Phase 2 Production Hardening
        ↓
Freeze
```

**Informative:** The Implementation Brief derives engineering procedures, DOM class naming, and CSS selector families from this specification. Those details are intentionally excluded here.

---

# SECTION 1 — Identity & Narrative Contract

## Purpose

This section establishes **what this chapter exists to communicate**.

It freezes the narrative responsibility before any implementation decisions are made.

It answers:

> **Why does this chapter exist?**

Later sections define **how** that narrative is implemented.

This section never discusses CSS, Liquid, layout measurements, or implementation.

---

# 1. Chapter Identity

## Chapter Name

**Formulation Philosophy**

---

## Chapter Role

Formulation Philosophy introduces the **thinking behind the formulation**.

It explains the principles that determine what deserves inclusion.

It is **not** a scientific evidence chapter.

It is **not** an ingredient education chapter.

It is **not** a manufacturing chapter.

It is the chapter where the brand reveals its standards.

---

## Buyer Question

> **"What principles guide every formulation decision?"**

Everything inside this chapter must contribute toward answering this single question.

No neighbouring buyer questions may overlap.

---

# 2. Narrative Responsibility

The chapter occupies a precise position within the homepage editorial journey.

```text
Community Confidence
        ↓
Formulation Philosophy
        ↓
Scientific Confidence
```

### Previous Chapter

**Community Confidence**

Answers:

> Can I trust people like me?

Trust is established socially.

---

### Current Chapter

**Formulation Philosophy**

Answers:

> What standards determine what enters this formulation?

Trust becomes philosophical.

The visitor understands the brand's decision-making process.

---

### Next Chapter

**Scientific Confidence**

Answers:

> How are those standards verified?

Trust becomes evidential.

Scientific Confidence provides verification.

Formulation Philosophy deliberately avoids performing this role.

---

# 3. Narrative Boundaries

This chapter **owns**:

- Formulation philosophy
- Editorial standards
- Inclusion principles
- Exclusion principles
- Decision-making philosophy
- Editorial conviction
- Deliberate restraint

This chapter **does not own**:

- Scientific evidence
- Clinical validation
- Laboratory testing
- Manufacturing process
- Ingredient education
- Ingredient sourcing
- Traceability
- Certifications
- Customer testimonials
- Product conversion messaging

These responsibilities belong to other chapters.

---

# 4. Memory Anchor

## Primary Memory Anchor

**The Standards Book**

The visitor should leave remembering:

> **Great formulations begin with the courage to say no.**

The Standards Book becomes the visual embodiment of that philosophy.

Every supporting element exists to reinforce this single memory.

---

## Supporting Memory Elements

These reinforce—but never compete with—the primary memory anchor:

- Governing Question
- Editorial Reflection
- Five Refusal Principles
- Closing Manifesto

No secondary memory anchor should emerge.

---

# 5. Emotional Goal

The chapter should leave the visitor feeling:

- Calm
- Reassured
- Intellectually respected
- Quietly confident

The chapter should never feel:

- Defensive
- Aggressive
- Promotional
- Boastful
- Scientific for its own sake

The tone is one of editorial conviction rather than marketing persuasion.

---

# 6. Chapter Philosophy

The editorial idea behind the chapter is:

> **Quality is defined as much by what is deliberately excluded as by what is included.**

The chapter therefore celebrates restraint.

Every visual decision should support this philosophy.

---

# 7. Composition Philosophy

## Desktop

Desktop behaves like an editorial spread.

Typography introduces the philosophy.

Photography reinforces credibility.

The Refusal Manifesto becomes the central reading experience.

The Closing Statement resolves the chapter quietly before handing the visitor to Scientific Confidence.

Desktop should feel like reading a premium publication rather than browsing an ecommerce section.

---

## Mobile

Mobile is an independent editorial composition.

It preserves exactly the same narrative.

It does **not** compress the desktop layout.

Typography establishes the philosophy.

The Standards Book immediately reinforces the memory anchor.

The Refusal Manifesto becomes a calm vertical reading experience.

The emotional cadence remains identical to desktop despite the different composition.

---

# 8. Visual Ownership

The chapter deliberately changes ownership as the visitor progresses.

| Region | Primary Owner | Supporting Owner |
|---------|---------------|------------------|
| Hero | Typography | Photography |
| Reflection | Typography | Surface |
| Standards Book | Photography | Typography |
| Refusal Manifesto | Typography | Icons |
| Closing Statement | Typography | Surface |
| Transition | Typography | Interaction |

Ownership changes are intentional.

No region should contain competing dominant owners.

---

# 9. Editorial Rhythm

The chapter consists of four editorial movements.

## Movement I — Declaration

The governing philosophy is introduced.

The visitor understands the brand's point of view.

---

## Movement II — Reflection

The philosophy becomes personal.

The editorial reflection slows the reading pace before visual evidence appears.

---

## Movement III — Manifesto

The Five Refusal Principles demonstrate the philosophy in action.

This is the intellectual centre of the chapter.

---

## Movement IV — Resolution

The Closing Statement reinforces the emotional takeaway.

The visitor leaves understanding that the formulation exists because of disciplined decisions rather than maximum ingredient count.

The Transition then hands the narrative naturally to Scientific Confidence.

---

# 10. Chapter Success Criteria

This chapter is successful only if a first-time visitor can answer the following questions after reading it.

## Buyer Understanding

- Why is this formulation different?
- What standards guide the brand?
- What kinds of ingredients are intentionally rejected?

---

## Emotional Response

The visitor should feel that:

- The brand is disciplined.
- The brand is trustworthy.
- The formulation is carefully considered rather than overloaded.
- The product reflects thoughtful restraint rather than marketing excess.

---

## Narrative Progression

After finishing this chapter, the visitor should naturally want to continue into **Scientific Confidence** to verify the principles that have just been introduced.

The transition should feel inevitable rather than promotional.

---

# Section 1 Approval Criteria

This section is complete when all of the following are true:

- One buyer question is defined.
- One narrative responsibility is defined.
- One memory anchor is defined.
- Neighbouring chapter boundaries are explicit.
- Desktop and mobile preserve the same narrative while allowing different compositions.
- Visual ownership progression is defined.
- Emotional goal is frozen.
- Editorial rhythm is documented.
- No implementation guidance exists.
- No DOM structure exists.
- No CSS, measurements, or engineering decisions appear in this section.


# SECTION 2 — Visual Contract

## Purpose

This section freezes **what the visitor must perceive**.

The approved annotated desktop and mobile mockups remain the primary visual authority.

It answers:

> **What must the implemented chapter visually reproduce?**

This section defines visual perception and ownership only.

It intentionally does **not** define:

- Canonical DOM hierarchy → `§3 Structural Contract`
- Design role ownership → `§4 Design Contract`
- Approved measurements → `Appendix A`
- Engineering ownership → `§5 Implementation Contract`

---

## 2.1 Visual Source of Truth

The following artifacts are the only visual authorities for Phase 1.

Priority order:

1. Approved Annotated Desktop Mockup (2026-07-09)
2. Approved Annotated Mobile Mockup (2026-07-09)

No previous implementation may override these approved compositions.

Specifically, the following are **not** implementation authorities:

- Previous runtime screenshots
- Previous CSS refinements
- Existing Liquid markup
- Existing DOM hierarchy
- Git HEAD implementation
- Historical implementation patches

Those artifacts may provide implementation context but must never replace the approved annotated mockups.

---

## 2.2 Approved Acceptance Screenshots

These annotated mockups become the official acceptance screenshots for Composition Approval.

## Desktop Acceptance Screenshot

**Filename:** `formulation_philosophy_annotated_mockup_desktop_20260709-49c15a6f-34c8-4185-80bf-96a75b77422a.png`

**Reference:** Approved Annotated Desktop Mockup (2026-07-09)

**Reference viewport:** 1440px

---

## Mobile Acceptance Screenshot

**Filename:** `formulation_philosophy_annotated_mockup_mobile_20260709-48af6539-0686-41ac-ba84-c62521036506.png`

**Reference:** Approved Annotated Mobile Mockup (2026-07-09)

**Reference viewport:** 390px

Every Phase 1 review must compare directly against these two screenshots.

No alternative screenshots are permitted.

---

## 2.3 Region ID Map

Every visible region receives a permanent Region ID.

### Canonical Implementation Region IDs

The Region IDs in this specification are canonical implementation identifiers.

The approved desktop and mobile annotated mockups use different annotation labels in some places. Those original annotation labels remain valid within their respective mockups.

Canonical implementation IDs provide one stable taxonomy across:

- this Implementation Specification
- the Implementation Brief
- Liquid implementation
- CSS ownership
- Cursor reports
- visual review
- refinement reports
- freeze documentation

Canonical IDs do not replace or rename the annotation labels embedded in the approved mockup images.

`Appendix E.2` maps each canonical implementation ID to its original desktop and mobile annotation label.

These IDs remain stable across:

- Implementation Specification
- Implementation Brief
- Cursor implementation reports
- QA reviews
- Refinement sprints
- Freeze review

Region IDs must never change without updating the annotated mockups.

---

## Region ID Permanence

- Region IDs A, B, C, and D are permanent.
- Child IDs A1–A6, B1–B7, C1–C4, and D1 are permanent.
- Region IDs must remain stable across:
  - Implementation Specification
  - Implementation Brief
  - Liquid markup
  - CSS selectors or data attributes
  - Cursor reports
  - Composition reviews
  - Refinement reports
  - Freeze documentation
- Region names may receive editorial clarification, but IDs must not be renamed or reused.
- Any canonical implementation Region ID change requires a new specification revision.
- A canonical Region ID does not require the original desktop and mobile mockups to use the same embedded annotation label.
- Traceability between canonical IDs and original mockup labels must remain complete in `Appendix E.2`.

---

## Region A — Hero

| ID | Region |
|----|--------|
| A | Hero Spread |
| A1 | Editorial Eyebrow |
| A2 | Hero Headline |
| A3 | Governing Question |
| A4 | Supporting Editorial Copy |
| A5 | Editorial Reflection |
| A6 | Standards Book Photography |

---

## Region B — Refusal Manifesto

| ID | Region |
|----|--------|
| B | Manifesto Section |
| B1 | Manifesto Label |
| B2 | Manifesto Introduction |
| B3 | Principle 01 |
| B4 | Principle 02 |
| B5 | Principle 03 |
| B6 | Principle 04 |
| B7 | Principle 05 (Highlighted) |

---

## Region C — Closing Statement

| ID | Region |
|----|--------|
| C | Closing Section |
| C1 | Closing Eyebrow |
| C2 | Closing Headline |
| C3 | Closing Emphasis |
| C4 | Closing Editorial Body |

---

## Region D — Transition

| ID | Region |
|----|--------|
| D | Editorial Transition |
| D1 | Scientific Confidence Link |

These IDs are referenced throughout the remainder of this specification.

---

## 2.4 Visual Ownership Map

Every region has one dominant visual owner.

| Region | Typography | Photography | Surface | Interaction |
|---------|------------|-------------|----------|-------------|
| A1 | ✓ | | | |
| A2 | ✓ | | | |
| A3 | ✓ | | | |
| A4 | ✓ | | | |
| A5 | ✓ | | | |
| A6 | | ✓ | | |
| B1 | ✓ | | | |
| B2 | ✓ | | | |
| B3 | ✓ | | | |
| B4 | ✓ | | | |
| B5 | ✓ | | | |
| B6 | ✓ | | | |
| B7 | ✓ | | ✓ | |
| C1 | ✓ | | | |
| C2 | ✓ | | | |
| C3 | ✓ | | | |
| C4 | ✓ | | | |
| D1 | ✓ | | | ✓ |

No region may have two competing dominant owners.

Supporting visual systems must reinforce—not replace—the dominant owner.

---

## 2.5 Memory Anchor Protection

The Standards Book (Region A6) is the chapter's only photographic memory anchor.

Every subsequent region reinforces—but never competes with—this memory.

Specifically:

- The Hero establishes the memory.
- The Reflection reinforces the philosophy.
- The Manifesto demonstrates the philosophy.
- The Closing Statement resolves the philosophy.
- The Transition quietly hands the visitor to Scientific Confidence.

No later visual treatment may become more visually dominant than the Hero.

---

## 2.6 Visual Alignment Contract

Editorial alignment is part of the approved composition.

The visitor must perceive:

- One continuous editorial spine across eyebrow, headline, manifesto, closing, and transition regions.
- One independent photography axis in Region A6 only.
- One shared internal grid across all five manifesto principles.
- Principle 05 emphasis through surface treatment only — not positional change.

Structural enforcement of alignment groups and region lists is defined in `§3.6 Alignment Contract`.

---

## 2.7 Layer Hierarchy (Z-Axis)

Visual stacking follows this fixed hierarchy.

| Layer | Owner |
|--------|-------|
| 1 | Chapter background |
| 2 | Surface treatments |
| 3 | Photography |
| 4 | Typography |
| 5 | Icons |
| 6 | Interactive elements |

Implementation must not introduce unnecessary stacking contexts.

Typography always remains visually unobstructed.

Icons remain subordinate to editorial content.

---

## 2.8 Surface Hierarchy

Surface treatment is intentionally restrained.

| Region | Surface Behaviour |
|---------|-------------------|
| Hero | Editorial canvas only |
| Standards Book | Borderless photography |
| Manifesto | Clean editorial background |
| Principle 05 | Single editorial emphasis surface |
| Closing | Quiet paper-like surface |
| Transition | Transparent handoff |

The following are prohibited:

- Product cards
- Floating panels
- Elevated containers
- Heavy borders
- Decorative gradients
- Drop shadows

The chapter should feel editorial rather than interface-driven.

---

## 2.9 Photography Perception

Photography appears only once.

The visitor must perceive:

- One dominant Standards Book photograph (Region A6).
- The photograph as the chapter memory anchor.
- Borderless editorial photography — not a card, panel, or product tile.
- No photography after the Hero.

Approved asset identity, crop geometry, and responsive behaviour are defined in `Appendix A.5`. Design role ownership is defined in `§4.5 Photography Contract`.

---

## 2.10 Icon Perception

Icons support the Refusal Manifesto.

The visitor must perceive:

- One icon per principle.
- Outline decorative icons — not illustrations.
- Icons subordinate to typography.
- Equal visual weight across principles.

Approved icon dimensions, stroke system, and spacing are defined in `Appendix A.6`. Design role ownership is defined in `§4.6 Icon Contract`.

---

## 2.11 Visual Continuity Contract

The chapter must visually harmonise with its neighbouring chapters.

## Entry

Community Confidence hands the visitor into an editorial chapter.

The transition should feel calm.

The chapter must not visually reset the page.

---

## Exit

Scientific Confidence should feel like the natural continuation of Formulation Philosophy.

The visitor should perceive:

> Philosophy first.

> Evidence second.

The visual rhythm should reinforce this narrative progression.

---

## 2.12 Visual Invariants

The following visual characteristics are permanent.

They must never change during implementation or refinement.

- Region IDs
- Hero composition
- Memory anchor
- Hero photograph count
- Hero-first narrative
- Single Standards Book photograph
- Five Refusal Principles
- Highlighted Principle 05
- Closing sequence
- Transition ownership
- Editorial alignment axes
- Single-photograph budget
- Editorial visual hierarchy
- Quiet transition into Scientific Confidence

Changing any of these constitutes a design change—not an implementation refinement.

---

## 2.13 Section 2 Approval Criteria

This section is complete when:

- Acceptance screenshots are explicitly defined.
- Every visible region has a permanent Region ID.
- Every region has one dominant visual owner.
- Memory anchor protection is documented.
- Visual alignment perception is frozen with structural cross-reference.
- Layer hierarchy is defined.
- Surface hierarchy is frozen.
- Photography and icon perception rules are frozen with appendix cross-references.
- Visual continuity with neighbouring chapters is documented.
- Chapter invariants are identified.
- No DOM structure exists.
- No Liquid implementation exists.
- No CSS implementation exists.
- No approved measurements are duplicated from `Appendix A`.


# SECTION 3 — Structural Contract

## Purpose

This section freezes **canonical DOM, regions, semantics, and reading order**.

It eliminates structural ambiguity before implementation begins.

It defines:

- Canonical DOM hierarchy
- Semantic ownership
- Region hierarchy
- Grid ownership
- Reading order
- Responsive transformation
- Wrapper ownership
- Structural invariants

This section intentionally does **not** define:

- Typography measurements → `Appendix A.1`
- Colours and surfaces → `Appendix A.2`
- Spacing values → `Appendix A.4`
- CSS declarations → Implementation Brief

Design role ownership is defined in `§4 Design Contract`.

---

## 3.1 Structural Principles

The chapter shall satisfy the following implementation principles.

---

## Principle 1

### One visual region.

### One structural region.

Every Region ID defined in `§2 Visual Contract` corresponds to exactly one structural region.

No Region ID may be duplicated.

---

## Principle 2

### One shared responsive content tree.

Desktop, tablet, and mobile share one responsive content tree.

Separate desktop and mobile content trees are prohibited.

Region A5 is the only approved presentational duplicate. It derives from A3 and A4, is visually presented only at desktop, and must not create duplicate interactive or accessible reading content.

---

## Principle 3

### Approved composition takes precedence over existing implementation.

If existing presentation markup cannot faithfully reproduce the approved annotated mockups, it shall be replaced.

Existing markup is not protected merely because it already exists.

---

## Principle 4

### Reading order is structural.

Visual placement must never compromise:

- DOM order
- Editorial sequence
- Accessibility order

Layout solves positioning.

Structure preserves meaning.

---

## 3.2 Canonical DOM Hierarchy

The following hierarchy is normative.

No additional presentation wrappers shall be introduced unless required for:

- semantics
- layout ownership
- merchant mapping

DOM class naming and CSS selector families are Implementation Brief responsibilities. This hierarchy defines semantic structure and Region ID ownership only.

```text
section [chapter shell]
│
└── article [chapter]
    │
    ├── header [Region A — Hero]
    │   │
    │   ├── div [A1–A4 editorial group]
    │   │   ├── A1 Editorial Eyebrow
    │   │   ├── A2 Hero Headline
    │   │   ├── A3 Governing Question
    │   │   └── A4 Supporting Editorial Copy
    │   │
    │   ├── aside [A5 Editorial Reflection]
    │   │
    │   └── figure [A6 Standards Book]
    │
    ├── section [Region B — Manifesto]
    │   │
    │   ├── B1 Manifesto Label
    │   ├── B2 Manifesto Introduction
    │   │
    │   └── ol [ordered principles]
    │       ├── B3 Principle 01
    │       ├── B4 Principle 02
    │       ├── B5 Principle 03
    │       ├── B6 Principle 04
    │       └── B7 Principle 05
    │
    ├── section [Region C — Closing]
    │   │
    │   ├── C1 Closing Eyebrow
    │   ├── C2 Closing Headline
    │   ├── C3 Closing Emphasis
    │   └── C4 Closing Editorial Body
    │
    └── footer [Region D — Transition]
        └── D1 Scientific Confidence Link
```

This hierarchy is mandatory.

Merchant-to-region mapping is defined in `Appendix C.1`.

---

## 3.3 Region Responsibilities

## Region A — Hero

### Purpose

Introduce the philosophy.

### Structural Owner

`header`

### Contains

- Editorial declaration
- Governing question
- Supporting editorial copy
- Editorial reflection
- Standards Book photograph

### Structural Rules

- Hero is the first narrative movement.
- Hero owns the only photography in the chapter.
- Reflection belongs to the Hero.
- Photography belongs to the Hero.

---

## Region B — Manifesto

### Purpose

Demonstrate the philosophy through refusal principles.

### Structural Owner

`section`

### Contains

- Editorial label
- Editorial introduction
- Ordered refusal principles

### Structural Rules

- Principles form one uninterrupted editorial sequence.
- Principle numbering is meaningful.
- Principle order is fixed.
- Principle 05 remains the final principle.
- The approved composition contains exactly five principles.
- The five-item count is fixed for this chapter variant.
- Principle 05 is the only emphasis item.

---

## Region C — Closing

### Purpose

Resolve the narrative.

### Structural Owner

`section`

### Contains

- Closing eyebrow
- Closing headline
- Closing emphasis
- Closing body

### Structural Rules

- Photography must not reappear.
- Closing remains typography-led.

---

## Region D — Transition

### Purpose

Hand the reader naturally into Scientific Confidence.

### Structural Owner

`footer`

### Contains

- Editorial transition link

### Structural Rules

- One transition only.
- Transition is editorial.
- Transition is not a promotional CTA.

---

## 3.4 Semantic Contract

The following semantic elements are fixed.

| Region | Semantic Element |
|----------|-----------------|
| Chapter | `article` |
| Hero | `header` |
| Hero image | `figure` |
| Manifesto | `section` |
| Manifesto principles | `ol` |
| Manifesto principle | `li` |
| Closing | `section` |
| Transition | `footer` |

These semantic elements shall not be downgraded.

Example:

Do **not** replace the ordered list with generic `div` elements.

The numbering is editorially meaningful.


### Section Labelling

Region B and Region C must have deterministic accessible heading relationships.

The Implementation Brief must define:

- which visible element labels Region B
- which visible element labels Region C
- the heading-level relationship between A2, Region B, and Region C
- any required `aria-labelledby` relationship

The Brief must preserve the approved visual typography while providing valid document semantics.

---

## 3.5 Grid Ownership

## Desktop

The chapter is composed on one editorial grid.

The grid governs:

- Hero
- Manifesto
- Closing
- Transition

Every major region participates in the same editorial rhythm.

---

## Hero

Desktop composition consists of three structural areas.

1. Editorial narrative
2. Editorial reflection
3. Standards Book photography

The Hero establishes the editorial spread.

---

## Manifesto

Desktop composition consists of two structural areas.

Left

- Editorial introduction

Right

- Ordered principles

The principles own their own internal rhythm.

---

## Closing

Desktop composition consists of two editorial columns.

Typography remains dominant.

Photography does not return.

---

## Transition

Transition occupies editorial width only.

It never establishes its own layout system.

---

## 3.6 Alignment Contract

Alignment is part of the structural contract.

The following alignment groups must remain intact.

---

## Editorial Spine

The following regions align on one editorial axis.

- A1
- A2
- A3
- A4
- B1
- B2
- C1
- C2
- C3
- C4
- D1

This establishes the editorial reading spine.

---

## Photography Axis

A6 establishes one photography axis.

Photography ownership ends after Region A.

No later region continues this alignment.

---

## Manifesto Grid

The five principles share one editorial grid.

The highlighted fifth principle follows exactly the same alignment.

Surface treatment creates emphasis.

Alignment does not.

---

## 3.7 Reading Order Contract

## Desktop Reading Order

1. A1 Editorial Eyebrow
2. A2 Hero Headline
3. A3 Governing Question
4. A4 Supporting Editorial Copy
5. A5 Editorial Reflection
6. A6 Standards Book
7. B1 Manifesto Label
8. B2 Manifesto Introduction
9. B3 Principle 01
10. B4 Principle 02
11. B5 Principle 03
12. B6 Principle 04
13. B7 Principle 05
14. C1 Closing Eyebrow
15. C2 Closing Headline
16. C3 Closing Emphasis
17. C4 Closing Editorial Body
18. D1 Scientific Confidence Transition

Desktop layout may reposition regions visually.

It must never change this editorial sequence.

---

## Mobile Reading Order

1. A1 Editorial Eyebrow
2. A2 Hero Headline
3. A3 Governing Question
4. A4 Supporting Editorial Copy (including hero anchor link when present)
5. A6 Standards Book
6. B1 Manifesto Label
7. B2 Manifesto Introduction
8. B3 Principle 01
9. B4 Principle 02
10. B5 Principle 03
11. B6 Principle 04
12. B7 Principle 05
13. C1 Closing Eyebrow
14. C2 Closing Headline
15. C3 Closing Emphasis
16. C4 Closing Editorial Body
17. D1 Scientific Confidence Transition

**Normative — Region A5:** Region A5 is the single approved presentational duplicate in the shared responsive content tree.

- It is visually presented only at desktop ≥990px.
- It is not visually presented at tablet or mobile.
- It is excluded from the mobile reading sequence.
- It derives its content from A3 and A4.
- It must not introduce duplicate interactive content.
- Phase 2 must prevent duplicate assistive-technology reading of A5.

On mobile, the hero anchor link appears within the A4 editorial flow per the approved mobile mockup.

This follows the approved annotated mobile composition.

---

## 3.8 Responsive Behaviour Matrix

| Region | Desktop (≥990px) | Tablet (750–989px) | Mobile (≤749px) |
|----------|----------|----------|----------|
| Hero (A) | Editorial spread | Compressed spread | Vertical sequence |
| A5 Reflection | Independent editorial rail (visible) | Preserves the approved desktop editorial relationship while adapting to tablet width. Exact implementation defined in the Implementation Brief. | `display: none` |
| A6 Standards Book | Right photography column | Preserves the approved two-field Hero composition. Exact implementation defined in the Implementation Brief. | Hero-pair column; height matches A1–A4 block |
| Manifesto introduction | Independent editorial column | Full-width above list | Full-width |
| Principles | Ordered editorial list | Same sequence | Single-column list |
| Principle 05 | Surface emphasis | Surface emphasis | Surface emphasis |
| Closing | Two-column editorial | Reduced split | Two-column with vertical divider |
| Transition | Editorial width | Editorial width | Full-width |

Tablet must preserve the approved narrative order and must not introduce a third composition.

Exact tablet implementation mechanics belong to the Implementation Brief.

The tablet adaptation must:

- retain the Hero as a two-field editorial/photography composition
- hide A5
- preserve B1 → B2 → B3–B7 order
- preserve Principle 05 emphasis
- preserve the Closing two-part relationship
- preserve the D1 handoff

---

## 3.9 Wrapper Ownership

Wrapper hierarchy is intentionally restrained.

Permitted wrapper responsibilities:

- Chapter wrapper
- Region wrapper
- Layout wrapper
- Semantic wrapper

Wrapper chains that exist only for CSS convenience are prohibited.

Every wrapper must own one clearly identifiable responsibility.

---

## 3.10 Implementation Mapping

Region-to-merchant mapping and phase assignment are defined in `Appendix C.1`.

Engineering ownership (Liquid, CSS, merchant settings) is defined in `§5.3 Cursor Implementation Mapping`.

Cursor must not invent additional presentation regions.

---

## 3.11 Structural Invariants

The following are permanent structural constants.

- One shared responsive content tree.
- One Hero.
- One Manifesto.
- One Closing section.
- One Transition.
- One Standards Book photograph.
- One ordered principle list.
- One highlighted Principle 05.
- A5 desktop-only duplicate rail permitted; no other duplicated editorial content.
- No breakpoint-specific content trees.
- No photography beyond Region A.
- No structural changes after Composition Approval.
- Exactly five refusal principles.
- Principle 05 is the sole emphasis item.

Changing any of these constitutes redesign—not implementation.

---

## 3.12 Structural Acceptance Checklist

Before Phase 1 passes:

## DOM

- [ ] Canonical DOM hierarchy reproduced.
- [ ] Region IDs map one-to-one with the DOM.
- [ ] No duplicated editorial content beyond approved A5 desktop rail.

---

## Semantics

- [ ] Correct semantic elements used.
- [ ] Ordered list preserved.
- [ ] Figure preserved.

---

## Responsive

- [ ] Desktop composition matches Specification.
- [ ] Tablet preserves the approved responsive composition defined in §3.8.
- [ ] Tablet implementation follows the approved Implementation Brief.
- [ ] Mobile composition matches Specification.
- [ ] No third composition introduced.

---

## Alignment

- [ ] Editorial spine preserved.
- [ ] Photography axis preserved.
- [ ] Manifesto grid preserved.

---

## Architecture

- [ ] One presentation owner.
- [ ] One CSS owner.
- [ ] Shared systems untouched.
- [ ] No structural drift from the approved Specification.

---

## 3.13 Section 3 Approval Criteria

This section is complete when:

- One canonical DOM hierarchy exists.
- Every region has a semantic owner.
- Region responsibilities are frozen.
- Grid ownership is explicit.
- Reading order is deterministic.
- Responsive transformation is defined.
- Wrapper ownership is constrained.
- Cursor implementation mapping is documented.
- Structural invariants are frozen.
- Structural acceptance criteria are objective.

Two independent frontend engineers should produce materially identical presentation DOM structures from this section alone.


# SECTION 4 — Design Contract

## Purpose

This section freezes the approved visual implementation roles for the chapter.

`§1 Identity & Narrative Contract` defines why the chapter exists.

`§2 Visual Contract` defines what the visitor must see.

`§3 Structural Contract` defines how the presentation is structurally organised.

`§4 Design Contract` defines how each editorial role maps to canonical sources and implementation value categories.

**Normative rule:** `§4 Design Contract` must not duplicate numeric values. All approved measurements live in `Appendix A`.

---

# 4.1 Typography Contract

## Purpose

Freeze the approved typography role ownership for every editorial region.

Typography shall consume shared PulseOps voice primitives where they exist. Chapter-local implementation constants shall be used only where no canonical token matches the approved mockup annotation.

---

## Typography Roles

| Editorial Role | Canonical Source | Value Reference | Mockup Reference | Owner |
|---|---|---|---|---|
| A1 Editorial Eyebrow | Chapter-local implementation constant | See `Appendix A.1` | Desktop A1 / Mobile A1 | Region A |
| A2 Hero Headline | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop A2 / Mobile A2 | Region A |
| A3 Governing Question | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop A3 / Mobile A3 | Region A |
| A4 Supporting Copy | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop A4 / Mobile A4 | Region A |
| A5 Editorial Reflection | Derived from A3/A4 content; chapter-local presentation | See `Appendix A.1` | Desktop A5 | Region A |
| B1 Manifesto Label | Chapter-local implementation constant | See `Appendix A.1` | Desktop B1 / Mobile B1 | Region B |
| B2 Manifesto Introduction | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop B0/B2 / Mobile B2 | Region B |
| B3–B7 Principle Number | Chapter-local implementation constant | See `Appendix A.1` | Desktop B3–B7 / Mobile B2-01–05 | Region B |
| B3–B7 Principle Title | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop B3–B7 / Mobile B2-01–05 | Region B |
| B3–B7 Principle Body | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop B3–B7 / Mobile B2-01–05 | Region B |
| C1 Closing Eyebrow | Chapter-local implementation constant | See `Appendix A.1` | Desktop C1 / Mobile C1 | Region C |
| C2 Closing Headline | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop C2 / Mobile C2 | Region C |
| C3 Closing Emphasis | `var(--sp-font-heading)` + chapter-local accent colour | See `Appendix A.1` | Desktop C3 / Mobile C2 emphasis | Region C |
| C4 Closing Body | `var(--sp-font-heading)` + chapter-local size constants | See `Appendix A.1` | Desktop C4 / Mobile C2 right column | Region C |
| D1 Transition Link | Chapter-local implementation constant | See `Appendix A.1` | Desktop D1 / Mobile D1 | Region D |

## Typography Rules

Implementation must preserve the hierarchy and relationships defined in `Appendix A.1`.

Implementation may consume shared typography utilities but must not redefine global voice tokens in shared system files.

---

# 4.2 Colour & Surface Contract

## Purpose

Freeze the approved colour and surface role ownership.

Colours shall be expressed as chapter-local implementation constants unless an existing canonical surface token provides an exact approved match.

---

## Colour and Surface Roles

| Role | Canonical Source | Value Reference | Mockup Reference | Owner |
|---|---|---|---|---|
| Chapter canvas | Approved mockup value; canonical token only when computed value matches | See `Appendix A.2` | Desktop background / Mobile `--color-bg` | Chapter shell |
| Primary ink | Chapter-local implementation constant | See `Appendix A.2` | `--color-text` | Typography |
| Secondary / muted ink | Chapter-local implementation constant | See `Appendix A.2` | `--color-muted` | Typography |
| Editorial accent (icons, italic emphasis) | Chapter-local implementation constant | See `Appendix A.2` | `--color-accent` | Regions A2, B icons, C3 |
| Divider / rule | `--sp-surface-material-manifesto-rule` (consume) or chapter-local constant | See `Appendix A.2` | `--color-line` | Manifesto, closing |
| Principle 05 emphasis surface | Chapter-local implementation constant | See `Appendix A.2` | `--color-surface` (mobile B2-05) | Region B7 |
| Closing surface | Chapter-local implementation constant | See `Appendix A.2` | Desktop closing band | Region C |
| Transition surface | Transparent handoff | See `Appendix A.2` | Region D | Region D |

## Colour Rules

No new global colour tokens shall be introduced during Phase 1.

Chapter-local constants shall be scoped to the philosophy manifesto presentation branch per `§5.1`.

---

# 4.3 Layout Contract

## Purpose

Freeze the approved layout geometry roles without restating measurements.

---

## Layout Roles

| Region / Contract | Governing Rule | Value Reference | Mockup Reference | Owner |
|---|---|---|---|---|
| Chapter maximum width | 12-column editorial grid inside bounded content frame | See `Appendix A.3` | Desktop layout notes | Chapter |
| Hero spread | 7-column editorial / 5-column photography | See `Appendix A.3` | Desktop A | Region A |
| A5 reflection rail | Independent editorial column left of photography (desktop only) | See `Appendix A.3` | Desktop A5 | Region A |
| Manifesto split | Introduction column + five-column principle grid | See `Appendix A.3` | Desktop B | Region B |
| Closing split | Two editorial columns with vertical divider (mobile) | See `Appendix A.3` | Desktop C / Mobile C | Region C |
| Transition width | Editorial width only; centred link | See `Appendix A.3` | Desktop D / Mobile D | Region D |
| Principle internal grid | One icon + title + divider + body per principle | See `Appendix A.3` | Desktop B3–B7 / Mobile list | Region B |
| Photography width | Right-column ownership (desktop); hero-pair column (mobile) | See `Appendix A.3` | Desktop A6 / Mobile A6 | Region A6 |

## Layout Rules

Desktop and mobile are independent editorial compositions per `§2 Visual Contract`.

Tablet shall preserve the approved desktop and mobile compositions. Exact implementation mechanics are defined in the Implementation Brief.

---

# 4.4 Spacing Contract

## Purpose

Freeze the approved editorial rhythm ownership.

---

## Spacing Roles

| Relationship | Governing Rule | Value Reference | Mockup Reference | Owner |
|---|---|---|---|---|
| Chapter entry / exit padding | Section-shell padding + approved chapter inset | See `Appendix A.4` | Desktop 120px vertical | Shell + chapter |
| Region A internal rhythm | Hero declaration → reflection → photography cadence | See `Appendix A.4` | Desktop / Mobile A | Region A |
| Region A → Region B | Major block separation | See `Appendix A.4` | 48px block / 56px mobile block | Chapter |
| Manifesto intro → principles | Editorial lead-in to ordered list | See `Appendix A.4` | Desktop B / Mobile B | Region B |
| Principle row spacing | Divider-separated editorial rows (mobile); column rhythm (desktop) | See `Appendix A.4` | Mobile list | Region B |
| Region B → Region C | Major block separation | See `Appendix A.4` | Chapter gap | Chapter |
| Closing internal rhythm | Eyebrow → headline → emphasis → body | See `Appendix A.4` | Desktop C / Mobile C | Region C |
| Region C → Region D | Quiet handoff spacing | See `Appendix A.4` | Transition band | Region D |
| Region D → Scientific Confidence | Exit seam owned by adjacent chapter shell | See `Appendix A.4` | Handoff to `#sp-quality` | Transition + shell |

## Spacing Rules

Spacing may consume shared rhythm tokens where applicable (`--sp-rhythm-gap-*` from `assets/sp-typography-language.css`).

Chapter-specific spacing constants are permitted only where required by the approved mockup annotations.

---

# 4.5 Photography Contract

## Purpose

Freeze the approved photographic role ownership for Region A6 only.

---

## Photography Roles

| Property Category | Governing Rule | Value Reference | Mockup Reference | Owner |
|---|---|---|---|---|
| Asset identity | Single Standards Book image via merchant `image` setting | See `Appendix A.5` | Desktop A6 / Mobile A6 | Region A6 |
| Rendered geometry | Frame height is governed by the approved Hero composition at each breakpoint | See `Appendix A.5` | Desktop / Mobile mockups | Region A6 |
| Crop behaviour | Image fills the approved photography frame without distortion; borderless; non-card | See `Appendix A.5` | `§2.9` Photography Perception | Region A6 |
| Focal behaviour | Book cover centred; subject = Standards Book + pen | See `Appendix A.5` | Desktop A6 / Mobile A6 | Region A6 |
| Responsive behaviour | Independent desktop/mobile rendered geometry | See `Appendix A.5` | Desktop / Mobile | Region A6 |

## Photography Rules

No additional photography may be introduced.

Photography ownership ends after Region A6.

---

# 4.6 Icon Contract

## Purpose

Freeze the approved icon role ownership for Regions B3–B7.

---

## Icon Roles

| Property Category | Governing Rule | Value Reference | Mockup Reference | Owner |
|---|---|---|---|---|
| Icon supply | One inline SVG per principle | See `Appendix A.6` | Desktop B3–B7 / Mobile B2-01–05 | Region B |
| Optical size | Consistent per breakpoint; subordinate to typography | See `Appendix A.6` | Desktop / Mobile icon annotations | Region B |
| Stroke system | Outline-only; 1.5px stroke | See `Appendix A.6` | Icon style annotations | Region B |
| Alignment | Index → icon → title → divider → body rhythm | See `Appendix A.6` | Manifesto grid | Region B |
| Principle 05 emphasis | Surface boundary does not change icon size | See `Appendix A.6` | Mobile B2-05 | Region B7 |

## Icon Rules

Icons remain decorative.

Typography remains dominant.

Icons must never become the chapter memory anchor.

---

# Section 4 Approval Criteria

This section is complete when:

- Every typography role maps to a canonical source or chapter-local constant category.
- Colour and surface roles map to `Appendix A.2`.
- Layout roles map to `Appendix A.3` without numeric duplication.
- Spacing roles map to `Appendix A.4` without numeric duplication.
- Photography roles map to `Appendix A.5`.
- Icon roles map to `Appendix A.6`.
- No CSS declarations exist in this section.
- No Liquid implementation exists in this section.
- No new design decisions have been introduced beyond the approved mockups.

`§4 Design Contract` documents role ownership.

It does not restate approved measurements.


# SECTION 5 — Implementation Contract

## Purpose

This section defines the engineering contract for Phase 1 and Phase 2 implementation.

`§1 Identity & Narrative Contract` through `§4 Design Contract` describe the approved chapter.

`§5 Implementation Contract` defines how that approved chapter maps onto the PulseOps implementation architecture.

It freezes:

- implementation ownership
- merchant ownership
- implementation boundaries
- Cursor responsibilities
- implementation budget
- implementation constraints

It intentionally does **not** describe implementation procedures.

Those belong to the Cursor Prompt and Cursor Implementation Standards.

---

# 5.1 Implementation Ownership

Every implementation responsibility shall have exactly one owner.

| Responsibility | Owner |
|---------------|-------|
| Presentation DOM | `sections/sp-editorial-differentiation.liquid` |
| Presentation Branch | `philosophy_manifesto` |
| Chapter CSS | `assets/sp-editorial-differentiation.css` |
| Demo Content | `templates/index.supplement.json` |
| Refusal Icons | `snippets/sp-philosophy-refusal-icon.liquid` |
| Shared Section Shell | `sp-section-hierarchy-open/close` |
| Typography System | PulseOps Typography Language |
| Surface System | PulseOps Surface Language |
| Composition System | PulseOps Composition System |

No responsibility may have multiple visual owners.

---

# 5.2 Merchant Mapping

Every visible region shall be classified.

## Merchant Editable

- Hero Eyebrow
- Hero Headline
- Governing Question
- Editorial Copy
- Standards Book Image
- Manifesto Label
- Manifesto Introduction
- Closing Eyebrow
- Closing Headline
- Closing Emphasis
- Closing Body
- Transition Label
- Hero Anchor Link (mobile, within A4 flow)

**Normative — Region A5:** Region A5 is not independently merchant-editable.

It is architecture-owned desktop presentation derived from:

- `governing_question`
- `body`

No dedicated A5 schema setting shall be introduced.

A5 must not contain links, controls, or other interactive content.

---

## Merchant Blocks

The five Refusal Principles.

Each principle consists of:

- Icon
- Title
- Supporting Copy

This specification defines exactly five Refusal Principles.

Phase 1 must render exactly five items in the approved order:

1. Principle 01
2. Principle 02
3. Principle 03
4. Principle 04
5. Principle 05 — emphasis item

A future variant with another principle count requires:

- a separately approved composition
- updated annotated mockups
- a specification revision

The current implementation must not infer a variable-count layout.

---

## Architecture Owned

The following are fixed.

- Chapter composition
- Region hierarchy
- Editorial rhythm
- Reading order
- Hero composition
- Manifesto composition
- Closing composition
- Transition composition

Merchants may never alter these.

---

# 5.3 Cursor Implementation Mapping

Cursor shall map each visual region to one implementation responsibility.

| Region | Liquid | CSS | Merchant |
|---------|--------|-----|----------|
| A | Hero | Hero Layout | Structure |
| A1 | Eyebrow | Typography | Setting |
| A2 | Headline | Typography | Setting |
| A3 | Question | Typography | Setting |
| A4 | Copy | Typography | Setting |
| A5 | Derived Reflection Rail | Editorial Layout | Architecture-owned presentation derived from A3 and A4 |
| A6 | Standards Book | Photography | Image |
| B1 | Label | Typography | Setting |
| B2 | Introduction | Editorial Layout | Setting |
| B3–B7 | Principle Blocks | Manifesto Layout | Blocks |
| C1 | Eyebrow | Typography | Setting |
| C2 | Headline | Typography | Setting |
| C3 | Emphasis | Typography | Setting |
| C4 | Body | Typography | Setting |
| D1 | Transition | Link Styling | Setting |

Cursor shall not invent additional implementation regions.

---

# 5.4 Allowed Files

Phase 1 implementation may modify only the following files.

| File | Responsibility |
|------|----------------|
| `sections/sp-editorial-differentiation.liquid` | Presentation DOM |
| `assets/sp-editorial-differentiation.css` | Chapter Presentation |
| `templates/index.supplement.json` | Demo Content (if required) |
| `snippets/sp-philosophy-refusal-icon.liquid` | Icon fidelity only |

Any additional production file requires explicit approval.

---

# 5.5 Prohibited Files

The following files shall not be modified during Phase 1.

## Shared Systems

- Typography Language
- Surface Language
- Composition System
- Editorial System
- Motion Language implementation
- Interaction implementation

---

## Platform

- theme.liquid
- app embeds
- pack registry
- shared snippets
- shared CSS infrastructure

---

## Adjacent Chapters

- Community Confidence
- Scientific Confidence

No neighbouring chapter may be modified to compensate for Formulation Philosophy.

---

# 5.6 Implementation Constraints

The following constraints are mandatory.

## Architecture

- Preserve existing section architecture.
- Preserve shared systems.
- Preserve merchant flexibility.

---

## Presentation

- Rebuild presentation DOM if required.
- Do not preserve incorrect structure.
- Maintain one presentation owner.

---

## CSS

- One chapter owner.
- No duplicate ownership.
- No presentation logic inside shared systems.

---

## Merchant Experience

Merchant flexibility shall not be reduced.

Future vertical adaptation shall remain possible.

---

# 5.7 Implementation Budget

## Complexity

High

---

## Expected Scope

| Item | Budget |
|------|--------|
| Section Files | 1 |
| CSS Owners | 1 |
| JSON Templates | 1 (optional) |
| Snippets | 1 (optional) |
| JavaScript | None |
| New Global Tokens | None |
| New Shared Systems | None |

If implementation exceeds this budget, stop and justify before continuing.

---

# 5.8 Implementation Risks

The following risks were identified during the Pre-Spec Audit.

| Risk | Prevention |
|------|------------|
| DOM reuse over composition fidelity | Rebuild presentation branch |
| Duplicate CSS ownership | Maintain single owner |
| Mobile inferred from desktop | Follow approved mobile composition |
| Existing implementation treated as baseline | Approved mockups remain authoritative |
| Shared system modification | Restrict implementation scope |

Cursor shall treat these as implementation guardrails.

---

# 5.9 Explicit Do-Not Rules

Cursor shall never:

- Redesign the approved composition.
- Infer mobile from desktop.
- Infer desktop from mobile.
- Preserve incorrect DOM for convenience.
- Duplicate editorial content.
- Create breakpoint-specific content trees.
- Convert editorial regions into cards.
- Introduce new photography.
- Introduce new interactions.
- Modify adjacent chapters.
- Modify shared systems.
- Expand implementation beyond the approved budget.
- Begin Phase 2 before Composition Approval.

---

# 5.10 Phase Responsibilities

## Phase 1 — Composition Build

Objective:

Faithfully reproduce the approved desktop and mobile compositions.

Phase 1 includes:

- Presentation DOM
- Chapter CSS
- Visual fidelity
- Responsive composition

Phase 1 excludes:

- Merchant hardening
- Accessibility refinement
- Theme Check cleanup
- Performance optimisation
- Architecture cleanup

---

## Phase 2 — Production Hardening

Objective:

Transform the approved composition into production-ready implementation.

Includes:

- Merchant configurability
- Accessibility
- Theme Check
- Runtime validation
- CSS cleanup
- Architecture hygiene
- Freeze preparation
- Assistive-technology treatment for the A5 presentational duplicate

Phase 2 must preserve the approved Phase 1 composition.

---

# 5.11 Implementation Invariants

The following implementation characteristics are permanent.

- One presentation owner.
- One CSS owner.
- One shared responsive content tree.
- One merchant mapping.
- One implementation budget.
- One approved composition.
- One implementation contract.

Implementation quality may improve.

Composition may not change.

---

# Section 5 Approval Criteria

This section is complete when:

- Every implementation responsibility has one owner.
- Merchant ownership is frozen.
- Cursor implementation mapping is explicit.
- Allowed and prohibited files are documented.
- Implementation constraints are frozen.
- Budget is declared.
- Risks are documented.
- Phase responsibilities are separated.
- Do-not rules are comprehensive.
- No implementation procedure has been introduced.

Section 5 defines the engineering contract.

It does not define the implementation workflow.


# SECTION 6 — Validation & Acceptance Contract

## Purpose

This section defines the validation and acceptance gates for the chapter.

The preceding sections establish:

- Narrative (`§1`)
- Visual contract (`§2`)
- Structural contract (`§3`)
- Design contract (`§4`)
- Implementation contract (`§5`)

`§6 Validation & Acceptance Contract` determines whether the implementation faithfully reproduces those contracts.

No implementation may proceed to Phase 2 or Freeze without satisfying this section.

---

# 6.1 Validation Philosophy

Validation verifies implementation.

Acceptance verifies fidelity.

Implementation is not considered complete because:

- Theme Check passes.
- The site renders correctly.
- The code is maintainable.

Implementation is complete only when the rendered experience faithfully reproduces the approved chapter.

Visual correctness and engineering correctness are independent acceptance gates.

Both are mandatory.

---

# 6.2 Phase Validation Gates

## 6.2A Composition Drift Rule

Once Phase 1 receives Composition Approval, the approved desktop and mobile compositions become frozen.

Any subsequent DOM, layout, spacing, typography, or visual modification that affects the rendered composition shall be treated as composition drift.

Composition drift requires:

- comparison against the approved acceptance screenshots
- explicit re-approval before implementation continues

Engineering improvements made during Phase 2 shall preserve the approved Phase 1 composition.

## Phase 1

### Composition Build

Required outputs:

- Presentation DOM
- Chapter CSS
- Responsive composition

Required validation:

- Desktop composition
- Mobile composition
- Region hierarchy
- Reading order

Phase 1 ends with **Composition Approval**.

---

## Phase 2

### Production Hardening

Required outputs:

- Merchant configurability
- Accessibility
- Theme Check
- Runtime validation
- Architecture hygiene

Phase 2 must preserve the approved Phase 1 composition.

---

# 6.3 Region Validation Matrix

Every region shall be validated independently.

| Region | Desktop | Mobile | Pass |
|---------|----------|---------|------|
| A Hero | □ | □ | □ |
| B Manifesto | □ | □ | □ |
| C Closing | □ | □ | □ |
| D Transition | □ | □ | □ |

No region may be accepted collectively.

Every region receives an independent review.

---

# 6.4 Desktop Composition Checklist

The desktop implementation shall be compared directly against the Approved Desktop Acceptance Screenshot.

Review the following.

---

## Hero

- [ ] Hero composition matches.
- [ ] Hero proportions match.
- [ ] Hero typography matches.
- [ ] Standards Book placement matches.
- [ ] Reflection placement matches.
- [ ] Reading hierarchy matches.
- [ ] Editorial alignment matches.

---

## Manifesto

- [ ] Introduction matches.
- [ ] Principle ordering matches.
- [ ] Principle alignment matches.
- [ ] Principle spacing matches.
- [ ] Principle 05 emphasis matches.
- [ ] Icon treatment matches.

---

## Closing

- [ ] Closing composition matches.
- [ ] Editorial hierarchy matches.
- [ ] Emphasis treatment matches.
- [ ] Visual rhythm matches.

---

## Transition

- [ ] Transition placement matches.
- [ ] Transition hierarchy matches.
- [ ] Transition remains editorial.
- [ ] Scientific Confidence handoff feels natural.

---

# 6.5 Mobile Composition Checklist

The mobile implementation shall be compared directly against the Approved Mobile Acceptance Screenshot.

Review the following.

---

## Hero

- [ ] Mobile reading order matches.
- [ ] Typography hierarchy matches.
- [ ] Standards Book placement matches.
- [ ] A5 reflection rail not presented (`display: none`).
- [ ] Hero anchor within A4 flow when present.

---

## Manifesto

- [ ] Single-column reading rhythm matches.
- [ ] Principle ordering matches.
- [ ] Principle 05 emphasis matches.
- [ ] Editorial rhythm matches.

---

## Closing

- [ ] Closing hierarchy matches.
- [ ] Typography hierarchy matches.
- [ ] Editorial spacing matches.

---

## Transition

- [ ] Transition remains calm.
- [ ] Scientific Confidence handoff remains natural.

---

# 6.6 Structural Validation

Confirm the implementation satisfies `§3 Structural Contract`.

- [ ] Canonical DOM hierarchy reproduced.
- [ ] Region IDs map one-to-one with the DOM.
- [ ] Correct semantic elements used.
- [ ] Reading order preserved.
- [ ] Responsive mapping preserved.
- [ ] Wrapper ownership preserved.
- [ ] Structural invariants preserved.

---

# 6.7 Design Validation

Confirm the implementation satisfies `§4 Design Contract`.

---

## Typography

- [ ] Approved typography hierarchy reproduced.
- [ ] Approved typography roles preserved.
- [ ] Typography tokens correctly consumed.

---

## Colour & Surface

- [ ] Approved colour hierarchy preserved.
- [ ] Approved surface hierarchy preserved.
- [ ] No unauthorised colours introduced.

---

## Layout

- [ ] Hero geometry matches.
- [ ] Manifesto geometry matches.
- [ ] Closing geometry matches.
- [ ] Transition geometry matches.

---

## Photography

- [ ] Standards Book remains the only photograph.
- [ ] Approved crop preserved.
- [ ] Approved visual weight preserved.

---

## Icons

- [ ] Approved icon style reproduced.
- [ ] Icons remain subordinate to typography.

---

# 6.8 Engineering Validation

Confirm the implementation satisfies `§5 Implementation Contract`.

- [ ] Allowed files only.
- [ ] No prohibited files modified.
- [ ] One presentation owner.
- [ ] One CSS owner.
- [ ] Merchant mapping preserved.
- [ ] Implementation budget respected.
- [ ] No implementation drift.

---

# 6.9 Merchant Validation

Confirm:

- [ ] Merchant content remains editable.
- [ ] Merchant flexibility preserved.
- [ ] No hardcoded production behaviour introduced.
- [ ] Chapter remains reusable across future verticals.

## Duplicate Presentation Validation

- [ ] A5 contains no links, controls, or focusable content.
- [ ] A5 does not create duplicate assistive-technology reading.
- [ ] A3 and A4 remain the canonical accessible content source.

---

# 6.10 Acceptance Decision

Desktop

**PASS / FAIL**

---

Mobile

**PASS / FAIL**

---

Engineering

**PASS / FAIL**

---

Merchant

**PASS / FAIL**

---

Overall Chapter

**PASS / FAIL**

---

# 6.11 Stop Conditions

Implementation must stop immediately if any of the following occur.

- Composition no longer matches approved mockups.
- Region hierarchy changes without specification update.
- Additional implementation owners appear.
- Shared systems require modification.
- Merchant flexibility is reduced.
- Implementation exceeds approved budget.
- Desktop and mobile diverge from approved compositions.

Stop.

Resolve the issue before continuing.

---

# 6.12 Definition of Complete

The Formulation Philosophy chapter is considered complete only when all of the following are true.

## Narrative

- Buyer question answered.
- Memory anchor preserved.
- Narrative handoff maintained.

---

## Visual

- Approved annotated mockups faithfully reproduced.
- Visual ownership preserved.
- Editorial rhythm preserved.

---

## Structural

- Canonical DOM reproduced.
- Responsive behaviour preserved.
- Structural invariants maintained.

---

## Design

- Typography reproduced.
- Layout reproduced.
- Surface reproduced.
- Photography reproduced.

---

## Engineering

- Implementation contract satisfied.
- Merchant flexibility preserved.
- Architecture preserved.
- Production quality achieved.

---

## Acceptance

- Desktop: PASS
- Mobile: PASS
- Engineering: PASS
- Merchant: PASS

Composition Approval granted.

Production Hardening complete.

Chapter approved for Freeze.

---

# 6.13 Determinism Review

**Question:**

> Could two senior frontend engineers independently implement this specification and produce materially different DOM structures, breakpoint mappings, typography systems, image treatments, or region relationships?

**Result:** PASS

**Reference:** Final determinism refinement pass 2026-07-12 (`1.0-d2`).

PASS requires:

- No unresolved structural ambiguity
- No unresolved region hierarchy
- No unresolved desktop/mobile order
- No invented token names
- Appendix A completed or every remaining TBD explicitly approved as non-blocking
- Appendix C fully mapped
- Acceptance screenshots named exactly
- Implementation budget frozen

**Correction pass requirements:**

- Canonical implementation IDs mapped to original desktop and mobile annotation labels
- A5 ownership and breakpoint behaviour made consistent
- Exactly five refusal principles frozen
- Rendered image frame made layout-driven rather than source-ratio-driven
- Invalid or unapproved tablet `clamp()` mechanics removed
- Approved chapter canvas corrected to `#F6F3EF`
- A5 duplicate accessible-reading requirement added
- Region B and C semantic labelling delegated deterministically to the Implementation Brief

**Remaining non-blocking TBD:**

| Item | Section | Classification |
|---|---|---|
| A2 headline letter spacing | Appendix A.1 | Non-blocking — not annotated on approved mockups |

**Normative rule:**

- Implementation Brief must not be generated until the correction pass is manually verified.
- After verification, update the result to `PASS`.
- Then update document status to `Approved for Implementation Brief`.
- Status must not advance to `Approved for Phase 1` until the Brief is also approved.

---

# Specification Correction Verification

- [ ] Canonical Region IDs are mapped to desktop and mobile mockup annotations.
- [ ] A5 is consistently architecture-owned and derived from A3/A4.
- [ ] A5 is visible only at desktop ≥990px.
- [ ] A5 does not create duplicate accessible reading.
- [ ] Exactly five principles are frozen.
- [ ] Principle 05 is the only emphasis item.
- [ ] A6 source ratio and rendered frame geometry are distinguished.
- [ ] No fixed desktop or mobile rendered aspect ratio is claimed.
- [ ] No invalid `clamp()` or `fr` expression remains.
- [ ] Tablet implementation mechanics are deferred to the Implementation Brief.
- [ ] Chapter canvas equals `#F6F3EF`.
- [ ] Region B and C semantic labelling requirements are recorded.
- [ ] No other unresolved structural contradiction remains.

**Verification Result:** PASS / FAIL

---

# End of Implementation Specification

This document is the production implementation contract for the Formulation Philosophy chapter.

Any change to:

- Narrative
- Composition
- Region hierarchy
- Design contract
- Implementation contract

constitutes a design change and requires this specification to be updated before implementation continues.

Implementation must always follow this specification.

It must never reinterpret it.

---

# Specification → Implementation Brief

The Implementation Brief translates this specification into:

- Liquid architecture
- Merchant schema
- CSS architecture
- Region implementation
- Responsive implementation
- Accessibility strategy
- Engineering validation

The Implementation Brief may define implementation mechanics.

It shall not modify or reinterpret this specification.

Any change to the approved composition requires an update to this specification before implementation proceeds.

---

# Glossary

| Term | Definition |
|---|---|
| Acceptance Screenshot | An approved annotated mockup image used as the visual authority for Composition Approval at 1440px (desktop) and 390px (mobile). |
| Architecture Owner | The production file that owns presentation DOM for a chapter. For Formulation Philosophy: `sections/sp-editorial-differentiation.liquid`. |
| Composition Approval | Phase 1 gate confirming desktop and mobile implementations match the approved acceptance screenshots. |
| Design Authority | The approved annotated desktop and mobile mockups. They override all prior implementation artifacts. |
| Editorial Rhythm | The approved spacing cadence between editorial regions and within-region elements. |
| Editorial Spine | The shared left-axis alignment group defined in `§2.6` and `§3.6`. |
| Implementation Budget | The frozen file and scope limits in `Appendix D` that Phase 1 and Phase 2 must not exceed without approval. |
| Implementation Constant | A chapter-local value scoped to `.sp-editorial-differentiation--philosophy-manifesto` when no global token matches the approved mockup. |
| Memory Anchor | The Standards Book photograph (Region A6) — the chapter's single photographic memory anchor. |
| Normative | A mandatory requirement using must/shall language. |
| Informative | Explanatory context that does not itself impose a requirement. |
| Photography Budget | One dominant Standards Book photograph in Region A6 only. |
| Presentation Branch | The `philosophy_manifesto` conditional branch inside `sections/sp-editorial-differentiation.liquid`. |
| Presentation Owner | The file responsible for presentation DOM. Same as Architecture Owner for this chapter. |
| Region ID | Permanent identifier (A–D and child IDs) mapping mockup regions to DOM, CSS, and merchant settings. |
| Structural Authority | This Implementation Specification — the executable structural contract derived from approved mockups. |
| Visual Owner | The dominant visual system responsible for a region per `§2.4`. |

---

# APPENDICES

The appendices form part of the Implementation Specification.

Unlike the six primary sections, the appendices are implementation references.

They do not define new design decisions.

They document the approved implementation evidence used during production.

---

# Appendix A — Approved Implementation Values

## Purpose

This appendix records **approved implementation values only**.

Values are chapter-local implementation constants unless a canonical PulseOps token is explicitly listed.

Explanatory commentary lives in subsection **Notes** blocks below each table.

If the approved mockups change, this appendix must be updated.

---

## A.1 Typography

| Region / Role | Font Family | Weight | Desktop Size | Desktop Line Height | Mobile Size | Mobile Line Height | Letter Spacing | Text Wrap | Max Measure | Colour |
|---|---|---:|---:|---:|---:|---:|---|---|---|---|
| A1 Editorial Eyebrow | `var(--sp-font-heading)` | 500 | 12px | 20px | 12px | 20px | 0.18em / 0.12em | — | — | `#5B5B5B` |
| A2 Hero Headline | `var(--sp-font-heading)` | 500 | 64px | 72px | 40px | 44px (`line-height: 1.1`) | TBD — non-blocking | `text-wrap: balance` | — | `#1A1A1A`; `<em>` `#7A4A3A` |
| A3 Governing Question | `var(--sp-font-heading)` | 500 | 22px | 32px (`line-height: 1.45`) | 18px | 27px (`line-height: 1.5`) | `normal` | — | — | `#1A1A1A` |
| A4 Supporting Copy | `var(--sp-font-heading)` | 400 | 18px | 30px (`line-height: 1.6`) | 16px | 25.6px (`line-height: 1.6`) | `normal` | — | — | `#5B5B5B` |
| A5 Editorial Reflection | `var(--sp-font-heading)` | 500 / 400 | Same as A3 / A4 | Same as A3 / A4 | `display: none` | — | Same as A3 / A4 | — | — | Same as A3 / A4 |
| B1 Manifesto Label | `var(--sp-font-heading)` | 500 | 12px | 20px | 12px | 16.8px (`line-height: 1.4`) | 0.18em / 0.12em | — | — | `#5B5B5B` |
| B2 Manifesto Introduction | `var(--sp-font-heading)` | 500 | 24px | 31.68px–32.4px (`line-height: 1.32–1.35`) | 20px | 27px (`line-height: 1.35`) | `-0.015em` | — | `36ch` | `#1A1A1A` |
| B3–B7 Principle Number | `var(--sp-font-heading)` | 500 | 12px | 12px (`line-height: 1.0`) | 12px | 12px | `0.08em` | — | — | `#5B5B5B` |
| B3–B7 Principle Title | `var(--sp-font-heading)` | 500 | 22px | 28.6px (`line-height: 1.3`) | 20px | 26px (`line-height: 1.3`) | `-0.015em` | `text-wrap: balance` | — | `#1A1A1A` |
| B3–B7 Principle Body | `var(--sp-font-heading)` | 400 | 16px | 25.6px (`line-height: 1.6`) | 15px | 24px (`line-height: 1.6`) | `normal` | — | — | `#5B5B5B` |
| C1 Closing Eyebrow | `var(--sp-font-heading)` | 500 | 12px | 20px | 12px | 16.8px (`line-height: 1.4`) | 0.18em / 0.12em | — | — | `#5B5B5B` |
| C2 Closing Headline | `var(--sp-font-heading)` | 500 | 40px | 44px (`line-height: 1.1`) | 28px | 32.2px (`line-height: 1.15`) | `-0.025em` | `text-wrap: balance` | — | `#1A1A1A` |
| C3 Closing Emphasis | `var(--sp-font-heading)` | 500 italic | 40px | 44px (`line-height: 1.1`) | 28px | 32.2px (`line-height: 1.15`) | `-0.02em` | `text-wrap: balance` | — | `#7A4A3A` |
| C4 Closing Body | `var(--sp-font-heading)` | 400 | 18px | 28.8px (`line-height: 1.6`) | 16px | 25.6px (`line-height: 1.6`) | `normal` | — | `38ch` | `#5B5B5B` |
| D1 Transition Link | `var(--sp-font-heading)` | 500 | 12px | 16.8px–24px (`line-height: 1.4–2.0`) | 12px | 16.8px (`line-height: 1.4`) | `0.12em`; `text-transform: uppercase` | — | — | `#5B5B5B`; hover `#7A4A3A` |

### A.1 Notes

- **Reference:** `--sp-font-heading` is defined in `assets/sp-supplement-type.css`.
- Mockup typography values are chapter-local constants because approved mockup sizes do not map 1:1 to existing `--sp-voice-*` tokens.
- **A2 letter spacing:** Not annotated on approved mockups. Classified **non-blocking**; Implementation Brief may adopt `normal` unless design authority supplies a value before Phase 1.

---

## A.2 Colour and Surface

| Role | Canonical Token | Resolved Value | Region |
|---|---|---|---|
| Chapter canvas | Use canonical token only when its computed value matches the approved mockup; otherwise use a chapter-local constant | `#F6F3EF` | Chapter shell |
| Primary ink | Chapter-local constant | `#1A1A1A` | A2–C2 |
| Secondary / muted ink | Chapter-local constant | `#5B5B5B` | A4, B body, C4, D1 |
| Editorial accent | Chapter-local constant | `#7A4A3A` | A2 `<em>`, B icons, C3 |
| Divider / rule | `--sp-surface-material-manifesto-rule` (consume) | `#E4DFD7` | B list, C divider |
| Principle 05 emphasis surface | Chapter-local constant | `#EEE8E3` | B7 |
| Closing surface | Chapter-local constant | `#EEEBE3` desktop / `#F8F3EF` mobile | C |
| Transition surface | — | `transparent` | D |

### A.2 Notes

- Mockup palette values take precedence at composition time when token aliases differ.
- Principle 05 desktop emphasis is typography-led; mobile adds bordered surface per mobile mockup B2-05.
- Approved desktop and mobile mockups specify the chapter canvas as `#F6F3EF`.
- A canonical token may be consumed only when its computed value matches `#F6F3EF`.
- Token convenience must not override the approved mockup value.

---

## A.3 Layout Geometry

| Contract | Desktop (≥990px) | Tablet (750–989px) | Mobile (≤749px) |
|---|---|---|---|
| Chapter maximum content width | `1320px` | Proportionally interpolated between the approved desktop and mobile widths. | `640px`; `margin-inline: auto` |
| Chapter horizontal gutter | `80px` `horizontal gutter` | Proportionally interpolated between desktop and mobile. | `24px` `horizontal gutter` |
| Editorial grid columns | `12`; `24px column gap` | `12`; Responsive column gap | `2` hero pair + full-width stacks |
| Hero column split | 7 editorial columns / 5 photography columns | Explicit tablet adaptation defined in the Implementation Brief; must remain between approved desktop and mobile compositions | Hero pair: 44% editorial / 56% photography |
| A5 reflection rail | `3` columns; `border-inline-start: 1px solid #E4DFD7` | `display: none` | `display: none` |
| Manifesto split | `1.5` intro + `5` equal principle columns | Intro full-width; principles `5` columns compressed | Intro full-width; principles single column |
| Closing split | `7` statement / `5` support | Single column with divider transition | `2` columns; `16px` gap; `border-inline-start: 1px solid #E4DFD7` on right column |
| Transition width | Editorial centre | Editorial centre | Full-width centred link |
| Principle internal grid | Number → icon → title → divider → body (column stack) | Same sequence | `3` columns: index/icon stack, title, body |
| A6 image width | 5 of 12 editorial-grid columns | Explicit tablet adaptation defined in the Implementation Brief | 56% hero-pair column |
| A6 rendered frame | No fixed aspect ratio; fills the approved Hero photography field and Hero row height | No fixed aspect ratio; fills the approved tablet Hero photography field | No fixed aspect ratio; height matches the A1–A4 editorial block |
| A6 height ownership | Hero row height | Hero row height | A1–A4 editorial block outer height |

### A.3 Notes

- The Standards Book source asset has a native 1:1 ratio.
- The rendered A6 frame does not inherit the source asset ratio.
- Desktop and tablet A6 dimensions are governed by the approved Hero photography field and Hero row height.
- Mobile A6 height matches the outer height of the A1–A4 editorial block.

---

## A.4 Spacing and Rhythm

| Relationship | Desktop (≥990px) | Tablet Contract | Mobile (≤749px) |
|---|---|---|---|
| Chapter entry padding | `120px` top + shell extras | Preserve the proportional relationship between the approved desktop and mobile values. Exact implementation is defined in the Implementation Brief. | `120px` top equivalent after shell scaling |
| Chapter exit padding | `120px` bottom + shell extras | Preserve the proportional relationship between the approved desktop and mobile values. Exact implementation is defined in the Implementation Brief. | `120px` bottom equivalent after shell scaling |
| A1 → A2 | `16px` | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `16px` |
| A2 → A3 | `32px` | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `24px` |
| A3 → A4 | `16px` | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `20px` |
| A4 → A6 | `48px` block gap | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `20px` hero-pair row gap |
| Region A → Region B | `48px` block gap | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `56px` block gap |
| B1 → B2 | `16px` | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `16px` |
| B2 → principle list | `48px` block gap | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `32px` block gap |
| Principle row spacing | `24px` column gap | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `2rem` row padding; `1px` dividers |
| Principle divider | `1px solid #E4DFD7` | Same | Same |
| Region B → Region C | `48px` block gap | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `56px` block gap |
| C1 → C2 | `16px` | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `12px` |
| C2 → C3 | `8px` | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `6px` |
| C3 → C4 | Column split (desktop) / vertical divider (mobile) | Divider transition | `16px` column gap + left border |
| Region C → Region D | `48px` transition pad | Preserve proportional relationship between approved desktop and mobile values; exact implementation defined in the Implementation Brief | `40px` top / `48px` bottom |
| Region D → Scientific Confidence | Adjacent chapter shell padding (`#sp-quality`) | Same | Same |

### A.4 Notes

- Chapter entry/exit padding includes section-shell extras per `templates/index.supplement.json` (`padding_top: 120`, `padding_bottom: 120`).
- Region D → Scientific Confidence seam is owned by the adjacent chapter shell per Pre-Spec Architecture Audit.

---

## A.5 Photography

| Property | Desktop (≥990px) | Tablet (750–989px) | Mobile (≤749px) |
|---|---|---|---|
| Asset filename | `formulation_philosophy_image_20260709.png` | Same | Same |
| Merchant setting | `image` | Same | Same |
| Native dimensions | `2400 × 2400 px` | Same | Same |
| Native aspect ratio | `1 / 1` | Same | Same |
| Rendered frame geometry | Layout-driven Hero photography field | Layout-driven tablet Hero photography field | Layout-driven; height matches A1–A4 block |
| Image fill behaviour | Image fills photography frame without distortion |
| Focal point | Book cover centre (`NO.` text) | Same | Same |
| Subject position | Book cover visually centred |
| Width | `41.67%` (`5/12`) | `clamp(41.67%, 5/12, 56%)` | `56%` hero-pair column |
| Height | Equals approved desktop Hero row height | Equals approved tablet Hero row height | Equals A1–A4 editorial block outer height |
| `border-radius` | No rounded treatment. |
| `border` | `none` | `none` | `none` |
| `box-shadow` | No elevation treatment. |
| Alt text (demo) | `NO. OUR STANDARDS book with pen` | Same | Same |
| Fallback | Figure omitted when `show_philosophy_image` is false or image blank | Same | Same |

### A.5 Notes

- Subject framing authority: Standards Book with pen; book cover `NO.` text centred in frame.
- The source asset is 1:1; the rendered frame is composition-driven.
- No fixed rendered aspect ratio is required by the approved desktop or mobile mockups.
- Mobile height behaviour is annotated on the approved mobile mockup (image column matches A1–A4 block height).
- Photography ownership ends after Region A6 per `§2.9`.

---

## A.6 Icons and Rules

| Property | Desktop (≥990px) | Mobile (≤749px) |
|---|---|---|
| Icon dimensions | `24px × 24px` | `20px × 20px` |
| ViewBox | `0 0 24 24` | `0 0 24 24` |
| Stroke width | `1.5px` | `1.5px` |
| Stroke linecap | `round` | `round` |
| Stroke linejoin | `round` | `round` |
| Icon colour | `#7A4A3A` via `currentColor` | Same |
| Icon-to-number gap | `12px` | `12px` |
| Icon-to-title gap | `12px` | `12px` |
| Divider thickness | `1px` | `1px` |
| Divider style | `solid` horizontal rule | Same |
| Divider colour | `#E4DFD7` | Same |
| Principle 05 surface padding | — | `2rem` vertical / `1.6rem` horizontal |
| Principle 05 emphasis boundary | Typography-led (desktop) | `1px solid #E4DFD7` + surface `#EEE8E3` |

### A.6 Notes

- Icon supply: `snippets/sp-philosophy-refusal-icon.liquid` (five icons: `prohibited`, `not_equal`, `shield`, `megaphone`, `package`).
- Icons are decorative; typography remains dominant.

---

## A.7 Breakpoints

| Viewport Category | Min Width | Max Width | Acceptance Viewport |
|---|---:|---:|---|
| Mobile | — | `749px` | `390px` |
| Tablet | `750px` | `989px` | — |
| Desktop | `990px` | — | `1440px` |

### A.7 Notes

- Breakpoints match `docs/pulseops-implementation-specification-standard.md` and `docs/pulseops-implementation-brief-standard.md`.

Tablet behaviour preserves the approved desktop and mobile compositions.

Exact tablet implementation mechanics are defined in the Implementation Brief.

Tablet must not introduce a third editorial composition.

---

# Appendix B — Approved Reference Assets

## Purpose

Freeze every approved visual reference used during implementation.

---

## B.1 Desktop Acceptance Screenshot

| Field | Value |
|---|---|
| Filename | `formulation_philosophy_annotated_mockup_desktop_20260709-49c15a6f-34c8-4185-80bf-96a75b77422a.png` |
| Date | 2026-07-09 |
| Viewport | 1440px |
| Status | Approved visual authority |
| Regions covered | A–D (A1–A6, B1–B7, C1–C4, D1) |

---

## B.2 Mobile Acceptance Screenshot

| Field | Value |
|---|---|
| Filename | `formulation_philosophy_annotated_mockup_mobile_20260709-48af6539-0686-41ac-ba84-c62521036506.png` |
| Date | 2026-07-09 |
| Viewport | 390px |
| Status | Approved visual authority |
| Regions covered | A–D (A1–A6, B1–B7, C1–C4, D1) |

---

## B.3 Photography Assets

| Field | Value |
|---|---|
| JSON value | `shopify://shop_images/formulation_philosophy_image_20260709.png` |
| Template reference | `templates/index.supplement.json` → `sp-editorial-differentiation.settings.image` |
| Liquid setting | `section.settings.image` |
| Alt text setting | `image_alt` — demo: `NO. OUR STANDARDS book with pen` |
| Shopify asset filename | `formulation_philosophy_image_20260709.png` |
| Native dimensions | 2400 × 2400 px (1:1) |
| Separate desktop/mobile images | No — single `image` setting only |
| Fallback | None — figure omitted when `show_philosophy_image` is false or image blank |
| Usage | Region A6 Standards Book only |

---

## B.4 Supporting Assets

| Asset | Type | Path | Notes |
|---|---|---|---|
| Refusal principle icons | Inline SVG snippet | `snippets/sp-philosophy-refusal-icon.liquid` | Supplies `prohibited`, `not_equal`, `shield`, `megaphone`, `package` icons at 24×24 viewBox |
| Decorative assets | None approved | — | No additional decorative assets shown in approved mockups |

---

# Appendix C — Region-to-Merchant Mapping

## Purpose

Map every Region ID to its semantic element, merchant setting, and implementation phase.

DOM class naming, CSS selector families, and Liquid wrapper naming are **Implementation Brief** responsibilities per Document Position.

Structural hierarchy is defined in `§3.2 Canonical DOM Hierarchy`.

---

## C.1 Region Mapping

| Region | Semantic Element | Merchant Setting / Block | Content Source | Phase | Presentation Rule |
|---|---|---|---|---|---|
| A | `header` | Architecture-owned structure | — | 1 | Hero wrapper |
| A1 | `p` | `eyebrow` | Merchant setting | 1 | Eyebrow ornament in presentation layer |
| A2 | `h2` | `heading` (richtext) | Merchant setting | 1 | Allows `<em>` emphasis |
| A3 | `p` | `governing_question` | Merchant setting | 1 | — |
| A4 | `div` | `body` (richtext) | Merchant setting | 1 | Includes mobile hero anchor link |
| A5 | `aside` | Derived | `governing_question` + `body` | 1 | Visible only at desktop ≥990px; not visually presented at tablet or mobile |
| A6 | `figure` | `image`, `image_alt`, `show_philosophy_image` | Merchant setting | 1 | Single Standards Book image |
| B | `section` | Architecture-owned structure | — | 1 | Manifesto wrapper |
| B1 | `p` | `refusals_label` | Merchant setting | 1 | — |
| B2 | `p` | `refusals_intro` | Merchant setting | 1 | Desktop B0 intro statement |
| B3 | `li` | `refusal_principle` block 1 (`title`, `text`, `icon`) | Merchant block | 1 | Principle 01 |
| B4 | `li` | `refusal_principle` block 2 | Merchant block | 1 | Principle 02 |
| B5 | `li` | `refusal_principle` block 3 | Merchant block | 1 | Principle 03 |
| B6 | `li` | `refusal_principle` block 4 | Merchant block | 1 | Principle 04 |
| B7 | `li` | `refusal_principle` block 5 + `emphasize: true` | Merchant block | 1 | Principle 05 highlighted |
| C | `section` | Architecture-owned structure | — | 1 | Anchor id `sp-differentiation-closing` |
| C1 | `p` | `closing_eyebrow` | Merchant setting | 1 | — |
| C2 | `h2` | `closing_headline` (richtext) | Merchant setting | 1 | — |
| C3 | `p` | `closing_emphasis` | Merchant setting | 1 | Rendered inside `<em>` |
| C4 | `div` | `closing_body` (richtext) | Merchant setting | 1 | — |
| D | `footer` | Architecture-owned structure | — | 1 | Single editorial handoff |
| D1 | `a` | `next_chapter_label`, `next_chapter_link` | Merchant setting | 1 | Demo target `#sp-quality` |

### C.1 Notes

- Mobile hero anchor maps to `hero_anchor_label` + `hero_anchor_link` within the A4 editorial flow.
- A5 duplicate rail is architecture-owned presentation of existing merchant content; no dedicated schema setting.

# Appendix D — Phase Implementation Budget

## Purpose

Freeze the expected implementation scope before coding begins.

---

## D.1 Phase 1 Budget

| Category | Approved Budget |
|---|---|
| Production files | 2 required, 2 conditional |
| Required files | `sections/sp-editorial-differentiation.liquid`, `assets/sp-editorial-differentiation.css` |
| Conditional files | `templates/index.supplement.json`, `snippets/sp-philosophy-refusal-icon.liquid` |
| New snippets | 0 |
| JavaScript | 0 |
| Global tokens | 0 |
| Shared-system edits | 0 |
| Required screenshots | 1440px and 390px |
| Theme Check | Deferred |
| Accessibility hardening | Deferred |
| Commit / push | Prohibited |

---

## D.2 Phase 2 Budget

| Category | Approved Budget |
|---|---|
| Merchant wiring | Settings audit, empty-setting guards, vertical reuse checks |
| Accessibility | Focus order, aria labels, contrast verification |
| Theme Check | Section + snippet validation |
| Runtime validation | Cascade + viewport harness |
| CSS cascade validation | Confirm no duplicate ownership |
| Freeze hygiene | Remove legacy residue, document freeze |
| Composition change | **Prohibited** |

---

## D.3 Escalation Rule

> If implementation exceeds the approved budget, Cursor must stop before editing additional files and request human approval.

---

## D.4 Validation Budget

| Validation | Phase |
|---|---|
| Desktop comparison (1440px) | Phase 1 |
| Mobile comparison (390px) | Phase 1 |
| DOM / region validation | Phase 1 |
| Merchant mapping validation | Phase 2 |
| Engineering / file-scope validation | Phase 1 + Phase 2 |
| Theme Check | Phase 2 |
| Freeze review | Phase 2 |

---

## D.5 Completion Budget

| Deliverable | Phase |
|---|---|
| Composition Approval | Phase 1 |
| Production Hardening | Phase 2 |
| Freeze Review | Phase 2 |
| Commit | Phase 2 (explicit approval only) |
| Tag | Phase 2 (explicit approval only) |
| Push | Phase 2 (explicit approval only) |

---

# Appendix E — Traceability Matrix

## Purpose

Map every major requirement to its authority source for audit and freeze review.

---

## E.1 Requirement Traceability

| Requirement | Specification Section | Annotated Mockup Region | Implementation Owner | Validation Section |
|---|---|---|---|---|
| Chapter buyer question | `§1` Identity & Narrative | — | Narrative contract | `§6.12` Definition of Complete |
| Memory anchor (Standards Book) | `§2.5`, `§2.9` | Desktop A6 / Mobile A6 | Region A6; `§5.1` | `§6.4`, `§6.5` Composition checklists |
| Region ID permanence | `§2.3` | All regions A–D | Specification | `§6.3` Region Validation Matrix |
| Visual ownership per region | `§2.4` | Per-region annotations | `§4` Design Contract | `§6.4`, `§6.5` Composition checklists |
| Canonical DOM hierarchy | `§3.2` | Structural layout | `sections/sp-editorial-differentiation.liquid` | `§6.6` Structural Validation |
| Desktop reading order | `§3.7` | Desktop flow | Presentation owner | `§6.6` Structural Validation |
| Mobile reading order | `§3.7` | Mobile flow | Presentation owner | `§6.5`, `§6.6` |
| A5 desktop-only rule | `§3.7`, `§3.8` | Desktop A5; mobile absent | Presentation owner | `§3.12`, `§6.5` |
| Responsive behaviour matrix | `§3.8` | Desktop + Mobile | `assets/sp-editorial-differentiation.css` | `§6.6`, `§6.7` |
| Editorial spine alignment | `§2.6`, `§3.6` | Spine regions | CSS owner | `§6.4`, `§6.6` |
| Photography axis | `§2.6`, `§3.6` | Desktop A6 | Region A6 | `§6.4`, `§6.7` |
| Typography values | `Appendix A.1` | Per-region type annotations | CSS owner | `§6.7` Design Validation |
| Colour and surface values | `Appendix A.2` | Footer colour panels | CSS owner | `§6.7` Design Validation |
| Layout geometry | `Appendix A.3` | Grid annotations | CSS owner | `§6.7` Design Validation |
| Spacing rhythm | `Appendix A.4` | Spacing annotations | CSS owner | `§6.7` Design Validation |
| Photography crop and focal | `Appendix A.5` | Desktop A6 / Mobile A6 | Region A6 | `§6.7` Design Validation |
| Icon system | `Appendix A.6` | B3–B7 / B2-01–05 | `snippets/sp-philosophy-refusal-icon.liquid` | `§6.7` Design Validation |
| Breakpoints | `Appendix A.7` | 1440px / 390px acceptance | CSS owner | `§6.4`, `§6.5` |
| Merchant setting mapping | `Appendix C.1` | Content regions | `§5.2` Merchant Mapping | `§6.9` Merchant Validation |
| Phase 1 file budget | `Appendix D.1` | — | `§5.4` Allowed Files | `§6.8` Engineering Validation |
| Phase 2 hardening budget | `Appendix D.2` | — | `§5.10` Phase Responsibilities | `§6.8`, `§6.11` |
| Acceptance screenshots | `Appendix B.1`–`B.2` | Full chapter | Composition Approval | `§6.4`, `§6.5` |
| Determinism gate | `§6.13` | — | Specification | `§6.13` |

## E.2 Canonical Region ID to Mockup Annotation Mapping

| Canonical Implementation ID | Desktop Mockup Annotation | Mobile Mockup Annotation | Notes |
|---|---|---|---|
| A | A — Hero Top Area | A — Hero Area | Canonical Hero region |
| A1 | A1 | A1 | Section eyebrow |
| A2 | A2 | A2 | Main headline |
| A3 | A3 | A3 | Governing question |
| A4 | A4 | A4 | Supporting copy; mobile also contains the hero anchor link |
| A5 | A5 | Not present | Desktop-only editorial reflection rail |
| A6 | A6 | A5 | Standards Book photograph |
| B | B — The Refusals | B — The Refusals | Canonical Manifesto region |
| B1 | B1 | B1 | Manifesto label |
| B2 | B0 | Introductory copy preceding B2 refusal list | Manifesto introduction |
| B3 | B2 — Principle 01 | B2-01 | Principle 01 |
| B4 | B3 — Principle 02 | B2-02 | Principle 02 |
| B5 | B4 — Principle 03 | B2-03 | Principle 03 |
| B6 | B5 — Principle 04 | B2-04 | Principle 04 |
| B7 | B6 — Principle 05 | B2-05 | Highlighted Principle 05 |
| C | C — Closing Statement | C — Closing Statement | Canonical Closing region |
| C1 | C1 | C1 | Closing eyebrow |
| C2 | C2 | C1 headline area | Closing headline |
| C3 | C3 | C1 emphasis line | Closing emphasis |
| C4 | C4 | C2 | Closing body |
| D | D — Transition | D — Transition | Canonical transition region |
| D1 | D1 | D1 | Scientific Confidence link |

---

# End of Document

The Formulation Philosophy Implementation Specification is complete only when:

- `§1`–`§6` are approved.
- All appendices A–E are completed.
- Approved annotated mockups are attached.
- Determinism Review passes.
- The Implementation Brief has been derived.
- The chapter is approved for Phase 1 implementation.

The Implementation Brief shall always be generated from this document.

Cursor shall never implement directly from annotated mockups alone.


---

# Freeze Status

**Status:** Frozen

This document is the approved production baseline for the Formulation Philosophy chapter.

Changes to this document are permitted only when:

- an approved design revision is made (Implementation Specification), or
- a validated engineering workflow improvement is adopted (Implementation Brief).

Routine implementation refinements shall not modify this document.