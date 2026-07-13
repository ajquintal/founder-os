---
name: Venture Idea — Milpa (cross-border remittances)
archetype: Regulated consumer fintech — licensed Money Services Business (MSB), cross-border remittances
corridor: US → Mexico (MXN) and US → Guatemala (GTQ)
model: Strictly transactional — fixed per-transfer fee + FX spread. No SaaS, no subscription, no MRR, no seats.
status: Invented test venture for Founder OS hardening. Not a real company.
load-order: reads PROFILE.md then guardrails.md first; this is the active venture context.
---

# Milpa — Venture Brief

> **One line.** Milpa is a mobile-first, bilingual remittance app operated as a licensed U.S. Money Services Business that moves money from Mexican and Guatemalan immigrants in the United States to their families back home — fast, transparent, and honestly priced. It makes money on a small fixed fee plus a disclosed FX spread on each transfer. Nothing recurring. The hard part is not the app; it is the license stack and the compliance program that let the app touch money at all.

**Legal entity (invented):** Milpa Financial, Inc. (Delaware C-corp).
**Consumer brand / app:** *Milpa* (iOS + Android; responsive web as fallback).
**Why the name:** the *milpa* is the traditional corn-beans-squash farming system at the cultural root of both Mexico and Guatemala — home, family, sustenance. It ties the two launch corridors together and signals "rooted, honest, for us." Positioning is anti-"junk-fee," bilingual-first, trust-as-the-product. Spanish-first tagline direction: *"Dinero honesto, hasta casa."*

---

## 1. The customer and the problem

**Sender (the paying customer, US-based):** First- and second-generation immigrants from Mexico and Guatemala. Often hourly-wage workers (construction, agriculture, food service, hospitality, meatpacking, domestic/care work). Frequently underbanked but increasingly hold a bank account and/or debit card; many file and identify with an **ITIN** rather than an SSN. Price-sensitive *and* trust-sensitive.

**Recipient (abroad, not the paying customer):** Parents, spouse, children, siblings in Mexico and Guatemala. Money is for everyday living costs, school, home-building, and family emergencies. Many recipients are rural and rely on **cash pickup** or a basic bank account.

**The job to be done:** "Get a known amount of money to my family reliably, quickly, and without being quietly overcharged." The pain with incumbents is opacity (a low advertised fee hiding a wide exchange-rate markup), reliability anxiety ("did it arrive? when?"), and friction (store visits, English-only flows). Remittances are habitual and high-frequency — often 1–4 times per month — so reliability and transparency compound into loyalty and word-of-mouth inside tight diaspora networks.

**Market context (grounding, not a moonshot):** US→Mexico is one of the largest remittance corridors in the world (tens of billions of dollars annually; average transfer ≈ **$380**). Guatemala is among the most remittance-dependent economies on earth (remittances ≈ one-fifth of GDP). This is a large, boring, durable flow of money — not a speculative market.

---

## 2. Product line (exactly what we sell)

A single core product — a **remittance transfer** — configured along a few axes. There is no software SKU and no plan tier.

**Funding (pay-in, from the sender):**
- Bank account via ACH (lowest cost; standard speed).
- Debit card (instant funding; higher cost, passed through in pricing logic).
- (Roadmap) Instant bank pay via real-time rails.

