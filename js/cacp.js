/* Unofficial CACP (NCBAP) exam-prep practice module — educational only */
window.ANTICOAG_CACP = {
  "meta": {
    "title": "CACP exam prep (unofficial)",
    "disclaimer": "Unofficial educational practice only. The National Certification Board for Anticoagulation Providers (NCBAP) does not endorse this or any preparatory materials. These are not real CACP examination questions. Verify all clinical decisions with current guidelines, product labeling, and institutional protocols.",
    "handbookNote": "Domain weights follow the NCBAP CACP Candidate Handbook: I Applied Pathophysiology 25%, II Patient Assessment and Management 35%, III Patient Education 10%, IV Applied Pharmacology 25%, V Operational/Administrative 5%. Handbook PDF: https://ncbap.org/web/documents/CACP_Candidate_Handbook.pdf — NCBAP states it does not endorse prep courses or study guides (https://ncbap.org/web/exam-prep.php).",
    "version": "2026-09-23",
    "domains": [
      {
        "id": "I",
        "name": "Applied Pathophysiology of Thromboembolic Disease",
        "weightPct": 25,
        "goal": "Hemostasis, thrombosis mechanisms, arterial vs venous disease, and risk-factor pathophysiology."
      },
      {
        "id": "II",
        "name": "Patient Assessment and Management",
        "weightPct": 35,
        "goal": "Risk scores, agent selection niches, peri-procedural planning, bleed management, and monitoring decisions."
      },
      {
        "id": "III",
        "name": "Patient Education",
        "weightPct": 10,
        "goal": "Adherence, health literacy, lifestyle counseling, and shared decision communication."
      },
      {
        "id": "IV",
        "name": "Applied Pharmacology of Antithrombotic Agents",
        "weightPct": 25,
        "goal": "Mechanism, PK/PD, DDIs, dosing principles, laboratory monitoring concepts, and reversal agents."
      },
      {
        "id": "V",
        "name": "Operational (Administrative) Procedures",
        "weightPct": 5,
        "goal": "Clinic quality metrics (e.g., TTR), stewardship, POC/CLIA concepts, and program operations."
      }
    ]
  },
  "studyTips": [
    "Study by handbook domain goals, not by memorizing invented statistics.",
    "Know VKA niches cold: mechanical valves, moderate–severe rheumatic MS, high-risk / triple-positive APS.",
    "Separate COMPASS vascular-dose rivaroxaban 2.5 mg BID from full-dose AF/VTE DOAC regimens.",
    "U.S. FXa bleed: supportive care + institutional 4F-PCC — Andexxa withdrawn Dec 22, 2025; idarucizumab for dabigatran.",
    "Use this site’s DDI library for P-gp/CYP3A4 teaching instead of guessing AUC numbers.",
    "HAS-BLED mitigates risk — it does not automatically cancel indicated OAC.",
    "Practice teach-back language for food (rivaroxaban 15–20 mg), missed doses, and NSAID caution.",
    "TTR and POC/CLIA concepts show up in the small but real Domain V slice."
  ],
  "questions": [
    {
      "id": "i-01",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which statement best distinguishes typical arterial from typical venous thrombus formation for anticoagulation teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Arterial thrombi are usually red-clot / fibrin-rich and always respond better to warfarin than DOACs"
        },
        {
          "id": "b",
          "text": "Venous thrombi form mainly under high shear on ruptured plaques; arterial thrombi form in stasis"
        },
        {
          "id": "c",
          "text": "Arterial thrombi are more platelet-rich (white thrombi) under high shear; venous thrombi are more fibrin-/RBC-rich in lower-shear stasis"
        },
        {
          "id": "d",
          "text": "The distinction is obsolete because all thrombi require the same intensity of anticoagulation"
        }
      ],
      "correctId": "c",
      "explanation": "Classic teaching: arterial white thrombi (platelet-rich, high shear) vs venous red thrombi (fibrin/RBC-rich, stasis). This frames why antiplatelet therapy is central in CAD/ACS while anticoagulants dominate venous and AF cardioembolic prevention — with important overlaps (e.g., AF+PCI dual pathway).",
      "teachingPoints": [
        "Virchow’s triad still organizes venous risk (stasis, endothelial injury, hypercoagulability).",
        "AF stroke prevention targets cardioembolic fibrin-rich emboli — hence OAC, not aspirin alone when OAC is indicated."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "AF stroke framework"
        }
      ]
    },
    {
      "id": "i-02",
      "domainId": "I",
      "difficulty": "core",
      "stem": "When warfarin is started without a parenteral bridge in a high-risk VTE setting, why can protein C (and protein S) kinetics create a transient hypercoagulable window?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin immediately blocks thrombin; protein C rises first, causing bleeding"
        },
        {
          "id": "b",
          "text": "Vitamin K–dependent anticoagulant proteins (C/S) can fall before procoagulant factors fully decline, transiently tipping toward thrombosis"
        },
        {
          "id": "c",
          "text": "Warfarin induces antithrombin deficiency within hours"
        },
        {
          "id": "d",
          "text": "Only factor VII rises during initiation; other factors are unchanged"
        }
      ],
      "correctId": "b",
      "explanation": "Protein C (and protein S) are vitamin K–dependent and have relatively short half-lives. Early VKA effect can reduce natural anticoagulants before longer-lived procoagulant factors (notably II) fully fall — a rationale for overlapping parenteral anticoagulation when initiating warfarin for acute VTE.",
      "teachingPoints": [
        "Factor II (prothrombin) has a long half-life — full anticoagulant effect lags INR rise driven partly by factor VII.",
        "DOAC single-drug VTE regimens avoid this VKA initiation physiology."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "i-03",
      "domainId": "I",
      "difficulty": "core",
      "stem": "CHA₂DS₂-VASc is best used in NVAF stroke-prevention counseling to:",
      "choices": [
        {
          "id": "a",
          "text": "Automatically withhold anticoagulation whenever HAS-BLED is ≥3"
        },
        {
          "id": "b",
          "text": "Estimate stroke risk to guide whether OAC is indicated; bleeding scores inform mitigation, not automatic denial of indicated OAC"
        },
        {
          "id": "c",
          "text": "Replace clinical judgment for mechanical valve anticoagulation intensity"
        },
        {
          "id": "d",
          "text": "Select among DOAC agents by assigning each a unique score threshold"
        }
      ],
      "correctId": "b",
      "explanation": "Guideline teaching: use stroke-risk scores to identify who benefits from OAC. HAS-BLED (or similar) flags modifiable bleed risks (BP, NSAIDs, alcohol, labile INR) — it should not automatically cancel indicated anticoagulation.",
      "teachingPoints": [
        "Aspirin is not a stroke-prevention substitute when OAC is indicated (AVERROES-era teaching).",
        "Intermediate CHA₂DS₂-VASc scores need shared decision — see SINGLE-AF nuance on this site."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "averroes",
          "label": "AVERROES"
        },
        {
          "kind": "trial",
          "id": "single-af",
          "label": "SINGLE-AF"
        },
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "AF framework"
        }
      ]
    },
    {
      "id": "i-04",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Wells or revised Geneva scores for suspected DVT/PE primarily help clinicians:",
      "choices": [
        {
          "id": "a",
          "text": "Choose between apixaban and rivaroxaban once VTE is confirmed"
        },
        {
          "id": "b",
          "text": "Estimate pretest probability to guide D-dimer / imaging pathways"
        },
        {
          "id": "c",
          "text": "Determine INR targets for mechanical mitral valves"
        },
        {
          "id": "d",
          "text": "Decide whether Andexxa is required for FXa bleeding in the U.S."
        }
      ],
      "correctId": "b",
      "explanation": "Pretest probability tools (Wells, revised Geneva) structure the diagnostic pathway (D-dimer vs imaging). They are not DOAC-selection tools after confirmed VTE.",
      "teachingPoints": [
        "PESI / sPESI risk-stratify PE severity after diagnosis — different job than Wells.",
        "Hemodynamic instability overrides outpatient DOAC-start thinking."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "intermediate-pe",
          "label": "Intermediate-risk PE pathway"
        },
        {
          "kind": "framework",
          "id": "intermediate-pe-cdt",
          "label": "CDT framework"
        }
      ,
        {
          "kind": "case",
          "id": "intermediate-pe-pert",
          "label": "Case: Intermediate PE / PERT"
        },
        {
          "kind": "nuance",
          "id": "hi-peitho-enrichment",
          "label": "Nuance: HI-PEITHO enrichment"
        }]
    },
    {
      "id": "i-05",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Triple-positive antiphospholipid syndrome (lupus anticoagulant + anticardiolipin + anti-β2GP1) is high-risk for recurrent thrombosis. Best long-term anticoagulant teaching on this site’s APS pathway is:",
      "choices": [
        {
          "id": "a",
          "text": "Any labeled DOAC is preferred over warfarin"
        },
        {
          "id": "b",
          "text": "Prefer dose-adjusted warfarin (VKA); avoid DOAC especially if triple-positive"
        },
        {
          "id": "c",
          "text": "Aspirin monotherapy is guideline-preferred indefinite therapy"
        },
        {
          "id": "d",
          "text": "Low-dose rivaroxaban 2.5 mg BID + aspirin (COMPASS) is the APS standard"
        }
      ],
      "correctId": "b",
      "explanation": "Specialty guidance prefers VKA in high-risk / triple-positive APS. Standard DOAC VTE programs were not dedicated high-risk APS replacements. COMPASS vascular dosing is a different population entirely.",
      "teachingPoints": [
        "TRAPS/RAPS-era literature informs DOAC caution — those trials are not curated cards on this timeline; avoid inventing their event rates.",
        "Confirm persistent antibodies (≥12 weeks) when classifying APS."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "aps",
          "label": "APS pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS triple-positive VKA"
        },
        {
          "kind": "case",
          "id": "aps-triple-positive-doac",
          "label": "Case: Triple-positive APS DOAC request"
        }]
    },
    {
      "id": "i-06",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Cardioembolic stroke risk in AF is primarily driven by thrombus formation in the:",
      "choices": [
        {
          "id": "a",
          "text": "Left atrial appendage (and left atrium) under stagnant flow"
        },
        {
          "id": "b",
          "text": "Coronary arteries exclusively"
        },
        {
          "id": "c",
          "text": "Deep calf veins with paradoxical embolus in every case"
        },
        {
          "id": "d",
          "text": "Carotid bulb atherosclerotic plaque only"
        }
      ],
      "correctId": "a",
      "explanation": "AF-related emboli commonly originate from left atrial appendage thrombus in the setting of atrial stasis — the anatomic rationale for both OAC and LAAO discussions when OAC is prohibitive.",
      "teachingPoints": [
        "LAAO is not first-line for patients who can take long-term OAC.",
        "See CHAMPION-AF / LAAO pathway teaching on this site."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "laao-vs-oac",
          "label": "LAAO vs OAC framework"
        },
        {
          "kind": "trial",
          "id": "champion-af",
          "label": "CHAMPION-AF"
        }
      ]
    },
    {
      "id": "i-07",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which vitamin K–dependent clotting factor has the longest half-life and therefore most influences the delay to full warfarin anticoagulation?",
      "choices": [
        {
          "id": "a",
          "text": "Factor VII"
        },
        {
          "id": "b",
          "text": "Factor IX"
        },
        {
          "id": "c",
          "text": "Factor II (prothrombin)"
        },
        {
          "id": "d",
          "text": "Factor XI"
        }
      ],
      "correctId": "c",
      "explanation": "Factor II has the longest half-life among the vitamin K–dependent procoagulant factors. Early INR changes often reflect factor VII decline; durable anticoagulation requires factor II reduction — another reason overlap matters in acute VTE VKA starts.",
      "teachingPoints": [
        "Factor XI is not vitamin K–dependent (FXI inhibitor pipeline is a separate story).",
        "INR is a composite — interpret initiation kinetics clinically."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "i-08",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Cancer-associated thrombosis risk is multifactorial. Which statement is most accurate for teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Only metastatic pancreatic cancers cause VTE; other cancers cancel DOAC eligibility"
        },
        {
          "id": "b",
          "text": "Tumor biology, surgery, immobility, catheters, and some systemic therapies all contribute — agent choice still individualizes bleed and DDI risk"
        },
        {
          "id": "c",
          "text": "All cancer VTE must use warfarin indefinitely"
        },
        {
          "id": "d",
          "text": "DOACs are contraindicated in every solid tumor"
        }
      ],
      "correctId": "b",
      "explanation": "CAT risk is multifactorial. Caravaggio-era evidence supports DOACs for many patients, with caution for luminal GI/GU bleed risk, thrombocytopenia, and oral anticancer DDIs.",
      "teachingPoints": [
        "API-CAT addresses extended reduced-dose apixaban after initial therapy in selected patients.",
        "Use the cancer VTE pathway and DDI oncology chips."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "cancer-vte",
          "label": "Cancer VTE pathway"
        },
        {
          "kind": "trial",
          "id": "caravaggio",
          "label": "Caravaggio"
        },
        {
          "kind": "trial",
          "id": "api-cat",
          "label": "API-CAT"
        }
      ]
    },
    {
      "id": "i-09",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Heparin-induced thrombocytopenia (HIT) is best conceptualized as:",
      "choices": [
        {
          "id": "a",
          "text": "A simple dose-dependent bleeding toxicity of heparin"
        },
        {
          "id": "b",
          "text": "An immune-mediated prothrombotic disorder (often PF4/heparin antibodies) that can cause thrombosis despite thrombocytopenia"
        },
        {
          "id": "c",
          "text": "Identical to warfarin skin necrosis in every patient"
        },
        {
          "id": "d",
          "text": "Prevented by switching from LMWH to unfractionated heparin"
        }
      ],
      "correctId": "b",
      "explanation": "HIT is immune-mediated and paradoxically prothrombotic. Management uses non-heparin anticoagulants and avoids warfarin until platelets recover — details follow specialty protocols.",
      "teachingPoints": [
        "4Ts score helps pretest probability before laboratory testing.",
        "Do not start warfarin alone in acute HIT."
      ],
      "links": []
    },
    {
      "id": "i-10",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Pulmonary embolism severity assessment (e.g., PESI / RV strain / biomarkers) matters because:",
      "choices": [
        {
          "id": "a",
          "text": "All PE should receive systemic thrombolysis on diagnosis"
        },
        {
          "id": "b",
          "text": "Shock / high-risk PE needs reperfusion pathways, whereas most intermediate-risk PE still defaults to anticoagulation — CDT only in enriched phenotypes"
        },
        {
          "id": "c",
          "text": "Severity scores replace the need for anticoagulation"
        },
        {
          "id": "d",
          "text": "Outpatient DOAC is mandatory even in hypotensive PE"
        }
      ],
      "correctId": "b",
      "explanation": "Risk stratification separates massive/high-risk PE (reperfusion) from intermediate-risk care where anticoagulation is the default and HI-PEITHO-style enrichment informs selective CDT.",
      "teachingPoints": [
        "Do not market CDT for every intermediate-risk PE.",
        "See HI-PEITHO NNT teaching only for the enriched trial composite."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "intermediate-pe",
          "label": "Intermediate PE pathway"
        },
        {
          "kind": "trial",
          "id": "hi-peitho",
          "label": "HI-PEITHO"
        }
      ,
        {
          "kind": "framework",
          "id": "intermediate-pe-cdt",
          "label": "Framework: Intermediate PE / CDT"
        },
        {
          "kind": "case",
          "id": "intermediate-pe-pert",
          "label": "Case: Intermediate PE / PERT"
        },
        {
          "kind": "nuance",
          "id": "hi-peitho-enrichment",
          "label": "Nuance: HI-PEITHO enrichment"
        }]
    },
    {
      "id": "i-11",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Rheumatic moderate–severe mitral stenosis with AF is grouped with mechanical valves as a warfarin niche primarily because:",
      "choices": [
        {
          "id": "a",
          "text": "DOAC landmark AF trials excluded this population; INVICTUS-era teaching supports VKA over rivaroxaban in rheumatic valvular AF"
        },
        {
          "id": "b",
          "text": "DOACs are more effective than warfarin in rheumatic MS"
        },
        {
          "id": "c",
          "text": "Aspirin alone is preferred over any OAC"
        },
        {
          "id": "d",
          "text": "CHA₂DS₂-VASc does not apply so no anticoagulation is needed"
        }
      ],
      "correctId": "a",
      "explanation": "Pivotal DOAC NVAF trials excluded moderate–severe rheumatic MS. INVICTUS informs VKA preference in rheumatic valvular AF — see the trial card on this site.",
      "teachingPoints": [
        "“Nonvalvular” AF language exists because of these exclusions.",
        "Cross-link the mechanical valve pathway for prosthesis cases."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "invictus",
          "label": "INVICTUS"
        },
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        }
      ]
    },
    {
      "id": "i-12",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which best describes the role of tissue factor (TF) in initiating coagulation in vivo?",
      "choices": [
        {
          "id": "a",
          "text": "TF activates the contact pathway exclusively via factor XII"
        },
        {
          "id": "b",
          "text": "Exposed TF complexes with factor VIIa to initiate the extrinsic pathway, amplifying thrombin generation"
        },
        {
          "id": "c",
          "text": "TF is the primary target of idarucizumab"
        },
        {
          "id": "d",
          "text": "TF deficiency causes heparin resistance"
        }
      ],
      "correctId": "b",
      "explanation": "TF–VIIa initiates extrinsic pathway thrombin generation after vascular injury. Contact pathway (XII) is more relevant to some device/surface thrombosis and FXI-inhibitor rationale — not TF biology.",
      "teachingPoints": [
        "DOACs target factor Xa or thrombin downstream of initiation.",
        "Warfarin reduces multiple vitamin K–dependent factors including VII."
      ],
      "links": []
    },
    {
      "id": "ii-01",
      "domainId": "II",
      "difficulty": "core",
      "stem": "For eligible nonvalvular AF, major guidelines generally prefer:",
      "choices": [
        {
          "id": "a",
          "text": "Dose-adjusted warfarin over any DOAC"
        },
        {
          "id": "b",
          "text": "A labeled DOAC over warfarin when the patient is DOAC-eligible"
        },
        {
          "id": "c",
          "text": "Aspirin 325 mg daily as first-line stroke prevention"
        },
        {
          "id": "d",
          "text": "No antithrombotic therapy if HAS-BLED ≥2"
        }
      ],
      "correctId": "b",
      "explanation": "ACC/AHA/ESC-era teaching prefers DOAC over VKA in eligible NVAF. Warfarin remains appropriate for DOAC niches (mechanical valves, mod–severe MS, many triple-positive APS) or when DOAC access/eligibility fails.",
      "teachingPoints": [
        "Verify renal dosing and DDIs before declaring “eligible.”",
        "FRAIL-AF cautions against auto-switching stable frail VKA patients to DOAC."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        },
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        },
        {
          "kind": "trial",
          "id": "frail-af",
          "label": "FRAIL-AF"
        }
      ]
    },
    {
      "id": "ii-02",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient has a mechanical mitral valve. Which anticoagulant strategy is appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban 5 mg BID"
        },
        {
          "id": "b",
          "text": "Rivaroxaban 20 mg daily with food"
        },
        {
          "id": "c",
          "text": "Dose-adjusted warfarin to guideline INR for valve type/position; DOACs contraindicated"
        },
        {
          "id": "d",
          "text": "Dabigatran 150 mg BID based on RE-LY"
        }
      ],
      "correctId": "c",
      "explanation": "Mechanical valves are VKA territory. DOAC AF/VTE trials excluded them; RE-ALIGN-era teaching (not a card on this site) reinforced dabigatran harm in mechanical valves. Target INR by position/thrombogenicity per guideline tables.",
      "teachingPoints": [
        "BRIDGE (AF without valves) does not justify “never bridge” for mechanical mitral valves.",
        "On-X lower-INR protocols remain warfarin-based specialties."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "mechanical-valve",
          "label": "Mechanical valve pathway"
        },
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE (AF contrast)"
        }
      ,
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        },
        {
          "kind": "case",
          "id": "mechanical-avr-doac-request",
          "label": "Case: Mechanical AVR DOAC request"
        }]
    },
    {
      "id": "ii-03",
      "domainId": "II",
      "difficulty": "core",
      "stem": "In acute PE with hypotension and organ hypoperfusion, the immediate treatment priority is:",
      "choices": [
        {
          "id": "a",
          "text": "Start outpatient rivaroxaban 15 mg BID without parenteral therapy"
        },
        {
          "id": "b",
          "text": "Stabilization and institutional high-risk PE reperfusion / advanced therapy pathway — not oral DOAC alone"
        },
        {
          "id": "c",
          "text": "COMPASS rivaroxaban 2.5 mg BID + aspirin"
        },
        {
          "id": "d",
          "text": "Watchful waiting without anticoagulation"
        }
      ],
      "correctId": "b",
      "explanation": "High-risk/massive PE is a reperfusion and critical-care pathway. Oral DOAC monotherapy is for eligible stable patients after appropriate triage.",
      "teachingPoints": [
        "Link intermediate-risk PE pathway for CDT enrichment questions.",
        "Anticoagulation remains foundational once bleeding risk allows."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        },
        {
          "kind": "pathway",
          "id": "intermediate-pe",
          "label": "Intermediate PE pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "intermediate-pe-cdt",
          "label": "Framework: Intermediate PE / CDT"
        },
        {
          "kind": "case",
          "id": "intermediate-pe-pert",
          "label": "Case: Intermediate PE / PERT"
        },
        {
          "kind": "nuance",
          "id": "hi-peitho-enrichment",
          "label": "Nuance: HI-PEITHO enrichment"
        }]
    },
    {
      "id": "ii-04",
      "domainId": "II",
      "difficulty": "core",
      "stem": "COBRRA informs shared decision between apixaban and rivaroxaban for eligible acute VTE primarily by showing:",
      "choices": [
        {
          "id": "a",
          "text": "Rivaroxaban eliminated all bleeding vs apixaban"
        },
        {
          "id": "b",
          "text": "Clinically relevant bleeding was lower with apixaban than rivaroxaban when both fit — see site NNT teaching from published absolute rates"
        },
        {
          "id": "c",
          "text": "Neither agent treats PE"
        },
        {
          "id": "d",
          "text": "Warfarin was superior to both for bleeding"
        }
      ],
      "correctId": "b",
      "explanation": "COBRRA found less clinically relevant bleeding with apixaban vs rivaroxaban (3.3% vs 7.1%). This site reports NNT ≈26 from that ARR — use it for counseling when both agents otherwise fit.",
      "teachingPoints": [
        "Both remain guideline options; logistics and once-daily preference still matter.",
        "Open the COBRRA trial card for absolute rates."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "cobrra",
          "label": "COBRRA"
        },
        {
          "kind": "case",
          "id": "vte-doac-choice",
          "label": "Case: apixaban vs rivaroxaban"
        }
      ]
    },
    {
      "id": "ii-05",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "FRAIL-AF’s practice takeaway for a frail older adult stable on warfarin with acceptable TTR is:",
      "choices": [
        {
          "id": "a",
          "text": "Automatically switch to any DOAC to reduce bleeding"
        },
        {
          "id": "b",
          "text": "Do not auto-switch to DOAC solely for frailty — switching increased bleeding in FRAIL-AF without a clear efficacy upside in that design"
        },
        {
          "id": "c",
          "text": "Stop all anticoagulation permanently"
        },
        {
          "id": "d",
          "text": "Replace warfarin with aspirin 81 mg"
        }
      ],
      "correctId": "b",
      "explanation": "FRAIL-AF reported higher major/CRNM bleeding after switch to DOAC (15.3% vs 9.4%). Stable VKA with good TTR can be reasonable; ELDERCARE-AF addresses a different question (carefully selected low-dose edoxaban initiation).",
      "teachingPoints": [
        "Unstable INR or access barriers may still favor DOAC — document why.",
        "See frail framework on this site."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "frail-af",
          "label": "FRAIL-AF"
        },
        {
          "kind": "trial",
          "id": "eldercare-af",
          "label": "ELDERCARE-AF"
        },
        {
          "kind": "case",
          "id": "frail-vka-switch",
          "label": "Case: frail VKA switch"
        },
        {
          "kind": "framework",
          "id": "frail-elderly-vka-doac",
          "label": "Frail framework"
        }
      ]
    },
    {
      "id": "ii-06",
      "domainId": "II",
      "difficulty": "core",
      "stem": "After uncomplicated initial anticoagulation for a surgically provoked proximal DVT with resolved risk, the usual duration teaching is:",
      "choices": [
        {
          "id": "a",
          "text": "Lifelong full-dose DOAC for everyone"
        },
        {
          "id": "b",
          "text": "About 3 months, then stop if provocation resolved and bleed/VTE balance favors discontinuation"
        },
        {
          "id": "c",
          "text": "Indefinite COMPASS 2.5 mg rivaroxaban + aspirin"
        },
        {
          "id": "d",
          "text": "Five days of heparin only"
        }
      ],
      "correctId": "b",
      "explanation": "Major transient provocation with resolved risk often stops at ~3 months. Unprovoked or persistent risk prompts extension discussions (low-dose DOAC > aspirin when extending with a drug).",
      "teachingPoints": [
        "EINSTEIN-CHOICE: rivaroxaban doses beat aspirin for extension.",
        "Cancer persistence → cancer VTE extended pathway (API-CAT)."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "extended-vte",
          "label": "Extended VTE pathway"
        },
        {
          "kind": "trial",
          "id": "einstein-choice",
          "label": "EINSTEIN-CHOICE"
        }
      ]
    },
    {
      "id": "ii-07",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Default AUGUSTUS-era AF + PCI antithrombotic template is:",
      "choices": [
        {
          "id": "a",
          "text": "Lifelong triple therapy with VKA + aspirin + prasugrel"
        },
        {
          "id": "b",
          "text": "DOAC (often apixaban) + P2Y12 (usually clopidogrel); aspirin only briefly peri-PCI when feasible"
        },
        {
          "id": "c",
          "text": "Stop OAC for 12 months to protect the stent"
        },
        {
          "id": "d",
          "text": "Aspirin + ticagrelor without any OAC if CHA₂DS₂-VASc ≥4"
        }
      ],
      "correctId": "b",
      "explanation": "AUGUSTUS: apixaban beat VKA for bleeding; aspirin increased bleeding vs placebo on P2Y12 + OAC. Dual pathway is the Monday-morning template; triple therapy is a short bridge.",
      "teachingPoints": [
        "Prefer clopidogrel over potent P2Y12 in most OAC combinations.",
        "AFIRE: remote from PCI, DOAC monotherapy can beat long-term combination."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-pci",
          "label": "AF+PCI pathway"
        },
        {
          "kind": "trial",
          "id": "augustus",
          "label": "AUGUSTUS"
        },
        {
          "kind": "case",
          "id": "af-pci-week2",
          "label": "Case: still on triple?"
        }
      ,
        {
          "kind": "framework",
          "id": "af-pci-dual-pathway",
          "label": "Framework: AF + PCI dual pathway"
        },
        {
          "kind": "nuance",
          "id": "dual-pathway-duration",
          "label": "Nuance: Dual-pathway duration"
        }]
    },
    {
      "id": "ii-08",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "ENRICH-AF’s main counseling implication for restarting OAC after ICH in AF is:",
      "choices": [
        {
          "id": "a",
          "text": "Routine restart always reduces stroke/SE significantly — start for everyone at day 7"
        },
        {
          "id": "b",
          "text": "Do not assume net benefit from routine restart; individualize by ICH location/timing and cardioembolic risk (ASPIRE pending)"
        },
        {
          "id": "c",
          "text": "Aspirin replaces OAC whenever ICH has occurred"
        },
        {
          "id": "d",
          "text": "Only warfarin may be restarted; DOACs are absolutely forbidden forever"
        }
      ],
      "correctId": "b",
      "explanation": "ENRICH-AF did not show a significant stroke/SE reduction with an edoxaban restart strategy (HR 0.88, NS on the site card). Lobar/CAA phenotypes need especial caution; LAAO may enter the conversation.",
      "teachingPoints": [
        "Named owner and documented rationale if restarting.",
        "See post-ICH pathway and enrich-vs-aspire nuance."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "enrich-af",
          "label": "ENRICH-AF"
        },
        {
          "kind": "pathway",
          "id": "post-ich",
          "label": "Post-ICH pathway"
        },
        {
          "kind": "nuance",
          "id": "enrich-vs-aspire",
          "label": "ENRICH vs ASPIRE"
        }
      ,
        {
          "kind": "framework",
          "id": "post-ich-anticoagulation",
          "label": "Framework: Post-ICH"
        },
        {
          "kind": "case",
          "id": "post-ich-af",
          "label": "Case: Post-ICH AF"
        }]
    },
    {
      "id": "ii-09",
      "domainId": "II",
      "difficulty": "core",
      "stem": "U.S. practice after Andexxa withdrawal (Dec 22, 2025) for life-threatening apixaban/rivaroxaban bleeding is best summarized as:",
      "choices": [
        {
          "id": "a",
          "text": "Continue to order Andexxa as first-line specific reversal"
        },
        {
          "id": "b",
          "text": "Supportive care + institutional 4F-PCC pathways; do not write Andexxa in U.S. order sets"
        },
        {
          "id": "c",
          "text": "Idarucizumab reverses all DOACs"
        },
        {
          "id": "d",
          "text": "Vitamin K alone reverses FXa inhibitors within minutes"
        }
      ],
      "correctId": "b",
      "explanation": "AstraZeneca voluntarily withdrew the Andexxa BLA and ended U.S. sales Dec 22, 2025 after FDA concluded risks outweighed benefits; FXa major bleed teaching is supportive care + institutional/off-label 4F-PCC per protocol (not an FDA-labeled FXa antidote). Idarucizumab remains dabigatran-specific. ANNEXA-I TE figures contextualize why.",
      "teachingPoints": [
        "Geographic nuance: Ondexxya may persist outside the U.S.",
        "Open #/reversal and the U.S. DOAC bleed pathway."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. DOAC bleed pathway"
        },
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        },
        {
          "kind": "trial",
          "id": "annexa-i",
          "label": "ANNEXA-I"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "ii-10",
      "domainId": "II",
      "difficulty": "core",
      "stem": "BRIDGE trial implications for interrupting warfarin in typical nonvalvular AF without mechanical valves:",
      "choices": [
        {
          "id": "a",
          "text": "Routine LMWH bridging reduces stroke and should be universal"
        },
        {
          "id": "b",
          "text": "Routine bridging increased bleeding without thromboembolic benefit — avoid reflexive bridging in this population"
        },
        {
          "id": "c",
          "text": "BRIDGE proved mechanical mitral valves never need bridging"
        },
        {
          "id": "d",
          "text": "BRIDGE mandates stopping aspirin 30 days before colonoscopy in all AF patients"
        }
      ],
      "correctId": "b",
      "explanation": "BRIDGE: no routine bridging for typical AF warfarin interruptions — more bleeding, no TE gain. Do not extrapolate that conclusion unchanged to mechanical valves or other high thrombotic-risk VKA indications.",
      "teachingPoints": [
        "Risk-stratify procedure bleed risk vs thrombosis risk.",
        "See mechanical valve pathway for prosthesis bridging teaching."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE"
        },
        {
          "kind": "pathway",
          "id": "mechanical-valve",
          "label": "Mechanical valve pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        }]
    },
    {
      "id": "ii-11",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Pregnancy-associated VTE anticoagulation of choice in usual practice is:",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban 10 mg BID then 5 mg BID"
        },
        {
          "id": "b",
          "text": "Therapeutic LMWH; avoid DOACs in pregnancy"
        },
        {
          "id": "c",
          "text": "Warfarin throughout all trimesters without counseling"
        },
        {
          "id": "d",
          "text": "Rivaroxaban 2.5 mg BID + aspirin"
        }
      ],
      "correctId": "b",
      "explanation": "DOACs are not used in pregnancy in usual practice. Therapeutic LMWH is standard; warfarin has embryopathy risk in critical windows and is generally avoided for VTE/AF pregnancy pathways.",
      "teachingPoints": [
        "Coordinate with maternal-fetal medicine.",
        "Postpartum transition needs a deliberate plan."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "ii-12",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "COMPASS regimen (rivaroxaban 2.5 mg BID + aspirin) is appropriate to consider in:",
      "choices": [
        {
          "id": "a",
          "text": "Any patient with AF as a substitute for full-dose OAC"
        },
        {
          "id": "b",
          "text": "Selected stable CAD/PAD without an indication for full-dose OAC, when ischemic benefit outweighs bleeding"
        },
        {
          "id": "c",
          "text": "Triple-positive APS as first-line"
        },
        {
          "id": "d",
          "text": "Mechanical aortic valves after On-X implant"
        }
      ],
      "correctId": "b",
      "explanation": "COMPASS is a vascular-dose strategy for selected chronic atherosclerosis — not AF stroke prevention, not APS, not mechanical valves. Screen out patients who already need full-dose OAC.",
      "teachingPoints": [
        "VOYAGER PAD informs post lower-extremity revascularization vascular-dose use.",
        "Bleeding and BP control matter for net benefit."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "compass-vascular",
          "label": "COMPASS pathway"
        },
        {
          "kind": "trial",
          "id": "compass",
          "label": "COMPASS"
        },
        {
          "kind": "trial",
          "id": "voyager-pad",
          "label": "VOYAGER PAD"
        }
      ,
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "Framework: COMPASS vascular dose"
        },
        {
          "kind": "case",
          "id": "compass-vs-af-dose-trap",
          "label": "Case: COMPASS vs AF dose trap"
        }]
    },
    {
      "id": "ii-13",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Before starting a DOAC for NVAF, which assessment is essential?",
      "choices": [
        {
          "id": "a",
          "text": "Only CHA₂DS₂-VASc — renal function is optional"
        },
        {
          "id": "b",
          "text": "Stroke indication, bleed risk mitigation, renal function for labeled dosing, and clinically important DDIs"
        },
        {
          "id": "c",
          "text": "Mandatory thrombophilia panel in every patient"
        },
        {
          "id": "d",
          "text": "Coronary CT angiography in every patient"
        }
      ],
      "correctId": "b",
      "explanation": "Indication + renal dosing + DDI screen + shared bleed-risk planning are the core pre-start bundle. Under-dosing “for safety” without meeting label criteria is a common error.",
      "teachingPoints": [
        "Use the DDI library for P-gp/CYP3A4 checks.",
        "Case: AF with CKD and prior GI bleed on this site."
      ],
      "links": [
        {
          "kind": "case",
          "id": "af-renal-bleed",
          "label": "Case: AF + CKD"
        },
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        }
      ]
    },
    {
      "id": "ii-14",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Edoxaban for acute VTE in the pivotal design requires:",
      "choices": [
        {
          "id": "a",
          "text": "Immediate oral start at diagnosis without any heparin"
        },
        {
          "id": "b",
          "text": "Parenteral heparin lead-in (≥5 days in the program) before edoxaban"
        },
        {
          "id": "c",
          "text": "Mandatory thrombolysis first"
        },
        {
          "id": "d",
          "text": "Combination with prasugrel indefinitely"
        }
      ],
      "correctId": "b",
      "explanation": "Hokusai-VTE used heparin lead-in then edoxaban — unlike single-drug apixaban/rivaroxaban initiation regimens.",
      "teachingPoints": [
        "Match the regimen to the workflow the evidence supports.",
        "Cancer: Hokusai VTE Cancer similarly used LMWH lead-in."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "hokusai-vte",
          "label": "Hokusai-VTE"
        },
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "ii-15",
      "domainId": "II",
      "difficulty": "core",
      "stem": "For cancer-associated VTE with high luminal GI bleed risk or severe thrombocytopenia, the safer default teaching is often:",
      "choices": [
        {
          "id": "a",
          "text": "Force oral DOAC regardless of platelets"
        },
        {
          "id": "b",
          "text": "Prefer therapeutic LMWH (or specialty-selected plan) until bleed/platelet issues improve"
        },
        {
          "id": "c",
          "text": "Stop all anticoagulation permanently on diagnosis of cancer"
        },
        {
          "id": "d",
          "text": "Use COMPASS 2.5 mg rivaroxaban alone"
        }
      ],
      "correctId": "b",
      "explanation": "Caravaggio-era DOACs help many CAT patients, but luminal GI/GU disease, severe thrombocytopenia, and major DDIs push toward LMWH or specialty plans.",
      "teachingPoints": [
        "CATCH-era LMWH remains relevant when oral therapy is unsafe.",
        "Reassess at cancer transitions."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "cancer-vte",
          "label": "Cancer VTE pathway"
        },
        {
          "kind": "trial",
          "id": "catch",
          "label": "CATCH"
        },
        {
          "kind": "case",
          "id": "cancer-stepdown",
          "label": "Case: API-CAT step-down"
        }
      ]
    },
    {
      "id": "ii-16",
      "domainId": "II",
      "difficulty": "core",
      "stem": "When extending anticoagulation after unprovoked VTE and choosing drug therapy, aspirin compared with low-dose DOAC is:",
      "choices": [
        {
          "id": "a",
          "text": "Superior for preventing recurrent VTE"
        },
        {
          "id": "b",
          "text": "Inferior to low-dose DOAC for recurrent VTE prevention (EINSTEIN-CHOICE teaching)"
        },
        {
          "id": "c",
          "text": "Identical to placebo in AMPLIFY-EXT"
        },
        {
          "id": "d",
          "text": "Required before any DOAC extension"
        }
      ],
      "correctId": "b",
      "explanation": "If the decision is to extend with a medication, low-dose DOAC outperforms aspirin for preventing recurrence. If bleed risk precludes anticoagulant extension, stopping may be cleaner than aspirin-as-false-reassurance.",
      "teachingPoints": [
        "AMPLIFY-EXT supports apixaban 2.5 mg BID vs placebo.",
        "Reassess annually."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "einstein-choice",
          "label": "EINSTEIN-CHOICE"
        },
        {
          "kind": "trial",
          "id": "amplify-ext",
          "label": "AMPLIFY-EXT"
        },
        {
          "kind": "pathway",
          "id": "extended-vte",
          "label": "Extended VTE pathway"
        }
      ]
    },
    {
      "id": "ii-17",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient on dabigatran presents with life-threatening ICH. Specific reversal agent of choice (when indicated) is:",
      "choices": [
        {
          "id": "a",
          "text": "Andexanet alfa"
        },
        {
          "id": "b",
          "text": "Idarucizumab"
        },
        {
          "id": "c",
          "text": "Vitamin K 10 mg IV alone"
        },
        {
          "id": "d",
          "text": "Protamine 1 mg per mg dabigatran"
        }
      ],
      "correctId": "b",
      "explanation": "Idarucizumab is the specific dabigatran reversal agent (RE-VERSE AD). Andexanet targeted FXa inhibitors and is withdrawn in the U.S.; vitamin K does not reverse dabigatran; protamine reverses heparin, not dabigatran.",
      "teachingPoints": [
        "Still run ABCs and source control.",
        "Plan restart timing with a named owner after hemostasis."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "re-verse-ad",
          "label": "RE-VERSE AD"
        },
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. DOAC bleed pathway"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "ii-18",
      "domainId": "II",
      "difficulty": "core",
      "stem": "HAS-BLED ≥3 in a patient with CHA₂DS₂-VASc 5 and NVAF should prompt the clinician to:",
      "choices": [
        {
          "id": "a",
          "text": "Automatically withhold OAC forever"
        },
        {
          "id": "b",
          "text": "Address modifiable bleed risks and proceed with shared decision about indicated OAC"
        },
        {
          "id": "c",
          "text": "Switch to aspirin as equivalent stroke prevention"
        },
        {
          "id": "d",
          "text": "Use prophylactic-dose heparin only"
        }
      ],
      "correctId": "b",
      "explanation": "High bleed scores flag modifiable factors (hypertension, NSAIDs/alcohol, labile INR, anemia) — they are not an automatic OAC cancellation when stroke risk is high.",
      "teachingPoints": [
        "Document the mitigation plan.",
        "LAAO enters if long-term OAC is truly prohibitive."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "AF framework"
        },
        {
          "kind": "framework",
          "id": "laao-vs-oac",
          "label": "LAAO framework"
        }
      ]
    },
    {
      "id": "iii-01",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Which counseling point is essential when dispensing rivaroxaban 20 mg for AF or VTE maintenance?",
      "choices": [
        {
          "id": "a",
          "text": "Take on an empty stomach at noon only"
        },
        {
          "id": "b",
          "text": "Take 15–20 mg doses with food to support absorption"
        },
        {
          "id": "c",
          "text": "Crush and mix with grapefruit juice daily"
        },
        {
          "id": "d",
          "text": "Skip doses whenever an NSAID is used"
        }
      ],
      "correctId": "b",
      "explanation": "Labeled counseling: rivaroxaban 15–20 mg should be taken with food. Missing this detail is a common adherence/efficacy error.",
      "teachingPoints": [
        "Also counsel bleed precautions and what to do for missed doses per label.",
        "Avoid teaching patients to self-hold for minor reasons without a contact plan."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "rocket-af",
          "label": "ROCKET AF"
        },
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "iii-02",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Teach-back after starting anticoagulation is valuable primarily because it:",
      "choices": [
        {
          "id": "a",
          "text": "Replaces the need for written instructions"
        },
        {
          "id": "b",
          "text": "Confirms the patient can explain indication, dosing schedule, bleed warning signs, and whom to call"
        },
        {
          "id": "c",
          "text": "Is required only for warfarin, never DOACs"
        },
        {
          "id": "d",
          "text": "Documents that CHA₂DS₂-VASc was calculated by the patient"
        }
      ],
      "correctId": "b",
      "explanation": "Teach-back improves confirmation of understanding across health-literacy levels — indication, how to take, what bleeding looks like, drug interactions (NSAIDs), and emergency contacts.",
      "teachingPoints": [
        "Use plain language; avoid jargon like “thromboembolism” without translation.",
        "Offer translated materials when needed."
      ],
      "links": []
    },
    {
      "id": "iii-03",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient asks whether they can use over-the-counter ibuprofen freely while on apixaban. Best education response:",
      "choices": [
        {
          "id": "a",
          "text": "NSAIDs have no interaction with DOACs — use liberally"
        },
        {
          "id": "b",
          "text": "NSAIDs add pharmacodynamic bleed risk; prefer acetaminophen when possible and ask before regular NSAID use"
        },
        {
          "id": "c",
          "text": "Ibuprofen reverses apixaban and is encouraged"
        },
        {
          "id": "d",
          "text": "Only naproxen is safe; ibuprofen is not an NSAID"
        }
      ],
      "correctId": "b",
      "explanation": "NSAID + anticoagulant combinations raise bleeding risk via PD (and mucosal injury). Counsel patients to ask before sustained OTC NSAID use; check the DDI library for teaching cards.",
      "teachingPoints": [
        "Same caution for dual antiplatelet stacking without indication.",
        "Alcohol binge counseling belongs in the same visit."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-nsaids",
          "label": "Apixaban–NSAIDs"
        }
      ]
    },
    {
      "id": "iii-04",
      "domainId": "III",
      "difficulty": "core",
      "stem": "For warfarin education, which statement about dietary vitamin K is most accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Eliminate all green vegetables forever"
        },
        {
          "id": "b",
          "text": "Aim for consistency in vitamin K intake rather than absolute avoidance; report major diet changes"
        },
        {
          "id": "c",
          "text": "Vitamin K foods only matter for DOACs"
        },
        {
          "id": "d",
          "text": "Spinach reverses DOACs within 30 minutes"
        }
      ],
      "correctId": "b",
      "explanation": "Warfarin education emphasizes consistent vitamin K intake, not lifelong vegetable avoidance. DOACs are not meaningfully affected by dietary vitamin K the way VKAs are.",
      "teachingPoints": [
        "Alcohol binge and new antibiotics still warrant contact.",
        "TTR improves when patients understand “consistency.”"
      ],
      "links": []
    },
    {
      "id": "iii-05",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "When discussing missed DOAC doses, the safest general education principle is:",
      "choices": [
        {
          "id": "a",
          "text": "Double the next dose for any missed dose regardless of agent or timing"
        },
        {
          "id": "b",
          "text": "Follow the specific product’s missed-dose instructions; when unsure, call the clinic rather than improvising a double dose"
        },
        {
          "id": "c",
          "text": "Missed doses never matter for AF stroke prevention"
        },
        {
          "id": "d",
          "text": "Replace every missed DOAC dose with aspirin 325 mg"
        }
      ],
      "correctId": "b",
      "explanation": "Missed-dose rules differ by agent and time window. Teach patients to use the label/clinic instructions and to call rather than double-dose by guesswork.",
      "teachingPoints": [
        "Adherence aids (pillboxes, alarms) are part of the prescription.",
        "Short half-lives mean missed DOAC doses lose coverage faster than missed warfarin doses in some scenarios."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        }
      ]
    },
    {
      "id": "iv-01",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Dabigatran’s anticoagulant mechanism is best described as:",
      "choices": [
        {
          "id": "a",
          "text": "Direct factor Xa inhibition"
        },
        {
          "id": "b",
          "text": "Direct thrombin (factor IIa) inhibition"
        },
        {
          "id": "c",
          "text": "Vitamin K epoxide reductase inhibition"
        },
        {
          "id": "d",
          "text": "Irreversible COX-1 inhibition"
        }
      ],
      "correctId": "b",
      "explanation": "Dabigatran is a direct thrombin inhibitor. Apixaban/rivaroxaban/edoxaban inhibit factor Xa. Warfarin inhibits VKOR; aspirin inhibits COX-1.",
      "teachingPoints": [
        "Mechanism explains why idarucizumab is dabigatran-specific.",
        "Renal clearance is especially important for dabigatran labeling."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "re-ly",
          "label": "RE-LY"
        },
        {
          "kind": "trial",
          "id": "re-verse-ad",
          "label": "RE-VERSE AD"
        }
      ]
    },
    {
      "id": "iv-02",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Apixaban, rivaroxaban, and edoxaban share which primary target?",
      "choices": [
        {
          "id": "a",
          "text": "Factor IIa (thrombin)"
        },
        {
          "id": "b",
          "text": "Factor Xa"
        },
        {
          "id": "c",
          "text": "Factor XIII"
        },
        {
          "id": "d",
          "text": "Plasminogen"
        }
      ],
      "correctId": "b",
      "explanation": "The oral FXa inhibitors block factor Xa. That shared target also framed why andexanet was developed — and why U.S. FXa bleed care changed after Andexxa withdrawal.",
      "teachingPoints": [
        "Food effect differs (notable for rivaroxaban 15–20 mg).",
        "Dose-reduction rules are agent-specific."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        },
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. DOAC bleed pathway"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "iv-03",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Strong combined P-gp and CYP3A4 inducers (e.g., rifampin, carbamazepine, St John’s wort) with DOACs generally raise concern for:",
      "choices": [
        {
          "id": "a",
          "text": "Increased DOAC exposure and bleeding only"
        },
        {
          "id": "b",
          "text": "Reduced DOAC exposure and loss of efficacy / thrombosis risk — often avoid combinations"
        },
        {
          "id": "c",
          "text": "No interaction because DOACs are renally cleared only"
        },
        {
          "id": "d",
          "text": "Mandatory doubling of every DOAC dose without specialty input"
        }
      ],
      "correctId": "b",
      "explanation": "Inducers can lower DOAC levels (see site DDI cards with published AUC decreases where available). Teaching frame: thrombosis risk, often avoid — opposite of strong-inhibitor bleed risk.",
      "teachingPoints": [
        "Use the DDI library rather than memory for magnitudes.",
        "Warfarin inducers lower INR — different monitoring story."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-rifampin",
          "label": "Apixaban–rifampin"
        },
        {
          "kind": "ddi",
          "id": "apixaban-carbamazepine",
          "label": "Apixaban–carbamazepine"
        }
      ]
    },
    {
      "id": "iv-04",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "INR is calibrated using ISI. Which statement is correct?",
      "choices": [
        {
          "id": "a",
          "text": "INR = patient PT / mean normal PT without any reagent adjustment"
        },
        {
          "id": "b",
          "text": "INR standardizes PT across thromboplastin reagents using the International Sensitivity Index (ISI)"
        },
        {
          "id": "c",
          "text": "ISI is only used for aPTT heparin monitoring"
        },
        {
          "id": "d",
          "text": "INR replaces the need for knowing the clinical indication’s target range"
        }
      ],
      "correctId": "b",
      "explanation": "INR = (PT_patient / PT_mean normal)^ISI. ISI accounts for thromboplastin sensitivity so targets can be shared across labs.",
      "teachingPoints": [
        "Point-of-care INR still needs quality systems (see Domain V).",
        "DOACs are not monitored with INR for dosing."
      ],
      "links": []
    },
    {
      "id": "iv-05",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "aPTT is most traditionally used to monitor which anticoagulant?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban therapeutic dosing"
        },
        {
          "id": "b",
          "text": "Unfractionated heparin (with institution-specific therapeutic ranges)"
        },
        {
          "id": "c",
          "text": "Fondaparinux level monitoring exclusively"
        },
        {
          "id": "d",
          "text": "Aspirin response"
        }
      ],
      "correctId": "b",
      "explanation": "UFH is commonly monitored with aPTT (or anti-Xa). DOAC dosing is not guided by aPTT targets; LMWH often uses anti-Xa in selected populations.",
      "teachingPoints": [
        "Know your lab’s UFH therapeutic aPTT range mapped to anti-Xa.",
        "Lupus anticoagulant can confound aPTT."
      ],
      "links": []
    },
    {
      "id": "iv-06",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Anti-Xa assays calibrated to LMWH are primarily used to:",
      "choices": [
        {
          "id": "a",
          "text": "Titrate aspirin"
        },
        {
          "id": "b",
          "text": "Assess LMWH exposure in selected patients (e.g., pregnancy, extremes of weight, renal impairment) per protocol"
        },
        {
          "id": "c",
          "text": "Diagnose HIT antibodies"
        },
        {
          "id": "d",
          "text": "Replace CHA₂DS₂-VASc"
        }
      ],
      "correctId": "b",
      "explanation": "LMWH anti-Xa levels guide dosing in special populations when protocols call for them — not routine for every LMWH patient.",
      "teachingPoints": [
        "Peak timing matters for interpretation.",
        "DOAC-calibrated anti-Xa exists in some labs but is not a routine dosing tool like INR for warfarin."
      ],
      "links": []
    },
    {
      "id": "iv-07",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Warfarin major bleed / ICH emergency reversal bundle typically includes:",
      "choices": [
        {
          "id": "a",
          "text": "Idarucizumab alone"
        },
        {
          "id": "b",
          "text": "4F-PCC plus IV vitamin K per institutional protocol"
        },
        {
          "id": "c",
          "text": "Andexxa as first-line in the U.S. after Dec 2025"
        },
        {
          "id": "d",
          "text": "Oral vitamin K only, waiting 24 hours before PCC"
        }
      ],
      "correctId": "b",
      "explanation": "VKA life-threatening bleed: rapid factor replacement with 4F-PCC plus vitamin K to sustain reversal. FFP is second-line when PCC unavailable. Andexxa is not a warfarin reversal agent and is U.S.-withdrawn.",
      "teachingPoints": [
        "Hold warfarin; investigate source.",
        "Restart decisions differ for ICH vs GI bleed."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        },
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "Bleed pathway"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "iv-08",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which statement about DOAC renal dosing is safest for exam teaching on this site?",
      "choices": [
        {
          "id": "a",
          "text": "Invent a single CrCl cutoff that applies identically to all four DOACs"
        },
        {
          "id": "b",
          "text": "Use agent-specific labeled dose-reduction criteria (and Cockcroft–Gault where labels expect it); do not under-dose without meeting criteria"
        },
        {
          "id": "c",
          "text": "Renal function never affects dabigatran"
        },
        {
          "id": "d",
          "text": "If CrCl is unknown, double the dose"
        }
      ],
      "correctId": "b",
      "explanation": "Labels differ by agent (apixaban’s age/weight/Cr criteria vs rivaroxaban/edoxaban/dabigatran renal cutoffs). Prefer label language over memorized universal numbers; this site avoids inventing cutoffs.",
      "teachingPoints": [
        "Severe CKD may push to warfarin or specialty options.",
        "Recheck CrCl when weight or creatinine changes."
      ],
      "links": [
        {
          "kind": "case",
          "id": "af-renal-bleed",
          "label": "Case: AF + CKD"
        },
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        }
      ]
    },
    {
      "id": "iv-09",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Pharmacodynamically, combining a therapeutic DOAC with chronic NSAID therapy mainly increases:",
      "choices": [
        {
          "id": "a",
          "text": "DOAC hepatic metabolism via CYP2D6 induction"
        },
        {
          "id": "b",
          "text": "Bleeding risk without necessarily changing DOAC plasma levels"
        },
        {
          "id": "c",
          "text": "Vitamin K absorption"
        },
        {
          "id": "d",
          "text": "Platelet count via bone marrow stimulation"
        }
      ],
      "correctId": "b",
      "explanation": "NSAID bleed risk with anticoagulants is largely PD (platelet function + mucosal injury), distinct from PK inhibitor/inducer stories. Site DDI cards separate PD stacks from PK exposure.",
      "teachingPoints": [
        "Same frame for SSRI/SNRI PD bleed caution without forcing fake universal HRs.",
        "Ask about OTC analgesics at every visit."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-nsaids",
          "label": "Apixaban–NSAIDs"
        }
      ]
    },
    {
      "id": "iv-10",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Apixaban acute VTE dosing per AMPLIFY teaching starts with:",
      "choices": [
        {
          "id": "a",
          "text": "2.5 mg BID from day 1"
        },
        {
          "id": "b",
          "text": "10 mg BID for 7 days, then 5 mg BID"
        },
        {
          "id": "c",
          "text": "20 mg once daily with food indefinitely"
        },
        {
          "id": "d",
          "text": "Parenteral heparin for 5 days then 2.5 mg BID"
        }
      ],
      "correctId": "b",
      "explanation": "AMPLIFY: apixaban 10 mg BID × 7 days → 5 mg BID. Extended prevention may later use 2.5 mg BID (AMPLIFY-EXT) — different phase.",
      "teachingPoints": [
        "Do not start 2.5 mg BID for acute VTE treatment.",
        "COBRRA informs bleed comparison vs rivaroxaban when choosing."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "amplify",
          "label": "AMPLIFY"
        },
        {
          "kind": "trial",
          "id": "amplify-ext",
          "label": "AMPLIFY-EXT"
        }
      ]
    },
    {
      "id": "iv-11",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Rivaroxaban acute VTE load (EINSTEIN) is commonly taught as:",
      "choices": [
        {
          "id": "a",
          "text": "15 mg BID with food for 21 days, then 20 mg daily with food"
        },
        {
          "id": "b",
          "text": "5 mg BID lifelong without load"
        },
        {
          "id": "c",
          "text": "2.5 mg BID + aspirin from day 1 for DVT"
        },
        {
          "id": "d",
          "text": "150 mg BID after heparin lead-in"
        }
      ],
      "correctId": "a",
      "explanation": "EINSTEIN DVT/PE: 15 mg BID × 21 days → 20 mg daily, with food for these doses. COMPASS 2.5 mg BID is a different indication.",
      "teachingPoints": [
        "Food counseling is part of the prescription.",
        "Edoxaban still needs heparin lead-in in its pivotal VTE design."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "einstein-dvt",
          "label": "EINSTEIN-DVT"
        },
        {
          "kind": "trial",
          "id": "einstein-pe",
          "label": "EINSTEIN-PE"
        }
      ]
    },
    {
      "id": "iv-12",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Strong P-gp/CYP3A4 inhibitors (e.g., certain azoles, ritonavir-containing regimens) with DOACs generally raise concern for:",
      "choices": [
        {
          "id": "a",
          "text": "Decreased DOAC levels and clotting only"
        },
        {
          "id": "b",
          "text": "Increased DOAC exposure and bleeding risk — avoid or adjust per label/DDI guidance"
        },
        {
          "id": "c",
          "text": "Mandatory conversion to aspirin"
        },
        {
          "id": "d",
          "text": "No relevance because all DOACs lack hepatic metabolism"
        }
      ],
      "correctId": "b",
      "explanation": "Inhibitors can raise DOAC exposure. Site DDI cards cite published AUC changes when available (e.g., azoles, Paxlovid, boosters) and label-extrapolation when not — never invent numbers.",
      "teachingPoints": [
        "Apixaban has specific PI/azole dose-reduction rules via label analogs — verify current labeling.",
        "Separate PD bleed stacks from PK inhibitors conceptually."
      ],
      "links": []
    },
    {
      "id": "iv-13",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "LMWH (e.g., enoxaparin) anticoagulant effect is primarily mediated by:",
      "choices": [
        {
          "id": "a",
          "text": "Direct oral factor Xa active-site occupation like apixaban"
        },
        {
          "id": "b",
          "text": "Antithrombin-dependent inhibition, with relatively greater anti-Xa than anti-IIa activity vs UFH"
        },
        {
          "id": "c",
          "text": "Irreversible platelet COX-1 blockade"
        },
        {
          "id": "d",
          "text": "Vitamin K epoxide reductase blockade"
        }
      ],
      "correctId": "b",
      "explanation": "LMWH potentiates antithrombin; chain-length distribution yields higher anti-Xa:anti-IIa ratios than UFH. It is not a DOAC and not a VKA.",
      "teachingPoints": [
        "Renal clearance matters for accumulation.",
        "Protamine only partially reverses LMWH."
      ],
      "links": []
    },
    {
      "id": "v-01",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Time in Therapeutic Range (TTR) for warfarin clinics is primarily used as:",
      "choices": [
        {
          "id": "a",
          "text": "A DOAC peak-level quality metric"
        },
        {
          "id": "b",
          "text": "A quality measure of how often INR values stay within the target range — stewardship for VKA programs"
        },
        {
          "id": "c",
          "text": "A replacement for CHA₂DS₂-VASc"
        },
        {
          "id": "d",
          "text": "An FDA requirement to use Andexxa"
        }
      ],
      "correctId": "b",
      "explanation": "TTR quantifies INR control quality for warfarin-treated populations. Poor TTR may prompt adherence interventions, more frequent monitoring, or reconsideration of DOAC eligibility.",
      "teachingPoints": [
        "Rosendaal linear interpolation is a common TTR method.",
        "Clinic-level TTR supports program quality improvement."
      ],
      "links": []
    },
    {
      "id": "v-02",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "Point-of-care INR testing in an anticoagulation clinic conceptually requires:",
      "choices": [
        {
          "id": "a",
          "text": "No quality controls because POC devices are always accurate"
        },
        {
          "id": "b",
          "text": "A quality system consistent with applicable CLIA/waived-test rules, training, and correlation policies with the lab"
        },
        {
          "id": "c",
          "text": "Daily arterial blood gases on every patient"
        },
        {
          "id": "d",
          "text": "Abandoning INR targets entirely"
        }
      ],
      "correctId": "b",
      "explanation": "POC INR is convenient but still a regulated testing activity — training, QC, and policies for when to verify with a laboratory INR matter for patient safety.",
      "teachingPoints": [
        "Know which tests are waived vs higher complexity in your setting.",
        "Document device maintenance and staff competency."
      ],
      "links": []
    },
    {
      "id": "v-03",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Anticoagulation stewardship programs commonly aim to:",
      "choices": [
        {
          "id": "a",
          "text": "Maximize triple therapy duration after every PCI"
        },
        {
          "id": "b",
          "text": "Improve evidence-aligned agent selection, dosing, peri-procedural plans, and bleed/reversal readiness across the institution"
        },
        {
          "id": "c",
          "text": "Eliminate all VKA use regardless of indication"
        },
        {
          "id": "d",
          "text": "Replace shared decision-making with automatic EHR pop-ups alone"
        }
      ],
      "correctId": "b",
      "explanation": "Stewardship aligns prescribing with evidence (DOAC niches vs VKA niches, dual pathway after PCI, U.S. FXa reversal reality) and builds reliable operational pathways.",
      "teachingPoints": [
        "Track metrics that matter (appropriate agent, TTR, protocol deviations).",
        "Education materials — including this unofficial CACP prep — support teams but are not a substitute for primary guidelines."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-pci",
          "label": "AF+PCI pathway"
        },
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. bleed pathway"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "i-13",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Post-thrombotic syndrome after proximal DVT is best described as:",
      "choices": [
        {
          "id": "a",
          "text": "An acute PE complication requiring immediate thrombolysis in all cases"
        },
        {
          "id": "b",
          "text": "A chronic sequela of venous obstruction/reflux causing pain, edema, and skin changes that prevention of recurrent DVT and early care may help reduce"
        },
        {
          "id": "c",
          "text": "A synonym for HIT type II"
        },
        {
          "id": "d",
          "text": "Proof that DOACs are contraindicated after any DVT"
        }
      ],
      "correctId": "b",
      "explanation": "PTS is a long-term venous insufficiency syndrome after DVT. Anticoagulation that prevents recurrence and appropriate acute care may lower risk; it is not an acute PE thrombolysis indication by itself.",
      "teachingPoints": [
        "Compression and symptomatic care are adjuncts — follow guideline/local protocols.",
        "Iliofemoral DVT carries higher PTS risk than distal DVT."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "i-14",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Valve thrombosis risk teaching (qualitative) is most accurate when stated as:",
      "choices": [
        {
          "id": "a",
          "text": "All bioprosthetic and mechanical valves have identical thrombosis risk regardless of position"
        },
        {
          "id": "b",
          "text": "Mechanical valves generally carry higher thrombosis risk than bioprostheses, and mitral (and right-sided) positions are often higher risk than aortic among mechanical valves — informing INR intensity and bridging judgments"
        },
        {
          "id": "c",
          "text": "Aortic mechanical valves never require anticoagulation"
        },
        {
          "id": "d",
          "text": "DOACs are preferred for all mechanical mitral valves after PROACT"
        }
      ],
      "correctId": "b",
      "explanation": "Classic teaching: mechanical > bioprosthetic thrombosis risk; mitral/tricuspid mechanical positions tend to be higher risk than aortic. This underpins VKA-only niches and position-specific INR targets — not DOAC use for mechanical mitral valves.",
      "teachingPoints": [
        "Position and valve type inform intensity and peri-procedural risk, not a substitute for labeled INR goals.",
        "See mechanical-valve pathway on this site."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "mechanical-valve",
          "label": "Mechanical valve pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        },
        {
          "kind": "case",
          "id": "mechanical-avr-doac-request",
          "label": "Case: Mechanical AVR DOAC request"
        }]
    },
    {
      "id": "i-15",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Stroke versus ICH presentation triage for an anticoagulated patient hinges first on:",
      "choices": [
        {
          "id": "a",
          "text": "Assuming every sudden neurologic deficit is ischemic stroke and giving tPA without imaging"
        },
        {
          "id": "b",
          "text": "Rapid neuroimaging and clinical assessment to distinguish ischemic stroke from ICH (or other ICH mimics) before reperfusion or anticoagulation decisions"
        },
        {
          "id": "c",
          "text": "Stopping all antiplatelets forever after any TIA"
        },
        {
          "id": "d",
          "text": "Using CHA₂DS₂-VASc alone to decide CT vs MRI"
        }
      ],
      "correctId": "b",
      "explanation": "Sudden focal deficits on OAC require urgent imaging and stroke-team pathways. You cannot safely thrombolyse or continue/restart OAC without knowing hemorrhage versus ischemia.",
      "teachingPoints": [
        "ICH and ischemic stroke can look similar clinically — imaging is decisive.",
        "Post-ICH restart decisions are separate from acute triage (ENRICH-AF nuance on this site)."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "post-ich",
          "label": "Post-ICH pathway"
        },
        {
          "kind": "trial",
          "id": "enrich-af",
          "label": "ENRICH-AF"
        }
      ,
        {
          "kind": "framework",
          "id": "post-ich-anticoagulation",
          "label": "Framework: Post-ICH"
        },
        {
          "kind": "case",
          "id": "post-ich-af",
          "label": "Case: Post-ICH AF"
        },
        {
          "kind": "nuance",
          "id": "enrich-vs-aspire",
          "label": "Nuance: ENRICH vs ASPIRE"
        }]
    },
    {
      "id": "i-16",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Virchow’s triad organizes venous thrombosis risk as:",
      "choices": [
        {
          "id": "a",
          "text": "Hypertension, hyperlipidemia, and hyperglycemia only"
        },
        {
          "id": "b",
          "text": "Stasis, endothelial injury, and hypercoagulability"
        },
        {
          "id": "c",
          "text": "Platelet count, WBC, and hematocrit exclusively"
        },
        {
          "id": "d",
          "text": "INR, aPTT, and anti-Xa alone"
        }
      ],
      "correctId": "b",
      "explanation": "Classic pathophysiology frame: venous thrombi arise when flow slows, endothelium is injured, and/or blood is hypercoagulable (cancer, APS, estrogen, inherited thrombophilia, etc.).",
      "teachingPoints": [
        "AF cardioembolism is a different anatomic story (LAA stasis) but still fibrin-rich.",
        "Use the triad to teach risk-factor counseling, not to replace imaging."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "AF framework"
        }
      ]
    },
    {
      "id": "i-17",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "In HIT (heparin-induced thrombocytopenia) recognition, which clinical pattern should raise strongest suspicion?",
      "choices": [
        {
          "id": "a",
          "text": "Platelet rise after starting aspirin"
        },
        {
          "id": "b",
          "text": "Otherwise unexplained platelet fall (often ≥50% from peak) typically 5–10 days after heparin exposure — or sooner if recent prior heparin — with or without thrombosis"
        },
        {
          "id": "c",
          "text": "Isolated INR prolongation without platelet change"
        },
        {
          "id": "d",
          "text": "Mild eosinophilia after DOAC start"
        }
      ],
      "correctId": "b",
      "explanation": "HIT is an immune, platelet-activating disorder timed to heparin exposure. Suspect with characteristic timing of thrombocytopenia ± thrombosis (HITT); stop heparin and use a non-heparin anticoagulant per institutional HIT pathways — do not wait for confirmatory assays alone if suspicion is high.",
      "teachingPoints": [
        "4Ts score structures pretest probability.",
        "LMWH has lower HIT risk than UFH but is not risk-free."
      ],
      "links": []
    },
    {
      "id": "i-18",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Arterial atherothrombosis teaching correctly emphasizes that:",
      "choices": [
        {
          "id": "a",
          "text": "Antiplatelet therapy is central because plaques and high shear favor platelet-rich thrombi"
        },
        {
          "id": "b",
          "text": "Warfarin alone is first-line for every ACS patient instead of antiplatelets"
        },
        {
          "id": "c",
          "text": "Venous stasis is the main driver of coronary plaque rupture"
        },
        {
          "id": "d",
          "text": "DOACs replace P2Y12 inhibitors after all stents"
        }
      ],
      "correctId": "a",
      "explanation": "Arterial coronary/cerebrovascular events are platelet-driven under high shear; dual antiplatelet therapy dominates ACS/PCI pathways. Anticoagulants have niche roles (AF overlap, COMPASS vascular dose) but do not erase antiplatelet primacy in pure atherothrombosis.",
      "teachingPoints": [
        "AF+PCI is a dual-pathway problem — see AUGUSTUS-era teaching.",
        "COMPASS vascular rivaroxaban 2.5 mg BID + aspirin is not full-dose AF OAC."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-pci",
          "label": "AF+PCI pathway"
        },
        {
          "kind": "trial",
          "id": "compass",
          "label": "COMPASS"
        }
      ]
    },
    {
      "id": "i-19",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Protein C and protein S relative to warfarin initiation are important because:",
      "choices": [
        {
          "id": "a",
          "text": "They are not vitamin K–dependent, so warfarin never affects them"
        },
        {
          "id": "b",
          "text": "They are vitamin K–dependent natural anticoagulants with relatively short half-lives, so early VKA effect can lower them before longer-lived procoagulant factors fully decline"
        },
        {
          "id": "c",
          "text": "They rise faster than factor II, causing immediate bleeding only"
        },
        {
          "id": "d",
          "text": "They only matter for DOAC loading doses"
        }
      ],
      "correctId": "b",
      "explanation": "Short-half-life vitamin K–dependent anticoagulants (C/S) can fall early during VKA start, contributing to a transient prothrombotic window — a rationale for overlapping parenteral anticoagulation in acute VTE initiation.",
      "teachingPoints": [
        "Factor II’s long half-life means full anticoagulation lags early INR rises driven partly by factor VII.",
        "Warfarin-induced skin necrosis risk is linked to this physiology in susceptible patients."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ]
    },
    {
      "id": "i-20",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Extended anticoagulation after VTE is more often considered when:",
      "choices": [
        {
          "id": "a",
          "text": "The index event was clearly major surgery–provoked and the provocation has fully resolved with no ongoing risk factors"
        },
        {
          "id": "b",
          "text": "The event was unprovoked, or provoked by persistent/recurrent risk (e.g., active cancer, ongoing estrogen if continued, strong thrombophilia in context) — balancing bleed risk"
        },
        {
          "id": "c",
          "text": "Every distal DVT regardless of symptoms"
        },
        {
          "id": "d",
          "text": "The patient prefers lifelong aspirin over any anticoagulant discussion"
        }
      ],
      "correctId": "b",
      "explanation": "Extension decisions weigh recurrence risk (unprovoked or persistent risks) against bleeding. Transient major provoking factors often allow stop after a finite course once resolved.",
      "teachingPoints": [
        "Shared decision and bleed-risk mitigation matter as much as the label 'unprovoked.'",
        "Low-dose extended DOAC options appear in EINSTEIN CHOICE / AMPLIFY-EXT teaching on this site."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "extended-vte",
          "label": "Extended VTE pathway"
        },
        {
          "kind": "trial",
          "id": "einstein-choice",
          "label": "EINSTEIN CHOICE"
        }
      ]
    },
    {
      "id": "i-21",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Left atrial appendage thrombus in AF is favored by which pathophysiology?",
      "choices": [
        {
          "id": "a",
          "text": "High-shear plaque rupture inside the LAA as the sole mechanism"
        },
        {
          "id": "b",
          "text": "Stasis within the appendage in the setting of AF, promoting fibrin-rich thrombus that can embolize"
        },
        {
          "id": "c",
          "text": "Isolated factor XII deficiency"
        },
        {
          "id": "d",
          "text": "Vitamin K excess from leafy greens"
        }
      ],
      "correctId": "b",
      "explanation": "AF impairs coordinated atrial contraction; LAA stasis promotes cardioembolic, fibrin-rich thrombi — the rationale for OAC rather than aspirin alone when stroke risk warrants anticoagulation.",
      "teachingPoints": [
        "LAAO devices are an alternative pathway in selected patients — see site framework.",
        "Rhythm control does not automatically remove OAC indication based on CHA₂DS₂-VASc."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "AF stroke framework"
        },
        {
          "kind": "framework",
          "id": "laao-vs-oac",
          "label": "LAAO vs OAC"
        }
      ]
    },
    {
      "id": "i-22",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Cancer-associated VTE pathophysiology teaching should include that:",
      "choices": [
        {
          "id": "a",
          "text": "Only pancreatic cancer causes VTE; other cancers are irrelevant"
        },
        {
          "id": "b",
          "text": "Tumor biology, immobility, surgery, catheters, and some systemic therapies combine to raise VTE risk — agent choice also weighs bleed risk (e.g., GI luminal disease)"
        },
        {
          "id": "c",
          "text": "All CAT must be treated with aspirin monotherapy"
        },
        {
          "id": "d",
          "text": "DOACs are universally safer than LMWH in every GI cancer without exception"
        }
      ],
      "correctId": "b",
      "explanation": "CAT risk is multifactorial. DOACs are options for many patients, but GI/GU luminal cancers and other bleed risks may favor LMWH — see cancer-VTE pathway and trial cards (CARAVAGGIO, Hokusai VTE Cancer, CATCH, API-CAT).",
      "teachingPoints": [
        "Thrombocytopenia and drug–drug interactions with oral anticancer agents also reshape choices.",
        "Do not invent CAT incidence percentages on exams — reason qualitatively."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "cancer-vte",
          "label": "Cancer VTE pathway"
        },
        {
          "kind": "framework",
          "id": "cancer-vte",
          "label": "Cancer VTE framework"
        }
      ]
    },
    {
      "id": "i-23",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Deep vein thrombosis that embolizes to the pulmonary arteries produces PE. Which statement is most accurate?",
      "choices": [
        {
          "id": "a",
          "text": "All PE originates from upper-extremity superficial veins only"
        },
        {
          "id": "b",
          "text": "Lower-extremity proximal DVT is a common PE source; PE severity then depends on clot burden and right-ventricular response"
        },
        {
          "id": "c",
          "text": "PE never occurs without visible leg swelling"
        },
        {
          "id": "d",
          "text": "Wells score replaces CT pulmonary angiography in unstable patients"
        }
      ],
      "correctId": "b",
      "explanation": "Proximal lower-extremity (and pelvic) veins are classic PE sources. After diagnosis, severity tools (PESI, RV imaging/biomarkers) guide intensity of care — distinct from pretest Wells use.",
      "teachingPoints": [
        "Hemodynamic instability overrides outpatient pathways.",
        "Upper-extremity DVT can embolize but is a smaller share of PE overall."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "intermediate-pe",
          "label": "Intermediate PE pathway"
        },
        {
          "kind": "framework",
          "id": "intermediate-pe-cdt",
          "label": "Intermediate PE framework"
        }
      ,
        {
          "kind": "case",
          "id": "intermediate-pe-pert",
          "label": "Case: Intermediate PE / PERT"
        },
        {
          "kind": "nuance",
          "id": "hi-peitho-enrichment",
          "label": "Nuance: HI-PEITHO enrichment"
        }]
    },
    {
      "id": "i-24",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Antiphospholipid syndrome (APS) arterial events differ from typical venous VTE teaching in that:",
      "choices": [
        {
          "id": "a",
          "text": "Arterial APS events are always treated with DOAC monotherapy as first-line worldwide"
        },
        {
          "id": "b",
          "text": "High-risk / triple-positive APS often involves arterial as well as venous thrombosis and is a warfarin niche where DOACs have failed in trials for many high-risk phenotypes"
        },
        {
          "id": "c",
          "text": "APS only causes superficial thrombophlebitis"
        },
        {
          "id": "d",
          "text": "INR targets are irrelevant once lupus anticoagulant is positive"
        }
      ],
      "correctId": "b",
      "explanation": "APS can cause arterial and venous thrombosis. Triple-positive / high-risk APS is a VKA preference niche on this site; DOACs are generally avoided in that phenotype based on trial signals (e.g., TRAPS-era teaching).",
      "teachingPoints": [
        "Confirm persistent antibodies per diagnostic criteria — do not label APS on a single test.",
        "See APS pathway."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "aps",
          "label": "APS pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS triple-positive VKA"
        }]
    },
    {
      "id": "i-25",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Secondary hemostasis (coagulation cascade) ultimately leads to:",
      "choices": [
        {
          "id": "a",
          "text": "Only platelet adhesion without fibrin"
        },
        {
          "id": "b",
          "text": "Thrombin generation and conversion of fibrinogen to fibrin that stabilizes the platelet plug"
        },
        {
          "id": "c",
          "text": "Exclusive dependence on vitamin C"
        },
        {
          "id": "d",
          "text": "Irreversible COX-1 blockade as the sole pathway"
        }
      ],
      "correctId": "b",
      "explanation": "Primary hemostasis (platelets) forms the plug; secondary hemostasis generates thrombin and fibrin. Anticoagulants target coagulation proteases; antiplatelets target platelet pathways — complementary teaching for mixed arterial/venous disease.",
      "teachingPoints": [
        "TF–VIIa initiates the extrinsic pathway in vivo.",
        "Common pathway factors Xa and IIa (thrombin) are major drug targets."
      ],
      "links": []
    },
    {
      "id": "i-26",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Obesity-related VTE risk teaching for anticoagulation clinics should emphasize:",
      "choices": [
        {
          "id": "a",
          "text": "Fixed invented BMI cutoffs that always double DOAC dose"
        },
        {
          "id": "b",
          "text": "Obesity can increase VTE risk and may complicate dosing/PK assumptions — use product labeling, institutional guidance, and specialty input rather than invented weight cutoffs"
        },
        {
          "id": "c",
          "text": "Obese patients never need prophylaxis after surgery"
        },
        {
          "id": "d",
          "text": "Only arterial disease occurs in obesity; VTE risk is unchanged"
        }
      ],
      "correctId": "b",
      "explanation": "Obesity is a VTE risk factor and a dosing caution zone (especially extremes of weight). Avoid fabricating BMI thresholds or AUC numbers; defer to labels and local protocols.",
      "teachingPoints": [
        "Bariatric surgery can alter oral absorption — plan monitoring/agent choice carefully.",
        "Document weight and renal function together when selecting regimens."
      ],
      "links": []
    },
    {
      "id": "ii-19",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Patient self-testing (PST) / patient self-management of INR is most appropriate when:",
      "choices": [
        {
          "id": "a",
          "text": "Any patient who owns a smartphone, without training"
        },
        {
          "id": "b",
          "text": "Selected patients who can demonstrate device competence, adhere to reporting/quality plans, and have clinic oversight policies in place"
        },
        {
          "id": "c",
          "text": "Only patients with mechanical valves are banned from PST by definition"
        },
        {
          "id": "d",
          "text": "PST replaces the need for any target INR range"
        }
      ],
      "correctId": "b",
      "explanation": "PST can improve convenience and sometimes TTR in capable patients, but it requires training, QC mindset, and a covering anticoagulation service — not an unsupervised gadget.",
      "teachingPoints": [
        "Know local coverage/billing and device correlation policies.",
        "Unreliable reporters should stay on clinic-based testing."
      ],
      "links": []
    },
    {
      "id": "ii-20",
      "domainId": "II",
      "difficulty": "core",
      "stem": "For breastfeeding patients needing anticoagulation, usual practice teaching favors:",
      "choices": [
        {
          "id": "a",
          "text": "Any DOAC freely because none enter milk"
        },
        {
          "id": "b",
          "text": "Agents with established lactation safety profiles such as warfarin or LMWH in usual counseling — avoid DOACs unless specialist guidance says otherwise"
        },
        {
          "id": "c",
          "text": "High-dose aspirin as the only option"
        },
        {
          "id": "d",
          "text": "Stopping all anticoagulation for 6 months postpartum regardless of indication"
        }
      ],
      "correctId": "b",
      "explanation": "Warfarin and LMWH are traditional lactation-compatible choices in teaching algorithms; DOACs generally lack adequate breastfeeding safety data and are typically avoided.",
      "teachingPoints": [
        "Pregnancy itself usually favors LMWH over warfarin (embryopathy/fetopathy concerns) and over DOACs.",
        "Coordinate with obstetrics/hematology for peripartum plans."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway (special populations)"
        }
      ]
    },
    {
      "id": "ii-21",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Pediatric anticoagulation (high-level exam teaching) is best summarized as:",
      "choices": [
        {
          "id": "a",
          "text": "Adult DOAC doses scaled only by age in years without weight or specialist protocols"
        },
        {
          "id": "b",
          "text": "Weight-based regimens, age-specific physiology, and pediatric hematology protocols dominate — do not extrapolate adult AF DOAC schedules casually"
        },
        {
          "id": "c",
          "text": "Children never need anticoagulation"
        },
        {
          "id": "d",
          "text": "Only mechanical valves occur in pediatrics; VTE never does"
        }
      ],
      "correctId": "b",
      "explanation": "Pediatric VTE and cardiac indications require specialist pathways, weight-based dosing, and formulations suited to children. Adult trial doses are not plug-and-play.",
      "teachingPoints": [
        "VKAs still used in some pediatric cardiac niches with careful INR systems.",
        "When in doubt, escalate to pediatric anticoagulation expertise."
      ],
      "links": []
    },
    {
      "id": "ii-22",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Dental procedures and anticoagulation: risk-stratification teaching favors:",
      "choices": [
        {
          "id": "a",
          "text": "Automatically stopping all OAC 7 days before any cleaning"
        },
        {
          "id": "b",
          "text": "Most low-bleed-risk dental procedures can proceed without interrupting therapeutic anticoagulation, using local hemostatic measures; higher-risk oral surgery needs individualized plans"
        },
        {
          "id": "c",
          "text": "Bridging with enoxaparin for every filling in AF"
        },
        {
          "id": "d",
          "text": "Switching every patient to Andexxa peri-procedurally"
        }
      ],
      "correctId": "b",
      "explanation": "Many dental procedures are low bleed risk; uninterrupted OAC plus local measures is often preferred over reflexive holds that add thrombotic risk. Complex extractions need coordinated plans — not universal bridging.",
      "teachingPoints": [
        "BRIDGE cautioned against routine bridging in typical NVAF.",
        "Communicate the exact procedure bleed risk to the anticoagulation clinic."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE"
        }
      ]
    },
    {
      "id": "ii-23",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Peri-procedural bridging risk stratification should primarily weigh:",
      "choices": [
        {
          "id": "a",
          "text": "Only the dentist’s preference for a dry field"
        },
        {
          "id": "b",
          "text": "Thrombotic risk of holding anticoagulation (valve type/position, recent VTE/stroke, CHADS-type risk) versus bleed risk of the procedure and of bridging itself"
        },
        {
          "id": "c",
          "text": "Always bridging because bridging never causes bleeding"
        },
        {
          "id": "d",
          "text": "HAS-BLED alone without considering the procedure"
        }
      ],
      "correctId": "b",
      "explanation": "Bridging is not default. High thrombotic-risk phenotypes (e.g., mechanical mitral valves, very recent VTE) may still need careful parenteral cover; many NVAF patients do not benefit from routine bridging (BRIDGE).",
      "teachingPoints": [
        "Procedure bleed risk categories guide hold duration more than ritual.",
        "Document the plan in transitions of care."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE"
        },
        {
          "kind": "pathway",
          "id": "mechanical-valve",
          "label": "Mechanical valve pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        }]
    },
    {
      "id": "ii-24",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Chromogenic factor X activity is sometimes used in warfarin-treated patients when:",
      "choices": [
        {
          "id": "a",
          "text": "Replacing all INRs in every outpatient forever"
        },
        {
          "id": "b",
          "text": "INR may be unreliable (e.g., certain lupus anticoagulant / baseline PT effects) and a complementary VKA-effect measure is needed per lab protocols"
        },
        {
          "id": "c",
          "text": "Monitoring apixaban peaks exclusively"
        },
        {
          "id": "d",
          "text": "Diagnosing HIT"
        }
      ],
      "correctId": "b",
      "explanation": "Chromogenic factor X can help assess VKA effect when INR interpretation is confounded. It is not a DOAC assay and not a HIT test.",
      "teachingPoints": [
        "Know your lab’s reference ranges and when to order.",
        "Still coordinate with specialty/lab medicine for APS on warfarin."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "aps",
          "label": "APS pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS triple-positive VKA"
        }]
    },
    {
      "id": "ii-25",
      "domainId": "II",
      "difficulty": "core",
      "stem": "POC INR versus laboratory INR teaching should include that:",
      "choices": [
        {
          "id": "a",
          "text": "Results are always identical to three decimal places"
        },
        {
          "id": "b",
          "text": "POC and lab INR can disagree — clinics need correlation policies, especially at extremes of INR or when clinical decisions are high-stakes"
        },
        {
          "id": "c",
          "text": "Lab INR is obsolete and must never be used"
        },
        {
          "id": "d",
          "text": "Only arterial blood can be used for INR"
        }
      ],
      "correctId": "b",
      "explanation": "Method differences matter. Verify unexpected or critical POC values with a laboratory INR per policy before major dose changes or procedures.",
      "teachingPoints": [
        "Hematocrit extremes and some interferences can affect POC devices.",
        "Train staff on when to repeat or send out."
      ],
      "links": []
    },
    {
      "id": "ii-26",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "AF + PCI dual-pathway duration concepts (AUGUSTUS-era) emphasize:",
      "choices": [
        {
          "id": "a",
          "text": "Indefinite triple therapy (OAC+DAPT) for all patients to minimize stent thrombosis at any bleed cost"
        },
        {
          "id": "b",
          "text": "Default early drop of aspirin after a short peri-PCI period, continuing OAC + P2Y12, then later de-escalation — balancing ischemic vs bleed risk"
        },
        {
          "id": "c",
          "text": "Stopping OAC for 12 months whenever a stent is placed"
        },
        {
          "id": "d",
          "text": "Replacing P2Y12 inhibitors with vitamin K foods"
        }
      ],
      "correctId": "b",
      "explanation": "Modern AF+PCI teaching shortens triple therapy, favors OAC+P2Y12 as the dual pathway backbone, and individualizes durations. Exact day counts follow guidelines/labels — do not invent trial HRs here.",
      "teachingPoints": [
        "Choose OAC dose appropriate for AF stroke prevention, not COMPASS vascular dose.",
        "See AF+PCI pathway and AUGUSTUS."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-pci",
          "label": "AF+PCI pathway"
        },
        {
          "kind": "trial",
          "id": "augustus",
          "label": "AUGUSTUS"
        },
        {
          "kind": "case",
          "id": "af-pci-week2",
          "label": "AF+PCI case"
        }
      ,
        {
          "kind": "framework",
          "id": "af-pci-dual-pathway",
          "label": "Framework: AF + PCI dual pathway"
        },
        {
          "kind": "nuance",
          "id": "dual-pathway-duration",
          "label": "Nuance: Dual-pathway duration"
        }]
    },
    {
      "id": "ii-27",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Cancer VTE with intact GI/GU luminal lesions: preferred teaching default when bleed risk is high is often:",
      "choices": [
        {
          "id": "a",
          "text": "Full-dose rivaroxaban without discussing bleed risk"
        },
        {
          "id": "b",
          "text": "LMWH as a safer default for many high luminal GI/GU bleed-risk scenarios, with DOAC reconsideration if risk evolves"
        },
        {
          "id": "c",
          "text": "Aspirin 81 mg monotherapy for proximal DVT"
        },
        {
          "id": "d",
          "text": "Inferior vena cava filter as first-line for every CAT"
        }
      ],
      "correctId": "b",
      "explanation": "DOAC cancer trials support use in many CAT patients, but luminal GI/GU cancer bleed signals push LMWH preference in high-risk anatomy — reassess over time.",
      "teachingPoints": [
        "API-CAT and others inform extended CAT intensity discussions on this site.",
        "Thrombocytopenia thresholds also reshape choices."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "cancer-vte",
          "label": "Cancer VTE pathway"
        },
        {
          "kind": "case",
          "id": "cancer-stepdown",
          "label": "Cancer step-down case"
        },
        {
          "kind": "trial",
          "id": "caravaggio",
          "label": "CARAVAGGIO"
        }
      ]
    },
    {
      "id": "ii-28",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Transitions of care for anticoagulation should prioritize:",
      "choices": [
        {
          "id": "a",
          "text": "Omitting the drug name from discharge summaries to save space"
        },
        {
          "id": "b",
          "text": "Clear documentation of agent, dose, indication, target INR if VKA, hold/restart plans, labs due, and who follows the patient"
        },
        {
          "id": "c",
          "text": "Assuming the patient will remember verbal instructions only"
        },
        {
          "id": "d",
          "text": "Automatic 30-day supply of NSAIDs for pain"
        }
      ],
      "correctId": "b",
      "explanation": "Most anticoagulation harm at transitions comes from missing plans, wrong doses, or unclear follow-up. Structured handoffs reduce error.",
      "teachingPoints": [
        "Reconcile OTC NSAIDs and herbals at every transition.",
        "Schedule the first INR or clinic call before discharge when relevant."
      ],
      "links": []
    },
    {
      "id": "ii-29",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Idarucizumab is indicated conceptually for:",
      "choices": [
        {
          "id": "a",
          "text": "Reversal of apixaban and rivaroxaban major bleeding in all countries"
        },
        {
          "id": "b",
          "text": "Specific reversal of dabigatran when rapid reversal is needed (e.g., life-threatening bleed or emergency surgery) per labeling"
        },
        {
          "id": "c",
          "text": "Routine reversal before every dental cleaning"
        },
        {
          "id": "d",
          "text": "Reversal of warfarin instead of vitamin K"
        }
      ],
      "correctId": "b",
      "explanation": "Idarucizumab is the monoclonal fragment that binds dabigatran. FXa DOAC major bleed in current U.S. teaching after Andexxa withdrawal relies on supportive care + institutional 4F-PCC — not idarucizumab.",
      "teachingPoints": [
        "RE-VERSE AD informs dabigatran reversal practice.",
        "Still provide mechanical hemostasis and resuscitation."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "re-verse-ad",
          "label": "RE-VERSE AD"
        },
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. DOAC bleed pathway"
        },
        {
          "kind": "page",
          "id": "reversal",
          "label": "Reversal page"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "ii-30",
      "domainId": "II",
      "difficulty": "core",
      "stem": "For VKA-associated major bleed, site-aligned emergency teaching includes:",
      "choices": [
        {
          "id": "a",
          "text": "Andexxa as first-line for warfarin"
        },
        {
          "id": "b",
          "text": "4F-PCC (per institutional protocol) plus vitamin K, with supportive care — not FFP-first as the modern preferred rapid option when PCC is available"
        },
        {
          "id": "c",
          "text": "Aspirin loading to counteract warfarin"
        },
        {
          "id": "d",
          "text": "Only holding the next warfarin dose without reversal assessment"
        }
      ],
      "correctId": "b",
      "explanation": "Warfarin major bleed bundles use 4F-PCC for rapid factor repletion plus vitamin K for sustained effect. Andexxa was an FXa-DOAC agent and is withdrawn in the U.S. (Dec 2025) — irrelevant to VKA reversal.",
      "teachingPoints": [
        "Confirm INR and bleed source in parallel.",
        "Restart planning comes after hemostasis and risk re-evaluation."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "Bleed pathways"
        },
        {
          "kind": "page",
          "id": "reversal",
          "label": "Reversal"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "ii-31",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "U.S. life-threatening FXa-DOAC bleeding after Andexxa withdrawal is taught on this site as:",
      "choices": [
        {
          "id": "a",
          "text": "Mandatory Andexxa infusion as the only standard of care"
        },
        {
          "id": "b",
          "text": "Supportive care and hemostasis plus institutional 4F-PCC protocols — do not teach Andexxa as an available U.S. option"
        },
        {
          "id": "c",
          "text": "Idarucizumab for rivaroxaban"
        },
        {
          "id": "d",
          "text": "High-dose vitamin K alone as specific FXa reversal"
        }
      ],
      "correctId": "b",
      "explanation": "AstraZeneca voluntarily withdrew the Andexxa BLA and ended U.S. sales Dec 22, 2025 after FDA concluded risks outweighed benefits. Current site teaching: supportive care + institutional/off-label 4F-PCC per protocol (Andexxa was the labeled FXa agent; now unavailable in U.S.). Idarucizumab remains dabigatran-specific.",
      "teachingPoints": [
        "Know your hospital’s PCC dosing protocol.",
        "ANNEXA-I is historical context — not a reason to claim current U.S. availability."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. FXa bleed pathway"
        },
        {
          "kind": "trial",
          "id": "annexa-i",
          "label": "ANNEXA-I (historical)"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "ii-32",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Selecting between DOACs for eligible acute VTE may include COBRRA-informed counseling that:",
      "choices": [
        {
          "id": "a",
          "text": "All DOACs are identical in every bleed outcome with no shared-decision role"
        },
        {
          "id": "b",
          "text": "Apixaban versus rivaroxaban differences in clinically relevant bleeding can inform shared choice when both are otherwise appropriate"
        },
        {
          "id": "c",
          "text": "Edoxaban never requires heparin lead-in in its pivotal VTE design"
        },
        {
          "id": "d",
          "text": "COMPASS 2.5 mg BID is the acute VTE load"
        }
      ],
      "correctId": "b",
      "explanation": "COBRRA supports pairwise counseling on bleed differences between apixaban and rivaroxaban in VTE. Still consider renal function, food needs, cancer context, and patient preference.",
      "teachingPoints": [
        "Rivaroxaban 15–20 mg needs food; apixaban does not have that same food rule.",
        "See VTE DOAC choice case."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "cobrra",
          "label": "COBRRA"
        },
        {
          "kind": "case",
          "id": "vte-doac-choice",
          "label": "VTE DOAC choice"
        }
      ]
    },
    {
      "id": "ii-33",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Mechanical valve patients needing temporary warfarin interruption for a high-bleed-risk procedure generally require:",
      "choices": [
        {
          "id": "a",
          "text": "No planning because mechanical valves are low thrombotic risk"
        },
        {
          "id": "b",
          "text": "Individualized bridging with a parenteral agent based on valve position/type and patient risk — not the same casual hold used in low-risk NVAF"
        },
        {
          "id": "c",
          "text": "Switch to dabigatran perioperatively as preferred"
        },
        {
          "id": "d",
          "text": "Aspirin alone indefinitely afterward"
        }
      ],
      "correctId": "b",
      "explanation": "Mechanical valves are a high thrombotic-risk VKA niche; peri-procedural plans often include bridging, especially mitral/recent thrombosis risk. DOACs are not substitutes for mechanical mitral anticoagulation.",
      "teachingPoints": [
        "Coordinate cardiology/surgery/anticoagulation clinic early.",
        "Document restart INR targets."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "mechanical-valve",
          "label": "Mechanical valve pathway"
        }
      ,
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        },
        {
          "kind": "case",
          "id": "mechanical-avr-doac-request",
          "label": "Case: Mechanical AVR DOAC request"
        }]
    },
    {
      "id": "ii-34",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Before calling a VTE 'unprovoked' for extension decisions, clinicians should:",
      "choices": [
        {
          "id": "a",
          "text": "Ignore cancer screening symptoms to avoid overwork"
        },
        {
          "id": "b",
          "text": "Reassess for persistent risks (active cancer, ongoing hormonal therapy, inflammatory disease, prior unprovoked events) and bleed risks that change the stop-vs-extend calculus"
        },
        {
          "id": "c",
          "text": "Automatically extend every patient on full-dose DOAC lifelong without discussion"
        },
        {
          "id": "d",
          "text": "Use Wells score as a duration tool"
        }
      ],
      "correctId": "b",
      "explanation": "Labeling matters: persistent provocation ≠ transient surgical provocation. Extension is a shared decision using recurrence predictors and bleed risk — not Wells (diagnostic) scores.",
      "teachingPoints": [
        "Sex, site of VTE, and residual symptoms may enter counseling qualitatively.",
        "Low-dose extended DOAC regimens are options for some."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "extended-vte",
          "label": "Extended VTE"
        }
      ]
    },
    {
      "id": "ii-35",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Renal function assessment before DOAC prescribing is essential because:",
      "choices": [
        {
          "id": "a",
          "text": "All DOACs are exclusively hepatically cleared with no renal role"
        },
        {
          "id": "b",
          "text": "Each DOAC has label-specific renal dosing/avoid rules — CrCl/eGFR trends guide eligibility and dose without memorizing invented cut-point tables on this exam bank"
        },
        {
          "id": "c",
          "text": "Creatinine never needs repeating after the first fill"
        },
        {
          "id": "d",
          "text": "Only dabigatran is unaffected by kidney function"
        }
      ],
      "correctId": "b",
      "explanation": "DOACs differ in renal dependence (dabigatran highest among them). Use current labeling and institutional calculators; this bank will not invent CrCl tables.",
      "teachingPoints": [
        "Recheck renal function when patients age, get acute illness, or start interacting drugs.",
        "See AF renal nodes on the pathway."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        },
        {
          "kind": "case",
          "id": "af-renal-bleed",
          "label": "AF renal bleed case"
        }
      ]
    },
    {
      "id": "ii-36",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "COMPASS vascular-dose rivaroxaban is NOT appropriate as a substitute for:",
      "choices": [
        {
          "id": "a",
          "text": "Discussing secondary CV prevention in selected CAD/PAD patients without an AF OAC indication"
        },
        {
          "id": "b",
          "text": "Full-dose anticoagulation for NVAF stroke prevention or acute VTE treatment"
        },
        {
          "id": "c",
          "text": "Shared decision when bleeding risk is acceptable and indication matches COMPASS-like criteria"
        },
        {
          "id": "d",
          "text": "Aspirin co-therapy in the COMPASS regimen as studied"
        }
      ],
      "correctId": "b",
      "explanation": "COMPASS used rivaroxaban 2.5 mg BID + aspirin for chronic CAD/PAD — a different intensity and indication than AF or VTE treatment doses. Mixing niches is a common stewardship error.",
      "teachingPoints": [
        "VOYAGER-PAD informs PAD revascularization contexts on this site.",
        "See COMPASS vascular pathway."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "compass-vascular",
          "label": "COMPASS vascular"
        },
        {
          "kind": "trial",
          "id": "compass",
          "label": "COMPASS"
        },
        {
          "kind": "trial",
          "id": "voyager-pad",
          "label": "VOYAGER-PAD"
        }
      ,
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "Framework: COMPASS vascular dose"
        },
        {
          "kind": "case",
          "id": "compass-vs-af-dose-trap",
          "label": "Case: COMPASS vs AF dose trap"
        }]
    },
    {
      "id": "iii-06",
      "domainId": "III",
      "difficulty": "core",
      "stem": "An adherence-focused education plan after starting a BID DOAC should prioritize:",
      "choices": [
        {
          "id": "a",
          "text": "Telling the patient that missing half of doses is acceptable if weekly average looks fine"
        },
        {
          "id": "b",
          "text": "Practical routines (pillbox, linked habits), what to do if a dose is missed per that drug’s guidance, and teach-back of red-flag bleed symptoms"
        },
        {
          "id": "c",
          "text": "Switching counseling language to technical AUC percentages"
        },
        {
          "id": "d",
          "text": "Encouraging frequent NSAID 'as needed' pain stacks"
        }
      ],
      "correctId": "b",
      "explanation": "Adherence education is behavioral and concrete. Teach-back confirms understanding better than a monologue. Avoid inventing PK numbers in patient talk.",
      "teachingPoints": [
        "Health literacy adaptations beat jargon.",
        "Involve caregivers when cognitive impairment is present — see FRAIL-AF caution against casual switches."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "frail-af",
          "label": "FRAIL-AF"
        }
      ]
    },
    {
      "id": "iii-07",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Health-literacy–sensitive counseling for warfarin means:",
      "choices": [
        {
          "id": "a",
          "text": "Using only the phrase ' Coumadin level' without explaining INR targets"
        },
        {
          "id": "b",
          "text": "Plain-language explanation of why INR is checked, what foods/consistency means, which OTC drugs to ask about, and when to seek care for bleeding"
        },
        {
          "id": "c",
          "text": "Providing a 40-page biochemistry handout as the sole method"
        },
        {
          "id": "d",
          "text": "Avoiding written materials for patients with limited literacy"
        }
      ],
      "correctId": "b",
      "explanation": "Match language to the patient, use teach-back, and offer written/pictorial aids. Consistency of vitamin K intake beats absolute avoidance for most stable patients.",
      "teachingPoints": [
        "Interpreter services are part of safe anticoagulation education.",
        "Document comprehension barriers and mitigation."
      ],
      "links": []
    },
    {
      "id": "iii-08",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "Vitamin K food counseling nuance that matches modern warfarin education is:",
      "choices": [
        {
          "id": "a",
          "text": "Never eat any green vegetables forever"
        },
        {
          "id": "b",
          "text": "Keep intake relatively consistent week to week rather than eliminating nutritious vitamin K sources; report major diet pattern changes"
        },
        {
          "id": "c",
          "text": "Eat unlimited kale smoothies the day before INR without mentioning it"
        },
        {
          "id": "d",
          "text": "Vitamin K foods reverse DOACs"
        }
      ],
      "correctId": "b",
      "explanation": "Consistency — not prohibition — is the usual counseling frame. Sudden large changes swing INR. DOACs are not antagonized by dietary vitamin K the way warfarin is.",
      "teachingPoints": [
        "Multivitamins with vitamin K matter too — ask explicitly.",
        "Enteral nutrition changes should trigger INR vigilance."
      ],
      "links": []
    },
    {
      "id": "iii-09",
      "domainId": "III",
      "difficulty": "core",
      "stem": "When educating about red-flag bleeding, patients should be told to seek urgent care for:",
      "choices": [
        {
          "id": "a",
          "text": "A single bruise the size of a dime after bumping a door"
        },
        {
          "id": "b",
          "text": "Signs such as black stools, vomiting blood, severe uncontrolled bleeding, sudden severe headache/neurologic change, or coughing large amounts of blood"
        },
        {
          "id": "c",
          "text": "Only bleeding that lasts more than 30 days"
        },
        {
          "id": "d",
          "text": "Bleeding exclusively on weekends"
        }
      ],
      "correctId": "b",
      "explanation": "Teach specific catastrophic and major-bleed warning signs, including ICH symptoms. Minor bruising still deserves clinic advice but not every speck is an ED visit.",
      "teachingPoints": [
        "Give written wallet cards when possible.",
        "Explain that head injury on anticoagulation warrants a low threshold for evaluation."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "Bleed pathway"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "iii-10",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Shared decision-making documentation after discussing OAC for AF should capture:",
      "choices": [
        {
          "id": "a",
          "text": "Only the CHA₂DS₂-VASc number without patient goals"
        },
        {
          "id": "b",
          "text": "Stroke vs bleed tradeoffs discussed, patient values/preferences, and the agreed regimen/follow-up"
        },
        {
          "id": "c",
          "text": "A statement that guidelines remove all choice"
        },
        {
          "id": "d",
          "text": "Refusal of teach-back as unnecessary"
        }
      ],
      "correctId": "b",
      "explanation": "High-quality education includes recording what was discussed and chosen. Scores inform — they do not replace the conversation.",
      "teachingPoints": [
        "SINGLE-AF nuance: intermediate risk still needs individualized talk.",
        "Revisit decisions when risk factors change."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "single-af",
          "label": "SINGLE-AF"
        },
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "AF framework"
        }
      ]
    },
    {
      "id": "iii-11",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "Missed-dose education should be drug-specific because:",
      "choices": [
        {
          "id": "a",
          "text": "All DOACs share one universal make-up rule identical to warfarin double-dosing"
        },
        {
          "id": "b",
          "text": "Half-lives, once-daily vs BID schedules, and label instructions differ — patients need the plan for their exact anticoagulant"
        },
        {
          "id": "c",
          "text": "Patients should always take three doses at once to 'catch up'"
        },
        {
          "id": "d",
          "text": "Missed doses only matter for antiplatelets"
        }
      ],
      "correctId": "b",
      "explanation": "Do not give generic catch-up advice. Use the specific product’s missed-dose instructions and clinic protocols; when unsure, patients should call before improvising.",
      "teachingPoints": [
        "Rivaroxaban food rules still apply when doses are taken.",
        "Repeated misses are an adherence intervention trigger."
      ],
      "links": []
    },
    {
      "id": "iv-14",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Strong antiseizure inducers (carbamazepine, phenytoin, phenobarbital, primidone) with DOACs raise concern for:",
      "choices": [
        {
          "id": "a",
          "text": "Higher DOAC levels and only bleed risk"
        },
        {
          "id": "b",
          "text": "Lower DOAC exposure via induction (P-gp/CYP3A4 pathways as relevant) and potential thrombosis — generally avoid combinations per label/DDI guidance"
        },
        {
          "id": "c",
          "text": "Mandatory superiority of DOACs over warfarin in this setting"
        },
        {
          "id": "d",
          "text": "No interaction because ASMs lack enzyme effects"
        }
      ],
      "correctId": "b",
      "explanation": "Inducers can reduce DOAC effect — opposite direction from inhibitors. Prefer regimens without the interaction (often VKA with close INR monitoring, or alternative ASM) rather than inventing AUC percentages.",
      "teachingPoints": [
        "Levetiracetam/lamotrigine are often lower-concern ASMs in qualitative teaching.",
        "Use this site’s DDI library cards for agent-specific notes."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-carbamazepine",
          "label": "Apixaban–carbamazepine DDI"
        },
        {
          "kind": "pathway",
          "id": "af-stroke",
          "label": "AF pathway"
        }
      ]
    },
    {
      "id": "iv-15",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Azole antifungals and boosted HIV regimens with DOACs qualitatively tend to:",
      "choices": [
        {
          "id": "a",
          "text": "Induce DOAC clearance and cause clotting exclusively"
        },
        {
          "id": "b",
          "text": "Inhibit P-gp/CYP3A4 to varying degrees, increasing DOAC exposure/bleed risk — avoid or dose-adjust per labeling and DDI resources"
        },
        {
          "id": "c",
          "text": "Have zero relevance for rivaroxaban"
        },
        {
          "id": "d",
          "text": "Replace the need for renal monitoring"
        }
      ],
      "correctId": "b",
      "explanation": "Many azoles and PK boosters (ritonavir/cobicistat) raise DOAC levels. Check pair-specific guidance; apixaban has notable label dose-reduction pathways for some strong inhibitors.",
      "teachingPoints": [
        "Paxlovid is a time-limited but potent interaction scenario — plan ahead.",
        "Do not invent AUC numbers; cite site DDI cards when quantifying."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-ketoconazole",
          "label": "Apixaban–ketoconazole"
        },
        {
          "kind": "ddi",
          "id": "rivaroxaban-ritonavir",
          "label": "Rivaroxaban–ritonavir"
        },
        {
          "kind": "ddi",
          "id": "apixaban-paxlovid",
          "label": "Apixaban–Paxlovid"
        }
      ]
    },
    {
      "id": "iv-16",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Warfarin’s pharmacologic target is best described as:",
      "choices": [
        {
          "id": "a",
          "text": "Direct inhibition of free factor Xa active sites like rivaroxaban"
        },
        {
          "id": "b",
          "text": "Inhibition of vitamin K epoxide reductase (VKORC1), depleting reduced vitamin K needed to γ-carboxylate factors II, VII, IX, X and proteins C/S"
        },
        {
          "id": "c",
          "text": "Irreversible antithrombin activation identical to fondaparinux"
        },
        {
          "id": "d",
          "text": "P2Y12 ADP-receptor blockade"
        }
      ],
      "correctId": "b",
      "explanation": "VKAs block VKORC1, impairing vitamin K recycling and functional clotting-factor synthesis. That is mechanistically distinct from DOACs and heparins.",
      "teachingPoints": [
        "Genetic VKORC1/CYP2C9 variation influences dose — optional advanced teaching.",
        "Dietary vitamin K and antibiotics alter effect."
      ],
      "links": []
    },
    {
      "id": "iv-17",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "UFH monitoring traditionally relies on aPTT (or anti-Xa) because:",
      "choices": [
        {
          "id": "a",
          "text": "UFH has completely predictable oral bioavailability"
        },
        {
          "id": "b",
          "text": "UFH anticoagulant response is variable; aPTT/anti-Xa protocols guide titration in venous/arterial indications"
        },
        {
          "id": "c",
          "text": "INR is the correct UFH titration test"
        },
        {
          "id": "d",
          "text": "UFH never needs labs"
        }
      ],
      "correctId": "b",
      "explanation": "Unfractionated heparin requires monitoring due to variable binding and clearance. Protocol-driven aPTT or anti-Xa targets are institutional.",
      "teachingPoints": [
        "LMWH usually needs less routine monitoring except special populations.",
        "HIT surveillance remains important with UFH."
      ],
      "links": []
    },
    {
      "id": "iv-18",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Fondaparinux’s mechanism is best summarized as:",
      "choices": [
        {
          "id": "a",
          "text": "Oral direct thrombin inhibition"
        },
        {
          "id": "b",
          "text": "Indirect, antithrombin-mediated selective factor Xa inhibition (synthetic pentasaccharide)"
        },
        {
          "id": "c",
          "text": "Vitamin K antagonism"
        },
        {
          "id": "d",
          "text": "GP IIb/IIIa blockade"
        }
      ],
      "correctId": "b",
      "explanation": "Fondaparinux catalyzes antithrombin inhibition of Xa without meaningful IIa activity. It is parenteral and renally cleared — distinct from oral FXa DOACs.",
      "teachingPoints": [
        "No reliable protamine reversal.",
        "Used in some HIT and VTE pathways per protocols."
      ],
      "links": []
    },
    {
      "id": "iv-19",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Dabigatran etexilate is a prodrug; clinically that means:",
      "choices": [
        {
          "id": "a",
          "text": "It inhibits factor Xa after CYP3A4 activation only"
        },
        {
          "id": "b",
          "text": "It is converted to active dabigatran that directly inhibits thrombin (factor IIa); P-gp affects absorption/exposure"
        },
        {
          "id": "c",
          "text": "It is interchangeable with enoxaparin milligram-for-milligram"
        },
        {
          "id": "d",
          "text": "Acid-reducing drugs never matter for its capsules"
        }
      ],
      "correctId": "b",
      "explanation": "Dabigatran is a direct thrombin inhibitor with P-gp relevance and notable renal clearance. Capsule integrity and absorption issues matter in counseling.",
      "teachingPoints": [
        "Idarucizumab reverses dabigatran specifically.",
        "Avoid opening capsules unless labeling explicitly allows a given product technique."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "re-ly",
          "label": "RE-LY"
        }
      ]
    },
    {
      "id": "iv-20",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Edoxaban pharmacology teaching for VTE should recall that pivotal regimens:",
      "choices": [
        {
          "id": "a",
          "text": "Start with edoxaban monotherapy load identical to rivaroxaban 15 mg BID"
        },
        {
          "id": "b",
          "text": "Use parenteral anticoagulation lead-in before edoxaban maintenance dosing"
        },
        {
          "id": "c",
          "text": "Require INR 2–3 throughout edoxaban use"
        },
        {
          "id": "d",
          "text": "Are identical to COMPASS 2.5 mg BID"
        }
      ],
      "correctId": "b",
      "explanation": "Hokusai-VTE design used heparin lead-in then edoxaban. That differs from single-drug rivaroxaban/apixaban VTE starts.",
      "teachingPoints": [
        "Renal dose adjustments follow labeling — do not invent cutoffs here.",
        "Cancer data exist in Hokusai VTE Cancer."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "hokusai-vte",
          "label": "Hokusai-VTE"
        }
      ]
    },
    {
      "id": "iv-21",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Pharmacodynamic bleed stacking refers to:",
      "choices": [
        {
          "id": "a",
          "text": "CYP3A4 induction reducing DOAC levels"
        },
        {
          "id": "b",
          "text": "Additive bleeding tendency from combining anticoagulants with antiplatelets, NSAIDs, or SSRIs — even without a major PK AUC change"
        },
        {
          "id": "c",
          "text": "Only food–drug binding in the gut"
        },
        {
          "id": "d",
          "text": "CLIA waived-test QC failures"
        }
      ],
      "correctId": "b",
      "explanation": "PD interactions increase bleed risk via mechanism overlap (hemostasis). Separate them conceptually from PK inhibitors/inducers when counseling and reconciling meds.",
      "teachingPoints": [
        "Ask about OTC NSAIDs every visit.",
        "Site DDI cards flag PD-bleed pairs without forcing invented HRs."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-nsaids",
          "label": "Apixaban–NSAIDs"
        },
        {
          "kind": "ddi",
          "id": "apixaban-aspirin",
          "label": "Apixaban–aspirin"
        }
      ]
    },
    {
      "id": "iv-22",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Protamine sulfate teaching is most accurate as:",
      "choices": [
        {
          "id": "a",
          "text": "Complete reversal agent for all DOACs and fondaparinux"
        },
        {
          "id": "b",
          "text": "Fully reverses UFH and only partially reverses LMWH; not a DOAC antidote"
        },
        {
          "id": "c",
          "text": "First-line warfarin reversal instead of 4F-PCC"
        },
        {
          "id": "d",
          "text": "Equivalent to idarucizumab"
        }
      ],
      "correctId": "b",
      "explanation": "Protamine neutralizes UFH well and LMWH incompletely. It does not reverse DOACs; warfarin uses PCC/vitamin K; dabigatran uses idarucizumab.",
      "teachingPoints": [
        "Dosing follows institutional UFH/LMWH reversal charts.",
        "Allergy/fish product history can matter for protamine reactions."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Reversal"
        }
      ]
    },
    {
      "id": "iv-23",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Apixaban usual AF dosing teaching (without listing every reduction criterion) emphasizes:",
      "choices": [
        {
          "id": "a",
          "text": "One universal 20 mg daily with food dose for all adults"
        },
        {
          "id": "b",
          "text": "Twice-daily dosing with label-based dose reductions when specific age/weight/creatinine criteria are met — verify current labeling rather than memorizing contested cutoffs from unofficial banks"
        },
        {
          "id": "c",
          "text": "Subcutaneous administration only"
        },
        {
          "id": "d",
          "text": "INR-titrated apixaban"
        }
      ],
      "correctId": "b",
      "explanation": "Apixaban is BID; dose reductions follow labeled ABC-type criteria. This unofficial bank avoids inventing or debating exact numeric thresholds — check the label.",
      "teachingPoints": [
        "ARISTOTLE informs NVAF efficacy/safety context on this site.",
        "Acute VTE uses a different load (AMPLIFY)."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        },
        {
          "kind": "trial",
          "id": "amplify",
          "label": "AMPLIFY"
        }
      ]
    },
    {
      "id": "iv-24",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Laboratory assessment of DOAC effect in emergencies is best framed as:",
      "choices": [
        {
          "id": "a",
          "text": "INR reliably quantifies all DOAC levels"
        },
        {
          "id": "b",
          "text": "Routine PT/INR/aPTT are imperfect; specialized assays may help but decisions often proceed based on last dose timing, renal function, and clinical bleed severity"
        },
        {
          "id": "c",
          "text": "A normal aPTT always excludes clinically relevant dabigatran"
        },
        {
          "id": "d",
          "text": "Chromogenic factor X is the DOAC gold standard"
        }
      ],
      "correctId": "b",
      "explanation": "DOAC labs are nuanced. Do not delay resuscitation for exotic assays. Timing since last dose and supportive/reversal pathways drive care.",
      "teachingPoints": [
        "Know what your lab can actually run after hours.",
        "Andexxa is not an available U.S. FXa option as of Dec 2025 withdrawal."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "doac-bleed-us",
          "label": "U.S. bleed pathway"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
      "id": "iv-25",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Enoxaparin renal accumulation risk means clinicians should:",
      "choices": [
        {
          "id": "a",
          "text": "Ignore creatinine because LMWH is only hepatic"
        },
        {
          "id": "b",
          "text": "Adjust or avoid per labeling in significant renal impairment and consider anti-Xa monitoring in selected patients per protocols"
        },
        {
          "id": "c",
          "text": "Double the dose automatically when eGFR falls"
        },
        {
          "id": "d",
          "text": "Prefer enoxaparin over all other options in ESRD without review"
        }
      ],
      "correctId": "b",
      "explanation": "LMWH is renally cleared; impairment raises bleed risk via accumulation. Follow label/institutional adjustments; UFH is sometimes preferred in severe CKD.",
      "teachingPoints": [
        "Obesity and pregnancy are other monitoring contexts.",
        "Do not invent anti-Xa target numbers here."
      ],
      "links": []
    },
    {
      "id": "iv-26",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "St John’s wort with DOACs is concerning primarily because it may:",
      "choices": [
        {
          "id": "a",
          "text": "Strongly inhibit CYP3A4 and raise levels only"
        },
        {
          "id": "b",
          "text": "Induce enzymes/transporters and reduce DOAC exposure — generally avoid"
        },
        {
          "id": "c",
          "text": "Act as a vitamin K substitute reversing warfarin only, with no DOAC relevance"
        },
        {
          "id": "d",
          "text": "Serve as recommended herbal adherence support"
        }
      ],
      "correctId": "b",
      "explanation": "St John’s wort is an inducer concern for DOACs (and can affect warfarin). Counsel patients that 'natural' does not mean safe with anticoagulants.",
      "teachingPoints": [
        "Reconcile herbals at every visit.",
        "See DDI library rather than quoting invented percentages."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "rivaroxaban-st-johns-wort",
          "label": "Rivaroxaban–SJW"
        }
      ]
    },
    {
      "id": "v-04",
      "domainId": "V",
      "difficulty": "core",
      "stem": "ICD-10 / CPT awareness for anticoagulation clinics mainly supports:",
      "choices": [
        {
          "id": "a",
          "text": "Inventing diagnosis codes that maximize payment without documentation"
        },
        {
          "id": "b",
          "text": "Accurate indication coding, visit/procedure coding for INR management and education, and audit-ready documentation aligned to the service performed"
        },
        {
          "id": "c",
          "text": "Replacing clinical notes entirely with billing codes"
        },
        {
          "id": "d",
          "text": "Coding Andexxa administration after 2026 U.S. withdrawal as routine"
        }
      ],
      "correctId": "b",
      "explanation": "Operational competency includes knowing that coding must match documented indication and services (INR checks, anticoagulation management codes as applicable). Fraudulent upcoding is unethical and illegal.",
      "teachingPoints": [
        "Keep problem lists updated when indications change (e.g., provoked VTE end date).",
        "Local compliance office owns final billing rules."
      ],
      "links": []
    },
    {
      "id": "v-05",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "A clinic quality dashboard for warfarin patients might reasonably track:",
      "choices": [
        {
          "id": "a",
          "text": "Only the number of DOAC commercials patients saw"
        },
        {
          "id": "b",
          "text": "TTR, extreme INR rates, time-to-follow-up after out-of-range values, and adverse event reviews"
        },
        {
          "id": "c",
          "text": "CHA₂DS₂-VASc as a clinic TTR substitute"
        },
        {
          "id": "d",
          "text": "Mandatory weekly CT scans"
        }
      ],
      "correctId": "b",
      "explanation": "Domain V metrics focus on process/outcome quality for anticoagulation services. TTR is central for VKA cohorts; operational lag after critical INRs is a safety signal.",
      "teachingPoints": [
        "Pair metrics with improvement cycles (education, PST eligibility, recall systems).",
        "Stewardship may also track DOAC dosing appropriateness."
      ],
      "links": []
    },
    {
      "id": "v-06",
      "domainId": "V",
      "difficulty": "core",
      "stem": "CLIA concepts for POC INR programs require clinics to:",
      "choices": [
        {
          "id": "a",
          "text": "Ignore manufacturer QC because waived tests need no controls"
        },
        {
          "id": "b",
          "text": "Follow applicable complexity category rules, perform required QC, train staff, and maintain competency/documentation"
        },
        {
          "id": "c",
          "text": "Send every POC sample to three reference labs simultaneously always"
        },
        {
          "id": "d",
          "text": "Use expired test strips to save cost"
        }
      ],
      "correctId": "b",
      "explanation": "Even waived testing carries regulatory and safety duties. QC failures should block patient result reporting until resolved.",
      "teachingPoints": [
        "Designate a clinical consultant/lab director relationship as required locally.",
        "Correlate POC vs lab when results and clinical picture diverge."
      ],
      "links": []
    },
    {
      "id": "iii-12",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient on rivaroxaban 15 or 20 mg once daily with food will cross several time zones on a long flight and asks how to take tonight’s dose. Best education principle:",
      "choices": [
        {
          "id": "a",
          "text": "Skip anticoagulation for the entire trip to avoid timing mistakes"
        },
        {
          "id": "b",
          "text": "Double the dose on departure day so timing no longer matters"
        },
        {
          "id": "c",
          "text": "Keep roughly 24 hours between doses, take the labeled 15 or 20 mg dose with food, and use a written plan for the transition day rather than guessing at the gate"
        },
        {
          "id": "d",
          "text": "Switch to aspirin for travel days only"
        }
      ],
      "correctId": "c",
      "explanation": "Travel counseling preserves the labeled interval and food requirement for rivaroxaban 15–20 mg. Patients need a simple written plan for the transition day—not skipped therapy, doubled doses, or aspirin substitution when OAC is indicated.",
      "teachingPoints": [
        "Teach-back the food requirement and the ‘about 24 hours apart’ idea before they leave.",
        "Complex itineraries → encourage a call to the clinic rather than improvising."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "rocket-af",
          "label": "ROCKET AF"
        }
      ]
    },
    {
      "id": "iii-13",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "Education for a patient on apixaban 5 mg BID who will spend a week in a time zone 7 hours different from home should emphasize:",
      "choices": [
        {
          "id": "a",
          "text": "Take both tablets together each morning while abroad"
        },
        {
          "id": "b",
          "text": "Space doses about 12 hours apart on local clocks after a planned transition, and avoid inventing a ‘travel hold’"
        },
        {
          "id": "c",
          "text": "Stop apixaban until returning home to keep the home schedule sacred"
        },
        {
          "id": "d",
          "text": "Replace one daily dose with an NSAID for jet-lag headaches"
        }
      ],
      "correctId": "b",
      "explanation": "BID DOAC education centers on maintaining roughly 12-hour spacing. After a planned shift to local time, patients continue twice daily—they do not stack doses, stop therapy for convenience, or add NSAIDs.",
      "teachingPoints": [
        "A written AM/PM local-time schedule beats memory during jet lag.",
        "Missed-dose rules remain drug-specific—refer to label/clinic instructions rather than guessing."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        }
      ]
    },
    {
      "id": "iii-14",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Which travel-preparation point belongs in anticoagulation patient education?",
      "choices": [
        {
          "id": "a",
          "text": "Pack anticoagulants only in checked luggage so they stay cool"
        },
        {
          "id": "b",
          "text": "Leave all refill bottles at home to reduce theft risk"
        },
        {
          "id": "c",
          "text": "Carry enough medication in hand luggage for the trip plus a buffer, keep a current med list, and know how to reach the clinic if doses are lost"
        },
        {
          "id": "d",
          "text": "Stop anticoagulation 72 hours before any flight longer than 4 hours"
        }
      ],
      "correctId": "c",
      "explanation": "Continuity counseling: keep critical meds in carry-on with a buffer supply and contact plan. Checked-bag-only storage, leaving refills behind, or routine pre-flight holds are unsafe teaching.",
      "teachingPoints": [
        "A simple wallet card or phone med list helps if care is needed away from home.",
        "VTE prevention on long flights is separate from stopping indicated therapeutic OAC—do not conflate."
      ],
      "links": []
    },
    {
      "id": "iii-15",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Before a vacation, a patient on warfarin asks about binge drinking at a wedding. Best education response:",
      "choices": [
        {
          "id": "a",
          "text": "Alcohol never interacts with warfarin, so no limits apply"
        },
        {
          "id": "b",
          "text": "Binge drinking can destabilize INR and increase bleed risk—advise ahead with the clinic rather than guessing holds or double doses after the party"
        },
        {
          "id": "c",
          "text": "Take an extra warfarin tablet the morning after drinking"
        },
        {
          "id": "d",
          "text": "Replace warfarin with aspirin for the wedding week"
        }
      ],
      "correctId": "b",
      "explanation": "Warfarin education includes lifestyle consistency. Binge alcohol can perturb INR and bleeding risk; patients should call for guidance rather than self-adjusting doses or switching to aspirin.",
      "teachingPoints": [
        "Pair with bleed red-flag teach-back already covered elsewhere in Domain III.",
        "Document counseling when high-risk social events are anticipated."
      ],
      "links": []
    },
    {
      "id": "v-07",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A nurse catches a near-miss where a discharged patient almost received rivaroxaban 20 mg without food counseling. The most appropriate clinic operations response is:",
      "choices": [
        {
          "id": "a",
          "text": "Ignore it because no harm reached the patient"
        },
        {
          "id": "b",
          "text": "Report/document the near-miss through the clinic’s safety channel so counseling workflows can be improved"
        },
        {
          "id": "c",
          "text": "Punish only the discharging resident and close the file"
        },
        {
          "id": "d",
          "text": "Invent a new rivaroxaban AUC target for the next staff meeting"
        }
      ],
      "correctId": "b",
      "explanation": "Operational quality depends on capturing near-misses, not only harmful events. Reporting feeds system fixes (teach-back prompts, discharge checklists). Blame-only responses and invented PK targets are not Domain V practice.",
      "teachingPoints": [
        "Near-miss reporting is a stewardship/safety input, not optional trivia.",
        "Close the loop: what workflow change prevents recurrence?"
      ],
      "links": []
    },
    {
      "id": "v-08",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "Pharmacy & Therapeutics (P&T) involvement in an anticoagulation program is most clearly demonstrated when the clinic:",
      "choices": [
        {
          "id": "a",
          "text": "Lets each prescriber invent private DOAC reversal recipes without review"
        },
        {
          "id": "b",
          "text": "Aligns formulary choices, order sets, and reversal pathways with reviewed protocols and updates them when labeling or availability changes (e.g., U.S. Andexxa status)"
        },
        {
          "id": "c",
          "text": "Bans all DOACs to simplify inventory"
        },
        {
          "id": "d",
          "text": "Uses social media polls to pick INR targets"
        }
      ],
      "correctId": "b",
      "explanation": "Domain V includes governance: formulary and order-set decisions should run through reviewed institutional processes (often P&T-linked) and stay current with labeling/availability—such as U.S. Andexxa withdrawal shifting FXa bleed teaching to supportive care + institutional/off-label 4F-PCC per local protocol.",
      "teachingPoints": [
        "Operational updates after major labeling/availability shifts are a clinic responsibility.",
        "Local protocols beat ad-hoc reversal improvisation."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ]
    },
    {
      "id": "v-09",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Staff competency for an anticoagulation clinic is best reflected by:",
      "choices": [
        {
          "id": "a",
          "text": "One-time orientation with no reassessment after protocol changes"
        },
        {
          "id": "b",
          "text": "Documented initial training plus periodic competency checks on dosing counseling, bleed triage escalation, and POC INR workflows when used"
        },
        {
          "id": "c",
          "text": "Allowing only physicians to speak to patients about missed doses"
        },
        {
          "id": "d",
          "text": "Memorizing invented NNT tables for every DOAC trial"
        }
      ],
      "correctId": "b",
      "explanation": "Operational programs maintain documented competencies and refresh them when protocols change. One-time orientation and inventing efficacy trivia are not quality systems.",
      "teachingPoints": [
        "Competency includes knowing escalation paths, not only pill facts.",
        "POC INR users also need CLIA/quality competencies (see related Domain V items)."
      ],
      "links": []
    },
    {
      "id": "v-10",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "After a major U.S. labeling/availability change (Andexxa withdrawn Dec 22, 2025), an anticoagulation clinic’s operational priority is:",
      "choices": [
        {
          "id": "a",
          "text": "Leave old Andexxa order sets active so staff have ‘something to click’"
        },
        {
          "id": "b",
          "text": "Update order sets, policies, and staff education to U.S. supportive care + institutional/off-label 4F-PCC per protocol, and retire Andexxa as a U.S. orderable option"
        },
        {
          "id": "c",
          "text": "Switch all FXa bleeds to idarucizumab automatically"
        },
        {
          "id": "d",
          "text": "Hide the change from trainees to avoid confusion"
        }
      ],
      "correctId": "b",
      "explanation": "Domain V meets Domain IV at the policy layer: when U.S. availability changes, clinics must update order sets and educate staff toward supportive care + institutional/off-label 4F-PCC per protocol. Idarucizumab remains dabigatran-specific; dormant Andexxa buttons are a safety hazard.",
      "teachingPoints": [
        "Pair operational updates with teach modules (`doac-major-bleed-us` / reversal page).",
        "Document the effective date of pathway changes."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        },
        {
          "kind": "framework",
          "id": "doac-major-bleed-us",
          "label": "DOAC major bleed (U.S.)"
        },
        {
          "kind": "case",
          "id": "fxa-ich-post-andexxa",
          "label": "Case: ICH on apixaban"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "Nuance: ANNEXA vs U.S. 4F-PCC"
        }
      ]
    },
    {
  "id": "i-27",
  "domainId": "I",
  "difficulty": "core",
  "stem": "Compared with a mechanical prosthetic valve, a bioprosthetic TAVI/TAVR pathway differs most importantly for anticoagulation teaching because:",
  "choices": [
    { "id": "a", "text": "Both always require lifelong warfarin at INR 3.5–4.5 regardless of rhythm" },
    { "id": "b", "text": "Mechanical valves are a VKA niche with DOAC contraindication teaching, whereas post-TAVI antithrombotic choice forks on whether a separate OAC indication (e.g., AF) exists — routine DOAC ‘for the valve’ without that indication is not the default" },
    { "id": "c", "text": "TAVI patients must always receive therapeutic DOAC plus DAPT for life to prevent leaflet thrombosis" },
    { "id": "d", "text": "Mechanical aortic valves are treated identically to sinus-rhythm TAVI on this site" }
  ],
  "correctId": "b",
  "explanation": "Mechanical prostheses are VKA territory (DOAC contraindicated teaching). Post-TAVI care starts by asking whether a separate OAC indication exists; without one, antiplatelet pathways (often SAPT) are taught rather than routine DOAC for the prosthesis. Do not import mechanical-valve rules into every TAVI case or vice versa.",
  "teachingPoints": [
    "GALILEO/ATLANTIS/NOTION-4-era teaching argues against routine post-TAVI DOAC without another OAC indication.",
    "See mechanical-valve and post-TAVI frameworks."
  ],
  "links": [
    { "kind": "framework", "id": "mechanical-valve-vka", "label": "Framework: Mechanical valve" },
    { "kind": "framework", "id": "post-tavi-antithrombotic", "label": "Framework: Post-TAVI" },
    { "kind": "trial", "id": "galileo", "label": "GALILEO" }
  ]
},
    {
  "id": "ii-37",
  "domainId": "II",
  "difficulty": "advanced",
  "stem": "Five days after successful TAVI, a patient in sinus rhythm with no AF, no recent coronary stent, and no other OAC indication is started on a DOAC ‘to prevent leaflet thrombosis,’ with aspirin continued. Best management teaching:",
  "choices": [
    { "id": "a", "text": "Continue DOAC + aspirin indefinitely — imaging studies mandate routine post-TAVI OAC" },
    { "id": "b", "text": "This is typical no-OAC-indication post-TAVI care: prefer an antiplatelet pathway (usually SAPT when dual therapy is not otherwise indicated); do not start routine DOAC for HALT prophylaxis — GALILEO/ATLANTIS/NOTION-4-era teaching argues against routine DOAC without a separate indication, and ACASA’s HALT imaging signal is not a clinical mandate" },
    { "id": "c", "text": "Switch to warfarin INR 2.5–3.5 because all aortic prostheses are mechanical-valve equivalents" },
    { "id": "d", "text": "Add prasugrel to create full triple therapy for 12 months as default TAVI law" }
  ],
  "correctId": "b",
  "explanation": "Fork on OAC indication first. Without one, do not invent a DOAC-for-HALT default. Site teaching: GALILEO stopped early for higher death or thromboembolic events with a rivaroxaban strategy vs antiplatelet care; ATLANTIS no-indication stratum showed concerning signals vs antiplatelet care; NOTION-4 short DOAC HALT effect is not durable; ACASA imaging ≠ mandate. POPular TAVI favors SAPT over routine DAPT when dual therapy is not indicated.",
  "teachingPoints": [
    "CHA₂DS₂-VASc without AF does not create an OAC indication after TAVI.",
    "See case tavi-sinus-routine-doac and nuance acasa-vs-notion4."
  ],
  "links": [
    { "kind": "framework", "id": "post-tavi-antithrombotic", "label": "Framework: Post-TAVI" },
    { "kind": "case", "id": "tavi-sinus-routine-doac", "label": "Case: TAVI sinus DOAC" },
    { "kind": "nuance", "id": "acasa-vs-notion4", "label": "Nuance: ACASA vs NOTION-4" },
    { "kind": "trial", "id": "galileo", "label": "GALILEO" },
    { "kind": "trial", "id": "popular-tavi", "label": "POPular TAVI" }
  ]
},
    {
  "id": "ii-38",
  "domainId": "II",
  "difficulty": "core",
  "stem": "For elective colonoscopy in typical nonvalvular AF on warfarin (no mechanical valve, no recent VTE), a reflexive LMWH bridge while warfarin is held is:",
  "choices": [
    { "id": "a", "text": "Required by BRIDGE because forgoing bridging increased stroke" },
    { "id": "b", "text": "Not routine — BRIDGE found forgoing bridging noninferior for arterial thromboembolism and major bleeding higher with bridging; plan interruption/restart without reflexive LMWH in this phenotype" },
    { "id": "c", "text": "Mandatory for every dental cleaning as well" },
    { "id": "d", "text": "Preferred because bridging never increases bleeding" }
  ],
  "correctId": "b",
  "explanation": "Matches BRIDGE and the peri-procedural-oac framework: typical AF ≠ mechanical-valve or acute-VTE bridging logic. Confirm whether interruption is needed with the proceduralist; do not equate ‘never uncovered’ with safer.",
  "teachingPoints": [
    "Existing items ii-10 / ii-23 remain valid; this item ties the new peri framework to a concrete elective procedure.",
    "High thrombotic-risk VKA niches still need specialty bridging plans."
  ],
  "links": [
    { "kind": "framework", "id": "peri-procedural-oac", "label": "Framework: Peri-procedural OAC" },
    { "kind": "case", "id": "af-warfarin-bridge-reflex", "label": "Case: AF warfarin bridge reflex" },
    { "kind": "trial", "id": "bridge", "label": "BRIDGE" }
  ]
},
    {
  "id": "ii-39",
  "domainId": "II",
  "difficulty": "advanced",
  "stem": "A patient with unprovoked DVT completes early DOAC therapy; repeat testing confirms triple-positive APS. They ask to ‘just stay on the DOAC like everyone else.’ Best long-term agent teaching:",
  "choices": [
    { "id": "a", "text": "Continue the DOAC indefinitely — antibody tier never changes agent choice" },
    { "id": "b", "text": "Prefer transition to dose-adjusted warfarin (typical INR 2–3 teaching frame unless specialty sets otherwise); high-risk / triple-positive APS is not a convenience DOAC upgrade" },
    { "id": "c", "text": "Stop all anticoagulation because APS only needs aspirin" },
    { "id": "d", "text": "Switch to rivaroxaban 2.5 mg BID + aspirin (COMPASS) as APS standard of care" }
  ],
  "correctId": "b",
  "explanation": "Risk-tier APS before renewing a DOAC. Triple-positive / high-risk APS is taught as VKA-preferring on this site. COMPASS vascular dosing is a different niche and not APS therapy.",
  "teachingPoints": [
    "Do not invent TRAPS/RAPS event rates — not curated as numeric teaching here.",
    "See aps-triple-positive framework/case."
  ],
  "links": [
    { "kind": "framework", "id": "aps-triple-positive-vka", "label": "Framework: APS VKA" },
    { "kind": "case", "id": "aps-triple-positive-doac", "label": "Case: Triple-positive DOAC request" },
    { "kind": "pathway", "id": "aps", "label": "TX: APS" }
  ]
},
    {
  "id": "iii-16",
  "domainId": "III",
  "difficulty": "core",
  "stem": "A patient with typical NVAF on warfarin says: ‘For my colonoscopy they have to give me Lovenox shots the whole time my warfarin is stopped, or I’ll stroke.’ Best education response:",
  "choices": [
    { "id": "a", "text": "Agree — BRIDGE proved everyone on warfarin needs LMWH bridging for every procedure" },
    { "id": "b", "text": "Explain that for many people with typical AF, routine bridging shots add bleeding risk without improving stroke prevention during a planned hold — the team will make a personalized hold/restart plan and only use bridging when thrombotic risk is unusually high (for example some valve situations)" },
    { "id": "c", "text": "Tell them to stop warfarin permanently and use aspirin only around procedures" },
    { "id": "d", "text": "Advise doubling warfarin the week before instead of any hold" }
  ],
  "correctId": "b",
  "explanation": "Domain III translates BRIDGE into patient language without dumping trial jargon. Emphasize personalized plans and that bridging is not automatically protective.",
  "teachingPoints": [
    "Invite questions about mechanical valves / recent clots as ‘tell us if this applies to you’ screens.",
    "Document education when patients arrive with bridging expectations."
  ],
  "links": [
    { "kind": "framework", "id": "peri-procedural-oac", "label": "Framework: Peri-procedural OAC" },
    { "kind": "trial", "id": "bridge", "label": "BRIDGE" },
    { "kind": "case", "id": "af-warfarin-bridge-reflex", "label": "Case: Bridge reflex" }
  ]
},
    {
  "id": "iii-17",
  "domainId": "III",
  "difficulty": "core",
  "stem": "After TAVI, a patient in sinus rhythm without AF asks for ‘a blood thinner pill for the new valve like my neighbor with AFib.’ Best counseling:",
  "choices": [
    { "id": "a", "text": "Start full-dose DOAC because every TAVI valve requires lifelong anticoagulation" },
    { "id": "b", "text": "Explain that the neighbor’s AF is a different reason for anticoagulation; after TAVI without AF or another OAC indication, care is usually antiplatelet-based, and routine DOAC just for the valve is not the standard teaching — decisions are individualized with the implant team" },
    { "id": "c", "text": "Replace aspirin with herbal supplements for leaflet ‘thinning’" },
    { "id": "d", "text": "Promise that CHA₂DS₂-VASc points from age alone mean they must start anticoagulation even without AF" }
  ],
  "correctId": "b",
  "explanation": "Patient education should separate AF stroke prevention from prosthesis-only myths. CHA₂DS₂-VASc without AF does not create an OAC indication. Avoid promising imaging-paper DOAC mandates.",
  "teachingPoints": [
    "If new AF appears later, reopen the AF pathway — different conversation.",
    "Pair with post-TAVI framework/case."
  ],
  "links": [
    { "kind": "framework", "id": "post-tavi-antithrombotic", "label": "Framework: Post-TAVI" },
    { "kind": "case", "id": "tavi-sinus-routine-doac", "label": "Case: TAVI sinus DOAC" },
    { "kind": "framework", "id": "af-stroke-prevention", "label": "Framework: AF stroke prevention" }
  ]
},
    {
  "id": "iv-27",
  "domainId": "IV",
  "difficulty": "core",
  "stem": "When a DOAC is held for an elective procedure in typical AF (no mechanical valve), the pharmacology teaching point about ‘bridging’ is:",
  "choices": [
    { "id": "a", "text": "Therapeutic LMWH bridge is routinely required whenever any DOAC is held, mirroring historical warfarin habits" },
    { "id": "b", "text": "DOACs have relatively rapid onset/offset versus warfarin; typical AF interruptions usually use timed holds and restarts per renal function, bleed risk, and labeling — not a reflexive heparin bridge while the DOAC is stopped" },
    { "id": "c", "text": "All DOACs must be bridged with fondaparinux for 10 days regardless of procedure" },
    { "id": "d", "text": "Hold clocks are identical for dabigatran and apixaban even when CrCl is severely reduced" }
  ],
  "correctId": "b",
  "explanation": "Class teaching: DOAC peri-procedural management is hold/restart planning, not automatic parenteral coverage for typical AF. Exact hours depend on agent, CrCl, and procedure bleed risk — verify locally / monograph (site practical heuristics are not protocols). Dabigatran is more renal-clearance sensitive than some FXa agents — do not invent one clock for all.",
  "teachingPoints": [
    "Emergency bleed reversal is a different Dom IV/II fork (U.S. FXa: supportive + institutional 4F-PCC; not Andexxa after Dec 22, 2025).",
    "See peri-procedural-oac framework."
  ],
  "links": [
    { "kind": "framework", "id": "peri-procedural-oac", "label": "Framework: Peri-procedural OAC" }
  ]
},
    {
  "id": "v-11",
  "domainId": "V",
  "difficulty": "core",
  "stem": "From an anticoagulation clinic operations perspective, the highest-yield peri-procedural documentation element is:",
  "choices": [
    { "id": "a", "text": "A vague note that ‘bridging will be figured out later’ with no owner, hold dates, or restart plan" },
    { "id": "b", "text": "Named indication and thrombotic-risk class, whether interruption is needed, whether bridging is or is not planned (with rationale), agent-specific hold/restart plan, proceduralist contact, and a named owner for post-procedure restart" },
    { "id": "c", "text": "Copying an Andexxa order into every pre-op packet for FXa patients after Dec 22, 2025 in the U.S." },
    { "id": "d", "text": "Deleting INR history so the proceduralist is not biased" }
  ],
  "correctId": "b",
  "explanation": "Domain V turns clinical peri-procedural teaching into clinic workflow: clear ownership and explicit bridge/no-bridge rationale reduce near-misses. U.S. Andexxa order sets should not be resuscitated after withdrawal — that is a separate safety/ops issue already covered in v-10.",
  "teachingPoints": [
    "Align notes with peri-procedural-oac framework language.",
    "Mechanical-valve patients need valve-clinic protocol references when relevant."
  ],
  "links": [
    { "kind": "framework", "id": "peri-procedural-oac", "label": "Framework: Peri-procedural OAC" },
    { "kind": "case", "id": "af-warfarin-bridge-reflex", "label": "Case: Bridge reflex" }
  ]
}
  ]
};
