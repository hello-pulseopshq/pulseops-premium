# Formulation Philosophy — Implementation Brief

| Field | Value |
|---|---|
| Chapter | Formulation Philosophy |
| Document Type | Engineering Contract |
| Version | 1.0 |
| Status | Frozen |
| Workflow Stage | Production Stage 7c — Implementation Brief |
| Design Authority | Approved Annotated Desktop & Mobile Mockups |
| Structural Authority | Formulation Philosophy Implementation Specification v1.0 |
| Implementation Authority | This Implementation Brief |
| Next Stage | Phase 1 — Composition Build |

---

# Purpose

This document translates the approved **Formulation Philosophy Implementation Specification** into deterministic engineering instructions for implementation.

The Implementation Specification defines **what** must be built.

This Implementation Brief defines **how** the approved chapter shall be implemented within the PulseOps implementation architecture.

The Brief shall not reinterpret, redesign, or extend the approved composition.

If a conflict exists between this Brief and the Implementation Specification, the Implementation Specification takes precedence.

---

# Document Position

```text
Approved Annotated Desktop Mockup
            ↓
Approved Annotated Mobile Mockup
            ↓
Implementation Specification
            ↓
Implementation Brief
            ↓
Phase 1 — Composition Build
            ↓
Composition Approval
            ↓
Phase 2 — Production Hardening
            ↓
Freeze
```

**Input Artifact**

- Approved Annotated Desktop Mockup
- Approved Annotated Mobile Mockup
- Formulation Philosophy Implementation Specification

**Output Artifact**

- Phase 1 Cursor Implementation

**Previous Stage**

- Implementation Specification

**Next Stage**

- Phase 1 — Composition Build

---

# Conformance

This document is **normative**.

Cursor shall implement the chapter using this Brief together with the approved Implementation Specification.

This document shall not be used independently.

---

# Executive Summary

| Field | Value |
|---|---|
| Presentation Owner | `sections/sp-editorial-differentiation.liquid` |
| Presentation Branch | `philosophy_manifesto` |
| CSS Owner | `assets/sp-editorial-differentiation.css` |
| Demo Template | `templates/index.supplement.json` (if required) |
| Optional Snippet | `snippets/sp-philosophy-refusal-icon.liquid` |
| JavaScript | None |
| Shared System Changes | Prohibited |
| Phase | Phase 1 — Composition Build |
| Desktop Authority | Approved Annotated Desktop Mockup |
| Mobile Authority | Approved Annotated Mobile Mockup |
| Structural Authority | Formulation Philosophy Implementation Specification |
| Success Gate | Desktop Approval + Mobile Approval |

---

# Table of Contents

1. Implementation Scope
2. Liquid Architecture
3. Merchant Schema
4. CSS Architecture
5. Responsive Implementation
6. Accessibility Implementation
7. Cursor Execution Plan

Appendices

A. File Ownership Matrix

B. Merchant Setting Matrix

C. CSS Selector Matrix

D. DOM-to-Region Mapping

E. Cursor Validation Checklist

# 1. Implementation Scope

## Purpose

This section defines the implementation boundaries for the Formulation Philosophy chapter.

It establishes:

- what Cursor shall implement
- what Cursor shall not modify
- implementation ownership
- implementation success criteria
- Phase 1 and Phase 2 responsibilities

This section intentionally does not describe the chapter design.

The approved design is defined by the Implementation Specification.

---

## 1.1 Implementation Objective

Implement the approved Formulation Philosophy chapter exactly as defined by the Implementation Specification.

The objective of Phase 1 is faithful composition reproduction.

The implementation shall reproduce the approved desktop and mobile compositions without reinterpretation.

Implementation convenience shall never override composition fidelity.

---

## 1.2 Implementation Inputs

Cursor shall use the following implementation authorities in this order.

1. Approved Annotated Desktop Mockup
2. Approved Annotated Mobile Mockup
3. Formulation Philosophy Implementation Specification
4. PulseOps Design Languages
5. PulseOps Architecture Governance

Existing implementation shall be treated only as implementation reference.

It shall never be treated as design authority.

---

## 1.3 Phase Responsibilities

### Phase 1 — Composition Build

Objective:

Faithfully reproduce the approved chapter composition.

Includes:

