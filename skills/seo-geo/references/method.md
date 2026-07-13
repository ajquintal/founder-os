# /seo-geo — Full method & worked example

One level deep; does not fan out further. Lenses: Dunford (position the entity in a category engines can classify), Christensen/JTBD (a query is a job the searcher wants done), Scale Mechanics (win one beachhead before widening). SEO = rank the page. GEO = be the source an AI answer cites. Same root: a clear entity and citable, structured answers.

## Step 1 — Define the entity

Engines (search and LLM) reason over entities, not just strings. Name: the brand, the **category it wants to own**, the ICP, and the buyer's real questions in two registers — the short query typed into a search box, and the full-sentence question asked of an AI. Ambiguous entity → neither engine can classify or cite you.

## Step 2 — Entity/keyword map

Cluster, don't list. Each cluster groups an entity + its query variants, tagged by intent and mapped to the rung it should feed.

| Cluster | Entities/keywords | Intent | AI-answer query | Offer rung | Priority |
|---|---|---|---|---|---|

Intent types: informational (learn), commercial (compare), transactional (buy), navigational (find you). Add the **AI-answer query** — the conversational question a buyer asks ChatGPT/Perplexity — because that phrasing is what you optimize the direct-answer block for.

## Step 3 — Beachhead

Score each cluster: **intent-value × winnability (inverse of difficulty) × strategic fit (is it the wedge?)**. Pick one. Topical authority compounds when you own a cluster; it evaporates when you scatter one article across ten. This is the focus-discipline guard applied to organic.

## Step 4 — Pillar + cluster content

- **Pillar page:** the comprehensive answer for the cluster's head query; the internal-link hub.
- **Cluster articles:** each targets one long-tail/sub-question and links up to the pillar and out to the offer.
- Engineer every asset for both jobs: depth + internal links (rank) and citable structure (GEO).

## Step 5 — The GEO layer (how to get cited in AI answers)

LLMs quote sources that are unambiguous, structured, and corroborated. Build in:
- **Direct-answer block:** 40–60 words answering the exact query, at the top of the page.
- **Quotable stats with sources:** a specific, cited number is far more likely to be lifted than prose.
- **Comparison tables:** LLMs extract tables readily; comparison / "best X for Y" content is citation gold.
- **Schema:** Organization, Product/SoftwareApplication, FAQPage, Article, HowTo.
- **Entity consistency across the web:** matching name/description everywhere, an About/Organization entity, third-party mentions, and (over time) Wikidata/knowledge-panel presence.
- **llms.txt** at the root describing the entity and key URLs.

## Step 6 — Technical checklist (each with a done-criterion)

| Item | Done when |
|---|---|
| Crawlability | robots.txt allows money paths; no key page blocked in GSC |
| Indexation | money pages indexed; GSC coverage clean |
| Sitemap | XML submitted; GSC reads it, 0 errors |
| Schema | Org/Product/FAQ/Article valid in Rich Results Test |
| Core Web Vitals | LCP <2.5s, INP <200ms, CLS <0.1 (field data) |
| Canonical/robots | self-referential canonicals; no accidental noindex |
| llms.txt | present at /llms.txt, lists key URLs |
| Internal linking | every cluster article links to its pillar + the offer |

## Worked example (abridged) — Executive Edge OS

**Entity:** Executive Edge OS — category to own = **health-optimization execution platform** ("Executive Performance OS"), explicitly *not* commodity labs+insights. ICP: high-performing men 35–55 who already test/track but don't execute.

**Map (excerpt):**
| Cluster | Keywords | Intent | AI-answer query | Rung | Priority |
|---|---|---|---|---|---|
| Execution layer (beachhead) | bloodwork to action plan; how to use my lab results | info→commercial | "how do I turn my bloodwork and wearable data into a plan?" | freemium→$199 | 1 |
| Blood + device fusion | combine wearable + blood data; Oura + bloodwork | commercial | "app that combines wearable data with blood tests?" | $199→$99/mo | 2 |
| Comparison / category | best health optimization platform; [competitor] alternative | commercial→transactional | "best health optimization platform for high performers?" | $199 / flagship | 2 (high GEO value) |
| Executive/operator health | executive health optimization; founder performance health | commercial | "health optimization system for executives?" | flagship / B2B | 3 |

**Beachhead:** *Execution layer* — it's the wedge, highest strategic fit, and under-served by blood-only (Function/Superpower) and device-only (Whoop) incumbents.

**Content plan (excerpt)** — the full 6-field contract (asset · type · target query · GEO citation hook · internal links · owner):

| Asset | Type | Target query | GEO citation hook | Internal links | Owner |
|---|---|---|---|---|---|
| "The execution layer: turning bloodwork + wearables into a weekly protocol" | Pillar | "how do I turn my bloodwork and wearable data into a plan?" | 50-word direct answer + the 4-step loop + a quotable adherence stat + FAQPage schema | hub → all cluster articles + $199 offer | Cowork |
| "Why a biomarker PDF isn't a protocol" | Cluster | "what do I actually do with my lab results?" | direct-answer block + a sourced stat + Article schema | up to pillar + $199 offer | Cowork |
| "Bloodwork + Oura: the signals that actually pair" | Cluster | "which wearable + blood signals actually pair?" | direct-answer block + a sourced stat + Article schema | up to pillar + $199 offer | Cowork |
| "The drift problem, and closed-loop correction" | Cluster | "why do health protocols stop working over time?" | direct-answer block + a sourced stat + Article schema | up to pillar + $199 offer | Cowork |
| "Execution platforms vs testing-only services" | Cluster (comparison) | "best health optimization platform for high performers?" | factual comparison table (strong AI-citation magnet) + direct answer, no disparagement | up to pillar + $199 offer | Cowork |

**Claims guard:** any cluster touching a regulated topic (for a health venture, hormones/testosterone/TRT) routes to review before publish; frame around the venture's substantiated value, never a regulated or unsubstantiated claim (per the venture's claims guardrails).

## Anti-patterns (flag these)

- A flat keyword list with no clusters, intent, or offer mapping.
- Thin content spread across many clusters (no topical authority anywhere).
- "GEO" treated as keyword stuffing rather than citable, structured, sourced answers.
- Publishing clinical claims without the review gate.
