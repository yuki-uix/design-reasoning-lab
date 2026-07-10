# Evidence manifest: EXP-20260707-004-slider-comment-ownership

Screenshots are researcher captures of Claude Design (desktop app) on macOS. The `.html` files are the product's own standalone exports. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai). All three Part 1 projects have been run (P-FULL habit tracker on 2026-07-09; landing page and dashboard on 2026-07-10), and Part 2's three channels were run on 2026-07-10 afternoon.

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

## Part 1, project 2: coffee-roaster landing page (2026-07-10)

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `landing-page-questions.png` | screenshot | 2026-07-10T13:16 | researcher capture | fcc5fa30bd7e | one-sentence registered prompt visible; 8-question intake: roaster name ("or should I make one up?" + tagline), overall vibe, color direction, type style, sections multi-select (10 options), imagery approach, design-direction count, page length/density; all fields "Use your best judgment."; "Sonnet 5 Medium" visible |
| `landing-page-conversation.png` | screenshot | 2026-07-10T13:24 | researcher capture | d97edbb0eb68 | delegation echo lists 8 parameter names (name, vibe, colors, type, sections, imagery, variations, length); summary "Built 'Millbrook & Co.' — a warm rustic coffee roaster landing page (cream/espresso/terracotta palette, Lora serif + Work Sans)…"; self-QA visible ("Found issues — fixing…", "Refining design ×8" then "×2", responsive-breakpoint and beans-header fixes with Undo affordance) |
| `landing-page-output.png` | screenshot | 2026-07-10T13:38 | researcher capture | d13d56d19692 | full page at 50%: hero, stats bar (3kg batch / 2× weekly / 6 farms / 9 yrs), story, four invented bean products with prices, craft section, dark subscription CTA, visit block with hours and invented address "4118 Telegraph Ave, Oakland CA", newsletter, footer |
| `landing-page-tweak.png` | screenshot | 2026-07-10T13:39 | researcher capture | d629b123776f | Tweaks button opens only a "Describe a tweak…" free-text box with an "Ideas" affordance — no variables panel appears for this project |
| `landing-page-Millbrook Coffee Landing.html` | code export | 2026-07-10T13:40 | product download | 7a6a8c0946cf | standalone bundler-shell export; filename kept as downloaded |

Notable facts inside the export's template:

- The `<script type="text/x-dc">` block has **no `data-props` attribute — zero tweakable-variable declarations**, corroborating the free-text-only Tweaks UI at code level.
- Fonts Lora + Work Sans via `@font-face`; palette led by espresso `#2a1f17`, cream `#f6f0e6`, terracotta `#a8532a` (hex inline, no token layer).
- Invented content: brand "Millbrook & Co.", founder persona "Maya Reyes" with a garage-origin story, four named bean products with prices, opening hours, street address.
- Content-coherence slip: hero kicker reads "SMALL-BATCH · ROASTED IN THE MISSION" while the badge and visit address place the roastery in Oakland (Telegraph Ave) — the Mission is a San Francisco district.

## Part 1, project 3: e-commerce analytics dashboard (2026-07-10)

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `dashboard-questions.png` | screenshot | 2026-07-10T13:56 | researcher capture | 942189607445 | one-sentence registered prompt visible; 8-question intake: primary use case, metrics multi-select, primary viewer, visual style (4 thumbnails: warm minimal / dark data-dense / soft playful / sharp editorial), information density, static-vs-interactive scope, layout-variations **slider** (1–3, set at 1), data content; no name/brand question; all fields "Use your best judgment."; "Sonnet 5 Medium" visible |
| `dashboard-output.png` | screenshot | 2026-07-10T14:14 | researcher capture | 0b59034697f7 | delegation echo lists 7 parameter names (purpose, metrics, audience, density, scope, variations, data — the visual-style question has no echoed counterpart); summary "Built as a warm-minimal dashboard… Date range toggle (7D/30D/90D) is fully interactive and swaps all data"; self-QA visible (two "Found issues — fixing…" rounds, "Refining design ×5", grid `minmax(0,…)`/`min-width:0` overflow fix, KPI font-size fix, Undo affordance); artifact: sidebar branded "Sundial Goods", user avatar "Jamie Ma — Ops Lead", KPI row, revenue chart, traffic sources, top-products table (artisan home goods with SKUs), inventory alerts |
| `dashboard-tweak.png` | screenshot | 2026-07-10T14:14 | researcher capture | 09f65681bc9e | Tweaks button opens only the "Describe a tweak…" free-text box with "Ideas" affordance — no variables panel; 90D toggle state visible |
| `dashboard-Ecommerce Analytics Dashboard.html` | code export | 2026-07-10T14:16 | product download | b241ccebf8a0 | standalone bundler-shell export; filename kept as downloaded |

