# Active render path trace

- Route: `/products/daily-vitality-complex?view=supplement` (HTTP 200, 2026-07-15).
- Active template: `templates/product.supplement.json`.
- Layout: `layout/theme.liquid`; supplement routing loads `snippets/sp-supplement-head.liquid` and its vertical styles/scripts.
- Ordered sections: `main-product`, `sp-trust-icons`, `sp-benefits`, `sp-features`, `sp-scientific-proof`, `sp-social-proof`, `sp-faq`, `sp-cta-offer`, `sp-sticky-atc`.
- Main PDP owner: `sections/main-product.liquid`.
- Main PDP snippets: `product-media-gallery`, `product-media`, `product-thumbnail`, `product-variant-picker`, `product-variant-options`, `quantity-input`, `buy-buttons`, `price`, `pickup-availability`.
- Main PDP assets: `section-main-product.css`, `component-price.css`, `component-slider.css`, `component-rating.css`, `component-deferred-media.css`, conditional variant/volume/model assets, `product-info.js`, `product-form.js`, `product-modal.js`, `media-gallery.js`, and conditional `product-model.js`.
- Shared premium layer: `assets/sp-commerce-premium.css`, loaded globally by `layout/theme.liquid`.
- Supplement layer: `sp-vertical-presets.css`, `sp-supplement.css`, `sp-typography-language.css`, `sp-surface-language.css`, `sp-editorial-system.css`, `sp-composition-system.css`, `sp-supplement-type.css`, `sp-footer.css`, `sp-vertical-routing.js`, and `sp-anchor-nav.js` through `snippets/sp-supplement-head.liquid`.
- FAQ: `sections/sp-faq.liquid` + `assets/sp-faq.css` + `assets/sp-faq.js`.
- Sticky purchase: `sections/sp-sticky-atc.liquid` + `assets/section-sp-sticky-atc.css` + `assets/sp-sticky-atc.js`; separate product form reuses the shared `product-form` custom element.
- Runtime section IDs confirmed all nine ordered template sections rendered.

## Active versus non-active

- `templates/product.json` and other `templates/product.<vertical>.json` are alternate presentations, not owners of this route.
- `sections/featured-product.liquid` shares Dawn product primitives but is not rendered here.
- `sections/sp-quality-standards.liquid` and homepage-only editorial sections are not in the active PDP order.
- `sections/sp-scientific-proof.liquid` is active on this PDP even though a similarly named proof implementation is intentionally absent/deprecated on the frozen homepage.
