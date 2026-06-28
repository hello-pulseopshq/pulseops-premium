# Canonical Shopify QA Theme

## Theme identity

| Field | Value |
|---|---|
| **Name** | PulseOps Supplement Demo |
| **Theme ID** | `183028121915` |
| **Store** | `pulseops-labs.myshopify.com` |
| **Preview URL** | `https://pulseops-labs.myshopify.com/?preview_theme_id=183028121915&view=supplement` |
| **Theme editor** | `https://pulseops-labs.myshopify.com/admin/themes/183028121915/editor` |

## Rules

1. **All screenshots** must come from theme `#183028121915`.
2. **All Playwright audits** must target theme `#183028121915` (unless explicitly instructed otherwise).
3. **All visual QA** must use theme `#183028121915`.
4. **Never validate against another theme** unless the task explicitly names a different theme ID.
5. **Every audit report** must include the theme ID that was inspected.

## Local development

Point Shopify CLI at the canonical theme:

```bash
shopify theme dev --theme 183028121915
```

Push updates to the same theme:

```bash
shopify theme push --theme 183028121915
```

Do **not** assume the CLI “Development theme” (`#183127146811`) is the QA target.

## Deprecated development theme

| Field | Value |
|---|---|
| **Name** | Development (a6852b-LAPTOP-6GPJ5G08) |
| **Theme ID** | `183127146811` |
| **Status** | Legacy CLI dev theme — do not use for QA; safe to delete after milestone seal |

## Audit script default

Set `SP_PREVIEW_THEME_ID=183028121915` or hardcode this ID in capture/probe scripts.

Example preview base:

```
https://pulseops-labs.myshopify.com/?preview_theme_id=183028121915&view=supplement
```

## Verification checklist (before sign-off)

- [ ] Preview URL contains `preview_theme_id=183028121915`
- [ ] Report states theme ID explicitly
- [ ] Future Self: `presentation: future_self`, no transactional foot line, top gap = 0
- [ ] Canvas desktop geometry ≈ 16:9 (e.g. 1536×864 @ 1536 viewport)
