# Release History

Concise checkpoints for PulseOps SP Core and demo presets.

## SP Core v1.0

| Field | Value |
|-------|-------|
| **Tag** | `sp-core-v1.0` |
| **Commit** | `912e196` |
| **Date** | 2026-06-15 |
| **Branch** | `main` |

**Summary:** Launch-ready storefront polish freeze. Default `index.json` and `product.json` wired with Liquid Collection demo brand. Shell polish (header, footer, collection, cart notification). SP Core sections, hierarchy, motion, image, and spacing architecture frozen.

**Includes:** SP Hero through Sticky ATC, trust ecosystem, `sp-storefront-polish.css`, onboarding copy removed from default templates.

---

## Demo Presets v1

| Field | Value |
|-------|-------|
| **Tag** | `demo-presets-v1-release` |
| **Commit** | `7109c52` |
| **Date** | 2026-06-16 |
| **Branch** | `demo-presets-v1` |

**Summary:** Ten vertical demo templates (20 JSON files) built on frozen SP Core. Presets 1–5 (supplement, skincare, creator, electronics, lifestyle) use neutral visual treatment — no mismatched product photography. Presets 6–10 are copy-complete secondary presets.

**Includes:** `scripts/demo-presets-config.mjs`, generator/validator, `assets/sp-demo-presets.css`, [DEMO_PRESETS.md](./DEMO_PRESETS.md).

---

## Supplement Demo Hero v1 (frozen)

| Field | Value |
|-------|-------|
| **Tag** | `supplement-hero-frozen-v1` |
| **Commit** | `5d939af` |
| **Date** | 2026-06-20 |
| **Branch** | `main` |

**Summary:** Supplement Demo hero freeze — merchant-safe, Theme Check clean (0 errors), audit complete. Hero CSS isolated in `assets/sp-demo-supplement-hero.css`; Liquid/snippets generic and settings-driven.

**Policy:**

> **SUPPLEMENT HERO: FROZEN**
>
> No visual or architectural changes unless:
> - bug
> - accessibility issue
> - merchant configurability issue

**Includes:** `assets/sp-demo-supplement-hero.css`, hero snippets, `sections/sp-hero.liquid` supplement load path, `.audit/hero-freeze-audit-report.md` (local audit artifact).

---

## Supplement Editorial v2 (Future Self)

| Field | Value |
|-------|-------|
| **Tag** | `supplement-editorial-v2` |
| **Commit** | (see tag) |
| **Date** | 2026-06-20 |
| **Branch** | `main` |

**Summary:** Future Self cinematic CTA finale for supplement homepage — `presentation: future_self`, clean asset, 16:9 desktop frame, zero top gap, no transactional foot line. Editorial art direction doc and canonical QA theme `#183028121915` established.

**Includes:** `assets/sp-cta-offer-future-self.css`, `snippets/sp-cta-offer-future-self.liquid`, `sections/sp-cta-offer.liquid`, `templates/index.supplement.json`, `assets/sp-editorial-system.css`, `docs/editorial-art-direction.md`, `docs/CANONICAL-QA-THEME.md`.

---

---

## Architecture Freeze v1

| Field | Value |
|-------|-------|
| **Tag** | `pulseops-architecture-v1` |
| **Commit** | (see tag) |
| **Date** | 2026-06-20 |
| **Branch** | `main` |

**Summary:** Official PulseOps Architecture v1 freeze. Homepage information architecture, buyer journey, chapter ownership, composition language, and narrative sequence are **LOCKED** for all demo packs and craftsmanship sprints.

**Policy:**

> **PULSEOPS ARCHITECTURE v1: LOCKED**
>
> No chapter reorder, new sections, buyer journey changes, or composition archetype changes unless:
> - documented v2 architecture proposal
> - written rationale
> - multi-viewpoint review
> - new architecture version tag

**Major achievements:**

- SP Core Architecture frozen (`sp-core-v1.0`)
- Supplement narrative architecture frozen (`supplement-narrative-complete-v1`)
- Composition Language — five middle archetypes + distinct Hero/Human/Finale grammars (Sprint 7.2)
- Buyer Journey Role Sharpening — unique objection per chapter (Sprint 7.2b)
- Architecture Freeze Validation — five-viewpoint approval (Sprint 7.2.5)

**Includes:** [`PULSEOPS-ARCHITECTURE-v1.md`](./PULSEOPS-ARCHITECTURE-v1.md), [`ARCHITECTURE-FREEZE-REVIEW.md`](./ARCHITECTURE-FREEZE-REVIEW.md), synced `chapter-identity.md`, `LAUNCH-CHECKLIST.md`, `RELEASES.md`.

**Reference implementation commit:** `48f1d7798c7ef70855c5b6b24337dccc7da6474f` · tag `supplement-composition-role-sharpening-v1`

---

## Phase III Complete — Architecture, Narrative, Composition, Buyer Journey, and Hygiene Locked

