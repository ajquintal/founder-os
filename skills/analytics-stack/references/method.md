# /analytics-stack — Full method, stack map & worked example

One level deep; does not fan out further. Lenses: instrument the **core value action** first (economics before build applies to measurement too — don't instrument what can't change a decision), compose `/metrics-dashboard` for the KPI framework rather than re-deriving it, and keep every event consent-clean and PII-minimal by construction (governance is designed in, not bolted on).

## Principle

A measurement stack is an operating instrument, not a surveillance apparatus. Two rules held together:
- **Instrument the decision, not the dashboard.** If an event or metric can't change what you'd do this week, it doesn't earn a row — same discipline `/metrics-dashboard` applies to KPIs, applied to raw events.
- **Governance is a design input, not a cleanup.** Consent-gating, PII minimization, and retention are decided *before* the first event fires, because they constrain the schema and the vendor choice — exactly as compliance-by-design works in `docs/engineering-backbone.md §9`.

This skill produces finished, review-ready specs and marks the exact points that need Tony's approval or a compliance sign-off. It never fires an event, wires an SDK, changes a config, or launches a live experiment.

---

## The six parts — what to do, the tool + MCP, and the connect status

### 1. The measurement stack

Select only the layers the venture's **stage** needs. Provisioning a warehouse and a CDP for a pre-traffic venture is the overbuild failure mode wearing a data-team costume.

| Layer | Default | Alternatives | Here? | What it does | Connect / note |
|---|---|---|---|---|---|
| **Event sink / substrate** | **Supabase** (events table) | Segment / RudderStack (CDP router) | **LIVE** (Supabase MCP) | First-party event log; queried directly by `data:sql-queries` | In use from the starter. Add a CDP only at ≥3 destinations |
| **Web analytics** | **GA4** | Plausible, Fathom, Vercel Analytics | **DIRECT** (instrument) / **REGISTRY** (BigQuery export to query) | Traffic, acquisition sources, top-of-funnel | No first-party GA4 MCP here — `gtag` in-app (consent-gated); query via BigQuery export/Supermetrics |
| **Product analytics** | **PostHog** | Amplitude, Mixpanel, Heap | **REGISTRY** (PostHog, Amplitude) | Events, funnels, retention, feature flags, **A/B tests**, session replay | Connect via `SearchMcpRegistry` + SDK in app. PostHog = default (funnels + flags + experiments in one) |
| **Data warehouse** *(when needed)* | **BigQuery** | Snowflake, Redshift | **REGISTRY** | Single source of truth across tools | **Defer until data spans ≥3 systems.** Then pipe Stripe + Supabase + GA4 + CRM in |
| **BI / self-serve** | **Metabase** | Looker Studio, Omni, Hex | **REGISTRY** | Shared dashboards, board reporting, self-serve queries | Connect when a non-founder needs self-serve views. At launch, `data:*` + `dataviz` cover it |
| **Analysis / dashboards / stats** | **`data:*` + `dataviz` + `xlsx`** | — | **SKILL** (in-session) | KPI trees, EDA, dashboards, significance | In use now — no procurement |
| **Ops tables / registers** | **Airtable** | — | **LIVE** (Airtable MCP) | Tracking-plan source-of-truth + experiment register | In use now |
| **Error / obs (context)** | **Sentry** | Datadog | **REGISTRY** | Exceptions, release health — the reliability half of observability | Connect at deploy (backbone §7) |

**The honest grounding:** none of the *dedicated* analytics tools (GA4, PostHog, Amplitude, BigQuery, Snowflake, Metabase) has a **live MCP in this environment**. They are **REGISTRY** (one-click OAuth) or **DIRECT** (instrument in-app). The live analytics substrate right now is **Supabase MCP** (event sink you query with SQL) + **Airtable MCP** (registers) + the **`data:*`/`dataviz`/`xlsx`** skills. So the backbone launches on first-party Supabase event logging analyzed by the skill pack; PostHog/GA4 layer on via the registry the moment funnels/retention/replay exceed what cheap SQL gives you. **Flag every REGISTRY/DIRECT item to Tony as a connect step.**

**Stage rule of thumb:** launch = Supabase events + `data:*` + Sentry + GA4-lite. Growth (funnels/retention/flags matter) = add PostHog. Scale (data spans ≥3 systems, board reporting) = add BigQuery + Metabase. A **CDP** (Segment/RudderStack) only once you fan events to ≥3 destinations and want to instrument once.

