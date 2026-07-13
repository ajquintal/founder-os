---
name: analytics-stack
description: >-
  Stand up a venture's entire measurement backbone so the business is run on data, not vibes — the
  analytics stack (web = GA4, product = PostHog/Amplitude, warehouse = BigQuery/Snowflake when
  needed, BI = Metabase) with each layer's MCP/connect status; the instrumentation plan (the event
  taxonomy — events + properties — mapped to the funnel and the offer ladder); the KPI tree
  (composes /metrics-dashboard's north-star → input → leading/lagging spec and instruments it,
  tying revenue to finance-ops and the funnel to sales-crm/gtm-marketing); the experiment / A-B
  framework (hypothesis → primary metric + guardrails → decision rule); the dashboards + reporting
  cadence that feeds /weekly-ops-review; and analytics data governance (consent-gating, PII/PHI
  minimization, retention, DPAs) cross-referencing docs/engineering-backbone.md. Composes the data:*
  skill pack + dataviz. DRAFT/SPEC ONLY — never wires tracking, changes analytics config, or fires
  an event without approval. Use when setting up or auditing analytics for a venture, designing an
  event-tracking plan, instrumenting the KPI tree, choosing the analytics/BI/warehouse stack,
  designing an A/B test, building a dashboard, or setting analytics governance. Triggers: "analytics
  stack", "set up analytics", "event tracking plan", "instrumentation plan", "event taxonomy",
  "PostHog", "GA4", "Amplitude", "Mixpanel", "data warehouse", "BigQuery", "Snowflake", "Metabase",
  "BI tool", "KPI tree", "instrument the metrics", "A/B test", "experiment design", "funnel
  analysis", "retention analysis", "analytics dashboard", "reporting cadence", "analytics consent",
  "tracking governance".
---

# /analytics-stack — The Measurement Backbone

Turn a venture into an instrument you can trust. This is domain 13 (Data & Analytics), paired with `/metrics-dashboard`: that skill defines *what to measure* (the KPI framework); this one builds *the machine that measures it* — the stack, the events that feed it, the experiments that move it, the dashboards that report it, and the governance that keeps it consent-clean and PII-minimal. Industry-agnostic; it reads the active venture and instruments whatever the business already does. **Draft/spec only — nothing fires, wires, or reconfigures without Tony's approval.**

## What this owns vs. delegates (compose, don't duplicate)

| This skill OWNS (adds) | Delegated to (pull / run, never re-author) |
|---|---|
| Analytics stack selection + connect status (web/product/warehouse/BI); the instrumentation plan (event taxonomy + properties, funnel + offer-ladder mapping); the experiment/A-B framework; dashboard **assembly** + reporting cadence; analytics data governance (consent/PII/retention/DPAs) | North-star + KPI tree + thresholds → `/metrics-dashboard` · the **archetype's** money-strip definitions (subscription MRR/NRR/CAC-payback · goods AOV/contribution-margin/repeat/MER · services utilization/realization/rev-per-head · marketplace GMV/take-rate/liquidity) → `finance-ops` · pipeline/funnel-stage metrics → `sales-crm` · attribution model + channel CAC + marketing KPI sub-tree → `gtm-marketing` · chart standards → `dataviz` · queries/analysis/stat tests/dashboard build → `data:*` pack · weekly report → `/weekly-ops-review` · event-capture infra + consent mechanism + PII controls → `docs/engineering-backbone.md` (starter enforces; venture wires) |

## Load first
1. `founder-profile/PROFILE.md` + `founder-profile/guardrails.md` — governing question, voice, drafts/spec-only, secrets, no-vanity discipline.
2. Active `ventures/<slug>/venture-context.md` — the **archetype** (subscription · goods · services · marketplace, or a blend), revenue lines, offer ladder, the **core value action**, stage, regulatory surface (health/PHI changes the whole governance posture). **The archetype selects the funnel shape and the money strip — subscription/SaaS is one archetype, not the default; read it before mapping a single event.**
3. `/metrics-dashboard` output — the **north-star + metric tree + thresholds** this skill instruments. **Do not re-derive the KPI framework here; consume it.** If none exists, run `/metrics-dashboard` first.
4. Where they exist: `finance-ops` (the money-strip definitions + KPI→P&L bridge), `sales-crm` (pipeline stages + funnel), `gtm-marketing` (attribution + acquisition sub-tree + max-CPA).
5. `docs/engineering-backbone.md` §5 (data/privacy), §7 (observability — consent-gated analytics), §9 (compliance regime) — the governance this skill operationalizes, never contradicts.

Derive every event, metric, and control from these. Never hard-code an industry.

