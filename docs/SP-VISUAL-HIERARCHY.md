# SP Visual Hierarchy System

Theme-wide layout and surface utilities for all Single Product OS (`sp-*`) sections.

## Overview

| Control | Options | Purpose |
|---------|---------|---------|
| **Surface style** | Default, Alternate, Inverse, Accent, Transparent | Background treatment |
| **Width mode** | Contained, Wide, Full width, Bleed | Content width rhythm |
| **Section emphasis** | Normal, Elevated, Feature | Visual weight |
| **Divider** | None, Line, Gradient, Fade | Separation from previous section |

All styling uses **global CSS variables** from the active color scheme and theme settings. No hardcoded colors.

---

## Quick start (new SP section)

### 1. Wrap section markup

```liquid
{% render 'sp-section-hierarchy-open', section: section %}
  <div class="sp-your-section">
    …content…
  </div>
{% render 'sp-section-hierarchy-close' %}
```

Remove redundant `page-width` wrappers — width is handled by `sp-section__inner--{width_mode}`.

### 2. Add schema settings

Copy the JSON array from `config/sp-section-hierarchy.schema.json` into your section schema `settings` array (before **Color scheme**).

### 3. Keep section padding

Retain existing `section-{{ section.id }}-padding` pattern in `{%- style -%}` — the hierarchy shell applies that class on the outer `.sp-section` element.

### 4. Optional parameters

```liquid
{% render 'sp-section-hierarchy-open',
  section: section,
  extra_class: 'my-modifier',
  extra_attributes: 'data-my-section'
%}
```

---

## Theme-level tokens

Configure under **Theme settings → SP Visual hierarchy**:

| Setting | CSS variable | Default |
|---------|--------------|---------|
| Inverse surface scheme | (color scheme class) | scheme-3 |
| Alternate surface strength | `--sp-surface-alt-opacity` | 4% |
| Accent surface strength | `--sp-surface-accent-opacity` | 10% |
| Wide mode extra width | `--sp-width-wide-offset` | 8rem |
| Horizontal padding | `--sp-section-padding-inline` | 1.6rem |
| Mobile horizontal padding | `--sp-section-padding-inline-mobile` | 1.2rem |
| Elevated shadow strength | `--sp-emphasis-elevated-opacity` | 8% |
| Divider strength | `--sp-divider-opacity` | 12% |
| Feature block radius | `--sp-section-feature-radius` | `--media-radius` |
| Feature extra padding | `--sp-section-feature-padding` | 1.6rem |

---

## Surface styles

| Value | Behavior |
|-------|----------|
| **Default** | Standard `color_scheme` + gradient |
| **Alternate** | Foreground tint overlay (`::before`) |
| **Inverse** | Uses theme **Inverse surface scheme** color scheme |
| **Accent** | Button-color tint overlay |
| **Transparent** | No background / no gradient |

## Width modes

| Value | Behavior |
|-------|----------|
| **Contained** | `max-width: var(--page-width)` + horizontal padding |
| **Wide** | Page width + `--sp-width-wide-offset` |
| **Full width** | 100% with horizontal padding |
| **Bleed** | 100%, no horizontal padding (edge-to-edge content) |

## Section emphasis

| Value | Behavior |
|-------|----------|
| **Normal** | Baseline |
| **Elevated** | Shadow using `--color-shadow` |
| **Feature** | Extra padding + rounded inner on desktop |

## Dividers

Rendered at the **top** of the section shell.

| Value | Behavior |
|-------|----------|
| **None** | — |
| **Line** | 1px foreground line |
| **Gradient** | Center-weighted gradient line |
| **Fade** | Soft top fade into section |

---

## Fixed / sticky components

For fixed elements (e.g. SP Sticky ATC), apply surface classes directly:

```liquid
class="… sp-surface--{{ section.settings.sp_surface_style }}"
```

Load utilities via global `sp-visual-hierarchy.css` in `layout/theme.liquid`.

---

## Files

| File | Role |
|------|------|
| `assets/sp-visual-hierarchy.css` | Utility classes |
| `snippets/sp-section-hierarchy-open.liquid` | Section shell open |
| `snippets/sp-section-hierarchy-close.liquid` | Section shell close |
| `config/sp-section-hierarchy.schema.json` | Schema fragment for new sections |
| `config/settings_schema.json` | Theme-level token settings |

---

## Backward compatibility

- Default settings match previous behavior (Default surface, Contained width, Normal emphasis, No divider).
- Existing `color_scheme` setting is preserved and used unless **Inverse** surface is selected.
- Merchants who never change hierarchy settings see no visual change.
