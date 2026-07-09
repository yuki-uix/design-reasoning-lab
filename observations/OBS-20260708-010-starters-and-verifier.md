---
id: OBS-20260708-010-starters-and-verifier
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T23:23:00+08:00
observer: yuki
---

# The pipeline uses starter templates and a separate verifier stage

## Fact

P-NO-STYLE's process log began with "Copying starter: image_slot.js"; P-VAGUE's with "Copying starter: ios_frame.jsx" followed by "Reading ios-frame.jsx". P-VAGUE's todo list contained "Awaiting verifier feedback; fix any reported issues", and its build summary ended "Awaiting verifier; will fix if anything's flagged." P-FULL and P-NO-AUDIENCE logs showed no starter line. P-VAGUE's output used an iOS status-bar frame matching its `ios_frame.jsx` starter.

## Interpretation

Generation is scaffolded by a library of starter files selected per brief, and validation is architecturally separated into a distinct verifier that reports back to the design agent — a generate→verify→fix pipeline with role separation, not a single monolithic generation pass. Alternative: "verifier" could be a lightweight lint rather than a full review stage; the log wording alone cannot distinguish these.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-style-output.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-vague-output.png`

## Confidence and limitations

Starter usage confirmed in two of five runs; absence in others may reflect log collapsing rather than true absence.

## Follow-up

Expand every process log before screenshotting in future runs; catalogue starter names.
