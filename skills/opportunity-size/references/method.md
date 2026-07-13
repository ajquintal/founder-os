# /opportunity-size — Full method & worked example

One level deep; does not fan out further. Lenses: Scale Mechanics (economics-first), David Skok (conversion/ACV), cash discipline (timing of cash vs. bookings). **Size in the venture's money model — GMV for a marketplace, units×AOV for goods, billings for services, ARR for subscription; never default to an ACV/subscription shape.**

## Why both directions

Tops-down alone flatters — "1% of a $65B market" is a fantasy, not a plan. Bottoms-up alone can miss a ceiling. Run both blind, then reconcile: bottoms-up is what you'll actually collect in 12 months; tops-down tells you whether the ceiling is worth the focus.

## Tops-down (TAM → SAM → SOM)

| Layer | Definition | How to get it |
|---|---|---|
| **TAM** | Total category revenue if everyone bought | `/market-scan` figure (sourced) or category report; label the year |
| **SAM** | The slice this venture can serve | TAM × (servable geo × ICP × channel fit); each filter is a stated multiplier |
| **SOM** | Realistically obtainable in the window | SAM × a small, justified share (competition, reach, capacity); usually low single digits % |

Show the arithmetic and tag every multiplier. SOM is a ceiling, not a forecast.

## Bottoms-up (the trustworthy number) — pick the archetype's formula

| Archetype | Bottoms-up build → 12-mo revenue |
|---|---|
| Goods / commerce | reachable buyers × conversion × AOV × repeat-orders/yr (cap by inventory-cash capacity) |
| Services | reachable clients × close rate × engagement value × frequency (cap by delivery / utilization capacity) |
| Subscription / recurring | new subs × ARPA × months retained in window (+ existing base) |
| Marketplace | active buyers × orders × AOV = **GMV**, then × take-rate = **net revenue** (size the constrained side; it caps GMV) |

- **Reachable buyers / clients / suppliers** — from real reach only: owned list size, warm/target-account count, outbound capacity given the founder's time cap. Not a % of the market. **For a marketplace, count BOTH sides — the constrained side (usually supply) sets the ceiling.**
- **Conversion** — benchmarked or assumed; if assumed, it's a candidate for the load-bearing assumption.
- **Price / AOV / ACV / take-rate** — held price points from the venture context / `/offer-architect`.
- **Frequency / repeat** — one-time, or recurring/repeat × expected orders or months in the window.
- Sum across segments and rungs, then place the cash: **booked** (contract/GMV value) vs **collected in-window**. Cash can **lag** booked (deposits, multi-month terms) or **lead** it (goods paid at checkout); an **inventory venture commits working capital to stock ahead of any sale**, so the binding limit is often cash-for-inventory, not demand — cap the range there.

## Reconcile → a range

Present conservative / base / stretch, anchored to bottoms-up and capped by SOM. **Also cap by the venture's real delivery constraint — inventory-cash for goods, utilization/hours for services, the constrained side's supply for a marketplace — whichever binds first.** If bottoms-up > SOM, a filter is wrong — revisit. If bottoms-up ≪ SOM, the constraint is reach / execution / capacity, not market size (that's the usual case and it's fine — say so).

## Load-bearing assumption

The one input the range swings on most (flex it ±50% and see which moves the range hardest — almost always reachable-buyer count or conversion). Name it and give the cheapest test to de-risk it before scaling spend.

## Worked example (abridged)

**Input:** size the EE **B2B 90-day sprint** (context: Executive Edge; cohort $30–48k, floor $30k; operator license $25k + $2k/mo; Tony ≤2 hrs/wk; $0 until demand proven; kill gate Aug 3).

**Tops-down (ceiling):**
- TAM: wellness-tech ~$65B 2026 `sourced` [market-scan] — far too broad; the relevant category is corporate executive-health programs.
- SAM: US mid-market/enterprise firms that buy executive-health cohorts × servable via warm/direct channel — est. low-hundreds of $M `assumed`.
- SOM (12 mo): a fraction of a percent given a solo founder-led sales motion → ~$0.1–0.5M `assumed`. Ceiling only.

**Bottoms-up (the plan):**
- Reachable buyers this window: ~30–50 warm/target companies (non-LYV) from LinkedIn + direct outreach `assumed`.
- Conversion to signed cohort: ~10–15% `benchmarked/assumed` (L confidence — untested).
- Cohort ACV: $30–48k `sourced` [context]; + 1–3 operator licenses @ $25k + $2k/mo.
- → 3–7 cohorts ($90–336k booked) + 1–3 licenses ($25–75k setup + recurring).

**Reconciled range (12-mo, anchored bottoms-up, capped by SOM):**
| | Cohorts | Licenses | Booked | Collected in window* |
|---|---|---|---|---|
| Conservative | 3 | 1 | ~$115k | ~$70–90k |
| Base | 5 | 2 | ~$200k | ~$130–160k |
| Stretch | 7 | 3 | ~$300k+ | ~$210k+ |

*6-month cohort terms + deposits mean collected < booked inside the window.

**Load-bearing assumption:** warm-outreach → signed-cohort **conversion** (untested, moves the range most). **Cheapest test:** book 3 discovery calls from warm (non-LYV) outreach by the existing **Aug 3** kill gate — before any media spend.
