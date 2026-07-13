---
name: gtm-marketing
description: >-
  Compose a venture's entire go-to-market into ONE opinionated plan — the motion (product-led /
  sales-led / community-led / marketplace two-sided — read from the venture's archetype, SaaS
  demand-gen being one case, with supply-side acquisition + cold-start + a liquidity metric for
  marketplaces), the channel portfolio + budget and CAC/ROI allocation, lifecycle
  email + SMS, partnerships/affiliates/referrals, PR/launch, the marketing calendar + weekly
  cadence, and the attribution + marketing KPI tree. Orchestrates the Launch skills (`/positioning`,
  `/direct-response-copy`, `/landing-funnel`, `/content-engine`, `/paid-ads`, `/seo-geo`,
  `/launch-plan`) and adds what they don't cover. Fills the founder's marketing blind spot with
  strong defaults to approve, not author. $0 until proven (demand — or, for a marketplace,
  liquidity); drafts only. Use when planning
  or auditing go-to-market, choosing a motion or channels, allocating a marketing budget, or when
  "how do we actually get customers" is the question. Triggers: "GTM", "go-to-market", "marketing
  plan", "growth plan", "which channels", "channel strategy", "marketing motion", "PLG vs
  sales-led", "marketing budget", "CAC by channel", "lifecycle/email marketing", "referral/affiliate
  program", "launch marketing", "how do we get customers", "marketplace GTM", "two-sided
  marketplace", "supply-side acquisition", "cold-start", "chicken-and-egg problem", "liquidity".
---

# /gtm-marketing — Go-To-Market Orchestrator

The whole go-to-market as one plan. This is domain 6 (Marketing/GTM) — the founder's stated blind spot, carried by the system as opinionated defaults he approves rather than authors. It **composes** the Launch skills into a single motion-plus-channel plan and **adds** the nine things they don't cover: motion (archetype-chosen — SaaS demand-gen is one case), message-market-fit routing, the channel portfolio, cross-channel budget/CAC economics, lifecycle, partnerships, PR, the calendar, and attribution/KPIs. It synthesizes; it does not re-derive what a composed skill owns.

## What this owns vs. delegates (compose, don't duplicate)
| This skill OWNS (adds) | Delegated to (pull / run, never re-author) |
|---|---|
| Motion decision; message-market fit routing; channel **portfolio** + budget/CAC-ROI across channels; lifecycle email+SMS; partnerships/affiliates/referrals; PR/launch platforms; marketing calendar + weekly cadence; attribution model; the marketing KPI sub-tree | ICP + pillars → `/positioning` · offer + economics/max-CPA → `/offer-architect` · wedge + competitors → `/market-scan` · funnel structure → `/landing-funnel` · asset copy → `/direct-response-copy` · organic system → `/content-engine`/`/content-cadence` · paid plan → `/paid-ads` · search/AI → `/seo-geo` · launch sequence → `/launch-plan` · venture north-star → `/metrics-dashboard` |

