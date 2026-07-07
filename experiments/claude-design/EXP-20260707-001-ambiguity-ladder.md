---
id: EXP-20260707-001-ambiguity-ladder
product: claude-design
date: 2026-07-07
researcher: yuki
status: completed
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

1. A pilot P-FULL run was executed with the researcher's design system ("Nice Try 01") attached, violating the registered initial state. It was discarded and re-run clean; the pilot is documented in the manifest's Missing evidence and in OBS-20260708-002 (its question set differed from the official run's).
2. The registered response policy assumed conversational questions; the product presented structured forms instead. "Use your best judgment." was entered via each question's free-text affordance, preserving the policy's wording.
3. Evidence was captured into a working folder and renamed on ingestion (`p-value-*` → `p-vague-*`; P-FULL export gained its condition prefix); see manifest Transformations.
4. The P-VAGUE run occurred at 92% of a session usage limit (banner captured); its artifact was exported the following morning.
5. Process logs were not fully expanded before every capture, so starter/plan lines may be under-observed in early runs (see OBS-20260708-010).

## Observations

- [OBS-20260708-001-structured-intake-form](../../observations/OBS-20260708-001-structured-intake-form.md)
- [OBS-20260708-002-intake-schema-per-run](../../observations/OBS-20260708-002-intake-schema-per-run.md)
- [OBS-20260708-003-question-count-flat-altitude-varies](../../observations/OBS-20260708-003-question-count-flat-altitude-varies.md)
- [OBS-20260708-004-audience-removed-silent-default](../../observations/OBS-20260708-004-audience-removed-silent-default.md)
- [OBS-20260708-005-content-removed-triggers-questions](../../observations/OBS-20260708-005-content-removed-triggers-questions.md)
- [OBS-20260708-006-style-removed-triggers-style-questions](../../observations/OBS-20260708-006-style-removed-triggers-style-questions.md)
- [OBS-20260708-007-unspecified-dimensions-become-controls](../../observations/OBS-20260708-007-unspecified-dimensions-become-controls.md)
- [OBS-20260708-008-proprietary-artifact-dsl](../../observations/OBS-20260708-008-proprietary-artifact-dsl.md)
- [OBS-20260708-009-color-system-oscillates](../../observations/OBS-20260708-009-color-system-oscillates.md)
- [OBS-20260708-010-starters-and-verifier](../../observations/OBS-20260708-010-starters-and-verifier.md)
- [OBS-20260708-011-self-qa-loop](../../observations/OBS-20260708-011-self-qa-loop.md)
- [OBS-20260708-012-spec-propagation](../../observations/OBS-20260708-012-spec-propagation.md)
- [OBS-20260708-013-sliders-mirror-spec-ranges](../../observations/OBS-20260708-013-sliders-mirror-spec-ranges.md)
- [OBS-20260708-014-branding-fills-vacuum](../../observations/OBS-20260708-014-branding-fills-vacuum.md)

## Evidence

See `evidence/EXP-20260707-001-ambiguity-ladder/manifest.md`.

## Hypothesis

Questioning tracks a cost-of-error × inferability trade-off: removing audience or content (hard to infer, expensive to get wrong) triggers questions more often than removing style (strong model priors, cheap to revise), and P-VAGUE triggers the most questions. Falsified if question categories do not track the removed dimension, if style questions dominate, or if all conditions generate without questions.

Alternative explanations to keep open: a fixed question script independent of prompt content; question count driven by prompt length rather than missing dimensions.

### Outcome

Partially falsified. The "fixed question script" alternative is falsified (OBS-002). The predicted question gradient did not appear: question count stayed roughly flat across conditions (OBS-003), audience removal triggered no question (OBS-004), while content and style removal both triggered questions (OBS-005, OBS-006). The cost-of-error × inferability framing survives only if reformulated: ambiguity changes the altitude of a roughly fixed question budget, and elicitation operates exclusively through artifact-level questions — abstract brief dimensions like audience are never asked directly, only reached via concrete proxies.

## Conclusion

Supported by evidence: elicitation is a per-run generated, parameterized intake form with delegation as a first-class primitive (OBS-001, OBS-002); the question budget is roughly constant and its altitude tracks ambiguity (OBS-003); the observed decision boundary is audience→assume, content/style→ask (OBS-004–006); given specifications propagate into distant decisions and their absence widens the artifact's decision space, up to invented branding (OBS-012, OBS-014); unresolved freedoms are parameterized into controls at intake (sliders, OBS-013) and at runtime (Tweaks, OBS-007). Not supported / revised: the pre-registered question gradient; the single-run oklch token inference (falsified as a stable mechanism by OBS-009). Confidence: moderate for the boundary shape (single run per condition), high for the intake-form mechanism and artifact format (replicated ×5).

## Limitations

Single intent domain (habit tracking); single run per condition, and OBS-002 shows within-condition variance exists, so per-condition question sets should not be over-read; product is a research preview (Sonnet 5 Medium visible) and behavior may change between access dates; process logs were inconsistently expanded at capture time.

## Next experiment

[EXP-20260707-005-ambiguity-ladder-v0](../v0/EXP-20260707-005-ambiguity-ladder-v0.md) repeats the same conditions on a contrast product.
