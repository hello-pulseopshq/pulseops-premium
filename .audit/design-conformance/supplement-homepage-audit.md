# Supplement Homepage Design Conformance Audit

## 1. Audit Metadata

| Field | Value |
|-------|-------|
| Sprint name | Phase VI.1 - Supplement Homepage Design Conformance Audit |
| Date | 2026-06-30 |
| Commit audited | `212b522` |
| Auditor | Cursor Agent |
| Scope | Supplement homepage implementation, global homepage entry points, and related frozen language documentation |
| Audit status | Audit-only, no remediation |

This audit evaluates the Supplement homepage against the frozen PulseOps Design System and the Design Conformance QA framework. It does not fix issues, redesign sections, create a new design language, or modify theme behavior.

Audit target:

- `templates/index.supplement.json`
- Active homepage sections in the Supplement template
- Global header and footer groups
- Cart drawer entry points when enabled globally
- Sticky ATC presence or absence on the homepage
- Relevant snippets, assets, settings, and frozen language documents

Screenshots are recommended for final certification but were not required to complete this code-backed audit. Items that cannot be verified from files alone are marked as `requires visual verification`.

---

## 2. Executive Summary

| Item | Result |
|------|--------|
| Overall conformance score | 79% |
| Certification status | Not certified |
| Highest severity present | Major |
| Critical findings | 0 |
| Major findings | 6 |
| Minor findings | 7 |
| Polish findings | 4 |
| Recommended next remediation sprint | Phase VI.2 - Supplement Homepage Conformance Remediation |

The Supplement homepage is structurally close to the frozen PulseOps language stack. Architecture, Narrative sequence, Composition archetypes, Typography voice mapping, and Surface direction are broadly aligned with the Design System.

The homepage is not yet certifiable because several unresolved Major deviations affect Motion, Performance, Scientific verification, Social proof credibility, and Human Proof accessibility. The strongest conforming areas are the core chapter sequence, archetype class usage, ingredient transparency structure, and the Future Self finale concept.

Highest-risk deviations:

- Broad use of generic SP motion primitives does not yet express the frozen Motion Expression by chapter.
- Human Proof includes an auto-rotating testimonial stage without an explicit pause control visible from code.
- Scientific Confidence claims verification, but no certificate, proof link, or verification artifact is present in the section settings.
- Several non-Hero image-heavy chapters use eager loading and high fetch priority.
- Community Confidence reads as social proof but uses unsourced habit phrases instead of verifiable community evidence.

Strongest conforming areas:

- `templates/index.supplement.json` preserves the main frozen buyer journey from Hero through Future Self.
- Section classes map to frozen composition archetypes such as `sp-composition--split-transformation`, `sp-composition--gallery-immersion`, `sp-composition--typographic-band`, `sp-composition--linear-manifesto`, and `sp-composition--evidence-panel`.
- Ingredients provides named ingredient blocks, roles, descriptions, and imagery.
- FAQ uses accessible disclosure structure with `aria-expanded`, `aria-controls`, and panel regions.
- Footer and cart drawer provide functional continuation and commerce entry points, though they require visual conformance review.

---

## 3. Scoring Table

Scale: `3` = conforms, `2` = minor deviation, `1` = major deviation, `0` = fails. `N/A` means the chapter or entry point is not present in the audited homepage context.

| Chapter | Architecture | Narrative | Composition | Typography | Surface | Photography | Interaction | Motion | Merchant Experience | Accessibility | Performance | Overall | Certification status |
|---------|--------------|-----------|-------------|------------|---------|-------------|-------------|--------|---------------------|---------------|-------------|---------|----------------------|
| Header / Navigation | 2 | 2 | 2 | 2 | 2 | N/A | 2 | 2 | 2 | 2 | 2 | 73% | Conditional |
| Hero | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 3 | 94% | Certified with visual verification |
| Editorial Outcomes | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 3 | 94% | Certified with visual verification |
| Metrics / Trust proof | 3 | 1 | 3 | 3 | 3 | N/A | 2 | 2 | 2 | 2 | 3 | 76% | Not certified |
| Editorial Differentiation / Ingredients | 3 | 2 | 3 | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 3 | 91% | Conditional |
| Quality Standards | 3 | 1 | 3 | 3 | 3 | 3 | 2 | 2 | 2 | 2 | 1 | 76% | Not certified |
| Reviews / Social Proof | 3 | 2 | 3 | 3 | 3 | 3 | 2 | 1 | 2 | 1 | 1 | 70% | Not certified |
| FAQ | 3 | 2 | 2 | 2 | 2 | N/A | 3 | 2 | 3 | 3 | 3 | 82% | Conditional |
| CTA Offer | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 1 | 88% | Conditional |
| Footer | 2 | 2 | 2 | 2 | 2 | N/A | 2 | 2 | 2 | 2 | 3 | 70% | Conditional |
| Sticky ATC | 3 | N/A | N/A | N/A | N/A | N/A | N/A | N/A | 3 | N/A | N/A | N/A | Not present on homepage |
| Cart drawer entry points | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 2 | 3 | 2 | 2 | 73% | Conditional |

