# Layer 5 — Proprietary MCP (design; scaffold, not yet wired)

A safe read/act layer over Tony's own systems, so the OS can pull live truth (revenue, funnel, users) and take *drafted* actions — without ever handling raw secrets in the open or taking irreversible actions unattended.

## Principles (non-negotiable)
- **Read-first.** Ship read-only surfaces before any write capability.
- **Least privilege.** Scoped, revocable tokens per surface; no god-keys.
- **Drafts, not sends.** Any write is a draft/proposal a human approves — never an autonomous external action (email send, payment, publish, prod schema change).
- **Secrets never in text.** Credentials live in the server's env / a vault; never printed, logged, or committed. (Matches the repo's secret-guard convention.)
- **Every action audited.** Append who/what/when to an audit log.
- **Guardrails inherited.** LYV firewall, no medical/legal claims, reputation protection apply here too.

## Surfaces (phased)

| Phase | Surface | Mode | Powers |
|---|---|---|---|
| 1 | Supabase (EE prod) | read | live users, subscriptions, funnel/scoring tables → `metrics-dashboard`, `weekly-ops-review` |
| 1 | Stripe | read | MRR, new/churned, cohort revenue → real pipeline/revenue numbers |
| 1 | GA4 / PostHog | read | traffic, funnel conversion, drop-off → `landing-funnel`, `paid-ads`, CRO |
| 2 | Gmail | draft-only | draft replies/outreach into Drafts (never send) → `lead-response` |
| 2 | Google Drive | read + create | read source docs; create new deliverables (not overwrite) |
| 3 | Supabase | guarded write | migrations/actions as reviewed, reversible proposals with rollback — approval-gated |

## Rollout
1. Stand up read-only Phase-1 surfaces; wire `metrics-dashboard` + `weekly-ops-review` to live data.
2. Add Phase-2 draft-only Gmail/Drive; wire `lead-response`.
3. Only after trust is established, add Phase-3 guarded writes with mandatory approval + rollback.

## What this needs from Tony (the gate)
This is the one part that can't be built unattended: it requires **Tony granting scoped, revocable credentials/access** for each surface (or approving the connectors). Until then, this layer stays a design + the OS uses the connectors already available in-session. When ready, granting access is a ~15-minute step and I'll wire Phase 1 first.

## Status
Design only. No credentials wired. No live actions. Build Phase 1 when Tony grants read access.
