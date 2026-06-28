# PulseOps Supplement Demo — Launch Checklist

Governance checkpoint for launch readiness. Use after narrative freeze (`supplement-narrative-complete-v1`).

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
| Tags pushed to origin | ⬜ | `supplement-narrative-complete-v1` |
| Rollback points documented | ✅ | See [RELEASES.md](./RELEASES.md) |
| Narrative milestone tagged | ✅ | `supplement-narrative-complete-v1` |

**Rollback tags (narrative arc):**

| Tag | Purpose |
|-----|---------|
| `supplement-narrative-complete-v1` | **Current** — full homepage narrative frozen |
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

## C. Homepage Narrative

**Frozen as of `supplement-narrative-complete-v1`. No narrative redesign before launch.**

| # | Chapter | Role | Status |
|---|---------|------|--------|
| 1 | Hero | Arrival | ✅ Frozen |
| 2 | Editorial Outcomes | Promise | ✅ Frozen |
| 3 | Ingredients | Substance | ✅ Frozen |
| 4 | Community Confidence | Social proof (restrained) | ✅ Frozen |
| 5 | Formulation Philosophy | Manifesto | ✅ Frozen |
| 6 | Scientific Confidence | Evidence | ✅ Frozen |
| 7 | Human Proof | Reflection | ✅ Frozen |
| 8 | FAQ | Reassurance (utility whisper) | ✅ Frozen |
| 9 | Future Self | Commitment | ✅ Frozen |
| 10 | Footer | Brand close | ✅ Frozen |

| Item | Status | Notes |
|------|--------|-------|
| Chapter order frozen | ✅ | `templates/index.supplement.json` |
| Chapter roles frozen | ✅ | See [chapter-identity.md](./chapter-identity.md), [editorial-art-direction.md](./editorial-art-direction.md) |
| No new sections before launch | ✅ | Policy |
| No section reorder before launch | ✅ | Policy |
| No narrative copy rewrite before launch | ✅ | Policy — bug fixes only |

**Sprint history (narrative):**

- Sprint 7.1 — Hero proof reduction ✅
- Sprint 7.1b — Homepage restraint pass ✅
- Sprint 7.1c — Narrative ending polish ✅

---

## D. Visual Craft Remaining

**Post-freeze polish — not narrative blockers. Do not block launch for these alone.**

| Area | Status | Notes |
|------|--------|-------|
| Composition language | — | Mid-page split-layout silhouette repetition |
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

**Launch Checkpoint 1 — Core UX audit**

After narrative freeze, run a full Core UX pass (Section E) against theme `#183028121915`:

1. Header / mobile nav / anchor scroll
2. PDP supplement template end-to-end
3. Cart drawer + checkout entry
4. Footer link resolution

Capture Playwright at desktop `1536×1024` and mobile `390×844`. File issues as craftsmanship or UX bugs — not narrative redesigns.

---

## Related docs

- [CANONICAL-QA-THEME.md](./CANONICAL-QA-THEME.md)
- [RELEASES.md](./RELEASES.md)
- [chapter-identity.md](./chapter-identity.md)
- [editorial-art-direction.md](./editorial-art-direction.md)
- [pulseops-visual-system-v1.md](./pulseops-visual-system-v1.md)
