# Anticoagulation Clinical Trials Timeline

Teaching timeline of high-impact anticoagulation RCTs (DOAC era → 2026). **Educational resource — not medical advice.** Verify dosing, holds, and reversal with institutional protocols and primary literature.

## Open locally

Open `index.html` in a browser, or from the repository root:

```bash
python3 -m http.server 8080
```

## Features

| Feature | How to try |
|--------|------------|
| Timeline lanes | Scan indication rows; click a marker |
| Rapid Recap / More details | Click trial → **More details** for journal-club handout |
| Compare | **Add to compare** (2–3) → Compare |
| **Deep links** | `#/trial/cobrra` or `?trial=cobrra` — **Copy link** on the popup |
| **What's new** | Compact strip under the header (recent + pending) |
| **Print / Save PDF** | On Rapid Recap or More details → browser print dialog |
| **Trial playlists** | Top bar **Trial playlists** → highlight & step trials on the timeline (`#/pathway/cancer-vte`) |
| **CACP prep (unofficial)** | Teach → **CACP prep** → practice questions by NCBAP domain (`#/cacp`) — not endorsed by NCBAP; not real exam items |
| **Treatment pathways** | Teach → **Treatment pathways** → interactive algorithms (`#/pathway-tx/af-stroke`) |
| **Frameworks** | Teach → **Frameworks** → e.g. `#/framework/acute-vte-doac` (Applies to / Does not apply) |
| **Cases** | Teach → **Cases** → e.g. `#/case/af-pci-week2` |
| **Bleed & reversal** | Teach → **Bleed & reversal** → `#/reversal` |
| **Nuance / Equipoise** | Teach → **Nuance** → e.g. `#/nuance/oceanic-vs-azalea` |
| **DDI library** | Teach → **DDI library** → `#/ddi` or `#/ddi/apixaban/ketoconazole`; compare interactors across DOACs |
| **Changelog / review** | Footer meta + `#/changelog`; edit reviewer in `js/site-meta.js` or `REVIEWER.md` |
| **Embed** | **Embed** button → iframe snippet; `?embed=1` for slim chrome |
| Practical dosing strip | On selected trial Rapid Recaps (load/maintain, food, renal, hold heuristic) |

## Hosting (GitHub Pages / Netlify)

This repository is the site root (`index.html` at `/`, not nested under `anticoag-timeline/`). Static files only — no build step. `.nojekyll` tells GitHub Pages to serve those files as-is.

1. **GitHub Pages:** Settings → Pages → Deploy from branch `main`, folder `/` (root).
2. Homepage: https://rockyman10.github.io/anticoag-timeline/
3. **Netlify:** drag-and-drop the repository root or connect the repo; publish directory = site root.
4. Share URLs like `https://rockyman10.github.io/anticoag-timeline/#/trial/cobrra`, `#/pathway-tx/af-stroke`, `#/framework/cancer-vte`, `#/reversal`.
5. Embed with `?embed=1` plus an optional hash (see **Embed** in the app).

## Regulatory note (U.S.)
**Andexxa (andexanet alfa)** is **not available in the U.S.** after **Dec 22, 2025** (FDA safety communication / BLA withdrawal for TE risk). Teach U.S. FXa-inhibitor major bleed as supportive care + institutional **4F-PCC**; idarucizumab remains for dabigatran. Ondexxya/andexanet may remain available outside the U.S. — verify formulary. See `#/reversal` and `#/trial/annexa-i`.

## Guidelines & journal club
- Rapid Recap and More details include a **Guidelines** crosswalk (society + note).
- More details: Population → Intervention → Results → Safety → Caveats → Practice takeaway → Guidelines → Citation.
- Print/Save PDF uses the same teaching blocks.

## Data

- `js/trials.js` — trials (+ journal-club / guideline fields)
- `js/pathways.js` — curated trial playlists (timeline tours)
- `js/cacp.js` — unofficial CACP exam-prep questions (NCBAP domain weights; educational only)
- `js/treatment-pathways.js` — interactive treatment algorithms (`#/pathway-tx/…`)
- `js/frameworks.js` — clinical question frameworks
- `js/cases.js` — case vignettes
- `js/nuances.js` — equipoise cards
- `js/practical.js` — dosing logistics + bleed/reversal page
- `js/ddi.js` — evidence-based anticoagulant DDI library (oncology TKI tranche complete; **expansion paused for clinical review**)
- `js/site-meta.js` — literature sweep date, reviewer placeholder, changelog
- `REVIEWER.md` — how to name the clinical reviewer
- See `DESIGN.md` for visual / interaction rationale
