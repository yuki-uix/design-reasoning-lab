---
id: OBS-20260710-038-landing-page-zero-controls
experiment: EXP-20260707-004-slider-comment-ownership
timestamp: 2026-07-10T14:30:00+08:00
observer: yuki (run), claude (template extraction)
---

# The landing page ships zero controls; Tweaks degrades to a free-text box

## Fact

The coffee-roaster landing page run (2026-07-10, Sonnet 5 Medium, one-sentence registered prompt, all 8 intake questions delegated) produced no user-facing controls: clicking Tweaks opens only a "Describe a tweak…" free-text input with an "Ideas" affordance, and the standalone export's `<script type="text/x-dc">` carries no `data-props` attribute — zero tweakable-variable declarations at code level. The previous day's habit-tracker run (same product, same researcher, same delegation policy) declared three (OBS-20260710-036).

## Interpretation

Control generation is run- or project-contingent, not a constant product affordance — the Tweaks *button* is always there, but whether decisions get parameterized behind it varies. This complicates the pre-registered hypothesis in an unexpected direction: the landing brief was maximally underspecified, so on the "unspecified dimensions become controls" reading (OBS-20260708-007) it should have produced *more* controls than P-FULL, and it produced none. A candidate reconciliation: this run's intake already elicited nearly the whole taste space (name, vibe, colors, type, sections, imagery, length), leaving little to hand back post-generation — i.e., intake and Tweaks are alternative outlets for the same ownership-return budget, and whichever fires first absorbs the decisions. But P-FULL's `accentColor` control overlapped its own intake question (green tone), so the outlets are not strictly exclusive. With n=2 the honest statement is: the control inventory varies 3↔0 across domains, and no registered rule predicts which. Alternatives: landing pages may be treated as static documents (fewer behavioral parameters to expose); or control generation is simply high-variance, like the token layer (OBS-20260709-028).

## Evidence

- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-tweak.png`
- `evidence/EXP-20260707-004-slider-comment-ownership/landing-page-Millbrook Coffee Landing.html` (no `data-props`)
- `evidence/EXP-20260707-004-slider-comment-ownership/p-full-Habit Tracker - standalone.html` (contrast: three declarations)

## Confidence and limitations

High for the zero-controls fact (UI and code agree). The contingency interpretation rests on two runs in two domains; domain and run-variance are fully confounded until the dashboard run and/or a repeat landing run.

## Follow-up

Project 3 (dashboard) is the natural discriminator: dashboards are parameter-rich, so zero controls there would point to run variance; a rich panel would point to domain-dependence.
