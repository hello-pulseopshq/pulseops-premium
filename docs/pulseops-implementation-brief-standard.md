# PulseOps Implementation Brief Standard

Version: 1.1 (GV-7 Refinement)

Status: In Review

---

# Purpose

The **Implementation Brief** is the final execution package consumed by Cursor.

It is not a design document.

It is not governance philosophy.

It is a concise execution sheet generated from:

- Approved Annotated Desktop Mockup (Image)
- Approved Annotated Mobile Mockup (Image)
- Approved Implementation Specification

During normal implementation, Cursor works from the approved Implementation Brief.

The Implementation Specification remains the governing structural reference.

If clarification or escalation is required, the Specification takes precedence.

The Brief is an operational distillation — not a replacement.

One page. Implementation-critical information only.

---

# Relationship to Governance

| Document | Role |
|----------|------|
| Implementation Specification Standard | Full structural contract (governance) |
| **Implementation Brief Standard** | Execution sheet derived from specification |
| Cursor Prompt Standard | Procedural instructions for the sprint |

```text
Annotated Mockups
↓
Composition Notes (optional — flagship editorial)
↓
Implementation Specification (governance — human authors)
↓
Implementation Brief (execution — derived, concise)
↓
Cursor Phase 1 (region-by-region for flagship editorial) / Phase 2
```

The Implementation Specification is the governing structural reference.

The Brief is the operational distillation Cursor works from during normal implementation.

If the Brief and Specification conflict, the Specification takes precedence — regenerate the Brief.

---

# When to Create

Create the Implementation Brief after the Implementation Specification is approved.

Create it before Phase 1 begins.

The Brief is human-authored or human-approved.

Cursor does not author the Brief during implementation.

---

# Required Brief Sections

Keep each section short. Bullet points over paragraphs.

---

## 1. Chapter Identity

- Chapter name
- Buyer question
- Memory anchor
- Section owner file(s)
- Stylesheet owner

---

## 2. Source of Truth

```text
1. Approved Annotated Desktop Mockup (Image)
2. Approved Annotated Mobile Mockup (Image)
3. Approved Desktop Acceptance Screenshot
4. Approved Mobile Acceptance Screenshot
5. This Implementation Brief
```

Acceptance screenshots are the exact comparison targets during Phase 1 review.

They are the approved annotated mockup images designated for side-by-side comparison.

---

## 3. Phase 1 Objective

**Faithfully reproduce the approved desktop and mobile compositions.**

For flagship editorial chapters, Phase 1 is region-based:

```text
Region A → Region Approval → Region B → Region Approval → … → Composition Approval
```

One region per Cursor sprint unless the Brief explicitly scopes otherwise.

---

## 3b. Composition Notes Reference (Optional)

When Composition Notes exist for this chapter, reference the artifact path.

Composition Notes carry qualitative intent:

- visual dominance
- editorial balance
- optical hierarchy
- perceived rhythm
- narrative composition

They supplement annotated mockups. They do not replace measurements in the Implementation Specification.

---

## 4. Region Hierarchy Summary

Paste or summarise the DOM tree from the Implementation Specification.

This is the highest-leverage field in the Brief.

Wrong DOM cannot be fixed with CSS.

---

## 5. Breakpoint Summary

| Breakpoint | Composition |
|------------|-------------|
| Desktop ≥990px | [one-line summary] |
| Tablet 750–989px | [one-line summary] |
| Mobile ≤749px | [one-line summary] |

---

## 6. Merchant Mapping Summary

Phase 2 reference only. List editable vs fixed regions in one table or bullet list.

Phase 1 uses demo placeholders.

---

## 7. Implementation Budget

Declare expected scope before implementation begins.

| Field | Value |
|-------|-------|
| Implementation complexity | Low / Medium / High |
| Expected owner files | [list] |
| Expected new snippets | [list or none] |
| Expected new schema | [yes/no — Phase 2 only] |
| Expected CSS owner | [file] |
| Expected presentation owner | [section/snippet] |

The budget discourages unnecessary implementation expansion.

If implementation exceeds the budget, stop and justify before continuing.

---

## 8. Allowed Files

[List only files Phase 1 or Phase 2 may modify]

---

## 9. Prohibited Files

[List files that must not be touched]

---

## 10. Chapter-Specific Do-Not Rules

Minimum three rules from the Implementation Specification.

---

## 11. Implementation Risks

Capture known implementation risks before Phase 1 begins.

