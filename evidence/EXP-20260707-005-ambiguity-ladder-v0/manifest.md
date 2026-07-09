# Evidence manifest: EXP-20260707-005-ambiguity-ladder-v0

Screenshots are researcher captures of v0 (v0.dev, Vercel) in a desktop browser. `v0-p-full-code/` and `v0-p-no-audience-code/` are the product's own project downloads (Next.js source) for the P-FULL and P-NO-AUDIENCE runs. Two of five conditions have been run at these access dates (P-FULL on 2026-07-08, P-NO-AUDIENCE on 2026-07-09); the remaining three are pending. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

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

## P-NO-AUDIENCE run (2026-07-09)

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `v0-p-no-audience-conversation.png` | screenshot | 2026-07-09T13:56 | researcher capture | bc68de06bc70 | full P-NO-AUDIENCE prompt visible untruncated; first agent turn builds with no question ("I have clear design direction, so I'll build the prototype"); Today view on canvas |
| `v0-p-no-audience-conversation-01.png` | screenshot | 2026-07-09T13:57 | researcher capture | 7bb24a5a2290 | tail of process log: "Agent Paused / Automatically resuming", "Worked for 10m 24s" then "Worked for 23s", finished 1:52 PM; final summary and self-QA cleanup ("Cleaned up screenshots", "Deleted file v2") |
| `v0-p-no-audience-output.png` | screenshot | 2026-07-09T14:52 | researcher capture | eb4dee489266 | Today view: "Little Wins" header, time-aware greeting with no persona name, generic seed habits (Morning stretch, Drink water, Read a few pages) |
| `v0-p-no-audience-output-01.png` | screenshot | 2026-07-09T14:52 | researcher capture | 1db883fb4a23 | Progress view ("Your progress", "76% of planned habits kept"), fourth seed habit "Evening walk" visible |
| `v0-p-no-audience-code/` | code export (directory) | 2026-07-09T13:59 | product download | n/a (directory) | full Next.js project; same scaffold as P-FULL but independently structured components (`habit-app.tsx`, `create-habit-flow.tsx`, `habit-icon.tsx` vs P-FULL's `app-shell.tsx`, `create-habit.tsx`, `habit-store.tsx`) |

Notable files inside `v0-p-no-audience-code/`:

- `app/layout.tsx` — Nunito via `next/font`, metadata title "Little Wins — Gentle Habit Tracking": the same invented brand as P-FULL, re-derived in a fresh session.
- `components/today-view.tsx` — time-aware `greeting()` with no persona name (P-FULL hardcoded "…, Riley"); `encouragement()` copy helper lives here rather than in `lib/habits.ts`.
- `lib/habits.ts` — four generic adult self-care seed habits (Morning stretch, Drink water, Read a few pages, Evening walk); P-FULL's parent-flavored "Read to the kids" has no counterpart.
- `app/globals.css` — oklch token system nearly value-identical to P-FULL (background `oklch(0.975 0.012 95)` vs `oklch(0.981 0.012 92)`; primary `oklch(0.62 0.078 150)` vs `oklch(0.63 0.09 150)`).
- Unlike the P-FULL download, no browser-verification screenshots ship at the project root: the process log shows v0 deleted them itself ("Cleaned up screenshots").
- `package.json` — same stack (Next.js 16.2.6, React 19, Tailwind 4), project name again scaffold default "my-project".

## Environment

- Product and visible version: v0 by Vercel (v0.dev), web app in desktop browser; no model or version indicator visible anywhere in the UI; underlying model undisclosed.
- P-FULL access: 2026-07-08, ~08:10–08:24 local; the product's own counter reports "Worked for 5m 11s", finishing 8:16 AM.
- P-NO-AUDIENCE access: 2026-07-09, ~13:41–14:52 local; the product's counters report "Worked for 10m 24s" plus a closing "Worked for 23s", with one "Agent Paused / Automatically resuming" event, finishing 1:52 PM. Researcher-confirmed fresh session; corroborated by the scaffold-default project name and a component decomposition different from P-FULL's.
- Account or feature context: researcher reports the same personal account (free tier) for both runs — the P-NO-AUDIENCE captures show a "Drafts" breadcrumb and an "Upgrade to Team for more credits" banner. Note the P-FULL row above originally recorded an anonymous session from the visible "Sign In" / "Sign Up" buttons in its captures; that observation stands, but the researcher's account report supersedes the anonymity inference. No connected repository or design context in either run. Project auto-titled "Habit tracking app" both times.
- Browser/device: desktop browser on macOS (Darwin 25.5.0 host).

## Transformations and redactions

- P-FULL files were captured into a working folder `evidence/0708/`, P-NO-AUDIENCE files into `evidence/0709/`, and moved here unchanged; hashes computed after the move. The P-NO-AUDIENCE code directory was renamed on ingestion (`v0-no-audience-habit-tracking-app/` → `v0-p-no-audience-code/`).
- `.DS_Store` files were removed from the download directories; no other file was touched.

## Missing evidence

- The remaining three registered conditions (P-NO-CONTENT, P-NO-STYLE, P-VAGUE) have not been run yet.
- The prompt bubble is truncated in `v0-p-full-output.png` ("Show full message"); the visible text matches the registered P-FULL prompt but the tail is only confirmed by the researcher, not by a capture. (The P-NO-AUDIENCE prompt is fully visible in `v0-p-no-audience-conversation.png`.)
- No capture of the create-habit flow beyond v0's own `create1.png`–`create3.png` inside the P-FULL download; the P-NO-AUDIENCE run has no create-flow capture at all, since v0 deleted its own verification screenshots before the download.
- The middle of the P-NO-AUDIENCE process log (between the opening turn at 1:41 PM and the tail) was not captured.
