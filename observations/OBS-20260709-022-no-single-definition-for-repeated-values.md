---
id: OBS-20260709-022-no-single-definition-for-repeated-values
experiment: EXP-20260707-002-artifact-code-autopsy
timestamp: 2026-07-09T15:30:00+08:00
observer: claude (tabulation of archived exports)
---

# Repeated design values do not resolve to single definitions, even where a constants layer exists

## Fact

Tabulation over the five extracted templates (`derived/tabulate.py`, regex classes documented in the script):

- CSS custom property definitions: 0 in all five. `var()` references: 0 in all five. `class` attributes: 0 in all five; every style is an inline `style="…"` string (67–121 per template).
- P-FULL: 95 color-literal occurrences (72 in template markup, 23 in the logic script), 40 unique values. The logic script defines four named constants — `GREEN` `oklch(55% 0.09 150)`, `GREEN_SOFT` `oklch(92% 0.03 150)`, `GREEN_DARK` `oklch(36% 0.07 150)`, `BORDER` `oklch(90% 0.01 85)` — referenced 8/3/5/1 times, all inside the logic script. The template markup cannot reference them and re-states the same roles as literals: the accent appears as `oklch(55% 0.09 150)` ×3 in markup alongside the `GREEN` constant; the neutral border role appears as four near-identical values (`oklch(85% 0.01 85)` ×1, `88%` ×11, `90%` ×1, `92%` ×3), only one of which is the `BORDER` constant; `GREEN_SOFT` (92% 0.03 150) coexists with markup literals `oklch(93% 0.03 150)` ×3; `GREEN_DARK` (36% 0.07 150) coexists with `oklch(38% 0.06 150)` ×3. The registered "muted green accent" resolves to 9 distinct oklch values on hue 150 within this one artifact.
- The other four templates define zero named color constants; 26–38 unique color literals each (86–137 occurrences).
- Spacing: 55–81 padding/margin/gap declarations per template over 26–42 unique values. Radius: 25–42 declarations over 8–11 unique values. Font sizes: 34–60 declarations over 12–16 unique values, on continuous half-pixel steps (e.g. P-FULL uses 10.5, 12.5, 13.5, 15.5px). Font-family idiom itself varies: P-FULL re-declares families per element (29 declarations), P-NO-STYLE and P-VAGUE declare once on a root container and inherit (3 each), P-NO-AUDIENCE uses the `font:` shorthand.

## Interpretation

The pre-registered hypothesis for EXP-002 — core design decisions appear once as named tokens and are referenced elsewhere — is falsified at the visual-styling layer: values are re-derived at each use site with drift, and the one partial token layer observed (P-FULL's JS constants) disagrees with the inline literals it coexists with. The artifact format offers no mechanism (class, custom property) by which markup styles and logic styles could share a definition, so a single source of truth for a visual decision is inexpressible in the emitted code. Alternatives: an upstream working representation may hold tokens that the export inlines (untestable until the Claude Code hand-off comparison); drift within a hue family could be intentional shading rather than failed reuse — but intentional shades would still be expressible as named steps, and are not.

## Evidence

- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/tabulate.py`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-audience-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-content-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-no-style-app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-vague-app.html`

## Confidence and limitations

Counts are exact for these exports and reproducible from the committed script. The export path may transform upstream code (bundler wrapper); conclusions apply to what the product ships, not necessarily to its internal working format.

## Follow-up

Run the Claude Code hand-off path on the same project and diff its styling layer against the standalone export (EXP-002 deviation 2).
