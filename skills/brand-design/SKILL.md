---
name: brand-design
description: >-
  Turn positioning into a complete, buildable brand + design system — brand attributes/personality and
  a "we are / we are not"; a visual identity (logo direction, color palette with hex + usage ratios, a
  type system, imagery direction); design tokens that paste straight into the `starters/saas`
  Tailwind/shadcn config; a component spec; an asset-production workflow (Canva MCP + `canvas-design` +
  `dataviz`); and a lightweight brand bible — so every surface looks world-class without design being the
  founder's bottleneck. Use after `/positioning` and `/naming-brand`, before building a page, deck,
  product UI, or marketing asset, or when a surface looks off-brand, inconsistent, or amateur. WCAG AA
  baked in; original designs only; drafts only. Triggers: "brand system", "design system", "brand kit",
  "color palette", "typography", "design tokens", "make this look premium", "logo direction",
  "style guide", "brand bible", "this looks off / amateur / inconsistent".
---

# /brand-design — Brand & Design System

Fills the founder's design blind spot. Turns a venture's positioning + name into a world-class, *buildable* brand and design system: the brand foundation, a visual identity, design tokens that drop straight into the product starter, a component spec, and an asset-production workflow that routes every asset to the right engine — so every surface looks premium without design becoming the thing that stalls the ship. Reads `/positioning` (the SOURCE of the brand attributes) and `/naming-brand` (name + verbal identity); feeds `starters/saas` (tokens + components) and the marketing/social skills (`/landing-funnel`, `/content-engine`, `/paid-ads`, `/seo-geo`). Industry-agnostic — the aesthetic is read from the venture, never hard-coded.

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/voice-and-brand.md` (register, power words, **banned words** — the verbal filter on every word the brand ships), `founder-profile/guardrails.md` (drafts only · LYV firewall · claims · original-work).
2. Active `ventures/<slug>/venture-context.md` — industry, ICP, wedge, any brand delta, and any existing brand kit / assets on hand.
3. Latest `/positioning` (category, segment, value, messaging pillars) and `/naming-brand` (name + verbal-identity cues), if they exist. **Pull** the positioning; never invent a brand in a vacuum here.
4. `starters/saas/` — `tailwind.config.ts` + `src/index.css` — as the token hand-off target, whenever the venture will build product.

## Method (full detail, token map, bible template + worked example in `references/method.md`)
Six layers, each building on the last:
1. **Brand foundation** — derive 3–5 **brand attributes** from the positioning pillars; a **personality** (archetype + any voice delta on the Founder default); the **target psychology** (the identity the buyer is buying); and a **"we are / we are not"** + do/don't table. (Generalizes the pattern in Tony's Executive Edge Brand Bible: essence · target psychology · we-are/we-are-not.)
2. **Visual identity** — **logo direction** (concept + wordmark/lettermark/symbol options, clear-space + min-size; original only), a **color palette** (hex + role + **60/30/10 usage ratios** + WCAG-checked pairs), a **type system** (display/body/mono pairing + a modular scale), and **imagery direction**.
3. **Design tokens** — resolve palette/space/type into shadcn/ui variables: a ready-to-paste `:root` + `.dark` block in the starter's exact **`H S% L%`** format, plus `--radius`, a space scale, a type scale, and chart tokens. Pastes into `starters/saas/src/index.css` with no rework.
4. **Component / design-system spec** — buttons, forms, cards, data displays, badges/stat tiles — each mapped to a shadcn/ui primitive with its variants, sizes, and interaction states. Hand to `/design-system` to document/extend.
5. **Asset-production workflow** — the routing tree: which engine makes which asset. **Canva MCP** (marketing/social + branded templates; the Canva brand kit mirrors this system), **`canvas-design`** (bespoke static art / posters / PDFs), **`dataviz`** (charts/dashboards — swap its palette for the tokens), the **`design:*`** pack (design-system, design-critique, accessibility-review, ux-copy), **Lucid MCP** (diagrams).
6. **Brand governance** — a lightweight **brand bible** (the single source of truth) + where each source lives (Canva brand kit for marketing, repo tokens for product) so the system stays consistent as cheaper models run it.

## Output contract
A venture's **brand + design system**, in one document, ready to feed the starter and the marketing/social skills:
- **Brand foundation** — attributes · personality (archetype + voice delta) · target psychology · we-are/we-are-not · do/don't.
- **Visual identity** — logo direction; **palette table** (role · hex · `H S% L%` · usage % · on-color that passes · contrast ratio); type system (pairing + scale); imagery direction.
- **Design tokens** — a paste-ready `:root` + `.dark` HSL block + `--radius` (starter-compatible), plus space / type / chart scales.
- **Component spec** — table: component · shadcn primitive · variants · sizes · states · notes.
- **Asset-production workflow** — the routing tree (asset → engine → skill/MCP → source of truth → gate) + governance.
- **Brand bible** — the lightweight template, filled.

Every color pairing carries a **WCAG AA pass/fail** note; everything is a **draft**.

## Rules (guardrails woven in)
- **Original designs only.** Never copy or closely imitate an existing artist's or brand's identity, logo, layout, or imagery (copyright). Reference *direction* — mood, era, principle — never artwork or a specific mark. `canvas-design` enforces the same rule; echo it on every asset.
- **Drafts only; $0.** Canva/asset exports, brand-kit edits, font licenses, stock, and any purchase are drafts/proposals — Tony approves. Nothing is bought, published, or made-live here.
- **Voice is a hard filter** on every word the brand ships (taglines, UX copy, captions): clinical, precise, premium. Power words yes; the **banned register** (`journey`, `wellness`-as-vibe, `holistic`, `hack`(n.), `revolutionary`, `game-changer`, `guru`, hype) is auto-rejected — in visuals as well as copy.
- **Positioning-driven.** Attributes derive from the `/positioning` pillars. If positioning is missing, produce a *provisional* frame and flag it — don't guess a brand from nothing.
- **WCAG AA is non-negotiable.** Body text ≥ 4.5:1, large text (≥ 24px, or ≥ 18.66px bold) and UI/graphical objects ≥ 3:1, focus indicators ≥ 3:1 against adjacent colors. Every pairing is validated (route to `/accessibility-review`). An inaccessible pair is never shipped as final.
- **Token hand-off is exact.** Tokens use the starter's shadcn variable names and `H S% L%` format so they paste in without rework. Extend the config (add a brand ramp / chart tokens); never fork it.
- **Industry-agnostic.** Read the aesthetic from the venture context; never hard-code a category's look. Respect venture claims guardrails (e.g., EE: no medical claims; never "physician review"/"medical team"; never imply a live team/cohort dashboard pre-contract in any asset).
- **LYV firewall.** Never reuse LYV brand assets, kits, fonts, or audiences for a solely-owned venture.

## Tools & handoffs (this module orchestrates a stack)
- **Canva MCP** — `list-brand-kits` · `create-brand-template-draft` · `generate-design(-structured)` · `export-design` · `resize-design`: marketing + social assets built from the tokens; the Canva brand kit is the marketing-side mirror of this system.
- **`canvas-design`** skill — bespoke static art / posters / one-pagers / PDFs (original, never copied).
- **`dataviz`** skill — charts, stat tiles, dashboards; swap its `references/palette.md` for this system's chart tokens so viz reads as one brand.
- **`design:*`** pack — `design-system` (document/extend the component spec) · `design-critique` (review a surface) · `accessibility-review` (WCAG audit) · `ux-copy` (microcopy in-voice) · `design-handoff` (dev spec).
- **Lucid MCP** — brand-architecture / system diagrams.
- **Feeds:** `starters/saas` (tokens + components) and `/landing-funnel` · `/content-engine` · `/paid-ads` · `/seo-geo` · `/content-cadence`.

## Examples & evals
- `references/method.md` — the full six-layer method, the shadcn token-mapping table, the brand-bible template + a worked example (Executive Edge, generalized from Tony's Brand Bible).
- `evals/evals.md` — 3 cases (venture with context · net-new no-context / industry-agnostic · a contrast-fail + off-voice + copied-brand catch).