- Presentation DOM
- Merchant rendering
- Chapter CSS
- Responsive composition
- Typography implementation
- Photography implementation
- Visual fidelity

Excludes:

- Accessibility refinement
- Merchant optimisation
- Theme Check cleanup
- Performance optimisation
- Architecture cleanup
- Freeze preparation

---

### Phase 2 — Production Hardening

Objective:

Transform the approved composition into production-ready implementation.

Includes:

- Merchant refinement
- Accessibility
- Theme Check
- Runtime validation
- Cascade validation
- Architecture hygiene
- Cleanup
- Freeze preparation

Phase 2 shall preserve the approved Phase 1 composition.

---

## 1.4 Allowed Files

Phase 1 implementation may modify only the following production files.

| File | Responsibility |
|------|----------------|
| `sections/sp-editorial-differentiation.liquid` | Presentation implementation |
| `assets/sp-editorial-differentiation.css` | Chapter presentation |
| `templates/index.supplement.json` | Demo content only (if required) |
| `snippets/sp-philosophy-refusal-icon.liquid` | Refusal icon implementation (if required) |

Any additional production file requires explicit approval.

---

## 1.5 Prohibited Files

Phase 1 shall not modify:

### Shared Systems

- Typography Language
- Surface Language
- Composition System
- Editorial System
- Motion implementation
- Interaction implementation

---

### Platform

- `theme.liquid`
- shared snippets
- shared CSS infrastructure
- pack registry
- application embeds

---

### Adjacent Chapters

- Hero
- Editorial Outcomes
- Ingredients
- Community Confidence
- Scientific Confidence
- Human Story

The Formulation Philosophy implementation shall remain completely isolated.

---

## 1.6 Ownership

Implementation ownership is fixed.

| Responsibility | Owner |
|---------------|-------|
| Presentation DOM | `sections/sp-editorial-differentiation.liquid` |
| Presentation Branch | `philosophy_manifesto` |
| Chapter CSS | `assets/sp-editorial-differentiation.css` |
| Demo Content | `templates/index.supplement.json` |
| Refusal Icons | `snippets/sp-philosophy-refusal-icon.liquid` |

No duplicate ownership is permitted.

---

## 1.7 Implementation Constraints

Cursor shall:

- preserve merchant flexibility
- preserve PulseOps architecture
- preserve shared systems
- preserve section ownership
- preserve responsive content hierarchy

Cursor shall not:

- redesign the chapter
- preserve incorrect legacy DOM
- modify neighbouring chapters
- create duplicate ownership
- introduce new shared systems
- expand implementation scope without approval

---

## 1.8 Out of Scope

The following activities are explicitly outside the scope of Phase 1.

Cursor shall not:

- redesign the approved composition
- rewrite editorial copy
- replace approved photography
- optimise performance
- perform Theme Check cleanup
- refactor unrelated architecture
- modify neighbouring chapters
- introduce JavaScript
- create new shared systems
- perform accessibility hardening
- optimise merchant experience
- perform Freeze preparation

These activities belong to Phase 2 unless explicitly approved.

---

## 1.9 Stop Conditions

Implementation shall stop immediately if any of the following occur.

- Additional production files become necessary.
- Shared systems require modification.
- Composition differs from the approved annotated mockups.
- The Implementation Specification becomes insufficient to continue.
- Merchant flexibility must be reduced.
- More than one presentation owner becomes necessary.
- The approved annotated mockups cannot be reproduced within the approved implementation budget.
- A change to composition, spacing, typography, photography, or region hierarchy appears necessary.

When a stop condition occurs, implementation shall pause until the issue is reviewed and approved.

## Design Escalation

Implementation shall stop if reproduction of the approved annotated mockups requires any of the following:

- composition changes
- typography changes
- spacing changes
- photography changes
- narrative changes
- merchant ownership changes
- Region ID changes

These changes constitute design changes rather than implementation decisions.

A revision to the Implementation Specification is required before implementation may continue.

---

## 1.10 Phase 1 Success Criteria

Phase 1 is complete only when:

- Desktop composition matches the approved desktop mockup.
- Mobile composition matches the approved mobile mockup.
- Region hierarchy matches the Implementation Specification.
- Responsive behaviour matches the approved compositions.
- Chapter ownership remains isolated.
- Only approved files have been modified.

