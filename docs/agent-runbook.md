# Agent runbook — operating the Founder OS

For any AI session, subagent, or teammate picking up work in this repo. Read this, then drive.

## Load order (always)
1. `founder-profile/PROFILE.md` — who Tony is, failure modes, the governing question.
2. The other `founder-profile/*` files as relevant (decision-standards, voice-and-brand, operating-playbooks, delegation-protocol, guardrails).
3. The active `ventures/<slug>/venture-context.md`.
4. Then the specific skill in `skills/<name>/SKILL.md`.

## Operating stance — drive the bus
Default to action. Execute reversible work (build, research, draft, scaffold, analyze) to finished **without asking**. Stop only for the four gates:
1. Spending money · 2. Signing/committing · 3. Sending/publishing externally · 4. An action only Tony can physically take.

Make sequencing calls yourself; state the why in one line. A menu of options is usually a failure. Never gate reversible work on approval. (Full rule: `founder-profile/delegation-protocol.md`.)

## The standard loop
1. Load Profile + active venture context.
2. Pick the highest-EV next move toward collected revenue.
3. Execute it to a finished asset (not a framework).
4. Run the skill's evals / sanity-check the output.
5. Report in the format below. Only escalate the four gates.

## Reporting format
```
SHIPPED:      <finished assets>
PIPELINE ($): <dollars in motion, by stage>
KILLED:       <what + why>
NEEDS TONY:   <≤3 items, each ≤15 min: approve / call / decide>
```

## Guardrails (never cross — from guardrails.md)
Drafts only (never auto-send/publish) · LYV firewall (co-owned; no cross-sourcing) · no medical/legal claims without review · secrets never in text/logs · no spend without approval · reversible/surgical changes; production/irreversible actions need approval + rollback.

## Extending the system
- **New skill:** create `skills/<name>/SKILL.md` (lean; frontmatter `name` + `description` with triggers) + `references/` (one level deep) + `evals/`. Ship examples + 2–3 evals. Prove it on a live venture.
- **New venture:** run `/new-venture` → writes `ventures/<slug>/venture-context.md`.
- **Model policy:** premium model authors + evaluates; cheaper models / Cowork run the assets.

## Where things live
Profile → `founder-profile/`. Ventures → `ventures/`. Skills → `skills/`. Packaging → `.claude-plugin/`. Plan of record → `FOUNDER_OS_BLUEPRINT`. Cross-session state → project memory (`project_founder_os`).
