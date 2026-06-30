# Photography Systems

**Phase:** IV.3C - Photography Systems
**Status:** Documentation only - no implementation
**Foundation:** [`photography-language.md`](photography-language.md)
**Expression:** [`photography-expression.md`](photography-expression.md)
**Frozen dependencies:** Architecture, Narrative, Composition, Typography, Surface, Photography Foundation, Photography Expression

---

## Purpose

Photography Systems defines the repeatable governance that makes the Photography Language executable across PulseOps verticals.

Foundation answers: *why does PulseOps photograph this way?*

Expression answers: *what photographic identity does each chapter own?*

Systems answers: *how are photography decisions made consistently?*

This document is the bridge between creative direction and future implementation. It does not define CSS, Liquid, aspect ratios, pixel sizes, object-position values, image optimization, lazy loading, performance rules, CDN behavior, Shopify implementation, merchant onboarding, or production pipelines.

---

## System Authority

Photography governance follows this authority order:

```
Photography Foundation
  ->
Photography Expression
  ->
Photography Systems
  ->
Implementation
  ->
Merchant Assets
```

Photography Foundation governs philosophy. It decides what PulseOps photography believes, values, and rejects.

Photography Expression governs chapter identity. It decides what each homepage chapter is allowed to feel like photographically.

Photography Systems governs repeatable decisions. It decides how roles, hierarchy, ownership, exceptions, QA, and cross-vertical translation are judged.

Implementation must follow Systems. It may solve technical constraints, but it must not redefine philosophy or chapter identity.

Merchant assets must adapt to the language rather than changing the language. If available assets do not fit the system, the correct response is to choose, request, generate, or omit imagery under governance rather than weaken the Photography Language.

---

## 1. Photography System Philosophy

Photography Systems exists to remove subjective implementation decisions while preserving creative intent.

Without systems, each vertical could reinterpret the Photography Foundation differently. A supplement page might treat evidence as ingredients, a coffee page might treat evidence as sourcing, and an electronics page might treat evidence as engineering. Those differences are correct, but the decision logic must remain stable.

The system protects three things:

1. **Chapter identity:** every image must serve the chapter role defined in Photography Expression.
2. **Narrative continuity:** photography must move through the page as one editorial journey.
3. **Cross-vertical consistency:** different product categories may change subjects, but not the underlying photographic language.

Photography Systems should make decisions clearer for designers, engineers, merchants, AI tooling, and QA. It should not make photography generic. The goal is repeatable judgment, not template sameness.

---

## Photography Exceptions

Exceptions are allowed when reality limits expression, not when preference wants to bypass governance.

The system may bend when a merchant has limited assets, only one product image exists, people photography is unavailable, the product category is industrial, the category is highly regulated, the brand is luxury-minimal, or the product would become less truthful if forced into a standard photographic pattern.

Flexibility is acceptable when it preserves the chapter owner, narrative role, and product truth. It is not acceptable when it replaces chapter identity with whatever imagery happens to be available.

An exception should make the system quieter, clearer, or more honest. It should never make the system more generic.

---

## 2. Image Role Taxonomy

Image roles describe why an image exists before anyone decides how it will appear.

| Image Role | Purpose | Owner | Priority | Narrative Responsibility |
|------------|---------|-------|----------|--------------------------|
| Hero Image | Establish immediate recognition and premium trust. | Product | Primary | Make the visitor understand what the product is and why the world feels credible. |
| Editorial Image | Turn a claim into a believable observed moment. | Story | Primary or secondary | Show life-fit, routine, transformation, or consequence without exaggeration. |
| Lifestyle Image | Show the product inside a real human environment. | Person or environment | Secondary | Make use feel plausible and emotionally grounded. |
| Product Image | Clarify product form, packaging, scale, or presence. | Product | Primary or supporting | Preserve product truth and recognition. |
| Ingredient Image | Present substance as evidence. | Object | Primary | Make materials feel legible, specific, and intentionally selected. |
| Scientific Image | Document verification, process, or technical credibility. | Evidence | Primary | Make trust accountable without fake laboratory theater. |
| Portrait Image | Give a person dignity, specificity, and human presence. | Person | Primary | Support identification without performance. |
| Supporting Image | Add context without taking chapter ownership. | Context | Supporting | Enrich the primary image role while remaining subordinate. |
| Atmospheric Image | Carry emotional resolution through place, light, and environment. | Environment | Primary or secondary | Create aspiration only after the narrative has earned it. |
| Utility Image | Clarify a practical question only when image support is necessary. | Function | Supporting or absent | Help utility, never decorate it. |
| Brand Image | Close or reinforce the brand world without restarting persuasion. | Brand | Supporting or absent | Preserve continuity and quiet trust. |

