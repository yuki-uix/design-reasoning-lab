---
id: EXP-20260709-006-little-wins-cross-account
product: v0
date: 2026-07-09
researcher: yuki
status: completed
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-001-intent-to-artifact.md
---

# Does "Little Wins" follow the brief across accounts?

## Objective

Single-variable follow-up to EXP-20260707-005. Both styled runs on account 1 (P-FULL, P-NO-AUDIENCE) produced the same invented brand "Little Wins" across fresh sessions (OBS-20260709-031), and the unstyled P-VAGUE run on account 2 produced "Cadence" instead (OBS-20260709-033) — but that comparison changed the prompt and the account at once. This experiment replays the P-FULL prompt verbatim on account 2, holding the brief constant and varying only the account, to separate "Little Wins is a stored brief-family prior" from "Little Wins was carried by account-level context".

## Research question

[RQ-001: From intent to artifact](../../research/questions/RQ-001-intent-to-artifact.md)

## Pre-registration

### Controlled variables

- Prompt: the EXP-001/EXP-005 P-FULL prompt, byte-identical, submitted as the opening message of a fresh chat.
- Same product surface (v0.app Drafts, no connected repository or design system), same day as the P-VAGUE run.

### Independent variables

- Account: the second personal account ("kyisx"), on which no styled habit-tracker brief has ever been run.

### Dependent measures

- Primary: the invented brand identity (name in artifact header, `app/layout.tsx` metadata, summary prose).
- Secondary, for the replication record: questions before generation; persona invention; design tokens; seed-habit content; time to artifact; self-QA behavior.

### Predictions (stated before the run)

- If the brand is a stored brief-family prior (prior-recall), "Little Wins" reappears on the new account.
- If the brand was carried by account-level memory or context, it does not reappear.

### Initial state

Fresh chat on account 2. The account's history contains the EXP-005 P-VAGUE run; it contains no styled run of this brief family.

## Procedure

1. Open a fresh chat on account 2, submit the P-FULL prompt verbatim, answer any clarifying question with "Use your best judgment."
2. Let generation complete; capture conversation and output, download the code export.
3. Compare brand, tokens, seeds, and persona against the two account-1 exports.

## Deviations

1. This document was written after the run. The design and both predictions were stated in the session conversation before the run was executed; registration-before-run discipline was broken by the run happening opportunistically against expiring trial credits.
2. "Fresh session" means a fresh chat, not a pristine account: one earlier chat (the EXP-005 P-VAGUE run) existed on account 2, symmetric with account 1, whose second styled run also followed an earlier chat.
3. The middle of the process log was not captured (opening turn and tail only).
4. Evidence was captured into a working folder `evidence/0709/` and reorganized on ingestion; see manifest Transformations.

## Observations

- [OBS-20260709-034-same-brief-new-account-different-brand](../../observations/OBS-20260709-034-same-brief-new-account-different-brand.md)
- [OBS-20260709-035-p-full-replication-stable-and-unstable-layers](../../observations/OBS-20260709-035-p-full-replication-stable-and-unstable-layers.md)

## Evidence

See `evidence/EXP-20260709-006-little-wins-cross-account/manifest.md`.

## Hypothesis

See Predictions above; the two branches are exhaustive only if brand invention is deterministic given (brief, account). A third possibility — per-session sampling from a small brief-conditioned identity pool — is consistent with either outcome and cannot be eliminated by this single run.

### Outcome

The brand did not reappear: the account-2 artifact is "Rooted" ("Rooted · Gentle habit tracking"), not "Little Wins" (OBS-20260709-034). The deterministic prior-recall branch is falsified; the account-memory branch is supported but not proven, since per-session sampling from an identity pool also fits. What is deterministic-looking is one layer down: the tagline "Gentle habit tracking" recurred verbatim, along with Nunito, near-miss oklch tokens (third clustering of the same values), near-identical seed habits (two verbatim), and the warm coaxing copy register.

## Conclusion

EXP-005's conclusion over-claimed on one sentence: "Little Wins" is not a stored brief-family → name mapping. The stable prior is the *identity family* — tagline, typeface, palette, seed content, register — while the name itself varies across accounts (and its recurrence within account 1 is best explained by account-level carryover, or chance over a small pool). The name is the only layer of v0's invented identity that behaves stochastically; everything beneath it replicated for the third time. Elicitation behavior also replicated: zero questions on the second P-FULL run (OBS-20260709-035), making v0's ladder record 4-for-4 zero-question runs. Persona invention did not replicate ("Riley" has no counterpart), demoting it from a P-FULL behavior to run-to-run variance, as OBS-20260709-017 already flagged.

## Limitations

n=1 per (brief, account) cell; account 2's history contained one unstyled run, so pristine-account behavior is still unobserved; the stochastic-pool alternative would need several same-account replications to separate from account memory; trial credits are exhausted, so no further v0 runs are possible on either account.

## Next experiment

Unchanged from EXP-005: repeat the ladder's endpoints on a second contrast product (Figma Make or Lovable). If more v0 access becomes available, three P-FULL runs on one account would estimate the name pool's size and settle account-memory vs sampling.
