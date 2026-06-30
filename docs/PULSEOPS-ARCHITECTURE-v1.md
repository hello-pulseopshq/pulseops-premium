# PulseOps Architecture v1

| Field | Value |
|-------|-------|
| **Status** | **LOCKED** |
| **Version** | 1.0 |
| **Freeze date** | 2026-06-20 |
| **Reference tag** | `supplement-composition-role-sharpening-v1` |
| **Reference commit** | `48f1d7798c7ef70855c5b6b24337dccc7da6474f` |
| **Governance tag** | `pulseops-architecture-v1` |

**System authority:** Start with [`pulseops-design-system.md`](pulseops-design-system.md) for the PulseOps language stack, ownership hierarchy, and craftsmanship lifecycle.

**Architecture authority:** This document is the highest-level **architecture** reference for the PulseOps platform — homepage information architecture, buyer journey, chapter ownership, composition language, and narrative sequence.

**Visual expression:** [`pulseops-visual-system-v1.md`](pulseops-visual-system-v1.md) governs how the frozen architecture looks and feels within established silhouettes.

**Validation:** [`ARCHITECTURE-FREEZE-REVIEW.md`](ARCHITECTURE-FREEZE-REVIEW.md) (Sprint 7.2.5)

---

## 1. Architecture Principles

PulseOps is built on five platform principles:

### Editorial commerce

Homepages are long-form brand stories that happen to convert — not landing page stacks. Scroll is narrative time. Each chapter is a deliberate editorial beat.

### Buyer journey first

Every chapter removes exactly one buyer objection. If two chapters answer the same question, architecture has failed — regardless of visual quality.

### Composition before decoration

Distinct chapter silhouettes (composition archetypes) must be established before typography, surface, or motion craft. Decoration cannot fix structural or semantic repetition.

### Merchant configurability

Architecture is encoded in section presentation presets and template JSON — not hardcoded demo copy in Liquid. Merchants swap content, imagery, and products within fixed chapter roles.

### Reusable platform architecture

The same ten-chapter logic scales across vertical demo packs (Supplement, Skincare, Coffee, Pet, Outdoor, Electronics, Creator, Lifestyle). Verticals change content — not chapter logic.

---

## 2. Frozen Layers

The following layers are **permanently frozen** at Architecture v1:

| Layer | Status | Reference |
|-------|--------|-----------|
| SP Core Architecture | ✓ Frozen | `sp-core-v1.0` |
| Narrative Architecture | ✓ Frozen | `supplement-narrative-complete-v1` |
| Composition Language | ✓ Frozen | Sprint 7.2 · `sp-composition-system.css` |
| Buyer Journey | ✓ Frozen | Sprint 7.2b |
| Homepage Information Architecture | ✓ Frozen | `templates/index.supplement.json` order |
| Chapter Ownership | ✓ Frozen | Design System language stack + this document §3 |
| Editorial Progression | ✓ Frozen | Hero → Footer sequence |

---

## 3. Homepage Architecture

Final homepage sequence — active render path. Section keys map to Shopify sections; chapter names are platform-semantic roles.

| # | Chapter | Section | Purpose | Buyer objection removed | Composition archetype | Primary visual owner |
|---|---------|---------|---------|---------------------------|----------------------|----------------------|
| 1 | **Hero** | `sp-hero` | Product introduction and primary conversion | Why should I care? | Hero (media-focus) | Product |
| 2 | **Editorial Outcomes** | `sp-editorial-outcomes` | Life-fit and transformation promise | How does this fit into my life? | Split Transformation | Story |
| 3 | **Substance** | `sp-ingredients-spotlight` | Formula transparency and serving clarity | What am I actually taking? | Gallery Immersion | Object |
| 4 | **Community Confidence** | `sp-metrics` | Collective habit and adoption voice | Will people like me actually stick with this? | Typographic Band | Typographic collective voice |
| 5 | **Formulation Philosophy** | `sp-editorial-differentiation` | Brand point of view and differentiation | Why is this approach different from every other supplement? | Linear Manifesto | Words |
| 6 | **Scientific Confidence** | `sp-quality-standards` | Process, QA, and manufacturing trust | Why should I trust the claims? | Evidence Panel | Evidence |
| 7 | **Human Proof** | `sp-social-proof` | Personal identification and felt experience | Can I picture myself succeeding? | Human Stage | Person |
| 8 | **FAQ** | `sp-faq` | Practical objection handling | What is still stopping me? | Utility whisper | Questions |
| 9 | **Future Self** | `sp-cta-offer` | Emotional commitment and finale conversion | What happens if I commit? | Atmospheric Finale | Atmosphere |
| 10 | **Brand Close** | `footer` | Trust continuity and navigation | *(implicit brand trust)* | Whisper | Brand |

**Deprecated (not rendered):** `sp-scientific-proof` — disabled in supplement template; do not re-enable without v2 architecture proposal. Scientific Confidence is owned solely by `sp-quality-standards`.

**Conversion peaks:** Hero and Future Self only. All other chapters use soft links or no CTA.

---

## 4. Composition Language

Official PulseOps composition archetypes. CSS classes live in `assets/sp-composition-system.css`.

