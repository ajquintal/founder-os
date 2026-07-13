# Founder OS

Tony Quintal's AI-native founder operating system — reusable, industry-agnostic infrastructure to **concept, build, launch, and operate** ventures across any industry, with AI doing the heavy lifting.

This is **not** for one company. It is the system every venture — current and future — runs on.

**New here? Read `HOW_TO_USE.md`.** Operating an agent session? Read `docs/agent-runbook.md`.

## How it loads (the core mechanic)

```
Any skill / subagent / Cowork task
  → loads  founder-profile/PROFILE.md          (who Tony is, how he decides — always first)
  → loads  ventures/<active>/venture-context.md (the specific business it's working on)
  → then does its job
```

Switching ventures = pointing at a different venture context. One library, every business, no hard-coded industry.

## Structure

```
founder-os/
├── founder-profile/     # Layer 1 — the stable "who I am" layer (loaded first)
│   ├── PROFILE.md · decision-standards · voice-and-brand
│   ├── operating-playbooks · delegation-protocol · guardrails
├── ventures/            # Layer 2 — one context per business (via /new-venture)
│   └── executive-edge/venture-context.md      # seed venture (live revenue engine)
├── skills/              # Layer 3 — 34 capabilities across the lifecycle
│   ├── new-venture/                          # Intake — spin up any venture in minutes
│   ├── Concept:  stress-test · market-scan · offer-architect · opportunity-size · naming-brand · go-no-go
│   ├── Launch:   gtm-marketing · positioning · brand-design · direct-response-copy · landing-funnel · content-engine · social-media · paid-ads · seo-geo · launch-plan
│   ├── Operate:  metrics-dashboard · lead-response · sales-crm · support-success · weekly-ops-review · sop-writer · org-roles · meeting-synth · content-cadence
│   ├── Finance:  finance-ops                     # Finance & accounting function (model → close → runway)
│   ├── Data:     analytics-stack                  # Measurement backbone (stack → event taxonomy → instrumented KPI tree → dashboards → experiments → governance)
│   ├── Legal:    legal-pack                       # Entity + contracts + IP + compliance regime (review-flagged drafts; never files/signs)
│   └── Build:    venture-bootstrap · setup-checklists · product-spec · ship · fable-brief (capstone)
├── starters/            # world-class cloneable starters (saas: verified Vite+Supabase+Stripe+CI)
├── agents/              # dev subagents — code-reviewer · tester · debugger
├── commands/            # /founder entry command
├── .claude-plugin/      # Layer 4 — packaging (installable plugin + marketplace)
├── docs/                # agent-runbook.md · mcp-proprietary-layer.md (Layer 5 design)
├── 72H_LAUNCH_RUNBOOK.md · FOUNDER_OS_BLUEPRINT.md
├── HOW_TO_USE.md
└── README.md
```

Layer 5 (proprietary read/act MCP over Tony's systems) comes later, per the build blueprint (`FOUNDER_OS_BLUEPRINT.md`).

## Status

- **v1.0 (Jul 13, 2026) — the complete business-in-a-box.** All **15 domains** of `FOUNDER_OS_MASTER_ARCHITECTURE.md` built: strategy; product + the executable **BUILD layer** (verified `starters/saas` + `/ship` + `72H_LAUNCH_RUNBOOK.md`); the **engineering / security / RBAC backbone** (`docs/engineering-backbone.md`); the **tool + MCP stack** (`docs/tool-mcp-stack.md`); and every operating function — **finance-ops, sales-crm, gtm-marketing, social-media, brand-design, support-success, legal-pack, org-roles, analytics-stack** — plus the **`fable-brief`** capstone that emits a whole venture as one PR-by-PR spec Fable executes. **34 capabilities** (33 lifecycle skills + the `new-venture` intake) + 3 dev subagents. Blind spots (marketing/social/content/design) carried by the system. Installable plugin (L4); Layer-5 MCP designed.
- **Next:** run it end-to-end on a real venture (needs Tony's accounts/entity/compliance for a real-money launch); a full cross-module eval + integration pass; install in Claude Code (`/plugin marketplace add ~/Developer/founder-os`). Full plan: `FOUNDER_OS_BLUEPRINT.md`.

## Principles

- Every asset is industry-agnostic and reads the active venture context.
- **Drive the bus:** execute reversible work to finished; only stop for money, commitments, external sends, or Tony-only actions.
- Premium-model time is for authoring + evaluation; cheaper models / Cowork run the assets.
- Each skill ships lean: `SKILL.md` + references one level deep + examples + 2–3 evals; proven on a live venture.
