---
id: OBS-20260710-037-cross-product-verbatim-seed-convergence
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T00:40:00+08:00
observer: yuki (run), claude (code tabulation)
---

# Two products, same brief, verbatim-identical seed habits

## Fact

This run's seed habits are "Drink a glass of water", "10-minute walk", "Read to the kids", "Stretch before bed". v0's P-FULL export (EXP-005, different product, different underlying model) seeded "Drink a glass of water", "10-minute walk outside", "Read to the kids", "Three deep breaths". Two strings match verbatim across products ("Drink a glass of water", "Read to the kids"), one is a near-paraphrase ("10-minute walk"/"10-minute walk outside"). Claude Design's create-flow placeholder is likewise "e.g. Read to the kids". Within v0, "Drink a glass of water" and "Three deep breaths" also recurred verbatim across accounts (OBS-20260709-034).

## Interpretation

Extends FND-003's verbatim layer across the product boundary: given the same audience clause, both products reach for what appear to be the same stored strings, not merely the same content category. "Read to the kids" is now attested in three exports from two products. This is the strongest single piece of evidence that the fill-in behavior draws on shared priors (training-lineage level) rather than product-side content systems; it also sharpens OBS-20260709-030's audience-propagation claim — the audience clause doesn't just flavor the content, it selects near-token-identical strings. Alternative: both products could embed similar example-driven prompt scaffolds ("habit app for parents → read to the kids") — indistinguishable from model priors behaviorally.

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/p-full-Habit Tracker - standalone.html`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/lib/habits.ts`
- `evidence/EXP-20260709-006-little-wins-cross-account/new-account-p-full-v0-code/lib/habits.ts`

## Confidence and limitations

High for the string facts (all exports committed). Convergence interpretation rests on one brief family; verbatim matching is only meaningful while the strings stay this specific.

## Follow-up

None specific; feeds FND-003's replication status. A brief in an unusual domain would test whether verbatim convergence survives off-distribution.
