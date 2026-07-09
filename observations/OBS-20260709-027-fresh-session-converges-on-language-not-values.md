---
id: OBS-20260709-027-fresh-session-converges-on-language-not-values
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T18:30:00+08:00
observer: yuki (run), claude (tabulation of exports)
---

# The fresh-session deck converges on the same design language but diverges on every craft value

## Fact

Condition B (deck-worded P-FULL intent, fresh session) vs Condition A's deck, per dimension:

- **Color:** same structure (warm ivory base, muted sage accent), zero shared values. B accent `#7C9473` vs A `#6B8E7F`; B ink `#2E2A24` vs A `#2B2721`; B backgrounds `#FAF7F2`/`#F1ECE2` vs A `#FBF8F3`/`#EFEAE2`/`#ECE6DB`. Every B color is a near-miss of an A color; none is equal.
- **Typography:** B pairs Quicksand (headings) + Karla (body); A used Nunito alone. Both sans-serif per the brief; different families.
- **Information architecture:** same skeleton (title → problem → three principles → core-screen walkthrough → closing), 10 slides vs 8. B re-creates the app screens as built mockups (the pipeline copied both `deck_stage.js` and `ios_frame.jsx`; no prototype existed to screenshot) and adds a slide A lacks: "Color, type, components" — a design-language spec presented as deck content.
- **Copy:** B's subtitle shares a stem with A's ("A calm way … small daily routines") and the guilt-free tone; B invents audience specifics absent from the brief: "for parents of kids ages 3 to 12, with five minutes to spare", plus a fabricated user quote ("Between school pickup, dinner, and one more email…").
- **Naming:** B titles the product "Habit Tracker for Busy Parents" vs A's "Habit Tracker"; no invented brand in either.

## Interpretation

Read against the pre-registered interpretation matrix: at the craft-value level, A is consistent and B divergent — consistency is carried by session context (including the screenshot pipeline, OBS-026), not by a stable cross-session representation. At the design-language level, A and B are both consistent with the brief's family (warm + muted sage + rounded sans) — priors given the same brief explain that layer without any representation. The two matrix rows thus both hold, at different altitudes, mirroring OBS-20260708-009's stability split. B's invented audience details extend vacuum-filling (OBS-20260708-014) to a dimension that was *specified* — the brief gave ages 30–45, B narrated "kids ages 3 to 12" — invention here elaborates rather than replaces. Alternative: one B run cannot rule out that another fresh run would land on A's exact values by chance; the EXP-001/002 corpus (five runs, five idioms) makes value-level coincidence unlikely.

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-b-deck-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-a-deck-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/condition-b-output.png`

## Confidence and limitations

High for the tabulated values; single run per condition. IA parallelism (title/problem/principles/screens/close) may reflect a deck-skill template rather than transfer from the brief.

## Follow-up

A third fresh-session B run would estimate within-condition variance on the value level; a document-mode run tests whether language-level convergence degrades with mode distance (registered next experiment).
