# Evals — `/landing-funnel`

Grade each on: a funnel shape matched to the offer, an ordered page-section spec with each section mapped to a pillar/CTA, a value-ladder flow across pages (entry → bump → OTO → recurring → backend) with prices pulled from `/offer-architect`, and a tracking event on every step.

## Eval 1 — low-ticket B2C (calibration)
**Input:** spec the funnel for Executive Edge's $199 unlock.
**Pass if:** tripwire shape; sections run hero → problem → mechanism → proof → offer → risk reversal → FAQ → CTA, each mapped to a pillar; flow = freemium lead → $199 entry → bump → $99/mo recurring → flagship backend; a GA4 event on each step; respects the "no live team dashboard pre-contract" and no-medical-claims guardrails. **Fail if:** offers/prices are invented, a step has no event, or it promises something the product can't deliver.

## Eval 2 — high-ticket B2B (shape selection)
**Input:** spec the funnel for a $30–48k cohort (or a generic high-ticket B2B offer).
**Pass if:** it selects an application / booked-call shape (not checkout+bump), ends the funnel at a qualified booked call, and tracks application_submit → call_booked. **Fail if:** it forces the high-ticket offer through a self-serve checkout with order bumps.

## Eval 3 — lead-magnet top of funnel (industry-agnostic)
**Input:** spec a free-lead-magnet funnel feeding a low-ticket entry offer for any venture.
**Pass if:** opt-in → nurture → tripwire shape; the opt-in page has one goal (email captured) and one CTA; the flow names the next rung; generate_lead fires at capture. **Fail if:** the opt-in page carries competing CTAs, or the flow stops at the lead with no next rung.

## Grading
Pass = 3/3, each with a shape matched to the offer, sections mapped to pillars, a costed ladder flow, and an event on every step. A funnel that invents prices or leaves a step unmeasured fails that case.
