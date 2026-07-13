---
name: legal-pack
description: >-
  Stand up and govern a venture's entire legal, entity & compliance foundation — entity choice
  (LLC vs C-corp vs S-corp) by goal (fundraising, partners, taxes) with operating agreement / bylaws
  + cap-table basics; the core contract set as review-flagged draft templates (ToS, privacy policy,
  DPA, mutual + one-way NDA, MSA, SOW, contractor & employment agreements, mutual-referral — plus model-specific goods/retail (commercial lease · vendor/supply · sale-of-goods · IP-license) when the venture's model requires); IP
  assignment + the trademark path (flag, never clear); and the regulatory/compliance regime decided
  at concept by industry (GDPR/CCPA, HIPAA, LegitScript, licensure) mapped to concrete requirements —
  then the explicit split of what's templatable vs. what must go to a lawyer. Composes /setup-checklists
  (entity/compliance) + the legal:* skill pack (review-contract, compliance-check, triage-nda,
  legal-risk-assessment, signature-request, legal-response) and cross-references
  docs/engineering-backbone.md §9 for the compliance-by-design matrix. This is NOT legal advice — every
  output flags "attorney review required" at judgment points; templates are drafts to be reviewed, never
  filed or signed autonomously. Use when forming the entity, choosing entity type, drafting an operating
  agreement / bylaws, setting up the cap table, generating contract templates, assigning IP, planning the
  trademark path, or deciding the compliance regime for a venture. Triggers: "form the entity",
  "LLC vs C-corp", "S-corp election", "operating agreement", "bylaws", "cap table", "terms of service",
  "privacy policy", "DPA", "NDA", "MSA", "SOW", "contractor agreement", "employment agreement",
  "referral agreement", "IP assignment", "trademark", "GDPR", "CCPA", "HIPAA", "LegitScript", "licensure",
  "compliance regime", "legal setup", "which contracts do we need", "is this trademark clear".
---

# /legal-pack — Legal, Entity & Compliance Foundation

The legal backbone. Stands up the whole foundation a real company needs — the entity + governance, the contract set, IP ownership, the trademark path, and the compliance regime — then marks the exact points a licensed attorney must decide. It is to legal structure what `/finance-ops` is to money: it produces finished, review-ready work and **never files, signs, or clears anything itself.**

> **HARD GUARDRAIL — this is NOT legal advice.** Every judgment point carries an explicit **⚖ attorney review required** flag naming the right specialist. Every contract is a **draft to be reviewed**, never filed or signed autonomously — signature and filing are irreversible, human-gated actions. The OS drafts and frames the decision; the attorney decides and approves; the human executes.

## Load first
1. `founder-profile/PROFILE.md` — governing question, voice; `founder-profile/guardrails.md` (claims/compliance = hard dependency, no legal claims without review, irreversible actions need approval + rollback, secrets never in text, LYV firewall); `founder-profile/voice-and-brand.md` (banned words).
2. Active `ventures/<slug>/venture-context.md` — **jurisdiction, ownership (solo / partners), industry, regulatory-surface, stage, and fundraising intent**. Never assume US/Delaware; never hard-code an industry.
3. `docs/engineering-backbone.md §9 (Compliance-by-design)` — the regime→controls matrix. **Consume it, and add any industry-specific regimes it lacks for this venture** — §9 is a starting set, not exhaustive (a physical-goods, services, or environmental venture may need regimes §9 doesn't list: e.g. product-liability/safety, labeling, licensure, environmental). Don't re-derive controls §9 already specifies.
4. Hand-off peers: `/setup-checklists` (the operational entity/compliance checklist), `/finance-ops` (entity-tax election, QSBS/83(b), sales-tax nexus — the finance side of the entity), `/naming-brand` (which already raised the trademark-collision flag).

## Method (full detail, contract library, compliance matrix & worked example in `references/method.md`)
Cover all five areas; for each, name the tool + the `legal:*` skill, and flag the attorney judgment point.

1. **Entity + governance + cap table.** Recommend the entity **by goal** — **C-corp (Delaware)** when raising institutional capital / issuing options / QSBS matters; **LLC** when solely-owned, bootstrapped, or cash-flow-first; **S-corp** as a tax *election* (on an LLC or corp) for a profitable US owner-operator optimizing self-employment tax. Multiple owners → operating agreement / bylaws + stockholders' agreement + founder **vesting** + **83(b)** + IP assignment. Cap-table basics: authorized/issued/outstanding, option pool, fully-diluted, SAFEs/notes conversion, 409A. **Tool:** Stripe Atlas / Clerky / Firstbase (DE C-corp) or state SoS / LegalZoom (LLC); Carta / Pulley for the cap table (REGISTRY — no first-party MCP; flag to connect). **⚖ attorney + CPA:** entity type, tax election, governance terms, cap-table structure, vesting/83(b)/QSBS. Hand the tax mechanics to `/finance-ops`.
2. **The core contract set (review-flagged DRAFTS).** Produce the set this venture needs — **ToS, privacy policy, DPA, mutual + one-way NDA, MSA, SOW, contractor agreement, employment agreement / offer letter, mutual-referral, + model-specific goods/retail when the venture's model requires it (commercial lease · vendor/supply · sale-of-goods/returns · IP-license)** — each as a draft, each tagged templatable-vs-bespoke and with its review flag. **Tool/skills:** draft from a reviewed baseline → `legal:review-contract` (analyze/redline) → store in **Google Drive (MCP LIVE)** → route to e-sign via `legal:signature-request` to DocuSign / SignNow / DocuSeal (REGISTRY) — **signature human-gated**. `legal:triage-nda` triages inbound NDAs; `legal:legal-risk-assessment` scores exposure; `legal:legal-response` drafts correspondence (draft only). **⚖ attorney:** liability caps, indemnities, IP assignment, worker classification, non-competes, and any regulated terms before use or signature.
3. **IP assignment + trademark path (flag, don't clear).** IP assignment is the single most-missed founder item: **all** venture IP must be owned by the entity — founders sign a technology/IP assignment at formation, employees sign a **PIIA/CIIA**, and **every contractor agreement carries a present assignment + work-for-hire** (US "work made for hire" does *not* auto-cover most commissioned work). Trademark: knockout search → **clearance by TM counsel** → USPTO application (right classes) → monitor/enforce; **flag collision risk and map the path — never declare a mark "clear."** **Tool:** USPTO (direct); TM counsel; `/naming-brand` output. **⚖ IP/TM counsel:** clearance opinion, filing strategy, assignment enforceability.
4. **Compliance regime — decided AT CONCEPT, by industry.** Pull the applicable regime(s) from `engineering-backbone §9` and map to concrete requirements: **GDPR/CCPA-CPRA** (nearly every consumer venture — privacy policy, consent/cookie, DSAR/deletion, minimization/retention, **DPAs with every subprocessor**, breach plan); **HIPAA** (if PHI — **BAA with every subprocessor touching PHI**, min-necessary, RBAC, audit logs, encryption; note standard Vercel/PostHog are *not* HIPAA-eligible); **LegitScript** (health/pharma/supplements/telehealth ads or payment — **certification before ads or payment** in category, accurate claims, verified licensure, disclaimers); **licensure** (sector-specific — e.g., food-service/liquor/health-code for hospitality); **SOC 2 readiness** (B2B/enterprise). **Tool/skill:** `legal:compliance-check` (regime→controls audit) + `engineering-backbone §9`. **⚖ regulatory counsel:** regime determination and any regulated-category launch is a **hard dependency gating launch + spend** (guardrail), not a formality.
5. **The templatable-vs-lawyer split.** State it explicitly. **Templatable** (OS drafts a review-ready baseline; lighter attorney pass): standard ToS, privacy policy matched to actual practice, one-way/mutual NDA, SOW under a reviewed MSA, standard contractor agreement, unregulated mutual-referral, cookie/consent + DSAR workflow docs. **Must go to a lawyer** (bespoke, high-stakes; the OS drafts only to *frame* the decision): entity + tax election, operating agreement / bylaws / stockholders' agreement, cap table + vesting + 83(b)/QSBS, MSA liability/indemnity, employment + non-competes (jurisdiction), IP-assignment enforceability, customer-facing DPA + SCCs, anything regulated (HIPAA BAAs, LegitScript, licensure, anti-kickback), and all financing/M&A/dispute work.

## Output contract
Deliver a venture's **legal setup pack**, filled (not a blank template), with these four components:
1. **Entity recommendation + rationale** — the recommended entity (+ tax election) for *this* venture's goals (fundraising / partners / taxes), the trade-offs, and the governance docs + cap-table basics it implies. **⚖ attorney + CPA** flagged; state the fundraising-intent fork explicitly (it changes the answer).
2. **Contract-template checklist** — the contract set this venture needs, each line: contract · templatable-vs-bespoke · the `legal:*` skill that operates it · **⚖ review flag**. Every item a draft.
3. **Compliance matrix for its regime** — the applicable regime(s) → concrete requirements → gate, pulled from `engineering-backbone §9` and mapped to this venture's industry (GDPR/CCPA baseline; HIPAA/LegitScript/licensure by industry; SOC 2 if B2B).
4. **The attorney-review-required gate list** — every judgment point requiring counsel before reliance/filing/signature, consolidated in one place (with the specialist named), so nothing is missed.
State the **not-legal-advice** disclaimer at the top; state assumptions inline; flag jurisdiction anywhere rules vary.

## Rules
- **Not legal advice — ever.** Every judgment point → **⚖ attorney review** with the specialist named (corporate / privacy / IP-TM / employment / regulatory). The disclaimer heads every output. No output may read as a definitive legal ruling.
- **Templates are drafts; never filed or signed autonomously.** Filing an entity and executing a contract are irreversible, human-gated actions (guardrails). The OS drafts and routes; Tony (or the authorized signer) executes after counsel review.
- **Flag, never clear.** Trademark, entity, and compliance outputs are risk signals + mapped paths — a mark is never "available/clear," an entity is never "the right one," here. Formal search / opinion precedes commit.
- **Compliance is decided at concept** (`/go-no-go`), consumed from `engineering-backbone §9`. A regulated-category launch (health/PHI, LegitScript, licensure) is a **hard dependency gating launch and spend**, flagged to Tony — not a formality.
- **Jurisdiction-flag everything that varies** — entity type, employment / non-compete enforceability, privacy law, licensure. Never default to US/Delaware.
- **No unsubstantiated or unreviewed regulated claims** (health / financial / legal / environmental); honor the venture's own claims & regulatory constraints from its `venture-context`. **Secrets, EINs, SSNs, and credentials never appear in text, logs, or committed files** — reference where they live, never echo a value. **LYV firewall** — keep venture entities, data, and relationships siloed.
- Clinical, precise voice; banned words out (journey, holistic, guru, revolutionary, game-changer, hack). Industry-agnostic — read the venture context.

## Examples & evals
- Full method, the entity decision matrix, the contract library, the per-industry compliance matrix, the templatable-vs-lawyer split, and a worked example (Executive Edge — regulated health-tech) in `references/method.md`; deliverable in `ventures/executive-edge/outputs/legal-setup.md`.
- `evals/evals.md` — 3 cases (regulated health-tech full setup; non-regulated industry-agnostic; the sign/file/clear/secret guardrail catch).
