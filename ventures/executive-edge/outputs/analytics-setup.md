# Executive Edge OS — Analytics Setup

**Jul 13, 2026 · Produced by `/analytics-stack` · Loads: `founder-profile/PROFILE.md` → `ventures/executive-edge/venture-context.md` → `/metrics-dashboard` (WAPA north-star) → `finance-ops` (money strip) → `sales-crm`/`gtm-marketing` (funnel).**

The measurement backbone for a US, solely-owned, live-revenue health-tech SaaS venture with **PHI in scope**. The business gets run on data, not vibes — but the KPI framework is composed from `/metrics-dashboard` (not re-derived here), the money definitions are pulled from `finance-ops`, and clinical data never leaves the app DB to an analytics tool. **[DRAFT/SPEC — nothing instruments, fires, or reconfigures without Tony's approval. The PHI-exclusion posture is a compliance hard gate requiring sign-off before any new event ships.]**

EE already runs GA4 + PostHog + Sentry (per venture context); this formalizes them into a governed tracking plan, an instrumented KPI tree, an experiment framework, and a reporting cadence — it does not re-pick the tools.

---

## 1. The stack

| Layer | Tool | Alternatives | Here? | Action |
|---|---|---|---|---|
| **Event sink / substrate** | **Supabase** (app DB, ~342 migrations) | Segment/RudderStack (CDP) | ✅ **LIVE** (Supabase MCP) | in use — queried by `data:sql-queries` |
| **Web analytics** | **GA4** (already instrumented) | Plausible, Fathom, Vercel Analytics | **DIRECT** / **REGISTRY** (BigQuery export) | query via BigQuery export — **flag to connect** |
| **Product analytics** | **PostHog** (already instrumented) | Amplitude, Mixpanel | **REGISTRY** | **connect via `SearchMcpRegistry`** for funnel/retention/experiment reads |
| **Data warehouse** | **BigQuery** | Snowflake, Redshift | **REGISTRY** | **defer** — add when a board join needs ≥3 of {Stripe, Supabase, GA4, PostHog, CRM} |
| **BI / self-serve** | **Metabase** | Looker Studio, Hex | **REGISTRY** | add when a non-founder needs self-serve views |
| **Analysis / dashboards / stats** | **`data:*` + `dataviz` + `xlsx`** | — | ✅ **SKILL** | in use now |
| **Registers** | **Airtable** | — | ✅ **LIVE** (Airtable MCP) | tracking-plan SoT + experiment register |
| **Error / obs** | **Sentry** (already instrumented) | Datadog | **REGISTRY** | connect for release-health reads (backbone §7) |

**Grounding:** none of GA4/PostHog/BigQuery/Metabase/Sentry has a **live MCP in this environment** — they are REGISTRY (one-click OAuth) or DIRECT (in-app). The live substrate is **Supabase MCP + Airtable MCP + the skill packs**, which is enough to compute the whole KPI tree from first-party events today; PostHog/GA4 reads layer on via the registry. **Connect-these:** PostHog, GA4-via-BigQuery, Sentry now; Metabase + BigQuery later. No warehouse is built until the data genuinely spans ≥3 systems in one report (overbuild guard).

---

## 2. The event-tracking plan

The tracking plan is the single source of truth (Airtable). **Convention:** `object_action`, snake_case, past tense. **Properties** typed + bounded (bands, never raw sensitive values). **Super-properties** (every event): `plan_tier`, `account_type` (b2c/b2b), `signup_cohort`. **Identify** post-consent + post-auth on the app **user_id (UUID)** — never email; pre-auth = anonymous id, stitched on identify. Core value action = executing a protocol step + fusing a blood/device data point.

| Event | Trigger | Key properties | Funnel | Ladder rung | Consent | PII |
|---|---|---|---|---|---|---|
| `signup_completed` | account created | method, referrer_source | acquisition | freemium | analytics | none |
| `labs_uploaded` | freemium lab upload | upload_method, panel_count | activation | freemium | analytics | none |
| `protocol_assigned` | protocol set for member | protocol_category | activation | core | analytics | none |
| `protocol_executed` | member logs a protocol step | protocol_category, streak_day | activation/retention | $99/mo core | analytics | none |
| `device_synced` | Oura/Withings sync | device_type | retention | core | analytics | none |
| `blood_synced` | panel result attached | panel_type, source | retention | core | analytics | none |
| `data_fused` | device + blood both present in window | fusion_window_days | retention | core (**wedge**) | analytics | none |
| `edge_score_viewed` | member opens score | score_type | retention | core | analytics | none |
| `drift_detected` | drift threshold tripped | severity_band | retention | core | analytics | none |
| `checkout_started` | pricing → checkout | tier, price_point | revenue | entry→flagship | analytics | none |
| `subscription_started` | first successful charge | tier, mrr_band | revenue | $99/mo core | analytics | none |
| `tier_upgraded` | plan change up | from_tier, to_tier | revenue | expansion | analytics | none |
| `flagship_purchased` | $4,997 purchase | — | revenue | flagship | analytics | none |
| `cohort_proposal_sent` | B2B proposal issued | company_size_band, value_band | revenue | B2B cohort | analytics | none |
| `cohort_signed` | B2B contract executed | company_size_band, contract_value_band | revenue | B2B cohort | analytics | none |
| `referral_sent` / `referral_converted` | referral issued / converts | channel | referral | — | analytics | none |

**Funnel map:** acquisition (`signup_completed`, `labs_uploaded`) → activation (`protocol_assigned` → `protocol_executed`) → retention (`device_synced`/`blood_synced`/`data_fused`/`edge_score_viewed`) → revenue (`checkout_started` → `subscription_started` → `tier_upgraded`/`flagship_purchased`; B2B `cohort_*`) → referral. **Offer-ladder map:** freemium (signup/labs) → $199 unlock → $99/mo core (protocol + fusion loop) → $4,997 flagship / $1,750 private → B2B cohorts + licenses.

**PII column is `none` on every row by construction.** The QA gate (`data:validate-data`) checks schema conformance, PII leakage, and orphan events against this plan in staging before any SDK change ships.

---

## 3. The KPI tree (instrumented) — composed from `/metrics-dashboard`

North-star, tags, and thresholds are `/metrics-dashboard`'s (WAPA); the money strip's definitions are `finance-ops`'; pipeline is `sales-crm`'. This skill wires each node to its sourcing event(s), owning domain, and query/tool — the bridge from the abstract tree to a board that recomputes from live data.

| Node | L/L | Sourcing event(s) / table | Owning domain | Query / tool |
|---|---|---|---|---|
| **WAPA** (north-star) | L | distinct paying users w/ ≥1 `protocol_executed` AND ≥1 (`device_synced` OR `blood_synced`), 7d | metrics-dashboard | `data:sql-queries` (Supabase) |
| New activated / wk | L | `signup_completed` → `protocol_executed` ≤7d | gtm-marketing | PostHog funnel |
| Activation rate | L | funnel `signup_completed` → first `protocol_executed` | analytics-stack | PostHog funnel |
| Adherence depth | L | median `protocol_executed`/active/wk | analytics-stack | `data:analyze` |
| Data-fusion rate | L | `data_fused` in 30d / active (**the moat metric**) | analytics-stack | `data:sql-queries` |
| Weekly retention | L | prior-week-active cohort return | analytics-stack | PostHog retention |
| Ladder expansion | L | `tier_upgraded` / base | finance-ops + sales-crm | Stripe + `data:analyze` |
| **Engaged MRR · NRR · CAC payback** | Lag | Stripe subscriptions × 30d-active flag | **finance-ops** (definitions) | Stripe → `finance:*` |
| **B2B cohort pipeline $** | Lag | `cohort_*` + CRM deals, weighted | **sales-crm** | Airtable MCP |

**KPI→P&L bridge:** `protocol_executed` (leading) → sustained adherence → Engaged MRR (lagging) → the subscription revenue line on the P&L. Investors and the board fund the leading metric because it predicts the lagging dollars — the money strip is pulled from `finance-ops`, never re-defined here.

---

## 4. The dashboard spec + reporting cadence

**Operating board** (to `dataviz` chart standards, built via `data:build-dashboard`): WAPA + 5 leading inputs = 6 rows, under the cap. WAPA as a target **stat-tile** with its floor (+8%/wk target; <+2%/wk 2wk → diagnose activation vs retention); inputs as sparked **trend lines**; **data-fusion rate highlighted** as the moat metric. A short **money strip** beneath (Engaged MRR / NRR / B2B cohort pipeline). One visual system, accessible, consistent light/dark — read `dataviz` before building.

| View | Audience | Cadence | Source / tool | Feeds |
|---|---|---|---|---|
| Ops-health strip (uptime, errors, event volume) | Operator | Real-time / daily | Sentry + Supabase logs | incident response |
| **Operating board** (WAPA + leading inputs) | Founder | **Weekly** | `data:build-dashboard` + `dataviz` over Supabase (Metabase later) | **`/weekly-ops-review`** (SHIPPED / PIPELINE $) |
| Money strip / board pack (lagging + KPI→P&L) | Founder / board | **Monthly** | `finance-ops` (`finance:financial-statements`) + `pptx`/Canva | investor update (**draft only**) |
| Experiment readouts | Founder / product | Per test | PostHog + `data:statistical-analysis` | ship/kill/iterate decision |

---

## 5. The experiment framework

**Hypothesis template:** *We believe [change] moves [primary metric] from [X] to [Y] because [mechanism]; we'll know at [significance] within [duration], without harming [guardrails].*

**Worked, pre-registered example — day-0 activation:**
> We believe a guided day-0 first-protocol walkthrough will move **activation rate** (signup → first `protocol_executed` ≤7d) from **32% → ≥40%** because first-execution friction is the drop-off, at **95%** within **3 weeks**, without harming **adherence depth or 7-day retention**.

- **Primary (OEC):** activation rate. **Guardrails:** adherence depth, 7-day retention.
- **Sizing** (`data:statistical-analysis`): baseline 32%, MDE +8pp, power 0.8, α 0.05 → required N/variant; EE weekly signup volume clears it in ~3 weeks. If it didn't → underpowered, iterate qualitatively.
- **Tool:** PostHog feature flag + experiment; logged in the Airtable experiment register (hypothesis, dates, result, decision).
- **Decision rule (fixed in advance):** **ship** if activation ≥40% and guardrails hold; **kill** if ≤34%; **iterate** between. No peeking; no metric-shopping.
- **Guards:** one to two live experiments at a time (focus); nothing below the powering threshold gets an A/B.

---

## Governance block (non-negotiable)

Cross-references `docs/engineering-backbone.md` §3/§5/§7/§9.

- **Consent-gated (§7).** GA4 + PostHog init behind consent; Do-Not-Track respected. Losing pre-consent data is correct behavior, not a bug.
- **PHI firewall — the hard gate (§5/§7/§9).** Blood/lab values, biomarker readings, and the scoring IP (Daily Edge, Drift, BRI, PhenoAge) **stay in Supabase behind RLS and never appear as PostHog/GA4 properties.** Analytics sees that `blood_synced` happened, never *what* the blood said. Standard **PostHog Cloud / GA4 / Vercel are not HIPAA-eligible** — PHI in them is a breach. **Sign-off required before any new event ships.**
- **PII minimization (§5).** UUIDs not emails; bands not raw numbers (`contract_value_band`, `mrr_band`, `severity_band`). Card data stays with Stripe.
- **Retention + deletion (§5).** Raw events kept to the minimum useful window; aggregates longer. DSAR/CCPA deletion wired through **PostHog person-delete + GA4 User Deletion API + the app DB** — a deletion that clears one but not the others is non-compliant.
- **DPAs (§9).** Signed with Google (GA4), PostHog, and Sentry before they process personal data; listed in the privacy policy + consent banner.
- **Audit (§7).** Every raw-data export, config change, and person-delete written to the append-only `audit_log`.
- **No vanity primary.** Raw pageviews/cumulative totals/follower counts never lead the board — pageviews demoted to visitor→signup conversion.
- **Secrets (§3).** Ingest keys are public-safe (`VITE_`-boundary aware); admin/query keys are env-only, never echoed or committed.

**Connect-these / needs-Tony:** (1) connect PostHog + GA4/BigQuery + Sentry via `SearchMcpRegistry`; (2) confirm DPAs signed; (3) **approve the PHI-exclusion posture (compliance hard gate)** before instrumenting new events; (4) approve any SDK/config change — this document is a spec, nothing is wired.
