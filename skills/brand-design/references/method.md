# /brand-design — Full method & worked example

One level deep; does not fan out further. Lenses: **positioning → brand** (Dunford — attributes are earned from the positioning, not asserted); the **shadcn/ui + Tailwind token model** (the starter's contract); **WCAG 2.1 AA**; and the **Executive Edge Brand Bible pattern**, generalized (essence · target psychology · we-are/we-are-not). **Original designs only** — reference direction, never another party's artwork or mark.

## First principle: brand is downstream of positioning, upstream of every surface

A brand system that starts from "what colors do we like" is vibes, and it fails Tony's standard (finished asset, not a mood board). Start from the `/positioning` pillars: each pillar implies an attribute, each attribute implies a visual and verbal decision, and those decisions resolve into **tokens and components** a cheaper model can build with — and a **workflow** that routes every asset to the right engine. The output is one document that hands off cleanly in two directions: **into the product** (`starters/saas` tokens + component spec) and **into marketing** (Canva brand kit + the social/content skills).

Ship the tokens + the six core components first; extend on demand. Designing the whole system before one page ships is the standards-as-bottleneck / overbuild failure mode wearing a designer's hat.

---

## Layer 1 — Brand foundation (positioning → brand)

### Attributes (3–5), derived from the pillars
Map each positioning pillar to one attribute; keep 3–5. An attribute is an adjective the brand can be *held to* across every surface, not a feeling.

| Positioning pillar | Brand attribute | What it forces in the design |
|---|---|---|
| <pillar 1 / the wedge> | <attribute> | <a concrete visual/verbal rule> |
| … | … | … |

### Personality
- **Archetype** (one primary, at most one secondary — e.g., Sage, Ruler, Creator, Everyman). The archetype sets tone; it is not a costume.
- **Voice** — the Founder default (clinical / precise / premium) **plus any venture delta** from the context. State two do's and two don'ts.
- **A one-line "brand-as-a-person"** — the ceiling image (EE's *"a brilliant physician who also runs a hedge fund"* is the model: expert, exact, composed, never salesy).

### Target psychology
What identity is the buyer *buying*? Name the self-image the brand must reflect and the fear coded underneath it (state the fear in the buyer's own language, not the category's). This is what makes premium land: the buyer sees themselves at their aspired level.

### "We are / we are not" (the fastest alignment tool)
A two-column table any operator can apply in five seconds. Generalize EE's pattern.

| We are | We are not |
|---|---|
| <on-brand adjective / behavior> | <the adjacent thing we refuse to be> |
| … | … |

### Do / don't
Six to ten rules that turn the above into checkable design behavior (e.g., "Do lead with the measured result; Don't decorate with unmotivated gradients").

---

## Layer 2 — Visual identity

### Logo direction (concept, not final art)
- **Direction:** wordmark · lettermark/monogram · symbol + wordmark — pick a lane and say why it fits the attributes.
- **Construction rules:** clear-space (e.g., ≥ the cap-height on all sides), minimum size (px for screen, mm for print), one-color + reversed (knockout) variants, and a favicon/app-icon reduction.
- **What to avoid:** effects that read cheap (bevels, drop shadows, unmotivated gradients), and anything that imitates a known mark.
- **Original only:** describe the *direction* for a designer or `canvas-design` to originate. Never trace, recreate, or "make it like <brand>." If the venture has no mark yet, a clean set wordmark in the type system is a legitimate v1 — ship it, commission the symbol later.

### Color palette (hex + roles + usage ratios + WCAG)
Assign **roles**, not just colors — roles are what tokens map to:

| Role | Purpose |
|---|---|
| **Ink / foreground** | Primary text; the darkest brand-consistent value. |
| **Surface / background** | The canvas; usually a near-neutral, not pure white unless intended. |
| **Primary** | The main action / brand ink for buttons and emphasis. |
| **Secondary** | Supporting brand color; large fills, secondary actions. |
| **Accent** | The scarce pop — used at ~10%; scarcity *is* the premium signal. |
| **Neutrals ramp** | 6–10 steps for borders, muted text, surfaces, dividers. |
| **Semantic** | success · warning · destructive · info — consistent meaning, never decorative. |

- **Usage ratio — 60 / 30 / 10:** ~60% dominant neutral/surface, ~30% secondary/brand, ~10% accent. Over-using the accent kills the premium read; that's the single most common founder mistake (rainbow palette).
- **WCAG AA pairs (validate every pairing):** body text **≥ 4.5:1**, large text (≥ 24px or ≥ 18.66px bold) and UI/graphical objects **≥ 3:1**, focus indicators **≥ 3:1** against adjacent colors. Compute the ratio (relative-luminance formula) or route to `/accessibility-review`; do not eyeball it.
- A saturated accent frequently **passes on a dark background and fails on a light one** — a real constraint, not a preference. When it fails as text, use it as a *fill with dark text on it*, or as a large/graphic element only, and pick a darker ramp step for on-light text.

Palette table (this is the deliverable):

| Role | Hex | `H S% L%` | Usage % | Safe on-color (passes AA) | Ratio | Notes |
|---|---|---|---|---|---|---|
| … | … | … | … | … | … | … |

### Typography system
- **Pairing:** a **display** face (headlines), a **body** face (UI + long-form; often the same family for cohesion), and optionally a **mono** (data, code, precision cues). Prefer high-quality system stacks or open web fonts; **licensed/paid fonts = spend = Tony's approval**.
- **Modular scale** (ratio 1.200–1.333). Steps → rem → the Tailwind `text-*` utility → use:

| Step | rem / px | Tailwind | Use |
|---|---|---|---|
| Display | 3.815rem / 61px | `text-6xl` | Hero |
| H1 | 3.052rem / 49px | `text-5xl` | Page title |
| H2 | 2.441rem / 39px | `text-4xl` | Section |
| H3 | 1.953rem / 31px | `text-3xl` | Subsection |
| H4 | 1.563rem / 25px | `text-2xl` | Card title |
| Lead | 1.25rem / 20px | `text-xl` | Intro / emphasis |
| Body | 1rem / 16px | `text-base` | Default (never < 16px for body on web) |
| Small | 0.8rem / 13px | `text-sm` | Captions, labels |
| Micro | 0.64rem / 10px | `text-xs` | Legal, overlines (use sparingly) |

- **Rules:** line-height ~1.5 for body / ~1.1–1.25 for display; measure (line length) 60–75ch; tracking tight on display, normal on body; weights limited to 2–3 (e.g., 400 / 500 / 600). Sentence case for headlines (brand names excepted) per the Founder voice.

### Imagery direction
- **Mode:** photography · illustration · data-as-hero · abstract/textural — pick per the attributes; state treatment (color grade, contrast, crop, grain), subject, and composition.
- **Avoid:** stock cliché, banned-register visuals (soft-focus "wellness," lifestyle-guru tropes), and anything derivative of a known brand's art direction.
- **Sourcing:** original (`canvas-design`, commissioned, or product screenshots) or properly licensed. Licensed stock = spend = approval.

---

## Layer 3 — Design tokens (the clean hand-off to `starters/saas`)

**How the starter consumes tokens (the contract you must match).** `starters/saas/tailwind.config.ts` maps utilities to `hsl(var(--token))`; `starters/saas/src/index.css` defines each `--token` as **`H S% L%`** (space-separated, **no** `hsl()` wrapper) inside `:root` (light) and `.dark` (dark). So the token deliverable is exactly that variable set, in both blocks, plus `--radius`. Matching the names + format means it **pastes in with zero rework** — that is the whole point.

**Mapping — palette role → shadcn token:**

| shadcn token | Role it takes | Light | Dark |
|---|---|---|---|
| `--background` / `--foreground` | Surface / Ink | surface → ink | ink → surface |
| `--card` / `--card-foreground` | Elevated surface | white/near-white → ink | elevated-navy → surface |
| `--popover` / `--popover-foreground` | Overlays | = card | = card |
| `--primary` / `--primary-foreground` | Primary action | Ink → surface | Accent → ink *(accent carries primary on dark; see note)* |
| `--secondary` / `--secondary-foreground` | Secondary surface/action | tint of neutral → ink | slate → surface |
| `--muted` / `--muted-foreground` | Muted surface + muted text | neutral → muted-ink (≥4.5:1) | slate → muted-surface (≥4.5:1) |
| `--accent` / `--accent-foreground` | Subtle hover / brand pop fill | accent fill → text that passes on it | slate → surface |
| `--destructive` / `--destructive-foreground` | Danger | red → white | red → white |
| `--border` / `--input` | Lines, field borders | neutral-200 | slate |
| `--ring` | Focus indicator (**≥3:1**) | Ink or accent-that-passes | Accent (passes on dark) |
| `--radius` | Corner radius | e.g. `0.5rem` | same |

**Generic paste-ready skeleton** (fill from the palette; keep the format):
```css
:root {
  --background: <H S% L%>;        --foreground: <H S% L%>;
  --card: <H S% L%>;              --card-foreground: <H S% L%>;
  --popover: <H S% L%>;           --popover-foreground: <H S% L%>;
  --primary: <H S% L%>;           --primary-foreground: <H S% L%>;
  --secondary: <H S% L%>;         --secondary-foreground: <H S% L%>;
  --muted: <H S% L%>;             --muted-foreground: <H S% L%>;
  --accent: <H S% L%>;            --accent-foreground: <H S% L%>;
  --destructive: <H S% L%>;       --destructive-foreground: <H S% L%>;
  --border: <H S% L%>;            --input: <H S% L%>;   --ring: <H S% L%>;
  --radius: 0.5rem;
}
.dark { /* the dark values for every token above */ }
```

**Beyond the base set (extend, never fork):**
- **Brand ramp** — `--brand-50 … --brand-950` for finer control (and a text-safe dark step for on-light accent text). Add to `tailwind.config.ts` under `extend.colors.brand`.
- **Semantic extras** — the base starter ships only `--destructive`; add `--success`, `--warning`, `--info` (+ `-foreground`) the same way, each AA against its foreground.
- **Chart tokens** — `--chart-1 … --chart-5` for shadcn charts and **`dataviz`** (swap its `references/palette.md` values for these so product charts and marketing charts read as one brand). Choose hues distinguishable by luminance, not hue alone (color-blind safety). The starter **already maps `chart.1…5` in `tailwind.config.ts`** (and ships default `--chart-*` in `src/index.css`), so overriding the five variables in your `:root`/`.dark` block is zero-rework — no config edit needed (unlike the brand ramp above, which does extend the config).
- **Space scale** — 4px base: `0.5/1/1.5/2/3/4/6/8/12/16` → Tailwind `spacing` (already the default; document that the brand uses the 4px rhythm and an 8px grid).
- **Type scale** — the Layer-2 scale, expressed via the default Tailwind `text-*` steps.

---

## Layer 4 — Component / design-system spec (shadcn/ui)

Every component maps to a shadcn/ui primitive so the build inherits accessibility + behavior for free. Spec the variants, sizes, and **states** (default · hover · focus-visible · active · disabled · loading). Focus-visible uses `--ring` (≥3:1); interactive targets ≥ 44×44px.

| Component | shadcn primitive | Variants | Sizes | Key states / notes |
|---|---|---|---|---|
| Button | `button` | primary · secondary · outline · ghost · destructive · link | sm · default · lg · icon | focus-visible ring = `--ring`; loading = spinner + disabled; label in-voice via `/ux-copy` |
| Input / Field | `input` `label` `form` | text · email · number · textarea · select | default · sm | label always; error text + `aria-invalid`; help text muted; never color-only errors |
| Card | `card` | default · interactive (hover elevate) · stat | — | `card`/`card-foreground` tokens; radius `--radius`; one elevation system |
| Data table | `table` | default · compact · selectable | — | zebra via `muted`; numeric right-aligned + mono; sticky header; empty state via `/ux-copy` |
| Stat tile / KPI | (compose `card`) + **`dataviz`** | metric · metric+delta · sparkline | — | delta uses semantic success/destructive **plus** an arrow (not color alone) |
| Badge / Tag | `badge` | default · secondary · outline · semantic | — | semantic = meaning, never decoration |
| Alert / Toast | `alert` `sonner` | info · success · warning · destructive | — | icon + text (not color alone); dismissable |
| Dialog / Sheet | `dialog` `sheet` | modal · drawer | — | focus trap; ESC closes; title + description |
| Nav / Tabs | `navigation-menu` `tabs` | top · side · tabs | — | current state visible without color alone |

Hand this table to **`/design-system`** to *document* each component (variants/states/a11y notes) and to *extend* it when a new pattern is needed; **`/design-critique`** reviews a built surface; **`/accessibility-review`** audits it; **`/design-handoff`** turns it into a dev spec.

---

## Layer 5 — Asset-production workflow (route each asset to the right engine)

The founder never designs by hand; the system routes each asset to the engine that produces it fastest at the quality bar, then the same guardrails apply (in-voice, WCAG AA, original, draft).

| Asset | Engine | Skill / MCP | Source of truth | Gate |
|---|---|---|---|---|
| Social post, ad creative, one-pager, deck, branded template | **Canva** | Canva MCP: `create-brand-template-draft`, `generate-design(-structured)`, `resize-design`, `export-design` | Canva **brand kit** (mirrors this system's palette/type/logo) | export = draft → Tony |
| Bespoke poster, hero graphic, print/PDF collateral, cover art | **canvas-design** | `canvas-design` skill | Tokens + this bible | original; draft |
| Chart, dashboard, KPI tile, report viz | **dataviz** | `dataviz` skill (swap `references/palette.md` → chart tokens) | Chart tokens | draft; AA on series |
| Product UI (pages, flows, components) | **Starter** | `starters/saas` + tokens + Layer-4 spec; `/design-system` to extend | Repo tokens (`src/index.css`) | build via `/ship`; deploy gated |
| Copy on any asset (CTA, error, empty state, headline) | — | `/ux-copy` (in-voice; banned register rejected) | Founder voice + this bible | draft |
| Brand-architecture / system diagram | **Lucid** | Lucid MCP | This bible | draft |
| Review / audit before it ships | — | `/design-critique` + `/accessibility-review` | WCAG AA + attributes | must pass to leave draft |

**Governance of sources.** Two mirrors, one truth: the **Canva brand kit** governs marketing/social; the **repo tokens** govern product. They must agree — the brand bible (Layer 6) is the reconciler. When one changes, update the other in the same pass, or they drift and the brand looks inconsistent across surfaces.

---

## Layer 6 — Brand governance (lightweight brand bible template)

The single source of truth. Keep it to ~2 pages; a cheaper model reads it to stay on-brand without the founder in the loop. Store it in the venture (`ventures/<slug>/outputs/brand-bible.md`) and version it.

1. **Essence** — one line: what the brand stands for (from positioning).
2. **Attributes** — the 3–5 adjectives + the design rule each forces.
3. **Personality & voice** — archetype, brand-as-a-person, two do's / two don'ts, banned register.
4. **Target psychology** — the identity the buyer is buying; the fear underneath.
5. **We are / we are not.**
6. **Logo** — direction, variants, clear-space, min-size, misuse (what not to do).
7. **Color** — the palette table (role · hex · HSL · usage % · AA pair), the 60/30/10 ratio.
8. **Type** — pairing + scale + rules.
9. **Imagery** — direction + avoid-list.
10. **Tokens & components** — link to the `:root`/`.dark` block + the component table (the buildable layer).
11. **Asset workflow & sources of truth** — the Layer-5 routing table; Canva kit ↔ repo tokens reconciliation.
12. **Governance** — who can change what, version, and the "before it ships" checklist (in-voice · AA · original · draft · claims-safe).

---

## Worked example (abridged) — Executive Edge OS

**Input:** stand up the full brand + design system for EE, generalizing the existing Brand Standards Bible (from the venture context: *dark navy + gold + clinical teal; Inter + JetBrains Mono; "Bloomberg terminal for the body"*). Voice = Founder default, no delta. Claims guardrail in force.

**Layer 1 — foundation.**
- **Attributes** (from the positioning pillars): **Clinical · Precise · Elite · Systematic · Composed.**
- **Personality:** archetype = Sage × Ruler; brand-as-a-person = *"a brilliant physician who also runs a hedge fund."* Voice = Founder default. Do: lead with the measured result; name the loop. Don't: hype; say "wellness journey."
- **Target psychology:** the buyer is buying *"a system I operate,"* not a health app; the fear is coded as performance — *"I'm not performing at my level"* — never aging.
- **We are / we are not:** We are *an instrument* / *a system you run* / *data-backed* · We are not *a wellness app* / *a coach* / *aspirational lifestyle content*.

**Layer 2 — visual identity** (all contrast ratios computed, not eyeballed).
- **Logo:** set wordmark in Inter SemiBold, tight tracking; optional monogram "EE" lettermark for the app icon. Clear-space = cap-height; min 24px screen. One-color navy + reversed off-white. *Direction only — originate; imitate no existing mark.*
- **Palette** (60% surface / 30% navy / 10% gold):

| Role | Hex | `H S% L%` | Usage | Safe on-color | Ratio | Notes |
|---|---|---|---|---|---|---|
| Ink / navy | `#0A1628` | `216 60% 10%` | 30% | off-white / white | 17.2:1 / 18.1:1 | Primary text + primary action (light) |
| Surface / off-white | `#F7F9FB` | `210 33% 98%` | 60% | navy | 17.2:1 | Canvas |
| Accent / gold | `#C8A24B` | `42 53% 54%` | **10%** | navy (7.5:1) | — | **On light it's 2.3:1 — FAILS**; use as fill w/ navy text, on dark, or large/graphic only |
| Secondary / clinical teal | `#0E7C6B` | `171 80% 27%` | ~30% | off-white (4.8:1) · white (5.1:1) | ✓ | Secondary action, links, data |
| Muted text | `#4A5568` | `218 17% 35%` | — | off-white | 7.1:1 | Captions/labels on light |
| Muted (dark) | `#94A3B8` | `215 20% 65%` | — | navy | 7.1:1 | Muted text on dark |
| Destructive | `#DC2626` | `0 72% 51%` | — | white | 4.8:1 | Danger only |

- **Type:** **Inter** (display + body; open-license, no spend), **JetBrains Mono** (scores, biomarkers, precision cues). Scale = 1.25 (major third) per Layer 2. Numeric data in mono, right-aligned.
- **Imagery:** data-as-hero (dashboards, the score) + high-contrast clinical/portrait photography, cool grade; avoid soft-focus "wellness" stock.

**Layer 3 — tokens** (paste-ready into `starters/saas/src/index.css`; note the deliberate choice that **gold carries `--primary` in dark mode** because navy-on-navy can't, and gold-on-navy is 7.5:1):
```css
:root {
  --background: 210 33% 98%;   --foreground: 216 60% 10%;
  --card: 0 0% 100%;           --card-foreground: 216 60% 10%;
  --popover: 0 0% 100%;        --popover-foreground: 216 60% 10%;
  --primary: 216 60% 10%;      --primary-foreground: 210 33% 98%;   /* navy btn, off-white text 17:1 */
  --secondary: 171 80% 27%;    --secondary-foreground: 0 0% 100%;   /* teal btn, white 5.1:1 */
  --muted: 210 33% 96%;        --muted-foreground: 218 17% 35%;     /* 7.1:1 */
  --accent: 42 53% 54%;        --accent-foreground: 216 60% 10%;    /* gold fill, navy text 7.5:1 */
  --destructive: 0 72% 51%;    --destructive-foreground: 0 0% 100%;
  --border: 214 32% 91%;       --input: 214 32% 91%;   --ring: 216 60% 10%;  /* navy ring on light, >3:1 */
  --radius: 0.5rem;
  --chart-1: 216 60% 10%; --chart-2: 171 80% 27%; --chart-3: 42 53% 54%;
  --chart-4: 218 17% 35%; --chart-5: 215 20% 65%;
}
.dark {
  --background: 216 60% 10%;   --foreground: 210 33% 98%;
  --card: 216 46% 14%;         --card-foreground: 210 33% 98%;
  --popover: 216 46% 14%;      --popover-foreground: 210 33% 98%;
  --primary: 42 53% 54%;       --primary-foreground: 216 60% 10%;   /* gold btn, navy text 7.5:1 */
  --secondary: 217 33% 18%;    --secondary-foreground: 210 33% 98%;
  --muted: 217 33% 18%;        --muted-foreground: 215 20% 65%;     /* 7.1:1 */
  --accent: 217 33% 18%;       --accent-foreground: 210 33% 98%;
  --destructive: 0 72% 51%;    --destructive-foreground: 0 0% 100%;
  --border: 217 33% 18%;       --input: 217 33% 18%;   --ring: 42 53% 54%;   /* gold ring on navy 7.5:1 */
  --radius: 0.5rem;
  --chart-1: 42 53% 54%; --chart-2: 171 80% 27%; --chart-3: 210 33% 98%;
  --chart-4: 215 20% 65%; --chart-5: 218 17% 35%;
}
```

**Layer 4 — components:** primary button = navy (light) / gold (dark); **stat tile** for the Daily Edge Score (metric + delta with arrow + color, mono numerals); **data table** for lab panels (numeric right-aligned, mono, sticky header). All focus rings = `--ring`.

**Layer 5 — asset workflow:** the B2B sell-kit one-pager → `canvas-design` (original, PDF); LinkedIn posts → **Canva MCP** from the EE brand kit; the Daily Edge Score dashboard mock → **dataviz** (chart tokens above); the funnel/product → `starters/saas` + these tokens. Copy on all of it → `/ux-copy`; audited by `/accessibility-review`.

**Guardrails applied:** original marks only (no imitation); **gold-on-light body text flagged and fixed** (2.3:1 → use gold as fill/on-dark/large only); only substantiated claims, any regulated claim routed to review per the venture's claims & regulatory constraints; never promise a capability the venture can't deliver today; everything a draft; no LYV assets reused.

---

## Anti-patterns (flag these)
- **Rainbow palette / accent everywhere.** → scarce accent, 10% max; 60/30/10.
- **Copying a competitor's or famous brand's look, logo, or layout.** → original direction only; reference principle, never artwork.
- **Tokens that don't match the starter's names/format.** → paste-ready `H S% L%` in `:root` + `.dark`, or it's rework at build time.
- **Designing the whole system before one page ships** (standards-as-bottleneck / overbuild). → tokens + six core components first; extend on demand.
- **A "beautiful" but inaccessible pair shipped as final.** → AA or it stays a draft; a saturated accent usually fails on light.
- **Inventing positioning inside the brand step.** → pull it from `/positioning`; if absent, flag a provisional frame.
- **Color-only meaning** (deltas, errors, chart series). → pair color with icon/arrow/label and separate by luminance.
