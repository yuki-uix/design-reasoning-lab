# The Negotiation Is the Product

*What six experiments reveal about how an AI design tool thinks*

**Status:** Draft for publication, written 2026-07-10. This article is a narrative synthesis of the lab's first case study, [Claude Design (Research Preview): how it thinks](../research/case-studies/claude-design.md). Every empirical claim links to a finding or observation in this repository; the case study and the four findings ([FND-001](../findings/FND-001-elicitation-is-product-policy.md)–[FND-004](../findings/FND-004-ownership-mechanism-stack.md)) carry the full evidence chains, conflicting evidence, and confidence levels. All runs took place 2026-07-07 to 2026-07-10 on a research preview; the product may have changed by the time you read this.

---

## Two tools, one designer

Here is an experiment you can run yourself. Take a reasonably specified design brief — say, a habit tracker for busy parents, calm and warm, soft greens, rounded type — and give it to two different AI design tools. I gave it to Claude Design (Anthropic's research preview) and to v0 (Vercel's generator), repeatedly, across accounts and sessions, over four days.

The artifacts that came back were not merely similar in mood. They shared a design language specific enough to name: a warm off-white base clustered around hue 90–95, a sage green near hue 150, a rounded humanist sans from the same short list of fonts ([OBS-021](../observations/OBS-20260709-021-cross-product-design-language-convergence.md)). Both invented a brand to fill the vacuum the brief left open — v0 called it "Little Wins" on two separate accounts ([OBS-031](../observations/OBS-20260709-031-v0-rederives-same-brand-across-sessions.md), [OBS-034](../observations/OBS-20260709-034-same-brief-new-account-different-brand.md)). Both populated the tracker with the same starter habits. Two of those habits — "Read to the kids" and "Drink a glass of water" — appear *verbatim, character for character,* in both products' exported code ([OBS-037](../observations/OBS-20260710-037-cross-product-verbatim-seed-convergence.md)).

Two competing products, different companies, different interfaces, and somewhere under the hood, apparently, the same designer.

This should change what questions we ask about AI design tools. The usual question — *which one generates better designs?* — turns out to have a boring answer for this pair: given the same brief, they largely generate the *same* design. The interesting differences are all in what happens around the artifact: what the tool asks before it builds, which decisions it hands back to you, which it makes silently, and what happens when you take the controls yourself.

Design Reasoning Lab spent its first six experiments mapping exactly that for Claude Design, with v0 as the contrast case: an ambiguity ladder ([EXP-001](../experiments/claude-design/EXP-20260707-001-ambiguity-ladder.md)), a code autopsy of the exported artifacts ([EXP-002](../experiments/claude-design/EXP-20260707-002-artifact-code-autopsy.md)), a cross-mode consistency test ([EXP-003](../experiments/claude-design/EXP-20260707-003-cross-mode-consistency.md)), an ownership-mechanism probe ([EXP-004](../experiments/claude-design/EXP-20260707-004-slider-comment-ownership.md)), and two v0 contrast runs ([EXP-005](../experiments/v0/EXP-20260707-005-ambiguity-ladder-v0.md), [EXP-006](../experiments/v0/EXP-20260709-006-little-wins-cross-account.md)). Each was pre-registered before running; several of our early hypotheses were falsified by replication and are recorded as such. What follows is the story the surviving evidence tells.

## It always asks first — but not because it's confused

The most visible behavioral difference between the two products appears before a single pixel exists. Every prototype request to Claude Design — every one, across every experiment — produced a structured intake form before generation: "A few quick questions before I build," six to eight questions, with "Decide for me" and free-text delegation available as first-class answers ([OBS-001](../observations/OBS-20260708-001-structured-intake-form.md)).

The natural assumption is that this is an ambiguity response: the tool asks when it doesn't know enough. We built an experiment to test exactly that — an ambiguity ladder running from a fully specified brief down to a five-word prompt — and the assumption is wrong on both ends.

