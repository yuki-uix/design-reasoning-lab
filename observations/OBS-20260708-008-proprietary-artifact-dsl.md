---
id: OBS-20260708-008-proprietary-artifact-dsl
experiment: EXP-20260707-001-ambiguity-ladder
timestamp: 2026-07-08T00:30:00+08:00
observer: yuki
---

# The artifact is a proprietary template DSL with a dedicated runtime, not plain HTML

## Fact

All five exported artifacts are bundler-wrapped `.dc.html` files. The extracted templates share one structure: an `<x-dc>` root; declarative directives `<sc-if value="{{ … }}">` and `<sc-for list="{{ … }}" as="…">`; `{{ }}` data bindings; and a separate `<script type="text/x-dc">` logic block defining a `class Component extends DCLogic` with `state` and `setState`, holding structured data models (for example habits as `{id, name, days, time, reminderOn, streak, week}`). Each bundle ships a runtime JS whose header reads "GENERATED from dc-runtime/src/*.ts — do not edit. Rebuild with `cd dc-runtime && bun run build`", plus self-hosted WOFF2 font subsets. Directive counts across the five templates: 9–15 `sc-if`, 5–7 `sc-for`.

## Interpretation

Claude Design generates into its own intermediate artifact format — view template, state, and logic separated — executed by a purpose-built runtime. Together with the named intake variables (OBS-20260708-002) and declared tweak variables (OBS-20260708-007), the artifact format itself is the strongest observed candidate for the design intermediate representation of RQ-002: parameterization runs from intake through state bindings to runtime controls. Alternative: the format may exist for engineering reasons (sandboxing, sync with Claude Code) rather than as a design representation per se; these are not mutually exclusive.

## Evidence

- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/app.html`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/200c92cc-5458-42d3-95ea-25b3b6b627da`
- `evidence/EXP-20260707-002-artifact-code-autopsy/derived/p-vague-app.html`

## Confidence and limitations

High confidence; format identical across all five runs. The export path could differ from the internal working format.

## Follow-up

Compare against the file Claude Code receives via hand-off (EXP-20260707-002 procedure step 2).
