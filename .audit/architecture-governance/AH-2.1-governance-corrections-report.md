# AH-2.1 — Governance Corrections Register Application

**Sprint:** AH-2.1  
**Date:** 2026-07-04  
**Type:** Documentation-only governance corrections  
**Scope:** GC-01 through GC-16 applied to `v1.1` Implementation Architecture Governance documents  
**Implementation files modified:** None (this sprint)

---

## Executive Summary

The approved Governance Corrections Register (GC-01 through GC-16) has been applied to the `v1.1` Implementation Architecture Governance layer.

Most corrections were **already present** from prior AH-2 pre-freeze work (Scope sections, ownership tables, Hero cleanup order, IQR bridge, Playbook/Hygiene role clarifications). This sprint **completed the remaining gaps**: ADR status field alignment, Validation Breakpoints de-duplication, Sprint Standard role clarification, Architecture Cleanup Sequence, Governance Status Definitions formatting, File Mapping intro order, and creation of `docs/README v1.1.md` with corrected Architecture Hygiene Reports row and v1.1 document links.

**No implementation files were modified in this sprint.**

**Freeze Recommendation:** Proceed to **Governance Freeze review**. Remaining `sp-faq.css` references are intentional target-state documentation per GC-04/GC-14. No fictional primary owner filenames remain.

---

## Files Changed

| File | Action | GC items |
|------|--------|----------|
| `docs/architecture/ARCHITECTURAL_DECISIONS v1.1.md` | Modified | GC-03 |
| `docs/architecture/CASCADE-VALIDATION-STANDARD v1.1.md` | Modified | GC-09 |
| `docs/architecture/ARCHITECTURE-CLEANUP-SPRINT-STANDARD v1.1.md` | Modified | GC-07 |
| `docs/architecture/CLEANUP-PLAYBOOK v1.1.md` | Modified | GC-16 |
| `docs/architecture/ARCHITECTURE-HYGIENE-GUIDE v1.1.md` | Modified | GC-06 |
| `docs/architecture/CSS-LAYER-DIAGRAM v1.1.md` | Modified | GC-04 (intro order) |
| `docs/README v1.1.md` | Created | GC-10 |
| `docs/architecture/CSS-OWNERSHIP v1.1.md` | Unchanged | GC-04, GC-05 (already applied) |

**Not edited (per register):** Root `README.md`, non-`v1.1` governance files, all implementation files.

**Note:** The working tree contains pre-existing implementation modifications from earlier sprints (`assets/`, `sections/`, `templates/`). Those were **not touched** during AH-2.1.

---

## GC-01 through GC-16 Completion Table

| ID | Correction | Status | Notes |
|----|------------|--------|-------|
| GC-01 | Hero cleanup order | **Already applied** | `CLEANUP-PLAYBOOK v1.1.md` § Chapter Cleanup Order lists Hero last (items 1–9) |
| GC-02 | Target Architecture Scope section | **Already applied** | Present in `CSS-OWNERSHIP`, `CSS-LAYER-DIAGRAM`, `CLEANUP-PLAYBOOK` v1.1 |
| GC-03 | ADR Decision + Implementation Status | **Applied** | ADR-001, ADR-007, ADR-008 now use `### Decision Status` + `### Implementation Status`; ADR-001 note aligned to register wording |
| GC-04 | Correct CSS ownership tables | **Already applied** / **Minor fix** | Section Ownership table already correct in `CSS-OWNERSHIP v1.1.md`; File Mapping intro order corrected in `CSS-LAYER-DIAGRAM v1.1.md` |
| GC-05 | IQR bridge section | **Already applied** | `# Relationship to Implementation Quality Rules` present in `CSS-OWNERSHIP v1.1.md` |
| GC-06 | Freeze terminology | **Applied** | `# Governance Status Definitions` added to `ARCHITECTURE-HYGIENE-GUIDE v1.1.md`; unstructured footer removed |
| GC-07 | Playbook / Sprint / Hygiene roles | **Applied** / **Already applied** | Sprint Standard `# Relationship to Other Governance` added; Playbook and Hygiene Guide sections already present |
| GC-08 | Remove `responsive.css` | **Already applied** | No `responsive.css` references in any v1.1 governance doc |
| GC-09 | Validation breakpoints source of truth | **Applied** | `# Required Breakpoints` replaced with `# Validation Breakpoints` in `CASCADE-VALIDATION-STANDARD v1.1.md` |
| GC-10 | Architecture Hygiene Reports row | **Applied** | `docs/README v1.1.md` created with required row text |
| GC-11 | Foundation status | **Handled by GC-06** | No duplicate added elsewhere |
| GC-12 | Root README | **Skipped (rejected)** | Root `README.md` not edited per register |
| GC-13 | Human Story owner | **Already applied** | Correct in GC-04 ownership table |
| GC-14 | FAQ owner | **Already applied** | Documented as inline current / future `assets/sp-faq.css` target |
| GC-15 | Hero ownership | **Already applied** | Documented as `section-sp-hero.css` + `sp-supplement-hero.css`; no fictional `sp-hero.css` |
| GC-16 | Architecture Cleanup canonical sequence | **Applied** | `# Architecture Cleanup Sequence` added to `CLEANUP-PLAYBOOK v1.1.md` |

