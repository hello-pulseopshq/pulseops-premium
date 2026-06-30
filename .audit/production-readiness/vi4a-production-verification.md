# Phase VI.4A Verification - Production Naming Integrity

## Metadata

- Sprint: Phase VI.4A Verification - Production Naming Integrity
- Date: 2026-06-30
- Auditor: Cursor Agent
- Scope: release engineering verification of the VI.4A production naming cleanup
- Primary reference: `.audit/production-readiness/vi4a-production-naming-cleanup.md`
- Mode: verification only; no implementation changes made

## Executive Summary

Final certification: PASS WITH OBSERVATIONS

No production rename defects were found. All renamed files listed in the VI.4A cleanup report have the expected old/new path state, all production-loaded references point at the promoted names, and Theme Check reports `0` errors.

Observations are limited to historical documentation that still records old `sp-demo-*` names, internal demo tooling that remains intentionally named as demo tooling, and two renamed Daily Vitality placeholder assets that are present but not referenced by production code.

## 1. File Rename Integrity

| Old file | New file | Verified | Issues |
| --- | --- | --- | --- |
| `assets/sp-demo-presets.css` | `assets/sp-vertical-presets.css` | Yes | None |
| `assets/sp-demo-routing.js` | `assets/sp-vertical-routing.js` | Yes | None |
| `assets/sp-demo-supplement.css` | `assets/sp-supplement.css` | Yes | None |
| `assets/sp-demo-supplement-type.css` | `assets/sp-supplement-type.css` | Yes | None |
| `assets/sp-demo-supplement-hero.css` | `assets/sp-supplement-hero.css` | Yes | None |
| `assets/sp-demo-daily-vitality-hero.jpg` | `assets/sp-supplement-daily-vitality-hero.jpg` | Yes | New file exists; appears unreferenced by production code |
| `assets/sp-demo-daily-vitality-logo.svg` | `assets/sp-supplement-daily-vitality-logo.svg` | Yes | New file exists; appears unreferenced by production code |
| `assets/sp-demo-daily-vitality-product.svg` | `assets/sp-supplement-daily-vitality-product.svg` | Yes | None |
| `snippets/sp-demo-supplement-head.liquid` | `snippets/sp-supplement-head.liquid` | Yes | None |
| `snippets/sp-demo-view-query.liquid` | `snippets/sp-vertical-view-query.liquid` | Yes | None |
| `snippets/sp-demo-footer-nav.liquid` | `snippets/sp-vertical-footer-nav.liquid` | Yes | None |
| `snippets/sp-demo-brand-name.liquid` | `snippets/sp-vertical-brand-name.liquid` | Yes | None |
| `snippets/sp-demo-page-title.liquid` | `snippets/sp-vertical-page-title.liquid` | Yes | None |
| `snippets/sp-demo-html-class.liquid` | `snippets/sp-vertical-html-class.liquid` | Yes | None |

Verification evidence:

- Old filenames: all return `old_exists=False`.
- New filenames: all return `new_exists=True`.
- Git status: all 14 file moves are represented as `R` or `RM` rename entries.

## 2. Reference Integrity

Production references to old names: 0.

The focused production-path search found no `sp-demo` references in:

- `assets`
- `snippets`
- `sections`
- `layout`
- `templates`
- `.theme-check.yml`
- `scripts`
- `docs/DEMO_PRESETS.md`
- `docs/CODEBASE-HYGIENE-AUDIT-v1.md`

Remaining `sp-demo-*` references are historical documentation references in:

- `docs/TYPOGRAPHY-LANGUAGE-FOUNDATION.md`
- `docs/TYPOGRAPHY-LANGUAGE-AUDIT-v1.md`
- `docs/SURFACE-LANGUAGE-FOUNDATION.md`
- `docs/RELEASES.md`
- `docs/chapter-identity.md`
- `docs/editorial-system.md`

Severity: Observation. These are historical records and frozen or past-phase docs; they are not production-loaded Liquid, CSS, JavaScript, JSON, theme config, or generator output.

## 3. Asset Resolution Integrity

Verified production-loaded asset references exist:

- `assets/sp-vertical-presets.css`
- `assets/sp-supplement.css`
- `assets/sp-typography-language.css`
- `assets/sp-surface-language.css`
- `assets/sp-editorial-system.css`
- `assets/sp-composition-system.css`
- `assets/sp-supplement-type.css`
- `assets/sp-vertical-routing.js`
- `assets/sp-anchor-nav.js`
- `assets/sp-supplement-hero.css`

Verified production snippet references exist:

- `snippets/sp-supplement-head.liquid`
- `snippets/sp-vertical-footer-nav.liquid`
- `snippets/sp-vertical-view-query.liquid`
- `snippets/sp-vertical-brand-name.liquid`
- `snippets/sp-vertical-page-title.liquid`
- `snippets/sp-vertical-html-class.liquid`

Missing renamed assets: none.

Potential orphaned renamed assets:

- `assets/sp-supplement-daily-vitality-hero.jpg`
- `assets/sp-supplement-daily-vitality-logo.svg`

Severity: Observation. Both files exist and are not referenced by current production code. They do not create broken storefront requests. The referenced Daily Vitality fallback asset is `assets/sp-supplement-daily-vitality-product.svg`, which is used by `snippets/sp-pack-registry.liquid` and `scripts/create-daily-vitality-product.mjs`.

## 4. Pack Registry Integrity

Audited file: `snippets/sp-pack-registry.liquid`

| Field | Value | Verification |
| --- | --- | --- |
| `active` | `supplement` | Valid vertical id |
| `html_class` | `sp-vertical-visual-neutral sp-supplement` | Classes are present in templates/CSS |
| `brand_name` | `Daily Vitality` | Valid brand override |
| `product_handle` | `daily-vitality-complex` | Used by cart fallback logic |
| `title_index` | `Daily Vitality - Daily Wellness, Simplified` equivalent runtime title string | Valid title override; contains no renamed resource dependency |
| `title_cart` | `Your Cart | Daily Vitality` | Valid title override |
| `title_product_suffix` | ` | Daily Vitality` | Valid title suffix |
| `footer_hidden_links` | `energy,daily vitality` | Valid lower-case label list |
| `footer_nav` | `sp-vertical-footer-nav` | Snippet exists |
| `head_snippet` | `sp-supplement-head` | Snippet exists and is statically rendered in `layout/theme.liquid` |
| `hide_blank_feature_media` | `true` | Valid scalar |
| `hero_fallback_tokens` | `snowboard,gift-card,ski-wax,Main_b13ad453` | Valid placeholder-token list |
| `hero_fallback_image` | `sp-supplement-daily-vitality-product.svg` | Asset exists |

Pack registry status: verified.

## 5. HTML Class Integrity

Production runtime classes were promoted:

- `sp-demo-supplement` -> `sp-supplement`
- `sp-demo-visual-neutral` -> `sp-vertical-visual-neutral`
- `sp-demo-creator` -> `sp-vertical-creator`
- `sp-demo-electronics` -> `sp-vertical-electronics`
- `sp-demo-skincare` -> `sp-vertical-skincare`
- `sp-demo-lifestyle` -> `sp-vertical-lifestyle`

Verified production templates use `sp-vertical-*` and `sp-supplement` classes. No production runtime `sp-demo-*` class references remain.

Remaining `sp-demo-*` hits are historical docs only. Internal demo tooling keeps the word `demo` by design, but not `sp-demo-*` runtime class names.

## 6. Runtime Entry Points

Static verification:

- Homepage: `templates/index.supplement.json` injects `sp-vertical-visual-neutral` and `sp-supplement`; section order uses `vertical-visual-treatment`.
- PDP: `templates/product.supplement.json` injects the same promoted class tokens.
- Cart: cart drawer and cart-page fallback logic use `sp-pack-registry` plus `sp-vertical-view-query`.
- Header: `sections/header.liquid` renders `sp-vertical-brand-name` and `sp-vertical-view-query`.
- Footer: `sections/footer.liquid` statically dispatches `sp-vertical-footer-nav` for the supplement vertical.
- Drawer: `snippets/header-drawer.liquid` uses `sp-vertical-view-query` and registry active state.
- Search: no renamed asset/snippet dependency found.
- Sticky ATC: no stale rename reference found; corrupted dash was removed in VI.4A.
- Supplement pack: `layout/theme.liquid` statically renders `sp-supplement-head`, which loads the renamed Supplement asset stack.