## Load first
1. `founder-profile/PROFILE.md`, `founder-profile/operating-playbooks.md` (GTM #4, economics-first, retention), `founder-profile/decision-standards.md` (demand gate, focus, kill windows), `founder-profile/voice-and-brand.md`, `founder-profile/guardrails.md` (drafts only, no spend, LYV firewall, claims).
2. Active `ventures/<slug>/venture-context.md` — **archetype / money model + binding GTM constraint** (subscription · goods · services · marketplace → liquidity), revenue lines, ICP, stage, budget ceiling, founder-time cap, kill gates.
3. The upstream Launch/Concept outputs if they exist: `/positioning`, `/offer-architect`, `/market-scan`, `/landing-funnel`, `/content-engine`, `/paid-ads`, `/seo-geo`, `/launch-plan`, and the `/metrics-dashboard` north-star. **Missing one → run it (or name it as a prerequisite); never fabricate its output.**

## Method (full detail + worked example in `references/method.md`)
1. **Set the MOTION — archetype-first.** Read the **archetype + binding constraint** from `venture-context` (money model: subscription/SaaS · goods · services · **marketplace/two-sided**); SaaS demand-gen is one case, not the default. Pick the motion the binding constraint demands (matrix in method.md): for a **marketplace the constraint is LIQUIDITY, so the primary motion is supply-side acquisition + a cold-start plan and the primary GTM metric is liquidity — fill rate / time-to-match / utilization — not demand-gen alone**. Within demand generation, choose sales-led / product-led / community-led on ACV × sales-complexity × time-to-value. Default posture: **warm-outbound + owned-audience first** (sell/seed before build, $0), layer paid only once the constraint (demand — or liquidity) is proven.
2. **Message-market fit per segment.** For each ICP segment (from `/positioning`), name the one message + its proof + the single channel that segment already lives on. Pull the pillars; don't reinvent them.
3. **Channel portfolio.** Select channels for the motion; give each a role (acquire / nurture / convert), an owning skill, and a phase (**prove** vs **scale**). Highest-EV first; one anchor channel, not six.
4. **Budget + CAC/ROI allocation.** $0 baseline. Compute **max CAC** from offer-architect margin + payback. Per channel: stage · budget (0 → $X once proven) · expected CAC · payback/ROI · scale rule · numeric kill threshold. Once proven, allocate ~**70/20/10** (proven / promising / experimental).
5. **Lifecycle — email + SMS.** Welcome, nurture, winback (+ key triggered) sequences: trigger · message count/cadence · channel · the ascension each drives. Default stack **SendGrid** (email) / **Twilio** (SMS); use the venture's live ESP if it already runs one. Drafts only.
6. **Partnerships / affiliates / referrals.** Pick the structures that fit (customer referral · affiliate/creator · channel/operator partner), each with default terms and the *fast visible win* it's built on. Performance-based before fixed spend.
7. **PR / launch.** Product Hunt (product-led/tools) and/or press (narrative + credibility), sequenced into `/launch-plan`; earned only where it compounds.
8. **Calendar + weekly cadence.** A marketing operating rhythm (weekly) + a campaign calendar (monthly/quarterly themes → offer → channels) that feeds `/content-cadence` and reports up through `/weekly-ops-review`.
9. **Attribution + marketing KPI tree.** A pragmatic attribution model (self-report + UTM/GA4 last-touch early; multi-touch only at volume). Build the marketing KPI sub-tree (qualified pipeline, CAC/channel, lead→customer, blended payback) and **hand it to `/metrics-dashboard`** as the acquisition branch of the venture north-star + money strip.

## Output contract — a filled GTM plan (opinionated defaults in, not blanks)
1. **Motion** — `ARCHETYPE: <subscription/goods/services/marketplace> · BINDING CONSTRAINT: <demand | liquidity | …> · PRIMARY: <motion> · SECONDARY: <motion> · PHASE GATE: prove <the constraint> before scaling <what>`, plus one-line rationale. Marketplace: name the **constrained side** + the **liquidity metric**.
2. **Channel plan** — table: `Channel | Role | Motion fit | Owning skill | Phase (prove/scale) | Primary metric | Owner`. Two-sided ventures: rows for **both** the supply and demand sides, constrained side first.
3. **Budget + CAC/ROI** — table: `Channel | Stage | Budget now → proven | Expected CAC | Payback/ROI | Scale rule | Kill threshold`. Baseline row = **$0 until proven** (demand — or liquidity for a marketplace).
4. **Lifecycle map** — table: `Sequence (welcome/nurture/winback) | Trigger | Msgs/cadence | Channel (SendGrid/Twilio) | Goal/ascension`. **[DRAFT]**
5. **Partnerships/referral** — table: `Program | Partner type | Structure/terms | Built on | Trigger to launch`.
6. **PR/launch** — platform(s) + angle, sequenced into `/launch-plan`.
7. **Calendar + weekly cadence** — campaign calendar (month → theme → offer → channels) + the weekly marketing rhythm.
8. **Attribution + marketing KPI tree** — the model (one line) + the sub-tree, flagged as the branch that **feeds `/metrics-dashboard`**.
9. **Orchestration map** — which composed skill produces which asset (so nothing is authored twice).
10. **The single metric this GTM lives or dies on now** — for a **marketplace**, a **liquidity** metric (fill rate / time-to-match / utilization), not a demand number alone — the **demand/liquidity-gate status**, and any founder-failure-mode flags (overbuild / too many fronts / demand poured onto an illiquid marketplace).

Label the whole plan **[DRAFT — nothing sends, publishes, or spends without Tony's approval]**.

## Tools & MCPs
Plan/campaign → `marketing:campaign-plan`. Copy/content → `marketing:content-creation`, `marketing:draft-content` (+ OS `/content-engine`, `/direct-response-copy`). Lifecycle → `marketing:email-sequence` + **SendGrid** (email) / **Twilio** (SMS). SEO → `marketing:seo-audit` (+ OS `/seo-geo`). Brand/creative → `marketing:brand-review` + **Canva MCP**. Reporting/attribution → `marketing:performance-report` + **GA4** (+ PostHog where a venture runs it). Pipeline/CRM, attribution table + affiliate tracking → **Airtable** (`airtable:marketing-ops`). Competitors → `marketing:competitive-brief`.

## Rules
- **Compose, don't re-derive.** Pull ICP/pillars from `/positioning`, economics/prices from `/offer-architect`, the launch sequence from `/launch-plan`; hand the KPI sub-tree to `/metrics-dashboard`. Never re-author what a composed skill owns — cite it, or run it if missing.
- **$0 until the binding constraint is proven** (demand — or **liquidity** for a marketplace), then scale only on proven unit economics (max CAC from `/offer-architect`). Kill losers at the numeric threshold — no "one more week". No spend, send, or publish without Tony's approval. (Guardrail.)
- **Highest-EV / warm channel first; one anchor channel.** Actively flag the founder failure modes — overbuild (building the engine before booking a call), too many concurrent fronts, and (marketplace) pouring demand onto an illiquid supply base.
- Voice per `founder-profile/voice-and-brand.md`; banned words out. **LYV firewall** on all audiences, lists, and partners.
- **Claims & capability (G-claims):** make only substantiated claims, and never imply a capability or deliverable the venture can't provide today. Honor the venture's own claims & regulatory constraints (from its `venture-context` + `engineering-backbone §9`); route any regulated claim (health / financial / legal / environmental) for professional review before publish.
- **Price/economics** come from `/offer-architect`; never invent. Carry the venture caveat "prices evolving — confirm live before customer-facing use."
- **Attribution:** pragmatic first (self-report + UTM/GA4 last-touch); don't build multi-touch before volume justifies it (complexity-bias guard).

## Examples & evals
- `references/method.md` — full method, the archetype→motion matrix + marketplace cold-start playbook + default channel portfolio, a two-motion worked example (Executive Edge), and cross-venture agnosticism checks (Ethos hospitality services + a two-sided marketplace).
- `evals/evals.md` — 3 cases (full plan with guardrails, demand-not-proven $0 hold, agnosticism + compose-don't-duplicate).
