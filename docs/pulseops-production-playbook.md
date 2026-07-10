# PulseOps Production Playbook

Version: 1.3
Status: Draft

---

# Purpose

The Production Playbook translates the Production Constitution into an executable workflow.

It defines how every flagship chapter moves from an initial idea to a frozen production asset.

The objective is consistency.

Every flagship chapter should be produced through the same disciplined process regardless of:

- commerce vertical
- chapter type
- implementation technology
- team size

The workflow exists to reduce uncertainty, minimise implementation iterations, preserve premium quality, and continuously improve the PulseOps production system.

---

# Relationship to Governance

This Playbook operates under the Production Constitution.

It coordinates the existing governance documents without replacing them.

Production Constitution

↓

Production Playbook

↓

Design System

Architecture

Chapter Identity

Design Languages

Creative Standards

Implementation Standards

↓

Implementation

---

# Production Workflow

Every flagship chapter follows the workflow below.

Review

↓

Concept Exploration

↓

Concept Selection

↓

Concept Translation

↓

Photography Plan

↓

Desktop Mockup

↓

Desktop Review

↓

Desktop Approval

↓

Mobile Mockup

↓

Mobile Review

↓

Mobile Approval

↓

Blueprint

↓

Annotated Mockups

↓

Implementation Specification

↓

Implementation Brief

↓

Phase 1 — Composition Build

↓

Activation Verification

↓

Composition Approval (Visual Fidelity Review)

↓

Phase 2 — Production Hardening

↓

Visual Review (Visual Fidelity Review)

↓

Refinement Sprint

↓

Visual Review (Visual Fidelity Review)

↓

Micro Pass (optional)

↓

Freeze Hygiene Sprint

↓

Freeze

↓

Commit / Tag

↓

Retrospective

↓

Governance Update

No stage may begin until the previous stage has been approved.

**Production Workflow** and **Cursor Implementation Package** are different concepts.

The Production Workflow defines the complete design process from Review through Annotated Mockups.

The Cursor Implementation Package defines only the artifacts supplied to Cursor. See Stage 8 (Phase 1) and Stage 11 (Phase 2).

Cursor receives the **Implementation Brief** — not the full Implementation Specification.

---

# Stage 1 — Review

## Purpose

Understand the current state before proposing change.

Review focuses on identifying opportunities rather than generating solutions.

## Inputs

- Current implementation
- Existing mockups
- Chapter Identity
- Design System
- Design Languages
- Adjacent chapters

## Outputs

- Strengths
- Weaknesses
- Improvement opportunities
- Buyer question confirmation
- Cross-page observations

## Approval Criteria

- Chapter responsibility is clear.
- Review scope is agreed.
- Adjacent chapter relationships are understood.

---

# Stage 2 — Concept Exploration

## Purpose

Generate multiple editorial directions.

Concept exploration values breadth before depth.

## Inputs

- Review findings
- Chapter Identity
- Shopify Sidekick Concept Generation Standard

## Outputs

- 3–5 editorial concepts
- Cross-vertical adaptability assessment
- Narrative positioning
- Memory anchor for each concept

## Approval Criteria

- One concept selected.
- Concept answers exactly one buyer question.
- Cross-vertical adaptability confirmed.

---

# Stage 3 — Concept Translation

## Purpose

Convert the selected concept into a frozen creative direction before visual design begins.

Concept Translation captures the creative intent behind the chosen concept.

It preserves the narrative, emotional goal, memory anchor and ownership before any visual design work starts.

Concept Translation is **not** a visual design.

It is the bridge between concept selection and mockup creation.

## Inputs

- Approved concept
- Review findings
- Chapter Identity
- Design System
- Design Languages

## Outputs

- Concept summary
- Buyer question
- Narrative responsibility
- Memory anchor
- Emotional goal
- Desktop composition philosophy
- Mobile composition philosophy
- Typography ownership
- Photography ownership
- Surface ownership
- Things that must never change
- Things intentionally left open for visual exploration

## Approval Criteria

- One dominant memory anchor defined.
- Creative direction frozen.
- Chapter ownership confirmed.
- Desktop and mobile composition philosophy agreed.

---

# Stage 4 — Desktop Mockup

## Purpose

Design the desktop editorial composition.

Desktop is an independent editorial experience.

It is never a stretched version of mobile.

## Inputs

- Approved Concept Translation

## Outputs

- Approved Desktop Mockup (Image)
- Composition
- Photography direction
- Typography hierarchy
- Surface hierarchy
- Editorial rhythm

## Approval Criteria

- Desktop composition approved.
- Narrative expressed correctly.
- Memory anchor clearly visible.
- Ready for independent mobile design.

---

# Stage 5 — Mobile Mockup

## Purpose

Design the mobile editorial composition.

Mobile is intentionally designed.

