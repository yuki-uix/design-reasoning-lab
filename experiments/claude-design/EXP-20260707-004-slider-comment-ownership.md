---
id: EXP-20260707-004-slider-comment-ownership
product: claude-design
date: 2026-07-07
researcher: yuki
status: completed
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-003-decision-ownership.md
---

# Sliders and comments: which decisions the agent hands back

## Objective

Part 1: inventory which design decisions Claude Design parameterizes into user-facing controls (sliders/variables) versus fixes silently in the artifact. Part 2: compare agent behavior when the same change request arrives through chat, element-level comment, and direct canvas edit.

## Research question

[RQ-003: How is decision ownership allocated and transferred?](../../research/questions/RQ-003-decision-ownership.md)

## Pre-registration

### Controlled variables

- Part 1 uses three fresh projects from three registered prompts: the P-FULL habit tracker (EXP-001), a landing page ("Design a landing page for a local independent coffee roaster."), and a dashboard ("Design an analytics dashboard for a small e-commerce team.").
- Part 2 uses the P-FULL habit tracker project only, and the identical change request delivered through each channel: "Make the primary action stand out more."
- Each Part 2 channel test starts from the same saved pre-change state so the three deliveries are comparable.

### Independent variables

- Part 1: project domain (three levels).
- Part 2: feedback channel — chat message / element comment on the primary button / direct canvas edit (if the UI permits an equivalent manual change).

### Dependent measures

- Part 1: complete list of controls the agent creates (sliders, variable editors), the decision each control parameterizes, its offered range, and its default; list of comparable decisions that received no control.
- Part 2: scope of the resulting change (target element only, siblings, or global restyle), whether the agent asks for confirmation, latency, and whether the response references the specific element.
- Whether the agent ever defends or argues for a decision instead of complying.

### Initial state

Fresh sessions per project; no design system connected.

## Procedure

1. Part 1: generate each of the three projects; without requesting any controls, record every control the agent surfaces on its own, with screenshots, into `evidence/EXP-20260707-004-slider-comment-ownership/`.
2. Classify each surfaced control's decision by category (color, typography, spacing, density, tone, layout, content) as facts.
3. Part 2: from the saved habit-tracker state, deliver the registered change request via chat; capture the diff (before/after screenshots and code when exportable). Restore state.
4. Repeat via element comment on the primary button. Restore state.
5. Repeat via direct canvas edit where the UI allows it.
6. Record scope, confirmations, and any agent-initiated follow-up per channel.

## Deviations

1. Part 1 (P-FULL habit tracker 2026-07-09 evening; landing page and dashboard 2026-07-10 afternoon) spans two dates rather than one; comparisons should note the possible version drift. Part 2 ran 2026-07-10 afternoon.
2. Part 2's substrate is the EXP-001 P-FULL project ("Habit tracker for parents"), not the Part 1 rerun project — consistent with the registered "the P-FULL habit tracker (EXP-001)", but noted because the two projects differ (the Part 1 rerun carries the Tweaks controls). State restoration used project duplication (three copies, one per channel), verified byte-identical by normalized template diff.
3. The registered latency measure was not captured for Part 2 (no "Worked for…" counters in the captures).
4. The direct-canvas-edit channel used the Edit panel's Simple properties (border + shadow on the FAB) as the equivalent manual change.
5. The evidence working folders were researcher-named `evidence/0709-exp-03/` (a mislabel for this EXP-004 run) and `evidence/0710/`; reorganized on ingestion, see manifest Transformations.
6. The process logs were not fully expanded before capture (collapsed "Refining logic ×3" / "Refining design ×8" groups); the control inventories are unaffected because they are confirmed in the exports' code.

## Observations

- [OBS-20260710-036-tweaks-inventory-p-full](../../observations/OBS-20260710-036-tweaks-inventory-p-full.md)
- [OBS-20260710-037-cross-product-verbatim-seed-convergence](../../observations/OBS-20260710-037-cross-product-verbatim-seed-convergence.md)
- [OBS-20260710-038-landing-page-zero-controls](../../observations/OBS-20260710-038-landing-page-zero-controls.md)
- [OBS-20260710-039-brand-vacuum-elicited-then-invented](../../observations/OBS-20260710-039-brand-vacuum-elicited-then-invented.md)
- [OBS-20260710-040-dashboard-zero-controls-inventory-complete](../../observations/OBS-20260710-040-dashboard-zero-controls-inventory-complete.md)
- [OBS-20260710-041-identity-vacuum-ask-or-assume-by-domain](../../observations/OBS-20260710-041-identity-vacuum-ask-or-assume-by-domain.md)
- [OBS-20260710-042-channel-determines-element-and-layer](../../observations/OBS-20260710-042-channel-determines-element-and-layer.md)
- [OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists](../../observations/OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists.md)

## Part 1 tabulation (complete)

| Control | Section | Editor | Default | Range offered | Decision parameterized |
| --- | --- | --- | --- | --- | --- |
| `celebrations` | Behavior | boolean | on | on/off | check-off celebration (tone) |
| `userName` | Content | text | empty | free text | persona/greeting name |
| `accentColor` | Style | color enum | sage `#7C9873` | sage/blue/clay/purple (muted hues, incl. off-brief) | accent hue — partially wired (dark/light variants hardcoded sage) |

