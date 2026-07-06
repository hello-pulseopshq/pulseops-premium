# PulseOps Production Playbook

Version: 1.1
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

Cursor Implementation

↓

Activation Verification

↓

Visual Review

↓

Refinement Sprint

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

- Complete desktop mockup
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

- Approved Desktop Mockup
- Approved Concept Translation

## Outputs

- Complete mobile mockup
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

- Approved Desktop Mockup
- Approved Mobile Mockup
- Approved Concept Translation
- Design System
- Design Languages

## Outputs

- Chapter identity
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

- Blueprint accurately documents the approved desktop mockup.
- Blueprint accurately documents the approved mobile mockup.
- No new creative decisions introduced.
- Implementation intent fully defined.

---

# Stage 7 — Annotated Mockups

## Purpose

Translate the approved mockups into implementation-ready visual documentation.

Annotations remove ambiguity.

They explain implementation intent rather than design rationale.

## Inputs

- Approved Desktop Mockup
- Approved Mobile Mockup
- Approved Blueprint

## Outputs

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

# Stage 8 — Cursor Implementation

## Purpose

Faithfully reproduce the approved design.

Implementation never redesigns.

Cursor behaves as a production frontend engineer rather than a creative director.

## Inputs

- Approved Desktop Mockup
- Approved Mobile Mockup
- Approved Blueprint
- Approved Annotated Mockups
- Cursor Prompt

## Outputs

- Working implementation
- Validation report
- Implementation report

## Approval Criteria

- Desktop matches approved mockup.
- Mobile matches approved mockup.
- Merchant configurability preserved.
- No creative reinterpretation.

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

# Stage 10 — Visual Review

## Purpose

Validate implementation against the approved mockups.

Review is comparative rather than exploratory.

## Checklist

- Narrative
- Memory anchor
- Desktop composition
- Mobile composition
- Typography
- Photography
- Surface
- Interaction
- Motion
- Merchant experience
- Cross-page harmony

## Approval Criteria

- Only implementation deviations remain.

---

# Stage 11 — Refinement Sprint

## Purpose

Resolve implementation deviations.

The Refinement Sprint improves fidelity.

It never introduces new creative ideas.

## Outputs

- Visual parity
- Updated validation

## Approval Criteria

- Approved design faithfully reproduced.

---

# Stage 12 — Freeze Hygiene Sprint

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

# Stage 13 — Freeze

A chapter is frozen only when:

- Desktop approved
- Mobile approved
- Blueprint approved
- Annotated Mockups approved
- Mockup fidelity achieved
- Merchant configurability preserved
- Accessibility preserved
- Theme Check passed
- Validation completed
- Freeze Hygiene completed
- Technical debt documented

Freeze represents production confidence.

Not perfection.

---

# Stage 14 — Retrospective

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

# Stage 15 — Governance Update

Every retrospective is reviewed.

New learnings are incorporated into the appropriate governance documents.

Examples:

- Production Constitution
- Production Playbook
- Concept Translation Standard
- Annotated Mockup Standard
- Cursor Prompt Standard
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
- Writing the Blueprint before desktop and mobile approval
- Allowing the Blueprint to introduce new creative decisions
- Implementing without approved mockups
- Stretching desktop into mobile
- Compressing desktop into mobile
- Typography adjustments without system review
- CSS changes without cascade validation
- Multiple dominant memory anchors
- Reviewing chapters in isolation
- Freezing without implementation hygiene

---

# Definition of Done

A flagship chapter is complete only when it improves:

1. Customer experience.

2. Merchant experience.

3. Implementation quality.

4. Production governance.

Every completed flagship chapter should leave both the storefront and the PulseOps production system stronger than before.