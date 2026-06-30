# Design Conformance QA

**Phase:** VI - Premium QA
**Status:** Documentation only
**Scope:** Design conformance review for PulseOps pages, sections, components, and vertical packs
**System authority:** [`pulseops-design-system.md`](pulseops-design-system.md)

---

## Purpose

Design Conformance QA verifies that PulseOps experiences conform to the frozen languages of the PulseOps Design System.

The goal is repeatable certification, not subjective polish. A page, section, component, or vertical pack can be visually attractive and still fail if it violates the frozen language hierarchy.

PulseOps is a governed commerce design operating system. Commercial readiness depends on repeatable conformance to that system, not isolated moments of quality.

---

## 1. Scope

Design Conformance QA applies to:

- Full pages
- Homepage chapters
- Theme sections
- Reusable components
- Vertical demo packs
- Merchant-facing configuration experiences
- Documentation-backed design decisions

Design Conformance QA reviews conformance against:

```
Architecture
  ->
Narrative
  ->
Composition
  ->
Typography
  ->
Surface
  ->
Photography
  ->
Interaction
  ->
Motion
```

The review may identify deviations, request evidence, and recommend remediation. It does not create new design languages.

---

## 2. What This QA Is And Is Not

### Design Conformance QA Is

- A governance review against frozen languages.
- A repeatable audit method for premium QA.
- A certification process for pages, sections, components, and vertical packs.
- A way to identify deviations before launch.
- A shared evidence standard for design, engineering, merchant experience, and QA.

### Design Conformance QA Is Not

- A redesign sprint.
- A creative exploration.
- A performance audit.
- An accessibility implementation plan.
- A theme build process.
- A place to create new design languages.
- A substitute for remediation work.

QA identifies deviations. Implementation fixes happen in later remediation sprints.

---

## 3. Relationship To The PulseOps Design System

The PulseOps Design System is the constitutional authority for this QA framework.

Design Conformance QA does not reinterpret the Design System. It checks whether work conforms to it.

When a deviation is found, the review should identify which frozen language was violated and what evidence supports that finding. The reviewer should not rewrite the language, invent an exception, or create new governance during QA.

If a conflict appears between local quality and system conformance, system conformance wins.

---

## 4. Review Hierarchy

Review always follows the frozen language hierarchy:

1. Architecture
2. Narrative
3. Composition
4. Typography
5. Surface
6. Photography
7. Interaction
8. Motion

Later languages may express earlier languages. They may not redefine them.

Review order matters. Do not approve a strong Typography or Photography moment if it violates Architecture, Narrative, or Composition. Do not approve Motion if it compensates for unclear Interaction.

---

## 5. Audit Methodology

Every Design Conformance QA audit follows the same method:

1. Define the audit object.
2. Identify the governing documents.
3. Capture evidence.
4. Review in hierarchy order.
5. Record deviations.
6. Assign severity.
7. Score conformance.
8. Determine certification status.
9. List remediation recommendations.
10. Confirm whether the acceptance threshold is met.

The reviewer should use the least subjective evidence available. If a finding is based on judgment, it must still cite the frozen language or governing principle that supports it.

---

## 6. Evidence Requirements

Every audit must include evidence.

Acceptable evidence includes:

- Screenshot references.
- Page or section names.
- Component names.
- Vertical pack names.
- Relevant settings or content states.
- Links to governing documents.
- Short notes describing the observed deviation.
- Before/after references when reviewing regression.

Evidence should be specific enough that another reviewer can reproduce the finding or understand why the certification decision was made.

Do not record a deviation without evidence.

---

## 7. Scoring Model

Each audit object receives a score from 0 to 3 for each review category.

| Score | Meaning | Definition |
|-------|---------|------------|
| 3 | Conforms | Matches the frozen language with no meaningful deviation. |
| 2 | Minor deviation | Small issue that does not weaken system integrity. |
| 1 | Major deviation | Meaningful language conflict or degraded premium quality. |
| 0 | Fails | Violates the language hierarchy or blocks certification. |

