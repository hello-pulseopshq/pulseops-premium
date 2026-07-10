# PulseOps Implementation Specification Standard

Version: 1.0 (Foundation Draft)

Status: In Review

---

# Purpose

Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) are the visual implementation contract.

They are still images. Cursor must interpret them.

Interpretation is where implementation fidelity breaks down.

The **Implementation Specification** translates approved annotated mockups into a structural implementation contract that removes interpretation during Cursor implementation.

It answers implementation questions in explicit, reproducible language:

- What owns each region?
- What is the DOM hierarchy?
- What is the reading order?
- What changes between desktop, tablet, and mobile?
- What is merchant-editable vs architecture-owned?
- What must Cursor never do?

The Implementation Specification does not replace annotated mockups.

Annotated mockups remain the visual authority.

The Implementation Specification makes the visual authority executable without guesswork.

---

# Relationship to Governance

Production Constitution

↓

Production Playbook

↓

Annotated Mockup Standard (how to annotate)

↓

**Implementation Specification Standard** (structural contract — governance)

↓

**Implementation Brief Standard** (execution package — derived from specification)

↓

Cursor Implementation Standard

↓

Cursor Prompt Standard

↓

Implementation Quality Rules (Phase 2)

---

# Philosophy

Annotated mockups are implementation specifications, not inspiration.

The Implementation Specification exists because visual annotations alone still leave room for:

- DOM structure interpretation
- grid ownership assumptions
- responsive inference
- merchant mapping guesses
- "close enough" composition compromises

The objective is zero design decisions during Phase 1 implementation.

If Cursor must choose between two valid DOM structures, the Implementation Specification is incomplete.

---

# When to Create

Create the Implementation Specification after:

- Approved Annotated Desktop Mockup (Image) approved
- Approved Annotated Mobile Mockup (Image) approved

Create it before:

- Implementation Brief generation
- Phase 1 — Composition Build begins

The Implementation Specification is a human-authored production artifact.

Cursor does not author the specification during implementation.

Cursor implements the specification.

---

# Inputs

Required:

- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)
- Approved Blueprint (reference only — for merchant mapping and constraints)
- Chapter Identity
- Existing section architecture (owner files, schema conventions)

---

# Outputs

Every flagship chapter produces:

1. One Implementation Specification (governance)
2. One Implementation Brief (execution package derived from the specification)

The specification is the structural contract.

The Brief is what Cursor receives.

---

# Acceptance Screenshots

Every Implementation Specification must reference:

- **Approved Desktop Acceptance Screenshot** — the annotated desktop mockup image designated for Phase 1 side-by-side comparison
- **Approved Mobile Acceptance Screenshot** — the annotated mobile mockup image designated for Phase 1 side-by-side comparison

In most chapters, these are the Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image).

Name them explicitly in the specification. They are the exact comparison targets during composition approval.

No image management workflow is required. Reference the approved images by name.

---

# Required Specification Sections

Every Implementation Specification must define the following for the chapter.

---

## 1. Chapter Identity

- Chapter name
- Section owner file(s)
- Stylesheet owner
- Buyer question
- Memory anchor
- Narrative handoff (previous chapter → this chapter → next chapter)

---

## 2. Composition Ownership

Define the chapter's primary and secondary compositions.

For desktop and mobile separately, state:

- primary composition pattern (for example: split editorial, stacked narrative, matrix + hero)
- secondary composition (supporting regions)
- dominant visual owner per major region (typography vs photography vs surface)
- what must not compete with the memory anchor

Example:

```text
Desktop primary composition: borderless photography left; editorial matrix right.
Mobile primary composition: photography band → headline → matrix stack.
Memory anchor: borderless ingredient flat-lay (photography-owned).
```

---

## 3. Region Hierarchy

Define every major region in DOM order.

For each region specify:

- region name
- semantic element (for example: `header`, `figure`, `ul`, `article`)
- parent-child relationship
- sibling order
- whether the region is presentation-only or merchant-driven

Use an explicit hierarchy diagram or ordered list.

Example:

```text
section.sp-editorial-differentiation
  └── div.sp-editorial-differentiation__inner
        ├── figure.sp-editorial-differentiation__media (photography owner)
        ├── div.sp-editorial-differentiation__content
        │     ├── h2 (chapter headline)
        │     ├── p (editorial intro)
        │     └── ul.sp-editorial-differentiation__matrix
        │           └── li × N (pillar items)
        └── (no additional competing visual regions)
```