## Method (full detail + worked example in `references/method.md`)
Six parts; for each, name the tool + MCP and flag its connect status. **First read the venture's archetype (Load-first #2): it makes the funnel (part 2) and the money strip (part 3) archetype-conditional — never default to the single-sided SaaS AARRR funnel + MRR strip.**
1. **The measurement stack.** Select the layers the venture's stage actually needs — **web** (GA4), **product** (PostHog default / Amplitude), **warehouse** (BigQuery/Snowflake, *only when data spans ≥3 systems*), **BI** (Metabase). State each layer's status **here** (LIVE MCP / REGISTRY-connect / DIRECT-instrument). Ground truth in this environment: the dedicated analytics tools have **no live MCP** — they connect via `SearchMcpRegistry` or in-app instrumentation; the live substrate is **Supabase MCP** (event sink) + **Airtable MCP** (registers) + the `data:*`/`dataviz`/`xlsx` skills. Don't provision a warehouse or CDP before the volume justifies it (overbuild guard).
2. **The instrumentation plan (event taxonomy).** Define the tracking plan — the single source of truth. Naming convention: `object_action`, snake_case, past tense (`protocol_executed`, `checkout_started`). For every event: **trigger · properties (typed, bounded) · funnel stage · offer-ladder rung · consent tier · PII flag**. Map events to the **archetype's funnel** (subscription/SaaS → AARRR: acquisition → activation → retention → revenue → referral · goods → acquisition → purchase → repeat/reorder · services → lead → qualified → proposal → delivery · **marketplace → a two-sided funnel** — supply acquisition + activation and demand acquisition + activation → match/first-transaction → liquidity, where each event also carries a **side (supply/demand)**) and to the **offer ladder from `/offer-architect`**. Set identify vs. anonymous, super-properties, and the hard rule: **no PII/PHI in event properties** (§5/§7).
3. **The KPI tree (instrumented).** Take `/metrics-dashboard`'s north-star → input drivers → money strip and **wire each node to the event(s) that source it, the owning domain, and the query/tool**. Leading inputs = product/funnel events; lagging money strip = the **archetype's** `finance-ops` definitions (subscription → Engaged MRR/NRR/CAC-payback · goods → AOV/contribution-margin/repeat-rate/MER · services → utilization/realization/revenue-per-head · marketplace → GMV/take-rate/both-sided-retention/liquidity), never defaulting to MRR, + `sales-crm` pipeline $ + `gtm-marketing` channel CAC. This is the value-add over the abstract tree: a tree you can actually compute from real data.
4. **The experiment / A-B framework.** Hypothesis template: *"We believe [change] moves [primary metric] from [X] to [Y] because [reason]; we'll know at [significance] within [duration]."* One **primary metric (OEC)** + explicit **guardrail metrics**; pre-registered MDE, power, sample size, duration (sized via `data:statistical-analysis`). **Decision rule**: ship / kill / iterate at pre-set thresholds — no peeking, no post-hoc metric-shopping. Default tool: **PostHog experiments** (feature flags + A/B). Cap concurrent experiments (focus guard).
5. **Dashboards + reporting cadence.** Assemble the board `/metrics-dashboard` spec'd (north-star + ≤7 leading inputs) + a short lagging money strip, laid out to **`dataviz`** chart standards, built via `data:build-dashboard`. Set cadence: **real-time** ops-health strip · **weekly** operating board (→ feeds `/weekly-ops-review`) · **monthly** money strip / board pack (→ `finance-ops`). Tool: `data:*` + `dataviz` over Supabase at launch; **Metabase** when a self-serve BI surface is warranted.
6. **Data governance.** Operationalize the backbone: **consent-gated** (nothing fires pre-consent; respect DNT — §7), **PII/PHI-minimized** (UUIDs not emails; bands not raw sensitive values; clinical/PHI never leaves the app DB to analytics — §5/§7/§9), **retention schedule + DSAR deletion** per data class (§5), **DPAs signed** with every analytics subprocessor (§9), and **no vanity metric as a primary**. In health ventures, flag that standard **PostHog Cloud / GA4 / Vercel are not HIPAA-eligible** — exclude PHI or self-host (§9).

## Output contract — a venture's analytics setup
Deliver all five, filled (not blank templates):
1. **The stack** — the layer→tool→alt→MCP/connect-status→action table (web/product/warehouse/BI + the live substrate), with connect-these flags for anything without a live MCP here.
2. **The event-tracking plan** — the event taxonomy table (`Event | Trigger | Key properties | Funnel stage | Ladder rung | Consent | PII`; a marketplace adds a **Side** column — supply/demand/cross-side), naming convention, identify/super-property rules, and the **archetype's** funnel + offer-ladder map.
3. **The KPI tree (instrumented)** — `/metrics-dashboard`'s north-star → inputs → money strip, each node wired to its sourcing event(s), owning domain, and query/tool.
4. **The dashboard spec** — the board layout (north-star + ≤7 inputs + money strip) to `dataviz` standards + the reporting-cadence table (`View | Audience | Cadence | Source/tool | Feeds`).
5. **The experiment framework** — the hypothesis template + a worked, pre-registered example (primary metric + guardrails + MDE/power/duration + decision rule).

