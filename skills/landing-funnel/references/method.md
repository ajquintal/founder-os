# /landing-funnel — Full method & worked example

One level deep; does not fan out further. Lenses: Brunson (funnels, the value ladder, one goal per page), Hormozi (offer stack). This skill specs *structure*; `/offer-architect` sets the offers and `/direct-response-copy` writes the sections.

## Match the funnel shape to the archetype (not a default DTC stack)

The funnel shape is read from the venture's archetype (it mirrors `/offer-architect`'s value-ladder shapes). The low-ticket tripwire/OTO stack is the **goods/DTC** case — one archetype, not the universal funnel.

| Archetype | Funnel shape | Primary conversion |
|---|---|---|
| **Goods / DTC** | sales page → bump → OTO → recurring (or: free lead magnet → opt-in → nurture → tripwire) | purchase |
| **Services** | landing → diagnostic/pilot → engagement → retainer (application → booked call → manual close) | qualified call booked / pilot sold |
| **Marketplace** | supply acquisition + demand acquisition → match / first transaction (take-rate) | first matched transaction |
| **Subscription** | landing → free/trial → paid tier → expansion | trial-to-paid / subscribe |

Forcing a high-ticket, marketplace, or two-sided offer through a checkout-and-bump flow is the classic mistake — services close on a call (the "funnel" ends at a booked, qualified call, not a card charge), and a marketplace has to acquire BOTH sides and prove liquidity with a match, not run a bump/OTO stack.

## Page sections (the on-page order)

hero/hook → problem → mechanism → proof → offer/stack → risk reversal → objections/FAQ → final CTA. Each section carries a positioning pillar and earns its place by moving the reader toward the one CTA or removing one objection. If a section does neither, cut it — and don't over-build the page (Tony's standards-as-bottleneck failure mode cuts both ways).

## Value-ladder flow (across pages) — archetype-conditional

The flow below is the **goods/DTC** ladder (one archetype). Mirror `/offer-architect`'s shape for the venture's archetype:

```
Goods / DTC:   Entry → Order bump → OTO1 → OTO2 → Recurring → High-ticket backend
Services:      Diagnostic / pilot → Core engagement → Retainer / expansion
Marketplace:   Acquire one side → acquire the other → take a rate on the match  (NOT a bump/OTO stack)
Subscription:  Free / trial → Paid tier → Expansion
```

For each rung name: the page it lives on, its price (from `/offer-architect`), and the trigger that offers the next rung. Always know the next step up and why a buyer climbs it. **Price rule:** pull every price from `/offer-architect`; if a rung's price is unknown, mark [PRICE TBD] and request it — never invent. Beside any emitted price, carry the venture caveat "prices evolving — confirm live before customer-facing use."

## Tracking / CTA events

One primary CTA per page. Each step fires one analytics event so the funnel is measurable end to end — an unmeasured step can't be optimized. The event chain follows the archetype's flow (event names per the venture's stack — GA4 for EE):

- **Goods/DTC:** `page_view → generate_lead → begin_checkout → add_bump → purchase → subscribe → book_call`
- **Services:** `page_view → application_submit → call_booked → contract_sent`
- **Marketplace:** `supply_signup / demand_signup → match_made → first_transaction`
- **Subscription:** `page_view → sign_up → trial_start → subscribe → expand`

## Worked example (abridged) — Executive Edge

(EE prices below are illustrative and evolving — confirm live against `/offer-architect` before any customer-facing use; mark [PRICE TBD] for any rung without a confirmed price.)

**B2C $199 funnel (low-ticket tripwire):**

| # | Section | Job | Pillar / proof | CTA |
|---|---|---|---|---|
| 1 | Hero / hook | grab + promise | close-the-loop (P1) | Upload labs → unlock score |
| 2 | Problem | insight ≠ execution | system-not-app (P3) | — |
| 3 | Mechanism | protocol→score→drift→adjust + fusion | P1 + P2 | — |
| 4 | Proof | scoring IP, users, integrations | clinical precision (P4) | — |
| 5 | Offer / stack | what $199 unlocks | value stack | Unlock for $199 |
| 6 | Risk reversal | de-risk the buy | — | — |
| 7 | Objections / FAQ | "another health app?" / "is it medical?" | P3 (+ guardrail-safe) | — |
| 8 | Final CTA | one action | — | Upload your labs |

```
FLOW:   Freemium labs-upload (lead) → $199 unlock (entry) --bump--> extended panel / priority calibration (+$) --OTO--> $99/mo subscription (recurring) → $4,997 flagship 1:1 (backend)
EVENTS: page_view → generate_lead (labs uploaded) → begin_checkout → add_bump → purchase ($199) → subscribe ($99/mo) → book_call (flagship)
```

**B2B cohort variant (high-ticket application flow):** landing (cohort value + proof, pillars 1–4) → application form (qualify) → booked strategy call → manual close of a $30–48k cohort or a $25k + $2k/mo operator license. Events: `page_view → application_submit → call_booked → contract_sent`. No self-serve checkout — and per the venture's product gap, the page never promises a live team dashboard before a contract is signed.
