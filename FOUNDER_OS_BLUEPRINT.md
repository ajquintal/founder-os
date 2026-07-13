# Founder OS — Build Blueprint (v0.1, plan only)

**Prepared for:** Tony Quintal
**Date:** July 12, 2026
**Status:** Proposal for approval. Nothing is built yet. This document is the plan you asked to see before I write a single asset.

---

## 0. The one thing I have to say before we build

You asked me to build a reusable operating system that lets you concept, build, launch, and operate businesses across any industry, with AI doing the heavy lifting. Good ask. The architecture you sketched is sound and — importantly — you're already 60% living it (more on that below).

But I'd be a bad coach if I didn't name the risk out loud, because it's *your* documented failure mode wearing its most seductive costume.

Your own strategy docs (April 2026) diagnose your #1 pattern as **complexity addiction / architecture-before-revenue** — "the cathedral before selling the screwdriver." A "meta-system that builds all businesses" is, on its face, the single most elaborate architecture-before-revenue move available to a human. It *feels* like maximum leverage. It can also be maximum procrastination in a lab coat: "I'm not overbuilding one business, I'm building the machine that builds every business."

Here's the distinction that decides which one it is:

- **Procrastination version:** you stop selling Executive Edge for 6 weeks to build a beautiful founder OS. Revenue flatlines. The OS becomes the new thing you perfect instead of shipping.
- **Leverage version:** the OS is *the codification of how you already operate*, built thin, riding on top of the active Executive Edge sprint, where every asset is proven by using it on a live venture this week — so cheaper models and Cowork can run the grunt work forever and free your premium attention for authoring and selling.

I'm going to build the leverage version, and I've wired three hard guardrails into this plan so it can't quietly become the other one (see §9). The governing test for every hour spent, borrowed from your own dossier: **does this compound wealth, or does it feel productive while diluting focus?**

That's the honest part. Now the plan.

---

## 1. What I found — grounding across everything you do