### Role Rules

- A role is not a file type, section type, or layout instruction.
- A role may appear differently across verticals while keeping the same responsibility.
- Primary roles must be protected from visual competition.
- Supporting roles must clarify, not decorate.
- Decorative imagery is not a PulseOps role.

---

## 3. Chapter Image Ownership

This matrix governs which image roles belong to each homepage chapter.

| Chapter | Primary Image Role | Secondary Image Role | Photography Owner | Supporting Language |
|---------|--------------------|----------------------|-------------------|---------------------|
| Hero | Hero Image | Product Image / Atmospheric Image | Product | Typography |
| Editorial Outcomes | Editorial Image | Lifestyle Image / Product Image | Person | Narrative |
| Ingredients | Ingredient Image | Product Image / Supporting Image | Object | Surface |
| Community Confidence | Portrait Image / Supporting Image | Utility Image / Absent | Collective | Typography |
| Formulation Philosophy | Editorial Image / Supporting Image | Ingredient Image / Product Image | Words and craft | Typography |
| Scientific Confidence | Scientific Image | Product Image / Supporting Image | Evidence | Composition |
| Human Proof | Portrait Image | Lifestyle Image / Product Image | Person | Typography |
| FAQ | Absent / Utility Image | Brand Image | Typography | Silence |
| Future Self | Atmospheric Image | Lifestyle Image / Product Image | Environment | Narrative |
| Footer | Brand Image / Absent | Utility Image | Brand | Surface |

The ownership matrix is canonical. If a future vertical changes the image subject, it must still preserve the chapter owner and role relationship.

---

## Decision Ownership

Photography decisions should have clear owners so governance does not become subjective debate.

| Decision | Owner |
|----------|-------|
| Photography philosophy | Creative Direction |
| Chapter identity | Photography Expression |
| System governance | Photography Systems |
| Implementation feasibility | Engineering |
| Merchant assets | Merchant |
| Compliance constraints | QA |
| AI enhancement | AI under governance |
| Final image acceptance | QA against frozen language |

Ownership does not mean isolation. Engineering, merchants, AI tooling, and QA may reveal constraints, but constraints do not change the governing language. When decisions conflict, System Authority resolves the conflict.

---

## 4. Photographic Hierarchy

Photographic hierarchy defines how much authority an image may carry.

### Primary

Primary imagery owns the chapter's visual attention. It should be used when photography is responsible for recognition, belief, evidence, verification, human proof, or emotional resolution.

Primary imagery may dominate when the chapter owner is product, person, object, evidence, or environment.

### Secondary

Secondary imagery supports the chapter without taking command. It may explain context, imply environment, clarify scale, or add human presence.

Secondary imagery should yield when typography or surface has authority.

### Supporting

Supporting imagery provides texture or context. It is useful only when it makes the primary role clearer.

Supporting imagery should be removed if it creates confusion, redundancy, or visual noise.

### Decorative

Decorative imagery is not part of the PulseOps photography system.

If an image only adds beauty, fills space, or makes a section feel more designed, it should be rejected.

### Absent

Absence is a valid hierarchy state.

Photography should intentionally disappear when utility, typography, brand closure, or visual silence has greater authority than image presence.

---

## 5. Composition Zones

Composition zones are conceptual regions inside a photograph or photographic moment. They are not layout rules and do not define pixel values.

### Primary Subject Zone

The part of the image where the chapter owner becomes clear.

In Hero, this is product recognition. In Ingredients, it is object authority. In Human Proof, it is the person. In Future Self, it is the environment.

### Supporting Context

The information around the subject that explains why it matters.

Context may include routine, tools, material, environment, light, documentation, or human scale. It should explain the subject without competing with it.

### Breathing Space

Intentional quiet that lets the image feel premium and legible.

Breathing space is not leftover emptiness. It is restraint that helps the visitor understand what matters.

### Typography Accommodation

Visual quiet that allows type to retain authority when type is the chapter owner or co-owner.

This does not prescribe placement. It means the photograph must not fight the reading experience.

### Environmental Field

The broader world that gives product, person, object, or evidence a believable setting.

The environmental field should grow richer only when the narrative has earned atmosphere.

### Negative Space

Absence inside or around the image that gives the subject authority.

Negative space protects clarity, premium restraint, and chapter pacing.

---

## 6. Crop Philosophy

Photography Systems does not define crops.

It defines the principles that future crop decisions must respect:

- Recognition before drama.
- Truth before aesthetics.
- Environment should explain, not distract.
- Avoid accidental ambiguity.
- Respect subject ownership.
- Preserve chapter meaning across contexts.
- Never use a tighter view if it removes the evidence the chapter needs.
- Never use a wider view if it weakens the chapter owner.

