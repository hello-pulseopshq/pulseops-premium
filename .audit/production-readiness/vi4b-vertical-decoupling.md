# Phase VI.4B Vertical Architecture Decoupling

## Metadata

- Sprint: Phase VI.4B - Vertical Architecture Decoupling
- Date: 2026-06-30
- Auditor: Cursor Agent
- Scope: remove unsafe Supplement coupling from core theme files and route vertical behavior through the existing pack registry
- Constraint: no redesign, no copy change, no section order change for content sections, no CSS consolidation, no new verticals

## Executive Summary

Status: Complete

The unsafe core-section coupling found in `sections/sp-hero.liquid` was removed. Supplement hero CSS is now loaded through the registry-dispatched Supplement vertical head stack, keeping the generic Hero section generic.

The duplicate Supplement template class-injection custom-liquid sections were removed from `templates/index.supplement.json` and `templates/product.supplement.json`. The same classes are already emitted by `layout/theme.liquid` through `snippets/sp-vertical-html-class.liquid` and `snippets/sp-pack-registry.liquid`.

## Coupling Patterns Found

| Pattern | Location | Classification | Action |
| --- | --- | --- | --- |
| `template.suffix == 'supplement'` loading `sp-supplement-hero.css` | `sections/sp-hero.liquid` | Unacceptable core-section coupling | Removed |
| `template.suffix` used to resolve active vertical | `snippets/sp-pack-registry.liquid` | Acceptable vertical pack identity | Kept |
| Static `when 'supplement'` render of `sp-supplement-head` | `layout/theme.liquid` | Acceptable Liquid-safe registry dispatch | Kept |
| `sp-supplement-head` registry value | `snippets/sp-pack-registry.liquid` | Acceptable vertical pack identity | Kept |
| `document.documentElement.classList.add(...)` for Supplement classes | `templates/index.supplement.json`, `templates/product.supplement.json` | Unacceptable template runtime class patch | Removed |
| `custom_liquid` cart trust markup | `templates/cart.supplement.json` | Acceptable template-level content | Kept |
| `document.documentElement.classList.add(...)` in non-Supplement generated presets | `templates/index.*.json`, `templates/product.*.json`, `scripts/generate-demo-presets.mjs` | Deferred non-registry preset architecture | Kept |
| `sp-supplement` CSS selectors and tokens | Supplement asset stack | Acceptable vertical styling | Kept |
| Historical `sp-demo-*` references | Historical docs | Acceptable historical reference | Kept |

## Changes Made

### Core Section Decoupling

- Removed the hardcoded Supplement suffix check from `sections/sp-hero.liquid`.
- `sections/sp-hero.liquid` now loads only `section-sp-hero.css`.

### Registry-Driven Vertical Asset Loading

- Added `sp-supplement-hero.css` to `snippets/sp-supplement-head.liquid`.
- `layout/theme.liquid` already uses the registry/static-dispatch pattern:
  - capture active vertical from `sp-pack-registry`
  - statically render `sp-supplement-head` when active vertical is `supplement`

### Template Runtime Class Decoupling

- Removed the `vertical-visual-treatment` custom-liquid class-injection section from `templates/index.supplement.json`.
- Removed the `vertical-visual-treatment` custom-liquid class-injection section from `templates/product.supplement.json`.
- The Supplement HTML classes now come only from:
  - `layout/theme.liquid`
  - `snippets/sp-vertical-html-class.liquid`
  - `snippets/sp-pack-registry.liquid` field `html_class`

### Generator Preservation

- Updated `scripts/generate-demo-presets.mjs` so the Supplement vertical does not regenerate `vertical-visual-treatment`.
- Non-Supplement neutral demo presets continue to use their existing custom-liquid class injection because they do not yet have registry branches.

## What Is Now Registry-Driven

- Supplement HTML classes:
  - registry field: `html_class`
  - helper: `snippets/sp-vertical-html-class.liquid`
  - output location: `<html>` class attribute in `layout/theme.liquid`
