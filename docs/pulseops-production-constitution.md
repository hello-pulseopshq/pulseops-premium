# PulseOps Production Constitution

Version: 1.0 (Foundation Draft)
Status: In Review

---

# Purpose

PulseOps exists to build premium commerce experiences through disciplined production rather than isolated creative effort.

The objective is not simply to produce visually attractive pages.

The objective is to build a production system capable of repeatedly creating flagship-quality chapters across multiple commerce verticals while preserving craftsmanship, consistency, merchant configurability, and long-term maintainability.

This Constitution defines the production philosophy that governs every PulseOps project.

It sits above all production documents and serves as the highest level of operational guidance.

---

# Relationship to Other Governance Documents

The Production Constitution governs how PulseOps operates.

Other governance documents inherit from this Constitution.

Production Constitution
↓

Production Playbook
↓

Design System
↓

Architecture
↓

Chapter Identity
↓

Design Languages

• Typography
• Surface
• Photography
• Motion
• Interaction

↓

Creative Standards

• Shopify Sidekick Concept Generation Standard

↓

Implementation Standards

• Implementation Specification Standard
• Implementation Brief Standard
• Cursor Implementation Standard
• Cursor Prompt Standard
• Implementation Quality Rules

↓

Implementation

If two documents conflict, the document higher in the hierarchy takes precedence.

---

# Production Mission

Every flagship chapter should improve two things simultaneously.

1. The customer experience.

2. The PulseOps production system.

A chapter is not considered complete unless both have improved.

The finished work is important.

The production system that created it is equally important.

---

# Production Philosophy

Premium quality is not accidental.

Premium quality is governed.

PulseOps does not optimise for speed.

PulseOps optimises for repeatable craftsmanship.

The production process should make high-quality work easier to produce over time.

Every completed flagship chapter should reduce future uncertainty.

Every retrospective should strengthen future production.

The platform should become easier to evolve without reducing quality.

---

# Production Principles

The following principles govern every production decision.

## Principle 1

Systems over memory.

Knowledge should exist in governance documents rather than conversations or individual recollection.

If an important lesson is discovered, the production system should improve.

---

## Principle 2

Review before implementation.

Implementation begins only after production intent is completely understood.

Implementation should never be used as a design exploration tool.

---

## Principle 3

Mockups before code.

Desktop and mobile mockups are the source of truth for design approval.

**Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) are the implementation contract.**

Blueprint explains intent. Annotated mockups define what implementation must reproduce.

The **Implementation Specification** translates annotated mockups into a structural contract — region hierarchy, grid ownership, responsive mapping, and merchant mapping — so Cursor does not interpret visual mockups.

Implementation reproduces approved annotated mockups faithfully — not reinterpretation of blueprint or design language alone.

Annotated mockups are implementation specifications, not inspiration.

It does not reinterpret them.

---

## Principle 3a

Composition before hardening.

Implementation is split into two distinct phases.

**Phase 1 — Composition Build** has one objective: faithfully reproduce the approved desktop and mobile compositions.

**Phase 2 — Production Hardening** makes the approved composition production-ready.

Human visual approval is required after Phase 1 and before Phase 2.

Production Hardening must never begin before composition approval.

---

## Principle 3b

Composition fidelity over DOM reuse.

When implementation conflicts with approved composition, rebuild the presentation DOM.

Do not preserve incorrect existing markup for architectural convenience.

CSS polishing cannot compensate for incorrect DOM composition.

---

## Principle 4

Desktop and mobile are independent editorial compositions.

Desktop is never a stretched version of mobile.

Mobile is never a compressed version of desktop.

Each experience is intentionally designed.

---

## Principle 5

One chapter.

One buyer question.

Every flagship chapter owns one narrative responsibility.

Chapters should not compete for attention.

They should cooperate to build a coherent customer journey.

---

## Principle 6

One dominant memory anchor.

Every chapter should leave the visitor remembering one thing.

Visual richness should reinforce that memory.

Additional elements should support it rather than compete with it.

---

## Principle 7

Merchant configurability is mandatory.

Premium experiences should remain configurable.

Architecture should never sacrifice merchant flexibility for implementation convenience.

---

## Principle 8

Implementation follows design.

Design debt is resolved before implementation begins.

Implementation debt is resolved before freeze.

The two must never be confused.

---

## Principle 9

Freeze is a quality decision.

Freeze does not mean perfection.

Freeze means the chapter has reached the required quality level and further refinement would produce diminishing returns.

The platform improves by moving forward.

---

## Principle 10

Every flagship chapter improves the platform.

Lessons learned should become governance.

Repeated problems should become standards.

Successful patterns should become reusable systems.

The production platform should become more capable after every chapter.

---

# Production Workflow

Every flagship chapter follows the same governed workflow.

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

Visual Review

↓

Refinement Sprint

↓

Freeze Hygiene

↓

Freeze

↓

Retrospective

↓

Governance Update

No stage should begin until the previous stage has been approved.

For stage detail, see **PulseOps Production Playbook**.

---

# Stage Gates

Each production stage concludes with an approval gate.

The purpose of stage gates is to prevent downstream work from compensating for upstream uncertainty.

No implementation begins without approved mockups, approved annotated mockups, approved Implementation Specification, and approved Implementation Brief.

No Production Hardening begins without Composition Approval (both desktop and mobile: YES).

No chapter passes Visual Review on architecture correctness alone — visual fidelity to annotated mockups is required.

Screenshot comparison against annotated mockups is mandatory before implementation proceeds from Phase 1 to Phase 2.

No freeze occurs without implementation hygiene.

No retrospective is skipped.

---

# Continuous Improvement

PulseOps is a learning production system.

Every flagship chapter contributes:

• design learnings

• implementation learnings

• governance improvements

• prompt improvements

• architecture improvements

• merchant experience improvements

Those improvements are incorporated into the relevant governance documents before the next flagship chapter begins.

The production system should continuously improve.

---

# Definition of Success

Success is not measured only by the finished chapter.

Success is measured by whether the production system became stronger.

The ideal flagship chapter leaves behind:

• a better customer experience

• a better implementation

• a better governance system

• a better production process

Every chapter should make the next chapter easier to build.

---

# Constitutional Rule

Whenever uncertainty exists during production, follow this order of decision-making.

Production Constitution

↓

Production Playbook

↓

Design System

↓

Architecture

↓

Chapter Identity

↓

Design Languages

↓

Creative Standards

↓

Implementation Standards

↓

Implementation

The higher document always takes precedence.
