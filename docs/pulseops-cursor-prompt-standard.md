# PulseOps Cursor Prompt Standard

**Status:** Working governance document  
**Purpose:** Canonical prompt structure for Cursor implementation sprints  
**Applies to:** Homepage chapters, PDP chapters, vertical packs, and future PulseOps editorial sections

---

## 1. Why this document exists

PulseOps implementation failed when Cursor was asked to infer premium editorial design from abstract language such as "make it premium," "match the concept," or "create a magazine spread."

The Human Story chapter proved that Cursor performs best when the approved design is already resolved and the prompt gives it a precise implementation contract.

Cursor should be treated as a production frontend engineer implementing an approved design, not as the creative director.

---

## 2. Production Prerequisites

Before implementation can begin, the following production artifacts must already exist in the production workflow:

1. Approved Desktop Mockup (Image)
2. Approved Mobile Mockup (Image)
3. Approved Blueprint
4. Approved Annotated Desktop Mockup (Image)
5. Approved Annotated Mobile Mockup (Image)

If any prerequisite is missing, stop and complete the upstream production stage first.

**Approved Desktop Mockup (Image) and Approved Mobile Mockup (Image) establish the design.**

**Approved Blueprint resolves implementation intent.**

**Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) remove implementation ambiguity.**

These artifacts belong to the production workflow. They are not all supplied to Cursor during normal implementation.

---

## 3. Cursor Implementation Package

The **Cursor Implementation Package** differs by phase.

### Phase 1 — Composition Build Package

1. Approved Annotated Desktop Mockup (Image)
2. Approved Annotated Mobile Mockup (Image)
3. Approved Implementation Brief
4. Phase 1 Composition Build Prompt

### Phase 2 — Production Hardening Package

1. Approved Implementation Brief
2. Phase 2 Production Hardening Prompt

Do not attach the full Implementation Specification, Blueprint, or upstream mockups unless escalation is required.

Design Language documents exist in the repository. Reference them from the codebase.

**Phase 1 and Phase 2 must never be combined in a single prompt.**

---

## 4. Source-of-truth hierarchy

Every Cursor implementation prompt must include this hierarchy.

```text
SOURCE OF TRUTH

1. Approved Annotated Desktop Mockup (Image)
2. Approved Annotated Mobile Mockup (Image)
3. Approved Desktop Acceptance Screenshot
4. Approved Mobile Acceptance Screenshot
5. Approved Implementation Brief

Mockups and acceptance screenshots are the visual contract.

The Implementation Brief is the execution contract.

Do not open the Implementation Specification or other governance documents during normal implementation.
```

---

## 5. Two-phase implementation model

Every flagship chapter implementation uses two distinct Cursor sprints.

### Phase 1 — Composition Build

**Objective:** Faithfully reproduce the approved desktop and mobile compositions.

Merchant configurability, Theme Check, and accessibility certification belong in Phase 2.

### Phase 2 — Production Hardening

**Objective:** Make the composition-approved implementation production-ready.

**Prerequisite:** Composition Approval gate — both desktop and mobile must be YES.

### Rules

- Follow the Implementation Brief — do not open the full specification.
- Composition fidelity takes precedence over DOM reuse.
- Rebuild presentation DOM when structural mismatch persists.
- Compare screenshots to Approved Acceptance Screenshots before requesting composition approval.

---

## 6. Required Cursor prompt structure

### Phase 1 — Composition Build prompt

1. Sprint name
2. Phase 1 objective (one sentence)
3. Implementation Brief reference
4. Architecture pre-flight
5. Activation verification
6. Scope (from Brief)
7. Screenshot checklist
8. Stop condition

### Phase 2 — Production Hardening prompt

1. Sprint name
2. Composition preservation rule
3. Implementation Brief (merchant mapping)
4. Accessibility and validation
5. Stop condition

---

## 7. Phase 1 — Composition Build prompt template

Copy this and replace the bracketed values.

```text
You are working in the PulseOps Premium Shopify repository.

SPRINT

Phase 1 — Composition Build
[CHAPTER NAME]

Model:
Cursor Composer 2.5 Fast / Auto Agent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 1 — Composition Build.

**Faithfully reproduce the approved desktop and mobile compositions.**

Do NOT redesign. Do NOT reinterpret. Do NOT preserve incorrect DOM for convenience.

Use demo placeholders for merchant content. Defer Theme Check, accessibility, and schema to Phase 2.

If existing markup conflicts with the Brief, rebuild the presentation DOM.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPLEMENTATION BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow the attached Approved Implementation Brief.

It contains everything you need:
- region hierarchy summary
- breakpoint summary
- allowed and prohibited files
- do-not rules
- implementation budget
- acceptance criteria
- screenshot checklist

Do not open the Implementation Specification or other governance documents.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHITECTURE PRE-FLIGHT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before editing code:

1. List files you intend to modify (must match Brief allowed files).
2. Confirm each file is within architectural ownership.
3. If scope exceeds the Brief implementation budget, stop and explain.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTIVATION VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Confirm: correct theme, template, section, stylesheet loaded.

Report: Preview URL, section root selector, stylesheet owner.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCREENSHOT CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Capture at 1440px and 390px.

Compare side-by-side with:
- Approved Desktop Acceptance Screenshot
- Approved Mobile Acceptance Screenshot

Report gaps. Do not self-approve composition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VALIDATION (MINIMAL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

git diff --check

Playwright: 390, 1440 — no overflow, no broken images.

Do NOT run Theme Check.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[REPORT PATH]

Include: Brief compliance, region hierarchy built, screenshot comparison, composition gaps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STOP CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Stop. Do NOT commit. Do NOT begin Phase 2.

Wait for Composition Approval gate (desktop YES, mobile YES).
```