Scores should be assigned after evidence is collected, not before.

The score is a decision aid. Certification is determined by thresholds and severity, not by average alone.

---

## 8. Severity Levels

| Severity | Meaning | Typical Outcome |
|----------|---------|-----------------|
| Critical | Violates hierarchy, creates a false language, or blocks core comprehension. | Certification blocked. |
| High | Weakens a frozen language or creates visible system drift. | Certification blocked until remediated. |
| Medium | Noticeable deviation that affects quality but does not break system logic. | Conditional certification possible. |
| Low | Minor inconsistency or documentation follow-up. | Certification may pass with notes. |

Severity should be tied to the highest frozen language affected. A small-looking issue may be high severity if it violates Architecture or Narrative.

---

## 9. Certification Thresholds

Certification uses both score and severity.

| Certification | Requirement |
|---------------|-------------|
| Certified | No Critical or High deviations, no category below 2, and overall conformance at or above 90%. |
| Conditional | No Critical deviations, High deviations absent or explicitly deferred, and overall conformance at or above 80%. |
| Not Certified | Any unresolved Critical deviation, unresolved High deviation, or overall conformance below 80%. |

The acceptance threshold for launch readiness is Certified unless the product owner explicitly accepts Conditional status for a limited scope.

Commercial readiness depends on repeatable conformance, not isolated polish.

---

## 10. Page-Level Audit Format

Use page-level audits for homepage, product page, landing page, or full vertical experiences.

Required fields:

- Page name.
- URL or preview reference.
- Vertical.
- Audit date.
- Reviewer.
- Governing documents.
- Evidence set.
- Language scores.
- Deviations.
- Certification status.
- Remediation recommendations.

Review categories:

| Category | Question |
|----------|----------|
| Architecture | Does the page preserve structure, chapter order, and role logic? |
| Narrative | Does the page advance one clear buyer journey? |
| Composition | Does the page preserve spatial hierarchy and chapter silhouettes? |
| Typography | Does voice, measure, and hierarchy support the chapter roles? |
| Surface | Does material expression support the story without drift? |
| Photography | Does imagery provide visual truth and chapter-appropriate evidence? |
| Interaction | Does behavior reduce uncertainty without redefining structure? |
| Motion | Does movement communicate governed change without creating behavior? |

---

## 11. Section-Level Audit Format

Use section-level audits for individual homepage chapters or theme sections.

Required fields:

- Section name.
- Chapter role.
- Vertical.
- Screenshot reference.
- Governing language owner.
- Primary deviation check.
- Supporting language checks.
- Evidence.
- Severity.
- Certification status.

A section passes only when it serves its assigned chapter role. A visually attractive section fails if it behaves like the wrong chapter, uses the wrong visual owner, or competes with a higher language.

---

## 12. Component-Level Audit Format

Use component-level audits for reusable UI pieces, content blocks, cards, controls, media frames, and commerce elements.

Required fields:

- Component name.
- Parent page or section.
- Intended role.
- Governing language.
- Evidence.
- Deviation notes.
- Severity.
- Certification status.

Component review must confirm that the component supports the page or section role. A component should not introduce a new visual language, behavior pattern, surface style, or motion character outside the frozen hierarchy.

---

## 13. Merchant-Experience Audit Format

Use merchant-experience audits for configuration, presets, demo content, and merchant-facing documentation.

Required fields:

- Merchant task or configuration area.
- Expected merchant outcome.
- Governed options.
- Evidence.
- Risk to language conformance.
- Deviation notes.
- Certification status.

Merchant experience should make governed choices easier. It should not invite merchants to break chapter roles, override hierarchy, or create unsupported language combinations.

---

## 14. Accessibility And Performance Review Hooks

Design Conformance QA includes review hooks for accessibility and performance, but it does not implement either.

Accessibility hook:

- Identify where a design decision may affect comprehension, navigation, reading, or interaction access.
- Record the concern as evidence.
- Route implementation details to the appropriate accessibility remediation work.