Phase 1 ends with Composition Approval.

Production Hardening shall not begin before Composition Approval is granted.

# 2. Liquid Architecture

## Purpose

This section defines the Liquid implementation architecture for the Formulation Philosophy chapter.

It specifies:

- presentation ownership
- rendering hierarchy
- DOM implementation
- semantic implementation
- region implementation
- wrapper responsibilities

This section shall not redefine the approved chapter composition.

The approved composition is defined by the Implementation Specification.

---

## 2.1 Presentation Owner

The Formulation Philosophy chapter shall be implemented within the existing presentation owner.

| Responsibility | Owner |
|---|---|
| Section | `sections/sp-editorial-differentiation.liquid` |
| Presentation Branch | `philosophy_manifesto` |

The existing section architecture shall be preserved.

Only the `philosophy_manifesto` presentation branch may be modified during Phase 1.

No new presentation branch shall be introduced.

---

## 2.2 Rendering Hierarchy

The implementation shall preserve the PulseOps section hierarchy.

```text
Section Shell
    ↓
Chapter Wrapper
    ↓
Region A — Hero
    ↓
Region B — Manifesto
    ↓
Region C — Closing
    ↓
Region D — Transition
```

The rendering order shall match the approved reading order defined in the Implementation Specification.

---

## 2.3 Wrapper Responsibilities

The implementation shall preserve wrapper ownership.

Wrapper hierarchy shall separate:

- chapter shell
- layout wrappers
- editorial wrappers
- semantic regions

Wrappers shall not duplicate presentation responsibility.

Each wrapper shall have one clearly defined purpose.

---

## 2.4 Semantic Structure

Cursor shall implement the approved semantic structure.

Semantic elements shall follow the hierarchy defined by the Implementation Specification.

Examples include:

- section
- article
- header
- aside
- figure
- figcaption
- footer

Semantic elements shall communicate document structure.

Presentation styling shall remain independent from semantic structure.

---

## 2.5 Region Implementation

Each canonical region shall render exactly once.

| Region | Implementation Responsibility |
|---|---|
| Region A | Hero |
| Region B | Manifesto |
| Region C | Closing |
| Region D | Transition |

Child regions shall follow the canonical Region IDs defined by the Implementation Specification.

No additional presentation regions shall be introduced.

---

## 2.6 Reading Order

Rendering order shall follow the approved editorial reading sequence.

Desktop and mobile shall share one responsive content tree.

Responsive behaviour shall be achieved through layout adaptation.

Separate desktop and mobile DOM trees are prohibited.

Region A5 remains the only approved presentational duplicate.

---

## 2.7 Merchant Rendering

Merchant content shall render directly from schema.

Cursor shall not duplicate merchant content for layout convenience.

Derived presentation content shall remain architecture-owned.

Merchant rendering order shall match the approved chapter composition.

---

## 2.8 Conditional Rendering

Conditional rendering shall be limited to:

- optional merchant content
- optional transition content
- optional chapter metadata

Conditional rendering shall never change the approved chapter composition.

The absence of optional content shall not alter region hierarchy.

---

## 2.9 Reusable Components

Cursor shall reuse existing shared PulseOps components where they satisfy the approved composition.

New shared components shall not be introduced for implementation convenience.

New reusable snippets shall not be introduced unless explicitly approved.

Chapter-specific implementation shall remain within the presentation owner.

---

## 2.10 Liquid Constraints

Cursor shall not:

- redesign DOM hierarchy
- duplicate presentation regions
- create breakpoint-specific markup
- move regions outside their approved hierarchy
- introduce implementation shortcuts
- create parallel rendering paths

The Liquid implementation shall faithfully reproduce the approved Implementation Specification.

---

## 2.11 Liquid Completion Criteria

Liquid implementation is complete when:

- all regions render once
- rendering order matches the approved composition
- semantic hierarchy matches the Implementation Specification
- merchant rendering is deterministic
- wrapper ownership is preserved
- no duplicate presentation paths exist

Liquid implementation shall be reviewed before CSS implementation begins.

# 3. Merchant Schema

## Purpose

This section defines the merchant schema implementation for the Formulation Philosophy chapter.

It specifies:

