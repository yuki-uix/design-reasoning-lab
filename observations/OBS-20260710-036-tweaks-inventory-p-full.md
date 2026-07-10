---
id: OBS-20260710-036-tweaks-inventory-p-full
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T00:30:00+08:00
observer: yuki (run), claude (template extraction)
---

# P-FULL Tweaks inventory: three controls — a toggle, an empty persona field, and a partially wired color enum

## Fact

The fresh P-FULL habit-tracker run (2026-07-09, Sonnet 5 Medium) surfaced exactly three unrequested controls in its Tweaks panel, confirmed in the export's tweakable-variable declarations: `celebrations` (boolean, default on, section Behavior), `userName` (free text, default empty, section Content), and `accentColor` (color enum, default sage `#7C9873`, options sage/blue/clay/purple, section Style). The agent inventoried them itself in its summary ("Tweaks panel exposes name, accent color, and celebration toggle").

Three qualifying details from the template:

1. The greeting renders the persona only if the user fills it: `` `Good ${timeOfDay}${userName ? ', ' + userName : ''}` ``. No name is invented.
2. The `accentColor` options leave the brief's "muted green": blue `#6B8CA3`, clay `#B98A6A`, purple `#9B8AAE` — all equally muted, so the offered range holds the brief's *tone* while crossing its *hue*.
3. The parameterization is partial: `accentColorDark` (`#4A5F45`) and `accentColorLight` (`#E9EFE4`) are hardcoded sage variants that ignore the prop, so a non-green choice leaves streak chips, links, and the bottom nav green.

Decisions that received no control, though the same run made them: typeface, spacing/density, streak-visualization style, screen structure, copy tone, seed content. Typeface and streak style were instead asked at intake (and delegated).

## Interpretation

First data point for the pre-registered hypothesis: all three controls sit on cheap-to-revise, preference-decisive decisions, and no structural decision was parameterized — consistent so far. Two refinements the hypothesis didn't predict: intake questions and Tweaks controls parameterize *disjoint* decision sets in this run (what was asked pre-generation did not come back as a control, and vice versa), suggesting two ownership-return mechanisms with different scopes; and the persona control inverts v0's behavior on the same brief — v0 hardcoded "Riley" (OBS-20260709-017), Claude Design ships the persona as an empty parameter the human owns. The partial wiring of `accentColor` (fact 3) reads as the control being generated as a *surface affordance* rather than derived from a color system — consistent with the artifact lacking an authoritative token layer (FND-002). Alternatives: n=1; the agent's own summary naming the three controls could mean control choice is scripted into its output template rather than decision-driven.

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/p-full-output-tweak.png`
- `evidence/EXP-20260707-004-slider-comment-ownership/p-full-Habit Tracker - standalone.html` (tweakable declarations; greeting; hardcoded variants)
- `evidence/EXP-20260707-004-slider-comment-ownership/p-full-output.png` (agent's own control inventory)

## Confidence and limitations

High for the inventory (panel screenshot and code declarations agree). Single run, single domain so far; the disjoint-mechanisms reading needs the other two Part 1 projects.

## Follow-up

Complete Part 1 projects 2–3; then check whether the intake/Tweaks disjointness holds and whether accent-style partial wiring recurs.
