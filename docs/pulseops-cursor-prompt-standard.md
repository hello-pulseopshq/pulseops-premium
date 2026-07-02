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

## 2. Required inputs before writing a Cursor prompt

Do not start implementation until all four inputs exist:

1. Approved desktop mockup
2. Approved mobile mockup
3. Approved chapter blueprint
4. Relevant PulseOps language documents

If any of these are missing, stop and create them first.

---

## 3. Source-of-truth hierarchy

Every Cursor implementation prompt must include this hierarchy.

```text
SOURCE OF TRUTH

1. Desktop mockup
2. Mobile mockup
3. Chapter blueprint
4. PulseOps Design System
5. Frozen PulseOps Design Languages
6. Existing PulseOps Architecture
7. Existing design tokens
8. Existing implementation

If anything is ambiguous, the approved mockups win.
```

---

## 4. Required Cursor prompt structure

Every implementation prompt should follow this structure:

1. Sprint name
2. Mission
3. Source of truth
4. Design language compliance
5. Desktop implementation
6. Tablet implementation
7. Mobile implementation
8. Merchant configurability
9. Accessibility
10. Scope boundaries
11. Visual acceptance criteria
12. Validation
13. Report requirement
14. Stop condition

---

## 5. Canonical implementation prompt template

Copy this and replace the bracketed values.