Performance hook:

- Identify where a design decision may create delivery risk, asset weight, or interaction delay.
- Record the concern as evidence.
- Route implementation details to the appropriate performance remediation work.

These hooks prevent premium quality from being approved in isolation. They do not replace dedicated accessibility or performance review.

---

## 15. Regression Review Process

Regression review confirms that a change has not weakened conformance.

Process:

1. Identify the baseline.
2. Identify the changed object.
3. Compare against the frozen language hierarchy.
4. Capture evidence before and after the change.
5. Record any new deviation.
6. Assign severity.
7. Confirm certification status.

A regression can be visual, structural, narrative, behavioral, or temporal. The reviewer should classify the deviation by the frozen language it affects.

---

## 16. Freeze And Pass Criteria

An audit object may pass only when:

- It meets the acceptance threshold.
- It has no unresolved Critical or High deviations.
- Evidence is complete.
- Deviations are documented.
- Remediation recommendations are clear.
- The review does not require a new design language.

A freeze decision requires:

- Certified status.
- No unresolved hierarchy conflicts.
- No undocumented exceptions.
- No implementation work hidden inside QA.
- Clear traceability to frozen languages.

No new design language may be created during QA.

---

## 17. Example Audit Template: Supplement Homepage

### Audit Header

- Audit object: Supplement homepage.
- Vertical: Supplement.
- Page type: Homepage.
- Reviewer:
- Audit date:
- Preview reference:
- Governing documents:
  - [`pulseops-design-system.md`](pulseops-design-system.md)
  - [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md)
  - [`chapter-identity.md`](chapter-identity.md)
  - [`TYPOGRAPHY-LANGUAGE-FOUNDATION.md`](TYPOGRAPHY-LANGUAGE-FOUNDATION.md)
  - [`SURFACE-LANGUAGE-FOUNDATION.md`](SURFACE-LANGUAGE-FOUNDATION.md)
  - [`photography-language.md`](photography-language.md)
  - [`photography-expression.md`](photography-expression.md)
  - [`photography-systems.md`](photography-systems.md)
  - [`interaction-language.md`](interaction-language.md)
  - [`interaction-expression.md`](interaction-expression.md)
  - [`interaction-systems.md`](interaction-systems.md)
  - [`motion-language.md`](motion-language.md)
  - [`motion-expression.md`](motion-expression.md)

### Page-Level Scores

| Language | Score | Evidence | Deviation |
|----------|-------|----------|-----------|
| Architecture |  |  |  |
| Narrative |  |  |  |
| Composition |  |  |  |
| Typography |  |  |  |
| Surface |  |  |  |
| Photography |  |  |  |
| Interaction |  |  |  |
| Motion |  |  |  |

### Section Checks

| Chapter | Expected Role | Score | Severity | Evidence | Notes |
|---------|---------------|-------|----------|----------|-------|
| Hero | Product introduction and first orientation |  |  |  |  |
| Editorial Outcomes | Life-fit and relevance |  |  |  |  |
| Ingredients | Substance and inspection |  |  |  |  |
| Community Confidence | Social validation |  |  |  |  |
| Formulation Philosophy | Brand point of view |  |  |  |  |
| Scientific Confidence | Verification and standards |  |  |  |  |
| Human Proof | Identification and reassurance |  |  |  |  |
| FAQ | Practical resolution |  |  |  |  |
| Future Self | Commitment and reflection |  |  |  |  |
| Footer | Continuation and closure |  |  |  |  |

### Deviations

| ID | Language | Severity | Evidence | Required Remediation |
|----|----------|----------|----------|----------------------|
|  |  |  |  |  |

### Certification

- Overall conformance:
- Highest severity:
- Certification status:
- Acceptance threshold met:
- Reviewer notes:

---

## Definition Of Done

Design Conformance QA is complete when reviewers can evaluate any PulseOps page, section, component, merchant experience, or vertical pack against the frozen languages using repeatable evidence, severity, scoring, and certification.

The framework should make deviations visible before remediation begins.
