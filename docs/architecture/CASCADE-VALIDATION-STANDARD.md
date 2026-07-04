# Cascade Validation Standard

**Version:** 1.0  
**Status:** Foundation

---

## Scope

Unless explicitly stated otherwise, the ownership rules in this document describe the target implementation architecture of PulseOps.

Current implementation may temporarily differ while Architecture Cleanup Sprints are in progress.

Architecture Cleanup exists to progressively align the implementation with these governance rules.

---

# Purpose

The Cascade Validation Standard defines how every visual implementation change is validated before it can be considered complete.

Its purpose is to ensure that changing a CSS declaration actually changes the rendered result.

A successful implementation is measured by the rendered experience—not by the edited source code.

This standard exists because implementation quality depends on understanding CSS ownership and cascade behaviour rather than assuming that edited values reach the browser.

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
Implementation
```

Cascade Validation governs implementation verification.

It does not define design.

It does not redefine ownership.

---

# Why This Document Exists

During the Ingredients and Community Confidence flagship chapters, multiple implementation sprints technically succeeded while visually failing.

Theme Check passed.

CSS audits passed.

Accessibility passed.

Computed-style audits partially passed.

The rendered implementation still differed from the approved mockups.

The root cause was not implementation quality.

The root cause was ownership ambiguity inside the CSS cascade.

Changing a CSS declaration does not guarantee that the browser will use that declaration.

Implementation must validate the rendered cascade rather than trusting source code.

---

# Philosophy

The browser is the source of truth.

Not the stylesheet.

Not Theme Check.

Not the implementation report.

Rendered output is the only correct validation.

---

# Core Principle

Every visual CSS modification must pass cascade validation before implementation is considered complete.

---

# Validation Philosophy

Implementation follows this sequence:

```
Intent

↓

Implementation

↓

Ownership Verification

↓

Cascade Verification

↓

Computed Value Verification

↓

Visual Verification

↓

Freeze
```

No step may be skipped.

---

# Validation Levels

## Level 1 — Ownership Validation

Determine:

Who owns this visual responsibility?

Example:

```
Heading spacing

↓

Section CSS
```

Not:

```
Section CSS

+

Editorial CSS

+

Supplement CSS
```

Only one owner should exist.

---

## Level 2 — Selector Validation

Document:

Selector

Specificity

Source file

Load order

Inheritance

Override chain

Example

```
.sp-metrics__heading

↓

sp-metrics.css

↓

Specificity

↓

Wins
```

---

## Level 3 — Cascade Validation

Determine every declaration affecting the property.

Example

```
font-size

↓

editorial-system.css

↓

supplement.css

↓

sp-metrics.css

↓

Responsive overrides within the owning section CSS file

↓

Computed value
```

Every layer must be documented.

---

## Level 4 — Computed Value Validation

Verify computed values in the browser.

Desktop

Tablet

Mobile

If computed values remain unchanged after editing CSS, implementation has failed regardless of source code.

---

## Level 5 — Visual Validation

Compare implementation against:

Approved Desktop Mockup

Approved Mobile Mockup

Visual validation is always performed after computed-value validation.

---

# Required Validation Workflow

Every visual change follows this process.

---

## Step 1

Identify the visual property.

Example

```
padding-top
```

---

## Step 2

Identify the owner.

Example

```
Owner

sp-metrics.css
```

---

## Step 3

Locate every declaration affecting that property.

Example

```
editorial-system.css

↓

supplement.css

↓

section CSS

↓