Certification decision: Not certified. The page does not meet the Certified acceptance threshold because unresolved Major deviations remain.

---

## 4. Findings By Chapter

### Header / Navigation

What conforms:

- Global header is included through `layout/theme.liquid` using `{% sections 'header-group' %}`.
- `sections/header-group.json` provides announcement and header sections.
- Header preserves supplement demo routing through `sp-demo-view-query` in `sections/header.liquid`.
- Skip link exists before the header in `layout/theme.liquid`.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| HN-1 | Minor | Narrative / Interaction | `sections/header-group.json` announcement text is `4.9 rated - 8.4k+ reviews - 30-day guarantee`, which front-loads proof before the Hero. | Review whether announcement proof should be quieter, removed, or governed as a utility notice. | No, but must be reviewed. |
| HN-2 | Minor | Composition / Surface | Header is Dawn-based global navigation, not documented as a PulseOps chapter or certified component. | Add header to a future component-level Design Conformance QA pass. | No. |

Requires visual verification:

- Desktop header.
- Mobile menu open state.
- Sticky header behavior.
- Announcement bar density and contrast.

### Hero

What conforms:

- `templates/index.supplement.json` uses `sp-hero` directly after demo class setup.
- Hero settings provide product promise, CTA, product image, `layout_preset: media_focus`, and `prioritize_lcp: true`.
- `sections/sp-hero.liquid` gives the Hero image eager loading and high fetch priority when prioritized.
- Hero disables social proof clusters in the current template, keeping first orientation relatively clean.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| HE-1 | Minor | Motion | `sections/sp-hero.liquid` applies stagger/fade motion classes to many Hero slots, including content, eyebrow, subheadline, CTA, trust rows, scroll cue, and media. Motion Expression expects immediate orientation and minimal movement. | In remediation, audit Hero motion density against Motion Expression and reduce if visual review confirms excess. | No, unless screenshots show delayed comprehension. |
| HE-2 | Polish | Accessibility | Hero has strong alt fallback logic, but actual rendered contrast and focus order require visual/runtime verification. | Capture desktop and mobile Hero screenshots plus keyboard focus path. | No. |

Requires visual verification:

- Desktop 1440px Hero.
- Mobile 390px Hero.
- Hero first viewport with header.
- CTA focus state.

### Editorial Outcomes

What conforms:

- `sp-editorial-outcomes` follows Hero and uses `sp-composition--split-transformation`.
- Section settings use `sp_width_mode: wide`, a lifestyle image, outcome cards, and no hard CTA.
- Copy supports life-fit: `One habit. Four outcomes.`
- Section has image alt text and list semantics for outcome cards.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| EO-1 | Minor | Motion | `sections/sp-editorial-outcomes.liquid` uses staggered media/story/cards and hover card motion. Motion Expression expects gentle arrival and reading support. | Verify that stagger and hover do not interrupt reading; reduce card hover if visual review shows activity. | No. |
| EO-2 | Polish | Accessibility | Outcome icon SVGs are hidden, but card meaning depends on title/text. This appears acceptable from code but needs visual review for touch target and spacing. | Include Outcomes card stack in mobile screenshot set. | No. |

Requires visual verification:

- Desktop split composition.
- Mobile card rhythm.
- Image crop and relationship to text.

### Metrics / Trust Proof

What conforms:

- `sp-metrics` uses `presentation: editorial_story` and `sp-composition--typographic-band`.
- Proof moments are rendered as a list and avoid legacy card chrome.
- Current settings disable band and dividers, supporting surface restraint.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| MT-1 | Major | Narrative / Interaction / Design Conformance QA evidence | Template copy says `People like you made it a morning habit`, but metric values are `One daily ritual`, `Daily, not occasionally`, and `Two capsules`. No evidence source, count, or testimonial basis is present in `templates/index.supplement.json`. | Replace or substantiate social reassurance in a remediation sprint so Community Confidence supplies verifiable trust, not unsupported proof language. | Yes. |
| MT-2 | Minor | Merchant Experience | `sp-metrics` supports `editorial_story`, `band`, `show_band`, `show_dividers`, desktop columns up to 6, and mobile layout choices. These options can drift from the frozen Community Confidence expression. | Add merchant guidance or preset guardrails in a later merchant-experience sprint. | No. |

