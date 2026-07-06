# PulseOps CSS Layer Diagram

**Version:** 1.0

**Status:** Foundation

---

## Scope

Unless explicitly stated otherwise, the ownership rules in this document describe the target implementation architecture of PulseOps.

Current implementation may temporarily differ while Architecture Cleanup Sprints are in progress.

Architecture Cleanup exists to progressively align the implementation with these governance rules.

---

# Purpose

The CSS Layer Diagram defines the implementation architecture of the PulseOps Premium Theme Platform.

It explains:

- how CSS responsibilities are divided
- where every visual responsibility belongs
- which layers own behaviour
- which layers merely consume behaviour
- which override paths are allowed
- which override paths are forbidden

This document is the implementation architecture reference.

It complements the CSS Ownership Matrix.

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

CSS Layer Diagram

↓

Implementation
```

---

# Philosophy

Implementation should resemble the governance hierarchy.

Higher layers define.

Lower layers express.

Ownership always flows downward.

---

# Complete Layer Stack

```
┌──────────────────────────────┐
│ Production Governance        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Design Tokens                │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Design Languages             │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Composition System           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Editorial System             │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Section CSS                  │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Vertical Expression          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Responsive Overrides         │
└──────────────────────────────┘
```

---

# Layer 1

## Design Tokens

Purpose

Provide primitive design values.

Examples

- colour
- spacing
- radius
- typography scale
- opacity
- shadow
- motion duration
- z-index

### Owns

Primitive values only.

### Never Owns

Layout.

Components.

Sections.

Merchant expression.

---

# Layer 2

## Design Languages

Purpose

Translate tokens into design systems.

Examples

Typography

Surface

Photography

Interaction

Motion

### Owns

Design philosophy.

Reusable visual systems.

### Never Owns

Sections.

Chapter presentation.

Merchant branding.

---

# Layer 3

## Composition System

Purpose

Provide reusable composition archetypes.

Examples

Hero

Gallery

Manifesto

Evidence

Atmospheric Finale

### Owns

Layout grammar.

Spatial hierarchy.

Reading rhythm.

### Never Owns

Typography styling.

Colours.

Photography.

Merchant branding.

---

# Layer 4

## Editorial System

Purpose

Provide reusable editorial primitives.

Examples

Eyebrows.

Editorial labels.

Shared reading structures.

Narrative utilities.

### Owns

Editorial building blocks.

### Never Owns

Chapter presentation.

Section spacing.

Responsive fixes.

Demo styling.

---

# Layer 5

## Section CSS

Purpose

Implement one chapter.

Examples

Hero.

Community Confidence.

Ingredients.

Human Story.

### Owns

Everything unique to that chapter.

Examples

Layout.

Spacing.

Alignment.

Local responsive behaviour.

Local interactions.

### Never Owns

Global typography.

Global surfaces.

Composition.

Shared utilities.

---

# Layer 6

## Vertical Expression

Purpose

Express one vertical.

Examples

Supplement

Coffee

Skincare

Outdoor

Electronics

### Owns

Photography treatment.

Accent colours.

Editorial tone.

### Never Owns

Layout.

Composition.

Spacing systems.

Typography hierarchy.

---

# Layer 7

## Responsive Overrides

Purpose

Adapt implementation to viewport.

### Owns

Desktop.

Tablet.

Mobile differences.

### Never Owns

Narrative.

Architecture.

Composition philosophy.

Typography hierarchy.

---

# Ownership Flow

Responsibilities always move downward.

```
Tokens

↓

Languages

↓

Composition

↓

Editorial

↓

Section

↓

Vertical

↓

Responsive
```

Never upward.

---

# Consumption Flow

Layers consume previous layers.

Example

```
Section CSS

↓

Uses Typography

↓

Uses Surface

↓

Uses Composition

↓

