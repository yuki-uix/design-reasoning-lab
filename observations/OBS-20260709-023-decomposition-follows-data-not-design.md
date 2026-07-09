---
id: OBS-20260709-023-decomposition-follows-data-not-design
experiment: EXP-20260707-002-artifact-code-autopsy
timestamp: 2026-07-09T15:45:00+08:00
observer: claude (tabulation of archived exports)
---

# Decomposition follows the data model, not the design system; naming is semantic only where the format provides a naming surface

## Fact

Across the five extracted templates:

- There is no reusable component construct. Repeated dynamic UI is expressed by `sc-for` iteration over data (5–10 loops per template). Repeated static UI is copy-pasted: in P-FULL the pill-chip style string (`border: 1px solid oklch(88% 0.01 85); background: oklch(99% 0.004 85); border-radius: 100px; padding: 9px 14px; …`) appears 4 times verbatim in markup (suggestion chips plus three schedule presets).
- Variant elements are re-authored rather than parameterized: P-FULL's monogram badge style is built three times in the logic script as separate template strings differing only in size/radius/font-size (44px/14px/16px, 38px/12px/14px, 52px/16px/19px).
- Naming, where the format gives something to name, is uniformly semantic and role-based: binding names (`sheetOverlayStyle`, `todayNavStyle`, `primaryButtonStyle`, `reminderKnobStyle`), data models (`{id, name, days, time, reminderOn, streak, week}`), constants (`GREEN_SOFT`, `BORDER`), helper functions (`scheduleLabel`, `monogramFor`, `formatTime`). No positional or minified names occur anywhere.
- The styling layer has no naming surface at all: 0 class attributes and 0 custom properties in all five templates (OBS-20260709-022), so visual roles ("card", "chip", "accent") exist only implicitly, as repeated literal strings.

## Interpretation

The registered semantic-quality measure splits cleanly by layer: behavior and content are decomposed and named like reviewed code; visual style is neither decomposed nor named. Decomposition mirrors the data model (habits, days, steps), not the design system (cards, chips, badges) — the code persists what things *do* and *contain*, not what they *are* visually. Alternative: the inline-style idiom may be imposed by the DSL/runtime for sandboxing or diffing reasons, making the absence of visual naming a format constraint rather than evidence about the agent's design representation; the P-FULL JS constants show the agent can name visual roles when the layer permits it.

## Evidence

- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/tabulate.py`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-vague-app.html`

## Confidence and limitations

High for the structural facts (exhaustive over the five exports). Whether inline styling is agent choice or format constraint is undetermined; the runtime's authoring rules are not public.

## Follow-up

The Claude Code hand-off comparison (EXP-002 deviation 2) would show whether a class- or token-based idiom appears when the target format is plain web code.
