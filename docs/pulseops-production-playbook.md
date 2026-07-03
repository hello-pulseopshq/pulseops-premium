# PulseOps Production Playbook

Version: 1.0 (Foundation Draft)
Status: In Review

---

# Purpose

The Production Playbook translates the Production Constitution into an executable workflow.

It defines how every flagship chapter moves from an initial idea to a frozen production asset.

The objective is consistency.

Every chapter should be produced through the same disciplined process regardless of:

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

Blueprint

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

Cursor Implementation

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

- 3–5 concepts
- Cross-vertical adaptability assessment
- Editorial positioning
- Memory anchor for each concept

## Approval Criteria

- One concept selected.
- Concept answers one buyer question.
- Cross-vertical adaptability confirmed.

---

# Stage 3 — Blueprint

## Purpose

Convert the selected concept into an implementation-ready design strategy.

The Blueprint resolves structural decisions before visual execution begins.

## Inputs

- Approved concept
- Design System
- Design Languages
- Chapter Identity

## Outputs

- Desktop composition
- Mobile composition
- Content hierarchy
- Merchant configurability
- Implementation constraints

## Approval Criteria

- Narrative resolved.
- Composition resolved.
- Cursor no longer needs to make design decisions.

---

# Stage 4 — Desktop Mockup

## Purpose

Design the desktop editorial composition.

Desktop is the primary composition.

It is not a responsive derivative.

## Inputs

- Approved Blueprint

## Outputs

- Complete desktop mockup
- Photography direction
- Typography hierarchy
- Surface hierarchy
- Editorial rhythm

## Approval Criteria

- Desktop composition approved.
- Annotated where required.
- Ready for independent mobile design.

---

# Stage 5 — Mobile Mockup

## Purpose

Design the mobile composition.

Mobile is intentionally designed.

It is not compressed desktop.

## Inputs

- Approved desktop
- Blueprint

## Outputs

- Mobile composition
- Mobile hierarchy
- Touch interaction expectations

## Approval Criteria

- Mobile approved.
- Independent composition confirmed.

---

# Stage 6 — Cursor Implementation

## Purpose

Faithfully reproduce the approved mockups.

Implementation does not redesign.

## Inputs

- Approved desktop mockup
- Approved mobile mockup
- Blueprint
- Cursor Prompt

## Outputs

- Working implementation
- Validation report
- Implementation report

## Approval Criteria

- Mockup fidelity achieved.
- Merchant configurability preserved.
- No design reinterpretation.

---

# Stage 7 — Visual Review

## Purpose

Validate implementation against approved mockups.

Review is comparative rather than exploratory.

## Checklist

- Typography
- Photography
- Surface
- Composition
- Narrative
- Merchant experience
- Desktop
- Mobile
- Cross-page harmony

## Approval Criteria

- Only implementation deviations remain.

---

# Stage 8 — Refinement Sprint

## Purpose

Resolve implementation deviations.

The Refinement Sprint improves fidelity.

It does not introduce new design ideas.

## Outputs

- Visual parity
- Updated validation

## Approval Criteria

- Design intent achieved.

---

# Stage 9 — Freeze Hygiene Sprint

## Purpose

Improve implementation quality without changing visual output.

## Activities

- CSS cascade audit
- Remove dead CSS
- Remove duplicate rules
- Simplify override chains
- Preserve computed values
- Preserve merchant configurability

## Approval Criteria

- Visual parity maintained.
- Implementation cleaner than before.

---

# Stage 10 — Freeze

A chapter is frozen only when:

- Desktop approved
- Mobile approved
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

# Stage 11 — Retrospective

Every flagship chapter concludes with a retrospective.

Capture:

- Design learnings
- Implementation learnings
- Governance improvements
- Prompt improvements
- Production improvements
- Reusable patterns

The retrospective exists to improve future chapters.

---

# Stage 12 — Governance Update

Every retrospective is reviewed.

New learnings are incorporated into the appropriate governance documents.

Examples:

- Production Constitution
- Production Playbook
- Annotated Mockup Standard
- Cursor Prompt Standard
- Sidekick Standard
- Implementation Quality Rules

No important lesson should remain undocumented.

---

# Stage Gates

Every stage concludes with an approval gate.

The objective is preventing downstream work from compensating for upstream uncertainty.

The cost of discovering problems should always decrease as production progresses.

---

# Anti-Patterns

Avoid:

- Designing during implementation
- Skipping Blueprint
- Implementing without approved mockups
- Stretching desktop into mobile
- Compressing desktop into mobile
- Typography adjustments without system review
- CSS changes without cascade validation
- Multiple dominant memory anchors
- Chapter review in isolation
- Freezing without implementation hygiene

---

# Definition of Done

A flagship chapter is complete only when it improves:

1. Customer experience.

2. Merchant experience.

3. Implementation quality.

4. Production governance.

Every chapter should leave the platform stronger than it found it.
