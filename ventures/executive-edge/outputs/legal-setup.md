# Executive Edge OS — Legal Setup Pack

**Jul 13, 2026 · Produced by `/legal-pack` · Loads: `founder-profile/PROFILE.md` → `ventures/executive-edge/venture-context.md` → `docs/engineering-backbone.md §9` → hand-offs to `/setup-checklists`, `/finance-ops`, `/naming-brand`.**

The legal, entity & compliance foundation for a US, solely-owned, live-revenue health-tech SaaS venture with a health-claims + Rx/peptide-via-partners regulatory surface. **This is NOT legal advice.** Every judgment point is flagged **⚖ attorney review required** with the specialist named; every contract below is a **draft to be reviewed**, never filed or signed by the OS. Signature and filing are irreversible, human-gated actions — Tony (or the authorized signer) executes after counsel review.

---

## 1. Entity recommendation + rationale

**The recommendation turns on one fork: is Tony raising institutional capital / issuing equity, or running EE as a solely-owned cash-flow engine?** The venture context is explicit — solely owned, mandate is *dollars collected in the 90-day sprint*, no raise mentioned. So:

| Scenario | Recommended entity | Why |
|---|---|---|
| **Default (no raise, solely owned, cash-flow-first)** | **LLC** (home-state or DE), evaluate an **S-corp election** with the CPA once profit is durable | Pass-through (no double tax); simple; profits flow to Tony; the S-corp election can cut self-employment tax on the distribution portion once profit makes the payroll/compliance overhead worth it |
| **If raising capital / issuing operator or employee equity / wanting QSBS** | **Delaware C-corp** — form or convert **before** the raise | VCs require preferred stock (can't buy LLC units); enables an option pool for operators/hires; **QSBS** (potential capital-gains exclusion, C-corp stock held 5+ yrs). Converting an LLC to C-corp *later* is taxable and messy — decide before the round |

**Recommendation:** default to **LLC + a CPA-timed S-corp election** given the current solely-owned, cash-flow mandate — **unless** Tony intends to raise or issue equity to operators/employees inside the next ~12 months, in which case form a **Delaware C-corp now** to avoid a costly conversion and to preserve QSBS. **⚖ corporate + CPA** own this call; tax mechanics (S/C election, QSBS, 83(b)) are handed to `/finance-ops`, which already flagged entity/QSBS.

**Governance + cap table (current state → trigger):**
- **Now (solely owned):** single-member **LLC operating agreement** for liability-shield hygiene + a **Technology/IP Assignment** of all EE work product (platform + the scoring IP: Daily Edge Score, Drift Score, BRI, PhenoAge) to the entity. **⚖ corporate.**
- **The moment an operator/partner/employee receives equity:** add **vesting** (4-yr / 1-yr cliff), **83(b)** filings (**30-day IRS clock**), a **stockholders' agreement**, and **PIIA/CIIA** for the person. Cap table on **Carta/Pulley** only when equity is issued (spreadsheet is fine before). **⚖ corporate + CPA.**

---

## 2. Contract-template checklist (drafts — each flagged for review)

Every item is a review-ready **draft**, operated via `legal:review-contract` → stored in **Google Drive (MCP LIVE)** → routed to e-sign via `legal:signature-request` (DocuSign/SignNow/DocuSeal — REGISTRY). **The human signs; the OS never does.**

| Contract | Need for EE | Template? | Operated by | ⚖ Review |
|---|---|---|---|---|
| **Terms of Service** | Platform + marketing site users | templatable | `legal:review-contract` | ⚖ corporate (liability caps; **member-gated clinical content vs public claims**) |
| **Privacy Policy** | Sensitive health data (labs, wearables) | templatable structure | `legal:compliance-check` + `legal:review-contract` | ⚖ **privacy** — must match actual data practice `[CCPA/GDPR]` |
| **DPA — subprocessor** | Supabase, Stripe, Twilio, Resend, PostHog, Sentry | templatable (vendor-supplied, countersign) | `legal:vendor-check` + `legal:review-contract` | ⚖ privacy |
| **DPA — customer-facing** | B2B cohorts / operator licenses handling their people's data | bespoke | `legal:review-contract` | ⚖ **privacy** (+ SCCs if cross-border) |
| **MSA + SOW** | Corporate cohorts ($30–48k/6mo) + operator licenses ($25k+$2k/mo) | MSA bespoke; SOW templatable | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ **corporate** (liability, IP, **honor the "no live team-dashboard pre-contract" scope**) |
| **Mutual + one-way NDA** | Partner / vendor / channel talks | templatable | `legal:triage-nda` | ⚖ light |
| **Contractor Agreement** | Anyone touching the platform/IP | templatable | `legal:review-contract` | ⚖ **employment** (present IP assignment + classification) |
| **Employment / Offer Letter** | First W-2 hire | bespoke `[jurisdiction]` | `legal:review-contract` | ⚖ **employment** (non-compete enforceability by state; PIIA) |
| **Mutual-Referral Agreement** | The 15% channel-referral program | templatable base | `legal:review-contract` + `legal:legal-risk-assessment` | ⚖ corporate **+ regulatory — anti-kickback (health-adjacent)** |

Inbound NDAs → `legal:triage-nda`; counterparty correspondence → `legal:legal-response` (**draft only**). Nothing sends without Tony's approval.

---

## 3. Compliance matrix (EE's regime — pulled from `engineering-backbone §9`)

| Regime | Applies to EE? | Concrete requirements | Gate |
|---|---|---|---|
| **GDPR / CCPA-CPRA** | **Yes** — sensitive consumer health data | Privacy policy; consent/cookie; **DSAR/deletion** workflow; PII minimization + retention; **DPAs with every subprocessor**; consent-gated PostHog/GA4; encryption at rest/in transit; breach plan | Before collecting personal data (**live now** — audit it) ⚖ privacy |
| **LegitScript** | **Yes** — Rx/peptide lines via partners + health claims on public pages / any paid ads | **Certification before running ads or taking payment in the category**; accurate claims only (**no medical claims without review**); verified partner licensure; disclaimers; compliant checkout; honor "**never physician review / medical team**" language guardrail | **Hard gate** before paid GTM **and** real-money in category ⚖ regulatory |
| **HIPAA** | **Attorney determination** | EE stores labs + wearable data tied to identity (health data). The refer-out/partner model *may* keep EE out of covered-entity/business-associate status — **counsel decides.** If PHI is in scope: **BAAs with every subprocessor touching PHI**, min-necessary, audit logs, encryption, no PHI in logs/analytics. **Vercel + PostHog Cloud are NOT HIPAA-eligible** → would constrain the stack | Before any PHI is handled ⚖ regulatory |
| **SOC 2 (readiness)** | **Yes** — active B2B sprint; enterprise buyers will ask | Bake in the backbone controls (RBAC §2, change mgmt §8, encryption §5, monitoring/audit §7, backups/DR §6, vendor mgmt §10). Readiness = controls operating + evidence retained | Bake in now; formal audit when a deal requires |

Sales-tax nexus is a *tax* obligation → handled by `/finance-ops`, not here.

---

## 4. The attorney-review-required gate list (consolidated)

Nothing below is decided, filed, or signed by the OS — each is a hard gate for the named specialist, then human execution.

- [ ] **Entity type + S/C election + QSBS** (the fundraising fork) — ⚖ corporate **+ CPA**
- [ ] **Single-member LLC operating agreement** (or C-corp bylaws + stockholders' agreement if converting) — ⚖ corporate
- [ ] **IP assignment** — all platform + scoring IP to the entity; contractor present-assignment clauses — ⚖ IP
- [ ] **Cap table + vesting + 83(b)** — *triggers the moment equity is issued* — ⚖ corporate **+ CPA**
- [ ] **Trademark** — "Executive Edge" + score names: clearance opinion + filing (**flag, never cleared here**) — ⚖ IP/TM
- [ ] **ToS + Privacy Policy** matched to real data practice — ⚖ corporate / privacy
- [ ] **Customer-facing DPA + SCCs** for B2B — ⚖ privacy
- [ ] **MSA liability caps + IP + scope** (no live team-dashboard promise) — ⚖ corporate
- [ ] **Mutual-referral — anti-kickback** review (health-adjacent) — ⚖ regulatory
- [ ] **Compliance regime determination** + **LegitScript certification** + **HIPAA-applicability call** — ⚖ regulatory **(hard gate on launch + spend)**
- [ ] **Signature + filing** of anything above — **human-gated**, after counsel review

---

## Guardrails (non-negotiable)

Not legal advice — every ⚖ flag above is a real review gate, not a formality. **Nothing is filed, signed, or e-signed by the OS**; entity formation and contract execution are irreversible, human-gated actions. Trademark and entity are **flagged, never cleared.** In EE's regulated category, compliance (LegitScript, HIPAA determination, claims review) is a **hard dependency gating launch and spend**, escalated to Tony. **No medical claims** without review; honor the "never physician review / medical team" language guardrail (refer-out model). Secrets, EINs, and SSNs never appear in text, logs, or committed files — referenced by location, never echoed. **LYV firewall** — EE entities, data, and relationships stay siloed from the co-owned venture. Clinical, precise voice; banned words out.

*Hand-offs: `/setup-checklists` (the operational entity/banking/compliance checklist) · `/finance-ops` (S/C election, QSBS, 83(b), sales-tax nexus) · `/naming-brand` (trademark flag, raised at Concept).*