| Archetype | CSS class | When used | Primary chapters |
|-----------|-----------|-----------|------------------|
| **Hero** | *(section-native)* | Product-led arrival; one promise; primary CTA | Hero |
| **Split Transformation** | `sp-composition--split-transformation` | Asymmetric split + outcome ledger; life-fit narrative | Editorial Outcomes |
| **Gallery Immersion** | `sp-composition--gallery-immersion` | Intro band + full-bleed tableau + specimen grid | Substance / Ingredients |
| **Typographic Band** | `sp-composition--typographic-band` | Statement + editorial proof moments; no photography owner | Community Confidence |
| **Linear Manifesto** | `sp-composition--linear-manifesto` | Inset image + alternating principle rails; brand POV | Formulation Philosophy |
| **Evidence Panel** | `sp-composition--evidence-panel` | Lab panel + vertical process rail; documentary trust | Scientific Confidence |
| **Human Stage** | *(presentation: `human_story`)* | Portrait-led testimonial stage; one voice | Human Proof |
| **Atmospheric Finale** | *(presentation: `future_self`)* | Cinematic wide frame; minimal copy; earned CTA | Future Self |

**Rule:** Adjacent chapters must not share the same archetype silhouette. Squint-test differentiation is an architecture requirement.

**Density wave:** HIGH (Hero, Substance) → LOW (Community, Human Proof) → MEDIUM (Philosophy, Scientific) → MINIMAL (Future Self) → WHISPER (FAQ, Footer).

---

## 5. Buyer Journey

Canonical objection map — every active chapter, one objection only.

| Chapter | Buyer objection removed |
|---------|-------------------------|
| Hero | Why should I care? |
| Editorial Outcomes | How does this fit into my life? |
| Substance (Ingredients) | What am I actually taking? |
| Community Confidence | Will people like me actually stick with this? |
| Formulation Philosophy | Why is this approach different from every other supplement? |
| Scientific Confidence | Why should I trust the claims? |
| Human Proof | Can I picture myself succeeding? |
| FAQ | What is still stopping me? |
| Future Self | What happens if I commit? |

**Language ownership (no overlap):**

| Language type | Owner chapter |
|---------------|---------------|
| Ingredient names, roles, serving size | Substance |
| Habit adoption, routine consistency | Community Confidence |
| Brand POV, restraint, one-system philosophy | Formulation Philosophy |
| Testing, GMP, purity, third-party, clean label | Scientific Confidence |
| Personal story, portrait, felt experience | Human Proof |

---

## 6. Platform Rules

Future demo packs — **Skincare, Coffee, Pet, Outdoor, Electronics, Creator, Lifestyle** — must reuse this architecture.

### May change (demo layer)

- Copy and headlines
- Photography and video
- Products and collections
- Color accents and color temperature
- Block content within chapters

### May NOT change (without v2 architecture proposal)

- Chapter logic and semantic roles
- Buyer journey / objection map
- Chapter order
- Composition archetype assignment per chapter
- Conversion peak placement (Hero + Future Self)

**Vertical mapping example:** Substance chapter holds ingredients (Supplement), actives/INCI (Skincare), origin/blend (Coffee), specs (Electronics) — same slot, different merchant content.

---

## 7. Amendment Process

Architecture v1 must never be modified silently.

Architecture changes require:

1. **New proposal** — written document describing the change and affected chapters
2. **Written rationale** — why craftsmanship cannot resolve the issue within frozen silhouettes
3. **New review** — multi-viewpoint validation (minimum: Creative Director, Conversion, Platform Architect)
4. **New architecture version** — e.g. PulseOps Architecture v2.0 with incremented tag

**Forbidden without amendment:** adding/removing homepage chapters, reordering sequence, merging chapters, reintroducing proof-carpet patterns, restoring duplicate trust language across middle chapters.

Craftsmanship sprints (typography, surfaces, motion) operate **within** frozen architecture — they do not amend it.

---

## 8. Governance

Architecture is frozen within the PulseOps Design System language stack. Future language work must follow [`pulseops-design-system.md`](pulseops-design-system.md) and may not reopen Architecture without the amendment process above.

---

## Related documents

| Document | Role |
|----------|------|
| [`pulseops-design-system.md`](pulseops-design-system.md) | Constitutional overview and language stack |
| [`pulseops-visual-system-v1.md`](pulseops-visual-system-v1.md) | Creative operating system |
| [`pulseops-design-language-v1.md`](pulseops-design-language-v1.md) | Visual language expression |
| [`chapter-identity.md`](chapter-identity.md) | Chapter narrative definitions |
| [`ARCHITECTURE-FREEZE-REVIEW.md`](ARCHITECTURE-FREEZE-REVIEW.md) | Sprint 7.2.5 validation record |
| [`RELEASES.md`](RELEASES.md) | Tags and milestones |
| [`LAUNCH-CHECKLIST.md`](LAUNCH-CHECKLIST.md) | Launch readiness |

---

*PulseOps Architecture v1.0 — LOCKED. Governs all demo packs and craftsmanship sprints until an explicit v2 amendment.*