**Payout (delivery, to the recipient):**
- **Mexico:** bank deposit to any Mexican bank via **SPEI** (Mexico's real-time interbank system) to a CLABE/debit card; **cash pickup** at large agent networks (endpoints such as Banco Azteca/Elektra, Bancoppel, OXXO, Telecomm-Telégrafos — reached via a licensed local payout partner).
- **Guatemala:** bank deposit (endpoints such as Banrural, Banco Industrial) and **cash pickup** at agent branches; Banrural's rural reach is strategically important.

**Delivery speed tiers:** minutes (bank/SPEI and instant cash pickup) as the default promise; economy option where a lower FX spread trades against speed.

**Wrapped experience (part of the product, not a separate product):** transparent all-in quote *before* payment (amount they pay, fee, exchange rate, and exact amount the recipient gets — a legal requirement we make a brand promise); real-time status with SMS/WhatsApp delivery notifications; saved recipients; recurring/scheduled sends; bilingual Spanish-first UI and bilingual human support.

---

## 3. Business model — how Milpa makes money

Revenue is **strictly transactional**, two components per transfer, and nothing else:

1. **Fixed transfer fee** — headline **$2.99** per transfer (waivable: first transfer free, and promotional fee-free bands to drive habit). Blended realized fee ≈ **$2.50** after promos.
2. **FX spread** — the margin between the wholesale (interbank/mid-market) rate at which Milpa sources MXN/GTQ and the customer-facing rate. Target spread **1.0%–1.5%** of principal (model at **1.3%**). Fully disclosed per transfer (the customer always sees the exact rate and payout amount).

**Explicitly NOT in the model:** no monthly subscription, no membership, no seats, no MRR, no per-user recurring software fee, no float-interest assumption baked into the core P&L (any yield on settlement balances is upside, not the plan). Growth = **more senders × transfers per sender × principal per transfer**, not seat expansion.

**All-in take rate:** ≈ **1.9%** of principal — competitive with digital leaders and well below cash-counter incumbents. On the average **$380** transfer that is ≈ **$7.50** gross revenue per transaction.

---

## 4. Unit economics (per transaction, average $380 send)

| Line | Per txn | Notes |
|---|---:|---|
| **Revenue — fixed fee (blended)** | $2.50 | $2.99 headline, waivers/promos applied |
| **Revenue — FX spread @ 1.3%** | $4.94 | disclosed customer rate vs. wholesale |
| **Gross revenue** | **$7.44** | ≈ 1.9% all-in take rate |
| Pay-in / funding cost (ACH-weighted blend) | ($0.90) | ACH cheap; debit-card funding ~1.0–1.8%, passed through in pricing |
| Payout cost (bank/SPEI + cash-pickup blend) | ($1.20) | cash pickup carries agent commission |
| FX / liquidity & treasury slippage @ ~0.2% | ($0.76) | part of the spread is genuine COGS |
| Sanctions screening + transaction monitoring | ($0.25) | per-transaction OFAC + monitoring |
| Fraud / ACH-return / chargeback reserve | ($0.30) | first-party fraud, returns |
| Payment network & misc. | ($0.10) | |
| **Variable COGS** | **($3.51)** | |
| **Contribution margin** | **$3.93** | **≈ 53%** contribution per transfer |

**One-time per new customer (not per txn):**
- KYC/IDV (document + selfie + database checks): **$1.50–$2.50**.
- Blended CAC target: **~$28**, referral-subsidized (give-$10 / get-$10 in fee credits) plus paid.

**LTV / payback:** an active sender doing ~2 transfers/month = ~24/year × $3.93 ≈ **$94/year contribution**; remittance is a durable, multi-year habit, so LTV/CAC is comfortably **>3×** and CAC payback is a few months. **Retention is the moat** (habit + trust + saved recipients), not switching costs.

**Balance-sheet reality (finance function must own this):** payouts are **pre-funded** — money leaves to the recipient before/at the moment sender funds clear — so Milpa must carry **settlement float** sized to ~1–2 days of GMV in flight, plus **state surety bonds** and **minimum net-worth** cushions. Order-of-magnitude working capital to launch: **float + bonds + licensing + runway ≈ $1–2M**. Margin is **highly sensitive** to funding mix (ACH vs. debit) and payout mix (bank vs. cash) — the single biggest operational lever on unit economics.

**Illustrative ramp (grounded, licensing-gated):** licensing/compliance/banking/integration build consumes roughly months 1–9 with little to no revenue (optionally a limited pilot under an agent-of-a-licensee bridge); live selling begins as licenses land. A defensible exit-of-Year-1 target is **~$1M+ revenue run-rate** (≈ 8,000 active senders → ~190k transfers/yr → ~$73M GMV run-rate at ~1.9% take), **EBITDA-negative in Year 1** given fixed compliance/licensing/team cost, with the path to profit coming from state-footprint expansion and sender-base compounding — not from raising prices.

---

## 5. Corridors, geography, and launch footprint

- **Send side (where licenses gate us):** launch in a **6-state Sun Belt + Southeast cluster** chosen for dense Mexican *and* Guatemalan populations and operational sanity — **California, Texas, Arizona, Georgia, North Carolina, Florida.** Expand toward ~20 states over 18–24 months. High-friction states (e.g., New York) deliberately deferred.
- **Receive side:** **Mexico** and **Guatemala** only at launch. Sequence **Mexico first** (larger corridor, cleaner rails via SPEI), then **Guatemala** (Banrural rural reach is the unlock).
- Deliberately narrow. Two corridors, six states — resist the urge to boil the ocean (see §11).

---

## 6. Regulatory & compliance surface — the critical path

**This is the business.** Software is table stakes; the license stack and BSA/AML program are the moat, the cost, and the gating constraint on every expansion. Treated as a hard dependency, never a formality.

1. **FinCEN MSB registration** — register as a money transmitter (FinCEN Form 107) within 180 days of establishment; renew every 2 years.
2. **State Money Transmitter Licenses (MTLs)** — one per state of operation, generally filed through **NMLS**. Each requires a **surety bond** (state-set, ~$25k to $1M+ per state), **minimum net worth**, control-person background checks and fingerprinting, business plan, audited/GAAP financials, and an approved AML program. Timelines run **6–18 months per state**. **This is the true critical path** and the pacing constraint on geography and revenue.
3. **Written BSA/AML program (the five pillars):** (a) a **designated BSA/AML Compliance Officer** (senior, named, accountable); (b) internal policies, procedures, and controls; (c) ongoing **training**; (d) **independent testing/audit**; (e) risk-based **Customer Due Diligence (CDD)**.
4. **KYC / CIP at onboarding** — Customer Identification Program: collect and verify name, DOB, address, and an ID number (SSN/**ITIN**/passport) via an IDV vendor; retain records.
5. **OFAC / sanctions screening** — screen **every sender, recipient, and transaction** against the SDN and related lists (plus internal watchlists), in real time, before funds release.
6. **SAR & CTR** — file **Suspicious Activity Reports** (MSB threshold ≥ $2,000) and **Currency Transaction Reports** (cash > $10,000/day). Milpa is digital/bank-funded with **no U.S. cash-in**, so CTRs are minimal, but the SAR and monitoring obligations are central.
7. **Ongoing transaction monitoring** — rules + risk scoring for structuring, velocity, unusual-corridor, and money-mule patterns; case management and escalation.
8. **BSA Travel Rule & recordkeeping** — transmittals ≥ $3,000 must carry originator/beneficiary info; retain records for 5 years.
9. **CFPB Remittance Transfer Rule (Regulation E, Subpart B)** — the signature consumer-facing regime for this business: mandatory **pre-payment disclosures** (exchange rate, fees, taxes, exact amount received), **receipts**, a **30-minute cancellation window**, **error-resolution rights**, and a stated **funds-availability date**. We turn this legal duty into the brand's transparency promise.
10. **GLBA** (financial-privacy + **Safeguards Rule**), state privacy (**CCPA/CPRA** in California), **PCI-DSS** for card funding, and **SOC 2** for partner/enterprise trust. Unclaimed-property/**escheatment** handling for undeliverable funds.
11. **In-country (receive side):** contract **licensed local payout partners** who hold the local money-transmitter/paying-agent authorizations and carry local AML obligations (Mexico's CNBV regime; Guatemala's IVE/SIB regime). Milpa does not directly hold foreign licenses; it holds the U.S. licenses and contracts compliant local rails.
12. **Exams & renewals** — periodic state examinations and FinCEN oversight; annual MTL renewals; bond maintenance; **NMLS Money Services Businesses Call Report** filings.

---

## 7. Operations, banking, and supply chain

- **Sponsor / settlement banking:** an **FBO ("for benefit of") account** structure at a **sponsor bank experienced with MSB/remittance risk** — the hardest single partnership to secure (MSB "de-risking" is real). Governs the **pre-funded float**. **Nacha** rules apply to ACH.
- **Payout network:** one or more **LatAm payout aggregators/processors** plus, over time, more direct bank rails (SPEI participation via a Mexican bank partner) to compress payout cost and widen the spread margin.
- **Vendor stack (archetypes, named-only; no credentials ever materialized):** IDV/KYC vendor; sanctions-screening vendor; transaction-monitoring platform; ACH/payment processor; debit-card processor; FX/liquidity provider; bilingual customer-support tooling; cloud hosting; the sponsor bank; the payout aggregators. Each is a compliance-relevant third party requiring due diligence and ongoing oversight.
- **People (minimum viable org):** Founder/CEO; **BSA/AML Compliance Officer** (non-negotiable, senior hire); Head of Payments/Treasury (owns float and reconciliation); Head of Growth; a small product/eng team; bilingual support. External: MTL/fintech regulatory counsel and an independent AML auditor.

---

## 8. Channels & go-to-market

- **Community + referral led:** referral program (fee credits), community ambassadors, hometown-association (HTA) and church partnerships, Spanish-language WhatsApp/TikTok/Facebook, and local Spanish radio.
- **Digital paid:** Meta/Google in Spanish; ASO for *"enviar dinero a México / Guatemala."*
- **Activation:** first-transfer-free plus a boosted first-transfer rate.
- **Retention:** reliability + proactive delivery notifications + saved recipients. No subscription lever exists — the only growth vectors are more senders, more frequency, and larger principal.

---

## 9. Why it makes money (economic engine, one paragraph)

Each transfer earns a small fee and a disclosed FX spread for a **~53% contribution margin** on a **~$380** average send. The behavior is **habitual and high-frequency**, so a modestly-priced, reliable, transparent product compounds into durable per-customer contribution and organic referral inside dense diaspora networks. Fixed cost (licensing, the compliance program, the compliance officer, float, and bonds) is heavy and front-loaded; profitability is a function of **transfer volume across a widening licensed footprint**, not of pricing power or recurring software revenue.

---

## 10. Key risks (name them, don't bury them)

- **Licensing timeline/cost overrun** — the critical path; slips push revenue right and burn runway.
- **Sponsor-bank de-risking** — losing banking access is existential; needs a redundant banking relationship.
- **Margin compression from funding/payout mix** — debit-heavy funding or cash-heavy payout can halve contribution; must be actively steered.
- **Compliance failure** — a missed SAR, an OFAC breach, or a Reg E disclosure defect risks fines, license loss, and reputational damage.
- **FX volatility on float** — treasury must hedge/limit exposure on pre-funded balances.
- **Fraud & money-mule abuse** — remittance rails are targeted; monitoring quality is a cost and a moat.
- **Payout-partner outage** — an aggregator or bank endpoint failure surfaces as "support tickets" and bad reviews (the leak shows up downstream of its cause).

---

## 11. Founder OS alignment (Tony's standards & guardrails)

- **Whole-machine, not single-lane:** compliance, treasury/float, payout ops, and growth are one interdependent system; a symptom (bad reviews, support spikes) is usually caused upstream (a payout-partner outage, a false-positive screening surge). Diagnose upstream.
- **Guard against overbuild / future-state bias (Tony's documented failure modes):** the licensing critical path is itself the argument for restraint — **two corridors, six states, one product.** Prove unit economics and reliability before widening the map. Do **not** build the 50-state cathedral before selling the first transfer.
- **Economics before build:** the per-transaction P&L (§4) must hold before any non-compliance spend.
- **Guardrails honored:** compliance/licensure treated as a **hard dependency**; **no medical claims** (none apply); all customer-facing and outbound comms are **drafts-only until Tony approves**; **$0 on unvalidated spend** without sign-off; **secrets/credentials are names-only**, never materialized; **irreversible/production actions** (banking changes, license filings, fund movements, contracts) are **human-gated** with a stated rollback path; customer PII stays inside its system controls. Fully legal, no gray areas — no crypto, no speculation.
