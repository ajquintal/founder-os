---
name: Emberline — Build & Engineering Package
slug: emberline
artifact: 03-build-eng
stage: concept → validation-sprint (pre-launch)
composed-by: Founder OS BUILD/ENG skills — product-spec · venture-bootstrap; docs — engineering-backbone · tool-mcp-stack
loads-after: founder-profile/PROFILE.md · founder-profile/guardrails.md · undefined/00-venture-idea.md · undefined/01-concept.md
status: v0.1 — PRESSURE-TEST. Exercises the software-oriented build layer against a physical-goods venture with a light software footprint. All numbers illustrative (inherited from 00/01). Drafts-only; every spend/irreversible step gated to Tony.
date: 2026-07-13
---

# Emberline — Build & Engineering Package

> Reading order: (0) build verdict, (1) software needed vs bought, (2) product-spec for the one custom surface, (3) engineering & security posture that applies, (4) tool/MCP stack, (5) guardrails honored, (6) FRICTION log. This package composes the concept (01); it does not re-derive economics. It answers one question: **what do we actually build, what do we buy, and what engineering discipline applies when the "product" is candles, not code.**

---

## 0. Build verdict — buy, don't build

**Applying the governing question** ("does this compound wealth, or feel productive while diluting focus?") to the build layer: **writing software for Emberline is almost entirely the second thing.** The venture's product is a physical, refillable home-fragrance system. Its software footprint at the validation-sprint stage is a **configured storefront + a subscription app + lifecycle email/SMS + a wholesale channel + a 3PL integration + an internal ops/compliance base** — every one of them off-the-shelf. The correct "build" here is **integration and configuration, not a codebase.**

**There is no custom application that clears the overbuild guard at sprint stage.** `venture-bootstrap`'s economics gate is satisfied (01 priced the offer and the unit economics plausibly close *if refills ship batched and retention holds*) — but the leanest stack that serves the real need is a Shopify-centred commerce stack, not the React/Vite/Supabase/Stripe scaffold the skill defaults to. Scaffolding that repo would be Tony's #1 failure mode (complexity bias / build-the-cathedral) made literal.

**The single genuinely-custom surface — and it is deferred to post-validation — is a delivered-margin instrumentation + batched-refill guard** (§2). It exists only because 01's make-or-break finding — *delivered contribution per refill shipment is ≈$0 unless refills ship batched, and this is invisible at the headline 60% GM* — is a number **no off-the-shelf subscription app computes for you.** During the 90-day sprint even that is a spreadsheet, not code.

Everything below is written to that verdict.

---

## 1. Software needed vs bought — the build-vs-buy matrix

This is `venture-bootstrap`'s stack-decision matrix, **re-shaped for a physical-goods venture** (the skill's own matrix has no rows for these needs — see FRICTION F1). Default column = the off-the-shelf pick; "Build instead?" = what a SaaS-reflex would have hand-built, and why we don't.

