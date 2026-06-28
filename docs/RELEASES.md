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

## Legacy tags

| Tag | Commit | Purpose |
|-----|--------|---------|
| `SP-Core-Freeze-v1` | `6fcf32b` | Earlier SP Core architecture freeze (pre–storefront polish) |

---

## Tag reference

| Tag | Commit | Purpose |
|-----|--------|---------|
| `sp-core-v1.0` | `912e196` | **Current** SP Core production freeze |
| `demo-presets-v1-release` | `7109c52` | **Current** demo presets release |
| `supplement-hero-frozen-v1` | `5d939af` | **Current** Supplement Demo hero freeze |
| `supplement-editorial-v2` | (see tag) | **Current** Future Self + editorial presentation |
| `SP-Core-Freeze-v1` | `6fcf32b` | Legacy architecture-only freeze |
