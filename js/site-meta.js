/* Site meta, reviewer placeholder, changelog */
window.ANTICOAG_SITE_META = {
  lastLiteratureSweep: "2026-09-23",
  reviewedBy: "Clinical review pending — add your name",
  disclaimer: "Educational resource — not medical advice. Verify dosing, hold times, and reversal with institutional protocols and primary literature.",
  changelog: [
    {
      date: "2026-09-29",
      title: "VTE / ortho deepen — PDF-backed absolute rates",
      items: [
        "RE-COVER, EINSTEIN-DVT, EINSTEIN-PE, AMPLIFY, AMPLIFY-EXT, Hokusai-VTE, ADVANCE-3: PDF-backed absolute rates / HRs on REPLACE/ADD fields only; ADVANCE-3 remains THA prophylaxis"
      ]
    },
    {
      date: "2026-09-29",
      title: "ACS / LAAO / PCI deepen — PDF-backed absolute rates",
      items: [
        "ATLAS ACS 2–TIMI 51, PROTECT-AF, WOEST: PDF-backed absolute rates / HRs on REPLACE/ADD fields only; ATLAS combined-dose clarify per Reviewer"
      ]
    },
    {
      date: "2026-09-29",
      title: "AF DOAC deepen — PDF-backed absolute rates",
      items: [
        "RE-LY, ROCKET-AF, ARISTOTLE, AVERROES, ENGAGE AF-TIMI 48: PDF-backed absolute rates / HRs on REPLACE fields only"
      ]
    },

    {
      date: "2026-09-29",
      title: "Footer disclaimer SoT",
      items: [
        "Footer disclaimer reads from ANTICOAG_SITE_META.disclaimer (id=site-disclaimer)"
      ]
    },

    {
      date: "2026-09-28",
      title: "DOI corrections",
      items: [
        "COMMANDER HF, ADVANCE-3, ATLANTIS: doi/url corrected to Reviewer-cleared DOIs",
        "ATLANTIS yearLabel 2021→2022 (cite already 2022); no invented DOIs for pending trials"
      ]
    },

    {
      date: "2026-09-28",
      title: "Timeline left-edge marker clip fix",
      items: [
        "Increase year→x edge inset (X_EDGE 24→96) so earliest centered chips stay inside the track",
        "Align axis year ticks with lane track via matching left gutter (124px / 88px ≤640); no clinical copy changes"
      ]
    },

    {
      date: "2026-09-27",
      title: "Core Clinic Path v1 — Learn path chrome",
      items: [
        "Teach → Learn path: soft 10-lesson Core Clinic Path over existing teach tools",
        "On-device progress (localStorage anticoag-learn-v1); Continue + n of 10; no streak UI",
        "Hash routes #/learn and #/learn/<lessonId>; Story/Quiz stay hidden; chrome-only (no new clinical cards)"
      ]
    },

    {
      date: "2026-09-26",
      title: "DDI deferred tranche — release hygiene",
      items: [
        "DDI deferred tranche 2026-09-26 → 278 (was advertising 274)",
        "Replace edoxaban-clarithromycin (Lenard therapeutic-dose); append warfarin-omeprazole/pantoprazole/bosentan/erythromycin",
        "Oncology TKI pause retained; drafts/ remain local-only in zip"
      ]
    },

    {
      date: "2026-09-23",
      title: "DDI clinic-gap expansion — release hygiene",
      items: [
        "DDI +12 → 274 (2026-09-23); clinic gaps (warfarin + azithromycin×DOAC + edoxaban-erythromycin + dabigatran-colchicine)",
        "Oncology TKI pause retained in DDI expansionStatus"
      ]
    },

    {
      date: "2026-09-23",
      title: "CACP breadth ship — release hygiene",
      items: [
        "CACP +8 → 121 total (2026-09-23); TAVI/TAVR coverage fill",
        "New ids: i-27, ii-37–39, iii-16–17, iv-27, v-11"
      ]
    },

    {
      date: "2026-09-23",
      title: "CACP breadth pass (+8)",
      items: [
        "Appended i-27, ii-37, ii-38, ii-39, iii-16, iii-17, iv-27, v-11 (TAVI/peri/APS breadth)",
        "Bank total 121; NCBAP disclaimer unchanged"
      ]
    },

    {
      date: "2026-09-23",
      title: "Peri-procedural teach pack (framework + case)",
      items: [
        "Framework peri-procedural-oac (BRIDGE-anchored; mechanical contrast on framework links)",
        "Case af-warfarin-bridge-reflex (links trial bridge only); no TX/CACP"
      ]
    },

    {
      date: "2026-09-23",
      title: "ENRICH-AF DOI re-poll",
      items: [
        "ENRICH-AF DOI re-poll 2026-09-23: still pending."
      ]
    },

    {
      date: "2026-09-23",
      title: "TAVI teach pack (framework + case + nuance links)",
      items: [
        "Framework post-tavi-antithrombotic",
        "Case tavi-sinus-routine-doac (links nuance only)",
        "Nuance acasa-vs-notion4 Related links appended — no clinical rewrite; no TX/CACP"
      ]
    },

    {
      date: "2026-09-23",
      title: "Release polish — 2026-09-23 major ships (high level)",
      items: [
        "DOI Sprint B: NOTION-4 / EPIDAURUS / LIBREXIA ACS DOIs filled from PubMed; ENRICH-AF still doiPending",
        "DDI majors through oncology TKI tranche (plus later hygiene cards) — published quantification only",
        "Curriculum teach packs (valve, APS, COMPASS, post-Andexxa bleed, related) + Related-links cross-link pass A–B.5",
        "Pathways depth + unofficial CACP prep bank (113 practice questions); UX chrome items 1–5 locked after UX re-check",
        "REVIEWER.md literature-sweep stamp synced to 2026-09-23; reviewedBy placeholder unchanged"
      ]
    },

    {
      date: "2026-09-23",
      title: "UX 3–5 spot-check fixes",
      items: [
        "Rapid Recap: .m-foot[hidden] { display:none !important } so journal foot no longer stacks over summary",
        "Long-press tip: sticky click-suppress until consumed or hideTip (no 500ms expiry)"
      ]
    },

    {
      date: "2026-09-23",
      title: "UX: Rapid Recap foot, print polish, touch tip",
      items: [
        "Rapid Recap feet: primary More details / Back row + secondary Compare→Copy→Print→Source→Close",
        "Print handout: forced #111/#fff colors, stronger pearl callout, tighter section spacing",
        "Touch long-press (~450ms) on markers shows tip without opening detail; short tap unchanged",
        "What's new starts closed on ≤640px; desktop still opens by default"
      ]
    },

    {
      date: "2026-09-23",
      title: "Sprint B DOI poll (3 filled, ENRICH-AF still pending)",
      items: [
        "NOTION-4 → 10.1016/j.jacc.2026.08.023 (PubMed 42669071)",
        "EPIDAURUS → 10.1038/s41591-026-04629-7 (PubMed 42668287)",
        "LIBREXIA ACS → 10.1056/NEJMoa2608717 (PubMed 42670965)",
        "ENRICH-AF: no PubMed/Crossref journal DOI yet — press banner kept"
      ]
    },

    {
      date: "2026-09-23",
      title: "Phase B.5 legacy cross-links",
      items: [
        "Post-ICH / AF+PCI / intermediate-PE teach triangles + frail fw→case only",
        "TX: ich-start case; ich-end/pci-end/pe-end fw+case+nuance; pe-start case+nuance",
        "CACP missing siblings only; no sideways LAAO; pe→acute-vte and ich→af kept"
      ]
    },

    {
      date: "2026-09-23",
      title: "Phase B.4 COMPASS cross-links",
      items: [
        "Teach links[] on compass-vascular-dose + compass-vs-af-dose-trap",
        "TX: cv-start/rec/end/wrong-path fw+case; cv-voyager fw only",
        "CACP ii-12/ii-36 fw+case"
      ]
    },

    {
      date: "2026-09-23",
      title: "Phase B.3 APS cross-links",
      items: [
        "Teach links[] on aps-triple-positive-vka + aps-triple-positive-doac",
        "TX: aps-start/arterial replacements; aps-vka drop mechanical-valve; caution/end append",
        "CACP i-05 fw+case; i-24/ii-24 fw only"
      ]
    },

    {
      date: "2026-09-23",
      title: "Phase B.2 valve cross-links",
      items: [
        "Teach links[] on mechanical-valve-vka + mechanical-avr-doac-request",
        "TX mv-start: replace AF framework with mechanical-valve-vka + AVR case; append on mv-doac-ban / mv-end",
        "CACP i-14/ii-02/ii-33 framework+case; ii-10/ii-23 framework only"
      ]
    },

    {
      date: "2026-09-23",
      title: "Phase A teach Related links (reuse CACP click map)",
      items: [
        "Framework / case / nuance detail show optional links[] strip (Related)",
        "Same data-cacp-link + cacpLinkClick as CACP; closes teach modal before navigation",
        "Lights up bleed B.1 cross-links; no clinical copy changes"
      ]
    },

    {
      date: "2026-09-23",
      title: "UX: Teach menu + mobile chrome overflow",
      items: [
        "Teach tools collapsed behind a single Teach control (popover on desktop, bottom sheet on narrow viewports); eight tool buttons retain ids/handlers",
        "≤640px: Guided overview / Self-check / Embed / Theme behind More; Trial playlists + Compare stay visible; flex timeline height replaces fragile dvh offset",
        "Embed mode hides Teach (and More) like the former .sec-nav band; no clinical copy changes"
      ]
    },

    {
      date: "2026-09-23",
      title: "DOI-pending banners + DDI hygiene (voriconazole / osimertinib / MICRODOSE)",
      items: [
        "Press/simultaneous DOI-pending banner (Reviewer verbatim) for notion-4, enrich-af, epidaurus, librexia-acs (doi null + doiPending); timeline chip Press-level — DOI pending",
        "SINGLE-AF: Crossref/EuropePMC-confirmed DOI 10.1056/NEJMoa2607978 filled (cite/url); no press banner",
        "HI-PRO DOI 10.1056/NEJMoa2509426 confirmed present — not bannered; PRESTIGE-AF Pass2 Minor closed (HRs Lancet-verified; no invented CIs)",
        "CHAMPION-AF cite softened to journal-first with DOI (ACC.26 simultaneous retained parenthetically)",
        "Voriconazole ×3 (apixaban/rivaroxaban/edoxaban): effectDirection Uncertain / label-conservative ↑ concern; microdose ≈null; practiceInterpretation leads with not-a-green-light",
        "Osimertinib ×4: mechanisms → Tagrisso US PI §7.2 P-gp/BCRP may ↑ DOAC; effectDirection ↑ theoretical retained; no AUC invention",
        "DDI minors: rivaroxaban-erythromycin direction reconciled to curated +34% AUC; apixaban-fluconazole microdose≈null / moderate caution; posaconazole practiceInterpretation agent-specific",
        "MICRODOSE badge visible on DDI list + compare + detail; detail note that microdose AUCR may not equal therapeutic-dose magnitude"
      ]
    },

    {
      date: "2026-09-23",
      title: "Pass 2 clinical accuracy — indication retags + RIVER wording",
      items: [
        "New LANES: vascular (Vascular / ACS) and ESUS; CSS --c-vascular / --c-esus (light + dark)",
        "COMPASS, VOYAGER PAD, COMMANDER HF: indication VTE → vascular",
        "ATLAS ACS 2–TIMI 51: indication AF+PCI → vascular (AF+PCI reserved for WOEST/PIONEER/AUGUSTUS family)",
        "NAVIGATE ESUS / RE-SPECT ESUS: indication AF → ESUS",
        "RIVER intervention: rivaroxaban vs warfarin in AF with bioprosthetic mitral valve (not rheumatic valvular AF); MS carve-out vs INVICTUS retained"
      ]
    },

    {
      date: "2026-09-23",
      title: "Accuracy fixes from independent clinical review",
      items: [
        "ADAM-VTE: primary endpoint corrected to major bleeding 0% vs 1.4%; recurrent VTE 0.7% vs 6.3% retained as secondary",
        "EINSTEIN-PE: primary safety composite (major or CRNM) similar; major bleeding alone framed as component/secondary — not ‘primary safety analysis’",
        "Andexxa wording: AstraZeneca voluntary BLA withdrawal / U.S. sales ended Dec 22, 2025 after FDA risk–benefit conclusion (not ‘FDA withdrew’)",
        "ANNEXA-I: footnote that published NEJM TE (~10.3% vs 5.6%) differs from FDA AC Day-30 figures used for U.S. withdrawal teaching",
        "U.S. FXa 4F-PCC framed as institutional/off-label pathway (Andexxa was the labeled agent; now unavailable)",
        "Mechanical valve / MS Class I phrasing softened to ACC/AHA valvular Class 1 (verify current table)",
        "Bleed leadAlert FDA URL period hygiene (space before trailing period)"
      ]
    },

    {
      date: "2026-09-23",
      title: "CACP prep bank expanded to 105 questions",
      items: [
        "Unofficial CACP practice bank grown from 51 → 105 original questions (I 26 / II 36 / III 11 / IV 26 / V 6) aligned to NCBAP handbook domain weights",
        "New coverage: HIT recognition, valve thrombosis risk by position, PTS, chromogenic factor X, POC vs lab INR, PST criteria, pregnancy/lactation & pediatric high-level teaching, dental/bridging stratification, transitions of care, ICD/CPT awareness, ASM/azole/HIV DDIs (qualitative + DDI links), PD bleed stacking, idarucizumab vs U.S. FXa 4F-PCC teaching",
        "Schema unchanged; NCBAP non-endorsement disclaimer retained; no invented HRs/NNTs/AUC tables; Andexxa not taught as available U.S. option (withdrawn Dec 22, 2025)"
      ]
    },

    {
      date: "2026-09-23",
      title: "Pathway depth + unofficial CACP exam prep",
      items: [
        "Expanded treatment pathways (mechanical valve, APS, COMPASS vascular) and deepened AF/VTE/cancer/PCI/PE/ICH/bleed nodes with renal, DDI, frailty, pregnancy, and bridging checks",
        "New Teach → CACP prep: original unofficial practice questions across NCBAP handbook domains I–V with filters, shuffle, missed retry, score breakdown, and deep links (later expanded same day — see entry above)",
        "Hash routes #/cacp and #/cacp/q/{id}; explicit NCBAP non-endorsement disclaimer; U.S. FXa bleed teaching remains supportive care + 4F-PCC (Andexxa withdrawn Dec 22, 2025)",
        "No invented HRs/NNTs — quantitative chips only where already on site trial cards"
      ]
    },

    {
      date: "2026-09-21",
      title: "Interactive treatment pathways",
      items: [
        "New Teach → Treatment pathways: guideline-style algorithms with What / Why / evidence chips / caveats",
        "Deep links #/pathway-tx/{id} (e.g. af-stroke, acute-vte, cancer-vte, extended-vte, af-pci, intermediate-pe, post-ich, doac-bleed-us)",
        "Optional short paths: mechanical valve, APS, COMPASS vascular",
        "NNTs only when ARR cleanly derived (COBRRA, ARISTOTLE, HI-PEITHO, SINGLE-AF, FRAIL-AF NNH) — never invented",
        "U.S. DOAC bleed path: Andexxa withdrawn Dec 22, 2025 → supportive care + 4F-PCC; idarucizumab for dabigatran; links #/reversal",
        "Renamed timeline Pathways menu to Trial playlists to avoid collision"
      ]
    },
    {
      date: "2026-09-18",
      title: "Oncology TKI tranche — pausing expansion for clinical review",
      items: [
        "Ibrutinib deepened: PD bleed + AF; major hemorrhage ~4–8% (longer trials), fatal <1%; BTKi class warning; no DOAC AUC invented",
        "Enzalutamide: strong inducer — avoid DOACs / prefer LMWH for CAT when interaction dominates",
        "Imatinib, crizotinib, nilotinib, dasatinib, venetoclax, osimertinib, idelalisib, ribociclib, palbociclib: mechanism/label cards (quantitative DOAC PK absent)",
        "Tamoxifen–warfarin US label contraindication; DOACs lower predicted impact",
        "Cancer-dose dexamethasone CYP3A4 induction caution; CAT+oral anticancer primer; Oncology/TKI/CAT quick chip",
        "DDI library expansion PAUSED pending clinical review"
      ]
    },
    {
      date: "2026-09-18",
      title: "DDI library tranche 4 — antiplatelet/NSAID PD depth + herbals/OTC",
      items: [
        "Aspirin/P2Y12 cards upgraded with AUGUSTUS factorial + PIONEER/RE-DUAL/AUGUSTUS DAT vs TAT teaching (no invented HRs); COMPASS vascular ASA card separated from AF OAC+ASA",
        "NSAIDs: RE-LY substudy major bleed HR 1.68 / GI 1.81 / stroke-SE 1.50; real-world GIB HR 1.66 (Gut Liver 2024)",
        "SSRI/SNRI PD bleed cards kept as Clinical-cohort without fake universal HRs",
        "Herbals/OTC: fish oil mechanism≠bleed; garlic/ginkgo/turmeric/ginger/ginseng culinary vs extract; CBD warfarin cases / no published DOAC cases; vitamin K foods warfarin-only; SJW cross-linked",
        "Primer + how-to: PD bleed stacks vs PK exposure filter guidance"
      ]
    },
    {
      date: "2026-09-18",
      title: "DDI library tranche 3 — strong inducers + antiseizure drugs",
      items: [
        "Rifampin PK solidified for all DOACs (apixaban ↓54%, rivaroxaban ↓50%, dabigatran ↓~66%, edoxaban ↓34–35%) with avoid/thrombosis framing",
        "St John's wort: rivaroxaban HV n=12 AUC ↓24%/Cmax ↓14% (PubMed 32959922); other DOACs label/extrapolation avoid",
        "Strong ASM inducers (carbamazepine, phenytoin, phenobarbital, primidone): clinical/case signals + label nuance (edoxaban rifampin emphasis taught honestly)",
        "Lower-concern ASMs (LEV/LTG/lacosamide/gabapentin; OXC/VPA uncertain) without invented PK",
        "Warfarin + inducer INR↓ cards; mechanism primer note that inducers → thrombosis risk (opposite of inhibitor bleed risk)"
      ]
    },
    {
      date: "2026-09-18",
      title: "DDI library tranche 2 — HIV/Paxlovid, HCV DAAs, mild-CV bleed cohorts, transplant, ibrutinib",
      items: [
        "Paxlovid cards: dabigatran AUC +94%/Cmax +133%; rivaroxaban AUC +153%/Cmax +53% (ECR 2024); apixaban/edoxaban expected ↑ without invented AUC; warfarin INR monitoring",
        "HIV boosters: rivaroxaban+ritonavir avoid-with-boosted-ART practice note; apixaban PI 50% dose-reduction rules via ketoconazole analog; cobicistat/DRV-c extrapolation cards",
        "HCV: dabigatran + GLE/PIB AUC +138%; SOF/VEL/VOX +161%; odalasvir/simeprevir +103% (PMC7595962); other DOAC–DAA gaps labeled",
        "Mild CV clinical layer: Hanigan PubMed 31925665 any-bleed HR 1.8 for riva/apix + amiodarone/dronedarone/diltiazem/verapamil",
        "Transplant: apixaban±cyclosporine/tacrolimus HV vs transplant-recipient discrepancy (Bashir / Salerno); edoxaban/rivaroxaban+cyclosporine review PK",
        "Ibrutinib: PD bleed + AF overlap; no invented DOAC AUC; CYP3A4 victim polypharmacy note (~24× with ketoconazole per label framing)"
      ]
    },
    {
      date: "2026-09-18",
      title: "DDI library — primary PK deepening (CV / azoles / macrolides)",
      items: [
        "Converted high-yield pairs to PK-volunteer/PK-patient with Frost, Mueck, Garonzik, Mendell, Härtter, RE-LY popPK, and Foerster microdose citations",
        "Microdose azole cocktail (PMC8761715) explicitly flagged — not interchangeable with therapeutic-dose AUC",
        "Dabigatran+amiodarone: HV +50–60% bioavailability vs AF popPK +12% both shown; verapamil timing IR +143%/+179% vs <20% if separated",
        "Added/expanded fluconazole, erythromycin, posaconazole, voriconazole, isavuconazole cards"
      ]
    },
    {
      date: "2026-09-18",
      title: "Evidence-based anticoagulant DDI library",
      items: [
        "New Teach → DDI library (#/ddi) with anticoagulant/interactor filters, mechanism filters, evidence cards, and cross-DOAC compare",
        "104 curated pairs (DOACs + warfarin) graded PK-volunteer / PK-patient / clinical / label-extrapolation — no invented AUC values",
        "Deep links e.g. #/ddi/apixaban/ketoconazole; EHRA 2021 + label/JACC-cited magnitudes where available",
        "How to use + Why CDS is often wrong explainers; mechanism primer (P-gp vs CYP3A4 by agent)"
      ]
    },
    {
      date: "2026-09-18",
      title: "Andexxa (andexanet) U.S. market withdrawal — clinical accuracy",
      items: [
        "Bleed & reversal page reframed: U.S. Andexxa not available after Dec 22, 2025; FXa major bleed → supportive care + 4F-PCC per protocol; idarucizumab retained for dabigatran",
        "ANNEXA-4 / ANNEXA-I cards updated with FDA TE figures (thrombosis 14.6% vs 6.9%; TE deaths 2.5% vs 0.9% Day 30) and U.S. withdrawn Dec 2025 regulatory note",
        "Geographic nuance: UK/EU/Japan availability may continue (Ondexxya) — verify local formulary; not a global withdrawal claim",
        "FDA source linked: https://www.fda.gov/safety/medical-product-safety-information/update-safety-andexxa-astrazeneca-fda-safety-communication",
        "What's new strip highlights this regulatory/safety update"
      ]
    },
    {
      date: "2026-09-18",
      title: "Clinician-educator top-notch slice",
      items: [
        "Clinical questions / Frameworks with Applies to / Does not apply callouts",
        "Bleed & reversal teaching page (#/reversal) plus dosing/logistics strip on relevant trials",
        "Nuance / equipoise cards (ACASA-TAVI vs NOTION-4, ENRICH-AF vs ASPIRE, FXI signals)",
        "Case vignettes with model reasoning (#/case/…)",
        "Named review placeholder + changelog; last literature sweep stamped"
      ]
    },
    {
      date: "2026-09-17",
      title: "Guideline crosswalk & journal-club expansion",
      items: [
        "Guidelines field on all trials; chips in Rapid Recap; full block in More details",
        "Caveats and practice takeaways for all trials; print one-pager aligned"
      ]
    },
    {
      date: "2026-09-16",
      title: "Growth features",
      items: [
        "Deep links, pathways, What's new, print/PDF, embed, compare, stacked sub-lanes"
      ]
    }
  ]
};
