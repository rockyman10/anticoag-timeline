#!/usr/bin/env bash
# Rebuild capacitor/www from the Pages site root for Store-bundled load (CEO D1).
# Site root = parent of capacitor/ (this IS the Pages tree).
# Does NOT modify site-root index.html / manifest (Pages keeps /anticoag-timeline/ prefix).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CAP_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SITE_ROOT="$(cd "$CAP_DIR/.." && pwd)"
WWW="$CAP_DIR/www"
VENDOR="$CAP_DIR/vendor-fonts"

echo "== sync-www =="
echo "  site: $SITE_ROOT"
echo "  www:  $WWW"

rm -rf "$WWW"
mkdir -p "$WWW"

# Copy teaching assets only (exclude drafts, docs, capacitor, node_modules, git, zips)
# Prefer rsync when available.
if command -v rsync >/dev/null 2>&1; then
  rsync -a \
    --exclude='drafts/' \
    --exclude='docs/' \
    --exclude='capacitor/' \
    --exclude='node_modules/' \
    --exclude='.git/' \
    --exclude='.gitignore' \
    --exclude='*.zip' \
    --exclude='.DS_Store' \
    --exclude='.env' \
    --exclude='.env.*' \
    "$SITE_ROOT/" "$WWW/"
else
  # Fallback: selective cp
  cp -a "$SITE_ROOT/index.html" "$WWW/"
  cp -a "$SITE_ROOT/manifest.webmanifest" "$WWW/"
  cp -a "$SITE_ROOT/.nojekyll" "$WWW/" 2>/dev/null || true
  cp -a "$SITE_ROOT/DESIGN.md" "$WWW/" 2>/dev/null || true
  cp -a "$SITE_ROOT/README.md" "$WWW/" 2>/dev/null || true
  cp -a "$SITE_ROOT/REVIEWER.md" "$WWW/" 2>/dev/null || true
  cp -a "$SITE_ROOT/js" "$WWW/"
  cp -a "$SITE_ROOT/icons" "$WWW/"
fi

# --- Manifest rewrite: drop /anticoag-timeline/ prefix (native webDir = /) ---
python3 - "$WWW/manifest.webmanifest" <<'PY'
import json, sys
path = sys.argv[1]
with open(path, encoding="utf-8") as f:
    m = json.load(f)
m["start_url"] = "./"
m["scope"] = "/"
for icon in m.get("icons", []):
    src = icon.get("src", "")
    # Strip absolute Pages prefix if present
    prefix = "/anticoag-timeline/"
    if src.startswith(prefix):
        src = src[len(prefix):]
    elif src.startswith("/"):
        src = src.lstrip("/")
    icon["src"] = src  # e.g. icons/icon-192.png
with open(path, "w", encoding="utf-8") as f:
    json.dump(m, f, indent=2)
    f.write("\n")
print("  manifest: start_url=./ scope=/ icons relative")
PY

# --- Fonts: vendor into www/fonts + local @font-face; strip Google Fonts from www index only ---
if [[ ! -d "$VENDOR" ]]; then
  echo "ERROR: missing $VENDOR (IBM Plex Sans + Source Serif 4 woff2). Re-run font vendor step." >&2
  exit 1
fi
mkdir -p "$WWW/fonts"
cp -a "$VENDOR"/*.woff2 "$WWW/fonts/"
# fonts.css uses url(fonts/...) relative to www root
cp -a "$VENDOR/fonts.css" "$WWW/fonts.css"

python3 - "$WWW/index.html" <<'PY'
import re, sys
path = sys.argv[1]
html = open(path, encoding="utf-8").read()
# Remove Google Fonts preconnect + stylesheet (www only; site-root unchanged)
html2 = re.sub(
    r'\s*<link rel="preconnect" href="https://fonts\.googleapis\.com"\s*/?>\s*',
    "\n  ",
    html,
    count=1,
)
html2 = re.sub(
    r'\s*<link rel="preconnect" href="https://fonts\.gstatic\.com"[^>]*>\s*',
    "\n  ",
    html2,
    count=1,
)
html2 = re.sub(
    r'\s*<link href="https://fonts\.googleapis\.com/css2\?[^"]+"\s+rel="stylesheet"\s*/?>\s*',
    '\n  <link rel="stylesheet" href="fonts.css" />\n  ',
    html2,
    count=1,
)
if html2 == html:
    # Fallback: inject before </head> if patterns missed
    if "fonts.css" not in html2:
        html2 = html2.replace("</head>", '  <link rel="stylesheet" href="fonts.css" />\n</head>', 1)
    print("  fonts: WARNING patterns partially missed; ensured fonts.css link")
else:
    print("  fonts: Google Fonts links → local fonts.css + www/fonts/*.woff2")
open(path, "w", encoding="utf-8").write(html2)
PY

# Sanity: no Pages prefix left in key files
if grep -R --include='*.html' --include='*.webmanifest' -n '/anticoag-timeline/' "$WWW" >/dev/null 2>&1; then
  echo "  WARN: /anticoag-timeline/ still present in www (check absolute URLs):"
  grep -R --include='*.html' --include='*.webmanifest' -n '/anticoag-timeline/' "$WWW" | head -20 || true
else
  echo "  ok: no /anticoag-timeline/ prefix in www html/manifest"
fi

echo "  done. Contents:"
find "$WWW" -maxdepth 2 -type f | sort | head -60
echo "== sync-www complete =="