---

## 8. Phase 2 — Production Hardening prompt template

Copy this and replace the bracketed values.

**Prerequisite:** Composition Approval gate passed (desktop YES, mobile YES).

```text
You are working in the PulseOps Premium Shopify repository.

SPRINT

Phase 2 — Production Hardening
[CHAPTER NAME]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Make the composition-approved [CHAPTER NAME] implementation production-ready.

Composition is frozen. Do NOT change DOM structure or visual output.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMPLEMENTATION BRIEF
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow the attached Approved Implementation Brief for:
- merchant mapping summary
- allowed and prohibited files
- implementation budget

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPOSITION PRESERVATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Any visual change requires human re-approval. If drift detected, stop and report.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MERCHANT CONFIGURABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Wire settings per Brief merchant mapping. Use existing schema conventions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve semantics, keyboard access, reduced motion, alt text. No regressions.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

git diff --check
shopify theme check --fail-level error
Playwright: 390, 430, 768, 1440

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STOP CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Stop. Do NOT commit. Wait for freeze review.
```

---

## 9. Common failure patterns to prevent

### Failure: Cursor builds a checklist but misses the design
Prevention:
- Include visual acceptance criteria.
- Require mockup comparison.
- Do not allow the agent to self-certify based only on Playwright.

### Failure: Desktop becomes stretched mobile
Prevention:
- Require independent desktop composition.
- Add cross-device review.
- Ask explicitly whether mobile feels stronger than desktop.

### Failure: Generic Shopify widget feel
Prevention:
- Ban default card/grid/carousel patterns unless approved.
- Require narrative and composition compliance.

### Failure: Overengineering
Prevention:
- Limit allowed files.
- Preserve architecture.
- No new systems during chapter implementation.

### Failure: Infinite polish loop
Prevention:
- Use two-phase implementation: composition approval before hardening.
- If structural mismatch persists after one refinement sprint, rebuild presentation DOM — do not continue CSS tweaks.
- Follow post-implementation workflow with narrow refinement scope.
- Micro Pass is optional and for subtle craftsmanship only.

### Failure: CSS polishing wrong DOM
Prevention:
- Implementation Brief must include region hierarchy summary.
- Rebuild DOM when structural mismatch persists.

### Failure: Too many documents during implementation
Prevention:
- Cursor receives Brief only — not the full specification.
- Brief must be complete enough to execute without opening governance docs.

### Failure: Too many concerns in one sprint
Prevention:
- Phase 1: composition only.
- Phase 2: production hardening only.
- Never combine phases in a single prompt.

---

## 10. When not to use this prompt

Do not use this template for:
- Pure audits
- Performance remediation
- Accessibility certification
- Runtime certification
- Documentation-only sprints
- Rollbacks
- Release tagging

Use it only when implementing an approved creative/design concept into the theme.

---

## 11. Freeze rule

A chapter is freeze-ready only after:

1. Composition Approval gate passed (desktop YES, mobile YES).
2. Phase 2 Production Hardening complete.
3. Visual Fidelity Review passes on desktop and mobile.
4. Refinement cycle(s) complete — scope narrowing each sprint; optional Micro Pass only for subtle craftsmanship.
5. Freeze Hygiene Sprint complete (no visual output change).
6. Merchant configurability is verified.
7. Accessibility is verified.
8. Runtime validation passes.
9. Theme Check has 0 errors.
10. The chapter no longer has obvious visual objections against annotated mockups.

Production Hardening must never begin before composition approval.

Then commit, tag, push, and move on.

---

## 12. CSS Cascade Hygiene Rule

When editing CSS, do not change a base selector or base custom property unless you verify it is not overridden later by:

- supplement/demo-specific selectors
- desktop media queries
- tablet media queries
- mobile media queries
- section presentation modifiers
- previously added refinement overrides

Required rule:

Base defines default.
Supplement defines brand expression.
Desktop/tablet/mobile override only what actually differs.
No duplicated value should exist unless it has a reason.

