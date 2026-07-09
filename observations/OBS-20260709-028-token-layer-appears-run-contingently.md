---
id: OBS-20260709-028-token-layer-appears-run-contingently
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T18:45:00+08:00
observer: claude (tabulation of exports)
---

# A full CSS design-token layer appears in one deck and not the other, from the same starter

## Fact

Condition B's deck template contains a complete, semantically named CSS custom-property system: 20 definitions covering color (`--bg`, `--bg-alt`, `--ink`, `--ink-soft`, `--accent`, `--accent-dark`, `--accent-soft`, `--white`), a type scale (`--type-title` 64px … `--type-micro` 22px), spacing (`--pad-top`, `--pad-bottom`, `--pad-x`, `--gap-title`, `--gap-item`), and font roles (`--font-head`: Quicksand, `--font-body`: Karla) — referenced by 327 `var()` calls throughout the template. Condition A's deck, built the same day from the same visible starter (`deck_stage.js`), has zero custom properties and hardcodes inline hex, as do all seven previously audited artifacts (EXP-001/002 prototypes ×5, A prototype, A deck).

## Interpretation

The token layer whose absence EXP-002 established is not absent from the product's repertoire — it is emitted run-contingently. This bounds the EXP-002 conclusion: "no tokens" is a property of observed runs, not of the generator. It also sharpens OBS-20260708-009: craft idiom oscillates not only across format choices (oklch/hex) but across the presence of an entire tokenization discipline, within one mode and one starter. Candidate explanations, none excluded: sampling variance; the B intake's typography question priming a "design system" framing; the deck skill branching on context size (A's deck had a live prototype to mirror, B had to define its system from scratch — defining may promote naming). The last one is design-relevant: tokens appeared exactly when there was no concrete artifact to copy values from.

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-b-deck-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-a-deck-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/tabulate.py`

## Confidence and limitations

High for the counts; n=1 per condition, so the "defining promotes naming" reading is a hypothesis, not a finding.

## Follow-up

Run additional fresh-session decks and same-session conversions; tabulate token presence against whether a source artifact existed in session.