I inventoried your connected folders (MY LIFE, Executive's Edge, LYV, the `executive-edge-os` repo), your project memory, the two project-linked Google docs, and your operating/prompt artifacts. Two pictures, as you asked.

### (a) How you operate — the constants across every venture

These are true whether you're building a clinic, a SaaS, or a hotel bar. This is the raw material for the Founder Profile:

- **Superpower:** you see the *whole machine* — brand, offer, ops, sales, retention, finance — simultaneously, in industries where operators understand one lane. Cross-domain synthesis (medicine + hospitality + brand + ops + AI) is the moat.
- **Cognitive style:** fast, synthetic, nonlinear, systems-first. You jump to end-state then reverse-engineer. Low tolerance for vagueness and fluff.
- **Standards bar:** premium taste; "finished asset, not a framework"; economics must work *before* you build; clinical precision in language.
- **Documented failure modes:** complexity bias / overbuild; too many concurrent fronts; standards-as-bottleneck; future-state bias; founder-dependence.
- **How you already delegate to AI (this is gold):** your *Wealth Operator Prompt* is a fully-formed autonomous-operator spec — pick highest-EV path, execute to finished, drafts-only, weekly report (shipped / pipeline $ / max-3 asks ≤15 min), kill anything not tracking to revenue in 30 days, challenge me. Your *strategic-advisory-prompt* is a fully-formed expert-persona skill — load context, adopt named expert lenses (Hormozi/Brunson/Dunford/Scale Mechanics), produce implementation-ready output. Your repo `CLAUDE.md` is a fully-formed venture-context + engineering-conventions doc (agent runbooks, change policy, definition-of-done, secret guardrails).
- **Voice defaults:** clinical, precise, authoritative, premium, confident, data-driven. Never hype, bro-culture, or "wellness." "A brilliant physician who also runs a hedge fund." You even maintain a power-vocabulary / banned-word list.
- **Hard operating rules you enforce:** never risk the $400k job / ventures / reputation; **LYV firewall** (LYV is co-owned — never source Executive Edge prospects from LYV relationships); **drafts-only** on all outbound (nothing sends without your approval); no medical/legal claims without review; secrets never materialized in text/logs.

**The key insight:** you're not asking me to invent a founder OS from scratch. You already run one — it's just scattered across three prompts, a `CLAUDE.md`, a brand bible, and your memory. My job is to **extract, generalize, and package** what you already do. That's what de-risks the overbuild concern: the assets mostly already exist as prose; I'm refactoring, not inventing.

### (b) The breadth — the ventures and the pattern

- **Executive Edge OS** — launched clinical health-optimization SaaS (React/TS/Supabase/Stripe, ~342 migrations, 114 edge functions, live at executivesedge.ai). Solely yours. Currently your live revenue engine + active B2B sprint.
- **LYV / LYV Rx / LyvPeptides** — premium wellness/longevity clinic + peptide commerce/telehealth. **Co-owned** (partners) → firewall applies.
- **White-label telehealth platform ("[NEWCO]" / LYVOS in build)** — the Vision doc: a platform that lets any brand run compliant telehealth + peptide commerce, with a vertically-integrated supply stack (provider network, pharmacy, 3PL) and a "family of companies." This is you thinking in operating-systems and reusable platforms *again*.
- **Ethos Hospitality Group** and **Wave** — multi-concept restaurants / hotel-adjacent lifestyle. In your portfolio, **not connected** here.

**The pattern in how you start and run things:** you find a fragmented, high-margin, poorly-operated category → design a premium branded system with a clear value ladder → build the "operating system / platform" layer → integrate vertically to capture margin others leave on the table. You do this *regardless of industry*. That pattern is exactly what the Founder OS should encode — and exactly why it must stay industry-agnostic and never bake in wellness assumptions.

---

## 2. What's missing / gaps (before I build)

- **The breadth is wellness-heavy right now.** Everything connected is health-tech/wellness. To keep the OS honestly industry-agnostic, I want at least one *non-wellness* venture context to pressure-test against — Ethos (hospitality) is the obvious candidate, but no folder is connected. Without it, there's a risk the "agnostic" library quietly overfits to clinical/wellness. **Ask:** connect an Ethos/Wave folder, or accept that I'll synthesize a hospitality test-context from memory.
- **Only three project subfolders are mounted.** The parent `Documents/Claude` isn't listable; I only see MY LIFE, Executive's Edge, LYV. If there are other venture folders (LYV Rx, Ethos, Wave, a NEWCO folder), they're invisible to me. **Ask:** are there others to connect?
- **No live operational data access.** For OPERATE-stage dashboards/metrics I'd eventually need read access to Stripe (revenue), GA4/PostHog (funnel), your CRM/pipeline, calendar. Today I have documents *about* these, not the live feeds. That's what the Layer-5 proprietary MCP is for — deferred, per your note.
- **No entity/legal/finance primitives surfaced.** BUILD-stage checklists (entity setup, operating agreements, cap tables, banking) will be generic best-practice until you point me at your actual structures.
- **Team + install targets undefined.** You want this installable "across Claude Code, Cowork, and my team." I don't know who's on the team or what they use. Packaging (Layer 4) needs that before it's real.

None of these block starting. They shape §10's questions.

---

## 3. The architecture (recap + how the layers interlock)

Five layers, exactly as you framed them. The load order is the important part:

```
Every asset, at runtime, loads:  FOUNDER PROFILE  →  ACTIVE VENTURE CONTEXT  →  then does its job
```

1. **Founder Profile (one, stable)** — who you are / how you decide / standards / voice / playbooks / guardrails. Loaded first by everything.
2. **Venture Contexts (one per business)** — industry, ICP, model, brand, offers, stack. Created in minutes by `/new-venture`.
3. **Lifecycle Capability Library** — industry-agnostic skills + subagents, organized by stage (Concept / Build / Launch / Operate), each reading whichever venture context is active.
4. **Packaging** — everything bundled as a private `founder-os` plugin + marketplace, versioned and auto-updating, installable across Claude Code + Cowork + team.
5. **Proprietary MCP** — a safe read/act layer over your own systems. Scaffolded last.

Plain-English note on the mechanics (since you don't live in the tooling): a **skill** is a reusable instruction pack Claude loads on demand (like `/stress-test`); a **subagent** is a separate Claude worker I can dispatch to do a chunk of work in parallel and report back; a **plugin/marketplace** is the installable bundle that carries all of it between your apps and your team; an **MCP** is a secure connector that lets Claude read/act in one of your systems (Supabase, Stripe, Gmail) through a controlled door.

---

## 4. Layer 1 — Founder Profile (proposed outline)

Not a monolith. A small set of composable files (mirrors your own "keep each file lean, references one level deep" principle from `CLAUDE.md`). Everything else loads `PROFILE.md` first; the rest are pulled only when relevant.

```
founder-profile/
├── PROFILE.md              # the core — loaded first by every asset. Lean.
├── decision-standards.md   # how you decide + the bar + go/no-go heuristics
├── voice-and-brand.md      # voice defaults, power-vocabulary, banned words
├── operating-playbooks.md  # your cross-venture methods (offer/funnel/GTM/ops/finance/AI-build)
├── delegation-protocol.md  # how AI works for you (autonomous-operator rules)
└── guardrails.md           # hard rules that must never be violated
```

**PROFILE.md (the core, loaded first):**
- Identity: serial founder-operator; cross-domain synthesizer; taste-driven builder.
- Superpower: sees the whole machine where others see one lane.
- Failure modes (named so every asset actively guards against them): overbuild, too many fronts, standards-as-bottleneck, future-state bias, founder-dependence.
- The governing question: *"Does this compound wealth, or does it feel productive while diluting focus?"*
- Standards: finished assets over frameworks; ship live over perfect-but-late; economics before build.
- Current mandate: $1M by EOY 2026 → $2M+/yr floor; your execution time capped (~2 hrs/wk: approvals + sales only).

**decision-standards.md:** your go/refine/kill heuristics, the "10x factor," economics-first rule, how you weigh focus vs. optionality, when you allow building ahead of demand (your amended rule: only when it's *my* time, raises close-rate/demo quality, is demo-scoped, and selling never waits on it).

**voice-and-brand.md:** the generalized voice engine — clinical/precise/authoritative/premium/confident/data-driven; sentence-case; active voice; no fluff; power-vocabulary and banned-word lists; the "physician who runs a hedge fund" register. Industry-agnostic; per-venture brand deltas live in the venture context, not here.

**operating-playbooks.md:** your reusable methods, stated as venture-neutral procedures — offer architecture (Hormozi value equation), value ladder (entry → bump → OTO → recurring → high-ticket), funnel/GTM, retention, ops SOPs, finance/economics calculator, and your AI-native build conventions (definition-of-done, change policy, drafts-only).

**delegation-protocol.md:** your Wealth Operator rules, generalized: pick highest-EV path and execute to finished; don't present options for reversible calls; finished assets only; weekly report (shipped / pipeline $ / max-3 asks ≤15 min); kill fast at 30 days; compound every asset; challenge me when EV is worse.

**guardrails.md:** never risk the job/ventures/reputation; LYV firewall; drafts-only outbound; no medical/legal claims without review; secrets never in text/logs; legal, no gray areas.

~80% of this can be auto-drafted from documents already on your disk. My recommendation is I auto-draft it and you red-line — minimal effort for you, and it's faithful to what you've already written.

---

## 5. Layer 2 — `/new-venture` intake (proposed spec)

**Purpose:** capture a complete Venture Context for *any* new idea, in minutes, so the whole system instantly specializes to it. Conversational, fast, pre-filled from Founder Profile defaults, asks only what it can't infer.

**Output:** a versioned file `ventures/<slug>/venture-context.md` (with structured front-matter) + a one-screen "context card" you approve before anything downstream runs.

**Fields captured (industry-agnostic):**

| Group | Fields |
|---|---|
| **Identity** | Name / codename, one-line thesis, stage (idea / building / launched / operating) |
| **Market** | Industry & category, regulatory surface (none / licensed / LegitScript-style / other), TAM guess |
| **Customer** | ICP (who exactly), their pain, where they are, willingness + ability to pay |
| **Model** | Revenue architecture (one-time / recurring / high-ticket / licensing / equity / hybrid), unit economics if known |
| **Offers** | Entry offer → ascension → backend; price points; the value ladder |
| **Brand** | Positioning, voice *delta* from your default, visual direction |
| **Stack** | What it's built on (repo / no-code / which tools, MCPs, connectors) |
| **Assets on hand** | Domains, legal entities, existing audience, partners, capital available |
| **Constraints** | Time, budget, risk limits, conflicts (e.g., LYV firewall), legal/compliance |
| **Goal & gates** | Success metric, deadline, **kill criteria**, the wedge (the one differentiated thing) |
| **Competitive set** | Named incumbents + where they're weak |

**Mechanic:** every lifecycle skill begins by loading `founder-profile/PROFILE.md` + the *active* `venture-context.md`. Switching ventures = pointing at a different context file. That's how one library serves all businesses without hard-coding any industry.

**Validation plan:** seed it with two real contexts you already have — Executive Edge OS and the white-label telehealth NEWCO — to prove it captures reality, not a toy.

---

## 6. First 3 CONCEPT-stage skills (proposed)

I'm proposing these three first *on purpose*. They are the cheapest-kill spine — they let you narrow, sharpen, and prove-the-math before building, which is the direct antidote to your overbuild pattern. Naming/branding and a formal go/no-go come next (go/no-go is largely the output of #1 + the economics gate in #3).

Every skill: reads Founder Profile + active venture context; ships with worked examples + 2–3 evals; lean SKILL.md; references one level deep.

### 6.1 `/stress-test` — Idea Stress-Test & Kill Filter
- **Purpose:** take a raw idea + context, run it through *your* decision-standards and failure-mode filters, red-team it adversarially, and return a brutal **GO / REFINE / KILL** verdict.
- **Method:** apply the "compound wealth vs. feel productive" lens; surface the 3 assumptions that MUST be true for it to work; attack it from the strongest skeptic's position; check it against your specific traps (Is this a new front? Is this architecture-before-revenue? Does it need you personally forever?).
- **Output:** verdict + the make-or-break assumptions + the cheapest test to validate each + a one-paragraph "why" in your voice.
- **Evals:** (1) a genuinely strong idea → GO with real risks named; (2) a shiny distraction that adds a front → KILL/REFINE with the focus cost named; (3) a fatally-flawed idea → clean KILL with the fatal assumption identified.

### 6.2 `/market-scan` — Market & Competitor Scan
- **Purpose:** sized, sourced market + competitor brief for the active venture's category.
- **Method:** multi-modal web research fan-out (market size/growth, incumbents, pricing benchmarks, positioning gaps), each angle blind to the others; dedupe; produce the competitive-positioning table you already use in your LYV audit and Vision doc; name the wedge.
- **Output:** cited brief + competitor table + "where the gap is" + pricing benchmarks. Sources always attached.
- **Evals:** (1) a known market (validate numbers against your Executive Edge research); (2) a narrow niche; (3) a two-competitor head-to-head compare.

### 6.3 `/offer-architect` — Offer & Economics Architect
- **Purpose:** the money skill. Design the offer stack and **run the economics before anything gets built** — enforcing your own "math must work first" rule.
- **Method:** apply your operating playbook — Hormozi value equation, Scale Mechanics COE/economics-first, value ladder (core → bump → OTO1/2 → recurring → high-ticket backend), 10x-AOV factor, MLTV. Reads the market brief for price anchoring. Computes affordable CPA, target AOV, break-even, LTV.
- **Output:** the full offer stack with prices + the economics model (what CPA self-liquidates, AOV target, revenue projections) + the implementation priority. Implementation-ready — the kind of doc you'd hand to Claude Code and say "build this."
- **Evals:** (1) a high-ticket service business; (2) a product/commerce business; (3) a SaaS. Each must produce a coherent ladder + numbers that reconcile.

---

## 7. Definition of done — for every asset (your standards, encoded)

No asset is "done" until:
- It loads Founder Profile + venture context (never hard-codes an industry).
- It ships with **worked examples + 2–3 evals** that pass.
- Its `SKILL.md` is **lean**; deeper material is in references **one level deep**.
- It's been **proven once on a live venture** (Executive Edge or NEWCO), not just in the abstract.
- **Model policy:** premium-model time is reserved for *authoring and evaluation*; the asset is written so cheaper models / Cowork can *run* it forever. (Your principle, made mechanical.)

---

## 8. Full build order (all five layers)

| Phase | What | Why here | Your effort |
|---|---|---|---|
| **P0 — Foundation** | Founder Profile (6 files) + `founder-os` repo/marketplace skeleton + conventions | Everything loads it first; ~80% auto-draftable from your docs | Red-line the draft |
| **P1 — Venture Contexts** | `/new-venture` intake + seed 2 real contexts (Executive Edge, NEWCO) | Lets the system specialize; validates against reality | Approve 2 context cards |
| **P2 — Concept library** | `/stress-test`, `/market-scan`, `/offer-architect` (then naming/brand, opportunity-sizing, go/no-go) | Cheapest-kill spine; antidote to overbuild | Try one on a real idea |
| **P3 — Launch library** | positioning, direct-response copy, landing/funnel, content engine, paid ads, SEO/GEO, launch plan | **Highest $-leverage on the live EE sprint** — sell before you build | Approve outputs |
| **P4 — Operate library** | metrics/dashboards, lead-response, content cadence, SOP + meeting-synthesis, weekly ops review | Runs the machine on cheap models once launched | Weekly review only |
| **P5 — Build library** | new-venture bootstrap (repo/stack scaffold, entity/legal/finance/ops checklists), dev subagents (reviewer/tester/debugger), product-spec authoring | Placed later: you sell before you build; dev subagents can also just point at the existing EE repo, which already has these patterns | Minimal |
| **P6 — Packaging** | bundle as private `founder-os` plugin + marketplace; versioned, auto-updating; install across Claude Code + Cowork + team | Only worth doing once the library has proven assets in it | Confirm team + targets |
| **P7 — Proprietary MCP** | safe read/act layer over your systems (Supabase read, Stripe read, Gmail drafts, Drive) | Scaffold last, per your note; needs the guardrails from P0 | Grant scoped access |

**The sequencing tension worth your call:** you framed Concept-first, and I've honored that in the spec. But your live money is in Executive Edge *right now*, and P3/P4 (Launch/Operate) skills pointed at the active sprint would compound revenue this week. There's a real fork here — build the Concept spine first as the proof-of-method (clean, generalizable, what you asked), or point the first build at Launch/Operate-on-EE for immediate dollars. I have a recommendation but this is your money and your priority, so it's Question 1 below.

---

## 9. The three guardrails that keep this the leverage version

1. **Timebox.** Foundation + first Concept skills are a days-not-weeks build. If it starts sprawling, that's the overbuild pattern and I'll flag it and stop.
2. **Prove on a live venture.** Every asset gets used on Executive Edge or NEWCO the moment it exists. An asset that can't earn its keep on a real venture doesn't ship.
3. **Never block the sprint.** OS-building is *my* time, not yours, and it never delays a sales action on the Executive Edge sprint. If OS work ever starts justifying a sales delay, that's your "architecture before revenue" tell — and I'll call it, per your standing instruction.

---

## 10. Blocking questions (I need these before I write Layer 1)

I've put the four highest-leverage decisions in the question prompt alongside this doc so you can just click. Each has my recommendation marked. Fuller list, if useful:

1. **Sequencing** — Concept spine first (as framed), or point the first build at Launch/Operate-on-Executive-Edge for immediate revenue?
2. **Profile build method** — auto-draft from your existing docs then you red-line (my rec), or interview you first?
3. **OS home + name** — new dedicated repo `~/Developer/founder-os` named "Founder OS," or live inside an existing project?
4. **First venture contexts to seed** — Executive Edge only, or Executive Edge + the white-label telehealth NEWCO (my rec, to force industry-agnosticism)?
5. *(non-blocking)* Connect a non-wellness folder (Ethos/Wave) so the library is pressure-tested against hospitality, not just health-tech?

Answer the four and I'll build **P0 (Founder Profile) first, one file at a time, showing you each** — exactly as you asked.
