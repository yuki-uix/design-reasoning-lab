---
id: EXP-20260707-004-slider-comment-ownership
product: claude-design
date: 2026-07-07
researcher: yuki
status: planned
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-003-decision-ownership.md
---

# Sliders and comments: which decisions the agent hands back

## Objective

Part 1: inventory which design decisions Claude Design parameterizes into user-facing controls (sliders/variables) versus fixes silently in the artifact. Part 2: compare agent behavior when the same change request arrives through chat, element-level comment, and direct canvas edit.

## Research question

[RQ-003: How is decision ownership allocated and transferred?](../../research/questions/RQ-003-decision-ownership.md)

## Pre-registration

### Controlled variables

- Part 1 uses three fresh projects from three registered prompts: the P-FULL habit tracker (EXP-001), a landing page ("Design a landing page for a local independent coffee roaster."), and a dashboard ("Design an analytics dashboard for a small e-commerce team.").
- Part 2 uses the P-FULL habit tracker project only, and the identical change request delivered through each channel: "Make the primary action stand out more."
- Each Part 2 channel test starts from the same saved pre-change state so the three deliveries are comparable.

### Independent variables

- Part 1: project domain (three levels).
- Part 2: feedback channel — chat message / element comment on the primary button / direct canvas edit (if the UI permits an equivalent manual change).

### Dependent measures

- Part 1: complete list of controls the agent creates (sliders, variable editors), the decision each control parameterizes, its offered range, and its default; list of comparable decisions that received no control.
- Part 2: scope of the resulting change (target element only, siblings, or global restyle), whether the agent asks for confirmation, latency, and whether the response references the specific element.
- Whether the agent ever defends or argues for a decision instead of complying.

### Initial state

Fresh sessions per project; no design system connected.

## Procedure

1. Part 1: generate each of the three projects; without requesting any controls, record every control the agent surfaces on its own, with screenshots, into `evidence/EXP-20260707-004-slider-comment-ownership/`.
2. Classify each surfaced control's decision by category (color, typography, spacing, density, tone, layout, content) as facts.
3. Part 2: from the saved habit-tracker state, deliver the registered change request via chat; capture the diff (before/after screenshots and code when exportable). Restore state.
4. Repeat via element comment on the primary button. Restore state.
5. Repeat via direct canvas edit where the UI allows it.
6. Record scope, confirmations, and any agent-initiated follow-up per channel.

## Deviations

None.

## Observations

Link atomic observation records. Do not interpret behavior in this section.

## Evidence

See `evidence/EXP-20260707-004-slider-comment-ownership/manifest.md`.

## Hypothesis

Controls are created for continuous, taste-dominant decisions (color, density, size) and not for structural or content decisions — that is, the agent returns ownership where human preference is decisive and error is cheap. For Part 2, element comments produce narrower-scoped changes than chat for the same request. Falsified if controls also parameterize structural/content decisions, or if channel has no effect on change scope.

## Conclusion

Not yet run.

## Limitations

State restoration between Part 2 channels may be imperfect in a research-preview product; log the actual restoration method used. Three domains is a small sample for the control inventory.

## Next experiment

If controls follow the taste/structure split, test whether an explicit request ("give me a slider for the number of habits shown") crosses the boundary and how the agent responds.
