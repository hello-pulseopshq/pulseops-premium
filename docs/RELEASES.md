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
| `SP-Core-Freeze-v1` | `6fcf32b` | Legacy architecture-only freeze |
