# PulseOps Cursor Implementation

Chapter: Community Confidence

Version: 1.0

Status: Ready for Implementation

---

# Purpose

This document defines the implementation contract for the Community Confidence chapter.

Implementation is an engineering activity.

It is not a design activity.

Creative decisions have already been approved.

Cursor must faithfully reproduce the approved designs while preserving PulseOps architecture, merchant configurability, accessibility, and implementation quality.

---

# Attached Implementation Pack

The following files are attached to this conversation.

1. community-confidence-concept-translation.md

2. community-confidence-blueprint.md

3. annotated-mockup-desktop.png

4. annotated-mockup-mobile.png

These four artifacts are the complete source of truth for this implementation.

Do not assume access to any additional design documentation.

---

# Source of Truth Hierarchy

If implementation questions arise, follow this order.

1. Desktop Annotated Mockup

2. Mobile Annotated Mockup

3. Community Confidence Blueprint

4. Community Confidence Concept Translation

If any ambiguity remains after reviewing these documents,

STOP

Explain the ambiguity before implementing.

Do not invent design decisions.

---

# Implementation Mission

Implement the Community Confidence chapter exactly as documented.

Preserve:

- approved composition
- approved hierarchy
- approved narrative
- approved responsive behaviour
- merchant configurability
- PulseOps architecture
- accessibility
- design tokens

Do not redesign.

Do not reinterpret.

Do not "improve."

Implementation fidelity is the objective.

---

# Current Chapter

Chapter

Community Confidence

Buyer Question

Will people like me actually stick with this?

Narrative Responsibility

Community confidence through shared daily ritual.

Memory Anchor

Morning Index.

Primary Visual Owner

Typography.

Supporting Owner

Atmospheric photography.

Previous Chapter

Ingredients

Next Chapter

Formulation Philosophy

This narrative position must remain unchanged.

---

# Architecture Requirements

Follow the existing PulseOps architecture.

Do not:

- introduce new architecture
- change section responsibilities
- duplicate components
- duplicate CSS
- duplicate tokens
- bypass existing systems

Continue using existing:

- design tokens
- architecture
- schema conventions
- merchant settings
- shared utilities

---

# Merchant Experience

Merchant configurability is mandatory.

Do not hardcode:

- copy
- Morning Index entries
- supporting copy
- imagery
- colours
- spacing

Continue using existing merchant settings wherever possible.

If additional settings are genuinely required:

- follow PulseOps schema conventions
- preserve backwards compatibility
- avoid redundant settings

---

# Responsive Behaviour

Desktop

Implement exactly as shown in the desktop annotated mockup.

Desktop is an editorial composition.

It is not derived from mobile.

Tablet

Create the natural transition between approved desktop and approved mobile.

Do not invent a third design language.

Mobile

Implement exactly as shown in the mobile annotated mockup.

Do not mechanically stack desktop.

---

# Accessibility

Preserve:

- semantic HTML
- heading hierarchy
- keyboard navigation
- focus visibility
- reduced motion behaviour
- colour contrast
- touch targets
- screen reader reading order

No accessibility regressions.

---

# Performance

Maintain PulseOps performance standards.

Avoid:

- unnecessary DOM
- duplicate rendering
- unnecessary JavaScript
- layout shifts
- blocking assets

Reuse existing architecture wherever possible.

---

# Implementation Constraints

Cursor must not redesign.

Cursor must preserve:

- approved hierarchy
- approved composition
- approved typography ownership
- approved photography ownership
- approved merchant experience
- approved responsive behaviour

Do not introduce:

- cards
- dashboard layouts
- KPI widgets
- unnecessary animations
- decorative effects
- additional sections
- architecture changes

---

# Validation

Before completion, verify:

Visual

✓ Desktop matches approved annotated mockup.

✓ Mobile matches approved annotated mockup.

✓ Morning Index remains the dominant memory anchor.

✓ Typography remains the primary visual owner.

✓ Editorial rhythm is preserved.

Merchant

✓ Merchant configurability preserved.

✓ No hardcoded demo behaviour.

Accessibility

✓ Keyboard navigation.

✓ Screen reader order.

✓ Reduced motion.

✓ Contrast.

Engineering

✓ Theme Check passes.

✓ git diff --check passes.

✓ No console errors.

✓ No duplicate CSS.

✓ No architecture regressions.

---

# Deliverables

Provide a final implementation report including:

1. Files changed

2. Merchant settings added or modified

3. Validation results

4. Responsive verification

5. Accessibility verification

6. Theme Check results

7. git diff --check results

8. Known deviations (if any)

---

# Stop Conditions

Stop implementation immediately if:

- the annotated mockups conflict
- the Blueprint conflicts with the mockups
- merchant configurability would be reduced
- implementation requires redesign
- architecture changes become necessary

Do not continue by making assumptions.

Instead,

describe the issue,

recommend the smallest acceptable solution,

and wait for approval.

---

# Definition of Success

Implementation is successful only when the resulting Community Confidence chapter is visually indistinguishable from the approved desktop and mobile annotated mockups.

The implementation should feel like the approved design was reproduced—not reinterpreted.

Cursor is acting as a senior frontend implementation engineer.

Not as a designer.