Region hierarchy is the highest-leverage specification field.

Wrong DOM composition cannot be corrected by CSS polishing.

---

## 4. Grid Ownership

Define who owns layout at each breakpoint.

Specify:

- grid or flex ownership per region
- column assignment (desktop)
- stack order (mobile)
- which regions span full width vs partial width
- explicit rule: desktop grid is not inferred from mobile stack

State which stylesheet layer owns each layout decision (base, supplement, desktop, tablet, mobile).

---

## 5. Typography Hierarchy

Define reading hierarchy without pixel values.

For each text role specify:

- element or class owner
- hierarchy rank (primary headline, supporting headline, body, caption, label)
- editorial relationship (leads, supports, closes)
- desktop vs mobile hierarchy changes (if any)

Do not specify font sizes.

Specify ownership and rank.

---

## 6. Photography Ownership

Define photography behaviour explicitly.

Specify:

- image owner region
- memory anchor image vs supporting images
- crop behaviour and focal point intent
- aspect ratio behaviour (fixed, fluid, band)
- desktop vs mobile image treatment
- photography budget (how many dominant images; which regions are typography-led)

State explicitly when photography is absent.

---

## 7. Spacing Ownership

Define spacing relationships, not measurements.

Specify:

- editorial breathing space between major regions
- rhythm between narrative beats
- intentional visual pauses
- regions that must remain tight vs open
- spacing ownership layer (section padding vs region gap vs item gap)

Use relationship language:

- "Image pauses before matrix"
- "Headline breathes above body"
- "Closure band compresses before next chapter"

---

## 8. Reading Order

Define explicit reading order for:

- desktop (eye flow)
- tablet (intermediate order)
- mobile (scroll order)

Include:

- visible order
- accessibility / screen reader order (if different from visual order, document why)
- interactive element order

Reading order must match annotated mockups — not inferred from existing markup.

---

## 9. Merchant Mapping

Map every visible content region to merchant configurability.

For each region or block specify one of:

- **Merchant editable** — setting or block controls content
- **Merchant optional** — can be hidden or reordered
- **Merchant fixed** — structure fixed; copy may be editable
- **Architecture owned** — not merchant-configurable
- **Demo only** — supplement preset content

Cursor must never guess configurability.

Phase 1 may use demo content placeholders.

Phase 2 wires merchant settings per this mapping.

---

## 10. Responsive Mapping

Define explicit responsive behaviour.

For each breakpoint (desktop ≥990px, tablet 750–989px, mobile ≤749px) specify:

- composition change (if any)
- region reorder
- hierarchy change
- photography treatment change
- typography role change
- what stays identical across breakpoints

Tablet is derived from desktop and mobile annotations — not invented.

Never state "responsive stack" without defining the stack order.

---

## 11. Implementation Constraints

Define architectural boundaries for this chapter.

Specify:

- allowed files (section, snippet, stylesheet, template JSON)
- prohibited files
- shared systems that must not be modified
- token usage expectations
- schema conventions to follow
- fallback behaviour when merchant content is empty

---

## 12. Explicit Do-Not Rules

List implementation behaviours Cursor must not perform.

Every flagship chapter should include chapter-specific do-not rules derived from annotated mockups.

Standard do-not rules (always include):

- Do not redesign the composition
- Do not reinterpret annotated mockups
- Do not stretch mobile layout to desktop
- Do not compress desktop layout to mobile
- Do not add UI not shown in annotated mockups
- Do not preserve incorrect existing DOM structure for convenience
- Do not compensate for wrong DOM with CSS overrides
- Do not hardcode merchant-specific content in Phase 2 without schema
- Do not begin Production Hardening before composition approval

Add chapter-specific do-not rules.

Example:

```text
- Do not wrap photography in a card or border
- Do not place matrix above photography on desktop
- Do not use icon grids where photography owns the region
```

---

# Standard Template

Copy and complete for each chapter.