Claude Design asked at *every* rung, including the fully specified brief, with an almost flat question budget: 7, 6, 8, 8, 8 questions across the five conditions ([FND-001](../findings/FND-001-elicitation-is-product-policy.md)). v0 asked *nothing* at any rung, including the five-word prompt, where it invented an entire design direction and described the request as "clear" ([OBS-032](../observations/OBS-20260709-032-v0-vague-zero-questions-hypothesis-test.md)). Nine runs, two products, zero variation with ambiguity. Whether an AI design tool asks before generating is not a property of your brief. It is a policy decision made by the product team, as fixed as the color of the send button.

What ambiguity *does* modulate — on the product that asks at all — is the altitude of the questions. A fully specified brief draws sub-decision questions: which shade of green, how exactly to visualize a streak. A five-word brief draws foundational ones: what form factor, what overall vibe, what model of "habit" ([OBS-003](../observations/OBS-20260708-003-question-count-flat-altitude-varies.md)). The budget is constant; the spend moves up and down the decision hierarchy. It behaves less like a confused collaborator asking what it doesn't know, and more like a product with a fixed elicitation slot, filling it with whatever decisions currently sit at the frontier of uncertainty.

## What it asks about: the cost of being wrong

If the question budget is fixed, the interesting signal is in what gets asked versus what gets silently assumed. Here the corpus contains one almost surgical contrast.

On the same day, we asked Claude Design for two artifacts: a landing page for a coffee roastery, and an e-commerce analytics dashboard. For the roastery, the intake's very first question was the roaster's *name* — "or should I make one up?" For the dashboard, no identity question appeared at all; the artifact shipped with a silently invented store, a fictional user persona, and a full product catalog nobody asked for ([OBS-039](../observations/OBS-20260710-039-brand-vacuum-elicited-then-invented.md), [OBS-041](../observations/OBS-20260710-041-identity-vacuum-ask-or-assume-by-domain.md)).

The missing fact was the same in both cases: *whose business is this?* What differed is what the artifact would cost if the tool guessed wrong. A landing page wearing the wrong brand name is broken in a way its owner cannot ignore; a demo dashboard for "Acme Store" is fine, because the invented identity is set dressing. Our working interpretation — moderate confidence, one contrasting pair — is that the ask/assume boundary is drawn per decision by *cost-of-error to the artifact*, not by any general theory of what briefs should contain.

The negative space supports this. Across every run in the corpus, Claude Design never once asked directly about audience — the classic first question of a human design engagement ([OBS-004](../observations/OBS-20260708-004-audience-removed-silent-default.md)). It approaches audience only through concrete proxies, like what sample data to display. Abstract brief-level facts don't make an artifact visibly wrong, so they never make the intake form.

## Where the design comes from when nobody decides

So a fixed budget of questions gets asked, you answer some, delegate others, and the brief still leaves a hundred decisions open. Who makes those? The opening anecdote already gave the answer: they are filled from priors — and the priors are evidently *shared* across products, which is why two competitors keep producing the same tracker.

The more interesting result is that this fill has structure. It is layered, and the layers have measurably different stability ([FND-003](../findings/FND-003-priors-fill-vacuums-in-layers.md)).

At the bottom, near-deterministic: the styled brief maps to the same design language every time, on both products — the warm base, the sage green, the rounded sans, the gentle copy register, the same generic self-care starter habits when no audience is specified. This layer barely varies across runs, accounts, or vendors.

In the middle, family-stable but value-sampled: concrete token values cluster as near-misses. The green is always *a* sage green; it is never the same sage green twice across fresh sessions ([OBS-027](../observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md)).

At the top, sampled per run: names. Brands, personas, taglines. Claude Design has produced a persona named "Maya" twice; v0 named the product "Little Wins" on two different accounts. Small pools, drawn from independently each time.

