---
name: Executive Edge OS — Venture Context
slug: executive-edge
industry: Health-tech SaaS (clinical health optimization / longevity performance)
ownership: Solely owned by Tony
stage: Launched — live revenue engine; active 90-day B2B sprint
regulatory-surface: Health claims (review required); Rx/peptides via partners (LegitScript-relevant on public pages)
status: v0.1 — seeded from Tony's docs, Jul 12, 2026 (validates the /new-venture intake spec)
loads-after: founder-profile/PROFILE.md
---

# Executive Edge OS — Venture Context

> This is the first Venture Context (Layer 2). Every lifecycle skill loads `founder-profile/PROFILE.md`, then this file, then acts. It doubles as the real-world validation of the `/new-venture` intake field spec.

## Identity

- **Name:** Executive Edge OS — `executivesedge.ai` (marketing), `app.executivesedge.ai` (platform).
- **One-line thesis:** The biological operating system for high-performing men who refuse to decline — a clinical-grade platform that runs a closed loop: **assign protocol → score execution → detect drift → adjust protocol.**
- **Why it's defensible:** no competitor closes that loop with clinical depth; and the platform fuses **blood + continuous device data** (labs + wearables/CGM), a moat vs. blood-only (Function, Superpower) and device-only (Whoop).

## Market

- **Category:** clinical health optimization / longevity performance software.
- **Tailwind:** wellness-tech ~$65B (2026) → ~$208B (2035); personalized-health AI heavily funded.
- **Regulatory surface:** treat health claims carefully (review before publishing); Rx/GLP/peptide lines run through partners and are LegitScript-relevant on public pages. Member-gated clinical content is treated differently from public claims.

## Customer (ICP)

- **B2C:** high-performing men, ~35–55. Want a *system they operate* (dashboards, data, protocols), not a "wellness journey." Fear is coded as performance language ("I'm not performing at my level"), not aging.
- **B2B (active sprint):** (1) **Corporate cohorts** — 5–10 executives per company; (2) **Operator licenses** — clinics/coaches running EE under guided terms.

## Business model & revenue architecture

- **B2C value ladder** *(pricing evolving — confirm live before use; April docs are stale)*: freemium labs-upload → **$199 unlock** entry → **~$99/mo** subscription (held through the sprint) → **$4,997** flagship 1:1 (consolidating to a single flagship) → **$1,750/mo** private client (capped).
- **B2B (the current $-focus):** **Corporate cohorts $30–48k / 6 mo** (floor $30k); **Operator licenses $25k setup + $2k/mo**, or **$10k + 15% rev-share**; **channel referral 15%** of first-year value.
- **Product gap to respect:** cohorts are delivered as N individual clients + a manual quarterly team report (a cohort data layer exists in prod, but never promise a live team dashboard until a contract is signed).

## Offers — the wedge to lead with

The closed-loop execution layer (protocol ↔ score ↔ drift ↔ adjust) + blood+device fusion. Position as an **"Executive Performance OS" (execution layer)**, explicitly *not* commoditized labs+insights (Function $365/yr, Superpower $199/yr, Lifeforce $129/mo).

## Brand

- Voice = the Founder Profile universal default (clinical, precise, premium, confident, data-driven). No deltas needed.
- Visual: dark navy + gold + clinical teal; Inter + JetBrains Mono; "Bloomberg terminal for the body." Full system in the EE Brand Standards Bible.
- **Language guardrail:** never say "physician review" / "medical team" in sales or contract copy (refer-out model). No medical claims without review.

## Stack

- **Frontend:** React 18 + Vite + TypeScript + Tailwind + shadcn/ui.
- **Backend:** Supabase (Postgres 17, Auth, Edge Functions, Storage, RLS) — ~342 migrations, ~114 edge functions.
- **Hosting:** static `dist/` on DigitalOcean App Platform. **Payments:** Stripe LIVE. **AI:** direct Anthropic API. **Wearables:** Oura, Withings. **SMS:** Twilio. **Email:** Resend. **Analytics/obs:** GA4, Sentry, PostHog.
- **Scoring IP:** Daily Edge Score, Drift Score, BRI (Biological Readiness Index), PhenoAge.
- **Labs:** Junction integration in progress (12 panels built across Quest/Labcorp/BioReference, walk-in + at-home); existing PDF-extraction path live.
- **Repo:** `github.com/ajquintal/executive-edge-os`; local clone `~/Developer/executive-edge-os`; conventions in its `CLAUDE.md`.

## Assets on hand

Live production platform + existing user base (Supabase); domains; Tony's LinkedIn (~3,217 connections) and warm owned audience (Nov 2025 transformation post); the WEALTH_OPERATOR sell kit; Junction lab panels built.

## Constraints

- Tony's time ≤2 hrs/week (approvals + sales calls only).
- $10k budget ceiling; $0 until demand proven.
- Zero risk to the $400k job, other ventures, or reputation.
- **Drafts only** — nothing sends/publishes without Tony's approval.
- **LYV firewall** — never source EE prospects from LYV relationships/mailboxes (LYV is co-owned).

## Goal & gates

- **Goal:** contribute to $1M by end of 2026; maximize dollars collected in the 90-day B2B sprint (~by Oct 1, 2026).
- **Kill criterion:** any sales rail with zero booked calls by **Aug 3, 2026** gets killed and reallocated.
- **Success metric:** booked calls → signed cohorts/licenses → collected dollars.

## Competitive set + where they're weak

| Competitor | Weakness EE exploits |
|---|---|
| Noom ($70/mo) | generic, not clinical, not for this buyer |
| Whoop ($30/mo) | passive tracking; no protocols/coaching (device-only) |
| InsideTracker / Function / Superpower / Lifeforce | periodic lab snapshots; no daily execution layer (blood-only) |
| Marek Health ($250/mo) | TRT-focused; no daily scoring/protocol loop |
| Peter Attia (content) | information, not an execution system |

**Wedge:** the closed-loop execution layer + blood+device fusion. Lead every pitch with it.

## Source of truth / where things live

Repo + `docs/`; the "Executive's Edge" project folder (panels, funnels, monetization); `MY LIFE/WEALTH_OPERATOR/` (B2B sell kit + sprint logs); project memory (`project_executive_edge`, `project_wealth_operator`).
