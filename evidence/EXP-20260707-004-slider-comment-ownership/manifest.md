# Evidence manifest: EXP-20260707-004-slider-comment-ownership

Screenshots are researcher captures of Claude Design (desktop app) on macOS. The `.html` files are the product's own standalone exports. SHA-256 values are truncated to 12 hex chars; timestamps are local file mtimes (Asia/Shanghai). All three Part 1 projects have been run (P-FULL habit tracker on 2026-07-09; landing page and dashboard on 2026-07-10); Part 2 is pending.

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

## Environment

- Product and visible version: Claude Design (research preview), macOS desktop app; model selector shows "Sonnet 5 Medium"; signed in.
- Access: project 1 on 2026-07-09 evening (captures 22:17–22:35); projects 2–3 on 2026-07-10 afternoon (captures 13:16–13:40 and 13:56–14:16).
- Feature context: fresh projects ("Habit tracker for busy parents", "Independent coffee roaster landing", "E-commerce analytics dashboard"); no design system connected; Hi-fi design / Interactive prototype chips visible on all prompts.

## Transformations and redactions

- Project 1 files were captured into a working folder `evidence/0709-exp-03/` (researcher-named; the label "exp-03" is a mislabel for this EXP-004 run), project 2–3 files into `evidence/0710/`; moved here unchanged, hashes computed after the move. No renames.

## Missing evidence

- Part 2 (three-channel comparison) not yet run.
- The process logs were not fully expanded before capture (collapsed "Refining logic ×3" / "Refining design ×8" / "Refining design ×5" groups).
- Project 1: Weekly and Create screens not captured as screenshots (navigable inside the standalone export). Projects 2–3: no capture of the "Ideas" affordance's contents inside the Tweaks box.
- The intake forms were captured before submission; no capture of the submitted state beyond the conversation echoes. The dashboard delegation echo lists 7 parameters against 8 form questions (visual style not echoed); the discrepancy is preserved as captured.
- Project 3 has no separate conversation capture; the full conversation is visible within `dashboard-output.png`.