Uses Tokens
```

Consumption is encouraged.

Ownership is not transferred.

---

# Allowed Override Paths

## Tokens

↓

Design Languages

---

## Design Languages

↓

Section CSS

---

## Composition

↓

Section CSS

---

## Section CSS

↓

Vertical Expression

---

## Section CSS

↓

Responsive Overrides

---

# Forbidden Override Paths

Editorial System

↓

Section Presentation

✗

---

Vertical CSS

↓

Composition

✗

---

Responsive

↓

Narrative

✗

---

Responsive

↓

Typography hierarchy

✗

---

Utilities

↓

Section ownership

✗

---

# Example

Community Confidence

```
Tokens

↓

Typography

↓

Composition

↓

sp-community-confidence.css

↓

Supplement expression

↓

Mobile refinement
```

**Generic metrics** (`sp-metrics`) follow the same cascade through `sp-metrics.css` — not Community Confidence.

Not

```
Editorial System

↓

Supplement

↓

Metrics

↓

Responsive

↓

Editorial

↓

Metrics
```

---

# Dependency Rules

Every dependency should point downward.

Allowed

```
Section CSS

↓

Composition
```

Forbidden

```
Composition

↓

Specific section
```

Higher layers must remain reusable.

---

# Layer Responsibilities

| Layer | Owns | Never Owns |
|---------|------|------------|
| Tokens | Primitive values | Layout |
| Languages | Visual systems | Sections |
| Composition | Layout grammar | Typography styling |
| Editorial | Editorial primitives | Chapter presentation |
| Section | Chapter implementation | Global systems |
| Vertical | Brand expression | Architecture |
| Responsive | Viewport adaptation | Narrative |

---

# File Mapping

Typical implementation layers:

This table reflects the canonical Supplement homepage as implemented today and the target ownership model that Architecture Cleanup Sprints should move toward.

| Layer | Current files |
|---|---|
| Tokens | `snippets/sp-root-tokens.liquid` |
| Design Languages | `assets/sp-typography-language.css`, `assets/sp-surface-language.css`, `assets/sp-motion.css`, `assets/sp-image-experience.css` |
| Composition | `assets/sp-composition-system.css` |
| Editorial | `assets/sp-editorial-system.css` |
| Section CSS | `assets/section-sp-hero.css`, `assets/sp-editorial-outcomes.css`, `assets/sp-ingredients-spotlight.css`, `assets/sp-community-confidence.css`, `assets/sp-metrics.css`, `assets/sp-editorial-differentiation.css`, `assets/sp-quality-standards.css`, `assets/sp-social-proof-human-story-editorial-portrait.css`, `assets/sp-cta-offer-future-self.css` |
| Inline section CSS requiring migration | `sections/sp-faq.liquid` |
| Vertical Expression | `assets/sp-supplement.css`, `assets/sp-supplement-hero.css`, `assets/sp-supplement-type.css` |
| Responsive | Section-local media queries inside the owning section CSS file |

---

# Layer Validation

Every implementation review should ask:

Does this responsibility belong here?

Could this responsibility move lower?

Could this responsibility move higher?

Does another layer already own it?

If ownership is uncertain,

implementation stops.

---

# Layer Anti-Patterns

Never allow:

Editorial becoming a section owner.

Supplement becoming a composition owner.

Responsive becoming a layout owner.

Utilities becoming architecture.

Demo CSS becoming production architecture.

---

# Healthy Architecture

A healthy implementation has:

One owner.

Many consumers.

No ownership ambiguity.

Minimal overrides.

Predictable rendering.

---

# Architecture Smells

Warning signs include:

Multiple files defining the same property.

Repeated media queries.

Repeated spacing declarations.

Repeated typography declarations.

Section styling inside shared systems.

Shared systems knowing chapter details.

High specificity.

Growing !important usage.

---

# Future Evolution

New implementation layers should be extremely rare.

If a new layer is proposed, document:

Why existing layers cannot own it.

How ownership changes.

How governance changes.

How migration will occur.

---

# Definition of Done

The CSS architecture is considered healthy when:

Every visual responsibility has one owner.

Every file belongs to one layer.

Override paths are intentional.

Dependencies always flow downward.

Removing one section cannot affect another.

A contributor can identify ownership within one minute.

The browser renders predictably across all supported breakpoints.
