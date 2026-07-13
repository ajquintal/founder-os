# 72-Hour Launch Runbook — idea → launched, payment-ready product

The hour-by-hour play that chains the Founder OS into one pipeline: a raw idea in, and 72 hours later a validated concept, a world-class-engineered product live on the internet and wired to take money, a converting funnel, and the first outreach drafted. An operator (or Cowork on cheaper models) follows this; the premium model authored and evaluates it.

> Load order never changes: every skill reads `founder-profile/PROFILE.md`, then the active `ventures/<slug>/venture-context.md`, then runs. Drive the bus — execute reversible work to finished; stop only for the gates listed at the bottom.

## What 72 hours honestly delivers — and what it does not

**It delivers:**
- A **validated concept** — stress-tested, sized, and passed through the `/go-no-go` commit gate (or honestly killed).
- A **launched, payment-ready product** — realized by the cheapest path that ships (`/venture-bootstrap`'s buy-vs-build-vs-none decision): the default is off-the-shelf/no-code (a configured storefront / booking / POS, payment-wired and smoke-tested); on the custom-software branch it's a world-class-engineered app cloned from `starters/saas`, sliced from a real spec, tested, CI-green, deployed to a live URL, with Stripe wired and smoke-tested in test mode.
- A **live funnel** — positioning, conversion copy, and a landing page pointing at the product.
- **Initial content + outreach, drafted** — ready to send the moment you approve.

**It does NOT:**
- **Manufacture $1M in cash.** 72 hours builds the *machine*, not the money. Revenue is earned after, by selling — which is the whole point of "sell before build." A live funnel is not paying customers.
- **Compress legal entity formation.** State filings, EIN, and business banking run on external clocks measured in days-to-weeks, not hours.
- **Compress regulated-category compliance.** LegitScript-grade review, licensure, and medical/legal claims sign-off are hard dependencies, not formalities — they gate a *public, money-taking* launch and cannot be sprinted.
- **Manufacture genuine market demand.** The funnel is live; whether the market wants it is still real-world work. The OS de-risks this by validating cheaply up front and drafting outreach — it does not fake traction.

**Honest bottom line:** in 72 hours the OS takes an idea to a validated concept and a launched, engineered, payment-ready product with a live funnel and drafted outreach. It does not conjure revenue, compress entity formation or regulated-category compliance, or invent demand — those run on external clocks and on selling, which begins where this runbook ends. For an unregulated, digital venture the product can be soft-launched and taking test-mode transactions inside the window; real-money go-live may lag on Stripe activation and (if applicable) compliance.

## The timeline

On the custom-software branch, build is the long pole (up to ~42 of the 72 hours); the off-the-shelf/no-code path is far shorter — you configure, you don't code. Either way, everything before build is cheap-to-kill validation, and everything after is fast because the product already exists and is verified.

### Hours 0–6 · CONCEPT — decide what to build
- **Skills, in order:** `/new-venture` → `/stress-test` → `/market-scan` → `/offer-architect` → `/opportunity-size` → `/naming-brand` → `/go-no-go`.
- **Produced:** a venture context; a GO/REFINE/KILL verdict with the make-or-break assumptions; a sized, sourced market brief + the wedge; a priced offer stack with **closed unit economics**; a 12-month revenue range; a name + brand direction (domain/TM risk *flagged*).
- **Gate to BUILD → `/go-no-go`:** GO commits the build. CONDITIONAL GO funds the *test*, not the full build — build only if the named conditions hold. **NO-GO stops here — and that's a win: you spent 6 hours, not 66.** (Human-approval gate: this commits money + founder-time.)

### Hours 6–48 · BUILD — make the product
- **Skills, in order:** `/venture-bootstrap` (runs the **buy-vs-build-vs-none decision first**) → `/product-spec` → `/ship`.
- **Default (off-the-shelf / no-code) — the short path:** most ventures don't need a codebase. `/venture-bootstrap` selects and configures the off-the-shelf spine (storefront / booking / POS), `/product-spec` writes the configuration + manual-QA acceptance, and the product goes live payment-wired and smoke-tested — no `/ship`.
- **Custom-software branch (only when the venture genuinely needs it) — the long pole:** clone `starters/saas` for the technical foundation (stack, repo, `CLAUDE.md`, CI, security/RBAC backbone); `/product-spec` produces an implementation-ready spec (stories, testable acceptance criteria, data model + RLS, test plan); then `/ship` decomposes the spec into vertical slices, builds them (parallel build agents, each with tests), runs the dev subagents (`tester` to green, `code-reviewer` read-only for security/correctness, `debugger` on failures), gets CI green, deploys to a live URL, and wires Stripe test-mode checkout. This is the ~42-hour block.
- **Gate to LAUNCH → build reports done:** the product is live and payment-wired — off-the-shelf: configured, published, one real test-mode transaction passed; custom (`/ship`): live URL up, CI green, test-mode checkout smoke-tested. Done = **live + verified in prod**, not "written." (Human-approval gates inside this block: **deploy** to a live URL / publish the storefront; **payments go-live** is a separate gate, usually left pending here. Never launch broken — but never gold-plate past the smallest shippable slice either.)

### Hours 48–66 · LAUNCH — take it to market
- **Skills, in order:** `/positioning` → `/direct-response-copy` → `/landing-funnel` → `/content-engine` → `/launch-plan`.
- **Produced:** category + segment + the unique value and proof; conversion copy in Tony's voice (**drafts**); the landing page/funnel structure + tracking events, pointed at the live product; the content system (pillars, formats, cadence); a phased launch plan with a hard launch-readiness gate and a launch-day runbook.
- **Gate to OPERATE → launch-readiness gate (`/launch-plan`):** offer validated, assets finished, tech verified in prod, economics proven, support ready — all true, or no-go. (Human-approval gates: every **external send** and **cart-open**; any **spend** on the funnel; **compliance sign-off** before any public health/regulated claims.)

### Hours 66–72 · OPERATE — run the machine
- **Skills:** `/metrics-dashboard` (live) · `/lead-response` (armed) · first outreach **drafted**.
- **Produced:** the north-star + metric tree + a dashboard spec with action thresholds, live; inbound triage with drafted replies routed to the best-fit offer, armed and waiting; the first batch of outreach written and queued.
- **Handoff:** the machine now runs on the steady-state weekly rhythm — `/weekly-ops-review` (SHIPPED / PIPELINE $ / KILLED / NEEDS TONY). Selling starts here. (Human-approval gate: **any external send** — outreach is drafted, never auto-fired.)

## Human-approval gates (the whole list)

Everything reversible, the OS just does. It stops for exactly these — draft, request, then fire:

1. **Go/no-go commit** — committing money + founder-time + the build to the venture (`/go-no-go`, end of CONCEPT).
2. **Spend** — any dollar: domain, hosting, tools, ads. $0 on unvalidated ideas; no spend without sign-off.
3. **Deploy** — pushing to a live URL (creates a public app + spend). `/ship` step 7.
4. **Payments go-live** — swapping Stripe test keys for live keys (accepting real money). A *separate* gate from deploy. `/ship` step 9.
5. **Legal entity** — formation, banking, operating agreements (`/setup-checklists`). Runs on an external clock; start it early if a money-taking launch depends on it.
6. **Compliance sign-off** — regulated-category review (LegitScript-grade / licensure / medical-legal claims) before any public, money-taking launch. A hard dependency, not a formality.
7. **Any external send** — email, DM, post, ad, cart-open. Drafts only until Tony approves. Absolute.

## Model & cost

The **premium model authors and evaluates** this pipeline and every skill in it; **cheaper models / Cowork execute** — running the skills, building the vertical slices via build agents, running tests, and drafting. That is what makes 72 hours realistic without burning premium-model budget on grunt work, and it is the standing model policy (`founder-profile/delegation-protocol.md`): premium attention on authoring + approvals + selling, everything else delegated.
