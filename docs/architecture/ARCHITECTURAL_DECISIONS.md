# PulseOps Architectural Decisions (ADR)

**Version:** 1.0

**Status:** Living Governance Document

---

## Scope

Unless explicitly stated otherwise, the ownership rules in this document describe the target implementation architecture of PulseOps.

Current implementation may temporarily differ while Architecture Cleanup Sprints are in progress.

Architecture Cleanup exists to progressively align the implementation with these governance rules.

---

# Purpose

Architectural Decisions (ADRs) capture the reasoning behind major implementation and platform architecture decisions.

Code explains **what** exists.

Documentation explains **how** it works.

Architectural Decisions explain **why** it exists.

The purpose of this document is to preserve architectural intent across the lifetime of the PulseOps Premium Theme Platform.

It should allow future contributors to understand previous engineering decisions without relying on historical conversations.

---

# Relationship to Governance

```
Production Constitution

↓

Production Playbook

↓

PulseOps Design System

↓

PulseOps Architecture

↓

Implementation Standards

↓

Architectural Decisions

↓

Implementation
```

Architectural Decisions never override governance.

They explain why governance evolved.

---

# Philosophy

Architecture should evolve intentionally.

Every significant architectural decision should be documented once.

The objective is to reduce repeated debate and preserve engineering context.

Future contributors should understand why a decision exists before proposing an alternative.

---

# When to Create an ADR

Create a new ADR when:

- platform architecture changes
- ownership changes
- implementation philosophy changes
- production workflow changes
- merchant architecture changes
- new governance documents are introduced
- technical debt changes platform direction
- implementation standards fundamentally evolve

Do not create ADRs for:

- bug fixes
- copy changes
- styling tweaks
- routine refactoring
- implementation details

---

# ADR Lifecycle

```
Proposal

↓

Discussion

↓

Decision

↓

Implementation

↓

Validation

↓

Accepted

↓

Historical Record
```

An ADR is never deleted.

If superseded:

Mark it as Superseded.

Reference the replacement ADR.

---

# ADR Format

Every decision should use the following template.

---

## ADR Number

Sequential.

Example

ADR-001

---

## Title

One sentence.

Example

Section CSS Becomes Sole Owner of Chapter Presentation

---

## Status

One of:

Proposed

Accepted

Superseded

Deprecated

Rejected

---

## Date

Decision date.

---

## Context

Describe the problem.

Why was a decision necessary?

What constraints existed?

---

## Decision

State the architectural decision clearly.

Avoid implementation details.

---

## Consequences

Positive outcomes.

Negative outcomes.

Trade-offs.

---

## Alternatives Considered

Document realistic alternatives.

Explain why they were rejected.

---

## Related Documents

List governance documents affected.

---

## Related Commits

Reference commits.

---

## Related Tags

Reference release tags.

---

## Notes

Additional historical context if required.

---

# Decision Principles

Architectural decisions should:

be intentional

be durable

be documented

be reviewable

be traceable

be understandable years later

---

# ADR Index

| ADR | Status | Title |
|------|--------|-------|
| ADR-001 | Accepted | Section CSS Owns Chapter Presentation |
| ADR-002 | Accepted | One Visual Responsibility, One Owner |
| ADR-003 | Accepted | Cascade Validation Becomes Mandatory |
| ADR-004 | Accepted | Architecture Cleanup Becomes Separate Sprint |
| ADR-005 | Accepted | Demo CSS May Express, Not Own |
| ADR-006 | Accepted | Community Confidence Cascade Lessons |
| ADR-007 | Accepted | Hero Ownership Simplification |
| ADR-008 | Accepted | Editorial System Decomposition |
| ADR-009 | Accepted | Dedicated Flagship Chapter Extraction |
| ADR-010 | Accepted | Supplement Editorial Typography Activation |

---

# ADR-001

## Title

Section CSS Owns Chapter Presentation

### Decision Status

Accepted

### Implementation Status

Pending

The implementation has not yet fully migrated to this architecture.

Architecture Cleanup Sprints will progressively migrate all homepage chapters to this ownership model.

### Context

Over multiple implementation iterations, chapter presentation became distributed across:

- Editorial System
- Supplement CSS
- Section CSS
- Responsive overrides

This produced ownership ambiguity.

Visual changes became unpredictable.

Debugging became increasingly difficult.

### Decision

Every homepage chapter will have exactly one presentation owner.

Section CSS becomes the primary owner of chapter presentation.

Shared systems provide reusable primitives only.

### Consequences

Positive

- predictable ownership
- simpler debugging
- fewer cascade conflicts

Negative

- migration effort
- temporary duplication during transition

### Alternatives Considered

Keep shared presentation ownership.