- Supplement vertical head assets:
  - registry active field: `active`
  - static dispatch in `layout/theme.liquid`
  - asset stack in `snippets/sp-supplement-head.liquid`
- Supplement footer navigation:
  - registry field: `footer_nav`
  - static dispatch in `sections/footer.liquid`
- Supplement brand/title/query helpers:
  - `sp-vertical-brand-name`
  - `sp-vertical-page-title`
  - `sp-vertical-view-query`

## What Remains Template-Level

- `templates/cart.supplement.json` keeps a `custom_liquid` trust section. This is content markup, not runtime class injection or vertical asset loading.
- Non-Supplement generated preset templates keep `vertical-visual-treatment` and class injection because those demo presets do not yet have registry branches. Moving those would require a broader multi-vertical architecture migration.
- `config/demo-shells/supplement-shell.json` keeps `supplement` identity and menu references. This is internal shell configuration, not core-section coupling.

## Deferred Items

- Add registry branches for non-Supplement neutral presets if those packs become first-class shippable verticals.
- Move non-Supplement `vertical-visual-treatment` injection out of template JSON after those presets have registry identities.
- Runtime browser verification for:
  - `/?view=supplement`
  - `/products/daily-vitality-complex?view=supplement`
  - `/cart?view=supplement`
- Decide whether cart pages without `cart.supplement.json` should receive full vertical head assets from query-state alone. Current architecture preserves query routing but does not turn generic cart templates into full vertical templates.

## Regression Risks

| Risk | Level | Notes |
| --- | --- | --- |
| Broken Hero styling | Low | `sp-supplement-hero.css` still loads for active Supplement templates, now through `sp-supplement-head`. |
| Duplicate CSS loading | Very Low | The section-level load was removed before adding the head-stack load. |
| Missing Supplement HTML classes | Very Low | Classes are emitted by `sp-vertical-html-class` from registry field `html_class`. |
| Preview routing regression | Low | `sp-vertical-routing.js` remains in `sp-supplement-head`; query helper remains unchanged. |
| Non-Supplement preset regression | Very Low | Existing non-Supplement class injection was intentionally preserved. |
| Cart vertical styling gap | Low | Existing cart preview behavior is preserved; full vertical asset loading on generic cart via query is deferred for a later architecture decision. |

## Validation Results

Commands run:

- `git status --short`
- `git diff --check`
- `shopify theme check --fail-level error --output json`
- `node scripts/validate-demo-presets.mjs`
- repo-wide search for `template.suffix == 'supplement'`
- repo-wide search for `document.documentElement.classList`
- repo-wide search for `sp-supplement-head`
- search for `custom_liquid` in Supplement templates
- repo-wide search for stale old `sp-demo` names
- repo-wide mojibake search
- ReadLints on changed files

Results:

- `git status --short`: expected five changed files plus this report.
- `git diff --check`: passed with line-ending warnings only.
- Theme Check JSON: `0` errors; existing unrelated warning baseline remains.
- `template.suffix == 'supplement'`: no matches.
- `document.documentElement.classList`: no Supplement template class-injection matches remain; remaining matches are non-Supplement generated presets and generic runtime boot scripts.
- `sp-supplement-head`: appears only in registry/static dispatch, Theme Check config, operational docs, and comments.
- `custom_liquid` in Supplement templates: only `templates/cart.supplement.json` trust content remains.
- Stale `sp-demo` names: production paths remain clean; historical docs still contain expected old names.
- Mojibake search: no matches.
- ReadLints: no linter errors on changed files.
- Preset validator: failed on existing Shopify JSON comment-block parsing limitation in `templates/index.supplement.json`; not caused by this sprint.

## Certification

PASS WITH OBSERVATIONS

Core-section Supplement coupling was removed, and Supplement class/asset responsibilities now flow through the existing vertical registry and head stack. Observations are limited to intentional non-Supplement demo preset injection and existing validator limitations.
