# Evidence manifest: EXP-20260707-003-cross-mode-consistency

Screenshots are researcher captures of the Claude Design macOS desktop app. HTML files are the product's own "standalone" exports. Three run groups: (1) `p-full-slide-v1/v2-*` — the failed 2026-07-08 Condition B attempts (prototype wording + deck chip; produced prototypes, see OBS-20260709-018); (2) `condition-a-*` — the 2026-07-09 Condition A run (P-FULL prototype wording verbatim, then the registered conversion request "Now create a slide deck presenting this product." in the same session); (3) `condition-b-*` — the 2026-07-09 Condition B run (P-FULL intent reworded to "Design a slide deck of…", fresh session; the message displays a "Make a deck" chip consistent with the wording). SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `p-full-slide-v1-questions.png` | screenshot | 2026-07-08T08:18 | researcher capture | c790c7d6fd80 | run 1 intake form, 7 questions incl. streak-visualization image choice; all free-text "Use your best judgment." |
| `p-full-slide-v1-output.png` | screenshot | 2026-07-08T08:37 | researcher capture | 7502b5e08330 | run 1 Today screen in iOS frame; answered-questions echo (6 keys); process log shows "Copying starter: ios_frame.jsx" |
| `p-full-slide-v1-output-01.png` | screenshot | 2026-07-08T08:38 | researcher capture | 2b2cf3444c2c | run 1 This Week screen; persona greeting "Good afternoon, Maya" visible in output.png |
| `p-full-slide-v1-Habit Tracker (Standalone).html` | artifact export | 2026-07-08T08:39 | product export | 23e9cd76d85a | bundler-wrapped `.dc.html`; prototype, zero occurrences of "slide" |
| `p-full-slide-v2-questions.png` | screenshot | 2026-07-08T08:26 | researcher capture | 471cb74e9fa2 | run 2 intake form, 7 questions incl. background/accent image choice; different schema from run 1 |
| `p-full-slide-v2-output.png` | screenshot | 2026-07-08T08:30 | researcher capture | 59ba6eedba56 | run 2 Today screen; echo lists 6 keys; "Found issues — fixing…" self-QA pass visible |
| `p-full-slide-v2-output-01.png` | screenshot | 2026-07-08T08:31 | researcher capture | 426fcf7d2c2e | run 2 This Week screen; "Fixed — label and count now stack instead of colliding." |
| `p-full-slide-v2-Habit Tracker (Standalone).html` | artifact export | 2026-07-08T08:32 | product export | bdde48f2e7e5 | prototype, zero occurrences of "slide" |
| `derived/p-full-slide-v1-app.html` | extracted template | 2026-07-09 | script extraction | 2ea3f428f1ad | un-bundled `__bundler/template`; Quicksand+Inter, hex palette |
| `derived/p-full-slide-v2-app.html` | extracted template | 2026-07-09 | script extraction | 026eaf6bfc75 | un-bundled; Nunito, oklch palette |
| `condition-a-questions.png` | screenshot | 2026-07-09T09:09 | researcher capture | c32203994514 | A step-1 intake, 7 fields + green-swatch image choice; free-text rows "Use your best judgment."; `empty_states` answer carries stray backticks |
| `condition-a-step1-output.png` | screenshot | 2026-07-09T10:37 | researcher capture | be3f9a14baa0 | A prototype Today screen, iOS frame, "Good morning, Alex"; process log "Copying starter: ios_frame.jsx"; post-generation summary with Tweakables list |
| `condition-a-step1-output-01.png` | screenshot | 2026-07-09T10:38 | researcher capture | 648f730d9f29 | A prototype This Week screen, streak dots |
| `condition-a-Habit Tracker (Standalone).html` | artifact export | 2026-07-09T10:25 | product export | 97a6c52bcd5e | A prototype standalone export |
| `condition-a-step2-questions.png` | screenshot | 2026-07-09T09:31 | researcher capture | 5e1ecc34084d | A step-2 deck intake ("Quick setup for the deck", 5 fields incl. visual_style: match app style vs bolder); registered conversion request visible verbatim |
| `condition-a-step2-output.png` | screenshot | 2026-07-09T09:36 | researcher capture | 8af99847cf25 | A 8-slide deck, slide 1 open; process log shows prototype screenshot pipeline ("Screenshot ×4", "Copying starter: deck_stage.js") |
| `condition-a-step2-Habit Tracker Deck (Standalone).html` | artifact export | 2026-07-09T10:46 | product export | 1179ed3569e7 | A deck standalone export |
| `condition-a-Habit_tracker_for_parents.pptx` | artifact export | 2026-07-09T09:36 | product export | 5db3dc51ed08 | A deck PPTX export; all typefaces flattened to Arial — unusable for the typography measure |
| `condition-b-questions.png` | screenshot | 2026-07-09T11:41 | researcher capture | 7190e1991a14 | B intake ("A few quick details before I build the deck", 8 fields; typography question quotes the brief: "sans-serif requested"); no image-choice question |
| `condition-b-output.png` | screenshot | 2026-07-09T11:45 | researcher capture | 1803bacabf98 | B 10-slide deck, slide 1 open; process log "Copying starter ×2" (deck_stage.js + ios_frame.jsx), "Writing scratchpad.md" |
| `condition-b-Habit Tracker Deck (standalone).html` | artifact export | 2026-07-09T11:46 | product export | 8c99f05391cd | B deck standalone export |
| `derived/condition-a-proto-app.html` | extracted template | 2026-07-09T11:51 | script extraction | f6973d36b8aa | A prototype template; Nunito, hex palette, accent #6B8E7F |
| `derived/condition-a-deck-app.html` | extracted template | 2026-07-09T11:51 | script extraction | c3c97c5e7bdd | A deck template; static (no logic script), Nunito, hardcoded hex reusing prototype values |
| `derived/condition-b-deck-app.html` | extracted template | 2026-07-09T11:51 | script extraction | 202b481264c3 | B deck template; static, 20 CSS custom properties + 327 `var()` refs, Quicksand+Karla, accent #7C9473 |

## Environment

- Product and visible version: Claude Design (Research Preview), macOS desktop app; composer shows model "Sonnet 5 Medium" in all runs.
- Access dates: failed attempts 2026-07-08, 08:18–08:39 local; Condition A 2026-07-09, 09:09–10:46 (intake 09:09, deck 09:31–09:36, exports 10:25–10:46); Condition B 2026-07-09, 11:41–11:46.
- Account or feature context: individual account; Condition A ran in one session ("Habit tracker for parents"); Condition B in a fresh session ("Habit Tracker for Parents"); no design system connected.
- Browser/device: macOS desktop app (Darwin 25.5.0 host).

## Transformations and redactions

- 2026-07-08 files were captured into a working folder `evidence/0708/`, 2026-07-09 files into `evidence/0709/`, and moved here unchanged; hashes computed after the move.
- `derived/` templates were extracted by decoding each export's `__bundler/template` JSON script tag (Python, no content edits), following the EXP-002 method.
- Condition A PPTX inspected by unzip; slide XML read without modification.

## Missing evidence

- Failed attempts: run 1's full process log between intake (08:18) and output capture (08:37) was not captured while collapsed steps were running.
- Condition A: no capture of the prototype-generation summary scroll above step 2 (partially visible in `condition-a-step2-output.png`); the green-swatch intake question had no free-text affordance and was left unanswered.
- Condition B: the `scratchpad.md` written during the build (visible in the process log) was not captured; deck slides 2–10 exist only in the standalone export, not as screenshots.