### 2. The instrumentation plan (the event taxonomy)

The tracking plan is the **single source of truth** — a versioned table (Airtable MCP), owned, reviewed before any SDK call. Instrument the **core value action first**, then the funnel around it. A sprawling taxonomy nobody maintains is worse than ten clean events.

**Naming convention (non-negotiable, enforced across the plan):**
- `object_action`, **snake_case**, **past tense**: `protocol_executed`, `checkout_started`, `subscription_started`. Not `Clicked Button`, not `ProtocolExecute`, not camelCase.
- **Properties** are snake_case, **typed**, and **bounded** — enums/bands, not free text or raw sensitive numbers (`contract_value_band: "30-40k"`, never the exact figure; `panel_type`, never the biomarker value).
- **Super-properties** (set once, attached to every event): `plan_tier`, `account_type` (b2c/b2b), `signup_cohort`. **Identify** only post-consent + post-auth, keyed to the app **user_id (UUID)** — never email. Pre-auth events use an anonymous id, stitched on identify.

**The spec table shape** (one row per event):

| Event | Trigger | Key properties | Funnel stage | Ladder rung | Consent | PII |
|---|---|---|---|---|---|---|

- **Funnel stage** ∈ {acquisition, activation, retention, revenue, referral} — the pirate-metric spine, tuned to the venture. Map every event to exactly one.
- **Ladder rung** ties the event to the **offer ladder from `/offer-architect`** (entry → core → flagship → expansion), so revenue events line up with the monetization model.
- **Consent** = the tier that must be granted before the event may fire.
- **PII** = must read **none** for every row. A row that needs PII is a design bug — move the identifier to the app DB and emit a UUID reference.

**Quality gate:** run `data:validate-data` against the plan and (in staging) the event stream — schema conformance, no unexpected properties, no PII leakage, no orphan events not in the plan. A tracking plan that drifts from reality produces confidently wrong dashboards.

### 3. The KPI tree (instrumented)

`/metrics-dashboard` **owns** the north-star, the metric tree, the leading/lagging tags, and the thresholds. This skill's job is to make that tree **computable**: wire each node to (a) the event(s) that source it, (b) the owning domain, (c) the query/tool.

- **North-star** → the precise event query that computes it (usually a distinct-user count over a trailing window across the core-value-action events).
- **Leading inputs** → product/funnel events (activation rate = a funnel between two events; adherence/depth = a per-user event count; retention = a cohort return query). These are `analytics-stack`'s home turf.
- **Money strip (lagging)** → **`finance-ops` owns the definitions** (Engaged MRR, NRR, CAC payback) — pull them; don't invent. Pipeline $ → **`sales-crm`**. Channel CAC + blended payback + the acquisition sub-tree → **`gtm-marketing`**. This skill instruments them against Stripe + CRM + ad data; it doesn't redefine them.

Deliver the tree as: `node → [leading/lagging] → sourcing event(s)/table → owning domain → query/tool`. That is the bridge from an abstract KPI framework to a board that recomputes from live data — and it is where the KPI→P&L link (`finance-ops`) and the funnel (`sales-crm`/`gtm-marketing`) physically connect.

### 4. The experiment / A-B framework

Rigor beats volume. One well-sized test that changes a decision beats five underpowered tests that generate debates.

**Hypothesis template:**
> *We believe **[change]** will move **[primary metric]** from **[baseline X]** to **[target Y]** because **[mechanism]**. We'll know when [primary metric] reaches [Y] at **[significance, e.g. 95%]**, within **[duration]**, without harming **[guardrail metrics]**.*

- **One primary metric (the OEC — overall evaluation criterion).** Not three. If you can't pick one, you haven't defined the decision.
- **Guardrail metrics** — the things the change must not break (e.g., a checkout test guardrails retention and refund rate). A win on the primary that trips a guardrail is not a win.
- **Pre-register the sizing** via `data:statistical-analysis`: baseline rate, **MDE** (minimum detectable effect worth shipping for), **power** (0.8), significance (0.95) → **required sample size and duration**. If the venture can't reach the sample in a sane window, the test is not worth running yet — say so.
- **Decision rule, fixed in advance:** ship if primary ≥ target *and* guardrails hold; kill if ≤ a floor; iterate in between. **No peeking** (don't stop early on a favorable wiggle), **no metric-shopping** (don't hunt for a secondary that "worked").
- **Tool:** **PostHog experiments** (feature flags + assignment + readout) as default; `data:statistical-analysis` for sizing and the significance/CI read; **GrowthBook** as an alternative if flags live elsewhere. Log every experiment (hypothesis, dates, result, decision) in the Airtable **experiment register** — an audit trail and a memory so you don't re-run settled questions.
- **Guards:** cap concurrent experiments (focus); don't build an experimentation platform before you have the traffic to power a test (overbuild). Below ~a few hundred conversions/variant/week, prefer sequential qualitative iteration over underpowered A/Bs.