And the invented specifics are locally plausible without being globally checked. One run's coffee roastery placed itself in San Francisco's Mission District — and printed an Oakland street address in the footer ([OBS-039](../observations/OBS-20260710-039-brand-vacuum-elicited-then-invented.md)). Each detail sampled well; nothing reconciled them. That is a decent one-image summary of what prior-fill is: coherent texture, no referent.

For working designers, the layering has a practical reading. What you don't specify doesn't get decided randomly, and mostly doesn't get decided *by you being asked* — it gets decided by the training distribution, identically in whichever tool you buy. Your brief's real function is to push decisions out of the prior layers and into the layers you control.

## The tool that forgets everything except its taste

The layering also answers this lab's founding question about internal representation: when Claude Design designs, is there a *design* somewhere — a persistent representation between your intent and the artifact — or just text generating text?

We probed this from two directions. Across output modes within one session, consistency is real and startlingly literal: converting a prototype to a slide deck reused the prototype via an actual screenshot pipeline, and concrete values replicated exactly ([OBS-026](../observations/OBS-20260709-026-same-session-consistency-is-value-level.md)). Across *fresh sessions* with the identical brief, only the design-language family survives; every concrete value diverges ([OBS-027](../observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md)). And inside the exported artifacts, there is no authoritative layer to be found: repeated values have no single definition, a token system appears in some runs and not others, component decomposition follows the shape of the data rather than the design, and when you ask the agent to explain its design rationale, the explanation is generated after the artifact, not consulted before it ([OBS-022](../observations/OBS-20260709-022-no-single-definition-for-repeated-values.md)–[OBS-024](../observations/OBS-20260709-024-design-rationale-post-hoc-only.md), [OBS-028](../observations/OBS-20260709-028-token-layer-appears-run-contingently.md)).

The parsimonious model, which nothing in the behavioral record contradicts, is: **session context plus priors, and no persistent design representation at all** ([FND-002](../findings/FND-002-consistency-is-context-not-representation.md)). The consistency you experience within a session is the conversation remembering itself. The consistency you experience across sessions is the model's taste. There is no third thing. (One visible exception deserves note: deck mode emits a written plan before generating ([OBS-029](../observations/OBS-20260709-029-written-plan-artifact-appears-in-deck-mode.md)) — proof the product *can* externalize a plan, and a hint of where a real representation could someday live.)

This is a behavioral claim about a closed system — "no evidence of, and no explanatory need for," not "does not exist." But it has teeth. It predicts, correctly so far, that no design decision survives a new session unless you restate it. Whatever a "design system" means in an AI-native tool, in this research preview it is not a thing the tool keeps.

## The ownership stack

Everything so far describes decisions flowing away from you — into the intake, into priors. The last experiment mapped the mechanisms that flow decisions *back*, and this is where Claude Design stops resembling v0 entirely.

There is no single human/AI boundary. There is a stack of ownership-return mechanisms, firing at different times, at different altitudes, with different reliability ([FND-004](../findings/FND-004-ownership-mechanism-stack.md)):

**Before generation,** the intake form returns brief-level decisions — the ones the artifact can't afford to get wrong, as we saw — with delegation always available.

**After generation,** "Tweaks" controls parameterize some taste-level decisions into sliders and pickers on the artifact itself ([OBS-007](../observations/OBS-20260708-007-unspecified-dimensions-become-controls.md)). But contingently: three controls on one project, zero on the next two ([OBS-038](../observations/OBS-20260710-038-landing-page-zero-controls.md), [OBS-040](../observations/OBS-20260710-040-dashboard-zero-controls-inventory-complete.md)). And sometimes only nominally — one accent-color control changed less than it offered, its derived dark and light variants staying hardcoded ([OBS-036](../observations/OBS-20260710-036-tweaks-inventory-p-full.md)). Holding the control is not the same as holding the decision.