| Field | Value |
|-------|-------|
| **Tag** | `pulseops-phase-iii-complete` |
| **Commit** | `8e6dd84f8e1b25c81939b0be56c97431ed778a32` |
| **Date** | 2026-06-20 |
| **Branch** | `main` |

**Summary:** Formal close of Phase III (Foundation). All architectural and narrative layers locked; Phase III.5 codebase hygiene audit complete with safe template and documentation cleanup. **Next phase: Phase IV — Craftsmanship.**

**Locked layers:**

| Layer | Tag / reference |
|-------|-------------------|
| SP Core Architecture | `sp-core-v1.0` |
| Supplement Narrative | `supplement-narrative-complete-v1` |
| Composition Language | Sprint 7.2 · `supplement-composition-role-sharpening-v1` |
| Buyer Journey | Sprint 7.2b |
| Platform Architecture v1 | `pulseops-architecture-v1` |
| Codebase hygiene baseline | [`CODEBASE-HYGIENE-AUDIT-v1.md`](./CODEBASE-HYGIENE-AUDIT-v1.md) |

**Phase III.5 hygiene fixes (zero render change):**

- Removed deprecated disabled `sp-scientific-proof` from supplement template
- Removed orphan empty blocks from `index.supplement.json`
- Deleted unreferenced `snippets/sp-image-class.liquid`
- Published codebase hygiene audit

**Next phase:** **Phase IV — Craftsmanship · Sprint IV.1 Typography Language** (Supplement canonical demo; no architecture revisit)

**Includes:** [`CODEBASE-HYGIENE-AUDIT-v1.md`](./CODEBASE-HYGIENE-AUDIT-v1.md), `templates/index.supplement.json`, `docs/README.md`, `docs/SP-IMAGE-EXPERIENCE.md`

---

## Supplement Composition & Role Sharpening v1

| Field | Value |
|-------|-------|
| **Tag** | `supplement-composition-role-sharpening-v1` |
| **Commit** | `48f1d77` |
| **Date** | 2026-06-20 |
| **Branch** | `main` |

**Summary:** Sprint 7.2 composition language + Sprint 7.2b buyer journey role sharpening. Distinct middle-chapter silhouettes; substance / habit / philosophy / evidence ownership separated.

**Includes:** `assets/sp-composition-system.css`, section composition classes, `templates/index.supplement.json` copy/settings.

---

## Supplement Narrative Complete v1

| Field | Value |
|-------|-------|
| **Tag** | `supplement-narrative-complete-v1` |
| **Commit** | (see tag) |
| **Date** | 2026-06-20 |
| **Branch** | `main` |

**Summary:** Full Supplement homepage narrative frozen. Sprint 7.1 (hero restraint), 7.1b (mid-page restraint), and 7.1c (ending polish: Human Proof → FAQ → Future Self → Footer) complete. No further narrative redesign before launch — future work is visual craft only.

**Policy:**

> **SUPPLEMENT HOMEPAGE NARRATIVE: FROZEN**
>
> No chapter reorder, new sections, narrative copy rewrite, or section redesign unless:
> - critical bug
> - accessibility blocker
> - merchant configurability blocker

**Includes:** `templates/index.supplement.json`, `sections/footer-group.json`, `assets/sp-editorial-system.css`, `assets/sp-demo-supplement-type.css`, [LAUNCH-CHECKLIST.md](./LAUNCH-CHECKLIST.md).

**Prior narrative tags:** `supplement-restraint-pass-v1` (7.1b), `supplement-hero-frozen-v1` (7.1 hero).

---

## Legacy tags

| Tag | Commit | Purpose |
|-----|--------|---------|
| `SP-Core-Freeze-v1` | `6fcf32b` | Earlier SP Core architecture freeze (pre–storefront polish) |

---

## Tag reference

| Tag | Commit | Purpose |
|-----|--------|---------|
| `pulseops-phase-iii-complete` | `8e6dd84` | **Current** — Phase III complete; hygiene locked |
| `pulseops-architecture-v1` | (see tag) | Platform architecture v1 LOCKED |
| `supplement-composition-role-sharpening-v1` | `48f1d77` | Sprint 7.2 + 7.2b composition and buyer journey |
| `sp-core-v1.0` | `912e196` | SP Core production freeze |
| `demo-presets-v1-release` | `7109c52` | Demo presets release |
| `supplement-hero-frozen-v1` | `5d939af` | Supplement Demo hero freeze |
| `supplement-editorial-v2` | (see tag) | Future Self + editorial presentation |
| `supplement-restraint-pass-v1` | `ee99d87` | Sprint 7.1b homepage restraint pass |
| `supplement-narrative-complete-v1` | (see tag) | Full supplement homepage narrative freeze |
| `pulseops-visual-system-v1` | `91e1c7b` | PulseOps Visual System v1.0 authority |
| `SP-Core-Freeze-v1` | `6fcf32b` | Legacy architecture-only freeze |
