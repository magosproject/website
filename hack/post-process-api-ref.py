#!/usr/bin/env python3
"""Post-process the crd-ref-docs markdown into an operator-friendly shape.

crd-ref-docs emits a flat alphabetical list of every Go type reachable
from a CRD: Kinds, Specs, nested structs, status types, enums, and list
wrappers. This script reorganises that output so the four CRD Kinds are
top-level H2 sections, each followed by H3 sub-sections for the types
the Kind actually composes from. Status types, list wrappers, and enums
are dropped because operators read the reference for spec semantics, not
internal controller state.

The structure produced:

    ## Project
        - top-level fields table (apiVersion, kind, metadata, spec)
        ### ProjectSpec
        ### ValidationSpec
        ### VariableSetReference

    ## Workspace
        - top-level fields table
        ### WorkspaceSpec
        ### ProjectReference
        ### JobOverrides
        ### SourceSpec
        ### TerraformSpec

    ## Rollout
        - top-level fields table
        ### RolloutSpec
        ### RolloutStrategy
        ### RolloutStep

    ## VariableSet
        - top-level fields table
        ### VariableSetSpec
        ### Variable
        ### VariableSource
        ### KeySelector

Types referenced by more than one Kind (ValidationSpec, VariableSetReference)
appear once under the first Kind that uses them. The renderer's own
markdown anchors stay valid because heading text is preserved verbatim.

Reads from stdin, writes to stdout.
"""

from __future__ import annotations

import re
import sys


# Each Kind is followed by the dependent types we want to surface, in the
# order they should appear. Types used by multiple Kinds are listed under
# the first Kind that owns them; the other Kind's field table still links
# to the same heading, so navigation works.
HIERARCHY: list[tuple[str, list[str]]] = [
    ("Project", ["ProjectSpec", "ValidationSpec", "VariableSetReference"]),
    ("Workspace", ["WorkspaceSpec", "ProjectReference", "JobOverrides", "SourceSpec", "TerraformSpec"]),
    ("Rollout", ["RolloutSpec", "RolloutStrategy", "RolloutStep"]),
    ("VariableSet", ["VariableSetSpec", "Variable", "VariableSource", "KeySelector"]),
]

KINDS = {k for k, _ in HIERARCHY}
NESTED = {n for _, ns in HIERARCHY for n in ns}
KEPT = KINDS | NESTED

H4 = re.compile(r"^####\s+(\S.*)$", re.MULTILINE)


def main() -> None:
    text = sys.stdin.read()

    # Split into preamble + [(heading, body), ...]. crd-ref-docs uses H4
    # for every type section regardless of whether it is a Kind or a
    # nested struct, so splitting on H4 captures both.
    parts = H4.split(text)
    preamble = parts[0]
    sections = dict(zip(parts[1::2], parts[2::2]))

    # The preamble carries the "Resource Types" bullet list and the
    # package-level prose. Keep it untouched: it already enumerates only
    # the four Kinds.
    out = [preamble.rstrip() + "\n\n"]

    for kind, children in HIERARCHY:
        if kind not in sections:
            # Defensive: a future codegen change might drop a Kind. Skip
            # quietly rather than crash the docs build.
            continue
        out.append(f"## {kind}\n")
        out.append(clean(sections[kind]).strip() + "\n\n")
        for child in children:
            if child not in sections:
                continue
            out.append(f"### {child}\n")
            out.append(clean(sections[child]).strip() + "\n\n")

    cleaned = "".join(out)

    # Markdown links to anchors of dropped types (statuses, enums, list
    # wrappers) would render as broken refs. Rewrite them to plain text
    # so the field tables still read cleanly.
    kept_slugs = {t.lower() for t in KEPT}
    kept_slugs.add("magosprojectiov1alpha1")  # package heading anchor

    def unlink(match: re.Match[str]) -> str:
        label, anchor = match.group(1), match.group(2)
        return label if anchor not in kept_slugs else match.group(0)

    cleaned = re.sub(r"\[([^\]]+)\]\(#([a-z0-9]+)\)", unlink, cleaned)

    sys.stdout.write(cleaned)


def clean(section: str) -> str:
    """Strip noise that hides between the heading and the field table.

    crd-ref-docs emits an "_Appears in:_" stanza listing every other type
    that references this one. That is useful in a flat alphabetical
    layout, but in our nested layout the parent is always the heading
    immediately above, so the stanza adds noise.
    """
    return re.sub(r"\n_Appears in:_\n(?:-\s.*\n)*", "\n", section)


if __name__ == "__main__":
    main()
