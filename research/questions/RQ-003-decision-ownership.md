# RQ-003: How is decision ownership allocated and transferred?

## Question

Which design decisions does the agent make silently, which does it hand back to the human, and through which interface mechanisms (questions, sliders, comments, direct edits) does ownership transfer?

## Motivation

Product mechanisms that parameterize a decision and return it to the human (for example, generated sliders) make the otherwise-invisible decision boundary directly observable.

## Observable indicators

- Which decisions are surfaced as adjustable controls versus fixed in the artifact
- Clarifying questions versus silent assumptions
- Behavioral differences when the same change request arrives via chat, element comment, or direct edit
- Whether the agent revises or defends decisions it previously made silently

## Related experiments

- [EXP-20260707-004-slider-comment-ownership](../../experiments/claude-design/EXP-20260707-004-slider-comment-ownership.md)

## Status

Open.
