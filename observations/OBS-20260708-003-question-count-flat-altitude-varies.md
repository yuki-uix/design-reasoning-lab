---
id: OBS-20260708-003-question-count-flat-altitude-varies
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-07T23:23:00+08:00
observer: yuki
---

# Question count stays roughly flat as ambiguity grows; question altitude rises

## Fact

Question counts per condition were approximately: P-FULL 7, P-NO-AUDIENCE 6, P-NO-CONTENT 8, P-NO-STYLE 8, P-VAGUE 8. Content differed by condition: P-FULL's questions addressed sub-decisions within the given spec (demo data, streak visualization pattern, interactivity depth, presentation frame); P-VAGUE's addressed foundational choices (form factor, overall vibe, tracking model, gamification emphasis, fidelity).

## Interpretation

Elicitation appears budget-constrained: rather than asking more questions for vaguer prompts, the system allocates a roughly fixed question budget to the highest-uncertainty decisions, so ambiguity shifts question altitude instead of question volume. This refutes the pre-registered expectation that P-VAGUE "triggers the most questions" by count. Alternative: the ceiling could be a UI constraint on form length rather than a deliberate budget.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-audience-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-style-questions.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-vague-question.png`

## Confidence and limitations

Counts are from single runs per condition; within-condition variance unknown.

## Follow-up

Replicate P-FULL and P-VAGUE three times each; compare count distributions.
