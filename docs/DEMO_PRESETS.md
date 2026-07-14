# SP Core — Demo Presets v1

Demo store presets built on top of frozen SP Core (`sp-core-v1.0`, commit `912e196`).

These are **alternate templates** — they do not modify default `index.json` or `product.json`.

## Hero-product positioning

SP Core is a **hero-product theme**. Navigation should reflect buyer entry points, not generic catalog browsing.

| Pattern | Example nav |
|---------|-------------|
| Single hero product | Shop · Benefits · Reviews · FAQ |
| Audience-based line | Kids · Seniors · Pets |
| Product family | Product · Bundle · Accessories · Reviews |

Avoid: Catalog, Search (as menu items), All products, generic Dawn menu defaults.

Default menu definitions: `demo-config/menus/`. Demo-specific shells: `demo-config/shells/`.

## Readiness tiers

### Public demo ready (presets 1–5)

Copy, pricing, and visuals are coherent for merchant showcase. These presets use **neutral visual treatment** (no mismatched product photography):

| ID | Category | Product | Price |
|----|----------|---------|-------|
| `supplement` | Supplement / Wellness | Daily Vitality Complex | $49.95 |
| `skincare` | Skincare / Beauty | Radiance Renewal Serum | $68.00 |
| `creator` | Creator Brand | Creator Essentials Kit | $39.00 |
| `electronics` | Electronics / Gadget | MagCharge Pro Stand | $129.00 |
| `lifestyle` | Apparel / Lifestyle | Essential Fleece Hoodie | $68.00 |

**Neutral visual treatment:** Hero media and feature image columns are hidden via `assets/sp-vertical-presets.css`, scoped by `vertical-visual-treatment` custom-liquid sections in each template. Feature rows render as card-heavy, bullet-led content blocks.

### Secondary / internal (presets 6–10)

Templates are valid and copy-complete, but **require category-specific product imagery** (or neutral visual treatment) before public Theme Store showcase. Until merchants upload images, SP Features may fall back to sample store product photography from frozen core.

| ID | Category | Notes |
|----|----------|-------|
| `pet` | Pet Product | Copy-ready; needs pet product images |
| `coffee` | Coffee / Food | Copy-ready; needs food/beverage images |
| `outdoor` | Outdoor / Sports | Uses `the-collection-snowboard-liquid` — copy and images aligned for sports/outdoor |
| `beauty-device` | Beauty Device | Copy-ready; needs device imagery |
| `fitness` | Fitness Product | Copy-ready; needs fitness product images |

## Templates

| Preset | Homepage | Product |
|--------|----------|---------|
| supplement | `index.supplement.json` | `product.supplement.json` |
| skincare | `index.skincare.json` | `product.skincare.json` |
| creator | `index.creator.json` | `product.creator.json` |
| electronics | `index.electronics.json` | `product.electronics.json` |
| lifestyle | `index.lifestyle.json` | `product.lifestyle.json` |
| pet | `index.pet.json` | `product.pet.json` |
| coffee | `index.coffee.json` | `product.coffee.json` |
| outdoor | `index.outdoor.json` | `product.outdoor.json` |
| beauty-device | `index.beauty-device.json` | `product.beauty-device.json` |
| fitness | `index.fitness.json` | `product.fitness.json` |

## Section stack

### Homepage

1. Demo visual treatment (presets 1–5 only)
2. SP Hero → SP Metrics → SP Benefits → SP Features → SP Scientific Proof → SP Social Proof → SP FAQ → SP CTA Offer

### Product page

1. Demo visual treatment (presets 1–5 only)
2. Main Product → SP Trust Icons → SP Benefits → SP Features → SP Scientific Proof → SP Social Proof → SP FAQ → SP CTA Offer → SP Sticky ATC

## Preview & assignment

**Preview theme:** `#182855336251`  
**Store:** `pulseops-labs.myshopify.com`

### Assign homepage preset

Shopify Admin → **Online Store → Themes → Customize** → Homepage template picker → `index.supplement`, etc.

### Assign product preset

**Products → [product] → Theme template** → `product.supplement`, etc.

### Recommended public demo pairings (presets 1–5)

Assign any catalog product to product templates — SP narrative copy is preset-specific. The Dawn buy box reflects the assigned product's title, price, and media.

For homepage presets 1–5, no `featured_product` handle is used — hero pricing comes from `price_text` in template settings.

### Push templates

```bash
git checkout demo-presets-v1
shopify theme push --only "templates/index.*.json" "templates/product.*.json" assets/sp-vertical-presets.css --theme 182855336251
```

## Regenerate

```bash
node scripts/generate-demo-presets.mjs
node scripts/validate-demo-presets.mjs
```

Edit copy in `scripts/demo-presets-config.mjs`, then regenerate.

## Demo shell (supplement flagship)

For the supplement showcase store, apply the supplement shell and menu profile:

```bash
node scripts/apply-demo-shell.mjs supplement
SHOPIFY_ADMIN_ACCESS_TOKEN=shpat_xxx node scripts/setup-hero-product-menus-api.mjs supplement
shopify theme push --only sections/header-group.json sections/footer-group.json --theme 182855336251
```

Supplement header nav: **Daily Vitality · Energy · Reviews · FAQ**  
Supplement announcement: **4.9★ · 8,400+ reviews · 30-day guarantee**

**Branding note:** The supplement preview uses a CSS wordmark (`Daily Vitality`) on `?view=supplement` / `product.supplement` via `assets/sp-supplement.css`. The Shopify store name (`pulseops-labs`) is unchanged in Admin — update **Settings → Store details** or upload a theme logo for a merchant-native wordmark. Browser tab titles may still show the store name until changed in Admin.

## Image limitations

- **Frozen core:** `sp-features.liquid` falls back to `all_products['the-collection-snowboard-liquid']` when block images are blank and no product context exists.
- **Presets 1–5:** Neutral CSS hides feature media and hero media — no snowboard imagery visible.
- **Presets 6–10 (except outdoor):** May display sample store product photos in feature rows until category images are uploaded or neutral treatment is applied.
- **Product pages:** Buy box media always reflects the assigned Shopify product, not preset copy.