---

## Skipped Items and Why

| Item | Reason |
|------|--------|
| GC-12 | Explicitly rejected in register — root `README.md` not modified |
| GC-01, GC-02, GC-04 (table body), GC-05, GC-08, GC-11, GC-13–GC-15 | Already correctly applied in v1.1 documents before this sprint |

---

## Remaining Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| `docs/README v1.1.md` is new | Low | v1.1 index did not exist; created per allowed-files list. Non-v1.1 `docs/README.md` still links to non-v1.1 architecture paths (GC-12 prevents updating it). |
| `sp-faq.css` references | Informational | Intentional target-state only (GC-04/GC-14); file does not exist in `assets/` |
| Upper governance cross-links | Out of scope | Production Playbook v1.1 and Implementation Quality Rules still do not reference v1.1 architecture docs (not in GC register) |
| ADR index table | Minor | ADR Index still shows `### Status` column header; individual ADR-001/007/008 bodies use `Decision Status` per GC-03 |

---

## Forbidden String Search Results

Search scope: all `*v1.1*` files under `docs/`

| String | Matches | Disposition |
|--------|---------|-------------|
| `sp-hero.css` | Substring only in `section-sp-hero.css`, `sp-supplement-hero.css` | **OK** — not the fictional `assets/sp-hero.css` primary owner |
| `sp-faq.css` | 2 in `CSS-OWNERSHIP v1.1.md` | **OK — target-state** per GC-04/GC-14 (`Future dedicated assets/sp-faq.css`) |
| `sp-cta-offer.css` | 0 | **Clear** |
| `sp-social-proof-stage.css` | 0 | **Clear** |
| `responsive.css` | 0 | **Clear** |

---

## Validation Results

| Check | Result |
|-------|--------|
| Only v1.1 governance docs edited in AH-2.1 | **Pass** — 7 files touched/created; all have `v1.1` suffix or are the v1.1 README |
| No implementation files modified in AH-2.1 | **Pass** — no edits to `sections/`, `assets/`, `templates/`, `snippets/`, or `layout/` in this sprint |
| No older non-v1.1 governance files modified | **Pass** |
| No commit / push | **Pass** |
| Markdown fenced code blocks closed | **Pass** — spot-checked `CLEANUP-PLAYBOOK v1.1.md` Architecture Cleanup Sequence (` ```text ` … ` ``` `); all v1.1 docs have balanced fences |
| `docs/README v1.1.md` links point to v1.1 architecture files | **Pass** |

---

## Freeze Recommendation

**Recommend proceeding to Governance Freeze review.**

The v1.1 Implementation Architecture Governance layer now reflects:

- Correct canonical Supplement homepage ownership (current vs target)
- Hero-last cleanup sequencing
- ADR decision vs implementation status separation
- Breakpoint validation delegated to harness (no hardcoded governance drift)
- Clear Playbook / Sprint Standard / Hygiene Guide role boundaries
- Full AH-1 → AC-11 cleanup sequence

**Pre-freeze follow-ups (outside AH-2.1 scope):**

1. Decide whether `docs/README v1.1.md` replaces or supplements `docs/README.md` at freeze time (GC-12 blocks root README update).
2. Optionally align ADR Index table header to `Decision Status` for consistency with ADR-001/007/008 bodies.

**Stop condition met.** Awaiting governance freeze review. No commit. No push.
