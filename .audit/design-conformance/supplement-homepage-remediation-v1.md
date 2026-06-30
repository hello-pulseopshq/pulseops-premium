# Supplement Homepage Conformance Remediation V1

## Metadata

| Field | Value |
|-------|-------|
| Sprint | Phase VI.2 - Supplement Homepage Conformance Remediation |
| Date | 2026-06-30 |
| Commit before remediation | `9d42a61` |
| Baseline tag | `pulseops-supplement-homepage-audit-v1` |
| Remediation scope | Major findings from `.audit/design-conformance/supplement-homepage-audit.md` |
| Auditor | Cursor Agent |
| Status | Targeted remediation complete; visual verification still required |

This remediation only addresses the Major findings from the Supplement Homepage Design Conformance Audit. It does not redesign the homepage, create new sections, create a new design language, or modify frozen design system documents.

## Files Changed

- `assets/sp-motion.css`
- `assets/sp-testimonial-stage.js`
- `sections/sp-editorial-differentiation.liquid`
- `sections/sp-editorial-outcomes.liquid`
- `sections/sp-faq.liquid`
- `sections/sp-hero.liquid`
- `sections/sp-ingredients-spotlight.liquid`
- `sections/sp-quality-standards.liquid`
- `sections/sp-social-proof.liquid`
- `snippets/sp-cta-offer-future-self.liquid`
- `snippets/sp-motion-class.liquid`
- `snippets/sp-social-proof-human-story.liquid`
- `templates/index.supplement.json`
- `.audit/design-conformance/supplement-homepage-remediation-v1.md`

No frozen design language documents were changed.

## Major Findings Addressed

### 1. Align Homepage Motion With Motion Expression

Status: Addressed.

What changed:

- Added quiet motion helpers in `snippets/sp-motion-class.liquid`:
  - `fade-in-quiet`
  - `hover-button-quiet`
- Added quiet motion handling in `assets/sp-motion.css` so quiet reveals use faster opacity-only movement and quiet buttons do not shift on hover.
- Removed staggered Hero content reveals in `sections/sp-hero.liquid`; the Hero now orients immediately, with only quiet media fade-in.
- Converted Editorial Outcomes, Ingredients, Formulation Philosophy, and Scientific Confidence active paths from generic stagger/fade-up/hover behavior to quieter fade-in or no hover motion.
- Removed FAQ reveal/stagger behavior so the chapter behaves as a functional disclosure system.
- Removed Future Self reveal and hover movement from `snippets/sp-cta-offer-future-self.liquid`.

Remaining risk:

- Some inactive presentation branches still contain legacy motion primitives. These were not changed because they are outside the active Supplement homepage path and broader section refactoring was out of scope.
- Visual verification is still required to confirm temporal feel across viewport sizes.

### 2. Make Scientific Confidence Evidence Verifiable

Status: Addressed.

What changed:

- Updated `templates/index.supplement.json` so Quality Standards uses existing `button_label` and `button_link` settings:
  - `button_label`: `Review formula evidence`
  - `button_link`: `/products/daily-vitality-complex?view=supplement`

Why this resolves the Major finding:

- The chapter no longer makes verification claims without a visible evidence path.
- The fix uses existing section settings and does not add hardcoded demo logic to Liquid.

Remaining risk:

- The linked product/formula page still needs its own conformance and evidence audit.

### 3. Remove Lower-Page High-Priority Image Loading

Status: Addressed.

What changed:

- Changed Scientific Confidence media in `sections/sp-quality-standards.liquid` from eager/high priority to lazy loading.
- Changed Human Proof portrait media in `snippets/sp-social-proof-human-story.liquid` from eager/high priority to lazy loading.
- Changed Future Self media in `snippets/sp-cta-offer-future-self.liquid` from eager/high priority to lazy loading.
- Preserved Hero LCP image priority in `sections/sp-hero.liquid`.

Remaining risk:

- Performance should still be measured with runtime tooling after screenshots or preview access are available.

### 4. Certify Human Proof Carousel Accessibility And Motion

Status: Addressed for code-level conformance; requires runtime verification.

What changed:

