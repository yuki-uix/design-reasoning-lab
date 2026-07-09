---
id: OBS-20260708-013-sliders-mirror-spec-ranges
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T22:16:00+08:00
observer: yuki
---

# Intake sliders parameterize explicit ranges and enumerable free dimensions

## Fact

P-NO-AUDIENCE's intake form rendered a slider for sample-habit count with range 3–5 — the exact numeric range the prompt left open ("a today view listing 3–5 habits"). P-VAGUE's form rendered a slider for "How many overall design directions to explore?" with range 1–3. Other questions in the same forms used chips or checkboxes.

## Interpretation

The intake generator maps decision types to control types: unresolved continuous or countable ranges become sliders, categorical choices become chips, set choices become checkboxes. The 3–5 slider shows the system detects residual freedom inside a given specification, not just missing dimensions. This is the same parameterize-and-hand-back move seen post-generation in the Tweaks panel (OBS-20260708-007), operating at intake time.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-audience-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-vague-question.png`

## Confidence and limitations

Two sliders across five runs; the mapping rule is inferred from few cases.

## Follow-up

Author prompts containing explicit ranges of different kinds (durations, counts, percentages) and record which become sliders.
