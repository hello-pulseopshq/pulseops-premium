# CSS Ownership Matrix

**Version:** 1.0  
**Status:** Foundation

---

## Scope

Unless explicitly stated otherwise, the ownership rules in this document describe the target implementation architecture of PulseOps.

Current implementation may temporarily differ while Architecture Cleanup Sprints are in progress.

Architecture Cleanup exists to progressively align the implementation with these governance rules.

---

# Purpose

The PulseOps CSS Ownership Matrix defines ownership of visual responsibilities across the implementation architecture.

Its purpose is to ensure that every visual responsibility has exactly one owner.

Clear ownership reduces:

- cascade conflicts
- duplicate declarations
- override chains
- architectural drift
- implementation ambiguity
- refinement iterations

This document governs implementation ownership.

It does not define design.

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
Design Languages
        ↓
CSS Ownership Matrix
        ↓
Implementation
```

If implementation conflicts with this document, implementation must adapt.

---

# Philosophy

Every visual responsibility should have one owner.

Not two.

Not three.

One.

If multiple files define the same visual responsibility, the implementation architecture has become ambiguous.

Ambiguity creates:

- cascade fights
- debugging difficulty
- visual drift
- implementation uncertainty

Ownership is more valuable than convenience.

---

# Primary Rule

Every visual responsibility must have exactly one architectural owner.

Other layers may consume that responsibility.

They may never redefine it.

---

# Ownership Hierarchy

Visual ownership flows downward.

```
Design Tokens
        ↓
Design Languages
        ↓
Composition System
        ↓
Editorial System
        ↓
Section CSS
        ↓
Vertical Overrides
        ↓
Responsive Overrides
```

Every lower layer inherits.

Lower layers should not redefine higher layers unless explicitly allowed.

---

# Relationship to Implementation Quality Rules

The CSS Ownership Matrix defines **architectural ownership**.

The Implementation Quality Rules define **breakpoint ownership**.

These are two different ownership dimensions and both are required.

Architectural ownership answers:

> Which layer or file owns this visual responsibility?

Breakpoint ownership answers:

> How does the owning file express that responsibility across desktop, tablet, and mobile?

These models do not conflict.

They operate together.

Example:

```text
Architectural ownership

Section CSS owns Community Confidence spacing.

Breakpoint ownership

sp-community-confidence.css defines the desktop, tablet, and mobile spacing values.
```

The breakpoint model never changes architectural ownership.

A tablet or mobile override does not create a new owner.

It only expresses the same owner for a different viewport.

## Combined Ownership Model

```text
Architecture owner
        ↓
Base value
        ↓
Desktop value
        ↓
Tablet value
        ↓
Mobile value
```

Example:

```text
Owner

assets/sp-community-confidence.css
        ↓
Base
        ↓
Desktop media query
        ↓
Tablet media query
        ↓
Mobile media query
```

**Generic metrics (non–Community Confidence):** `assets/sp-metrics.css` owns the reusable SP Metrics section only.

## Rule

Responsive overrides should remain inside the file that owns the responsibility, unless a documented architectural exception exists.

Do not create a separate ownership layer by placing responsive fixes in:

- Vertical CSS
- Editorial System CSS
- Composition System CSS
- Unrelated section CSS

If a responsive value belongs to Community Confidence, it belongs in `assets/sp-community-confidence.css`.

If a responsive value belongs to generic metrics (`sp-metrics`), it belongs in `assets/sp-metrics.css`.

If a responsive value belongs to Ingredients, it belongs in `assets/sp-ingredients-spotlight.css`.

If a responsive value belongs to FAQ, the target owner is `assets/sp-faq.css`.

## Validation

Every CSS change must document both:

| Question | Answer |
|---|---|
| Architectural owner | Which file or layer owns the responsibility? |
| Breakpoint owner | Where are desktop, tablet, and mobile values defined? |

A change is valid only when both answers point to the same ownership path.

## Anti-pattern

```text
Base spacing
        ↓
