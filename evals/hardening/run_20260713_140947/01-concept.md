---
name: Lustre — Concept Package
slug: lustre
artifact: 01-concept
stage: concept (pre-launch)
composes: stress-test · market-scan · offer-architect · opportunity-size · go-no-go
loads-after: founder-profile/PROFILE.md · 00-venture-idea.md
date: 2026-07-13
status: v0.1 — PRESSURE-TEST. All figures illustrative / benchmarked / assumed, not real Lustre data. Marketplace = take-rate on third-party GMV, not product margin and not a SaaS seat.
note-on-path: The task named the output `undefined/01-concept.md`. That path is an un-interpolated template variable; the venture brief explicitly requires "no stray undefined/ directory." Written to the run directory beside 00-venture-idea.md per the 00→01 convention and the downstream-builder intent.
---

# Lustre — Concept Package

A two-sided mobile car-detailing marketplace in the affluent East Valley (Phoenix–Scottsdale). Vetted, insured, background-checked independent detailers come to the driveway; Lustre owns booking, payment, damage guarantee, and quality, keeping ~22% of GMV. This package runs the five Concept-stage skills in sequence. The through-line: **the business is gated by two-sided liquidity, not by any single job's margin** — and every skill below is bent to say so, because most of them were built to reason about one-sided digital funnels.

---

## 1. Stress-Test — GO / REFINE / KILL

```
BET:        Stand up a vetted, insured mobile car-detailing marketplace in the East Valley
            (Phoenix–Scottsdale) that keeps ~22% of GMV, so that a fragmented cash-and-Craigslist
            trade becomes a reliable, guaranteed, recurring-revenue engine — validated in 2–3 zip
            codes before any app or ad spend.

VERDICT:    REFINE

WHY:        The economics per job plausibly close and the network effect is real (more detailers →
            better coverage → more customers → more detailers), so this is not a KILL. But it opens
            a major NEW FRONT beside the live primary bet (Executive Edge / the $1M-2026 mandate),
            it is ops- and relationship-heavy to stand up, and the true make-or-break — two-sided
            liquidity in a zip code — is entirely unproven. That is a REFINE, not a GO: narrow to a
            near-$0 concierge liquidity test, sequence it behind the primary bet, and let the test —
            not a build — decide.

MAKE-OR-BREAK ASSUMPTIONS:
  1. Two-sided liquidity — that ≥2 vetted, available detailers per target zip can be matched to real
     paid demand with a short time-to-match — confidence L — cheapest test: concierge-match 10–20
     real jobs in 2–3 Scottsdale zips (landing page + spreadsheet + Stripe payment links + SMS), no
     app; measure time-to-match, fill rate, and repeat.
  2. Take-rate holds supply — that detailers accept ~22% as better than their own lead-gen, so supply
     doesn't churn or disintermediate to cash — confidence M — cheapest test: recruit 8–12 detailers
     onto a plain-language 78/22 agreement + instant payout; track how many complete a 2nd and 3rd
     job on-platform vs. going direct.
  3. Regulatory dependencies are cleared, not waved — 1099 independence genuinely preserved,
     garage-keepers/commercial-auto insurance verified, AZ/city TPT treatment of detailing confirmed
     with a CPA, FCRA-compliant checks, no-storm-drain water standard — confidence M — cheapest test:
     a half-day with a CPA + an employment/IC attorney + one insurance broker BEFORE pricing is
     locked or the first paid job is matched.

FAILURE-MODE FLAGS:
  - NEW FRONT — fired. Concurrent with the primary bet; must be explicitly sequenced behind it, not
    parallelized.
  - ARCHITECTURE BEFORE REVENUE — fired (latent). The sharpest trap here: building a custom booking/
    detailer app before liquidity exists. Mitigation is structural — concierge/Wizard-of-Oz MVP,
    off-the-shelf + Stripe Connect only, no custom platform until liquidity is proven.
  - FOUNDER-DEPENDENCE — fired (latent). Supply recruiting, vetting, dispatch, claims, and key B2B/
    dealer relationships pull the founder into the loop. Mitigation: SOP-run ops core; founder
    reserved for approvals + key supply/B2B relationships only.
  - STANDARDS-AS-BOTTLENECK — watch. Over-vetting supply so liquidity never forms.
  - FUTURE-STATE BIAS — watch. Multi-metro / multi-service mechanics before one neighborhood works.

ECONOMICS:  plausible — per-job take-rate math closes (~$28–31 net per Full Detail; a Maintenance
            subscriber pays back CAC in 1–2 months). BUT the binding gate is liquidity, not per-job
            margin — the economics gate can wave this through while the real constraint (supply
            density × utilization) stays untested. Treat liquidity as the load-bearing number.

GUARDRAILS:  clear — no LYV sourcing; fully legal (regulatory surface is a hard dependency, handled in
            conditions, not a gray area); analysis is drafts-only, $0 spend; no medical claims; and no
            eco/"waterless" overclaim (FTC Green Guides) in any downstream copy.

FOCUS COST:  Founder attention and ops bandwidth diverted from Executive Edge (the current primary bet
            and the nearest path to the $1M-2026 target). A cold-start local marketplace cannot be run
            in ~2 founder-hrs/week the way a digital funnel can — this is the real price of a yes.

NEXT:        Fund ONLY the concierge liquidity test in 2–3 East Valley zips (near-$0, ops-time not
            founder-build). Kill window: if <10 matched paid jobs OR time-to-match stays unacceptably
            long after ~30 days of active matching, stop and reallocate — do not build the app.
```