**Per request,** the feedback channel you choose allocates the final slice — specifically, who resolves *what you meant*. Ask in chat to "make the primary action more prominent," and the agent decides which element is the primary action; in our run it chose a different element than the human had in mind ([OBS-042](../observations/OBS-20260710-042-channel-determines-element-and-layer.md)). Drop an anchored comment on an element instead, and the product compiles your comment into an instruction bound to that exact DOM node — referent-resolution moves to you; execution stays with the agent. Edit the canvas directly, and the agent leaves the loop entirely.

That last rung has a sharp edge. When the human edits directly, nothing defends the artifact's own abstractions: in our run, saving a direct edit silently replaced a template binding with static values — on an element the user never touched ([OBS-043](../observations/OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists.md)). The moment you take full ownership, the product stops maintaining the structure that made the artifact more than pixels.

And one property holds across the entire stack: the transfer is frictionless and one-directional. In every observed interaction, the agent never asked for confirmation and never once defended a decision it had made. Whatever you ask for, you get. (The important caveat: our requests were low-stakes style changes. Nobody has yet asked it to violate an accessibility constraint. "Never defends" is untested exactly where defending would matter.)

The v0 contrast collapses this whole section: no intake, no controls, no comment affordance in any captured run. The only ownership a v0 user holds is editing the generated code afterward. Between these two products, decision-ownership surface — not design capability — is the actual differentiator.

## So what is an AI design tool?

Put the pieces together and the case study's one-line answer to "how does Claude Design think?" is: **it thinks like the same model everyone else uses, wrapped in a product that externalizes the negotiation over decision ownership.**

That sentence cuts both ways, and honesty requires both edges.

Read generously, Claude Design is a genuinely different theory of what an AI design tool is. v0's implicit theory is *vending machine*: brief in, artifact out, ambiguity resolved silently from priors, take it or edit the code. Claude Design's implicit theory is *negotiation*: every artifact begins with an explicit allocation of decisions between human and agent, some decisions come back as physical controls, and the feedback surface is differentiated by how much interpretive authority you want to retain. Those are product inventions, not model capabilities, and they are real — a v0 user has no equivalent of any of them.

Read skeptically, the negotiation is partly ceremonial. The question budget is fixed regardless of need. The controls fire one project in three. Delegating a decision routes it to the very same priors v0 consults silently — "Decide for me" and not being asked at all produce the same sage green. Some controls adjust less than they display. The negotiation surface is *sincere* at the load-bearing decisions (the roaster's name) and closer to theater at the margins.

Both readings are true simultaneously, and the tension between them is, we suspect, the actual design frontier for this product category. Anyone can bolt a questionnaire onto a model. The hard problem — visible in every seam this corpus documents — is making the negotiation *load-bearing all the way down*: questions that exist because the answer changes the artifact, controls that are wired to everything they claim, delegation that is distinguishable from silence, and an agent that can tell the difference between your taste and your mistake, and will only argue about the second.

## What this study cannot say

This is a four-day behavioral study of a research preview, with mostly one run per cell, one intent domain for the ladder (habit tracking), and priors probed only where they should be strongest (a calm-warm consumer brief). The two products run different, partly undisclosed models, so product-level and model-level explanations are confounded throughout; every claim here is pitched at the level of what a user experiences. Several discriminating experiments are registered and open: re-running the styled one-liner to resolve the controls contingency, repeated chat runs to test referent-resolution stability, a minimal reproduction of the canvas-edit binding loss, an off-distribution style brief where priors should be weakest, and a third product to separate "Claude Design is distinctive" from "v0 is distinctive."

The full evidence chain — raw exports, screenshots, un-bundled artifact code, forty-three atomic observations with fact and interpretation separated — is public in the [Design Reasoning Lab repository](https://github.com/yuki-uix/design-reasoning-lab). If you run any of the registered follow-ups, or falsify anything above, the lab accepts pull requests.

---

*Design Reasoning Lab studies how AI-native design tools interpret intent, make decisions, and collaborate with people — by reverse-engineering their behavior, not benchmarking their outputs. Claude Design is the first case study; Figma Make, Google Stitch, Lovable, and Cursor are candidates for the next.*
