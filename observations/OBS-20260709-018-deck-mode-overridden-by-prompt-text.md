---
id: OBS-20260709-018-deck-mode-overridden-by-prompt-text
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T09:15:00+08:00
observer: yuki
---

# The "Make a deck" mode chip is overridden by prototype-worded prompt text, twice

## Fact

In two fresh Claude Design sessions (2026-07-08), the registered P-FULL prompt — whose text begins "Design a high-fidelity prototype…" — was submitted with the product's "Make a deck" mode chip attached (visible on both message bubbles). Neither run produced a deck. Both intake forms asked prototype-scoped questions (device frame, screens, interactivity); both artifacts are interactive phone-frame prototypes named `Habit Tracker.dc.html`; both extracted templates contain zero occurrences of the string "slide". The agents' own summaries state it: run 1 "Built as a single phone-frame prototype with three screens (Today, Weekly, New Habit)…", run 2 "Built as a single interactive prototype…". Run 1's canvas toolbar shows a "Present" control, but the artifact behind it is the app prototype.

## Interpretation

When the mode selector and the prompt text conflict, the text wins — the chip did not constrain the generator in either run. Alternatives: the chip may be a soft suggestion rather than a hard mode; or deck mode may route through the same generator, which re-classifies the request from the brief's content. Methodologically, this voids these runs as Condition B of the cross-mode experiment: no slide artifact exists to compare, so the registered dependent measures cannot be tabulated from them. It is instead direct evidence on RQ-003 (decision ownership): an explicit UI-level user decision was silently overridden by inference from text.

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v1-questions.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v1-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v2-questions.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/p-full-slide-v2-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/p-full-slide-v1-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/p-full-slide-v2-app.html`

## Confidence and limitations

High that no deck was produced (replicated ×2, confirmed in artifacts, process logs, and agent summaries). The mechanism (soft chip vs. re-classification) is not identified; the conflicting-cue setup was accidental, not registered.

## Follow-up

Re-run Condition B with the intent actually worded for slides ("Design a slide deck presenting…") to test whether deck mode works when text and chip agree; separately, test the chip with a neutral prompt to isolate its weight.