Help Cursor avoid the most likely mistake for this chapter — not formal risk management.

```text
Known implementation risks
• [risk]
• [risk]
• [risk]

Expected failure mode
[what typically goes wrong]

Recommended first response
[narrow refinement, Region Reconstruction, or DOM rebuild]
```

**Platform risk:** If the same visual issue may affect multiple chapters, note it here. Phase 1 must not compensate for platform defects with chapter CSS.

---

## 12. Acceptance Criteria

### Phase 1

- Desktop composition matches Approved Desktop Acceptance Screenshot
- Mobile composition matches Approved Mobile Acceptance Screenshot
- Region hierarchy matches Brief section 4
- Visual Delta Review completed for in-scope region(s)

### Visual Delta Review Format

| Region | Status | Notes |
|--------|--------|-------|
| [e.g. A2] | Matched / Remaining Difference | [explain if difference remains] |

### Phase 2

- Phase 1 composition preserved
- Merchant mapping complete
- Theme Check passes

---

## 13. Screenshot Checklist

Capture and compare at:

- [ ] 1440px — compare to Approved Desktop Acceptance Screenshot
- [ ] 390px — compare to Approved Mobile Acceptance Screenshot

Side-by-side comparison is mandatory before composition approval.

Report Visual Delta Review per region — not PASS/FAIL alone.

---

## 14. Stop Condition

**Phase 1:** Stop after composition build for the scoped region. Do not commit. Wait for region or composition approval.

**Phase 2:** Stop after production hardening. Do not commit. Wait for freeze review.

---

# GV-7 Brief Additions

When authoring Briefs for flagship editorial chapters, include:

1. **Region scope** for each Phase 1 sprint
2. **Composition Notes reference** (when produced)
3. **Visual Delta Review** table in acceptance criteria
4. **Platform risk** flag when typography or shared activation may be involved
5. **Recommended first response** — refinement vs Region Reconstruction vs DOM rebuild

---

# Standard Template

```text
# [CHAPTER NAME] — Implementation Brief

Version: 1.0
Status: Approved for Cursor

## Chapter Identity
[name, buyer question, memory anchor, owner files, stylesheet owner]

## Source of Truth
[mockups, acceptance screenshots, this brief]

## Phase 1 Objective
Faithfully reproduce the approved desktop and mobile compositions.

## Region Hierarchy Summary
[DOM tree]

## Breakpoint Summary
[desktop / tablet / mobile one-liners]

## Merchant Mapping Summary
[Phase 2 reference]

## Implementation Budget
[complexity, owner files, snippets, schema, CSS owner, presentation owner]

## Allowed Files
[list]

## Prohibited Files
[list]

## Chapter-Specific Do-Not Rules
[minimum 3]

## Implementation Risks
[known risks, expected failure mode, recommended first response]

## Acceptance Criteria
[Phase 1 and Phase 2]

## Screenshot Checklist
[1440px, 390px]

## Stop Condition
[phase-specific]
```

---

# Cursor Implementation Package

### Phase 1

1. Approved Annotated Desktop Mockup (Image)
2. Approved Annotated Mobile Mockup (Image)
3. **Approved Implementation Brief**
4. Phase 1 Composition Build Prompt

### Phase 2

1. Approved Implementation Brief (merchant mapping section)
2. Phase 2 Production Hardening Prompt

Annotated mockups remain attached for visual reference.

During normal implementation, Cursor works from the Brief. The full Implementation Specification is the governing reference for clarification or escalation.

---

# Definition of Complete

The Brief is complete when:

1. A reviewer can hand it to Cursor for normal implementation without opening the specification.
2. Region hierarchy summary is explicit.
3. Implementation budget is declared.
4. Implementation risks are documented.
5. Acceptance screenshots are referenced.
6. Allowed and prohibited files are listed.
7. Phase 1 objective is stated in one sentence.

If Cursor needs the specification for routine decisions, the Brief is incomplete.

---

# Anti-Patterns

Never:

- Replace the Implementation Specification with the Brief
- Let Cursor author the Brief
- Attach the full specification to Cursor when a complete Brief exists
- Omit the implementation budget
- Omit acceptance screenshot references
- Omit implementation risks
- Treat the Brief as a replacement for the Implementation Specification
- Expand the Brief into a governance essay
- Omit Visual Delta Review from acceptance criteria

---

# Continuous Improvement

If Cursor still opens multiple documents during implementation, the Brief is missing information.

Add it to the Brief template — do not add another governance document.
