# RQ-002: Is there a design intermediate representation?

## Question

Does an AI design agent maintain a structured representation of design decisions between user intent and generated artifacts, and if so, where does it live (conversation text, artifact code, or an inaccessible internal layer)?

## Motivation

Cross-output consistency could be explained by conversation context, templates, strong model priors, or a distinct representation. Distinguishing these explanations changes how the tool should be modeled and how reliably decisions survive iteration.

## Observable indicators

- Explicit briefs, plans, or requirement restatements in conversation
- Design tokens, CSS variables, or semantic structure in generated code
- Decisions preserved or drifting across output modes
- Decisions preserved or drifting across fresh sessions given identical briefs

## Related experiments

- [EXP-20260707-002-artifact-code-autopsy](../../experiments/claude-design/EXP-20260707-002-artifact-code-autopsy.md)
- [EXP-20260707-003-cross-mode-consistency](../../experiments/claude-design/EXP-20260707-003-cross-mode-consistency.md)

## Status

Open.