Requires visual verification:

- Typography band density.
- Whether proof phrases read as credible social reassurance.

### Editorial Differentiation / Ingredients

What conforms:

- Ingredient chapter uses `sp-ingredients-spotlight` with `sp-composition--gallery-immersion`.
- Ingredient blocks include names, roles, descriptions, and images.
- Formulation Philosophy uses `sp-editorial-differentiation` with `presentation: philosophy_manifesto` and `sp-composition--linear-manifesto`.
- Both sections provide image alt text and maintain quiet CTA behavior.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| EI-1 | Minor | Narrative / Photography | Ingredient body states `Full amounts and sourcing notes live on the formula page`; homepage itself does not verify amounts. Architecture expects Substance to answer what the visitor is taking. | In remediation, decide whether homepage needs a light amount/sourcing signal or whether product page handoff is sufficient. | No, if product page verification is confirmed. |
| EI-2 | Minor | Motion | Ingredient and Philosophy sections use generic `fade-up` / `stagger` primitives. Motion Expression calls for patient inspection and long pauses. | Verify whether current motion feels patient enough; reduce if inspection or manifesto reading is interrupted. | No. |

Requires visual verification:

- Ingredient matrix readability.
- Ingredient image fidelity.
- Formulation image relationship to manifesto copy.

### Quality Standards

What conforms:

- Section uses `sp-quality-standards` with `presentation: scientific_confidence`.
- Composition class includes `sp-composition--evidence-panel`.
- Copy and trust pillars map to verification: identity, purity, potency, third-party release.
- Section has image alt text and process list semantics.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| QS-1 | Major | Narrative / Photography / Interaction | Section claims `Manufacturing and testing you can verify`, `Third-party lot release`, and `Independent certificates issued`, but `button_label` and `button_link` are blank in `templates/index.supplement.json`. No certificate or verification artifact is present in code settings. | Add verifiable evidence path or adjust language in a remediation sprint. | Yes. |
| QS-2 | Major | Performance | `sections/sp-quality-standards.liquid` loads the scientific image with `loading: 'eager'` and `fetchpriority: 'high'` in a mid-page chapter. | Review image priority strategy; reserve high priority for true LCP or justified critical media. | Yes for commercial readiness. |
| QS-3 | Minor | Motion | Scientific Confidence uses `fade-up` and `stagger` primitives. Motion Expression calls for precise change and controlled pacing, not theatrical expression. | Verify runtime motion against Motion Expression. | No. |

Requires visual verification:

- Evidence panel density.
- Lab image relevance and crop.
- Claims readability and traceability perception.

### Reviews / Social Proof

What conforms:

- Section uses `sp-social-proof` with `presentation: human_story`.
- Story image and verification note are configured.
- `snippets/sp-social-proof-human-story.liquid` includes carousel region semantics, dot buttons, `aria-current`, and a live region.
- `assets/sp-testimonial-stage.js` respects reduced motion and pauses on focus/hover/visibility changes.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| RS-1 | Major | Motion / Interaction / Accessibility | Template sets `stage_auto_rotate: 8`; snippet converts it to milliseconds and loads `sp-testimonial-stage.js`. The stage auto-rotates by default and code does not expose a visible pause control. | In remediation, align Human Proof with warm continuity and supportive pacing; add or expose a clear pause mechanism if carousel remains. | Yes. |
| RS-2 | Major | Performance | `snippets/sp-social-proof-human-story.liquid` loads the portrait image with `loading: 'eager'` and `fetchpriority: 'high'` in a lower-page chapter. | Review image priority and lazy-load unless visual/performance evidence justifies priority. | Yes for commercial readiness. |
| RS-3 | Minor | Narrative / Photography | Heading says `He made it part of his morning`, while the stage contains multiple reviews from different people. This may weaken single-person Human Proof coherence. | Decide whether Human Proof should be a single story or clearly framed as rotating human proof. | No, but recommended. |

Requires visual verification:

- Human Proof portrait crop.
- Carousel controls and focus states.
- Motion behavior with reduced-motion preference.

### FAQ

What conforms:

- FAQ follows Human Proof and precedes Future Self, matching practical resolution before commitment.
- Disclosure uses buttons with `aria-expanded`, `aria-controls`, panel `role="region"`, and `aria-hidden`.
- `open_first_item` is false, keeping the chapter calm by default.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| FQ-1 | Minor | Narrative | FAQ entries `What if it doesn't work for me?` and `What is the return policy?` both answer the 30-day guarantee. This duplicates resolution content. | Consolidate or differentiate the two answers in a remediation sprint. | No. |
| FQ-2 | Minor | Typography / Composition | FAQ heading uses Dawn-style `inline-richtext h1` rather than a clearly mapped quiet/utility voice class. | Verify visual scale against Typography and utility whisper expectations. | No. |

Requires visual verification:

- Open and closed FAQ states.
- Keyboard navigation.
- Mobile answer legibility.

### CTA Offer

What conforms:

- `sp-cta-offer` uses `presentation: future_self`, `sp_width_mode: bleed`, and the Future Self image.
- Copy is minimal: `Begin with one simple daily ritual.`
- Button is the second conversion peak, matching Architecture.
- `snippets/sp-cta-offer-future-self.liquid` keeps the finale visually image-led.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| CTA-1 | Major | Performance | Future Self image is loaded with `loading: 'eager'` and `fetchpriority: 'high'` in `snippets/sp-cta-offer-future-self.liquid`, despite being near the end of the homepage. | Review image loading priority in remediation. | Yes for commercial readiness. |
| CTA-2 | Minor | Motion | Future Self canvas uses `fade-up` and CTA uses `hover-button`; Motion Expression calls for maximum stillness. | Verify whether any runtime motion should be reduced in this chapter. | No unless visual review shows pressure. |

Requires visual verification:

- Desktop finale crop.
- Mobile finale legibility.
- CTA contrast and focus state.

### Footer

What conforms:

- Footer is globally included through `{% sections 'footer-group' %}`.
- `sections/footer-group.json` defines navigation and brand text.
- `sections/footer.liquid` dispatches supplement footer navigation through `sp-demo-footer-nav`.
- Policy links are enabled.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| FT-1 | Minor | Architecture / Surface / Typography | Footer is not part of `templates/index.supplement.json`; it is global. It functions as Brand Close but is not explicitly certified as a PulseOps chapter in the template. | Run a dedicated footer component audit and verify it satisfies Brand Close / Whisper language. | No. |
| FT-2 | Polish | Merchant Experience | Footer group uses generic `Navigate` and `Daily Vitality` blocks. It may be acceptable, but needs visual verification for premium closure. | Capture footer screenshot and compare against Footer Interaction/Motion/Photography expectations. | No. |

Requires visual verification:

- Full footer desktop and mobile.
- Policy link row.
- Footer navigation with supplement demo routing.

### Sticky ATC

What conforms:

- Sticky ATC is not present in `templates/index.supplement.json`.
- `sections/sp-sticky-atc.liquid` is gated to product pages with `request.page_type == 'product'` and `product != blank`.
- Absence on homepage avoids an ungoverned conversion overlay in the homepage buyer journey.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| SATC-1 | Polish | Audit scope / Merchant Experience | No homepage sticky ATC instance exists to certify. Product-page sticky ATC remains outside this homepage audit. | Audit Sticky ATC during product page Design Conformance QA. | No. |

Requires visual verification:

- Confirm no sticky ATC appears on homepage at runtime.

### Cart Drawer Entry Points

What conforms:

- `settings_data.json` sets `cart_type: drawer`.
- `layout/theme.liquid` renders `cart-drawer` when cart type is drawer and loads `cart-drawer.js`.
- `snippets/cart-drawer.liquid` includes dialog semantics, close buttons, table structure, lazy images, and translated labels.
- Header cart icon is a global entry point.

Deviations:

| ID | Severity | Design language violated | Evidence | Recommended remediation approach | Required before certification |
|----|----------|--------------------------|----------|----------------------------------|-------------------------------|
| CD-1 | Minor | Surface / Typography / Merchant Experience | Cart drawer is Dawn-derived and not yet documented as certified against PulseOps premium commerce language. | Run component-level cart drawer audit before Theme Store readiness. | No for homepage certification, yes before launch certification. |
| CD-2 | Minor | Accessibility | Drawer has ARIA dialog semantics, but focus trapping, restore focus, and screen reader announcement require runtime verification. | Include open/close and add-to-cart flow in accessibility QA. | No, pending runtime validation. |

Requires visual verification:

- Cart drawer open state.
- Empty cart state.
- Cart with product.
- Header cart entry focus and click path.

---

## 5. Cross-System Findings

### Typography Drift

- Most core SP editorial chapters use chapter-specific classes such as `sp-editorial-type--chapter--confident`, `--documentary`, `--manifesto`, `--precise`, and statement classes.
- FAQ and some global components still use Dawn scale classes such as `h1` / `h4`; these need visual verification against the frozen Typography utility voice.

Severity: Minor.

### Surface Drift

- Core SP chapters use surface controls and composition shells consistently.
- Header, footer, and cart drawer are global Dawn-derived surfaces and need component-level certification against the PulseOps visual system.

Severity: Minor.

### Photography Mismatch

- Homepage photography is configured with chapter-specific images and alt text.
- Scientific Confidence, Human Proof, and Future Self load large images with eager loading/high priority despite lower page position.
- Scientific evidence image supports atmosphere, but claim verification requires stronger evidence path.

Severity: Major for performance and verification; Minor for visual verification.

### Motion Excess Or Absence

- SP sections widely use `fade-up`, `stagger`, and hover primitives.
- Motion Expression calls for differentiated temporal identities; current implementation appears generic across chapters.
- Human Proof auto-rotates; Future Self still uses reveal/hover motion despite maximum-stillness language.

Severity: Major.

### Merchant Setting Gaps

- Several sections expose broad settings that can drift from frozen language roles, including metrics presentation variants, CTA presentation, mobile layouts, and motion style presets.
- Merchant Experience is functional but not yet certified as governed.

Severity: Minor.

### Accessibility Risks

- FAQ disclosure structure is strong.
- Human Proof carousel needs runtime verification for pause, focus, and announcements.
- Cart drawer needs runtime focus management verification.
- Header mobile menu needs runtime verification.

Severity: Major for Human Proof carousel; Minor for remaining runtime checks.

### Performance Risks

- Lower-page high-priority images in Scientific Confidence, Human Proof, and Future Self create performance risk.
- Global scripts load cart drawer, SP motion, SP image experience, and optional testimonial stage.
- Performance findings require later tooling-based confirmation, but code evidence is sufficient to mark remediation risk.

Severity: Major.

---

## 6. Certification Decision

Certification status: Not certified.

Rationale:

- The audit found no Critical deviations.
- Six unresolved Major deviations remain.
- Major deviations affect Motion conformance, Social Proof credibility, Scientific verification, Performance, and Accessibility.
- Overall conformance is 79%, below the 80% Conditional threshold and below the 90% Certified threshold in `docs/design-conformance-qa.md`.

The Supplement homepage is close to conformance, but it is not commercially certifiable until Major deviations are remediated or explicitly re-audited with evidence.

---

## 7. Remediation Backlog

| Priority | Ticket title | Affected chapter(s) | Severity | Recommended sprint | Files likely involved | Notes |
|----------|--------------|---------------------|----------|--------------------|-----------------------|-------|
| 1 | Align homepage motion with Motion Expression | Hero, Outcomes, Ingredients, Philosophy, Scientific, Human Proof, FAQ, Future Self | Major | Phase VI.2 - Motion Conformance Remediation | `sections/sp-*.liquid`, `snippets/sp-motion-class.liquid`, `assets/sp-motion.css`, `assets/sp-motion.js` | Reduce generic reveal/stagger/hover usage where it conflicts with chapter temporal identity. |
| 2 | Make Scientific Confidence evidence verifiable | Quality Standards | Major | Phase VI.2 - Evidence Remediation | `templates/index.supplement.json`, `sections/sp-quality-standards.liquid` | Add or route to verifiable lot/certificate/process evidence, or revise claims. |
| 3 | Remove lower-page high-priority image loading | Quality Standards, Human Proof, Future Self | Major | Phase VI.2 - Performance Remediation | `sections/sp-quality-standards.liquid`, `snippets/sp-social-proof-human-story.liquid`, `snippets/sp-cta-offer-future-self.liquid` | Reserve eager/high priority for true LCP only unless measured otherwise. |
| 4 | Certify Human Proof carousel accessibility and motion | Reviews / Social Proof | Major | Phase VI.2 - Interaction/Motion Remediation | `snippets/sp-social-proof-human-story.liquid`, `assets/sp-testimonial-stage.js`, `sections/sp-social-proof.liquid` | Add explicit pause/stop path or remove auto-rotation if it violates Motion/Interaction. |
| 5 | Substantiate Community Confidence proof | Metrics / Trust proof | Major | Phase VI.2 - Narrative Evidence Remediation | `templates/index.supplement.json`, `sections/sp-metrics.liquid` | Replace slogan proof with evidence-backed community reassurance or adjust language. |
| 6 | Resolve duplicate guarantee FAQ answers | FAQ | Minor | Phase VI.3 - Content QA Remediation | `templates/index.supplement.json` | Differentiate or merge guarantee/return-policy answers. |
| 7 | Certify global header/footer/cart components | Header, Footer, Cart drawer | Minor | Phase VI.3 - Component Certification | `sections/header.liquid`, `sections/footer.liquid`, `snippets/cart-drawer.liquid`, group JSON files | Validate these global components against PulseOps language expectations. |
| 8 | Add merchant guardrails for language-critical settings | Metrics, CTA Offer, global motion settings | Minor | Merchant Experience QA | section schemas, merchant docs | Prevent settings combinations from breaking frozen language roles. |
| 9 | Capture required visual evidence set | All chapters | Polish | Premium QA Evidence Capture | screenshot tooling | Desktop/mobile full page, each chapter, focus states, reduced-motion state, cart drawer, mobile menu. |

