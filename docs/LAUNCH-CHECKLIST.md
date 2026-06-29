# PulseOps Supplement Demo — Launch Checklist

Governance checkpoint for launch readiness. Use after architecture freeze (`pulseops-architecture-v1`).

**Architecture authority:** [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md) — **LOCKED**

**Canonical theme:** PulseOps Supplement Demo `#183028121915`  
**Preview:** `https://pulseops-labs.myshopify.com/?preview_theme_id=183028121915&view=supplement`

---

## Status legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Complete / verified |
| 🔄 | In progress |
| ⬜ | Not started |
| — | Post-freeze polish (not a launch blocker) |

---

## A. Git / Release

| Item | Status | Notes |
|------|--------|-------|
| Working tree clean after milestone | ⬜ | Verify `git status` after seal |
| Tags pushed to origin | ⬜ | `pulseops-architecture-v1`, `supplement-composition-role-sharpening-v1` |
| Rollback points documented | ✅ | See [RELEASES.md](./RELEASES.md) |
| Architecture milestone tagged | ⬜ | `pulseops-architecture-v1` |
| Narrative milestone tagged | ✅ | `supplement-narrative-complete-v1` |

**Rollback tags (narrative arc):**

| Tag | Purpose |
|-----|---------|
| `pulseops-architecture-v1` | **Current** — platform architecture v1 LOCKED |
| `supplement-composition-role-sharpening-v1` | Sprint 7.2 + 7.2b composition and buyer journey |
| `supplement-narrative-complete-v1` | Full homepage narrative frozen |
| `supplement-restraint-pass-v1` | Sprint 7.1b mid-page restraint |
| `supplement-hero-frozen-v1` | Hero architecture freeze |
| `supplement-editorial-v2` | Future Self finale |
| `pulseops-visual-system-v1` | Visual System authority doc |

---

## B. Shopify Theme

| Item | Status | Notes |
|------|--------|-------|
| Canonical theme ID confirmed | ✅ | `#183028121915` — [CANONICAL-QA-THEME.md](./CANONICAL-QA-THEME.md) |
| Correct preview URL | ✅ | `?preview_theme_id=183028121915&view=supplement` |
| No duplicate QA themes | 🔄 | Legacy dev theme `#183127146811` — safe to delete |
| Theme check pass | ✅ | 0 errors (11 pre-existing warnings) |
| Remote theme synced with `main` | ✅ | Sprint 7.1c pushed to `#183028121915` |

---

## C. Homepage Narrative & Architecture

**Frozen as of `pulseops-architecture-v1`. No architecture redesign before launch.**

| # | Chapter | Role | Status |
|---|---------|------|--------|
| 1 | Hero | Arrival | ✅ Architecture frozen |
| 2 | Editorial Outcomes | Promise | ✅ Architecture frozen |
| 3 | Ingredients | Substance | ✅ Architecture frozen |
| 4 | Community Confidence | Habit adoption | ✅ Architecture frozen |
| 5 | Formulation Philosophy | Manifesto | ✅ Architecture frozen |
| 6 | Scientific Confidence | Evidence | ✅ Architecture frozen |
| 7 | Human Proof | Reflection | ✅ Architecture frozen |
| 8 | FAQ | Reassurance (utility whisper) | ✅ Architecture frozen |
| 9 | Future Self | Commitment | ✅ Architecture frozen |
| 10 | Footer | Brand close | ✅ Architecture frozen |

| Item | Status | Notes |
|------|--------|-------|
| Chapter order frozen | ✅ | `templates/index.supplement.json` |
| Buyer journey frozen | ✅ | [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md) §5 |
| Composition language frozen | ✅ | Sprint 7.2 · `sp-composition-system.css` |
| Chapter roles frozen | ✅ | [chapter-identity.md](./chapter-identity.md), [editorial-art-direction.md](./editorial-art-direction.md) |
| No new sections before launch | ✅ | Policy |
| No section reorder before launch | ✅ | Policy |
| No narrative copy rewrite before launch | ✅ | Policy — bug fixes only |

**Sprint history (architecture):**