- merchant settings
- merchant blocks
- derived content
- architecture-owned content
- default ordering
- schema constraints

This section defines how merchant data is mapped into the approved chapter.

It shall not modify the approved composition.

---

## 3.1 Schema Philosophy

The merchant schema shall expose only content that merchants are expected to customise.

Presentation behaviour shall remain architecture-owned.

Cursor shall not expose implementation decisions as merchant settings.

Merchant flexibility shall support content management without compromising the approved composition.

---

## 3.2 Merchant Settings

The following content shall be implemented as merchant-editable settings.

| Region | Setting |
|---|---|
| A1 | Hero Eyebrow |
| A2 | Hero Headline |
| A3 | Governing Question |
| A4 | Editorial Body |
| A6 | Standards Book Image |
| B1 | Manifesto Label |
| B2 | Manifesto Introduction |
| C1 | Closing Eyebrow |
| C2 | Closing Headline |
| C3 | Closing Emphasis |
| C4 | Closing Body |
| D1 | Transition Label |
| D1 | Transition Link |

The setting identifiers shall follow the existing PulseOps schema conventions.

Cursor shall reuse existing schema fields wherever possible.

---

## 3.3 Merchant Blocks

The Refusal Principles shall be implemented as merchant blocks.

Each block shall contain:

- Principle Icon
- Principle Title
- Principle Body

The approved implementation contains exactly five blocks.

Cursor shall not implement a variable-count presentation.

---

## 3.4 Derived Content

Certain presentation content is derived from existing merchant settings.

Derived content shall not receive separate schema fields.

The following content is architecture-owned:

| Region | Derived From |
|---|---|
| A5 | Governing Question + Editorial Body |

Derived presentation exists solely to support the approved desktop composition.

---

## 3.5 Architecture-Owned Content

The following implementation responsibilities shall remain architecture-owned.

- Chapter composition
- Region hierarchy
- Editorial rhythm
- Responsive behaviour
- Typography hierarchy
- Surface hierarchy
- Photography treatment
- Closing composition
- Transition composition

Cursor shall not expose these as merchant settings.

---

## 3.6 Default Content Order

Merchant content shall render in the approved editorial order.

```text
Hero

↓

Manifesto Label

↓

Manifesto Introduction

↓

Five Refusal Principles

↓

Closing

↓

Transition
```

Cursor shall not reorder merchant content.

---

## 3.7 Schema Constraints

Cursor shall not introduce settings for:

- spacing
- typography
- colours
- layout
- image positioning
- image cropping
- responsive behaviour
- emphasis styling
- editorial rhythm

These remain implementation-owned.

---

## 3.8 Merchant Constraints

Cursor shall not:

- duplicate merchant settings
- duplicate merchant blocks
- create alternative layouts
- expose presentation controls
- expose breakpoint-specific settings
- expose implementation constants

Merchant controls shall remain content-oriented.

---

## 3.9 Schema Completion Criteria

Merchant schema implementation is complete when:

- every approved editable region has exactly one schema owner
- derived content has no duplicate settings
- architecture-owned presentation remains internal
- exactly five Refusal Principle blocks exist
- merchant content renders in the approved order
- no implementation settings are exposed

# 4. CSS Architecture

## Purpose

This section defines the CSS implementation architecture for the Formulation Philosophy chapter.

It specifies:

- CSS ownership
- presentation boundaries
- selector responsibilities
- responsive ownership
- typography ownership
- layout ownership
- implementation constraints

This section shall preserve the PulseOps CSS Ownership model.

It shall not redefine the approved visual design.

---

## 4.1 CSS Ownership

The Formulation Philosophy chapter shall have a single presentation owner.

| Responsibility | Owner |
|---|---|
| Chapter Presentation | `assets/sp-editorial-differentiation.css` |

No presentation styling for the chapter shall be implemented outside the approved owner.

Shared systems remain responsible for shared design languages.

Chapter CSS remains responsible for chapter-specific implementation.

---

## 4.2 Ownership Boundaries

The chapter stylesheet owns:

- chapter layout
- chapter spacing
- chapter composition
- chapter typography implementation
- chapter photography implementation
- chapter responsive behaviour
- chapter-specific presentation

The chapter stylesheet shall not own:

- global typography language
- global surface language
- composition primitives
- interaction language
- motion language
- platform styling

Implementation shall respect the PulseOps CSS Ownership Matrix.

---

## 4.3 Shared Design Systems

The implementation shall consume shared PulseOps systems wherever applicable.

Shared systems include:

- Typography Language
- Surface Language
- Composition System
- Editorial System
- Motion Language
- Interaction Language

Chapter CSS shall extend these systems.

It shall not replace them.

---

## 4.4 Selector Responsibilities

Selectors shall represent implementation responsibilities.

Selectors shall not encode presentation variants.

Implementation shall maintain a clear hierarchy between:

- chapter
- region
- component
- element
- state

The selector hierarchy shall remain shallow and predictable.

---

## 4.5 Typography Implementation

Typography implementation shall follow the approved Typography Language.

Chapter CSS may define:

- local typography adjustments
- chapter-specific rhythm
- approved implementation constants

Chapter CSS shall not redefine:

- typography voices
- global font families
- typography scales
- editorial hierarchy

Typography implementation shall reproduce the approved chapter composition.

---

## 4.6 Layout Implementation

Layout implementation shall reproduce the approved composition.

The stylesheet shall own:

- region layout
- editorial alignment
- photography placement
- responsive layout transitions

Layout implementation shall preserve:

- canonical Region hierarchy
- editorial reading order
- approved responsive composition

Layout implementation shall not introduce new compositions.

---

## 4.7 Responsive Ownership

Responsive behaviour belongs to the chapter stylesheet.

Desktop, tablet, and mobile implementations shall remain part of one responsive implementation.

Breakpoint-specific content duplication is prohibited.

Responsive implementation shall preserve:

- approved desktop composition
- approved mobile composition
- approved editorial rhythm

Tablet implementation shall interpolate between the approved desktop and mobile compositions without introducing a third editorial composition.

---

## 4.8 CSS Constraints

Cursor shall not:

- duplicate presentation ownership
- override shared systems
- create parallel selector hierarchies
- introduce utility styling for chapter presentation
- implement breakpoint-specific content trees
- duplicate typography implementation
- duplicate layout implementation

All presentation styling shall remain within the approved chapter owner.

---

## 4.9 CSS Validation

Before implementation is considered complete, verify:

- presentation ownership remains singular
- no shared systems were modified
- typography ownership is preserved
- layout ownership is preserved
- responsive ownership is preserved
- selector hierarchy remains consistent
- chapter implementation is isolated

CSS validation shall be completed before Composition Approval.

# 5. Responsive Implementation

## Purpose

This section defines how the approved desktop and mobile compositions are implemented within a single responsive architecture.

It specifies:

- responsive implementation strategy
- breakpoint responsibilities
- region adaptation
- photography behaviour
- layout transitions
- responsive constraints

This section shall preserve the approved desktop and mobile compositions.

It shall not introduce a third editorial composition.

---

## 5.1 Responsive Philosophy

The Formulation Philosophy chapter shall be implemented as one responsive editorial composition.

Desktop, tablet, and mobile shall share:

- one responsive content tree
- one presentation owner
- one chapter stylesheet

Responsive behaviour shall adapt layout.

It shall not duplicate content.

---

## 5.2 Breakpoint Responsibilities

### Desktop

Desktop implementation shall faithfully reproduce the approved Desktop Annotated Mockup.

Desktop establishes the primary editorial composition.

---

### Tablet

Tablet implementation shall preserve the approved editorial relationships between desktop and mobile.

Tablet shall:

- maintain the approved reading order
- preserve editorial hierarchy
- preserve photography hierarchy
- preserve Region relationships

Tablet shall not introduce a third editorial composition.

Exact tablet implementation mechanics shall be implemented in accordance with this Brief.

---

### Mobile

Mobile implementation shall faithfully reproduce the approved Mobile Annotated Mockup.

Mobile is an independently approved editorial composition.

It shall not be treated as a compressed desktop layout.

---

## 5.3 Region Adaptation

Responsive adaptation shall occur at the layout level.

The following behaviour is approved.