Notable facts inside the export's template:

- `<script type="text/x-dc">` again has **no `data-props` attribute — zero tweakable-variable declarations**, matching the free-text-only Tweaks UI.
- `font-family: 'System'` throughout (system font stack) — no webfont this run, unlike Nunito (project 1) and Lora + Work Sans (project 2).
- Invented content: store "Sundial Goods", persona "Jamie Ma — Ops Lead", five named products with SKUs, units, revenue and trend figures, four inventory alerts — none elicited; the intake asked no identity question for this project.
- The intake itself contained a native slider control (layout variations 1–3), even though the generated artifact declares no tweakables.

## Part 2: three-channel comparison (2026-07-10)

Substrate: the EXP-001 P-FULL project ("Habit tracker for parents"; artifact "Habit Tracker.dc.html", 2 pages, Sora type, seeds 10-Minute Tidy / Bedtime Story / Drink Water / Stretch Break, "JT" avatar). State control by project duplication: three copies ("[copy 01/02/03]"), one per channel; the baseline standalone was exported from copy 01 before any change request. Code-level verification: after normalizing per-export asset UUIDs, each channel's template diffs against the baseline **only** in that channel's change — the three copies started byte-identical.

| File | Type | Captured at | Provenance | SHA-256 | Notes |
| --- | --- | --- | --- | --- | --- |
| `baseline-Habit Tracker (standalone).html` | code export | 2026-07-10T16:03 | product download | cb6c09441112 | pre-change baseline, exported from copy 01 |
| `channel-a.png` | screenshot | 2026-07-10T16:09 | researcher capture | 39583dff7f62 | copy 01, chat channel: request bubble verbatim; response "Made the 'Continue'/'Add habit' button in the create-habit sheet bolder — larger, shadowed, with a hover lift."; process log "Refining design, Refining logic ×2"; Undo affordance; Sonnet 5 Medium visible |
| `channel-a-Habit Tracker (standalone).html` | code export | 2026-07-10T16:17 | product download | e423329b5f52 | post-change export (downloaded after channel B's, from the same completed copy-01 state) |
| `channel-b.png` | screenshot | 2026-07-10T16:10 | researcher capture | fd8ce18e956a | copy 02, comment channel: Annotate popover pinned to the Today-view "+" FAB (selection ring visible), same sentence, "Add comment" / "Send to Claude" buttons; Comments panel still empty |
| `channel-b-comments.png` | screenshot | 2026-07-10T16:12 | researcher capture | f440b098fee4 | comment posted in Comments panel ("yuki · just now", anchored "Habit Tracker"), Resolve checkbox, "Resolve all" / "Send to Claude" bar |
| `channel-b-output.png` | screenshot | 2026-07-10T16:14 | researcher capture | 420ec4d36568 | "Send to Claude" compiled the comment into a structured prompt visible in chat: `**yuki** (on Habit Tracker.dc.html at [data-comment-anchor="28852c1cb7-button"])` with `<commented-element>` react/dom-path/selector metadata and `<teammate-comment>` text; response "Made the create button bigger, with a white ring border and stronger shadow so it pops against the nav bar."; process log includes "Resolved comments, Viewed comments" |
| `channel-b-Habit Tracker (standalone).html` | code export | 2026-07-10T16:15 | product download | d04fde8b116e | post-change export |
| `channel-c-edit-board.png` | screenshot | 2026-07-10T16:32 | researcher capture | 4ec7b8915751 | copy 03, Edit mode (Simple tab), FAB selected: properties before manual change — background `oklch(55% 0.09 150)`, radius 50%, shadow "0 8 18", border width 0/none |
| `channel-c-edit-update.png` | screenshot | 2026-07-10T16:35 | researcher capture | 11485eaec5e1 | after manual change: shadow "0 6 38", border 3px solid `#24502E`; Save/Discard bar visible |
| `channel-c-Habit Tracker (standalone).html` | code export | 2026-07-10T16:36 | product download | 613051efb2f5 | post-save export |

Normalized template diffs against baseline (asset UUIDs masked):

- **Channel A (chat)** — the agent resolved "the primary action" to the **create-habit sheet's Continue/"Add habit" button**, not the Today FAB. Single element changed, in the logic layer: `primaryButtonStyle` const enlarged (padding 15→16, font 15→16px, letter-spacing added, green glow shadow), a new `primaryButtonHoverStyle` const with translateY lift, and a `style-hover` binding added in the template. Disabled-state logic preserved.
- **Channel B (comment on FAB)** — the anchored element changed, in the template layer: FAB 56→64px, icon 24→26 with stroke 2.4→2.6, 4px cream ring border (`oklch(98% 0.006 85)`, the app's background family) plus strengthened dual shadow, margin-top −22→−30. The `data-comment-anchor="28852c1cb7-button"` attribute **persists in the exported code**.
- **Channel C (manual edit)** — raw property append on the FAB's inline style: shadow rewritten to `0px 6px 38px 1px`, then `font-weight: 400; border-width: 3px; border-style: solid; border-color: #24502E` appended while the original `border: none` remains earlier in the same string (later properties win); the border color is a hex outside the artifact's oklch idiom, and a spurious `font-weight: 400` was injected by the editor. Collateral damage on a *different* element: the create-sheet overlay div lost its `{{ sheetOverlayStyle }}` binding, replaced by static `left: -53px; top: -2px; position: absolute`.

## Environment

- Product and visible version: Claude Design (research preview), macOS desktop app; model selector shows "Sonnet 5 Medium"; signed in.
- Access: project 1 on 2026-07-09 evening (captures 22:17–22:35); projects 2–3 on 2026-07-10 afternoon (captures 13:16–13:40 and 13:56–14:16); Part 2 on 2026-07-10 afternoon (captures 16:03–16:36).
- Feature context: Part 1 used fresh projects ("Habit tracker for busy parents", "Independent coffee roaster landing", "E-commerce analytics dashboard"); Part 2 used three duplicates of the EXP-001 P-FULL project. No design system connected anywhere; Hi-fi design / Interactive prototype chips visible on all Part 1 prompts.

## Transformations and redactions

- Project 1 files were captured into a working folder `evidence/0709-exp-03/` (researcher-named; the label "exp-03" is a mislabel for this EXP-004 run), project 2–3 files into `evidence/0710/`; moved here unchanged, hashes computed after the move. No renames.

## Missing evidence

- Part 2 latency was not captured (no "Worked for…" counters visible in the channel captures); the registered latency measure is unmeasured.
- Channel A's export was downloaded at 16:17, after channel B's run had begun on its own copy; the projects are isolated duplicates, so ordering does not contaminate content, but the download order deviates from the run order.
- No capture of channel C's post-save agent-side reaction (whether the agent comments on or later respects the manual edit is unobserved).
- The process logs were not fully expanded before capture (collapsed "Refining logic ×3" / "Refining design ×8" / "Refining design ×5" groups).
- Project 1: Weekly and Create screens not captured as screenshots (navigable inside the standalone export). Projects 2–3: no capture of the "Ideas" affordance's contents inside the Tweaks box.
- The intake forms were captured before submission; no capture of the submitted state beyond the conversation echoes. The dashboard delegation echo lists 7 parameters against 8 form questions (visual style not echoed); the discrepancy is preserved as captured.
- Project 3 has no separate conversation capture; the full conversation is visible within `dashboard-output.png`.
