---
id: OBS-20260709-020-craft-idiom-tracks-starter
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T09:25:00+08:00
observer: yuki
---

# Craft idiom flips again between runs, and the flip co-occurs with starter use

## Fact

The two runs' extracted templates differ in every craft idiom while sharing the design language. Run 1: fonts Quicksand (headings) + Inter (body), palette entirely hex (`#FBF8F2` base, `#4F6B52` green), persona "Good afternoon, Maya", 5 parent-life seed habits. Run 2: font Nunito alone, palette entirely oklch (base hue ~95, green hue 150), no persona name ("Good morning"), different seed habits. Run 1's process log shows "Copying starter: ios_frame.jsx" before designing; run 2's log goes straight to "Designing: Habit Tracker.dc.html" with no starter step, and run 2 additionally shows a self-QA pass ("Found issues — fixing…" → "Fixed — label and count now stack instead of colliding."). Both palettes keep the same structure: warm off-white base, muted sage-green accent.

## Interpretation

Replicates OBS-20260708-009 (color encoding and font choice are non-deterministic; palette architecture is stable) in two fresh runs, and answers its follow-up in the predicted direction: the hex idiom appeared in the starter-based run and the oklch idiom in the from-scratch run, consistent with starters carrying their own code idioms. One co-occurrence is not causation; the run 2 fix pass also replicates OBS-20260708-011 (self-QA loop).

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/derived/p-full-slide-v1-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/p-full-slide-v2-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v1-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v2-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v2-output-01.png`

## Confidence and limitations

High for the per-run facts (templates archived). The starter→idiom link is a single co-occurrence on top of EXP-001's suggestive pattern; it needs deliberate manipulation to confirm.

## Follow-up

Force starter/no-starter (if controllable) or collect enough runs to correlate starter names with color idiom systematically.
