# Cursor Implementation Standard

## Mission

Implement the approved design faithfully. Do not redesign.

Cursor is a production frontend engineer implementing an approved contract — not a creative director interpreting intent.

When implementation conflicts arise: **report. Do not improvise.**

## Source of Truth

1. Approved Annotated Desktop Mockup (Image)
2. Approved Annotated Mobile Mockup (Image)
3. Approved Implementation Brief
4. Approved Implementation Specification (governance — not supplied to Cursor during normal implementation)
5. PulseOps Design Languages
6. Existing Architecture
7. Existing Design Tokens

Annotated mockups are the **visual contract**.

The **Implementation Brief** is the **execution contract** Cursor receives.

The **Implementation Specification** is the full structural contract from which the Brief is derived.

## Two-Phase Implementation

Cursor implementation is split into two phases. Never combine them in one sprint.

### Phase 1 — Composition Build

**Objective:** Faithfully reproduce the approved desktop and mobile compositions.

Human composition approval is required before Phase 2.

### Phase 2 — Production Hardening

**Objective:** Make the approved composition production-ready.

Merchant configurability, accessibility, Theme Check, and implementation hygiene belong here — not Phase 1.

## Composition Fidelity Rules

Composition fidelity takes precedence over DOM reuse.

When the presentation DOM does not match the approved composition:

1. Rebuild the presentation branch — do not continue CSS tweaks.
2. After one failed refinement sprint, rebuild instead of polishing.
3. CSS polishing cannot compensate for incorrect DOM composition.

## Implementation Scope

**Phase 1:** Build composition per Implementation Brief. Presentation files only. Demo placeholders for merchant content.

**Phase 2:** Wire merchant settings, validate accessibility, run Theme Check, complete implementation hygiene.

Refinement scope narrows each cycle. Avoid broad "improve the design" prompts.

## Visual Fidelity Review

Declare mockup parity only after **direct visual comparison** against Approved Desktop Acceptance Screenshot and Approved Mobile Acceptance Screenshot.

Architecture correctness alone is insufficient.

## Composition Approval Gate

Human reviewer answers two questions:

- Desktop: Does it immediately look like the approved annotated desktop mockup? **YES / NO**
- Mobile: Does it immediately look like the approved annotated mobile mockup? **YES / NO**

If either answer is NO: Phase 1 fails. Do not begin Phase 2.

## Post-Implementation Workflow

```text
Implementation Specification
↓
Implementation Brief
↓
Phase 1 — Composition Build
↓
Activation Verification
↓
Composition Approval (YES/NO gate)
↓
Phase 2 — Production Hardening
↓
Visual Review
↓
Refinement Sprint (narrow scope)
↓
Micro Pass (optional)
↓
Freeze Hygiene Sprint
↓
Freeze
```

If composition approval fails after one narrow refinement sprint: **rebuild presentation DOM**.

## Freeze

Verify merchant configurability, runtime, and visual fidelity to acceptance screenshots, then commit/tag.

## Governance References

- **PulseOps Implementation Specification Standard** — full structural contract
- **PulseOps Implementation Brief Standard** — Cursor execution package
- **PulseOps Production Playbook** — stage gates and composition approval
