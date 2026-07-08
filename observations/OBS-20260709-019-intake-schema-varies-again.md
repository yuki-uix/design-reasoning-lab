---
id: OBS-20260709-019-intake-schema-varies-again
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T09:20:00+08:00
observer: yuki
---

# Two identical submissions produce different 7-question intake schemas; image questions have no echoed key

## Fact

The same prompt + "Make a deck" chip, in two fresh sessions minutes apart, produced two different intake forms, each with 7 questions. Run 1 (headline "A few quick questions before I design"): frame, number of design directions, type direction, example habits, streak visualization (image choice), reminder time picker, anything else. Run 2 (headline "A few quick questions before I build"): device frame, which screens matter most (multi-select), interactivity, typography feel, background & accent direction (image choice), number of variations, anything else. The answered-questions echo lists 6 keys per run — run 1: `form_factor, variations, font_pairing, habit_examples, reminder_style, extra_notes`; run 2: `form_factor, screens_scope, interactivity, font_pairing, variations, extra_notes`. Four keys are shared, two are unique to each run, and in both runs the image-choice question is the one missing from the echo (left unanswered; image options carry no "Use your best judgment." affordance).

## Interpretation

Replicates OBS-20260708-002 (per-run generated schemas) and OBS-20260708-003 (roughly constant ~7-question budget) in a new pair of runs, strengthening both against the fixed-script alternative. The stable key names alongside varying question surfaces suggest a generated form over a loosely stable parameter vocabulary. The unechoed image questions show the delegation policy ("answer every question with 'Use your best judgment.'") cannot be applied to image-choice questions — a small instrument gap in the protocol.

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v1-questions.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v1-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v2-questions.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v2-output.png`

## Confidence and limitations

High (both forms and both echoes fully captured). Whether an unanswered image question defaults silently or is skipped is not observable from these captures.

## Follow-up

Amend the protocol's response policy to cover image-choice questions (e.g. always pick the first option, or explicitly skip and log).
