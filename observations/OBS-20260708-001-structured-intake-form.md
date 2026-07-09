---
id: OBS-20260708-001-structured-intake-form
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T21:04:00+08:00
observer: yuki
---

# Intent elicitation is a structured form, not conversational questions

## Fact

In all five conditions, Claude Design responded to the initial prompt with a titled question form rendered on the canvas (for example "A few quick questions before I build", "Habit tracker — quick direction check") rather than chat messages. Each question offered option chips, and most included built-in delegation affordances: "Decide for me", "Explore a few options", and an "Other" free-text field. Some questions included one-line rationales under the title (for example "Given the 'never guilt-inducing' tone" in P-NO-CONTENT). The chat panel afterwards echoed answers as `variable_name: answer` pairs.

## Interpretation

Intent elicitation is implemented as a parameterized intake schema, not free-form dialogue. The presence of native "Decide for me" options makes decision delegation a first-class product primitive. Alternative: the form could be a fixed UI shell around ad-hoc generated questions; the per-run variation recorded in OBS-20260708-002 argues against a fixed script but not against a fixed shell.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-style-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-vague-question.png`

## Confidence and limitations

High confidence for these five runs; single product version, single domain.

## Follow-up

Test whether the form appears for trivially complete prompts or is skippable.
