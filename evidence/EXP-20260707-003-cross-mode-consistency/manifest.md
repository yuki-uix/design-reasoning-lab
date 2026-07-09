# Evidence manifest: EXP-20260707-003-cross-mode-consistency

Screenshots are researcher captures of the Claude Design macOS desktop app. HTML files are the product's own "standalone" exports. These two runs are Condition B attempts ("slides from a fresh session"): the registered P-FULL prototype prompt was submitted verbatim with the product's "Make a deck" mode chip selected (a logged deviation from the registered rewording). Both runs produced interactive prototypes, not decks — the registered manipulation failed; see OBS-20260709-018. Condition A has not been run. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

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

## Environment

- Product and visible version: Claude Design (Research Preview), macOS desktop app; composer shows model "Sonnet 5 Medium" in both runs.
- Access date: 2026-07-08, 08:18–08:39 local. Run order by capture times: run 1 intake 08:18, run 2 intake-through-export 08:26–08:32, run 1 outputs captured 08:37–08:39.
- Account or feature context: individual account; fresh session per run (session titles "Habit Tracker for Parents" and "Habit tracker for busy parents"); no design system connected.
- Browser/device: macOS desktop app (Darwin 25.5.0 host).

## Transformations and redactions

- Files were captured into a working folder `evidence/0708/` and moved here unchanged; hashes computed after the move.
- `derived/` templates were extracted by decoding each export's `__bundler/template` JSON script tag (Python, no content edits), following the EXP-002 method.

## Missing evidence

- Condition A (same-session prototype → deck conversion) has not been run.
- No deck artifact exists in either run, so none of the registered slide-vs-prototype dependent measures could be captured.
- Run 1's full process log between intake (08:18) and output capture (08:37) was not captured while collapsed steps were running.
