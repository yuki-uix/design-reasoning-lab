# Tool-Surface Analysis Protocol v1

## Purpose

For open-source products, treat the agent-facing interface — tool definitions, schemas, and system prompts in the source — as evidence of how the product decomposes design decisions, while keeping this evidence class strictly separate from behavioral evidence.

## Scope

Applies only where the source is inspectable. A tool definition is a fact about the *interface*; it says nothing about runtime usage. Claims of the form "the agent decides X via tool Y" require behavioral evidence (tool-call traces or observed runs) and remain hypotheses until then.

## Preparation

1. Pin the repository and commit hash; record the release/tag and access date.
2. Identify where tool definitions, schemas, and prompts live; record file paths.
3. Note the product version the pinned source corresponds to, if determinable.

## Procedure

1. Extract tool names, parameter schemas, and description strings verbatim. Do not paraphrase in the evidence record.
2. Classify each tool by decision altitude (e.g., document structure, layout, style values, tokens/variables, content) using stated criteria.
3. Record what is *absent* as carefully as what is present — decisions with no corresponding tool are candidates for "resolved by the model, not the product."
4. For each static claim worth keeping, register a behavioral cross-check that could confirm or falsify it.

## Analysis rule

Source evidence and behavioral evidence get separate manifest sections and separate observation records. An observation may cite both, but must label which class each cited item belongs to. Never infer runtime behavior from definitions alone.

## Minimum reproducibility record

- Repository URL, commit hash, tag, access date
- File paths and extraction method
- Verbatim extracted definitions (or archival copies)
- Classification criteria used
- Registered behavioral cross-checks