### 5. Dashboards + reporting cadence

Assemble what `/metrics-dashboard` spec'd; don't invent a second KPI set. The board = **north-star + ≤7 leading inputs** on top, a short **lagging money strip** below, laid out to **`dataviz`** chart standards (one visual system, accessible, consistent light/dark; the right mark for each metric — trend = line, comparison = bar, rate against target = a stat tile with its floor). Build via `data:build-dashboard`; individual charts via `data:create-viz`.

**Reporting cadence:**

| View | Audience | Cadence | Source / tool | Feeds |
|---|---|---|---|---|
| Ops-health strip (uptime, errors, event volume) | Operator | Real-time / daily | Sentry + Supabase logs | incident response |
| Operating board (north-star + leading inputs) | Founder / operator | **Weekly** | `data:build-dashboard` + `dataviz` over Supabase (Metabase when warranted) | **`/weekly-ops-review`** (SHIPPED / PIPELINE $) |
| Money strip / board pack (lagging + KPI→P&L) | Founder / board | **Monthly** | `finance-ops` (`finance:financial-statements`) + `pptx`/Canva | board / investor update (**draft only**) |
| Experiment readouts | Founder / product | Per test | PostHog + `data:statistical-analysis` | ship/kill/iterate decision |

The weekly operating board is the one that matters most — it is the instrument `/weekly-ops-review` reads to report what shipped and the metric it moved. Keep it to the cap; a 20-row board is reviewed by no one.

### 6. Data governance

Operationalizes `docs/engineering-backbone.md` — this skill is where analytics-specific privacy controls get concrete. Decide all of this **before** the first event fires.

- **Consent-gating (§7).** No analytics/tracking fires before the user consents; respect Do-Not-Track; the consent state gates the SDK init, not just a cookie banner. Document the taxonomy so consent scope is auditable.
- **PII/PHI minimization (§5/§7).** No PII/PHI in event properties — UUIDs not emails, bands not raw sensitive values. Card data stays with Stripe (store Stripe ids); **clinical/health/financial detail stays in the app DB behind RLS and never leaves to an analytics tool.** Never log PII/PHI.
- **HIPAA / regulated (§9).** Standard **PostHog Cloud, GA4, and Vercel are not HIPAA-eligible.** In a health venture, either exclude PHI from analytics entirely (the default — send only de-identified behavioral events) or self-host. Compliance sign-off is a **hard gate**, not a formality (guardrails).
- **Retention + deletion (§5).** A retention window per data class (raw events shorter than aggregates); delete/anonymize on schedule; wire **DSAR/CCPA deletion** through to the analytics tools too (PostHog person-delete, GA4 User Deletion API) — a deletion request that clears the app DB but leaves PostHog is non-compliant.
- **DPAs (§9, GDPR/CCPA).** A signed **Data Processing Agreement** with every analytics subprocessor (Google/GA4, PostHog, Amplitude, Sentry) before it processes personal data. A public privacy policy + cookie/consent banner list them.
- **Audit (§7).** Privileged analytics actions — a raw-data export, a config change, a person-delete — are written to the append-only `audit_log`.
- **No vanity as primary.** Raw pageviews, cumulative totals, and follower counts never lead a board or a north-star — convert to a movable rate (pageviews → visitor→signup conversion) or demote them.

---

## The `data:*` + `dataviz` stack at a glance (skill → job)

| Job | Skill | Used for here |
|---|---|---|
| Explore a new/unknown dataset | `data:explore-data` | First pass on an event stream or export — shape, gaps, distributions |
| Analyze a defined question | `data:analyze` | Funnel drop-off, cohort retention, segment cuts |
| Query the sink/warehouse | `data:sql-queries` | Compute KPI-tree nodes from Supabase/BigQuery |
| Build the board | `data:build-dashboard` | Assemble the operating board + money strip |
| Author a single chart | `data:create-viz` | Individual visuals inside a board or report |
| Size + read an experiment | `data:statistical-analysis` | Sample-size/power/MDE pre-reg; significance + CI readout |
| QA the tracking plan / data | `data:validate-data` | Schema conformance, PII-leak check, orphan-event detection |
| Chart standards (all visuals) | **`dataviz`** | The one visual system every chart obeys — colors, marks, tiles, layout |

