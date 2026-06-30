# PulseOps SP Core

A Shopify Online Store 2.0 theme for **single-product brands** — conversion-focused section stack, frozen core architecture, and vertical demo presets.

Built on Dawn foundations. Optimized for DTC, creator, and mobile-first commerce.

## Overview

PulseOps SP Core (Single Product OS) gives merchants a ready-made product narrative: hero, benefits, features, proof, social proof, FAQ, CTA, and sticky add-to-cart — without rebuilding from scratch.

**Target merchants:**

- Single-product brands
- DTC brands
- Creator brands
- Mobile-first commerce

## Releases

| Release | Tag | Commit |
|---------|-----|--------|
| **SP Core v1.0** | [`sp-core-v1.0`](https://github.com/hello-pulseopshq/pulseops-premium/releases/tag/sp-core-v1.0) | `912e196` |
| **Demo Presets v1** | [`demo-presets-v1-release`](https://github.com/hello-pulseopshq/pulseops-premium/releases/tag/demo-presets-v1-release) | `7109c52` |
| **Supplement Editorial v2** | [`supplement-editorial-v2`](https://github.com/hello-pulseopshq/pulseops-premium/releases/tag/supplement-editorial-v2) | (this release) |

Details: [docs/RELEASES.md](docs/RELEASES.md)

## Documentation

Start with the **PulseOps Design System**. It is the constitutional overview for the repository: why the system exists, how languages relate, how authority flows, and how future languages are created.

Recommended reading order:

1. PulseOps Design System
2. Architecture
3. Narrative
4. Composition
5. Typography
6. Surface
7. Photography
8. Interaction
9. Motion (planned)
10. Implementation documentation

| Doc | Description |
|-----|-------------|
| [docs/README.md](docs/README.md) | Documentation index |
| [docs/pulseops-design-system.md](docs/pulseops-design-system.md) | **Constitutional overview and canonical entry point** |
| [docs/pulseops-visual-system-v1.md](docs/pulseops-visual-system-v1.md) | PulseOps visual operating system |
| [docs/pulseops-design-language-v1.md](docs/pulseops-design-language-v1.md) | Visual language chapter |
| [docs/editorial-art-direction.md](docs/editorial-art-direction.md) | Chapter-level art direction |
| [docs/QUICK_START.md](docs/QUICK_START.md) | Install and run |
| [docs/PRODUCT_PAGE_RECIPE.md](docs/PRODUCT_PAGE_RECIPE.md) | Default product page stack |
| [docs/DEMO_PRESETS.md](docs/DEMO_PRESETS.md) | Vertical demo templates |
| [docs/BETA_PROGRAM.md](docs/BETA_PROGRAM.md) | Merchant beta plan |
| [docs/RELEASES.md](docs/RELEASES.md) | Release history |
| [docs/CANONICAL-QA-THEME.md](docs/CANONICAL-QA-THEME.md) | Canonical Shopify QA theme (#183028121915) |

## Development

Requires [Shopify CLI](https://shopify.dev/docs/themes/tools/cli).

**Canonical QA theme:** PulseOps Supplement Demo `#183028121915` — see [docs/CANONICAL-QA-THEME.md](docs/CANONICAL-QA-THEME.md).

```bash
git clone https://github.com/hello-pulseopshq/pulseops-premium.git
cd pulseops-premium
shopify theme dev --theme 183028121915
```

Validate with:

```bash
shopify theme check
node scripts/validate-demo-presets.mjs   # demo preset templates only
```

## License

See [LICENSE.md](LICENSE.md). Theme inherits Dawn lineage; PulseOps SP Core branding and SP sections are © PulseOps Labs.