Rejected because ownership ambiguity continued to grow.

---

# ADR-002

## Title

One Visual Responsibility Has One Owner

### Decision Status

Accepted

### Context

Many visual properties were simultaneously defined in multiple CSS layers.

Implementation became dependent on source order rather than architecture.

### Decision

Every visual responsibility has one owner.

Consumers may inherit.

Consumers may not redefine ownership.

### Consequences

Architecture becomes easier to understand.

Future implementation becomes predictable.

---

# ADR-003

## Title

Cascade Validation Is Mandatory

### Decision Status

Accepted

### Context

Ingredients and Community Confidence passed Theme Check while rendering incorrectly.

The issue was CSS cascade rather than implementation quality.

### Decision

Every CSS implementation must complete:

Ownership validation

Cascade validation

Computed-value validation

Visual validation

before Freeze.

### Consequences

More validation work.

Far fewer visual regressions.

---

# ADR-004

## Title

Architecture Cleanup Is A Separate Production Activity

### Decision Status

Accepted

### Context

Architecture cleanup was previously attempted during feature implementation.

This mixed implementation work with engineering refactoring.

Risk increased significantly.

### Decision

Architecture cleanup becomes its own sprint type.

Cleanup follows dedicated governance.

Feature implementation remains isolated.

### Consequences

Cleaner implementation.

Lower regression risk.

---

# ADR-005

## Title

Demo CSS Expresses But Never Owns

### Decision Status

Accepted

### Context

Vertical CSS gradually accumulated ownership of layout, spacing and presentation.

Demo CSS became a second section owner.

### Decision

Vertical CSS expresses brand identity.

Section CSS owns implementation.

### Consequences

Cleaner separation.

Improved reuse across demo packs.

---

# ADR-006

## Title

Community Confidence Revealed CSS Ownership Drift

### Decision Status

Accepted

### Context

Community Confidence implementation repeatedly passed technical validation while visually failing.

Investigation showed:

- four CSS owners
- duplicate spacing
- conflicting headline ownership
- cascade fights

The problem was architectural.

### Decision

Ownership drift becomes a first-class architectural concern.

Architecture Hygiene becomes an official production activity.

### Consequences

Creation of:

- CSS Ownership Matrix
- Cascade Validation Standard
- Cleanup Playbook
- Architecture Cleanup Sprint Standard

---

# ADR-007

## Title

Hero Owns Hero

### Decision Status

Accepted

### Implementation Status

Pending

Hero ownership simplification will occur during the Hero Architecture Cleanup Sprint.

### Context

Hero styling accumulated across multiple CSS files through refinement sprints.

Future Hero work became increasingly fragile.

### Decision

Hero presentation should migrate back into Hero ownership.

Shared systems remain reusable.

---

# ADR-008

## Title

Editorial System Returns To Editorial Responsibilities

### Decision Status

Accepted

### Implementation Status

Pending

Editorial System decomposition will occur during Architecture Cleanup Sprints.

### Context

The Editorial System evolved into a large presentation layer affecting multiple chapters.

Its responsibilities exceeded its intended scope.

### Decision

Editorial System owns:

- editorial utilities
- narrative helpers
- reusable primitives

It must not own chapter presentation.

### Consequences

Smaller shared systems.

Clearer architecture.

Simpler cascade.

---

# ADR-009

## Title

Dedicated Flagship Chapter Extraction

### Decision Status

Accepted

### Implementation Status

Complete (Community Confidence — supplement homepage)

### Context

Community Confidence began as an `editorial_story` presentation inside the generic `sp-metrics` section. The chapter evolved beyond a reusable metrics band:

- a unique buyer question (collective habit adoption)
- a unique editorial identity (typographic band, Morning Index)
- unique merchant configuration (evidence rows, community statement, avatars)
- unique CSS ownership requirements (single presentation owner)

Hosting the chapter inside `sp-metrics` created schema confusion, duplicate CSS paths, and presentation branches that fought cascade validation.

### Decision

When a flagship chapter evolves beyond a generic reusable presentation, it may graduate into its own dedicated section.

**Criteria for extraction:**

- unique buyer question
- unique editorial identity
- unique merchant configuration
- unique implementation ownership

**Objective:**

- single ownership
- clean architecture
- simpler implementation
- better maintainability

This does **not** imply every chapter requires a dedicated section. Generic reusable sections remain preferred unless the flagship chapter has clearly evolved into its own editorial system.

**Community Confidence implementation:**

| Role | Owner |
|------|-------|
| Section | `sections/sp-community-confidence.liquid` |
| CSS | `assets/sp-community-confidence.css` |
| Anchor | `#sp-community` |
| Supplement template | `templates/index.supplement.json` → `sp-community-confidence` |