Section CSS
        ↓
Tablet fix
        ↓
sp-editorial-system.css
        ↓
Mobile fix
        ↓
sp-supplement.css
```

This creates three owners.

## Correct Pattern

```text
Base spacing
        ↓
Section CSS
        ↓
Tablet fix
        ↓
Same section CSS
        ↓
Mobile fix
        ↓
Same section CSS
```

Implementation Quality Rules remain the authority for breakpoint validation.

The CSS Ownership Matrix remains the authority for architectural ownership.

Both must pass before an Architecture Cleanup Sprint can be considered complete.

---

# Layer Responsibilities

## Layer 1 — Design Tokens

### Owns

- Color tokens
- Typography tokens
- Spacing tokens
- Radius tokens
- Shadow tokens
- Opacity tokens
- Motion tokens
- Z-index tokens
- Sizing tokens

### Must Never Own

- Layout
- Composition
- Sections
- Chapter styling
- Merchant branding

---

## Layer 2 — Design Languages

### Owns

- Typography language
- Surface language
- Photography helpers
- Interaction primitives
- Motion primitives

### Must Never Own

- Section layouts
- Chapter-specific styling
- Merchant-specific styling
- Demo-specific presentation

---

## Layer 3 — Composition System

### Owns

- Composition archetypes
- Layout grammar
- Alignment systems
- Spatial hierarchy
- Reading flow
- Responsive composition

### Must Never Own

- Typography styling
- Colors
- Surface styling
- Photography
- Merchant branding

---

## Layer 4 — Editorial System

### Owns

- Editorial utilities
- Narrative rhythm
- Shared editorial primitives
- Editorial labels
- Shared chapter structures

### Must Never Own

- Chapter layouts
- Chapter styling
- Composition overrides
- Typography hierarchy
- Surface styling
- Demo appearance

---

## Layer 5 — Section CSS

### Owns

Everything unique to an individual section.

Examples:

- Hero
- Editorial Outcomes
- Ingredients
- Community Confidence
- Formulation Philosophy
- Scientific Confidence
- Human Story
- FAQ
- Future Self

Section CSS may define:

- Local layout
- Local spacing
- Local alignment
- Local interactions
- Local responsive behaviour

### Must Never Redefine

- Typography language
- Surface language
- Composition system
- Editorial utilities
- Global tokens

---

## Layer 6 — Vertical Overrides

### Owns

Only vertical expression.

Examples:

- Supplement
- Skincare
- Coffee
- Electronics
- Outdoor

May adjust:

- Color accents
- Photography treatment
- Editorial tone

### Must Never Own

- Layout
- Composition
- Typography hierarchy
- Section structure
- Merchant architecture

---

## Layer 7 — Responsive Overrides

### Owns

Only viewport-specific behaviour.

Desktop

↓

Tablet

↓

Mobile

### Must Never Redefine

- Chapter identity
- Narrative
- Composition philosophy
- Typography hierarchy
- Merchant behaviour

---

# Ownership Rules

## Rule 1

One visual responsibility.

One owner.

---

## Rule 2

Never duplicate ownership.

### Bad

Section CSS defines spacing.

Editorial CSS defines spacing.

Supplement CSS defines spacing.

### Good

Section CSS owns spacing.

Other files consume that spacing.

---

## Rule 3

Higher layers define.

Lower layers adapt.

Never invert ownership.

---

## Rule 4

Responsive CSS changes only what differs.

Never repeat identical declarations.

---

## Rule 5

Vertical CSS expresses.

It does not redesign.

---

## Rule 6

Utilities remain generic.

If a utility becomes chapter-specific, it belongs in the section.

---

# Allowed Override Paths

### Allowed

```
Design Tokens
        ↓
Section CSS
```

### Allowed

```
Composition System
        ↓
Responsive Overrides
```

### Allowed

```
Section CSS
        ↓