| Region | Desktop | Tablet | Mobile |
|---|---|---|---|
| Region A | Two-column editorial spread | Responsive adaptation | Approved mobile composition |
| Region B | Editorial manifesto spread | Responsive adaptation | Approved stacked composition |
| Region C | Closing editorial spread | Responsive adaptation | Approved mobile closing |
| Region D | Editorial transition | Responsive adaptation | Approved transition |

No region shall change narrative order.

---

## 5.4 Photography Behaviour

Photography shall remain editorial.

Responsive implementation shall preserve:

- approved crop
- approved visual weight
- approved placement
- approved narrative role

Responsive implementation shall not:

- replace photography
- introduce alternative crops
- introduce decorative treatments
- convert photography into a card

---

## 5.5 Responsive Content

Merchant content shall render once.

Responsive implementation shall adapt presentation.

It shall not duplicate merchant content.

Derived presentation shall remain architecture-owned.

---

## 5.6 Responsive Constraints

Cursor shall not:

- create desktop-only markup
- create mobile-only markup
- duplicate presentation regions
- duplicate merchant content
- introduce alternative responsive layouts
- reinterpret approved compositions

Responsive implementation shall preserve the approved editorial narrative.

---

## 5.7 Responsive Validation

Responsive implementation is complete when:

- desktop matches the approved Desktop Annotated Mockup
- mobile matches the approved Mobile Annotated Mockup
- tablet preserves the approved editorial relationships
- reading order is preserved
- region hierarchy is preserved
- merchant rendering remains deterministic
- no duplicate responsive content exists

Responsive implementation shall be validated before Composition Approval.

# 6. Semantic & Accessibility Implementation

## Purpose

This section defines the semantic and accessibility implementation requirements for the Formulation Philosophy chapter.

It specifies:

- semantic document structure
- heading hierarchy
- accessible relationships
- duplicate content handling
- photography semantics
- keyboard behaviour
- assistive technology behaviour

This section defines implementation requirements only.

It shall not modify the approved chapter composition.

---

## 6.1 Semantic Philosophy

The chapter shall implement meaningful semantic structure.

Semantic elements shall communicate document hierarchy.

Presentation styling shall remain independent of semantic implementation.

Responsive implementation shall preserve one shared responsive content tree.

Separate desktop and mobile semantic structures are prohibited.

---

## 6.2 Heading Hierarchy

Heading levels shall follow the document hierarchy.

The implementation shall preserve:

- one primary chapter heading
- logical heading progression
- consistent heading relationships

Heading levels shall communicate structure.

They shall not be chosen for visual appearance.

---

## 6.3 Section Relationships

Major editorial regions shall have deterministic semantic relationships.

Implementation shall provide appropriate relationships between:

- Hero
- Manifesto
- Closing
- Transition

Where required, semantic relationships shall use:

- `aria-labelledby`
- `aria-describedby`

Implementation shall avoid unnecessary ARIA.

Native HTML semantics take precedence.

---

## 6.4 Photography Semantics

Editorial photography shall be implemented semantically.

The Standards Book image shall:

- remain a content image
- preserve its editorial purpose
- include appropriate alternative text
- avoid decorative treatment

Alternative text shall describe the editorial purpose of the image.

It shall not duplicate nearby visible content.

---

## 6.5 Duplicate Presentation

Region A5 is the only approved presentational duplicate.

The implementation shall ensure:

- A3 and A4 remain the canonical content source
- A5 introduces no interactive controls
- A5 introduces no additional navigation
- A5 does not create duplicate assistive-technology reading

Desktop presentation shall remain faithful to the approved composition.

Accessible reading shall remain singular.

---

## 6.6 Keyboard Behaviour

Keyboard navigation shall follow the approved reading order.

Implementation shall preserve:

- logical focus order
- predictable navigation
- visible focus states

Presentation layout shall not alter keyboard behaviour.

---

## 6.7 Hidden Content

Content hidden for responsive presentation shall remain semantically correct.

Responsive hiding shall not create:

- duplicate accessible content
- broken heading relationships
- inconsistent reading order

Implementation shall preserve one accessible narrative.

---

## 6.8 Accessibility Constraints

Cursor shall not:

- duplicate accessible content
- create conflicting ARIA relationships
- override native semantics unnecessarily
- use accessibility attributes for presentation
- introduce inaccessible interactions

Accessibility implementation shall preserve the approved editorial experience.

---

## 6.9 Accessibility Validation

