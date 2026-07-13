# /setup-checklists — Full method & worked example

One level deep; does not fan out further. Lenses: Gerber E-Myth (systemize so a non-founder can execute), finance discipline + operations/SOPs (`operating-playbooks.md` §6–§7). This skill maps tasks and review points; it is **not** legal, tax, or financial advice.

## How to read a flag
- `⚠ review: <professional>` — a judgment call; a lawyer / accountant / compliance pro / broker must confirm before it's relied on.
- `[jurisdiction]` — rules vary by country/state; resolve against the venture's jurisdiction.
- `owner:` — who executes (default Founder; delegate where possible, per E-Myth).

## The checklist library (select what applies)

> **Hand-off:** the **Entity & Legal (A)** and **Compliance & Data (D)** groups are the *operational* checklist. For the substantive layer — the entity recommendation + rationale (LLC vs C-corp vs S-corp by goal), the contract-template drafts, the compliance matrix, and the attorney-gate list — run **`/legal-pack`**, which composes with this skill and cross-references `docs/engineering-backbone.md §9`.

### A. Entity & Legal
- Choose entity type (LLC / Ltd / C-corp / sole trader / GmbH …) — ⚠ review: lawyer + accountant — [jurisdiction]
- File formation / incorporation — [jurisdiction]
- Obtain tax ID (EIN / UTR / VAT / TFN) — [jurisdiction]
- Registered agent / registered office — [jurisdiction]
- Founders' / operating agreement + equity split — ⚠ review: lawyer (only if >1 owner)
- IP assignment: confirm all venture IP is owned by the entity, not individuals — ⚠ review: lawyer
- Trademark search + filing on name/brand — ⚠ review: IP counsel — [jurisdiction]

### B. Banking & Finance
- Business bank account (blocks on entity + tax ID) — [jurisdiction]
- Accounting software + chart of accounts
- Bookkeeping cadence + accounting method (cash vs accrual) — ⚠ review: accountant — [jurisdiction]
- Corporate card; strict personal/business separation
- Founder pay / draw / distribution policy — ⚠ review: accountant (tax) — [jurisdiction]
- Runway / cash tracker (collected cash, not projections)

### C. Payments / getting paid (select the path for how the venture takes money — not every venture has a web checkout)
- Payment path chosen for the channel — **subscription/web** → processor + recurring billing (Stripe/Braintree); **goods retail** → storefront checkout and/or in-person **POS** (Shopify/Square); **marketplace** → split-payment + **seller payouts** rail with seller **KYC/onboarding** (Stripe Connect/Adyen) — ⚠ review: accountant/lawyer (money-transmission + payout terms); **services** → **invoicing / AR** (deposits, milestones, ACH), no product catalog required — [approval to open]
- Catalog / rates configured as the model needs — products + prices (goods/subscription, test → live) · rate card / SOW (services) · commission / take-rate + payout schedule (marketplace)
- Sales tax / VAT / GST collection + registration where nexus exists; **marketplace-facilitator** obligations + **1099-K / seller tax reporting** for a marketplace — ⚠ review: accountant — [jurisdiction]
- Refund, cancellation, and dispute (chargeback) policy (published)
- Payout bank account linked; payout schedule set (for a marketplace, seller-payout schedule + any held-funds / guarantee reserve)
- Invoice / receipt templates

### D. Compliance & Data
- Privacy policy — ⚠ review: privacy counsel — [jurisdiction: GDPR / UK-GDPR / CCPA]
- Terms of service / EULA — ⚠ review: lawyer
- Cookie / consent banner if EU/UK traffic — [jurisdiction]
- Data processing records + subprocessor list / DPAs — ⚠ review: privacy counsel — [jurisdiction]
- Industry licenses / permits / registrations — ⚠ review: sector specialist — [jurisdiction + industry]
- Category-specific claims review (e.g., health / finance) — ⚠ review: compliance / medical / legal
- Data retention + deletion (DSAR) process
- Security baseline: MFA everywhere, password manager, least-privilege access, secrets in a manager (never in repo)

### E. Ops & Insurance
- Domain + DNS; business email + shared inbox
- Password / secret manager provisioned
- Business insurance (general liability / professional / E&O / cyber) — ⚠ review: broker — [jurisdiction]
- Customer support channel + response SLA
- Core contract templates (MSA / SOW / NDA) — ⚠ review: lawyer
- Backup + basic business-continuity plan

### F. Physical goods / logistics (only if the venture ships physical product)
- Inventory & suppliers: sourcing, supplier / manufacturing agreements, quality specs, lead times, reorder points, safety stock — ⚠ review: lawyer (supply contracts) + procurement specialist — [jurisdiction]
- Fulfillment / 3PL: in-house vs third-party logistics, warehouse siting, inventory valuation method (FIFO / weighted-average) — ⚠ review: accountant (inventory valuation) — [jurisdiction]
- Shipping & returns: carrier accounts, rates / zones, packaging, delivery SLAs, tracking; published returns / RMA policy + reverse logistics — ⚠ review: lawyer (consumer return / cooling-off rights) — [jurisdiction: EU/UK distance-selling]
- Product safety & labeling: conformity marking (CE / UKCA / FCC / FDA / CPSC as applicable), warnings, materials / ingredients, country-of-origin, language requirements — ⚠ review: product-safety / regulatory specialist — [jurisdiction + product category]
- Customs / duties / import: HS tariff classification, importer of record, duty + import VAT/GST, restricted-goods and licensing checks — ⚠ review: customs broker / trade counsel — [jurisdiction]

## Sequencing (dependency DAG)

```
Entity ─→ Tax ID ─→ Bank account ─→ Payment path (live: processor / POS / payouts / invoicing) ─→ take money
   └─→ IP assignment                Compliance (privacy/ToS/licenses) ─┘ (blocks public launch)
Ops (domain / email / secrets) runs in parallel from day one.
```

Do not promise a live-payment date before the entity → tax-ID → bank → processor chain is cleared.

## Worked example (abridged)

**Input:** setup checklist for a US-based, solely-owned digital SaaS taking card subscriptions.

- **Groups selected:** A, B, C, D, E (no logistics/inventory — pure digital).
- **Entity:** single-member LLC (home state) vs Delaware C-corp → ⚠ accountant/lawyer decides on funding intent. Tax ID = EIN.
- **Payments:** Stripe; **sales-tax nexus** flagged ⚠ — SaaS is taxable in some states; needs accountant + likely Stripe Tax.
- **Compliance:** CCPA + (if any EU users) GDPR privacy policy ⚠; ToS ⚠; MFA + secret-manager baseline.
- **Top 3 launch-delayers:** bank-account KYC wait, the sales-tax registration decision, privacy/ToS review turnaround.
- **Owner:** Founder executes; lawyer + accountant own the ⚠ items. Nothing filed or opened without Tony's approval.