The correct photographic view is the one that protects meaning. Beauty is secondary to chapter clarity.

---

## 7. Focal Point Philosophy

Photography Systems does not define focal-point values.

It defines what deserves attention.

| Chapter Type | Attention Belongs To | Attention Should Avoid |
|--------------|----------------------|------------------------|
| Hero | Product | Decorative environment that delays recognition |
| Editorial | Person and routine | Product overstatement |
| Ingredients | Ingredient, object, material | Prop styling without evidence |
| Community | Collective trust | Testimonial performance |
| Formulation | Words, craft, intentional objects | Busy workshop theater |
| Scientific | Evidence and process | Fake lab spectacle |
| Human Proof | Person and routine | Emotional performance |
| FAQ | Questions and answers | Image-led persuasion |
| Future Self | Environment | Unrealistic fantasy |
| Footer | Brand closure | New visual desire |

Attention should follow narrative responsibility. If the visitor notices the wrong thing first, the image is misgoverned.

---

## 8. Responsive Photography Philosophy

Responsive photography must preserve meaning before preserving composition.

This section defines conceptual priorities only. It does not define breakpoints, responsive CSS, image sizes, or object-position values.

### Desktop

Desktop may preserve more environmental information because there is room for context, atmosphere, and photographic pacing.

The question is: *what relationship is the image asking the visitor to understand?*

### Tablet

Tablet should preserve subject ownership and enough context to keep the chapter role intact.

The question is: *what can be simplified without changing the chapter's meaning?*

### Mobile

Mobile must preserve the chapter owner.

The question is: *what must never disappear for the image to remain truthful?*

Product recognition, human dignity, ingredient evidence, scientific credibility, and emotional resolution must not be sacrificed for visual drama.

### Responsive Tradeoff Rules

- Meaning may simplify; meaning must not change.
- Context may reduce; ownership must remain clear.
- Atmosphere may become quieter; evidence must remain credible.
- Product may be supported by environment; product truth must not disappear.
- Utility chapters should remain visually quiet on every device class.

---

## 9. Merchant Photography Guidance

Merchant photography guidance is high-level at this phase. It is not a checklist, onboarding process, production brief, or upload specification.

Merchants should expect PulseOps to need photography that can support these categories of meaning:

### Product

The product must be recognizable, truthful, and premium without becoming sterile.

### Lifestyle

Lifestyle photography should show believable use, routine, or consequence. It should feel observed rather than performed.

### People

People should appear with dignity and specificity. They should not act out exaggerated transformation.

### Ingredients

Ingredients should be photographed as evidence. They should clarify material truth, not decorate the page.

### Environment

Environment should explain belonging. It should show where the product lives, what it touches, or what atmosphere it earns.

### Scientific

Scientific photography should support verification. It should show real process, documentation, or technical credibility without theatrical fakery.

### Brand

Brand photography should provide continuity and quiet trust. It should not restart the sales argument.

The merchant's responsibility is not to provide every possible image type. It is to provide truthful material that can be governed by the chapter system.

---

## 10. AI Photography Philosophy

AI may support Photography Systems, but it must not replace photographic truth.

AI should improve consistency, help explore direction, and support repeatable governance. It must never fabricate trust, invent evidence, misrepresent product, create false scientific credibility, or manufacture people who imply real testimony.

AI use must respect five principles:

1. Preserve authenticity.
2. Protect product truth.
3. Respect chapter identity.
4. Enhance rather than replace photography.
5. Never create evidence the brand cannot substantiate.

AI should be treated as a consistency aid, not an authority. The frozen Photography Foundation and Expression documents remain the authority.

---

## 11. Photography QA Philosophy

Photography QA evaluates whether an image belongs.

QA should ask:

- Does the image strengthen the chapter?
- Does it clarify the chapter owner?
- Does it compete with typography?
- Does it support the frozen narrative?
- Does it respect the composition role?
- Does it belong to the surface language around it?
- Does it preserve the Photography Foundation principles?
- Does it express the Photography Expression chapter identity?
- Does it feel truthful?
- Does it add evidence, belief, intimacy, utility, atmosphere, or closure?
- Would another image better express this chapter?

QA should not score images at this phase. The goal is governed judgment: accept images that clarify the system, reject images that confuse it.

---

## How Photography Systems Fail

Photography can fail even when the image is beautiful.

Common failure modes:

- **Wrong chapter:** the image belongs to a different narrative moment.
- **Wrong owner:** the visitor notices the supporting subject before the chapter owner.
- **Wrong narrative:** the image tells a story the page is not telling.
- **Wrong emotional temperature:** the mood is too loud, too cold, too polished, or too sentimental for the chapter.
- **Wrong hierarchy:** photography dominates when typography, surface, utility, or silence should lead.
- **Wrong transition:** adjacent chapters repeat the same photographic relationship.
- **Wrong silence:** imagery appears where absence would create more authority.
- **Wrong evidence:** an image suggests proof the brand cannot substantiate.
- **Wrong atmosphere:** aspiration appears before the narrative has earned it.

These failures weaken the system because they break trust between the frozen languages. A failed image may still be attractive, but it makes the page harder to believe.

---

## 12. Photography Decision Framework

Use this framework whenever selecting, reviewing, generating, replacing, or approving photography.

```
Does it clarify the chapter?
  No -> Replace image.
  Yes ->

Does it strengthen the narrative?
  No -> Replace image.
  Yes ->

Does it respect ownership?
  No -> Replace image.
  Yes ->

Does it support the frozen languages?
  No -> Replace image.
  Yes ->

Does it feel truthful?
  No -> Replace image.
  Yes -> Use image.
```

### Decision Notes

- If an image is beautiful but does not clarify the chapter, replace it.
- If an image is accurate but weakens narrative, replace it.
- If an image is expressive but competes with typography, replace it.
- If an image creates false evidence, replace it.
- If an image requires explanation to justify its presence, replace it.

The right image should make the chapter easier to understand.

---

## 13. Cross-Vertical Consistency

Photography Systems applies across verticals without changing the underlying Photography Language.

The subject changes. The decision logic does not.

| Vertical | Product Truth | Evidence Form | Human Context | Atmosphere |
|----------|---------------|---------------|---------------|------------|
| Supplement | Packaging, serving, ingredients | Formula, ingredient, process | Morning ritual, wellness routine | Calm energy and trust |
| Coffee | Bag, cup, brew method | Origin, roast, grind, brew | Kitchen, cafe, morning habit | Warmth, craft, sensory depth |
| Skincare | Packaging, texture, application | Ingredients, skin compatibility, routine | Bathroom, mirror, touch | Clean intimacy and softness |
| Electronics | Device, interface, materials | Engineering, detail, precision | Work, home, mobility | Control, clarity, confidence |
| Lifestyle | Object, use, setting | Material, craft, daily value | Home, travel, personal routine | Belonging and aspiration |
| Outdoor | Gear, terrain, durability | Weather, material, field use | Movement, preparation, journey | Openness and resilience |
| Pet | Product, animal scale, use | Safety, comfort, material | Pet and owner relationship | Warmth, trust, care |
| Creator | Tool, output, workspace | Process, craft, proof of work | Studio, desk, performance of making | Focus, identity, momentum |

A supplement Ingredient chapter may show botanical material. A coffee Ingredient chapter may show beans, roast, or grind. A skincare Ingredient chapter may show texture or formulation. The role remains the same: object as evidence.

A supplement Future Self chapter may show calm wellness. An outdoor Future Self chapter may show landscape. A creator Future Self chapter may show a finished work environment. The role remains the same: atmosphere as earned resolution.

Cross-vertical consistency means the language survives translation.

---

## Lifecycle Governance

Photography follows the same craftsmanship lifecycle used by the broader PulseOps design system.

```
Photography Foundation
  ->
Photography Expression
  ->
Photography Systems
  ->
Implementation
  ->
QA
  ->
Restraint
  ->
Freeze
```

Foundation defines why the language exists.

Expression defines what each chapter owns.

Systems defines how decisions are governed.

Implementation translates governance into buildable behavior without reopening frozen intent.

QA verifies that images, behavior, and assets still serve the frozen language.

Restraint removes excess, resolves noise, and protects premium quiet.

Freeze makes the language stable so future work builds on it rather than revising it casually.

This lifecycle is reusable for future design languages: establish philosophy, define expression, govern decisions, implement carefully, verify, reduce, and freeze.

---

## Out Of Scope For IV.3C

- Aspect ratios
- Pixel sizes
- Crop systems
- Responsive CSS
- Object-position
- Image optimization
- Lazy loading
- Performance
- CDN behavior
- Shopify implementation
- Merchant onboarding
- AI prompting
- Production pipelines
- CSS changes
- Liquid changes
- Asset changes
- Homepage redesign

---

## Definition Of Done

Photography Systems is complete when it explains how photography decisions are governed across roles, chapters, hierarchy, composition, responsive meaning, merchant inputs, AI support, QA review, and vertical translation.

Future Photography implementation work must build from this systems document without reopening Foundation philosophy or Expression chapter identity.