No control: typeface, spacing/density, streak-visualization style, screen structure, copy tone, seed content. Typeface and streak style were intake questions instead — in this run, intake and Tweaks parameterize mostly disjoint decision sets (`accentColor` is the partial overlap: its tone was an intake question, its hue came back as a control).

**Project 2 (coffee-roaster landing page): zero controls.** Tweaks opens a free-text "Describe a tweak…" box only; the export declares no tweakable variables (OBS-20260710-038). Its 8-question intake covered nearly the whole taste space instead (name, vibe, colors, type, sections, imagery, variations, length).

**Project 3 (e-commerce dashboard): zero controls** (OBS-20260710-040). Same free-text-only Tweaks, no `data-props` in the export; the intake (8 questions, including a native 1–3 layout-variations slider and a "Who's the primary viewer?" question, no identity question) again covered the taste space; the artifact silently invented "Sundial Goods" and persona "Jamie Ma — Ops Lead" (OBS-20260710-041).

**Part 1 interim outcome.** Inventory across domains: 3 / 0 / 0. The pre-registered hypothesis assumed controls reliably appear and asked which decisions they parameterize; the observed variable is whether they appear at all. Where they appeared (P-FULL only), the predicted taste/structure split held. Two candidate rules survive for the 3–0–0 pattern, currently indistinguishable: run-variance, or intake-absorption (the only controls-producing run is the only one whose brief pre-resolved the taste space, so intake never claimed it). Discriminating prediction registered in OBS-20260710-040: a one-liner domain re-run with a fully specified style clause should produce controls under intake-absorption.

## Part 2 tabulation

Same sentence ("Make the primary action stand out more."), three byte-identical project copies (verified by normalized template diff):

| Channel | Element changed | Layer | Scope | Confirmation asked | References element | Defends |
| --- | --- | --- | --- | --- | --- | --- |
| Chat | create-sheet Continue/"Add habit" button (agent-resolved) | logic (`primaryButtonStyle` + new hover const/binding) | single element + hover state | no | yes ("the 'Continue'/'Add habit' button in the create-habit sheet") | no |
| Element comment (on FAB) | the anchored FAB | template (inline style, coherent oklch idiom) | single element | no | yes ("the create button … against the nav bar") | no |
| Canvas edit | FAB (human-executed) | raw inline serialization (hex color, contradictory style string) | edited element + collateral binding loss on the sheet overlay | n/a | n/a | n/a |

Mechanism note: "Send to Claude" compiles a comment into a structured prompt carrying `data-comment-anchor`, React component, DOM path, and selector (OBS-20260710-042); the anchor attribute persists in exported code, and the canvas edit silently replaced `{{ sheetOverlayStyle }}` with static values (OBS-20260710-043).

## Evidence

See `evidence/EXP-20260707-004-slider-comment-ownership/manifest.md`.

## Hypothesis

Controls are created for continuous, taste-dominant decisions (color, density, size) and not for structural or content decisions — that is, the agent returns ownership where human preference is decisive and error is cheap. For Part 2, element comments produce narrower-scoped changes than chat for the same request. Falsified if controls also parameterize structural/content decisions, or if channel has no effect on change scope.

### Outcome

Part 1: neither confirmed nor cleanly falsified — the hypothesis's premise failed. Controls do not reliably appear (3/0/0 across domains); where they appeared, the taste/structure split held exactly (no structural or content-architecture control; OBS-20260710-036). Part 2: the scope prediction is falsified — both agent channels produced equally narrow single-element changes — but "channel has no effect" is also falsified: the channel decided *which element* changed and *which layer* absorbed the edit (OBS-20260710-042), an effect the pre-registration did not anticipate.

## Conclusion

Supported by evidence: ownership returns to the human through at least three mechanisms with different scopes — intake questions (pre-generation, brief-level), Tweaks controls (post-generation, taste-level, contingent: 3/0/0 and partially wired where present), and feedback channels (post-generation, per-request). The channel comparison resolves into an ownership matrix: chat = agent resolves the referent and executes in the logic layer; anchored comment = human resolves the referent via compiled DOM metadata, agent executes idiomatically; canvas edit = human does both, at the cost of idiom coherence and, in this run, a silently severed template binding on an untouched element (OBS-20260710-043). The agent never asked for confirmation and never defended a prior decision in any channel. Boundary refinements beyond the registration: the identity vacuum is asked-about or silently filled depending on how identity-central the artifact is (OBS-20260710-041), and elicitation/controls appear to be alternative outlets rather than one mechanism (open discriminator registered in OBS-20260710-040). Confidence: high for the per-run facts (all inventories and diffs code-confirmed); low-to-moderate for every cross-run rule (n=1 per cell throughout).

## Limitations

One run per domain and per channel; latency unmeasured in Part 2; Part 1 spans two dates on a research-preview product; the two zero-control runs are also the two one-sentence briefs (brief-specificity and domain confounded); the chat channel's element resolution may be steered by the artifact's internal `primaryAction` naming; the canvas-edit binding loss cannot be attributed between editor serialization and stray interaction from the captures alone.

## Next experiment

Three registered discriminators, in value order: (1) a one-liner domain re-run with a fully specified style clause — controls appearing would support intake-absorption over run-variance (OBS-20260710-040); (2) chat channel ×3 on fresh duplicates to test referent-resolution stability (OBS-20260710-042); (3) the minimal canvas-edit reproduction to isolate serialization width (OBS-20260710-043). The original follow-up stands: explicitly request a slider for a structural decision ("number of habits shown") and observe whether the boundary is defended.
