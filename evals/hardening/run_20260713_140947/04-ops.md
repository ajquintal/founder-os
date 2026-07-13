---
name: Lustre — Operations Package (finance · CRM · legal · org · analytics · support)
slug: lustre
artifact: 04-ops
stage: concept → pre-build (concierge liquidity test)
composes: finance-ops · sales-crm · legal-pack · org-roles · analytics-stack · support-success (+ finance:* · legal:* · data:* · operations:* · customer-support:* packs; Airtable / Stripe-Connect / Gmail / Lucid MCPs)
loads-after: founder-profile/PROFILE.md · founder-profile/guardrails.md · 00-venture-idea.md · 01-concept.md · 03-build-eng.md
date: 2026-07-13
status: v0.1 — PRESSURE-TEST. Drafts-only, $0 spend, secrets names-only. Nothing filed, signed, paid, provisioned, or sent. Every tax/legal judgment carries a CPA/attorney gate. All figures illustrative (consumed from 01-concept, not re-derived).
note-on-path: Task named the output `undefined/04-ops.md`. That is an un-interpolated template variable; the venture brief requires "no stray undefined/ directory." Written to the run directory beside 00/01/03 per the NN- convention — same handling 01 and 03 used.
loads-first-correction: The task framed Lustre as a "physical-goods DTC+wholesale brand" and asked for "goods economics + COGS/inventory," "wholesale accounts," "lease + supply + sale-of-goods," and "food-safety." Lustre is none of those. It is a two-sided local-services marketplace: money is take-rate on third-party GMV, there is zero inventory, and there are no goods sold. This package is built for what the venture IS; every goods/SaaS assumption that had to be corrected is logged in the FRICTION appendix (§7).
---

# Lustre — Operations Package

The single load-bearing fact for this layer: **Lustre's money is a ~22% take-rate on third-party GMV — not product margin, not a SaaS seat, and not inventory sold.** 78% of every dollar is a pass-through payout to an independent detailer and never belongs to Lustre. The business is gated by **two-sided liquidity** (matched supply ↔ demand in a zip code), and its largest real costs are **trust costs** — background checks, insurance, and a reserve-backed damage guarantee — not cost of goods.

Two structural corrections govern this whole package, because most operations skills were built to reason about a one-sided digital funnel (SaaS) or a physical-goods P&L (DTC/retail), and Lustre is neither:

1. **It is a marketplace, not goods.** No inventory, no COGS, no landed cost, no cash-conversion cycle, no wholesale of product, no sale-of-goods terms, no food safety. The finance archetype is **GMV × take-rate + a seller-payout liability**; the survival number is **payout float + guarantee-reserve adequacy + liquidity**, not `cash ÷ burn` against an inventory position.
2. **It is two-sided, not one-sided.** Every function that a single-sided skill runs once (acquisition, onboarding, support, the funnel, the CRM) Lustre runs **twice** — once for demand (customers) and once for supply (detailers) — and the binding constraint lives on the **supply** side, which the demand-centric skills have no native slot for.