Read **`dataviz` before writing the first line of any chart or dashboard** — it is the design system that makes every visual read as one instrument.

---

## Worked example — Executive Edge OS (the deliverable, abridged)

**Input:** stand up the analytics backbone for Executive Edge (health-tech SaaS, solely owned, live revenue, US, **PHI in scope**). KPI framework pulled from `/metrics-dashboard` (WAPA north-star + money strip); money definitions from `finance-ops`; the venture already runs GA4 + PostHog + Sentry per its context.

**1. The stack.** EE already instruments **GA4** (acquisition), **PostHog** (product funnels/retention/flags), **Sentry** (errors) — this skill *formalizes* them, it doesn't re-pick. Event sink = **Supabase** (the app DB, ~342 migrations) queried by `data:sql-queries`. No warehouse yet — EE's data spans Stripe + Supabase + GA4 + PostHog + Airtable CRM; **the moment board reporting needs a single join across ≥3 of those, add BigQuery + Metabase** (flagged, not built). None of GA4/PostHog/BigQuery/Metabase has a live MCP here → **connect PostHog + GA4-via-BigQuery through `SearchMcpRegistry`; interim reads run on Supabase MCP + `data:*`.**

**2. Instrumentation plan (excerpt).** Core value action = executing a protocol step and fusing a blood/device data point.

| Event | Trigger | Key properties | Funnel | Ladder rung | Consent | PII |
|---|---|---|---|---|---|---|
| `signup_completed` | account created | method, referrer_source | acquisition | freemium | analytics | none |
| `labs_uploaded` | freemium lab upload | upload_method, panel_count *(count, not values)* | activation | freemium | analytics | none |
| `protocol_executed` | member logs a protocol step | protocol_category, streak_day | activation/retention | $99/mo core | analytics | none |
| `device_synced` | Oura/Withings sync | device_type | retention | core | analytics | none |
| `blood_synced` | panel result attached | panel_type, source *(never biomarker values)* | retention | core | analytics | none |
| `data_fused` | device + blood both present in window | fusion_window_days | retention | core (**the wedge**) | analytics | none |
| `checkout_started` | pricing → checkout | tier, price_point | revenue | entry→flagship | analytics | none |
| `subscription_started` | first successful charge | tier, mrr_band | revenue | $99/mo core | analytics | none |
| `tier_upgraded` | plan change up | from_tier, to_tier | revenue | expansion | analytics | none |
| `cohort_signed` | B2B contract executed | company_size_band, contract_value_band | revenue | B2B cohort | analytics | none |

