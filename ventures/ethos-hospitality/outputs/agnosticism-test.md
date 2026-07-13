# Agnosticism test — skills run against a non-wellness venture

Purpose: prove the Founder OS works on hospitality (covers-based, non-subscription, licensed F&B) without leaking Executive Edge's clinical/SaaS assumptions. Run Jul 12, 2026 against `ethos-hospitality/venture-context.md`.

## Run 1 — /stress-test on "open a second concept in a new city this quarter"

```
BET:      Open a second Ethos concept in a new city this quarter.
VERDICT:  REFINE
WHY:      Fits the "repeatable concept system" thesis, but a new city + new lease this quarter opens
          a front and adds founder-dependence while the core concepts are the proven engine.
ASSUMPTIONS: (1) demand in the new market [L] — test: a pop-up / residency before a lease;
          (2) runs without you on-site [L] — test: name the GM; (3) unit economics clear buildout [M].
FAILURE-MODE FLAGS: new front · founder-dependence.
ECONOMICS: unproven — buildout capital before demand shown.
GUARDRAILS: clear.
FOCUS COST: pulls attention off raising per-location margin on existing concepts.
NEXT:     run a pop-up/residency to prove demand before committing a lease.
```
**Verdict: PASS.** No clinical/SaaS leakage. The failure-mode filter, guardrails, and "prove demand before capital" logic all translate cleanly to hospitality.

## Run 2 — /offer-architect on the Ethos dining model

Value ladder generalized fine: cover → loyalty/membership → private events / chef's table → (B2B) concept licensing / management contract. Economics translated: CPA → cost per guest acquired; AOV → average check + attach (wine pairing, dessert); break-even in covers/day; LTV → repeat visits × check; contribution margin per seat.

**Leak found (fixing):** the method pushed "AOV ≈ **10× the core price**" as a near-universal target. That's a paid-acquisition / info-product / DTC-funnel heuristic — it does **not** apply to a restaurant (you can't 10× a dinner check via order bumps) or to many recurring/enterprise models. A truly industry-agnostic skill must treat 10× as a *funnel-model heuristic*, not a universal law, and optimize **margin-per-customer / LTV** for experiential, recurring, and enterprise models.

→ **Action:** generalize `offer-architect` (SKILL.md + method.md) so the 10×-AOV rule is explicitly conditional on a paid-acquisition funnel. (Applied in the same fix pass as the eval findings.)

## Verdict
Skills are structurally industry-agnostic (methods reference "the venture / the category / the active context", examples are clearly EE-only). One real assumption leaked — the 10×-AOV heuristic in `offer-architect` — caught precisely because we ran a non-wellness venture through it. Fixed. This is why a second, different venture context belongs in the repo permanently as a regression guard.
