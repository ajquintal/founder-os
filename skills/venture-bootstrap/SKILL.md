---
name: venture-bootstrap
description: >-
  Scaffold a validated venture's technical foundation — pick the leanest stack for its real needs,
  lay out the repo, write its CLAUDE.md + agent-runbook conventions, wire CI, and produce a
  "hello-world deployed" checklist that ends at a live URL taking one real (test-mode) transaction.
  Refuses to scaffold until positioning + unit economics exist (overbuild guard). Use when standing up
  a repo, choosing a stack, or starting a venture's build. Triggers: "bootstrap the venture", "scaffold
  the repo", "set up the project", "what stack should we use", "stand up the build", "hello-world deployed".
---

# /venture-bootstrap — Technical Foundation

The build-stage entry point. Turns a validated venture into the smallest AI-native foundation that can ship a real transaction. Optimizes time-to-first-dollar and reversibility over architecture — because Tony sells before he builds, this skill keeps the build from ever outrunning revenue.

## Load first
1. `founder-profile/PROFILE.md` (+ `founder-profile/operating-playbooks.md` §3 economics-first, §8 AI-native build; `founder-profile/guardrails.md`).
2. Active `ventures/<slug>/venture-context.md` (offer, model, stack signals, jurisdiction, constraints).
3. The latest `/positioning` output and `/offer-architect` economics block for this venture, if they exist.

## Method (full detail + worked example in `references/method.md`)
1. **Positioning + economics gate (blocking).** Confirm BOTH a defined positioning (from `/positioning`) AND a priced offer + unit economics that close (from `/offer-architect`) already exist. If either is missing, STOP and route to whichever is missing — do not scaffold speculatively.
2. **Stack decision.** Map the venture's real needs (auth? payments? relational data? content/SEO? realtime? AI?) to the leanest stack that serves them. Default to Tony's proven stack unless a need contradicts it; record choices + rejected alternatives.
3. **Repo scaffold.** Produce the directory tree (app · functions · migrations · tests · docs · CI), one level of nesting, with stub files.
4. **Conventions.** Draft the venture's `CLAUDE.md` (stack, commands, auth model, DB + secret conventions, don't-commit list) and `docs/agent-runbook.md` (operating envelope, work loop, deploy path), adapted to the chosen stack.
5. **CI.** Minimal pipeline: lint · typecheck · unit · build. Add e2e only once a critical path exists.
6. **Hello-world deployed.** A numbered first-week checklist ending at a live URL processing one real test-mode transaction.

## Output contract
1. **Stack decision** — table (need → choice → why → rejected alternative) + one-paragraph summary.
2. **Repo scaffold tree** — fenced directory tree, one-line purpose per top-level entry, incl. stub `CLAUDE.md` + `docs/agent-runbook.md` headings and `.env.example`.
3. **First-week build checklist** — numbered, each item shippable + verifiable, ending at "live URL + one test transaction". Mark items behind an approval gate (spend, domain, production).

## Rules
- Positioning + economics before build. No gate, no scaffold — this is the overbuild guard made mechanical.
- Leanest stack that serves the need; justify every dependency against time-to-first-dollar.
- Reversible + surgical: no infra that can't be torn down in a day.
- Secrets in env only — never in scaffolded files or examples. Ship `.env.example` with placeholder keys.
- Definition of done travels in: `CLAUDE.md` states done = PR + merged + verified in prod; conventional commits; PR body = Problem→Root cause→Fix→Verification.
- Drafts only; flag every spend/domain/production step for approval. Never hard-code an industry — read it from the venture context.

## Examples & evals
- `references/method.md` — stack decision matrix, scaffold tree, runbook outline + worked example.
- `evals/evals.md` — 3 cases (SaaS w/ subscription, no-auth landing, non-default stack).
