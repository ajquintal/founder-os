# Skills catalog

33 skills across the venture lifecycle + 1 intake. Every skill loads `../founder-profile/PROFILE.md` then the active `../ventures/<slug>/venture-context.md`, then runs. Say `/founder` for the interactive menu, or invoke a skill by name / natural language.

## Intake
| Skill | What it does |
|---|---|
| `new-venture` | Spin up a complete venture context in minutes so the whole OS specializes to a new business (any industry). |

## Concept — decide what to build
| Skill | What it does |
|---|---|
| `stress-test` | GO / REFINE / KILL on any idea, with the make-or-break assumptions + cheapest test. |
| `market-scan` | Sized, sourced market + competitor brief; names the wedge. |
| `offer-architect` | Designs the offer stack (value ladder) and runs the economics before anything is built. |
| `opportunity-size` | Tops-down + bottoms-up sizing → realistic 12-month revenue range + the load-bearing assumption. |
| `naming-brand` | Names + brand direction, screened on a weighted rubric; flags (never clears) domain/TM risk. |
| `go-no-go` | The commit gate — composes stress-test + market-scan + offer-architect + opportunity-size into GO / CONDITIONAL GO / NO-GO. |

## Launch — take it to market
| Skill | What it does |
|---|---|
| `gtm-marketing` | The GTM orchestrator — composes the Launch skills into one plan (motion + channel/budget/CAC + lifecycle + partnerships + PR + calendar + marketing KPI tree). Fills the marketing blind spot with defaults to approve. |
| `positioning` | Category, segment, unique value, proof, and the messaging pillars (Dunford). |
| `brand-design` | Positioning → a full brand + design system: attributes, palette/type/**design tokens**, component spec (shadcn/ui), and the asset-production workflow (Canva MCP · `canvas-design` · `dataviz`) — tokens hand off straight to `starters/saas`. WCAG AA baked in; original, drafts only. |
| `direct-response-copy` | Conversion copy in Tony's voice for one asset (drafts only). |
| `landing-funnel` | Page/section structure + the value-ladder flow + tracking events. |
| `content-engine` | The content system: pillars, formats, repurposing pipeline, cadence. |
| `social-media` | The platform-specific social layer: pick 1–2 platforms by ICP, per-platform strategy, paste-ready template pack + hooks, 2-week starter calendar, social KPIs. |
| `paid-ads` | Angles + creative briefs + a budget-test plan with kill thresholds ($0 until proven). |
| `seo-geo` | SEO + generative-engine-optimization: entity map, content plan, technical checklist. |
| `launch-plan` | Pre / launch / post sequence with owners, dates, and the go/no-go gate. |

## Operate — run the machine
| Skill | What it does |
|---|---|
| `metrics-dashboard` | North-star + metric tree + dashboard spec with action thresholds. |
| `lead-response` | Inbound triage + drafted replies (drafts only), routed to best-fit offer. |
| `sales-crm` | The whole commercial motion: CRM (Airtable) + pipeline + weighted forecast, lead scoring/routing, the sales process end-to-end, outbound/inbound, proposals/quotes/contracts, deal desk, sales metrics; composes lead-response + direct-response-copy + offer-architect (drafts only). |
| `support-success` | Post-sale machine: support stack + triage/SLA tiers + KB + onboarding + CS health/renewal/churn-save; drafts only, feeds product + metrics. |
| `weekly-ops-review` | The `SHIPPED / PIPELINE $ / KILLED / NEEDS TONY` operating report. |
| `sop-writer` | Turns a repeatable task into an SOP a cheaper model / teammate runs unattended. |
| `org-roles` | The operations/org/roles backbone: org design by stage (lean, not bloated) + RACI + a least-privilege roles/permissions matrix across the tool stack + hiring kit (scorecard/JD/interview loop) + on/offboarding (with access provisioning/deprovisioning) + SOP system + vendor mgmt + operating rhythm; composes `sop-writer` + `weekly-ops-review`, ties to the engineering-backbone access governance. Hiring = drafts only; least-privilege everywhere. |
| `meeting-synth` | Notes/transcript → decisions, action items (owner + due), open questions, summary. |
| `content-cadence` | The steady-state content rhythm: calendar + batch workflow + recycle loop. |

## Finance — run the money
| Skill | What it does |
|---|---|
| `finance-ops` | The whole finance & accounting function: model + unit economics (from `offer-architect`), chart of accounts, accounting/billing/payroll/card stack, Stripe billing/AR, AP/expenses, payroll + taxes, cash/runway + 13-week cash flow, FP&A, and board/investor reporting. Runs the monthly close; flags CPA/controller review; no spend without approval. |

## Data & analytics — run on data, not vibes
| Skill | What it does |
|---|---|
| `analytics-stack` | The measurement backbone: the stack (GA4 / PostHog / warehouse / Metabase + connect status) → event-tracking plan → an instrumented KPI tree (composes `metrics-dashboard`) → dashboards + cadence (feeds `weekly-ops-review`) → an experiment/A-B framework, with consent/PII governance cross-referencing the engineering backbone. Spec/drafts only — nothing fires or reconfigures without approval. |

## Legal — protect the machine
| Skill | What it does |
|---|---|
| `legal-pack` | The legal, entity & compliance foundation: entity choice (LLC vs C-corp vs S-corp) by goal + operating agreement/bylaws + cap-table basics; the core contract set as review-flagged draft templates (ToS · privacy · DPA · NDA · MSA · SOW · contractor · employment · referral — plus model-specific goods/retail: lease · supply · sale-of-goods · IP-license when the venture's model requires); IP assignment + the trademark path (flag, never clear); and the compliance regime by industry (GDPR/CCPA · HIPAA · LegitScript · licensure) mapped to concrete requirements — plus the templatable-vs-lawyer split. Composes `setup-checklists` + the `legal:*` pack; cross-refs `docs/engineering-backbone.md §9`. **Not legal advice — flags "attorney review required" at every judgment point; drafts only, never files/signs.** |

## Build — make the product
| Skill | What it does |
|---|---|
| `venture-bootstrap` | Scaffolds a validated venture's technical foundation (blocks on unclosed economics). |
| `setup-checklists` | Entity / banking / payments / compliance / ops checklists (flags professional-review points). Composes with `legal-pack` for the substantive legal layer. |
| `product-spec` | Implementation-ready spec: stories, acceptance criteria, data model, test plan. |
| `ship` | Executable build pipeline — clones `starters/saas`, builds the spec's features, tests/reviews to green, deploys to a live URL, wires Stripe. Deploy + payments-go-live are human-gated. |
| `fable-brief` | **The capstone.** Consumes the whole venture (`product-spec` + `brand-design` tokens + the engineering/security backbone + the tool/MCP stack + every operational-setup output) and emits ONE self-contained, phased, PR-by-PR master build brief Fable executes — each PR with data model + RLS, endpoints (+ verify_jwt), Given/When/Then AC, tests, a security checklist, secrets (names only), dependencies, and human gates; plus the full workstream map, sequencing, and a coverage matrix that proves nothing is missed. |

## Dev subagents (`../agents/`)
`code-reviewer` (read-only review) · `tester` (writes + runs tests) · `debugger` (reproduce → fix → verify).
