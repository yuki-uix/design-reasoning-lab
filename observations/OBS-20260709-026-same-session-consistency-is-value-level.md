---
id: OBS-20260709-026-same-session-consistency-is-value-level
experiment: EXP-20260707-003-cross-mode-consistency
timestamp: 2026-07-09T18:15:00+08:00
observer: yuki (run), claude (tabulation of exports)
---

# Same-session prototype→deck consistency is value-level, with a visible pipeline mechanism

## Fact

Condition A, all five registered dimensions, prototype vs deck (extracted templates):

- **Color:** seven hex values are reused exactly — `#6B8E7F` (accent), `#2B2721` (text), `#8A8377`, `#ECE6DB`, `#EFEAE2`, `#FBF8F3`, `#FFFFFF`; the deck adds only `#5A5449` and `#EAF0EA`.
- **Typography:** Nunito on both sides (single family). The PPTX export flattens all typefaces to Arial; the measure was taken from the `.dc.html` exports.
- **Information architecture:** deck slides 4–6 are Today View / Weekly Progress / Creating A Habit, in the same order as the prototype's navigation and the brief's screen list, each illustrated with an actual screenshot of the running prototype (three embedded image assets).
- **Copy:** tone matches (deck: "Missed days stay neutral. Progress is never a grade.", "A simple trail, not a report card.", "without the guilt"); zero literal reuse of app UI strings ≥6 characters (the sample habit names appear only inside the embedded screenshots); brief phrases recur ("busy working parents", "Three to five habits").
- **Naming:** "Habit Tracker" on both sides; no invented brand.

The mechanism is visible in the process log: the deck build captured the prototype screen by screen ("Screenshot ×2, Running JS", "All three screens captured cleanly. Now building the deck.", "Reading image metadata shot-today.png"), copied a deck starter (`deck_stage.js`), and embedded the screenshots. The A deck template is static — no `text/x-dc` logic script, no `sc-if`/`sc-for` — and hardcodes its hex values inline (zero custom properties), in the prototype's idiom.

## Interpretation

Condition A is "consistent" in the strongest sense the dimensions allow: exact value reuse, not stylistic resemblance. But the consistency has an identifiable procedural carrier — the pipeline reads the live artifact (screenshots, metadata) and the session context supplies the literals — so it does not by itself evidence a stored shared representation; the interpretation matrix's discriminating cell is Condition B (OBS-20260709-027). Alternative: value reuse could come from re-reading the prototype file rather than conversation context; both are in-session sources and the matrix treats them together.

## Evidence

- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-a-proto-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/derived/condition-a-deck-app.html`
- `evidence/EXP-20260707-003-cross-mode-consistency/condition-a-step2-output.png`
- `evidence/EXP-20260707-003-cross-mode-consistency/condition-a-Habit_tracker_for_parents.pptx`

## Confidence and limitations

High; counts are exact over the two extracted templates. Single run; the delegated `visual_style` answer means "match" was the agent's default choice, not a forced behavior (OBS-20260709-025).

## Follow-up

Re-run Condition A answering `visual_style` with the "bolder deck-specific treatment" option to see which values survive an instructed divergence.