Naming: `object_action`, snake_case, past tense. Super-properties: `plan_tier`, `account_type`, `signup_cohort`. **Governance rule enforced in the schema:** blood/lab values, biomarker readings, and Daily Edge / Drift / BRI / PhenoAge **scores stay in Supabase behind RLS — they never appear as PostHog/GA4 properties** (PHI + those tools aren't HIPAA-eligible). Analytics sees `blood_synced` happened, never *what* the blood said.

**3. KPI tree (instrumented) — composed from `/metrics-dashboard`:**

| Node | L/L | Sourcing event(s) / table | Owning domain | Query / tool |
|---|---|---|---|---|
| **WAPA** (north-star) | L | distinct paying users w/ ≥1 `protocol_executed` AND ≥1 (`device_synced` OR `blood_synced`), 7d | metrics-dashboard | `data:sql-queries` on Supabase |
| New activated / wk | L | `signup_completed` → `protocol_executed` ≤7d | gtm-marketing (acquisition) | PostHog funnel |
| Activation rate | L | funnel `signup_completed`→first `protocol_executed` | analytics-stack | PostHog funnel |
| Adherence depth | L | median `protocol_executed`/active/wk | analytics-stack | `data:analyze` |
| Data-fusion rate | L | `data_fused` in 30d / active | analytics-stack (the wedge) | `data:sql-queries` |
| Weekly retention | L | prior-wk-active cohort return | analytics-stack | PostHog retention |
| Ladder expansion | L | `tier_upgraded` / base | finance-ops + sales-crm | Stripe + `data:analyze` |
| Engaged MRR · NRR · CAC payback | Lag | Stripe subscriptions × active flag | **finance-ops** (definitions) | Stripe → `finance:*` |
| B2B cohort pipeline $ | Lag | `cohort_*` + CRM deals, weighted | **sales-crm** | Airtable MCP |

The lagging strip is defined by `finance-ops` and `sales-crm`, not re-invented here — this skill instruments it. This is the physical KPI→P&L bridge: `protocol_executed` (leading) predicts Engaged MRR (lagging) which is the revenue line on the P&L.

**4. Dashboard + cadence.** Operating board = WAPA + 5 leading inputs (under the cap) to `dataviz` standards (WAPA as a target stat-tile with its floor; inputs as sparked trend lines; fusion-rate highlighted as the moat metric), built with `data:build-dashboard`. Money strip below (Engaged MRR / NRR / cohort pipeline). **Cadence:** real-time ops-health (Sentry + Supabase logs); **weekly** operating board → **feeds `/weekly-ops-review`**; **monthly** money strip + KPI→P&L bridge → `finance-ops` board pack (draft only).

**5. Experiment framework (worked, pre-registered).**
> *We believe a guided day-0 first-protocol walkthrough will move **activation rate** (signup→first `protocol_executed` ≤7d) from **32% to ≥40%** because first-execution friction is the drop-off, at **95%** within **3 weeks**, without harming **adherence depth or 7-day retention** (guardrails).*
- Primary (OEC): activation rate. Guardrails: adherence depth, 7-day retention.
- Sizing (`data:statistical-analysis`): baseline 32%, MDE +8pp, power 0.8, α 0.05 → ~N per variant; EE's weekly signup volume clears it in ~3 weeks. If it didn't, the readout would say "underpowered — iterate qualitatively instead."
- Tool: PostHog feature flag + experiment; logged in the Airtable experiment register.
- Decision: **ship** if activation ≥40% and guardrails hold; **kill** if ≤34%; **iterate** between. No peeking; no metric-shopping.

**6. Governance block.** Consent-gated (PostHog/GA4 init behind consent + DNT). **PHI firewall: clinical values and IP scores never leave Supabase to analytics** — PostHog Cloud/GA4/Vercel aren't HIPAA-eligible (backbone §9); this is a **hard gate**, flagged to Tony. Retention: raw events 14 months (GA4 default cut shorter where possible), aggregates longer; DSAR deletion wired through PostHog person-delete + GA4 deletion API + the app DB. DPAs signed with Google, PostHog, Sentry. No vanity primary (pageviews demoted to visitor→signup conversion). Audit-log every raw export.

**Connect-these / needs-Tony:** connect PostHog + GA4/BigQuery + Sentry + (later) Metabase via `SearchMcpRegistry`; confirm DPAs; **sign off the PHI-exclusion posture before any new event ships** (compliance hard gate).

Full deliverable: `ventures/executive-edge/outputs/analytics-setup.md`.

---

## Agnosticism note — the same skill on a non-software venture (Ethos hospitality)

The method holds with zero clinical/SaaS leakage:
- **Stack:** web = GA4 on the reservation/marketing site; "product analytics" = the **POS + reservations event stream** (Toast/Resy-class), not a mobile SDK; warehouse = add when POS + reservations + loyalty + payroll span ≥3 systems; BI = Metabase for multi-location P&L views.
- **Instrumentation:** events like `reservation_booked`, `cover_seated`, `check_closed` with `check_band`, `party_size`, `daypart` — **never the guest name or card** (PCI, not HIPAA; card data stays with the processor). Funnel = discovery → reservation → seated → repeat; ladder rung = cover → membership → private event → licensing.
- **KPI tree:** north-star from `/metrics-dashboard` (e.g., weekly returning covers); leading inputs = reservation→seated rate, attach rate, table turns; money strip = contribution margin/seat, RevPASH — defined by `finance-ops`, instrumented here.
- **Experiments:** an A/B on a reservation-page change (primary = reservation completion rate; guardrail = no-show rate), sized the same way.
- **Governance:** consent + GDPR/CCPA still apply; the HIPAA callout does not (no PHI) — the **regulatory surface drives the governance posture**, which is exactly why it's read from the venture context, never hard-coded.

The measurement discipline — instrument the core value action, compose the KPI framework, one primary metric per test, no PII in properties, no vanity primary — is industry-agnostic. What changes is the *event stream source* and the *regime*, both read from the active venture context.
