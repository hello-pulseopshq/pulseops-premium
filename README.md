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

| Doc | Description |
|-----|-------------|
| [docs/README.md](docs/README.md) | Documentation index |
| [docs/QUICK_START.md](docs/QUICK_START.md) | Install and run |
| [docs/PRODUCT_PAGE_RECIPE.md](docs/PRODUCT_PAGE_RECIPE.md) | Default product page stack |
| [docs/DEMO_PRESETS.md](docs/DEMO_PRESETS.md) | Vertical demo templates |
| [docs/BETA_PROGRAM.md](docs/BETA_PROGRAM.md) | Merchant beta plan |
| [docs/RELEASES.md](docs/RELEASES.md) | Release history |
| [docs/CANONICAL-QA-THEME.md](docs/CANONICAL-QA-THEME.md) | Canonical Shopify QA theme (#183028121915) |
| [docs/editorial-art-direction.md](docs/editorial-art-direction.md) | Editorial art direction system |

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
