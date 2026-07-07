# Evidence manifest: EXP-20260707-001-ambiguity-ladder

All screenshots are researcher captures of the Claude Design macOS desktop app. HTML files are the product's own "standalone" exports of each run's artifact. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `p-full-questions.png` | screenshot | 2026-07-07T21:04 | researcher capture | 3881a81f8f5a | intake form, all "Use your best judgment." |
| `p-full-output.png` | screenshot | 2026-07-07T21:07 | researcher capture | f20bd561d4de | Today screen + answered-questions echo |
| `p-full-conversation.png` | screenshot | 2026-07-07T21:13 | researcher capture | cc431791ae53 | expanded process log incl. self-QA fix pass |
| `p-full-output-01.png` | screenshot | 2026-07-07T21:14 | researcher capture | adb940da1bd3 | This Week screen |
| `p-full-Habit Tracker (standalone).html` | artifact export | 2026-07-07T21:13 | product export | cb6c09441112 | bundler-wrapped .dc.html |
| `p-no-audience-questions.png` | screenshot | 2026-07-07T22:16 | researcher capture | 6d76dd6a557a | includes habit-count slider (3–5) |
| `p-no-audience-output.png` | screenshot | 2026-07-07T22:21 | researcher capture | 4487f93f0801 | Today screen, generic habits |
| `p-no-audience-output-01.png` | screenshot | 2026-07-07T22:21 | researcher capture | 527b56eb4af6 | This Week screen |
| `p-no-audience-output-02.png` | screenshot | 2026-07-07T22:22 | researcher capture | 249827b825bc | create-habit wizard step 1 of 3 |
| `p-no-audience-Habit Tracker (standalone).html` | artifact export | 2026-07-07T22:23 | product export | 5f2d86106508 | |
| `p-no-content-questions.png` | screenshot | 2026-07-07T22:50 | researcher capture | 07fd68e01e63 | content questions incl. streak-framing rationale |
| `p-no-content-output.png` | screenshot | 2026-07-07T22:57 | researcher capture | 196767d3f404 | desktop layout, product self-named "Sprout" |
| `p-no-content-output-01.png` | screenshot | 2026-07-07T22:57 | researcher capture | 38f584070f8b | This Week grid, no numeric streaks |
| `p-no-content-output-02.png` | screenshot | 2026-07-07T22:57 | researcher capture | 8a261fdd337c | Settings screen |
| `p-no-content-Sprout - standalone.html` | artifact export | 2026-07-07T22:58 | product export | aaad05e27010 | |
| `p-no-style-questions.png` | screenshot | 2026-07-07T23:00 | researcher capture | afdcb1efb899 | 4 of 8 questions are style; color swatch options |
| `p-no-style-output.png` | screenshot | 2026-07-07T23:04 | researcher capture | b999d521c6b5 | Tweaks panel open: primaryAccent, tone, userName |
| `p-no-style-output-01.png` | screenshot | 2026-07-07T23:05 | researcher capture | 1825f41d544f | weekly view, numeric streaks present |
| `p-no-style-Habit Tracker (standalone).html` | artifact export | 2026-07-07T23:06 | product export | deb2a087b4de | |
| `p-vague-question.png` | screenshot | 2026-07-07T23:23 | researcher capture | ab27afec7a46 | direction-check form incl. design-directions slider |
| `p-vague-output.png` | screenshot | 2026-07-07T23:23 | researcher capture | 75326e631d60 | iOS-frame Today screen; verifier todo visible |
| `p-vague-output-01.png` | screenshot | 2026-07-07T23:23 | researcher capture | 2a863b9bbeea | Stats screen |
| `p-vague-Habit Tracker.html` | artifact export | 2026-07-08T07:44 | product export | 9b8b019bd595 | exported the morning after the run |

## Environment

- Product and visible version: Claude Design (Research Preview), macOS desktop app; composer shows model "Sonnet 5 Medium" in every run.
- Access date: 2026-07-07 (all five runs, 21:04–23:23 local); P-VAGUE artifact exported 2026-07-08 07:44.
- Account or feature context: individual account; session-limit banner ("You've used 92% of your session limit") visible during P-VAGUE run. No design system connected in any official run.
- Browser/device: macOS desktop app (Darwin 25.5.0 host).

## Transformations and redactions

- Files were captured into a working folder `evidence/0707/` and moved here unchanged; `p-value-*` files were renamed to `p-vague-*` and the P-FULL export gained the `p-full-` prefix for condition consistency. Hashes computed after rename; content untouched.
- Derived source extractions (un-bundled `.dc.html` templates) live in `evidence/EXP-20260707-002-artifact-code-autopsy/derived/` with their own manifest.

## Missing evidence

- A pilot P-FULL run (with the researcher's "Nice Try 01 Design System" attached, a protocol deviation) was observed but not archived as files; it exists only in the session transcript. Its distinct question set is described in OBS-20260708-002.
- No screenshot of the P-FULL create-habit flow screen.
- Exact wall-clock time-to-first-artifact was not recorded; file mtimes bound it loosely.
