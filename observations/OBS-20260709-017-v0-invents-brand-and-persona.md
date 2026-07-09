---
id: OBS-20260709-017-v0-invents-brand-and-persona
experiment: EXP-20260707-005-ambiguity-ladder-v0
timestamp: 2026-07-09T09:10:00+08:00
observer: yuki
---

# Under a fully specified brief, v0 invents a brand name and a named persona

## Fact

The P-FULL prompt specifies audience, screens, style, and tone but no product name and no user persona. v0's artifact is branded "Little Wins" (app-shell header with leaf logo; `app/layout.tsx` metadata title "Little Wins — gentle habit tracking") and greets a hardcoded persona by name ("Good morning, Riley" in `components/today-view.tsx`). Seed data is audience-fitted: parent-life habits ("Read to the kids", "Phone-free dinner" in v0's summary) with realistic streak history. In EXP-001, Claude Design's P-FULL artifact stayed generically titled "Habit Tracker" and used no persona name; it invented a brand ("Sprout") only when the content dimension was removed (OBS-20260708-014).

## Interpretation

Both products fill the branding vacuum, but at different thresholds: v0 brands and personifies even a fully specified brief, while Claude Design (in the single EXP-001 run pair) reserved invention for wider decision spaces. Alternatives: v0's house style may simply favor personalized demo data as a polish signal; or this is run-to-run variance, since Claude Design's EXP-003 run 1 also invented a persona ("Maya") under the same brief.

## Evidence

- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-output.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-output-01.png`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/app/layout.tsx`
- `evidence/EXP-20260707-005-ambiguity-ladder-v0/v0-p-full-code/components/today-view.tsx`

## Confidence and limitations

High for the facts (source code committed as evidence). Threshold interpretation rests on n=1 per product per condition and is already qualified by the Maya counterexample.

## Follow-up

Check whether v0 still invents a brand when explicitly given one; compare persona-invention rates across more runs of both products.
