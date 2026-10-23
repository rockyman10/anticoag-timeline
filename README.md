# Anticoagulation Clinical Trials Timeline

Teaching timeline of high-impact anticoagulation RCTs (DOAC era → 2026). **Educational resource — not medical advice.** Verify dosing, holds, and reversal with institutional protocols and primary literature.

## Open locally

Open `index.html` in a browser, or from the repository / site-root folder:

```bash
python3 -m http.server 8080
```

(If working from a parent directory that contains an `anticoag-timeline/` site tree, `cd anticoag-timeline` first.)

## Features

| Feature | How to try |
|--------|------------|
| Timeline lanes | Scan indication rows; click a marker |
| Trial snapshot / More details | Click trial → **More details** for journal-club handout |
| Compare | **Add to compare** (2–3) → Compare |
| **Deep links** | `#/trial/cobrra` or `?trial=cobrra` — **Copy link** on the popup |
| **What's new** | Compact strip under the header (recent + pending) |
| **Print / Save PDF** | On a Trial snapshot or More details → browser print dialog |
| **Trial playlists** | Top bar **Trial playlists** → highlight & step trials on the timeline (`#/pathway/cancer-vte`) |
| **CACP prep (unofficial)** | Teach → **CACP prep** → practice questions by NCBAP domain (`#/cacp`) — not endorsed by NCBAP; not real exam items |
| **Treatment pathways** | Teach → **Treatment pathways** → interactive algorithms (`#/pathway-tx/af-stroke`) |
| **Frameworks** | Teach → **Frameworks** → e.g. `#/framework/acute-vte-doac` (Applies to / Does not apply) |
| **Cases** | Teach → **Cases** → e.g. `#/case/af-pci-week2` |
| **Bleed & reversal** | Teach → **Bleed & reversal** → `#/reversal` |
| **Nuance / Equipoise** | Teach → **Nuance** → e.g. `#/nuance/oceanic-vs-azalea` |
| **DDI library** | Teach → **DDI library** → `#/ddi` or `#/ddi/apixaban/ketoconazole`; compare interactors across anticoagulants |
| **Embed** | **Embed** button → iframe snippet; `?embed=1` for slim chrome |
| Practical dosing strip | On selected Trial snapshots (load/maintain, food, renal, hold heuristic) |

## Hosting (GitHub Pages / Netlify)

This repository is the site root (`index.html` at `/`, not nested under `anticoag-timeline/`). Static files only — no build step. `.nojekyll` tells GitHub Pages to serve those files as-is.

1. **GitHub Pages:** Settings → Pages → Deploy from branch `main`, folder `/` (root).
2. Homepage: https://rockyman10.github.io/anticoag-timeline/
3. **Netlify:** drag-and-drop the repository root or connect the repo; publish directory = site root.
4. Share URLs like `https://rockyman10.github.io/anticoag-timeline/#/trial/cobrra`, `#/pathway-tx/af-stroke`, `#/framework/cancer-vte`, `#/reversal`.
5. Embed with `?embed=1` plus an optional hash (see **Embed** in the app).

Drafts under `drafts/` are box/working notes only — not part of the published Pages framing.

## Regulatory note (U.S.)
**Andexxa (andexanet alfa)** is **not available in the U.S.** after **Dec 22, 2025** (FDA safety communication / BLA withdrawal for TE risk). Teach U.S. FXa-inhibitor major bleed as supportive care + institutional **4F-PCC**; idarucizumab remains for dabigatran. Ondexxya/andexanet may remain available outside the U.S. — verify formulary. See `#/reversal` and `#/trial/annexa-i`.

## Guidelines & journal club
- A Trial snapshot and More details include a **Guidelines** crosswalk (society + note).
- More details: Population → Intervention → Results → Safety → Caveats → Practice takeaway → Guidelines → Citation.
- Print/Save PDF uses the same teaching blocks.

## Data

- `js/data/` — clinical data modules only (no UI code). Layout/UI changes must not edit these files; `node scripts/verify-integrity.js` checks schema and wording rules. Hash routes plus deep links `?card=<trial id>`, `?pathway=<treatment pathway id>`, `?playlist=<playlist id>`
- `js/data/trials.js` — trials (+ journal-club / guideline fields)
- `js/data/pathways.js` — curated trial playlists (timeline tours)
- `js/data/cacp.js` — unofficial CACP exam-prep questions (NCBAP domain weights; educational only)
- `js/data/treatment-pathways.js` — interactive treatment algorithms (`#/pathway-tx/…`)
- `js/data/frameworks.js` — clinical question frameworks
- `js/data/cases.js` — case vignettes
- `js/data/nuances.js` — equipoise cards
- `js/data/practical.js` — dosing logistics + bleed/reversal page
- `js/data/ddi.js` — evidence-based anticoagulant DDI library (oncology TKI tranche complete; **expansion paused for clinical review**)
- `js/site-meta.js` — literature sweep date, reviewer placeholder, abbreviation key
- `CHANGELOG.md` — site change log (newest first). Log changes here. The site does not render it. An old `#/changelog` address opens the home timeline.
- `js/data/open-questions.js` — theme index for the Open questions page (`#/open-questions`); bullet text comes from each card's `questionsOpen`
- `REVIEWER.md` — how to name the clinical reviewer
- See `DESIGN.md` for visual / interaction rationale