---

## 2. Market Scan — Sized, Sourced, Wedge

**Market read.** US car-detailing *services* revenue was **~$11.87B in 2024, forecast ~$15.67B by 2030 at ~4.7% CAGR** (Grand View Research, US outlook). The **mobile** wash-and-detailing subset is the faster-growing slice (multiple analysts flag mobile/on-demand as the growth driver on convenience and water-reclamation trends; exact mobile-only US figure not cleanly sourced — treat as a growing minority of the total, *assumed* ~15–25%). Phoenix–Scottsdale is a structurally strong launch metro: dense affluent single-family driveways, car-dependent, year-round detailing weather, with monsoon dust storms as a genuine seasonal demand spike. **Most important competitive fact:** the *consumer* on-demand mobile-detailing marketplace has been tried and largely *retreated* — Spiffy, the best-funded entrant, has repositioned as a **B2B full-stack "operating system for dealers"** (vans, software, devices), no longer a consumer on-demand app. That is simultaneously the opening (the affluent-consumer trust lane is under-occupied by any scaled, guaranteed brand) and the warning (consumer unit economics and liquidity are hard enough that the category leader walked toward fleets).

**Competitive positioning.**

| Competitor | Price / model | What they do | Weakness Lustre exploits |
|---|---|---|---|
| **Spiffy (Get Spiffy)** | Quote / contract; B2B | Full-stack mobile service for dealers, fleets, DSPs — owns vans, software, labor | Abandoned the affluent-consumer, come-to-my-driveway lane; not a trust brand for individual owners |
| **Washos** | ~$28+ per wash, on-demand app (LA-centric) | Consumer on-demand mobile wash/detail marketplace | Thin geographic coverage; commodity wash positioning, not a vetted-trust + guarantee brand; not in Phoenix |
| **MobileWash** | ~$23 express → deluxe, app-quoted (~2020 data) | App-based on-demand mobile wash, algorithmic pricing | Low-price/low-trust positioning; no premium guarantee or subscription retention engine |
| **Thumbtack / Yelp** | Lead-gen fees to the pro | Directory / lead marketplace connecting owners to local detailers | No vetting, no guarantee, no payment/quality ownership — leaves the exact trust gap Lustre fills |
| **Local independents** (e.g., Scottsdale mobile detailers) | ~$125–250 per mobile detail; cash/Venmo | Skilled local mobile detail + ceramic, one-operator | No background/insurance verification surfaced, no damage recourse, no reliable arrival window, no recurring plan |
| **Fixed-location detail shops** (XL Detail, Pit Stop, etc.) | Menu pricing, drop-off | High-craft ceramic/paint correction at a bay | You have to drive there and give up the car; not on-demand, not at-home |