The verdict from `01-concept §5` governs sequencing: **CONDITIONAL GO — fund the concierge liquidity test, not the build.** So this package is filled to *operate a concierge/manual MVP that can take one real two-sided dollar* and is explicit about what stays on the shelf until liquidity is proven (guarding Tony's #1 failure mode, overbuild).

Guardrails in force throughout: **drafts only** (no contract signed, no email sent, no board pack delivered); **$0 spend** (CPA / IC attorney / insurance broker / FCRA vendor engagements each need Tony's sign-off); **secrets names-only** (Stripe Connect keys, background-vendor keys referenced by location, never echoed); **no medical claims** (N/A here, but the same discipline binds eco/"waterless" claims — FTC Green Guides); **human-gate every irreversible action** (entity filing, contract signature, payout configuration, detailer deactivation, damage-claim payout).

---

## 0. Model-selection gate — read before any section (finance-ops Load-first #2)

`finance-ops` is emphatic: read the venture's money model first; **subscription/SaaS is one archetype, not the default**, and *"never ship a deferred-revenue/MRR setup for a business that carries inventory"* — and, symmetrically, never ship an inventory/COGS setup for a business that carries none. Lustre's archetype, decided here and applied to every section:

| Archetype | Applies to Lustre? | What it selects |
|---|---|---|
| **Marketplace / platform** | **PRIMARY — yes** | Net-revenue (take × GMV), **payouts-payable liability**, principal-vs-agent, facilitator sales-tax question, both-sided retention, liquidity as the north-star |
| **Subscription** | **Secondary — blended (Maintenance Plan)** | **Deferred revenue** on prepaid plans + an MRR *sub*-strip (never the primary money model) |
| **Services** | **Tertiary — B2B fleet/dealer only** | Contracted GMV at a thinner take; MSA/SOW paper; the closest thing Lustre has to a "wholesale account" |
| **Goods (DTC / wholesale / retail)** | **NO** | Inventory, COGS, landed cost, fulfillment, cash-conversion cycle — **all N/A** (detailers use their own kit; Lustre sells no product) |

Everything below is bent to the top row, with the subscription block applied only to the Maintenance Plan and the services block only to B2B.

---

## 1. Finance — the take-rate ledger, not a goods P&L (`/finance-ops`)

**Correction applied:** the task asked for "goods economics + COGS/inventory + working capital." Lustre has none. `finance-ops` already carries a first-class marketplace archetype, so this section uses it and marks the goods blocks N/A with the reason, rather than contorting a service marketplace into a product P&L.

### 1a. Chart of accounts — base + marketplace block + subscription block (no goods block)

| Range | Account | Marketplace note |
|---|---|---|
| **1000** Operating cash · **1010** Tax-reserve cash | | Sweep an est. % of *take* (not GMV) for income + TPT |
| **1050 Stripe Connect balance / funds in transit** | asset | Money collected at booking, held until job-verified, then paid out — Lustre's cash only to the extent of its take |
| **1100** Accounts receivable | | Light — only B2B fleet invoices on terms; consumer + subscription collect at booking |
| **2100 Detailer payouts payable (seller balances)** | **liability** | **Money held on behalf of detailers — NOT revenue, NOT COGS.** The defining marketplace account |
| **2200 Sales-tax (AZ TPT + city privilege) payable** | liability | Facilitator-vs-seller treatment is a CPA flag (below) |
| **2300 Guarantee / damage-claim reserve** | liability (provision) | A booked loss-contingency reserve (ASC 450) — the guarantee is a real reserved cost, not a slogan |
| **2400 Deferred revenue — Maintenance Plans** | liability | Prepaid subscription take released as earned (the *only* deferred-revenue line; the transactional business has none) |
| **3000** Members' capital · retained earnings · distributions | equity | LLC (see §3) |
| **4000 Commission / take revenue (net)** · **4010** Maintenance-plan take · **4020** B2B/fleet take · **4900** Refunds/credits (contra) | revenue | **Book net take, not GMV** — if Lustre is the *agent* (ASC 606 principal-vs-agent flag) |
| **5000 Payment processing (on full GMV)** · **5010 Background checks / FCRA (supply cost)** · **5020 Guarantee claims paid (draw on 2300)** · **5030 Insurance — platform GL allocation** | cost of revenue | Processing is levied on GMV Lustre never keeps → ~$5.78 on a $189 job is ~14% of the $42 take. **This is the marketplace analog of COGS — there is no product cost** |
| **6000** OpEx — ops/support labor · software · marketing · professional fees · insurance | | |
| ~~1300 Inventory / 1310 in-transit / 1320 vendor deposits~~ · ~~5100 fulfillment/landed cost~~ | **N/A — no goods** | Explicitly excluded; detailers supply their own equipment and consumables |

### 1b. The money model (driver-based; consumed from `01-concept §3–4`, not re-derived)

`finance-ops` says *consume the closed economics, don't re-invent them*. The driver is **not** `units × AOV × repeat` (goods) or `subscribers × price × retention` (SaaS). It is:

```
active detailers  ×  paid jobs / detailer / week  ×  blended take / job  ×  52  =  annual take
   demand is the FILL RATE on that capacity, not the ceiling on it
```

- **Net contribution per job** (the number that governs, from `01 §3`): take − processing(on full GMV) − guarantee/ops reserve. ~**$28–31** on a sedan Full Detail; Express Wash ~break-even (trial loss-leader); Maintenance ~$24/mo net; Ceramic ~$110–115.
- **The single most-sensitive driver to protect** (`finance-ops` requires naming it): **detailer utilization × active-detailer count (liquidity)** — flex ±50% and it swings the model harder than price, margin, or demand conversion.
- **Two CAC lines, not one** (`finance-ops`' demand-only economics block has no slot for the second — added): **demand CAC $25–45** *and* **supply CAC ~$50–150 fully loaded** (FCRA check + insurance verification + trial-job + onboarding, amortized over the detailer's completed jobs).
- **12-mo P&L (base, from `01 §4`):** GMV ~$510k → take ~$112k → net contribution ~$75–95k, plus a Maintenance base building to 150–300 subscribers (~$4–7k/mo recurring take exiting the window). Conservative ~$45k take / Stretch ~$260k take. Deliver as an `xlsx` workbook when a spreadsheet is warranted; assumptions log in Airtable.

### 1c. Cash / runway — payout float, not a cash-conversion cycle

**Correction:** `finance-ops` says CCC/working-capital is the survival number *for goods (any inventory venture)*. Lustre is **asset-light** → runway = **cash ÷ net burn** is the right frame, with two marketplace-specific overlays the goods lens would miss:

- **Payout float is not Lustre's cash.** Funds sit in the Stripe Connect balance (1050) as a payable (2100) until the job is verified; the 13-week direct cash-flow (TWCF) must time **take-collected-at-booking** against **payout-released-on-verification** and **guarantee-reserve draws** — never treat gross GMV as available cash.
- **Guarantee-reserve adequacy** is the balance-sheet risk, not inventory. Model the reserve (2300) against expected claim frequency × severity; flag under-reserving to Tony + CPA. There is **no PO commitment line, no vendor deposit, no duty/freight, no "cash after funding the next PO"** — those goods lines are struck.

### 1d. Stack + tax (the AZ specifics are the real wrinkle)

| Function | Tool | MCP here? | Note |
|---|---|---|---|
| Ledger | QuickBooks Online | ❌ connect | US, CPA-standard |
| Payments + split + payout + 1099 | **Stripe Connect** (not plain Stripe Billing) | ⚠ integration; **auth required, drafts-only** | Marketplace rails; keys names-only |
| Model / TWCF / assumptions | `xlsx` + **Airtable MCP** | ✅ | — |
| Sales tax | **Avalara/TaxJar-class** | ❌ connect | AZ TPT is *transaction*, not classic sales tax |
| Payroll (if any W-2) | Gusto | ❌ | Detailers are **1099, not payroll** |
| ~~Inventory / A2X commerce bridge / 3PL~~ | **N/A** | — | No goods |

**Tax map — CPA gates (never decided here):**
- **AZ Transaction Privilege Tax (TPT) + city privilege tax** (Phoenix, Scottsdale, and each East-Valley city levy their own): the taxability of mobile detailing/cleaning services and *who remits* (Lustre-as-facilitator vs. detailer-as-seller) is the specific, load-bearing AZ wrinkle — **confirm with a CPA before pricing is finalized** (`01 §5` condition 2). ⚖+CPA, hard dependency.
- **Principal-vs-agent (ASC 606)** — whether Lustre books **net take** (agent) or **gross GMV with an offsetting payout** (principal). Drives the entire top of the P&L. **CPA-decided**, not asserted here.
- **1099-NEC / 1099-K issuance** to detailers via Stripe Connect (threshold rules shift — CPA confirms).
- **Guarantee-reserve methodology** (ASC 450 loss contingency) — CPA reviews the provision basis.
- **§41/§174 R&D — N/A** (no qualifying research; the platform is bought, not built — `03-build-eng`).
- **Worker-classification** has a tax dimension (payroll-tax exposure if reclassified) — shared with §3 legal, ⚖ employment + CPA.

### 1e. Monthly close (adapted)

Standard `finance:*` sequence with two swaps: **add** a "Stripe Connect payout reconciliation + guarantee-reserve roll" step (payout → bank → GL, net of fees, crossing period-ends — the #1 marketplace rec); **strike** the goods "inventory & COGS / landed-cost / shrinkage" step (N/A). Deferred-revenue release runs **only** for Maintenance Plans. Close gated on CPA/controller review before anything is filed or sent.

---

## 2. Sales / CRM — two acquisition pipelines, and the consumer side is not one (`/sales-crm`)

**Correction applied:** the task asked for a "CRM/pipeline for wholesale accounts." Lustre has no goods wholesale. It has **three distinct commercial motions**, and `sales-crm`'s single buyer-side `prospect→qualify→demo→proposal→close` ladder fits only one of them:

| Motion | Is it a `sales-crm` deal pipeline? | Where it's handled |
|---|---|---|
| **(A) Supply — detailer recruiting & activation** | **The binding constraint — and the skill has NO native slot for it.** Built here as a mirror-image pipeline. | §2a (new) |
| **(B) B2B fleet / dealer-recon** ("wholesale" analog) | **Yes — a classic considered B2B sale; the skill fits perfectly.** | §2b |
| **(C) Consumer demand** | **No.** A $49–229 booking is a transactional funnel, not a multi-stage deal with a proposal and a redline. Forcing it into a deal pipeline is over-engineering. | Handled as a **booking funnel in §5 (analytics)**, not the CRM |

### 2a. Supply pipeline (the marketplace-specific pipeline the skill lacks)

A detailer "deal" is an *activation*, gated by trust checks, not a purchase. Airtable base **`Detailers`** (mirrors the `sales-crm` 4-table discipline: Detailers · Contacts · Vetting-activities · Trial-jobs):

| Stage | Exit criterion | Gate |
|---|---|---|
| **Sourced** | Identified (FB/IG/Craigslist/supply-store/referral bounty) | — |
| **Screened** | Identity verified; owns equipment + commercial-auto intent | — |
| **Background + insurance verified** | **FCRA-compliant** check clears (permissible purpose, disclosures, adverse-action path); **commercial-auto + GL + garage-keepers/CCC** verified current | ⚖ FCRA + insurance; **approval = a founder/ops trust gate** |
| **Trial job** | One supervised job meets the tier checklist + photo standard | Quality gate |
| **Active** | Accepting + completing paid jobs on-platform | Utilization tracked |
| **At-risk / Deactivated** | Rating threshold breach or repeat failure | **Deactivation = human-gated** (reputational + worker-class sensitive) |

Anti-disintermediation is a CRM/ops metric here: track **2nd/3rd on-platform job completion** (`01 §5` condition 3 target ≥50%) as the supply-retention signal.

### 2b. B2B fleet / dealer pipeline (the skill used as designed)

Airtable `sales-ops` 4-table core (Companies · Contacts · Deals · Activities), stages tuned: `Prospect → Engaged → Qualified → Scoping → Proposal → Negotiation → Closed-Won (contract executed + first invoice collected)`. Weighted forecast = Σ(Amount × Probability). ICP: used-car dealerships (recon volume), small fleets (contractors/realtors), HOA/property managers. **Deal desk:** the negotiated lever is **take-rate on contracted GMV** (thinner than 22%) — anything below the take-rate floor is a **Tony approval gate**, logged with an audit trail. Contracts (MSA/SOW) → `legal:review-contract` → signature human-gated (§3).

### 2c. CAC handoff — both sides

`sales-crm` feeds win + channel data to `finance-ops`, which owns CAC/LTV/payback. Lustre feeds **two** numerators: demand acquisition *and* **supply acquisition** (the second line the demand-centric skill omits). Report **PIPELINE $ for B2B + LIQUIDITY (active/available detailers) for supply** through `/weekly-ops-review`.

**Guardrails:** drafts-only on every outreach (detailer recruiting DMs, dealer emails) — the send is Tony's; LYV firewall on all sourcing; only substantiated claims ("vetted / insured / guaranteed" must each be literally true — truth-in-advertising); pull every price from `01 §3`, never invent one. `airtable:show-airtable-link` after any base touch.

---

## 3. Legal — the marketplace contract set the skill doesn't name (`/legal-pack`)

> **NOT LEGAL ADVICE.** Every judgment point carries a **⚖ specialist** flag; every contract is a **draft to be reviewed**; nothing is filed, signed, or declared "clear." Signature and filing are irreversible, human-gated actions.

**Correction applied:** the task asked for "lease + supply + sale-of-goods." For a mobile-services marketplace those are largely **N/A**, and `legal-pack`'s own instruction — *"select by business model … mark the rest N/A"* — is honored. But the skill's model-specific menu names software/services, goods/retail, brick-and-mortar, and franchise archetypes and **does not name a two-sided marketplace** as its own row, so the correct set is assembled below from the near-universal rows + a marketplace overlay.

### 3a. Entity

**LLC (Arizona)** for a solely-owned, cash-flow-first venture (Tony) — pass-through, simple, evaluate an S-corp election with the CPA once profitable. **Fork:** if Lustre will raise institutional capital or issue equity → **Delaware C-corp before the raise** (QSBS; converting later is taxable/messy). Recommendation stated **conditional on the fundraising fork**. ⚖ corporate **+ CPA**. AZ-only operation → no foreign qualification yet; **CA expansion is a strategic gate, not a rollout detail** (triggers ABC/AB5 — §3c).

### 3b. Contract set (drafts; goods rows struck; marketplace overlay added)

| Contract | Role for Lustre | Template? | ⚖ Review |
|---|---|---|---|
| **Customer Terms of Service** | The consumer booking contract — acceptable use, **damage-guarantee terms**, liability limitation, arbitration, governing law (AZ). *Replaces "sale-of-goods terms," which are N/A.* | templatable baseline | ⚖ corporate + consumer |
| **Independent-Contractor Detailer Agreement** | **The marquee instrument.** The marketplace's real "supply agreement." Must preserve **genuine independence** (sets own availability, own equipment, can decline jobs, can multi-home; Lustre does *not* mandate uniforms/exclusivity). **Who sets the price is the live tradeoff** (Lustre-set improves consistency but raises reclassification risk). | bespoke-leaning | ⚖ **employment** — worker classification is *the* marquee risk `[FLSA + AZ common-law; AB5 on CA]` |
| **Damage-guarantee / limited-warranty terms** | The reserve-backed promise (finance §1c). Truth-in-advertising: it must actually pay out as stated. | templatable | ⚖ consumer |
| **Stripe Connect platform + payments/payout terms + 1099 disclosure** | Marketplace money-flow, seller onboarding, payout, tax reporting | vendor paper + review | ⚖ corporate |
| **Privacy Policy + DPA(s)** | Home addresses, vehicle/access details, payment tokens, **detailer PII + background data** are sensitive | templatable structure; DPA per subprocessor (Stripe, FCRA vendor, SMS) | ⚖ **privacy** `[CCPA baseline]` |
| **B2B Fleet/Dealer MSA + SOW** | The services contract for §2b — the actual "wholesale account" paper | templatable SOW under a reviewed MSA | ⚖ corporate |
| **FCRA disclosure + adverse-action set** | Background checks on detailers | vendor-supplied; review | ⚖ employment/privacy |
| **IP / brand assignment** (founder + any contractor) + **trademark path for "Lustre"** | Own the brand in the entity; flag TM, never clear | assignment templatable; TM path mapped | ⚖ IP/TM |
| ~~**Commercial lease / license-to-occupy**~~ | **N/A** — no premises; work happens in the customer's driveway; a future small office is not core | — | struck |
| ~~**Vendor / supply / purchase (goods) agreement**~~ | **N/A** — no inventory/ingredients/materials purchased for resale | — | struck |
| ~~**Sale-of-Goods terms + returns/warranty (UCC Art. 2)**~~ | **N/A** — no goods sold; the customer ToS is the primary contract | — | struck |

> **Terminology trap logged:** "supply" in the task means *goods supply* (N/A); the marketplace's real supply instrument is the **IC detailer agreement** — a different document with a different risk (worker classification, not warranty/recall).

### 3c. Compliance regime — the real surface (from `00`/`01`), and what is explicitly N/A

| Regime | Applies? | Gate |
|---|---|---|
| **1099 worker classification** (FLSA + AZ common-law; **ABC/AB5 on any CA expansion**) | **YES — marquee** | ⚖ employment; **hard dependency shaping product/ops** (who sets price, control level) |
| **Clean Water Act stormwater / municipal non-storm-discharge** | **YES** | Standard = **low-water / water-reclamation, no storm-drain discharge**, documented. ⚖ environmental |
| **Insurance** — platform GL **+** per-detailer commercial-auto + GL + **garage-keepers/CCC** | **YES — non-negotiable** | Guarantee depends on verified, current coverage. ⚖ + broker; **hard dependency** |
| **FCRA** (background checks) | **YES** | Compliant vendor; permissible purpose, disclosures, adverse action. ⚖ employment/privacy |
| **FTC Green Guides** (no "eco/green/waterless/non-toxic" overclaim) | **YES — guardrail hook** | Substantiate or don't claim. ⚖ + Tony draft-review |
| **ROSCA / state auto-renewal (click-to-cancel)** | **YES — Maintenance Plan** | Clear disclosure + easy cancellation. ⚖ consumer |
| **AZ TPT / city privilege tax** | **YES** | Routed to CPA (§1d), not decided here |
| **HIPAA · LegitScript · food-safety/health-code · FDA/CPSC product labeling · money-transmission/KYC** | **N/A — explicitly** | Not human-health, not a regulated substance, **not food**, not a product label, not a money transmitter. Struck so no one bolts on an irrelevant regime |

### 3d. Attorney-gate list (consolidated)
Entity + tax election ⚖+CPA · IC detailer agreement + worker classification ⚖ employment (hard) · insurance/garage-keepers verification ⚖+broker (hard) · Customer ToS + guarantee + arbitration ⚖ consumer · Privacy + DPAs ⚖ privacy · FCRA set ⚖ employment · ROSCA auto-renewal ⚖ consumer · Green-Guides claims review ⚖+Tony · TM clearance ⚖ IP/TM (flag, never clear) · B2B MSA liability/indemnity ⚖ corporate · **signature/filing of all of the above — human-gated.**

---

## 4. Org & roles — cover the marketplace-native functions the 7-function template hides (`/org-roles`)

**Correction applied:** `org-roles` is genuinely industry-agnostic, but its seven-function template (product/eng · GTM · sales · finance · ops · support · legal) **doesn't surface the functions that define a two-sided trust marketplace** — supply/network ops, dispatch/matching, and trust & safety/claims. They get absorbed into "ops"/"support"; named explicitly here so they get an owner.

### 4a. Stage coverage (stage = concept / concierge liquidity test → **lean, no FT hires**)

| Function | Coverage now | Marketplace-native sub-function it must cover |
|---|---|---|
| Product/eng | Bought (`03-build-eng`) + Tony approvals | No custom build in P0 |
| GTM/marketing | AI + Cowork | Two funnels: demand SEO/GBP/geo-social + **supply recruiting** |
| Sales | Tony (relationships) + AI drafts | **B2B fleet/dealer** (§2b) |
| Finance | `/finance-ops` + fractional bookkeeper | Payout recon + guarantee reserve |
| **Operations** | **AI + Cowork + ops-time (SOP-run)** | **Supply onboarding/vetting · dispatch & matching · payout release** |
| **Support / success** | AI + Tony (drafts) | **Two populations** (customers + detailers) + Maintenance retention |
| **Trust & safety / claims** | **Ops core + Tony gate** | **Damage-claim adjudication · guarantee-reserve draw · deactivation** — a marketplace function with no line in the generic template |
| Legal/compliance | `/legal-pack` + counsel (gated) | Worker-class + insurance + FCRA (hard dependencies) |

**Next 3 hires — trigger-gated (four-tests: recurring · unblocks founder · economics support · not SOP-able):**
1. **Ops / dispatch coordinator** — *trigger:* matched jobs/week exceed what founder + AI can hand-match, or the SOP library (vetting/dispatch/claims) exceeds Cowork solo. Owns supply onboarding + matching + claims intake.
2. **Supply recruiter (contract)** — *trigger:* liquidity proven (post ~Aug-31 gate) and detailer count must scale beyond seed. Sources + shepherds through the §2a pipeline.
3. **B2B/fleet closer (contract)** — *trigger:* dealer/fleet demand exceeds Tony's calendar and the thinner-take economics fund it.
Zero FT hires clear the four tests against a $0-spend concierge test today — flag if any deliverable proposes one (overbuild guard).

### 4b. RACI (marketplace processes; exactly one Accountable; founder gates ⛔)

| Recurring process | Owner(Tony) | Ops | Finance | AI/Cowork |
|---|---|---|---|---|
| Detailer vetting/approval (trust) | **A** ⛔ (trust gate) | R | I | R (checklist) |
| Dispatch / job matching | I | **A** · R | I | R |
| Damage-claim adjudication | **A** ⛔ (above $ threshold) | R | C (reserve) | R (draft) |
| Payout release (job-verified) | I | R | **A** | R |
| Detailer deactivation | **A** ⛔ | R | I | R |
| Spend / vendor approval | **A** ⛔ | R | C | I |
| External send / publish | **A** ⛔ | C | I | R (drafts) |
| Monthly close | I | C | **A** · R | R |
| Access grant/revoke | **A** | R | I | R |

### 4c. Permissions matrix (least-privilege; P0 concierge stack)
**Stripe Connect** (payouts — highest blast radius: Owner admin + Finance analyst; **restricted key** for any automation) · **FCRA background vendor** (PII — scoped, named, revocable; ops only) · **Airtable** ops + CRM + registers (Owner; ops editor scoped) · **Twilio/Gmail** (drafts-only for AI) · **QBO** (Finance). **No GitHub/Supabase/Vercel in P0** (no code — `03-build-eng`). MFA everywhere, no shared logins, AI service accounts read-first + drafts-only + never a payout key. Access register in Airtable; quarterly review; **offboarding revoke + secret-rotation within 24h**.

### 4d. Hiring kit + onboarding
Scorecard-first (`/sop-writer`-style) for the **ops/dispatch coordinator** (mission: keep supply liquid and every job matched, verified, and paid; outcomes measurable; comp = **placeholder — a founder gate**). Drafts only; no offer issued; no real-candidate PII fabricated. **Onboarding a detailer ≠ onboarding an employee** — keep them distinct: a detailer is *activated* via the IC agreement + vetting (§2a), never provisioned as staff (worker-classification hygiene).

---

## 5. Analytics — a two-sided liquidity funnel, not a single-sided pirate funnel (`/analytics-stack`)

**Correction applied:** `analytics-stack`'s default is a one-sided funnel (acquisition→activation→retention→revenue→referral) with a usage or MRR north-star. A marketplace has **two funnels** and its **north-star is a liquidity metric**, not a usage metric and not MRR.

### 5a. North-star + KPI tree
**North-star = liquidity:** *% of target zip codes with ≥2 active, available detailers* (coverage) **and** *matched paid jobs/week at an acceptable time-to-match* (`01 §4` load-bearing pair). Not "weekly active users," not "MRR."

| Node | L/L | Source | Owner |
|---|---|---|---|
| Liquidity / coverage (north-star) | L | match events + detailer-availability | analytics |
| Active detailers · jobs/detailer/week (utilization) | L | supply funnel | analytics |
| Time-to-match · fill rate | L | booking→match events | analytics |
| Demand conversion · rebook rate | L | booking funnel | gtm/analytics |
| **GMV · take · net contribution** | Lag | Stripe Connect | **finance-ops** |
| Maintenance MRR sub-strip · both-sided retention | Lag | subscriptions + cohorts | finance-ops |

### 5b. Two-sided event taxonomy (`object_action`, snake_case, past tense)
- **Demand:** `booking_requested → detailer_matched → job_completed → job_rated → rebooked / subscription_started`
- **Supply:** `detailer_applied → detailer_verified → trial_completed → job_accepted → payout_sent`
- **Liquidity:** `match_attempted` (with `time_to_match_sec`, `fill_result`), `coverage_snapshot`.
- **Governance / PII firewall (marketplace analog of the PHI firewall):** **home addresses, vehicle/access details, and detailer background data NEVER appear as event properties** — UUIDs and bands only (`job_value_band`, not the address). Consent-gated; DPAs with each subprocessor; **HIPAA/PHI = N/A** (mark it, don't inherit the health-venture posture).

### 5c. Stack + a real overbuild guard
In **P0 (concierge, no app)** the "event stream" **is the Airtable ops base + Stripe Connect** — there is **no PostHog SDK to wire because there is no app** (`03-build-eng`). Product analytics (PostHog) layers on only at **P1**, if liquidity is proven. **A/B experiments are N/A pre-traffic** — `analytics-stack`'s own guard applies (*don't build an experimentation platform before you have the traffic to power a test*); pre-traffic, the "experiment" is the liquidity test itself, read qualitatively. `[DRAFT/SPEC — nothing instruments or fires without Tony's approval.]`

---

## 6. Support & success — two customers and a claims lane, not a clinical lane (`/support-success`)

**Correction applied:** `support-success` is one-customer CS with a *clinical/medical* hard-escalation lane. Lustre supports **two populations** (customers **and** detailers) and its hard lane is **vehicle damage / theft / property / safety** (the guarantee), not medicine.

### 6a. Stack + channels
**Airtable base** at concierge scale (don't over-tool). Channels: **SMS (Twilio)** for arrival windows + nudges, **email (Gmail draft)** for support. Two intake queues: customer + detailer.

### 6b. Triage + the corrected escalation matrix

| Tier | Marketplace example | First response |
|---|---|---|
| **S1** | **Vehicle damage / theft from vehicle / property damage / safety incident**; payment/payout lockout | ≤1 hr, 24×7 → guarantee/insurance process + Tony |
| **S2** | **Detailer no-show / missed arrival window** (core value broken; a liquidity failure) | ≤4 hr → dispatch re-match |
| **S3** | Reschedule, how-to, account change | ≤1 business day → KB-first |
| **S4** | Feature request, cosmetic | backlog / feedback register |

**Hard-escalation lane (model must NOT resolve alone):** damage/theft/property claim → **guarantee + insurance workflow + Tony above $ threshold**; the model must **not admit platform fault or promise a payout amount**. Eco/"waterless" claim invited → route to review (Green Guides). Detailer worker-classification-sensitive dispute (pay, control, deactivation) → **founder/legal**. ~~Clinical/medical/"is it safe to take X"~~ → **N/A — struck** (no health surface).

### 6c. Two activation motions + retention
- **Customer activation** = first completed, photo-verified job → drive **rebook / Maintenance Plan** (the LTV engine); Maintenance churn-save must honor **ROSCA click-to-cancel** (no dark-pattern retention).
- **Detailer activation** = first completed **and paid-out** job → drive **2nd/3rd on-platform job** (the disintermediation-defense metric, ≥50% target).
- **Health/CS:** B2B fleet accounts get the QBR/renewal motion (skill fits); **detailer health** (utilization + ratings + on-platform retention) and **customer health** (Maintenance retention) are two more health models the single-customer skill runs once.

**Guardrails:** drafts only (the send is Tony's); customer/detailer PII stays in-system; never promise a capability the venture can't deliver today (e.g., a guarantee payout the reserve/insurance hasn't confirmed); banned words out.

---

## 7. FRICTION appendix — every SaaS/goods assumption that had to be corrected

Catalogued by skill. Two mismatch axes: **[A]** an instruction assumed **SaaS/subscription/deferred-revenue/digital-only-funnel**; **[B]** an instruction assumed **inventory/wholesale/retail/food-safety (goods)**. Lustre is a **two-sided services marketplace**, so both axes mis-fit. "Task" = the orchestration instruction; "Skill" = residual assumption inside the skill file itself.

**Task framing (spans all six skills)**
- **[B] "Physical-goods DTC+wholesale brand" / "goods economics + COGS/inventory / working capital"** — Lustre carries **zero inventory** and sells **no goods**; money is take-rate on GMV. COGS, landed cost, cash-conversion cycle, and "cash after funding the next PO" are all N/A. Corrected to a marketplace P&L (§1).
- **[B] "food-safety"** — no food surface whatsoever; explicitly struck from the compliance regime (§3c). Inheriting it would bolt on an irrelevant regulator.
- **[A] Implicit digital-only / single-funnel framing** — the binding constraint is **two-sided liquidity**, unreachable through a single demand funnel; corrected throughout.

**finance-ops**
- **[B] Task "goods economics + COGS/inventory."** The skill itself is hardened (marketplace is a first-class archetype: GMV×take, payouts-payable, principal-vs-agent) — so it *resisted* the goods push. Residual skill gaps: **(i)** its two worked examples are **SaaS + goods only — no worked marketplace example**, so a builder gets no reference implementation for the take-rate ledger; **(ii)** its unit-economics block is **demand-CAC only** — a marketplace's **supply CAC** has no slot (flagged & added, §1b), matching `01 §3`'s note; **(iii)** the offer-ladder/"~10× AOV" heuristic it inherits from operating-playbooks is a **funnel construct that does not apply** to a driver = active-detailers × utilization × take.

**sales-crm**
- **[B] Task "pipeline for wholesale accounts."** No goods wholesale exists; the analog is **B2B fleet/dealer services contracts** (§2b). **[A] Residual skill gap:** the CRM is **entirely buyer-side** — a marketplace's **supply pipeline (detailer recruiting/vetting/activation)** is the binding constraint and has **no native table, stage set, or CAC line** (built from scratch, §2a). The skill's `Closed-Won = contract executed + first dollar` and `prospect→demo→proposal→negotiation` ladder **over-engineers the $49–229 consumer booking**, which is a transactional funnel, not a deal — a SaaS/B2B-deal-shaped default that must be pushed *off* the consumer side (§2 table).

**legal-pack**
- **[B] Task "lease + supply + sale-of-goods."** All three N/A for a mobile-services marketplace: no premises (lease), no goods purchased (supply), no goods sold (sale-of-goods/UCC Art. 2). The skill's *"select by model, mark the rest N/A"* rule made this clean. **Residual skill gap:** the model-specific contract menu names software/services, goods/retail, brick-and-mortar, and franchise — **but not a two-sided marketplace**, so the defining set (bilateral platform ToS + **IC provider agreement** + payment-facilitator/Connect terms + **damage-guarantee terms**) had to be assembled from near-universal rows + an overlay (§3b). **Terminology trap:** "supply agreement" (goods) ≠ the marketplace's real **IC detailer agreement**.

**org-roles**
- **[A/B] Low friction — genuinely agnostic**, no strong SaaS/goods assumption. **Residual gap:** the **seven-function template omits the marketplace-native functions** — **supply/network ops, dispatch/matching, and trust & safety/claims** — which silently fold into "ops"/"support" and can go unowned. Surfaced and given RACI owners (§4a–b). Second gap: no distinction between **activating a 1099 detailer** and **onboarding an employee** (worker-classification-critical) — added (§4d).

**analytics-stack**
- **[A] Single-sided pirate funnel + usage/MRR north-star.** A marketplace needs a **two-sided funnel** and a **liquidity north-star** (coverage + time-to-match), not weekly-active-users and not MRR (Maintenance MRR is a *sub*-strip only). Corrected (§5a–b). The skill's PII-firewall pattern (built for PHI) **did** generalize cleanly to the **home-address/vehicle/background-data firewall** — a hardened win. The overbuild guard (*no experiment platform pre-traffic*) also fit: **no PostHog/A-B in P0** because there is no app.

**support-success**
- **[A] One-customer CS model.** A marketplace supports **two populations** (customers + detailers) with **two activation milestones** and **three health models** (customer / detailer / B2B) — the skill runs each motion once (§6c). **Escalation matrix mismatch:** its hard lane is **clinical/medical** (N/A here — struck); Lustre's real hard lane is **vehicle damage / theft / property / safety** backed by the guarantee reserve — an *operational, money-reserved* process, not a refer-to-clinician one (§6b).

---

*Prepared as review-ready drafts. Not licensed tax, accounting, or legal advice — every ⚖ and CPA gate above must be cleared by the named professional before reliance, filing, signature, spend, or send. Sequenced behind the primary bet (Executive Edge) per `01-concept §5`; funds only the concierge liquidity test until the ~Aug-31 gate.*