Vertical Expression
```

---

# Forbidden Override Paths

The following architectural relationships are prohibited.

- Composition overriding Typography
- Editorial overriding Sections
- Vertical Overrides redefining Composition
- Responsive Overrides redefining Editorial
- Utilities redefining Section behaviour
- Demo CSS becoming the primary visual owner

---

# Section Ownership

Every canonical Supplement homepage chapter must have one target presentation owner.

During Architecture Cleanup, this table distinguishes between the current implementation and the target architecture.

This table reflects the canonical Supplement homepage as implemented today and the target ownership model that Architecture Cleanup Sprints should move toward.

| Chapter | Liquid section | Current CSS owner(s) | Target owner | Status |
|---|---|---|---|---|
| Hero | `sections/sp-hero.liquid` | `assets/section-sp-hero.css` + `assets/sp-supplement-hero.css` | Section CSS owns hero presentation; vertical CSS expresses supplement hero only | Migration required |
| Editorial Outcomes | `sections/sp-editorial-outcomes.liquid` | `assets/sp-editorial-outcomes.css` + composition/editorial secondary rules | `assets/sp-editorial-outcomes.css` | Partial |
| Ingredients | `sections/sp-ingredients-spotlight.liquid` | `assets/sp-ingredients-spotlight.css` + editorial shadow rules | `assets/sp-ingredients-spotlight.css` | Partial |
| Community Confidence | `sections/sp-community-confidence.liquid` | `assets/sp-community-confidence.css` | `assets/sp-community-confidence.css` | Complete |
| Generic metrics | `sections/sp-metrics.liquid` | `assets/sp-metrics.css` | `assets/sp-metrics.css` | Complete |
| Formulation Philosophy | `sections/sp-editorial-differentiation.liquid` | `assets/sp-editorial-differentiation.css` + composition/editorial secondary rules | `assets/sp-editorial-differentiation.css` | Partial |
| Scientific Confidence | `sections/sp-quality-standards.liquid` | `assets/sp-quality-standards.css` + composition/editorial secondary rules | `assets/sp-quality-standards.css` | Partial |
| Human Story | `sections/sp-social-proof.liquid` | `assets/sp-social-proof-human-story.css` + `assets/sp-social-proof-human-story-editorial-portrait.css` + inline shared CSS | `assets/sp-social-proof-human-story-editorial-portrait.css` as canonical portrait owner | Migration required |
| FAQ | `sections/sp-faq.liquid` | Inline CSS inside section Liquid + editorial/supplement secondary rules | Future dedicated `assets/sp-faq.css` | Migration required |
| Future Self | `sections/sp-cta-offer.liquid` | `assets/sp-cta-offer-future-self.css` + editorial/typography secondary rules | `assets/sp-cta-offer-future-self.css` | Migration required |

---

# Code Review Checklist

Every CSS review should answer:

1. Which file owns this responsibility?
2. Is another file already owning it?
3. Is this override intentional?
4. Could this responsibility move higher?
5. Could this responsibility move lower?
6. Does this introduce duplicate ownership?

If ownership is unclear, the review fails.

---

# Hygiene Checklist

Before Freeze verify:

- No duplicate ownership
- No dead ownership
- No conflicting ownership
- No unnecessary override chains
- No obsolete refinement CSS
- No duplicate media-query ownership
- No unrelated section styling
- Every override has documented intent

---

# Future Evolution

This document defines implementation ownership.

It evolves only when the implementation architecture evolves.

Design changes do not modify ownership.

Architecture changes may.

---

# Definition of Done

The implementation architecture is considered healthy when:

- Every visual responsibility has one owner.
- Every CSS file has a documented purpose.
- Shared systems remain shared.
- Section CSS remains local.
- Vertical CSS expresses rather than controls.
- Responsive layers change only viewport-specific behaviour.
- Cascade conflicts are intentional and documented.
- Removing one section cannot unexpectedly affect another.
- A new contributor can identify the owner of any visual responsibility in under one minute.
