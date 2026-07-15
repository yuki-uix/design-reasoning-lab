---
id: EXP-20260715-008-doctrine-on-off-contrast
product: openpencil
date: 2026-07-15
researcher: yuki (runs), claude (pre-registration, analysis)
status: planned
protocol: protocols/behavioral-observation-v1.md
research_question: research/questions/RQ-001-intent-to-artifact.md
---

# Doctrine on/off: what do 572 lines of design instructions actually buy?

## Objective

Measure what OpenPencil's sidebar design doctrine changes in agent behavior, by comparing the **same harness, model, and tool surface** with the doctrine present versus absent. [EXP-007](EXP-20260714-007-tool-surface-inventory.md) established that the two conditions below differ *only* in the 572-line prompt:

- **Condition ON — sidebar ACP**: Claude Code connected as a desktop-agent provider in the OpenPencil sidebar. Receives the full doctrine prepended to the first user message, and the OpenPencil MCP server (full ALL_TOOLS surface) auto-registered ([OBS-045](../../observations/OBS-20260715-045-acp-agents-get-doctrine-in-first-message.md)).
- **Condition OFF — terminal MCP**: the same Claude Code installation in a terminal with the same OpenPencil MCP server configured. Same 110-tool surface, zero doctrine ([OBS-048](../../observations/OBS-20260715-048-mcp-channel-ships-tools-without-doctrine.md)).

This isolates product doctrine from model priors — the attribution the Claude Design case study could never make, because there product and model always varied together.

## Research question

Primary: [RQ-001](../../research/questions/RQ-001-intent-to-artifact.md) — which parts of intent-to-artifact behavior are product policy versus model prior. Direct behavioral cross-check for OBS-044/048/050; secondary seed for [RQ-004](../../research/questions/RQ-004-explicit-representation.md) via the non-manipulated variable-usage measure.

## Pre-registration

### Controlled variables

- Harness: same Claude Code installation and version, recorded per run; no project CLAUDE.md in the working directory; no extra skills invoked; default permission mode.
- Model: same model ID in both conditions, recorded per run.
- Product: same OpenPencil app instance/version, recorded per run (note: installed app version may differ from EXP-007's pinned source commit — record both, treat drift as a limitation).
- Document: fresh empty document per run.
- Brief, verbatim, identical in all runs: **"Design a landing page for a small specialty coffee roaster called Driftwood Coffee. Warm, calm, credible. Desktop width."** (Styled one-liner: enough ambiguity for priors to show, brand name supplied so identity elicitation is not a confound; comparable in spirit to the EXP-001/005 styled rungs.)
- The researcher sends only the brief and answers any agent question with "Use your best judgment." — logged verbatim.

### Independent variables

- Doctrine: ON (sidebar ACP) vs OFF (terminal MCP). One factor, two levels.

### Dependent measures

**Process measures** (from transcripts/tool logs):

1. Tool-call sequence per run: ordered list of tool names.
2. Phase structure: presence of (a) a text plan before first mutating call, (b) a skeleton-then-fill pattern (placeholder blocks later replaced via `replace_id` or equivalent), scored by stated rules below.
3. `describe` discipline: fraction of `render` calls followed by a `describe` before the next mutating call.
4. Lint response: for each issue reported in `describe` output, whether a subsequent call addresses it, split by severity (tests whether the lint alone — the only cross-channel opinion — drives fixes without the doctrine's policy).
5. Elicitation: any question asked before first mutating call (count and content).

**Artifact measures** (from exported `.pen` + `get_jsx` of the final tree):

6. **Doctrine fingerprint hexes**: presence of the prompt's exact text-hierarchy values `#111827`, `#6B7280`, `#9CA3AF` (or `#FFFFFF99`/`#FFFFFF66` on dark) in text colors.
7. 4px-grid adherence: proportion of `gap`/padding values divisible by 4.
8. Radius relationship: for nested rounded pairs, proportion consistent with "inner = outer − padding" (±2px), and card/button radii inside the doctrine's stated ranges.
9. Type scale: count of distinct text sizes; proportion inside the doctrine's bands (Display 32–40, H1 24–28, H2 20–22, H3 17–18, Body 14–15, Caption 12–13, Overline 10–11); count of distinct weights.
10. Variable usage (secondary, non-manipulated): any `create_variable`/`bind_variable` calls or bindings in the export (both conditions have the tools; doctrine never mentions them).

### Scoring rules (fixed before runs)

- "Text plan" = an assistant message ≥3 numbered/bulleted layout items before any mutating tool call.
- "Skeleton pattern" = ≥2 nodes created with placeholder-gray fills (`#E2E8F0`/`#CBD5E1` or within ΔE<10) later replaced or filled.
- A `describe` "addresses" an issue if a subsequent mutating call targets the flagged node or property before run end.
- All proportions computed per run, then reported per condition; with n=2 per cell, report raw values only — no statistics, no aggregation language beyond "both/one/neither run".

### Runs

Four runs: ON×2, OFF×2, alternating order (ON, OFF, ON, OFF), fresh document and fresh session each time, same day if possible.

### Initial state

OpenPencil desktop app running, MCP server enabled on default port; Claude Code authenticated; empty new document; screen recording on; terminal condition run from an empty working directory (no CLAUDE.md, no `.claude/`).

## Procedure

1. Record versions: OpenPencil app, Claude Code, model ID, OS. Start screen capture.
2. Per run: create fresh document → send the brief verbatim → answer any question with "Use your best judgment." → let the run finish (no intervention) → export the document (`.pen` copy) and capture `get_jsx` of the root → save the full transcript (ACP: sidebar chat log + Claude Code session file; terminal: session transcript) → screenshot the undo history panel.
3. Deposit raw artifacts under `evidence/EXP-20260715-008-doctrine-on-off-contrast/` per run (`run-1-on/`, `run-2-off/`, …), never overwriting.
4. Claude extracts the dependent measures per the scoring rules; yuki spot-checks scoring against raw transcripts.

## Pre-registered hypotheses

- **H1 (doctrine drives fingerprints)**: ON runs show ≥1 fingerprint hex and skeleton phasing; OFF runs show neither. Falsified if OFF runs match ON on measures 6 and 2b, which would mean the "doctrine" mostly restates model priors.
- **H2 (lint travels, policy doesn't)**: OFF runs that call `describe` fix error-level issues but show lower warning-fix rates than ON runs (the severity *policy* lives only in the doctrine). Falsified if OFF warning-fix behavior matches ON.
- **H3 (token layer ignored by default)**: no run in either condition creates or binds a variable. Any variable use falsifies and directly seeds RQ-004.

## Deviations

None yet.

## Observations

To be linked after the runs.

## Evidence

See `evidence/EXP-20260715-008-doctrine-on-off-contrast/manifest.md`.

## Hypothesis

See pre-registered hypotheses; adjudicated after the runs.

## Conclusion

To be written after the run.

## Limitations

- n=2 per condition: fingerprint-style binary measures are informative at this n; proportion measures are directional only.
- Claude Code's own system prompt and priors are present in *both* conditions — this experiment attributes differences to the doctrine, not similarities to the model.
- The ACP condition's permission mediation differs from the terminal's; if permission prompts alter pacing or tool choice, that is a confound to log, not controllable here.
- Installed app version vs EXP-007's pinned commit may drift; the doctrine text should be re-verified against the installed version (`get_jsx`/prompt capture if visible, else source at the matching tag).

## Next experiment

Depending on adjudication: token-layer usage probe with explicit nudge (RQ-004), or brand-vacuum elicitation probe over MCP (FND-001 three-product comparison).