Runtime browser interaction status: Requires runtime verification.

## 7. Documentation Integrity

Operational docs updated:

- `docs/DEMO_PRESETS.md` references `sp-vertical-presets.css`, `vertical-visual-treatment`, and `sp-supplement.css`.
- `docs/CODEBASE-HYGIENE-AUDIT-v1.md` references the promoted Supplement file names where current operational naming is discussed.

Historical docs preserving old names:

- `docs/TYPOGRAPHY-LANGUAGE-FOUNDATION.md`
- `docs/TYPOGRAPHY-LANGUAGE-AUDIT-v1.md`
- `docs/SURFACE-LANGUAGE-FOUNDATION.md`
- `docs/RELEASES.md`
- `docs/chapter-identity.md`
- `docs/editorial-system.md`

Documentation status: observation only. These files document prior phase state and should not be rewritten in this verification sprint.

## 8. Deferred Items Review

Deferred items from cleanup report:

- `scripts/generate-demo-presets.mjs`: appropriate to keep as internal demo tooling, though it was correctly updated to emit production-safe class tokens and section ids.
- `scripts/validate-demo-presets.mjs`: appropriate; internal validator.
- `scripts/demo-presets-config.mjs`: appropriate; internal preset data.
- `scripts/apply-demo-shell.mjs`: appropriate; internal shell application utility.
- `config/demo-shells/*`: appropriate; internal shell configuration.
- `docs/DEMO_PRESETS.md`: appropriate; operational documentation for demo preset tooling.
- Historical audit/language docs: appropriate to defer; not production-loaded.
- `demo` product tag in `scripts/create-daily-vitality-product.mjs`: appropriate; internal/admin metadata, not storefront naming.

Deferred review result: no deferred item should be pulled into this verification sprint.

## 9. Regression Risk Assessment

| Risk area | Score | Justification |
| --- | --- | --- |
| Broken asset loading | Low | All production-loaded renamed assets exist and are referenced by valid file names. Two renamed placeholder assets are unreferenced but do not create broken requests. |
| Broken Liquid render | Low | Static render calls point to existing snippets, and Theme Check reports `0` errors. |
| Broken routing | Low | `sp-vertical-routing.js` exists and is loaded by `sp-supplement-head.liquid`; query propagation logic remains intact statically. |
| Broken pack registry | Very Low | Registry values resolve to existing snippets/assets and valid scalar values. |
| Broken preview routing | Low | Session storage keys changed from `sp_demo_*` to `sp_vertical_*`; active query params still repopulate state. Existing browser sessions may lose old stored state, but this is not a production resource break. |
| Merchant-visible regression | Low | Static references are valid. Browser rendering still requires runtime verification because this sprint did not execute visual/runtime browsing. |

## 10. Validation Results

Commands run:

- `git status --short`
- `git diff --check`
- `shopify theme check --fail-level error --output json`
- `rg sp-demo .`
- `rg sp-demo- .`
- `rg demo-supplement .`
- repository-wide corrupted middle-dot search
- path existence check for every renamed old/new pair
- referenced-resource existence check for promoted assets and snippets

Results:

- `git status --short`: expected VI.4A renamed/modified files are present.
- `git diff --check`: passed; line-ending warnings only, no whitespace errors.
- Theme Check JSON: `0` errors; existing unrelated warning baseline remains.
- `sp-demo` / `sp-demo-` repo-wide search: production paths clean; historical docs contain expected old names.
- `demo-supplement` search: no production defect found.
- Corrupted middle-dot search: no matches.
- Old production filenames: do not exist.
- New production filenames: exist.
- Missing renamed references: none found.

## Final Certification

PASS WITH OBSERVATIONS

No production rename defects were found. Observations are non-blocking:

- Historical docs retain prior `sp-demo-*` naming.
- Internal demo tooling appropriately retains `demo` terminology.
- Two promoted Daily Vitality placeholder assets appear unreferenced by production code.
- Runtime browser behavior still requires runtime verification.
