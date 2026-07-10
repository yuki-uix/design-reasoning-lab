---
id: OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T17:40:00+08:00
observer: yuki (run), claude (template diffing)
---

# The canvas edit silently overwrote a template binding on an untouched element; the comment anchor persists in exported code

## Fact

Two artifact-integrity side effects appeared in the Part 2 exports:

1. In the canvas-edit copy, an element the researcher did not intend to change — the create-sheet's overlay `div` — lost its `{{ sheetOverlayStyle }}` template binding, which the save replaced with static `left: -53px; top: -2px; position: absolute`. The dynamic overlay styling (computed in the artifact's logic layer) is disconnected in the exported artifact. No warning appeared at save time.
2. In the comment-channel copy, the plumbing attribute `data-comment-anchor="28852c1cb7-button"` remains in the exported FAB markup — review-infrastructure metadata shipped inside the artifact.

## Interpretation

Fact 1 is the sharpest cost yet observed for the human-executes channel: the visual editor serializes what it touches back into static values, and its write granularity is evidently wider than the user's intent, so a direct edit can sever logic-layer connections on neighboring elements — the artifact degrades from a parameterized program toward a flat drawing, invisibly. This is FND-002's no-authoritative-layer picture read as a *risk*: because bindings are the only representation, losing one loses the decision itself. Caveat: with captures only before and after, researcher misclick cannot be excluded as the trigger; what is certain is that the save wrote it and nothing surfaced it. Fact 2 is minor but shows tool metadata crossing the export boundary — the artifact records its own review history channel. Alternatives: the overlay change might be the editor recomputing an equivalent static position (behavior-preserving in the exported snapshot, though the binding loss remains); anchor persistence might be intentional for round-tripping comments.

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/channel-c-Habit Tracker (standalone).html` (overlay div; contradictory FAB style string)
- `evidence/EXP-20260707-004-slider-comment-ownership/baseline-Habit Tracker (standalone).html` (intact `{{ sheetOverlayStyle }}` binding)
- `evidence/EXP-20260707-004-slider-comment-ownership/channel-b-Habit Tracker (standalone).html` (persisted `data-comment-anchor`)
- `evidence/EXP-20260707-004-slider-comment-ownership/channel-c-edit-update.png`

## Confidence and limitations

High that the exported code differs as described (committed exports). Cause of the overlay change (editor serialization vs stray interaction) is not determinable from the captures; single run.

## Follow-up

Reproduce: open a fresh duplicate, change one FAB property, save without touching anything else, and diff — isolates editor serialization width from user interaction.