- Set the Supplement homepage Human Proof `stage_auto_rotate` setting to `0` in `templates/index.supplement.json`.
- Changed `sections/sp-social-proof.liquid` schema default and minimum for `stage_auto_rotate` to support `0` as an explicit off state.
- Updated `snippets/sp-social-proof-human-story.liquid` so missing or zero auto-rotation settings produce `data-auto-rotate="0"`.
- Updated `assets/sp-testimonial-stage.js` so auto-rotation is opt-in:
  - It only starts when `data-auto-rotate` is greater than `0`.
  - Manual dot, drag, and arrow-key navigation remain available.
  - `prefers-reduced-motion` remains respected.
  - Live-region announcements now support the Human Proof quote selector.

Remaining risk:

- Keyboard focus, arrow-key behavior, dot state, and screen reader announcement should be verified in browser.

### 5. Substantiate Community Confidence Proof

Status: Addressed.

What changed:

- Reframed Metrics / Trust Proof in `templates/index.supplement.json` from unsupported community proof to product-routine confidence:
  - Eyebrow changed from `Community confidence` to `Routine confidence`.
  - Heading changed from `People like you made it a morning habit.` to `A morning routine designed to be repeatable.`
  - Subheading now avoids popularity or social proof claims.

Why this resolves the Major finding:

- The chapter no longer implies unverifiable social adoption.
- Existing metric blocks now support honest routine framing: one ritual, daily cadence, two capsules.

Remaining risk:

- Visual review should confirm the chapter still plays the intended narrative role without overclaiming.

### 6. Re-Audit After Fixes

Status: Completed in this report.

New estimated conformance score: `88%`.

New certification recommendation: `Conditionally certified`.

Rationale:

- Critical findings remain at `0`.
- The five implementation Major findings from the audit have been addressed at code/settings level.
- The page still requires visual verification for motion feel, focus behavior, image crops, contrast, and runtime commerce flows.
- Remaining known issues are Minor/Polish or runtime-verification items from the original audit.

## Remaining Findings

No known Critical findings remain.

No known code-backed Major findings remain from the Phase VI.1 audit.

Remaining items:

- Visual verification pass is still required before full Certified status.
- Product/formula evidence destination should be audited separately.
- Header, footer, cart drawer, and inactive section presentation branches still need future component-level certification.
- Original Minor findings, such as FAQ duplicate guarantee content and global component certification, remain outside this targeted sprint.

## Validation Results

- `git diff --check`: passed.
- IDE diagnostics for edited files: passed; no linter errors found.
- Theme Check standard run: inspected 251 files and reported 10 warnings across 9 files, then hit the known Windows assertion failure. No errors were reported before the assertion.
- Theme Check JSON fallback: passed with `0` errors and the same existing warning baseline in unrelated files.
- `npm test`: failed because the repository script is a placeholder: `Error: no test specified`.
- Lower-page high-priority media search: passed; no `loading: 'eager'` or `fetchpriority: 'high'` remains in `sections/sp-quality-standards.liquid`, `snippets/sp-social-proof-human-story.liquid`, or `snippets/sp-cta-offer-future-self.liquid`.
- Testimonial auto-rotation search: passed; Human Proof now stores `stage_auto_rotate: 0`, schema default is `0`, and JavaScript only starts rotation when `data-auto-rotate` is greater than `0`.
- Added hardcoded Liquid demo URL check: passed; no new `/products/`, `daily-vitality-complex`, or `view=supplement` URL was added to Liquid diff.
- Frozen docs check: passed; no files under `docs/` changed and the original audit artifact was not modified.
- Non-ASCII scan for this remediation report: passed.

## Visual Verification Required

Yes.

Required visual/runtime checks:

- Full Supplement homepage desktop and mobile.
- Hero first viewport timing and LCP behavior.
- Motion pacing across Outcomes, Ingredients, Formulation Philosophy, Scientific Confidence, Human Proof, FAQ, and Future Self.
- Human Proof keyboard navigation, dot state, drag behavior, and aria-live announcement.
- Quality Standards CTA visibility and destination.
- Metrics / Routine Confidence narrative tone.
- Scientific Confidence, Human Proof, and Future Self image loading behavior in performance tooling.
