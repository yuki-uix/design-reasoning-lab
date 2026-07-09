# Evidence manifest: EXP-20260707-005-ambiguity-ladder-v0

Screenshots are researcher captures of v0 (v0.dev, Vercel) in a desktop browser. `v0-p-full-code/`, `v0-p-no-audience-code/`, and `v0-p-vague-code/` are the product's own project downloads (Next.js source) for their runs. Three of five conditions have been run at these access dates (P-FULL on 2026-07-08, P-NO-AUDIENCE and P-VAGUE on 2026-07-09); P-NO-CONTENT and P-NO-STYLE are pending. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

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

## P-VAGUE run (2026-07-09)

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `v0-p-vague-conversation.png` | screenshot | 2026-07-09T17:24 | researcher capture | c580bf95b26c | full P-VAGUE prompt visible ("Design a habit tracking app."); first agent turn builds with no question ("I'll design a habit tracking app for you… generating a design direction in parallel", then "The design direction is clear"); finished artifact "Cadence" on canvas: monospace-accented stat cards (Total executions 510, Max streak 48, 30-day efficiency 55%), GitHub-style 26-week consistency matrix, "Initialize routine" button |
| `v0-p-vague-conversation-01.png` | screenshot | 2026-07-09T17:33 | researcher capture | bf6c59edb914 | tail of process log: "Tested interactions" with v0's own embedded verification screenshot, final summary ("I built Cadence, a single-page habit tracker with a clean, monospace-accented UI"), hydration-mismatch self-fix noted (`Math.random()` → deterministic seed), "Worked for 7m 55s", finished 5:05 PM |
| `v0-p-vague-code/` | code export (directory) | 2026-07-09T17:12 | product download | n/a (directory) | full Next.js project; third distinct component decomposition (`habit-tracker.tsx`, `consistency-matrix.tsx`, `habit-list.tsx`, `new-habit-panel.tsx`, `stat-card.tsx`) |

Notable files inside `v0-p-vague-code/`:

- `app/layout.tsx` — Geist + Geist Mono via `next/font` (not Nunito), metadata title "Cadence — Habit Tracker": a different invented brand than the two styled runs' "Little Wins".
- `app/globals.css` — oklch tokens on a cool near-neutral axis (background `oklch(0.968 0.002 247)`, foreground/primary at hue 260, chroma ≤ 0.006), against the warm hue-92–95 / green-150 palette of both styled runs.
- `components/stat-card.tsx` — uppercase tracked monospace labels (`font-mono text-[10px] uppercase tracking-[0.14em]`), quantified register ("TOTAL EXECUTIONS", "30-DAY EFFICIENCY").
- `components/new-habit-panel.tsx` — "Initialize routine" action copy; the creation field is labeled "IDENTIFIER".
- `lib/habits.ts` — four seed habits in a productivity register (Read 30 mins, Hydration, Deep work, Meditation) with probabilistic streak history generation.
- No browser-verification screenshots at the project root (as in P-NO-AUDIENCE, unlike P-FULL).
- `package.json` — same stack (Next.js 16.2.6, React 19, Tailwind 4), project name again scaffold default "my-project".

## Environment

- Product and visible version: v0 by Vercel (v0.dev), web app in desktop browser; no model or version indicator visible anywhere in the UI; underlying model undisclosed.
- P-FULL access: 2026-07-08, ~08:10–08:24 local; the product's own counter reports "Worked for 5m 11s", finishing 8:16 AM.
- P-NO-AUDIENCE access: 2026-07-09, ~13:41–14:52 local; the product's counters report "Worked for 10m 24s" plus a closing "Worked for 23s", with one "Agent Paused / Automatically resuming" event, finishing 1:52 PM. Researcher-confirmed fresh session; corroborated by the scaffold-default project name and a component decomposition different from P-FULL's.
- P-VAGUE access: 2026-07-09, ~16:57–17:33 local; the product's counter reports "Worked for 7m 55s", finishing 5:05 PM. Fresh session on a **different account**: the researcher's first account ran out of credits after P-NO-AUDIENCE, so P-VAGUE was run signed in with a second GitHub account.
- Account or feature context: researcher reports the same personal account (free tier) for the P-FULL and P-NO-AUDIENCE runs — the P-NO-AUDIENCE captures show a "Drafts" breadcrumb and an "Upgrade to Team for more credits" banner. Note the P-FULL row above originally recorded an anonymous session from the visible "Sign In" / "Sign Up" buttons in its captures; that observation stands, but the researcher's account report supersedes the anonymity inference. P-VAGUE ran on a second personal account (see above). No connected repository or design context in any run. Project auto-titled "Habit tracking app" all three times.
- Browser/device: desktop browser on macOS (Darwin 25.5.0 host).

## Transformations and redactions

- P-FULL files were captured into a working folder `evidence/0708/`, P-NO-AUDIENCE and P-VAGUE files into `evidence/0709/`, and moved here unchanged; hashes computed after the move. The P-NO-AUDIENCE code directory was renamed on ingestion (`v0-no-audience-habit-tracking-app/` → `v0-p-no-audience-code/`), as were the P-VAGUE files (`p-vague-v0-conversation*.png` → `v0-p-vague-conversation*.png`; `p-vauge-v0-habit-tracking-app/` — researcher typo "vauge" — → `v0-p-vague-code/`).
- `.DS_Store` files were removed from the download directories; no other file was touched.

## Missing evidence

- The remaining two registered conditions (P-NO-CONTENT, P-NO-STYLE) have not been run; the researcher's credit budget ran out after P-NO-AUDIENCE and the second account's credits were spent on P-VAGUE (chosen as the most hypothesis-discriminating condition).
- The P-VAGUE run has no standalone output captures; the artifact is documented by the canvas visible in `v0-p-vague-conversation.png` and by the code export. No signed-in account indicator is visible in the P-VAGUE captures; the second-account context is researcher-reported.
- The prompt bubble is truncated in `v0-p-full-output.png` ("Show full message"); the visible text matches the registered P-FULL prompt but the tail is only confirmed by the researcher, not by a capture. (The P-NO-AUDIENCE prompt is fully visible in `v0-p-no-audience-conversation.png`.)
- No capture of the create-habit flow beyond v0's own `create1.png`–`create3.png` inside the P-FULL download; the P-NO-AUDIENCE run has no create-flow capture at all, since v0 deleted its own verification screenshots before the download.
- The middle of the P-NO-AUDIENCE process log (between the opening turn at 1:41 PM and the tail) was not captured; the same holds for the P-VAGUE log between the opening steps and the "Tested interactions" tail.
