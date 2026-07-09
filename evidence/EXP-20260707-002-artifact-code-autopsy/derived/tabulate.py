#!/usr/bin/env python3
"""EXP-002 dependent-measure tabulation over the five extracted templates."""
import re, json, collections, pathlib

BASE = pathlib.Path("/Users/yuki/Documents/Codex/2026-07-02/goal-i-want-to-build-a/design-reasoning-lab/evidence/EXP-20260707-002-artifact-code-autopsy/derived")
FILES = {
    "P-FULL": "app.html",
    "P-NO-AUDIENCE": "p-no-audience-app.html",
    "P-NO-CONTENT": "p-no-content-app.html",
    "P-NO-STYLE": "p-no-style-app.html",
    "P-VAGUE": "p-vague-app.html",
}

COLOR_RE = re.compile(r"(oklch\([^)]*\)|#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\))")

def split_sections(text):
    # logic script
    m = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', text, re.S)
    logic = m.group(1) if m else ""
    template = text[: m.start()] if m else text
    # drop @font-face style block (infrastructure, not design decisions)
    template = re.sub(r"@font-face\s*\{[^}]*\}", "", template)
    return template, logic

def color_stats(chunk):
    colors = COLOR_RE.findall(chunk)
    return len(colors), collections.Counter(colors)

def analyze(path):
    raw = path.read_text()
    template, logic = split_sections(raw)
    text = template + logic  # design-authored code only; @font-face infra stripped
    out = {}

    # 1. CSS custom properties / var()
    out["css_custom_prop_defs"] = len(re.findall(r"--[\w-]+\s*:", text))
    out["css_var_uses"] = len(re.findall(r"var\(--", text))

    # 2. color literals by location
    t_n, t_counter = color_stats(template)
    l_n, l_counter = color_stats(logic)
    all_counter = t_counter + l_counter
    out["color_occurrences_template"] = t_n
    out["color_occurrences_logic"] = l_n
    out["color_unique_values"] = len(all_counter)
    out["color_top10"] = all_counter.most_common(10)

    # 3. JS constants holding colors, and their reference counts
    const_defs = re.findall(r"const\s+([A-Z][A-Z0-9_]*)\s*=\s*['\"]([^'\"]*)['\"]", logic)
    color_consts = {n: v for n, v in const_defs if COLOR_RE.search(v)}
    refs = {}
    for name in color_consts:
        refs[name] = len(re.findall(r"\b%s\b" % name, logic)) - 1  # minus the definition
    out["js_color_constants"] = color_consts
    out["js_color_constant_refs"] = refs

    # also non-color design constants (spacing/radius etc.) defined as consts
    out["all_upper_consts"] = [n for n, _ in const_defs]

    # 4. font families (font-family: and font: shorthand)
    fams = re.findall(r"font-family:\s*'([^']+)'", text)
    fams += re.findall(r"font:[^;\"']*'([^']+)'", text)
    out["font_family_decl_count"] = len(fams)
    out["font_families"] = dict(collections.Counter(fams))

    # 5. border-radius values
    radii = re.findall(r"border-radius:\s*([^;'\"]+)[;'\"]", text)
    out["radius_decl_count"] = len(radii)
    out["radius_unique"] = dict(collections.Counter(r.strip() for r in radii))

    # 6. spacing: padding/margin/gap declarations, unique value strings
    spac = re.findall(r"(?:padding|margin|gap)(?:-\w+)?:\s*([^;'\"]+)[;'\"]", text)
    out["spacing_decl_count"] = len(spac)
    out["spacing_unique_values"] = len(set(s.strip() for s in spac))

    # 7. font sizes (font-size: and font: shorthand)
    fs = re.findall(r"font-size:\s*([\d.]+px)", text)
    fs += re.findall(r"font:\s*\d*\s*([\d.]+px)", text)
    out["font_size_decl_count"] = len(fs)
    out["font_size_unique"] = sorted(set(fs), key=lambda x: float(x[:-2]))

    # 8. directives / structure
    out["sc_if"] = len(re.findall(r"<sc-if\b", text))
    out["sc_for"] = len(re.findall(r"<sc-for\b", text))
    out["inline_style_attrs"] = len(re.findall(r'style="', template))
    out["style_attrs_with_bindings"] = len(re.findall(r'style="[^"]*\{\{', template))
    out["class_attrs"] = len(re.findall(r'class="', template))

    return out

report = {cond: analyze(BASE / f) for cond, f in FILES.items()}
print(json.dumps(report, indent=1, ensure_ascii=False))