responsive override
```

---

## Step 4

Determine the winning declaration.

Document:

Selector

Specificity

Source file

Load order

---

## Step 5

Inspect browser computed value.

Desktop

Tablet

Mobile

---

## Step 6

Compare against expected value.

If different:

Determine why.

Never patch blindly.

---

## Step 7

Compare rendered result with approved mockups.

---

## Step 8

Only after all validation passes may implementation proceed to Freeze.

---

# Validation Checklist

Every CSS PR should answer:

## Property

What property changed?

---

## Owner

Which file owns this property?

---

## Competing Owners

Which other files define it?

---

## Cascade

What declarations participate?

---

## Winner

Which declaration wins?

---

## Computed Desktop

Value

---

## Computed Tablet

Value

---

## Computed Mobile

Value

---

## Visual Result

Matches approved mockup?

Yes / No

---

# Common Failure Modes

## Failure 1

Edited declaration never wins.

Cause

Higher specificity.

---

## Failure 2

Edited declaration wins.

Visual unchanged.

Cause

Different property controls layout.

---

## Failure 3

Desktop correct.

Tablet incorrect.

Cause

Responsive override.

---

## Failure 4

Desktop correct.

Mobile incorrect.

Cause

Media-query ownership.

---

## Failure 5

Implementation visually inconsistent.

Cause

Duplicate ownership.

---

# Ownership Questions

Before modifying CSS always ask:

Who owns this property?

Who consumes this property?

Who must never redefine this property?

If ownership is unclear:

Stop.

Resolve ownership before editing CSS.

---

# Validation Matrix

Every changed property should produce a validation matrix.

| Item | Result |
|------|--------|
| Property | |
| Owner | |
| Competing Owners | |
| Selector | |
| Specificity | |
| Winning Rule | |
| Desktop Value | |
| Tablet Value | |
| Mobile Value | |
| Visual Pass | |

---

# Browser Tools

Validation should use browser DevTools.

Inspect:

Styles

Computed

Layout

Box Model

Applied Rules

Media Queries

Inherited Rules

Never rely solely on source code inspection.

---

# Validation Breakpoints

Architecture Governance does not define canonical viewport breakpoints.

The canonical validation breakpoints are defined by the current validation harness and Architecture Hygiene validation process.

The Cascade Validation Standard adopts those breakpoints rather than duplicating them.

This prevents governance drift when the validation harness evolves.

Every Architecture Cleanup Sprint must validate computed values using the current approved validation harness across all required viewport categories.

Typical validation includes:

- Desktop
- Laptop, if applicable
- Tablet
- Mobile

Refer to the current validation harness and Architecture Hygiene documentation for the exact breakpoint values in use.

---

# Acceptable Exceptions

Cascade complexity is acceptable only when:

Documented

Intentional

Architecturally justified

Temporary during migration

Otherwise it should be removed.

---

# Validation During Cleanup

Architecture cleanup requires additional validation.

Before migration

↓

Computed values recorded

↓

Migration

↓

Computed values revalidated

↓

Visual parity confirmed

If computed values change unexpectedly:

Rollback.

---

# Merchant Validation

Cascade cleanup must preserve:

Merchant settings

Schema behaviour

Theme editor behaviour

Responsive settings

Configurable spacing

Cleanup must never reduce merchant flexibility.

---

# Accessibility Validation

Cascade changes must not regress:

Focus states

Reduced motion

Contrast

Keyboard navigation

Hidden content

Screen reader behaviour

Accessibility validation remains mandatory.

---

# Anti-Patterns

Never:

Assume edited CSS is active.

Assume Theme Check validates rendering.

Fix problems by increasing specificity.

Use !important to bypass ownership.

Stack overrides without identifying the owner.

Patch multiple files simultaneously.

Skip computed-value inspection.

Validate desktop only.

---

# Pull Request Requirements

Every CSS Pull Request should include:

## Ownership

Which file owns the change?

---

## Validation

Computed values recorded.

---

## Visual Review

Desktop

Tablet

Mobile

---

## Regression Check

Adjacent chapters unaffected.

---

## Merchant Validation

Settings preserved.

---

## Accessibility Validation

Verified.

---

# Freeze Requirements

Before Freeze verify:

- Ownership is correct.
- Cascade is intentional.
- Computed values match expectations.
- Visual output matches approved mockups.
- Merchant configurability preserved.
- Accessibility preserved.
- Responsive behaviour preserved.
- No temporary override chains remain undocumented.

---

# Definition of Done

A CSS implementation is considered complete only when:

- Every modified property has one documented owner.
- The cascade is fully understood.
- The browser computes the expected values.
- Desktop matches the approved desktop mockup.
- Mobile matches the approved mobile mockup.
- Tablet behaves intentionally.
- Merchant configurability remains unchanged.
- Accessibility remains intact.
- Theme Check passes.
- Visual fidelity is confirmed.

Changing CSS is not success.

Rendering the intended experience is success.
