# PulseOps Annotated Mockup Standard

Version: 1.0 (Foundation Draft)

Status: In Review

---

# Purpose

Mockups are the primary source of truth for implementation.

The objective of annotation is to remove ambiguity.

Cursor should implement approved designs rather than interpreting them.

A successful annotated mockup answers implementation questions before implementation begins.

Every annotation should reduce implementation iterations.

---

# Relationship to Governance

Production Constitution

↓

Production Playbook

↓

Annotated Mockup Standard

↓

Cursor Prompt Standard

↓

Implementation

---

# Philosophy

Annotations do not explain design.

Annotations explain implementation intent.

The objective is not documenting every visual element.

The objective is documenting decisions that Cursor could otherwise interpret differently.

Only annotate information that changes implementation behaviour.

---

# General Principles

## Principle 1

Approved mockups are the visual source of truth.

Implementation follows mockups.

Implementation never redesigns mockups.

---

## Principle 2

Annotations remove interpretation.

Cursor should never guess:

- spacing
- alignment
- cropping
- hierarchy
- ownership
- responsive behaviour

---

## Principle 3

Annotate intent rather than pixels.

Poor annotation

"Increase padding."

Good annotation

"Maintain editorial breathing space between image and matrix."

---

## Principle 4

Desktop and mobile are independently annotated.

Desktop annotations never imply mobile behaviour.

Mobile annotations never imply desktop behaviour.

---

# Required Annotation Categories

Every flagship desktop and mobile mockup should contain annotations from the following categories.

---

## 1. Chapter Identity

Identify:

- chapter name
- buyer question
- narrative responsibility
- memory anchor

Example

Buyer Question

"What is inside?"

Memory Anchor

Borderless ingredient flat-lay.

---

## 2. Composition

Identify:

- primary composition
- secondary composition
- reading order
- content ownership

Example

Desktop:

Image owns left.

Editorial matrix owns right.

---

## 3. Photography

Specify:

- image ownership
- crop behaviour
- focal point
- scaling
- desktop behaviour
- mobile behaviour

Never assume automatic image cropping.

---

## 4. Typography

Identify:

- heading role
- body role
- caption role
- editorial labels
- reading hierarchy

Do not annotate font sizes.

Annotate typography intent.

Example

"Uses editorial body rhythm."

Not

"18px."

---

## 5. Surface

Specify:

- background ownership
- boundaries
- cards
- borderless regions
- elevation

Example

"Image is intentionally borderless."

---

## 6. Spacing

Specify relationships rather than measurements.

Example

Good

Image pauses before formulation matrix.

Poor

32px margin.

---

## 7. Memory Anchor

Every chapter must identify:

Primary memory anchor

Secondary supporting elements

Nothing else should compete with the memory anchor.

---

## 8. Responsive Behaviour

Desktop

↓

Tablet

↓

Mobile

Document:

- composition changes
- hierarchy changes
- content movement
- image behaviour

Never rely on responsive inference.

---

## 9. Merchant Behaviour

Identify:

Merchant editable

Merchant optional

Merchant fixed

Architecture owned

Demo only

Cursor should never guess configurability.

---

## 10. Implementation Constraints

Specify:

Cursor must not redesign.

Cursor must preserve:

- architecture
- merchant configurability
- accessibility
- token system

---

# Annotation Language

Use implementation language.

Preferred:

Maintain

Preserve

Align

Owns

Transitions

Moves

Avoid:

Looks nice

Feels premium

Probably

Maybe

Could

---

# Annotation Levels

Level 1

Narrative

Level 2

Composition

Level 3

Hierarchy

Level 4

Implementation

Every annotation should belong to one level.

---

# Ingredients Chapter Learnings

The Ingredients chapter established several mandatory annotation rules.

---

## Rule 1

Document dominant visual ownership.

Flat-lay owns photography.

Matrix supports photography.

---

## Rule 2

Typography annotations describe systems.

Never describe typography using only font size.

Instead describe:

- hierarchy
- rhythm
- editorial relationship

---

## Rule 3

Desktop and mobile receive separate annotations.

Shared annotations are discouraged.

---

## Rule 4

Icons versus photography must be intentional.

Icons support.

Photography owns.

Never use both equally.

---

## Rule 5

Annotate chapter relationships.

Ingredients should visually harmonise with Hero and Editorial Outcomes.

Review should never happen in isolation.

---

## Rule 6

Annotate implementation-sensitive decisions.

Examples:

Borderless image.

Featured ingredient mobile only.

Desktop matrix only.

Freeze Hygiene required.

---

# Deliverables

Every flagship chapter should produce:

Approved Desktop Mockup

Approved Mobile Mockup

Annotated Desktop Mockup

Annotated Mobile Mockup

Blueprint

Cursor Prompt

No implementation begins without these deliverables.

---

# Definition of Complete

An annotated mockup is complete when Cursor can implement it without making design decisions.

If Cursor still needs to ask:

"What should I do here?"

The annotations are incomplete.

---

# Continuous Improvement

Whenever implementation drift occurs:

Determine whether the problem originated from:

- Blueprint
- Mockup
- Annotation
- Prompt
- Implementation

If the cause is annotation quality,

update this standard.

The objective is that every future flagship chapter requires fewer implementation iterations than the previous one.
