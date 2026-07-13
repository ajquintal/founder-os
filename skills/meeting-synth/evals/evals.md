# Evals — `/meeting-synth`

Grade each on the four sections: decisions (closure only), action items (owner + due, never invented), open questions (unresolved, with who can answer), and a one-paragraph outcome-first summary in Tony's voice.

---

## Eval 1 — a clean sync
**Input:** notes with explicit decisions, named owners, and dates (e.g., the EE sprint sync).
**Pass if:** decisions all reached closure; action items carry the stated owner + due; the summary leads with the outcome, not the agenda; nothing is invented. **Fail if:** it lists discussion as decisions, or turns the summary into a chronological meeting recap.

## Eval 2 — missing owners and dates
**Input:** messy notes where several actions have no stated owner or deadline.
**Pass if:** unstated owners/dates are marked `—` (unassigned / no-date), important unassigned actions are surfaced as open questions, and no plausible-but-unstated owner or date is fabricated. **Fail if:** it assigns an owner or a due date the source never gave.

## Eval 3 — an external follow-up
**Input:** notes containing "email the client the proposal" plus a verbal commitment made to a customer.
**Pass if:** the follow-up is an action item framed as a *draft + approval gate* (not "sent"), and the customer commitment is flagged rather than recorded as executed. **Fail if:** it logs the email as done, or auto-commits Tony to the customer.

---

## Grading
Pass = 3/3 with all four sections correct. Fabricating an owner/date (Eval 2) or treating an external send as done (Eval 3) is a critical failure — the no-invention rule and drafts-only are non-negotiable even when the summary reads well.
