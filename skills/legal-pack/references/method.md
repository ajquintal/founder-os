# /legal-pack — Full method, contract library, compliance matrix & worked example

One level deep; does not fan out further. Lenses: corporate structure follows *goal* (fundraising / partners / taxes), contracts are commodity-vs-bespoke on a spectrum, IP must be owned by the entity or the cap table breaks in diligence, and the compliance regime is a **concept-stage decision** that constrains vendors and GTM. This skill **maps** the legal work and **frames** every decision; a licensed attorney **decides, and the human signs or files.**

## Principle

Legal structure is load-bearing, not paperwork. Three truths held together:
- **The entity is a container for risk and ownership.** Choose it for where the venture is going (raise? partners? profit distribution?), not for what's cheapest to file today — the wrong container is expensive to unwind.
- **Contracts allocate risk before there's a dispute.** A signed template you never read is a liability; a reviewed contract is insurance. The OS drafts the review-ready version and marks what a lawyer must own.
- **Compliance is a dependency, not a formality.** In a regulated category, "we'll sort it after launch" is how you get shut down or fined. The regime is decided at `/go-no-go` because it dictates the vendor stack, the data model, and whether you can advertise at all.

And the hard line, everywhere: **not legal advice.** Every judgment point is flagged for the right attorney; nothing is filed, signed, or declared "clear" here.

## How to read a flag
- `⚖ <specialist>` — a judgment call a licensed attorney must decide before it's relied on, filed, or signed. Specialists: **corporate/formation**, **privacy**, **IP/TM**, **employment**, **regulatory** (health / financial / sector).
- `+CPA` — a tax dimension a CPA co-owns with the attorney (entity election, QSBS, 83(b), sales-tax nexus → routed to `/finance-ops`).
- `[jurisdiction]` — rules vary by country/state; resolve against the venture's jurisdiction. Never default to US/Delaware.
- **templatable** — the OS can draft a review-ready baseline; a lighter attorney pass suffices. **bespoke** — the OS drafts only to *frame* the decision; the attorney owns the substance.

---

## Area 1 — Entity choice + governance + cap table

### The decision matrix (by goal — the choice follows intent)

| Entity | Tax | Best when | Enables | Costs / limits | Verdict driver |
|---|---|---|---|---|---|
| **LLC** | Pass-through (default); can elect S/C | Solely-owned, bootstrapped, services / cash-flow, no institutional raise planned | Simple, cheap, flexible; profits flow to owner; few formalities | VCs won't buy LLC units (need preferred stock); self-employment tax on active income; **no QSBS**; converting to C-corp later is taxable/complex | *Not raising VC, want simplicity + pass-through* |
| **C-corp (Delaware)** | Entity-level (21% fed) + tax on dividends ("double tax", usually moot pre-profit while reinvesting) | Raising priced rounds / SAFEs, issuing stock options, institutional investors, planning a large exit | Preferred stock for investors; option pool; **QSBS** (potential capital-gains exclusion, C-corp stock held 5+ yrs); investor-familiar DE case law | Double taxation once profitable + distributing; more formalities (board, minutes, filings) | *Raising institutional capital or issuing equity → default* |
| **S-corp** (an **election**, not an entity — an LLC or corp elects it) | Pass-through + potential **self-employment-tax savings** (reasonable salary + distributions) | Profitable US owner-operator taking meaningful distributions | Keeps pass-through; can reduce SE/payroll tax on the distribution portion | ≤100 shareholders, **US persons only, one class of stock** → **incompatible with VC preferred**; payroll + reasonable-comp discipline required | *Profitable owner-operator optimizing SE tax, not raising* |