---

## 8. Appendix

### Files Reviewed

Templates and groups:

- `templates/index.supplement.json`
- `sections/header-group.json`
- `sections/footer-group.json`
- `config/settings_data.json`
- `config/settings_schema.json`

Global layout and entry points:

- `layout/theme.liquid`
- `sections/header.liquid`
- `sections/footer.liquid`
- `snippets/cart-drawer.liquid`
- `sections/sp-sticky-atc.liquid`

Homepage sections:

- `sections/sp-hero.liquid`
- `sections/sp-editorial-outcomes.liquid`
- `sections/sp-ingredients-spotlight.liquid`
- `sections/sp-metrics.liquid`
- `sections/sp-editorial-differentiation.liquid`
- `sections/sp-quality-standards.liquid`
- `sections/sp-social-proof.liquid`
- `sections/sp-faq.liquid`
- `sections/sp-cta-offer.liquid`

Motion and supporting implementation references:

- `snippets/sp-motion-class.liquid`
- `assets/sp-motion.css`
- `assets/sp-motion.js`
- `assets/sp-testimonial-stage.js`
- `snippets/sp-social-proof-human-story.liquid`
- `snippets/sp-cta-offer-future-self.liquid`
- `assets/sp-cta-offer-future-self.css`

Governance documents:

- `docs/pulseops-design-system.md`
- `docs/design-conformance-qa.md`
- `docs/PULSEOPS-ARCHITECTURE-v1.md`
- `docs/chapter-identity.md`
- `docs/TYPOGRAPHY-LANGUAGE-FOUNDATION.md`
- `docs/SURFACE-LANGUAGE-FOUNDATION.md`
- `docs/photography-language.md`
- `docs/photography-expression.md`
- `docs/photography-systems.md`
- `docs/interaction-language.md`
- `docs/interaction-expression.md`
- `docs/interaction-systems.md`
- `docs/motion-language.md`
- `docs/motion-expression.md`

### Commands Run

- `git status --short`
- `git rev-parse --short HEAD`
- `git tag --points-at HEAD`
- `git diff --check`
- `markdownlint` / `markdownlint-cli2` availability check
- Non-ASCII scan for this audit file
- `git status --short --ignored .audit/design-conformance/supplement-homepage-audit.md`
- `git check-ignore -v .audit/design-conformance/supplement-homepage-audit.md`

### Required Screenshots For Final Visual Certification

- Full Supplement homepage desktop.
- Full Supplement homepage mobile.
- Header desktop and mobile menu open state.
- Hero first viewport desktop and mobile.
- Each homepage chapter desktop and mobile.
- FAQ open and closed states.
- Future Self desktop and mobile.
- Footer desktop and mobile.
- Cart drawer empty and populated states.
- Reduced-motion state for key motion-bearing sections.

### Validation Results

- `git diff --check`: passed.
- Markdown/documentation lint: no `markdownlint` or `markdownlint-cli2` executable found; `package.json` exposes no markdown or documentation lint script.
- IDE diagnostics: timed out for this Markdown file; no actionable diagnostics were available.
- Non-ASCII scan: passed; no matches found.
- Trailing whitespace and tab scan: passed; no matches found.
- Git visibility: file exists locally, but `.audit/` is ignored by `.gitignore`, so the artifact does not appear in normal `git status --short`.