**Pricing benchmarks.** Express/wash tier clusters at **~$23–49** (MobileWash ~$23; Get Spiffy Shine ~$49). A local Scottsdale mobile **full detail runs ~$125–250**. Ceramic coating is a high-ticket, quote-based line (hundreds to low thousands). **Lustre's price points sit correctly in-market:** Express $49 at the top of the wash band (justified by trust/insurance), Full Detail $189/$229 mid-band for the metro, Ceramic $699 within the local range. The premium is bought by the guarantee, vetting, and reliability — not by underpricing.

**The wedge (one sentence).** In a low-trust, cash-and-Craigslist trade where you hand a stranger the keys to a $45k asset in your driveway, Lustre is the only **vetted + background-checked + insured network wrapped in a damage guarantee, a guaranteed arrival window, and logged before/after photos — booked and paid in-app** — a trust-and-reliability layer no incumbent in this metro ships, while the one scaled player (Spiffy) has vacated the consumer lane for fleets.

**Riskiest thing the scan could not confirm.** Whether affluent owners will pay a *trust premium* for a mobile detail at meaningful volume — vs. defaulting to a cheap local independent or a fixed shop — AND whether that demand is dense enough per zip to reach two-sided liquidity. The category leader's retreat to B2B is a real signal that consumer liquidity/economics are the hard part.

**Sources.** Grand View Research — US Car Detailing Services Market Outlook (2024 base, 2030 forecast, 4.7% CAGR); MobileWash pricing FAQ (express/deluxe bands, *~2020 vintage — flagged as dated*); Get Spiffy (self-described B2B "operating system for dealers"); Washos (on-demand mobile marketplace); representative Scottsdale mobile detailer (~$125–250 essential mobile detail). *Local independent and fixed-shop pricing is quote-based and not published; figures are ranges, not plan prices — labeled accordingly.*

---

## 3. Offer + Economics

**Dream outcome (customer's words).** "Make my car showroom-clean in my own driveway this weekend, without giving up my morning or handing my keys to a stranger I found on Craigslist." (Detailer's words: "Keep my week full and get paid on time without hustling for leads.")

**Offer stack.** Note: this is a **service-tier ladder + a subscription + a B2B channel**, NOT a checkout-funnel (no order-bump/OTO sequence — a detailer in a driveway does not run an upsell cart). The ~10× AOV heuristic does **not** apply; a take-rate marketplace optimizes **take-per-active-customer, retention, and detailer utilization**.

| Rung | Name | Customer price | Billing | Who it's for | Why it exists |
|---|---|---|---|---|---|
| Trial / frequency | Express Wash & Vacuum | $49 | per job | New or time-poor owner testing the service | Low-friction first job; trial driver. **Loss-leader for Lustre** (see below) — justified only by conversion to Full Detail / Maintenance |
| Core | Full Detail (sedan / SUV) | $189 / $229 | per job | The primary ICP; the AOV workhorse | The margin-and-volume core of GMV |
| High-ticket | Ceramic Coating / Paint Correction | $699 | per job | Enthusiast / new-car owner protecting the asset | Highest take per job; skilled-detailer-only |
| Recurring | Maintenance Plan | $159/mo | subscription | Retained owner who wants it handled | **The LTV + retention + detailer-utilization engine** and the disintermediation lock-in |
| B2B channel | Fleet / Dealer Recon | contract, thinner take | contract | Used-car dealers, small fleets, property managers | Off-peak capacity fill; stable, less price-sensitive GMV |

**Economics gate (take-rate, run BEFORE build).** The reframe that matters: **78% of every price is a pass-through payout to a third-party detailer — it is NOT Lustre's cost of delivery.** Lustre's "margin" is the **~22% take minus payment processing (charged on the *full* GMV, not on the take) minus a guarantee/insurance reserve minus support/dispatch/ops.**

