---
id: FND-001-elicitation-is-product-policy
status: draft
---

# Whether a design agent asks before generating is product policy, not an ambiguity response

## Claim

Across nine runs on two products, pre-generation elicitation never varied with how ambiguous the brief was — only with which product was running. Claude Design raised a generated, parameterized intake form on every condition of the ambiguity ladder, from a fully specified brief to a five-word prompt (question counts 7/6/8/8/8), and raised it again in the cross-mode experiment, including a second intake when converting an existing prototype to a deck. v0 asked nothing in any of its four runs, including the five-word P-VAGUE prompt, where it generated its own design direction and declared it "clear". Ambiguity modulates *what* Claude Design asks — the question budget stays roughly flat while question altitude rises from sub-decisions to foundational choices — but it never modulates *whether* either product asks.

## Supporting evidence

- Claude Design intake form on all five ladder conditions, delegation as a first-class option: [OBS-20260708-001](../observations/OBS-20260708-001-structured-intake-form.md), [EXP-001](../experiments/claude-design/EXP-20260707-001-ambiguity-ladder.md)
- Flat question count, rising altitude: [OBS-20260708-003](../observations/OBS-20260708-003-question-count-flat-altitude-varies.md)
- Intake recurs in EXP-003 runs and per converted artifact: [OBS-20260709-019](../observations/OBS-20260709-019-intake-schema-varies-again.md), [OBS-20260709-025](../observations/OBS-20260709-025-deck-conversion-triggers-second-intake.md)
- v0 zero questions on P-FULL, P-NO-AUDIENCE, P-VAGUE, and the P-FULL replication: [OBS-20260709-015](../observations/OBS-20260709-015-v0-generates-without-questions.md), [OBS-20260709-030](../observations/OBS-20260709-030-v0-no-audience-zero-questions-same-default.md), [OBS-20260709-032](../observations/OBS-20260709-032-v0-vague-zero-questions-hypothesis-test.md), [OBS-20260709-035](../observations/OBS-20260709-035-p-full-replication-stable-and-unstable-layers.md)

## Conflicting evidence

None that reverses the contrast. Nearest misses: the intake form's schema varies across runs of the same condition ([OBS-20260708-002](../observations/OBS-20260708-002-intake-schema-per-run.md), OBS-20260709-019), so the *content* of elicitation is unstable even though the *policy* is constant; and v0 was only tested against sparse ambiguity — a brief with contradictory constraints might still trigger a question (flagged open in OBS-20260709-032).

## Scope and limitations

Two products, one intent domain (habit tracking), one styled brief family, access dates 2026-07-07 to 2026-07-09. Single run per condition on the Claude Design side. The products run different, partly undisclosed models, so product-level and model-level explanations are confounded — the claim is therefore pitched at the product level (what a user experiences), not at the mechanism level. Claude Design is a research preview; both surfaces may change.

## Confidence

High for the observed contrast (9/9 runs consistent, both ladder endpoints observed on both products). Moderate for generalization to other intent domains and ambiguity types.

## Related hypotheses and concepts

[Decision boundary](../models/concepts/decision-boundary.md); EXP-001's revised cost-of-error × inferability framing (elicitation operates only through artifact-level questions); RQ-001.

## Replication status

Claude Design intake: replicated ×7 (five EXP-001 conditions, EXP-003 runs, deck conversion). v0 zero-question generation: replicated ×4 (two accounts, two dates). The cross-product contrast itself: one ladder, not yet replicated on a second contrast product.