It is not compressed desktop.

## Inputs

- Approved Desktop Mockup (Image)
- Approved Concept Translation

## Outputs

- Approved Mobile Mockup (Image)
- Mobile hierarchy
- Touch interaction expectations
- Independent editorial rhythm

## Approval Criteria

- Mobile approved.
- Independent composition confirmed.
- Same memory anchor preserved.
- Narrative remains intact.

---

# Stage 6 — Blueprint

## Purpose

Document the approved desktop and mobile designs for implementation.

The Blueprint documents approved designs.

It does not redesign them.

Its purpose is to remove ambiguity before implementation begins.

## Inputs

- Approved Desktop Mockup (Image)
- Approved Mobile Mockup (Image)
- Approved Concept Translation
- Design System
- Design Languages

## Outputs

- Approved Blueprint
- Narrative responsibility
- Desktop reading order
- Mobile reading order
- Composition ownership
- Photography behaviour
- Typography behaviour
- Surface behaviour
- Interaction behaviour
- Motion behaviour
- Merchant configurability
- Accessibility requirements
- Responsive behaviour
- Implementation constraints
- Acceptance criteria

## Approval Criteria

- Approved Blueprint accurately documents the Approved Desktop Mockup (Image).
- Approved Blueprint accurately documents the Approved Mobile Mockup (Image).
- No new creative decisions introduced.
- Implementation intent fully defined.

---

# Stage 7 — Annotated Mockups

## Purpose

Translate the approved mockups into implementation-ready visual documentation.

Annotations remove ambiguity.

They explain implementation intent rather than design rationale.

## Inputs

- Approved Desktop Mockup (Image)
- Approved Mobile Mockup (Image)
- Approved Blueprint

## Outputs

- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)
- Desktop annotations
- Mobile annotations
- Cropping rules
- Alignment guidance
- Responsive behaviour
- Component ownership
- Implementation notes

## Approval Criteria

- Cursor can implement without making visual assumptions.
- Responsive behaviour is unambiguous.
- Cropping and hierarchy require no interpretation.

---

# Stage 7b — Implementation Specification

## Purpose

Translate approved annotated mockups into a structural implementation contract.

The Implementation Specification removes DOM interpretation during Cursor implementation.

It defines region hierarchy, grid ownership, responsive mapping, merchant mapping, and explicit do-not rules.

See: **PulseOps Implementation Specification Standard**.

## Inputs

- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)
- Approved Blueprint
- Chapter Identity
- Existing section architecture

## Outputs

- Approved Implementation Specification

## Approval Criteria

- Every major annotated region has explicit region hierarchy.
- Desktop and mobile responsive mapping are independently defined.
- Merchant mapping covers every visible region.
- Cursor can build Phase 1 without making design decisions.
- At least three chapter-specific do-not rules documented.

---

# Stage 7c — Implementation Brief

## Purpose

Distil the approved Implementation Specification into a concise execution package for Cursor.

See: **PulseOps Implementation Brief Standard**.

The Brief replaces reading multiple documents during implementation.

## Inputs

- Approved Implementation Specification
- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)

## Outputs

- Approved Implementation Brief

## Approval Criteria

- Region hierarchy summary is explicit.
- Implementation budget is declared.
- Acceptance screenshots are referenced.
- Allowed and prohibited files are listed.
- Phase 1 objective stated in one sentence.
- A reviewer can hand the Brief to Cursor without opening the specification.

---

# Stage 8 — Phase 1: Composition Build

## Purpose

**Faithfully reproduce the approved desktop and mobile compositions.**

Phase 1 does not solve merchant configurability, accessibility, Theme Check, or implementation hygiene.

## Production Prerequisites

- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)
- Approved Implementation Specification
- **Approved Implementation Brief**

## Cursor Implementation Package (Phase 1)

1. Approved Annotated Desktop Mockup (Image)
2. Approved Annotated Mobile Mockup (Image)
3. Approved Implementation Brief
4. Phase 1 Composition Build Prompt

## Inputs

- Cursor Implementation Package (Phase 1)

## Outputs

- Composition-faithful presentation DOM
- Phase 1 implementation report
- Screenshots at 1440px and 390px

## Approval Criteria

- Ready for Composition Approval gate (Stage 10).

---

# Stage 9 — Activation Verification
Purpose

Verify that the approved implementation is actually the implementation being rendered in the browser.

Activation Verification exists to prevent visual review from being performed against stale themes, inactive templates, legacy sections, or unloaded assets.

Visual Review must never begin until implementation activation has been confirmed.

Checklist

Confirm all of the following:

Correct Shopify preview theme is loaded.
Correct template is active.
Correct section is rendered in the DOM.
Correct stylesheet is loaded.
Legacy implementation is no longer rendered.
Browser cache has been invalidated if required.
Merchant preview URL is correct.
Required Evidence

