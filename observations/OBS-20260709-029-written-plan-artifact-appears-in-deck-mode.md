---
id: OBS-20260709-029-written-plan-artifact-appears-in-deck-mode
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T19:00:00+08:00
observer: yuki (run), claude (analysis of captures)
---

# The deck pipeline writes a scratchpad file before designing, and the deck itself contains a design-spec slide

## Fact

Condition B's process log shows, between intake and generation: "Copying starter: deck_stage.js", "Copying starter: ios_frame.jsx", "Writing scratchpad.md", "Reading ios-frame.jsx", "Searching ios-frame.jsx", "Designing: Habit Tracker Deck.dc.html". The scratchpad's contents are not surfaced in the UI and were not captured. The finished B deck includes a slide titled "Color, type, components" that presents the deck's own design language as content ("Quicksand — headings", color swatches, component samples). No scratchpad step appeared in any of the seven prototype runs observed to date (EXP-001 ×5, EXP-003 failed attempts ×2), nor in Condition A's deck conversion.

## Interpretation

This bounds OBS-20260709-024 ("no written brief precedes generation"): in deck mode from a cold start, a written planning artifact does exist before design begins — the first direct evidence of a persisted pre-generation representation, though its content is unobserved. The spec slide is a second, human-readable articulation of the design system, produced in the same run that also emitted machine-readable tokens (OBS-028); in this run, uniquely, the design decisions exist in named form at three layers (scratchpad, tokens, spec slide). Alternative: scratchpad.md may be deck-skill bookkeeping (outline, slide list) rather than a design brief; the spec slide may simply be a deck-genre convention ("style guide slide") rather than introspection.

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/condition-b-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-b-deck-app.html`

## Confidence and limitations

High that the step occurred (verbatim in the process log); the scratchpad's nature is unknown. Absence in prototype runs is bounded by EXP-001 deviation 5 (logs not always fully expanded).

## Follow-up

In the next deck run, capture the expanded process log fully and check whether scratchpad.md is downloadable or quotable via the conversation.
