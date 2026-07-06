# PulseOps Implementation Quality Rules

Version: 1.0 (Foundation Draft)

Status: In Review

---

# Purpose

Implementation quality is measured by more than visual fidelity.

A premium implementation should be:

- faithful
- maintainable
- configurable
- predictable
- accessible
- reusable

This document defines the engineering quality standards that every PulseOps implementation must satisfy before a chapter can be frozen.

It complements the Cursor Prompt Standard.

The Cursor Prompt Standard explains how implementation prompts should be written.

This document defines the quality expected from the implementation itself.

---

# Relationship to Governance

Production Constitution

↓

Production Playbook

↓

Implementation Quality Rules

↓

Cursor Prompt Standard

↓

Implementation

---

# Philosophy

Implementation exists to reproduce approved design.

Implementation does not redesign.

Implementation quality is measured by restraint rather than cleverness.

The simplest implementation that faithfully reproduces the approved design is preferred.

---

# Implementation Principles

## Principle 1

Implement.

Do not redesign.

Design problems belong upstream.

Implementation problems belong here.

---

## Principle 2

Architecture is preserved.

Do not modify platform architecture simply because one chapter is easier to implement differently.

The chapter adapts to the architecture.

Architecture evolves deliberately.

---

## Principle 3

Merchant configurability is mandatory.

Never hardcode demo behaviour into reusable systems.

Every implementation decision should preserve future merchant flexibility.

---

## Principle 4

Local change.

Global stability.

Changes should remain as local as possible.

Avoid unnecessary modifications outside the affected chapter.

---

## Principle 5

Restraint over optimisation.

Do not refactor unrelated code.

Do not "clean up" neighbouring systems.

Do only the work required.

---

## Principle 6

Declare scope before implementation.

Implementation should begin by identifying:

• implementation owner

• files to modify

• reason for each modification

Scope should not expand silently during implementation.

Unexpected cross-owner changes require explicit justification.

Local implementation is preferred over platform-wide modification.

---

# CSS Architecture

## Ownership

Every visual property should have one clear owner.

Preferred ownership order:

Base

↓

Supplement / Vertical

↓

Desktop

↓

Tablet

↓

Mobile

Avoid duplicate ownership.

Avoid conflicting ownership.

---

# CSS Cascade Rule

Every visual CSS modification requires cascade validation.

For every changed visual property verify:

- selector

- property

- base value

- supplement value

- desktop value

- tablet value

- mobile value

- computed desktop value

- computed tablet value

- computed mobile value

Never assume editing a CSS value changes the rendered output.

Validate the actual cascade.

---

# CSS Hygiene

Before freeze:

Remove:

- dead CSS

- duplicate declarations

- obsolete overrides

- abandoned refinement rules

- ineffective selectors

Document intentional exceptions.

Visual output must remain unchanged.

---

# Token Usage

Prefer existing PulseOps tokens.

Avoid introducing chapter-specific tokens unless:

- behaviour cannot be expressed using existing tokens

- reuse is expected

Never duplicate global tokens locally.

---

# Typography

Typography uses systems.

Never modify typography using font size alone.

Evaluate:

- hierarchy

- weight

- rhythm

- line-height

- measure

- tracking

- colour

- editorial relationship

Typography should harmonise across adjacent chapters.

---

# Responsive Behaviour

Desktop and mobile are independent compositions.

Implementation must not infer mobile from desktop.

Each composition should follow approved mockups.

---

# Merchant Experience

Implementation should preserve:

- merchant settings

- merchant flexibility

- schema stability

- reusable blocks

- future demo adaptability

No implementation should reduce merchant control.

---

# Accessibility

Implementation must preserve:

- semantics

- keyboard navigation

- focus behaviour

- reduced motion

- colour contrast

- screen reader behaviour

Accessibility regressions are not acceptable.

---

# Validation

Every implementation should complete:

Theme Check

↓

Git Diff Check

↓

Playwright

↓

Manual Desktop Review

↓

Manual Mobile Review

↓

Merchant Review

↓

Freeze Hygiene

No implementation skips validation.

---

# Visual Fidelity

Approved desktop and mobile mockups are the source of truth.

Implementation should not reinterpret:

- composition

- spacing

- typography

- imagery

- interaction

- motion

- responsive hierarchy

---

# Design Debt vs Implementation Debt

These must never be confused.

Design Debt

Examples

- unresolved hierarchy

- weak concept

- unclear composition

- typography not approved

Resolved during:

Review

Concept

Blueprint

Mockups

Implementation Debt

Examples

- CSS ownership

- duplicate rules

- cascade issues

- accessibility

- validation

- maintainability

Resolved during:

Implementation

Freeze Hygiene

---

# Freeze Hygiene Sprint

Every flagship chapter completes one hygiene sprint before freeze.

Purpose:

- remove technical debt

- simplify implementation

- preserve visual output

- document intentional exceptions

- prepare chapter for long-term maintenance

The hygiene sprint must never redesign the chapter.

---

# Anti-Patterns

Never:

Implement before approved mockups.

Redesign during implementation.

Hardcode merchant content.

Duplicate architecture.

Introduce local design systems.

Change typography without system review.

Change CSS without cascade validation.

Leave dead CSS after refinement.

Freeze chapters without implementation hygiene.

Optimise unrelated systems.

---

# Ingredients Chapter Learnings

The Ingredients chapter established the following permanent implementation rules.

1.

CSS changes require computed-value verification.

2.

Desktop overrides must be audited before changing base values.

3.

Typography should be validated as a system.

4.

Desktop and mobile require independent review.

5.

One Freeze Hygiene Sprint is mandatory.

6.

Review implementation within the homepage rather than in isolation.

7.

Visual parity should be maintained during implementation cleanup.

8.

Every implementation report should document remaining technical debt.

---

# Definition of Clean Implementation

An implementation is considered clean when:

Architecture preserved.

Merchant configurability preserved.

No unnecessary hardcoding.

No dead CSS.

No duplicate ownership.

Cascade validated.

Accessibility preserved.

Validation completed.

Visual fidelity achieved.

Freeze Hygiene completed.

Implementation report completed.

Technical debt documented.

The objective is predictable craftsmanship rather than clever implementation.
