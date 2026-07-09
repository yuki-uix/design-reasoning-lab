---
id: OBS-20260709-024-design-rationale-post-hoc-only
experiment: EXP-20260707-002-artifact-code-autopsy
timestamp: 2026-07-09T16:00:00+08:00
observer: claude (analysis of archived conversation captures)
---

# No written brief precedes generation; design rationale is articulated only in a post-generation summary, and is not recoverable from the code

## Fact

In the archived P-FULL conversation capture, the visible sequence is: intake form → a "Questions answered:" echo listing the delegated fields (`device_format`, `screens_scope`, `variation_count`, `illustration`, `habit_examples`, `anything_else`, each "Use your best judgment.") → process steps ("Designing: Habit Tracker.dc.html", "Finishing up") → the artifact → a prose summary stating the design decisions: "Warm neutral palette with a muted green accent, Sora/Karla type pairing, monogram icons instead of pictograms, and encouraging copy throughout (no streaks-broken guilt language)." → "Found issues — fixing…" → a fix summary. No design plan, brief, or requirements restatement appears between the intake echo and generation.

The decisions named in the summary exist in the exported code only as unnamed literals: "warm neutral palette" and "muted green accent" correspond to ~40 distinct color values with no token layer (OBS-20260709-022); "Sora/Karla type pairing" to 29 per-element font-family declarations; "monogram icons" and copy tone to inline markup and string literals.

## Interpretation

Design rationale is articulated at the conversation layer, after the artifact, functioning as a report rather than a plan. The human-readable rationale and the machine-persisted artifact are disjoint representations: the rationale is not recoverable from the code (no named structure encodes "muted green accent"), and the code's specific values are not derivable from the rationale. For RQ-002 this means the only place the design decisions exist in named, decision-shaped form is conversational prose. Alternatives: an internal plan may exist but not be surfaced in the UI (the process log is only partially expanded in early captures, see EXP-001 deviation 5); the post-hoc summary may itself be generated from the artifact rather than from any prior decision record.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-conversation.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-questions.png`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/app.html`

## Confidence and limitations

High for what the captures show; bounded by EXP-001 deviation 5 (process logs not fully expanded at capture time, so a briefly-visible plan step could have been missed). Single condition examined for this measure (P-FULL, per the EXP-002 pre-registration).

## Follow-up

In the next live run, expand every process-log step before generation completes and capture whether any plan/brief text exists inside collapsed steps.
