---
id: OBS-20260708-012-spec-propagation
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-08T08:30:00+08:00
observer: yuki
---

# Given specifications propagate deep into non-obvious decisions; removed ones flip the behavior

## Fact

Tone: with "never guilt-inducing" specified, P-NO-CONTENT's weekly view showed no numeric streaks, framing progress as "You showed up 19 times this week. Every one of them counts.", with settings copy like "A soft nudge, never a scold."; with the tone sentence removed (P-NO-STYLE), numeric streak counters returned ("12 day streak", "27 day streak") and tone became a Tweaks toggle. Audience: parent-specific sample habits appeared exactly in the three conditions that specified parents, generic habits in the two that did not. P-FULL's build summary explicitly cited the constraint: "encouraging copy throughout (no streaks-broken guilt language)".

## Interpretation

Specification dimensions are not decoration: each given dimension observably constrains downstream decisions several steps removed from its literal wording (tone → whether numbers appear in a data visualization), and its absence measurably widens the artifact's decision space. This is the propagation direction of RQ-001's intent-to-artifact transformation, observable without access to internals.

## Evidence

- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-output-01.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-content-output-02.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-no-style-output-01.png`
- `evidence/EXP-20260707-001-ambiguity-ladder/p-full-conversation.png`

## Confidence and limitations

Tone contrast is between two different conditions that also differ in other removed dimensions; a targeted tone-only ablation would isolate it.

## Follow-up

Single-dimension ablation of tone alone.