- Sprint 7.1 — Hero proof reduction ✅
- Sprint 7.1b — Homepage restraint pass ✅
- Sprint 7.1c — Narrative ending polish ✅
- Sprint 7.2 — Composition language ✅
- Sprint 7.2b — Buyer journey role sharpening ✅
- Sprint 7.2.5 — Architecture freeze validation ✅

---

## D. Visual Craft Remaining

**Post-freeze polish — not narrative blockers. Do not block launch for these alone.**

| Area | Status | Notes |
|------|--------|-------|
| Composition language | ✅ | Sprint 7.2 complete — architecture frozen |
| Typography | — | Display scale refinement across chapters |
| Surfaces | — | Surface punctuation arc |
| Photography cohesion | — | Grade consistency across chapters |
| Interaction | — | Hover/focus craft beyond defaults |
| Motion | — | Reveal choreography (currently disabled on supplement demo) |

Authority: [pulseops-visual-system-v1.md](./pulseops-visual-system-v1.md)

---

## E. Core UX

| Item | Status | Notes |
|------|--------|-------|
| Header / nav | ⬜ | Desktop + mobile behavior |
| Mobile nav | ⬜ | Drawer, focus trap, close |
| PDP (`product.supplement.json`) | ⬜ | Gallery, buy box, trust |
| Cart drawer | ⬜ | Open/close, line items, checkout CTA |
| Sticky ATC | ⬜ | PDP scroll behavior |
| Checkout entry | ⬜ | Cart → checkout path |
| Search | ⬜ | Modal / results |
| Footer links | ⬜ | All navigate targets resolve |

---

## F. Performance

| Item | Status | Notes |
|------|--------|-------|
| Image sizes | ⬜ | Hero, Future Self, portrait assets |
| Lazy loading | ⬜ | Below-fold media |
| Video poster / fallback | ⬜ | If video sections enabled |
| Mobile page speed | ⬜ | Lighthouse / WebPageTest on canonical URL |

---

## G. Accessibility

| Item | Status | Notes |
|------|--------|-------|
| Contrast | ⬜ | FAQ, footer, Future Self CTA |
| Keyboard navigation | ⬜ | FAQ accordion, nav, cart |
| Focus states | ⬜ | Visible on all interactive elements |
| ARIA labels | ⬜ | Accordion, cart, nav |
| Reduced motion | ⬜ | `prefers-reduced-motion` respected |

---

## H. Merchant Readiness

| Item | Status | Notes |
|------|--------|-------|
| Settings labels | ⬜ | Section schema clarity |
| Schema clarity | ⬜ | Merchant can configure without docs |
| Demo content replaceability | ⬜ | Images, copy, links swappable |
| Image guidance | ⬜ | Aspect ratios documented per chapter |
| Documentation | 🔄 | Creative authority docs complete; merchant guide TBD |

---

## I. Theme Store / Commercial Readiness

| Item | Status | Notes |
|------|--------|-------|
| Screenshots | ⬜ | Desktop + mobile per preset |
| Demo URL | ✅ | Canonical preview URL documented |
| Pricing notes | ⬜ | TBD |
| Support docs | ⬜ | TBD |
| Known limitations | 🔄 | Motion disabled on supplement demo; legacy dev theme deprecated |

---

## Next recommended checkpoint

**Phase IV — Craftsmanship · Sprint IV.1 Typography Language**

Architecture is LOCKED per [`PULSEOPS-ARCHITECTURE-v1.md`](PULSEOPS-ARCHITECTURE-v1.md). Proceed with typographic voice per chapter within frozen composition silhouettes — no chapter order, buyer journey, or composition changes.

Parallel track: **Launch Checkpoint 1 — Core UX audit** (Section E) against theme `#183028121915`.

---

## Related docs

- [CANONICAL-QA-THEME.md](./CANONICAL-QA-THEME.md)
- [RELEASES.md](./RELEASES.md)
- [chapter-identity.md](./chapter-identity.md)
- [editorial-art-direction.md](./editorial-art-direction.md)
- [PULSEOPS-ARCHITECTURE-v1.md](./PULSEOPS-ARCHITECTURE-v1.md)
- [pulseops-visual-system-v1.md](./pulseops-visual-system-v1.md)
