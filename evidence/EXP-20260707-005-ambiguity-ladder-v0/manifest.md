# Evidence manifest: EXP-20260707-005-ambiguity-ladder-v0

Screenshots are researcher captures of v0 (v0.dev, Vercel) in a desktop browser. `v0-p-full-code/` is the product's own project download (Next.js source) for the P-FULL run. Only the P-FULL condition has been run at this access date; the remaining four conditions are pending. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `v0-p-full-output.png` | screenshot | 2026-07-08T08:23 | researcher capture | 05f063ef0694 | verbatim P-FULL prompt visible; first agent turn begins building with no question; Today view on canvas |
| `v0-p-full-output-01.png` | screenshot | 2026-07-08T08:24 | researcher capture | bc4f24701cfd | Progress view ("Your progress"), product self-named "Little Wins" |
| `v0-p-full-conversation.png` | screenshot | 2026-07-08T08:24 | researcher capture | c4f4a0d1ca35 | process log: wrote 7+ files, "Loaded agent-browser skill", "Opened preview" |
| `v0-p-full-conversation-01.png` | screenshot | 2026-07-08T08:24 | researcher capture | 4ea412f95604 | final summary, "Everything works end-to-end", "Worked for 5m 11s", finished 8:16 AM |
| `v0-p-full-code/` | code export (directory) | 2026-07-08T08:21 | product download | n/a (directory) | full Next.js project: `app/`, `components/`, `lib/habits.ts`, scaffold configs |

Notable files inside `v0-p-full-code/`:

- `app/layout.tsx` — Nunito via `next/font`, metadata title "Little Wins — gentle habit tracking".
- `app/globals.css` — oklch token system (background `oklch(0.981 0.012 92)`, primary `oklch(0.63 0.09 150)`).
- `lib/habits.ts` — seed habits, per-habit color tints (green/sage/apricot/clay), `encouragement()` copy helper.
- `components/today-view.tsx` — hardcoded persona greeting "…, Riley".
- `today.png`, `progress.png`, `create1.png`–`create3.png`, `checked.png`, `after-add.png` — v0's own browser-verification screenshots, shipped at the project root of the download.
- `package.json` — Next.js 16.2.6, React 19, Tailwind 4, shadcn; project name left as scaffold default "my-project".

## Environment

- Product and visible version: v0 by Vercel (v0.dev), web app in desktop browser; no model or version indicator visible anywhere in the UI; underlying model undisclosed.
- Access date: 2026-07-08, ~08:10–08:24 local; the product's own counter reports "Worked for 5m 11s", finishing 8:16 AM.
- Account or feature context: anonymous "Drafts" session — "Sign In" / "Sign Up" buttons visible throughout; no connected repository or design context. Project auto-titled "Habit tracking app".
- Browser/device: desktop browser on macOS (Darwin 25.5.0 host).

## Transformations and redactions

- Files were captured into a working folder `evidence/0708/` and moved here unchanged; hashes computed after the move.
- `.DS_Store` files were removed from the download directory; no other file was touched.

## Missing evidence

- The remaining four registered conditions (P-NO-AUDIENCE, P-NO-CONTENT, P-NO-STYLE, P-VAGUE) have not been run yet.
- The prompt bubble is truncated in `v0-p-full-output.png` ("Show full message"); the visible text matches the registered P-FULL prompt but the tail is only confirmed by the researcher, not by a capture.
- No capture of the create-habit flow beyond v0's own `create1.png`–`create3.png` inside the download.
