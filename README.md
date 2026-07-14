This repository studies AI-native design systems through behavioral reverse engineering. Rather than asking “What can this tool generate?”, it asks “How does this tool think?”

# Design Reasoning Lab

Design Reasoning Lab is a long-term, open-source research project for examining how AI-native design tools interpret intent, make decisions, and collaborate with people. It is not a product, prompt collection, benchmark leaderboard, or tutorial.

The current case study is **Claude Design (Research Preview)**, with **v0** as a contrast product. Scope is registered for **OpenPencil** and **Pencil.dev** ([`research/case-studies/`](research/case-studies/)). Future studies may include Figma Make, Google Stitch, Lovable, Cursor, and other AI-native design products.

## Why this repository exists

AI design tools are usually evaluated by their outputs. This lab studies the behavior that produces those outputs: the questions an agent asks, the decisions it makes or delegates, the representations it may construct, and how its reasoning changes across output modes.

Core research questions include:

- How does an agent transform vague intent into a design artifact?
- What information does it request from the human?
- Where is the decision boundary between human and AI?
- How are Prototype, Wireframe, Slides, Document, and Animation modes related?
- Is there an implicit representation between prompt and output?
- How does design reasoning differ across products?

## Methodology

The lab uses reproducible behavioral experiments. Each experiment defines its variables and procedure before recording results. Claims are kept at distinct epistemic levels:

| Level | Meaning |
| --- | --- |
| **Fact** | Directly observable behavior or artifact |
| **Interpretation** | A possible explanation of a fact |
| **Hypothesis** | A testable claim spanning one or more observations |
| **Conclusion** | A claim supported by stated evidence and limitations |

For example, “Claude asks about payment methods” is a fact. “Payment method may be treated as a business-strategy decision” is an interpretation. The two belong in separate fields.

## Experiment workflow

1. Register a question in [`research/questions/`](research/questions/).
2. Choose or write a protocol in [`protocols/`](protocols/).
3. Copy [`templates/experiment.md`](templates/experiment.md) into the relevant case-study folder.
4. Pre-register the objective, variables, and procedure.
5. Run the experiment and preserve raw artifacts under `evidence/<experiment-id>/`.
6. Record atomic observations in [`observations/`](observations/), separating fact from interpretation.
7. Update concepts in [`models/concepts/`](models/concepts/) and synthesize supported claims in [`findings/`](findings/).
8. Open a pull request that states the evidence, limitations, and epistemic status of every claim.

```text
question → protocol → experiment → evidence → observation → hypothesis → finding
```

## Repository map

| Path | Purpose |
| --- | --- |
| [`research/`](research/) | Research agenda, questions, and case-study scope |
| [`protocols/`](protocols/) | Reusable methods and controls |
| [`experiments/`](experiments/) | Experiment plans and run records, grouped by product |
| [`evidence/`](evidence/) | Immutable raw artifacts grouped by experiment ID |
| [`observations/`](observations/) | Atomic, evidence-linked observations |
| [`findings/`](findings/) | Cross-experiment synthesis and conclusions |
| [`models/`](models/) | Evolving concepts and working models |
| [`papers/`](papers/) | Longer reports and publication drafts |
| [`assets/`](assets/) | Shared, non-evidentiary diagrams and media |
| [`templates/`](templates/) | Reusable research records |

## Naming conventions

- Experiments: `EXP-YYYYMMDD-NNN-short-name`
- Observations: `OBS-YYYYMMDD-NNN-short-name.md`
- Research questions: `RQ-NNN-short-name.md`
- Findings: `FND-NNN-short-name.md`
- Evidence lives at `evidence/<experiment-id>/` and retains original files where possible.
- Use lowercase kebab-case after the identifier.
- Use ISO 8601 dates and record the product version or access date.
- Never overwrite raw evidence. Add a new file and document provenance.
- Mark unknown or unavailable metadata explicitly; do not infer it.

## Evidence and reproducibility

Screenshots, generated HTML or React code, exported prototypes, notes, PDFs, and videos are all valid evidence. Every evidence item should be referenced from an experiment or observation and listed in that experiment’s `manifest.md`. Large files may use Git LFS; external links should include an access date and, when permitted, a local archival copy.

## Knowledge base

[`models/concepts/`](models/concepts/) holds evolving concepts such as Decision Boundary, Design Brief, Information Architecture, Narrative, Design Reasoning, Design Intermediate Representation, Design Planning Layer, and Human/AI Decision Ownership. Concepts are working instruments, not settled truths: each records evidence, related experiments, and open questions.

## Contributing

Start with [`CONTRIBUTING.md`](CONTRIBUTING.md) and the templates in [`.github/`](.github/). Negative results, failed hypotheses, and replications are welcome. Clean evidence and explicit uncertainty matter more than a dramatic conclusion.

