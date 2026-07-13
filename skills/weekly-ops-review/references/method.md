# Weekly Ops Review — Method

## Principle
The weekly review answers the governing question — did the week compound wealth or just feel productive? It rewards shipped, reversible work; it forces a kill; and it protects the founder's attention by escalating only what truly can't be done without them. Under the DRIVE stance, anything reversible is already done before this review runs — so it appears in SHIPPED, never in NEEDS TONY.

## Step 1 — SHIPPED
Pull finished, reversible work from the week: merged PRs, deployed functions, finished assets, drafts the founder actually sent, decisions made and executed. For each, append the metric or dollar it moved (or "instrumentation" if it enables measurement). Cut work that's in-progress — this is a shipped list, not a status update.

## Step 2 — PIPELINE $
Enumerate open opportunities with a dollar value and a probability weight. Sum weighted. Compute the delta vs last week's review across three motions:
- **Added** — new opportunities entered.
- **Advanced** — moved to a later stage (value re-weighted up).
- **Slipped** — stalled, pushed, or lost (weighted down / removed).

Split B2B and B2C lines if the venture runs both. Numbers only — "strong interest" is not a pipeline.

## Step 3 — KILLED
Name what was stopped, or recommend stopping, with the reason mapped to one of:
- **kill-criteria** — hit a pre-set stop condition in venture-context.
- **economics** — CAC/LTV, margin, or payback doesn't work.
- **dilutes focus** — a front that spreads attention without compounding (guard: too many fronts).

If nothing was killed, state that explicitly and why — a review with no kill candidate usually means overbuild is going unchallenged.

## Step 4 — NEEDS TONY
Max 3 items. Each must be:
- ≤15 minutes of the founder's time, and
- genuinely gated on the founder: **money** (spend/pricing), **commit** (external commitment), **send** (external send/publish), or **physical** (in-person/physical-only action).

Phrase each as a decision with a recommended default so the founder can approve in one line. Anything reversible does not belong here — it's already shipped.

## Step 5 — Assemble
Emit only the block. No preamble, no "here's your review," nothing after. The format is the interface.

---

## Worked example — Executive Edge OS (mid 90-day B2B sprint)

```
SHIPPED
- Deployed cohort-scoping landing page + booking flow → 3 discovery calls booked (B2B pipeline entry)
- Shipped in-app data-fusion prompt → data-fusion rate 47% → 54% WoW (north-star input)
- Finished + sent 6 outbound cohort briefs (Tony sent) → 2 replies, 1 call booked
- Merged RLS fix on cohort-reporting table → unblocks B2B reporting demo

PIPELINE $
- B2B cohorts: $126k weighted (+$48k added: 1 new PE firm @ 40%; +$18k advanced)
- B2C ladder ($199 → $99/mo → $4,997): $9k weighted MRR-equiv (+$1.2k)
Total open: $135k | Δ +$67k

KILLED
- Paused paid IG ads — CAC payback 7.1mo vs 4mo target (economics)
- Dropped white-label licensing deck build — no signed intent yet, dilutes focus mid-sprint

NEEDS TONY (≤3, ≤15 min each)
1. Approve $2k for cohort case-study video edit — recommended: yes, gates 2 A-tier deals. [money]
2. Sign the mutual NDA with PE firm (in inbox) — recommended: sign as-is, standard terms. [commit]
3. Send the cohort proposal to [firm] — draft ready, recommended: send today. [send]
```

Note: every SHIPPED line carries the metric/$ it moved; NEEDS TONY holds only gated, ≤15-min decisions with a recommended default; both kills applied the governing question.