Accessibility implementation is complete when:

- semantic hierarchy is correct
- heading hierarchy is logical
- Region relationships are preserved
- A5 does not duplicate accessible reading
- photography includes appropriate alternative text
- keyboard navigation follows reading order
- responsive implementation preserves one accessible narrative

Accessibility validation shall be completed before Phase 2 is considered complete.

# 7. Cursor Execution Plan

## Purpose

This section defines the execution workflow for implementing the Formulation Philosophy chapter.

It specifies:

- implementation sequence
- execution checkpoints
- stop conditions
- completion criteria
- implementation reporting

Cursor shall complete each stage sequentially.

Implementation shall not skip or reorder stages.

---

## 7.1 Execution Philosophy

Cursor shall implement the approved chapter incrementally.

Each stage shall be completed and internally validated before the next stage begins.

Implementation shall prioritise:

1. Composition fidelity
2. Architectural correctness
3. Merchant flexibility
4. Engineering quality

Implementation convenience shall never override the approved composition.

---

## 7.2 Implementation Sequence

Cursor shall implement the chapter in the following order.

### Step 1 — Liquid Structure

Implement:

- presentation branch
- wrapper hierarchy
- semantic regions
- rendering hierarchy
- merchant rendering

Do not begin CSS implementation until Liquid structure is complete.

---

### Step 2 — Merchant Wiring

Implement:

- chapter settings
- refusal blocks
- derived presentation
- schema defaults

Verify that merchant rendering follows the approved editorial order.

---

### Step 3 — Desktop Composition

Implement the approved desktop composition.

Validate:

- region hierarchy
- layout
- typography
- photography
- editorial rhythm

Desktop implementation shall match the approved Desktop Annotated Mockup.

---

### Step 4 — Mobile Composition

Implement the approved mobile composition.

Validate:

- region order
- mobile layout
- responsive photography
- editorial rhythm

Mobile implementation shall match the approved Mobile Annotated Mockup.

---

### Step 5 — Responsive Behaviour

Implement responsive adaptation.

Validate:

- desktop
- tablet
- mobile

Tablet shall preserve the approved editorial relationships.

Responsive implementation shall not introduce a third editorial composition.

---

### Step 6 — Internal Validation

Verify:

- Liquid ownership
- CSS ownership
- merchant schema
- responsive behaviour
- semantic implementation

Resolve implementation issues before reporting completion.

---

## 7.3 Stop Conditions

Cursor shall apply the Stop Conditions defined in §1.9 throughout implementation.

The following implementation-specific conditions are in addition to the Phase 1 Stop Conditions:

- implementation conflicts with the Implementation Specification
- implementation conflicts with approved architecture governance
- chapter ownership becomes ambiguous
- implementation cannot proceed without a design decision

When a stop condition occurs, implementation shall pause until reviewed and approved.

---

## 7.4 Completion Validation

Before reporting completion, verify:

### Architecture

- [ ] Correct presentation owner
- [ ] Correct CSS owner
- [ ] Correct schema owner
- [ ] No duplicate ownership

---

### Composition

- [ ] Desktop matches approved mockup
- [ ] Mobile matches approved mockup
- [ ] Region hierarchy preserved
- [ ] Reading order preserved

---

### Responsive

- [ ] Desktop validated
- [ ] Tablet validated
- [ ] Mobile validated
- [ ] No duplicate responsive content

---

### Merchant

- [ ] Merchant settings implemented
- [ ] Five Refusal Principle blocks implemented
- [ ] Derived presentation implemented
- [ ] No unnecessary schema added

---

### Accessibility

- [ ] Semantic hierarchy correct
- [ ] Heading hierarchy correct
- [ ] A5 accessibility requirements satisfied
- [ ] Keyboard navigation preserved

---

## 7.5 Required Implementation Report

Upon completion, Cursor shall provide an implementation report containing:

### Files Modified

List every modified production file.

---

### Implementation Summary

Summarise:

- Liquid implementation
- CSS implementation
- merchant schema
- responsive implementation
- semantic implementation

---

### Validation Results

Report:

- implementation status
- architecture validation
- composition validation
- responsive validation
- accessibility validation

---

### Issues Encountered

List:

- implementation risks
- deviations
- assumptions
- unresolved items

