---
id: OBS-20260708-002-intake-schema-per-run
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T23:23:00+08:00
observer: yuki
---

# The intake schema is generated per run, with named variables

## Fact

Each run's answered questions were echoed in chat as named variables, and the variable sets differed across runs: P-FULL `device_format, screens_scope, variation_count, illustration, habit_examples, anything_else`; P-NO-AUDIENCE `screens_scope, habit_detail, habit_count, reminder_style, extra_polish, nav_pattern`; P-NO-CONTENT `screens, habit_examples, density, streak_framing, layout, variations, type_pairing, extras`; P-NO-STYLE `vibe, type, device, screens, variations, tone_copy` (plus at least one more scrolled out of view); P-VAGUE `platform, vibe, screens, habit_style, streak_emphasis, variations, interactivity`. An unarchived pilot P-FULL run (design system attached) produced yet another distinct question set from the official P-FULL run with the same prompt text.

## Interpretation

Questions are synthesized per run against the specific brief rather than drawn from a fixed script; the pilot-versus-official P-FULL difference shows within-condition variance, not just between-condition adaptation. This falsifies the pre-registered alternative explanation "fixed question script". The snake_case naming suggests the answers feed a structured downstream representation.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-output.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-audience-output.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-output-02.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-vague-output.png`

## Confidence and limitations

High for variability; the pilot run's question set is documented only in the session transcript (see manifest, Missing evidence).

## Follow-up

Repeat one condition several times to estimate within-condition schema variance.