```text
You are working in the PulseOps Premium Shopify repository.

SPRINT

[PHASE / CHAPTER / IMPLEMENTATION NAME]

Model:
Cursor Composer 2.5 Fast / Auto Agent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Implement the approved [CHAPTER NAME] design shown in the attached Desktop and Mobile mockups.

Do NOT redesign.
Do NOT reinterpret.
Do NOT invent a new composition.

Treat the supplied mockups exactly like an approved Figma design.

Your job is to faithfully reproduce those mockups using the existing PulseOps architecture, design system, and design tokens.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SOURCE OF TRUTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Follow this order of authority:

1. Desktop Mockup
2. Mobile Mockup
3. [CHAPTER BLUEPRINT FILE]
4. pulseops-design-system.md
5. Frozen PulseOps Design Languages
6. Existing PulseOps Architecture
7. Existing Design Tokens
8. Existing Implementation

If anything is ambiguous:

THE MOCKUPS WIN.

Do not optimize for implementation convenience if it reduces visual fidelity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PULSEOPS DESIGN LANGUAGE COMPLIANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PulseOps Design System is frozen.

This implementation must express the existing PulseOps Design Languages.

Do NOT create a new design language.
Do NOT bypass the existing design system.

Architecture Language:
- Preserve existing section ownership.
- Preserve reusable architecture.
- Preserve merchant configurability.
- Do not hardcode demo-specific content.
- Do not create duplicate components unless explicitly approved.

Narrative Language:
- Preserve the chapter's role in the buyer journey.
- Respect previous and next chapter handoffs.
- Maintain the chapter's emotional purpose.
- Do not change section order unless explicitly instructed.

Composition Language:
- Implement the approved desktop and mobile compositions.
- Desktop and mobile are independent editorial compositions.
- Desktop must not become a stretched mobile layout.
- Maintain the intended memory anchor and eye flow.
- Avoid accidental whitespace, equal visual weight, clutter, overlap, and generic card/grid behavior.

Typography Language:
- Use existing typography tokens and editorial classes.
- Do not invent new font families or global type scales.
- Do not hardcode arbitrary typography unless a local override is explicitly required by the approved design.
- Preserve the intended hierarchy from the mockups.

Surface Language:
- Use existing surface tokens.
- Do not introduce new colors, gradients, shadows, borders, or radii.
- Use restraint.
- Avoid card styling unless the approved mockup clearly requires it.

Photography Language:
- Photography carries emotional truth.
- Preserve the intended image owner and crop.
- Do not add decorative overlays or unnecessary frames.
- Respect focal points and premium editorial cropping.

Interaction Language:
- Interactions must clarify behavior.
- Do not add sliders, carousels, hover gimmicks, or extra UI unless explicitly shown in the mockup or blueprint.
- Keep behavior calm and merchant-safe.

Motion Language:
- Do not introduce new motion.
- Use existing motion utilities only when appropriate.
- Respect reduced motion.
- Motion must remain secondary to the chapter's reading experience.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESKTOP IMPLEMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Breakpoint:
≥ 990px

Implement the attached desktop mockup faithfully.

[DESCRIBE EXACT DESKTOP STRUCTURE]

Must confirm:
- Desktop uses horizontal space intentionally.
- Desktop does not behave like a stretched mobile layout.
- Memory anchor is obvious.
- Eye flow matches the mockup.
- Adjacent chapter transitions remain intact.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TABLET IMPLEMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Breakpoint:
750–989px

Implement a clean intermediate layout derived from the approved desktop and mobile mockups.

Do not introduce a third concept.

[DESCRIBE TABLET RULES]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE IMPLEMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Breakpoint:
≤ 749px

Implement the attached mobile mockup faithfully.

[DESCRIBE EXACT MOBILE ORDER]

Must confirm:
- Mobile is intentionally designed.
- No horizontal overflow.
- No accidental hidden content.
- Reading order is natural.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MERCHANT CONFIGURABILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve merchant configurability.

Use existing blocks/settings where possible.

Do not hardcode:
- product names
- testimonials
- customer names
- image URLs
- vertical-specific copy

If new settings are required, add them using existing schema conventions.

Preserve existing fallback layouts when required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Preserve accessibility.

Use semantic structure.

Images must retain alt behavior.

Interactive controls must remain keyboard accessible.

Reduced motion must remain correct.

No hidden inaccessible content.

No focus traps.

Do not regress FAQ, header, cart, sticky ATC, or hero behavior.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCOPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Allowed files:
[LIST ALLOWED FILES]

Avoid editing:
[LIST FILES TO AVOID]

Do NOT touch:
- unrelated homepage chapters
- global design tokens
- architecture documents
- performance work
- accessibility infrastructure
- unrelated CSS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VISUAL ACCEPTANCE CRITERIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Before finishing, compare the implementation against both supplied mockups.

Desktop:
- Does it immediately match the approved desktop mockup?
- Does it use desktop space intentionally?
- Is it clearly not a stretched mobile layout?
- Is the memory anchor obvious?
- Is the eye flow the same?

Mobile:
- Does it immediately match the approved mobile mockup?
- Is the reading order correct?
- Is the layout calm and premium?
- Is there no overflow or accidental overlap?

Cross-device:
- If mobile feels stronger than desktop, identify why and correct desktop before closing.
- Desktop and mobile should feel like the same chapter expressed appropriately for each viewport.

Do not stop at technical correctness.
Stop only when visual fidelity is high.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VALIDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run:

git diff --check

shopify theme check --fail-level error

Playwright homepage sanity:
- 390
- 430
- 768
- 1440

Confirm:
- no broken images
- no horizontal overflow
- no theme-owned console errors
- hero unchanged
- FAQ unchanged
- navigation unchanged
- accessibility invariants unchanged
- merchant configurability preserved

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create:

[REPORT PATH]

Include:
- Executive Summary
- Visual References Used
- Design Language Compliance
- Files Changed
- Desktop Review
- Tablet Review
- Mobile Review
- Merchant Configurability Review
- Accessibility Review
- Validation Results
- Remaining Improvements
- Freeze Recommendation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STOP CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Stop after implementation and validation.

Do NOT commit.
Do NOT push.

Wait for visual review.
```

---

## 6. Common failure patterns to prevent

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
- One implementation sprint.
- One refinement sprint.
- Then freeze or revisit design.

---

## 7. When not to use this prompt

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

## 8. Freeze rule

A chapter is freeze-ready only after:

1. Desktop visual review passes.
2. Mobile visual review passes.
3. One refinement sprint is complete.
4. Merchant configurability is verified.
5. Accessibility is verified.
6. Runtime validation passes.
7. Theme Check has 0 errors.
8. The chapter no longer has obvious visual objections.

Then commit, tag, push, and move on.

---

## 9. CSS Cascade Hygiene Rule

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
