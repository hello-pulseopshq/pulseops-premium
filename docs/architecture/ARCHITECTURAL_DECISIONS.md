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