| Real need | Off-the-shelf choice (buy) | Why this, not custom | Build instead? (rejected) |
|---|---|---|---|
| Storefront, catalog, cart, **checkout**, **PCI**, **sales-tax nexus**, inventory | **Shopify** (Basic→Shopify plan) | Fastest path to a real order; PCI **SAQ-A handled by the platform** (PAN never touches us); Shopify Tax handles multi-state nexus; native inventory | A React/Vite storefront + Stripe Checkout + a tax service — months of work to under-deliver Shopify's day-one surface |
| **Refill subscription** (the recurring engine) | **Skio** (recommend) or **Recharge** (incumbent) | Native Shopify Checkout-Extensibility subscriptions; **hard requirement: prepaid/batched multi-unit cadence** (quarterly 2–3 packs — see §2) + Klaviyo event hooks + a passwordless customer portal | Stripe Billing + a custom portal. Wrong tool: these are **commerce** subscriptions on the order, not SaaS seats (see FRICTION F16) |
| Lifecycle **email + SMS**, flows, list, reviews | **Klaviyo** (+ Shopify Email for basics) | E-com-native; consumes Shopify + subscription events; owns the retention motion that 01 says the whole model rests on | Customer.io / a custom ESP — no e-com event model, more wiring, less ROI |
| **Wholesale** (boutiques, designers, hotels; net-30/prepaid, MOQ, line sheet) | **Faire** (discovery) + **Shopify B2B / wholesale channel** (direct accounts) | Faire brings buyer demand + handles net-terms risk; Shopify B2B gives keystone price lists to direct accounts | A custom B2B portal (reorder, net-30, line sheet) — real work, zero launch value; revisit only at account volume |
| **Fulfillment, pick-pack, shipping, labels, breakage-aware packaging** | **3PL** (e.g. ShipBob-class) + **ShipStation** for rate-shopping/labels; **in-house pour+pack** first | Heavy/fragile + dim-weight freight is a margin driver (01 §3); a 3PL API + rate-shopping is bought, never built | A custom OMS/WMS — absurd at this scale |
| **Hazmat-compliant shipping** for diffuser oils (flammable liquid; DOT/IATA limited-qty) | **Deferred** — diffuser line is out of scope at launch (candles-first) | 01 explicitly defers the diffuser line for exactly this reason; no hazmat build needed for a candles-only sprint | A hazmat routing engine — premature; do not build |
| **Ops system-of-record: PLM, batch records, burn-test log (ASTM F2417), lot tracking, IFRA/SDS doc control, inventory/reorder** | **Airtable** (`product-ops` skill) + Google Drive for SDS/IFRA PDFs | This is the real "internal app," and per `tool-mcp-stack` Airtable *is* the system-of-record for everything non-code. Configured base, not a coded PLM | A custom PLM/QMS web app — the classic overbuild trap for a maker brand |
| **Scent-match / discovery→vessel** conversion aid (attacks 01's crux conversion) | A Shopify **quiz app** (RevenueHunt/Octane-class) or Typeform embed | Off-the-shelf; A/B-able; the conversion is the metric, the quiz is not the moat | A custom quiz microservice — no |
| **Web/product analytics** | **Shopify Analytics** + **GA4** (consent-gated) | Covers acquisition + funnel at launch; add **PostHog** free tier only if funnels outgrow it | A custom analytics layer — no |
| **Brand/creative, decks, PDPs, line sheet, labels** | **Canva** (MCP live) + `brand-design`/`canvas-design` | Carries the design bar; label artwork **routed to compliance review** before print (§3) | — |
| **Payments processor underneath** | **Shopify Payments** (Stripe under the hood) | Keeps PCI scope on the platform; one less integration | A direct Stripe integration — reintroduces PCI scope we just outsourced |

**Custom code written at launch: none.** Custom code written during the validation sprint: **none** (the margin ledger is a spreadsheet). Custom code plausibly justified **post-validation, if retention proves out:** exactly one thin surface — §2.

**"Hello-world deployed" — physical-goods variant.** `venture-bootstrap`'s first-week checklist ends at *"a live URL processing one Stripe test transaction"* (method.md §6). That milestone doesn't fit; here is the honest analog — **one real end-to-end order, on the live store, refunded:**

1. Shopify store stood up on the dev/trial plan; brand theme applied; ≤4 candle scents + The Vessel + Discovery Set as products. **[approval: Tony — creates account]**
2. Subscription app (Skio/Recharge) installed; **refill product configured as a prepaid quarterly 2–3 pack** (not single-monthly — the margin guard, §2). **[approval: connects app]**
3. Klaviyo connected; three flows drafted (welcome/discovery→vessel, post-purchase, refill-reminder) — **drafts, not live-sending** (guardrail).
4. 3PL/ShipStation sandbox connected; one product's dimensions + protective packaging profile entered.
5. Airtable ops base live: SKUs, lots, **burn-test log (ASTM F2417) with a pass/fail gate**, IFRA/SDS links, inventory.
6. **Place one real test order** through live checkout (Shopify Bogus Gateway or a real order immediately refunded), confirm: subscription created, order flows to 3PL, a shipping label + rate returns, Klaviyo confirmation fires, Airtable inventory decrements. **[approval: none — no net spend; refunded]**
7. Done = **the order path is verified in the live store, not assumed** — the physical mirror of "verified in prod."

Steps 3–7 of the skill's original checklist (provision Supabase, write the first migration + RLS, ship an edge function, wire a UI page read/write, CI green) **have no analog and are correctly skipped** — which is itself the finding (FRICTION F3).

---

## 2. Product-spec — the one custom surface

> **Scope discipline first.** Per `product-spec`'s overbuild guard (smallest shippable slice), during the 90-day validation sprint this surface is **a spreadsheet / Airtable margin ledger, maintained by hand from one real 3PL pack-out** — 01's day-30 condition. The spec below is the **post-validation** build, written only so it's ready if refill retention proves out and manual tracking stops scaling. It is the *only* custom code this venture plausibly needs, and it exists because the number it produces is the one the whole model is most sensitive to.

### Feature: Delivered-Margin Ledger + Batched-Refill Guard

**1. Problem & success metric.**
Problem: subscription apps report *revenue*, not *delivered contribution* — so the number 01 identified as make-or-break (contribution per refill shipment, ≈$0 if refills ship singly) is invisible in the tools we bought, and nothing prevents the subscription from silently reverting to a margin-destroying single-refill monthly cadence.
Success metric: **100% of refill shipments carry a computed delivered-contribution figure, and the share of shipments below the $8/shipment floor is ≤5%** (01's kill threshold is "≤$8 and unfixable by batching").

**2. User stories** (roles from the venture context — founder/operator; no consumer-facing role):
- As the **operator**, I want every fulfilled refill order tagged with its true delivered contribution (price − COGS − pick-pack − dim-weight freight − breakage allowance − fees), so that I can see the margin the headline GM hides.
- As the **operator**, I want any subscription whose next shipment is a *single* refill flagged, so that batched-cadence drift never ships a ≈$0-contribution parcel.
- As the **founder**, I want a weekly rollup of contribution-per-shipment and % below floor, so that the day-30 / day-90 kill checks in 01 are answered by data, not vibes.

**3. Acceptance criteria (Given/When/Then).**
- AC1 — *Given* a fulfilled refill order webhook from Shopify, *When* it is processed, *Then* one `shipment` row is written with `delivered_contribution` computed from the current cost inputs, and the raw event is stored.
- AC2 — *Given* the same Shopify event delivered twice (retry), *When* processed, *Then* exactly one `shipment` row exists (idempotent on the Shopify event/order id).
- AC3 — *Given* a webhook whose HMAC signature fails verification, *When* received, *Then* it is rejected `401` and no row is written.
- AC4 — *Given* an upcoming subscription charge containing a single refill unit, *When* the nightly guard runs, *Then* a `flag` row of type `single_refill` is created for that subscription.
- AC5 — *Given* a shipment whose `delivered_contribution` < `$8`, *When* written, *Then* it is marked `below_floor = true` and included in the weekly rollup count.
- AC6 — *Given* the ledger is queried by anyone other than the internal service token, *When* the request arrives, *Then* it is denied (no public/consumer access).

**4. Data model** (ownership posture noted per `product-spec`'s rule — adapted, see below):

```
table: shipment
  id                    uuid pk
  shopify_order_id      text unique not null      -- idempotency key (AC2)
  subscription_id       text
  units                 int not null              -- refills in this parcel (batching signal)
  revenue_cents         int not null
  cogs_cents            int not null
  pickpack_cents        int not null
  freight_cents         int not null              -- dim-weight, from 3PL rate
  breakage_cents        int not null              -- allowance (2–5%)
  fees_cents            int not null              -- ~3% processor
  delivered_contribution_cents int not null       -- computed (AC1)
  below_floor           bool not null default false
  raw_event             jsonb                     -- provenance
  created_at            timestamptz default now()

table: subscription_flag
  id                    uuid pk
  subscription_id       text not null
  flag_type             text not null             -- 'single_refill' | ...
  created_at            timestamptz default now()
  resolved_at           timestamptz null
```

**Ownership / access rule (the RLS analog, honestly stated).** There is **no consumer `auth.uid()`** in this system — the ledger is an **internal ops surface with no public role.** If built on Supabase, the rule is: **RLS on, zero client policies, service-role writes/reads only** (the doc's own "system-managed table" pattern — SELECT-own is dropped because there is no owning end-user). If built as a Cloudflare Worker + KV/D1 or a Shopify-embedded app, the equivalent is **a scoped service token; no public route; admin-only dashboard behind the Shopify app's session.** Either way the boundary is *service-token-only*, not per-user RLS — which is where `product-spec`'s "state the RLS rule for every user-owned row" contract had to be reinterpreted (FRICTION F8).

**5. Interface surface.**
- `POST /webhooks/order-fulfilled` — input: Shopify order webhook (raw body); auth: **Shopify webhook HMAC** verified on the raw body (this is Shopify's analog of the starter's Stripe-signature check); `verify_jwt = false` **but self-authenticates by HMAC** (exactly the doc's webhook exception); output `200` `{ok:true}` / `401` on bad signature / `409`→treated as success on duplicate. Idempotent on `shopify_order_id`.
- `GET /internal/rollup?from=&to=` — input: date range; auth: **internal service token only**; output: `{shipments, avg_contribution_cents, pct_below_floor}`; `403` for any non-service caller (AC6).
- `nightly guard job` — trigger: cron w/ shared secret (doc's cron exception); scans upcoming subscription-app charges via the app's API; writes `single_refill` flags (AC4).

Cost inputs (`cogs/pickpack/breakage/fees` rates) live in **config/env, not code** — updated as real 3PL numbers land; **secrets (Shopify Admin API token, subscription-app API key, service token) are env/vault only, names-only in this doc** (guardrail).

**6. Edge cases & failure modes.**
Empty/oversized/malformed webhook → validate at boundary, reject `400`. Duplicate event → idempotent (AC2). Bad HMAC → `401` (AC3). Subscription-app API down during nightly guard → retry w/ backoff, alert, do not silently pass. Refund/partial refund after a shipment → write a compensating adjustment, never mutate the original row (append-only). Currency/units always integer cents (no float money). Missing dimension for freight → mark `freight_cents` estimated + flag for review, never $0.

**7. Test plan (AC → test).**

| Acceptance criterion | Level | Test / assertion |
|---|---|---|
| AC1 contribution computed | unit | `computeContribution(order)` returns expected cents from a fixture |
| AC2 idempotent on order id | integration | same event twice → 1 row; unique-constraint holds |
| AC3 bad HMAC rejected | integration | tampered body → `401`, 0 rows |
| AC4 single-refill flagged | unit + integration | 1-unit upcoming charge → `single_refill` flag row |
| AC5 below-floor marked | unit | contribution < $8 → `below_floor=true`, counted in rollup |
| AC6 no non-service access | integration | anon/consumer token on `/internal/rollup` → `403` |

Tests travel with the function. There is **no e2e/Playwright layer** — the "UI" is a Shopify-app admin page or an Airtable interface, not our own React app (FRICTION F11); the acceptance test for the *bought* surfaces (§1) is a **manual QA checklist + the one live test order**, not code.

**8. Non-goals + rollout.**
Non-goals: consumer-facing dashboards; predictive churn; anything diffuser/hazmat; replacing the subscription app's own portal; a general BI tool (that's `data:*` skills over Shopify/Klaviyo). Rollout: single function behind a flag; **the sprint runs on the manual spreadsheet version**; ship the coded version only after retention clears 01's day-90 gate. Done = merged + one real fulfilled order writes a correct `shipment` row in the live datastore + rollback = flag off, revert to spreadsheet (nothing consumer-facing to break).

---

## 3. Engineering & security posture that applies

`engineering-backbone.md` is the world-class spine — but it is written for a Supabase/React/Stripe SaaS. Mapped honestly onto a buy-not-build physical venture, its controls fall into four buckets:

**A. Transfers cleanly (do these).**
- **§10 Roles & access governance** — the section that survives fully intact. Least-privilege, **MFA on every tool account, no shared logins, scoped/revocable API tokens, an access register reviewed quarterly.** *But the doc's access matrix lists GitHub/Supabase/Vercel/Stripe/Airtable/Twilio — and omits the tools that actually matter here.* The Emberline register must cover: **Shopify (owner/staff/API app scopes), the subscription app, Klaviyo, Faire, the 3PL/ShipStation, and the payment/bank account** (FRICTION F17).
- **§3 Secrets** — the one custom function's tokens (Shopify Admin API, subscription-app key, service token) are **env/vault only, names-only, rotated on exposure/offboarding.** The pre-commit secret-guard applies to that function's repo.
- **§5 Data & privacy + §9 GDPR/CCPA** — **customer PII lives in Shopify + Klaviyo, not a table we own.** Controls that apply: **PII minimization; a DPA signed with every subprocessor (Shopify, the subscription app, Klaviyo, the 3PL, GA4); public privacy policy + cookie/consent banner; a DSAR/deletion workflow that runs through Shopify/Klaviyo's tooling.**
- **§7 Observability** — **consent-gated analytics** (GA4/PostHog fire only post-consent; no PII in events). Error tracking applies only to the one custom function.
- **§4 Runtime safety** — applies *only* to the custom webhook: **HMAC-verified on raw body, idempotent, method-guarded, safe errors** — Shopify's webhook model is the direct analog of the starter's Stripe-webhook pattern.

**B. Satisfied by the platform (verify, don't build).**
- **PCI-DSS → SAQ-A** is achieved by **Shopify Payments/Checkout** — PAN never touches us. The backbone's PCI control assumes *we* choose a hosted processor to stay SAQ-A; here the platform owns it outright (FRICTION F14). Keep the processor's attestation on file.
- **Encryption at rest/in transit, backups** — Shopify/Klaviyo platform-managed. The doc's "perform a real restore drill" (§6) targets a Supabase DB we don't have; the vendor holds the data.

**C. Not applicable at launch (no custom DB/app).**
- **§2 Identity/authn/authz + RLS-by-default, `verify_jwt`, anon/service-role split, the policy-audit SQL** — the doc's declared "hard security core" and "the security boundary." **None of it applies** — there is no custom Postgres, no user JWTs we issue, no edge functions except the deferred §2 surface. A physical venture inherits **almost none** of the starter's enforced core, which strains the doc's framing that a venture "is not world-class engineered until every control is enforced" (FRICTION F15).
- **§8 CI/CD (lint/typecheck/unit/build/e2e), branch protection** — nothing to run it against until/unless §2 ships. The real launch quality gate is a **theme-QA + test-order + label-compliance checklist**, which the doc has no slot for.

**D. MISSING from the backbone entirely — and these are Emberline's actual hard dependencies.**
`engineering-backbone.md` §9 "compliance-by-design" is exactly the right instinct ("decide the regime at concept, it constrains vendor/data/GTM") — but its matrix has **only GDPR/CCPA, HIPAA, LegitScript, PCI-DSS, SOC2.** It has **no row for a physical, manufactured, flammable consumer product.** The regimes 01 flags as gating the *first sale* are absent (FRICTION F13). The package must add them:

| Regime (missing from backbone) | Applies when | Control | Gate |
|---|---|---|---|
| **FDA cosmetic / FPLA labeling** | Any scented consumer product sold in US | Identity, net-quantity, maker name/address on every unit; sensory scent language only | Before first sale |
| **ASTM F2417 (fire safety) burn testing** | Every scent × vessel × wick combo | Non-optional product-dev gate; pass logged in the Airtable batch record before a SKU is sellable | Before that SKU sells |
| **ASTM F2058 candle safety warnings** | Every candle unit | Mandatory warning label ("never leave a burning candle unattended," keep from children/pets) | On every unit |
| **IFRA fragrance limits** | Every fragrance formula | Respect per-material usage limits; keep IFRA certificate + SDS on file (Drive) | Before formulation is final |
| **DOT/IATA + CPSC/FHSA hazmat** | Flammable diffuser oils | Limited-quantity shipping rules + hazard labeling — **reason the diffuser line is deferred** | Before any diffuser sale (deferred) |
| **CA Prop 65** | Listed fragrance components | Warning or reformulation | Before selling into CA |
| **FTC Green Guides** | "clean/natural/non-toxic/recyclable/refill" claims | Substantiate or don't say it | At copy/label review |
| **Product-liability insurance** | Fire risk — non-negotiable | Bound **before the first sale** (01 condition #2) | Before first sale |

**The physical go-live gate (replaces the backbone's "cleared to switch Stripe to live keys" minimum bar).** For Emberline you are **not cleared to take a real order** until: product-liability insurance is bound · ASTM F2417 burn testing passed for every live SKU · FPLA + F2058 labeling correct on every unit · no medical/aromatherapy claim anywhere in copy (guardrail) · a real 3PL pack-out proves delivered contribution > $8/shipment · GDPR/CCPA baseline (privacy policy, consent, DPAs) live in Shopify · tool-account MFA + access register done. Stripe keys, RLS, and `verify_jwt` do not appear on this list (FRICTION F12).

---

## 4. Tool / MCP stack — physical-goods shape

`tool-mcp-stack.md`'s master table and its "72h minimum viable stack" are the SaaS spine (Supabase/Vercel/GitHub/Stripe/Airtable/Workspace/SendGrid/Canva). For a venture whose *entire product is commerce + physical ops*, the spine is different — and most of it is **not connectable as an MCP in this session** (FRICTION F19–F21). Honest current-state:

| Function | Tool | In-session availability | Access posture |
|---|---|---|---|
| Storefront / checkout / PCI / tax / inventory | **Shopify** | **Not present** in the stack table or as an MCP here (registry check needed) | Owner + scoped staff; custom-app tokens least-scope |
| Refill subscription | **Skio** / **Recharge** | **No MCP**; app configured in Shopify admin | Scoped API key |
| Lifecycle email/SMS | **Klaviyo** | **REGISTRY** (per stack doc) — connectable, not live | Scoped key; **drafts, never auto-send** (guardrail) |
| Wholesale | **Faire** + Shopify B2B | **No MCP** | Account owner |
| Fulfillment / shipping | **3PL** + **ShipStation** | **No MCP** | Scoped API key |
| Ops / PLM / batch / compliance records | **Airtable** (`product-ops`) | **MCP LIVE** + skill | Scoped PAT; base per function |
| Docs / SDS / IFRA certs / line sheet | **Google Drive** | **MCP LIVE** | Drive scoped |
| Brand / creative / labels | **Canva** | **MCP LIVE** + skills | Editor; **labels → compliance review before print** |
| Analytics | Shopify Analytics + **GA4** (+PostHog opt.) | GA4 DIRECT; PostHog REGISTRY | Consent-gated; no PII |
| Founder inbox | **Gmail** | **MCP LIVE (drafts-only)** | Never auto-sends |

**What the OS can operate today vs. can't.** Live MCPs that *do* apply: **Airtable** (the ops/compliance system-of-record — the highest-leverage one here), **Drive, Canva, Gmail (drafts).** The tools that *are* Emberline's product — **Shopify, the subscription app, Faire, the 3PL** — have **no live MCP in this session**, so the OS can draft configs, copy, flows, and batch-record schemas, but **cannot touch the real storefront or fulfillment system-of-record.** That's the honest ceiling of automation for this archetype right now.

**NEEDS TONY (connect; none blocks the sprint):** Shopify (+ subscription app) account and API scopes · Klaviyo (registry OAuth) · Faire · a 3PL + ShipStation. Each connected at **least privilege**, MFA on, recorded in the access register.

---

## 5. Guardrails honored

- **Drafts-only.** Every Klaviyo flow, PDP, line sheet, ad, and label above is prepared as a **draft**; nothing is published or sent, no email/SMS auto-fires, no listing goes live without Tony's explicit approval.
- **No spend / $0 default — with the honest exception 01 already escalated.** This is the rare venture that **cannot be validated at literal $0** (irreducible ceramic MOQ + product-liability insurance + burn testing precede any sale). No dollar moves without Tony's written sign-off; the build layer commits **$0** on its own — all account creation and app installs are flagged **[approval: Tony]**.
- **Secrets are names-only.** Every credential above (Shopify Admin API token, subscription-app key, Klaviyo key, 3PL key, service token) is referred to by **name only**; real values live in env/vault, are never printed/logged/committed, and rotate on exposure or offboarding.
- **No medical / aromatherapy claims.** Hard gate at copy and label review — no "stress," "sleep," "purify," "wellness," "aromatherapy benefit." Scent described sensorially only. Banned-word list from 00 enforced in all draft copy.
- **Human-gate irreversible / production actions.** Every irreversible commitment — ceramic MOQ purchase (8–12 wk lead), the co-manufacturer contract, going live on Shopify, any live customer send, any spend — is **stopped and escalated to Tony with a stated rollback path**, never taken unattended.

---

## 6. FRICTION log — where the software-oriented build layer strained

Every place the BUILD/ENG layer assumed a custom SaaS app / RLS / Supabase / subscriptions / a codebase and did **not** gracefully handle "mostly off-the-shelf + physical ops." Skill/doc + specific issue. (These are findings for the hardening pass, not applied edits — substantive changes are proposed, not auto-made.)

**venture-bootstrap**
- **F1 — Stack-decision matrix is SaaS-only.** Every row maps to React/Vite/Supabase/Stripe/edge-functions; "Deviate when" offers only Next.js/Expo/Paddle (still code). No row or branch for **storefront/e-commerce platform, subscription-commerce app, 3PL/OMS, wholesale marketplace, PLM/batch records, or shipping/hazmat** — and no "buy a platform instead of building" path. The correct Emberline answer ("don't scaffold — configure Shopify") is inexpressible in the matrix.
- **F2 — Repo scaffold tree assumes you're writing an app.** method.md §2 hard-codes `src/`, `supabase/functions/`, `migrations/`, `vite.config.ts`. There is no launch-time repo for a buy-not-build venture and no alternative "config/ops workspace" shape (theme repo? Airtable base? no slot).
- **F3 — "Hello-world deployed" = live URL + one Stripe test transaction.** method.md §6 / output contract. Steps 3–7 (provision Supabase, first migration+RLS, edge function, UI read/write, CI green) **have no physical-goods analog and are skipped wholesale.** The real first milestone is "one real end-to-end order (store→subscription→3PL→label→tracking), refunded." No physical variant of the checklist exists.
- **F4 — Economics gate is code-blind to physical prerequisites.** §0 gates on positioning + unit economics but has no notion that **product-liability insurance, ASTM F2417 burn-testing, and a proven delivered-margin pack-out** are the actual blocking gates. It treats "build" as "write code," so it never asks "is the product legally sellable / physically shippable?"
- **F5 — CI section (§5) presumes Node/lint/typecheck/unit/build.** For a config-first venture there's nothing to lint; the real quality gate is theme-QA + a test order + a label/compliance check, which the skill can't represent.
- **F6 — Reversibility framed as cloud infra ("nothing that can't be torn down in a day").** The genuinely irreversible commitments here are physical (ceramic MOQ at 8–12 wk lead, inventory cash, a co-man contract), not infra — the rule doesn't bind where it matters.

**product-spec**
- **F7 — Output contract mandates a Supabase-shaped custom backend.** "Data model with ownership/RLS" + edge-function/`verify_jwt` interface surface + AC→test as unit/integration/e2e assume you own the code. For a Shopify/Klaviyo-configured surface there is no shape to spec a *configured off-the-shelf* product (a cadence setting, a Klaviyo flow, a theme).
- **F8 — "Every user-owned entity states its RLS rule."** There is no consumer `auth.uid()` — customer data lives in Shopify/Klaviyo. The one custom surface is internal/service-token-only; I had to reinterpret RLS as "no public role, service-token boundary." The skill offers no substitute for "the vendor holds the data" or "internal-only ownership."
- **F9 — Load-first step 3: "inherit the target repo's CLAUDE.md/stack."** There is no repo. The skill assumes a codebase context that doesn't exist for buy-not-build.
- **F10 / F11 — Interface-surface + test-plan machinery has no path for a bought surface.** You cannot write the acceptance test for Shopify checkout as your own Playwright e2e; the honest acceptance test is a manual QA checklist + one live test order. "Tests travel with the asset" has no meaning for a configured Klaviyo flow.

**engineering-backbone.md**
- **F12 — The whole minimum-bar go-live gate is "cleared to switch Stripe to live keys," framed on RLS/`verify_jwt`/anon-service split/VITE_* boundary.** Emberline takes money via Shopify, not our Stripe integration; nearly the entire bar is inapplicable, and the real go-live gate (insurance bound, burn-testing passed, labeling correct, delivered-margin proven) appears nowhere. A builder would either wrongly declare "N/A, we're fine" or force controls that don't exist.
- **F13 — §9 compliance matrix omits physical-product regimes entirely (biggest finding).** Only GDPR/CCPA, HIPAA, LegitScript, PCI-DSS, SOC2 — no FDA/FPLA, ASTM F2417/F2058, IFRA, DOT/IATA hazmat, Prop 65, FTC Green Guides, or product-liability insurance. These are exactly the hard dependencies 01 says gate the *first sale*. The "decide the regime at concept" instinct is right; the matrix can't hold this venture's regime set.
- **F14 — PCI row assumes *you* wire a hosted processor to earn SAQ-A.** With Shopify Payments, PCI scope is fully the platform's; the doc doesn't acknowledge the fully-outsourced-storefront case.
- **F15 — §2 (RLS/authn/authz), the doc's declared "hard security core / the security boundary," is ~entirely N/A.** A buy-not-build venture inherits almost none of the starter's enforced core, straining the framing that a venture "is not world-class engineered until every control is enforced." There's no "your security surface is vendor-config + access governance instead" branch.
- **F17 — §10 access matrix (the section that otherwise transfers best) lists the wrong tools.** GitHub/Supabase/Vercel/Stripe/Airtable/Twilio/PostHog — but **not Shopify, the subscription app, Faire, the 3PL, ShipStation, or the hazmat carrier account**, which are the ones that actually hold money/data/PII here.
- **F18 — Backups/DR (§6) is "lose the database and get it back" (Supabase PITR + restore drill).** The real reliability risk is **physical**: inventory stock-outs, a ceramic supplier at 8–12 wk lead, in-transit breakage, Q4 fulfillment capacity. The backbone has no concept of supply/fulfillment reliability.

**tool-mcp-stack.md**
- **F19 — Shopify/subscription-app/Faire/3PL/ShipStation are absent from the master table** (and Shopify isn't even named); the e-commerce case is a single "when to swap" bullet that under-specifies (no subscription-app pick, no 3PL, no hazmat carrier, no PLM). For a venture whose entire product *is* commerce, the operative reference is the wrong shape.
- **F20 — The "72h minimum viable stack" is the SaaS eight** (Supabase/Vercel/GitHub/Stripe/Airtable/Workspace/SendGrid/Canva) and is presented as "the fewest tools that cover every function" — but it covers a SaaS's functions, with **no storefront, no inventory, no fulfillment.** Emberline's 72h spine is a different eight (Shopify + subscription app + Klaviyo + Faire + 3PL + Airtable + Drive + Canva).
- **F21 — The physical-ops tools have no live MCP in this session.** The tools that *are* Emberline's product (Shopify, subscription app, Faire, 3PL) aren't LIVE/OFF/SKILL; the OS can draft configs but can't operate the real storefront or fulfillment system-of-record. Only Airtable/Drive/Canva/Gmail apply from the live set.
- **F16 — Availability tags imply Stripe covers "subscriptions."** For Emberline, subscriptions run through the **Shopify subscription app (Skio/Recharge), not Stripe Billing.** A builder following the stack doc would wire Stripe subscriptions that duplicate/conflict with the commerce-subscription layer — the SaaS "subscription = Stripe Billing" reflex is wrong for physical goods.

**Systemic pattern.** All four assets share one root assumption: **"build" means "write and deploy a custom Supabase/React/Stripe app," and "engineering" means securing that app.** For a venture whose product is physical and whose software is bought, the build layer's real job is **integration + configuration + an internal ops/compliance base + vendor access-governance + a physical-product compliance regime** — none of which the current skills/docs have a first-class shape for. The single highest-value fix: give `venture-bootstrap` a **buy-not-build / commerce branch**, and give `engineering-backbone` §9 a **physical-product compliance regime row-set** plus a **non-code go-live gate.**