| Service | GMV | Detailer payout (78%) | Lustre take (22%) | − Processing (2.9%+$0.30 on GMV) | − Guarantee/ops reserve | ≈ Lustre net contribution |
|---|---|---|---|---|---|---|
| Express Wash | $49 | ~$38 | ~$11 | ~$1.72 | ~$6–7 | **~$2–4 (≈ break-even; trial loss-leader)** |
| Full Detail (sedan) | $189 | ~$147 | ~$42 | ~$5.78 | ~$7–8 | **~$28–31** |
| Full Detail (SUV) | $229 | ~$179 | ~$50 | ~$6.94 | ~$8–9 | **~$34–37** |
| Ceramic Coating | $699 | ~$545 | ~$154 | ~$20.6 | ~$18–22 (higher liability) | **~$110–115** |
| Maintenance Plan | $159/mo | ~$124 | ~$35/mo | ~$4.91/mo | ~$6/mo | **~$24/mo** |

- **Marketplace-specific drag the classic "margin = price − COGS" frame hides:** processing is levied on the whole GMV Lustre never keeps, so ~$5.78 on a Full Detail is **~14% of the $42 take** — a real haircut. Model it on GMV, not on take.
- **Affordable CAC (demand).** A Maintenance subscriber nets ~$24/mo → clears a $25–45 CAC in ~1–2 months → supports an affordable CAC of ~$50–70 at a 2–3-month payback. A transactional customer at ~1.5 Full Details/yr nets ~$42–56 first-year → affordable CAC ~$25–40. Both consistent with the brief's $25–45 blended demand CAC. **Conclusion: demand CAC is affordable IF the customer repeats or subscribes; a single Express or a one-and-done Full Detail barely clears CAC.**
- **Supply CAC (the skill has no slot for this — added).** Activating a vetted detailer costs FCRA background check (~$30–50) + insurance verification + a trial job + onboarding time ≈ **~$50–150 fully loaded**, amortized across every job that detailer completes. Cheap per job at any reasonable utilization, but it is a real second acquisition line the one-sided skills ignore.
- **Break-even.** In the concierge MVP, fixed cost is near-zero → break-even is a handful of Full Details. Once a staffed ops core exists (~$8–12k/mo), break-even ≈ **~285–430 net-contributing jobs/mo (~65–100/week)** — reachable within a metro but not trivial, and only if the job mix is Full-Detail-weighted, not Express-weighted.
- **LTV.** Maintenance subscriber at ~$24/mo net × 6–10 active months = **~$145–240 net (take ~$210–350/yr)**. (The brief's ~$110–150/yr take line is more conservative than a $35/mo take implies; the gap is cadence/mix — bi-weekly Express vs. monthly Full Detail — so treat LTV as a *range*, cadence-dependent.) The subscription, not the transaction, is the LTV engine.

**Self-liquidation read (adapted for a marketplace).** There is no front-end *product* whose revenue offsets ad cost — the Express Wash take barely covers its own processing. "Self-liquidation" here means: **does the first job convert to a repeat or a subscription fast enough that blended first-year take ≥ blended CAC?** It does at a demand CAC ≤ ~$40 *if* repeat/subscription conversion holds. Above that, or without repeat, the front end does not liquidate — which is exactly why **$0 paid media until liquidity + repeat are proven** is correct.

**Implementation priority.** Sell the **Maintenance Plan and B2B/dealer recon manually first** — they are the LTV and off-peak-utilization engines and the strongest anti-disintermediation lock-ins — matched by hand in 2–3 zips via Stripe payment links. Do **not** build an app to do it. Prove the highest-retention rungs before automating the low-take trial rung.

**The one number the whole model is most sensitive to.** **Detailer utilization × active-detailer count (liquidity)** — not price, not per-job margin. Take-rate on GMV means revenue = active detailers × jobs/week × blended take. Everything else is second-order.

---

## 4. Opportunity Size — Tops-Down, Bottoms-Up, Reconciled

**Tops-down (ceiling only).**
- **TAM** — US car-detailing services **~$11.87B (2024)**, `sourced` [Grand View]. Whole category, all US, fixed + mobile. Too broad to be a plan.
- **SAM** — East Valley affluent, mobile-addressable detailing GMV. Phoenix metro ~1.9M households; target ICP (HHI $120k+, single-family driveway, 2+ vehicles kept 3+ yrs) ≈ **~150–250k households** `assumed`. At ~$300–600/yr detailing spend when active, target-segment detailing spend ≈ **~$50–120M/yr** `assumed`; the share that would plausibly move to mobile-on-demand ≈ **~$30–60M GMV/yr** `assumed`. **Lustre's SAM is its take:** 22% × $30–60M ≈ **~$6.6–13M/yr take** `assumed`. (Plus metro B2B dealer recon — hundreds of dealerships — at thinner take.)
- **SOM (12 mo)** — one metro, cold-start, $0 media, concierge→light platform: low single-digit % of SAM. Lustre plausibly intermediates **~$0.5–2M GMV** year one → **~$110–440k take**. Ceiling, not forecast.

**Bottoms-up (the plan — and the place the skill's formula had to be replaced).** The skill's `reachable buyers × conversion × price × frequency` is demand-centric and does not fit: a marketplace's year-1 revenue is gated by **supply capacity and liquidity**, not by how many *buyers* you can reach. Correct driver:

```
active detailers  ×  paid jobs / detailer / week  ×  blended take / job  ×  52  =  12-mo take
demand is the FILL RATE on that capacity, not the ceiling on it
```

- **Active detailers:** ramp ~5 → ~20 over 12 months (supply is the gate; seed ~15–25 vetted, expect attrition). Avg ~12 active `assumed`.
- **Utilization:** ~4–8 paid jobs/detailer/week at liquidity; blended lower early. Avg ~5/wk `assumed`.
- **Blended take/job:** mix-weighted (Full-Detail-heavy, some Express, occasional Ceramic, Maintenance) ≈ blended GMV ~$165 → **take ~$36/job** `benchmarked`.
- **Base:** 12 × 5 × 52 ≈ **~3,100 jobs/yr** → GMV ~$510k → **take ~$112k** (net contribution ~$75–95k), plus a Maintenance base building to ~150–300 subscribers by month 12.
- **Conservative** (liquidity slow, ~6 active × ~4 jobs): ~1,250 jobs → GMV ~$205k → **take ~$45k**.
- **Stretch** (liquidity clicks + B2B fleet fills off-peak, ~20 active × ~7 jobs): ~7,300 jobs → GMV ~$1.2M → **take ~$260k**.

**Reconciled realistic range (12-mo, anchored bottoms-up, capped by SOM).**

| Scenario | ~GMV | Lustre take (booked ≈ collected*) | Net contribution |
|---|---|---|---|
| Conservative | ~$205k | ~$45k | ~$28–38k |
| Base | ~$510k | ~$112k | ~$75–95k |
| Stretch | ~$1.2M | ~$260k | ~$170–210k |

*Marketplace nuance on booked-vs-collected: per-job GMV is **collected at booking** and take is netted at payout, so booked ≈ collected for transactional jobs. The distinction that matters here is **GMV vs. take** (Lustre keeps ~22%) and **take-collected-in-window vs. subscription run-rate** (a month-12 base of 150–300 subscribers is ~$4–7k/mo of recurring take *exiting* the window, not yet collected).

Bottoms-up ($45–260k take) sits **below** the SOM ceiling ($110–440k) — consistent, and diagnostic: **the constraint is liquidity and execution in one metro, not market size.** The market is big enough; the question is whether two-sided liquidity forms.

**Load-bearing assumption.** **Detailer utilization × active-detailer count (liquidity).** Flex it ±50% and it swings the range harder than any other input — far more than demand conversion, which is the variable the skill's formula would have flagged. **Cheapest test:** the concierge match of 10–20 real jobs in 2–3 zips; measure jobs/active-detailer/week and time-to-match before any spend or build.

**Assumptions ledger.** TAM `sourced`. Mobile-share, target-household count, per-household spend, GMV-to-mobile share, SAM, SOM `assumed`. Blended take/job, CAC bands, processing `benchmarked`. Active-detailer ramp and utilization `assumed` (the load-bearing pair). Brief is **provisional** on every `assumed` line — no fabricated precision.

---

## 5. Go / No-Go — Commit Gate

```
COMMIT:      Fund ONLY a near-$0 concierge liquidity test of the Lustre marketplace in 2–3 East
             Valley zip codes — manual matching of 10–20 real paid jobs (landing page + spreadsheet
             + Stripe Connect payment links + SMS), ~15–25 vetted detailers seeded, NO app build, NO
             paid media — sequenced behind the primary bet.

DECISION:    CONDITIONAL GO

BASIS:       stress-test REFINE (compounding network + economics plausible, but a new front whose
             liquidity is unproven) · market real & growing (~$11.87B US, 4.7% CAGR) with an
             open consumer-trust lane the category leader vacated for B2B; wedge = vetted + insured +
             guaranteed + at-your-driveway · economics closes per job (~$28–31 net/Full Detail;
             subscriber payback 1–2 mo) but the binding gate is liquidity, not margin · size $45–260k
             take (base ~$112k), constrained by liquidity/execution, not market size.

CONDITIONS THAT MUST HOLD:
  1. Two-sided liquidity forms — ≥10 matched paid jobs with an acceptable time-to-match across 2–3
     zips — verified by the concierge test within ~30 days of active matching.
  2. Regulatory dependencies cleared, not assumed — 1099 independence genuinely preserved (detailers
     set availability, use own kit, can decline, can multi-home; Lustre does NOT over-control);
     garage-keepers + commercial-auto + GL insurance verified per detailer; AZ + city TPT treatment
     of detailing confirmed with a CPA; FCRA-compliant vendor; low-water/no-storm-drain standard
     documented — verified with CPA + IC attorney + insurance broker BEFORE the first paid match.
  3. Supply retains at 22% and does not disintermediate — verified by ≥50% of seeded detailers
     completing a 2nd + 3rd on-platform job during the test.
  4. Copy stays clean — no eco/"waterless"/"non-toxic" overclaim (FTC Green Guides); "guaranteed /
     insured / vetted" each literally true; subscription follows ROSCA click-to-cancel — verified at
     draft review (drafts only; nothing published without Tony's approval).

RESOURCE ASK:  $0 paid media · low hundreds $ for FCRA checks + insurance-verification + CPA/attorney
             half-day (requires Tony's sign-off before any spend) · founder time = approvals + key
             supply/B2B relationships only; ops-time (not founder-build) runs the matching · ~30–45
             day calendar · displaces ops/attention from Executive Edge (the primary bet).

FIRST FUNDED MILESTONE:  Concierge match of 10–20 real paid jobs in 2–3 Scottsdale zips, ~15–25 vetted
             detailers seeded, Maintenance Plan + one B2B/dealer-recon contract sold by hand — no app.
             Budget: ~$0 media + minimal compliance/vetting spend (Tony-approved) — by ~2026-08-31.

KILL CRITERIA:  <10 matched paid jobs, OR unacceptable time-to-match, OR <50% detailer 2nd/3rd-job
             retention, OR any regulatory dependency (worker-class / insurance / TPT) unresolved — by
             ~2026-08-31 → stop; do NOT build the app; reallocate to the primary bet.

GUARDRAILS:  clear — no LYV sourcing; fully legal (regulatory surface handled as hard conditions, not
             gray areas); drafts-only + Tony-approval gate on any spend, publish, or contract; no
             medical claims; no eco overclaim.

FOCUS COST:  A cold-start local-services marketplace is ops- and relationship-heavy and cannot run in
             ~2 founder-hrs/week like a digital funnel. Committing beyond the concierge test would tax
             Executive Edge and the $1M-2026 mandate — which is exactly why this is capped at
             CONDITIONAL GO (fund the test, not the build) and sequenced behind the primary bet.
```

**Why CONDITIONAL GO, not GO:** the model closes per job and the network genuinely compounds, but the load-bearing assumption (two-sided liquidity) is untested and the commit taxes the primary bet — the two conditions the go-no-go rules say cap the verdict. Fund the cheapest evidence step; let the ~Aug-31 gate convert it into a clean metro build-out or a clean reallocation. **This gate recommends only — actual spend, contracts, and any published/sent copy still require Tony's explicit approval.**