If no issues exist, explicitly state:

> No implementation deviations from the approved Implementation Specification.

---

### Scope Confirmation

Confirm:

- only approved files were modified
- no shared systems were changed
- no neighbouring chapters were affected
- implementation remained within Phase 1 scope

---

## 7.6 Completion Criteria

Phase 1 implementation is complete only when:

- the approved desktop composition has been faithfully reproduced
- the approved mobile composition has been faithfully reproduced
- implementation remains within the approved file boundaries
- architecture ownership is preserved
- merchant flexibility is preserved
- implementation passes internal validation

Completion of Phase 1 does **not** constitute Production Hardening or Freeze.

Phase 2 shall begin only after Composition Approval has been granted.

# Appendix A — File Ownership Matrix

| File | Responsibility | Phase |
|---|---|---|
| `sections/sp-editorial-differentiation.liquid` | Presentation implementation | Phase 1 |
| `assets/sp-editorial-differentiation.css` | Chapter presentation | Phase 1 |
| `templates/index.supplement.json` | Demo content only (if required) | Phase 1 |
| `snippets/sp-philosophy-refusal-icon.liquid` | Refusal icon implementation (if required) | Phase 1 |

No additional production files may be modified without explicit approval.

---

# Appendix B — Merchant Setting Matrix

| Region | Merchant Source |
|---|---|
| A1 | Hero Eyebrow |
| A2 | Hero Headline |
| A3 | Governing Question |
| A4 | Editorial Body |
| A6 | Standards Book Image |
| B1 | Manifesto Label |
| B2 | Manifesto Introduction |
| B3–B7 | Refusal Principle Blocks (5) |
| C1 | Closing Eyebrow |
| C2 | Closing Headline |
| C3 | Closing Emphasis |
| C4 | Closing Body |
| D1 | Transition Label + Link |

Derived presentation:

| Region | Derived From |
|---|---|
| A5 | Governing Question + Editorial Body |

---

# Appendix C — CSS Ownership Matrix

| Responsibility | Owner |
|---|---|
| Chapter Presentation | `assets/sp-editorial-differentiation.css` |
| Shared Typography | Typography Language |
| Shared Surface | Surface Language |
| Shared Composition | Composition System |
| Shared Motion | Motion Language |
| Shared Interaction | Interaction Language |

The chapter stylesheet owns chapter-specific implementation only.

---

# Appendix D — DOM-to-Region Mapping

| Region | Implementation |
|---|---|
| Region A | Hero |
| A1–A6 | Hero child regions |
| Region B | Manifesto |
| B1–B7 | Manifesto child regions |
| Region C | Closing |
| C1–C4 | Closing child regions |
| Region D | Transition |
| D1 | Transition Link |

Canonical Region IDs shall match the Implementation Specification.

---

# Appendix E — Cursor Validation Checklist

## Architecture

- [ ] Correct presentation owner
- [ ] Correct CSS owner
- [ ] Correct schema owner
- [ ] No duplicate ownership

---

## Composition

- [ ] Desktop matches approved annotated mockup
- [ ] Mobile matches approved annotated mockup
- [ ] Region hierarchy preserved
- [ ] Reading order preserved

---

## Merchant

- [ ] Merchant settings correctly implemented
- [ ] Five Refusal Principle blocks implemented
- [ ] Derived presentation correctly implemented
- [ ] No unnecessary schema added

---

## Responsive

- [ ] Desktop validated
- [ ] Tablet validated
- [ ] Mobile validated
- [ ] No duplicate responsive content

---

## Accessibility

- [ ] Semantic hierarchy preserved
- [ ] Heading hierarchy preserved
- [ ] A5 accessibility requirements satisfied
- [ ] Keyboard navigation preserved

---

## Scope

- [ ] Only approved files modified
- [ ] Shared systems untouched
- [ ] Adjacent chapters untouched
- [ ] Phase 1 scope preserved


---

# Freeze Status

**Status:** Approved for Phase 1 Implementation

This document is the approved production baseline for the Formulation Philosophy chapter.

Changes to this document are permitted only when:

- an approved design revision is made (Implementation Specification), or
- a validated engineering workflow improvement is adopted (Implementation Brief).

Routine implementation refinements shall not modify this document.