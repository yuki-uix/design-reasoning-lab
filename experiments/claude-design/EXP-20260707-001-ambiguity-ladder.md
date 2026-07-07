---
id: EXP-20260707-001-ambiguity-ladder
product: claude-design
date: 2026-07-07
researcher: yuki
status: planned
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-001-intent-to-artifact.md
---

# Ambiguity ladder: which missing information triggers a question

## Objective

Map the decision boundary by holding a product intent fixed and systematically removing one specification dimension at a time, recording which removals cause Claude Design to ask before generating and which it fills with silent assumptions.

## Research question

[RQ-001: From intent to artifact](../../research/questions/RQ-001-intent-to-artifact.md)

## Pre-registration

### Controlled variables

- Same account, same day, same output mode selection (high-fidelity prototype).
- Each prompt runs in a fresh session with no prior project context.
- Prompts are submitted verbatim as registered below; no rewording.
- Response policy: every clarifying question the agent asks is answered with exactly "Use your best judgment." This keeps all delegated decisions observable as agent defaults.
- Record access date, visible model/version, and account tier per the case-study version-context rule.

### Independent variables

One prompt per condition. The fixed intent is a habit-tracking web app; each condition removes one dimension from the full specification.

**P-FULL (all dimensions specified):**

> Design a high-fidelity prototype of a habit-tracking web app for busy working parents (ages 30–45) who want to build small daily routines. Core screens: a today view listing 3–5 habits with one-tap check-off, a weekly progress view with a simple streak visualization, and a habit creation flow (name, schedule, reminder time). Visual style: calm and warm, soft rounded corners, generous whitespace, a muted green accent color, sans-serif typography. Tone of all copy: encouraging, never guilt-inducing.

**P-NO-AUDIENCE:** P-FULL with the audience clause removed (no "for busy working parents (ages 30–45) who want to build small daily routines").

**P-NO-CONTENT:** P-FULL with the core-screens sentence removed.

**P-NO-STYLE:** P-FULL with the visual-style and tone sentences removed.

**P-VAGUE (all dimensions removed):**

> Design a habit tracking app.

### Dependent measures

- Whether generation begins without any question, per condition.
- Verbatim text and order of every pre-generation question.
- Category of each question: audience / content-features / style / platform-format / business-strategy / other.
- For each removed dimension that drew no question: the silent default visible in the artifact (record as fact; interpret separately).
- Time-to-first-artifact and any visible plan or brief restated before generation.

### Initial state

Fresh Claude Design session per condition; no design system connected; no uploads.

## Procedure

1. Record environment and version context.
2. For each condition in the order P-FULL, P-NO-AUDIENCE, P-NO-CONTENT, P-NO-STYLE, P-VAGUE: open a fresh session, select the high-fidelity prototype mode, submit the registered prompt verbatim.
3. Answer every clarifying question with "Use your best judgment." Log all questions verbatim with timestamps.
4. Let generation complete without further input. Capture the full conversation and the artifact (screenshot plus exported code when available) into `evidence/EXP-20260707-001-ambiguity-ladder/`.
5. For each condition, tabulate: questions asked by category, dimensions silently defaulted, and the observable default chosen.

## Deviations

None.

## Observations

Link atomic observation records. Do not interpret behavior in this section.

## Evidence

See `evidence/EXP-20260707-001-ambiguity-ladder/manifest.md`.

## Hypothesis

Questioning tracks a cost-of-error × inferability trade-off: removing audience or content (hard to infer, expensive to get wrong) triggers questions more often than removing style (strong model priors, cheap to revise), and P-VAGUE triggers the most questions. Falsified if question categories do not track the removed dimension, if style questions dominate, or if all conditions generate without questions.

Alternative explanations to keep open: a fixed question script independent of prompt content; question count driven by prompt length rather than missing dimensions.

## Conclusion

Not yet run.

## Limitations

Single intent domain (habit tracking); single run per condition; product is a research preview and behavior may change between access dates.

## Next experiment

[EXP-20260707-005-ambiguity-ladder-v0](../v0/EXP-20260707-005-ambiguity-ladder-v0.md) repeats the same conditions on a contrast product.
