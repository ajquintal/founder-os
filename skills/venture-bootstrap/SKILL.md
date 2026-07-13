---
name: venture-bootstrap
description: >-
  Turn a validated venture into the leanest foundation that can take its first real dollar. Opens with an
  explicit buy-vs-build-vs-none decision (default: configure off-the-shelf/no-code — a storefront, a booking
  tool, a POS); only scaffolds a custom repo (leanest stack, CLAUDE.md + agent-runbook, CI) when the venture
  genuinely needs custom software. Ends at a first-real-transaction checklist (a live URL for custom, one real
  order/booking on the platform for off-the-shelf). Refuses to proceed until positioning + unit economics exist
  (overbuild guard). Use when standing up a venture's build, deciding off-the-shelf vs custom, choosing a stack,
  or scaffolding a repo. Triggers: "bootstrap the venture", "scaffold the repo", "set up the project", "buy vs
  build", "off-the-shelf or custom", "what stack should we use", "stand up the build", "hello-world deployed".
---

# /venture-bootstrap — Technical Foundation

The build-stage entry point. Turns a validated venture into the smallest foundation that can take a real transaction. Its first move is to decide whether to build custom software *at all*: most ventures should buy or assemble off-the-shelf tools, and a custom codebase is the exception that must earn itself — needless custom build is Tony's #1 failure mode ("the cathedral before the screwdriver"). Optimizes time-to-first-dollar and reversibility over architecture — because Tony sells before he builds, this skill keeps the build from ever outrunning revenue.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/operating-playbooks.md` §3 economics-first, §8 AI-native build; `founder-profile/guardrails.md`).
2. Active `ventures/<slug>/venture-context.md` (offer, model, stack signals, jurisdiction, constraints).
3. The latest `/positioning` output and `/offer-architect` economics block for this venture, if they exist.

## Method (full detail + worked example in `references/method.md`)
1. **Positioning + economics gate (blocking).** Confirm BOTH a defined positioning (from `/positioning`) AND a priced offer + unit economics that close (from `/offer-architect`) already exist. If either is missing, STOP and route to whichever is missing — do not scaffold speculatively.
2. **Buy-vs-build-vs-none decision (blocking, before any stack talk).** Read the venture's product/delivery shape from context (`Business model & revenue architecture`, `Stack`, `regulatory-surface`) and pick the leanest branch that ships. Default to the cheapest option; a custom codebase must name the specific capability off-the-shelf can't deliver. Record the branch, the reason, and the rejected branches.
   - **None** — little/no software needed to take the first dollar (physical goods sold wholesale/in person, a service sold by invoice or DM). Stand up nothing; skip the scaffold (steps 3–5). The step-6 milestone is off-platform — a logged invoice/PO/in-person sale.
   - **Off-the-shelf / no-code (default when software is needed)** — the need is served by configuring an existing platform (storefront/Shopify, booking/Cal.com/Resy, POS/Square/Toast, site builder, CRM/Airtable). Skip the scaffold (steps 3–5) and go to the off-the-shelf setup checklist (§6b in the method).
   - **Custom software** — off-the-shelf genuinely can't serve it (the core value *is* the software, a data/workflow moat, an integration or unit-economics no platform delivers). Proceed to steps 3–6; `starters/saas` is this branch's archetype.
3. **Stack decision (custom-software branch).** Map the venture's real needs (auth? payments? relational data? content/SEO? realtime? AI?) to the leanest stack that serves them. Default to Tony's proven stack unless a need contradicts it; record choices + rejected alternatives.
4. **Repo scaffold (custom-software branch).** Produce the directory tree (app · functions · migrations · tests · docs · CI), one level of nesting, with stub files.
5. **Conventions + CI (custom-software branch).** Draft the venture's `CLAUDE.md` (stack, commands, auth model, DB + secret conventions, don't-commit list) and `docs/agent-runbook.md` (operating envelope, work loop, deploy path); wire a minimal CI pipeline (lint · typecheck · unit · build; add e2e only once a critical path exists).
6. **First real transaction (all branches).** A numbered first-week checklist ending at the venture's first real (test-mode) transaction — a live URL processing one test-mode transaction (custom), one real test-mode order/booking on the configured platform (off-the-shelf, §6b), or the first logged invoice/PO/in-person sale (none).

## Output contract
1. **Buy-vs-build-vs-none decision** — the chosen branch (none / off-the-shelf / custom software), the reason, and the rejected branches. This gates everything below.
2. **Stack or platform decision** — a table (need → choice → why → rejected alternative): a stack table for the custom branch, a platform table (which off-the-shelf tools, why, rejected) for the off-the-shelf branch.
3. **Foundation artifact** — custom branch: the fenced repo scaffold tree (one-line purpose per top-level entry, stub `CLAUDE.md` + `docs/agent-runbook.md` headings, `.env.example`). Off-the-shelf branch: the off-the-shelf setup checklist. None branch: a one-line manual path + the trigger that would later justify software.
4. **First-week checklist** — numbered, each item shippable + verifiable, ending at the first real (test-mode) transaction for the chosen branch (live URL + test transaction / one platform order-booking / first invoice-PO). Mark items behind an approval gate (spend, domain, production).

## Rules
- Positioning + economics before build. No gate, no scaffold — this is the overbuild guard made mechanical.
- **Buy before build.** Default to off-the-shelf/no-code; choosing custom software requires naming the specific capability off-the-shelf can't deliver. "It'll be cleaner if we build it" is not a reason. Needless custom build is the #1 failure mode. Read the product/delivery shape from the venture context — never assume software.
- A venture can be **hybrid**: buy the 90% off-the-shelf (e.g., a Shopify storefront) and build only the thin slice that must be custom. Don't scaffold a full app to get one bespoke rule.
- Leanest stack that serves the need; justify every dependency against time-to-first-dollar.
- Reversible + surgical: no infra that can't be torn down in a day.
- Secrets in env only — never in scaffolded files or examples. Ship `.env.example` with placeholder keys.
- Definition of done travels in: `CLAUDE.md` states done = PR + merged + verified in prod; conventional commits; PR body = Problem→Root cause→Fix→Verification.
- Drafts only; flag every spend/domain/production step for approval. Never hard-code an industry — read it from the venture context.

## Examples & evals
- `references/method.md` — the buy-vs-build-vs-none decision, stack matrix + scaffold (custom branch), the off-the-shelf setup checklist, runbook outline + worked examples (custom + off-the-shelf).
- `evals/evals.md` — 4 cases (SaaS w/ subscription, no-auth landing, non-default stack / economics missing, off-the-shelf / no custom build).
