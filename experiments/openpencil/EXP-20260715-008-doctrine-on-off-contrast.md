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

Measure what OpenPencil's sidebar design doctrine changes in agent behavior, by comparing the same harness and model across the two channel configurations whose **only prompt-layer difference at the OpenPencil boundary** is the doctrine ([EXP-007](EXP-20260714-007-tool-surface-inventory.md)):

- **Condition ON — sidebar ACP**: Claude Code connected as a desktop-agent provider in the OpenPencil sidebar. Receives the full doctrine prepended to the first user message, with the OpenPencil MCP server auto-registered over HTTP ([OBS-045](../../observations/OBS-20260715-045-acp-agents-get-doctrine-in-first-message.md)).
- **Condition OFF — terminal MCP**: the same Claude Code installation in a terminal with the OpenPencil MCP server configured. Shared tool registry, zero doctrine ([OBS-048](../../observations/OBS-20260715-048-mcp-channel-ships-tools-without-doctrine.md)).

**The independent variable is the full channel configuration, not the doctrine alone.** The conditions also differ in plumbing: ACP bootstrap vs terminal launch, HTTP vs configured transport, permission mediation, and possibly the advertised tool list (`eval` gating). These are recorded per run (see controls) and handled by the attribution rule: only differences on *doctrine-predicted* measures (fingerprints the doctrine text explicitly prescribes) are attributed to the doctrine; differences on non-predicted measures (pacing, tool choice among equivalents, permission-driven pauses) are attributed to the channel configuration and reported as such. Within that rule, the design still buys the attribution the Claude Design case study could never make — product instruction vs model prior, with harness and model held constant.

## Research question

Primary: [RQ-001](../../research/questions/RQ-001-intent-to-artifact.md) — which parts of intent-to-artifact behavior are product policy versus model prior. Direct behavioral cross-check for OBS-044/048/050; secondary seed for [RQ-004](../../research/questions/RQ-004-explicit-representation.md) via the non-manipulated variable-usage measure.

## Pre-registration

### Controlled variables

- Harness: same Claude Code installation and version, recorded per run; no project CLAUDE.md in the working directory (both conditions; for ON, the ACP working directory is recorded and checked for CLAUDE.md/`.claude/`); no user-level CLAUDE.md content changes between runs (file hash recorded once); no extra skills invoked; default permission mode in both conditions.
- Channel plumbing, recorded per run rather than assumed equal: ACP bootstrap (how the sidebar spawns Claude Code — command line from process list or app logs where visible), MCP transport type (ON: HTTP `127.0.0.1:7600/mcp`; OFF: the transport configured in `claude mcp` settings, recorded verbatim), and every permission prompt with its resolution (logged with timestamps from the recording).
- **Tool-surface parity check (gate):** at the start of each run, before the brief, capture the advertised MCP tool list (from the Claude Code session file's tool definitions; fallback: ask `/mcp` or list tools, captured in transcript). `eval` gating (`enableEval`, default off on stdio per EXP-007) means the lists may differ between conditions. Adjudication gate: measures are compared only over the intersection of advertised tools; if any tool *used* in a run is outside the other condition's advertised list, that run's affected measures are flagged and the discrepancy reported in Deviations. The "same tool surface" claim is replaced by this recorded parity check.
- Model: same model ID in both conditions, recorded per run.
- Product: same OpenPencil app instance/version, recorded per run (note: installed app version may differ from EXP-007's pinned source commit — record both, treat drift as a limitation; re-verify the doctrine fingerprint hexes against the installed version's prompt before scoring, from source at the matching tag).
- Document: fresh empty document per run.
- Brief, verbatim, identical in all runs: **"Design a landing page for a small specialty coffee roaster called Driftwood Coffee. Warm, calm, credible. Desktop width."** (Styled one-liner: enough ambiguity for priors to show, brand name supplied so identity elicitation is not a confound; comparable in spirit to the EXP-001/005 styled rungs.)
- The researcher sends only the brief and answers any agent question with "Use your best judgment." — logged verbatim.

### Independent variables

- Channel configuration: ON (sidebar ACP, doctrine present) vs OFF (terminal MCP, doctrine absent). One factor, two levels; the doctrine is the manipulated component of interest, the remaining configuration differences are recorded controls under the attribution rule above.

### Dependent measures

**Process measures** (from transcripts/tool logs):

1. Tool-call sequence per run: ordered list of tool names.
2. Phase structure, two separately scored submeasures: **2a** — a text plan before the first mutating call; **2b** — a skeleton-then-fill pattern (placeholder blocks later replaced via `replace_id` or equivalent). Scored by stated rules below.
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
2. Per run: create fresh document → **capture the advertised MCP tool list (parity gate) before sending anything** → send the brief verbatim → answer any question with "Use your best judgment." → log every permission prompt and its resolution → let the run finish (no intervention) → export the document (`.pen` copy) and capture `get_jsx` of the root → save the full transcript (ACP: sidebar chat log + Claude Code session file; terminal: session transcript) → screenshot the undo history panel.
3. Deposit raw artifacts under `evidence/EXP-20260715-008-doctrine-on-off-contrast/` per run (`run-1-on/`, `run-2-off/`, …), never overwriting.
4. Claude extracts the dependent measures per the scoring rules; yuki spot-checks scoring against raw transcripts.

## Pre-registered hypotheses

- **H1 (doctrine drives fingerprints)** — adjudicated per component with the following decision table. Components: **F** = measure 6 (≥1 exact fingerprint hex in the artifact) and **S** = measure 2b (skeleton-then-fill pattern). Each component is scored per run (binary), then per condition: *present* = both runs, *absent* = neither run, *mixed* = one of two.

  | ON | OFF | Verdict for that component |
  | --- | --- | --- |
  | present | absent | **Doctrine effect** — H1 supported |
  | present | present | **Model prior** — H1 falsified (doctrine restates what the model does anyway) |
  | absent | absent | **Non-compliance** — H1 unsupported: the doctrine failed to produce its own fingerprint (distinct from falsification) |
  | absent | present | **Anomaly** — H1 falsified; flag for design review (suggests a channel effect opposite to doctrine) |
  | mixed (either side) | any | **Inconclusive** for that component — report raw per-run pattern, no attribution claim |

  H1 overall: *supported* if at least one component verdicts "doctrine effect" and none verdicts "model prior" or "anomaly"; *falsified* if any component verdicts "model prior" or "anomaly"; otherwise *unsupported/inconclusive* as reported per component.
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
- The manipulated variable is the channel configuration, not the doctrine in isolation; the attribution rule (doctrine-predicted measures only) reduces but does not eliminate the risk that plumbing differences (permission mediation, transport, bootstrap) produce a doctrine-predicted difference by coincidence. Permission interactions are logged per run for this reason.
- Installed app version vs EXP-007's pinned commit may drift; the doctrine text should be re-verified against the installed version (`get_jsx`/prompt capture if visible, else source at the matching tag).

## Next experiment

Depending on adjudication: token-layer usage probe with explicit nudge (RQ-004), or brand-vacuum elicitation probe over MCP (FND-001 three-product comparison).
