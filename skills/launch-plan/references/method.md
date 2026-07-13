# /launch-plan — Full method & worked example

One level deep; does not fan out further. Lenses: Brunson (launch sequencing; hook/story/offer across the emails), Gerber/E-Myth (a runbook so the launch is a repeatable system, not founder heroics), Decision Standards (the go/no-go gate + reversibility), Skok (post-launch: judge against CAC/conversion, not vibes).

## Define the launch

State four things before any checklist:
- **What ships** — the offer/feature/product and the rung it sits on.
- **Launch type** — seed (quiet, to a few), waitlist (build then open), open-cart (time-boxed window), or feature (in-product).
- **Success metric + target** — one number (e.g., paid conversions, booked calls, revenue), with a target and a window.
- **Window** — the relative timeline (anchor everything to T-0 = launch day).

## The go/no-go gate

A launch fails not from imperfect copy but from launching broken. The gate is an objective checklist — every item pass/fail, no "mostly ready":

- Offer + price locked.
- Checkout/flow verified **in production** (a real test transaction, then refunded).
- Sales/landing page live, reviewed, claims-cleared.
- Send sequence drafted, approved, scheduled (not sent).
- Proof assets ready (testimonials/cases, claims-cleared).
- Analytics/events verified firing in prod.
- Support + refund/return policy ready.

Miss one → **no-go**; slip the date. "Ship live over perfect" governs polish, not integrity — you launch an imperfect page, never a broken checkout.

## Pre-launch (T-minus)

Warm the audience, finish assets, verify tech, seed proof. Each item: owner + relative date + done-criteria. Typical spine: T-14 lock offer + draft sequence; T-10 build/verify checkout + page; T-7 seed proof + warm the list; T-3 wire analytics; T-1 support ready + **go/no-go review**.

## Launch (T-0 … T+N)

The send/open sequence, each send an **approval gate** (drafted, fired only on approval):
- T-0: open + email 1 (announce).
- T+1: email 2 (proof/case).
- T+3: email 3 (objections/FAQ).
- T+N: email 4 (last call / close).
Monitor conversions vs pace, checkout errors, and reply themes throughout.

## Post-launch (T+N …)

- Downsell/nurture non-buyers (payment plan, lower rung, or content).
- **Retro:** metric vs target, funnel drop-offs, CAC if paid ran.
- **Decision (go/refine/kill):** scale/evergreen, fix-and-rerun, or kill and reallocate — per `decision-standards.md`.
- Onboard buyers toward the next rung (the closed loop / ascension).

## Assets register

A flat list: every asset (emails, page, creative, proof, FAQ, checkout), its owner, and status (draft/approved/live). Nothing ships half-done; this is where standards-as-bottleneck gets caught early instead of on launch morning.

## Worked example (abridged) — Executive Edge OS

**Input:** launch the **$199 protocol unlock** to the existing freemium labs list. Type: open-cart, 5-day window. Success metric: paid $199 conversions from engaged freemium users; target set against list size (confirm live). T-0 = launch day.

**Pre-launch checklist (excerpt):**
| Phase | Item | Date | Owner | Asset | Done when |
|---|---|---|---|---|---|
| Pre | Lock offer + price + guarantee | T-14 | Tony | offer spec | locked in venture-context |
| Pre | Draft 4-email launch sequence | T-14 | content (AI) | 4 emails | drafted + approved, queued |
| Pre | Verify $199 checkout in prod (Stripe live) | T-10 | eng | checkout | live test purchase succeeds + refunded |
| Pre | Sales page message-matched, claims-cleared | T-10 | eng/content | LP | reviewed; no medical claims |
| Pre | Seed 3+ proof cases from freemium users | T-7 | Tony | testimonials | 3+ usable, claims-cleared |
| Pre | Warm sequence to list (execution-layer value) | T-7 | content (AI) | 2 emails | drafted, approved, scheduled |
| Pre | Wire GA4 conversion events | T-3 | eng | analytics | events firing in prod |
| Pre | Support/FAQ + refund policy ready | T-1 | ops | FAQ | published; canned replies drafted |
| Pre | **Go/no-go review** | T-1 | Tony | — | all gate criteria pass |

**GO/NO-GO GATE (all must be true):** offer+price locked · checkout verified in prod · page live + claims-cleared · sequence approved + scheduled · 3+ proof assets · analytics verified · support/refund ready. Miss one → NO-GO, slip.

**Launch-day runbook (T-0):**
| Time | Action | Monitor | Gate | Rollback/abort |
|---|---|---|---|---|
| T-0 08:30 | Final checkout smoke test in prod | test purchase + refund OK | — | checkout fails → ABORT send, fix, reslot |
| T-0 09:00 | Fire launch email 1 | deliverability, bounce rate | **Tony approves send** | bounce spike → pause sends, check domain |
| +1h | Post anchor-channel launch content | clicks, engagement | approved drafts | broken link → pull, fix, repost |
| +4h | Check conversions vs pace | conv rate, Stripe errors | — | Stripe errors → pause any paid traffic |
| +8h | Midday status; reply to objections | reply themes → FAQ | — | — |
| EOD | Log day-1 metrics; brief email 2 | conv vs target | — | <25% of pace → adjust email-2 angle |

**Post-launch:** T+6 downsell non-buyers (payment plan) [draft]; T+7 retro vs target; T+7 go/refine/kill; T+14 onboard buyers toward $99/mo.

**Guardrails applied:** every send is an approval gate (drafts only); no spend without approval; only substantiated claims, regulated claims routed to review (per the venture's claims guardrails); LYV audience never used.

## Anti-patterns (flag these)

- Launching to hit a date with a failed gate criterion (broken checkout, unreviewed claims).
- Auto-firing sends "to save time" (violates drafts-only).
- No success metric → no way to make the post-launch kill/scale call.
- All assets "90% done" on launch morning (standards-as-bottleneck) — the register catches this at T-7.
