/* Site meta, reviewer placeholder, changelog */
window.ANTICOAG_SITE_META = {
  lastLiteratureSweep: "2026-10-04",
  reviewedBy: "",
  disclaimer: "Educational resource — not medical advice. Verify dosing, hold times, and reversal with institutional protocols and primary literature.",
  changelog: [
    {
      date: "2026-10-07",
      title: "Site auditor functionality fixes",
      items: [
        "Teach → Learn path opens and keeps #/learn, the same entry as Start here.",
        "CACP prep: Submit answer and Reveal explanation are separate. A revealed explanation is not scored.",
        "DOAC appropriateness stewardship rows are a plain list. Empty checkbox glyphs are gone.",
        "Guided overview and Self-check buttons are removed. Those lists are empty.",
        "The trial marker popup is titled Rapid Recap. More details stays the journal-club view.",
        "DDI library legend: HV, PK-patient, Label/extrapolation, RCT-subgroup, ↑ exposure (context-dependent), and “No quantitative PK curated.” Evidence grade stays separate from effect.",
        "DDI compare says “across anticoagulants” because the table includes warfarin.",
        "Footer literature-sweep stamp is 2026-10-04, matching the latest accuracy pass. No reviewer name is shown."
      ]
    },
    {
      date: "2026-10-05",
      title: "Teaching-tone and API-CAT regimen match",
      items: [
        "Dose and regimen highlights now say “Teaching example, not an order” and describe what the trial used. API-CAT takeaway no longer says reduced-dose apixaban is preferred.",
        "API-CAT card and dosing highlight both follow Mahé et al., NEJM (DOI already on the card): after at least 6 months of anticoagulation, 2.5 mg twice daily for 12 months versus 5 mg twice daily for 12 months. No further timed step-down was added.",
        "Mechanical-valve warfarin node, rivaroxaban VTE load/maintain strip, and warfarin 4F-PCC line rephrased as teaching examples. Pathway nodes that used to say what to do are labeled reasoning steps. Each pathway and case shows “Teaching example, not a prescription.”",
        "Related links added for acute VTE, cancer VTE, AF stroke prevention, and LAAO versus anticoagulation, plus the CKD/GI-bleed, cancer step-down, LAAO candidate, and acute DVT cases. Factor XI stays a playlist link on the existing nuance. reviewedBy unchanged."
      ]
    },
    {
      date: "2026-10-05",
      title: "HOME-PE primary endpoint correction",
      items: [
        "HOME-PE (Roy et al., Eur Heart J 2021, doi:10.1093/eurheartj/ehab373): the sole primary is the 30-day composite, per-protocol noninferiority, 3.82% (34/891) vs 3.57% (32/896), adjusted absolute difference 0.20%, one-sided 95% upper limit 1.43%, P=0.004, margin 2.5%. Home treatment 38.4% (378/984) vs 36.6% (361/986), P=0.41, is the first secondary outcome (superiority, intention-to-treat). reviewedBy unchanged."
      ]
    },
    {
      date: "2026-10-05",
      title: "Second tranche of anticoagulation teaching cards",
      items: [
        "Added 17 cards. None of these trials already had a correct card on main. The existing POPular TAVI card remains the no-long-term-anticoagulation cohort (Brouwer et al., doi:10.1056/NEJMoa2017815). The oral-anticoagulation cohort is the new POPular TAVI OAC card.",
        "Sources: ACTIVE-W Connolly et al., Lancet 2006, doi:10.1016/S0140-6736(06)68845-4. BAFTA Mant et al., Lancet 2007, doi:10.1016/S0140-6736(07)61233-1. RE-MEDY and RE-SONATE are separate cards from one paper, Schulman et al., N Engl J Med 2013, doi:10.1056/NEJMoa1113697, with NCT00329238 (warfarin) and NCT00558259 (placebo). CaVenT Enden et al., Lancet 2012, doi:10.1016/S0140-6736(11)61753-4. ATTRACT Vedantham et al., N Engl J Med 2017, doi:10.1056/NEJMoa1615066. HOME-PE Roy et al., Eur Heart J 2021, doi:10.1093/eurheartj/ehab373.",
        "CANVAS Schrag et al., JAMA 2023, doi:10.1001/jama.2023.7843 (cancer VTE, not the canagliflozin trial). ELAN Fischer et al., N Engl J Med 2023, doi:10.1056/NEJMoa2303048. OPTIMAS Werring et al., Lancet 2024;404:1731-1741, doi:10.1016/S0140-6736(24)02197-4; erratum Lancet 2025;405:32 corrected spelling and a figure number-at-risk to 1807 and did not change the event rates. ARCADIA Kamel et al., JAMA 2024, doi:10.1001/jama.2023.27188. AMULET IDE Lakkireddy et al., Circulation 2021, doi:10.1161/CIRCULATIONAHA.121.057063.",
        "EPIC-CAD Cho et al., N Engl J Med 2024, doi:10.1056/NEJMoa2407362; milligram dose is from NCT03718559 because the abstract does not print it. RE-ALIGN Eikelboom et al., N Engl J Med 2013, doi:10.1056/NEJMoa1300615. PROACT Puskas et al., J Am Coll Cardiol 2018, doi:10.1016/j.jacc.2018.03.535 (2014 interim rates are not mixed in). PROACT Xa Wang et al., NEJM Evid 2023, doi:10.1056/EVIDoa2300067; the 2.5 mg rule is from NCT04142658. POPular TAVI OAC Nijenhuis et al., N Engl J Med 2020, doi:10.1056/NEJMoa1915152.",
        "Playlists and the mechanical-valve pathway now point at the new cards. reviewedBy unchanged. No dosing calculator."
      ]
    },
    {
      date: "2026-10-04",
      title: "Second accuracy pass",
      items: [
        "EPIDAURUS eligibility is atrial fibrillation plus successful PCI no more than 5 days before randomization for biomarker-positive STEMI or NSTEMI. The 5-day interval is PCI to randomization.",
        "RE-DUAL PCI: dabigatran 150 mg bleeding is 20.2% versus 25.7% in the triple-therapy group that excluded elderly patients outside the United States. Efficacy 13.7% is both dabigatran doses combined versus 13.4% on triple therapy.",
        "OPTION secondary endpoint is major bleeding, including procedure-related bleeding, through 36 months (3.9% vs 5.0%).",
        "PRESTIGE-AF is survivors of spontaneous intracerebral hemorrhage. First recurrent intracerebral hemorrhage HR 10.89 (90% CI 1.95–60.72).",
        "FRAIL-AF citation is Joosten et al., Circulation. 2024;149:279–289.",
        "Idelalisib and ribociclib still have no CYP3A4 degree on the cards. Supplementary Table S1 could not be read. reviewedBy unchanged."
      ]
    },
    {
      date: "2026-10-03",
      title: "Literature-review corrections",
      items: [
        "Trial cards: ASPIRE is apixaban versus aspirin 81 mg (quadruple-blind, NCT03907046), results pending. PRESTIGE-AF intervention is DOAC versus no anticoagulation (open-label). SELECT-D now states CRNMB 13% vs 4% (HR 3.76) and the esophageal or gastroesophageal major-bleeding counts (4 of 11 vs 1 of 19); the urinary-tract cancer warning is gone. OPTION has two primaries (NEJM 2025;392:1277-1287). NOTION-4 leads with 12-month HALT. EPIDAURUS leads with the primary win ratios. CATCH, COMMANDER HF, GALILEO, RE-DUAL PCI, Hokusai VTE Cancer, AFIRE, FRAIL-AF, AZALEA-TIMI 71, COMPASS, ENRICH-AF, and POPular TAVI population wording were aligned to the cited papers. Hokusai-VTE citation pages are 1406-1415.",
        "Where the review note and the source differed, the card follows the source. EPIDAURUS extended-data BARC ≥3 P is 0.027 (the note said 0.028), and the safety win-ratio superiority P is for the control group. NOTION-4 composite CI is printed as 1.2% to 10.6%. SELECT-D calls the interim esophageal difference nonsignificant; the 4 of 11 vs 1 of 19 counts are the published totals. GALILEO’s conclusion says a higher bleeding risk; the primary safety test is P=0.08. ENRICH-AF rates stay attributed to the 29 August 2026 ESC Hot Line press release (page date 28 Aug). The XTANDI label effective 2026-07-28 has no INR sentence; S-warfarin AUC fell 56%. SOLTAMOX says coagulation indices, not the word INR.",
        "DDI cards: dabigatran and edoxaban with enzalutamide are increased exposure (P-gp; digoxin AUC +33% is the labeled probe). Apixaban and rivaroxaban with enzalutamide stay decreased (CYP3A4 induction). Idelalisib and ribociclib are CYP3A4-only in Hellfritzsch Table 3, so the theoretical increase stays on apixaban and rivaroxaban. Venetoclax is blank in that table. Crizotinib is moderate CYP3A4; P-gp is in vitro only. Warfarin cards for enzalutamide, imatinib, crizotinib, nilotinib, and dasatinib use warfarin label language. Tamoxifen is split by SOLTAMOX indication. reviewedBy unchanged."
      ]
    },
    {
      date: "2026-10-03",
      title: "Nine anticoagulation teaching cards",
      items: [
        "Added CLOT, PEITHO, AVERT, CASSINI, ARTESiA, NOAH-AFNET 6, APPRAISE-2, AQUATIC, and ENVISAGE-TAVI AF. Counts, hazard or odds ratios, and DOIs were checked against the PubMed abstracts of the primary NEJM papers. ClinicalTrials.gov was used only where a dose or masking detail was not in the abstract (NOAH-AFNET 6, ENVISAGE-TAVI AF).",
        "CLOT: six-month recurrent-VTE probabilities 9% vs 17% and HR 0.48 match Lee et al. The abstract reports 336 vs 336. Randomized N=676 and the word open-label are not in that abstract; they are stated in the published CLOT methods description (PMID 27344439). The NEJM PDF was not retrievable from this environment.",
        "AVERT major bleeding 3.5% vs 1.8% is the modified intention-to-treat result (HR 2.00; P=0.046). On-treatment major bleeding was 2.1% vs 1.1% (HR 1.89; 95% CI 0.39–9.24).",
        "NOAH-AFNET 6 safety figure on the card is the published composite of death or major bleeding. The abstract does not separate major bleeding. The registry control arm is aspirin 100 mg or placebo, depending on an antiplatelet indication.",
        "Pairing notes on the cards: PEITHO is not HI-PEITHO; AVERT is taught beside CASSINI; ARTESiA beside NOAH-AFNET 6; APPRAISE-2 beside ATLAS ACS 2–TIMI 51; ENVISAGE-TAVI AF is not POPular TAVI.",
        "Timeline axis start moved from 2009 to 2003 so the CLOT marker is on the track. Cancer-VTE and PE playlists include the new related ids. reviewedBy unchanged."
      ]
    },
    {
      date: "2026-10-02",
      title: "RENOVE rates — Couturaud et al., Lancet 2025",
      items: [
        "renove card: 5-year recurrent VTE 2.2% reduced-dose vs 1.8% full-dose (adjusted HR 1.32; 95% CI 0.67–2.60; non-inferiority p=0.23; non-inferiority not shown)",
        "Major or CRNM bleeding 9.9% vs 15.2% (adjusted HR 0.61; 95% CI 0.48–0.79); hierarchical testing did not formally test this secondary",
        "DOI unchanged (10.1016/S0140-6736(24)02842-3). Learn coach B4 stays rate-free and points at the live card. reviewedBy unchanged"
      ]
    },
    {
      date: "2026-10-01",
      title: "ASTER / MAGNOLIA registry correction",
      items: [
        "aster-magnolia: ASTER comparator is apixaban (NCT05171049), not dalteparin; MAGNOLIA remains abelacimab vs dalteparin in GI/GU cancer-associated VTE (NCT05171075)",
        "Both terminated (sponsor decision) with hasResults false; removed the sponsor-communication inferior-efficacy line; no results DOI and no invented rates",
        "Cite links both ClinicalTrials.gov study pages; efficacy and bleeding outcomes stay unknown"
      ]
    },
    {
      date: "2026-10-01",
      title: "CACP deepen — Domains III and V",
      items: [
        "Unofficial practice bank 121 → 134 (I 27 / II 39 / III 23 / IV 27 / V 18). Handbook weights left as published; new items add depth in III and V only",
        "Domain III +6 advanced (iii-18–iii-23): dabigatran bottle adherence, rivaroxaban/apixaban/warfarin missed-dose counseling without new hour cutoffs, failed teach-back, skipped-day stretching",
        "Domain V +7 (v-12–v-18): TTR is not a DOAC metric and has no target percent; poor-TTR workup; INR recall owner; POC vs lab hold; dose-family audit; patient self-testing oversight; three-line stewardship note",
        "NCBAP non-endorsement disclaimer unchanged. reviewedBy unchanged. DDI library not touched"
      ]
    },
    {
      date: "2026-09-30",
      title: "DOI / citation hygiene re-check",
      items: [
        "Re-verified HI-PRO, SINGLE-AF, EPIDAURUS, LIBREXIA ACS, and NOTION-4 against Crossref and PubMed; existing DOIs and publisher URLs left in place",
        "ENRICH-AF: still no results paper (doi null, doiPending); cite tightened to Hot Line 29 Aug 2026 plus NCT03950076; ESC press URL kept",
        "ASTER/MAGNOLIA: cite and source URL anchored to ClinicalTrials.gov NCT05171049 and NCT05171075 (terminated, sponsor decision); doi left null",
        "LIBREXIA-AF, LIBREXIA-STROKE, ASPIRE: doi left null; cites name ongoing registry records and state that results are not published"
      ]
    },
    {
      date: "2026-09-30",
      title: "Sprint B — Compare-two-trials Learn soft invites",
      items: [
        "Learn soft invites B1–B4 preload compare tray (max 3) + open compare modal; reuse existing compare UI",
        "Rate-free Learn coach strip above compare table (orient · Q/P/C · pearl · teach-back); B3 Andexxa≠U.S. default pivot + alsoOpen; no efficacy %/HRs in coach chrome"
      ]
    },
    {
      date: "2026-09-30",
      title: "Sprint C — TTR / VKA quality framework",
      items: [
        "Framework ttr-vka-quality: calm warfarin-clinic TTR literacy (Rosendaal method name only; no calculator/dashboard/fake benchmarks); TTR ≠ DOAC metric",
        "Learn soft invites L4 primary + L1 light; CACP v-01 caption (warfarin-clinic TTR literacy — not a DOAC metric; no clinic TTR%)"
      ]
    },
    {
      date: "2026-09-30",
      title: "DOAC appropriateness checklist",
      items: [
        "Framework doac-appropriateness: rate-free stewardship checklist (niche, dose family, three-line documentation); label-only renal/age/weight with no numeric cutoffs; Andexxa is not the U.S. default",
        "Learn soft invites (not auto-open) on L1, L2, L6 and optional L4, L5, L8, L9, L10"
      ]
    },
    {
      date: "2026-09-30",
      title: "CACP choice order shuffle",
      items: [
        "Randomize answer choice display order on each question view (stable choice.id scoring; bank unchanged)"
      ]
    },

    {
      date: "2026-09-30",
      title: "App Store Phase A — PWA foundations",
      items: [
        "Web App Manifest + icons (192/512/apple-touch/favicon); theme-color #b83a1f; start_url/scope /anticoag-timeline/",
        "viewport-fit=cover + safe-area insets on .app; Teach sheet bottom safe-area kept; no service worker (D5)"
      ]
    },

    {
      date: "2026-09-30",
      title: "RENOVE scaffold (rate-free)",
      items: [
        "Add renove 2025 VTE-extend card (DOI live; absolute rates/HRs pending PDF + Clinical Reviewer)",
        "Pathway vte-extend: amplify-ext · einstein-choice · renove; L2 soft timeline invite (chrome only)"
      ]
    },

    {
      date: "2026-09-30",
      title: "Learn v2b+v2c",
      items: [
        "Coach hub: hero next step + Why this; path list collapsed (Show all 10 steps); sticky Orient→Evidence→Practice→Wrap",
        "L1 af-doac-start Evidence visuals (js/learn-visuals.js) — Reviewer-PASS gated cells; soft Continue/Skip visual"
      ]
    },
    {
      date: "2026-09-30",
      title: "Learn v2a",
      items: [
        "Start here chip; session Browse for now; Reset for next learner"
      ]
    },
    {
      date: "2026-09-30",
      title: "Stress-free Learn welcome",
      items: [
        "Dismissible first-run welcome strip (Start guided path / Browse the timeline) + calm Learn chrome (n of 10 · no rush; lesson-complete copy)"
      ]
    },
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