Provide:

Preview URL
DOM screenshot (Elements panel)
Section root class
Loaded stylesheet(s)
Approval Criteria

Visual Review may begin only when:

intended section is rendered
intended CSS owner is loaded
implementation matches the architecture
no legacy implementation remains active

---

# Stage 10 — Composition Approval Gate

## Purpose

Explicit pass/fail gate before Production Hardening.

Production Hardening must never begin before both answers are YES.

## Mandatory Questions

Human reviewer must answer:

### Desktop

□ Does it immediately look like the approved annotated desktop mockup?

**YES / NO**

Compare implementation screenshot (1440px) side-by-side with **Approved Desktop Acceptance Screenshot**.

### Mobile

□ Does it immediately look like the approved annotated mobile mockup?

**YES / NO**

Compare implementation screenshot (390px) side-by-side with **Approved Mobile Acceptance Screenshot**.

## Gate Result

| Desktop | Mobile | Result |
|---------|--------|--------|
| YES | YES | **PASS** — Phase 2 may begin |
| NO | YES | **FAIL** — Phase 1 continues |
| YES | NO | **FAIL** — Phase 1 continues |
| NO | NO | **FAIL** — Phase 1 continues |

**If either answer is NO:**

- Phase 1 fails.
- Do not begin Phase 2.
- Do not continue broad CSS polishing.

**Next action (choose one):**

1. **One narrow refinement sprint** — targeted fix for the specific mismatch
2. **Rebuild presentation DOM** — when structural mismatch persists

After one failed refinement sprint with either answer still NO: **rebuild presentation DOM**.

## Approval Criteria

- Both answers recorded as YES.
- Composition approval explicitly documented before Phase 2 begins.

---

# Stage 11 — Phase 2: Production Hardening

## Purpose

Make the composition-approved implementation production-ready.

Phase 2 assumes composition is correct.

Phase 2 must not redesign composition.

## Cursor Implementation Package (Phase 2)

1. Approved Implementation Brief
2. Phase 2 Production Hardening Prompt

## Inputs

- Composition-approved implementation from Phase 1
- Cursor Implementation Package (Phase 2)

## Outputs

- Production-ready implementation
- Validation report
- Implementation report

## Approval Criteria

- Phase 1 composition preserved.
- Merchant configurability complete per Brief.
- Theme Check passed.

---

# Stage 12 — Visual Review (Visual Fidelity Review — Phase 2)

## Purpose

Validate implementation against the Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image).

Review is comparative rather than exploratory.

**Architecture correctness alone is insufficient.** Implementation is not complete until composition, spacing, rhythm, proportions, typography hierarchy, and photography ownership match the approved annotated mockups.

**Visual comparison is mandatory.** Do not declare mockup parity unless desktop and mobile have been compared directly against the approved annotated mockups — not against memory, prior chapters, or implementation intent alone.

## Checklist

Review in this order (visual issues before engineering issues):

1. Composition
2. Typography
3. Photography
4. Spacing and editorial rhythm
5. Surface
6. Interaction
7. Merchant configurability
8. Accessibility
9. Architecture

Also confirm narrative intent and cross-chapter harmony:

- Narrative and memory anchor
- Motion (where applicable)
- Cross-page harmony

### Editorial fidelity (Scientific Confidence / GV-3)

Visual Review must evaluate **structural fidelity** and **editorial fidelity**.

Append these review criteria:

- **Editorial rhythm** — Does vertical and horizontal pacing match the Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image)? Are pauses intentional rather than accidental whitespace?
- **Photography ownership** — Does each region show the correct visual owner (typography vs photography)? Are chapter images assigned to this chapter, not borrowed from elsewhere?
- **Visual pacing** — Does the chapter breathe at the annotated beats? Does reading cadence feel calm and premium on mobile?
- **Dominant memory anchor** — Is there exactly one dominant visual memory anchor? Does nothing else compete with it?
- **Photography budget** — Does the chapter respect its photography budget? Has typography taken the lead where the Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) specify?

Structural fidelity alone is insufficient. A chapter that is technically correct but editorially mis-paced should not pass Visual Review.

## Approval Criteria

- Only implementation deviations remain.
- Editorial fidelity matches Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) (rhythm, pacing, photography ownership, memory anchor, photography budget).

---

# Stage 13 — Refinement Sprint (Implementation Fidelity)

## Purpose

Resolve implementation deviations identified in Visual Fidelity Review.

The Refinement Sprint improves fidelity.

It never introduces new creative ideas.

**Refinement prompts should become progressively narrower** — for example: Visual Fidelity → Editorial Composition → Editorial Rhythm → Micro Pass → Freeze. Avoid repeated broad "improve the design" prompts.

## Outputs