Before finishing any visual CSS change, inspect the cascade for the affected selector/property and confirm the final computed value at all required breakpoints.

For every CSS refinement report, include:

- selector/property changed
- base value
- supplement value, if any
- desktop value, if any
- tablet value, if any
- mobile value, if any
- final computed value at 390, 768, and 1440
- whether any obsolete override was removed

Never assume a CSS value changed visually just because it was edited.

---

## 13. Photography Conformance checklist

Before finishing any flagship chapter **Phase 1** implementation, Cursor must verify photography conformance against the Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image).

Required checks:

- [ ] Chapter-specific photography is assigned (not inferred from adjacent chapters)
- [ ] Image ownership matches Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) intent (hero, pillar, transition, closure)
- [ ] Crop behaviour matches annotated focal points and aspect expectations
- [ ] No reuse of unrelated chapter imagery because assets already exist elsewhere
- [ ] Photography matches Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) at desktop and mobile breakpoints

If approved chapter photography is unavailable, stop and report the gap. Do not substitute photography from another chapter without explicit approval.

---

## 14. Scientific Confidence retrospective learnings (GV-3)

The Scientific Confidence flagship chapter (SC-1 / SC-2) confirmed that implementation fidelity depends on Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image), not only approved design images.

**Primary implementation contract:** Approved Annotated Desktop Mockup (Image) + Approved Annotated Mobile Mockup (Image).

**Upstream production artifacts:** Approved Desktop Mockup (Image), Approved Mobile Mockup (Image), and Approved Blueprint (design and intent resolution only).

Implementation sprints should treat approved annotated mockups as the executable contract for spacing, rhythm, photography ownership, responsive behaviour, and editorial pacing. Approved mockup images remain the design authority; approved annotated mockup images remove the interpretation that caused SC-1 refinement work.

If Cursor still infers editorial rhythm, visual pauses, photography budget, or mobile reading cadence, the Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) are incomplete — not the implementation sprint.

---

## 15. GV-4 — Implementation Package Simplification

The Scientific Confidence retrospective clarified that **Production Workflow** and **Cursor Implementation Package** are different concepts.

**Production Workflow** defines the complete design process from Review through Annotated Mockups.

**Cursor Implementation Package (Phase 1):**

- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)
- Approved Implementation Brief
- Phase 1 Composition Build Prompt

**Cursor Implementation Package (Phase 2):**

- Approved Implementation Brief
- Phase 2 Production Hardening Prompt

Production learnings:

- Blueprint exists to create annotated mockups.
- Approved Desktop Mockup (Image) and Approved Mobile Mockup (Image) approve design.
- Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image) remove implementation ambiguity.
- Cursor should implement from approved annotated mockup images.
- The implementation package should remain as small as possible while preserving deterministic implementation.

---

## 16. Scientific Confidence freeze learnings (Governance Integration)

Scientific Confidence (`pulseops-scientific-confidence-v1`) confirmed durable production learnings. This section integrates them without replacing Sections 12–13.

### Cursor responsibility

**Faithful implementation — not design interpretation.**

When conflicts arise between code, tokens, and annotated mockups: report and escalate. Do not invent layouts, rebalance compositions, reinterpret mockups, or redesign hierarchy.

### Visual Fidelity Review

Formal gate after implementation. Complete only when composition, spacing, rhythm, proportions, typography hierarchy, and photography ownership match approved annotated mockups. Architecture correctness alone is insufficient.

### Visual validation requirement

Never declare "matches mockup" without direct visual comparison to Approved Annotated Desktop Mockup (Image) and Approved Annotated Mobile Mockup (Image).

### Standard review order

1. Composition
2. Typography
3. Photography
4. Spacing and editorial rhythm
5. Surface
6. Interaction
7. Merchant configurability
8. Accessibility
9. Architecture

Visual issues should surface before engineering-only investigation.

### Post-implementation workflow

```text
Implementation Specification
↓
Implementation Brief
↓
Phase 1 — Composition Build
↓
Composition Approval Gate (desktop YES / mobile YES)
↓
Phase 2 — Production Hardening
↓
Freeze
```

---

## 17. Formulation Philosophy learnings (GV-5)

GV-5 introduced the two-phase model and Implementation Specification. See Production Playbook.

---

## 18. GV-6 — Implementation Brief (Governance Refinement)

GV-6 stabilises execution without adding governance volume.

### Changes

1. **Implementation Brief** — concise execution package; Cursor reads Brief, not specification.
2. **Phase 1 objective** — one sentence: faithfully reproduce approved desktop and mobile compositions.
3. **Composition Approval Gate** — explicit YES/NO pass/fail; both must be YES for Phase 2.
4. **Implementation Budget** — declared in specification and Brief; discourages scope expansion.
5. **Acceptance Screenshots** — named comparison targets in specification and Brief.

### Principle

Governance documents define the system.

The Implementation Brief executes it.

If Cursor opens multiple documents, the Brief is incomplete.
