# UX implementation spec — Rapid Recap hierarchy, print polish, touch tip

**Owner:** AC UX → Bot (on CEO GO)  
**Scope:** Ranked UX items **3–5**, plus optional residual **What’s new default-closed on mobile**  
**Status:** Spec only until CEO says GO  
**Constraints:** No clinical copy changes. Do not invent tip/print text — reuse existing trial fields (`takeaway`, `composeJournal`, etc.). Keep all Rapid Recap / journal-club actions (reorder and visual weight only for #3). Print work is CSS / `#print-root` structure only for #4 (no new stats).

**Baseline evidence:** `docs/ux-shots/` and `/workspace/screenshots/` (post–items 1–2 OK).

---

## Goals

3. Make the teaching path obvious in Rapid Recap: **More details** reads as the primary next step without dropping Compare / Copy / Print / Source / Close.
4. Make Print / Save PDF one-pagers read cleanly as journal-club handouts (hierarchy, margins, dark-theme safety).
5. Restore DESIGN.md overview layer on touch: learners can see the metadata tip (name / year / indication / takeaway) without hover.

**Optional residual:** On ≤640px, What’s new starts collapsed so the timeline is visible on first paint.

## Non-goals

- Changing takeaway, population, results, safety, guidelines, or any other clinical strings.
- Removing or renaming Rapid Recap actions.
- PDF libraries or server-side PDF generation (keep `window.print()` + `#print-root`).
- Desktop hover tip redesign (keep mouseenter/focus behavior; extend for touch).
- Reopening Teach / More chrome (items 1–2 closed).

---

## Item 3 — Rapid Recap action hierarchy

### Current

`#d-foot-summary` and `#d-foot-jc` are equal-weight wrap rows:

| Foot | Buttons (order today) |
|------|------------------------|
| Summary | More details (primary) · Add to compare · Copy link · Print / Save PDF · Open source · Close |
| Journal | Back to summary (primary) · Add to compare · Copy link · Print / Save PDF · Open source · Close |

`More details` is already `.btn.primary`, but secondary actions use mixed `.btn` / `.btn.sm` / `.btn.ghost` and compete visually when the foot wraps (especially ≤640).

### UX

- **Keep every action and existing ids/handlers** (`d-more`, `d-cmp`, `d-copy`, `d-print`, `d-src`, close; and `*-2` / `d-back` on journal foot).
- Establish two visual bands inside each foot (CSS + light markup wrappers OK):
  1. **Primary row:** teaching navigation — Summary: `More details`; Journal: `Back to summary`. Full-width or clearly dominant (primary fill, min-height ~40px on mobile).
  2. **Secondary row:** Compare · Copy link · Print / Save PDF · Open source (when shown) · Close. Use consistent `.btn.sm` / ghost for Close; do not give Compare primary styling.
- Preferred order (secondary): Compare → Copy link → Print / Save PDF → Open source → Close.
- Narrow screens: primary on its own row first; secondary may wrap; avoid a single soup of equal chips.
- Do not change button labels’ clinical meaning (labels stay as today).

### Implementation notes for Bot

- Prefer CSS (e.g. `.m-foot.detail-foot`, `.m-foot-primary`, `.m-foot-secondary`) over JS.
- Sticky foot background stays `--paper` so primary doesn’t collide with scrolling body.
- Verify both summary and journal feet after toggle.

### Acceptance

- [ ] All six action types still present and wired (Source still `hidden` until URL exists).
- [ ] At 390px and desktop, `More details` / `Back to summary` is unmistakably the first/primary control.
- [ ] No clinical string edits in `d-body` or trial data.

---

## Item 4 — Print / Save PDF handout polish

### Current

`fillPrintRoot(t)` builds `#print-root` from `composeJournal(t)` + trial fields; `@media print` hides everything else. Already field-driven (good). Weak spots: flat `h2` rhythm, pearl/takeaway can get lost, dark theme may tint print if any inherited vars leak, long guidelines blocks, margins.

### UX / CSS only

Polish **inside** `#print-root` + `@media print` (and tiny class hooks on the generated HTML if needed). Content sources stay `fillPrintRoot` / `composeJournal` — **no invented statistics**.

Suggested print hierarchy (visual, not new sections unless already emitted):

1. Banner “Journal club one-pager”
2. Title (acronym) + meta line (year · indication · status · DOI)
3. Italic full title
4. Sections in existing order (Population → … → Practice takeaway → Guidelines → Cite)
5. **Practice takeaway** (`.pearl`) must read as the callout: stronger left rule, slightly larger type, keep off dark backgrounds — force `#fff` / `#111` / fixed pearl tint in print rules

### Implementation notes for Bot

- Force print colors: `#print-root { color: #111; background: #fff; }` and child text colors as hex (already partly done) — ensure no `var(--ink)` / dark-theme bleed.
- Tighten `@page` margins (~0.5in) and section spacing so a typical trial stays near one page when content is short; allow natural page break on long guideline lists (`break-inside: avoid` on `.pearl` and short blocks only).
- Optional: `.print-sec` wrapper class in `fillPrintRoot` for spacing — still same text nodes.
- Treatment-pathway print path (`txp-print`) may share base `#print-root` rules; don’t break it — spot-check one pathway print if CSS is global under `#print-root`.

### Acceptance

- [ ] Print preview (light + dark theme active on screen) still yields white paper / dark text handout.
- [ ] Pearl / practice takeaway visually dominant vs body sections.
- [ ] No new clinical sentences; DOI-pending banner still appears when present.
- [ ] `window.print()` still the only export path.

---

## Item 5 — Touch / long-press tip (mobile overview layer)

### Current

`#tip` + `showTip(t, rect)` uses existing fields (`acronym`, `yearLabel`, `indication`, status, `takeaway`). Bound on `mouseenter` / `focus` only in `bindMarkers()`. Touch has no hover → learners skip the overview balloon and jump straight to Rapid Recap on tap.

### UX

- On coarse pointer / touch: **long-press (~400–550ms)** on a marker shows the same tip content via `showTip` (do not change tip HTML sources).
- Short tap still opens detail (existing `onclick`) — long-press must **not** fire click/open if the tip was shown (cancel the click / use a suppress flag).
- Second tap on the tip or tap outside / scroll / Esc hides tip (reuse `hideTip`).
- Optional: small “Hold for summary · tap for details” is **not** required (avoid new instructional chrome unless CEO asks).
- Keyboard focus tip behavior stays.
- Desktop mouseenter unchanged.

### Implementation notes for Bot

- Prefer Pointer Events: `pointerdown` timer on the marker button; clear on `pointerup` / `pointercancel` / move beyond ~10px (so pan doesn’t tip).
- Coordinate with scroller pan (`pointerdown` on `#scroller`) — tip timer only on the marker button, stopPropagation carefully so timeline drag still works when not long-pressing a marker.
- Tip remains `pointer-events: none` unless you add an explicit dismiss control; outside tap can listen on `pointerdown` capture when tip is `.on`.
- Do **not** rewrite `t.takeaway` or tip template fields.

### Acceptance

- [ ] On a touch-sized viewport (or DevTools mobile): long-press shows tip with same fields as desktop hover.
- [ ] Short tap still opens Rapid Recap; long-press that showed tip does not also open detail on that gesture release.
- [ ] Mouse desktop hover still works.
- [ ] No clinical copy changes.

---

## Optional residual — What’s new default-closed on mobile

### Current

`<details class="whats-new" id="whats-new" open>` — first mobile paint can hide the timeline until collapsed (noted in items 1–2 spot-check).

### UX

- ≤640px: What’s new starts **closed** on first load.
- ≥641px: keep today’s default **open** (desktop learners benefit from the strip).
- Do not remove What’s new or change its list content.

### Implementation notes for Bot

- Simplest: remove static `open`; on `DOMContentLoaded` / init, if `matchMedia("(min-width: 641px)")` then `details.open = true`.
- Or CSS-only is insufficient for the `open` attribute — needs a tiny init script.
- Persist user toggle? **Out of scope** (no localStorage unless already present).

### Acceptance

- [ ] Fresh load at 390px: timeline lanes visible without collapsing What’s new first.
- [ ] Fresh load desktop: What’s new still expanded by default.
- [ ] Embed still hides What’s new.

---

## Ship order for Bot (when CEO GO)

1. Item 3 (footer hierarchy) — isolated CSS/markup in detail modal.
2. Item 4 (print CSS / `#print-root`) — no dependency on 3.
3. Item 5 (touch long-press tip) — marker binding only; careful with pan.
4. Optional What’s new default (one init branch).

Smoke: open trial Rapid Recap + journal foot; Print preview light/dark; long-press on phone width; `#/trial/…` deep link; embed unchanged.

## Handoff

- Spec path: `docs/ux-spec-recap-print-tip.md`
- Prior closed: `docs/ux-spec-teach-mobile.md` (items 1–2 OK)
