# Quick Start

SP Core is a **hero-product theme** — built for brands with a primary offer and narrative-led conversion pages, not generic multi-product catalogs.

## Prerequisites

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)
- A Shopify development store

## Install theme

```bash
shopify theme pull   # or clone this repository
shopify theme dev
```

## Default templates

| Page | Template | Notes |
|------|----------|-------|
| Homepage | `index.json` | SP Core default storefront |
| Product | `product.json` | SP narrative stack + sticky ATC |

## Hero-product navigation (defaults)

After install, set **Online Store → Navigation** to match the hero-product journey:

**Main menu:** Shop · Benefits · Reviews · FAQ

**Footer menu:** Shop · Benefits · Reviews · FAQ · Contact · Shipping & Returns

Menu definitions ship in `config/menus/core-main-menu.json` and `config/menus/core-footer-menu.json`.

Sync to your store — requires a **custom app** Admin API token with `write_online_store_navigation`:

```bash
SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxx node scripts/setup-hero-product-menus-api.mjs core
```

Definitions are in `config/menus/`. The Shopify CLI session token cannot write menus (scope limited).

Fallback: update **Online Store → Navigation** manually, or run `node .audit/setup-hero-product-menus-playwright.mjs core` (Chrome closed, logged into Admin).

**Recommended links (safe defaults):**

| Item | URL |
|------|-----|
| Shop | `/collections/all` |
| Benefits / Reviews / FAQ | `/` (homepage narrative sections) |
| Contact | `/pages/contact` |
| Shipping & Returns | `/policies/refund-policy` |

Avoid generic Dawn defaults: Catalog, Search as menu items, or collection-only nav.

## Demo presets

See [DEMO_PRESETS.md](./DEMO_PRESETS.md) for alternate vertical templates (`index.supplement.json`, etc.).

## Demo shells (preview / showcase)

Flagship demo stores can apply a vertical-specific **shell** (announcement bar, footer copy, menu profile) without changing SP Core sections:

```bash
node scripts/apply-demo-shell.mjs supplement
node scripts/setup-hero-product-menus-api.mjs supplement   # or manual from config/menus/
shopify theme push --only sections/header-group.json sections/footer-group.json
```

Restore core defaults:

```bash
node scripts/apply-demo-shell.mjs core
```

## Release checkpoints

See [RELEASES.md](./RELEASES.md).
