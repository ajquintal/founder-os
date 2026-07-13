# /go-no-go — Full method & worked example

One level deep; does not fan out further. This gate **composes** the Concept-stage artifacts into a funding decision. Lenses: economics-first (Scale Mechanics), focus discipline (Founder Profile), reversibility.

## How it differs from `/stress-test`

| | `/stress-test` | `/go-no-go` |
|---|---|---|
| Question | Is this idea worth pursuing? | Do we commit resources now? |
| When | Early, on a raw idea | After market/economics/size work exists |
| Cost gated | Attention | Money + founder-hours + build |
| Inputs | The idea + Founder Profile | The four upstream artifacts |

Never run this gate on an unfiltered idea — send it to `/stress-test` first. This gate assumes that filtering already happened.

## Step 1 — Assemble the basis

Gather: `/stress-test` verdict, `/market-scan` brief (read + wedge), `/offer-architect` economics (closes / unproven / doesn't), `/opportunity-size` range (conservative/base/stretch + load-bearing assumption). Two immediate terminators:
- An upstream **KILL**, or a **guardrail conflict** (LYV firewall, reputation, legal, claims) → **NO-GO**. Do not relitigate a kill.
- An unresolved **REFINE** → send it back; this gate does not commit on an unresolved idea.

If an artifact is missing, either run it now or list its absence as a condition — do not proceed on a guess.

## Step 2 — Score the commit axes

Mark each pass / concern / fail:

| Axis | Fail tell |
|---|---|
| Compounds vs new front | Opens a concurrent front while the primary bet is unfinished |
| Economics close | `/offer-architect` says doesn't-close, or rests on an unvalidated number |
| Demand evidenced | No warm signal; all demand is assumed |
| Focus cost acceptable | Meaningfully taxes the current primary bet |
| Reversibility / kill-ability | Hard/expensive to unwind; no clean kill point |
| Founder-dependence | Structurally needs Tony in the loop forever |
| Guardrails clear | Any conflict — this is a hard stop, see Step 1 |

## Step 3 — Size the resource ask

State it in the four currencies: **$ spend · founder-hours · calendar time · opportunity cost**. Compare to the mandate: Tony ≤2 hrs/week (approvals + sales calls only), the venture's budget ceiling, and $0-until-demand-proven. An ask that spends Tony's scarce time or real money ahead of evidence raises the bar.

## Step 4 — Decision thresholds

- **GO** — all axes pass or have cheap mitigations; economics close; demand evidenced; guardrails clear; kill-able. Commit the first milestone's resources now.
- **CONDITIONAL GO** — sound but one thing is unproven (usually demand or one economic assumption). Commit to **funding the test, not the build**; name the conditions and their verification dates. This is the default for a promising bet whose demand isn't yet shown.
- **NO-GO** — a guardrail breach or upstream KILL; economics don't close; it opens a front that taxes the primary bet; or demand is unproven *and* the cheapest test isn't cheap. Name the fatal reason in one line.

## Step 5 — First funded milestone + kill criteria

The first milestone is the **smallest resourced step that produces evidence** — a manual sale, pre-sold units, a hand-matched marketplace transaction (proving liquidity), a booked-calls target, or a validated conversion / repeat number. Not a build. A build-first milestone with no demand test is the architecture-before-revenue tell → NO-GO (unless all four building-ahead-of-demand conditions in `decision-standards.md` hold). Attach **dated kill criteria** (metric + threshold + date) aligned to the venture's own gates, and state the focus cost.

## Worked example (abridged)

**Input:** commit resources to the EE **B2B 90-day sprint** (context: Executive Edge).

Basis assembled: `/stress-test` = **GO** (compounds the live engine); `/market-scan` = real category, wedge = closed-loop + blood/device; `/offer-architect` = $30–48k cohort, services-margin, **closes**; `/opportunity-size` = **$115k–$300k booked** range, anchored bottoms-up, load-bearing assumption = conversion.

```
COMMIT:      Commit the 90-day B2B sprint: founder sales time + Cowork-built sell kit + warm/direct outreach to land corporate cohorts and operator licenses.
DECISION:    CONDITIONAL GO
BASIS:       stress-test GO · market real + wedge (closed-loop + blood/device) · economics closes ($30–48k cohort, services margin) · size $115k–$300k booked (base ~$200k)
CONDITIONS THAT MUST HOLD:
  1. All outreach targets are non-LYV (firewall) — verified before any contact is queued.
  2. Warm-outreach → discovery-call conversion proves out — verified by 3 booked calls by Aug 3.
  3. No pre-contract promise of a live team dashboard (product-gap guardrail).
RESOURCE ASK:  $0 media until demand proven · Tony ~2 hrs/wk on sales calls only · ~90-day calendar · displaces nothing (this IS the primary bet).
FIRST FUNDED MILESTONE:  3 booked discovery calls from warm, non-LYV outreach + drafted sell kit (drafts only) — budget $0 — by Aug 3, 2026.
KILL CRITERIA:  Any sales rail with zero booked calls by Aug 3, 2026 → kill that rail and reallocate.
GUARDRAILS:  clear — CONDITIONAL on the non-LYV sourcing check holding.
FOCUS COST:  None net — it is the current primary bet; the risk is fragmenting it across too many rails at once.
```

**Why CONDITIONAL GO, not GO:** the model closes and the engine compounds, but the load-bearing assumption (conversion) is untested. Fund the near-$0 demand test, not a build; the Aug 3 gate converts it to a clean scale-up or a clean reallocation.
