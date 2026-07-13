# PulseOps Implementation Quality Rules

Version: 1.1 (GV-7 Refinement)

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

**Most rules in this document apply to Phase 2 — Production Hardening.**

Phase 1 — Composition Build is governed by visual fidelity and Implementation Specification compliance. Engineering quality validation begins after composition approval.

---

# Relationship to Governance

Production Constitution

↓

Production Playbook

↓

Implementation Quality Rules

↓

Cursor Prompt Standard (Phase 2 focus)

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

## Principle 7

Composition before engineering quality.

Phase 1 must achieve visual fidelity before Phase 2 engineering standards apply.

CSS polishing cannot compensate for incorrect DOM composition.

When structural mismatch persists, rebuild presentation DOM — do not continue cascade refinement.

## Principle 8

Platform before chapter.

When the same visual issue appears across multiple chapters, stop chapter refinement and investigate platform architecture first.

Chapter-level tuning must not compensate for platform defects.

## Principle 9

Mockup authority.

Approved annotated mockups are the visual source of truth.

Current implementation is never the authority.

Implementation moves toward mockups — never toward previous implementation.

---

# Phase Applicability

| Concern | Phase 1 | Phase 2 |
|---------|---------|---------|
| Composition fidelity | Required | Preserved — no changes |
| Region hierarchy | Required | Frozen |
| Visual Delta Review | Required per region (flagship editorial) | N/A |
| Platform investigation | Before cross-chapter chapter fixes | As needed |
| Merchant configurability | Deferred | Required |
| Accessibility | Basic semantics only | Full validation |
| Theme Check | Deferred | Required |
| CSS cascade audit | Minimal | Required |
| Freeze Hygiene | Deferred | Required |

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

## Typography Validation (GV-7)

Typography validation is incomplete if it checks tokens only.

Every typography investigation or activation sprint must verify:

1. **Token ownership** — which file and selector owns the token
2. **Computed typography** — final rendered values in the browser

Required computed checks:

- `font-family`
- `font-weight`
- `line-height`

Report computed values on representative heading and body/UI samples — not CSS variable declarations alone.

When the same typography issue appears across multiple chapters, investigate platform activation architecture before chapter-level CSS tuning.

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

## Visual Delta Review (GV-7)

Composition approval requires Visual Delta Review.

For each region, record **Matched** or **Remaining Difference**.

If a difference remains, explain why — not "approximately matches."

Binary PASS/FAIL alone is insufficient for flagship editorial chapters.

## Region Reconstruction vs Refinement

| Situation | Workflow |
|-----------|----------|
| Minor drift, correct structure | Refinement Sprint or Micro Pass |
| Significant mockup drift | Region Reconstruction |
| Wrong DOM hierarchy | Rebuild presentation DOM |

Region Reconstruction rebuilds from annotated mockups. It does not preserve incorrect composition because it already exists.

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

Implement Phase 1 without Implementation Specification.

Combine Phase 1 and Phase 2 in a single sprint.

Begin Production Hardening before composition approval.

Redesign during implementation.

Preserve incorrect DOM for convenience.

Use CSS polishing to fix structural mismatch.

Use repeated refinement when Region Reconstruction is required.

Validate typography using token values without computed verification.

Treat current implementation as visual authority.

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

# Scientific Confidence Chapter Learnings

The Scientific Confidence chapter established that engineering correctness and visual correctness are independent acceptance gates.

1.

Implementation is not considered complete until the rendered desktop and mobile implementations have been directly compared against the **Approved Annotated Desktop Mockup (Image)** and **Approved Annotated Mobile Mockup (Image)**.

Passing Theme Check, accessibility review, merchant configurability validation, architecture validation, and runtime validation does **not** replace **Visual Fidelity Review**.

Visual acceptance must confirm:

- composition

- typography hierarchy

- photography ownership

- editorial rhythm

- spacing

- proportions

match the approved annotated mockups.

Implementation may pass engineering validation and still fail implementation quality if visual fidelity is not achieved.

---

# Formulation Philosophy Chapter Learnings (GV-5)

The Formulation Philosophy sprint established permanent implementation quality rules.

1.

Composition fidelity takes precedence over DOM reuse.

2.

CSS changes cannot fix incorrect region hierarchy — rebuild presentation DOM instead.

3.

When implementation remains materially different after one refinement sprint, rebuild — do not continue CSS polishing.

4.

Engineering validation (Theme Check, accessibility, merchant configurability) belongs in Phase 2 — not Phase 1.

5.

Screenshot comparison against annotated mockups is mandatory before Phase 2 begins.

---

# GV-7 Learnings — Formulation Philosophy / Typography Activation

1. **Platform-first investigation** — cross-chapter issues require platform audit before chapter CSS.
2. **Computed typography validation** — token ownership plus computed font-family, weight, line-height.
3. **Region-based Phase 1** — flagship editorial chapters approve one region at a time.
4. **Region Reconstruction** — distinct from refinement when mockup drift is significant.
5. **Composition Notes** — qualitative composition artifact when measurements are insufficient.
6. **Visual Delta Review** — per-region Matched / Remaining Difference at approval gates.

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
