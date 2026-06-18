# SP Schema & Settings Conventions

Source of truth for how SP (`sp-*`) sections define their settings. The goal is a
consistent merchant experience across every SP section and a predictable surface
for future tooling (generated schemas, automated migrations).

> Scope: this governs **section** schema (`{% schema %}` blocks in `sections/sp-*.liquid`)
> and the global **theme settings** SP groups in `config/settings_schema.json`.

---

## 1. Canonical shared setting groups

Every content-bearing SP section SHOULD expose the following groups, in this order,
after its section-specific content settings. These are the "SP section frame" controls.

### a. Visual hierarchy

Header label: `Visual hierarchy`

| id                   | type   | default      | options |
| -------------------- | ------ | ------------ | ------- |
| `sp_surface_style`   | select | `default`    | `default`, `alternate`, `inverse`, `accent`, `transparent` |
| `sp_width_mode`      | select | `contained`  | `contained`, `wide`, `full`, `bleed` |
| `sp_section_emphasis`| select | `normal`     | `normal`, `elevated`, `feature` |
| `sp_divider_style`   | select | `none`       | `none`, `line`, `gradient`, `fade` |

`sp_surface_style` MUST carry the standard info string:

> "Inverse uses the inverse color scheme from Theme settings → SP Visual hierarchy instead of the section Color scheme below."

### b. Color scheme

| id             | type           | default    |
| -------------- | -------------- | ---------- |
| `color_scheme` | color_scheme   | `scheme-1` |

Include the info string: "Not applied when Surface style is set to Inverse."

### c. Section padding

Header label: `Section padding`

| id              | type  | min | max | step | unit | default |
| --------------- | ----- | --- | --- | ---- | ---- | ------- |
| `padding_top`   | range | 0   | 100 | 4    | px   | 36      |
| `padding_bottom`| range | 0   | 100 | 4    | px   | 36      |

These two IDs match Dawn's convention so the `.section-{{ section.id }}-padding`
helper and the `times: 0.75` mobile-scaling pattern work uniformly.

---

## 2. Naming rules

1. **Prefix.** All SP-specific setting IDs use the `sp_` prefix
   (`sp_surface_style`, not `surface_style`). IDs that mirror a Dawn convention and
   feed Dawn-style helpers keep the Dawn name (`padding_top`, `padding_bottom`,
   `color_scheme`).
2. **snake_case.** Setting IDs are `snake_case` (Theme Check `VariableName`).
3. **Booleans** read as positive statements: `show_*`, `enable_*`.
4. **Grouped families** share a stem: `floating_review_*`, `stat_1_*`, `trust_microcopy_*`.
5. **Labels** are sentence case ("Top padding", not "Top Padding").
6. **Option `value`s** are lowercase tokens; CSS modifiers derive from them
   (`sp_surface_style: inverse` → `.sp-section--inverse`).

---

## 3. When a section may deviate

A section may omit or alter a canonical group only when the control is meaningless
for that section. Document the reason inline in the schema. Known approved deviations:

- **`sp-sticky-atc`** — omits `Section padding` (it is a fixed/floating bar, not an
  in-flow section) and omits `sp_divider_style`.
- **Internal/experimental sections** (`sp-bundles`, `sp-before-after`, `sp-ugc`) —
  keep the frame controls for forward compatibility but have **no `presets`** and
  render no storefront output (see their file headers).

Deviation rules:
- Never rename a canonical ID for a one-off purpose — add a new, clearly-named ID.
- Never change a canonical option `value` (it would orphan existing merchant data and
  break the CSS modifier contract). Add new values at the end of the list instead.

---

## 4. Theme settings (global) SP groups

Global SP settings live in `config/settings_schema.json` under groups named with an
`SP ` prefix so they cluster in Theme settings:

- `SP Visual hierarchy` — surface/emphasis/divider opacity tokens, inverse scheme.
- `SP Motion` — `sp_motion_style` and related global motion tokens.
- `SP Image Experience` — `sp_image_*` progressive reveal / shadow / placeholder.
- `SP Cart` — `sp_cart_free_shipping_*`, `sp_cart_trust_text` (cart drawer enhancements).

Global token IDs follow the same `sp_` prefix + `snake_case` rule. Values consumed as
CSS custom properties are emitted by `snippets/sp-root-tokens.liquid` (not inline in
`layout/theme.liquid`).

---

## 5. Avoiding drift

- The canonical frame is currently **hand-maintained**. When adding a section, copy the
  frame from an existing simple section (`sections/sp-trust-icons.liquid` is a good
  reference) rather than re-typing it.
- Do not introduce a parallel control (e.g. `sp_section_width`) that duplicates a
  canonical one (`sp_width_mode`).
- Keep option lists and defaults byte-identical across sections so a future generator
  can treat them as one shared fragment.

---

## 6. Future path toward generated schemas

Liquid has no schema includes, so today each section repeats the frame. The intended
evolution (post-v1.0, non-blocking):

1. Define the canonical frame once as a machine-readable fragment
   (e.g. `config/sp-schema-fragments/section-frame.json`).
2. Add a build step (extend the existing `scripts/` Node tooling that already generates
   demo presets) that injects the fragment into each `sp-*.liquid` `{% schema %}` block
   between sentinel comments, e.g. `// sp:frame:start` … `// sp:frame:end`.
3. Run the generator in CI and fail the build if a section's frame drifts from the
   fragment.

This keeps merchant-facing settings stable while removing hand-maintained duplication.
Until then, this document is the contract; reviewers should reject PRs that diverge from
the canonical frame without a documented deviation (section 3).
