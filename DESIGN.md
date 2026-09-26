# Design notes — Anticoagulation Trials Timeline

Patterns applied from clinical information-design literature and editorial medical UI.

## Overview first, details on demand (PMC hierarchy literature)
- Default view: scannable stacked timeline only.
- Full explanatory content opens on click in a teaching-capsule popup.
- Hover shows a short metadata balloon (name, year, indication, one-line takeaway).

## Stacked category lanes (LifeLines / LabVis / BMJ-style timelines)
- Shared time axis (2009–2027+).
- One horizontal lane per indication (AF, VTE, cancer VTE, PE, AF+PCI, LAAO, valvular/TAVI, reversal, FXI/pipeline).
- Compact glyph-style markers (dot + acronym + tier), not oversized bubbles.
- Same-year clustering uses small horizontal offsets within a lane.

## NEJM-inspired typography & chrome
- **Source Serif 4** for page title and trial acronyms.
- **IBM Plex Sans** for UI and body (legible clinical sans).
- One restrained accent (terracotta/burgundy) for primary actions and takeaway callout.
- Minimal toolbar; filters stay slim; indications expand on demand.

## DigiTeam / AC Forum Rapid Recap capsule
- Popup max-width ~680px, height hugs content (max 85vh with internal scroll).
- Emphasized takeaway first, then compact labeled fields (Population, Arms, Efficacy, Safety, Citation).
- Actions: Add to compare · Open source · Close.

## Accessibility
- Esc / click-outside dismiss; focus trap in modals.
- Keyboard: focus timeline, arrows between markers, Enter opens detail.
- Color never sole cue (labels + shape + text).


## Sub-lane packing (overlap fix)
- Within each indication lane, markers are assigned to **vertical sub-lanes** by greedy interval packing.
- Each marker’s horizontal interval is estimated from full acronym length (plus year at higher zoom).
- If intervals would collide (with padding), the trial moves to the next sub-lane; lane height grows with sub-lane count (3, 4, … as needed).
- Layout recomputes on zoom and filter changes.

## Journal club deep dive
- Rapid Recap popup includes **More details** → journal-club handout (background, design, results, safety, strengths/limitations, pearl, citation).
- Optional curated fields on trials (`background`, `designNotes`, `strengths`, `limitations`, `journalClub`); otherwise auto-composed from existing fields without inventing statistics.


## Deep links, pathways, embed, print
- Routes: `#/trial/{id}`, `#/pathway/{id}`, `?trial=`, `?embed=1`.
- Document title updates while a trial popup is open; OG/meta tags support share cards when hosted.
- Pathways dim non-members and step with Previous/Next.
- Print/Save PDF uses `@media print` one-pager from journal-club fields (no PDF library).
