# Evidence manifest: EXP-20260709-006-little-wins-cross-account

Screenshots are researcher captures of v0 (v0.app, Vercel) in a desktop browser. `new-account-p-full-v0-code/` is the product's own project download (Next.js source) for the run. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai).

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `new-account-p-full-v0-conversation.png` | screenshot | 2026-07-09T18:44 | researcher capture | dbfb6bbd00d2 | full P-FULL prompt visible untruncated; first agent turn builds with no question ("I'll build a high-fidelity habit-tracking prototype…"); "Generated design direction" step; account sidebar "kyisx's projects" with $0 credit balance; Today view on canvas with "Good evening" greeting, no persona name |
| `new-account-p-full-v0-conversation-01.png` | screenshot | 2026-07-09T18:44 | researcher capture | 91f139bcfd22 | tail of process log: self-QA create-flow verification, "Cleaned up screenshots", final summary naming the artifact "Rooted"; "Worked for 5m 34s", finished 6:36 PM; browser URL bar shows chat slug `habit-tracker-app-eYbtzrIAHQr` |
| `new-account-p-full-v0-output.png` | screenshot | 2026-07-09T18:44 | researcher capture | cac266eabb73 | Progress view: "Look how far you've come", "8 / 22 check-ins", per-habit 7-day dot grids; fourth seed habit "Walk around the block" visible |
| `new-account-p-full-v0-code/` | code export (directory) | 2026-07-09T18:45 | product download | n/a (directory) | full Next.js project; component decomposition `habit-app.tsx`, `create-habit.tsx`, `habit-icon.tsx`, `today-view.tsx`, `progress-view.tsx` — mixes names from both EXP-005 account-1 exports without matching either |

Notable files inside `new-account-p-full-v0-code/`:

- `app/layout.tsx` — Nunito via `next/font`; metadata title "Rooted · Gentle habit tracking": a **different invented brand** than account 1's "Little Wins", with the tagline "Gentle habit tracking" recurring verbatim.
- `components/today-view.tsx` — time-aware `greeting()` with no persona name (account 1's P-FULL hardcoded "…, Riley"); `encouragement()` copy helper in the same warm register ("enjoy the breathing room").
- `lib/habits.ts` — four seed habits: "Drink a glass of water" and "Three deep breaths" verbatim-match account 1's P-FULL seeds; "Read with the kids" and "Walk around the block" paraphrase its "Read to the kids" and "10-minute walk outside".
- `app/globals.css` — oklch tokens a third near-miss of the EXP-005 pair: background `oklch(0.976 0.012 88)` (vs `0.981 0.012 92` and `0.975 0.012 95`), primary `oklch(0.63 0.078 152)` (vs `0.63 0.09 150` and `0.62 0.078 150`).
- No browser-verification screenshots at the project root; the process log again shows "Cleaned up screenshots" before download.
- `package.json` — same stack as the EXP-005 exports (Next.js 16.2.6, React 19, Tailwind 4), project name again scaffold default "my-project".

## Environment

- Product and visible version: v0 by Vercel (v0.app), web app in desktop browser (Chrome on macOS); no model or version indicator visible; underlying model undisclosed.
- Access: 2026-07-09, run finished 6:36 PM local ("Worked for 5m 34s", single turn); captures at ~18:44.
- Account or feature context: second personal account ("kyisx", free trial), different from the EXP-005 account-1 runs; sidebar shows $0 remaining credit after the run. Fresh chat, but the account's history already contained the EXP-005 P-VAGUE run (one other chat visible in Recent Chats), so the account was not pristine — symmetric with account 1, whose second run also followed an earlier chat. Drafts context; no connected repository or design system. Project auto-titled "Habit tracker app".
- Browser/device: desktop browser on macOS (Darwin 25.5.0 host).

## Transformations and redactions

- Files were captured into a working folder `evidence/0709/` and moved here unchanged; hashes computed after the move. The code directory was renamed on ingestion (`new-account-p-full-v0-habit-tracker-app/` → `new-account-p-full-v0-code/`).
- `.DS_Store` files were removed from the directories; no other file was touched.

## Missing evidence

- The middle of the process log (between the opening turn and the create-flow verification tail) was not captured.
- No capture of the Today view as a standalone output screenshot (it is visible on the canvas in both conversation captures) and no create-flow capture; v0 deleted its own verification screenshots before download.