```text
# [CHAPTER NAME] — Implementation Specification

Version: 1.0
Status: Approved for Phase 1

## Chapter Identity
[Complete Section 1]

## Composition Ownership
[Complete Section 2]

## Region Hierarchy
[Complete Section 3]

## Grid Ownership
[Complete Section 4]

## Typography Hierarchy
[Complete Section 5]

## Photography Ownership
[Complete Section 6]

## Spacing Ownership
[Complete Section 7]

## Reading Order
[Complete Section 8]

## Merchant Mapping
[Complete Section 9]

## Responsive Mapping
[Complete Section 10]

## Implementation Constraints
[Complete Section 11]

## Explicit Do-Not Rules
[Complete Section 12]

## Acceptance Screenshots
- Approved Desktop Acceptance Screenshot: [reference]
- Approved Mobile Acceptance Screenshot: [reference]

## Implementation Budget
- Complexity: Low / Medium / High
- Expected owner files: [list]
- Expected new snippets: [list or none]
- Expected new schema: [yes/no]
- Expected CSS owner: [file]
- Expected presentation owner: [section/snippet]
```

---

# Definition of Complete

An Implementation Specification is complete when:

1. Cursor can build Phase 1 DOM and composition without making design decisions.
2. Every major annotated region has an explicit region hierarchy entry.
3. Desktop and mobile responsive mapping are independently defined.
4. Merchant mapping covers every visible region.
5. At least three chapter-specific do-not rules are documented.
6. Acceptance screenshots are named explicitly.
7. Implementation budget is declared.
8. A human reviewer can validate the specification against annotated mockups without opening the codebase.

After specification approval, generate an **Implementation Brief** per **PulseOps Implementation Brief Standard**.

Cursor receives the Brief — not this document.

---

# Relationship to Other Artifacts

| Artifact | Role |
|----------|------|
| Approved Blueprint | Upstream intent; feeds annotation quality |
| Approved Annotated Mockups | Visual authority; spacing, rhythm, proportions |
| **Implementation Specification** | Structural contract; DOM, hierarchy, mapping (governance) |
| **Implementation Brief** | Concise execution package derived from specification |
| Cursor Implementation Prompt | Procedural sprint instructions |
| Phase 1 output | Composition-faithful presentation DOM |
| Phase 2 output | Production-ready, merchant-safe implementation |

Blueprint explains why.

Annotated mockups show what.

Implementation Specification defines how — structurally (governance).

Implementation Brief defines what Cursor reads — operationally.

Cursor Prompt defines how — procedurally.

---

# Formulation Philosophy Learnings (GV-5)

The Formulation Philosophy sprint confirmed that annotation quality alone did not prevent implementation interpretation.

### Lesson 1 — Annotated mockups were still interpreted

Cursor inferred DOM structure, grid ownership, and responsive order from visual mockups instead of reproducing them.

**Response:** Region hierarchy and grid ownership are mandatory specification fields.

### Lesson 2 — CSS polishing cannot fix wrong DOM

Repeated refinement sprints adjusted CSS while the presentation DOM remained structurally wrong.

**Response:** Specification must define region hierarchy before any CSS work. Phase 1 validates composition before cascade work accumulates.

### Lesson 3 — Composition fidelity beats DOM reuse

Preserving existing markup for architectural convenience produced materially different compositions.

**Response:** Implementation Specification must not defer to existing DOM. Composition fidelity takes precedence over DOM reuse.

### Lesson 4 — Rebuild beats repeated polish

When implementation remained materially different after one refinement sprint, rebuilding the presentation branch was the correct action — not more CSS tweaks.

**Response:** Specification includes explicit do-not rules against preserving incorrect structure. Playbook defines rebuild trigger after one failed refinement.

### Lesson 5 — Too many concerns in one sprint

Asking Cursor to solve composition, merchant configurability, accessibility, architecture, and validation simultaneously diluted composition fidelity.

**Response:** Merchant mapping is specified upfront but implemented in Phase 2 only. Phase 1 focuses exclusively on composition contract fields.

---

# Anti-Patterns

Never:

- Skip the Implementation Specification and implement directly from annotated mockups
- Let Cursor author the specification during implementation
- Specify font sizes or pixel measurements (use hierarchy and relationships)
- Leave region hierarchy implicit
- Assume existing section DOM matches the approved composition
- Treat the specification as optional documentation
- Duplicate Blueprint content without structural specificity
- Begin Phase 1 without human approval of the specification

---

# Continuous Improvement

When implementation drift occurs, determine whether the cause is:

- Incomplete annotation → update Annotated Mockup Standard
- Missing structural contract → update Implementation Specification
- Phase scope violation → update Cursor Prompt Standard
- Wrong DOM preserved → update this standard's region hierarchy requirements
- CSS-only refinement loop → update Production Playbook rebuild rules

Every flagship chapter should require fewer interpretation decisions than the previous one.