- Visual parity
- Updated validation

## Approval Criteria

- Approved design faithfully reproduced.

---

# Stage 14 — Micro Pass (Optional)

## Purpose

Apply subtle craftsmanship adjustments only — for example final editorial rhythm or band padding — when Visual Fidelity Review identifies small remaining gaps.

## Rules

- Optional. Skip when Visual Review already passes without residual visual objections.
- CSS-only or equally narrow scope when possible.
- No redesign, no layout reinterpretation, no new creative direction.
- Follow with Visual Fidelity Review confirmation or proceed to Freeze Hygiene when changes are trivial and validated.

## Approval Criteria

- Visible adjustment matches annotated mockup intent.
- No regression in composition, typography, photography, or architecture.

---

# Stage 15 — Freeze Hygiene Sprint

## Purpose

Improve implementation quality without changing visual output.

## Activities

- CSS cascade audit
- Remove dead CSS
- Remove duplicate rules
- Simplify override chains
- Preserve computed values
- Preserve merchant configurability
- Architecture review
- Theme Check
- Accessibility verification

## Approval Criteria

- Visual parity maintained.
- Cleaner implementation.
- No regressions introduced.

---

# Stage 16 — Freeze

A chapter is frozen only when:

- Desktop approved
- Mobile approved
- Approved Blueprint approved
- Approved Annotated Desktop Mockup (Image) approved
- Approved Annotated Mobile Mockup (Image) approved
- Approved Implementation Specification approved
- Approved Implementation Brief approved
- Composition Approval gate passed (both YES)
- Merchant configurability preserved
- Accessibility preserved
- Theme Check passed
- Validation completed
- Freeze Hygiene completed
- Technical debt documented

Freeze represents production confidence.

Not perfection.

---

# Stage 17 — Retrospective

Every flagship chapter concludes with a retrospective.

Capture:

- Design learnings
- Concept learnings
- Mockup learnings
- Blueprint learnings
- Implementation learnings
- Governance improvements
- Prompt improvements
- Production improvements
- Reusable patterns

Every flagship chapter should improve both the customer experience and the production system.

---

# Stage 18 — Governance Update

Every retrospective is reviewed.

New learnings are incorporated into the appropriate governance documents.

Examples:

- Annotated Mockup Standard
- Implementation Specification Standard
- Implementation Brief Standard
- Cursor Prompt Standard
- Cursor Implementation Standard
- Shopify Sidekick Concept Generation Standard
- Implementation Quality Rules

No important lesson should remain undocumented.

---

# Stage Gates

Every stage concludes with an approval gate.

Downstream work must never compensate for upstream uncertainty.

Creative uncertainty should be eliminated before implementation begins.

Implementation uncertainty should be eliminated before Freeze.

---

# Anti-Patterns

Avoid:

- Designing during implementation
- Skipping Review
- Skipping Concept Translation
- Skipping Blueprint
- Skipping Annotated Mockups
- Skipping Implementation Brief
- Attaching full Implementation Specification to Cursor when Brief exists
- Implementing directly from annotated mockups without structural specification
- Combining Phase 1 and Phase 2 in a single Cursor sprint
- Beginning Production Hardening before composition approval
- Preserving incorrect DOM structure for convenience
- Using CSS polishing to compensate for wrong DOM composition
- Continuing CSS tweaks when structural mismatch persists after one refinement sprint
- Writing the Blueprint before desktop and mobile approval
- Allowing the Blueprint to introduce new creative decisions
- Implementing without Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image)
- Attaching redundant upstream artifacts to Cursor when approved annotated mockup images already exist
- Stretching desktop into mobile
- Compressing desktop into mobile
- Typography adjustments without system review
- CSS changes without cascade validation
- Multiple dominant memory anchors
- Reviewing chapters in isolation
- Freezing without implementation hygiene

---

# Formulation Philosophy Learnings (GV-5) / GV-6 Refinement

GV-5 introduced two-phase implementation. GV-6 added the Implementation Brief and explicit Composition Approval gate.

### Permanent rules

1. Annotated mockups are implementation specifications, not inspiration.
2. Phase 1 objective: faithfully reproduce approved desktop and mobile compositions.
3. Composition Approval gate: desktop YES and mobile YES required before Phase 2.
4. Cursor receives Implementation Brief — not the full specification.
5. Implementation budget declared before Phase 1.
6. Rebuild presentation DOM when structural mismatch persists — do not CSS polish.

### Root cause (GV-5)

Cursor solved too many concerns in one sprint. GV-6 reduces cognitive load with the Brief.

---

# Definition of Done

A flagship chapter is complete only when it improves:

1. Customer experience.

2. Merchant experience.

3. Implementation quality.

4. Production governance.

Every completed flagship chapter should leave both the storefront and the PulseOps production system stronger than before.