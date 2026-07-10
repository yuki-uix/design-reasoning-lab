# Evidence manifest: EXP-20260707-004-slider-comment-ownership

Screenshots are researcher captures of Claude Design (desktop app) on macOS. `p-full-Habit Tracker - standalone.html` is the product's own standalone export for the Part 1 P-FULL project. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai). Part 1 covers three projects; only the first (P-FULL habit tracker) has been run at this access date.

## Part 1, project 1: P-FULL habit tracker (2026-07-09)

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `p-full-questions.png` | screenshot | 2026-07-09T22:17 | researcher capture | e4803bf2f175 | full P-FULL prompt visible untruncated; 7-question intake form ("A few quick questions before I build"): form factor, scope confirmation, design-direction count, muted-green tone (4 swatches), typeface feel (naming Nunito/Quicksand, Inter/Helvetica, Poppins/Circular pools), weekly streak visualization style (3 visual options), extra warmth touches; every free-text field filled "Use your best judgment."; "Sonnet 5 Medium" visible |
| `p-full-output.png` | screenshot | 2026-07-09T22:29 | researcher capture | 7a323f61d780 | post-generation conversation and artifact; delegation echo lists 5 parameter names (platform, screens, variations, type_style, personality); agent summary explicitly inventories its own controls ("Tweaks panel exposes name, accent color, and celebration toggle"); self-QA visible ("Found issues — fixing…", "Refining logic ×3", avatar-initials fix with Undo affordance); artifact titled plain "Habit Tracker", no invented brand, no persona in greeting |
| `p-full-output-tweak.png` | screenshot | 2026-07-09T22:29 | researcher capture | 6af2b2102cf0 | Tweaks panel open: Behavior → `celebrations` toggle (on); Content → `userName` empty text field; Style → `accentColor` 4 swatches (sage selected, blue, clay, purple) |
| `p-full-Habit Tracker - standalone.html` | code export | 2026-07-09T22:35 | product download | 079ddd3fd1f8 | bundler-shell standalone export (`__bundler/template` DSL per EXP-002); filename kept as downloaded |

Notable facts inside the export's template (extraction per `evidence/EXP-20260707-002-artifact-code-autopsy/manifest.md`):

- Tweakable-variable declarations exactly match the panel: `celebrations` `{editor: boolean, default: true, section: "Behavior"}`; `userName` `{editor: text, default: "", section: "Content"}`; `accentColor` `{editor: color, default: "#7C9873", options: ["#7C9873", "#6B8CA3", "#B98A6A", "#9B8AAE"], section: "Style"}`.
- The greeting appends the persona only if the user sets it: `` `Good ${timeOfDay}${userName ? ', ' + userName : ''}` `` — persona is an empty, user-owned parameter.
- `accentColorDark` (`#4A5F45`) and `accentColorLight` (`#E9EFE4`) are hardcoded sage variants that do not follow the `accentColor` prop: choosing blue/clay/purple leaves streak chips, links, and nav in green — the color control parameterizes only part of the accent system.
- Seed habits: "Drink a glass of water", "10-minute walk", "Read to the kids", "Stretch before bed"; the create-flow name placeholder is "e.g. Read to the kids".
- Styling is inline hex throughout (59 `'Nunito'` occurrences, no CSS token layer) — a third color-system idiom for this brief on this product (cf. OBS-20260708-009, OBS-20260709-028).

## Environment

- Product and visible version: Claude Design (research preview), macOS desktop app; model selector shows "Sonnet 5 Medium"; signed in.
- Access: 2026-07-09 evening; captures 22:17–22:35 local.
- Feature context: fresh project "Habit tracker for busy parents"; no design system connected; Hi-fi design / Interactive prototype chips visible on the prompt.

## Transformations and redactions

- Files were captured into a working folder `evidence/0709-exp-03/` (researcher-named; the label "exp-03" is a mislabel for this EXP-004 run) and moved here unchanged; hashes computed after the move. No renames.

## Missing evidence

- Part 1 projects 2 and 3 (coffee-roaster landing page, e-commerce dashboard) not yet run; Part 2 (three-channel comparison) not yet run.
- The process log was not fully expanded before capture ("Designing, Finishing up" and "Refining logic ×3" groups are collapsed summaries).
- Weekly and Create screens are not captured as screenshots (they are navigable inside the standalone export).
- The intake form was captured before submission; no capture of the form's submitted state beyond the conversation echo.