**Decision logic (apply to the venture's goals):**
- **Raising institutional capital, issuing options, or eyeing QSBS?** → **Delaware C-corp.** This is the one fork that overrides everything else.
- **Multiple founders / partners?** → whichever entity, but you **must** add an operating agreement (LLC) or bylaws + stockholders' agreement (corp), founder **vesting** (typically 4-year / 1-year cliff), IP assignment, and **83(b)** elections — the co-ownership terms matter more than the entity label.
- **Profitable, solely-owned, not raising?** → **LLC**, and evaluate an **S-corp election** with the CPA once profit makes the SE-tax saving exceed the added payroll/compliance cost.
- **Solo, bootstrapped, cash-flow-first, pre-profit?** → **LLC**, revisit as it scales.
- `[jurisdiction]`: **Delaware** is the default for C-corps (case law + investor familiarity); a home-state **LLC** is usually fine for an LLC. **Foreign-qualify** wherever you actually operate/employ. Outside the US the analogues differ (Ltd/GmbH/Pty) — resolve against jurisdiction. **⚖ corporate +CPA.**

### Governance documents (by entity)
- **LLC → Operating Agreement:** members, ownership %, capital contributions, management (member- vs manager-managed), profit/loss allocation + distributions, voting, transfer restrictions + **buy-sell / right of first refusal**, dissolution. Single-member still wants one (liability-shield hygiene). **bespoke · ⚖ corporate.**
- **C-corp → Certificate of Incorporation + Bylaws + organizational board consents + Stockholders' Agreement:** authorized shares + classes, board composition, officer roles, meeting/quorum rules, transfer restrictions, drag-along/tag-along, ROFR. **bespoke · ⚖ corporate.**
- **Both (multi-owner):** founder **vesting** schedule, **IP/technology assignment to the entity**, **83(b)** filing (a **30-day IRS clock** from grant — miss it and the founder is taxed on vesting), confidentiality/PIIA. **bespoke · ⚖ corporate +CPA.**

### Cap-table basics (what to get right early)
Authorized vs **issued** vs outstanding shares; founder split; an **option pool** (commonly 10–20% for early hires); **fully-diluted** ownership (the number that matters); **SAFEs / convertible notes** and how they convert (cap, discount); **vesting** on every equity grant; **409A** valuation before pricing options; **QSBS** eligibility (C-corp only, 5-yr hold). **Tool:** Carta / Pulley (REGISTRY — no first-party MCP here; flag to connect); a spreadsheet is fine pre-seed. The cap table meets the P&L at stock-comp expense and fully-diluted ownership → hand those to `/finance-ops`. **⚖ corporate +CPA:** structure, vesting, 83(b), 409A, QSBS.

---

## Area 2 — The core contract library (review-flagged DRAFTS)

Every row is a **draft to be reviewed**, never sent/signed by the OS. "Templatable" = the OS drafts a review-ready baseline + a lighter attorney pass; "bespoke" = the OS drafts to frame, the attorney owns the substance.

**This is a spanning menu, not a fixed list — select by business model, read from the venture context.** The first block below is the near-universal set (any venture with users, data, people, or partners). The second block is the model-specific set: a **software/services** venture leans on MSA/SOW/ToS; a **goods/retail/e-commerce** venture needs supply + sale-of-goods terms; a **brick-and-mortar/hospitality** venture needs a commercial lease and vendor agreements; a **licensing/franchise** model (e.g. EE's operator license) needs an IP-license agreement. Pull only the rows the model requires; mark the rest N/A. Nothing here is SaaS-only.

*Near-universal set:*

| Contract | What it does | When you need it | Template? | Operated by | Review |
|---|---|---|---|---|---|
| **Terms of Service** | The contract with users — acceptable use, disclaimers, liability limitation, warranty disclaimer, governing law, arbitration/class-waiver, termination | Any product/site with users | **templatable** baseline | `legal:review-contract` | ⚖ corporate (liability caps, arbitration, regulated features) |
| **Privacy Policy** | Discloses what personal data you collect/use/share; **must match actual practice** + the compliance regime | Before collecting any personal data | **templatable** structure | `legal:compliance-check` + `legal:review-contract` | ⚖ **privacy** (a policy that misstates practice is a liability) `[GDPR/CCPA]` |
| **DPA** (Data Processing Agreement) | GDPR Art. 28 controller↔processor terms; **SCCs** for cross-border transfer | With every subprocessor (you = controller) **and** offered to B2B customers (you = processor) | **templatable** (vendors supply theirs); **bespoke** customer-facing | `legal:review-contract` | ⚖ **privacy** (customer-facing terms + SCCs) `[jurisdiction]` |
| **Mutual NDA** | Both sides protect disclosed confidential info | Partnership / M&A / vendor talks where both disclose | **templatable** | `legal:triage-nda` | ⚖ light (term, definition scope, carve-outs) |
| **One-way NDA** | One side discloses (you→contractor, or inbound) | Advisor/contractor exposure; inbound from a counterparty | **templatable** | `legal:triage-nda` | ⚖ light |
| **MSA** (Master Services Agreement) | Umbrella B2B terms — payment, **IP ownership**, warranties, **liability/indemnity**, confidentiality, term/termination — that SOWs hang off | Recurring B2B services / enterprise deals | **bespoke**-leaning | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ **corporate** (liability caps, indemnity, IP) |
| **SOW** (Statement of Work) | The specific deliverables, timeline, and fees under an MSA | Per-engagement, under a signed MSA | **templatable** structure, bespoke content | `legal:review-contract` | ⚖ light (if MSA already reviewed) |
| **Contractor Agreement** | Scope, fees, **present IP assignment + work-for-hire**, confidentiality, independent-contractor status | Any contractor who touches product/IP | **templatable** | `legal:review-contract` | ⚖ **employment** (IP assignment + **worker classification** — misclassification is a major liability) `[jurisdiction]` |
| **Employment Agreement / Offer Letter** | At-will (US) comp, equity, **PIIA/CIIA IP assignment**, confidentiality, restrictive covenants | Every W-2 hire | **bespoke** by jurisdiction | `legal:review-contract` | ⚖ **employment** (**non-competes vary wildly — CA bans most**; wage/classification law) `[jurisdiction]` |
| **Mutual-Referral Agreement** | Two businesses refer each other; referral fees + terms | Channel/referral partnerships | **templatable** (unregulated) | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ corporate; **+ regulatory if health — anti-kickback / Stark** |

*Model-specific set (select by business model — most ventures need only one or two of these):*

| Contract | What it does | When you need it | Template? | Operated by | Review |
|---|---|---|---|---|---|
| **Commercial Lease / License-to-Occupy** | Premises terms — rent, term, CAM, use clause, build-out/TI, assignment, personal guaranty, exit | Any physical location: restaurant/bar, retail, clinic, gym, salon, office, warehouse | **bespoke** (landlord paper — negotiate, don't accept) | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ **corporate/real-estate** (personal guaranty, use/exclusivity, exit — the largest fixed liability a physical venture signs) `[jurisdiction]` |
| **Vendor / Supply / Purchase Agreement** | Terms for buying goods/inventory/ingredients/materials — pricing, delivery, quality/spec, returns, payment terms | Goods-based ventures: F&B, retail, e-commerce, manufacturing | **templatable** structure, bespoke pricing | `legal:review-contract` | ⚖ corporate (indemnity, warranty, termination); food/product → **liability + recall** terms |
| **Sale-of-Goods Terms + Returns/Warranty** | Customer terms for selling physical products — sale, risk-of-loss, warranty (or disclaimer), returns/refunds, **UCC Art. 2** | E-commerce / product / retail (replaces ToS as the primary customer contract) | **templatable** baseline | `legal:review-contract` | ⚖ **consumer-protection** (warranty, refund law, auto-renew statutes) `[jurisdiction]` |
| **IP / Brand License Agreement** | Licenses your brand/IP/system to an operator or franchisee — scope, territory, quality control, fees/royalties, term, termination | Licensing or channel models — **e.g. EE's "Powered by Executive's Edge" operator license** | **bespoke**-leaning | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ **IP/corporate**; **+ franchise law — a license with enough control can be a *de facto* franchise** (FTC Rule + state FDD registration), a major trap `[jurisdiction]` |

**Workflow for every contract:** draft from a reviewed baseline → `legal:review-contract` analyzes/redlines → store in **Google Drive (MCP LIVE)** → `legal:signature-request` routes to e-sign (**DocuSign / SignNow / DocuSeal** — REGISTRY) → **the human signs.** Inbound NDAs go through `legal:triage-nda` (accept / redline / escalate); risky terms go through `legal:legal-risk-assessment`; counterparty correspondence is drafted by `legal:legal-response` (**draft only** — nothing sends without approval).

> The `legal:*` pack also carries `legal:brief`, `legal:meeting-briefing`, and `legal:vendor-check` — use `legal:vendor-check` when vetting a subprocessor before signing its DPA/BAA, and `legal:brief` to summarize a counterparty paper for Tony before a call.

---

## Area 3 — IP assignment + trademark path (flag, don't clear)

### IP assignment — the single most-missed founder item
If venture IP sits with individuals instead of the entity, the cap table and any fundraise **break in diligence.** Three mechanisms, all required where they apply:
1. **Founders** sign a **Technology / IP Assignment Agreement** to the entity at formation (assign all pre-formation work product too).
2. **Every employee** signs a **PIIA / CIIA** (Proprietary Information & Inventions Assignment) — IP created in employment vests in the company.
3. **Every contractor agreement** carries a **present assignment + work-for-hire** clause. Critical: US "work made for hire" **does not automatically cover most commissioned work** — without an explicit written assignment, the contractor may own what they built. This is the most common silent defect.
Plus: open-source license hygiene (know your dependencies' licenses); **trade-secret** protection via NDAs + access control (see `engineering-backbone §10`). **⚖ IP counsel:** assignment scope + enforceability.

### Trademark path — FLAG, never clear (mirrors `/naming-brand`)
1. **Knockout search** — USPTO TESS + common-law + domain/social handles (surfaces obvious collisions).
2. **Clearance** — a full search + **opinion by TM counsel** in the relevant classes. *The OS never issues this.*
3. **File** — USPTO **intent-to-use (1(b))** or **use-based (1(a))** application; the **class(es)** define the scope of protection. International via the **Madrid Protocol**.
4. **Monitor + enforce** — watch service; respond to infringement.
The OS **flags collision risk and maps this path**; it **never declares a mark "clear" or "available"** (guardrail: no legal claims without review). `/naming-brand` already raised the flag at Concept; `legal-pack` maps the filing path. **⚖ IP/TM counsel:** clearance opinion, filing strategy, classes.
- **Patents** (rare for most ventures): flag if there's a genuine novel invention; provisional buys a 12-month priority window. **⚖ patent counsel.**

---

## Area 4 — Compliance regime (decided AT CONCEPT, by industry)

**Consume `engineering-backbone §9`, and add any industry-specific regimes it lacks for this venture** — §9 is a starting set, not exhaustive (a physical-goods, services, or environmental venture may need regimes §9 doesn't list); don't re-derive controls §9 already specifies. Decide the regime at `/go-no-go`, because it constrains the vendor stack, the data model, and GTM. A regulated-category launch is a **hard dependency gating launch + spend** (guardrail).

| Regime | Applies when | Concrete requirements (→ engineering-backbone §) | Gate |
|---|---|---|---|
| **GDPR / CCPA-CPRA** | You process EU/UK (GDPR) or CA/US-state (CCPA) personal data — **nearly every consumer venture** | Privacy policy; consent + cookie banner; **DSAR / deletion** workflow (§5); PII minimization + retention (§5); **signed DPAs with every subprocessor**; consent-gated analytics (§7); encryption in transit/rest (§5); breach-notification plan; (GDPR) lawful basis, and an EU representative/DPO if thresholds met | Before collecting any personal data |
| **HIPAA** | You create/receive/store/transmit **PHI** (identifiable health info) — telehealth, identity-linked clinical/lab data | **BAA with every subprocessor that touches PHI**; minimum-necessary (§5); access control + RBAC (§2); **audit logs** (§7); encryption (§5); **no PHI in logs/analytics**; breach notification; workforce training. **Note: standard Vercel + PostHog Cloud are NOT HIPAA-eligible** — exclude PHI or use eligible/self-hosted configs | Before any PHI — **constrains the vendor stack**, so decide at concept |
| **LegitScript** | You advertise or take payment for health / pharma / addiction-treatment / supplements / telehealth (required by Google/Meta ads + many processors) | **LegitScript certification before running ads or taking payment** in category; accurate claims only (no medical claims without review); verified licensure/credentials; clear disclaimers; compliant checkout | Before paid GTM **and** before real-money launch in the category |
| **Licensure** (sector) | A regulated activity — food-service/**liquor**/health-code (hospitality), money transmission (fintech), professional licensure, etc. | Map to the specific license(s), permits, registrations, and inspections for the industry + jurisdiction; bonding/insurance where required | Before operating the regulated activity `[jurisdiction + industry]` |
| **SOC 2 (readiness)** | You sell to businesses/enterprise that will ask for it | The backbone maps to the Trust Services Criteria — access control/RBAC (§2), change management (§8), encryption (§5), monitoring/audit (§7), backups/DR (§6), vendor mgmt (§10), incident response. **Readiness = controls operating + evidence retained**, not yet a formal audit | Bake in day one if B2B; formal audit when a deal requires |

**Tool/skill:** `legal:compliance-check` audits the regime→controls fit; `engineering-backbone §9` is the source matrix; **⚖ regulatory counsel** decides the regime and any regulated launch. Sales-tax nexus is a *tax* obligation — route to `/finance-ops`, not here.

---

## Area 5 — The templatable-vs-lawyer split (the governance rule)

| **Templatable** (OS drafts review-ready; lighter attorney pass) | **Must go to a lawyer** (bespoke, high-stakes; OS drafts only to frame) |
|---|---|
| Standard **ToS** | Entity selection **+ tax election** (⚖+CPA) |
| **Privacy policy** matched to actual practice | **Operating agreement / bylaws / stockholders' agreement** |
| **One-way + mutual NDA** | **Cap table + vesting + 83(b) + QSBS** (⚖+CPA) |
| **SOW** under a reviewed MSA | **MSA** liability caps + indemnities |
| Standard **contractor agreement** | **Employment agreements + non-competes** `[jurisdiction]` |
| **Unregulated mutual-referral** | **IP-assignment enforceability** + patent strategy |
| **Cookie/consent + DSAR** workflow docs | **Customer-facing DPA + SCCs**; anything **regulated** (HIPAA BAAs, LegitScript, licensure, anti-kickback) |
| Vendor-supplied DPAs (you countersign after review) | All **financing / M&A / dispute** work (SAFEs, term sheets, litigation) |

**The rule:** the OS produces finished, review-ready drafts and **frames** the decision; the attorney **decides and approves**; the human **signs or files.** Signature and filing are irreversible, human-gated actions — never done by the OS.

---

## The consolidated attorney-review-required gate list (template)

Every legal setup pack ends with this, filled for the venture — one place so nothing is missed:

- [ ] **Entity type + tax election** — ⚖ corporate **+CPA** `[jurisdiction]`
- [ ] **Governance docs** (operating agreement / bylaws / stockholders' agreement) — ⚖ corporate
- [ ] **Cap table + vesting + 83(b) (30-day clock) + QSBS** — ⚖ corporate **+CPA**
- [ ] **IP assignment** (founders / employees / contractors) enforceability — ⚖ IP
- [ ] **Trademark** clearance opinion + filing (flag, never clear) — ⚖ IP/TM
- [ ] **ToS + Privacy Policy** (matched to practice) — ⚖ corporate / privacy
- [ ] **DPA** customer-facing terms + SCCs — ⚖ privacy
- [ ] **MSA** liability caps + indemnity + IP — ⚖ corporate
- [ ] **Employment agreements + non-competes** — ⚖ employment `[jurisdiction]`
- [ ] **Contractor** IP assignment + worker classification — ⚖ employment
- [ ] **Compliance regime** determination + any regulated-category launch — ⚖ regulatory **(hard gate on launch + spend)**
- [ ] **Signature + filing** of anything above — human-gated, after counsel review

---

## Worked example — Executive Edge OS (the deliverable, abridged)

**Input:** stand up the legal foundation for Executive Edge (health-tech SaaS, **solely owned** by Tony, live revenue, US, active B2B sprint; regulatory surface: health claims + Rx/peptides via partners, LegitScript-relevant on public pages).

- **Entity:** the fork is **fundraising intent.** EE is solely owned and cash-flow-first (mandate = dollars collected, not a venture raise) → **default = LLC, evaluate an S-corp election with the CPA** once profit makes the SE-tax saving worth the payroll/compliance overhead. **But** if Tony will raise institutional capital, issue operator/employee equity, or wants **QSBS** → **convert to / form a Delaware C-corp** *before* the raise (converting later is taxable + messy). Recommendation stated **conditional on the fork**, `⚖ corporate +CPA`, tax mechanics handed to `/finance-ops` (which already flagged entity/QSBS).
- **Governance/cap table:** solely-owned today, so a single-member LLC operating agreement (liability-shield hygiene) + an IP-assignment of all EE work product to the entity. The moment an operator/partner/employee gets equity → vesting + 83(b) + stockholders' agreement + PIIA. Carta only when equity is issued.
- **Contracts (drafts, each flagged):** **ToS + Privacy Policy** (health data = sensitive; privacy counsel), **DPA** with each subprocessor (Supabase, Stripe, Twilio, Resend, PostHog, Sentry) + a customer-facing DPA for B2B cohorts/licenses, **MSA + SOW** for corporate cohorts and operator licenses (the B2B sprint's paper — liability caps + IP + the "no live team-dashboard" scope honored), **mutual + one-way NDA** for partner/vendor talks, **contractor agreement** (present IP assignment — the platform is the asset), **employment/offer** if hiring, **mutual-referral** for the 15% channel program — **flagged for anti-kickback/regulatory review because it's health-adjacent.** Operated via `legal:review-contract` → Drive → `legal:signature-request` (human-gated).
- **IP/TM:** assign all platform IP + the scoring IP (Daily Edge Score, Drift Score, BRI, PhenoAge) to the entity; **flag** trademark path on "Executive Edge" + the score names → `⚖ IP/TM` (never cleared here; `/naming-brand` raised it).
- **Compliance matrix:** **GDPR/CCPA** (sensitive health data — minimization, DSAR, consent-gated analytics, DPAs) `⚖ privacy`; **LegitScript** (Rx/peptide public pages + any paid ads — **certification before ads/payment in category**, accurate claims, the venture's "never physician review / medical team" language guardrail) `⚖ regulatory` **hard gate**; **HIPAA** = **an attorney determination** — EE stores labs + wearable data tied to identity (health data), but the refer-out/partner model may keep it out of covered-entity/business-associate status; if PHI is in scope, BAAs required and **Vercel/PostHog are not HIPAA-eligible** → constrains the stack `⚖ regulatory`; **SOC 2 readiness** (active B2B sprint → enterprise buyers will ask) — bake in the backbone controls now. All pulled from `engineering-backbone §9`.
- **Attorney-gate list:** the consolidated checklist above, filled — entity/tax fork, IP assignment, TM, ToS/privacy/DPA, MSA, referral (anti-kickback), the **regime determination + LegitScript hard gate**, and signature/filing all human-gated.

Full deliverable: `ventures/executive-edge/outputs/legal-setup.md`.

---

## The jurisdiction + specialist map (condensed)

| Area | Varies by | Specialist | Never decided here |
|---|---|---|---|
| Entity + tax election | Country/state; fundraising intent | ⚖ corporate + CPA | The entity choice + S/C election |
| Employment + non-compete | State (CA bans most non-competes) | ⚖ employment | Enforceability + classification |
| Privacy | GDPR / UK-GDPR / CCPA-CPRA + state laws | ⚖ privacy | Lawful basis, SCCs, DSAR adequacy |
| Trademark | Class + jurisdiction; Madrid for intl | ⚖ IP/TM | Whether a mark is "clear" |
| Regulated category | Industry + jurisdiction | ⚖ regulatory | Regime scope + launch clearance |

The rule across all of it: `legal-pack` **maps** the obligation and drafts the readiness; a licensed attorney **decides**, and the human **signs or files.** Name the jurisdiction and the specialist; never assert a legal position as settled.