`sp-metrics` is restored as a generic reusable metrics component for other demo templates. It no longer hosts Community Confidence or `editorial_story`.

### Consequences

Positive

- one section, one CSS file, one schema for Community Confidence
- no presentation branch inside `sp-metrics`
- clearer merchant theme editor experience
- governance and implementation aligned

Negative

- supplement template migration required
- historical docs referencing `sp-metrics` + `editorial_story` require synchronization

### Alternatives Considered

Keep Community Confidence as `sp-metrics` with `presentation: editorial_story` and improved preset labeling.

Rejected — continued dual ownership and presentation branching.

---

---

# ADR-010

## Title

Supplement Editorial Typography Activation

### Decision Status

Accepted

### Implementation Status

Complete

### Context

During the Formulation Philosophy Phase 1 implementation, multiple flagship chapters consistently failed to reproduce the approved editorial mockups despite correct chapter-level typography implementation.

Investigation showed that every Supplement chapter correctly consumed the shared typography token:

```
--sp-font-heading
```

However, the token ultimately resolved to Shopify's default heading font (`Assistant`) because the Supplement editorial serif heading voice was never activated.

The typography issue therefore originated at the platform architecture level rather than within individual chapters.

Further investigation revealed that the existing experimental typography variants coupled heading and body typography together:

- Variant B → Fraunces headings + Inter body
- Variant C → Cormorant Garamond headings + Inter body

This coupling prevented activation because heading typography and body typography are independent editorial decisions.

### Decision

Supplement heading typography is activated independently from body and UI typography.

The canonical Supplement typography architecture is:

| Role | Typography |
|------|------------|
| Editorial display headings | Fraunces |
| Chapter headings | Fraunces |
| Body typography | Assistant |
| Merchant UI | Assistant |
| Navigation | Assistant |
| Buttons | Assistant |

Heading activation occurs exclusively through the existing Pack Registry → HTML class → Supplement typography token architecture.

The production activation class is:

```
sp-font-heading-fraunces
```

The activation modifies only:

```
--sp-font-heading
```

It must not modify:

- `--sp-font-body`
- button typography
- navigation typography
- merchant UI typography
- chapter-local typography ownership

Chapter CSS may consume typography tokens but must never own the editorial heading font family.

### Consequences

Positive

- Platform typography now aligns with the approved editorial design language.
- All Supplement chapters inherit the correct editorial heading voice automatically.
- Heading typography and body typography become independently controllable.
- Typography ownership remains centralized.
- Existing chapter implementations require no local heading-family overrides.

Negative

- Serif heading metrics change the optical proportions of several flagship chapters.
- Individual chapters may require small composition refinements after activation.
- Existing experimental typography variants remain available but are no longer the recommended production activation path.

### Alternatives Considered

#### Activate existing Variant B

Rejected.

Although Variant B correctly activates Fraunces headings, it also replaces the established Assistant body/UI typography with Inter.

Heading typography and body typography are independent editorial concerns and should not be coupled.

#### Activate existing Variant C

Rejected.

Cormorant Garamond produced a more classical luxury aesthetic that did not match the approved Supplement editorial language as closely as Fraunces.

#### Override heading fonts within individual chapters

Rejected.

This would violate the PulseOps ownership model by introducing chapter-level typography ownership and duplicate font-family definitions.

Typography activation belongs to the platform typography system rather than individual chapter CSS.

### Related Documents

- PulseOps Design System
- Typography Language Foundation
- CSS Ownership Matrix
- PulseOps Architecture
- Formulation Philosophy Implementation Specification
- Formulation Philosophy Implementation Brief

### Related Commits

Freeze supplement editorial typography activation

### Related Tags

pulseops-supplement-typography-v1

### Notes

This decision introduced an important production principle:

Platform typography must be validated before chapter-level typography refinement begins.

Future typography validation must verify both:

- typography token ownership
- final computed font family

Token validation alone is insufficient because correctly wired typography tokens may still resolve to an unintended visual language.

---

# Updating This Document

When adding a new ADR:

Assign the next sequential number.

Never modify historical decisions.

If a decision changes:

Create a new ADR.

Reference the previous one.

Do not rewrite history.

---

# Reviewing ADRs

Before changing architecture, always ask:

Has this decision already been documented?

If yes:

Understand why it exists before proposing an alternative.

Architecture should evolve deliberately.

Not accidentally.

---

# Definition of Done

The ADR library is considered healthy when:

Major architectural decisions are documented.

Historical reasoning is preserved.

Future contributors understand why the platform works the way it does.

Governance evolves through documented decisions rather than forgotten conversations.

Architecture becomes easier to maintain with time rather than harder.

