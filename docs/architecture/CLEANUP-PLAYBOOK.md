# PulseOps Architecture Cleanup Playbook

**Version:** 1.0

**Status:** Foundation

---

## Scope

Unless explicitly stated otherwise, the ownership rules in this document describe the target implementation architecture of PulseOps.

Current implementation may temporarily differ while Architecture Cleanup Sprints are in progress.

Architecture Cleanup exists to progressively align the implementation with these governance rules.

---

# Purpose

The Architecture Cleanup Playbook defines how PulseOps implementation architecture is improved without changing the approved customer experience.

Its purpose is to simplify the implementation architecture while preserving:

- visual output
- merchant configurability
- accessibility
- runtime behaviour
- platform architecture

Cleanup is an engineering activity.

It is not a redesign activity.

---

# Relationship to Governance

```
Production Constitution

↓

Production Playbook

↓

Implementation Quality Rules

↓

CSS Ownership Matrix

↓

Cascade Validation Standard

↓

Architecture Cleanup Playbook

↓

Implementation
```

---

# Philosophy

Implementation architecture should become simpler over time.

Not more complicated.

Every cleanup sprint should reduce future uncertainty.

Never increase it.

---

# Relationship to Other Governance

The Architecture Cleanup Playbook defines **how architecture should be improved safely**.

It focuses on:

- ownership migration
- cascade simplification
- dead code retirement
- structural cleanup
- migration sequencing

The Playbook explains **the methodology** for architecture cleanup.

It does not define the execution workflow of an individual cleanup sprint.

That responsibility belongs to the **Architecture Cleanup Sprint Standard**.

---

# Cleanup Objectives

Architecture cleanup exists to:

- clarify ownership
- simplify the cascade
- remove technical debt
- reduce implementation ambiguity
- improve maintainability
- improve predictability

It should never:

- redesign
- reinterpret mockups
- reduce merchant flexibility
- optimise prematurely

---

# Core Principles

## Principle 1

Preserve visual output.

The visitor should not notice cleanup.

---

## Principle 2

Clarify ownership before removing code.

Ownership problems are more important than duplicate code.

---

## Principle 3

Remove ambiguity.

Future contributors should immediately know where a responsibility belongs.

---

## Principle 4

Local cleanup.

Global stability.

Only modify the area under review.

---

## Principle 5

One chapter at a time.

Never migrate multiple chapters simultaneously.

---

# Cleanup Workflow

Every cleanup sprint follows:

```
Review

↓

Ownership Audit

↓

Cascade Audit

↓

Migration Plan

↓

Implementation

↓

Computed Validation

↓

Visual Validation

↓

Regression Validation

↓

Freeze
```

---

# Cleanup Categories

## Category A

Ownership Cleanup

Examples

- duplicate ownership
- misplaced styling
- chapter styling inside shared systems

Highest priority.

---

## Category B

Cascade Cleanup

Examples

- override chains
- specificity conflicts
- duplicate declarations

---

## Category C

Structural Cleanup

Examples

- obsolete utilities
- duplicated helper classes
- repeated media queries

---

## Category D

Dead Code

Examples

- unused CSS
- unused snippets
- abandoned utilities

Always remove last.

---

# Ownership Migration

Ownership migration always follows the same sequence.

```
Identify owner

↓

Move responsibility

↓

Validate cascade

↓

Validate rendering

↓

Retire previous owner
```

Never reverse the order.

---

# Safe Migration Rules

Never:

Move ownership and delete the original in one step.

Instead:

```
Move

↓

Validate

↓

Freeze

↓

Remove old implementation
```

---

# Chapter Cleanup Order

Recommended cleanup order

1. Editorial Outcomes
2. Ingredients
3. Community Confidence
4. Formulation Philosophy
5. Scientific Confidence
6. Human Story
7. FAQ
8. Future Self
9. Hero

Hero should be migrated only after the remaining homepage chapters have established the target ownership model.

Hero remains the highest-risk implementation surface and should be isolated in its own Architecture Cleanup Sprint.

---

# Architecture Cleanup Sequence

The canonical Architecture Hygiene and Cleanup sequence is:

```text
AH-1
Architecture Audit

↓

AH-2
Governance Review

↓

AH-2.1
Governance Corrections

↓

Governance Freeze

↓

AC-1
Validation Harness

↓

AC-2
Editorial Outcomes

↓

AC-3
Ingredients

↓

AC-4
Community Confidence

↓

AC-5
Formulation Philosophy

↓

AC-6
Scientific Confidence

↓

AC-7
Human Story

↓

AC-8
FAQ

↓

AC-9
Future Self

↓

AC-10
Hero

↓

AC-11
Dead Code Retirement

↓

Platform Freeze
```

Hero is intentionally late because it is the highest-risk implementation surface.

Dead code retirement occurs after ownership migration, not before.

---

# Section Review Checklist

Before cleanup determine:

Primary owner

Secondary owners

Unexpected owners

Merchant dependencies

Responsive behaviour

Architecture violations

Nothing should be migrated before this review.

---

# CSS Cleanup Rules

Remove:

duplicate declarations

duplicate selectors

obsolete overrides

dead utilities

unused media queries

legacy refinement patches

Do not remove:

documented exceptions

active merchant behaviour

architecture placeholders

future migration hooks

---

# JavaScript Cleanup

Review:

duplicate listeners

duplicate observers

duplicate helpers

unused modules

multiple implementations of the same behaviour

Merge behaviour where ownership is clear.

---

# Liquid Cleanup

Review:

unused snippets

duplicate markup

obsolete presentation branches

legacy schema

unused blocks

Never remove merchant settings without migration.

---

# Responsive Cleanup

Review separately:

Desktop

Tablet

Mobile

Never assume cleanup is identical across breakpoints.

---

# Merchant Protection Rules

Cleanup must preserve:

theme settings

schema IDs

merchant content

merchant layouts

editor compatibility

JSON templates

Changing merchant behaviour is prohibited.

---

# Accessibility Protection Rules

Cleanup must preserve:

semantic HTML

focus order

keyboard support

reduced motion

ARIA

screen reader behaviour

Accessibility regressions are unacceptable.

---

# Validation Gates

Every cleanup PR requires:

Ownership validation

Cascade validation

Computed-value validation

Visual comparison

Regression testing

Accessibility verification

Merchant verification

Only then may it proceed.

---

# Rollback Strategy

Every cleanup must be reversible.

If:

visual output changes unexpectedly

or

merchant behaviour changes

or

accessibility regresses

Rollback immediately.

Investigate.

Do not patch over the issue.

---

# Documentation Requirements

Every cleanup should document:

What changed

Why it changed

Previous owner

New owner

Risk level

Validation performed

Future implications

---

# Architecture Freeze

A cleanup sprint is complete only when:

ownership is clear

duplicate ownership removed

cascade simplified

visual parity maintained

merchant configurability preserved

accessibility preserved

documentation updated

---

# Anti-Patterns

Never:

Refactor unrelated chapters.

Delete code before ownership migration.

Increase specificity to "fix" ownership.

Use !important to bypass architecture.

Merge multiple cleanup categories into one PR.

Perform cleanup during active feature implementation.

Optimise before understanding.

---

# Success Metrics

Architecture cleanup is successful when:

Every responsibility has one owner.

The cascade is predictable.

Dead code is eliminated.

Future implementation becomes easier.

Merchant experience is unchanged.

The customer cannot tell cleanup occurred.

The engineering team immediately can.