Plus a **governance block** (consent/PII/retention/DPAs + the regime-specific flag) and any **connect-these / needs-Tony** flags. Label the whole deliverable **[DRAFT/SPEC — nothing instruments, fires, or reconfigures without Tony's approval]**.

## Tools & MCPs
- **Stack:** Web = **GA4** (DIRECT instrument; query via **BigQuery** export — REGISTRY). Product = **PostHog** default / **Amplitude** (both REGISTRY — connect via `SearchMcpRegistry` + SDK). Warehouse = **BigQuery/Snowflake** (REGISTRY; defer until ≥3 systems). BI = **Metabase** (REGISTRY). Error/obs context = **Sentry** (REGISTRY). **None has a live MCP here — flag to connect.**
- **Live substrate (in-session now):** **Supabase MCP** (event sink + `data:sql-queries` reads), **Airtable MCP** (tracking-plan source-of-truth + experiment register), and the skill packs.
- **`data:*` pack + `dataviz`** (the operating engine): `data:explore-data` (EDA on a new dataset), `data:analyze` (analysis), `data:sql-queries` (query Supabase/warehouse), `data:build-dashboard` (assemble the board), `data:create-viz` (individual charts), `data:statistical-analysis` (experiment sizing + significance + power), `data:validate-data` (tracking-plan QA / data quality), and **`dataviz`** (chart standards for every visual). `xlsx` for offline/board cuts.

## Rules
- **DRAFT/SPEC ONLY.** Produce the plan, schema, and spec; never fire a test event, wire an SDK, change an analytics config, or run a live experiment without Tony's approval. Reversible *authoring* (the tracking-plan table, the dashboard spec) is done to finished; the *activation* is gated. (Guardrail.)
- **Consent-gated, always.** No analytics fires before consent; respect Do-Not-Track; document the taxonomy. (backbone §7.)
- **PII/PHI minimization is absolute.** No PII/PHI in event properties — UUIDs not emails, bands not raw sensitive values. Clinical/health/financial detail stays in the app DB behind RLS; analytics receives only de-identified behavioral events. Standard PostHog Cloud / GA4 / Vercel are **not** HIPAA-eligible — in a health venture, exclude PHI or self-host, and treat compliance sign-off as a hard gate. (backbone §5/§7/§9; guardrails.)
- **Compose, don't re-derive.** Pull the north-star + tree + thresholds from `/metrics-dashboard`; revenue definitions from `finance-ops`; funnel/pipeline from `sales-crm`; attribution + channel CAC from `gtm-marketing`; chart standards from `dataviz`. Cite them; run them if missing. Never re-author what a composed skill owns.
- **No vanity metric as a primary.** Raw pageviews, cumulative totals, follower counts never lead a board or a north-star — convert to a movable, decision-linked rate or demote them.
- **Experiments are pre-registered.** One primary metric + guardrails, a sizing before launch, a decision rule fixed in advance. No peeking, no metric-shopping. Cap concurrent tests (focus guard); don't build an experimentation platform before you have traffic (overbuild guard).
- **Secrets in env only** — analytics ingest/API keys are never echoed, logged, or committed; respect the `VITE_*`/public boundary (ingest keys are public-safe, admin/query keys are not). (backbone §3.)
- Clinical, precise, active voice; banned words out (journey, wellness, holistic, balance, mindful, detox, cleanse, "hack", revolutionary, game-changer, guru, generic hype). Never hard-code an industry.

## Composition
- **founder-os siblings:** `/metrics-dashboard` (KPI framework — core), `finance-ops` (money strip + KPI→P&L bridge), `sales-crm` (pipeline/funnel), `gtm-marketing` (attribution + acquisition sub-tree), `/weekly-ops-review` (the weekly board consumer), `/offer-architect` (the ladder the events map to).
- **Skill packs:** `data:analyze` · `data:build-dashboard` · `data:create-viz` · `data:explore-data` · `data:sql-queries` · `data:statistical-analysis` · `data:validate-data` + **`dataviz`** (chart standards). `xlsx` for board cuts.
- **MCPs / tools:** **Supabase MCP** (event sink + queries), **Airtable MCP** (tracking plan + experiment register), and — connect via `SearchMcpRegistry` — **PostHog/Amplitude** (product analytics), **GA4/BigQuery** (web), **Metabase** (BI), **Sentry** (error context).
- **Backbone:** `docs/engineering-backbone.md` §3 (secrets), §5 (data/privacy), §7 (consent-gated analytics + audit log), §9 (GDPR/CCPA/HIPAA regime).

## Examples & evals
- `references/method.md` — the full six-part method, the stack connect-status table, the event-taxonomy conventions, a complete worked example (Executive Edge analytics setup), and a cross-venture agnosticism check (Ethos hospitality).
- Full deliverable: `ventures/executive-edge/outputs/analytics-setup.md`.
- `evals/evals.md` — 3 graded cases (full setup composing not re-deriving; PII/consent/HIPAA governance; experiment rigor + vanity rejection).
