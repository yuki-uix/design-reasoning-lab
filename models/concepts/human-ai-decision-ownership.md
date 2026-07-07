# Human / AI Decision Ownership

## Status

Working concept.

## Definition

A record of who proposes, selects, confirms, revises, and remains accountable for each design decision during an interaction.

## Evidence

From EXP-20260707-001 (Claude Design):

- Ownership transfer is a product primitive, not just conversational behavior: intake questions ship with "Decide for me" buttons, and unresolved freedoms become controls — sliders at intake time (OBS-20260708-013), Tweaks variables at runtime (OBS-20260708-007).
- The agent detects residual freedom inside given specifications (a "3–5 habits" phrase became a 3–5 slider) and hands exactly that freedom back.
- Which decisions are variables versus constants is encoded in the artifact file format via editor metadata (OBS-20260708-007).

## Related experiments

- [EXP-20260707-001-ambiguity-ladder](../../experiments/claude-design/EXP-20260707-001-ambiguity-ladder.md) (completed)
- [EXP-20260707-004-slider-comment-ownership](../../experiments/claude-design/EXP-20260707-004-slider-comment-ownership.md) (planned)

## Open questions

- Is proposing an option equivalent to owning the decision?
- How should silent assumptions be represented?
- Can ownership be measured consistently across products?

## Revision history

- 2026-07-02: Initial working definition.
- 2026-07-08: First evidence: delegation and hand-back observed as product primitives (intake "Decide for me", sliders, Tweaks variables with editor metadata).

