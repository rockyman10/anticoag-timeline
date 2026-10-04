/* Evidence-based anticoagulant DDI library — curated teaching cards; never invent PK numbers */
/* Expansion paused after oncology TKI tranche for clinical review */
window.ANTICOAG_DDI = {
  "meta": {
    "title": "Evidence-based anticoagulant DDI library",
    "banner": "Educational resource — not a prescribing system. Verify current US/EU product labeling and institutional protocols. Evidence is graded; gaps are labeled. PK magnitudes are mostly healthy-volunteer studies unless noted.",
    "lastCurated": "2026-09-26",
    "primaryReferences": [
      {
        "label": "EHRA 2021 Practical Guide on DOACs in AF",
        "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
        "url": "https://doi.org/10.1093/europace/euab065"
      },
      {
        "label": "JACC Review: Select DDIs with DOACs",
        "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
        "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
      },
      {
        "label": "Apixaban Clinical PK/PD Review",
        "citation": "Byon W, et al. Clin Pharmacokinet. 2019.",
        "url": "https://doi.org/10.1007/s40262-019-00775-z"
      },
      {
        "label": "Rivaroxaban + CYP3A4/P-gp inhibitors PK study",
        "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013.",
        "url": "https://doi.org/10.1111/bcp.12075"
      },
      {
        "label": "DOAC DDI management resource (collated PK)",
        "citation": "Mar PL, et al. / practice tool summarizing primary PK (PMC9647398).",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
      }
    ],
    "pkDeepening": "Primary-literature PK deepening for CV/azole/macrolide pairs; microdose studies explicitly flagged.",
    "tranche2": "HIV/Paxlovid/HCV DAAs, mild-CV clinical bleed layer, transplant CNI discrepancy, ibrutinib PD bleed",
    "tranche3": "Strong inducers + antiseizure drugs",
    "tranche4": "Antiplatelet/NSAID PD depth + herbals/OTC",
    "tranche5_oncology": "Oncology TKI / cancer-drug tranche — expansion paused for clinical review",
    "expansionStatus": "Deferred tranche shipped 2026-09-26 (edoxaban-clarithromycin replace + 4 warfarin appends); oncology TKI suite remains paused for clinical review",
  "clinicGap": "Warfarin clinic gaps + azithromycin DOAC suite + edoxaban–erythromycin Parasrampuria PK + dabigatran–colchicine stack awareness",
  "deferredTranche": "2026-09-26: edoxaban-clarithromycin Lenard therapeutic-dose replace; warfarin omeprazole/pantoprazole/bosentan/erythromycin — bosentan×DOAC, rifabutin, erythromycin→apix/dabig, colchicine×other DOACs, oncology incomplete AUC remain re-deferred"
  },
  "primer": {
    "title": "Mechanism primer — which pathways matter?",
    "body": [
      "Dabigatran etexilate: P-gp substrate; negligible CYP metabolism. Think P-gp inhibitors/inducers and renal clearance.",
      "Apixaban: P-gp + CYP3A4 (and other CYPs to a lesser extent). Strong dual P-gp/CYP3A4 inhibitors/inducers matter most.",
      "Rivaroxaban: P-gp + CYP3A4. Same dual-pathway theme; food affects higher doses but is separate from DDIs.",
      "Edoxaban: P-gp substrate; minimal CYP3A4. Many labels use 30 mg dose with selected P-gp inhibitors.",
      "Warfarin: CYP2C9 (S-warfarin), CYP1A2/CYP3A4 (R-warfarin), VKORC1 pharmacodynamics — manage with INR, not DOAC-style AUC cards.",
      "Inducers (rifampin, carbamazepine, phenytoin, phenobarbital, primidone, St John's wort): ↓ DOAC exposure → thrombosis / loss-of-efficacy risk — the opposite clinical worry from inhibitor-related bleeding. Prefer non-inducing antiseizure alternatives when a DOAC must continue.",
      "PD bleed stacks vs PK exposure: Antiplatelets, NSAIDs, SSRIs, and many herbals increase bleeding without necessarily changing DOAC AUC — filter “PD bleed.” CYP/P-gp inhibitors/inducers change exposure (bleed or thrombosis). Do not treat every alert as the same biology.",
      "Herbals/OTC: St John’s wort is a PK inducer (see rivaroxaban −24% AUC). Garlic/ginkgo/turmeric/ginger are mostly PD/case concerns (culinary ≠ extract). Fish oil: lab antiplatelet effect often without excess clinical bleed in RCTs — mechanism ≠ outcome.",
      "CAT + oral anticancer drugs: Choose the anticoagulant by interaction burden, not habit. Strong inducers (e.g., enzalutamide, rifampin-class) threaten DOAC efficacy — LMWH is the escape hatch. Strong inhibitors / PD bleed drugs (e.g., BTKis) threaten bleeding — minimize stacks and involve oncology pharmacy. Apixaban is often preferred in CAT when PK risk is acceptable (Caravaggio-era practice); still verify each TKI. See #/pathway/cancer-vte and #/framework/cancer-vte. Quantitative DOAC–TKI AUC is frequently absent — that gap is labeled on cards."
    ]
  },
  "howToUse": {
    "title": "How to use this library",
    "steps": [
      "Pick an anticoagulant or search an interactor (generic/brand synonyms).",
      "Optionally filter by mechanism (P-gp, CYP3A4, CYP2C9, PD bleed).",
      "Open a card for quantified PK (when curated), clinical signals, label/EHRA-style guidance, and honest uncertainty.",
      "Use Compare on an interactor to see AUC/effect direction across DOACs side-by-side.",
      "Still verify the current country label before changing therapy.",
      "Oncology/CAT: search TKI names or use the Oncology quick chip; prefer LMWH when strong inducers/inhibitors dominate."
    ]
  },
  "whyCdsWrong": {
    "title": "Why CDS alerts are often wrong (or incomplete)",
    "points": [
      "Many alerts fire on mechanism class without showing effect size (is this +20% or ×2.5?).",
      "Alerts rarely state who was studied (healthy volunteer vs CKD elderly).",
      "Severity rankings differ across vendors and may lag labeling updates.",
      "PD bleed overlaps (NSAID/aspirin) get the same visual weight as mild PK bumps — or the reverse.",
      "This library shows the receipt: parameter, population, citation, grade, and what remains unknown."
    ]
  },
  "anticoagulants": [
    "Warfarin",
    "Dabigatran",
    "Apixaban",
    "Rivaroxaban",
    "Edoxaban"
  ],
  "mechanismFilters": [
    {
      "id": "P-gp",
      "label": "P-gp",
      "match": [
        "P-gp inhibition",
        "P-gp induction"
      ]
    },
    {
      "id": "CYP3A4",
      "label": "CYP3A4",
      "match": [
        "CYP3A4 inhibition",
        "CYP3A4 induction"
      ]
    },
    {
      "id": "CYP2C9",
      "label": "CYP2C9",
      "match": [
        "CYP2C9 inhibition",
        "CYP2C9 induction"
      ]
    },
    {
      "id": "PD-bleed",
      "label": "PD bleed",
      "match": [
        "PD antiplatelet (lab) — clinical bleed often absent",
        "PD bleed concern (supplement)",
        "PD additive bleed",
        "PD antagonism of warfarin (vitamin K)"
      ]
    },
    {
      "id": "PD-thrombotic",
      "label": "PD thrombotic / ↓ efficacy",
      "match": []
    }
  ],
  "entries": [
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ketoconazole",
      "interactorSlug": "ketoconazole",
      "synonyms": [
        "Nizoral",
        "azole antifungal"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Cmax",
          "change": "+62% (90% CI 47–78%)",
          "population": "Healthy subjects (n=18)",
          "design": "Therapeutic-dose DDI: apixaban 10 mg days 1 & 7; ketoconazole 400 mg QD days 4–9",
          "n": "18",
          "regimenNotes": "Primary Frost BJCP study",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "parameter": "AUC∞",
          "change": "+99% (90% CI 81–118%) ≈×2",
          "population": "Healthy subjects (n=18)",
          "design": "Same Frost ketoconazole study",
          "n": "18",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR ≈1.64 (microdose cocktail)",
          "population": "Healthy volunteers — MICRODOSE FXaI cocktail",
          "design": "Azole perpetrator study with microdosed apixaban/rivaroxaban/edoxaban",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Frost figures are therapeutic-dose healthy volunteers. Microdose AUCR (~1.64) is lower than Frost ×2 — do not interchange designs. Elderly/renal impairment may further raise exposure.",
      "practiceInterpretation": "Avoid or follow US PI (often 50% dose reduction if on 5/10 mg BID; avoid if already 2.5 mg BID). Prefer alternative antifungal when feasible.",
      "labelGuidance": "EHRA red / strong dual inhibitor class. US PI dose-reduce or avoid.",
      "uncertainty": "Bleed endpoints for the exact pair are not the primary evidence — PK + label drive decisions.",
      "sources": [
        {
          "label": "Frost et al. BJCP 2015 (apixaban ± ketoconazole/diltiazem)",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015;79:838-846.",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-ketoconazole"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ketoconazole",
      "interactorSlug": "ketoconazole",
      "synonyms": [
        "Nizoral"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+158% (90% CI 136–182%) ≈×2.6",
          "population": "Healthy subjects",
          "design": "Therapeutic-dose: steady-state rivaroxaban 10 mg + ketoconazole 400 mg QD",
          "regimenNotes": "Ketoconazole 200 mg caused smaller ↑ (AUC +82%) — inhibitor dose matters",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "parameter": "Cmax",
          "change": "+72% (90% CI 61–83%) ≈×1.7",
          "population": "Healthy subjects",
          "design": "Same 400 mg ketoconazole study",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR 2.32 (microdose cocktail)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Microdosed FXaI cocktail + therapeutic azole",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Therapeutic-dose Mueck data are preferred for clinical teaching; microdose AUCR is supportive rank-order evidence only.",
      "practiceInterpretation": "Avoid systemic ketoconazole with rivaroxaban (label not recommended).",
      "labelGuidance": "EHRA red / SmPC avoid strong dual inhibitors.",
      "uncertainty": "Clinical bleed RCTs of the pair are not required for the avoid recommendation given magnitude.",
      "sources": [
        {
          "label": "Mueck et al. BJCP 2013 (rivaroxaban DDI program)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98.",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "rivaroxaban-ketoconazole"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ketoconazole",
      "interactorSlug": "ketoconazole",
      "synonyms": [
        "Nizoral"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+138% to +153% (EHRA cites ≈+140–150%)",
          "population": "Healthy volunteers (label/PK program)",
          "design": "Single and multiple oral ketoconazole 400 mg with dabigatran",
          "citation": "EHRA 2021; dabigatran US PI / collated reviews",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "parameter": "Cmax",
          "change": "+135% to +149%",
          "population": "Healthy volunteers",
          "design": "Same ketoconazole program",
          "citation": "Collated in DOAC DDI resource (PMC9647398)",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "P-gp inhibition in gut/kidney; renal impairment amplifies dabigatran exposure independently.",
      "practiceInterpretation": "US labeling has used dose adjustment in selected CrCl bands historically — verify current regional PI. Many guides treat strong P-gp inhibitors as avoid or specialist-only with dabigatran.",
      "labelGuidance": "EHRA: major ↑ exposure; US historically allowed 75 mg BID with ketoconazole if CrCl 30–50 in some label eras — always re-check current PI.",
      "uncertainty": "Confirm current country-specific dabigatran–ketoconazole dosing text before teaching a fixed dose.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "DOAC DDI management resource (collated PK)",
          "citation": "Mar PL, et al. / practice tool summarizing primary PK (PMC9647398).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-ketoconazole"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ketoconazole",
      "interactorSlug": "ketoconazole",
      "synonyms": [
        "Nizoral"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+87%",
          "population": "Healthy volunteers / EHRA-cited label PK",
          "design": "Therapeutic-dose ketoconazole coadministration (EHRA table)",
          "citation": "EHRA 2021 Practical Guide",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "parameter": "Cmax",
          "change": "+89%",
          "population": "Healthy volunteers / EHRA-cited label PK",
          "design": "Same EHRA-cited ketoconazole data",
          "citation": "EHRA 2021",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR ≈2.08 (microdose cocktail)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Microdosed edoxaban + ketoconazole",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Label often recommends edoxaban 30 mg daily with certain P-gp inhibitors including ketoconazole.",
      "practiceInterpretation": "Dose-reduce per label when combination cannot be avoided.",
      "labelGuidance": "EHRA / label: dose reduce to 30 mg daily with ketoconazole (typical pathway).",
      "uncertainty": "Clinical outcome data limited vs PK+label.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-ketoconazole"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Itraconazole",
      "interactorSlug": "itraconazole",
      "synonyms": [
        "Sporanox"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (class / microdose context)",
          "change": "Pair-specific therapeutic-dose AUC not curated; manage as strong dual inhibitor (ketoconazole Frost ≈×2 is the therapeutic benchmark)",
          "population": "Extrapolation + microdose program context",
          "design": "Microdose azole cocktail ranks strong azole perpetrators; itraconazole is a strong dual inhibitor class agent",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al.; Frost ketoconazole as therapeutic benchmark",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Prefer Frost ketoconazole therapeutic-dose data as magnitude anchor for strong dual inhibitors.",
      "practiceInterpretation": "Avoid or dose-adjust per strong dual inhibitor PI rules.",
      "labelGuidance": "EHRA red-class with strong dual inhibitors.",
      "uncertainty": "Quantitative therapeutic-dose apixaban+itraconazole AUC not identified in curated sources.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "Frost et al. BJCP 2015 (apixaban ± ketoconazole/diltiazem)",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015;79:838-846.",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-itraconazole"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Itraconazole",
      "interactorSlug": "itraconazole",
      "synonyms": [
        "Sporanox"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR ≈1.47× (microdose cocktail)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Therapeutic itraconazole + microdosed FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Only microdose AUCR curated here; label still groups itraconazole with strong dual inhibitors to avoid with rivaroxaban at therapeutic doses.",
      "practiceInterpretation": "Avoid systemic itraconazole with rivaroxaban per labeling class effect; microdose AUCR underestimates clinical concern relative to ketoconazole therapeutic data.",
      "labelGuidance": "SmPC: avoid azoles that strongly inhibit CYP3A4+P-gp.",
      "uncertainty": "Therapeutic-dose rivaroxaban+itraconazole AUC not separately listed in this curation beyond class/label.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "rivaroxaban-itraconazole"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Itraconazole",
      "interactorSlug": "itraconazole",
      "synonyms": [
        "Sporanox"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Strong P-gp inhibitor class effect; quantitative pair-specific AUC not identified in this curation — see ketoconazole as P-gp benchmark.",
      "practiceInterpretation": "Manage as strong inhibitor class per EHRA/label (often avoid or dose-adjust). Prefer alternative antifungal when possible.",
      "labelGuidance": "EHRA red/orange depending on agent — align with product labeling for itraconazole.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair beyond class extrapolation from ketoconazole/ritonavir-type inhibitors.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-itraconazole"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Itraconazole",
      "interactorSlug": "itraconazole",
      "synonyms": [
        "Sporanox"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "P-gp inhibitor; label may list dose reduction with certain azoles — verify PI.",
      "practiceInterpretation": "Manage as strong inhibitor class per EHRA/label (often avoid or dose-adjust). Prefer alternative antifungal when possible.",
      "labelGuidance": "EHRA red/orange depending on agent — align with product labeling for itraconazole.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair beyond class extrapolation from ketoconazole/ritonavir-type inhibitors.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-itraconazole"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ritonavir",
      "interactorSlug": "ritonavir",
      "synonyms": [
        "Norvir",
        "boosted PI",
        "cobicistat",
        "Paxlovid",
        "nirmatrelvir-ritonavir",
        "HIV PI booster",
        "ART booster",
        "Paxlovid booster component"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+153% (90% CI 134–174%) ≈×2.5",
          "population": "Healthy subjects",
          "design": "Therapeutic-dose rivaroxaban DDI with ritonavir (Mueck program / labeling)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013; SmPC",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "parameter": "Cmax",
          "change": "≈×1.6 (labeling; with ×2.5 AUC)",
          "population": "Healthy subjects / labeling",
          "design": "Ritonavir 600 mg BID class statement in SmPC",
          "citation": "Rivaroxaban SmPC/PI",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Healthy-volunteer therapeutic-dose DDI. Chronic boosted ART may differ from short-course ritonavir (mixed induction/inhibition with long-term use). Cobicistat is a pure inhibitor without induction — still treat as high-risk P-gp/CYP3A4 inhibition for rivaroxaban.",
      "practiceInterpretation": "Avoid rivaroxaban with ritonavir-boosted ART or other chronic boosters whenever possible (HIV anticoagulation reviews + SmPC: strong dual inhibitor). Therapeutic-dose PK ≈×2.5 AUC (Mueck) underpins the avoid recommendation. For short-course nirmatrelvir/ritonavir see dedicated Paxlovid cards — often temporary anticoagulant switch.",
      "labelGuidance": "SmPC/PI: not recommended with strong dual CYP3A4+P-gp inhibitors including ritonavir / many boosted PIs.",
      "uncertainty": "Exact AUC for every cobicistat schedule may differ — ritonavir is the quantified therapeutic-dose anchor.",
      "sources": [
        {
          "label": "Mueck et al. BJCP 2013",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98.",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "label": "Rivaroxaban SmPC",
          "citation": "Rivaroxaban product labeling.",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "rivaroxaban-ritonavir"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ritonavir",
      "interactorSlug": "ritonavir",
      "synonyms": [
        "Norvir",
        "boosted PI",
        "cobicistat",
        "darunavir-cobicistat",
        "HIV PI booster",
        "ART booster"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No dedicated apixaban–ritonavir/cobicistat therapeutic-dose AUC identified in this curation. Ketoconazole (Frost) ≈+99% AUC / +62% Cmax is the program's strong dual-inhibitor PK anchor used for labeling.",
      "practiceInterpretation": "US PI: reduce apixaban dose by 50% when coadministered with combined strong CYP3A4 and P-gp inhibitors if otherwise on 5 or 10 mg BID; avoid if already on 2.5 mg BID. Prefer alternative anticoagulant or unboosted ART when feasible — coordinate with HIV pharmacy.",
      "labelGuidance": "US label dual strong inhibitor rules; EHRA red-class thinking for boosted PIs/cobicistat.",
      "uncertainty": "Quantitative PK not identified for apixaban+ritonavir specifically — ketoconazole analog + label only.",
      "sources": [
        {
          "label": "Frost et al. BJCP 2015 (ketoconazole analog)",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015;79:838-846.",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "label": "US PI / label class guidance",
          "citation": "US prescribing information (apixaban strong dual inhibitor dose rules; ritonavir class).",
          "url": null
        },
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-ritonavir"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ritonavir",
      "interactorSlug": "ritonavir",
      "synonyms": [
        "Norvir",
        "cobicistat",
        "Paxlovid"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "P-gp (±CYP) inhibition expected; pair-specific AUC not curated here.",
      "practiceInterpretation": "Check current PI and HIV/COVID specialty guidance before combining.",
      "labelGuidance": "Often avoid or specialist management — verify label.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-ritonavir"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ritonavir",
      "interactorSlug": "ritonavir",
      "synonyms": [
        "Norvir",
        "cobicistat",
        "Paxlovid"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "P-gp (±CYP) inhibition expected; pair-specific AUC not curated here.",
      "practiceInterpretation": "Check current PI and HIV/COVID specialty guidance before combining.",
      "labelGuidance": "Often avoid or specialist management — verify label.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-ritonavir"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Clarithromycin",
      "interactorSlug": "clarithromycin",
      "synonyms": [
        "Biaxin"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+54% (90% CI 44–64%) ≈×1.54",
          "population": "Healthy subjects",
          "design": "Therapeutic-dose rivaroxaban 10 mg + clarithromycin 500 mg BID (Mueck)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "parameter": "Cmax",
          "change": "+40% (90% CI 30–52%) ≈×1.40",
          "population": "Healthy subjects",
          "design": "Same clarithromycin study",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        }
      ],
      "clinicalEffects": [],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Much smaller than ketoconazole/ritonavir; high-risk patients and renal impairment may still matter (label nuance).",
      "practiceInterpretation": "Often acceptable short course with caution; prefer non-interacting antibiotic if bleed risk high.",
      "labelGuidance": "SmPC: likely not clinically relevant in most patients but potentially significant in high-risk.",
      "uncertainty": "Observational bleed databases conflict — do not over-call from PK alone.",
      "sources": [
        {
          "label": "Mueck et al. BJCP 2013 (rivaroxaban DDI program)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98.",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "rivaroxaban-clarithromycin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Clarithromycin",
      "interactorSlug": "clarithromycin",
      "synonyms": [
        "Biaxin"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Cmax",
          "change": "+30% (GMR 1.299; 90% CI 1.220–1.384)",
          "population": "Healthy volunteers (n=19 enrolled)",
          "design": "Single-sequence crossover: apixaban 10 mg alone vs with clarithromycin IR 500 mg BID",
          "n": "19",
          "citation": "Garonzik S, et al. Am J Cardiovasc Drugs. 2019",
          "url": "https://doi.org/10.1007/s40256-019-00348-2"
        },
        {
          "parameter": "AUC(INF)",
          "change": "+60% (GMR 1.595; 90% CI 1.506–1.698)",
          "population": "Healthy volunteers",
          "design": "Same clarithromycin study",
          "citation": "Garonzik S, et al. Am J Cardiovasc Drugs. 2019",
          "url": "https://doi.org/10.1007/s40256-019-00348-2"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "↑ smaller than ketoconazole despite 'strong dual inhibitor' labeling class — potency on P-gp vs CYP3A4 differs by perpetrator.",
      "practiceInterpretation": "Short courses often manageable with vigilance in average-risk patients; reconsider if high bleed risk or multiple inhibitors.",
      "labelGuidance": "Less severe than ketoconazole-class; check PI and patient-level risk.",
      "uncertainty": "Observational macrolide–DOAC bleed signals are heterogeneous.",
      "sources": [
        {
          "label": "Garonzik et al. Am J Cardiovasc Drugs 2019 (apixaban + clarithromycin)",
          "citation": "Garonzik S, et al. Am J Cardiovasc Drugs. 2019;19:561-567.",
          "url": "https://doi.org/10.1007/s40256-019-00348-2"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-clarithromycin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Clarithromycin",
      "interactorSlug": "clarithromycin",
      "synonyms": [
        "Biaxin"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+49% (single-dose dabigatran 300 mg + clarithromycin 500 mg BID design cited in collated resource)",
          "population": "Healthy volunteers (small n cited ≈10 in collated summary)",
          "design": "Therapeutic-dose clarithromycin DDI (collated from primary)",
          "n": "≈10 (collated)",
          "regimenNotes": "Collated summary — prefer reading primary if making protocol",
          "citation": "Collated in DOAC DDI resource PMC9647398",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        },
        {
          "parameter": "Cmax",
          "change": "+60% (same collated clarithromycin study)",
          "population": "Healthy volunteers",
          "design": "Same study",
          "citation": "PMC9647398 collated PK",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Small-n collated figure; still useful vs pure label extrapolation.",
      "practiceInterpretation": "Short courses with caution; avoid in high bleed risk if alternatives exist.",
      "labelGuidance": "P-gp inhibitor caution.",
      "uncertainty": "Confirm primary paper numbers before guideline-level dosing rules.",
      "sources": [
        {
          "label": "DOAC DDI management resource",
          "citation": "PMC9647398 collated PK",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-clarithromycin"
    },
        {
      "anticoagulant": "Edoxaban",
      "interactor": "Clarithromycin",
      "interactorSlug": "clarithromycin",
      "synonyms": [
        "Biaxin"
      ],
      "mechanisms": [
        "P-gp inhibition (dominant for edoxaban)",
        "CYP3A4 inhibition (minimal CYP contribution to edoxaban clearance)"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC0-∞",
          "change": "+53% (GMR 1.53; 90% CI 1.37–1.70)",
          "population": "Healthy volunteers (n=12)",
          "design": "Therapeutic-dose edoxaban 60 mg alone vs during clarithromycin 500 mg BID to steady-state (Lenard fixed-sequence)",
          "regimenNotes": "Primary therapeutic-dose pair PK. Same study’s edoxaban 50 µg microdose AUC GMR 2.03 overestimated the interaction — do not teach the microdose figure as clinical magnitude.",
          "citation": "Lenard A, et al. Cardiovasc Drugs Ther. 2024;38:747-756.",
          "url": "https://doi.org/10.1007/s10557-023-07443-2"
        },
        {
          "parameter": "Cmax",
          "change": "+27% (GMR 1.27; 90% CI 1.02–1.58; p=0.08)",
          "population": "Healthy volunteers (n=12)",
          "design": "Same therapeutic-dose clarithromycin–edoxaban program",
          "regimenNotes": "Cmax increase less certain than AUC (CI includes values near 1.0; p=0.08). Prefer AUC for teaching magnitude.",
          "citation": "Lenard A, et al. Cardiovasc Drugs Ther. 2024;38:747-756.",
          "url": "https://doi.org/10.1007/s10557-023-07443-2"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Macrolide bleed signal (class context)",
          "signal": "Hill 2020: among older adults on apixaban/rivaroxaban/dabigatran (edoxaban not enrolled), clarithromycin associated with higher major-bleed hospitalization vs azithromycin — supports preferring azithromycin when microbiologically acceptable (class context only; not an edoxaban-specific AUC claim).",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "HV therapeutic-dose magnitude; renal impairment and stacked P-gp inhibitors may amplify exposure. Contrast with azithromycin (minimal expected PK) and with edoxaban–erythromycin (Parasrampuria +85% AUC / +68% Cmax — larger labeled macrolide exemplar).",
      "practiceInterpretation": "If clarithromycin cannot be avoided: apply **indication-specific** US SAVAYSA rules (NVAF ≠ DVT/PE), shorten the macrolide course when possible, and prefer azithromycin when acceptable. Do not teach a universal 60→30 mg cut for every edoxaban patient from EHRA alone.",
      "labelGuidance": "Lenard: therapeutic-dose AUC +53% / Cmax +27%. US SAVAYSA: NVAF — no dose reduction recommended for concomitant P-gp inhibitors; DVT/PE — reduce to 30 mg once daily with certain P-gp inhibitors (Hokusai short-term list included clarithromycin, erythromycin, azithromycin, oral itraconazole/ketoconazole). Restore 60 mg after the P-gp inhibitor stops if no other reduction criterion applies. EU/EHRA often teach 60→30 with selected macrolides — verify regional PI.",
      "uncertainty": "Authors judged the +53% HV AUC increase not expected to be clinically relevant in healthy subjects; label still dose-reduces for US VTE with clarithromycin. Cmax p=0.08 — softer than AUC. Microdose AUC GMR 2.03 must not be quoted as the therapeutic magnitude.",
      "sources": [
        {
          "label": "Lenard et al. Cardiovasc Drugs Ther 2024 (edoxaban + clarithromycin)",
          "citation": "Lenard A, Hermann SA, Stoll F, et al. Effect of clarithromycin… on the pharmacokinetics of edoxaban… Cardiovasc Drugs Ther. 2024;38:747-756. PMID 36870039.",
          "url": "https://doi.org/10.1007/s10557-023-07443-2"
        },
        {
          "label": "SAVAYSA US PI — P-gp inhibitors / DVT-PE dose reduction",
          "citation": "SAVAYSA (edoxaban) US prescribing information: NVAF — no P-gp dose reduction; DVT/PE — 30 mg OD with certain P-gp inhibitors (Hokusai list includes clarithromycin).",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/206316s019lbl.pdf"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676 — macrolide / P-gp inhibitor framework; verify agent-specific tables vs US PI forks.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Hill 2020 clarithromycin vs azithromycin bleed cohort",
          "citation": "Hill K, et al. Risk of hospitalization with hemorrhage among older adults taking clarithromycin vs azithromycin and DOACs. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "id": "edoxaban-clarithromycin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Rifampin",
      "interactorSlug": "rifampin",
      "synonyms": [
        "Rifampicin",
        "Rifadin"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [
        {
          "parameter": "AUC∞",
          "change": "↓≈54%",
          "population": "Healthy volunteers",
          "design": "Rifampin 600 mg QD induction with oral apixaban",
          "citation": "Byon W Clin Pharmacokinet / EHRA 2021",
          "url": "https://doi.org/10.1007/s40262-019-00775-z"
        },
        {
          "parameter": "Cmax",
          "change": "↓≈42%",
          "population": "Healthy volunteers",
          "design": "Same rifampin–apixaban program",
          "citation": "Clin Pharmacokinet / EHRA",
          "url": "https://doi.org/10.1007/s40262-019-00775-z"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Strong dual P-gp/CYP3A4 induction — avoid for efficacy. Healthy-volunteer induction magnitudes; patients may fare worse with illness/adherence issues.",
      "practiceInterpretation": "Avoid DOAC + rifampin whenever possible — thrombosis risk from loss of efficacy. If rifampin is essential, specialist plan (often warfarin with intensified INR monitoring or alternative).",
      "labelGuidance": "EHRA red for strong inducers. Edoxaban labeling often specifically discusses rifampin — still treat as avoid/high caution.",
      "uncertainty": "Edoxaban active-metabolite compensation does not make the combination 'safe.'",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "Apixaban Clin Pharmacokinet review",
          "citation": "Byon W, et al. Clin Pharmacokinet. 2019.",
          "url": "https://doi.org/10.1007/s40262-019-00775-z"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Thrombosis / loss of anticoagulant effect",
          "signal": "Strong inducers associated with treatment failure risk in reviews and case literature; prefer alternative antimycobacterial plan or supervised VKA when rifampin is mandatory.",
          "citation": "JACC DDI review; EHRA 2021",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "apixaban-rifampin"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Rifampin",
      "interactorSlug": "rifampin",
      "synonyms": [
        "Rifampicin",
        "Rifadin"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "↓≈50%",
          "population": "Healthy volunteers / EHRA-cited PK",
          "design": "Rifampin induction of rivaroxaban",
          "citation": "EHRA 2021; JACC DDI review ecosystem",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Avoid — clinically relevant loss of exposure. Healthy-volunteer induction magnitudes; patients may fare worse with illness/adherence issues.",
      "practiceInterpretation": "Avoid DOAC + rifampin whenever possible — thrombosis risk from loss of efficacy. If rifampin is essential, specialist plan (often warfarin with intensified INR monitoring or alternative).",
      "labelGuidance": "EHRA red for strong inducers. Edoxaban labeling often specifically discusses rifampin — still treat as avoid/high caution.",
      "uncertainty": "Edoxaban active-metabolite compensation does not make the combination 'safe.'",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Thrombosis / loss of anticoagulant effect",
          "signal": "Strong inducers associated with treatment failure risk in reviews and case literature; prefer alternative antimycobacterial plan or supervised VKA when rifampin is mandatory.",
          "citation": "JACC DDI review; EHRA 2021",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "rivaroxaban-rifampin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Rifampin",
      "interactorSlug": "rifampin",
      "synonyms": [
        "Rifampicin",
        "Rifadin"
      ],
      "mechanisms": [
        "P-gp induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "↓≈66%",
          "population": "Healthy volunteers / EHRA-cited PK",
          "design": "Rifampin P-gp induction",
          "citation": "EHRA 2021",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "parameter": "Cmax",
          "change": "↓≈67%",
          "population": "Healthy volunteers / EHRA-cited PK",
          "design": "Same rifampin program",
          "citation": "EHRA 2021",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Large ↓ exposure — avoid. Healthy-volunteer induction magnitudes; patients may fare worse with illness/adherence issues.",
      "practiceInterpretation": "Avoid DOAC + rifampin whenever possible — thrombosis risk from loss of efficacy. If rifampin is essential, specialist plan (often warfarin with intensified INR monitoring or alternative).",
      "labelGuidance": "EHRA red for strong inducers. Edoxaban labeling often specifically discusses rifampin — still treat as avoid/high caution.",
      "uncertainty": "Edoxaban active-metabolite compensation does not make the combination 'safe.'",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Thrombosis / loss of anticoagulant effect",
          "signal": "Strong inducers associated with treatment failure risk in reviews and case literature; prefer alternative antimycobacterial plan or supervised VKA when rifampin is mandatory.",
          "citation": "JACC DDI review; EHRA 2021",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "dabigatran-rifampin"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Rifampin",
      "interactorSlug": "rifampin",
      "synonyms": [
        "Rifampicin",
        "Rifadin"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "↓≈34–35%",
          "population": "Healthy volunteers / EHRA-cited PK",
          "design": "Rifampin with edoxaban; EHRA notes compensatory ↑ active metabolites",
          "citation": "EHRA 2021",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Parent AUC ↓ with metabolite complexity — still generally avoid for efficacy concerns; edoxaban labels often highlight rifampin specifically. Healthy-volunteer induction magnitudes; patients may fare worse with illness/adherence issues.",
      "practiceInterpretation": "Avoid DOAC + rifampin whenever possible — thrombosis risk from loss of efficacy. If rifampin is essential, specialist plan (often warfarin with intensified INR monitoring or alternative).",
      "labelGuidance": "EHRA red for strong inducers. Edoxaban labeling often specifically discusses rifampin — still treat as avoid/high caution.",
      "uncertainty": "Edoxaban active-metabolite compensation does not make the combination 'safe.'",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Thrombosis / loss of anticoagulant effect",
          "signal": "Strong inducers associated with treatment failure risk in reviews and case literature; prefer alternative antimycobacterial plan or supervised VKA when rifampin is mandatory.",
          "citation": "JACC DDI review; EHRA 2021",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "edoxaban-rifampin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Carbamazepine",
      "interactorSlug": "carbamazepine",
      "synonyms": [
        "Tegretol",
        "CBZ"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "apixaban-carbamazepine"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Carbamazepine",
      "interactorSlug": "carbamazepine",
      "synonyms": [
        "Tegretol",
        "CBZ"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "rivaroxaban-carbamazepine"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Carbamazepine",
      "interactorSlug": "carbamazepine",
      "synonyms": [
        "Tegretol",
        "CBZ"
      ],
      "mechanisms": [
        "P-gp induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Avoid P-gp inducers; phenytoin case of undetectable levels supports clinical concern even when CYP story is limited.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "dabigatran-carbamazepine"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Carbamazepine",
      "interactorSlug": "carbamazepine",
      "synonyms": [
        "Tegretol",
        "CBZ"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Check edoxaban PI — rifampin highlighted; ASM inducers still high-caution/avoid in practice guides. Edoxaban US/EU labels often emphasize rifampin among strong inducers more explicitly than listing every ASM — still treat carbamazepine/phenytoin/phenobarbital/primidone as high-concern inducers per EHRA/reviews; verify the exact label text you use.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "edoxaban-carbamazepine"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Phenytoin",
      "interactorSlug": "phenytoin",
      "synonyms": [
        "Dilantin"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "apixaban-phenytoin"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Phenytoin",
      "interactorSlug": "phenytoin",
      "synonyms": [
        "Dilantin"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "rivaroxaban-phenytoin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Phenytoin",
      "interactorSlug": "phenytoin",
      "synonyms": [
        "Dilantin"
      ],
      "mechanisms": [
        "P-gp induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Avoid P-gp inducers; phenytoin case of undetectable levels supports clinical concern even when CYP story is limited.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "outcome": "Undetectable dabigatran concentration",
          "signal": "Published case: dabigatran serum concentration undetectable while on phenytoin — high stroke risk if AF indication.",
          "citation": "PubMed 26846610",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        }
      ],
      "id": "dabigatran-phenytoin"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Phenytoin",
      "interactorSlug": "phenytoin",
      "synonyms": [
        "Dilantin"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Check edoxaban PI — rifampin highlighted; ASM inducers still high-caution/avoid in practice guides. Edoxaban US/EU labels often emphasize rifampin among strong inducers more explicitly than listing every ASM — still treat carbamazepine/phenytoin/phenobarbital/primidone as high-concern inducers per EHRA/reviews; verify the exact label text you use.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "edoxaban-phenytoin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Phenobarbital",
      "interactorSlug": "phenobarbital",
      "synonyms": [
        "Luminal",
        "PB"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "apixaban-phenobarbital"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Phenobarbital",
      "interactorSlug": "phenobarbital",
      "synonyms": [
        "Luminal",
        "PB"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "rivaroxaban-phenobarbital"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Phenobarbital",
      "interactorSlug": "phenobarbital",
      "synonyms": [
        "Luminal",
        "PB"
      ],
      "mechanisms": [
        "P-gp induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Avoid P-gp inducers; phenytoin case of undetectable levels supports clinical concern even when CYP story is limited.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "dabigatran-phenobarbital"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Phenobarbital",
      "interactorSlug": "phenobarbital",
      "synonyms": [
        "Luminal",
        "PB"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Check edoxaban PI — rifampin highlighted; ASM inducers still high-caution/avoid in practice guides. Edoxaban US/EU labels often emphasize rifampin among strong inducers more explicitly than listing every ASM — still treat carbamazepine/phenytoin/phenobarbital/primidone as high-concern inducers per EHRA/reviews; verify the exact label text you use.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "id": "edoxaban-phenobarbital"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "St John's wort",
      "interactorSlug": "st-johns-wort",
      "synonyms": [
        "Hypericum",
        "SJW",
        "herbal",
        "OTC herbal"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Expected ↓ via induction pharmacology. Pair-specific HV AUC for Apixaban+SJW not curated; rivaroxaban −24% AUC is the quantified prototype. Also indexed under herbals/OTC teaching — PK inducer (not PD bleed).",
      "practiceInterpretation": "Avoid SJW with DOACs — thrombosis risk from reduced exposure. Screen herbals at every visit.",
      "labelGuidance": "EHRA/label: avoid strong inducers including St John's wort.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "St John's wort + rivaroxaban HV PK/PD",
          "citation": "Huppertz A, et al. — Hypericum perforatum ↓ rivaroxaban AUC/Cmax (n=12). PubMed 32959922.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-st-johns-wort"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "St John's wort",
      "interactorSlug": "st-johns-wort",
      "synonyms": [
        "Hypericum",
        "SJW",
        "Hypericum perforatum",
        "herbal",
        "OTC herbal"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "↓24% (GMR 0.76; 90% CI 0.70–0.82)",
          "population": "Healthy volunteers (n=12)",
          "design": "Open-label sequential: rivaroxaban 20 mg before/after 2 weeks Hypericum extract",
          "n": "12",
          "citation": "Huppertz A, et al. PubMed 32959922",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        },
        {
          "parameter": "Cmax",
          "change": "↓14% (GMR 0.86; 90% CI 0.76–0.97)",
          "population": "Healthy volunteers (n=12)",
          "design": "Same SJW–rivaroxaban study",
          "n": "12",
          "citation": "Huppertz A, et al.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Hyperforin-containing extracts matter; product potency varies. Magnitude smaller than rifampin but still directionally important. Also indexed under herbals/OTC teaching — PK inducer (not PD bleed).",
      "practiceInterpretation": "Avoid SJW with rivaroxaban; ask specifically about herbal products.",
      "labelGuidance": "Avoid combination / consider monitoring — reviews and study authors advise avoidance.",
      "uncertainty": "OTC product variability limits precision of the −24% estimate across brands.",
      "sources": [
        {
          "label": "St John's wort + rivaroxaban HV PK/PD",
          "citation": "Huppertz A, et al. — Hypericum perforatum ↓ rivaroxaban AUC/Cmax (n=12). PubMed 32959922.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Factor Xa inhibition (PD)",
          "signal": "Area under effect-time curve for FXa inhibition ↓≈20% (GMR 0.80) after SJW — PD tracks PK reduction.",
          "citation": "Huppertz A, et al. rivaroxaban–SJW study",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        }
      ],
      "id": "rivaroxaban-st-johns-wort"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "St John's wort",
      "interactorSlug": "st-johns-wort",
      "synonyms": [
        "Hypericum",
        "SJW",
        "herbal",
        "OTC herbal"
      ],
      "mechanisms": [
        "P-gp induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Expected ↓ via induction pharmacology. Pair-specific HV AUC for Dabigatran+SJW not curated; rivaroxaban −24% AUC is the quantified prototype. Also indexed under herbals/OTC teaching — PK inducer (not PD bleed).",
      "practiceInterpretation": "Avoid SJW with DOACs — thrombosis risk from reduced exposure. Screen herbals at every visit.",
      "labelGuidance": "EHRA/label: avoid strong inducers including St John's wort.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "St John's wort + rivaroxaban HV PK/PD",
          "citation": "Huppertz A, et al. — Hypericum perforatum ↓ rivaroxaban AUC/Cmax (n=12). PubMed 32959922.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-st-johns-wort"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "St John's wort",
      "interactorSlug": "st-johns-wort",
      "synonyms": [
        "Hypericum",
        "SJW",
        "herbal",
        "OTC herbal"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Expected ↓ via induction pharmacology. Pair-specific HV AUC for Edoxaban+SJW not curated; rivaroxaban −24% AUC is the quantified prototype. Also indexed under herbals/OTC teaching — PK inducer (not PD bleed).",
      "practiceInterpretation": "Avoid SJW with DOACs — thrombosis risk from reduced exposure. Screen herbals at every visit.",
      "labelGuidance": "EHRA/label: avoid strong inducers including St John's wort.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "St John's wort + rivaroxaban HV PK/PD",
          "citation": "Huppertz A, et al. — Hypericum perforatum ↓ rivaroxaban AUC/Cmax (n=12). PubMed 32959922.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/32959922/"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-st-johns-wort"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Amiodarone",
      "interactorSlug": "amiodarone",
      "synonyms": [
        "Pacerone",
        "Cordarone"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Bioavailability / exposure (HV)",
          "change": "≈+50–60% bioavailability increase (classic HV / single-dose amiodarone context)",
          "population": "Healthy volunteers",
          "design": "Classic HV DDI cited in Pharmaceutics 2022 review",
          "regimenNotes": "Often referenced as single-dose amiodarone 600 mg–type designs in labels/reviews",
          "citation": "Ferri N, et al. Pharmaceutics. 2022 (citing primary HV data)",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "parameter": "AUC (AF patients)",
          "change": "≈+12% steady-state exposure/bioavailability",
          "population": "NVAF patients in RE-LY population PK",
          "design": "Covariate effect of amiodarone co-medication in RE-LY popPK",
          "n": "RE-LY PK subset (thousands of concentrations)",
          "regimenNotes": "Patient estimate much smaller than HV bioavailability bump — do not quote only the HV figure",
          "citation": "Liesenfeld KH, et al. J Thromb Haemost. 2011",
          "url": "https://doi.org/10.1111/j.1538-7836.2011.04498.x"
        }
      ],
      "evidenceGrade": "PK-patient",
      "populationCaveats": "DISCREPANCY: HV studies show ~+50–60% bioavailability; RE-LY AF popPK shows only ~+12% AUC/exposure with amiodarone. Teach both — HV overestimates typical AF patient effect; bleeding cohorts still warrant vigilance. Long amiodarone half-life matters clinically.",
      "practiceInterpretation": "Common combination — monitor bleeding; do not dose-cut solely from HV +50–60% without checking current PI and renal function. Avoid stacking other P-gp inhibitors.",
      "labelGuidance": "EHRA yellow/orange caution — not automatic contraindication.",
      "uncertainty": "Which estimate predicts bleed risk better remains debated; observational bleed signals ≠ proven causal PK magnitude.",
      "sources": [
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "RE-LY population PK (Liesenfeld et al.)",
          "citation": "Liesenfeld KH, et al. J Thromb Haemost. 2011 — AF patient covariates including amiodarone/verapamil.",
          "url": "https://doi.org/10.1111/j.1538-7836.2011.04498.x"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Major bleeding",
          "signal": "Some cohorts report higher major bleeding with dabigatran+amiodarone vs dabigatran alone (observational; confounding possible)",
          "citation": "Discussed in Pharmaceutics 2022 review",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "id": "dabigatran-amiodarone"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Amiodarone",
      "interactorSlug": "amiodarone",
      "synonyms": [
        "Pacerone"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "≈×1.36 in healthy subjects with amiodarone 200 mg daily ×3 days",
          "population": "Healthy subjects",
          "design": "Short-course amiodarone; cited in JACC DDI review",
          "regimenNotes": "Review-level citation of primary PK — not opened as primary PDF in this curation",
          "citation": "Wiggins BS, et al. JACC 2020",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "parameter": "AUC",
          "change": "≈×1.86 with CrCl 50–79 mL/min; ≈×1.61 on rivaroxaban 15 mg with CrCl 30–49 mL/min (review-cited)",
          "population": "Renal-impaired strata",
          "design": "Amiodarone + rivaroxaban with renal impairment — JACC review summary",
          "regimenNotes": "Age further potentiates in cited analyses",
          "citation": "Wiggins BS, et al. JACC 2020",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "outcome": "Major bleeding",
          "signal": "Taiwan NHIRD AF cohort: amiodarone + DOAC associated with higher major bleeding (observational)",
          "citation": "Discussed in JACC 2020",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "evidenceGrade": "PK-patient",
      "populationCaveats": "Healthy 1.36× understates risk when CKD present. Grade PK-patient because renal strata drive the teaching point; primary tables summarized via JACC review. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Reassess rivaroxaban dose/indication when starting amiodarone in reduced CrCl; healthy-volunteer reassurance is misplaced in CKD.",
      "labelGuidance": "EHRA caution; practical renal-focused monitoring.",
      "uncertainty": "Prefer consulting primary renal DDI study if making protocol-level dose rules.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-amiodarone"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Amiodarone",
      "interactorSlug": "amiodarone",
      "synonyms": [
        "Pacerone"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+39.8%",
          "population": "Healthy subjects (n=30)",
          "design": "Edoxaban 60 mg alone vs + P-gp inhibitor (Mendell crossover/single-sequence program)",
          "n": "30",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        }
      ],
      "evidenceGrade": "PK-patient",
      "populationCaveats": "Healthy subjects, single-dose edoxaban 60 mg with P-gp inhibitor (Mendell). ENGAGE patient data suggest ongoing concentration/bleed relevance with amiodarone.",
      "practiceInterpretation": "Amiodarone + edoxaban: HV AUC +39.8% (n=30); ENGAGE suggests higher concentrations and more bleeding on high-dose arm — monitor closely and follow label.",
      "labelGuidance": "EHRA/label: dose reduction pathways for selected P-gp inhibitors; amiodarone often caution rather than mandatory 30 mg — verify.",
      "uncertainty": "Exact ENGAGE concentration percentages vary by report — cite primary ENGAGE subgroup paper when teaching journal club.",
      "sources": [
        {
          "label": "Mendell et al. Am J Cardiovasc Drugs 2013 (edoxaban + CV P-gp inhibitors)",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013;13:331-342.",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        },
        {
          "label": "Mendell et al. PMC3781304",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013 (PMC3781304).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3781304/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / concentrations in ENGAGE context",
          "signal": "ENGAGE AF-TIMI 48 subgroup analyses associated amiodarone with higher edoxaban concentrations (about +20–26% in reported subgroup summaries) and more bleeding on the high-dose edoxaban arm — clinicalEffects support caution beyond HV AUC +39.8%",
          "citation": "ENGAGE subgroup literature discussed with Mendell/edoxaban labeling ecosystem",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3781304/"
        }
      ],
      "id": "edoxaban-amiodarone"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Amiodarone",
      "interactorSlug": "amiodarone",
      "synonyms": [
        "Pacerone"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "outcome": "Major bleeding (observational DOAC class analyses)",
          "signal": "Claims-data signals for amiodarone+DOAC bleed risk reported in some cohorts; apixaban-specific healthy-volunteer AUC for amiodarone not separately curated here",
          "citation": "Discussed in JACC 2020 DDI review (cohort heterogeneity)",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Weaker/less quantified PK vs dabigatran or rivaroxaban–renal data; still a P-gp/CYP3A4 moderate interaction concern. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Common real-world combination — monitor bleeding, avoid additional inhibitors/NSAIDs, ensure correct apixaban dose-reduction criteria.",
      "labelGuidance": "Usually caution rather than absolute avoid.",
      "uncertainty": "Quantitative PK not identified in curated sources for apixaban+amiodarone specifically.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-amiodarone"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Dronedarone",
      "interactorSlug": "dronedarone",
      "synonyms": [
        "Multaq"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Cmax",
          "change": "≈×1.73 with concomitant dosing (dabigatran 150 mg BID context)",
          "population": "Healthy subjects / labeled DDI",
          "design": "Concomitant dronedarone + dabigatran",
          "citation": "Ferri N, et al. Pharmaceutics. 2022 (citing primary DDI)",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "parameter": "AUC",
          "change": "≈×2 with concomitant dosing (≈+100%); reviews also cite +114–136% AUC / +87–125% Cmax ranges",
          "population": "Healthy subjects / labeled DDI",
          "design": "Concomitant administration",
          "citation": "Pharmaceutics 2022; DOAC DDI collated resource",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "parameter": "AUC / Cmax (separated)",
          "change": "Substantially attenuated if doses separated by ~2 h (review-cited ≈+23% AUC / +9% Cmax) — still not a routine workaround for contraindicated contexts",
          "population": "Timing exploration / review-cited",
          "design": "Separated administration vs concomitant",
          "regimenNotes": "Prefer avoidance over relying on separation in practice",
          "citation": "Timing discussed in DDI reviews; verify primary/label",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Concomitant exposure roughly doubles — US label historically allows 75 mg BID only in selected CrCl 30–50 contexts; often treated as avoid.",
      "practiceInterpretation": "Generally avoid dabigatran + dronedarone; choose alternative anticoagulant or antiarrhythmic. Do not rely on 2-hour separation as a safe clinical strategy when label advises against use.",
      "labelGuidance": "EHRA red/avoid for many patients; check current US PI renal exceptions carefully.",
      "uncertainty": "Exact separated-dosing primary table should be confirmed if teaching separation numerically.",
      "sources": [
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-dronedarone"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Verapamil",
      "interactorSlug": "verapamil",
      "synonyms": [
        "Calan",
        "Isoptin"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+143% (90% CI 91–208%) when IR verapamil 120 mg given 1 h before dabigatran",
          "population": "Healthy subjects (Härtter timing study)",
          "design": "Therapeutic dabigatran 150 mg ± verapamil IR/ER with varied timing",
          "n": "40 healthy subjects (two-part crossover)",
          "regimenNotes": "Largest effect: IR verapamil BEFORE dabigatran",
          "citation": "Härtter S, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/j.1365-2125.2012.04453.x"
        },
        {
          "parameter": "Cmax",
          "change": "+179% (90% CI 115–262%) with IR verapamil 1 h before dabigatran",
          "population": "Healthy subjects",
          "design": "Same Härtter study",
          "citation": "Härtter S, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/j.1365-2125.2012.04453.x"
        },
        {
          "parameter": "AUC / Cmax",
          "change": "<+20% if dabigatran given 2 h before verapamil",
          "population": "Healthy subjects",
          "design": "Timing separation arm",
          "regimenNotes": "Counsel: give dabigatran ≥2 h before verapamil to minimize gut P-gp interaction",
          "citation": "Härtter S, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/j.1365-2125.2012.04453.x"
        },
        {
          "parameter": "AUC (AF patients)",
          "change": "≈+23% bioavailability/exposure with verapamil covariate",
          "population": "NVAF RE-LY popPK",
          "design": "Population PK covariate for verapamil",
          "citation": "Liesenfeld KH, et al. J Thromb Haemost. 2011",
          "url": "https://doi.org/10.1111/j.1538-7836.2011.04498.x"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Timing/formulation dominate HV magnitude (IR before ≫ separated). AF popPK shows milder average +23%. Concurrent IR still clinically important.",
      "practiceInterpretation": "If combination needed: administer dabigatran at least 2 hours before verapamil; prefer avoiding simultaneous IR initiation. Check regional dose guidance.",
      "labelGuidance": "EHRA emphasizes timing; some labels advise dose review with verapamil.",
      "uncertainty": "Real-world adherence to timing counseling is imperfect — plan for worst-case overlap in high bleed-risk patients.",
      "sources": [
        {
          "label": "Härtter et al. BJCP 2013 (dabigatran + verapamil timing)",
          "citation": "Härtter S, et al. Br J Clin Pharmacol. 2013;75:1053-1062.",
          "url": "https://doi.org/10.1111/j.1365-2125.2012.04453.x"
        },
        {
          "label": "RE-LY population PK (Liesenfeld et al.)",
          "citation": "Liesenfeld KH, et al. J Thromb Haemost. 2011 — AF patient covariates including amiodarone/verapamil.",
          "url": "https://doi.org/10.1111/j.1538-7836.2011.04498.x"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-verapamil"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Diltiazem",
      "interactorSlug": "diltiazem",
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Weaker/less consistent than verapamil for dabigatran in many guides — still assess total P-gp load.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [],
      "id": "dabigatran-diltiazem"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Diltiazem",
      "interactorSlug": "diltiazem",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Cmax",
          "change": "+31% (90% CI 16–49%)",
          "population": "Healthy subjects (n=18)",
          "design": "Therapeutic-dose: apixaban 10 mg days 1 & 11; diltiazem 360 mg QD days 4–13",
          "n": "18",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "parameter": "AUC∞",
          "change": "+40% (90% CI 23–59%)",
          "population": "Healthy subjects (n=18)",
          "design": "Same Frost diltiazem study",
          "n": "18",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015",
          "url": "https://doi.org/10.1111/bcp.12541"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Moderate inhibitor effect (~1.4×) — substantially smaller than ketoconazole. Patient CKD/age stacking not quantified in this HV design. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Often continued with apixaban; ensure correct labeled apixaban dose; avoid stacking additional strong inhibitors/NSAIDs.",
      "labelGuidance": "Typically caution rather than automatic avoid; no routine 50% cut like strong dual inhibitors.",
      "uncertainty": "Clinical bleed RCTs of apixaban+diltiazem specifically are limited.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "Frost et al. BJCP 2015 (apixaban ± ketoconazole/diltiazem)",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015;79:838-846.",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [
        "Cardizem",
        "Tiazac"
      ],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        }
      ],
      "id": "apixaban-diltiazem"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Diltiazem",
      "interactorSlug": "diltiazem",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Moderate; watch renal function. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        }
      ],
      "id": "rivaroxaban-diltiazem"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Diltiazem",
      "interactorSlug": "diltiazem",
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "P-gp caution; check label.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [],
      "id": "edoxaban-diltiazem"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Verapamil",
      "interactorSlug": "verapamil",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Moderate dual pathway; less dramatic than dabigatran timing story. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        }
      ],
      "id": "apixaban-verapamil"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Verapamil",
      "interactorSlug": "verapamil",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Moderate; renal impairment increases concern. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        }
      ],
      "id": "rivaroxaban-verapamil"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Verapamil",
      "interactorSlug": "verapamil",
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+52.7%",
          "population": "Healthy subjects (n=34)",
          "design": "Edoxaban 60 mg alone vs + P-gp inhibitor (Mendell crossover/single-sequence program)",
          "n": "34",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Healthy subjects, single-dose edoxaban 60 mg with P-gp inhibitor (Mendell).",
      "practiceInterpretation": "Label often dose-reduces edoxaban to 30 mg with certain P-gp inhibitors (quinidine, verapamil, dronedarone) — verify current PI. Amiodarone: heightened bleed vigilance; ENGAGE subgroup supports not ignoring the combination.",
      "labelGuidance": "EHRA/label: dose reduction pathways for selected P-gp inhibitors; amiodarone often caution rather than mandatory 30 mg — verify.",
      "uncertainty": "Exact ENGAGE concentration percentages vary by report — cite primary ENGAGE subgroup paper when teaching journal club.",
      "sources": [
        {
          "label": "Mendell et al. Am J Cardiovasc Drugs 2013 (edoxaban + CV P-gp inhibitors)",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013;13:331-342.",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        },
        {
          "label": "Mendell et al. PMC3781304",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013 (PMC3781304).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3781304/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [
        "Calan"
      ],
      "clinicalEffects": [],
      "id": "edoxaban-verapamil"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Dronedarone",
      "interactorSlug": "dronedarone",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "More significant than diltiazem; check label/EHRA color. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        }
      ],
      "id": "apixaban-dronedarone"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Dronedarone",
      "interactorSlug": "dronedarone",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Significant inhibitor — often avoid or specialist only. Clinical layer: Hanigan et al. (PubMed 31925665) found higher any-bleed rates when rivaroxaban/apixaban combined with these moderate inhibitors as a class (HR 1.8). Other large cohorts (e.g., Ontario older adults) did not show clear excess vs weak-inhibitor comparators — evidence is mixed; cite both when teaching.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "Real-world riva/apix + moderate P-gp/CYP3A4 inhibitors",
          "citation": "Hanigan S, et al. J Thromb Thrombolysis — PubMed 31925665. Any bleed HR 1.8 (1.19–2.73).",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [
        {
          "outcome": "Any bleeding (ISTH-defined episode, time-to-event)",
          "signal": "Propensity-matched real-world cohort: rivaroxaban or apixaban + combined P-gp/moderate CYP3A4 inhibitor (amiodarone, dronedarone, diltiazem, or verapamil) ≥3 months → any bleed 26.4% vs 18.4% without DDI; HR 1.8 (95% CI 1.19–2.73). Observational — confounding possible; other cohorts conflict.",
          "citation": "Hanigan S, et al. PubMed 31925665",
          "url": "https://pubmed.ncbi.nlm.nih.gov/31925665/"
        }
      ],
      "id": "rivaroxaban-dronedarone"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Dronedarone",
      "interactorSlug": "dronedarone",
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+84.5%",
          "population": "Healthy subjects (n=34)",
          "design": "Edoxaban 60 mg alone vs + P-gp inhibitor (Mendell crossover/single-sequence program)",
          "n": "34",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Healthy subjects, single-dose edoxaban 60 mg with P-gp inhibitor (Mendell).",
      "practiceInterpretation": "Label often dose-reduces edoxaban to 30 mg with certain P-gp inhibitors (quinidine, verapamil, dronedarone) — verify current PI. Amiodarone: heightened bleed vigilance; ENGAGE subgroup supports not ignoring the combination.",
      "labelGuidance": "EHRA/label: dose reduction pathways for selected P-gp inhibitors; amiodarone often caution rather than mandatory 30 mg — verify.",
      "uncertainty": "Exact ENGAGE concentration percentages vary by report — cite primary ENGAGE subgroup paper when teaching journal club.",
      "sources": [
        {
          "label": "Mendell et al. Am J Cardiovasc Drugs 2013 (edoxaban + CV P-gp inhibitors)",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013;13:331-342.",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        },
        {
          "label": "Mendell et al. PMC3781304",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013 (PMC3781304).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3781304/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [
        "Multaq"
      ],
      "clinicalEffects": [],
      "id": "edoxaban-dronedarone"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Quinidine",
      "interactorSlug": "quinidine",
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC and Cmax",
          "change": ">+50% (both AUC and Cmax)",
          "population": "Label / review-cited HV DDI",
          "design": "P-gp inhibition with quinidine",
          "regimenNotes": "Some monographs advise separating dabigatran ≥2 h before quinidine",
          "citation": "Ferri N, et al. Pharmaceutics. 2022; product monograph summaries",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Limited modern use of quinidine; still a teaching P-gp example.",
      "practiceInterpretation": "Avoid or separate per label; prefer alternative antiarrhythmic in DOAC patients.",
      "labelGuidance": "P-gp inhibitor caution; check PI.",
      "uncertainty": "Primary n and exact point estimates vary by source — curated as >50% per review/label consensus.",
      "sources": [
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [],
      "id": "dabigatran-quinidine"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Quinidine",
      "interactorSlug": "quinidine",
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+76.7%",
          "population": "Healthy subjects (n=42)",
          "design": "Edoxaban 60 mg alone vs + P-gp inhibitor (Mendell crossover/single-sequence program)",
          "n": "42",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Healthy subjects, single-dose edoxaban 60 mg with P-gp inhibitor (Mendell).",
      "practiceInterpretation": "Label often dose-reduces edoxaban to 30 mg with certain P-gp inhibitors (quinidine, verapamil, dronedarone) — verify current PI. Amiodarone: heightened bleed vigilance; ENGAGE subgroup supports not ignoring the combination.",
      "labelGuidance": "EHRA/label: dose reduction pathways for selected P-gp inhibitors; amiodarone often caution rather than mandatory 30 mg — verify.",
      "uncertainty": "Exact ENGAGE concentration percentages vary by report — cite primary ENGAGE subgroup paper when teaching journal club.",
      "sources": [
        {
          "label": "Mendell et al. Am J Cardiovasc Drugs 2013 (edoxaban + CV P-gp inhibitors)",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013;13:331-342.",
          "url": "https://doi.org/10.1007/s40256-013-0029-0"
        },
        {
          "label": "Mendell et al. PMC3781304",
          "citation": "Mendell J, et al. Am J Cardiovasc Drugs. 2013 (PMC3781304).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3781304/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [],
      "id": "edoxaban-quinidine"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Quinidine",
      "interactorSlug": "quinidine",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Rare modern combination; inhibitor class caution.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [],
      "id": "apixaban-quinidine"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Quinidine",
      "interactorSlug": "quinidine",
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Rare; caution.",
      "practiceInterpretation": "Integrate with renal function, age, and other inhibitors; prefer non-interacting rate-control agents when bleed risk is high.",
      "labelGuidance": "EHRA color varies by pair — consult EHRA tables + PI.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact card — mechanism + label guidance emphasized.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "synonyms": [],
      "clinicalEffects": [],
      "id": "rivaroxaban-quinidine"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Cyclosporine",
      "interactorSlug": "cyclosporine",
      "synonyms": [
        "Ciclosporin",
        "Neoral",
        "Gengraf"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "P-gp inhibitor used in transplant; edoxaban labels often dose-reduce with cyclosporine; dabigatran often avoided.",
      "practiceInterpretation": "Transplant anticoagulation needs specialty pharmacy — do not improvise from class effect alone.",
      "labelGuidance": "Check agent-specific PI (edoxaban 30 mg pathway common for certain P-gp inhibitors).",
      "uncertainty": "Quantitative PK not identified in curated sources for every DOAC–cyclosporine pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-cyclosporine"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Cyclosporine",
      "interactorSlug": "cyclosporine",
      "synonyms": [
        "Ciclosporin",
        "Neoral"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Cmax and AUC",
          "change": "≈×1.7 for both Cmax and AUC vs edoxaban alone (review-cited)",
          "population": "Healthy volunteers (review summary)",
          "design": "Cyclosporine + edoxaban DDI cited in Pharmaceutics 2022",
          "citation": "Ferri N, et al. Pharmaceutics. 2022",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Label often dose-reduces edoxaban to 30 mg with cyclosporine — verify PI.",
      "practiceInterpretation": "Use 30 mg pathway per label when combination required; transplant co-management essential.",
      "labelGuidance": "Common P-gp inhibitor dose-reduction listing.",
      "uncertainty": "Confirm primary table if writing a protocol.",
      "sources": [
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-cyclosporine"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Cyclosporine",
      "interactorSlug": "cyclosporine",
      "synonyms": [
        "Ciclosporin",
        "Neoral",
        "Gengraf",
        "CNI"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "Cmax",
          "change": "GMR 143% (90% CI 112–183%) vs apixaban alone",
          "population": "Healthy male volunteers (n=12)",
          "design": "Apixaban 10 mg ± cyclosporine 100 mg",
          "n": "12",
          "citation": "Bashir B, et al. Clin Pharmacol Drug Dev",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6226116/"
        },
        {
          "parameter": "AUC(0-tlast)",
          "change": "GMR 120% (90% CI 97–148%) — ~+20%",
          "population": "Healthy male volunteers (n=12)",
          "design": "Same HV DDI study",
          "n": "12",
          "regimenNotes": "Authors concluded changes within historical program margins — no HV dose adjustment suggested",
          "citation": "Bashir B, et al.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6226116/"
        },
        {
          "parameter": "AUC0-inf (transplant vs healthy reference)",
          "change": "GMR ≈280% (95% CI 195–401%) vs healthy reference cohort",
          "population": "Kidney/lung transplant recipients on cyclosporine (small n)",
          "design": "Single-dose apixaban 10 mg in transplant patients vs historical healthy reference — NOT a pure crossover DDI",
          "n": "4 on cyclosporine in usable analysis",
          "regimenNotes": "DISCREPANCY: transplant recipients had much higher exposure than healthy volunteers — polypharmacy, organ function, and study design contribute; do not equate to the +20% HV DDI alone",
          "citation": "Salerno DM, et al. Clin Transl Sci",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9283751/"
        }
      ],
      "evidenceGrade": "PK-patient",
      "populationCaveats": "HV study shows modest ↑; transplant recipient study shows substantially higher apixaban exposure vs healthy controls — populationCaveats critical. Small cyclosporine transplant n.",
      "practiceInterpretation": "Do not reassure solely from the HV +20% AUC. In transplant recipients, consider higher exposure, bleeding surveillance, and specialty pharmacy — future studies needed before casual recommendation.",
      "labelGuidance": "Specialty management; HV data ≠ transplant reality.",
      "uncertainty": "Transplant vs healthy comparison is not a randomized CNI-on/off design.",
      "sources": [
        {
          "label": "Apixaban ± cyclosporine/tacrolimus HV DDI",
          "citation": "Bashir B, et al. Clin Pharmacol Drug Dev / PMC6226116.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6226116/"
        },
        {
          "label": "Apixaban PK in kidney/lung transplant on CNI",
          "citation": "Salerno DM, et al. Clin Transl Sci / PMC9283751.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9283751/"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-cyclosporine"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Cyclosporine",
      "interactorSlug": "cyclosporine",
      "synonyms": [
        "Ciclosporin"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+46% (review-cited HV)",
          "population": "Healthy volunteers",
          "design": "Cyclosporine + rivaroxaban — Pharmaceutics 2022 summary",
          "citation": "Ferri N, et al. Pharmaceutics. 2022",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "parameter": "Cmax",
          "change": ">×2 (review-cited HV)",
          "population": "Healthy volunteers",
          "design": "Same review-cited DDI",
          "citation": "Ferri N, et al. Pharmaceutics. 2022",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Review-level citation of primary HV DDI; transplant polypharmacy may differ.",
      "practiceInterpretation": "Caution / specialist review in transplant; watch bleeding.",
      "labelGuidance": "P-gp/CYP caution — check PI.",
      "uncertainty": "Prefer primary PK paper for protocol-level dosing.",
      "sources": [
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "rivaroxaban-cyclosporine"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Tacrolimus",
      "interactorSlug": "tacrolimus",
      "synonyms": [
        "Prograf",
        "CNI"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure (context-dependent)",
      "pkEffects": [
        {
          "parameter": "Cmax",
          "change": "GMR 87% (90% CI 69–112%) — slight ↓ vs apixaban alone in HV",
          "population": "Healthy male volunteers (n=12)",
          "design": "Apixaban 10 mg ± tacrolimus 5 mg",
          "n": "12",
          "citation": "Bashir B, et al.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6226116/"
        },
        {
          "parameter": "AUC(0-tlast)",
          "change": "GMR 78% (90% CI 63–97%) — slight ↓ in HV",
          "population": "Healthy volunteers",
          "design": "Same HV study",
          "citation": "Bashir B, et al.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6226116/"
        },
        {
          "parameter": "AUC0-inf (transplant vs healthy reference)",
          "change": "GMR ≈224% (95% CI 170–295%) vs healthy reference",
          "population": "Kidney/lung transplant on tacrolimus (n=10)",
          "design": "Single-dose apixaban 10 mg vs healthy reference cohort",
          "n": "10",
          "regimenNotes": "DISCREPANCY: transplant exposure much higher than HV DDI (which showed slight ↓) — organ function/polypharmacy confounders",
          "citation": "Salerno DM, et al.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9283751/"
        }
      ],
      "evidenceGrade": "PK-patient",
      "populationCaveats": "Opposite direction signals: HV modest ↓ vs transplant ↑ vs healthy reference. Teach the discrepancy explicitly.",
      "practiceInterpretation": "Do not extrapolate HV 'no dose change' language to complex transplant recipients without levels/clinical judgment and specialty input.",
      "labelGuidance": "Specialty anticoagulation in transplant — case-by-case.",
      "uncertainty": "Need larger dedicated DDI designs in transplant populations.",
      "sources": [
        {
          "label": "Apixaban ± cyclosporine/tacrolimus HV DDI",
          "citation": "Bashir B, et al. Clin Pharmacol Drug Dev / PMC6226116.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6226116/"
        },
        {
          "label": "Apixaban PK in kidney/lung transplant on CNI",
          "citation": "Salerno DM, et al. Clin Transl Sci / PMC9283751.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9283751/"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-tacrolimus"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Tacrolimus",
      "interactorSlug": "tacrolimus",
      "synonyms": [
        "Prograf"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Interaction potential exists; pair-specific AUC sparse in open teaching summaries.",
      "practiceInterpretation": "Coordinate with transplant team; consider levels, renal function, and bleed risk.",
      "labelGuidance": "Specialty management — not a casual outpatient add-on.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "rivaroxaban-tacrolimus"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Tacrolimus",
      "interactorSlug": "tacrolimus",
      "synonyms": [
        "Prograf"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Interaction potential exists; pair-specific AUC sparse in open teaching summaries.",
      "practiceInterpretation": "Coordinate with transplant team; consider levels, renal function, and bleed risk.",
      "labelGuidance": "Specialty management — not a casual outpatient add-on.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "dabigatran-tacrolimus"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Tacrolimus",
      "interactorSlug": "tacrolimus",
      "synonyms": [
        "Prograf"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Interaction potential exists; pair-specific AUC sparse in open teaching summaries.",
      "practiceInterpretation": "Coordinate with transplant team; consider levels, renal function, and bleed risk.",
      "labelGuidance": "Specialty management — not a casual outpatient add-on.",
      "uncertainty": "Quantitative PK not identified in curated sources for this exact pair.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-tacrolimus"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Aspirin",
      "interactorSlug": "aspirin",
      "synonyms": [
        "ASA",
        "acetylsalicylic acid"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major / CRNM bleeding (AF+ACS/PCI)",
          "signal": "AUGUSTUS factorial: on a P2Y12 background, aspirin increased major or CRNM bleeding vs placebo; apixaban was superior to VKA for bleeding. Timeline card: “aspirin increased bleeding vs placebo”; “dropping aspirin reduced bleeding.” Exact HRs — see primary NEJM paper / #/trial/augustus (not re-invented here).",
          "citation": "Lopes RD, et al. NEJM AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "DAT vs TAT bleeding (program-level)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here).",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS trial cards",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD overlap — not a CYP/P-gp story. Duration and indication dominate (peri-PCI/ACS vs stable CAD vs primary prevention). COMPASS uses low-dose rivaroxaban + aspirin for selected stable atherosclerotic disease without AF OAC indication — separate decision.",
      "practiceInterpretation": "AF+PCI/ACS: shortest necessary aspirin duration; default toward early aspirin drop on OAC + P2Y12 (prefer clopidogrel in most pathways). Avoid routine long-term OAC+ASA without a clear ischemic indication. Link frameworks: #/framework/af-pci-dual-pathway.",
      "labelGuidance": "EHRA / dual-pathway guidance — minimize triple therapy duration.",
      "uncertainty": "Stent thrombosis risk early after complex PCI may justify brief aspirin — clinical judgment, not a fixed day count from this card.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "AFIRE",
          "citation": "Yasuda S, et al. — rivaroxaban monotherapy vs combination in stable AF+CAD. #/trial/afire",
          "url": "https://doi.org/10.1056/NEJMoa1904143"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-aspirin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Aspirin",
      "interactorSlug": "aspirin",
      "synonyms": [
        "ASA",
        "acetylsalicylic acid"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major / CRNM bleeding (AF+ACS/PCI)",
          "signal": "AUGUSTUS factorial: on a P2Y12 background, aspirin increased major or CRNM bleeding vs placebo; apixaban was superior to VKA for bleeding. Timeline card: “aspirin increased bleeding vs placebo”; “dropping aspirin reduced bleeding.” Exact HRs — see primary NEJM paper / #/trial/augustus (not re-invented here).",
          "citation": "Lopes RD, et al. NEJM AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "DAT vs TAT bleeding (program-level)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here).",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS trial cards",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD overlap — not a CYP/P-gp story. Duration and indication dominate (peri-PCI/ACS vs stable CAD vs primary prevention). COMPASS uses low-dose rivaroxaban + aspirin for selected stable atherosclerotic disease without AF OAC indication — separate decision.",
      "practiceInterpretation": "AF+PCI/ACS: shortest necessary aspirin duration; default toward early aspirin drop on OAC + P2Y12 (prefer clopidogrel in most pathways). Avoid routine long-term OAC+ASA without a clear ischemic indication. Link frameworks: #/framework/af-pci-dual-pathway.",
      "labelGuidance": "EHRA / dual-pathway guidance — minimize triple therapy duration.",
      "uncertainty": "Stent thrombosis risk early after complex PCI may justify brief aspirin — clinical judgment, not a fixed day count from this card.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "AFIRE",
          "citation": "Yasuda S, et al. — rivaroxaban monotherapy vs combination in stable AF+CAD. #/trial/afire",
          "url": "https://doi.org/10.1056/NEJMoa1904143"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-aspirin"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Aspirin",
      "interactorSlug": "aspirin",
      "synonyms": [
        "ASA",
        "acetylsalicylic acid"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major / CRNM bleeding (AF+ACS/PCI)",
          "signal": "AUGUSTUS factorial: on a P2Y12 background, aspirin increased major or CRNM bleeding vs placebo; apixaban was superior to VKA for bleeding. Timeline card: “aspirin increased bleeding vs placebo”; “dropping aspirin reduced bleeding.” Exact HRs — see primary NEJM paper / #/trial/augustus (not re-invented here).",
          "citation": "Lopes RD, et al. NEJM AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "DAT vs TAT bleeding (program-level)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here).",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS trial cards",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "Stable CAD + AF — long-term OAC+ASA",
          "signal": "AFIRE: rivaroxaban monotherapy preferable to long-term combination in stable AF+CAD remote from PCI (less major bleeding; trial stopped early). Do not confuse with COMPASS vascular indication.",
          "citation": "AFIRE NEJM — #/trial/afire",
          "url": "https://doi.org/10.1056/NEJMoa1904143"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD overlap — not a CYP/P-gp story. Duration and indication dominate (peri-PCI/ACS vs stable CAD vs primary prevention). COMPASS uses low-dose rivaroxaban + aspirin for selected stable atherosclerotic disease without AF OAC indication — separate decision.",
      "practiceInterpretation": "AF+PCI/ACS: shortest necessary aspirin duration; default toward early aspirin drop on OAC + P2Y12 (prefer clopidogrel in most pathways). Avoid routine long-term OAC+ASA without a clear ischemic indication. Link frameworks: #/framework/af-pci-dual-pathway.",
      "labelGuidance": "EHRA / dual-pathway guidance — minimize triple therapy duration.",
      "uncertainty": "Stent thrombosis risk early after complex PCI may justify brief aspirin — clinical judgment, not a fixed day count from this card.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "AFIRE",
          "citation": "Yasuda S, et al. — rivaroxaban monotherapy vs combination in stable AF+CAD. #/trial/afire",
          "url": "https://doi.org/10.1056/NEJMoa1904143"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-aspirin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Aspirin",
      "interactorSlug": "aspirin",
      "synonyms": [
        "ASA",
        "acetylsalicylic acid"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major / CRNM bleeding (AF+ACS/PCI)",
          "signal": "AUGUSTUS factorial: on a P2Y12 background, aspirin increased major or CRNM bleeding vs placebo; apixaban was superior to VKA for bleeding. Timeline card: “aspirin increased bleeding vs placebo”; “dropping aspirin reduced bleeding.” Exact HRs — see primary NEJM paper / #/trial/augustus (not re-invented here).",
          "citation": "Lopes RD, et al. NEJM AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "DAT vs TAT bleeding (program-level)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here).",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS trial cards",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD overlap — not a CYP/P-gp story. Duration and indication dominate (peri-PCI/ACS vs stable CAD vs primary prevention). COMPASS uses low-dose rivaroxaban + aspirin for selected stable atherosclerotic disease without AF OAC indication — separate decision.",
      "practiceInterpretation": "AF+PCI/ACS: shortest necessary aspirin duration; default toward early aspirin drop on OAC + P2Y12 (prefer clopidogrel in most pathways). Avoid routine long-term OAC+ASA without a clear ischemic indication. Link frameworks: #/framework/af-pci-dual-pathway.",
      "labelGuidance": "EHRA / dual-pathway guidance — minimize triple therapy duration.",
      "uncertainty": "Stent thrombosis risk early after complex PCI may justify brief aspirin — clinical judgment, not a fixed day count from this card.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "AFIRE",
          "citation": "Yasuda S, et al. — rivaroxaban monotherapy vs combination in stable AF+CAD. #/trial/afire",
          "url": "https://doi.org/10.1056/NEJMoa1904143"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-aspirin"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Aspirin",
      "interactorSlug": "aspirin",
      "synonyms": [
        "ASA",
        "acetylsalicylic acid"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major / CRNM bleeding (AF+ACS/PCI)",
          "signal": "AUGUSTUS factorial: on a P2Y12 background, aspirin increased major or CRNM bleeding vs placebo; apixaban was superior to VKA for bleeding. Timeline card: “aspirin increased bleeding vs placebo”; “dropping aspirin reduced bleeding.” Exact HRs — see primary NEJM paper / #/trial/augustus (not re-invented here).",
          "citation": "Lopes RD, et al. NEJM AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "DAT vs TAT bleeding (program-level)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here).",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS trial cards",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD overlap — not a CYP/P-gp story. Duration and indication dominate (peri-PCI/ACS vs stable CAD vs primary prevention). COMPASS uses low-dose rivaroxaban + aspirin for selected stable atherosclerotic disease without AF OAC indication — separate decision.",
      "practiceInterpretation": "AF+PCI/ACS: shortest necessary aspirin duration; default toward early aspirin drop on OAC + P2Y12 (prefer clopidogrel in most pathways). Avoid routine long-term OAC+ASA without a clear ischemic indication. Link frameworks: #/framework/af-pci-dual-pathway.",
      "labelGuidance": "EHRA / dual-pathway guidance — minimize triple therapy duration.",
      "uncertainty": "Stent thrombosis risk early after complex PCI may justify brief aspirin — clinical judgment, not a fixed day count from this card.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "AFIRE",
          "citation": "Yasuda S, et al. — rivaroxaban monotherapy vs combination in stable AF+CAD. #/trial/afire",
          "url": "https://doi.org/10.1056/NEJMoa1904143"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-aspirin"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Clopidogrel",
      "interactorSlug": "clopidogrel",
      "synonyms": [
        "Plavix"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-clopidogrel"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Clopidogrel",
      "interactorSlug": "clopidogrel",
      "synonyms": [
        "Plavix"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-clopidogrel"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Clopidogrel",
      "interactorSlug": "clopidogrel",
      "synonyms": [
        "Plavix"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-clopidogrel"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Clopidogrel",
      "interactorSlug": "clopidogrel",
      "synonyms": [
        "Plavix"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-clopidogrel"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Clopidogrel",
      "interactorSlug": "clopidogrel",
      "synonyms": [
        "Plavix"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Preferred P2Y12 in most AF+PCI dual-pathway algorithms when combined with OAC. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-clopidogrel"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Ticagrelor",
      "interactorSlug": "ticagrelor",
      "synonyms": [
        "Brilinta"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-ticagrelor"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ticagrelor",
      "interactorSlug": "ticagrelor",
      "synonyms": [
        "Brilinta"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ticagrelor"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ticagrelor",
      "interactorSlug": "ticagrelor",
      "synonyms": [
        "Brilinta"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ticagrelor"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ticagrelor",
      "interactorSlug": "ticagrelor",
      "synonyms": [
        "Brilinta"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ticagrelor"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ticagrelor",
      "interactorSlug": "ticagrelor",
      "synonyms": [
        "Brilinta"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "More potent P2Y12 — higher bleed concern with OAC; usually avoid routine long combination unless ischemic risk dominates. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ticagrelor"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Prasugrel",
      "interactorSlug": "prasugrel",
      "synonyms": [
        "Effient"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-prasugrel"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Prasugrel",
      "interactorSlug": "prasugrel",
      "synonyms": [
        "Effient"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-prasugrel"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Prasugrel",
      "interactorSlug": "prasugrel",
      "synonyms": [
        "Effient"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-prasugrel"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Prasugrel",
      "interactorSlug": "prasugrel",
      "synonyms": [
        "Effient"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-prasugrel"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Prasugrel",
      "interactorSlug": "prasugrel",
      "synonyms": [
        "Effient"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major/CRNM bleeding on OAC + P2Y12 (±ASA)",
          "signal": "Across AF+PCI programs (PIONEER AF-PCI, RE-DUAL PCI, AUGUSTUS), dual antithrombotic therapy (OAC + P2Y12) caused less clinically significant bleeding than VKA-based triple therapy; ischemic/stent-thrombosis tradeoffs require risk-tiered duration — see timeline trial cards (no pooled HR invented here). Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist.",
          "citation": "PIONEER / RE-DUAL / AUGUSTUS",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "outcome": "AUGUSTUS aspirin factorial context",
          "signal": "Bleeding driven substantially by aspirin layer on top of OAC+P2Y12 — dropping ASA early is the key lever when feasible.",
          "citation": "AUGUSTUS NEJM",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "PD bleed stack. Potent P2Y12 agents increase bleed risk vs clopidogrel in combination contexts — AF+PCI pathways usually prefer clopidogrel.",
      "practiceInterpretation": "Potent P2Y12 — generally avoided with OAC in AF+PCI pathways when alternatives exist. Keep dual pathway as short as ischemic risk allows; see #/framework/af-pci-dual-pathway and trial cards.",
      "labelGuidance": "Follow institutional AF+PCI pathway; EHRA dual-pathway color schemes.",
      "uncertainty": "Head-to-head potent-P2Y12 vs clopidogrel on DOAC background is not the primary AUGUSTUS question.",
      "sources": [
        {
          "label": "AUGUSTUS (NEJM) — aspirin factorial in AF+ACS/PCI",
          "citation": "Lopes RD, et al. N Engl J Med. 2019 — apixaban vs VKA; aspirin vs placebo on P2Y12. See timeline #/trial/augustus.",
          "url": "https://doi.org/10.1056/NEJMoa1817083"
        },
        {
          "label": "PIONEER AF-PCI",
          "citation": "Gibson CM, et al. — rivaroxaban dual-pathway vs VKA triple. #/trial/pioneer-af-pci",
          "url": "https://doi.org/10.1056/NEJMoa1611594"
        },
        {
          "label": "RE-DUAL PCI",
          "citation": "Cannon CP, et al. — dabigatran dual therapy vs VKA triple. #/trial/re-dual-pci",
          "url": "https://doi.org/10.1056/NEJMoa1708454"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-prasugrel"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "NSAIDs",
      "interactorSlug": "nsaids",
      "synonyms": [
        "ibuprofen",
        "naproxen",
        "diclofenac",
        "NSAID",
        "nonsteroidal"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major bleeding (RE-LY NSAID substudy)",
          "signal": "Among 18,113 RE-LY patients, 2,279 used NSAIDs at least once. Major bleed HR 1.68 (95% CI 1.40–2.02). GI major bleed HR 1.81 (1.35–2.43). Stroke/SE HR 1.50 (1.12–2.01). Hospitalization HR 1.64 (1.51–1.77). p-interaction NS for dabigatran vs warfarin relative effects (major bleed pinteraction 0.63 and 0.93 for DE 150/110).",
          "citation": "Kent AP, et al. JACC 2018 / PubMed 30012318",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "outcome": "Gastrointestinal bleeding (real-world AC+NSAID)",
          "signal": "Propensity-matched CDM cohort (2,951 pairs): anticoagulant+NSAID vs anticoagulant alone — GIB HR 1.66 (95% CI 1.30–2.12); age >75 HR 1.89 (1.23–2.90).",
          "citation": "Gut Liver 2024 gnl230541 / PMC11391146",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Systemic NSAIDs (not necessarily topical). Even therapeutic INR/DOAC dosing does not protect against PD gastric injury + anticoagulant bleed synergy.",
      "practiceInterpretation": "Avoid systemic NSAIDs when possible on OAC. If needed: shortest course, consider GI protection per local practice, prefer acetaminophen when appropriate for analgesia.",
      "labelGuidance": "EHRA: avoid unnecessary NSAID overlap with OAC.",
      "uncertainty": "Topical NSAID systemic exposure varies — not equated here to oral NSAID HRs.",
      "sources": [
        {
          "label": "RE-LY NSAID substudy (JACC)",
          "citation": "Kent AP, et al. JACC 2018 — concomitant NSAID in RE-LY. PubMed 30012318.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "label": "Real-world AC+NSAID GIB (Gut Liver 2024)",
          "citation": "HR 1.66 (1.30–2.12) GIB for AC+NSAID vs AC alone; higher in age >75. DOI path gnl230541 / PMC11391146.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-nsaids"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "NSAIDs",
      "interactorSlug": "nsaids",
      "synonyms": [
        "ibuprofen",
        "naproxen",
        "diclofenac",
        "NSAID",
        "nonsteroidal"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major bleeding (RE-LY NSAID substudy — dabigatran/warfarin arms)",
          "signal": "RE-LY NSAID analysis (dabigatran and warfarin): major bleed HR 1.68 (1.40–2.02); GI major HR 1.81; stroke/SE HR 1.50; hospitalization HR 1.64. p-interaction NS vs warfarin. Apply to other DOACs as PD class concern — not a DOAC-specific RE-LY estimate for apixaban/rivaroxaban/edoxaban.",
          "citation": "Kent AP, et al. JACC 2018",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "outcome": "Gastrointestinal bleeding (real-world AC+NSAID)",
          "signal": "Propensity-matched CDM cohort (2,951 pairs): anticoagulant+NSAID vs anticoagulant alone — GIB HR 1.66 (95% CI 1.30–2.12); age >75 HR 1.89 (1.23–2.90).",
          "citation": "Gut Liver 2024 gnl230541 / PMC11391146",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Systemic NSAIDs (not necessarily topical). Even therapeutic INR/DOAC dosing does not protect against PD gastric injury + anticoagulant bleed synergy.",
      "practiceInterpretation": "Avoid systemic NSAIDs when possible on OAC. If needed: shortest course, consider GI protection per local practice, prefer acetaminophen when appropriate for analgesia.",
      "labelGuidance": "EHRA: avoid unnecessary NSAID overlap with OAC.",
      "uncertainty": "Topical NSAID systemic exposure varies — not equated here to oral NSAID HRs.",
      "sources": [
        {
          "label": "RE-LY NSAID substudy (JACC)",
          "citation": "Kent AP, et al. JACC 2018 — concomitant NSAID in RE-LY. PubMed 30012318.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "label": "Real-world AC+NSAID GIB (Gut Liver 2024)",
          "citation": "HR 1.66 (1.30–2.12) GIB for AC+NSAID vs AC alone; higher in age >75. DOI path gnl230541 / PMC11391146.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-nsaids"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "NSAIDs",
      "interactorSlug": "nsaids",
      "synonyms": [
        "ibuprofen",
        "naproxen",
        "diclofenac",
        "NSAID",
        "nonsteroidal"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major bleeding (RE-LY NSAID substudy — dabigatran/warfarin arms)",
          "signal": "RE-LY NSAID analysis (dabigatran and warfarin): major bleed HR 1.68 (1.40–2.02); GI major HR 1.81; stroke/SE HR 1.50; hospitalization HR 1.64. p-interaction NS vs warfarin. Apply to other DOACs as PD class concern — not a DOAC-specific RE-LY estimate for apixaban/rivaroxaban/edoxaban.",
          "citation": "Kent AP, et al. JACC 2018",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "outcome": "Gastrointestinal bleeding (real-world AC+NSAID)",
          "signal": "Propensity-matched CDM cohort (2,951 pairs): anticoagulant+NSAID vs anticoagulant alone — GIB HR 1.66 (95% CI 1.30–2.12); age >75 HR 1.89 (1.23–2.90).",
          "citation": "Gut Liver 2024 gnl230541 / PMC11391146",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Systemic NSAIDs (not necessarily topical). Even therapeutic INR/DOAC dosing does not protect against PD gastric injury + anticoagulant bleed synergy.",
      "practiceInterpretation": "Avoid systemic NSAIDs when possible on OAC. If needed: shortest course, consider GI protection per local practice, prefer acetaminophen when appropriate for analgesia.",
      "labelGuidance": "EHRA: avoid unnecessary NSAID overlap with OAC.",
      "uncertainty": "Topical NSAID systemic exposure varies — not equated here to oral NSAID HRs.",
      "sources": [
        {
          "label": "RE-LY NSAID substudy (JACC)",
          "citation": "Kent AP, et al. JACC 2018 — concomitant NSAID in RE-LY. PubMed 30012318.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "label": "Real-world AC+NSAID GIB (Gut Liver 2024)",
          "citation": "HR 1.66 (1.30–2.12) GIB for AC+NSAID vs AC alone; higher in age >75. DOI path gnl230541 / PMC11391146.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-nsaids"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "NSAIDs",
      "interactorSlug": "nsaids",
      "synonyms": [
        "ibuprofen",
        "naproxen",
        "diclofenac",
        "NSAID",
        "nonsteroidal"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major bleeding (RE-LY NSAID substudy)",
          "signal": "Among 18,113 RE-LY patients, 2,279 used NSAIDs at least once. Major bleed HR 1.68 (95% CI 1.40–2.02). GI major bleed HR 1.81 (1.35–2.43). Stroke/SE HR 1.50 (1.12–2.01). Hospitalization HR 1.64 (1.51–1.77). p-interaction NS for dabigatran vs warfarin relative effects (major bleed pinteraction 0.63 and 0.93 for DE 150/110).",
          "citation": "Kent AP, et al. JACC 2018 / PubMed 30012318",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "outcome": "Gastrointestinal bleeding (real-world AC+NSAID)",
          "signal": "Propensity-matched CDM cohort (2,951 pairs): anticoagulant+NSAID vs anticoagulant alone — GIB HR 1.66 (95% CI 1.30–2.12); age >75 HR 1.89 (1.23–2.90).",
          "citation": "Gut Liver 2024 gnl230541 / PMC11391146",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Systemic NSAIDs (not necessarily topical). Even therapeutic INR/DOAC dosing does not protect against PD gastric injury + anticoagulant bleed synergy.",
      "practiceInterpretation": "Avoid systemic NSAIDs when possible on OAC. If needed: shortest course, consider GI protection per local practice, prefer acetaminophen when appropriate for analgesia.",
      "labelGuidance": "EHRA: avoid unnecessary NSAID overlap with OAC.",
      "uncertainty": "Topical NSAID systemic exposure varies — not equated here to oral NSAID HRs.",
      "sources": [
        {
          "label": "RE-LY NSAID substudy (JACC)",
          "citation": "Kent AP, et al. JACC 2018 — concomitant NSAID in RE-LY. PubMed 30012318.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "label": "Real-world AC+NSAID GIB (Gut Liver 2024)",
          "citation": "HR 1.66 (1.30–2.12) GIB for AC+NSAID vs AC alone; higher in age >75. DOI path gnl230541 / PMC11391146.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-nsaids"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "NSAIDs",
      "interactorSlug": "nsaids",
      "synonyms": [
        "ibuprofen",
        "naproxen",
        "diclofenac",
        "NSAID",
        "nonsteroidal"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major bleeding (RE-LY NSAID substudy — dabigatran/warfarin arms)",
          "signal": "RE-LY NSAID analysis (dabigatran and warfarin): major bleed HR 1.68 (1.40–2.02); GI major HR 1.81; stroke/SE HR 1.50; hospitalization HR 1.64. p-interaction NS vs warfarin. Apply to other DOACs as PD class concern — not a DOAC-specific RE-LY estimate for apixaban/rivaroxaban/edoxaban.",
          "citation": "Kent AP, et al. JACC 2018",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "outcome": "Gastrointestinal bleeding (real-world AC+NSAID)",
          "signal": "Propensity-matched CDM cohort (2,951 pairs): anticoagulant+NSAID vs anticoagulant alone — GIB HR 1.66 (95% CI 1.30–2.12); age >75 HR 1.89 (1.23–2.90).",
          "citation": "Gut Liver 2024 gnl230541 / PMC11391146",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Systemic NSAIDs (not necessarily topical). Even therapeutic INR/DOAC dosing does not protect against PD gastric injury + anticoagulant bleed synergy.",
      "practiceInterpretation": "Avoid systemic NSAIDs when possible on OAC. If needed: shortest course, consider GI protection per local practice, prefer acetaminophen when appropriate for analgesia.",
      "labelGuidance": "EHRA: avoid unnecessary NSAID overlap with OAC.",
      "uncertainty": "Topical NSAID systemic exposure varies — not equated here to oral NSAID HRs.",
      "sources": [
        {
          "label": "RE-LY NSAID substudy (JACC)",
          "citation": "Kent AP, et al. JACC 2018 — concomitant NSAID in RE-LY. PubMed 30012318.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/30012318/"
        },
        {
          "label": "Real-world AC+NSAID GIB (Gut Liver 2024)",
          "citation": "HR 1.66 (1.30–2.12) GIB for AC+NSAID vs AC alone; higher in age >75. DOI path gnl230541 / PMC11391146.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11391146/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-nsaids"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "SSRIs/SNRIs",
      "interactorSlug": "ssri-snri",
      "synonyms": [
        "sertraline",
        "fluoxetine",
        "escitalopram",
        "venlafaxine",
        "duloxetine",
        "SSRI",
        "SNRI"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding (observational)",
          "signal": "SSRI/SNRI + OAC associated with higher bleed risk in observational studies (platelet serotonin effect). Confounding by indication possible; effect sizes vary by study — no single HR promoted here.",
          "citation": "Observational pharmacoepidemiology; EHRA PD bleed stacking notes",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "PD mechanism (impaired platelet aggregation) — not primarily CYP for most SSRI–DOAC pairs. Some SSRIs inhibit CYP2C9/CYP3A4 weakly — warfarin INR monitoring still prudent when starting/stopping.",
      "practiceInterpretation": "Do not withhold needed antidepressants reflexively; minimize other PD stacks (NSAID/ASA) and counsel on bleed symptoms. For warfarin, check INR after SSRI changes.",
      "labelGuidance": "Caution / awareness — usually not an absolute avoid.",
      "uncertainty": "Heterogeneous observational HRs — honest Clinical-cohort grade without a universal point estimate.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-ssri-snri"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "SSRIs/SNRIs",
      "interactorSlug": "ssri-snri",
      "synonyms": [
        "sertraline",
        "fluoxetine",
        "escitalopram",
        "venlafaxine",
        "duloxetine",
        "SSRI",
        "SNRI"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding (observational)",
          "signal": "SSRI/SNRI + OAC associated with higher bleed risk in observational studies (platelet serotonin effect). Confounding by indication possible; effect sizes vary by study — no single HR promoted here.",
          "citation": "Observational pharmacoepidemiology; EHRA PD bleed stacking notes",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "PD mechanism (impaired platelet aggregation) — not primarily CYP for most SSRI–DOAC pairs. Some SSRIs inhibit CYP2C9/CYP3A4 weakly — warfarin INR monitoring still prudent when starting/stopping.",
      "practiceInterpretation": "Do not withhold needed antidepressants reflexively; minimize other PD stacks (NSAID/ASA) and counsel on bleed symptoms. For warfarin, check INR after SSRI changes.",
      "labelGuidance": "Caution / awareness — usually not an absolute avoid.",
      "uncertainty": "Heterogeneous observational HRs — honest Clinical-cohort grade without a universal point estimate.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ssri-snri"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "SSRIs/SNRIs",
      "interactorSlug": "ssri-snri",
      "synonyms": [
        "sertraline",
        "fluoxetine",
        "escitalopram",
        "venlafaxine",
        "duloxetine",
        "SSRI",
        "SNRI"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding (observational)",
          "signal": "SSRI/SNRI + OAC associated with higher bleed risk in observational studies (platelet serotonin effect). Confounding by indication possible; effect sizes vary by study — no single HR promoted here.",
          "citation": "Observational pharmacoepidemiology; EHRA PD bleed stacking notes",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "PD mechanism (impaired platelet aggregation) — not primarily CYP for most SSRI–DOAC pairs. Some SSRIs inhibit CYP2C9/CYP3A4 weakly — warfarin INR monitoring still prudent when starting/stopping.",
      "practiceInterpretation": "Do not withhold needed antidepressants reflexively; minimize other PD stacks (NSAID/ASA) and counsel on bleed symptoms. For warfarin, check INR after SSRI changes.",
      "labelGuidance": "Caution / awareness — usually not an absolute avoid.",
      "uncertainty": "Heterogeneous observational HRs — honest Clinical-cohort grade without a universal point estimate.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ssri-snri"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "SSRIs/SNRIs",
      "interactorSlug": "ssri-snri",
      "synonyms": [
        "sertraline",
        "fluoxetine",
        "escitalopram",
        "venlafaxine",
        "duloxetine",
        "SSRI",
        "SNRI"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding (observational)",
          "signal": "SSRI/SNRI + OAC associated with higher bleed risk in observational studies (platelet serotonin effect). Confounding by indication possible; effect sizes vary by study — no single HR promoted here.",
          "citation": "Observational pharmacoepidemiology; EHRA PD bleed stacking notes",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "PD mechanism (impaired platelet aggregation) — not primarily CYP for most SSRI–DOAC pairs. Some SSRIs inhibit CYP2C9/CYP3A4 weakly — warfarin INR monitoring still prudent when starting/stopping.",
      "practiceInterpretation": "Do not withhold needed antidepressants reflexively; minimize other PD stacks (NSAID/ASA) and counsel on bleed symptoms. For warfarin, check INR after SSRI changes.",
      "labelGuidance": "Caution / awareness — usually not an absolute avoid.",
      "uncertainty": "Heterogeneous observational HRs — honest Clinical-cohort grade without a universal point estimate.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ssri-snri"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "SSRIs/SNRIs",
      "interactorSlug": "ssri-snri",
      "synonyms": [
        "sertraline",
        "fluoxetine",
        "escitalopram",
        "venlafaxine",
        "duloxetine",
        "SSRI",
        "SNRI"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding (observational)",
          "signal": "SSRI/SNRI + OAC associated with higher bleed risk in observational studies (platelet serotonin effect). Confounding by indication possible; effect sizes vary by study — no single HR promoted here.",
          "citation": "Observational pharmacoepidemiology; EHRA PD bleed stacking notes",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "PD mechanism (impaired platelet aggregation) — not primarily CYP for most SSRI–DOAC pairs. Some SSRIs inhibit CYP2C9/CYP3A4 weakly — warfarin INR monitoring still prudent when starting/stopping.",
      "practiceInterpretation": "Do not withhold needed antidepressants reflexively; minimize other PD stacks (NSAID/ASA) and counsel on bleed symptoms. For warfarin, check INR after SSRI changes.",
      "labelGuidance": "Caution / awareness — usually not an absolute avoid.",
      "uncertainty": "Heterogeneous observational HRs — honest Clinical-cohort grade without a universal point estimate.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ssri-snri"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Amiodarone",
      "interactorSlug": "amiodarone",
      "synonyms": [
        "Pacerone"
      ],
      "mechanisms": [
        "CYP2C9 inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ INR / ↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR change / bleeding or thrombosis",
          "signal": "Established clinical pharmacology of warfarin DDIs — manage by INR monitoring rather than DOAC-style AUC percentages",
          "citation": "Warfarin product labeling; clinical pharmacology references; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Expect delayed INR rise over days–weeks; empiric warfarin dose reduction strategies are common but protocol-specific.",
      "labelGuidance": "Monitor INR more frequently when starting/stopping interacting drugs; use institution-specific dose-adjustment protocols.",
      "uncertainty": "Exact INR delta varies by dose, genetics (CYP2C9/VKORC1), diet, and illness — do not teach false precision.",
      "sources": [
        {
          "label": "Warfarin PI / clinical pharmacology",
          "citation": "Product labeling and standard clinical pharmacology texts",
          "url": null
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-amiodarone"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Metronidazole",
      "interactorSlug": "metronidazole",
      "synonyms": [
        "Flagyl"
      ],
      "mechanisms": [
        "CYP2C9 inhibition"
      ],
      "effectDirection": "↑ INR / ↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR change / bleeding or thrombosis",
          "signal": "Established clinical pharmacology of warfarin DDIs — manage by INR monitoring rather than DOAC-style AUC percentages",
          "citation": "Warfarin product labeling; clinical pharmacology references; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Classic sharp INR increase — check INR soon after start/stop.",
      "labelGuidance": "Monitor INR more frequently when starting/stopping interacting drugs; use institution-specific dose-adjustment protocols.",
      "uncertainty": "Exact INR delta varies by dose, genetics (CYP2C9/VKORC1), diet, and illness — do not teach false precision.",
      "sources": [
        {
          "label": "Warfarin PI / clinical pharmacology",
          "citation": "Product labeling and standard clinical pharmacology texts",
          "url": null
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-metronidazole"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "TMP-SMX",
      "interactorSlug": "tmp-smx",
      "synonyms": [
        "Bactrim",
        "co-trimoxazole",
        "sulfamethoxazole-trimethoprim"
      ],
      "mechanisms": [
        "CYP2C9 inhibition"
      ],
      "effectDirection": "↑ INR / ↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR change / bleeding or thrombosis",
          "signal": "Established clinical pharmacology of warfarin DDIs — manage by INR monitoring rather than DOAC-style AUC percentages",
          "citation": "Warfarin product labeling; clinical pharmacology references; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Among the highest-risk antibiotic–warfarin interactions in practice.",
      "labelGuidance": "Monitor INR more frequently when starting/stopping interacting drugs; use institution-specific dose-adjustment protocols.",
      "uncertainty": "Exact INR delta varies by dose, genetics (CYP2C9/VKORC1), diet, and illness — do not teach false precision.",
      "sources": [
        {
          "label": "Warfarin PI / clinical pharmacology",
          "citation": "Product labeling and standard clinical pharmacology texts",
          "url": null
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-tmp-smx"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Fluconazole",
      "interactorSlug": "fluconazole",
      "synonyms": [
        "Diflucan"
      ],
      "mechanisms": [
        "CYP2C9 inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ INR / ↑ bleed PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR change / bleeding or thrombosis",
          "signal": "Established clinical pharmacology of warfarin DDIs — manage by INR monitoring rather than DOAC-style AUC percentages",
          "citation": "Warfarin product labeling; clinical pharmacology references; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Dose-dependent CYP2C9 inhibition; monitor INR closely.",
      "labelGuidance": "Monitor INR more frequently when starting/stopping interacting drugs; use institution-specific dose-adjustment protocols.",
      "uncertainty": "Exact INR delta varies by dose, genetics (CYP2C9/VKORC1), diet, and illness — do not teach false precision.",
      "sources": [
        {
          "label": "Warfarin PI / clinical pharmacology",
          "citation": "Product labeling and standard clinical pharmacology texts",
          "url": null
        },
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-fluconazole"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Rifampin",
      "interactorSlug": "rifampin",
      "synonyms": [
        "Rifampicin"
      ],
      "mechanisms": [
        "CYP2C9 induction",
        "CYP3A4 induction",
        "CYP1A2 induction"
      ],
      "effectDirection": "↓ INR / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR decrease / thrombosis risk if under-anticoagulated",
          "signal": "Classic clinical pharmacology — manage by intensified INR monitoring rather than DOAC-style AUC%.",
          "citation": "Warfarin PI / clinical pharmacology; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Potent multi-CYP induction — expect large ↑ warfarin dose requirement; INR often falls within days. Check INR soon after start/stop/dose change of the inducer.",
      "labelGuidance": "Monitor INR more frequently; use institutional warfarin dosing protocols.",
      "uncertainty": "Exact INR delta varies by genetics, diet, illness — no false precision.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "warfarin-rifampin"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Carbamazepine",
      "interactorSlug": "carbamazepine",
      "synonyms": [
        "Tegretol"
      ],
      "mechanisms": [
        "CYP2C9 induction",
        "CYP3A4 induction",
        "CYP1A2 induction"
      ],
      "effectDirection": "↓ INR / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR decrease / thrombosis risk if under-anticoagulated",
          "signal": "Classic clinical pharmacology — manage by intensified INR monitoring rather than DOAC-style AUC%.",
          "citation": "Warfarin PI / clinical pharmacology; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "CYP induction lowers INR; titrate and recheck frequently during ASM changes. Check INR soon after start/stop/dose change of the inducer.",
      "labelGuidance": "Monitor INR more frequently; use institutional warfarin dosing protocols.",
      "uncertainty": "Exact INR delta varies by genetics, diet, illness — no false precision.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "warfarin-carbamazepine"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Phenytoin",
      "interactorSlug": "phenytoin",
      "synonyms": [
        "Dilantin"
      ],
      "mechanisms": [
        "CYP2C9 induction",
        "CYP3A4 induction",
        "CYP1A2 induction"
      ],
      "effectDirection": "↓ INR / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR decrease / thrombosis risk if under-anticoagulated",
          "signal": "Classic clinical pharmacology — manage by intensified INR monitoring rather than DOAC-style AUC%.",
          "citation": "Warfarin PI / clinical pharmacology; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Complex bidirectional issues possible; close INR + phenytoin level follow-up. Check INR soon after start/stop/dose change of the inducer.",
      "labelGuidance": "Monitor INR more frequently; use institutional warfarin dosing protocols.",
      "uncertainty": "Exact INR delta varies by genetics, diet, illness — no false precision.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "warfarin-phenytoin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Grapefruit juice",
      "interactorSlug": "grapefruit",
      "synonyms": [
        "GFJ"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "CYP3A4 gut inhibition theoretically relevant to apixaban/rivaroxaban; high-quality quantitative PK for typical dietary grapefruit + DOAC is limited.",
      "practiceInterpretation": "Reasonable to counsel moderation/avoidance of large quantities; do not equate to ketoconazole-level interaction without data.",
      "labelGuidance": "Usually yellow/low-priority vs drug inhibitors.",
      "uncertainty": "Quantitative PK not identified in curated sources for typical dietary exposure.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "apixaban-grapefruit"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Grapefruit juice",
      "interactorSlug": "grapefruit",
      "synonyms": [
        "GFJ"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Theoretical CYP3A4 effect; evidence thinner than for strong drug inhibitors.",
      "practiceInterpretation": "Counsel moderation; prioritize drug inhibitors and renal function over juice anxiety.",
      "labelGuidance": "Low-priority relative to azoles/PIs.",
      "uncertainty": "Quantitative PK not identified in curated sources.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide on DOACs in AF",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "clinicalEffects": [],
      "id": "rivaroxaban-grapefruit"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Erythromycin",
      "interactorSlug": "erythromycin",
      "synonyms": [
        "Ery-Tab"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure (~+34% AUC therapeutic-dose)",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+34% (90% CI 23–46%)",
          "population": "Healthy subjects",
          "design": "Therapeutic-dose rivaroxaban DDI with erythromycin (Mueck)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "parameter": "Cmax",
          "change": "+38% (90% CI 21–48%)",
          "population": "Healthy subjects",
          "design": "Same erythromycin study",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Moderate dual inhibition; SmPC notes larger relative exposure when erythromycin combined with renal impairment.",
      "practiceInterpretation": "Usually manageable; beware CKD + macrolide stacking.",
      "labelGuidance": "Caution in high-risk/renal impairment per SmPC.",
      "uncertainty": "Exact clinical event rates for the pair are limited.",
      "sources": [
        {
          "label": "Mueck et al. BJCP 2013 (rivaroxaban DDI program)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98.",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-erythromycin",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Fluconazole",
      "interactorSlug": "fluconazole",
      "synonyms": [
        "Diflucan"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+42% (90% CI 29–56%)",
          "population": "Healthy subjects",
          "design": "Therapeutic-dose rivaroxaban + fluconazole (Mueck program)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "parameter": "AUC (AUCR)",
          "change": "Little/no effect in microdose cocktail (CYP3A without strong P-gp)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Azole microdose FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Fluconazole effect may appear smaller on microdose cocktail than therapeutic-dose Mueck +42% AUC — prefer therapeutic-dose figure for rivaroxaban teaching.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Moderate CYP3A4 inhibitor; SmPC: usually not clinically relevant in most patients but can matter if high-risk.",
      "practiceInterpretation": "Often acceptable; monitor high bleed-risk and renal impairment patients more closely.",
      "labelGuidance": "Yellow/caution per SmPC nuance — not ketoconazole-class avoid.",
      "uncertainty": "Microdose vs therapeutic-dose discrepancy illustrates why design must be labeled.",
      "sources": [
        {
          "label": "Mueck et al. BJCP 2013 (rivaroxaban DDI program)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98.",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-fluconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Posaconazole",
      "interactorSlug": "posaconazole",
      "synonyms": [
        "Noxafil"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR ≈1.62",
          "population": "Healthy volunteers — MICRODOSE FXaI cocktail",
          "design": "Therapeutic posaconazole + microdosed FXa inhibitors",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Similar perpetrator strength to ketoconazole in microdose cocktail for apixaban",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose only — confirm therapeutic-dose labeling before acting.",
      "practiceInterpretation": "For apixaban, verify PI / EHRA-style azole guidance; do not treat microdose AUCR as therapeutic-dose magnitude. Use microdose as rank-order evidence only.",
      "labelGuidance": "Check agent-specific PI; do not treat microdose AUCR as a green light.",
      "uncertainty": "Therapeutic-dose pair AUC may differ from microdose AUCR.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        }
      ],
      "id": "apixaban-posaconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Posaconazole",
      "interactorSlug": "posaconazole",
      "synonyms": [
        "Noxafil"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR ≈2.1",
          "population": "Healthy volunteers — MICRODOSE FXaI cocktail",
          "design": "Therapeutic posaconazole + microdosed FXa inhibitors",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Among strongest microdose perpetrators for edoxaban",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose only — confirm therapeutic-dose labeling before acting.",
      "practiceInterpretation": "For edoxaban, verify PI / EHRA-style azole guidance; do not treat microdose AUCR as therapeutic-dose magnitude. Use microdose as rank-order evidence only.",
      "labelGuidance": "Check agent-specific PI; do not treat microdose AUCR as a green light.",
      "uncertainty": "Therapeutic-dose pair AUC may differ from microdose AUCR.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        }
      ],
      "id": "edoxaban-posaconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Posaconazole",
      "interactorSlug": "posaconazole",
      "synonyms": [
        "Noxafil"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "AUCR ≈1.37",
          "population": "Healthy volunteers — MICRODOSE FXaI cocktail",
          "design": "Therapeutic posaconazole + microdosed FXa inhibitors",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Weaker microdose effect on rivaroxaban than ketoconazole AUCR 2.32",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose only — confirm therapeutic-dose labeling before acting.",
      "practiceInterpretation": "For rivaroxaban, labeling still often groups posaconazole with avoid-class azoles; verify PI. Microdose AUCR is rank-order evidence only — not a green light.",
      "labelGuidance": "Check agent-specific PI; do not treat microdose AUCR as a green light.",
      "uncertainty": "Therapeutic-dose pair AUC may differ from microdose AUCR.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        }
      ],
      "id": "rivaroxaban-posaconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Voriconazole",
      "interactorSlug": "voriconazole",
      "synonyms": [
        "Vfend"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "Uncertain / label-conservative ↑ concern; microdose ≈null",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "Little effect in microdose cocktail (strong CYP3A, weak P-gp/BCRP story)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Therapeutic voriconazole + microdosed FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Authors interpret small FXaI effect as supporting P-gp/BCRP over CYP3A as dominant azole–FXaI mechanism.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose finding ≠ proof of no therapeutic-dose interaction in all patients; rivaroxaban labels may still list voriconazole among azoles of concern — verify PI.",
      "practiceInterpretation": "Microdose ≈ null effect is not a green light vs label; keep label-conservative ↑ concern. Do not assume 'safe' from microdose alone; check current label and patient bleed risk.",
      "labelGuidance": "Conflict possible between microdose pharmacology and conservative labeling — document which you followed.",
      "uncertainty": "Therapeutic-dose voriconazole–FXaI AUC sparse in this curation.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-voriconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Voriconazole",
      "interactorSlug": "voriconazole",
      "synonyms": [
        "Vfend"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "Uncertain / label-conservative ↑ concern; microdose ≈null",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "Little effect in microdose cocktail (strong CYP3A, weak P-gp/BCRP story)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Therapeutic voriconazole + microdosed FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Authors interpret small FXaI effect as supporting P-gp/BCRP over CYP3A as dominant azole–FXaI mechanism.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose finding ≠ proof of no therapeutic-dose interaction in all patients; rivaroxaban labels may still list voriconazole among azoles of concern — verify PI.",
      "practiceInterpretation": "Microdose ≈ null effect is not a green light vs label; keep label-conservative ↑ concern. Do not assume 'safe' from microdose alone; check current label and patient bleed risk.",
      "labelGuidance": "Conflict possible between microdose pharmacology and conservative labeling — document which you followed.",
      "uncertainty": "Therapeutic-dose voriconazole–FXaI AUC sparse in this curation.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-voriconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Voriconazole",
      "interactorSlug": "voriconazole",
      "synonyms": [
        "Vfend"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "Uncertain / label-conservative ↑ concern; microdose ≈null",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "Little effect in microdose cocktail (strong CYP3A, weak P-gp/BCRP story)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Therapeutic voriconazole + microdosed FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available. Authors interpret small FXaI effect as supporting P-gp/BCRP over CYP3A as dominant azole–FXaI mechanism.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose finding ≠ proof of no therapeutic-dose interaction in all patients; rivaroxaban labels may still list voriconazole among azoles of concern — verify PI.",
      "practiceInterpretation": "Microdose ≈ null effect is not a green light vs label; keep label-conservative ↑ concern. Do not assume 'safe' from microdose alone; check current label and patient bleed risk.",
      "labelGuidance": "Conflict possible between microdose pharmacology and conservative labeling — document which you followed.",
      "uncertainty": "Therapeutic-dose voriconazole–FXaI AUC sparse in this curation.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "Rivaroxaban SmPC/PI class wording",
          "citation": "Rivaroxaban product labeling (ketoconazole/ritonavir/clarithromycin/erythromycin/fluconazole).",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-voriconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Isavuconazole",
      "interactorSlug": "isavuconazole",
      "synonyms": [
        "Cresemba",
        "isavuconazonium"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "≈×1.33 (AUCR 1.33)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Isavuconazole + microdosed apixaban",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "parameter": "Cmax",
          "change": "≈×1.44",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Same microdose study",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Weak–moderate CYP3A / weak P-gp inhibitor profile in microdose ranking — smaller than ketoconazole.",
      "practiceInterpretation": "Usually less concerning than ketoconazole-class; still individualize bleed risk.",
      "labelGuidance": "Moderate caution; verify regional PI.",
      "uncertainty": "Therapeutic-dose confirmation limited in this curation.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "PMC8761715 microdose azole–FXaI study",
          "citation": "Foerster KI, et al. Clin Pharmacokinet (PMC8761715).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8761715/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-isavuconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Isavuconazole",
      "interactorSlug": "isavuconazole",
      "synonyms": [
        "Cresemba"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "Weaker perpetrator than ketoconazole in microdose cocktail (see paper for agent-specific AUCR)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Azole microdose FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose rank-order evidence; confirm label.",
      "practiceInterpretation": "Less severe than strong dual inhibitors in microdose ranking — still verify PI.",
      "labelGuidance": "Caution; not automatically equivalent to ketoconazole avoid.",
      "uncertainty": "Exact therapeutic-dose AUCR for this pair not separately curated beyond microdose paper.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-isavuconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Isavuconazole",
      "interactorSlug": "isavuconazole",
      "synonyms": [
        "Cresemba"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "Weaker perpetrator than ketoconazole in microdose cocktail (see paper for agent-specific AUCR)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Azole microdose FXaI cocktail",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose rank-order evidence; confirm label.",
      "practiceInterpretation": "Less severe than strong dual inhibitors in microdose ranking — still verify PI.",
      "labelGuidance": "Caution; not automatically equivalent to ketoconazole avoid.",
      "uncertainty": "Exact therapeutic-dose AUCR for this pair not separately curated beyond microdose paper.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-isavuconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Fluconazole",
      "interactorSlug": "fluconazole",
      "synonyms": [
        "Diflucan"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "Uncertain / moderate caution; microdose ≈null",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "No meaningful increase in microdose cocktail (fluconazole lacks strong P-gp inhibition)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Therapeutic fluconazole + microdosed apixaban",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Microdose suggests CYP3A-only inhibition is a weak lever for apixaban vs P-gp/BCRP perpetrators. Observational DOAC+fluconazole bleed signals still exist in some cohorts — PK≠PD.",
      "practiceInterpretation": "Microdose ≈ null effect is not a green light vs label caution; keep moderate caution. Usually lower PK concern than ketoconazole; still watch high-risk bleed patients and warfarin-style INR issues if switching anticoagulants.",
      "labelGuidance": "Moderate caution; not strong-dual-inhibitor class.",
      "uncertainty": "Therapeutic-dose apixaban+fluconazole AUC not separately curated beyond microdose.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-fluconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Fluconazole",
      "interactorSlug": "fluconazole",
      "synonyms": [
        "Diflucan"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC (AUCR)",
          "change": "Little/no effect expected in microdose azole cocktail (CYP3A without strong P-gp)",
          "population": "Healthy volunteers — MICRODOSE",
          "design": "Microdosed FXaI + fluconazole",
          "regimenNotes": "MICRODOSE STUDY: FXa inhibitors given as microdoses (µg range), not therapeutic doses. AUCR ranks perpetrator strength but may not equal clinical-dose magnitude — prefer therapeutic-dose DDI studies when available.",
          "citation": "Foerster KI, et al. Clin Pharmacokinet 2021",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Edoxaban is primarily P-gp — CYP3A-only inhibitors less important.",
      "practiceInterpretation": "Lower priority than P-gp inhibitors (quinidine/verapamil/dronedarone/ketoconazole).",
      "labelGuidance": "Usually caution-low vs P-gp inhibitors.",
      "uncertainty": "Confirm label for high-dose fluconazole scenarios.",
      "sources": [
        {
          "label": "Microdosed FXaI cocktail + azoles (Clin Pharmacokinet)",
          "citation": "Foerster KI, et al. Clin Pharmacokinet. 2021 — microdose cocktail (flag: not therapeutic FXaI dose).",
          "url": "https://doi.org/10.1007/s40262-021-01051-9"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-fluconazole",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Nirmatrelvir/ritonavir (Paxlovid)",
      "interactorSlug": "paxlovid",
      "synonyms": [
        "Paxlovid",
        "nirmatrelvir",
        "nirmatrelvir-ritonavir",
        "COVID antiviral"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+94%",
          "population": "Healthy volunteers (n=24 cited in Liverpool/ECR pathway)",
          "design": "Dabigatran 75 mg single dose with nirmatrelvir/ritonavir 300/100 mg",
          "n": "24",
          "regimenNotes": "Short-course booster — primarily P-gp inhibition (unlike long-term ritonavir mixed effects)",
          "citation": "ECR 2024; Liverpool COVID interactions; BJCP dabigatran PK",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "parameter": "Cmax",
          "change": "+133%",
          "population": "Healthy volunteers",
          "design": "Same Paxlovid–dabigatran DDI",
          "n": "24",
          "citation": "ECR 2024 / Liverpool",
          "url": "https://www.covid19-druginteractions.org/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "HV single-dose dabigatran 75 mg design. Ritonavir P-gp inhibition can persist for days after the last Paxlovid dose — resume full dabigatran only after the recommended washout (Liverpool often ~3 days after last dose). CPT/Liverpool note analogies to short-course darunavir/cobicistat for dosing algorithms.",
      "practiceInterpretation": "Reduce dabigatran or avoid per indication/renal function and SmPC/Liverpool algorithms (e.g., 150→110 mg BID if normal renal function in some pathways; further cuts or LMWH bridge if high thrombotic risk). Do not restart full dose the morning after the last Paxlovid tablet without checking guidance.",
      "labelGuidance": "SmPC/Liverpool: dose-adjust or avoid; bleeding risk ↑.",
      "uncertainty": "AF patient steady-state magnitudes may differ from HV 75 mg single-dose study.",
      "sources": [
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "PMC11363061 Paxlovid CV interactions",
          "citation": "ECR 2024 practice considerations.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11363061/"
        },
        {
          "label": "BJCP nirmatrelvir/ritonavir ± dabigatran PK",
          "citation": "Singh RSP, et al. Br J Clin Pharmacol — dabigatran with Paxlovid/ritonavir.",
          "url": "https://doi.org/10.1111/bcp.15835"
        },
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-paxlovid",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Nirmatrelvir/ritonavir (Paxlovid)",
      "interactorSlug": "paxlovid",
      "synonyms": [
        "Paxlovid",
        "nirmatrelvir-ritonavir"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+153%",
          "population": "Healthy volunteers / SmPC–ECR cited",
          "design": "Nirmatrelvir/ritonavir with rivaroxaban (ECR 2024 citing SmPC pathway)",
          "citation": "ECR 2024 (PMC11363061)",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "parameter": "Cmax",
          "change": "+53%",
          "population": "Healthy volunteers / SmPC–ECR cited",
          "design": "Same Paxlovid–rivaroxaban statement",
          "citation": "ECR 2024",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Magnitude aligns with chronic ritonavir therapeutic-dose ≈×2.5 AUC (Mueck). Short course still clinically important; effect may linger after last dose.",
      "practiceInterpretation": "Avoid concomitant rivaroxaban with Paxlovid when possible — hold/switch to LMWH or alternative COVID therapy per institutional pathway (ECR algorithms).",
      "labelGuidance": "Avoid / do not combine — strong dual inhibition.",
      "uncertainty": "Confirm current Liverpool/NIH pathway for the exact hold/restart calendar.",
      "sources": [
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "PMC11363061 Paxlovid CV interactions",
          "citation": "ECR 2024 practice considerations.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11363061/"
        },
        {
          "label": "Mueck et al. BJCP 2013",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98.",
          "url": "https://doi.org/10.1111/bcp.12075"
        },
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "Rivaroxaban SmPC",
          "citation": "Rivaroxaban product labeling.",
          "url": "https://www.medicines.org.uk/emc/product/15608/smpc"
        }
      ],
      "id": "rivaroxaban-paxlovid",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Nirmatrelvir/ritonavir (Paxlovid)",
      "interactorSlug": "paxlovid",
      "synonyms": [
        "Paxlovid"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Expected ↑ exposure (CYP3A4+P-gp substrate) — quantitative Paxlovid–apixaban AUC not identified in curated sources. Ketoconazole ≈×2 AUC is the strong dual-inhibitor anchor.",
      "practiceInterpretation": "Follow US PI dual-inhibitor logic and COVID pathways: often hold, dose-reduce, or bridge during/after Paxlovid; coordinate restart timing because ritonavir effect persists days after last dose.",
      "labelGuidance": "Management recommendations without a dedicated AUC study — verify Liverpool/institutional protocol.",
      "uncertainty": "Quantitative PK not identified for this exact pair.",
      "sources": [
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "Frost et al. BJCP 2015 (ketoconazole analog)",
          "citation": "Frost C, et al. Br J Clin Pharmacol. 2015;79:838-846.",
          "url": "https://doi.org/10.1111/bcp.12541"
        },
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "US PI / label class guidance",
          "citation": "US prescribing information (apixaban strong dual inhibitor dose rules; ritonavir class).",
          "url": null
        }
      ],
      "id": "apixaban-paxlovid",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Nirmatrelvir/ritonavir (Paxlovid)",
      "interactorSlug": "paxlovid",
      "synonyms": [
        "Paxlovid"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Expected ↑ via P-gp inhibition; pair-specific Paxlovid AUC not curated.",
      "practiceInterpretation": "Expect label/management pathways similar to other P-gp inhibitors — often avoid/hold/bridge during Paxlovid; check SmPC and Liverpool.",
      "labelGuidance": "Caution/avoid per COVID interaction resources.",
      "uncertainty": "Quantitative PK not identified for this exact pair.",
      "sources": [
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-paxlovid",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Nirmatrelvir/ritonavir (Paxlovid)",
      "interactorSlug": "paxlovid",
      "synonyms": [
        "Paxlovid"
      ],
      "mechanisms": [
        "CYP3A4 induction/inhibition complex",
        "CYP2C9 effects possible"
      ],
      "effectDirection": "↑ INR / monitoring required",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR change",
          "signal": "SmPC recommends anticoagulation parameter monitoring. Muse et al. series (n=29) showed only slight INR trend changes, possibly infection-related rather than drug — small, non-hospitalized sample; cannot exclude drug effect.",
          "citation": "ECR 2024 citing Muse et al. INR case series",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Acute illness confounds INR; do not assume Paxlovid is INR-neutral.",
      "practiceInterpretation": "Check INR during and after Paxlovid; be ready to adjust warfarin. Prefer closer monitoring over assuming no interaction.",
      "labelGuidance": "SmPC: monitor anticoagulation parameters.",
      "uncertainty": "No large RCT; case-series signal is noisy.",
      "sources": [
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "PMC11363061 Paxlovid CV interactions",
          "citation": "ECR 2024 practice considerations.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11363061/"
        }
      ],
      "id": "warfarin-paxlovid"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Cobicistat / darunavir-cobicistat",
      "interactorSlug": "cobicistat",
      "synonyms": [
        "Tybost",
        "Prezcobix",
        "DRV/c",
        "cobicistat booster"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Cobicistat is a strong CYP3A4/P-gp inhibitor without ritonavir's long-term induction. Liverpool/CPT-style recommendations often analogize short-course ritonavir (Paxlovid) P-gp effects to darunavir/cobicistat for dabigatran dosing — mark as extrapolation.",
      "practiceInterpretation": "Treat as clinically important inhibitor. For dabigatran, short-course booster algorithms used for Paxlovid are partly based on DRV/c analogy. For rivaroxaban/apixaban, prefer avoid or label dual-inhibitor rules with HIV pharmacy input.",
      "labelGuidance": "HIV/boosted-ART interaction tables + DOAC PI; not a casual combination.",
      "uncertainty": "Pair-specific therapeutic-dose AUC often not curated — mechanism + label/extrapolation.",
      "sources": [
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "US PI / label class guidance",
          "citation": "US prescribing information (apixaban strong dual inhibitor dose rules; ritonavir class).",
          "url": null
        }
      ],
      "id": "dabigatran-cobicistat",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Cobicistat / darunavir-cobicistat",
      "interactorSlug": "cobicistat",
      "synonyms": [
        "Tybost",
        "Prezcobix",
        "DRV/c",
        "cobicistat booster"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Cobicistat is a strong CYP3A4/P-gp inhibitor without ritonavir's long-term induction. Liverpool/CPT-style recommendations often analogize short-course ritonavir (Paxlovid) P-gp effects to darunavir/cobicistat for dabigatran dosing — mark as extrapolation.",
      "practiceInterpretation": "Treat as clinically important inhibitor. For dabigatran, short-course booster algorithms used for Paxlovid are partly based on DRV/c analogy. For rivaroxaban/apixaban, prefer avoid or label dual-inhibitor rules with HIV pharmacy input.",
      "labelGuidance": "HIV/boosted-ART interaction tables + DOAC PI; not a casual combination.",
      "uncertainty": "Pair-specific therapeutic-dose AUC often not curated — mechanism + label/extrapolation.",
      "sources": [
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "US PI / label class guidance",
          "citation": "US prescribing information (apixaban strong dual inhibitor dose rules; ritonavir class).",
          "url": null
        }
      ],
      "id": "apixaban-cobicistat",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Cobicistat / darunavir-cobicistat",
      "interactorSlug": "cobicistat",
      "synonyms": [
        "Tybost",
        "Prezcobix",
        "DRV/c",
        "cobicistat booster"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Cobicistat is a strong CYP3A4/P-gp inhibitor without ritonavir's long-term induction. Liverpool/CPT-style recommendations often analogize short-course ritonavir (Paxlovid) P-gp effects to darunavir/cobicistat for dabigatran dosing — mark as extrapolation.",
      "practiceInterpretation": "Treat as clinically important inhibitor. For dabigatran, short-course booster algorithms used for Paxlovid are partly based on DRV/c analogy. For rivaroxaban/apixaban, prefer avoid or label dual-inhibitor rules with HIV pharmacy input.",
      "labelGuidance": "HIV/boosted-ART interaction tables + DOAC PI; not a casual combination.",
      "uncertainty": "Pair-specific therapeutic-dose AUC often not curated — mechanism + label/extrapolation.",
      "sources": [
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "US PI / label class guidance",
          "citation": "US prescribing information (apixaban strong dual inhibitor dose rules; ritonavir class).",
          "url": null
        }
      ],
      "id": "rivaroxaban-cobicistat",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Cobicistat / darunavir-cobicistat",
      "interactorSlug": "cobicistat",
      "synonyms": [
        "Tybost",
        "Prezcobix",
        "DRV/c",
        "cobicistat booster"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Cobicistat is a strong CYP3A4/P-gp inhibitor without ritonavir's long-term induction. Liverpool/CPT-style recommendations often analogize short-course ritonavir (Paxlovid) P-gp effects to darunavir/cobicistat for dabigatran dosing — mark as extrapolation.",
      "practiceInterpretation": "Treat as clinically important inhibitor. For dabigatran, short-course booster algorithms used for Paxlovid are partly based on DRV/c analogy. For rivaroxaban/apixaban, prefer avoid or label dual-inhibitor rules with HIV pharmacy input.",
      "labelGuidance": "HIV/boosted-ART interaction tables + DOAC PI; not a casual combination.",
      "uncertainty": "Pair-specific therapeutic-dose AUC often not curated — mechanism + label/extrapolation.",
      "sources": [
        {
          "label": "Liverpool COVID-19 Drug Interactions",
          "citation": "University of Liverpool COVID-19 interaction checker (dabigatran/Paxlovid dosing pathways).",
          "url": "https://www.covid19-druginteractions.org/"
        },
        {
          "label": "ECR 2024 — CV DDIs with nirmatrelvir/ritonavir",
          "citation": "Di Castelnuovo A, et al. / ECR Journal 2024 (PMC11363061).",
          "url": "https://doi.org/10.15420/ecr.2024.04"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "US PI / label class guidance",
          "citation": "US prescribing information (apixaban strong dual inhibitor dose rules; ritonavir class).",
          "url": null
        }
      ],
      "id": "edoxaban-cobicistat",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Glecaprevir/pibrentasvir",
      "interactorSlug": "glecaprevir-pibrentasvir",
      "synonyms": [
        "Mavyret",
        "Maviret",
        "GLE/PIB"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+138% (phase I HV; US NDA also cites ≈2.38-fold in ClinPharm review tables)",
          "population": "Healthy volunteers — phase I",
          "design": "Dabigatran + glecaprevir/pibrentasvir DDI",
          "regimenNotes": "Systematic review of DOAC–DAA PK",
          "citation": "Bellesini M, et al. PMC7595962",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "EU labeling often contraindicates; US pathways may allow dabigatran 75 mg BID if CrCl 30–50 and avoid if CrCl <30 — verify current labels.",
      "practiceInterpretation": "Prefer alternative anticoagulant during GLE/PIB or follow country-specific dose/avoid rules; counsel bleeding risk.",
      "labelGuidance": "Region-dependent contraindication vs dose reduction — check Hep Drug Interactions + PI.",
      "uncertainty": "Clinical bleed event rates on the combination are under-studied vs PK.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-glecaprevir-pibrentasvir",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Sofosbuvir/velpatasvir/voxilaprevir",
      "interactorSlug": "sof-vel-vox",
      "synonyms": [
        "Vosevi",
        "SOF/VEL/VOX"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+161% (phase I HV)",
          "population": "Healthy volunteers — phase I",
          "design": "Dabigatran + SOF/VEL/VOX",
          "citation": "Bellesini M, et al. PMC7595962",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Large P-gp-mediated ↑; often contraindicated in EU-type guidance.",
      "practiceInterpretation": "Avoid dabigatran with SOF/VEL/VOX when possible; switch anticoagulant for the DAA course.",
      "labelGuidance": "Frequently listed as contraindicated / avoid — verify PI.",
      "uncertainty": "Other DOAC–SOF/VEL/VOX PK largely lacking.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        }
      ],
      "id": "dabigatran-sof-vel-vox",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Odalasvir/simeprevir",
      "interactorSlug": "odalasvir-simeprevir",
      "synonyms": [
        "simeprevir",
        "odalasvir"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+103% (phase I HV)",
          "population": "Healthy volunteers — phase I",
          "design": "Dabigatran + odalasvir/simeprevir (historical DAA regimen in systematic review)",
          "citation": "Bellesini M, et al. PMC7595962",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Older/less used DAA combination in modern practice — included for completeness of the systematic review evidence base.",
      "practiceInterpretation": "If encountered, treat as clinically important P-gp interaction; prefer alternative anticoagulant.",
      "labelGuidance": "Historical DAA — check current regional availability/labeling.",
      "uncertainty": "Modern first-line DAAs differ; do not generalize all HCV therapy from this pair alone.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        }
      ],
      "id": "dabigatran-odalasvir-simeprevir",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Glecaprevir/pibrentasvir",
      "interactorSlug": "glecaprevir-pibrentasvir",
      "synonyms": [
        "Mavyret"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Systematic review: dedicated PK largely limited to dabigatran–DAA pairs. Quantitative AUC for this DOAC–DAA pair not identified in curated sources.",
      "practiceInterpretation": "Use Hep Drug Interactions + product labeling; do not assume 'no interaction' from absence of a study. Dabigatran has the quantified red flags.",
      "labelGuidance": "Check University of Liverpool Hep interactions and PI.",
      "uncertainty": "Real-world clinical relevance incompletely characterized — evidence gap called out by the systematic review.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-glecaprevir-pibrentasvir",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Sofosbuvir/velpatasvir/voxilaprevir",
      "interactorSlug": "sof-vel-vox",
      "synonyms": [
        "Vosevi"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Systematic review: dedicated PK largely limited to dabigatran–DAA pairs. Quantitative AUC for this DOAC–DAA pair not identified in curated sources.",
      "practiceInterpretation": "Use Hep Drug Interactions + product labeling; do not assume 'no interaction' from absence of a study. Dabigatran has the quantified red flags.",
      "labelGuidance": "Check University of Liverpool Hep interactions and PI.",
      "uncertainty": "Real-world clinical relevance incompletely characterized — evidence gap called out by the systematic review.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-sof-vel-vox",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Glecaprevir/pibrentasvir",
      "interactorSlug": "glecaprevir-pibrentasvir",
      "synonyms": [
        "Mavyret"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Systematic review: dedicated PK largely limited to dabigatran–DAA pairs. Quantitative AUC for this DOAC–DAA pair not identified in curated sources.",
      "practiceInterpretation": "Use Hep Drug Interactions + product labeling; do not assume 'no interaction' from absence of a study. Dabigatran has the quantified red flags.",
      "labelGuidance": "Check University of Liverpool Hep interactions and PI.",
      "uncertainty": "Real-world clinical relevance incompletely characterized — evidence gap called out by the systematic review.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-glecaprevir-pibrentasvir",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Sofosbuvir/velpatasvir/voxilaprevir",
      "interactorSlug": "sof-vel-vox",
      "synonyms": [
        "Vosevi"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Systematic review: dedicated PK largely limited to dabigatran–DAA pairs. Quantitative AUC for this DOAC–DAA pair not identified in curated sources.",
      "practiceInterpretation": "Use Hep Drug Interactions + product labeling; do not assume 'no interaction' from absence of a study. Dabigatran has the quantified red flags.",
      "labelGuidance": "Check University of Liverpool Hep interactions and PI.",
      "uncertainty": "Real-world clinical relevance incompletely characterized — evidence gap called out by the systematic review.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-sof-vel-vox",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Glecaprevir/pibrentasvir",
      "interactorSlug": "glecaprevir-pibrentasvir",
      "synonyms": [
        "Mavyret"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Systematic review: dedicated PK largely limited to dabigatran–DAA pairs. Quantitative AUC for this DOAC–DAA pair not identified in curated sources.",
      "practiceInterpretation": "Use Hep Drug Interactions + product labeling; do not assume 'no interaction' from absence of a study. Dabigatran has the quantified red flags.",
      "labelGuidance": "Check University of Liverpool Hep interactions and PI.",
      "uncertainty": "Real-world clinical relevance incompletely characterized — evidence gap called out by the systematic review.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-glecaprevir-pibrentasvir",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Sofosbuvir/velpatasvir/voxilaprevir",
      "interactorSlug": "sof-vel-vox",
      "synonyms": [
        "Vosevi"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Systematic review: dedicated PK largely limited to dabigatran–DAA pairs. Quantitative AUC for this DOAC–DAA pair not identified in curated sources.",
      "practiceInterpretation": "Use Hep Drug Interactions + product labeling; do not assume 'no interaction' from absence of a study. Dabigatran has the quantified red flags.",
      "labelGuidance": "Check University of Liverpool Hep interactions and PI.",
      "uncertainty": "Real-world clinical relevance incompletely characterized — evidence gap called out by the systematic review.",
      "sources": [
        {
          "label": "DOAC–HCV DAA systematic review",
          "citation": "Bellesini M, et al. Clin Pharmacokinet / PMC7595962.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7595962/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-sof-vel-vox",
      "clinicalEffects": []
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ibrutinib",
      "interactorSlug": "ibrutinib",
      "synonyms": [
        "Imbruvica",
        "BTK inhibitor",
        "acalabrutinib",
        "zanubrutinib",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "PD additive bleed (BTK/platelet dysfunction)"
      ],
      "effectDirection": "↑ bleed PD (+ AF indication overlap)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage on ibrutinib (trial follow-up)",
          "signal": "Ibrutinib-associated bleeding reviews (AHA/cardio-oncology–cited literature): major hemorrhage rates about 4–8% in trials with >1 year follow-up; fatal hemorrhage <1%. Mechanism is largely PD platelet dysfunction via BTK, not a published DOAC AUC interaction.",
          "citation": "Shatzel JJ, et al. PMC6152914",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "outcome": "Major bleed with ibrutinib + therapeutic anticoagulation",
          "signal": "Retrospective CLL exposures (n=64): major bleed 8% with ibrutinib + therapeutic AC; events clustered with DOACs in that series (rivaroxaban 3/17, apixaban 2/35 in that report). Small n — hypothesis-generating.",
          "citation": "DOI 10.1080/10428194.2023.2223740",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Other covalent BTKis (acalabrutinib, zanubrutinib) also carry hemorrhage warnings in labeling — apply PD caution with any OAC. Ibrutinib itself is a sensitive CYP3A4 victim (strong inhibitors can markedly ↑ ibrutinib — classic ketoconazole-order increases in labeling); stacking CYP3A4 inhibitors raises ibrutinib (bleed) risk even before DOAC considerations. AF is a known ibrutinib adverse effect — anticoagulation decisions are common.",
      "practiceInterpretation": "Minimize antiplatelets; shared heme-onc + cardiology plan; consider holding ibrutinib around procedures. Prefer careful DOAC choice/dose per specialty guidance — do not invent an ibrutinib-driven DOAC dose cut from missing AUC data. LMWH is an escape hatch when bleed risk is prohibitive.",
      "labelGuidance": "BTKi hemorrhage warnings; avoid stacking CYP3A4 inhibitors with ibrutinib.",
      "uncertainty": "No curated quantitative ibrutinib→DOAC AUC — omitted intentionally.",
      "sources": [
        {
          "label": "Ibrutinib bleeding pathogenesis review",
          "citation": "Shatzel JJ, et al. — major hemorrhage ~4–8% in longer trials; fatal <1%. PMC6152914.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "label": "Ibrutinib + therapeutic anticoagulation bleed cohort",
          "citation": "CLL cohort: major bleed 8% (5/64) with ibrutinib + therapeutic AC. DOI 10.1080/10428194.2023.2223740.",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ibrutinib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ibrutinib",
      "interactorSlug": "ibrutinib",
      "synonyms": [
        "Imbruvica",
        "BTK inhibitor",
        "acalabrutinib",
        "zanubrutinib",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "PD additive bleed (BTK/platelet dysfunction)"
      ],
      "effectDirection": "↑ bleed PD (+ AF indication overlap)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage on ibrutinib (trial follow-up)",
          "signal": "Ibrutinib-associated bleeding reviews (AHA/cardio-oncology–cited literature): major hemorrhage rates about 4–8% in trials with >1 year follow-up; fatal hemorrhage <1%. Mechanism is largely PD platelet dysfunction via BTK, not a published DOAC AUC interaction.",
          "citation": "Shatzel JJ, et al. PMC6152914",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "outcome": "Major bleed with ibrutinib + therapeutic anticoagulation",
          "signal": "Retrospective CLL exposures (n=64): major bleed 8% with ibrutinib + therapeutic AC; events clustered with DOACs in that series (rivaroxaban 3/17, apixaban 2/35 in that report). Small n — hypothesis-generating.",
          "citation": "DOI 10.1080/10428194.2023.2223740",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Other covalent BTKis (acalabrutinib, zanubrutinib) also carry hemorrhage warnings in labeling — apply PD caution with any OAC. Ibrutinib itself is a sensitive CYP3A4 victim (strong inhibitors can markedly ↑ ibrutinib — classic ketoconazole-order increases in labeling); stacking CYP3A4 inhibitors raises ibrutinib (bleed) risk even before DOAC considerations. AF is a known ibrutinib adverse effect — anticoagulation decisions are common.",
      "practiceInterpretation": "Minimize antiplatelets; shared heme-onc + cardiology plan; consider holding ibrutinib around procedures. Prefer careful DOAC choice/dose per specialty guidance — do not invent an ibrutinib-driven DOAC dose cut from missing AUC data. LMWH is an escape hatch when bleed risk is prohibitive.",
      "labelGuidance": "BTKi hemorrhage warnings; avoid stacking CYP3A4 inhibitors with ibrutinib.",
      "uncertainty": "No curated quantitative ibrutinib→DOAC AUC — omitted intentionally.",
      "sources": [
        {
          "label": "Ibrutinib bleeding pathogenesis review",
          "citation": "Shatzel JJ, et al. — major hemorrhage ~4–8% in longer trials; fatal <1%. PMC6152914.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "label": "Ibrutinib + therapeutic anticoagulation bleed cohort",
          "citation": "CLL cohort: major bleed 8% (5/64) with ibrutinib + therapeutic AC. DOI 10.1080/10428194.2023.2223740.",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ibrutinib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ibrutinib",
      "interactorSlug": "ibrutinib",
      "synonyms": [
        "Imbruvica",
        "BTK inhibitor",
        "acalabrutinib",
        "zanubrutinib",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "PD additive bleed (BTK/platelet dysfunction)",
        "P-gp theoretical"
      ],
      "effectDirection": "↑ bleed PD (+ AF indication overlap)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage on ibrutinib (trial follow-up)",
          "signal": "Ibrutinib-associated bleeding reviews (AHA/cardio-oncology–cited literature): major hemorrhage rates about 4–8% in trials with >1 year follow-up; fatal hemorrhage <1%. Mechanism is largely PD platelet dysfunction via BTK, not a published DOAC AUC interaction.",
          "citation": "Shatzel JJ, et al. PMC6152914",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "outcome": "Major bleed with ibrutinib + therapeutic anticoagulation",
          "signal": "Retrospective CLL exposures (n=64): major bleed 8% with ibrutinib + therapeutic AC; events clustered with DOACs in that series (rivaroxaban 3/17, apixaban 2/35 in that report). Small n — hypothesis-generating.",
          "citation": "DOI 10.1080/10428194.2023.2223740",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Other covalent BTKis (acalabrutinib, zanubrutinib) also carry hemorrhage warnings in labeling — apply PD caution with any OAC. Ibrutinib itself is a sensitive CYP3A4 victim (strong inhibitors can markedly ↑ ibrutinib — classic ketoconazole-order increases in labeling); stacking CYP3A4 inhibitors raises ibrutinib (bleed) risk even before DOAC considerations. AF is a known ibrutinib adverse effect — anticoagulation decisions are common.",
      "practiceInterpretation": "Minimize antiplatelets; shared heme-onc + cardiology plan; consider holding ibrutinib around procedures. Prefer careful DOAC choice/dose per specialty guidance — do not invent an ibrutinib-driven DOAC dose cut from missing AUC data. LMWH is an escape hatch when bleed risk is prohibitive.",
      "labelGuidance": "BTKi hemorrhage warnings; avoid stacking CYP3A4 inhibitors with ibrutinib.",
      "uncertainty": "No curated quantitative ibrutinib→DOAC AUC — omitted intentionally.",
      "sources": [
        {
          "label": "Ibrutinib bleeding pathogenesis review",
          "citation": "Shatzel JJ, et al. — major hemorrhage ~4–8% in longer trials; fatal <1%. PMC6152914.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "label": "Ibrutinib + therapeutic anticoagulation bleed cohort",
          "citation": "CLL cohort: major bleed 8% (5/64) with ibrutinib + therapeutic AC. DOI 10.1080/10428194.2023.2223740.",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ibrutinib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ibrutinib",
      "interactorSlug": "ibrutinib",
      "synonyms": [
        "Imbruvica",
        "BTK inhibitor",
        "acalabrutinib",
        "zanubrutinib",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "PD additive bleed (BTK/platelet dysfunction)"
      ],
      "effectDirection": "↑ bleed PD (+ AF indication overlap)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage on ibrutinib (trial follow-up)",
          "signal": "Ibrutinib-associated bleeding reviews (AHA/cardio-oncology–cited literature): major hemorrhage rates about 4–8% in trials with >1 year follow-up; fatal hemorrhage <1%. Mechanism is largely PD platelet dysfunction via BTK, not a published DOAC AUC interaction.",
          "citation": "Shatzel JJ, et al. PMC6152914",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "outcome": "Major bleed with ibrutinib + therapeutic anticoagulation",
          "signal": "Retrospective CLL exposures (n=64): major bleed 8% with ibrutinib + therapeutic AC; events clustered with DOACs in that series (rivaroxaban 3/17, apixaban 2/35 in that report). Small n — hypothesis-generating.",
          "citation": "DOI 10.1080/10428194.2023.2223740",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Other covalent BTKis (acalabrutinib, zanubrutinib) also carry hemorrhage warnings in labeling — apply PD caution with any OAC. Ibrutinib itself is a sensitive CYP3A4 victim (strong inhibitors can markedly ↑ ibrutinib — classic ketoconazole-order increases in labeling); stacking CYP3A4 inhibitors raises ibrutinib (bleed) risk even before DOAC considerations. AF is a known ibrutinib adverse effect — anticoagulation decisions are common.",
      "practiceInterpretation": "Minimize antiplatelets; shared heme-onc + cardiology plan; consider holding ibrutinib around procedures. Prefer careful DOAC choice/dose per specialty guidance — do not invent an ibrutinib-driven DOAC dose cut from missing AUC data. LMWH is an escape hatch when bleed risk is prohibitive.",
      "labelGuidance": "BTKi hemorrhage warnings; avoid stacking CYP3A4 inhibitors with ibrutinib.",
      "uncertainty": "No curated quantitative ibrutinib→DOAC AUC — omitted intentionally.",
      "sources": [
        {
          "label": "Ibrutinib bleeding pathogenesis review",
          "citation": "Shatzel JJ, et al. — major hemorrhage ~4–8% in longer trials; fatal <1%. PMC6152914.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "label": "Ibrutinib + therapeutic anticoagulation bleed cohort",
          "citation": "CLL cohort: major bleed 8% (5/64) with ibrutinib + therapeutic AC. DOI 10.1080/10428194.2023.2223740.",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ibrutinib"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Ibrutinib",
      "interactorSlug": "ibrutinib",
      "synonyms": [
        "Imbruvica",
        "BTK inhibitor",
        "acalabrutinib",
        "zanubrutinib",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "PD additive bleed (BTK/platelet dysfunction)"
      ],
      "effectDirection": "↑ bleed PD (+ AF indication overlap)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage on ibrutinib (trial follow-up)",
          "signal": "Ibrutinib-associated bleeding reviews (AHA/cardio-oncology–cited literature): major hemorrhage rates about 4–8% in trials with >1 year follow-up; fatal hemorrhage <1%. Mechanism is largely PD platelet dysfunction via BTK, not a published DOAC AUC interaction.",
          "citation": "Shatzel JJ, et al. PMC6152914",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "outcome": "Major bleed with ibrutinib + therapeutic anticoagulation",
          "signal": "Retrospective CLL exposures (n=64): major bleed 8% with ibrutinib + therapeutic AC; events clustered with DOACs in that series (rivaroxaban 3/17, apixaban 2/35 in that report). Small n — hypothesis-generating.",
          "citation": "DOI 10.1080/10428194.2023.2223740",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Other covalent BTKis (acalabrutinib, zanubrutinib) also carry hemorrhage warnings in labeling — apply PD caution with any OAC. Ibrutinib itself is a sensitive CYP3A4 victim (strong inhibitors can markedly ↑ ibrutinib — classic ketoconazole-order increases in labeling); stacking CYP3A4 inhibitors raises ibrutinib (bleed) risk even before DOAC considerations. AF is a known ibrutinib adverse effect — anticoagulation decisions are common.",
      "practiceInterpretation": "Minimize antiplatelets; shared heme-onc + cardiology plan; consider holding ibrutinib around procedures. Prefer careful DOAC choice/dose per specialty guidance — do not invent an ibrutinib-driven DOAC dose cut from missing AUC data. LMWH is an escape hatch when bleed risk is prohibitive.",
      "labelGuidance": "BTKi hemorrhage warnings; avoid stacking CYP3A4 inhibitors with ibrutinib.",
      "uncertainty": "No curated quantitative ibrutinib→DOAC AUC — omitted intentionally.",
      "sources": [
        {
          "label": "Ibrutinib bleeding pathogenesis review",
          "citation": "Shatzel JJ, et al. — major hemorrhage ~4–8% in longer trials; fatal <1%. PMC6152914.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6152914/"
        },
        {
          "label": "Ibrutinib + therapeutic anticoagulation bleed cohort",
          "citation": "CLL cohort: major bleed 8% (5/64) with ibrutinib + therapeutic AC. DOI 10.1080/10428194.2023.2223740.",
          "url": "https://doi.org/10.1080/10428194.2023.2223740"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-ibrutinib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Primidone",
      "interactorSlug": "primidone",
      "synonyms": [
        "Mysoline"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "id": "apixaban-primidone"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Primidone",
      "interactorSlug": "primidone",
      "synonyms": [
        "Mysoline"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "US labels: avoid concomitant strong P-gp + CYP3A4 inducers (includes carbamazepine, phenytoin, phenobarbital / often St John's wort).",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "id": "rivaroxaban-primidone"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Primidone",
      "interactorSlug": "primidone",
      "synonyms": [
        "Mysoline"
      ],
      "mechanisms": [
        "P-gp induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Avoid P-gp inducers; phenytoin case of undetectable levels supports clinical concern even when CYP story is limited.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "id": "dabigatran-primidone"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Primidone",
      "interactorSlug": "primidone",
      "synonyms": [
        "Mysoline"
      ],
      "mechanisms": [
        "P-gp induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Low/undetectable DOAC levels; recurrent thrombosis (case-level)",
          "signal": "Systematic reviews and case literature describe low or undetectable DOAC concentrations and recurrent thromboembolism with enzyme-inducing ASMs. Example: phenytoin with dabigatran — undetectable trough/serum concentration in a published case. Phenobarbital associated with very low troughs in review citations. Nested analyses also link inducing ASMs with stroke/SE risk on DOACs.",
          "citation": "PMC10131112; PubMed 26846610; JACC review; nested case-control PMC9290518",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Quantitative HV AUC for this exact ASM–DOAC pair often not available — evidence is label class + case/systematic review clinical signals. Do not invent AUC%. Primidone metabolized to phenobarbital — induce similarly.",
      "practiceInterpretation": "Prefer non-inducing ASM when anticoagulation with a DOAC is required (see lower-concern list). If inducing ASM is mandatory, strongly consider warfarin with INR monitoring or specialist epilepsy+thrombosis plan — do not assume DOAC 'just works.'",
      "labelGuidance": "Check edoxaban PI — rifampin highlighted; ASM inducers still high-caution/avoid in practice guides. Edoxaban US/EU labels often emphasize rifampin among strong inducers more explicitly than listing every ASM — still treat carbamazepine/phenytoin/phenobarbital/primidone as high-concern inducers per EHRA/reviews; verify the exact label text you use.",
      "uncertainty": "Mostly case-level and label extrapolation for exact pairs; absence of a healthy-volunteer AUC does not mean no interaction.",
      "sources": [
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Phenytoin + dabigatran undetectable levels case",
          "citation": "Wiggins BS / case report — dabigatran concentration undetectable on phenytoin. PubMed 26846610.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/26846610/"
        },
        {
          "label": "Nested case-control: interacting drugs + DOAC stroke/bleed",
          "citation": "Concurrent enzyme-inducing ASMs associated with stroke/SE risk in DOAC users (nested case-control).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9290518/"
        }
      ],
      "id": "edoxaban-primidone"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Oxcarbazepine",
      "interactorSlug": "oxcarbazepine",
      "synonyms": [
        "Trileptal",
        "OXC"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Some case/clinical signals of reduced rivaroxaban effect; weaker/less consistent inducer than carbamazepine — uncertain for all DOACs. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-oxcarbazepine"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Valproate",
      "interactorSlug": "valproate",
      "synonyms": [
        "Depakote",
        "valproic acid",
        "VPA"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Mixed/uncertain; some reports of interaction concern with rivaroxaban; not a classic strong inducer like CBZ/PHT/PB. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-valproate"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Levetiracetam",
      "interactorSlug": "levetiracetam",
      "synonyms": [
        "Keppra",
        "LEV"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Often listed among preferable ASMs with DOACs in reviews; theoretical P-gp notes exist but clinical PK impact generally considered low/uncertain. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-levetiracetam"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Lamotrigine",
      "interactorSlug": "lamotrigine",
      "synonyms": [
        "Lamictal",
        "LTG"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Generally considered lower concern (minimal CYP/P-gp induction) per AED–DOAC reviews — still not a formal 'proven no interaction' PK study for every DOAC. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-lamotrigine"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Lacosamide",
      "interactorSlug": "lacosamide",
      "synonyms": [
        "Vimpat"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro CYP effects limited; P-gp effects not fully characterized — reviews often treat as relatively safer alternative pending more data. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-lacosamide"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Gabapentin",
      "interactorSlug": "gabapentin",
      "synonyms": [
        "Neurontin"
      ],
      "mechanisms": [
        "None expected (PK)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Renal elimination; not a CYP/P-gp inducer — expected minimal PK interaction with DOACs (PD sedation separate). Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-gabapentin"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Oxcarbazepine",
      "interactorSlug": "oxcarbazepine",
      "synonyms": [
        "Trileptal",
        "OXC"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Some case/clinical signals of reduced rivaroxaban effect; weaker/less consistent inducer than carbamazepine — uncertain for all DOACs. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-oxcarbazepine"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Valproate",
      "interactorSlug": "valproate",
      "synonyms": [
        "Depakote",
        "valproic acid",
        "VPA"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Mixed/uncertain; some reports of interaction concern with rivaroxaban; not a classic strong inducer like CBZ/PHT/PB. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-valproate"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Levetiracetam",
      "interactorSlug": "levetiracetam",
      "synonyms": [
        "Keppra",
        "LEV"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Often listed among preferable ASMs with DOACs in reviews; theoretical P-gp notes exist but clinical PK impact generally considered low/uncertain. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-levetiracetam"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Lamotrigine",
      "interactorSlug": "lamotrigine",
      "synonyms": [
        "Lamictal",
        "LTG"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Generally considered lower concern (minimal CYP/P-gp induction) per AED–DOAC reviews — still not a formal 'proven no interaction' PK study for every DOAC. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-lamotrigine"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Lacosamide",
      "interactorSlug": "lacosamide",
      "synonyms": [
        "Vimpat"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro CYP effects limited; P-gp effects not fully characterized — reviews often treat as relatively safer alternative pending more data. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-lacosamide"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Gabapentin",
      "interactorSlug": "gabapentin",
      "synonyms": [
        "Neurontin"
      ],
      "mechanisms": [
        "None expected (PK)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Renal elimination; not a CYP/P-gp inducer — expected minimal PK interaction with DOACs (PD sedation separate). Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-gabapentin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Oxcarbazepine",
      "interactorSlug": "oxcarbazepine",
      "synonyms": [
        "Trileptal",
        "OXC"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Some case/clinical signals of reduced rivaroxaban effect; weaker/less consistent inducer than carbamazepine — uncertain for all DOACs. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-oxcarbazepine"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Valproate",
      "interactorSlug": "valproate",
      "synonyms": [
        "Depakote",
        "valproic acid",
        "VPA"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Mixed/uncertain; some reports of interaction concern with rivaroxaban; not a classic strong inducer like CBZ/PHT/PB. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-valproate"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Levetiracetam",
      "interactorSlug": "levetiracetam",
      "synonyms": [
        "Keppra",
        "LEV"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Often listed among preferable ASMs with DOACs in reviews; theoretical P-gp notes exist but clinical PK impact generally considered low/uncertain. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-levetiracetam"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Lamotrigine",
      "interactorSlug": "lamotrigine",
      "synonyms": [
        "Lamictal",
        "LTG"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Generally considered lower concern (minimal CYP/P-gp induction) per AED–DOAC reviews — still not a formal 'proven no interaction' PK study for every DOAC. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-lamotrigine"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Lacosamide",
      "interactorSlug": "lacosamide",
      "synonyms": [
        "Vimpat"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro CYP effects limited; P-gp effects not fully characterized — reviews often treat as relatively safer alternative pending more data. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-lacosamide"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Gabapentin",
      "interactorSlug": "gabapentin",
      "synonyms": [
        "Neurontin"
      ],
      "mechanisms": [
        "None expected (PK)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Renal elimination; not a CYP/P-gp inducer — expected minimal PK interaction with DOACs (PD sedation separate). Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-gabapentin"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Oxcarbazepine",
      "interactorSlug": "oxcarbazepine",
      "synonyms": [
        "Trileptal",
        "OXC"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Some case/clinical signals of reduced rivaroxaban effect; weaker/less consistent inducer than carbamazepine — uncertain for all DOACs. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-oxcarbazepine"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Valproate",
      "interactorSlug": "valproate",
      "synonyms": [
        "Depakote",
        "valproic acid",
        "VPA"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Uncertain / likely minimal ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Possible reduced DOAC effect (case-level)",
          "signal": "Reviews cite limited case signals especially for oxcarbazepine/valproate with rivaroxaban — not definitive PK.",
          "citation": "Galgani A, et al. Front Neurol / PMC6292857",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Mixed/uncertain; some reports of interaction concern with rivaroxaban; not a classic strong inducer like CBZ/PHT/PB. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-valproate"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Levetiracetam",
      "interactorSlug": "levetiracetam",
      "synonyms": [
        "Keppra",
        "LEV"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Often listed among preferable ASMs with DOACs in reviews; theoretical P-gp notes exist but clinical PK impact generally considered low/uncertain. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-levetiracetam"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Lamotrigine",
      "interactorSlug": "lamotrigine",
      "synonyms": [
        "Lamictal",
        "LTG"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Generally considered lower concern (minimal CYP/P-gp induction) per AED–DOAC reviews — still not a formal 'proven no interaction' PK study for every DOAC. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-lamotrigine"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Lacosamide",
      "interactorSlug": "lacosamide",
      "synonyms": [
        "Vimpat"
      ],
      "mechanisms": [
        "Uncertain / minimal induction"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro CYP effects limited; P-gp effects not fully characterized — reviews often treat as relatively safer alternative pending more data. Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-lacosamide"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Gabapentin",
      "interactorSlug": "gabapentin",
      "synonyms": [
        "Neurontin"
      ],
      "mechanisms": [
        "None expected (PK)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Renal elimination; not a CYP/P-gp inducer — expected minimal PK interaction with DOACs (PD sedation separate). Quantitative PK not identified in curated sources.",
      "practiceInterpretation": "When choosing an ASM for a patient who must stay on a DOAC, reviews often prefer lamotrigine, levetiracetam, lacosamide, or gabapentin-type agents over CBZ/PHT/PB/primidone. Oxcarbazepine/valproate: more uncertain — individualize and monitor clinically.",
      "labelGuidance": "Not typically in the 'avoid strong inducer' bucket like rifampin/CBZ — but evidence is thinner than a green light.",
      "uncertainty": "Do not invent reassurance AUC; absence of strong induction ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Frontiers review DOAC–AED PK",
          "citation": "Galgani A, et al. Front Neurol. 2018 — PMC6292857 / 10.3389/fneur.2018.01067.",
          "url": "https://www.frontiersin.org/articles/10.3389/fneur.2018.01067/full"
        },
        {
          "label": "DOAC–AED systematic review",
          "citation": "Systematic review of DOAC–antiepileptic interactions (PMC10131112).",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10131112/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-gabapentin"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Phenobarbital",
      "interactorSlug": "phenobarbital",
      "synonyms": [
        "Luminal"
      ],
      "mechanisms": [
        "CYP2C9 induction",
        "CYP3A4 induction",
        "CYP1A2 induction"
      ],
      "effectDirection": "↓ INR / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR decrease / thrombosis risk if under-anticoagulated",
          "signal": "Classic clinical pharmacology — manage by intensified INR monitoring rather than DOAC-style AUC%.",
          "citation": "Warfarin PI / clinical pharmacology; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Strong induction — INR↓; plan dose increases with monitoring. Check INR soon after start/stop/dose change of the inducer.",
      "labelGuidance": "Monitor INR more frequently; use institutional warfarin dosing protocols.",
      "uncertainty": "Exact INR delta varies by genetics, diet, illness — no false precision.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "warfarin-phenobarbital"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Primidone",
      "interactorSlug": "primidone",
      "synonyms": [
        "Mysoline"
      ],
      "mechanisms": [
        "CYP2C9 induction",
        "CYP3A4 induction",
        "CYP1A2 induction"
      ],
      "effectDirection": "↓ INR / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR decrease / thrombosis risk if under-anticoagulated",
          "signal": "Classic clinical pharmacology — manage by intensified INR monitoring rather than DOAC-style AUC%.",
          "citation": "Warfarin PI / clinical pharmacology; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Phenobarbital prodrug — treat as barbiturate induction. Check INR soon after start/stop/dose change of the inducer.",
      "labelGuidance": "Monitor INR more frequently; use institutional warfarin dosing protocols.",
      "uncertainty": "Exact INR delta varies by genetics, diet, illness — no false precision.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "warfarin-primidone"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "St John's wort",
      "interactorSlug": "st-johns-wort",
      "synonyms": [
        "Hypericum",
        "SJW"
      ],
      "mechanisms": [
        "CYP3A4 induction",
        "CYP2C9 induction"
      ],
      "effectDirection": "↓ INR / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR decrease / thrombosis risk if under-anticoagulated",
          "signal": "Classic clinical pharmacology — manage by intensified INR monitoring rather than DOAC-style AUC%.",
          "citation": "Warfarin PI / clinical pharmacology; EHRA contrasts VKA vs DOAC DDI patterns",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; quoting a single AUC% is usually inappropriate.",
      "practiceInterpretation": "Herbal induction can lower INR — ask about OTCs. Check INR soon after start/stop/dose change of the inducer.",
      "labelGuidance": "Monitor INR more frequently; use institutional warfarin dosing protocols.",
      "uncertainty": "Exact INR delta varies by genetics, diet, illness — no false precision.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "JACC Review: Select DDIs with DOACs",
          "citation": "Wiggins BS, et al. J Am Coll Cardiol. 2020;75:1341-1350.",
          "url": "https://doi.org/10.1016/j.jacc.2019.12.068"
        }
      ],
      "id": "warfarin-st-johns-wort"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Aspirin (COMPASS vascular regimen)",
      "interactorSlug": "aspirin-compass",
      "synonyms": [
        "ASA COMPASS",
        "vascular dual pathway"
      ],
      "mechanisms": [
        "PD additive bleed"
      ],
      "effectDirection": "↑ bleed PD (with CV efficacy benefit in selected CAD/PAD)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "CV death/MI/stroke vs major bleeding",
          "signal": "COMPASS: rivaroxaban 2.5 mg BID + aspirin reduced CV death/MI/stroke vs aspirin alone; major bleeding increased; net clinical benefit favored combination in primary analyses. Not an AF full-dose OAC strategy.",
          "citation": "Eikelboom JW, et al. NEJM COMPASS — #/trial/compass",
          "url": "https://doi.org/10.1056/NEJMoa1709118"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Different dose (2.5 mg BID) and population (stable atherosclerosis) than AF stroke-prevention OAC dosing. Do not use COMPASS to justify long-term full-dose DOAC + ASA in AF.",
      "practiceInterpretation": "For selected chronic CAD/PAD without another mandate for full-dose OAC, low-dose rivaroxaban + aspirin is an evidence-based vascular option — separate from AF dual-pathway teaching.",
      "labelGuidance": "Indication-specific labeling for vascular dose.",
      "uncertainty": "Bleeding phenotype and blood pressure control still matter for net benefit.",
      "sources": [
        {
          "label": "COMPASS",
          "citation": "Eikelboom JW, et al. — rivaroxaban 2.5 mg BID + aspirin in stable atherosclerosis. #/trial/compass",
          "url": "https://doi.org/10.1056/NEJMoa1709118"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-aspirin-compass"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Fish oil / omega-3",
      "interactorSlug": "fish-oil",
      "synonyms": [
        "omega-3",
        "EPA",
        "DHA",
        "fish oil supplement"
      ],
      "mechanisms": [
        "PD antiplatelet (lab) — clinical bleed often absent"
      ],
      "effectDirection": "Lab antiplatelet ≠ proven excess clinical bleed",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Clinical bleeding (RCT evidence)",
          "signal": "Reviews/RCTs: fish oil reduces platelet aggregation in healthy subjects but has not shown excess surgical bleeding or clear excess clinical bleed in large RCT evidence (PMC9586694). Large VITAL-era RCT context: no excess bleeding with fish oil in primary analyses cited by that review.",
          "citation": "PMC9586694 dietary supplements and bleeding",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "outcome": "Omega-3 meta-analysis nuance",
          "signal": "Study-level RCT meta-analysis: overall omega-3 bleed RR 1.09 (0.91–1.31) NS; high-dose purified EPA associated with higher relative bleed risk but modest absolute increase (~0.6%).",
          "citation": "PMC11179820",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11179820/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Teach “mechanism ≠ clinical bleed.” High-dose purified EPA products may differ from mixed OTC fish oil.",
      "practiceInterpretation": "Do not automatically stop fish oil solely for theoretical bleed fear on DOAC; still disclose before surgery and individualize high-dose EPA.",
      "labelGuidance": "Generally lower concern than NSAIDs/antiplatelets for clinical bleed.",
      "uncertainty": "Product dose/formulation heterogeneity.",
      "sources": [
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "Omega-3 bleed meta-analysis of RCTs",
          "citation": "Overall omega-3 RR≈1.09 NS; high-dose purified EPA modest absolute bleed ↑ (~0.6%). PMC11179820.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11179820/"
        },
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "id": "rivaroxaban-fish-oil"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Fish oil / omega-3",
      "interactorSlug": "fish-oil",
      "synonyms": [
        "omega-3",
        "EPA",
        "DHA"
      ],
      "mechanisms": [
        "PD antiplatelet (lab) — clinical bleed often absent"
      ],
      "effectDirection": "Lab antiplatelet ≠ proven excess clinical bleed",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Clinical bleeding",
          "signal": "Same teaching as rivaroxaban card: antiplatelet lab effects without consistent excess clinical bleed in RCT syntheses; high-dose EPA nuance applies. Warfarin: retrospective data also failed to show clear fish oil interaction in cited review.",
          "citation": "PMC9586694",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Mechanism ≠ mandatory clinical bleed signal.",
      "practiceInterpretation": "Usually continue if indicated; disclose peri-procedure; scrutinize high-dose EPA.",
      "labelGuidance": "Lower priority than NSAID/ASA stacks.",
      "uncertainty": "Formulation/dose matter.",
      "sources": [
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "Omega-3 bleed meta-analysis of RCTs",
          "citation": "Overall omega-3 RR≈1.09 NS; high-dose purified EPA modest absolute bleed ↑ (~0.6%). PMC11179820.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11179820/"
        },
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "id": "apixaban-fish-oil"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Fish oil / omega-3",
      "interactorSlug": "fish-oil",
      "synonyms": [
        "omega-3",
        "EPA",
        "DHA"
      ],
      "mechanisms": [
        "PD antiplatelet (lab) — clinical bleed often absent"
      ],
      "effectDirection": "Lab antiplatelet ≠ proven excess clinical bleed",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Clinical bleeding",
          "signal": "Same teaching as rivaroxaban card: antiplatelet lab effects without consistent excess clinical bleed in RCT syntheses; high-dose EPA nuance applies. Warfarin: retrospective data also failed to show clear fish oil interaction in cited review.",
          "citation": "PMC9586694",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Mechanism ≠ mandatory clinical bleed signal.",
      "practiceInterpretation": "Usually continue if indicated; disclose peri-procedure; scrutinize high-dose EPA.",
      "labelGuidance": "Lower priority than NSAID/ASA stacks.",
      "uncertainty": "Formulation/dose matter.",
      "sources": [
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "Omega-3 bleed meta-analysis of RCTs",
          "citation": "Overall omega-3 RR≈1.09 NS; high-dose purified EPA modest absolute bleed ↑ (~0.6%). PMC11179820.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11179820/"
        },
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "id": "dabigatran-fish-oil"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Fish oil / omega-3",
      "interactorSlug": "fish-oil",
      "synonyms": [
        "omega-3",
        "EPA",
        "DHA"
      ],
      "mechanisms": [
        "PD antiplatelet (lab) — clinical bleed often absent"
      ],
      "effectDirection": "Lab antiplatelet ≠ proven excess clinical bleed",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Clinical bleeding",
          "signal": "Same teaching as rivaroxaban card: antiplatelet lab effects without consistent excess clinical bleed in RCT syntheses; high-dose EPA nuance applies. Warfarin: retrospective data also failed to show clear fish oil interaction in cited review.",
          "citation": "PMC9586694",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Mechanism ≠ mandatory clinical bleed signal.",
      "practiceInterpretation": "Usually continue if indicated; disclose peri-procedure; scrutinize high-dose EPA.",
      "labelGuidance": "Lower priority than NSAID/ASA stacks.",
      "uncertainty": "Formulation/dose matter.",
      "sources": [
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "Omega-3 bleed meta-analysis of RCTs",
          "citation": "Overall omega-3 RR≈1.09 NS; high-dose purified EPA modest absolute bleed ↑ (~0.6%). PMC11179820.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11179820/"
        },
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "id": "edoxaban-fish-oil"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Fish oil / omega-3",
      "interactorSlug": "fish-oil",
      "synonyms": [
        "omega-3",
        "EPA",
        "DHA"
      ],
      "mechanisms": [
        "PD antiplatelet (lab) — clinical bleed often absent"
      ],
      "effectDirection": "Lab antiplatelet ≠ proven excess clinical bleed",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Clinical bleeding",
          "signal": "Same teaching as rivaroxaban card: antiplatelet lab effects without consistent excess clinical bleed in RCT syntheses; high-dose EPA nuance applies. Warfarin: retrospective data also failed to show clear fish oil interaction in cited review.",
          "citation": "PMC9586694",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        }
      ],
      "evidenceGrade": "RCT-subgroup",
      "populationCaveats": "Mechanism ≠ mandatory clinical bleed signal.",
      "practiceInterpretation": "Usually continue if indicated; disclose peri-procedure; scrutinize high-dose EPA.",
      "labelGuidance": "Lower priority than NSAID/ASA stacks.",
      "uncertainty": "Formulation/dose matter.",
      "sources": [
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "Omega-3 bleed meta-analysis of RCTs",
          "citation": "Overall omega-3 RR≈1.09 NS; high-dose purified EPA modest absolute bleed ↑ (~0.6%). PMC11179820.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11179820/"
        },
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "id": "warfarin-fish-oil"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Garlic",
      "interactorSlug": "garlic",
      "synonyms": [
        "Allium",
        "garlic supplement",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Stronger association with surgical bleeding in supplement/review literature, including independent of anticoagulants in some syntheses; culinary garlic ≠ concentrated extract. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-garlic"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Garlic",
      "interactorSlug": "garlic",
      "synonyms": [
        "Allium",
        "garlic supplement",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Stronger association with surgical bleeding in supplement/review literature, including independent of anticoagulants in some syntheses; culinary garlic ≠ concentrated extract. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-garlic"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Garlic",
      "interactorSlug": "garlic",
      "synonyms": [
        "Allium",
        "garlic supplement",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Stronger association with surgical bleeding in supplement/review literature, including independent of anticoagulants in some syntheses; culinary garlic ≠ concentrated extract. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-garlic"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Garlic",
      "interactorSlug": "garlic",
      "synonyms": [
        "Allium",
        "garlic supplement",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Stronger association with surgical bleeding in supplement/review literature, including independent of anticoagulants in some syntheses; culinary garlic ≠ concentrated extract. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-garlic"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Garlic",
      "interactorSlug": "garlic",
      "synonyms": [
        "Allium",
        "garlic supplement",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Stronger association with surgical bleeding in supplement/review literature, including independent of anticoagulants in some syntheses; culinary garlic ≠ concentrated extract. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-garlic"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ginkgo",
      "interactorSlug": "ginkgo",
      "synonyms": [
        "Ginkgo biloba",
        "EGb",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Associated with bleeding risk particularly in patients already on anticoagulants in dietary-supplement reviews; case-level surgical concerns. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ginkgo"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ginkgo",
      "interactorSlug": "ginkgo",
      "synonyms": [
        "Ginkgo biloba",
        "EGb",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Associated with bleeding risk particularly in patients already on anticoagulants in dietary-supplement reviews; case-level surgical concerns. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ginkgo"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ginkgo",
      "interactorSlug": "ginkgo",
      "synonyms": [
        "Ginkgo biloba",
        "EGb",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Associated with bleeding risk particularly in patients already on anticoagulants in dietary-supplement reviews; case-level surgical concerns. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ginkgo"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ginkgo",
      "interactorSlug": "ginkgo",
      "synonyms": [
        "Ginkgo biloba",
        "EGb",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Associated with bleeding risk particularly in patients already on anticoagulants in dietary-supplement reviews; case-level surgical concerns. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ginkgo"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Ginkgo",
      "interactorSlug": "ginkgo",
      "synonyms": [
        "Ginkgo biloba",
        "EGb",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Associated with bleeding risk particularly in patients already on anticoagulants in dietary-supplement reviews; case-level surgical concerns. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-ginkgo"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Turmeric / curcumin",
      "interactorSlug": "turmeric",
      "synonyms": [
        "curcumin",
        "Curcuma",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Concentrated curcumin supplements flagged in anticoagulant-associated bleed discussions; food turmeric typically lower concern. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-turmeric"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Turmeric / curcumin",
      "interactorSlug": "turmeric",
      "synonyms": [
        "curcumin",
        "Curcuma",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Concentrated curcumin supplements flagged in anticoagulant-associated bleed discussions; food turmeric typically lower concern. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-turmeric"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Turmeric / curcumin",
      "interactorSlug": "turmeric",
      "synonyms": [
        "curcumin",
        "Curcuma",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Concentrated curcumin supplements flagged in anticoagulant-associated bleed discussions; food turmeric typically lower concern. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-turmeric"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Turmeric / curcumin",
      "interactorSlug": "turmeric",
      "synonyms": [
        "curcumin",
        "Curcuma",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Concentrated curcumin supplements flagged in anticoagulant-associated bleed discussions; food turmeric typically lower concern. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-turmeric"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Turmeric / curcumin",
      "interactorSlug": "turmeric",
      "synonyms": [
        "curcumin",
        "Curcuma",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Concentrated curcumin supplements flagged in anticoagulant-associated bleed discussions; food turmeric typically lower concern. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-turmeric"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ginger",
      "interactorSlug": "ginger",
      "synonyms": [
        "Zingiber",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Mixed case/surgical associations; distinguish culinary use from high-dose supplements. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ginger"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ginger",
      "interactorSlug": "ginger",
      "synonyms": [
        "Zingiber",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Mixed case/surgical associations; distinguish culinary use from high-dose supplements. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ginger"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ginger",
      "interactorSlug": "ginger",
      "synonyms": [
        "Zingiber",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Mixed case/surgical associations; distinguish culinary use from high-dose supplements. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ginger"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ginger",
      "interactorSlug": "ginger",
      "synonyms": [
        "Zingiber",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Mixed case/surgical associations; distinguish culinary use from high-dose supplements. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ginger"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Ginger",
      "interactorSlug": "ginger",
      "synonyms": [
        "Zingiber",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Mixed case/surgical associations; distinguish culinary use from high-dose supplements. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-ginger"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ginseng",
      "interactorSlug": "ginseng",
      "synonyms": [
        "Panax",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Historically blamed in case reports; RCT/review evidence often shows no clear bleed association and possible ↓ warfarin effect in some RCTs — mixed teaching point. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ginseng"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ginseng",
      "interactorSlug": "ginseng",
      "synonyms": [
        "Panax",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Historically blamed in case reports; RCT/review evidence often shows no clear bleed association and possible ↓ warfarin effect in some RCTs — mixed teaching point. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ginseng"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ginseng",
      "interactorSlug": "ginseng",
      "synonyms": [
        "Panax",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Historically blamed in case reports; RCT/review evidence often shows no clear bleed association and possible ↓ warfarin effect in some RCTs — mixed teaching point. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ginseng"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ginseng",
      "interactorSlug": "ginseng",
      "synonyms": [
        "Panax",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Historically blamed in case reports; RCT/review evidence often shows no clear bleed association and possible ↓ warfarin effect in some RCTs — mixed teaching point. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ginseng"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Ginseng",
      "interactorSlug": "ginseng",
      "synonyms": [
        "Panax",
        "herbal",
        "OTC supplement"
      ],
      "mechanisms": [
        "PD bleed concern (supplement)"
      ],
      "effectDirection": "↑ bleed PD (supplement-level; uncertain magnitude)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Bleeding / peri-procedural oozing (case and review-level)",
          "signal": "Historically blamed in case reports; RCT/review evidence often shows no clear bleed association and possible ↓ warfarin effect in some RCTs — mixed teaching point. Thromb Haemost 2024 food/herb review emphasizes culinary vs concentrated supplement distinction.",
          "citation": "Thromb Haemost 2024 DOI 10.1055/s-0044-1790258; PMC9586694",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Evidence often case/surgical series — not RCT HRs. Culinary amounts differ from extracts.",
      "practiceInterpretation": "Ask about supplements before procedures and when bleeding occurs. Holding concentrated extracts peri-op is often reasonable; do not equate salad garlic with garlic pills.",
      "labelGuidance": "Supplement reconciliation — not a formal label contraindication table for every product.",
      "uncertainty": "No invented AUC/HR — grade reflects weak evidence base.",
      "sources": [
        {
          "label": "Food/herb–antithrombotic interactions review",
          "citation": "Thromb Haemost 2024 food/herb review DOI 10.1055/s-0044-1790258 — culinary vs concentrated supplements.",
          "url": "https://doi.org/10.1055/s-0044-1790258"
        },
        {
          "label": "Dietary supplements and bleeding review",
          "citation": "Wang CZ / PMC9586694 — fish oil antiplatelet ≠ excess clinical bleed in large RCT evidence.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9586694/"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-ginseng"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "CBD / cannabinoids",
      "interactorSlug": "cbd-cannabinoids",
      "synonyms": [
        "CBD",
        "THC",
        "cannabis",
        "marijuana",
        "cannabidiol"
      ],
      "mechanisms": [
        "CYP2C9/CYP3A4 inhibition (theoretical/in vitro)",
        "PD uncertain"
      ],
      "effectDirection": "↑ INR (case-level)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR elevation ± bleeding",
          "signal": "Pharmacotherapy systematic review: 7 warfarin–cannabinoid case reports; INR increased in 6/7; hemorrhage in 1/7; weekly warfarin dose reductions 22–31% in some cases. Doses often extremely high or unknown. Very low-quality evidence.",
          "citation": "Greger J, et al. Pharmacotherapy DOI 10.1002/phar.2881",
          "url": "https://doi.org/10.1002/phar.2881"
        }
      ],
      "evidenceGrade": "Case-report",
      "populationCaveats": "Ask about recreational and medical cannabis. Smoking may induce CYP1A2 (complex).",
      "practiceInterpretation": "Monitor INR when CBD/THC is started, stopped, or dose-changed; counsel on product variability.",
      "labelGuidance": "No universal label algorithm — clinical monitoring.",
      "uncertainty": "Case quality poor; doses often extreme.",
      "sources": [
        {
          "label": "Cannabinoid–anticoagulant systematic review",
          "citation": "Greger J, et al. Pharmacotherapy — warfarin INR cases; no published DOAC interaction cases. DOI 10.1002/phar.2881.",
          "url": "https://doi.org/10.1002/phar.2881"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-cbd-cannabinoids"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "CBD / cannabinoids",
      "interactorSlug": "cbd-cannabinoids",
      "synonyms": [
        "CBD",
        "THC",
        "cannabis",
        "cannabidiol"
      ],
      "mechanisms": [
        "P-gp / CYP3A4 theoretical (apixaban/rivaroxaban)",
        "PD uncertain"
      ],
      "effectDirection": "Theoretical ↑ exposure (apixaban/rivaroxaban) — unproven clinically",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Published DOAC–cannabinoid clinical cases",
          "signal": "Systematic review: aside from warfarin, evidence supporting cannabinoid–anticoagulant interaction is essentially non-existent — no published DOAC interaction cases identified through the review search period.",
          "citation": "Greger J, et al. Pharmacotherapy DOI 10.1002/phar.2881",
          "url": "https://doi.org/10.1002/phar.2881"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro: CBD may inhibit P-gp/CYP3A4 — theoretical for apixaban/rivaroxaban. Dabigatran/edoxaban mainly P-gp. Absence of published cases ≠ proof of safety.",
      "practiceInterpretation": "Document cannabis use; be alert for bleeding or thrombosis if exposure changes markedly; do not invent a DOAC dose adjustment from in vitro data alone.",
      "labelGuidance": "Uncertainty — counsel and monitor clinically.",
      "uncertainty": "Quantitative PK not identified; no published DOAC cases in the systematic review.",
      "sources": [
        {
          "label": "Cannabinoid–anticoagulant systematic review",
          "citation": "Greger J, et al. Pharmacotherapy — warfarin INR cases; no published DOAC interaction cases. DOI 10.1002/phar.2881.",
          "url": "https://doi.org/10.1002/phar.2881"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-cbd-cannabinoids"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "CBD / cannabinoids",
      "interactorSlug": "cbd-cannabinoids",
      "synonyms": [
        "CBD",
        "THC",
        "cannabis",
        "cannabidiol"
      ],
      "mechanisms": [
        "P-gp / CYP3A4 theoretical (apixaban/rivaroxaban)",
        "PD uncertain"
      ],
      "effectDirection": "Theoretical ↑ exposure (apixaban/rivaroxaban) — unproven clinically",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Published DOAC–cannabinoid clinical cases",
          "signal": "Systematic review: aside from warfarin, evidence supporting cannabinoid–anticoagulant interaction is essentially non-existent — no published DOAC interaction cases identified through the review search period.",
          "citation": "Greger J, et al. Pharmacotherapy DOI 10.1002/phar.2881",
          "url": "https://doi.org/10.1002/phar.2881"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro: CBD may inhibit P-gp/CYP3A4 — theoretical for apixaban/rivaroxaban. Dabigatran/edoxaban mainly P-gp. Absence of published cases ≠ proof of safety.",
      "practiceInterpretation": "Document cannabis use; be alert for bleeding or thrombosis if exposure changes markedly; do not invent a DOAC dose adjustment from in vitro data alone.",
      "labelGuidance": "Uncertainty — counsel and monitor clinically.",
      "uncertainty": "Quantitative PK not identified; no published DOAC cases in the systematic review.",
      "sources": [
        {
          "label": "Cannabinoid–anticoagulant systematic review",
          "citation": "Greger J, et al. Pharmacotherapy — warfarin INR cases; no published DOAC interaction cases. DOI 10.1002/phar.2881.",
          "url": "https://doi.org/10.1002/phar.2881"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-cbd-cannabinoids"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "CBD / cannabinoids",
      "interactorSlug": "cbd-cannabinoids",
      "synonyms": [
        "CBD",
        "THC",
        "cannabis",
        "cannabidiol"
      ],
      "mechanisms": [
        "P-gp / CYP3A4 theoretical (apixaban/rivaroxaban)",
        "PD uncertain"
      ],
      "effectDirection": "Theoretical ↑ exposure (apixaban/rivaroxaban) — unproven clinically",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Published DOAC–cannabinoid clinical cases",
          "signal": "Systematic review: aside from warfarin, evidence supporting cannabinoid–anticoagulant interaction is essentially non-existent — no published DOAC interaction cases identified through the review search period.",
          "citation": "Greger J, et al. Pharmacotherapy DOI 10.1002/phar.2881",
          "url": "https://doi.org/10.1002/phar.2881"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro: CBD may inhibit P-gp/CYP3A4 — theoretical for apixaban/rivaroxaban. Dabigatran/edoxaban mainly P-gp. Absence of published cases ≠ proof of safety.",
      "practiceInterpretation": "Document cannabis use; be alert for bleeding or thrombosis if exposure changes markedly; do not invent a DOAC dose adjustment from in vitro data alone.",
      "labelGuidance": "Uncertainty — counsel and monitor clinically.",
      "uncertainty": "Quantitative PK not identified; no published DOAC cases in the systematic review.",
      "sources": [
        {
          "label": "Cannabinoid–anticoagulant systematic review",
          "citation": "Greger J, et al. Pharmacotherapy — warfarin INR cases; no published DOAC interaction cases. DOI 10.1002/phar.2881.",
          "url": "https://doi.org/10.1002/phar.2881"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-cbd-cannabinoids"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "CBD / cannabinoids",
      "interactorSlug": "cbd-cannabinoids",
      "synonyms": [
        "CBD",
        "THC",
        "cannabis",
        "cannabidiol"
      ],
      "mechanisms": [
        "P-gp / CYP3A4 theoretical (apixaban/rivaroxaban)",
        "PD uncertain"
      ],
      "effectDirection": "Theoretical ↑ exposure (apixaban/rivaroxaban) — unproven clinically",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Published DOAC–cannabinoid clinical cases",
          "signal": "Systematic review: aside from warfarin, evidence supporting cannabinoid–anticoagulant interaction is essentially non-existent — no published DOAC interaction cases identified through the review search period.",
          "citation": "Greger J, et al. Pharmacotherapy DOI 10.1002/phar.2881",
          "url": "https://doi.org/10.1002/phar.2881"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro: CBD may inhibit P-gp/CYP3A4 — theoretical for apixaban/rivaroxaban. Dabigatran/edoxaban mainly P-gp. Absence of published cases ≠ proof of safety.",
      "practiceInterpretation": "Document cannabis use; be alert for bleeding or thrombosis if exposure changes markedly; do not invent a DOAC dose adjustment from in vitro data alone.",
      "labelGuidance": "Uncertainty — counsel and monitor clinically.",
      "uncertainty": "Quantitative PK not identified; no published DOAC cases in the systematic review.",
      "sources": [
        {
          "label": "Cannabinoid–anticoagulant systematic review",
          "citation": "Greger J, et al. Pharmacotherapy — warfarin INR cases; no published DOAC interaction cases. DOI 10.1002/phar.2881.",
          "url": "https://doi.org/10.1002/phar.2881"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-cbd-cannabinoids"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Vitamin K–rich foods",
      "interactorSlug": "vitamin-k-foods",
      "synonyms": [
        "leafy greens",
        "kale",
        "spinach",
        "vitamin K diet"
      ],
      "mechanisms": [
        "PD antagonism of warfarin (vitamin K)"
      ],
      "effectDirection": "↓ INR if intake ↑ abruptly / ↑ INR if intake ↓",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR variability",
          "signal": "Classic teaching: consistency of vitamin K intake matters more than absolute avoidance. Not applicable to DOACs.",
          "citation": "Warfarin clinical pharmacology / labeling",
          "url": null
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "DOACs are not vitamin K antagonists — this card is warfarin-only.",
      "practiceInterpretation": "Counsel consistency, not zero vegetables. Recheck INR with major diet changes, antibiotics, or illness.",
      "labelGuidance": "Dietary vitamin K counseling is warfarin-specific.",
      "uncertainty": "Individual INR response varies.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-vitamin-k-foods"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Enzalutamide",
      "interactorSlug": "enzalutamide",
      "synonyms": [
        "Xtandi",
        "ARPI",
        "androgen receptor inhibitor",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure expected (CYP3A4 induction)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Expected decreased exposure",
          "signal": "XTANDI is a strong CYP3A4 inducer and a moderate CYP2C9 and CYP2C19 inducer (US PI, effective 2026-07-28). Expected direction for apixaban and rivaroxaban is decreased exposure from CYP3A4 induction. Dabigatran and edoxaban are the other direction (P-gp inhibition). The labeled P-gp probe is digoxin: AUC increased 33% and Cmax 17% with XTANDI 160 mg daily. That 33% figure is digoxin, not a DOAC AUC.",
          "citation": "XTANDI US PI, DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf, effective 2026-07-28",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Direction for this pair is decreased exposure from strong CYP3A4 induction.",
      "practiceInterpretation": "With enzalutamide, expect lower apixaban or rivaroxaban exposure from CYP3A4 induction. Dabigatran and edoxaban are taught as increased exposure from P-gp inhibition.",
      "labelGuidance": "XTANDI section 7.2: avoid certain CYP3A4 substrates when a small decrease could cause therapeutic failure. If coadministration cannot be avoided, increase the substrate dose according to its own prescribing information.",
      "uncertainty": "Hellfritzsch Table 3 marks both CYP3A4 and P-gp for enzalutamide, but glyph weight was not re-readable. The exposure direction used here is the XTANDI label (strong CYP3A4 induction).",
      "sources": [
        {
          "label": "XTANDI US prescribing information",
          "citation": "Enzalutamide capsules and tablets. DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf. Effective 2026-07-28.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Enzalutamide / ARPI–antithrombotic PK predictions",
          "citation": "Cardiovasc Drugs Ther review — enzalutamide strong CYP3A4 ± P-gp effects on antithrombotics.",
          "url": "https://doi.org/10.1007/s10557-023-07453-0"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-enzalutamide"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Enzalutamide",
      "interactorSlug": "enzalutamide",
      "synonyms": [
        "Xtandi",
        "ARPI",
        "androgen receptor inhibitor",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ exposure expected (CYP3A4 induction)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Expected decreased exposure",
          "signal": "XTANDI is a strong CYP3A4 inducer and a moderate CYP2C9 and CYP2C19 inducer (US PI, effective 2026-07-28). Expected direction for apixaban and rivaroxaban is decreased exposure from CYP3A4 induction. Dabigatran and edoxaban are the other direction (P-gp inhibition). The labeled P-gp probe is digoxin: AUC increased 33% and Cmax 17% with XTANDI 160 mg daily. That 33% figure is digoxin, not a DOAC AUC.",
          "citation": "XTANDI US PI, DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf, effective 2026-07-28",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Direction for this pair is decreased exposure from strong CYP3A4 induction.",
      "practiceInterpretation": "With enzalutamide, expect lower apixaban or rivaroxaban exposure from CYP3A4 induction. Dabigatran and edoxaban are taught as increased exposure from P-gp inhibition.",
      "labelGuidance": "XTANDI section 7.2: avoid certain CYP3A4 substrates when a small decrease could cause therapeutic failure. If coadministration cannot be avoided, increase the substrate dose according to its own prescribing information.",
      "uncertainty": "Hellfritzsch Table 3 marks both CYP3A4 and P-gp for enzalutamide, but glyph weight was not re-readable. The exposure direction used here is the XTANDI label (strong CYP3A4 induction).",
      "sources": [
        {
          "label": "XTANDI US prescribing information",
          "citation": "Enzalutamide capsules and tablets. DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf. Effective 2026-07-28.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Enzalutamide / ARPI–antithrombotic PK predictions",
          "citation": "Cardiovasc Drugs Ther review — enzalutamide strong CYP3A4 ± P-gp effects on antithrombotics.",
          "url": "https://doi.org/10.1007/s10557-023-07453-0"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-enzalutamide"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Enzalutamide",
      "interactorSlug": "enzalutamide",
      "synonyms": [
        "Xtandi",
        "ARPI",
        "androgen receptor inhibitor",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure expected (P-gp)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Expected increased exposure",
          "signal": "Enzalutamide inhibits P-gp. XTANDI 160 mg daily increased digoxin (a P-gp substrate) AUC by 33% and Cmax by 17%. Dabigatran and edoxaban are P-gp substrates, so the expected direction is increased exposure. No dabigatran or edoxaban AUC percent is on this card. Apixaban and rivaroxaban stay the CYP3A4-induction pair (decreased exposure).",
          "citation": "XTANDI US PI, DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf, effective 2026-07-28",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "The 33% AUC figure is digoxin, the labeled P-gp probe, not a dabigatran or edoxaban measurement. Do not invent a DOAC percent. Decreased exposure is the apixaban and rivaroxaban direction, not this pair.",
      "practiceInterpretation": "Expected direction is higher dabigatran or edoxaban exposure from P-gp inhibition. This is not the apixaban or rivaroxaban CYP3A4-induction direction.",
      "labelGuidance": "XTANDI increased digoxin AUC by 33% (P-gp substrate). Section 7.2 addresses CYP substrate dose increases and does not give a dabigatran or edoxaban dose.",
      "uncertainty": "No clinical dabigatran or edoxaban AUC with enzalutamide is transcribed here. Direction follows P-gp inhibition on the XTANDI label.",
      "sources": [
        {
          "label": "XTANDI US prescribing information",
          "citation": "Enzalutamide capsules and tablets. DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf. Effective 2026-07-28.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Enzalutamide / ARPI–antithrombotic PK predictions",
          "citation": "Cardiovasc Drugs Ther review — enzalutamide strong CYP3A4 ± P-gp effects on antithrombotics.",
          "url": "https://doi.org/10.1007/s10557-023-07453-0"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-enzalutamide"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Enzalutamide",
      "interactorSlug": "enzalutamide",
      "synonyms": [
        "Xtandi",
        "ARPI",
        "androgen receptor inhibitor",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure expected (P-gp)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Expected increased exposure",
          "signal": "Enzalutamide inhibits P-gp. XTANDI 160 mg daily increased digoxin (a P-gp substrate) AUC by 33% and Cmax by 17%. Dabigatran and edoxaban are P-gp substrates, so the expected direction is increased exposure. No dabigatran or edoxaban AUC percent is on this card. Apixaban and rivaroxaban stay the CYP3A4-induction pair (decreased exposure).",
          "citation": "XTANDI US PI, DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf, effective 2026-07-28",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "The 33% AUC figure is digoxin, the labeled P-gp probe, not a dabigatran or edoxaban measurement. Do not invent a DOAC percent. Decreased exposure is the apixaban and rivaroxaban direction, not this pair.",
      "practiceInterpretation": "Expected direction is higher dabigatran or edoxaban exposure from P-gp inhibition. This is not the apixaban or rivaroxaban CYP3A4-induction direction.",
      "labelGuidance": "XTANDI increased digoxin AUC by 33% (P-gp substrate). Section 7.2 addresses CYP substrate dose increases and does not give a dabigatran or edoxaban dose.",
      "uncertainty": "No clinical dabigatran or edoxaban AUC with enzalutamide is transcribed here. Direction follows P-gp inhibition on the XTANDI label.",
      "sources": [
        {
          "label": "XTANDI US prescribing information",
          "citation": "Enzalutamide capsules and tablets. DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf. Effective 2026-07-28.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Enzalutamide / ARPI–antithrombotic PK predictions",
          "citation": "Cardiovasc Drugs Ther review — enzalutamide strong CYP3A4 ± P-gp effects on antithrombotics.",
          "url": "https://doi.org/10.1007/s10557-023-07453-0"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-enzalutamide"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Enzalutamide",
      "interactorSlug": "enzalutamide",
      "synonyms": [
        "Xtandi",
        "ARPI",
        "androgen receptor inhibitor",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP2C9 induction",
        "CYP3A4 induction"
      ],
      "effectDirection": "↓ S-warfarin exposure (CYP2C9)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Lower S-warfarin exposure",
          "signal": "XTANDI US PI (effective 2026-07-28): strong CYP3A4 inducer and moderate CYP2C9 and CYP2C19 inducer. Coadministration decreased S-warfarin AUC by 56% and Cmax by 17%. That is lower warfarin exposure via CYP2C9, not a bleed-from-inhibition story. Section 7.2: avoid certain CYP2C9 substrates when a minimal decrease may cause therapeutic failure; if coadministration cannot be avoided, increase the substrate dose according to its own prescribing information. The retrieved current label does not contain an INR sentence.",
          "citation": "XTANDI US PI, DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf, effective 2026-07-28",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "S-warfarin AUC decreased 56% and Cmax 17% in the XTANDI label. That is lower exposure, not bleeding from inhibition. The retrieved 2026-07-28 label has no INR sentence.",
      "practiceInterpretation": "Teach lower warfarin exposure via moderate CYP2C9 induction. If the combination cannot be avoided, the label says to increase the substrate dose according to the warfarin prescribing information.",
      "labelGuidance": "XTANDI section 7.2 and clinical pharmacology: strong CYP3A4 inducer, moderate CYP2C9 inducer, S-warfarin AUC −56%.",
      "uncertainty": "An older XTANDI label told clinicians to do additional INR monitoring. That sentence is not in the label effective 2026-07-28.",
      "sources": [
        {
          "label": "XTANDI US prescribing information",
          "citation": "Enzalutamide capsules and tablets. DailyMed setid b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf. Effective 2026-07-28.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b129fdc9-1d8e-425c-a5a9-8a2ed36dfbdf"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Enzalutamide / ARPI–antithrombotic PK predictions",
          "citation": "Cardiovasc Drugs Ther review — enzalutamide strong CYP3A4 ± P-gp effects on antithrombotics.",
          "url": "https://doi.org/10.1007/s10557-023-07453-0"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-enzalutamide"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Imatinib",
      "interactorSlug": "imatinib",
      "synonyms": [
        "Gleevec",
        "Glivec",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Moderate CYP3A4 (± P-gp) inhibitor classification in CAT–DOAC DDI reviews — caution with apixaban/rivaroxaban; quantitative DOAC PK often lacking.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-imatinib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Imatinib",
      "interactorSlug": "imatinib",
      "synonyms": [
        "Gleevec",
        "Glivec",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Moderate CYP3A4 (± P-gp) inhibitor classification in CAT–DOAC DDI reviews — caution with apixaban/rivaroxaban; quantitative DOAC PK often lacking.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-imatinib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Imatinib",
      "interactorSlug": "imatinib",
      "synonyms": [
        "Gleevec",
        "Glivec",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Moderate CYP3A4 (± P-gp) inhibitor classification in CAT–DOAC DDI reviews — caution with apixaban/rivaroxaban; quantitative DOAC PK often lacking.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-imatinib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Imatinib",
      "interactorSlug": "imatinib",
      "synonyms": [
        "Gleevec",
        "Glivec",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Moderate CYP3A4 (± P-gp) inhibitor classification in CAT–DOAC DDI reviews — caution with apixaban/rivaroxaban; quantitative DOAC PK often lacking.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-imatinib"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Imatinib",
      "interactorSlug": "imatinib",
      "synonyms": [
        "Gleevec",
        "Glivec",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Use heparin instead of warfarin"
      ],
      "effectDirection": "Heparin instead of warfarin",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Use heparin, not warfarin",
          "signal": "Gleevec US PI (effective 2026-07-13): patients who require anticoagulation should receive low-molecular-weight or standard heparin and not warfarin. Because warfarin is metabolized by CYP2C9 and CYP3A4, use low-molecular-weight or standard heparin instead of warfarin.",
          "citation": "Gleevec US PI, DailyMed setid 211ef2da-2868-4a77-8055-1cb2cd78e24b, effective 2026-07-13",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=211ef2da-2868-4a77-8055-1cb2cd78e24b"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Gleevec labeling names warfarin and directs clinicians to low-molecular-weight or standard heparin. The teaching is the warfarin sentence in the Gleevec label.",
      "practiceInterpretation": "When anticoagulation is required with imatinib, the Gleevec label says to use low-molecular-weight or standard heparin and not warfarin.",
      "labelGuidance": "Gleevec section 7.3, effective 2026-07-13. Warfarin is described as a CYP2C9 and CYP3A4 substrate.",
      "uncertainty": "The label does not give an INR target or a warfarin AUC percent.",
      "sources": [
        {
          "label": "Gleevec US prescribing information",
          "citation": "Imatinib mesylate. DailyMed setid 211ef2da-2868-4a77-8055-1cb2cd78e24b. Effective 2026-07-13.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=211ef2da-2868-4a77-8055-1cb2cd78e24b"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-imatinib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Crizotinib",
      "interactorSlug": "crizotinib",
      "synonyms": [
        "Xalkori",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Moderate CYP3A4 inhibition",
        "P-gp inhibition (in vitro only)"
      ],
      "effectDirection": "↑ exposure (theoretical, CYP3A4)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Theoretical increased exposure",
          "signal": "Moderate CYP3A4 inhibition. P-gp inhibition is in vitro only. Hellfritzsch Table 3 marks CYP3A4 and an in-vitro-only P-gp cell. The downloaded table collapsed mild, moderate, and strong glyphs, so the moderate grade is the XALKORI result: oral midazolam AUC increased 3.7-fold. No measured DOAC AUC is on this card. The theoretical increase is for the CYP3A4 substrates apixaban and rivaroxaban.",
          "citation": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596; XALKORI US PI effective 2025-07-22",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Moderate CYP3A4 is from the 3.7-fold midazolam AUC increase, not from a DOAC study.",
      "practiceInterpretation": "A theoretical increase applies to apixaban and rivaroxaban because they are CYP3A4 substrates. P-gp inhibition on this card is in vitro only.",
      "labelGuidance": "XALKORI: avoid CYP3A substrates where minimal concentration changes may lead to serious adverse reactions (section 7.2). In vitro, crizotinib inhibits P-gp and does not inhibit CYP2C9.",
      "uncertainty": "Table 3 glyph weight was not re-readable. Moderate follows the 3.7-fold midazolam AUC.",
      "sources": [
        {
          "label": "XALKORI US prescribing information",
          "citation": "Crizotinib. DailyMed setid 2a51b0de-47d6-455e-a94c-d2c737b04ff7. Effective 2025-07-22. Oral midazolam AUC increased 3.7-fold.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-crizotinib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Crizotinib",
      "interactorSlug": "crizotinib",
      "synonyms": [
        "Xalkori",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Moderate CYP3A4 inhibition",
        "P-gp inhibition (in vitro only)"
      ],
      "effectDirection": "↑ exposure (theoretical, CYP3A4)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Theoretical increased exposure",
          "signal": "Moderate CYP3A4 inhibition. P-gp inhibition is in vitro only. Hellfritzsch Table 3 marks CYP3A4 and an in-vitro-only P-gp cell. The downloaded table collapsed mild, moderate, and strong glyphs, so the moderate grade is the XALKORI result: oral midazolam AUC increased 3.7-fold. No measured DOAC AUC is on this card. The theoretical increase is for the CYP3A4 substrates apixaban and rivaroxaban.",
          "citation": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596; XALKORI US PI effective 2025-07-22",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Moderate CYP3A4 is from the 3.7-fold midazolam AUC increase, not from a DOAC study.",
      "practiceInterpretation": "A theoretical increase applies to apixaban and rivaroxaban because they are CYP3A4 substrates. P-gp inhibition on this card is in vitro only.",
      "labelGuidance": "XALKORI: avoid CYP3A substrates where minimal concentration changes may lead to serious adverse reactions (section 7.2). In vitro, crizotinib inhibits P-gp and does not inhibit CYP2C9.",
      "uncertainty": "Table 3 glyph weight was not re-readable. Moderate follows the 3.7-fold midazolam AUC.",
      "sources": [
        {
          "label": "XALKORI US prescribing information",
          "citation": "Crizotinib. DailyMed setid 2a51b0de-47d6-455e-a94c-d2c737b04ff7. Effective 2025-07-22. Oral midazolam AUC increased 3.7-fold.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-crizotinib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Crizotinib",
      "interactorSlug": "crizotinib",
      "synonyms": [
        "Xalkori",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "P-gp inhibition (in vitro only)"
      ],
      "effectDirection": "No firm exposure increase",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "In vitro P-gp only",
          "signal": "There is no firm clinical exposure increase to quote. Hellfritzsch Table 3 marks crizotinib P-gp from in vitro data only. Crizotinib is a moderate CYP3A4 inhibitor (XALKORI: oral midazolam AUC increased 3.7-fold). Dabigatran and edoxaban are not meaningful CYP3A4 substrates.",
          "citation": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596; XALKORI US PI effective 2025-07-22",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro P-gp inhibition is not a measured dabigatran or edoxaban AUC. CYP3A4 inhibition does not support an exposure increase for these DOACs.",
      "practiceInterpretation": "Crizotinib does not have a firm dabigatran or edoxaban exposure increase on this card. The CYP3A4 effect is for apixaban and rivaroxaban.",
      "labelGuidance": "XALKORI section 7.2 is about CYP3A substrates. P-gp inhibition is stated under in vitro studies.",
      "uncertainty": "No clinical DOAC AUC with crizotinib is transcribed here.",
      "sources": [
        {
          "label": "XALKORI US prescribing information",
          "citation": "Crizotinib. DailyMed setid 2a51b0de-47d6-455e-a94c-d2c737b04ff7. Effective 2025-07-22.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-crizotinib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Crizotinib",
      "interactorSlug": "crizotinib",
      "synonyms": [
        "Xalkori",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "P-gp inhibition (in vitro only)"
      ],
      "effectDirection": "No firm exposure increase",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "In vitro P-gp only",
          "signal": "There is no firm clinical exposure increase to quote. Hellfritzsch Table 3 marks crizotinib P-gp from in vitro data only. Crizotinib is a moderate CYP3A4 inhibitor (XALKORI: oral midazolam AUC increased 3.7-fold). Dabigatran and edoxaban are not meaningful CYP3A4 substrates.",
          "citation": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596; XALKORI US PI effective 2025-07-22",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "In vitro P-gp inhibition is not a measured dabigatran or edoxaban AUC. CYP3A4 inhibition does not support an exposure increase for these DOACs.",
      "practiceInterpretation": "Crizotinib does not have a firm dabigatran or edoxaban exposure increase on this card. The CYP3A4 effect is for apixaban and rivaroxaban.",
      "labelGuidance": "XALKORI section 7.2 is about CYP3A substrates. P-gp inhibition is stated under in vitro studies.",
      "uncertainty": "No clinical DOAC AUC with crizotinib is transcribed here.",
      "sources": [
        {
          "label": "XALKORI US prescribing information",
          "citation": "Crizotinib. DailyMed setid 2a51b0de-47d6-455e-a94c-d2c737b04ff7. Effective 2025-07-22.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-crizotinib"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Crizotinib",
      "interactorSlug": "crizotinib",
      "synonyms": [
        "Xalkori",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Moderate CYP3A4 inhibition",
        "P-gp inhibition (in vitro only)",
        "Does not inhibit CYP2C9 in vitro"
      ],
      "effectDirection": "No labeled warfarin exposure change",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "No named warfarin effect",
          "signal": "Hellfritzsch Table 3: CYP3A4 mark plus P-gp in vitro only. Moderate CYP3A4 is the XALKORI result (oral midazolam AUC increased 3.7-fold); the table glyph weight was not re-readable. XALKORI in vitro studies: crizotinib does not inhibit CYP2C9. The label does not name warfarin. A DOAC-style exposure increase is not applied to warfarin. The grade used here is moderate.",
          "citation": "XALKORI US PI, DailyMed setid 2a51b0de-47d6-455e-a94c-d2c737b04ff7, effective 2025-07-22; Hellfritzsch Table 3",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "XALKORI does not name warfarin. In vitro, crizotinib does not inhibit CYP2C9. Warfarin is not given the apixaban or rivaroxaban exposure increase.",
      "practiceInterpretation": "Teach moderate CYP3A4 inhibition and in-vitro-only P-gp inhibition. There is no labeled warfarin PK result to quote.",
      "labelGuidance": "XALKORI clinical pharmacology: oral midazolam AUC increased 3.7-fold; crizotinib inhibits P-gp in vitro; crizotinib does not inhibit CYP2C9.",
      "uncertainty": "Table 3 glyph weight was not re-readable. Moderate follows the 3.7-fold midazolam AUC.",
      "sources": [
        {
          "label": "XALKORI US prescribing information",
          "citation": "Crizotinib. DailyMed setid 2a51b0de-47d6-455e-a94c-d2c737b04ff7. Effective 2025-07-22.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2a51b0de-47d6-455e-a94c-d2c737b04ff7"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-crizotinib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Nilotinib",
      "interactorSlug": "nilotinib",
      "synonyms": [
        "Tasigna",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "CYP3A4/P-gp inhibitor classification in Semin Thromb Hemost–type tables — monitor/avoid stacking; no curated DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-nilotinib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Nilotinib",
      "interactorSlug": "nilotinib",
      "synonyms": [
        "Tasigna",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "CYP3A4/P-gp inhibitor classification in Semin Thromb Hemost–type tables — monitor/avoid stacking; no curated DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-nilotinib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Nilotinib",
      "interactorSlug": "nilotinib",
      "synonyms": [
        "Tasigna",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "CYP3A4/P-gp inhibitor classification in Semin Thromb Hemost–type tables — monitor/avoid stacking; no curated DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-nilotinib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Nilotinib",
      "interactorSlug": "nilotinib",
      "synonyms": [
        "Tasigna",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "P-gp inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "CYP3A4/P-gp inhibitor classification in Semin Thromb Hemost–type tables — monitor/avoid stacking; no curated DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-nilotinib"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Nilotinib",
      "interactorSlug": "nilotinib",
      "synonyms": [
        "Tasigna",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Single-dose warfarin study (CYP2C9)"
      ],
      "effectDirection": "No change in single-dose warfarin PK/PD",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Single-dose warfarin unchanged",
          "signal": "Tasigna US PI (effective 2025-12-16): a single dose of Tasigna did not change the pharmacokinetics and pharmacodynamics of warfarin, a CYP2C9 substrate. Increased warfarin exposure is not the result of that study. It is a single-dose result.",
          "citation": "Tasigna US PI, DailyMed setid 6093952a-5248-45cb-ad17-33716a411146, effective 2025-12-16",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6093952a-5248-45cb-ad17-33716a411146"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "The Tasigna sentence is a single-dose warfarin study. Do not extend it to a steady-state INR effect that the label does not state.",
      "practiceInterpretation": "A single dose of Tasigna did not change warfarin pharmacokinetics or pharmacodynamics. Increased warfarin exposure is not the result of that study.",
      "labelGuidance": "Tasigna clinical pharmacology, CYP2C9 substrates, effective 2025-12-16.",
      "uncertainty": "The label does not report a multiple-dose warfarin interaction.",
      "sources": [
        {
          "label": "Tasigna US prescribing information",
          "citation": "Nilotinib. DailyMed setid 6093952a-5248-45cb-ad17-33716a411146. Effective 2025-12-16.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6093952a-5248-45cb-ad17-33716a411146"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-nilotinib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Dasatinib",
      "interactorSlug": "dasatinib",
      "synonyms": [
        "Sprycel",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "PD hemorrhage risk"
      ],
      "effectDirection": "↑ bleed PD ± theoretical PK",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Label hemorrhage warnings + PD platelet effects; CYP3A4 perpetrator notes in reviews. Clinical bleed caution with OAC even without DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-dasatinib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Dasatinib",
      "interactorSlug": "dasatinib",
      "synonyms": [
        "Sprycel",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "PD hemorrhage risk"
      ],
      "effectDirection": "↑ bleed PD ± theoretical PK",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Label hemorrhage warnings + PD platelet effects; CYP3A4 perpetrator notes in reviews. Clinical bleed caution with OAC even without DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-dasatinib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Dasatinib",
      "interactorSlug": "dasatinib",
      "synonyms": [
        "Sprycel",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "PD hemorrhage risk"
      ],
      "effectDirection": "↑ bleed PD ± theoretical PK",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Label hemorrhage warnings + PD platelet effects; CYP3A4 perpetrator notes in reviews. Clinical bleed caution with OAC even without DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-dasatinib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Dasatinib",
      "interactorSlug": "dasatinib",
      "synonyms": [
        "Sprycel",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "PD hemorrhage risk"
      ],
      "effectDirection": "↑ bleed PD ± theoretical PK",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DDI classification / bleed caution",
          "signal": "Label hemorrhage warnings + PD platelet effects; CYP3A4 perpetrator notes in reviews. Clinical bleed caution with OAC even without DOAC AUC.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost 2023; BJCP CAT reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Coordinate with oncology pharmacy. If strong dual inhibition concern + high bleed risk, consider LMWH for CAT. Dasatinib: take PD hemorrhage warning seriously even when PK is unquantified.",
      "labelGuidance": "Check TKI and anticoagulant PIs; EHRA/CAT reviews for color-code style caution.",
      "uncertainty": "Clinical outcome data for exact DOAC–TKI pairs remain sparse (Semin Thromb Hemost notes evidence gap).",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-dasatinib"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Dasatinib",
      "interactorSlug": "dasatinib",
      "synonyms": [
        "Sprycel",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Bleeding caution with anticoagulants"
      ],
      "effectDirection": "Bleeding caution; no labeled warfarin PK effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Anticoagulant bleeding caution",
          "signal": "Dasatinib US PI (generic label, effective 2026-03-05): dasatinib can cause serious and fatal bleeding. Use caution if used concomitantly with medications that inhibit platelet function or anticoagulants. The label does not name warfarin and does not state an INR or exposure effect.",
          "citation": "Dasatinib US PI, DailyMed setid 02b04c6f-4ea5-4fcb-bf6d-2631d5ab31e4, effective 2026-03-05",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02b04c6f-4ea5-4fcb-bf6d-2631d5ab31e4"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "The label says anticoagulants, not a named warfarin pharmacokinetic interaction. No INR change and no DOAC AUC are added.",
      "practiceInterpretation": "Use caution with anticoagulants because dasatinib can cause serious bleeding and affected platelet function in vitro. There is no labeled warfarin exposure result.",
      "labelGuidance": "Dasatinib US PI warnings, effective 2026-03-05 (generic label, setid 02b04c6f-4ea5-4fcb-bf6d-2631d5ab31e4).",
      "uncertainty": "The label does not name warfarin.",
      "sources": [
        {
          "label": "Dasatinib US prescribing information",
          "citation": "Dasatinib tablets. DailyMed setid 02b04c6f-4ea5-4fcb-bf6d-2631d5ab31e4. Effective 2026-03-05.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=02b04c6f-4ea5-4fcb-bf6d-2631d5ab31e4"
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-dasatinib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Venetoclax",
      "interactorSlug": "venetoclax",
      "synonyms": [
        "Venclexta",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Table 3 blank (no known CYP3A4 or P-gp perpetrator effect)"
      ],
      "effectDirection": "No Hellfritzsch P-gp effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Table 3 cell is blank",
          "signal": "Hellfritzsch Table 3 leaves venetoclax blank. An empty cell means no known effect on CYP3A4 or P-gp. The blank cell is not evidence of a venetoclax P-gp effect or of increased DOAC exposure.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Hellfritzsch Table 3 leaves venetoclax blank. Increased DOAC exposure is not taken from that paper.",
      "practiceInterpretation": "Hellfritzsch is cited here only to record that the venetoclax cell is blank. An empty table cell means no known effect.",
      "labelGuidance": "Hellfritzsch Table 3 legend: empty cell = no known effect. doi:10.1055/s-0043-1762596.",
      "uncertainty": "No alternative venetoclax perpetrator study is added here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-venetoclax"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Venetoclax",
      "interactorSlug": "venetoclax",
      "synonyms": [
        "Venclexta",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Table 3 blank (no known CYP3A4 or P-gp perpetrator effect)"
      ],
      "effectDirection": "No Hellfritzsch P-gp effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Table 3 cell is blank",
          "signal": "Hellfritzsch Table 3 leaves venetoclax blank. An empty cell means no known effect on CYP3A4 or P-gp. The blank cell is not evidence of a venetoclax P-gp effect or of increased DOAC exposure.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Hellfritzsch Table 3 leaves venetoclax blank. Increased DOAC exposure is not taken from that paper.",
      "practiceInterpretation": "Hellfritzsch is cited here only to record that the venetoclax cell is blank. An empty table cell means no known effect.",
      "labelGuidance": "Hellfritzsch Table 3 legend: empty cell = no known effect. doi:10.1055/s-0043-1762596.",
      "uncertainty": "No alternative venetoclax perpetrator study is added here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-venetoclax"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Venetoclax",
      "interactorSlug": "venetoclax",
      "synonyms": [
        "Venclexta",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Table 3 blank (no known CYP3A4 or P-gp perpetrator effect)"
      ],
      "effectDirection": "No Hellfritzsch P-gp effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Table 3 cell is blank",
          "signal": "Hellfritzsch Table 3 leaves venetoclax blank. An empty cell means no known effect on CYP3A4 or P-gp. The blank cell is not evidence of a venetoclax P-gp effect or of increased DOAC exposure.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Hellfritzsch Table 3 leaves venetoclax blank. Increased DOAC exposure is not taken from that paper.",
      "practiceInterpretation": "Hellfritzsch is cited here only to record that the venetoclax cell is blank. An empty table cell means no known effect.",
      "labelGuidance": "Hellfritzsch Table 3 legend: empty cell = no known effect. doi:10.1055/s-0043-1762596.",
      "uncertainty": "No alternative venetoclax perpetrator study is added here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-venetoclax"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Venetoclax",
      "interactorSlug": "venetoclax",
      "synonyms": [
        "Venclexta",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Table 3 blank (no known CYP3A4 or P-gp perpetrator effect)"
      ],
      "effectDirection": "No Hellfritzsch P-gp effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Table 3 cell is blank",
          "signal": "Hellfritzsch Table 3 leaves venetoclax blank. An empty cell means no known effect on CYP3A4 or P-gp. The blank cell is not evidence of a venetoclax P-gp effect or of increased DOAC exposure.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Hellfritzsch Table 3 leaves venetoclax blank. Increased DOAC exposure is not taken from that paper.",
      "practiceInterpretation": "Hellfritzsch is cited here only to record that the venetoclax cell is blank. An empty table cell means no known effect.",
      "labelGuidance": "Hellfritzsch Table 3 legend: empty cell = no known effect. doi:10.1055/s-0043-1762596.",
      "uncertainty": "No alternative venetoclax perpetrator study is added here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-venetoclax"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Osimertinib",
      "interactorSlug": "osimertinib",
      "synonyms": [
        "Tagrisso",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Osimertinib inhibits P-gp/BCRP → may ↑ DOAC exposure (Tagrisso US PI §7.2)"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "P-gp interaction flags in CAT tables; quantitative DOAC PK typically lacking — monitor/avoid patterns per review.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-osimertinib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Osimertinib",
      "interactorSlug": "osimertinib",
      "synonyms": [
        "Tagrisso",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Osimertinib inhibits P-gp/BCRP → may ↑ DOAC exposure (Tagrisso US PI §7.2)"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "P-gp interaction flags in CAT tables; quantitative DOAC PK typically lacking — monitor/avoid patterns per review.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-osimertinib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Osimertinib",
      "interactorSlug": "osimertinib",
      "synonyms": [
        "Tagrisso",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Osimertinib inhibits P-gp/BCRP → may ↑ DOAC exposure (Tagrisso US PI §7.2)"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "P-gp interaction flags in CAT tables; quantitative DOAC PK typically lacking — monitor/avoid patterns per review.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-osimertinib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Osimertinib",
      "interactorSlug": "osimertinib",
      "synonyms": [
        "Tagrisso",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Osimertinib inhibits P-gp/BCRP → may ↑ DOAC exposure (Tagrisso US PI §7.2)"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "P-gp interaction flags in CAT tables; quantitative DOAC PK typically lacking — monitor/avoid patterns per review.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-osimertinib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Idelalisib",
      "interactorSlug": "idelalisib",
      "synonyms": [
        "Zydelig",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Theoretical increased exposure",
          "signal": "Hellfritzsch Table 3 lists idelalisib as a CYP3A4 inhibitor only. The P-gp cell is blank (empty cell = no known effect). The downloaded file collapsed the mild, moderate, and strong glyphs, so no degree is stated. Theoretical increased exposure stays on apixaban and rivaroxaban. Dabigatran and edoxaban are not given that increase.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Table 3 is CYP3A4 only for idelalisib. The P-gp cell is blank.",
      "practiceInterpretation": "Keep a theoretical exposure increase on apixaban and rivaroxaban. It is not extended to dabigatran or edoxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596. Empty cell = no known effect. Degree of CYP3A4 inhibition is not stated because the glyph weight was not re-readable.",
      "uncertainty": "No idelalisib degree (mild, moderate, or strong) is taught from the collapsed table glyphs.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-idelalisib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Idelalisib",
      "interactorSlug": "idelalisib",
      "synonyms": [
        "Zydelig",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Theoretical increased exposure",
          "signal": "Hellfritzsch Table 3 lists idelalisib as a CYP3A4 inhibitor only. The P-gp cell is blank (empty cell = no known effect). The downloaded file collapsed the mild, moderate, and strong glyphs, so no degree is stated. Theoretical increased exposure stays on apixaban and rivaroxaban. Dabigatran and edoxaban are not given that increase.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Table 3 is CYP3A4 only for idelalisib. The P-gp cell is blank.",
      "practiceInterpretation": "Keep a theoretical exposure increase on apixaban and rivaroxaban. It is not extended to dabigatran or edoxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596. Empty cell = no known effect. Degree of CYP3A4 inhibition is not stated because the glyph weight was not re-readable.",
      "uncertainty": "No idelalisib degree (mild, moderate, or strong) is taught from the collapsed table glyphs.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-idelalisib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Idelalisib",
      "interactorSlug": "idelalisib",
      "synonyms": [
        "Zydelig",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition only (P-gp blank)"
      ],
      "effectDirection": "No exposure increase from this table",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "No increased exposure taught",
          "signal": "An exposure increase is not supported. Idelalisib is a CYP3A4 inhibitor only in Hellfritzsch Table 3 (doi:10.1055/s-0043-1762596). The P-gp cell is blank. Dabigatran and edoxaban are not meaningful CYP3A4 substrates, so this table does not support an exposure increase. Keep the theoretical increase on apixaban and rivaroxaban.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Idelalisib’s Table 3 mark is CYP3A4 only. A blank P-gp cell is not an exposure increase for dabigatran or edoxaban.",
      "practiceInterpretation": "Dabigatran and edoxaban are not given an exposure increase with idelalisib. The theoretical increase stays on apixaban and rivaroxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596.",
      "uncertainty": "No dabigatran or edoxaban AUC with idelalisib is transcribed here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-idelalisib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Idelalisib",
      "interactorSlug": "idelalisib",
      "synonyms": [
        "Zydelig",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition only (P-gp blank)"
      ],
      "effectDirection": "No exposure increase from this table",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "No increased exposure taught",
          "signal": "An exposure increase is not supported. Idelalisib is a CYP3A4 inhibitor only in Hellfritzsch Table 3 (doi:10.1055/s-0043-1762596). The P-gp cell is blank. Dabigatran and edoxaban are not meaningful CYP3A4 substrates, so this table does not support an exposure increase. Keep the theoretical increase on apixaban and rivaroxaban.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Idelalisib’s Table 3 mark is CYP3A4 only. A blank P-gp cell is not an exposure increase for dabigatran or edoxaban.",
      "practiceInterpretation": "Dabigatran and edoxaban are not given an exposure increase with idelalisib. The theoretical increase stays on apixaban and rivaroxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596.",
      "uncertainty": "No dabigatran or edoxaban AUC with idelalisib is transcribed here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-idelalisib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Ribociclib",
      "interactorSlug": "ribociclib",
      "synonyms": [
        "Kisqali",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Theoretical increased exposure",
          "signal": "Hellfritzsch Table 3 lists ribociclib as a CYP3A4 inhibitor only. The P-gp cell is blank (empty cell = no known effect). The downloaded file collapsed the mild, moderate, and strong glyphs, so no degree is stated. Theoretical increased exposure stays on apixaban and rivaroxaban. Dabigatran and edoxaban are not given that increase.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Table 3 is CYP3A4 only for ribociclib. The P-gp cell is blank. No CYP3A4 degree is stated.",
      "practiceInterpretation": "Keep a theoretical exposure increase on apixaban and rivaroxaban. It is not extended to dabigatran or edoxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596. Degree of CYP3A4 inhibition is not stated because the glyph weight was not re-readable.",
      "uncertainty": "No CYP3A4 degree is stated for ribociclib.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-ribociclib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Ribociclib",
      "interactorSlug": "ribociclib",
      "synonyms": [
        "Kisqali",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition"
      ],
      "effectDirection": "↑ exposure (theoretical)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Theoretical increased exposure",
          "signal": "Hellfritzsch Table 3 lists ribociclib as a CYP3A4 inhibitor only. The P-gp cell is blank (empty cell = no known effect). The downloaded file collapsed the mild, moderate, and strong glyphs, so no degree is stated. Theoretical increased exposure stays on apixaban and rivaroxaban. Dabigatran and edoxaban are not given that increase.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "No measured anticoagulant AUC for this pair is on this card. Do not invent an exposure percent. Table 3 is CYP3A4 only for ribociclib. The P-gp cell is blank. No CYP3A4 degree is stated.",
      "practiceInterpretation": "Keep a theoretical exposure increase on apixaban and rivaroxaban. It is not extended to dabigatran or edoxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596. Degree of CYP3A4 inhibition is not stated because the glyph weight was not re-readable.",
      "uncertainty": "No CYP3A4 degree is stated for ribociclib.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-ribociclib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Ribociclib",
      "interactorSlug": "ribociclib",
      "synonyms": [
        "Kisqali",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition only (P-gp blank)"
      ],
      "effectDirection": "No exposure increase from this table",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "No increased exposure taught",
          "signal": "An exposure increase is not supported. Ribociclib is a CYP3A4 inhibitor only in Hellfritzsch Table 3 (doi:10.1055/s-0043-1762596). The P-gp cell is blank. Dabigatran and edoxaban are not meaningful CYP3A4 substrates, so this table does not support an exposure increase. Keep the theoretical increase on apixaban and rivaroxaban.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Ribociclib’s Table 3 mark is CYP3A4 only. A blank P-gp cell is not an exposure increase for dabigatran or edoxaban.",
      "practiceInterpretation": "Dabigatran and edoxaban are not given an exposure increase with ribociclib. The theoretical increase stays on apixaban and rivaroxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596.",
      "uncertainty": "No dabigatran or edoxaban AUC with ribociclib is transcribed here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-ribociclib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Ribociclib",
      "interactorSlug": "ribociclib",
      "synonyms": [
        "Kisqali",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 inhibition only (P-gp blank)"
      ],
      "effectDirection": "No exposure increase from this table",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "No increased exposure taught",
          "signal": "An exposure increase is not supported. Ribociclib is a CYP3A4 inhibitor only in Hellfritzsch Table 3 (doi:10.1055/s-0043-1762596). The P-gp cell is blank. Dabigatran and edoxaban are not meaningful CYP3A4 substrates, so this table does not support an exposure increase. Keep the theoretical increase on apixaban and rivaroxaban.",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. Table 3. doi:10.1055/s-0043-1762596",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Ribociclib’s Table 3 mark is CYP3A4 only. A blank P-gp cell is not an exposure increase for dabigatran or edoxaban.",
      "practiceInterpretation": "Dabigatran and edoxaban are not given an exposure increase with ribociclib. The theoretical increase stays on apixaban and rivaroxaban.",
      "labelGuidance": "Hellfritzsch Table 3, doi:10.1055/s-0043-1762596.",
      "uncertainty": "No dabigatran or edoxaban AUC with ribociclib is transcribed here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-ribociclib"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Palbociclib",
      "interactorSlug": "palbociclib",
      "synonyms": [
        "Ibrance",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 / P-gp weak–moderate notes"
      ],
      "effectDirection": "Uncertain PK direction",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "Weaker perpetrator signals than ribociclib/enzalutamide in many tables — still verify PI; quantitative DOAC PK usually absent.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-palbociclib"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Palbociclib",
      "interactorSlug": "palbociclib",
      "synonyms": [
        "Ibrance",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 / P-gp weak–moderate notes"
      ],
      "effectDirection": "Uncertain PK direction",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "Weaker perpetrator signals than ribociclib/enzalutamide in many tables — still verify PI; quantitative DOAC PK usually absent.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-palbociclib"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Palbociclib",
      "interactorSlug": "palbociclib",
      "synonyms": [
        "Ibrance",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 / P-gp weak–moderate notes"
      ],
      "effectDirection": "Uncertain PK direction",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "Weaker perpetrator signals than ribociclib/enzalutamide in many tables — still verify PI; quantitative DOAC PK usually absent.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-palbociclib"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Palbociclib",
      "interactorSlug": "palbociclib",
      "synonyms": [
        "Ibrance",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 / P-gp weak–moderate notes"
      ],
      "effectDirection": "Uncertain PK direction",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Mechanism-based caution",
          "signal": "Weaker perpetrator signals than ribociclib/enzalutamide in many tables — still verify PI; quantitative DOAC PK usually absent.",
          "citation": "Semin Thromb Hemost 2023; AHA cardio-oncology / oral anticancer DDI reviews",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Choose DOAC with oncology pharmacist input; LMWH if interaction burden is high or bleed risk extreme. See cancer-VTE pathway #/pathway/cancer-vte.",
      "labelGuidance": "Monitor/avoid patterns per PI and CAT DDI reviews — not automatic dose formulas without PK.",
      "uncertainty": "Sparse clinical DDI outcome data in cancer patients on concurrent antineoplastics.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-palbociclib"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Tamoxifen",
      "interactorSlug": "tamoxifen",
      "synonyms": [
        "Nolvadex",
        "SERM",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Indication-specific warfarin label"
      ],
      "effectDirection": "Contraindicated for risk reduction and DCIS; monitor coagulation indices for adjuvant and metastatic treatment",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Indication-specific warfarin rule",
          "signal": "SOLTAMOX US PI (effective 2021-11-29): contraindicated with concomitant warfarin when the indication is reduction of breast cancer incidence in high-risk patients, or risk reduction of invasive breast cancer after DCIS. For metastatic breast cancer or adjuvant therapy, a marked increase in anticoagulant effect may occur; closely monitor coagulation indices. Adjuvant and metastatic treatment are not a contraindication. The label says coagulation indices.",
          "citation": "SOLTAMOX US PI, DailyMed setid 1e6ff055-590c-41e6-9530-1fdf04cdbd02, effective 2021-11-29",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e6ff055-590c-41e6-9530-1fdf04cdbd02"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "The contraindication is limited to reduction of breast cancer incidence in high-risk patients and to risk reduction of invasive breast cancer after DCIS. Adjuvant and metastatic treatment are a monitoring situation, not a contraindication. The contraindication is not applied to DOACs on this card.",
      "practiceInterpretation": "Split the indication. Risk reduction and DCIS: do not combine with warfarin. Metastatic or adjuvant therapy: the label says a marked increase in anticoagulant effect may occur and to closely monitor coagulation indices.",
      "labelGuidance": "SOLTAMOX sections 4 and 7.2, DailyMed setid 1e6ff055-590c-41e6-9530-1fdf04cdbd02, effective 2021-11-29. The label says coagulation indices.",
      "uncertainty": "The retrieved SOLTAMOX text does not use the word INR.",
      "sources": [
        {
          "label": "SOLTAMOX US prescribing information",
          "citation": "Tamoxifen citrate oral solution. DailyMed setid 1e6ff055-590c-41e6-9530-1fdf04cdbd02. Effective 2021-11-29.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1e6ff055-590c-41e6-9530-1fdf04cdbd02"
        },
        {
          "label": "US prescribing information / product labeling",
          "citation": "US PI class warnings (tamoxifen–warfarin; BTKi hemorrhage; enzalutamide inducer language).",
          "url": null
        },
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        }
      ],
      "id": "warfarin-tamoxifen"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Tamoxifen",
      "interactorSlug": "tamoxifen",
      "synonyms": [
        "Nolvadex",
        "SERM",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Lower predicted PK impact vs warfarin",
        "Weak CYP notes in some tables"
      ],
      "effectDirection": "Likely lower PK concern than warfarin — caution",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DOAC–tamoxifen",
          "signal": "Reviews generally predict lower clinical PK impact of tamoxifen on DOACs than the labeled warfarin problem; still use oncology judgment for CAT and bleed risk. Quantitative DOAC PK not curated.",
          "citation": "CAT/DOAC DDI reviews (Semin Thromb Hemost / Pharmaceutics)",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Often acceptable vs warfarin+tamoxifen; still reconcile full med list for other CYP/P-gp drugs.",
      "labelGuidance": "No warfarin-style universal DOAC contraindication in standard teaching — verify PIs.",
      "uncertainty": "Absence of dramatic label language ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-tamoxifen"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Tamoxifen",
      "interactorSlug": "tamoxifen",
      "synonyms": [
        "Nolvadex",
        "SERM",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Lower predicted PK impact vs warfarin",
        "Weak CYP notes in some tables"
      ],
      "effectDirection": "Likely lower PK concern than warfarin — caution",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DOAC–tamoxifen",
          "signal": "Reviews generally predict lower clinical PK impact of tamoxifen on DOACs than the labeled warfarin problem; still use oncology judgment for CAT and bleed risk. Quantitative DOAC PK not curated.",
          "citation": "CAT/DOAC DDI reviews (Semin Thromb Hemost / Pharmaceutics)",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Often acceptable vs warfarin+tamoxifen; still reconcile full med list for other CYP/P-gp drugs.",
      "labelGuidance": "No warfarin-style universal DOAC contraindication in standard teaching — verify PIs.",
      "uncertainty": "Absence of dramatic label language ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-tamoxifen"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Tamoxifen",
      "interactorSlug": "tamoxifen",
      "synonyms": [
        "Nolvadex",
        "SERM",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Lower predicted PK impact vs warfarin",
        "Weak CYP notes in some tables"
      ],
      "effectDirection": "Likely lower PK concern than warfarin — caution",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DOAC–tamoxifen",
          "signal": "Reviews generally predict lower clinical PK impact of tamoxifen on DOACs than the labeled warfarin problem; still use oncology judgment for CAT and bleed risk. Quantitative DOAC PK not curated.",
          "citation": "CAT/DOAC DDI reviews (Semin Thromb Hemost / Pharmaceutics)",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Often acceptable vs warfarin+tamoxifen; still reconcile full med list for other CYP/P-gp drugs.",
      "labelGuidance": "No warfarin-style universal DOAC contraindication in standard teaching — verify PIs.",
      "uncertainty": "Absence of dramatic label language ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-tamoxifen"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Tamoxifen",
      "interactorSlug": "tamoxifen",
      "synonyms": [
        "Nolvadex",
        "SERM",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "Lower predicted PK impact vs warfarin",
        "Weak CYP notes in some tables"
      ],
      "effectDirection": "Likely lower PK concern than warfarin — caution",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "DOAC–tamoxifen",
          "signal": "Reviews generally predict lower clinical PK impact of tamoxifen on DOACs than the labeled warfarin problem; still use oncology judgment for CAT and bleed risk. Quantitative DOAC PK not curated.",
          "citation": "CAT/DOAC DDI reviews (Semin Thromb Hemost / Pharmaceutics)",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %.",
      "practiceInterpretation": "Often acceptable vs warfarin+tamoxifen; still reconcile full med list for other CYP/P-gp drugs.",
      "labelGuidance": "No warfarin-style universal DOAC contraindication in standard teaching — verify PIs.",
      "uncertainty": "Absence of dramatic label language ≠ zero residual uncertainty.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "Pharmaceutics 2022 DOAC DDI review",
          "citation": "Ferri N, et al. Pharmaceutics. 2022;14:1120.",
          "url": "https://doi.org/10.3390/pharmaceutics14061120"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-tamoxifen"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Dexamethasone (cancer doses)",
      "interactorSlug": "dexamethasone",
      "synonyms": [
        "Decadron",
        "steroid",
        "high-dose dex",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction (dose-dependent)",
        "P-gp induction possible"
      ],
      "effectDirection": "↓ exposure / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Induction caution",
          "signal": "Cancer-dose dexamethasone listed among CYP3A4 inducers in CAT–DOAC DDI tables — greatest practical concern for apixaban/rivaroxaban. Pulse/antiemetic schedules differ from chronic inducers like rifampin — judge dose and duration.",
          "citation": "Semin Thromb Hemost 2023 CAT DDI tables",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Short antiemetic courses may matter less than prolonged high-dose regimens — still document.",
      "practiceInterpretation": "For prolonged cancer-dose dex with apixaban/rivaroxaban, reconsider DOAC choice or use LMWH if thrombosis risk is high and induction exposure is sustained.",
      "labelGuidance": "Inducer caution — opposite clinical worry from inhibitor bleed risk.",
      "uncertainty": "Schedule-dependent; no curated AUC for dex–DOAC pairs here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "apixaban-dexamethasone"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Dexamethasone (cancer doses)",
      "interactorSlug": "dexamethasone",
      "synonyms": [
        "Decadron",
        "steroid",
        "high-dose dex",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction (dose-dependent)",
        "P-gp induction possible"
      ],
      "effectDirection": "↓ exposure / ↓ efficacy concern",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Induction caution",
          "signal": "Cancer-dose dexamethasone listed among CYP3A4 inducers in CAT–DOAC DDI tables — greatest practical concern for apixaban/rivaroxaban. Pulse/antiemetic schedules differ from chronic inducers like rifampin — judge dose and duration.",
          "citation": "Semin Thromb Hemost 2023 CAT DDI tables",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Short antiemetic courses may matter less than prolonged high-dose regimens — still document.",
      "practiceInterpretation": "For prolonged cancer-dose dex with apixaban/rivaroxaban, reconsider DOAC choice or use LMWH if thrombosis risk is high and induction exposure is sustained.",
      "labelGuidance": "Inducer caution — opposite clinical worry from inhibitor bleed risk.",
      "uncertainty": "Schedule-dependent; no curated AUC for dex–DOAC pairs here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "rivaroxaban-dexamethasone"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Dexamethasone (cancer doses)",
      "interactorSlug": "dexamethasone",
      "synonyms": [
        "Decadron",
        "steroid",
        "high-dose dex",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction (dose-dependent)",
        "P-gp induction possible"
      ],
      "effectDirection": "Possible ↓ exposure (weaker CYP story)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Induction caution",
          "signal": "Cancer-dose dexamethasone listed among CYP3A4 inducers in CAT–DOAC DDI tables — greatest practical concern for apixaban/rivaroxaban. Pulse/antiemetic schedules differ from chronic inducers like rifampin — judge dose and duration.",
          "citation": "Semin Thromb Hemost 2023 CAT DDI tables",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Short antiemetic courses may matter less than prolonged high-dose regimens — still document.",
      "practiceInterpretation": "For prolonged cancer-dose dex with apixaban/rivaroxaban, reconsider DOAC choice or use LMWH if thrombosis risk is high and induction exposure is sustained.",
      "labelGuidance": "Inducer caution — opposite clinical worry from inhibitor bleed risk.",
      "uncertainty": "Schedule-dependent; no curated AUC for dex–DOAC pairs here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "edoxaban-dexamethasone"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Dexamethasone (cancer doses)",
      "interactorSlug": "dexamethasone",
      "synonyms": [
        "Decadron",
        "steroid",
        "high-dose dex",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction (dose-dependent)",
        "P-gp induction possible"
      ],
      "effectDirection": "Possible ↓ exposure (weaker CYP story)",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Induction caution",
          "signal": "Cancer-dose dexamethasone listed among CYP3A4 inducers in CAT–DOAC DDI tables — greatest practical concern for apixaban/rivaroxaban. Pulse/antiemetic schedules differ from chronic inducers like rifampin — judge dose and duration.",
          "citation": "Semin Thromb Hemost 2023 CAT DDI tables",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Short antiemetic courses may matter less than prolonged high-dose regimens — still document.",
      "practiceInterpretation": "For prolonged cancer-dose dex with apixaban/rivaroxaban, reconsider DOAC choice or use LMWH if thrombosis risk is high and induction exposure is sustained.",
      "labelGuidance": "Inducer caution — opposite clinical worry from inhibitor bleed risk.",
      "uncertainty": "Schedule-dependent; no curated AUC for dex–DOAC pairs here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-dexamethasone"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Dexamethasone (cancer doses)",
      "interactorSlug": "dexamethasone",
      "synonyms": [
        "Decadron",
        "steroid",
        "high-dose dex",
        "oncology",
        "TKI",
        "CAT",
        "cancer drug"
      ],
      "mechanisms": [
        "CYP3A4 induction (dose-dependent)"
      ],
      "effectDirection": "↓ INR risk if induction dominates",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Induction caution",
          "signal": "Cancer-dose dexamethasone listed among CYP3A4 inducers in CAT–DOAC DDI tables — greatest practical concern for apixaban/rivaroxaban. Pulse/antiemetic schedules differ from chronic inducers like rifampin — judge dose and duration.",
          "citation": "Semin Thromb Hemost 2023 CAT DDI tables",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Quantitative DOAC victim AUC for this pair not identified in curated sources — mechanism + label/review teaching only. Do not invent exposure %. Short antiemetic courses may matter less than prolonged high-dose regimens — still document.",
      "practiceInterpretation": "For prolonged cancer-dose dex with apixaban/rivaroxaban, reconsider DOAC choice or use LMWH if thrombosis risk is high and induction exposure is sustained.",
      "labelGuidance": "Inducer caution — opposite clinical worry from inhibitor bleed risk.",
      "uncertainty": "Schedule-dependent; no curated AUC for dex–DOAC pairs here.",
      "sources": [
        {
          "label": "Semin Thromb Hemost 2023 — DOAC DDIs in CAT",
          "citation": "Hellfritzsch M, et al. Semin Thromb Hemost. 2023 DOI 10.1055/s-0043-1762596.",
          "url": "https://doi.org/10.1055/s-0043-1762596"
        },
        {
          "label": "BJCP cancer–antithrombotic DDI review",
          "citation": "Related oral anticancer / CAT DDI reviews (BJCP ecosystem DOI 10.1111/bcp.15785).",
          "url": "https://doi.org/10.1111/bcp.15785"
        },
        {
          "label": "EHRA 2021 / cancer VTE pathway context",
          "citation": "Steffel J, et al. Europace. 2021; cancer VTE teaching pathways on timeline.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "warfarin-dexamethasone"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Ciprofloxacin",
      "interactorSlug": "ciprofloxacin",
      "synonyms": [
        "Cipro"
      ],
      "mechanisms": [
        "CYP1A2 inhibition",
        "CYP3A4 inhibition (listed)",
        "Antibiotic–INR variability (illness/microbiome)"
      ],
      "effectDirection": "↑ INR / ↑ bleed risk",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR / bleeding",
          "signal": "US ciprofloxacin labeling: coadministration with oral anticoagulants may augment anticoagulant effect; contribution of drug vs infection/illness is hard to separate — monitor PT/INR frequently during and shortly after coadministration. Coumadin US PI lists ciprofloxacin among CYP1A2 (±CYP3A4) inhibitor examples.",
          "citation": "Ciprofloxacin US PI (DailyMed); Coumadin US PI Table 2 CYP interactions",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=64d0b20a-cecd-474e-a0a1-8f8853500def"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Warfarin evidence is INR/PD-centric; do not teach a single AUC%. Effect size varies with infection severity, age, nutrition, and genetics (CYP2C9/VKORC1).",
      "practiceInterpretation": "High-yield outpatient clinic DDI: check INR soon after start and after stop; do not invent a fixed empiric warfarin dose cut without local protocol.",
      "labelGuidance": "Ciprofloxacin PI: monitor PT/INR frequently during and shortly after coadministration. Coumadin: closely monitor INR when starting/stopping antibiotics.",
      "uncertainty": "Prospective fluoroquinolone–warfarin literature is heterogeneous — some structured reports show small mean INR changes with occasional large individual outliers. Teach monitoring, not false precision.",
      "sources": [
        {
          "label": "Ciprofloxacin US PI — oral anticoagulants",
          "citation": "Ciprofloxacin hydrochloride tablets US prescribing information (DailyMed): Oral Anti-coagulants — monitor PT/INR during and shortly after coadministration.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=64d0b20a-cecd-474e-a0a1-8f8853500def"
        },
        {
          "label": "Coumadin US PI — CYP table (ciprofloxacin)",
          "citation": "COUMADIN (warfarin sodium) US PI: Table 2 lists ciprofloxacin under CYP1A2 and CYP3A4 inhibitors — closely monitor INR.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        },
        {
          "label": "Fluoroquinolone–warfarin literature review",
          "citation": "Carroll DN, Carroll DG. Interactions between warfarin and three commonly prescribed fluoroquinolones. Ann Pharmacother. 2008;42:680-685.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/18413687/"
        }
      ],
      "id": "warfarin-ciprofloxacin"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Alcohol (ethanol)",
      "interactorSlug": "alcohol",
      "synonyms": [
        "ethanol",
        "binge drinking",
        "chronic heavy alcohol use"
      ],
      "mechanisms": [
        "Acute binge: ↓ warfarin metabolism (↑ INR risk)",
        "Chronic heavy use: enzyme induction / ↓ INR risk",
        "PD bleed risk (falls, gastritis, liver disease)"
      ],
      "effectDirection": "Uncertain PK direction",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR instability / major bleed risk",
          "signal": "Teaching consensus: acute heavy intake can potentiate anticoagulation; chronic heavy use can induce metabolism and lower INR; alcohol misuse also raises bleed risk independent of INR. No single AUC% applies.",
          "citation": "StatPearls Warfarin Drug Interactions; Coumadin counseling / clinical pharmacology teaching",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK441964/"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Liver disease, malnutrition, and binge vs daily patterns change the clinical picture. Modest occasional intake in patients with normal liver function is often tolerated under clinic guidance — still individualize.",
      "practiceInterpretation": "Ask specifically about binge vs daily heavy use. Do not teach one directional INR arrow. Escalate INR checks when drinking pattern changes; address GI bleed / fall risk separately from PK.",
      "labelGuidance": "Coumadin: drugs, dietary changes, and other factors affect INR — more frequent monitoring when exposures change. Emergency major bleed reversal is a separate teaching page (U.S. FXa: supportive + institutional/off-label 4F-PCC — Andexxa not available after Dec 22, 2025).",
      "uncertainty": "Direction and magnitude are patient- and pattern-specific; observational alcohol–bleed associations are not substitute AUC numbers.",
      "sources": [
        {
          "label": "StatPearls — Warfarin Drug Interactions (alcohol)",
          "citation": "Tsoukalas N, et al. / StatPearls: Warfarin Drug Interactions — acutely alcohol may inhibit warfarin metabolism; chronic use may induce enzymes and lower INR.",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK441964/"
        },
        {
          "label": "Coumadin US PI — general monitoring",
          "citation": "COUMADIN US PI: drugs, dietary changes, and other factors affect INR; monitor more frequently when exposures change.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        },
        {
          "label": "Community warfarin–alcohol misuse bleed study",
          "citation": "Roth JA, et al. Alcohol misuse, genetics, and major bleeding among warfarin therapy patients. Pharmacogenet Genomics. 2015 — PMC4478047.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4478047/"
        }
      ],
      "id": "warfarin-alcohol"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Acetaminophen (high-dose / repeated)",
      "interactorSlug": "acetaminophen",
      "synonyms": [
        "paracetamol",
        "Tylenol"
      ],
      "mechanisms": [
        "PD potentiation of VKA effect (vitamin K–cycle / factor activity)",
        "Dose- and duration-related INR rise"
      ],
      "effectDirection": "↑ INR / ↑ bleed risk",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR increase (RCT, 4 g/day)",
          "signal": "Mahé et al.: in stable warfarin patients, paracetamol 1 g QID (4 g/day) for 14 days raised mean maximum INR to 3.45±0.78 vs 2.66±0.73 on placebo; mean maximum INR increase from baseline 1.20±0.62 vs 0.37±0.48.",
          "citation": "Mahé I, et al. Haematologica. 2006;91:1621-1627.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/17145598/"
        },
        {
          "outcome": "INR increase (RCT, 2–3 g/day)",
          "signal": "Zhang et al.: acetaminophen 2 g/day or 3 g/day for 10 days produced mean maximal INR increases of 0.70±0.49 and 0.67±0.62 vs placebo (significant by day 3).",
          "citation": "Zhang Q, et al. Fundam Clin Pharmacol. 2011;25:110-116.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/21191575/"
        },
        {
          "outcome": "INR >6 association (case-control)",
          "signal": "Hylek et al.: acetaminophen intake associated dose-dependently with INR >6; highest category (≥9100 mg/week) adjusted OR 10.0 (95% CI 2.6–37.9).",
          "citation": "Hylek EM, et al. JAMA. 1998;279:657-662.",
          "url": "https://jamanetwork.com/journals/jama/fullarticle/187300"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Prefer acetaminophen over NSAIDs for analgesia on anticoagulants for PD-bleed reasons — but high repeated doses are not INR-neutral. Illness/fever confounds outpatient signals.",
      "practiceInterpretation": "Teach dose/duration dependence: brief low-dose courses often fine with awareness; multi-day ≥2–4 g/day warrants closer INR. Still prefer vs NSAID when analgesia needed.",
      "labelGuidance": "Coumadin: monitor INR when starting/stopping interacting exposures; antibiotic/illness periods already increase INR volatility.",
      "uncertainty": "Individual INR delta varies; do not invent an AUC%. Mechanism hypotheses exist but teaching center is monitored INR response.",
      "sources": [
        {
          "label": "Mahé et al. Haematologica 2006 (4 g/day RCT)",
          "citation": "Mahé I, et al. Paracetamol: a haemorrhagic risk factor in patients on warfarin. Haematologica. 2006;91:1621-1627. / related BJCP PMC1884780.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1884780/"
        },
        {
          "label": "Zhang et al. Fundam Clin Pharmacol 2011 (2–3 g/day RCT)",
          "citation": "Zhang Q, et al. Interaction between acetaminophen and warfarin in adults receiving long-term oral anticoagulants: a randomized controlled trial. Fundam Clin Pharmacol. 2011;25:110-116.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/21191575/"
        },
        {
          "label": "Hylek et al. JAMA 1998 (dose-dependent INR>6)",
          "citation": "Hylek EM, et al. Acetaminophen and other risk factors for excessive warfarin anticoagulation. JAMA. 1998;279:657-662.",
          "url": "https://jamanetwork.com/journals/jama/fullarticle/187300"
        }
      ],
      "id": "warfarin-acetaminophen"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Thyroid state (hyper-/hypothyroidism; levothyroxine changes)",
      "interactorSlug": "thyroid-state",
      "synonyms": [
        "levothyroxine",
        "Synthroid",
        "hyperthyroidism",
        "hypothyroidism",
        "Graves disease"
      ],
      "mechanisms": [
        "Hyperthyroidism: ↑ warfarin sensitivity (↑ INR)",
        "Hypothyroidism: ↓ warfarin response (↓ INR)",
        "Levothyroxine initiation/titration changes thyroid state (not usually a direct PK DDI)"
      ],
      "effectDirection": "Uncertain PK direction",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR / dose requirement shifts with thyroid status",
          "signal": "Clinical pharmacology teaching and case series: thyrotoxicosis increases VKA sensitivity; hypothyroidism decreases response; treating hyperthyroidism or correcting hypothyroidism can materially change warfarin requirements — monitor INR around thyroid diagnosis and dose changes.",
          "citation": "Busenbark LA, Cushnie SA. Graves’ Disease and Treatment Effects on Warfarin Anticoagulation. Case Rep Med. 2014;2014:292468.",
          "url": "https://doi.org/10.1155/2014/292468"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Do not blame the levothyroxine tablet alone — teach thyroid **state**. Larger evaluations of levothyroxine start in euthyroid patients on stable warfarin are mixed; the high-yield clinic scenario is new/worsening thyroid disease or dose titration.",
      "practiceInterpretation": "When thyroid labs or levothyroxine dose change, schedule earlier INR. Expect hyperthyroid patients to need less warfarin; hypothyroid patients often need more — reverse as state normalizes.",
      "labelGuidance": "Coumadin: endogenous factors and interacting exposures affect INR — intensify monitoring when clinical status changes.",
      "uncertainty": "No single numeric INR delta; avoid inventing AUC. Direct levothyroxine–warfarin PK interaction is generally weaker than thyroid-state PD teaching.",
      "sources": [
        {
          "label": "Graves’ / thyroid treatment effects on warfarin",
          "citation": "Busenbark LA, Cushnie SA. Case Rep Med. 2014;2014:292468. DOI 10.1155/2014/292468.",
          "url": "https://doi.org/10.1155/2014/292468"
        },
        {
          "label": "Levothyroxine initiation vs warfarin (evaluation)",
          "citation": "Ansell J / published evaluation of potential warfarin–levothyroxine interaction (PubMed 24913218) — mixed clinical significance when thyroid state is already treated.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/24913218/"
        },
        {
          "label": "Coumadin US PI — monitoring when status changes",
          "citation": "COUMADIN US PI: more frequent INR monitoring when clinical factors or concomitant therapies change.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        }
      ],
      "id": "warfarin-thyroid-state"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Clarithromycin",
      "interactorSlug": "clarithromycin",
      "synonyms": [
        "Biaxin"
      ],
      "mechanisms": [
        "CYP3A4 inhibition",
        "Antibiotic–INR variability"
      ],
      "effectDirection": "↑ INR / ↑ bleed risk",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "INR / hemorrhage",
          "signal": "Clarithromycin US labeling: risk of serious hemorrhage and significant elevations in INR and prothrombin time when co-administered with warfarin; monitor INR and PT frequently during concurrent use.",
          "citation": "BIAXIN (clarithromycin) US PI — Oral Anticoagulants / WARNINGS",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2e899f4a-a2e9-445c-a0ed-6ad811e997e6"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Contrast with azithromycin (minimal CYP3A/P-gp inhibition) when a macrolide is needed in a warfarin patient. Illness itself can raise INR.",
      "practiceInterpretation": "Classic sharp INR risk antibiotic — check INR early in the course and after completion. Prefer non-interacting alternatives when microbiologically appropriate.",
      "labelGuidance": "Biaxin: frequent INR/PT monitoring with oral anticoagulants. Coumadin: ciprofloxacin/clarithromycin appear in CYP inhibitor example tables — monitor closely.",
      "uncertainty": "Exact INR delta varies; do not invent AUC%. Case reports describe marked INR rises days into therapy.",
      "sources": [
        {
          "label": "BIAXIN US PI — oral anticoagulants",
          "citation": "Clarithromycin (BIAXIN) US prescribing information: Oral Anticoagulants — serious hemorrhage / significant INR–PT elevations; monitor frequently.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2e899f4a-a2e9-445c-a0ed-6ad811e997e6"
        },
        {
          "label": "Coumadin US PI — CYP3A4 inhibitors",
          "citation": "COUMADIN US PI Table 2 lists clarithromycin under CYP3A4 inhibitors.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        },
        {
          "label": "Case literature",
          "citation": "Recker MW, Kier KL. Potential interaction between clarithromycin and warfarin. Ann Pharmacother. 1997;31:996-998.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/9296238/"
        }
      ],
      "id": "warfarin-clarithromycin"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Dicloxacillin",
      "interactorSlug": "dicloxacillin",
      "synonyms": [
        "Dynapen",
        "nafcillin (related antistaphylococcal penicillin inducer)"
      ],
      "mechanisms": [
        "CYP2C9 / CYP3A4 induction",
        "↓ warfarin exposure → ↓ INR"
      ],
      "effectDirection": "↓ INR / thrombosis risk if under-anticoagulated",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Subtherapeutic INR / induction",
          "signal": "Dicloxacillin induces CYP2C9/CYP3A4 in vivo; clinical series and register analyses describe clinically important INR reductions during prolonged courses, with delayed onset and lingering effect after stop. Nafcillin shares the antistaphylococcal-penicillin induction pattern (Coumadin PI lists nafcillin as a CYP3A4 inducer example).",
          "citation": "Stage C, et al. Br J Clin Pharmacol. 2018;84:948-957; Coumadin US PI Table 2 (nafcillin inducer)",
          "url": "https://doi.org/10.1111/bcp.13467"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Onset often days; offset may lag after the antibiotic stops — plan INR surveillance through washout. Do not quote a single invented % AUC for warfarin.",
      "practiceInterpretation": "High-yield under-anticoagulation trap after MSSA cellulitis/osteomyelitis courses. Expect higher warfarin doses during therapy and down-titrate carefully after discontinuation.",
      "labelGuidance": "Coumadin: nafcillin listed among CYP3A4 inducers — closely monitor INR when starting/stopping inducers. Dicloxacillin handled by same clinic induction logic + primary PK induction data.",
      "uncertainty": "Pair-specific therapeutic warfarin AUC% not taught here; teach direction + monitoring timeline. Exact dose-multiplication factors vary widely across reports.",
      "sources": [
        {
          "label": "Stage et al. BJCP 2018 — dicloxacillin CYP induction",
          "citation": "Stage C, et al. Dicloxacillin induces CYP2C19, CYP2C9 and CYP3A4 in vivo and in vitro. Br J Clin Pharmacol. 2018;84:948-957.",
          "url": "https://doi.org/10.1111/bcp.13467"
        },
        {
          "label": "Nafcillin–warfarin clinical DDI",
          "citation": "Wungwattana M, et al. Significant drug–drug interaction between warfarin and nafcillin. Ther Adv Drug Saf. 2018 — PMC6243422.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6243422/"
        },
        {
          "label": "Coumadin US PI — nafcillin as CYP3A4 inducer",
          "citation": "COUMADIN US PI Table 2: nafcillin listed under CYP3A4 inducers.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        }
      ],
      "id": "warfarin-dicloxacillin"
    },
    {
      "anticoagulant": "Apixaban",
      "interactor": "Azithromycin",
      "interactorSlug": "azithromycin",
      "synonyms": [
        "Zithromax",
        "Z-Pak"
      ],
      "mechanisms": [
        "Minimal CYP3A4 / P-gp inhibition (macrolide contrast vs clarithromycin)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage hospitalization (macrolide contrast cohort)",
          "signal": "Hill et al. (older DOAC users): clarithromycin associated with higher 30-day major-hemorrhage hospitalization than azithromycin (0.77% vs 0.43%; adjusted HR 1.71, 95% CI 1.20–2.45). Supports azithromycin as the preferred macrolide comparator when a macrolide is required — not a pairwise apixaban AUC study.",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "EHRA 2021 lists azithromycin with ‘No PK data’ for apixaban. Absence of strong dual inhibition ≠ permission to ignore bleed risk, renal impairment, or stacked inhibitors.",
      "practiceInterpretation": "Teaching contrast: if a macrolide is needed on apixaban, prefer azithromycin over clarithromycin/erythromycin when microbiologically appropriate. Still counsel on infection-related bleed risk.",
      "labelGuidance": "Not in the ‘avoid strong combined P-gp/CYP3A inhibitor’ bucket like ketoconazole/ritonavir; verify current regional PI.",
      "uncertainty": "Pair-specific therapeutic-dose apixaban–azithromycin AUC not curated — do not fabricate %.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide (azithromycin row)",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676 — azithromycin: P-gp inhibition noted; No PK data for several DOACs.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Hill et al. JAMA Intern Med 2020",
          "citation": "Hill K, Sucha E, Rhodes E, et al. Risk of hospitalization with hemorrhage among older adults taking clarithromycin vs azithromycin and DOACs. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        },
        {
          "label": "DOAC DDI management resource",
          "citation": "Mar PL, et al. / collated DOAC DDI tool (PMC9647398) — azithromycin classified as P-gp inhibitor with limited quantified DOAC pairs.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        }
      ],
      "id": "apixaban-azithromycin"
    },
    {
      "anticoagulant": "Rivaroxaban",
      "interactor": "Azithromycin",
      "interactorSlug": "azithromycin",
      "synonyms": [
        "Zithromax",
        "Z-Pak"
      ],
      "mechanisms": [
        "Minimal CYP3A4 / P-gp inhibition (macrolide contrast vs clarithromycin/erythromycin)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage hospitalization (macrolide contrast cohort)",
          "signal": "Same Hill 2020 clarithromycin-vs-azithromycin DOAC cohort supports lower hemorrhagic signal with azithromycin than clarithromycin. Contrast with existing rivaroxaban–erythromycin therapeutic-dose AUC +34% (Mueck) and clarithromycin cards.",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "Xarelto labeling discusses clarithromycin/erythromycin but does not list a quantified azithromycin DDI; EHRA: No PK data. Renal impairment + other moderate inhibitors remain relevant for rivaroxaban generally.",
      "practiceInterpretation": "Prefer azithromycin over clarithromycin/erythromycin when a macrolide is indicated. Do not equate ‘minimal CYP inhibition’ with zero bleed stewardship.",
      "labelGuidance": "Not a labeled strong dual-inhibitor avoid pair; still verify current PI and CrCl context.",
      "uncertainty": "Pair-specific rivaroxaban–azithromycin AUC not curated — qualitative teaching only.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Hill et al. JAMA Intern Med 2020",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        },
        {
          "label": "Mueck rivaroxaban macrolide contrast (erythromycin quantified)",
          "citation": "Mueck W, et al. Br J Clin Pharmacol. 2013;76:89-98 — erythromycin ↑ rivaroxaban AUC ~+34% (existing site card).",
          "url": "https://doi.org/10.1111/bcp.12075"
        }
      ],
      "id": "rivaroxaban-azithromycin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Azithromycin",
      "interactorSlug": "azithromycin",
      "synonyms": [
        "Zithromax",
        "Z-Pak"
      ],
      "mechanisms": [
        "Minimal P-gp inhibition relative to clarithromycin (macrolide contrast)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage hospitalization (macrolide contrast cohort)",
          "signal": "Hill 2020 DOAC cohort: clarithromycin > azithromycin for 30-day major-hemorrhage hospitalization. Existing dabigatran–clarithromycin cards cite ~+49% AUC / +60% Cmax collated PK — azithromycin lacks analogous therapeutic-dose PK.",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "EHRA: No PK data for dabigatran–azithromycin. Renal impairment remains the dominant dabigatran exposure amplifier independent of macrolide choice.",
      "practiceInterpretation": "Macrolide needed on dabigatran → prefer azithromycin over clarithromycin when appropriate. Reassess CrCl and other P-gp inhibitors.",
      "labelGuidance": "Not in the strong P-gp inhibitor dose-adjustment examples (ketoconazole/dronedarone class) — verify current Pradaxa PI.",
      "uncertainty": "No curated pairwise AUC — qualitative contrast teaching only.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Hill et al. JAMA Intern Med 2020",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        },
        {
          "label": "DOAC DDI resource (clarithromycin contrast)",
          "citation": "PMC9647398 collated clarithromycin–dabigatran PK vs limited azithromycin data.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        }
      ],
      "id": "dabigatran-azithromycin"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Azithromycin",
      "interactorSlug": "azithromycin",
      "synonyms": [
        "Zithromax",
        "Z-Pak"
      ],
      "mechanisms": [
        "Minimal CYP3A4 / P-gp inhibition (macrolide contrast vs erythromycin/clarithromycin)"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Major hemorrhage hospitalization (macrolide contrast cohort)",
          "signal": "Hill 2020 supports azithromycin as lower-risk macrolide comparator vs clarithromycin in DOAC users. Contrast with edoxaban–erythromycin labeled/PK dose-reduction story (separate card). Hill JAMA Intern Med 2020 enrolled apixaban/rivaroxaban/dabigatran users — not edoxaban; do not invent edoxaban PK %.",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "evidenceGrade": "Clinical-cohort",
      "populationCaveats": "EHRA marks azithromycin No PK data for several DOACs; edoxaban labels dose-reduce with certain P-gp inhibitors (e.g., erythromycin) — do not import that rule onto azithromycin without label support. Hill 2020 cohort did not include edoxaban.",
      "practiceInterpretation": "Prefer azithromycin when a macrolide is needed; reserve erythromycin/clarithromycin only if necessary and apply agent-specific edoxaban rules.",
      "labelGuidance": "Verify current edoxaban PI P-gp inhibitor list — azithromycin is not the erythromycin dose-reduction exemplar.",
      "uncertainty": "Pair-specific AUC not curated. Hill JAMA Intern Med 2020 enrolled apixaban/rivaroxaban/dabigatran users — not edoxaban; do not invent edoxaban PK %.",
      "sources": [
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "Hill et al. JAMA Intern Med 2020",
          "citation": "Hill K, et al. JAMA Intern Med. 2020;180:1052-1060.",
          "url": "https://doi.org/10.1001/jamainternmed.2020.1835"
        }
      ],
      "id": "edoxaban-azithromycin"
    },
    {
      "anticoagulant": "Edoxaban",
      "interactor": "Erythromycin",
      "interactorSlug": "erythromycin",
      "synonyms": [
        "Ery-Tab",
        "Erythrocin"
      ],
      "mechanisms": [
        "P-gp inhibition",
        "CYP3A4 inhibition (moderate)"
      ],
      "effectDirection": "↑ exposure",
      "pkEffects": [
        {
          "parameter": "AUC",
          "change": "+85%",
          "population": "Healthy subjects (edoxaban DDI program)",
          "design": "Therapeutic-dose edoxaban with erythromycin (Parasrampuria / label–EHRA collated)",
          "regimenNotes": "Primary dual P-gp (±CYP3A) inhibition story for edoxaban macrolides; label commonly dose-reduces 60→30 mg during coadministration — verify current regional PI.",
          "citation": "Parasrampuria DA, et al. Br J Clin Pharmacol. 2016; EHRA 2021",
          "url": "https://doi.org/10.1111/bcp.13092"
        },
        {
          "parameter": "Cmax",
          "change": "+68%",
          "population": "Healthy subjects",
          "design": "Same erythromycin–edoxaban DDI program",
          "citation": "Parasrampuria DA, et al. Br J Clin Pharmacol. 2016; EHRA 2021",
          "url": "https://doi.org/10.1111/bcp.13092"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Fills the erythromycin hole beyond rivaroxaban-only coverage. Contrast with azithromycin (minimal expected PK). Renal impairment and other P-gp inhibitors stack.",
      "practiceInterpretation": "If erythromycin cannot be avoided: apply indication-specific labeled rules (US NVAF ≠ US VTE), shorten the macrolide course when possible, and prefer azithromycin when microbiologically acceptable. Do not teach a universal 60→30 mg cut for every edoxaban patient.",
      "labelGuidance": "PK (Parasrampuria): +85% AUC / +68% Cmax. US SAVAYSA: NVAF — no dose reduction recommended for concomitant P-gp inhibitors; DVT/PE — reduce to 30 mg once daily with certain P-gp inhibitors (Hokusai short-term macrolide list included erythromycin). EU/EHRA often teach 60→30 mg with erythromycin — verify regional PI before protocol language.",
      "uncertainty": "Confirm the exact current country-specific dose-reduction sentence in the live PI before protocol language. Observational bleed heterogeneity across macrolides remains.",
      "sources": [
        {
          "label": "Parasrampuria et al. BJCP 2016 (edoxaban DDIs)",
          "citation": "Parasrampuria DA, et al. Edoxaban drug–drug interactions with ketoconazole, erythromycin, and cyclosporine. Br J Clin Pharmacol. 2016;82:1591-1600.",
          "url": "https://doi.org/10.1111/bcp.13092"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676 — erythromycin/edoxaban +85% AUC; +68% Cmax; dose reduction to 30 mg OD by label.",
          "url": "https://doi.org/10.1093/europace/euab065"
        },
        {
          "label": "DOAC DDI collated resource",
          "citation": "Mar PL, et al. / PMC9647398 summarizing edoxaban–erythromycin PK.",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647398/"
        }
      ],
      "clinicalEffects": [],
      "id": "edoxaban-erythromycin"
    },
    {
      "anticoagulant": "Dabigatran",
      "interactor": "Colchicine",
      "interactorSlug": "colchicine",
      "synonyms": [
        "Colcrys",
        "Mitigare"
      ],
      "mechanisms": [
        "Both are P-gp substrates (shared pathway teaching)",
        "Colchicine toxicity risk driven mainly by strong P-gp/CYP3A inhibitors — not proven dabigatran perpetrator effect"
      ],
      "effectDirection": "Likely minimal PK effect",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Colchicine toxicity with strong dual inhibitors (context)",
          "signal": "Colchicine US labeling: P-gp/CYP3A4 substrate; life-threatening interactions with strong dual inhibitors (e.g., clarithromycin) — dose-adjust or contraindicate with renal/hepatic impairment. This is NOT a documented dabigatran↑ AUC pair; teach stack awareness when a third P-gp/CYP3A inhibitor is added to colchicine ± DOAC.",
          "citation": "Colchicine US PI (DailyMed); Biaxin colchicine contraindication language",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eb509994-6ecc-4599-b87a-98495fef6129"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Gout flare on DOAC: colchicine is often preferred over NSAIDs for PD-bleed reasons — still verify renal function and avoid clarithromycin/strong inhibitor stacks. No therapeutic-dose dabigatran↔colchicine AUC curated.",
      "practiceInterpretation": "Do not teach ‘colchicine raises dabigatran X%’. Teach: (1) colchicine > NSAID for many DOAC gout flares; (2) never casually combine colchicine with clarithromycin/strong P-gp–CYP3A inhibitors, especially if CrCl low; (3) dabigatran renal dosing remains independent.",
      "labelGuidance": "Colchicine PI governs inhibitor stacks. Dabigatran PI focuses on P-gp inhibitors/inducers affecting dabigatran — colchicine is not a labeled strong P-gp inhibitor exemplar.",
      "uncertainty": "Pairwise DOAC exposure change from colchicine is unquantified here — qualitative only. EHRA does not list colchicine as a major DOAC perpetrator.",
      "sources": [
        {
          "label": "Colchicine US PI — P-gp/CYP3A substrate warnings",
          "citation": "Colchicine capsules US PI: substrate of P-gp and CYP3A4; avoid/adjust with inhibitors; contraindicated with dual inhibitors in renal/hepatic impairment.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eb509994-6ecc-4599-b87a-98495fef6129"
        },
        {
          "label": "Clarithromycin–colchicine labeled interaction (stack exemplar)",
          "citation": "BIAXIN US PI: colchicine Cmax +197% / AUC +239% with clarithromycin 250 mg BID ×7 days; contraindicated if renal/hepatic impairment.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2e899f4a-a2e9-445c-a0ed-6ad811e997e6"
        },
        {
          "label": "EHRA 2021 Practical Guide",
          "citation": "Steffel J, et al. Europace. 2021;23:1612-1676 — focus on strong combined P-gp/CYP3A perpetrators for DOAC exposure.",
          "url": "https://doi.org/10.1093/europace/euab065"
        }
      ],
      "id": "dabigatran-colchicine"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Omeprazole",
      "interactorSlug": "omeprazole",
      "synonyms": [
        "Prilosec",
        "PPI (omeprazole exemplar)"
      ],
      "mechanisms": [
        "CYP2C19 inhibition → stereoselective ↑ R-warfarin (less potent enantiomer)",
        "S-warfarin (CYP2C9) generally unaffected in controlled studies",
        "Class PPI labeling: reports of ↑ INR/PT with warfarin"
      ],
      "effectDirection": "Likely minor PK (R-warfarin); monitor INR",
      "pkEffects": [
        {
          "parameter": "R-warfarin plasma concentration",
          "change": "+12% (mean); S-warfarin unchanged",
          "population": "Healthy men (n=21)",
          "design": "Warfarin + omeprazole 20 mg daily vs placebo crossover (Sutfin)",
          "regimenNotes": "Stereoselective R-isomer story. Small Trombotest change; no warfarin dose change required in study. Do not quote as S-warfarin or INR%.",
          "citation": "Sutfin T, et al. Ther Drug Monit. 1989;11:176-184.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/2718223/"
        },
        {
          "parameter": "R-warfarin plasma concentration",
          "change": "+9.5% (mean); S-warfarin unaffected; coagulation time NS",
          "population": "Anticoagulated patients (n=28 evaluable)",
          "design": "Stable warfarin + omeprazole 20 mg daily vs placebo crossover (Unge)",
          "regimenNotes": "Patient study supporting modest R-warfarin ↑ without significant coagulation change in the trial population.",
          "citation": "Unge P, et al. Br J Clin Pharmacol. 1992;34:509-512.",
          "url": "https://doi.org/10.1111/j.1365-2125.1992.tb05656.x"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "INR / PT monitoring (label)",
          "signal": "Omeprazole and PPI US labeling: increased INR and prothrombin time reported with concomitant warfarin; may lead to abnormal bleeding — monitor INR/PT and adjust warfarin if needed.",
          "citation": "Omeprazole US PI — warfarin / PPI class Drug Interactions",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e87d2206-9c06-438c-947b-10b29a879d7b"
        }
      ],
      "evidenceGrade": "PK-patient",
      "populationCaveats": "CYP2C19 genotype can modulate R-warfarin disposition (Uno et al.) — still manage by INR, not genotype alone in clinic teaching. Illness, antibiotics, and diet confound outpatient INR more than this PPI effect in most patients.",
      "practiceInterpretation": "High-yield teaching: omeprazole is usually a **minor** stereoselective R-warfarin interaction in controlled studies — still check INR after start/stop/switch of PPIs because labels warn and real-world INR noise is common. Prefer pantoprazole when minimizing CYP2C19 interaction potential (see sibling card). Do not invent a single INR delta.",
      "labelGuidance": "Omeprazole/PPI US PI: monitor INR and PT with warfarin; adjust dose to maintain target INR. Coumadin: more frequent monitoring when interacting exposures change.",
      "uncertainty": "Controlled PK shows modest R-warfarin ↑ without consistent clinical coagulation change; postmarketing INR rises still reported for PPIs — teaching is monitoring vigilance, not alarmism.",
      "sources": [
        {
          "label": "Sutfin et al. Ther Drug Monit 1989 (HV stereoselective)",
          "citation": "Sutfin T, Balmer K, Boström H, Eriksson S, Höglund P, Paulsen O. Stereoselective interaction of omeprazole with warfarin in healthy men. Ther Drug Monit. 1989;11:176-184. PMID 2718223.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/2718223/"
        },
        {
          "label": "Unge et al. BJCP 1992 (warfarin patients)",
          "citation": "Unge P, et al. A study of the interaction of omeprazole and warfarin in anticoagulated patients. Br J Clin Pharmacol. 1992;34:509-512. DOI 10.1111/j.1365-2125.1992.tb05656.x. PMID 1493083.",
          "url": "https://doi.org/10.1111/j.1365-2125.1992.tb05656.x"
        },
        {
          "label": "Omeprazole US PI — warfarin / PPI",
          "citation": "Omeprazole delayed-release capsules US PI: increased INR/PT with PPIs including omeprazole + warfarin; monitor and adjust warfarin as needed.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e87d2206-9c06-438c-947b-10b29a879d7b"
        },
        {
          "label": "Uno et al. — CYP2C19 / R-warfarin context",
          "citation": "Uno T, et al. The role of cytochrome P2C19 in R-warfarin pharmacokinetics and its interaction with omeprazole. Eur J Clin Pharmacol. 2008 — genotype modulates R-warfarin; PD effect limited.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/18214455/"
        }
      ],
      "id": "warfarin-omeprazole"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Pantoprazole",
      "interactorSlug": "pantoprazole",
      "synonyms": [
        "Protonix",
        "PPI (lower CYP2C19 interaction exemplar)"
      ],
      "mechanisms": [
        "PPI class; pantoprazole has lower CYP2C19 interaction potential than omeprazole in controlled PK",
        "Class PPI labeling still mentions INR/PT monitoring with warfarin"
      ],
      "effectDirection": "Likely minimal PK in controlled studies; monitor INR",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "No significant PK/PD interaction (controlled HV study)",
          "signal": "Duursema et al.: pantoprazole 40 mg daily did not significantly alter warfarin pharmacokinetics or anticoagulant pharmacodynamics in healthy men — supports pantoprazole as a preferred PPI when interaction minimization matters.",
          "citation": "Duursema L, et al. Br J Clin Pharmacol. 1995;39:700-703.",
          "url": "https://doi.org/10.1111/j.1365-2125.1995.tb05732.x"
        },
        {
          "outcome": "INR / PT monitoring (PPI class label)",
          "signal": "PPI US class language still advises monitoring INR/PT when warfarin is coadministered — lack of effect in one HV study does not erase rare postmarketing INR anecdotes.",
          "citation": "PPI / pantoprazole US prescribing information — warfarin monitoring language",
          "url": "https://dailymed.nlm.nih.gov/dailymed/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "Contrast card vs omeprazole (modest R-warfarin ↑). Large observational work often finds little average INR difference across PPIs — individualize. Illness and other drugs dominate INR volatility.",
      "practiceInterpretation": "Clinic pearl: when a PPI is needed on warfarin and interaction minimization is a priority, pantoprazole is a reasonable preferred agent based on controlled lack-of-effect data — still obtain an INR after start/stop/switch. Do not teach ‘pantoprazole never interacts.’",
      "labelGuidance": "Follow PPI + warfarin INR/PT monitoring language. Prefer agent selection + monitoring over assuming class identity with omeprazole’s stereoselective R-warfarin story.",
      "uncertainty": "Empty numeric pkEffects by design (negative DDI study). Case reports of INR rise with pantoprazole exist — monitoring remains appropriate.",
      "sources": [
        {
          "label": "Duursema et al. BJCP 1995 (pantoprazole–warfarin lack of effect)",
          "citation": "Duursema L, et al. Lack of effect of pantoprazole on the pharmacodynamics and pharmacokinetics of warfarin. Br J Clin Pharmacol. 1995;39:700-703. PMID 7654493. DOI 10.1111/j.1365-2125.1995.tb05732.x.",
          "url": "https://doi.org/10.1111/j.1365-2125.1995.tb05732.x"
        },
        {
          "label": "Omeprazole contrast (sibling teaching)",
          "citation": "Sutfin 1989 / Unge 1992 — modest R-warfarin ↑ with omeprazole; see warfarin-omeprazole card.",
          "url": "https://doi.org/10.1111/j.1365-2125.1992.tb05656.x"
        },
        {
          "label": "PPI class INR monitoring (label)",
          "citation": "US PPI prescribing information class language: increased INR/PT reported with warfarin; monitor and adjust as needed.",
          "url": "https://dailymed.nlm.nih.gov/dailymed/"
        }
      ],
      "id": "warfarin-pantoprazole"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Bosentan",
      "interactorSlug": "bosentan",
      "synonyms": [
        "Tracleer",
        "endothelin receptor antagonist (ERA)"
      ],
      "mechanisms": [
        "CYP2C9 and CYP3A induction",
        "↓ S- and R-warfarin exposure → potential ↓ INR / under-anticoagulation risk on start"
      ],
      "effectDirection": "↓ exposure / ↓ INR risk (induction)",
      "pkEffects": [
        {
          "parameter": "S-warfarin AUC",
          "change": "−29%",
          "population": "Healthy volunteers",
          "design": "Bosentan 500 mg BID ×6 days with single-dose racemic warfarin (Weber; cited in Tracleer PI)",
          "regimenNotes": "S-warfarin is the more potent enantiomer (CYP2C9 substrate). HV induction magnitude — PAH trial averages may differ.",
          "citation": "Weber C, et al. J Clin Pharmacol. 1999;39:847-854; TRACLEER US PI Clinical Pharmacology",
          "url": "https://doi.org/10.1177/00912709922008380"
        },
        {
          "parameter": "R-warfarin AUC",
          "change": "−38%",
          "population": "Healthy volunteers",
          "design": "Same bosentan–warfarin DDI program",
          "regimenNotes": "R-warfarin (CYP3A substrate) also reduced. PD: reduced PT / factor VII activity in the HV study.",
          "citation": "Weber C, et al. J Clin Pharmacol. 1999;39:847-854; TRACLEER US PI",
          "url": "https://doi.org/10.1177/00912709922008380"
        }
      ],
      "clinicalEffects": [
        {
          "outcome": "INR / warfarin dose (PAH label nuance)",
          "signal": "TRACLEER US PI: coadministration decreased S- and R-warfarin plasma concentrations by 29% and 38%; clinical PAH experience did not show clinically relevant average INR or warfarin-dose changes vs end of studies, and need to change warfarin dose for INR/adverse events was similar to placebo — still intensify INR monitoring when starting, titrating, or stopping bosentan.",
          "citation": "TRACLEER (bosentan) US PI — Warfarin Clinical Pharmacology / Drug Interactions",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/021290s048,209279s015lbl.pdf"
        },
        {
          "outcome": "Case: large warfarin dose increase after bosentan",
          "signal": "Published case: previously stable INR became subtherapeutic after bosentan; warfarin weekly dose rose substantially (≈+64% in one report) before restabilizing — supports individualized monitoring beyond average trial nulls.",
          "citation": "Murphey LM, Hood EH. Ann Pharmacother. 2003;37:1028-1031.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/12841813/"
        }
      ],
      "evidenceGrade": "PK-volunteer",
      "populationCaveats": "PAH patients often already on warfarin; bosentan REMS hepatotoxicity monitoring is separate from INR teaching. Do not import DOAC AUC claims — bosentan×DOAC pair PK not curated here (re-deferred).",
      "practiceInterpretation": "High-yield PAH clinic trap: expect possible **loss of anticoagulant effect** when bosentan starts (induction), then watch for INR rise when bosentan stops. Check INR early after initiation/dose change/discontinuation; adjust warfarin to measured INR — do not apply a fixed empiric % dose hike from the HV AUC alone.",
      "labelGuidance": "TRACLEER PI quantifies S-warfarin −29% / R-warfarin −38% AUC and notes PAH trial INR experience without average clinically relevant change — monitor INR closely at initiation and titration. Coumadin: more frequent monitoring when inducers start/stop.",
      "uncertainty": "HV AUC ↓ vs average PAH-trial INR neutrality — teach both. Exact outpatient dose-multiplication factors vary (case-level). Bosentan×DOAC magnitudes not invented here.",
      "sources": [
        {
          "label": "Weber et al. J Clin Pharmacol 1999",
          "citation": "Weber C, Banken L, Birnboeck H, Schulz R. Effect of the endothelin-receptor antagonist bosentan on the pharmacokinetics and pharmacodynamics of warfarin. J Clin Pharmacol. 1999;39:847-854. DOI 10.1177/00912709922008380.",
          "url": "https://doi.org/10.1177/00912709922008380"
        },
        {
          "label": "TRACLEER US PI — warfarin",
          "citation": "TRACLEER (bosentan) US prescribing information: Warfarin — S-warfarin and R-warfarin plasma concentrations decreased 29% and 38%; PAH clinical experience without clinically relevant average INR/warfarin-dose change; monitor.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/021290s048,209279s015lbl.pdf"
        },
        {
          "label": "Murphey & Hood case (Ann Pharmacother 2003)",
          "citation": "Murphey LM, Hood EH. Bosentan and warfarin interaction. Ann Pharmacother. 2003;37:1028-1031. PMID 12841813.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/12841813/"
        }
      ],
      "id": "warfarin-bosentan"
    },
    {
      "anticoagulant": "Warfarin",
      "interactor": "Erythromycin",
      "interactorSlug": "erythromycin",
      "synonyms": [
        "Ery-Tab",
        "EES",
        "macrolide (erythromycin)"
      ],
      "mechanisms": [
        "CYP3A4 inhibition (R-warfarin pathway; Coumadin Table 2 exemplar)",
        "Possible gut flora / vitamin K effects with antibiotics (class)",
        "↑ INR / bleed risk"
      ],
      "effectDirection": "↑ INR / ↑ bleed risk",
      "pkEffects": [],
      "clinicalEffects": [
        {
          "outcome": "Warfarin clearance reduction (HV PK)",
          "signal": "Bachmann et al.: erythromycin 250 mg QID ×8 days reduced warfarin clearance by about 14% in healthy subjects — directional PK support without inventing a clinical INR%.",
          "citation": "Bachmann K, et al. Pharmacology. 1984;28:171-176.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/6718483/"
        },
        {
          "outcome": "INR / hemorrhage (label + case literature)",
          "signal": "COUMADIN US PI lists erythromycin among CYP3A4 inhibitors; classic case reports describe marked INR potentiation and bleeding when erythromycin is added to stable warfarin — monitor INR early in the course and after completion.",
          "citation": "COUMADIN US PI Table 2 (CYP3A4 inhibitors); Sato et al. and related case literature",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        }
      ],
      "evidenceGrade": "Label/extrapolation",
      "populationCaveats": "Contrast with azithromycin (generally preferred macrolide on warfarin when microbiologically acceptable) and with clarithromycin–warfarin (sibling Biaxin oral-anticoagulant warning card). Illness itself can raise INR.",
      "practiceInterpretation": "Classic antibiotic–INR trap. Prefer non-interacting alternatives when possible; if erythromycin is required, schedule early INR check (often within a few days) and again after the course. Completes the warfarin macrolide teaching set with clarithromycin.",
      "labelGuidance": "Coumadin: erythromycin listed under CYP3A4 inhibitors — closely monitor INR when starting or stopping. Do not invent a fixed INR delta.",
      "uncertainty": "Empty numeric pkEffects for warfarin (INR-centric). Bachmann clearance −14% is HV directional support only — not a patient INR%. Case severity varies widely.",
      "sources": [
        {
          "label": "Coumadin US PI — CYP3A4 inhibitors (erythromycin)",
          "citation": "COUMADIN (warfarin) US prescribing information Table 2: erythromycin listed under CYP3A4 inhibitors; monitor INR when interacting drugs start/stop.",
          "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/009218s118lbl.pdf"
        },
        {
          "label": "Bachmann et al. Pharmacology 1984",
          "citation": "Bachmann K, et al. The effect of erythromycin on the disposition kinetics of warfarin. Pharmacology. 1984;28:171-176. PMID 6718483.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/6718483/"
        },
        {
          "label": "Case / clinical interaction literature",
          "citation": "Sato RI, et al. Warfarin interaction with erythromycin. Arch Intern Med. 1984;144:2413-2414 — and related macrolide–warfarin potentiation reports.",
          "url": "https://pubmed.ncbi.nlm.nih.gov/6508448/"
        },
        {
          "label": "Sibling card — warfarin-clarithromycin",
          "citation": "Live site card warfarin-clarithromycin (Biaxin oral-anticoagulant INR/PT warning) — use for clarithromycin-specific labeling.",
          "url": ""
        }
      ],
      "id": "warfarin-erythromycin"
    }
  ]
};