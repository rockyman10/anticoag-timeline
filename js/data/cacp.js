/* Unofficial CACP exam-prep practice module — educational only. Not an AC Forum exam. */
window.ANTICOAG_CACP = {
  "meta": {
    "title": "CACP exam prep (unofficial)",
    "disclaimer": "Unofficial educational practice only. The Anticoagulation Forum (AC Forum) does not endorse this or any preparatory materials. These are not real CACP examination questions. The 2026 AC Forum Candidate Handbook names the credential Certified Antithrombotic Care Provider (CACP). Verify all clinical decisions with current guidelines, product labeling, and institutional protocols.",
    "handbookNote": "Practice logistics follow the 2026 AC Forum CACP Candidate Handbook (https://acforum.org/web/resource_files/1793672914-37806.pdf). That handbook describes 160 multiple-choice questions — 150 scored and 10 unidentified unscored pilots — with 2 hours 30 minutes allowed, and a pass line of 80% of the 150 scored items. Domain weights: I Applied Pathophysiology of Thromboembolic Disease 25%, II Patient Assessment and Management 35%, III Patient Education 10%, IV Applied Pharmacology of Antithrombotic Agents 25%, V Operational (Administrative) Procedures 5%. A 160-question practice sitting uses quotas I 40, II 56, III 16, IV 40, V 8. AC Forum does not endorse this or any preparatory materials. These are not real exam questions.",
    "version": "2026-11-07",
    "exam": {
      "questionCount": 160,
      "scoredCount": 150,
      "pilotCount": 10,
      "durationMinutes": 150,
      "passPercentOfScored": 80,
      "quotas": {
        "I": 40,
        "II": 56,
        "III": 16,
        "IV": 40,
        "V": 8
      }
    },
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
          "text": "Arterial thrombi are more platelet-rich (white thrombi) under high shear; venous thrombi are more fibrin-/red blood cell-rich in lower-shear stasis"
        },
        {
          "id": "d",
          "text": "The distinction is obsolete because all thrombi require the same intensity of anticoagulation"
        }
      ],
      "correctId": "c",
      "explanation": "Classic teaching: arterial white thrombi (platelet-rich, high shear) vs venous red thrombi (fibrin/red blood cell-rich, stasis). This frames why antiplatelet therapy is central in CAD/ACS while anticoagulants dominate venous and AF cardioembolic prevention — with important overlaps (e.g., AF+PCI dual pathway).",
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
      ],
      "objectiveIds": [
        6
      ]
    },
    {
      "id": "i-02",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Why can early depletion of protein C contribute to transient hypercoagulability when warfarin is initiated for acute VTE?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin immediately blocks thrombin; protein C rises first, causing bleeding"
        },
        {
          "id": "b",
          "text": "Warfarin reduces vitamin K-dependent natural anticoagulant proteins; early protein C depletion can precede full reduction of longer-lived procoagulant factors, especially prothrombin"
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
      "explanation": "Warfarin reduces production of functional vitamin K-dependent coagulation proteins. Protein C has a shorter physiological half-life than protein S, so early protein C depletion can contribute to transient hypercoagulability before longer-lived procoagulant factors, especially factor II, fully decline. Acute VTE initiation with warfarin therefore uses a protocol-directed parenteral overlap.",
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
      ],
      "objectiveIds": [
        2
      ]
    },
    {
      "id": "i-03",
      "domainId": "I",
      "difficulty": "core",
      "stem": "How should CHA₂DS₂-VASc and bleeding-risk assessment be used together when counseling a patient with NVAF?",
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
      "explanation": "Guideline teaching: use stroke-risk scores to identify who benefits from OAC. HAS-BLED (or similar) flags modifiable bleed risks (blood pressure, nonsteroidal anti-inflammatory drugs, alcohol, labile INR) — it should not automatically cancel indicated anticoagulation.",
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
      ],
      "objectiveIds": [
        13
      ]
    },
    {
      "id": "i-04",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient is being assessed for suspected venous thromboembolism using a probability score validated for the suspected condition. What is the principal role of Wells or, for PE, revised Geneva assessment?",
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
      "explanation": "Pretest probability tools (Wells, revised Geneva) structure the diagnostic pathway (D-dimer vs imaging). They are not DOAC-selection tools after confirmed VTE. Wells estimates diagnostic probability; PESI assesses severity after PE is diagnosed. Neither substitutes for imaging when indicated or selects an anticoagulant regimen.",
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
        }
      ],
      "objectiveIds": [
        11
      ]
    },
    {
      "id": "i-05",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A patient has triple-positive antiphospholipid syndrome with prior thrombosis. Which long-term anticoagulant strategy best fits the site's high-risk pathway?",
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
          "text": "Low-dose rivaroxaban 2.5 mg twice daily + aspirin (COMPASS) is the antiphospholipid syndrome standard"
        }
      ],
      "correctId": "b",
      "explanation": "Specialty guidance prefers VKA in high-risk / triple-positive antiphospholipid syndrome. Standard DOAC VTE programs were not dedicated high-risk antiphospholipid syndrome replacements. COMPASS vascular dosing is a different population entirely.",
      "teachingPoints": [
        "TRAPS/RAPS-era literature informs DOAC caution — those trials are not curated cards on this timeline; avoid inventing their event rates.",
        "Confirm persistent antibodies (≥12 weeks) when classifying antiphospholipid syndrome."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "aps",
          "label": "APS pathway"
        },
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS triple-positive VKA"
        },
        {
          "kind": "case",
          "id": "aps-triple-positive-doac",
          "label": "Case: Triple-positive APS DOAC request"
        }
      ],
      "objectiveIds": [
        18,
        20
      ]
    },
    {
      "id": "i-06",
      "domainId": "I",
      "difficulty": "core",
      "stem": "In AF-related cardioembolic disease, which anatomic site commonly develops thrombus because of atrial stasis?",
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
      ],
      "objectiveIds": [
        13
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
      ],
      "objectiveIds": [
        2
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
      "explanation": "Cancer-associated thrombosis risk is multifactorial. Caravaggio-era evidence supports DOACs for many patients, with caution for luminal GI/genitourinary bleed risk, thrombocytopenia, and oral anticancer DDIs. The cancer diagnosis alone does not make every oral regimen suitable. Bleeding anatomy, platelet status, and interactions distinguish the treatment options.",
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
      ],
      "objectiveIds": [
        7,
        18
      ]
    },
    {
      "id": "i-09",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which description best explains why heparin-induced thrombocytopenia can cause thrombosis despite a reduced platelet count?",
      "choices": [
        {
          "id": "a",
          "text": "A simple dose-dependent bleeding toxicity of heparin"
        },
        {
          "id": "b",
          "text": "An immune-mediated prothrombotic disorder (often platelet factor 4/heparin antibodies) that can cause thrombosis despite thrombocytopenia"
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
      "explanation": "Heparin-induced thrombocytopenia is immune-mediated and paradoxically prothrombotic. Management uses non-heparin anticoagulants and avoids warfarin until platelets recover — details follow specialty protocols.",
      "teachingPoints": [
        "4Ts score helps pretest probability before laboratory testing.",
        "The ASH 2018 heparin-induced thrombocytopenia guideline recommends against starting a VKA such as warfarin in acute heparin-induced thrombocytopenia before platelet count recovery, citing harms that include new or progressive thrombosis and venous limb gangrene."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-10",
      "domainId": "I",
      "difficulty": "core",
      "stem": "How does PE severity assessment using ventricular findings, biomarkers, and clinical status affect management decisions?",
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
        "See HI-PEITHO number needed to treat teaching only for the enriched trial composite."
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
        },
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
        }
      ],
      "objectiveIds": [
        11
      ]
    },
    {
      "id": "i-11",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Why does AF with moderate–severe rheumatic mitral stenosis remain a distinct VKA treatment setting?",
      "choices": [
        {
          "id": "a",
          "text": "DOAC landmark AF trials excluded this population; INVICTUS-era teaching supports VKA over rivaroxaban in rheumatic valvular AF"
        },
        {
          "id": "b",
          "text": "DOACs are more effective than warfarin in rheumatic mitral stenosis"
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
      "explanation": "Pivotal DOAC NVAF trials excluded moderate–severe rheumatic mitral stenosis. INVICTUS informs VKA preference in rheumatic valvular AF — see the trial card on this site. This is a population-specific evidence boundary, not proof that aspirin or empiric reduced-dose DOAC therapy provides equivalent protection.",
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
      ],
      "objectiveIds": [
        20
      ]
    },
    {
      "id": "i-12",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which best describes the role of tissue factor in initiating coagulation in vivo?",
      "choices": [
        {
          "id": "a",
          "text": "Tissue factor activates the contact pathway exclusively via factor XII"
        },
        {
          "id": "b",
          "text": "Exposed tissue factor complexes with factor VIIa to initiate the extrinsic pathway, amplifying thrombin generation"
        },
        {
          "id": "c",
          "text": "Tissue factor is the primary target of idarucizumab"
        },
        {
          "id": "d",
          "text": "Tissue factor deficiency causes heparin resistance"
        }
      ],
      "correctId": "b",
      "explanation": "Tissue factor–VIIa initiates extrinsic pathway thrombin generation after vascular injury. Contact pathway (XII) is more relevant to some device/surface thrombosis and FXI-inhibitor rationale — not tissue factor biology.",
      "teachingPoints": [
        "DOACs target factor Xa or thrombin downstream of initiation.",
        "Warfarin reduces multiple vitamin K–dependent factors including VII."
      ],
      "links": [],
      "objectiveIds": [
        1
      ]
    },
    {
      "id": "ii-01",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which long-term oral anticoagulant strategy is generally preferred for an otherwise eligible patient with NVAF?",
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
      "explanation": "ACC/AHA/ESC teaching generally favors a DOAC over a VKA in eligible AF. Warfarin remains appropriate for mechanical valves, moderate–severe mitral stenosis, and many patients with high-risk antiphospholipid syndrome, or when DOAC access or eligibility is inadequate.",
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
      ],
      "objectiveIds": [
        20
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
          "text": "Apixaban 5 mg twice daily"
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
          "text": "Dabigatran 150 mg twice daily based on RE-LY"
        }
      ],
      "correctId": "c",
      "explanation": "Mechanical valves are VKA territory. DOAC AF/VTE trials excluded them. The RE-ALIGN card is the dabigatran mechanical-valve trial that stopped early for harm. PROACT is warfarin-based On-X care, and PROACT Xa did not show apixaban noninferior to warfarin. Target INR by position/thrombogenicity per guideline tables.",
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
          "id": "re-align",
          "label": "RE-ALIGN"
        },
        {
          "kind": "trial",
          "id": "proact",
          "label": "PROACT"
        },
        {
          "kind": "trial",
          "id": "proact-xa",
          "label": "PROACT Xa"
        },
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE (AF contrast)"
        },
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        },
        {
          "kind": "case",
          "id": "mechanical-avr-doac-request",
          "label": "Case: Mechanical AVR DOAC request"
        }
      ],
      "objectiveIds": [
        15,
        20
      ]
    },
    {
      "id": "ii-03",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient with acute PE has hypotension and organ hypoperfusion. Which management priority best fits this presentation?",
      "choices": [
        {
          "id": "a",
          "text": "Outpatient rivaroxaban monotherapy despite hypotension and organ hypoperfusion"
        },
        {
          "id": "b",
          "text": "Stabilization and institutional high-risk PE reperfusion / advanced therapy pathway — not oral DOAC alone"
        },
        {
          "id": "c",
          "text": "COMPASS rivaroxaban 2.5 mg twice daily + aspirin"
        },
        {
          "id": "d",
          "text": "Watchful waiting without anticoagulation"
        }
      ],
      "correctId": "b",
      "explanation": "High-risk/massive PE is a reperfusion and critical-care pathway. Oral DOAC monotherapy is for eligible stable patients after appropriate triage. Hemodynamic instability changes the immediate care setting and assessment. A stable-patient oral regimen does not substitute for urgent stabilization and reperfusion evaluation.",
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
        },
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
        }
      ],
      "objectiveIds": [
        24,
        47
      ]
    },
    {
      "id": "ii-04",
      "domainId": "II",
      "difficulty": "core",
      "stem": "What aspect of the COBRRA comparison can inform shared choice between apixaban and rivaroxaban for eligible acute VTE?",
      "choices": [
        {
          "id": "a",
          "text": "Rivaroxaban eliminated all bleeding vs apixaban"
        },
        {
          "id": "b",
          "text": "Clinically relevant bleeding was lower with apixaban than rivaroxaban when both fit — see site number needed to treat teaching from published absolute rates"
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
      "explanation": "COBRRA found less clinically relevant bleeding with apixaban vs rivaroxaban (3.3% vs 7.1%). This site reports number needed to treat ≈26 from that absolute risk reduction — use it for counseling when both agents otherwise fit.",
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
      ],
      "objectiveIds": [
        24
      ]
    },
    {
      "id": "ii-05",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "How should FRAIL-AF inform a request to switch a frail older adult who is stable on warfarin?",
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
      "explanation": "FRAIL-AF reported higher major/CRNM bleeding after switch to DOAC (15.3% vs 9.4%). Stable VKA with good time in therapeutic range can be reasonable; ELDERCARE-AF addresses a different question (carefully selected low-dose edoxaban initiation).",
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
      ],
      "objectiveIds": [
        26
      ]
    },
    {
      "id": "ii-06",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient is being treated for a surgically provoked proximal DVT, and the provoking risk has resolved. Which total-duration principle is most appropriate?",
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
      ],
      "objectiveIds": [
        38
      ]
    },
    {
      "id": "ii-07",
      "domainId": "II",
      "difficulty": "core",
      "stem": "For AF with recent PCI, which antithrombotic combination best reflects the AUGUSTUS-era treatment approach?",
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
      "explanation": "AUGUSTUS: apixaban beat VKA for bleeding; aspirin increased bleeding vs placebo on P2Y12 + OAC. Dual pathway is the Monday-morning template; triple therapy is a short bridge. The early coronary setting differs from stable CAD on long-term OAC. An antiplatelet is not a substitute for AF anticoagulation, and prolonged triple therapy adds bleeding risk.",
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
        },
        {
          "kind": "framework",
          "id": "af-pci-dual-pathway",
          "label": "Framework: AF + PCI dual pathway"
        },
        {
          "kind": "nuance",
          "id": "dual-pathway-duration",
          "label": "Nuance: Dual-pathway duration"
        }
      ],
      "objectiveIds": [
        20,
        36
      ]
    },
    {
      "id": "ii-08",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "What is the most appropriate counseling implication of the site's ENRICH-AF teaching for AF after ICH?",
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
      "explanation": "ENRICH-AF did not significantly reduce its composite of stroke (ischemic or hemorrhagic) or SE with edoxaban versus no anticoagulation (HR 0.88 on the site card). Ischemic stroke reduction must be weighed against excess major bleeding, including hemorrhagic stroke. Prior ICH subtype and the individual cardioembolic risk remain central to multidisciplinary decisions.",
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
        },
        {
          "kind": "framework",
          "id": "post-ich-anticoagulation",
          "label": "Framework: Post-ICH"
        },
        {
          "kind": "case",
          "id": "post-ich-af",
          "label": "Case: Post-ICH AF"
        }
      ],
      "objectiveIds": [
        24,
        38
      ]
    },
    {
      "id": "ii-09",
      "domainId": "II",
      "difficulty": "core",
      "stem": "How does the site describe U.S. care for life-threatening apixaban or rivaroxaban bleeding after the December 22, 2025 Andexxa withdrawal?",
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
      "explanation": "AstraZeneca voluntarily withdrew the Andexxa biologics license application and ended U.S. sales Dec 22, 2025 after FDA concluded risks outweighed benefits; FXa major bleed teaching is supportive care + institutional/off-label 4F-PCC per protocol (not an FDA-labeled FXa antidote). Idarucizumab remains dabigatran-specific. ANNEXA-I TE figures contextualize why.",
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
      ],
      "objectiveIds": [
        33,
        41
      ]
    },
    {
      "id": "ii-10",
      "domainId": "II",
      "difficulty": "core",
      "stem": "What does BRIDGE support when warfarin is interrupted in typical NVAF without a mechanical prosthesis?",
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
        },
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        }
      ],
      "objectiveIds": [
        43
      ]
    },
    {
      "id": "ii-11",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which anticoagulant class usually fits treatment of pregnancy-associated VTE, with specialist obstetric coordination?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban 10 mg twice daily then 5 mg twice daily"
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
          "text": "Rivaroxaban 2.5 mg twice daily + aspirin"
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
      ],
      "objectiveIds": [
        25,
        26,
        68
      ]
    },
    {
      "id": "ii-12",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which patient population matches the COMPASS vascular-protection regimen rather than full-dose AF or VTE anticoagulation?",
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
          "text": "Triple-positive antiphospholipid syndrome as first-line"
        },
        {
          "id": "d",
          "text": "Mechanical aortic valves after On-X implant"
        }
      ],
      "correctId": "b",
      "explanation": "COMPASS is a vascular-dose strategy for selected chronic atherosclerosis — not AF stroke prevention, not antiphospholipid syndrome, not mechanical valves. Screen out patients who already need full-dose OAC.",
      "teachingPoints": [
        "VOYAGER PAD informs post lower-extremity revascularization vascular-dose use.",
        "Bleeding and blood pressure control matter for net benefit."
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
        },
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "Framework: COMPASS vascular dose"
        },
        {
          "kind": "case",
          "id": "compass-vs-af-dose-trap",
          "label": "Case: COMPASS vs AF dose trap"
        }
      ],
      "objectiveIds": [
        20,
        24
      ]
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
          "text": "Coronary computed tomography angiography in every patient"
        }
      ],
      "correctId": "b",
      "explanation": "Indication + renal dosing + DDI screen + shared bleed-risk planning are the core pre-start bundle. Under-dosing “for safety” without meeting label criteria is a common error. Eligibility is indication- and agent-specific. Aspirin substitution or an arbitrary reduced dose does not reproduce the labeled anticoagulant strategy.",
      "teachingPoints": [
        "Use the DDI library for P-glycoprotein/CYP3A4 checks.",
        "Case: AF with chronic kidney disease and prior GI bleed on this site."
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
      ],
      "objectiveIds": [
        22,
        24,
        30,
        40
      ]
    },
    {
      "id": "ii-14",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "What treatment sequence preceded edoxaban in its pivotal acute VTE program?",
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
      "explanation": "Hokusai-VTE used heparin lead-in then edoxaban — unlike single-drug apixaban/rivaroxaban initiation regimens. A reduced extended-prevention regimen is not acute treatment. The transition should match the actual trial design rather than assume every DOAC has an oral-only initial phase.",
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
      ],
      "objectiveIds": [
        36
      ]
    },
    {
      "id": "ii-15",
      "domainId": "II",
      "difficulty": "core",
      "stem": "For cancer-associated venous thromboembolism with high luminal gastrointestinal bleed risk or severe thrombocytopenia, which management approach is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Force oral DOAC regardless of platelets"
        },
        {
          "id": "b",
          "text": "An individualized cancer-associated VTE plan, often involving LMWH or specialist-directed alternatives, with intensity or temporary interruption determined by platelet status, bleeding, and clot acuity"
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
      "explanation": "Direct oral anticoagulants help many patients with cancer-associated venous thromboembolism, but luminal gastrointestinal or genitourinary disease, severe thrombocytopenia, and major drug interactions often make an oral regimen unsuitable. Unspecified severe thrombocytopenia does not by itself establish that full therapeutic-intensity low-molecular-weight heparin is safe. Intensity, temporary interruption, and the choice of low-molecular-weight heparin or another specialist-directed plan depend on platelet count, bleeding, and clot acuity.",
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
      ],
      "objectiveIds": [
        22,
        24
      ]
    },
    {
      "id": "ii-16",
      "domainId": "II",
      "difficulty": "core",
      "stem": "When medication-based extension is appropriate after VTE, how does aspirin compare with reduced-dose DOAC prevention?",
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
        "AMPLIFY-EXT supports apixaban 2.5 mg twice daily vs placebo.",
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
      ],
      "objectiveIds": [
        38
      ]
    },
    {
      "id": "ii-17",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient on dabigatran has life-threatening ICH. Which agent provides specific reversal when indicated?",
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
          "text": "Vitamin K alone"
        },
        {
          "id": "d",
          "text": "Protamine as a dabigatran-specific antidote"
        }
      ],
      "correctId": "b",
      "explanation": "Idarucizumab is the specific dabigatran reversal agent (RE-VERSE AD). Andexanet targeted FXa inhibitors and is withdrawn in the U.S.; vitamin K does not reverse dabigatran; protamine reverses heparin, not dabigatran.",
      "teachingPoints": [
        "Initial assessment includes airway, breathing, circulation, and source control.",
        "Restart timing requires a named owner after hemostasis."
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
      ],
      "objectiveIds": [
        33,
        41
      ]
    },
    {
      "id": "ii-18",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient with NVAF has elevated stroke and bleeding scores. How should HAS-BLED inform the management discussion?",
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
      "explanation": "High bleed scores flag modifiable factors (hypertension, nonsteroidal anti-inflammatory drugs/alcohol, labile INR, anemia) — they are not an automatic OAC cancellation when stroke risk is high. A bleeding score does not replace stroke-risk assessment. Risk-factor mitigation and an individualized plan differ from withholding indicated therapy solely because a score is high.",
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
      ],
      "objectiveIds": [
        13,
        41
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
          "text": "Fasting administration of all strengths regardless of labeling"
        },
        {
          "id": "b",
          "text": "The labeled 15–20 mg tablets are taken with food to support absorption"
        },
        {
          "id": "c",
          "text": "Unreviewed tablet manipulation and grapefruit juice as a universal absorption strategy"
        },
        {
          "id": "d",
          "text": "Omission of anticoagulant doses whenever a nonsteroidal anti-inflammatory drug is used"
        }
      ],
      "correctId": "b",
      "explanation": "The XARELTO label states that 15 mg and 20 mg tablets should be taken with food; food raises 20 mg exposure. This is a product- and strength-specific absorption rule, not a requirement to avoid vitamin K foods. Apixaban and dabigatran do not inherit the same food instruction.",
      "teachingPoints": [
        "The label also gives bleeding precautions and missed-dose instructions.",
        "Drug-specific counseling should be confirmed with teach-back and documented in the education plan."
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
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-02",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Why is teach-back useful when evaluating a patient's understanding of newly prescribed anticoagulation?",
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
      "explanation": "Teach-back improves confirmation of understanding across health-literacy levels — indication, how to take, what bleeding looks like, drug interactions (nonsteroidal anti-inflammatory drugs), and emergency contacts.",
      "teachingPoints": [
        "Use plain language; avoid jargon like “thromboembolism” without translation.",
        "Offer translated materials when needed."
      ],
      "links": [],
      "objectiveIds": [
        55
      ]
    },
    {
      "id": "iii-03",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient asks about regular over-the-counter ibuprofen while taking apixaban. Which education response best explains the interaction?",
      "choices": [
        {
          "id": "a",
          "text": "Nonsteroidal anti-inflammatory drugs have no interaction with DOACs — use liberally"
        },
        {
          "id": "b",
          "text": "Nonsteroidal anti-inflammatory drugs add pharmacodynamic bleed risk; prefer acetaminophen when possible and ask before regular nonsteroidal anti-inflammatory drug use"
        },
        {
          "id": "c",
          "text": "Ibuprofen reverses apixaban and is encouraged"
        },
        {
          "id": "d",
          "text": "Only naproxen is safe; ibuprofen is not a nonsteroidal anti-inflammatory drug"
        }
      ],
      "correctId": "b",
      "explanation": "Nonsteroidal anti-inflammatory drugs can add bleeding risk through platelet effects and gastrointestinal mucosal injury. This is a pharmacodynamic interaction and does not require a change in anticoagulant concentration. Education includes discussion of nonprescription analgesics and drug-specific interaction review.",
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
      ],
      "objectiveIds": [
        52,
        60
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
      "explanation": "Warfarin education emphasizes consistent vitamin K intake, not lifelong vegetable avoidance. DOACs are not meaningfully affected by dietary vitamin K the way VKAs are. A sudden diet change can destabilize INR even when the prescribed dose is unchanged. Eliminating vegetables or using food as a self-directed dose adjustment is not the goal.",
      "teachingPoints": [
        "Alcohol binge and new antibiotics still warrant contact.",
        "Time in therapeutic range improves when patients understand “consistency.”"
      ],
      "links": [],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-05",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "What is the safest general principle when teaching a patient how to respond to a missed DOAC dose?",
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
      "explanation": "Missed-dose rules differ by agent and time window. Teach patients to use the label/clinic instructions and to call rather than double-dose by guesswork. Aspirin substitution, skipped-day schedules, and an improvised double dose do not reproduce labeled treatment. Repeated misses call for an adherence-barrier review.",
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
      ],
      "objectiveIds": [
        52,
        57
      ]
    },
    {
      "id": "iv-01",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which mechanism distinguishes dabigatran from oral FXa inhibitors, warfarin, and antiplatelet drugs?",
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
          "text": "Irreversible cyclooxygenase-1 inhibition"
        }
      ],
      "correctId": "b",
      "explanation": "Dabigatran is a direct thrombin inhibitor. Apixaban/rivaroxaban/edoxaban inhibit factor Xa. Warfarin inhibits vitamin K epoxide reductase; aspirin inhibits cyclooxygenase-1. Direct enzyme inhibition differs from reduced synthesis of vitamin K-dependent proteins or platelet inhibition. The target explains why reversal options are drug-specific.",
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
      ],
      "objectiveIds": [
        3,
        63
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
      "explanation": "The oral FXa inhibitors block factor Xa. That shared target also framed why andexanet was developed — and why U.S. FXa bleed care changed after Andexxa withdrawal. A shared target does not imply identical food effects, renal rules, or dose schedules. Dabigatran targets thrombin, while warfarin affects vitamin K-dependent protein production.",
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
      ],
      "objectiveIds": [
        3,
        63
      ]
    },
    {
      "id": "iv-03",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "What is the principal interaction concern when a DOAC is combined with strong enzyme or transporter inducers?",
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
      "explanation": "Inducers can lower DOAC levels (see site DDI cards with published area under the concentration-time curve decreases where available). Teaching frame: thrombosis risk, often avoid — opposite of strong-inhibitor bleed risk.",
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
      ],
      "objectiveIds": [
        69
      ]
    },
    {
      "id": "iv-04",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "INR calculation uses the International Sensitivity Index. Which statement correctly explains its role?",
      "choices": [
        {
          "id": "a",
          "text": "INR = patient prothrombin time / mean normal prothrombin time without any reagent adjustment"
        },
        {
          "id": "b",
          "text": "INR standardizes prothrombin time across thromboplastin reagents using the International Sensitivity Index"
        },
        {
          "id": "c",
          "text": "International Sensitivity Index is only used for activated partial thromboplastin time heparin monitoring"
        },
        {
          "id": "d",
          "text": "INR replaces the need for knowing the clinical indication’s target range"
        }
      ],
      "correctId": "b",
      "explanation": "INR is calculated by raising the ratio of patient prothrombin time to mean normal prothrombin time to the power of the International Sensitivity Index. This correction addresses thromboplastin sensitivity; it does not measure DOAC concentration or platelet function. Point-of-care results still require appropriate quality and correlation procedures.",
      "teachingPoints": [
        "Point-of-care INR still needs quality systems (see Domain V).",
        "DOACs are not monitored with INR for dosing."
      ],
      "links": [],
      "objectiveIds": [
        27,
        28
      ]
    },
    {
      "id": "iv-05",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Activated partial thromboplastin time is most traditionally used to monitor which anticoagulant?",
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
      "explanation": "Unfractionated heparin is commonly monitored with activated partial thromboplastin time (or anti-Xa). DOAC dosing is not guided by activated partial thromboplastin time targets; LMWH often uses anti-Xa in selected populations. The result is interpreted with the institutional assay and clinical context. It is not a universal oral-anticoagulant dose target, and lupus anticoagulant can confound it.",
      "teachingPoints": [
        "Know your lab’s unfractionated heparin therapeutic activated partial thromboplastin time range mapped to anti-Xa.",
        "Lupus anticoagulant can confound activated partial thromboplastin time."
      ],
      "links": [],
      "objectiveIds": [
        28,
        65
      ]
    },
    {
      "id": "iv-06",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "What clinical question can an LMWH-calibrated anti-Xa assay answer when a protocol calls for selective monitoring?",
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
          "text": "Diagnose heparin-induced thrombocytopenia antibodies"
        },
        {
          "id": "d",
          "text": "Replace CHA₂DS₂-VASc"
        }
      ],
      "correctId": "b",
      "explanation": "LMWH anti-Xa levels guide dosing in special populations when protocols call for them — not routine for every LMWH patient. The calibration and sampling time must match the intended drug and protocol. A result from one assay cannot automatically be treated as a DOAC level or a warfarin INR.",
      "teachingPoints": [
        "Peak timing matters for interpretation.",
        "DOAC-calibrated anti-Xa exists in some labs but is not a routine dosing tool like INR for warfarin."
      ],
      "links": [],
      "objectiveIds": [
        28,
        65
      ]
    },
    {
      "id": "iv-07",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Which bundle supports rapid and sustained reversal in life-threatening warfarin-associated bleeding?",
      "choices": [
        {
          "id": "a",
          "text": "Idarucizumab alone"
        },
        {
          "id": "b",
          "text": "4F-PCC plus intravenous vitamin K per institutional protocol"
        },
        {
          "id": "c",
          "text": "Andexxa as first-line in the U.S. after Dec 2025"
        },
        {
          "id": "d",
          "text": "Oral vitamin K only, waiting 24 hours before prothrombin complex concentrate"
        }
      ],
      "correctId": "b",
      "explanation": "For life-threatening VKA bleeding, 4F-PCC provides rapid factor replacement and vitamin K supports sustained reversal. Fresh frozen plasma is an alternative when 4F-PCC is unavailable. Andexxa is not a warfarin reversal agent and is no longer available in the U.S.",
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
      ],
      "objectiveIds": [
        70
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
      "explanation": "Labels differ by agent (apixaban’s age/weight/creatinine criteria vs rivaroxaban/edoxaban/dabigatran renal cutoffs). Prefer label language over memorized universal numbers; this site avoids inventing cutoffs.",
      "teachingPoints": [
        "Severe chronic kidney disease may push to warfarin or specialty options.",
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
      ],
      "objectiveIds": [
        65
      ]
    },
    {
      "id": "iv-09",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which outcome is most likely when regular nonsteroidal anti-inflammatory drug use adds pharmacodynamic risk during DOAC therapy?",
      "choices": [
        {
          "id": "a",
          "text": "DOAC hepatic metabolism via cytochrome P450 2D6 induction"
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
      "explanation": "Nonsteroidal anti-inflammatory drug bleed risk with anticoagulants is largely pharmacodynamic (platelet function + mucosal injury), distinct from pharmacokinetic inhibitor/inducer stories. Site DDI cards separate pharmacodynamic stacks from pharmacokinetic exposure.",
      "teachingPoints": [
        "Same frame for selective serotonin reuptake inhibitor/serotonin-norepinephrine reuptake inhibitor pharmacodynamic bleed caution without forcing fake universal HRs.",
        "Ask about over-the-counter analgesics at every visit."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-nsaids",
          "label": "Apixaban–NSAIDs"
        }
      ],
      "objectiveIds": [
        67,
        69
      ]
    },
    {
      "id": "iv-10",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Which acute VTE regimen was used for apixaban in AMPLIFY, before later extended-prevention decisions?",
      "choices": [
        {
          "id": "a",
          "text": "2.5 mg twice daily from day 1"
        },
        {
          "id": "b",
          "text": "10 mg twice daily for 7 days, then 5 mg twice daily"
        },
        {
          "id": "c",
          "text": "20 mg once daily with food indefinitely"
        },
        {
          "id": "d",
          "text": "Parenteral heparin for 5 days then 2.5 mg twice daily"
        }
      ],
      "correctId": "b",
      "explanation": "AMPLIFY: apixaban 10 mg twice daily × 7 days → 5 mg twice daily. Extended prevention may later use 2.5 mg twice daily (AMPLIFY-EXT) — different phase. The reduced extended-prevention regimen belongs to a later phase studied in AMPLIFY-EXT. Starting with that lower intensity would not reproduce AMPLIFY acute treatment.",
      "teachingPoints": [
        "The AMPLIFY protocol did not start acute VTE treatment at 2.5 mg twice daily.",
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
      ],
      "objectiveIds": [
        65
      ]
    },
    {
      "id": "iv-11",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which initial-to-maintenance rivaroxaban regimen was used in the EINSTEIN acute VTE program?",
      "choices": [
        {
          "id": "a",
          "text": "15 mg twice daily with food for 21 days, then 20 mg daily with food"
        },
        {
          "id": "b",
          "text": "5 mg twice daily lifelong without load"
        },
        {
          "id": "c",
          "text": "2.5 mg twice daily + aspirin from day 1 for DVT"
        },
        {
          "id": "d",
          "text": "150 mg twice daily after heparin lead-in"
        }
      ],
      "correctId": "a",
      "explanation": "EINSTEIN-DVT and EINSTEIN-PE used 15 mg twice daily for 3 weeks, then 20 mg once daily; the XARELTO label describes these doses as taken with food. COMPASS 2.5 mg twice daily is a different indication.",
      "teachingPoints": [
        "The label pairs the 15 mg and 20 mg tablets with food.",
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
      ],
      "objectiveIds": [
        65
      ]
    },
    {
      "id": "iv-12",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "What is the principal concern when a DOAC is combined with a strong transporter or metabolic inhibitor?",
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
      "explanation": "Inhibitors can raise DOAC exposure. Site DDI cards cite published area under the concentration-time curve changes when available (e.g., azoles, Paxlovid, boosters) and label-extrapolation when not — never invent numbers.",
      "teachingPoints": [
        "Apixaban labeling has specific rules for strong combined P-glycoprotein and CYP3A4 inhibitors, including certain protease inhibitors and azole antifungals; the existing regimen and interacting product matter.",
        "Pharmacodynamic bleeding interactions differ from pharmacokinetic effects on exposure."
      ],
      "links": [],
      "objectiveIds": [
        69
      ]
    },
    {
      "id": "iv-13",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which mechanism best describes how enoxaparin and other LMWH products produce anticoagulation?",
      "choices": [
        {
          "id": "a",
          "text": "Direct oral factor Xa active-site occupation like apixaban"
        },
        {
          "id": "b",
          "text": "Antithrombin-dependent inhibition, with relatively greater anti-Xa than anti-IIa activity vs unfractionated heparin"
        },
        {
          "id": "c",
          "text": "Irreversible platelet cyclooxygenase-1 blockade"
        },
        {
          "id": "d",
          "text": "Vitamin K epoxide reductase blockade"
        }
      ],
      "correctId": "b",
      "explanation": "LMWH potentiates antithrombin; chain-length distribution yields higher anti-Xa:anti-IIa ratios than unfractionated heparin. It is not a DOAC and not a VKA. The greater relative anti-Xa activity does not mean direct oral FXa inhibition. Renal accumulation and incomplete protamine reversal distinguish its practical use.",
      "teachingPoints": [
        "Renal clearance matters for accumulation.",
        "Protamine only partially reverses LMWH."
      ],
      "links": [],
      "objectiveIds": [
        63
      ]
    },
    {
      "id": "v-01",
      "domainId": "V",
      "difficulty": "core",
      "stem": "What does time in therapeutic range measure in a warfarin clinic, and how can it support quality improvement?",
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
      "explanation": "Time in therapeutic range quantifies INR control quality for warfarin-treated populations. Poor time in therapeutic range may prompt adherence interventions, more frequent monitoring, or reconsideration of DOAC eligibility. It is not a DOAC monitoring metric or a stand-alone measure of clinical outcomes. Interpretation requires the prescribed INR target and reliable follow-up data.",
      "teachingPoints": [
        "Rosendaal linear interpolation is a common time in therapeutic range method.",
        "Clinic-level time in therapeutic range supports program quality improvement."
      ],
      "links": [],
      "objectiveIds": [
        76
      ]
    },
    {
      "id": "v-02",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "Which quality infrastructure is needed when an anticoagulation clinic offers point-of-care INR testing?",
      "choices": [
        {
          "id": "a",
          "text": "No quality controls because point-of-care devices are always accurate"
        },
        {
          "id": "b",
          "text": "A quality system consistent with applicable Clinical Laboratory Improvement Amendments/waived-test rules, training, and correlation policies with the lab"
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
      "explanation": "Point-of-care INR is convenient but still a regulated testing activity — training, quality control, and policies for when to verify with a laboratory INR matter for patient safety. A waived-test category does not remove quality responsibilities. Unresolved control failures or disagreement with laboratory testing require a documented response.",
      "teachingPoints": [
        "Know which tests are waived vs higher complexity in your setting.",
        "Document device maintenance and staff competency."
      ],
      "links": [],
      "objectiveIds": [
        74
      ]
    },
    {
      "id": "v-03",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Which set of activities best describes the purpose of an anticoagulation stewardship program?",
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
          "text": "Replace shared decision-making with automatic electronic health record pop-ups alone"
        }
      ],
      "correctId": "b",
      "explanation": "Stewardship aligns prescribing with evidence (DOAC niches vs VKA niches, dual pathway after PCI, U.S. FXa reversal reality) and builds reliable operational pathways. Operational stewardship includes monitoring whether the intended plan is executed, rather than automatically choosing the newest agent or ignoring high-risk exceptions.",
      "teachingPoints": [
        "Track metrics that matter (appropriate agent, time in therapeutic range, protocol deviations).",
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
      ],
      "objectiveIds": [
        84
      ]
    },
    {
      "id": "i-13",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient has persistent leg symptoms after proximal DVT. Which description best explains post-thrombotic syndrome?",
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
          "text": "A synonym for heparin-induced thrombocytopenia type II"
        },
        {
          "id": "d",
          "text": "Proof that DOACs are contraindicated after any DVT"
        }
      ],
      "correctId": "b",
      "explanation": "Post-thrombotic syndrome is a long-term venous insufficiency syndrome after DVT. Anticoagulation that prevents recurrence and appropriate acute care may lower risk; it is not an acute PE thrombolysis indication by itself.",
      "teachingPoints": [
        "Compression and symptomatic care are adjuncts — follow guideline/local protocols.",
        "Iliofemoral DVT carries higher post-thrombotic syndrome risk than distal DVT."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "acute-vte",
          "label": "Acute VTE pathway"
        }
      ],
      "objectiveIds": [
        12
      ]
    },
    {
      "id": "i-14",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "How should valve type and prosthesis position inform qualitative assessment of valve thrombosis risk?",
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
        },
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        },
        {
          "kind": "case",
          "id": "mechanical-avr-doac-request",
          "label": "Case: Mechanical AVR DOAC request"
        }
      ],
      "objectiveIds": [
        15
      ]
    },
    {
      "id": "i-15",
      "domainId": "I",
      "difficulty": "core",
      "stem": "An anticoagulated patient develops sudden focal neurologic symptoms. What is the first critical distinction in assessment?",
      "choices": [
        {
          "id": "a",
          "text": "Assuming every sudden neurologic deficit is ischemic stroke and using thrombolysis without imaging"
        },
        {
          "id": "b",
          "text": "Rapid neuroimaging and clinical assessment to distinguish ischemic stroke, ICH, and stroke mimics before reperfusion or anticoagulation decisions"
        },
        {
          "id": "c",
          "text": "Stopping all antiplatelets forever after any TIA"
        },
        {
          "id": "d",
          "text": "Using CHA₂DS₂-VASc alone to decide computed tomography vs magnetic resonance imaging"
        }
      ],
      "correctId": "b",
      "explanation": "Sudden focal deficits on OAC require urgent imaging and stroke-team pathways. You cannot safely thrombolyse or continue/restart OAC without knowing hemorrhage versus ischemia. Symptom severity alone cannot establish hemorrhage versus ischemia. Routine dose changes or delayed outpatient testing are not substitutes for urgent stroke evaluation.",
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
        },
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
        }
      ],
      "objectiveIds": [
        14,
        47
      ]
    },
    {
      "id": "i-16",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which combination of mechanisms constitutes Virchow's triad when explaining venous thrombosis risk to a learner?",
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
          "text": "Platelet count, white blood cell count, and hematocrit exclusively"
        },
        {
          "id": "d",
          "text": "INR, activated partial thromboplastin time, and anti-Xa alone"
        }
      ],
      "correctId": "b",
      "explanation": "Classic pathophysiology frame: venous thrombi arise when flow slows, endothelium is injured, and/or blood is hypercoagulable (cancer, antiphospholipid syndrome, estrogen, inherited thrombophilia, etc.).",
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
      ],
      "objectiveIds": [
        7
      ]
    },
    {
      "id": "i-17",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "In heparin-induced thrombocytopenia recognition, which clinical pattern should raise the strongest suspicion?",
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
      "explanation": "Heparin-induced thrombocytopenia is an immune, platelet-activating disorder timed to heparin exposure. Suspect with characteristic timing of thrombocytopenia ± thrombosis (heparin-induced thrombocytopenia with thrombosis); stop heparin and use a non-heparin anticoagulant per institutional heparin-induced thrombocytopenia pathways — do not wait for confirmatory assays alone if suspicion is high.",
      "teachingPoints": [
        "4Ts score structures pretest probability.",
        "LMWH has lower heparin-induced thrombocytopenia risk than unfractionated heparin but is not risk-free."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-18",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Why is antiplatelet therapy central to treatment of typical atherosclerotic arterial thrombosis?",
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
        "COMPASS vascular rivaroxaban 2.5 mg twice daily + aspirin is not full-dose AF OAC."
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
      ],
      "objectiveIds": [
        6,
        17
      ]
    },
    {
      "id": "i-19",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Why does early depletion of natural anticoagulant activity matter when explaining warfarin initiation?",
      "choices": [
        {
          "id": "a",
          "text": "They are not vitamin K–dependent, so warfarin never affects them"
        },
        {
          "id": "b",
          "text": "Warfarin reduces vitamin K-dependent natural anticoagulant proteins; early protein C depletion can precede full reduction of longer-lived procoagulant factors, especially prothrombin"
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
      "explanation": "Warfarin reduces production of functional vitamin K-dependent coagulation proteins. Protein C has a shorter physiological half-life than protein S, so early protein C depletion can contribute to transient hypercoagulability before longer-lived procoagulant factors, especially factor II, fully decline. Acute VTE initiation with warfarin therefore uses a protocol-directed parenteral overlap.",
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
      ],
      "objectiveIds": [
        2,
        34
      ]
    },
    {
      "id": "i-20",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which clinical pattern most often supports considering extended anticoagulation after the initial VTE treatment phase?",
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
      ],
      "objectiveIds": [
        7,
        38
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
      ],
      "objectiveIds": [
        13
      ]
    },
    {
      "id": "i-22",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Which combination of factors best explains the elevated VTE risk in a patient with cancer?",
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
          "text": "All cancer-associated thrombosis must be treated with aspirin monotherapy"
        },
        {
          "id": "d",
          "text": "DOACs are universally safer than LMWH in every GI cancer without exception"
        }
      ],
      "correctId": "b",
      "explanation": "Cancer-associated thrombosis risk is multifactorial. DOACs are options for many patients, but GI/genitourinary luminal cancers and other bleed risks may favor LMWH — see cancer-VTE pathway and trial cards (CARAVAGGIO, Hokusai VTE Cancer, CATCH, API-CAT).",
      "teachingPoints": [
        "Thrombocytopenia and drug–drug interactions with oral anticancer agents also reshape choices.",
        "Do not invent cancer-associated thrombosis incidence percentages on exams — reason qualitatively."
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
      ],
      "objectiveIds": [
        7,
        18
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
          "text": "Wells score replaces computed tomography pulmonary angiography in unstable patients"
        }
      ],
      "correctId": "b",
      "explanation": "Proximal lower-extremity (and pelvic) veins are classic PE sources. After diagnosis, severity tools (PESI, right-ventricular imaging/biomarkers) guide intensity of care — distinct from pretest Wells use.",
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
        }
      ],
      "objectiveIds": [
        9,
        11
      ]
    },
    {
      "id": "i-24",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "How does high-risk antiphospholipid syndrome differ from routine venous thrombosis when considering clinical phenotype and agent selection?",
      "choices": [
        {
          "id": "a",
          "text": "Arterial antiphospholipid syndrome events are always treated with DOAC monotherapy as first-line worldwide"
        },
        {
          "id": "b",
          "text": "High-risk antiphospholipid syndrome can cause arterial and venous thrombosis; VKA therapy is preferred for the triple-positive phenotype rather than extrapolating routine DOAC VTE evidence"
        },
        {
          "id": "c",
          "text": "Antiphospholipid syndrome only causes superficial thrombophlebitis"
        },
        {
          "id": "d",
          "text": "INR targets are irrelevant once lupus anticoagulant is positive"
        }
      ],
      "correctId": "b",
      "explanation": "Antiphospholipid syndrome can cause arterial and venous thrombosis. Triple-positive / high-risk antiphospholipid syndrome is a VKA preference niche on this site; DOACs are generally avoided in that phenotype based on trial signals (e.g., TRAPS-era teaching).",
      "teachingPoints": [
        "Confirm persistent antibodies per diagnostic criteria — do not label antiphospholipid syndrome on a single test.",
        "See antiphospholipid syndrome pathway."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "aps",
          "label": "APS pathway"
        },
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS triple-positive VKA"
        }
      ],
      "objectiveIds": [
        18,
        20
      ]
    },
    {
      "id": "i-25",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Which process best describes how secondary hemostasis stabilizes an initially formed platelet plug?",
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
          "text": "Irreversible cyclooxygenase-1 blockade as the sole pathway"
        }
      ],
      "correctId": "b",
      "explanation": "Primary hemostasis (platelets) forms the plug; secondary hemostasis generates thrombin and fibrin. Anticoagulants target coagulation proteases; antiplatelets target platelet pathways — complementary teaching for mixed arterial/venous disease.",
      "teachingPoints": [
        "Tissue factor–VIIa initiates the extrinsic pathway in vivo.",
        "Common pathway factors Xa and IIa (thrombin) are major drug targets."
      ],
      "links": [],
      "objectiveIds": [
        1
      ]
    },
    {
      "id": "i-26",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "How should obesity and possible altered drug handling be considered when evaluating anticoagulation for VTE?",
      "choices": [
        {
          "id": "a",
          "text": "Fixed invented body mass index cutoffs that always double DOAC dose"
        },
        {
          "id": "b",
          "text": "Obesity can increase VTE risk and may complicate dosing/pharmacokinetic assumptions — use product labeling, institutional guidance, and specialty input rather than invented weight cutoffs"
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
      "explanation": "Obesity is a VTE risk factor and a dosing caution zone (especially extremes of weight). Avoid fabricating body mass index thresholds or area under the concentration-time curve numbers; defer to labels and local protocols. Weight alone is not an indication for aspirin substitution or an improvised anticoagulant dose. Indication, renal function, and absorption context remain part of selection.",
      "teachingPoints": [
        "Bariatric surgery can alter oral absorption — plan monitoring/agent choice carefully.",
        "Document weight and renal function together when selecting regimens."
      ],
      "links": [],
      "objectiveIds": [
        7,
        22
      ]
    },
    {
      "id": "ii-19",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which patient and program features support safe home INR self-testing or a structured self-management program?",
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
          "text": "Only patients with mechanical valves are banned from patient self-testing by definition"
        },
        {
          "id": "d",
          "text": "Patient self-testing replaces the need for any target INR range"
        }
      ],
      "correctId": "b",
      "explanation": "Patient self-testing can improve convenience and sometimes time in therapeutic range in capable patients, but it requires training, quality control mindset, and a covering anticoagulation service — not an unsupervised gadget. Technical ability and reliable reporting both matter. Owning a meter does not establish competence or authorize independent dose changes without a structured management program.",
      "teachingPoints": [
        "Know local coverage/billing and device correlation policies.",
        "Unreliable reporters should stay on clinic-based testing."
      ],
      "links": [],
      "objectiveIds": [
        44,
        45
      ]
    },
    {
      "id": "ii-20",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which anticoagulant options usually have the most established role for a patient who needs treatment while breastfeeding?",
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
      "explanation": "Warfarin and LMWH are traditional lactation-compatible choices in teaching algorithms; DOACs generally lack adequate breastfeeding safety data and are typically avoided. Pregnancy and lactation are different exposure settings. A drug with important fetal risks is not automatically prohibited while breastfeeding, and infant safety needs agent-specific review.",
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
      ],
      "objectiveIds": [
        25,
        26,
        68
      ]
    },
    {
      "id": "ii-21",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which principle best guides anticoagulant use in children rather than transferring an adult AF schedule directly?",
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
      "explanation": "Pediatric VTE and cardiac indications require specialist pathways, weight-based dosing, and formulations suited to children. Adult trial doses are not plug-and-play. Adult AF dosing, height matching, or improvised tablet manipulation cannot establish pediatric VTE eligibility. Development, formulation, and follow-up are part of the decision.",
      "teachingPoints": [
        "VKAs still used in some pediatric cardiac niches with careful INR systems.",
        "When in doubt, escalate to pediatric anticoagulation expertise."
      ],
      "links": [],
      "objectiveIds": [
        26
      ]
    },
    {
      "id": "ii-22",
      "domainId": "II",
      "difficulty": "core",
      "stem": "How should the need for anticoagulant interruption be assessed for a dental procedure?",
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
      ],
      "objectiveIds": [
        43
      ]
    },
    {
      "id": "ii-23",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which competing risks should determine whether a peri-procedural bridging strategy is appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Only the dentist’s preference for a dry field"
        },
        {
          "id": "b",
          "text": "Thrombotic risk of holding anticoagulation (valve type/position, recent VTE/stroke, stroke-risk-score-based risk) versus bleed risk of the procedure and of bridging itself"
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
        },
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        }
      ],
      "objectiveIds": [
        43
      ]
    },
    {
      "id": "ii-24",
      "domainId": "II",
      "difficulty": "core",
      "stem": "When might chromogenic factor X activity help assess the effect of warfarin?",
      "choices": [
        {
          "id": "a",
          "text": "Replacing all INRs in every outpatient forever"
        },
        {
          "id": "b",
          "text": "INR may be unreliable (e.g., certain lupus anticoagulant / baseline prothrombin time effects) and a complementary VKA-effect measure is needed per lab protocols"
        },
        {
          "id": "c",
          "text": "Monitoring apixaban peaks exclusively"
        },
        {
          "id": "d",
          "text": "Diagnosing heparin-induced thrombocytopenia"
        }
      ],
      "correctId": "b",
      "explanation": "Chromogenic factor X can help assess VKA effect when INR interpretation is confounded. It is not a DOAC assay and not a heparin-induced thrombocytopenia test. Assay choice and local interpretation matter. It is not a direct measure of platelet function or a general replacement for all anticoagulant monitoring.",
      "teachingPoints": [
        "Know your lab’s reference ranges and when to order.",
        "Still coordinate with specialty/lab medicine for antiphospholipid syndrome on warfarin."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "aps",
          "label": "APS pathway"
        },
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS triple-positive VKA"
        }
      ],
      "objectiveIds": [
        28,
        29
      ]
    },
    {
      "id": "ii-25",
      "domainId": "II",
      "difficulty": "core",
      "stem": "What should a clinician understand when a point-of-care INR differs from a venous laboratory INR?",
      "choices": [
        {
          "id": "a",
          "text": "Results are always identical to three decimal places"
        },
        {
          "id": "b",
          "text": "Point-of-care and lab INR can disagree — clinics need correlation policies, especially at extremes of INR or when clinical decisions are high-stakes"
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
      "explanation": "Method differences matter. Verify unexpected or critical point-of-care values with a laboratory INR per policy before major dose changes or procedures. A visible device result is not proof of reliability. Selecting the higher number or averaging discordant values does not resolve a method or quality problem.",
      "teachingPoints": [
        "Hematocrit extremes and some interferences can affect point-of-care devices.",
        "Train staff on when to repeat or send out."
      ],
      "links": [],
      "objectiveIds": [
        27,
        29
      ]
    },
    {
      "id": "ii-26",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which de-escalation principle best fits AF with recent PCI while balancing stent and bleeding risks?",
      "choices": [
        {
          "id": "a",
          "text": "Indefinite triple therapy (OAC+dual antiplatelet therapy) for all patients to minimize stent thrombosis at any bleed cost"
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
        },
        {
          "kind": "framework",
          "id": "af-pci-dual-pathway",
          "label": "Framework: AF + PCI dual pathway"
        },
        {
          "kind": "nuance",
          "id": "dual-pathway-duration",
          "label": "Nuance: Dual-pathway duration"
        }
      ],
      "objectiveIds": [
        36,
        38
      ]
    },
    {
      "id": "ii-27",
      "domainId": "II",
      "difficulty": "core",
      "stem": "How should high-risk luminal GI or genitourinary lesions influence anticoagulant choice in cancer-associated VTE?",
      "choices": [
        {
          "id": "a",
          "text": "Full-dose rivaroxaban without discussing bleed risk"
        },
        {
          "id": "b",
          "text": "LMWH as a safer default for many high luminal GI/genitourinary bleed-risk scenarios, with DOAC reconsideration if risk evolves"
        },
        {
          "id": "c",
          "text": "Aspirin 81 mg monotherapy for proximal DVT"
        },
        {
          "id": "d",
          "text": "Inferior vena cava filter as first-line for every cancer-associated thrombosis"
        }
      ],
      "correctId": "b",
      "explanation": "DOAC cancer trials support use in many cancer-associated thrombosis patients, but luminal GI/genitourinary cancer bleed signals push LMWH preference in high-risk anatomy — reassess over time. The decision depends on the individual cancer and treatment context, not a universal prohibition of DOACs. Persistent or changing risk calls for repeated reassessment.",
      "teachingPoints": [
        "API-CAT and others inform extended cancer-associated thrombosis intensity discussions on this site.",
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
      ],
      "objectiveIds": [
        22,
        24
      ]
    },
    {
      "id": "ii-28",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which information is most important in an anticoagulation handoff during a transition of care?",
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
          "text": "Automatic 30-day supply of nonsteroidal anti-inflammatory drugs for pain"
        }
      ],
      "correctId": "b",
      "explanation": "Missing plans, incorrect regimens, and unclear follow-up can cause anticoagulation harm at transitions. Structured handoffs make the intended plan explicit. A medication list alone does not identify who acts on pending tests or bleeding concerns; reconciliation includes nonprescription agents and unresolved tasks.",
      "teachingPoints": [
        "Reconcile over-the-counter nonsteroidal anti-inflammatory drugs and herbals at every transition.",
        "Schedule the first INR or clinic call before discharge when relevant."
      ],
      "links": [],
      "objectiveIds": [
        37,
        48
      ]
    },
    {
      "id": "ii-29",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which clinical situation best fits the specific reversal role of idarucizumab?",
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
      ],
      "objectiveIds": [
        33,
        41
      ]
    },
    {
      "id": "ii-30",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which reversal bundle best fits life-threatening bleeding from a VKA rather than a DOAC?",
      "choices": [
        {
          "id": "a",
          "text": "Andexxa as first-line for warfarin"
        },
        {
          "id": "b",
          "text": "4F-PCC (per institutional protocol) plus vitamin K, with supportive care — not fresh frozen plasma-first as the modern preferred rapid option when prothrombin complex concentrate is available"
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
      ],
      "objectiveIds": [
        33,
        41
      ]
    },
    {
      "id": "ii-31",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which strategy reflects current U.S. site teaching for life-threatening FXa-inhibitor bleeding after Andexxa withdrawal?",
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
      "explanation": "AstraZeneca voluntarily withdrew the Andexxa biologics license application and ended U.S. sales Dec 22, 2025 after FDA concluded risks outweighed benefits. Current site teaching: supportive care + institutional/off-label 4F-PCC per protocol (Andexxa was the labeled FXa agent; now unavailable in U.S.). Idarucizumab remains dabigatran-specific.",
      "teachingPoints": [
        "Know your hospital’s prothrombin complex concentrate dosing protocol.",
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
      ],
      "objectiveIds": [
        33,
        41
      ]
    },
    {
      "id": "ii-32",
      "domainId": "II",
      "difficulty": "core",
      "stem": "How can COBRRA inform the selection of an oral regimen when both apixaban and rivaroxaban are otherwise suitable?",
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
          "text": "COMPASS 2.5 mg twice daily is the acute VTE load"
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
      ],
      "objectiveIds": [
        24
      ]
    },
    {
      "id": "ii-33",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "How should temporary warfarin interruption for an elective procedure be planned for a patient with a mechanical prosthetic valve?",
      "choices": [
        {
          "id": "a",
          "text": "No planning because mechanical valves are low thrombotic risk"
        },
        {
          "id": "b",
          "text": "A coordinated interruption and restart plan that evaluates whether bridging is warranted from valve type, position, patient thrombotic risk, procedure bleeding risk, and the applicable guideline or institutional pathway"
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
      "explanation": "Mechanical valves require reliable VKA management, but perioperative heparin bridging is not automatic. CHEST 2022 suggests against routine bridging for elective VKA interruption in mechanical-valve patients, while selected high-risk circumstances and other valve guidance require individualized review. Valve type and position, prior thromboembolism, the procedure, and restart ownership belong in a coordinated plan; a DOAC is not a mechanical-valve substitute.",
      "teachingPoints": [
        "Coordinate cardiology/surgery/anticoagulation clinic early.",
        "Document restart INR targets."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "mechanical-valve",
          "label": "Mechanical valve pathway"
        },
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve VKA"
        },
        {
          "kind": "case",
          "id": "mechanical-avr-doac-request",
          "label": "Case: Mechanical AVR DOAC request"
        }
      ],
      "objectiveIds": [
        43
      ]
    },
    {
      "id": "ii-34",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Which review should precede an extension decision after a VTE described as unprovoked?",
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
      ],
      "objectiveIds": [
        38,
        42
      ]
    },
    {
      "id": "ii-35",
      "domainId": "II",
      "difficulty": "core",
      "stem": "Why is current renal function essential when evaluating the eligibility and regimen of a patient taking a DOAC?",
      "choices": [
        {
          "id": "a",
          "text": "All DOACs are exclusively hepatically cleared with no renal role"
        },
        {
          "id": "b",
          "text": "Each DOAC has product- and indication-specific renal eligibility and dosing rules; the renal estimation method must match the labeling rather than treating CrCl and estimated glomerular filtration rate as interchangeable"
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
      "explanation": "DOACs differ in renal dependence (dabigatran highest among them). Use current labeling and institutional calculators; this bank will not invent CrCl tables. Renal estimates and criteria are not interchangeable across products or indications. A stable prior dose is not a reason to ignore an acute change in kidney function.",
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
      ],
      "objectiveIds": [
        30
      ]
    },
    {
      "id": "ii-36",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Which treatment indication cannot be covered by substituting the COMPASS vascular-protection regimen?",
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
      "explanation": "COMPASS used rivaroxaban 2.5 mg twice daily + aspirin for chronic CAD/PAD — a different intensity and indication than AF or VTE treatment doses. Mixing niches is a common stewardship error. A lower vascular dose does not reproduce full-intensity anticoagulation for these separate indications.",
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
        },
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "Framework: COMPASS vascular dose"
        },
        {
          "kind": "case",
          "id": "compass-vs-af-dose-trap",
          "label": "Case: COMPASS vs AF dose trap"
        }
      ],
      "objectiveIds": [
        20,
        65
      ]
    },
    {
      "id": "iii-06",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Which education plan best addresses adherence for a patient newly prescribed a twice-daily DOAC?",
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
          "text": "Switching counseling language to technical area under the concentration-time curve percentages"
        },
        {
          "id": "d",
          "text": "Encouraging frequent nonsteroidal anti-inflammatory drug 'as needed' pain stacks"
        }
      ],
      "correctId": "b",
      "explanation": "Adherence education is behavioral and concrete. Teach-back confirms understanding better than a monologue. Avoid inventing pharmacokinetic numbers in patient talk. The patient needs to demonstrate a workable schedule and contact plan. A generic leaflet or automatic agent switch does not solve cost, cognition, or daily-routine barriers.",
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
      ],
      "objectiveIds": [
        52,
        57
      ]
    },
    {
      "id": "iii-07",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Which approach best adapts warfarin counseling to a patient with limited health literacy?",
      "choices": [
        {
          "id": "a",
          "text": "Using only the phrase ' Coumadin level' without explaining INR targets"
        },
        {
          "id": "b",
          "text": "Plain-language explanation of why INR is checked, what foods/consistency means, which over-the-counter drugs to ask about, and when to seek care for bleeding"
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
      "explanation": "Match language to the patient, use teach-back, and offer written/pictorial aids. Consistency of vitamin K intake beats absolute avoidance for most stable patients. Handing over a monograph does not establish comprehension. Demonstration, accessible materials, and repeat teach-back help identify and close practical gaps.",
      "teachingPoints": [
        "Interpreter services are part of safe anticoagulation education.",
        "Document comprehension barriers and mitigation."
      ],
      "links": [],
      "objectiveIds": [
        51,
        54,
        55
      ]
    },
    {
      "id": "iii-08",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "Which statement best explains how dietary vitamin K should be discussed with a warfarin-treated patient?",
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
      "explanation": "Consistency — not prohibition — is the usual counseling frame. Sudden large changes swing INR. DOACs are not antagonized by dietary vitamin K the way warfarin is. Avoidance of all nutritious vegetables is unnecessary. A major dietary or nutrition-support change warrants clinic review rather than patient-directed dose compensation.",
      "teachingPoints": [
        "Multivitamins with vitamin K matter too — ask explicitly.",
        "Enteral nutrition changes should trigger INR vigilance."
      ],
      "links": [],
      "objectiveIds": [
        39,
        52
      ]
    },
    {
      "id": "iii-09",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Which symptoms belong in education about bleeding that requires urgent assessment?",
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
      "explanation": "Teach specific catastrophic and major-bleed warning signs, including ICH symptoms. Minor bruising still deserves clinic advice but not every speck is an emergency department visit. Urgency depends on symptoms and clinical context, not visible blood alone. Neurologic change or head injury may require evaluation even without external bleeding.",
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
      ],
      "objectiveIds": [
        52,
        60
      ]
    },
    {
      "id": "iii-10",
      "domainId": "III",
      "difficulty": "core",
      "stem": "Which information should be recorded after a shared decision discussion about OAC for AF?",
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
      "explanation": "High-quality education includes recording what was discussed and chosen. Scores inform — they do not replace the conversation. An isolated score or a copied consent sentence does not show understanding. The note should record the patient’s priorities, remaining concerns, and agreed follow-up.",
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
      ],
      "objectiveIds": [
        55,
        79
      ]
    },
    {
      "id": "iii-11",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "Why should a missed-dose education plan name the patient's exact anticoagulant rather than give one class-wide instruction?",
      "choices": [
        {
          "id": "a",
          "text": "All DOACs share one universal make-up rule identical to warfarin double-dosing"
        },
        {
          "id": "b",
          "text": "Half-lives, once-daily versus twice-daily schedules, and label instructions differ; patients need the plan for their exact anticoagulant"
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
      "explanation": "Generic catch-up advice does not fit every product. Each product’s labeling gives its own missed-dose instructions, alongside clinic protocols; when unsure, patients call the clinic rather than improvising.",
      "teachingPoints": [
        "Rivaroxaban food rules still apply when doses are taken.",
        "Repeated misses are an adherence intervention trigger."
      ],
      "links": [],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iv-14",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Which interaction concern applies when a DOAC is considered in a patient taking a strong inducing antiseizure medicine?",
      "choices": [
        {
          "id": "a",
          "text": "Higher DOAC levels and only bleed risk"
        },
        {
          "id": "b",
          "text": "Lower DOAC exposure via induction (P-glycoprotein/CYP3A4 pathways as relevant) and potential thrombosis — generally avoid combinations per label/DDI guidance"
        },
        {
          "id": "c",
          "text": "Mandatory superiority of DOACs over warfarin in this setting"
        },
        {
          "id": "d",
          "text": "No interaction because antiseizure medicines lack enzyme effects"
        }
      ],
      "correctId": "b",
      "explanation": "Inducers can reduce DOAC effect — opposite direction from inhibitors. Prefer regimens without the interaction (often VKA with close INR monitoring, or alternative antiseizure medicine) rather than inventing area under the concentration-time curve percentages.",
      "teachingPoints": [
        "Interaction potential varies among antiseizure medicines; lower-concern alternatives still require agent-specific review, and levetiracetam interaction evidence has been uncertain.",
        "The DDI library and current product guidance support pair-specific review rather than a blanket class assumption."
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
      ],
      "objectiveIds": [
        26,
        69
      ]
    },
    {
      "id": "iv-15",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "How can azole antifungals and boosted antiviral regimens affect DOAC exposure?",
      "choices": [
        {
          "id": "a",
          "text": "Induce DOAC clearance and cause clotting exclusively"
        },
        {
          "id": "b",
          "text": "Inhibit P-glycoprotein/CYP3A4 to varying degrees, increasing DOAC exposure/bleed risk — avoid or dose-adjust per labeling and DDI resources"
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
      "explanation": "Many azoles and pharmacokinetic boosters (ritonavir/cobicistat) raise DOAC levels. Check pair-specific guidance; apixaban has notable label dose-reduction pathways for some strong inhibitors. The direction differs from enzyme induction, which can reduce exposure. Platelet-related bleeding interactions are a separate pharmacodynamic mechanism.",
      "teachingPoints": [
        "Paxlovid is a time-limited but potent interaction scenario — plan ahead.",
        "Do not invent area under the concentration-time curve numbers; cite site DDI cards when quantifying."
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
      ],
      "objectiveIds": [
        69
      ]
    },
    {
      "id": "iv-16",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which molecular process is inhibited by warfarin, distinguishing it from direct target-enzyme inhibitors?",
      "choices": [
        {
          "id": "a",
          "text": "Direct inhibition of free factor Xa active sites like rivaroxaban"
        },
        {
          "id": "b",
          "text": "Inhibition of vitamin K epoxide reductase, reducing the vitamin K recycling needed to produce functional factors II, VII, IX, X and the anticoagulant proteins C and S"
        },
        {
          "id": "c",
          "text": "Irreversible antithrombin activation identical to fondaparinux"
        },
        {
          "id": "d",
          "text": "P2Y12 adenosine diphosphate-receptor blockade"
        }
      ],
      "correctId": "b",
      "explanation": "VKAs block vitamin K epoxide reductase complex subunit 1, impairing vitamin K recycling and functional clotting-factor synthesis. That is mechanistically distinct from DOACs and heparins. This is altered production of functional coagulation proteins, not direct inhibition of circulating Xa or thrombin. INR response still requires individualized monitoring.",
      "teachingPoints": [
        "Genetic vitamin K epoxide reductase complex subunit 1/cytochrome P450 2C9 variation influences dose — optional advanced teaching.",
        "Dietary vitamin K and antibiotics alter effect."
      ],
      "links": [],
      "objectiveIds": [
        63
      ]
    },
    {
      "id": "iv-17",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Why does unfractionated heparin commonly use protocol-guided laboratory monitoring during therapy?",
      "choices": [
        {
          "id": "a",
          "text": "Unfractionated heparin has completely predictable oral bioavailability"
        },
        {
          "id": "b",
          "text": "Unfractionated heparin anticoagulant response is variable; activated partial thromboplastin time/anti-Xa protocols guide titration in venous/arterial indications"
        },
        {
          "id": "c",
          "text": "INR is the correct unfractionated heparin titration test"
        },
        {
          "id": "d",
          "text": "Unfractionated heparin never needs labs"
        }
      ],
      "correctId": "b",
      "explanation": "Unfractionated heparin requires monitoring due to variable binding and clearance. Protocol-driven activated partial thromboplastin time or anti-Xa targets are institutional. Targets depend on the assay and institutional calibration, not a universal number. DOACs and warfarin are not titrated to the same laboratory target.",
      "teachingPoints": [
        "LMWH usually needs less routine monitoring except special populations.",
        "Heparin-induced thrombocytopenia surveillance remains important with unfractionated heparin."
      ],
      "links": [],
      "objectiveIds": [
        28,
        65
      ]
    },
    {
      "id": "iv-18",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Which mechanism distinguishes fondaparinux from direct oral FXa inhibitors and direct thrombin inhibitors?",
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
          "text": "Glycoprotein IIb/IIIa blockade"
        }
      ],
      "correctId": "b",
      "explanation": "Fondaparinux catalyzes antithrombin inhibition of Xa without meaningful IIa activity. It is parenteral and renally cleared — distinct from oral FXa DOACs. Its mechanism does not make it a direct oral FXa inhibitor. Injection route alone also does not imply that protamine provides effective reversal.",
      "teachingPoints": [
        "No reliable protamine reversal.",
        "Used in some heparin-induced thrombocytopenia and VTE pathways per protocols."
      ],
      "links": [],
      "objectiveIds": [
        63
      ]
    },
    {
      "id": "iv-19",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "What does dabigatran etexilate's prodrug status mean for its active anticoagulant mechanism and handling?",
      "choices": [
        {
          "id": "a",
          "text": "It inhibits factor Xa after CYP3A4 activation only"
        },
        {
          "id": "b",
          "text": "It is converted to active dabigatran that directly inhibits thrombin (factor IIa); P-glycoprotein affects absorption/exposure"
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
      "explanation": "Dabigatran is a direct thrombin inhibitor with P-glycoprotein relevance and notable renal clearance. Capsule integrity and absorption issues matter in counseling. This differs from direct FXa inhibition and vitamin K antagonism. Product handling and renal function matter in addition to the molecular target.",
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
      ],
      "objectiveIds": [
        64
      ]
    },
    {
      "id": "iv-20",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Which treatment sequence distinguishes the pivotal edoxaban VTE regimen from oral-only initial treatment programs?",
      "choices": [
        {
          "id": "a",
          "text": "An edoxaban-only initial loading phase identical to rivaroxaban initiation"
        },
        {
          "id": "b",
          "text": "Parenteral anticoagulation preceded edoxaban maintenance in the pivotal VTE program"
        },
        {
          "id": "c",
          "text": "INR-guided adjustment throughout edoxaban treatment"
        },
        {
          "id": "d",
          "text": "The same vascular-protection regimen as COMPASS"
        }
      ],
      "correctId": "b",
      "explanation": "Hokusai-VTE design used heparin lead-in then edoxaban. That differs from single-drug rivaroxaban/apixaban VTE starts. An oral-only initial phase from another VTE program cannot be substituted without changing the regimen. AF and extended-prevention schedules address different questions.",
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
      ],
      "objectiveIds": [
        65
      ]
    },
    {
      "id": "iv-21",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which statement best defines pharmacodynamic bleeding interactions rather than altered anticoagulant exposure?",
      "choices": [
        {
          "id": "a",
          "text": "CYP3A4 induction reducing DOAC levels"
        },
        {
          "id": "b",
          "text": "Additive bleeding tendency from combining anticoagulants with antiplatelets, nonsteroidal anti-inflammatory drugs, or selective serotonin reuptake inhibitors — even without a major pharmacokinetic area under the concentration-time curve change"
        },
        {
          "id": "c",
          "text": "Only food–drug binding in the gut"
        },
        {
          "id": "d",
          "text": "Clinical Laboratory Improvement Amendments waived-test quality control failures"
        }
      ],
      "correctId": "b",
      "explanation": "Pharmacodynamic interactions increase bleed risk via mechanism overlap (hemostasis). Separate them conceptually from pharmacokinetic inhibitors/inducers when counseling and reconciling meds. An unchanged drug concentration or stable INR does not exclude additive bleeding risk. Removing an unneeded antiplatelet differs from arbitrarily reducing necessary anticoagulation.",
      "teachingPoints": [
        "Ask about over-the-counter nonsteroidal anti-inflammatory drugs every visit.",
        "Site DDI cards flag pharmacodynamic-bleed pairs without forcing invented HRs."
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
      ],
      "objectiveIds": [
        67,
        69
      ]
    },
    {
      "id": "iv-22",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "How do the reversal effects of protamine differ among unfractionated heparin, LMWH, and DOACs?",
      "choices": [
        {
          "id": "a",
          "text": "Complete reversal agent for all DOACs and fondaparinux"
        },
        {
          "id": "b",
          "text": "Fully reverses unfractionated heparin and only partially reverses LMWH; not a DOAC antidote"
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
      "explanation": "Protamine neutralizes unfractionated heparin well and LMWH incompletely. It does not reverse DOACs; warfarin uses prothrombin complex concentrate/vitamin K; dabigatran uses idarucizumab. Reversal follows the actual drug, recent exposure, and institutional pathway. An injection route does not make fondaparinux or another agent protamine-responsive.",
      "teachingPoints": [
        "Dosing follows institutional unfractionated heparin/LMWH reversal charts.",
        "Allergy/fish product history can matter for protamine reactions."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Reversal"
        }
      ],
      "objectiveIds": [
        70
      ]
    },
    {
      "id": "iv-23",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which dosing principle distinguishes apixaban's labeled AF regimen from empiric dose reduction or acute VTE regimens?",
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
      "explanation": "Apixaban has a twice-daily AF regimen with label-defined age, body-weight, and creatinine criteria for reduction. These AF criteria do not automatically apply to acute VTE. The indication, treatment phase, and interacting drugs must be considered when assessing the regimen.",
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
      ],
      "objectiveIds": [
        65
      ]
    },
    {
      "id": "iv-24",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "How should laboratory tests be interpreted when a DOAC-treated patient needs emergency assessment?",
      "choices": [
        {
          "id": "a",
          "text": "INR reliably quantifies all DOAC levels"
        },
        {
          "id": "b",
          "text": "Routine prothrombin time/INR/activated partial thromboplastin time are imperfect; specialized assays may help but decisions often proceed based on last dose timing, renal function, and clinical bleed severity"
        },
        {
          "id": "c",
          "text": "A normal activated partial thromboplastin time always excludes clinically relevant dabigatran"
        },
        {
          "id": "d",
          "text": "Chromogenic factor X is the DOAC gold standard"
        }
      ],
      "correctId": "b",
      "explanation": "DOAC labs are nuanced. Do not delay resuscitation for exotic assays. Timing since last dose and supportive/reversal pathways drive care. A normal routine clotting result does not reliably exclude clinically important DOAC effect. A suitable drug-calibrated assay answers a different question from a VKA INR.",
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
      ],
      "objectiveIds": [
        28,
        29
      ]
    },
    {
      "id": "iv-25",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "How should renal accumulation risk influence the assessment of a patient receiving enoxaparin?",
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
          "text": "Double the dose automatically when estimated glomerular filtration rate falls"
        },
        {
          "id": "d",
          "text": "Prefer enoxaparin over all other options in end-stage kidney disease without review"
        }
      ],
      "correctId": "b",
      "explanation": "LMWH is renally cleared; impairment raises bleed risk via accumulation. Follow label/institutional adjustments; unfractionated heparin is sometimes preferred in severe chronic kidney disease. A normal INR does not rule out LMWH accumulation. Renal function, timing, and the indication must be assessed before a protocol-specific monitoring strategy is chosen.",
      "teachingPoints": [
        "Obesity and pregnancy are other monitoring contexts.",
        "Do not invent anti-Xa target numbers here."
      ],
      "links": [],
      "objectiveIds": [
        64,
        65,
        67
      ]
    },
    {
      "id": "iv-26",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Why does St John's wort require an interaction review in a patient taking a DOAC?",
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
      "explanation": "St John’s wort is an inducer concern for DOACs (and can affect warfarin). Counsel patients that 'natural' does not mean safe with anticoagulants. A supplement can change drug exposure despite being sold without prescription. It is not a safe substitute for an antithrombotic and does not cancel bleeding precautions.",
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
      ],
      "objectiveIds": [
        69
      ]
    },
    {
      "id": "v-04",
      "domainId": "V",
      "difficulty": "core",
      "stem": "How does accurate diagnosis and procedure coding support an anticoagulation service's documentation and compensation processes?",
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
      "links": [],
      "objectiveIds": [
        75
      ]
    },
    {
      "id": "v-05",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "Which measures would best support a warfarin clinic's safety and quality dashboard?",
      "choices": [
        {
          "id": "a",
          "text": "Only the number of DOAC commercials patients saw"
        },
        {
          "id": "b",
          "text": "Time in therapeutic range, extreme INR rates, time-to-follow-up after out-of-range values, and adverse event reviews"
        },
        {
          "id": "c",
          "text": "CHA₂DS₂-VASc as a clinic time in therapeutic range substitute"
        },
        {
          "id": "d",
          "text": "Mandatory weekly computed tomography scans"
        }
      ],
      "correctId": "b",
      "explanation": "Domain V metrics focus on process/outcome quality for anticoagulation services. Time in therapeutic range is central for VKA cohorts; operational lag after critical INRs is a safety signal. No single laboratory metric captures the whole service. Event reviews and response times help connect monitoring performance to clinical safety and workflow defects.",
      "teachingPoints": [
        "Pair metrics with improvement cycles (education, patient self-testing eligibility, recall systems).",
        "Stewardship may also track DOAC dosing appropriateness."
      ],
      "links": [],
      "objectiveIds": [
        76
      ]
    },
    {
      "id": "v-06",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Which responsibilities remain when a clinic performs point-of-care testing under applicable laboratory regulations?",
      "choices": [
        {
          "id": "a",
          "text": "Ignore manufacturer quality control because waived tests need no controls"
        },
        {
          "id": "b",
          "text": "Follow applicable complexity category rules, perform required quality control, train staff, and maintain competency/documentation"
        },
        {
          "id": "c",
          "text": "Send every point-of-care sample to three reference labs simultaneously always"
        },
        {
          "id": "d",
          "text": "Use expired test strips to save cost"
        }
      ],
      "correctId": "b",
      "explanation": "Even waived testing carries regulatory and safety duties. Quality control failures should block patient result reporting until resolved. A device producing a number does not prove the testing process was valid. Expired materials, control failure, or poor technique need resolution before relying on results.",
      "teachingPoints": [
        "Designate a clinical consultant/lab director relationship as required locally.",
        "Correlate point-of-care vs lab when results and clinical picture diverge."
      ],
      "links": [],
      "objectiveIds": [
        74,
        77
      ]
    },
    {
      "id": "iii-12",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient taking a prescribed once-daily rivaroxaban regimen using a 15 mg or 20 mg tablet is planning travel across time zones. Which education principle best supports a written transition plan?",
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
          "text": "The labeled regimen is once daily, with food for the 15 or 20 mg tablet; a written clinic plan explains the transition day"
        },
        {
          "id": "d",
          "text": "Switch to aspirin for travel days only"
        }
      ],
      "correctId": "c",
      "explanation": "Travel counseling preserves the labeled interval and food requirement for rivaroxaban 15–20 mg. Patients need a simple written plan for the transition day—not skipped therapy, doubled doses, or aspirin substitution when OAC is indicated.",
      "teachingPoints": [
        "The prescribed once-daily 15 mg or 20 mg rivaroxaban regimen includes food; this does not imply that every rivaroxaban strength or indication has the same frequency or food requirement.",
        "A written clinic plan and teach-back should address complex itinerary transitions and drug-specific missed-dose instructions."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "rocket-af",
          "label": "ROCKET AF"
        }
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-13",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A patient on twice-daily apixaban is traveling to a different time zone. Which counseling principle best supports continuity?",
      "choices": [
        {
          "id": "a",
          "text": "Take both tablets together each morning while abroad"
        },
        {
          "id": "b",
          "text": "The labeled twice-daily regimen continues through a planned local-time transition rather than a self-directed travel hold"
        },
        {
          "id": "c",
          "text": "Stop apixaban until returning home to keep the home schedule sacred"
        },
        {
          "id": "d",
          "text": "Replace one daily dose with a nonsteroidal anti-inflammatory drug for jet-lag headaches"
        }
      ],
      "correctId": "b",
      "explanation": "Twice daily DOAC education centers on maintaining roughly 12-hour spacing. After a planned shift to local time, patients continue twice daily—they do not stack doses, stop therapy for convenience, or add nonsteroidal anti-inflammatory drugs.",
      "teachingPoints": [
        "A written morning/evening local-time schedule beats memory during jet lag.",
        "Missed-dose rules remain drug-specific—refer to label/clinic instructions rather than guessing."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        }
      ],
      "objectiveIds": [
        52
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
      "links": [],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-15",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient on warfarin asks about binge drinking at a wedding during vacation. Which education response best addresses safety?",
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
      "links": [],
      "objectiveIds": [
        39,
        52
      ]
    },
    {
      "id": "v-07",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A nurse catches a near-miss in which a patient prescribed a rivaroxaban 20 mg tablet almost leaves discharge without food counseling. Which operational response best supports prevention of recurrence?",
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
          "text": "Invent a new rivaroxaban area under the concentration-time curve target for the next staff meeting"
        }
      ],
      "correctId": "b",
      "explanation": "Operational quality depends on capturing near-misses, not only harmful events. Reporting feeds system fixes (teach-back prompts, discharge checklists). Blame-only responses and invented pharmacokinetic targets are not Domain V practice.",
      "teachingPoints": [
        "Near-miss reporting is a stewardship/safety input, not optional trivia.",
        "Close the loop: what workflow change prevents recurrence?"
      ],
      "links": [],
      "objectiveIds": [
        76,
        84
      ]
    },
    {
      "id": "v-08",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "Which activity best demonstrates effective pharmacy and therapeutics governance in an anticoagulation program?",
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
      "explanation": "Domain V includes governance: formulary and order-set decisions should run through reviewed institutional processes (often pharmacy and therapeutics committee-linked) and stay current with labeling/availability—such as U.S. Andexxa withdrawal shifting FXa bleed teaching to supportive care + institutional/off-label 4F-PCC per local protocol.",
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
      ],
      "objectiveIds": [
        74,
        84
      ]
    },
    {
      "id": "v-09",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Which process best establishes and maintains staff competence in an anticoagulation service?",
      "choices": [
        {
          "id": "a",
          "text": "One-time orientation with no reassessment after protocol changes"
        },
        {
          "id": "b",
          "text": "Documented initial training plus periodic competency checks on dosing counseling, bleed triage escalation, and point-of-care INR workflows when used"
        },
        {
          "id": "c",
          "text": "Allowing only physicians to speak to patients about missed doses"
        },
        {
          "id": "d",
          "text": "Memorizing invented number needed to treat tables for every DOAC trial"
        }
      ],
      "correctId": "b",
      "explanation": "Operational programs maintain documented competencies and refresh them when protocols change. One-time orientation and inventing efficacy trivia are not quality systems. Attendance alone is not demonstrated competence. Observed technique, case-based assessment, escalation knowledge, and documented remediation support reliable practice.",
      "teachingPoints": [
        "Competency includes knowing escalation paths, not only pill facts.",
        "Point-of-care INR users also need Clinical Laboratory Improvement Amendments/quality competencies (see related Domain V items)."
      ],
      "links": [],
      "objectiveIds": [
        77
      ]
    },
    {
      "id": "v-10",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "After the December 22, 2025 U.S. withdrawal of Andexxa, which operational response best prevents outdated ordering for FXa-inhibitor bleeding?",
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
      ],
      "objectiveIds": [
        74,
        84
      ]
    },
    {
      "id": "i-27",
      "domainId": "I",
      "difficulty": "core",
      "stem": "How does antithrombotic planning after bioprosthetic TAVI differ from management of a mechanical prosthetic valve?",
      "choices": [
        {
          "id": "a",
          "text": "Both always require lifelong warfarin at INR 3.5–4.5 regardless of rhythm"
        },
        {
          "id": "b",
          "text": "Mechanical valves are a VKA niche with DOAC contraindication teaching, whereas post-TAVI antithrombotic choice forks on whether a separate OAC indication (e.g., AF) exists — routine DOAC ‘for the valve’ without that indication is not the default"
        },
        {
          "id": "c",
          "text": "TAVI patients must always receive therapeutic DOAC plus dual antiplatelet therapy for life to prevent leaflet thrombosis"
        },
        {
          "id": "d",
          "text": "Mechanical aortic valves are treated identically to sinus-rhythm TAVI on this site"
        }
      ],
      "correctId": "b",
      "explanation": "Mechanical prostheses are VKA territory (DOAC contraindicated teaching). Post-TAVI care starts by asking whether a separate OAC indication exists; without one, antiplatelet pathways (often single antiplatelet therapy) are taught rather than routine DOAC for the prosthesis. Do not import mechanical-valve rules into every TAVI case or vice versa.",
      "teachingPoints": [
        "GALILEO/ATLANTIS/NOTION-4-era teaching argues against routine post-TAVI DOAC without another OAC indication.",
        "See mechanical-valve and post-TAVI frameworks."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "Framework: Mechanical valve"
        },
        {
          "kind": "framework",
          "id": "post-tavi-antithrombotic",
          "label": "Framework: Post-TAVI"
        },
        {
          "kind": "trial",
          "id": "galileo",
          "label": "GALILEO"
        }
      ],
      "objectiveIds": [
        15,
        20
      ]
    },
    {
      "id": "ii-37",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "After TAVI, a patient without AF, a recent coronary stent, or another OAC indication receives a DOAC for leaflet-thrombosis prevention with aspirin. Which interpretation best fits site teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Continue DOAC + aspirin indefinitely — imaging studies mandate routine post-TAVI OAC"
        },
        {
          "id": "b",
          "text": "Without another OAC indication, an antiplatelet-based pathway, usually single antiplatelet therapy when dual therapy is not otherwise indicated, fits the evidence better than routine DOAC prophylaxis for leaflet thrombosis; imaging findings alone do not establish a clinical mandate"
        },
        {
          "id": "c",
          "text": "Switch to warfarin INR 2.5–3.5 because all aortic prostheses are mechanical-valve equivalents"
        },
        {
          "id": "d",
          "text": "Add prasugrel to create full triple therapy for 12 months as default TAVI law"
        }
      ],
      "correctId": "b",
      "explanation": "After TAVI, the first distinction is whether there is a separate OAC indication. GALILEO found harm with its rivaroxaban strategy in patients without such an indication; ATLANTIS did not establish overall clinical superiority. NOTION-4 and ACASA imaging findings do not mandate routine OAC. POPular TAVI supports single antiplatelet therapy rather than routine dual antiplatelet therapy when a separate dual-therapy indication is absent.",
      "teachingPoints": [
        "CHA₂DS₂-VASc without AF does not create an OAC indication after TAVI.",
        "See case tavi-sinus-routine-doac and nuance acasa-vs-notion4."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "post-tavi-antithrombotic",
          "label": "Framework: Post-TAVI"
        },
        {
          "kind": "case",
          "id": "tavi-sinus-routine-doac",
          "label": "Case: TAVI sinus DOAC"
        },
        {
          "kind": "nuance",
          "id": "acasa-vs-notion4",
          "label": "Nuance: ACASA vs NOTION-4"
        },
        {
          "kind": "trial",
          "id": "galileo",
          "label": "GALILEO"
        },
        {
          "kind": "trial",
          "id": "popular-tavi",
          "label": "POPular TAVI"
        }
      ],
      "objectiveIds": [
        20,
        24
      ]
    },
    {
      "id": "ii-38",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient with typical NVAF on warfarin has elective colonoscopy planned, without a mechanical valve or recent VTE. How should routine bridging be viewed?",
      "choices": [
        {
          "id": "a",
          "text": "Required by BRIDGE because forgoing bridging increased stroke"
        },
        {
          "id": "b",
          "text": "Not routine — BRIDGE found forgoing bridging noninferior for arterial thromboembolism and major bleeding higher with bridging; plan interruption/restart without reflexive LMWH in this phenotype"
        },
        {
          "id": "c",
          "text": "Mandatory for every dental cleaning as well"
        },
        {
          "id": "d",
          "text": "Preferred because bridging never increases bleeding"
        }
      ],
      "correctId": "b",
      "explanation": "Matches BRIDGE and the peri-procedural-oac framework: typical AF ≠ mechanical-valve or acute-VTE bridging logic. Confirm whether interruption is needed with the proceduralist; do not equate ‘never uncovered’ with safer.",
      "teachingPoints": [
        "Existing items ii-10 / ii-23 remain valid; this item ties the new peri framework to a concrete elective procedure.",
        "High thrombotic-risk VKA niches still need specialty bridging plans."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "peri-procedural-oac",
          "label": "Framework: Peri-procedural OAC"
        },
        {
          "kind": "case",
          "id": "af-warfarin-bridge-reflex",
          "label": "Case: AF warfarin bridge reflex"
        },
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE"
        }
      ],
      "objectiveIds": [
        43
      ]
    },
    {
      "id": "ii-39",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "After early DOAC treatment for DVT, repeat tests confirm triple-positive antiphospholipid syndrome. Which long-term agent strategy best fits the high-risk phenotype?",
      "choices": [
        {
          "id": "a",
          "text": "Continued DOAC therapy regardless of the high-risk antibody profile"
        },
        {
          "id": "b",
          "text": "Prefer transition to dose-adjusted warfarin (typical INR 2–3 teaching frame unless specialty sets otherwise); high-risk / triple-positive antiphospholipid syndrome is not a convenience DOAC upgrade"
        },
        {
          "id": "c",
          "text": "Stop all anticoagulation because antiphospholipid syndrome only needs aspirin"
        },
        {
          "id": "d",
          "text": "Switch to rivaroxaban 2.5 mg twice daily + aspirin (COMPASS) as antiphospholipid syndrome standard of care"
        }
      ],
      "correctId": "b",
      "explanation": "Assess antiphospholipid syndrome risk before renewing a DOAC. Triple-positive / high-risk antiphospholipid syndrome is taught as VKA-preferring on this site. COMPASS vascular dosing is a different niche and not antiphospholipid syndrome therapy. Standard acute VTE DOAC evidence does not establish equivalence in this high-risk antibody phenotype. Convenience or vascular-dose evidence does not justify substitution.",
      "teachingPoints": [
        "Do not invent TRAPS/RAPS event rates — not curated as numeric teaching here.",
        "See aps-triple-positive framework/case."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "aps-triple-positive-vka",
          "label": "Framework: APS VKA"
        },
        {
          "kind": "case",
          "id": "aps-triple-positive-doac",
          "label": "Case: Triple-positive DOAC request"
        },
        {
          "kind": "pathway",
          "id": "aps",
          "label": "TX: APS"
        }
      ],
      "objectiveIds": [
        18,
        20,
        36
      ]
    },
    {
      "id": "iii-16",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient with typical NVAF expects heparin shots throughout every warfarin interruption for colonoscopy. Which counseling response best explains the evidence?",
      "choices": [
        {
          "id": "a",
          "text": "Agree — BRIDGE proved everyone on warfarin needs LMWH bridging for every procedure"
        },
        {
          "id": "b",
          "text": "Explain that for many people with typical AF, routine bridging shots add bleeding risk without improving stroke prevention during a planned hold — the team will make a personalized hold/restart plan and only use bridging when thrombotic risk is unusually high (for example some valve situations)"
        },
        {
          "id": "c",
          "text": "Tell them to stop warfarin permanently and use aspirin only around procedures"
        },
        {
          "id": "d",
          "text": "Advise doubling warfarin the week before instead of any hold"
        }
      ],
      "correctId": "b",
      "explanation": "For many patients with typical NVAF, BRIDGE supports avoiding routine perioperative heparin bridging because bleeding increased without improved thromboembolic prevention in that population. Patient education should explain the individualized procedural plan, not promise that bridging is always protective.",
      "teachingPoints": [
        "Invite questions about mechanical valves / recent clots as ‘tell us if this applies to you’ screens.",
        "Document education when patients arrive with bridging expectations."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "peri-procedural-oac",
          "label": "Framework: Peri-procedural OAC"
        },
        {
          "kind": "trial",
          "id": "bridge",
          "label": "BRIDGE"
        },
        {
          "kind": "case",
          "id": "af-warfarin-bridge-reflex",
          "label": "Case: Bridge reflex"
        }
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-17",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient in sinus rhythm after TAVI, with no AF or other OAC indication, asks for a DOAC because a neighbor takes one for AF. Which counseling distinction is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Start full-dose DOAC because every TAVI valve requires lifelong anticoagulation"
        },
        {
          "id": "b",
          "text": "Explain that the neighbor’s AF is a different reason for anticoagulation; after TAVI without AF or another OAC indication, care is usually antiplatelet-based, and routine DOAC just for the valve is not the standard teaching — decisions are individualized with the implant team"
        },
        {
          "id": "c",
          "text": "Replace aspirin with herbal supplements for leaflet ‘thinning’"
        },
        {
          "id": "d",
          "text": "Promise that CHA₂DS₂-VASc points from age alone mean they must start anticoagulation even without AF"
        }
      ],
      "correctId": "b",
      "explanation": "Patient education should separate AF stroke prevention from prosthesis-only myths. CHA₂DS₂-VASc without AF does not create an OAC indication. Avoid promising imaging-paper DOAC mandates.",
      "teachingPoints": [
        "If new AF appears later, reopen the AF pathway — different conversation.",
        "Pair with post-TAVI framework/case."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "post-tavi-antithrombotic",
          "label": "Framework: Post-TAVI"
        },
        {
          "kind": "case",
          "id": "tavi-sinus-routine-doac",
          "label": "Case: TAVI sinus DOAC"
        },
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "Framework: AF stroke prevention"
        }
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iv-27",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Which onset and offset principle explains why typical AF interruptions of a DOAC do not automatically require heparin bridging?",
      "choices": [
        {
          "id": "a",
          "text": "Therapeutic LMWH bridge is routinely required whenever any DOAC is held, mirroring historical warfarin habits"
        },
        {
          "id": "b",
          "text": "DOACs have relatively rapid onset/offset versus warfarin; typical AF interruptions usually use timed holds and restarts per renal function, bleed risk, and labeling — not a reflexive heparin bridge while the DOAC is stopped"
        },
        {
          "id": "c",
          "text": "All DOACs must be bridged with fondaparinux for 10 days regardless of procedure"
        },
        {
          "id": "d",
          "text": "Hold clocks are identical for dabigatran and apixaban even when CrCl is severely reduced"
        }
      ],
      "correctId": "b",
      "explanation": "Class teaching: DOAC peri-procedural management is hold/restart planning, not automatic parenteral coverage for typical AF. Exact hours depend on agent, CrCl, and procedure bleed risk — verify locally / monograph (site practical heuristics are not protocols). Dabigatran is more renal-clearance sensitive than some FXa agents — do not invent one clock for all.",
      "teachingPoints": [
        "Emergency bleed reversal is a different Domain IV/II fork (U.S. FXa: supportive + institutional 4F-PCC; not Andexxa after Dec 22, 2025).",
        "See peri-procedural-oac framework."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "peri-procedural-oac",
          "label": "Framework: Peri-procedural OAC"
        }
      ],
      "objectiveIds": [
        64,
        65
      ]
    },
    {
      "id": "v-11",
      "domainId": "V",
      "difficulty": "core",
      "stem": "Which peri-procedural documentation best establishes anticoagulant management responsibilities before and after a procedure?",
      "choices": [
        {
          "id": "a",
          "text": "A vague note that ‘bridging will be figured out later’ with no owner, hold dates, or restart plan"
        },
        {
          "id": "b",
          "text": "Named indication and thrombotic-risk class, whether interruption is needed, whether bridging is or is not planned (with rationale), agent-specific hold/restart plan, proceduralist contact, and a named owner for post-procedure restart"
        },
        {
          "id": "c",
          "text": "Copying an Andexxa order into every pre-op packet for FXa patients after Dec 22, 2025 in the U.S."
        },
        {
          "id": "d",
          "text": "Deleting INR history so the proceduralist is not biased"
        }
      ],
      "correctId": "b",
      "explanation": "Domain V turns clinical peri-procedural teaching into clinic workflow: clear ownership and explicit bridge/no-bridge rationale reduce near-misses. U.S. Andexxa order sets should not be resuscitated after withdrawal — that is a separate safety/ops issue already covered in v-10.",
      "teachingPoints": [
        "Align notes with peri-procedural-oac framework language.",
        "Mechanical-valve patients need valve-clinic protocol references when relevant."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "peri-procedural-oac",
          "label": "Framework: Peri-procedural OAC"
        },
        {
          "kind": "case",
          "id": "af-warfarin-bridge-reflex",
          "label": "Case: Bridge reflex"
        }
      ],
      "objectiveIds": [
        79,
        80
      ]
    },
    {
      "id": "iii-18",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A patient newly started on dabigatran twice daily asks to pour the capsules into a weekly pill organizer “so I won’t forget.” Best counseling?",
      "choices": [
        {
          "id": "a",
          "text": "Yes — dabigatran is stable in any open container, and taking both capsules once a week is an equivalent schedule"
        },
        {
          "id": "b",
          "text": "Keep the capsules in the original bottle, tightly closed. They are moisture-sensitive. Use a reminder that does not empty the bottle, and teach-back the twice-daily schedule"
        },
        {
          "id": "c",
          "text": "Store the opened bottle in a steamy bathroom so the capsules stay activated"
        },
        {
          "id": "d",
          "text": "Empty the bottle into the organizer and take the whole week’s capsules every Sunday morning"
        }
      ],
      "correctId": "b",
      "explanation": "Dabigatran may be taken with or without food, and it should stay in the original bottle because it is moisture-sensitive. An adherence tool that exposes the capsules or collapses a twice-daily schedule into a weekly catch-up works against the labeled regimen.",
      "teachingPoints": [
        "Do not invent a food rule for dabigatran the way rivaroxaban 15–20 mg has one.",
        "If a pill organizer is non-negotiable, ask pharmacy for a method that protects the capsules rather than guessing."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "re-ly",
          "label": "RE-LY"
        }
      ],
      "objectiveIds": [
        52,
        57
      ]
    },
    {
      "id": "iii-19",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A patient on rivaroxaban 20 mg once daily with the evening meal calls the next morning: “I missed last night. I’ll take two tablets with dinner tonight to catch up.” Best education?",
      "choices": [
        {
          "id": "a",
          "text": "Agree — any missed once-daily anticoagulant is corrected by doubling the next dose"
        },
        {
          "id": "b",
          "text": "Do not take two 20 mg tablets to catch up. Use that product’s missed-dose instructions or call before improvising; whenever a 15 or 20 mg dose is taken, it still goes with food"
        },
        {
          "id": "c",
          "text": "Skip rivaroxaban for the rest of the month so the schedule resets"
        },
        {
          "id": "d",
          "text": "Replace the missed dose with two aspirin 325 mg tablets"
        }
      ],
      "correctId": "b",
      "explanation": "The label's missed-dose instruction for once-daily rivaroxaban is to take the missed dose as soon as remembered on the same day and not to double the dose; 15 mg and 20 mg doses are labeled with food. This item adds no hour cutoff.",
      "teachingPoints": [
        "Repeated misses are an adherence problem, not a reason to invent a double dose.",
        "The 15 mg twice-daily lead-in has a different labeled missed-dose rule (two 15 mg tablets may be taken at once to reach 30 mg that day)."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "rocket-af",
          "label": "ROCKET AF"
        }
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-20",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A patient on apixaban 5 mg twice daily remembers at the evening dose that the morning dose was missed and wants to swallow 10 mg now “to catch up,” then skip tomorrow morning. Best counseling?",
      "choices": [
        {
          "id": "a",
          "text": "Yes — stacking both doses is the standard make-up rule for every twice-daily anticoagulant"
        },
        {
          "id": "b",
          "text": "Do not stack the morning and evening doses into one 10 mg sitting or skip the next morning by guesswork. Keep doses about 12 hours apart and follow apixaban’s missed-dose instructions or call the clinic"
        },
        {
          "id": "c",
          "text": "Stop apixaban until the next routine clinic visit"
        },
        {
          "id": "d",
          "text": "Take the extra 5 mg together with a scheduled ibuprofen"
        }
      ],
      "correctId": "b",
      "explanation": "Apixaban adherence teaching keeps the twice-daily rhythm. Stacking 10 mg, skipping the next morning, or adding a nonsteroidal anti-inflammatory drug are not make-up plans. Hour-by-hour cutoffs stay on the product label and the clinic line — they are not a new number to memorize here.",
      "teachingPoints": [
        "Apixaban may be taken with or without food; do not add a rivaroxaban food rule.",
        "A written morning/evening card beats a verbal “catch up later.”"
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        }
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-21",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A patient on warfarin for atrial fibrillation missed last night’s tablet and plans to take two tonight “so the level doesn’t drop.” Best counseling?",
      "choices": [
        {
          "id": "a",
          "text": "Agree — a missed warfarin dose is always corrected by doubling, and no INR check is needed"
        },
        {
          "id": "b",
          "text": "Do not double warfarin on your own. Call the clinic so the dose and the next INR follow-up can be planned. A missed VKA tablet is not a DOAC catch-up, and aspirin does not replace it"
        },
        {
          "id": "c",
          "text": "Eat a very large kale meal tonight instead of the tablet"
        },
        {
          "id": "d",
          "text": "Stop INR checks for the rest of the year because one missed tablet resets the range"
        }
      ],
      "correctId": "b",
      "explanation": "Warfarin missed-dose counseling goes through the clinic because INR monitoring is the feedback loop. Patients should not double the tablet, “replace” it with a vitamin K binge, or substitute aspirin when anticoagulation is indicated.",
      "teachingPoints": [
        "Vitamin K teaching stays “consistent intake,” not a one-night rescue meal.",
        "If misses are repeating, treat that as an adherence barrier, not a math problem."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Framework: TTR / VKA quality"
        }
      ],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-22",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "After rivaroxaban is started for atrial fibrillation, teach-back shows the patient can say “blood thinner” but cannot state once daily, with food, what bleeding should prompt a call, or whom to call. Best next step?",
      "choices": [
        {
          "id": "a",
          "text": "Document “education complete” because a package insert was placed in the bag"
        },
        {
          "id": "b",
          "text": "Do not close the encounter. Use plain language and a simple once-daily-with-food schedule (a picture card if reading is hard), an interpreter when needed, and repeat teach-back until schedule, food, bleed warnings, and the contact plan are clear"
        },
        {
          "id": "c",
          "text": "Hand over the full prescribing monograph as the only remaining method"
        },
        {
          "id": "d",
          "text": "Reassure them that missing most doses is acceptable if the weekly average looks okay"
        }
      ],
      "correctId": "b",
      "explanation": "A failed teach-back means the method changes — shorter words, a pictorial schedule, an interpreter when language is the barrier — and the teach-back is repeated. Printing a monograph is not proof the patient can take rivaroxaban 15–20 mg with food or recognize a bleed.",
      "teachingPoints": [
        "Interpreter services are part of safe anticoagulation education, not an optional extra.",
        "Document what the patient could and could not teach back, and the plan to close the gap."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "rocket-af",
          "label": "ROCKET AF"
        }
      ],
      "objectiveIds": [
        51,
        54,
        55
      ]
    },
    {
      "id": "iii-23",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A patient on apixaban says they take it every other day “so the bottle lasts.” Best adherence counseling?",
      "choices": [
        {
          "id": "a",
          "text": "Approve alternate-day use as a safe way to stretch any DOAC"
        },
        {
          "id": "b",
          "text": "Do not endorse skipped days. Name the barrier (cost, routine, side effects, or understanding), connect them with the clinic or pharmacy for access help, and rebuild the labeled twice-daily schedule with teach-back"
        },
        {
          "id": "c",
          "text": "Tell them to double up every Sunday so the week averages out"
        },
        {
          "id": "d",
          "text": "Change them to rivaroxaban 2.5 mg twice daily plus aspirin without checking the indication"
        }
      ],
      "correctId": "b",
      "explanation": "Stretching a DOAC by skipping days drops the labeled schedule. Counseling names the real barrier and routes access problems to the clinic or pharmacy instead of authorizing a homemade regimen or a COMPASS-dose switch.",
      "teachingPoints": [
        "COMPASS vascular dosing is a different niche — not a cheaper substitute for AF apixaban.",
        "Confirm the patient can state morning and evening after the new plan."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Framework: DOAC appropriateness"
        },
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "ARISTOTLE"
        }
      ],
      "objectiveIds": [
        23,
        57
      ]
    },
    {
      "id": "v-12",
      "domainId": "V",
      "difficulty": "core",
      "stem": "The quality committee proposes a “DOAC time in therapeutic range” tile and a single national target percentage for the public dashboard. Which operational response is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Build the tile from refill gaps and publish one pass/fail percent for every patient, including mechanical valves"
        },
        {
          "id": "b",
          "text": "Decline both. Time in therapeutic range is a warfarin/VKA INR-control lens (Rosendaal linear interpolation is a method name only). DOACs have no INR target, so they have no time in therapeutic range, and this program does not adopt a memorized clinic or national target percent"
        },
        {
          "id": "c",
          "text": "Substitute the clinic’s average CHA₂DS₂-VASc score for time in therapeutic range"
        },
        {
          "id": "d",
          "text": "Use Andexxa doses administered as the time in therapeutic range stand-in after the Dec 22, 2025 U.S. withdrawal"
        }
      ],
      "correctId": "b",
      "explanation": "Time in therapeutic range estimates time inside the prescribed INR range for someone on warfarin. It is not a DOAC metric, not a stroke-risk score, and not a leaderboard. Trial-reported warfarin time-in-therapeutic-range values describe those trials; they are not clinic goals. No target percent is taught here.",
      "teachingPoints": [
        "A named INR target has to exist before time in therapeutic range means anything — valve ranges are not the same conversation as typical AF teaching, and this item does not invent either number.",
        "Poor control is a workup (see the related Domain V item), not a dashboard contest."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Framework: TTR / VKA quality"
        }
      ],
      "objectiveIds": [
        76
      ]
    },
    {
      "id": "v-13",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "A warfarin panel’s time in therapeutic range looks persistently poor. No numeric cutoff is used. Which operations response fits stewardship teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Auto-switch every patient to a DOAC the same day, including mechanical valves and stable frail patients"
        },
        {
          "id": "b",
          "text": "Review adherence, vitamin K pattern, alcohol, new drugs and herbals, and whether out-of-range INRs have an owner. Offer a labeled DOAC only when the niche is DOAC-eligible. Do not auto-switch a stable frail patient solely because DOACs exist, and do not invent a time in therapeutic range percent that forces the switch"
        },
        {
          "id": "c",
          "text": "Delete out-of-range INRs so the dashboard improves"
        },
        {
          "id": "d",
          "text": "Add full-dose rivaroxaban on top of warfarin until the next INR"
        }
      ],
      "correctId": "b",
      "explanation": "A poor time in therapeutic range is a process signal: adherence, diet, interacting substances, and follow-up ownership come first. A labeled DOAC is a consideration only in a DOAC-eligible niche. Mechanical valves stay on VKA teaching, and FRAIL-AF teaching argues against switching a stable frail patient just because a DOAC exists. No time in therapeutic range percent is supplied here.",
      "teachingPoints": [
        "Escalate a still-messy panel to the clinic pharmacist or physician pathway and document the handoff.",
        "Do not quote a trial bleeding percentage in the operations note — the linked FRAIL-AF card already carries that teaching."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Framework: TTR / VKA quality"
        },
        {
          "kind": "framework",
          "id": "frail-elderly-vka-doac",
          "label": "Framework: Frail elderly VKA"
        },
        {
          "kind": "trial",
          "id": "frail-af",
          "label": "FRAIL-AF"
        },
        {
          "kind": "case",
          "id": "frail-vka-switch",
          "label": "Case: frail VKA switch"
        }
      ],
      "objectiveIds": [
        76,
        84
      ]
    },
    {
      "id": "v-14",
      "domainId": "V",
      "difficulty": "core",
      "stem": "An out-of-range INR posts late Friday and would change the warfarin plan. Which clinic design is the operations standard?",
      "choices": [
        {
          "id": "a",
          "text": "Rely on the patient to call if they feel unwell; nobody is assigned"
        },
        {
          "id": "b",
          "text": "A named recall owner contacts the patient, documents the plan, and does not leave the result in an unowned queue over the weekend"
        },
        {
          "id": "c",
          "text": "Wait for the next annual visit to mention the result"
        },
        {
          "id": "d",
          "text": "Apply a standing rule to double the dose for every high INR, with no clinician review"
        }
      ],
      "correctId": "b",
      "explanation": "Time-to-follow-up after an out-of-range INR is an operations metric only if someone owns it. An unassigned queue, an annual-visit delay, or a standing double-dose rule are not a recall system. This item does not set an hour limit or an INR cutoff.",
      "teachingPoints": [
        "Pair the contact with a documented plan, not a voicemail that nobody reads.",
        "The same ownership idea applies when the result came from patient self-testing — the clinic still covers the patient."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Framework: TTR / VKA quality"
        }
      ],
      "objectiveIds": [
        81
      ]
    },
    {
      "id": "v-15",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "A point-of-care INR and a same-day laboratory INR disagree enough to affect warfarin management, and required device quality control was missed. Which operational response best addresses result reliability?",
      "choices": [
        {
          "id": "a",
          "text": "Report the point-of-care value now — waived tests never need controls or a correlation policy"
        },
        {
          "id": "b",
          "text": "The clinic follows its confirmation policy and resolves quality concerns before relying on the device result; a verified alternative testing route supports timely clinical decisions"
        },
        {
          "id": "c",
          "text": "Average the two numbers and dose to that average without a written policy"
        },
        {
          "id": "d",
          "text": "Discard the laboratory result because point-of-care devices are always the higher-complexity method"
        }
      ],
      "correctId": "b",
      "explanation": "Point-of-care INR still sits inside a quality system: quality control, training, and a rule for when the lab must confirm. A skipped control plus a split that would change the dose is a stop-the-line event, not a moment to average numbers or to assume the waived result wins.",
      "teachingPoints": [
        "Expired strips and failed quality control block patient results the same way.",
        "Document the lot, the control failure, and who released the device back into use."
      ],
      "links": [],
      "objectiveIds": [
        74,
        81
      ]
    },
    {
      "id": "v-16",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A stewardship audit finds atrial-fibrillation patients on rivaroxaban 2.5 mg twice daily plus aspirin, and separate charts labeled “COMPASS” that were written for rivaroxaban 20 mg daily. Best operations response?",
      "choices": [
        {
          "id": "a",
          "text": "Ignore milligram and schedule differences; dose family is optional documentation"
        },
        {
          "id": "b",
          "text": "Treat the mix-up as a tracked defect. COMPASS/vascular dosing is rivaroxaban 2.5 mg twice daily plus aspirin — not an AF or therapeutic VTE regimen — and it is not stacked on full-dose anticoagulation. Reconcile indication, regimen, and the note"
        },
        {
          "id": "c",
          "text": "Recode every chart as a mechanical valve so billing is uniform"
        },
        {
          "id": "d",
          "text": "Resolve the audit by ordering Andexxa for the panel (U.S., after Dec 22, 2025)"
        }
      ],
      "correctId": "b",
      "explanation": "Dose-family errors are an anticoagulation-stewardship metric. Vascular-dose rivaroxaban 2.5 mg twice daily plus aspirin is a different regimen from AF or therapeutic VTE dosing, and the two are not combined. Fixing the chart means indication, regimen, and documentation — not a fake valve code or a withdrawn reversal agent.",
      "teachingPoints": [
        "The same audit should catch acute VTE load schedules still running past the labeled lead-in, without inventing a new calendar here.",
        "Local compliance owns coding; the clinical mix-up is still a clinic defect."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Framework: DOAC appropriateness"
        },
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "Framework: COMPASS vascular dose"
        },
        {
          "kind": "case",
          "id": "compass-vs-af-dose-trap",
          "label": "Case: COMPASS vs AF dose trap"
        }
      ],
      "objectiveIds": [
        76,
        84
      ]
    },
    {
      "id": "v-17",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "The clinic wants to offer INR patient self-testing. Which operations package is required before go-live?",
      "choices": [
        {
          "id": "a",
          "text": "Mail devices to anyone who asks, with no training, no result path, and no covering service"
        },
        {
          "id": "b",
          "text": "Documented training and competency, a result-reporting pathway, device quality-control expectations, and clinic oversight — self-testing is not an unsupervised gadget"
        },
        {
          "id": "c",
          "text": "A policy that self-testing abolishes the target INR range"
        },
        {
          "id": "d",
          "text": "Procedure codes chosen to maximize payment without documenting the service performed"
        }
      ],
      "correctId": "b",
      "explanation": "Who may self-test is a clinical selection question. Whether the program may open is operational: training, competency, quality control, a way for results to reach a covering clinic, and honest documentation. An unsupervised mail-out or a billing-only code is not that package.",
      "teachingPoints": [
        "Unreliable reporters stay on clinic-based testing.",
        "Out-of-range home results still need the same named recall owner as clinic results."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Framework: TTR / VKA quality"
        }
      ],
      "objectiveIds": [
        74,
        79
      ]
    },
    {
      "id": "v-18",
      "domainId": "V",
      "difficulty": "core",
      "stem": "What should an auditor be able to find in a routine anticoagulation stewardship note?",
      "choices": [
        {
          "id": "a",
          "text": "Only the phrase “blood thinner — continue,” with no indication"
        },
        {
          "id": "b",
          "text": "Indication, planned duration, and dose-family rationale (AF stroke prevention vs acute/therapeutic VTE vs extended prevention vs COMPASS vascular dosing), plus when and by whom it was reviewed"
        },
        {
          "id": "c",
          "text": "The patient’s copay and nothing clinical"
        },
        {
          "id": "d",
          "text": "A line that Andexxa is the default U.S. reversal option after Dec 22, 2025"
        }
      ],
      "correctId": "b",
      "explanation": "Operational stewardship is auditable when the note names why the anticoagulant exists, how long it is planned, and which dose family was chosen. A one-line “blood thinner” note, a copay-only note, or a post-withdrawal Andexxa default fails that standard.",
      "teachingPoints": [
        "The same three lines belong in the discharge handoff, with a named follow-up owner.",
        "Peri-procedural bridge/no-bridge detail is additional standard work when a procedure is planned — it does not replace indication and dose family."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Framework: DOAC appropriateness"
        }
      ],
      "objectiveIds": [
        79,
        80,
        84
      ]
    },
    {
      "id": "ii-40",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient with AF had a coronary stent placed 3 years ago, has had no ischemic events since, and no history of stent thrombosis. They take a DOAC plus aspirin. Which statement best reflects current guideline teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Continue both indefinitely, because every stent needs lifelong antiplatelet therapy"
        },
        {
          "id": "b",
          "text": "OAC alone is favored over OAC plus a single antiplatelet; raise stopping the aspirin with the prescriber, keeping the anticoagulant"
        },
        {
          "id": "c",
          "text": "Stop the DOAC and keep aspirin, because aspirin protects the stent"
        },
        {
          "id": "d",
          "text": "Switch to triple therapy to cover both stroke and stent risk"
        }
      ],
      "correctId": "b",
      "explanation": "2023 ACC/AHA/ACCP/HRS (Class 1, LOE B-R): in AF with chronic coronary disease beyond 1 year after revascularization and without stent thrombosis, OAC monotherapy is recommended over OAC plus a single antiplatelet to decrease major bleeding. 2024 ESC AF (Class III, LOE B) recommends against antiplatelet therapy beyond 12 months in stable chronic coronary or vascular disease on OAC, and 2024 ESC chronic coronary syndromes (Class I, LOE B) favors DOAC alone lifelong.",
      "teachingPoints": [
        "Aspirin is not a substitute for indicated anticoagulation in AF.",
        "Trials in this population (AFIRE, EPIC-CAD, ADAPT AF-DES, AQUATIC) found more bleeding without demonstrated ischemic benefit from the added antiplatelet."
      ],
      "links": [
        {
          "kind": "tx-pathway",
          "id": "oac-antiplatelet-deprescribe",
          "label": "TX: OAC + antiplatelet deprescribing"
        },
        {
          "kind": "trial",
          "id": "afire",
          "label": "AFIRE"
        },
        {
          "kind": "trial",
          "id": "epic-cad",
          "label": "EPIC-CAD"
        }
      ],
      "objectiveIds": [
        20,
        38
      ]
    },
    {
      "id": "ii-41",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "AUGUSTUS included 1097 patients with AF and ACS managed medically (no PCI), all on a P2Y12 inhibitor. Which statement best describes the bleeding findings and limits of that subgroup?",
      "choices": [
        {
          "id": "a",
          "text": "Dual therapy (OAC plus a single antiplatelet) is proven superior to OAC alone after medically managed ACS"
        },
        {
          "id": "b",
          "text": "Medically managed ACS patients should never receive an antiplatelet with an OAC"
        },
        {
          "id": "c",
          "text": "Aspirin reduced ischemic events enough to offset its bleeding"
        },
        {
          "id": "d",
          "text": "On a P2Y12 background, apixaban was associated with less bleeding than VKA, adding aspirin showed a non-significant trend toward more bleeding (CI crossed 1), and OAC alone was not tested"
        }
      ],
      "correctId": "d",
      "explanation": "Every AUGUSTUS patient was on a P2Y12 inhibitor and there was no OAC-alone arm. In the medically managed subgroup, ISTH major or CRNM bleeding was lower with apixaban vs VKA (HR 0.44; 95% CI 0.28–0.68). Aspirin vs placebo showed only a non-significant trend toward more bleeding (HR 1.49; 95% CI 0.98–2.26 — the CI crosses 1), although aspirin significantly increased bleeding in the full AUGUSTUS population. The trial cannot say whether a single antiplatelet adds benefit over OAC alone. ESC ACS 2023 gives OAC plus a single antiplatelet for up to 1 year a Class IIa, LOE B recommendation in medically treated patients.",
      "teachingPoints": [
        "Read what a trial did not randomize: no OAC-alone arm means no OAC-alone answer.",
        "Subgroup follow-up was 6 months and not powered for ischemic end points."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "augustus",
          "label": "AUGUSTUS"
        },
        {
          "kind": "tx-pathway",
          "id": "oac-antiplatelet-deprescribe",
          "label": "TX: OAC + antiplatelet deprescribing"
        }
      ],
      "objectiveIds": [
        24
      ]
    },
    {
      "id": "ii-42",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "AQUATIC randomized patients with chronic coronary syndrome, a stent more than 6 months old, and long-term oral anticoagulation to aspirin or placebo. What did it find?",
      "choices": [
        {
          "id": "a",
          "text": "Aspirin lowered ischemic events at the cost of a small bleeding increase"
        },
        {
          "id": "b",
          "text": "No difference in any outcome"
        },
        {
          "id": "c",
          "text": "Aspirin was associated with more ischemic events, more deaths, and more major bleeding; the trial stopped early for excess death"
        },
        {
          "id": "d",
          "text": "Aspirin reduced all-cause mortality"
        }
      ],
      "correctId": "c",
      "explanation": "AQUATIC (New England Journal of Medicine 2025; double-blind, n=872) was stopped early after a median 2.2 years because of excess all-cause death with aspirin: 13.4% vs 8.4% (adjusted HR 1.72; 95% CI 1.14–2.58). The primary ischemic composite was 16.9% vs 12.1% (adjusted HR 1.53; 1.07–2.18) and major bleeding 10.2% vs 3.4% (adjusted HR 3.35; 1.87–6.00).",
      "teachingPoints": [
        "Early stopping for harm can overestimate the size of the effect — teach the direction firmly and the exact HRs cautiously.",
        "The abstract says “long-term oral anticoagulation” without naming the agent or limiting it to AF."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aquatic",
          "label": "AQUATIC"
        }
      ],
      "objectiveIds": [
        24
      ]
    },
    {
      "id": "ii-43",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A colleague's slide says “OAC alone reduces mortality compared with OAC plus an antiplatelet in stable coronary disease.” Which statement best describes the evidence?",
      "choices": [
        {
          "id": "a",
          "text": "Overstated — two early-stopped trials (AFIRE, AQUATIC) showed excess death with combination therapy, but pooled all-cause death is not significant and pooled cardiovascular-death findings are inconsistent"
        },
        {
          "id": "b",
          "text": "Correct — every meta-analysis shows a significant all-cause mortality reduction"
        },
        {
          "id": "c",
          "text": "Wrong — OAC alone increases mortality"
        },
        {
          "id": "d",
          "text": "Unknowable — no randomized trials exist"
        }
      ],
      "correctId": "a",
      "explanation": "The consistent finding is less bleeding with OAC alone (major bleeding HR 0.46; 95% CI 0.32–0.66 in the 6-trial Galli 2026 meta-analysis, n=5924) with no significant major adverse cardiovascular events difference. Mortality is a signal, not an established effect: all-cause death was not significant in any meta-analysis, and cardiovascular death was significant in some (Galli, Ibrahim, Garagoli) but not in the Bayesian analysis (Tsarouchas).",
      "teachingPoints": [
        "Single early-stopped trials are hypothesis-strengthening, not proof of a survival benefit.",
        "The well-supported claim is fewer bleeds without demonstrated ischemic benefit from the added antiplatelet."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "afire",
          "label": "AFIRE"
        },
        {
          "kind": "trial",
          "id": "aquatic",
          "label": "AQUATIC"
        },
        {
          "kind": "trial",
          "id": "oac-alone",
          "label": "OAC-ALONE"
        }
      ],
      "objectiveIds": [
        24
      ]
    },
    {
      "id": "iii-24",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient on a DOAC for prior VTE has taken low-dose aspirin for years, and no one can find a reason for it. They ask, “Should I just stop the aspirin today?” Which response is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "“Yes, stop both pills today.”"
        },
        {
          "id": "b",
          "text": "“Aspirin is harmless, so it doesn't matter.”"
        },
        {
          "id": "c",
          "text": "“Keep taking your anticoagulant. The aspirin may be adding bleeding risk without a clear benefit, so I'll raise stopping it with your prescriber — please don't change it until we hear back.”"
        },
        {
          "id": "d",
          "text": "“Double the aspirin instead of taking the anticoagulant.”"
        }
      ],
      "correctId": "c",
      "explanation": "Education separates the two drugs: the anticoagulant treats the documented indication; the aspirin needs a named reason. In a Michigan registry (Schaefer 2021), adding aspirin to a DOAC without a clear indication was associated with more bleeding (31.60 vs 26.00 per 100 patient-years) and more bleeding hospitalizations, with no difference in thrombosis. The change itself goes through the prescriber who owns the antiplatelet.",
      "teachingPoints": [
        "Teach-back: the patient should be able to say which pill is for which reason.",
        "Teach bleeding warning signs and to report nosebleeds or dark stools."
      ],
      "links": [
        {
          "kind": "case",
          "id": "doac-legacy-aspirin",
          "label": "Case: DOAC with legacy aspirin"
        },
        {
          "kind": "ddi",
          "id": "aspirin",
          "label": "Aspirin DDI card"
        }
      ],
      "objectiveIds": [
        52,
        60
      ]
    },
    {
      "id": "v-19",
      "domainId": "V",
      "difficulty": "core",
      "stem": "An anticoagulation clinic wants to reduce unintended DOAC plus aspirin combinations. Which operational step best fits the evidence and scope of practice?",
      "choices": [
        {
          "id": "a",
          "text": "Automatically discontinue aspirin for every DOAC patient at intake"
        },
        {
          "id": "b",
          "text": "Ignore aspirin because it is over the counter"
        },
        {
          "id": "c",
          "text": "At each DOAC review, document the indication and planned stop point for every antithrombotic and route unexplained antiplatelet use to the prescriber for a decision"
        },
        {
          "id": "d",
          "text": "Add aspirin for all patients over age 65"
        }
      ],
      "correctId": "c",
      "explanation": "In the Michigan registry (Schaefer 2021), 33.8% of DOAC patients for AF or VTE were also taking aspirin without a clear indication. A reconciliation step that names the reason and owner for each antithrombotic finds these patients without overriding indicated therapy (for example, a recent ACS or PCI plan).",
      "teachingPoints": [
        "Stewardship is documentation plus a referral loop, not automatic discontinuation.",
        "Over-the-counter aspirin belongs on the medication list."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Framework: DOAC appropriateness"
        },
        {
          "kind": "tx-pathway",
          "id": "oac-antiplatelet-deprescribe",
          "label": "TX: OAC + antiplatelet deprescribing"
        }
      ],
      "objectiveIds": [
        79,
        84
      ]
    },
    {
      "id": "i-28",
      "domainId": "I",
      "difficulty": "core",
      "stem": "After a small vascular injury, platelets attach to the injured surface before a stable fibrin clot forms. Which sequence best explains this early platelet response?",
      "choices": [
        {
          "id": "a",
          "text": "Adhesion to exposed vessel components, activation with recruitment signals, then aggregation through fibrinogen bridges"
        },
        {
          "id": "b",
          "text": "Fibrin breakdown first, followed by tissue factor removal and platelet clearance"
        },
        {
          "id": "c",
          "text": "Vitamin K depletion followed by direct inhibition of circulating thrombin"
        },
        {
          "id": "d",
          "text": "Antithrombin activation followed by immediate dissolution of the platelet plug"
        }
      ],
      "correctId": "a",
      "explanation": "Platelet adhesion begins the plug, activation recruits additional platelets, and aggregation links them together. Thrombin-generated fibrin subsequently stabilizes it. Fibrinolysis removes clot rather than initiating the platelet plug; vitamin K depletion and antithrombin effects describe anticoagulant mechanisms.",
      "teachingPoints": [
        "Primary hemostasis is platelet-centered; secondary hemostasis stabilizes the plug with fibrin.",
        "Antiplatelet drugs and anticoagulants act on different, interacting parts of hemostasis."
      ],
      "links": [],
      "objectiveIds": [
        1,
        4
      ]
    },
    {
      "id": "i-29",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "An anticoagulation referral describes thrombocytopenia, fragmented red cells, and new confusion without a clear heparin exposure. Which disease process requires urgent consideration rather than assuming isolated immune platelet destruction?",
      "choices": [
        {
          "id": "a",
          "text": "Stable immune thrombocytopenia with no other pathology"
        },
        {
          "id": "b",
          "text": "Thrombotic thrombocytopenic purpura with microvascular platelet thrombi"
        },
        {
          "id": "c",
          "text": "Simple vitamin K deficiency as the sole explanation"
        },
        {
          "id": "d",
          "text": "Uncomplicated post-thrombotic syndrome"
        }
      ],
      "correctId": "b",
      "explanation": "Thrombotic thrombocytopenic purpura combines platelet consumption, microangiopathic hemolysis, and possible organ ischemia. Isolated immune thrombocytopenia does not explain fragmented red cells and neurologic dysfunction. Vitamin K deficiency and chronic venous disease do not explain this constellation; urgent specialist assessment is required.",
      "teachingPoints": [
        "A low platelet count does not exclude a thrombotic emergency.",
        "Hemolysis and organ dysfunction distinguish this pattern from isolated thrombocytopenia."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-30",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient has petechiae and isolated thrombocytopenia, with no hemolysis or recent heparin exposure. Which comparison best distinguishes immune thrombocytopenia from heparin-induced thrombocytopenia?",
      "choices": [
        {
          "id": "a",
          "text": "Both conditions necessarily cause thrombosis in large veins"
        },
        {
          "id": "b",
          "text": "The absence of anemia rules out either platelet disorder"
        },
        {
          "id": "c",
          "text": "Immune thrombocytopenia often presents with mucocutaneous bleeding, whereas heparin-induced thrombocytopenia has a characteristic exposure-related prothrombotic pattern"
        },
        {
          "id": "d",
          "text": "Every low platelet count during admission confirms heparin-induced thrombocytopenia"
        }
      ],
      "correctId": "c",
      "explanation": "Isolated immune platelet destruction often produces mucocutaneous bleeding, while heparin-induced thrombocytopenia is an immune prothrombotic reaction interpreted using exposure, timing, platelet change, and alternative causes. Neither the platelet count alone nor absence of anemia establishes the diagnosis; microangiopathic hemolysis suggests a different process.",
      "teachingPoints": [
        "Platelet count, bleeding pattern, hemolysis, and medication timing belong in the differential.",
        "Heparin-induced thrombocytopenia is not diagnosed from a low count alone."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-31",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A medical inpatient is immobilized with active cancer. The admission team wants a formal prophylaxis assessment rather than ordering anticoagulation for every admission. Which tools fit this purpose?",
      "choices": [
        {
          "id": "a",
          "text": "Wells score alone to select a prophylactic drug"
        },
        {
          "id": "b",
          "text": "HAS-BLED alone to diagnose a new DVT"
        },
        {
          "id": "c",
          "text": "CHA₂DS₂-VASc to determine postoperative wound bleeding"
        },
        {
          "id": "d",
          "text": "Padua or International Medical Prevention Registry on Venous Thromboembolism (IMPROVE) assessment paired with a bleeding-risk review"
        }
      ],
      "correctId": "d",
      "explanation": "Padua and IMPROVE organize VTE risk in medical inpatients; bleeding risk must also guide whether pharmacologic or mechanical prevention is appropriate. Wells estimates diagnostic probability, HAS-BLED concerns AF bleeding-risk assessment, and CHA₂DS₂-VASc estimates AF stroke risk. These tools are not interchangeable.",
      "teachingPoints": [
        "Risk assessment precedes selection of a prophylaxis strategy.",
        "A prevention score is not a diagnostic test for an existing clot."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "vte-prophylaxis",
          "label": "VTE prophylaxis (medical and surgical)"
        }
      ],
      "objectiveIds": [
        8
      ]
    },
    {
      "id": "i-32",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A surgical service uses a Caprini-based prevention pathway. What is the most important safeguard when a new clinician applies the score to an individual patient?",
      "choices": [
        {
          "id": "a",
          "text": "Use the validated surgical setting and institutional pathway while separately evaluating bleeding risk"
        },
        {
          "id": "b",
          "text": "Treat it as a replacement for imaging when DVT is suspected"
        },
        {
          "id": "c",
          "text": "Import a medical-inpatient score threshold without checking the model"
        },
        {
          "id": "d",
          "text": "Infer that any score mandates long-term therapeutic anticoagulation"
        }
      ],
      "correctId": "a",
      "explanation": "Caprini is a surgical VTE prevention risk model, not a diagnostic or indefinite-treatment rule. The model, patient setting, and associated local prevention pathway must match, with bleeding considered separately. Borrowing thresholds from another model or substituting a score for diagnostic imaging misuses risk assessment.",
      "teachingPoints": [
        "Prevention tools depend on their validation population.",
        "Reassessment is needed when mobility or bleeding risk changes."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "vte-prophylaxis",
          "label": "VTE prophylaxis (medical and surgical)"
        }
      ],
      "objectiveIds": [
        8
      ]
    },
    {
      "id": "i-33",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient reports new unilateral calf swelling and pain after a period of immobility. There is no dyspnea or hemodynamic instability. Which interpretation best supports diagnostic reasoning?",
      "choices": [
        {
          "id": "a",
          "text": "Calf pain alone confirms proximal DVT"
        },
        {
          "id": "b",
          "text": "DVT is possible; symptoms inform pretest probability but require a structured diagnostic pathway"
        },
        {
          "id": "c",
          "text": "Absence of dyspnea excludes venous thrombosis"
        },
        {
          "id": "d",
          "text": "Chronic compression use excludes a new clot"
        }
      ],
      "correctId": "b",
      "explanation": "Unilateral pain and swelling are compatible with DVT but are not specific enough to establish it. Pretest probability determines appropriate D-dimer and imaging use. Absence of PE symptoms does not exclude DVT, and compression use does not prevent all events. A symptom-based diagnosis risks both missed disease and unnecessary anticoagulation.",
      "teachingPoints": [
        "Symptoms guide testing rather than replace it.",
        "New dyspnea, syncope, or chest pain changes the urgency of assessment."
      ],
      "links": [
        {
          "kind": "tx-pathway",
          "id": "acute-vte",
          "label": "Acute VTE (DVT/PE)"
        }
      ],
      "objectiveIds": [
        9,
        11
      ]
    },
    {
      "id": "i-34",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with recent immobilization develops sudden dyspnea, pleuritic chest pain, and syncope. Which explanation most appropriately connects these symptoms to PE pathophysiology?",
      "choices": [
        {
          "id": "a",
          "text": "The symptoms specifically establish isolated chronic venous reflux"
        },
        {
          "id": "b",
          "text": "Pulmonary emboli usually arise from ruptured coronary plaques"
        },
        {
          "id": "c",
          "text": "Pulmonary vascular obstruction can strain the right ventricle and impair circulation"
        },
        {
          "id": "d",
          "text": "A normal leg examination rules out embolic pulmonary disease"
        }
      ],
      "correctId": "c",
      "explanation": "PE can obstruct pulmonary circulation, increasing right-ventricular load and potentially causing circulatory compromise. This presentation warrants emergency evaluation, not attribution to chronic venous reflux. PE commonly originates in the venous circulation, not coronary plaque, and the absence of obvious leg findings does not exclude it.",
      "teachingPoints": [
        "Syncope with acute dyspnea is a high-urgency presentation.",
        "Right-ventricular response helps determine PE severity after diagnosis."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "intermediate-pe-cdt",
          "label": "Who with intermediate-risk PE is a candidate for catheter-directed therapy?"
        }
      ],
      "objectiveIds": [
        9
      ]
    },
    {
      "id": "i-35",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with AF develops a suddenly painful, pale, cold foot with reduced sensation and an absent pulse. Which interpretation best distinguishes this from chronic stable claudication?",
      "choices": [
        {
          "id": "a",
          "text": "Chronic venous insufficiency is the best explanation for pulse loss"
        },
        {
          "id": "b",
          "text": "Stable exertional claudication can be managed as an unchanged routine complaint"
        },
        {
          "id": "c",
          "text": "Isolated calf DVT typically explains a cold pulseless foot"
        },
        {
          "id": "d",
          "text": "Acute limb ischemia from arterial occlusion is a limb-threatening emergency"
        }
      ],
      "correctId": "d",
      "explanation": "Sudden pain, pallor, coldness, sensory change, and pulse loss suggest acute arterial compromise, unlike stable claudication that recurs with exertion and improves with rest. Venous disease usually does not produce this pulseless cold-limb pattern. Emergency vascular assessment is needed; anticoagulant use does not rule out embolism.",
      "teachingPoints": [
        "Acute arterial occlusion may be embolic or thrombotic.",
        "New sensory or motor loss increases concern for threatened limb viability."
      ],
      "links": [],
      "objectiveIds": [
        10
      ]
    },
    {
      "id": "i-36",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A smoker reports reproducible calf discomfort during walking that resolves with rest, without an acutely cold or weak limb. Which disease process best explains the pattern?",
      "choices": [
        {
          "id": "a",
          "text": "Flow-limiting peripheral arterial atherosclerosis causing intermittent claudication"
        },
        {
          "id": "b",
          "text": "Acute heparin-induced thrombocytopenia as the sole mechanism"
        },
        {
          "id": "c",
          "text": "Left atrial appendage thrombus causing chronic venous reflux"
        },
        {
          "id": "d",
          "text": "Isolated mucosal bleeding from platelet dysfunction"
        }
      ],
      "correctId": "a",
      "explanation": "Exertional calf pain relieved by rest is a typical claudication pattern from impaired arterial perfusion. It differs from sudden threatened-limb ischemia and from venous congestion or mucosal bleeding. Atherosclerotic risk assessment and vascular evaluation are relevant; the symptom does not itself establish an anticoagulant indication.",
      "teachingPoints": [
        "Stable PAD and acute limb ischemia are different clinical presentations.",
        "Vascular protection regimens are not substitutes for AF or acute VTE anticoagulation."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "COMPASS vascular protection: appropriate populations and regimen limits"
        }
      ],
      "objectiveIds": [
        10
      ]
    },
    {
      "id": "i-37",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A warfarin-treated patient with heart failure develops worsening orthopnea, edema, and poor oral intake. Why should the anticoagulation team reassess the INR plan rather than assume the previous response will persist?",
      "choices": [
        {
          "id": "a",
          "text": "Heart failure makes warfarin response permanently independent of diet"
        },
        {
          "id": "b",
          "text": "Acute illness, congestion, diet changes, and new medicines can destabilize warfarin response"
        },
        {
          "id": "c",
          "text": "Edema proves that anticoagulation has failed and needs an automatic dose increase"
        },
        {
          "id": "d",
          "text": "Dyspnea establishes a new PE without testing"
        }
      ],
      "correctId": "b",
      "explanation": "A heart-failure exacerbation changes the clinical context for warfarin through illness, intake, organ function, and medication changes. INR response therefore needs reassessment rather than a fixed dose assumption. Edema does not prove thrombosis, and dyspnea has multiple causes; neither symptom supports automatic dose escalation.",
      "teachingPoints": [
        "A stable maintenance regimen may become unstable during intercurrent illness.",
        "Heart-failure symptoms and anticoagulation monitoring require coordinated follow-up."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        16,
        39
      ]
    },
    {
      "id": "i-38",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient in sinus rhythm has chronic heart failure and asks whether low-dose rivaroxaban is automatically needed to prevent cardiovascular events. Which interpretation fits the site's COMMANDER HF teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Heart failure is equivalent to documented AF for anticoagulant selection"
        },
        {
          "id": "b",
          "text": "Every reduced ejection fraction requires a COMPASS regimen"
        },
        {
          "id": "c",
          "text": "Heart failure alone does not establish routine rivaroxaban benefit or an AF anticoagulation indication"
        },
        {
          "id": "d",
          "text": "A neutral composite outcome proves that anticoagulation can never be used for another indication"
        }
      ],
      "correctId": "c",
      "explanation": "COMMANDER HF did not establish routine vascular-dose rivaroxaban for the overall heart-failure population studied. Heart failure in sinus rhythm is not the same indication as AF stroke prevention. Separate indications, including AF, VTE, or selected CAD/PAD, must be assessed on their own evidence rather than inferred from heart failure alone.",
      "teachingPoints": [
        "A disease risk factor is not automatically a treatment indication.",
        "COMPASS and COMMANDER HF tested different clinical questions."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "commander-hf",
          "label": "Rivaroxaban in Patients with Heart Failure, Sinus Rhythm, and Coronary Disease"
        },
        {
          "kind": "framework",
          "id": "compass-vascular-dose",
          "label": "COMPASS vascular protection: appropriate populations and regimen limits"
        }
      ],
      "objectiveIds": [
        16
      ]
    },
    {
      "id": "i-39",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with diabetes and CAD calls about chest pressure with diaphoresis and new breathlessness at rest. Which clinical interpretation is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Stable claudication because the patient has atherosclerosis"
        },
        {
          "id": "b",
          "text": "A routine anticoagulant side effect that can wait for the next refill"
        },
        {
          "id": "c",
          "text": "Proof of esophageal reflux because there is no unilateral leg swelling"
        },
        {
          "id": "d",
          "text": "Possible ACS requiring emergency assessment even if symptoms are not described as severe pain"
        }
      ],
      "correctId": "d",
      "explanation": "Cardiac ischemia may present with pressure, dyspnea, diaphoresis, or less typical discomfort, particularly in patients with diabetes. These symptoms require emergency assessment rather than routine follow-up or a presumed benign diagnosis. Leg findings are not required for ACS, and anticoagulant treatment does not exclude coronary ischemia.",
      "teachingPoints": [
        "The clinical presentation of MI is not limited to crushing chest pain.",
        "Acute symptom triage precedes outpatient antithrombotic optimization."
      ],
      "links": [],
      "objectiveIds": [
        17,
        47
      ]
    },
    {
      "id": "i-40",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A genetic report identifies homozygous factor V Leiden rather than heterozygous factor V Leiden. Which interpretation best supports counseling?",
      "choices": [
        {
          "id": "a",
          "text": "Two affected gene copies differ from one, but event history and other risks still guide treatment decisions"
        },
        {
          "id": "b",
          "text": "Homozygous means a transient acquired laboratory abnormality"
        },
        {
          "id": "c",
          "text": "Heterozygous means the patient has no inherited thrombotic predisposition"
        },
        {
          "id": "d",
          "text": "Either result independently determines the same lifelong anticoagulant regimen"
        }
      ],
      "correctId": "a",
      "explanation": "Homozygosity indicates two copies of a variant, whereas heterozygosity indicates one. This distinction can inform risk assessment, but a genetic result is not a stand-alone treatment-duration order. Clinical thrombosis history, provoking factors, family context, and bleeding risk remain important; a variant is not synonymous with inevitable thrombosis.",
      "teachingPoints": [
        "Genetic susceptibility and observed clinical risk are related but not identical.",
        "Testing is most useful when its result can alter a management decision."
      ],
      "links": [],
      "objectiveIds": [
        18,
        19
      ]
    },
    {
      "id": "i-41",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Protein C activity is low during an acute DVT admission after warfarin initiation. What is the best interpretation before diagnosing hereditary deficiency?",
      "choices": [
        {
          "id": "a",
          "text": "A single low value proves an inherited disorder"
        },
        {
          "id": "b",
          "text": "Acute thrombosis and warfarin can affect results, so assay context and later confirmation matter"
        },
        {
          "id": "c",
          "text": "Warfarin increases protein C, so a low result cannot be drug-related"
        },
        {
          "id": "d",
          "text": "Every thrombophilia assay becomes reliable immediately after the first anticoagulant dose"
        }
      ],
      "correctId": "b",
      "explanation": "Functional thrombophilia assays can be confounded by acute thrombosis and anticoagulants. Warfarin reduces vitamin K-dependent proteins, including protein C, so a low result is not sufficient to diagnose inherited deficiency. Testing strategy and confirmation require laboratory and clinical coordination, not unplanned interruption of necessary treatment.",
      "teachingPoints": [
        "The timing and method of a test are part of its interpretation.",
        "A safe testing plan should not create avoidable thrombosis risk."
      ],
      "links": [],
      "objectiveIds": [
        19,
        31
      ]
    },
    {
      "id": "i-42",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with the thrombophilia-associated prothrombin G20210A variant asks how it differs mechanistically from protein C deficiency. Which comparison is most accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Both are acquired antibodies against heparin"
        },
        {
          "id": "b",
          "text": "Both are direct consequences of platelet cyclooxygenase inhibition"
        },
        {
          "id": "c",
          "text": "The prothrombin variant can increase a procoagulant protein, while protein C deficiency impairs natural anticoagulant activity"
        },
        {
          "id": "d",
          "text": "Both are diagnosed solely by a therapeutic INR"
        }
      ],
      "correctId": "c",
      "explanation": "Prothrombin gene variation and protein C deficiency alter different parts of the coagulation balance: increased procoagulant potential versus reduced natural anticoagulant activity. Neither is defined by heparin antibodies, antiplatelet pharmacology, or INR alone. Genetic, functional, and antigen testing answer different questions in a selected workup.",
      "teachingPoints": [
        "Inherited thrombophilia includes increased procoagulant drive and loss of anticoagulant regulation.",
        "A normal INR does not exclude hereditary thrombophilia."
      ],
      "links": [],
      "objectiveIds": [
        18
      ]
    },
    {
      "id": "i-43",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A learner points to factor Xa on the coagulation diagram and asks why apixaban reduces fibrin formation without directly blocking platelets. Which answer best connects drug target to clot biology?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban directly dissolves existing cross-linked fibrin"
        },
        {
          "id": "b",
          "text": "Apixaban prevents vitamin K absorption from food"
        },
        {
          "id": "c",
          "text": "Factor Xa is the platelet receptor blocked by clopidogrel"
        },
        {
          "id": "d",
          "text": "Inhibition of factor Xa reduces downstream thrombin generation and fibrin production"
        }
      ],
      "correctId": "d",
      "explanation": "Factor Xa participates in thrombin generation; inhibiting it reduces the thrombin available to convert fibrinogen into fibrin. This is different from fibrinolysis, vitamin K antagonism, and platelet-receptor inhibition. The cascade diagram explains an anticoagulant effect without implying that apixaban directly lyses a pre-existing clot.",
      "teachingPoints": [
        "Anticoagulation limits clot formation and propagation rather than directly dissolving fibrin.",
        "Factor Xa inhibition and P2Y12 inhibition target different processes."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "Apixaban for Reduction in Stroke and Other Thromboembolic Events in Atrial Fibrillation"
        }
      ],
      "objectiveIds": [
        1,
        3
      ]
    },
    {
      "id": "i-44",
      "domainId": "I",
      "difficulty": "core",
      "stem": "Months after proximal DVT, a patient reports chronic dependent swelling and heaviness. A new abrupt increase in pain develops today. Which distinction is most important?",
      "choices": [
        {
          "id": "a",
          "text": "Chronic post-thrombotic symptoms can coexist with recurrent DVT, so new change still requires assessment"
        },
        {
          "id": "b",
          "text": "A history of post-thrombotic syndrome excludes recurrence"
        },
        {
          "id": "c",
          "text": "Any residual swelling proves anticoagulant failure"
        },
        {
          "id": "d",
          "text": "Chronic venous symptoms are an automatic indication for thrombolysis"
        }
      ],
      "correctId": "a",
      "explanation": "Post-thrombotic syndrome reflects chronic obstruction and reflux after DVT, but it does not protect against recurrence. New or abruptly worse symptoms need a fresh assessment rather than automatic attribution to the old clot. Residual symptoms alone neither establish treatment failure nor justify thrombolysis.",
      "teachingPoints": [
        "Symptom time course helps distinguish chronic sequelae from new disease.",
        "Compression for symptom relief is separate from recurrent-clot diagnosis."
      ],
      "links": [
        {
          "kind": "tx-pathway",
          "id": "acute-vte",
          "label": "Acute VTE (DVT/PE)"
        }
      ],
      "objectiveIds": [
        12
      ]
    },
    {
      "id": "i-45",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with AF has no palpitations at a follow-up visit and assumes stroke risk has disappeared. Which interpretation best explains why risk assessment is still needed?",
      "choices": [
        {
          "id": "a",
          "text": "Absence of palpitations confirms permanent elimination of atrial stasis"
        },
        {
          "id": "b",
          "text": "AF can be asymptomatic, and stroke prevention depends on the patient's risk profile rather than symptom burden alone"
        },
        {
          "id": "c",
          "text": "A normal resting pulse removes all prior stroke risk factors"
        },
        {
          "id": "d",
          "text": "Aspirin becomes equivalent to indicated anticoagulation whenever symptoms improve"
        }
      ],
      "correctId": "b",
      "explanation": "AF may cause palpitations, fatigue, or dyspnea, but it can also be silent. Lack of symptoms does not erase stroke risk factors or establish that anticoagulation is unnecessary. Stroke prevention requires documented rhythm context and risk reassessment, rather than substituting aspirin or judging protection from pulse symptoms alone.",
      "teachingPoints": [
        "Symptom control and stroke prevention are different treatment goals.",
        "Risk factors evolve over time and deserve periodic review."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "af-stroke-prevention",
          "label": "How do I choose anticoagulation for AF stroke prevention—including intermediate-risk nuance?"
        }
      ],
      "objectiveIds": [
        13
      ]
    },
    {
      "id": "i-46",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient taking an anticoagulant has transient unilateral weakness that resolves before assessment. Why does symptom resolution not eliminate the need for urgent evaluation?",
      "choices": [
        {
          "id": "a",
          "text": "Resolution proves that hemorrhage was impossible"
        },
        {
          "id": "b",
          "text": "Anticoagulant use excludes cerebral ischemia"
        },
        {
          "id": "c",
          "text": "A TIA or other acute neurologic process remains possible, and clinical assessment with imaging is needed"
        },
        {
          "id": "d",
          "text": "A brief episode is diagnostic of a medication interaction"
        }
      ],
      "correctId": "c",
      "explanation": "Transient focal neurologic symptoms can represent a TIA and signal cerebrovascular risk even after recovery. Ischemia, hemorrhage, and mimics cannot be reliably distinguished from symptom duration alone. Anticoagulation does not rule out stroke; urgent evaluation is distinct from later decisions about chronic antithrombotic therapy.",
      "teachingPoints": [
        "Resolved focal symptoms still matter.",
        "Brain imaging and clinical context guide acute stroke decisions."
      ],
      "links": [],
      "objectiveIds": [
        14
      ]
    },
    {
      "id": "i-47",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with active cancer is mobile at home and asks whether every outpatient receiving cancer treatment needs prophylactic anticoagulation. Which interpretation best matches risk-based prevention?",
      "choices": [
        {
          "id": "a",
          "text": "Active cancer alone proves that therapeutic-dose anticoagulation is required"
        },
        {
          "id": "b",
          "text": "Absence of hospitalization eliminates all cancer-associated VTE risk"
        },
        {
          "id": "c",
          "text": "Aspirin is equivalent to every anticoagulant prevention strategy"
        },
        {
          "id": "d",
          "text": "Prophylaxis is selective and depends on thrombotic risk, bleeding risk, treatment context, and interactions"
        }
      ],
      "correctId": "d",
      "explanation": "Cancer raises VTE risk, but outpatient prevention is not universal therapeutic anticoagulation. A selected prevention population, bleeding risk, drug interactions, and patient preferences must be considered. Mobility does not abolish risk, and aspirin cannot be assumed equivalent to regimens studied for cancer-associated thromboprophylaxis.",
      "teachingPoints": [
        "Primary prevention and treatment of established VTE are separate decisions.",
        "Cancer therapy changes can alter both clotting and bleeding risk."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "avert",
          "label": "Apixaban to Prevent Venous Thromboembolism in Patients with Cancer"
        },
        {
          "kind": "trial",
          "id": "cassini",
          "label": "Rivaroxaban for Thromboprophylaxis in High-Risk Ambulatory Patients with Cancer"
        },
        {
          "kind": "pathway",
          "id": "cancer-vte",
          "label": "Cancer-associated VTE"
        }
      ],
      "objectiveIds": [
        7,
        8
      ]
    },
    {
      "id": "i-48",
      "domainId": "I",
      "difficulty": "core",
      "stem": "A patient with a tissue valve and AF asks whether the anticoagulant restrictions of a mechanical valve automatically apply. Which distinction should anchor the discussion?",
      "choices": [
        {
          "id": "a",
          "text": "Prosthesis type, position, timing, and the separate AF indication determine which evidence applies"
        },
        {
          "id": "b",
          "text": "Every implanted valve is a mechanical valve"
        },
        {
          "id": "c",
          "text": "AF after a tissue valve never needs stroke-risk assessment"
        },
        {
          "id": "d",
          "text": "A tissue valve automatically requires the same lifelong INR target as a mechanical mitral valve"
        }
      ],
      "correctId": "a",
      "explanation": "Mechanical prostheses have distinct thrombogenicity and VKA-based evidence. Tissue valves and TAVI require attention to procedure timing and any separate anticoagulation indication; mechanical-valve rules cannot simply be copied across. Conversely, a tissue valve does not erase AF stroke risk or establish a universal lifelong INR target.",
      "teachingPoints": [
        "The word valve is not a sufficient treatment category.",
        "Antithrombotic plans depend on both the prosthesis and the underlying indication."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "mechanical-valve-vka",
          "label": "How do I anticoagulate a mechanical heart valve?"
        },
        {
          "kind": "framework",
          "id": "post-tavi-antithrombotic",
          "label": "How do I choose antithrombotic therapy after TAVI?"
        },
        {
          "kind": "trial",
          "id": "river",
          "label": "Rivaroxaban in Patients with Atrial Fibrillation and a Bioprosthetic Mitral Valve"
        }
      ],
      "objectiveIds": [
        15
      ]
    },
    {
      "id": "ii-44",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A new anticoagulation service is building a problem-oriented intake record. Which information best supports longitudinal management rather than simply recording a medication name?",
      "choices": [
        {
          "id": "a",
          "text": "Anticoagulant name and preferred pharmacy only"
        },
        {
          "id": "b",
          "text": "Indication, treatment phase, relevant history, current regimen, organ function, interactions, monitoring plan, and responsible clinician"
        },
        {
          "id": "c",
          "text": "The most recent INR without its date or target"
        },
        {
          "id": "d",
          "text": "A list of trial acronyms without patient-specific findings"
        }
      ],
      "correctId": "b",
      "explanation": "A problem-oriented record links subjective concerns and objective findings to an indication-specific plan. Organ function, interactions, treatment phase, monitoring, and ownership make later reassessment possible. A drug-only list, undated INR, or collection of study names cannot support safe transitions or explain why the regimen exists.",
      "teachingPoints": [
        "Documentation should connect each active problem to assessment and follow-up.",
        "Patient-reported bleeding, adherence, and access concerns belong beside laboratory data."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        },
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        21,
        37
      ]
    },
    {
      "id": "ii-45",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient taking a DOAC develops decompensated liver disease with new coagulopathy. Which assessment is most appropriate before renewing the previous regimen?",
      "choices": [
        {
          "id": "a",
          "text": "Continue unchanged because INR is not a DOAC dosing test"
        },
        {
          "id": "b",
          "text": "Use the elevated INR as a therapeutic DOAC concentration"
        },
        {
          "id": "c",
          "text": "Reassess hepatic severity, bleeding, renal function, interacting medicines, and agent-specific labeling with specialist input"
        },
        {
          "id": "d",
          "text": "Substitute a vascular-protection dose without confirming the indication"
        }
      ],
      "correctId": "c",
      "explanation": "Hepatic dysfunction can alter drug handling and hemostasis, and restrictions differ among anticoagulants. An elevated baseline INR does not quantify DOAC effect or establish safety. Reassessment should integrate organ function and bleeding with current labeling, rather than renew automatically or substitute an unrelated dose family.",
      "teachingPoints": [
        "Baseline coagulopathy is not a calibrated measure of DOAC exposure.",
        "Renal and hepatic changes can occur together during acute illness."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        22,
        24,
        30
      ]
    },
    {
      "id": "ii-46",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient has repeatedly missed INR appointments because the only bus route was canceled. Which management plan best addresses the actual barrier?",
      "choices": [
        {
          "id": "a",
          "text": "Record nonadherence without exploring access"
        },
        {
          "id": "b",
          "text": "Extend follow-up indefinitely because symptoms are absent"
        },
        {
          "id": "c",
          "text": "Recommend skipped anticoagulant days until transport returns"
        },
        {
          "id": "d",
          "text": "Coordinate feasible testing access, transportation or home-testing assessment, and a documented reporting plan"
        }
      ],
      "correctId": "d",
      "explanation": "Transportation failure is an access barrier rather than proof that the patient rejects treatment. Feasible laboratory access or appropriately selected home testing can restore monitoring, with clear responsibility for results. Labeling the patient, abandoning follow-up, or endorsing skipped therapy leaves the underlying safety problem unresolved.",
      "teachingPoints": [
        "Adherence assessment includes access, not just willingness.",
        "Any alternative testing arrangement needs a covering clinician and result pathway."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        23
      ]
    },
    {
      "id": "ii-47",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient with controlled seizures takes carbamazepine and is being assessed for a DOAC. Which plan best handles the competing risks?",
      "choices": [
        {
          "id": "a",
          "text": "Coordinate neurology and anticoagulation review because enzyme and transporter induction can reduce DOAC exposure"
        },
        {
          "id": "b",
          "text": "Stop the antiseizure drug abruptly to simplify anticoagulation"
        },
        {
          "id": "c",
          "text": "Assume the interaction can be corrected by checking INR"
        },
        {
          "id": "d",
          "text": "Add an antiplatelet to compensate for reduced DOAC exposure"
        }
      ],
      "correctId": "a",
      "explanation": "Carbamazepine can induce drug-handling pathways and reduce DOAC exposure, potentially compromising efficacy. Safe planning coordinates alternatives rather than abruptly withdrawing seizure control. INR cannot guide DOAC adjustment, and adding an antiplatelet does not repair reduced exposure but can increase bleeding.",
      "teachingPoints": [
        "Interaction management must protect both seizure control and thrombosis prevention.",
        "Pair-specific labeling matters more than a class-wide improvised dose adjustment."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-carbamazepine",
          "label": "apixaban-carbamazepine"
        }
      ],
      "objectiveIds": [
        26,
        40
      ]
    },
    {
      "id": "ii-48",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A child with VTE has difficulty swallowing tablets. Which assessment best supports anticoagulant selection?",
      "choices": [
        {
          "id": "a",
          "text": "An adult AF schedule converted only by tablet splitting"
        },
        {
          "id": "b",
          "text": "Pediatric indication, age and weight eligibility, formulation, feeding feasibility, and specialist follow-up"
        },
        {
          "id": "c",
          "text": "The adult with the most similar body height"
        },
        {
          "id": "d",
          "text": "A fixed adult regimen because renal maturation is irrelevant"
        }
      ],
      "correctId": "b",
      "explanation": "Children differ in development, renal handling, approved indications, and available formulations. A pediatric regimen requires age- and weight-appropriate labeling and a workable administration plan. Adult AF treatment, height matching, or improvised tablet manipulation does not establish pediatric VTE safety or efficacy.",
      "teachingPoints": [
        "Formulation feasibility is part of eligibility, not an afterthought.",
        "Pediatric anticoagulation requires indication-specific specialist pathways."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "acute-vte-doac",
          "label": "Which DOAC for acute VTE when bleeding risk matters?"
        }
      ],
      "objectiveIds": [
        26
      ]
    },
    {
      "id": "ii-49",
      "domainId": "II",
      "difficulty": "core",
      "stem": "An older patient with previously stable warfarin develops poor intake and starts an interacting antibiotic. The INR is now unexpectedly high without bleeding. Which reasoning best informs the next plan?",
      "choices": [
        {
          "id": "a",
          "text": "Attribute the result to age alone and ignore the medication change"
        },
        {
          "id": "b",
          "text": "Apply the same permanent dose change to every high INR"
        },
        {
          "id": "c",
          "text": "Assess the trend, adherence, illness, interactions, and bleeding before an individualized protocol-based adjustment"
        },
        {
          "id": "d",
          "text": "Use the INR as a reason to substitute aspirin for all indications"
        }
      ],
      "correctId": "c",
      "explanation": "Warfarin response reflects clinical context as well as prior maintenance requirements. Acute illness, diet, and an interacting antibiotic may explain the change and influence follow-up. A single universal adjustment, age-only explanation, or aspirin substitution ignores the indication and the potentially temporary cause of instability.",
      "teachingPoints": [
        "Dose assessment includes reversible causes and an explicit next INR plan.",
        "New bleeding symptoms would change the urgency and management pathway."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        26,
        32
      ]
    },
    {
      "id": "ii-50",
      "domainId": "II",
      "difficulty": "core",
      "stem": "An unexpected fingerstick INR conflicts with the patient's recent trend and a same-day venous result. What is the best interpretation of this disagreement?",
      "choices": [
        {
          "id": "a",
          "text": "INR standardization guarantees that all methods always agree"
        },
        {
          "id": "b",
          "text": "The higher number is necessarily the correct one"
        },
        {
          "id": "c",
          "text": "Averaging results is a validated substitute for investigating the discrepancy"
        },
        {
          "id": "d",
          "text": "Method and sample factors require review under the clinic's confirmation policy before major decisions"
        }
      ],
      "correctId": "d",
      "explanation": "INR standardization reduces reagent-related variation but does not eliminate method, sample, or interference problems. Unexpected discordance needs quality and laboratory review under a confirmation policy. Neither selecting the larger value nor averaging results establishes a reliable measurement or resolves the source of disagreement.",
      "teachingPoints": [
        "Standardization does not remove the need for quality control.",
        "The clinical picture and device limitations matter when interpreting a result."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        27,
        29
      ]
    },
    {
      "id": "ii-51",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient on apixaban has a normal INR before emergency surgery. Which conclusion is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "A normal INR does not exclude clinically relevant apixaban effect; timing, renal function, and available calibrated assays matter"
        },
        {
          "id": "b",
          "text": "A normal INR proves that all anticoagulant activity has cleared"
        },
        {
          "id": "c",
          "text": "The INR can be used to calculate the apixaban dose"
        },
        {
          "id": "d",
          "text": "The INR establishes that an antiplatelet has no effect either"
        }
      ],
      "correctId": "a",
      "explanation": "INR is calibrated for VKA assessment, not for excluding apixaban activity. Emergency interpretation incorporates the last dose, organ function, bleeding or procedural urgency, and a suitable drug-calibrated assay if available. A normal INR neither proves clearance nor quantifies apixaban or platelet inhibition.",
      "teachingPoints": [
        "Assay selection must match the drug and clinical question.",
        "Resuscitation and urgent procedural coordination should not depend on an irrelevant test target."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-major-bleed-us",
          "label": "Life-threatening bleed on a DOAC (U.S.) — what do I reverse with?"
        }
      ],
      "objectiveIds": [
        28,
        29
      ]
    },
    {
      "id": "ii-52",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient with a new unprovoked VTE asks for a full inherited thrombophilia panel while taking a DOAC. Which approach best supports meaningful testing?",
      "choices": [
        {
          "id": "a",
          "text": "Order every functional assay immediately because anticoagulants improve accuracy"
        },
        {
          "id": "b",
          "text": "Identify whether a result would change care and coordinate assay selection and timing with the laboratory"
        },
        {
          "id": "c",
          "text": "Interrupt necessary treatment without assessing recurrence risk"
        },
        {
          "id": "d",
          "text": "Regard a negative panel as proof that recurrence cannot occur"
        }
      ],
      "correctId": "b",
      "explanation": "Thrombophilia testing should answer a management question, and functional assays can be altered by acute thrombosis or anticoagulant interference. Genetic tests have different limitations. A negative panel does not erase clinical recurrence risk, and stopping necessary anticoagulation solely to obtain tests can cause harm.",
      "teachingPoints": [
        "Testing value depends on its effect on decisions.",
        "Timing and interference require a drug- and assay-specific plan rather than one universal hold."
      ],
      "links": [],
      "objectiveIds": [
        31,
        19
      ]
    },
    {
      "id": "ii-53",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "Soon after warfarin initiation, a patient develops painful dark skin lesions rather than visible external bleeding. Which assessment best fits a serious nonhemorrhagic adverse event?",
      "choices": [
        {
          "id": "a",
          "text": "Expected bruising that never needs evaluation"
        },
        {
          "id": "b",
          "text": "Evidence that platelet inhibition is working as intended"
        },
        {
          "id": "c",
          "text": "Possible warfarin-associated skin necrosis requiring urgent assessment and regimen review"
        },
        {
          "id": "d",
          "text": "A finding that proves warfarin should be increased automatically"
        }
      ],
      "correctId": "c",
      "explanation": "Painful necrotic lesions early in warfarin therapy raise concern for skin necrosis, a thrombotic rather than simple hemorrhagic complication. It needs urgent clinical assessment and anticoagulant review. Dismissing it as expected bruising or escalating warfarin without evaluation can worsen harm; platelet inhibition is not warfarin's mechanism.",
      "teachingPoints": [
        "Anticoagulant adverse events are not limited to bleeding.",
        "Early protein C depletion helps explain this unusual prothrombotic complication."
      ],
      "links": [
        {
          "kind": "tx-pathway",
          "id": "acute-vte",
          "label": "Acute VTE (DVT/PE)"
        }
      ],
      "objectiveIds": [
        34
      ]
    },
    {
      "id": "ii-54",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A hospitalized patient has substantial VTE risk but active bleeding precludes pharmacologic prophylaxis. Which prevention approach is most appropriate to evaluate?",
      "choices": [
        {
          "id": "a",
          "text": "Therapeutic-dose anticoagulation solely because the VTE risk is high"
        },
        {
          "id": "b",
          "text": "No prevention assessment until discharge"
        },
        {
          "id": "c",
          "text": "A vena cava filter as routine primary prophylaxis for every bleeding patient"
        },
        {
          "id": "d",
          "text": "Mechanical prophylaxis when suitable, with mobility measures and repeated bleeding-risk reassessment"
        }
      ],
      "correctId": "d",
      "explanation": "When bleeding makes pharmacologic prophylaxis unacceptable, suitable mechanical prevention can be considered while the clinical situation is reassessed. Mobility measures support prevention but do not remove the need for risk review. Routine therapeutic dosing or filter placement is not a substitute for balancing the competing risks.",
      "teachingPoints": [
        "Prevention strategy can change as bleeding resolves.",
        "Mechanical measures require suitability, correct application, and adherence."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "vte-prophylaxis",
          "label": "VTE prophylaxis (medical and surgical)"
        }
      ],
      "objectiveIds": [
        35,
        8
      ]
    },
    {
      "id": "ii-55",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A hospital changes a patient's anticoagulant at discharge but the discharge summary lists both the previous and replacement drug. Which action best prevents an unintended overlap?",
      "choices": [
        {
          "id": "a",
          "text": "Reconcile the transition plan, including the last previous dose, intended first replacement dose, indication, and responsible team"
        },
        {
          "id": "b",
          "text": "Continue both agents until an annual review"
        },
        {
          "id": "c",
          "text": "Assume every anticoagulant switch needs the same overlap"
        },
        {
          "id": "d",
          "text": "Use INR alone to determine all DOAC transition timing"
        }
      ],
      "correctId": "a",
      "explanation": "Anticoagulant transitions are agent- and indication-specific. A reconciled plan must distinguish intended overlap from accidental duplication and make timing and ownership explicit. Universal overlap, unresolved duplicate lists, or applying INR to every DOAC switch can create gaps or excessive anticoagulation.",
      "teachingPoints": [
        "Switching is a care transition with its own error risks.",
        "Written patient instructions should match the final medication list."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        36
      ]
    },
    {
      "id": "ii-56",
      "domainId": "II",
      "difficulty": "core",
      "stem": "After an emergency visit for bleeding, a patient receives separate instructions from the emergency clinician and anticoagulation clinic. Which follow-up design best supports continuity?",
      "choices": [
        {
          "id": "a",
          "text": "Each team records its own plan without comparing it"
        },
        {
          "id": "b",
          "text": "A reconciled shared plan naming the current regimen, pending tests, restart decision, and follow-up owner"
        },
        {
          "id": "c",
          "text": "The patient chooses whichever plan is simpler"
        },
        {
          "id": "d",
          "text": "All therapy is deferred until the next routine annual visit"
        }
      ],
      "correctId": "b",
      "explanation": "Continuity depends on a single reconciled plan that states what is being taken, what remains undecided, and who will act on pending results or restart decisions. Parallel contradictory notes shift risk to the patient. Convenience alone cannot resolve competing plans, and routine annual review is inadequate for a recent bleeding transition.",
      "teachingPoints": [
        "Handoffs should communicate both decisions and unresolved tasks.",
        "A named owner closes the loop after the immediate event."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-major-bleed-us",
          "label": "Life-threatening bleed on a DOAC (U.S.) — what do I reverse with?"
        }
      ],
      "objectiveIds": [
        37,
        48
      ]
    },
    {
      "id": "ii-57",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient completes treatment for a transiently provoked DVT, but new active cancer is diagnosed before the planned stop visit. Which reassessment is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Stop automatically because the original calendar date has arrived"
        },
        {
          "id": "b",
          "text": "Continue indefinitely without reviewing bleeding or interactions"
        },
        {
          "id": "c",
          "text": "Revisit recurrence risk, bleeding, cancer therapy, and patient preference before confirming discontinuation"
        },
        {
          "id": "d",
          "text": "Use Wells score as the sole long-term treatment-duration rule"
        }
      ],
      "correctId": "c",
      "explanation": "Duration decisions depend on current as well as original risk factors. New cancer can change recurrence risk and drug interactions, so the previous stop plan requires review. Neither an automatic stop nor unexamined indefinite therapy fits individualized care; Wells is a diagnostic probability tool rather than an extension rule.",
      "teachingPoints": [
        "A stop date is a reassessment point, not a substitute for reassessment.",
        "Persistent risk and bleeding risk should both be documented."
      ],
      "links": [
        {
          "kind": "tx-pathway",
          "id": "extended-vte",
          "label": "Extended VTE secondary prevention"
        },
        {
          "kind": "framework",
          "id": "cancer-vte",
          "label": "How do I treat cancer-associated VTE acutely and on extended therapy?"
        }
      ],
      "objectiveIds": [
        38,
        42
      ]
    },
    {
      "id": "ii-58",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A warfarin patient begins a restrictive diet and an herbal supplement, then develops unstable INR values. Which review best addresses the likely causes?",
      "choices": [
        {
          "id": "a",
          "text": "Only the tablet manufacturer, because food cannot affect warfarin"
        },
        {
          "id": "b",
          "text": "The assumption that all natural products are pharmacologically inactive"
        },
        {
          "id": "c",
          "text": "A switch to variable skipped-day schedules without investigating the pattern"
        },
        {
          "id": "d",
          "text": "Changes in vitamin K intake, supplement ingredients, adherence, illness, and other medicines"
        }
      ],
      "correctId": "d",
      "explanation": "Diet and supplements can alter warfarin response through vitamin K changes or interactions, alongside illness and adherence. A structured review identifies modifiable causes before a durable adjustment is assumed. Ignoring food, treating herbs as inert, or improvising skipped days does not explain or correct INR instability.",
      "teachingPoints": [
        "Consistency of intake is different from avoiding all vitamin K.",
        "Supplement reconciliation should include product names and changing ingredients."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        39,
        40
      ]
    },
    {
      "id": "ii-59",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient taking rivaroxaban has ongoing major GI bleeding and hemodynamic compromise in a U.S. hospital. Which pathway best reflects the site's current teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Resuscitation and source control with institutional off-label 4F-PCC assessment for life-threatening FXa bleeding"
        },
        {
          "id": "b",
          "text": "Idarucizumab as the specific reversal agent for rivaroxaban"
        },
        {
          "id": "c",
          "text": "Vitamin K alone as rapid specific FXa reversal"
        },
        {
          "id": "d",
          "text": "Routine use of a withdrawn U.S. andexanet product"
        }
      ],
      "correctId": "a",
      "explanation": "Major bleeding requires stabilization and source control while the anticoagulant and recent exposure are identified. Current U.S. FXa teaching uses institutional off-label 4F-PCC pathways, not a specific FDA-labeled FXa antidote. Idarucizumab targets dabigatran; vitamin K sustains VKA reversal rather than reversing rivaroxaban.",
      "teachingPoints": [
        "Reversal strategy is drug-specific and does not replace supportive care.",
        "Restart planning is a separate decision after hemostasis."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-major-bleed-us",
          "label": "Life-threatening bleed on a DOAC (U.S.) — what do I reverse with?"
        },
        {
          "kind": "nuance",
          "id": "annexa-historical-vs-us-4fpcc",
          "label": "ANNEXA-era andexanet vs U.S. 4F-PCC practice"
        },
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ],
      "objectiveIds": [
        41,
        33
      ]
    },
    {
      "id": "ii-60",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient on a DOAC is scheduled for a low-bleeding-risk procedure and receives a generic instruction to stop all blood thinners and use heparin shots. Which planning step should occur first?",
      "choices": [
        {
          "id": "a",
          "text": "Accept the generic plan because all anticoagulants have the same offset"
        },
        {
          "id": "b",
          "text": "Clarify the procedure and whether interruption is needed, then use agent-, renal-, and risk-specific planning"
        },
        {
          "id": "c",
          "text": "Assume every procedure requires a heparin bridge"
        },
        {
          "id": "d",
          "text": "Substitute aspirin during the interruption without assessing the indication"
        }
      ],
      "correctId": "b",
      "explanation": "Periprocedural planning starts with the actual procedure and whether interruption is necessary. If a hold is needed, the drug, renal function, thrombotic risk, and bleeding risk guide a documented plan. DOACs do not share warfarin's kinetics, routine heparin bridging is not the default, and aspirin is not equivalent coverage.",
      "teachingPoints": [
        "The first question is whether a hold is needed at all.",
        "Restart ownership and hemostasis assessment belong in the same plan."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "peri-procedural-oac",
          "label": "How do I plan anticoagulation around an elective procedure?"
        }
      ],
      "objectiveIds": [
        43
      ]
    },
    {
      "id": "ii-61",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A patient demonstrates reliable home INR technique but asks to change warfarin doses independently whenever a result appears. Which distinction should the clinic explain?",
      "choices": [
        {
          "id": "a",
          "text": "Buying a meter automatically authorizes independent dose changes"
        },
        {
          "id": "b",
          "text": "Home INR testing eliminates the need for clinical oversight"
        },
        {
          "id": "c",
          "text": "Self-testing reports results to the managing service; self-management additionally requires a separate authorized dosing and training framework"
        },
        {
          "id": "d",
          "text": "Self-testing and self-management are identical activities"
        }
      ],
      "correctId": "c",
      "explanation": "Self-testing concerns obtaining and reporting a measurement, whereas self-management includes treatment adjustment within a structured trained program. Device competence alone does not establish dose-management competence or authority. Home testing still requires reporting, quality expectations, and access to a responsible clinical team.",
      "teachingPoints": [
        "Technical skill and treatment decision-making are separate competencies.",
        "Program rules should define who interprets results and adjusts therapy."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        44,
        45
      ]
    },
    {
      "id": "ii-62",
      "domainId": "II",
      "difficulty": "core",
      "stem": "During home INR training, a patient cannot obtain a sample correctly and does not know how to report an unexpected result. What is the most appropriate eligibility conclusion?",
      "choices": [
        {
          "id": "a",
          "text": "Mailing the meter establishes eligibility even without demonstration"
        },
        {
          "id": "b",
          "text": "A caregiver's availability removes the need for any competency check"
        },
        {
          "id": "c",
          "text": "A successful reading once is enough regardless of reporting ability"
        },
        {
          "id": "d",
          "text": "Additional training and demonstrated competence are needed before unsupervised home testing"
        }
      ],
      "correctId": "d",
      "explanation": "Home INR eligibility includes reliable technique and a reporting plan, not simply ownership of a meter. Failed demonstration calls for adapted training and reassessment, including caregiver participation when appropriate. A single reading or assumed caregiver availability does not show that the entire testing and response process is safe.",
      "teachingPoints": [
        "Eligibility includes practical ability and follow-through.",
        "Demonstration should include reporting and escalation as well as sampling."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        45,
        46
      ]
    },
    {
      "id": "ii-63",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A point-of-care INR operator finds that strips were stored outside the manufacturer's conditions. A patient is waiting for testing. Which procedure best preserves test reliability?",
      "choices": [
        {
          "id": "a",
          "text": "Follow the device instructions and quality policy before releasing results, using an alternative verified testing route if needed"
        },
        {
          "id": "b",
          "text": "Use the strips because a visible number proves validity"
        },
        {
          "id": "c",
          "text": "Average several readings from the affected strips"
        },
        {
          "id": "d",
          "text": "Change the patient's warfarin based on symptoms alone"
        }
      ],
      "correctId": "a",
      "explanation": "Strip storage, expiration, sampling technique, and quality procedures affect point-of-care validity. A number appearing on the screen does not establish a reliable result. Compromised materials require the device-specific quality response and a verified alternative when necessary; repeated invalid readings or symptom-based dosing do not correct the problem.",
      "teachingPoints": [
        "Device instructions govern sampling and quality steps.",
        "Patient-result reporting depends on an acceptable testing process."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        46
      ]
    },
    {
      "id": "ii-64",
      "domainId": "II",
      "difficulty": "core",
      "stem": "An anticoagulated patient calls after a fall with head impact and reports increasing drowsiness. Which triage response is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Wait for visible external bleeding before arranging assessment"
        },
        {
          "id": "b",
          "text": "Emergency evaluation for possible intracranial injury rather than routine telephone dose adjustment"
        },
        {
          "id": "c",
          "text": "Reassure because anticoagulation prevents head injury complications"
        },
        {
          "id": "d",
          "text": "Obtain a routine INR next month as the only response"
        }
      ],
      "correctId": "b",
      "explanation": "Head trauma with increasing drowsiness raises concern for intracranial injury and requires emergency assessment. External bleeding may be absent, and anticoagulation can increase the consequences of occult hemorrhage. A future routine INR or telephone dose change cannot exclude brain injury or substitute for acute evaluation.",
      "teachingPoints": [
        "Neurologic change after trauma is a red flag.",
        "Acute triage and later anticoagulant restart decisions are different tasks."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        },
        {
          "kind": "framework",
          "id": "post-ich-anticoagulation",
          "label": "If AF (or VTE) coexists with prior ICH, when do I restart anticoagulation?"
        }
      ],
      "objectiveIds": [
        47
      ]
    },
    {
      "id": "ii-65",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient reports a new painful swollen leg while taking a DOAC. Which evaluation best precedes declaring anticoagulant treatment failure?",
      "choices": [
        {
          "id": "a",
          "text": "Assume all persistent ultrasound abnormalities represent a new clot"
        },
        {
          "id": "b",
          "text": "Increase the dose without confirming recurrence"
        },
        {
          "id": "c",
          "text": "Urgent objective assessment plus review of adherence, indication-specific regimen, interactions, absorption, and comparison with prior imaging"
        },
        {
          "id": "d",
          "text": "Exclude recurrence because the patient has a prescription"
        }
      ],
      "correctId": "c",
      "explanation": "Suspected recurrence needs objective assessment and comparison with previous findings. A prescription does not establish actual exposure, and missed doses, interactions, absorption, or an inappropriate regimen may explain failure. Residual clot is not necessarily new thrombosis; an unverified dose increase can add bleeding without addressing the cause.",
      "teachingPoints": [
        "Confirm the event and investigate exposure before labeling treatment failure.",
        "Confirmed breakthrough thrombosis warrants specialist reassessment of the treatment strategy."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "acute-vte-doac",
          "label": "Which DOAC for acute VTE when bleeding risk matters?"
        },
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        49
      ]
    },
    {
      "id": "ii-66",
      "domainId": "II",
      "difficulty": "core",
      "stem": "A stable patient with PE can receive anticoagulation and asks whether a retrievable inferior vena cava filter adds routine protection. Which interpretation fits PREPIC2 teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Every PE requires a permanent filter regardless of anticoagulation feasibility"
        },
        {
          "id": "b",
          "text": "A filter dissolves existing pulmonary artery clot"
        },
        {
          "id": "c",
          "text": "Filter placement removes the need to reassess anticoagulation later"
        },
        {
          "id": "d",
          "text": "Routine filter addition did not establish benefit when anticoagulation was feasible; filters have selected indications and retrieval considerations"
        }
      ],
      "correctId": "d",
      "explanation": "PREPIC2 evaluated a filter added to anticoagulation, not a universal replacement for it. Routine addition did not establish benefit in that setting. Filters trap emboli rather than dissolve clot and carry device-related risks; selected use requires a reason, follow-up, and a retrieval assessment when appropriate.",
      "teachingPoints": [
        "Filter evidence depends on whether anticoagulation is possible.",
        "Device placement is not a substitute for a longitudinal treatment plan."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "prepic2",
          "label": "Effect of a Retrievable Inferior Vena Cava Filter Plus Anticoagulation vs Anticoagulation Alone on Risk of Recurrent Pulmonary Embolism: A Randomized Clinical Trial"
        },
        {
          "kind": "pathway",
          "id": "pe-reperfusion",
          "label": "PE reperfusion / intermediate-risk PE"
        }
      ],
      "objectiveIds": [
        50,
        35
      ]
    },
    {
      "id": "ii-67",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A PE team discusses mechanical thrombectomy and catheter-directed thrombolysis. Which distinction is essential before selecting an intervention?",
      "choices": [
        {
          "id": "a",
          "text": "Mechanical clot removal differs from lytic delivery, and patient severity, bleeding contraindications, anatomy, and center expertise matter"
        },
        {
          "id": "b",
          "text": "Both procedures have identical bleeding contraindications because both always require the same lytic exposure"
        },
        {
          "id": "c",
          "text": "Every intermediate-risk PE needs a catheter intervention"
        },
        {
          "id": "d",
          "text": "A catheter procedure removes the need for subsequent anticoagulation assessment"
        }
      ],
      "correctId": "a",
      "explanation": "Mechanical thrombectomy removes thrombus, whereas catheter-directed thrombolysis delivers a fibrinolytic strategy. The planned device and lytic exposure matter when evaluating bleeding and procedural risks. Neither intervention is a default for every intermediate-risk PE, and both require a broader treatment and follow-up plan.",
      "teachingPoints": [
        "Device names do not replace assessment of what the procedure actually does.",
        "Trial populations and local rescue capability constrain generalization."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "intermediate-pe-cdt",
          "label": "Who with intermediate-risk PE is a candidate for catheter-directed therapy?"
        },
        {
          "kind": "nuance",
          "id": "hi-peitho-enrichment",
          "label": "Intermediate-risk PE: anticoagulation vs CDT"
        }
      ],
      "objectiveIds": [
        50
      ]
    },
    {
      "id": "ii-68",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A patient with AF and recurrent major bleeding is considering LAAO but cannot commit to follow-up imaging or the planned post-implant antithrombotic regimen. Which concern is most important?",
      "choices": [
        {
          "id": "a",
          "text": "Successful implantation guarantees that all antithrombotic therapy is permanently unnecessary"
        },
        {
          "id": "b",
          "text": "LAAO requires assessment of post-implant therapy and surveillance feasibility, not just procedural eligibility"
        },
        {
          "id": "c",
          "text": "LAAO treats DVT and PE as well as AF stroke risk"
        },
        {
          "id": "d",
          "text": "LAAO replaces warfarin needed for a mechanical valve"
        }
      ],
      "correctId": "b",
      "explanation": "LAAO may reduce long-term OAC exposure in selected AF patients, but it carries procedural and device-related risks and needs post-implant treatment and surveillance. Inability to complete these steps affects suitability. It does not treat venous thrombosis or replace anticoagulation required for a mechanical prosthesis.",
      "teachingPoints": [
        "Shared decision-making includes life after implantation.",
        "Device-related thrombus and residual leak are part of follow-up discussions."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "laao-vs-oac",
          "label": "When is left atrial appendage occlusion reasonable versus long-term OAC?"
        },
        {
          "kind": "case",
          "id": "laao-candidate",
          "label": "Recurrent bleeds on DOAC — LAAO consult?"
        }
      ],
      "objectiveIds": [
        50
      ]
    },
    {
      "id": "iii-25",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient with declining memory wants to manage anticoagulation independently, but a family member already organizes other medicines. Which education plan best respects autonomy and safety?",
      "choices": [
        {
          "id": "a",
          "text": "Direct all teaching to the relative without asking the patient"
        },
        {
          "id": "b",
          "text": "Exclude family involvement regardless of the patient's wishes"
        },
        {
          "id": "c",
          "text": "Assess the patient's abilities and preferences, then involve agreed supports with consent and verify understanding together"
        },
        {
          "id": "d",
          "text": "Assume a printed prescription proves that cognitive barriers are resolved"
        }
      ],
      "correctId": "c",
      "explanation": "Education starts with the patient's abilities, preferences, and consent. An agreed caregiver role can support administration and reporting while preserving participation. Bypassing the patient, excluding useful support, or relying only on printed instructions fails to assess whether the actual home plan can be carried out.",
      "teachingPoints": [
        "Family availability is not the same as a defined support role.",
        "Teach-back can include the patient and the person assisting with medicines."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "frail-elderly-vka-doac",
          "label": "Should frail older adults on stable VKA switch to a DOAC?"
        }
      ],
      "objectiveIds": [
        53,
        54
      ]
    },
    {
      "id": "iii-26",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient with limited reading ability receives a long technical anticoagulant leaflet and cannot explain the schedule. Which educational material is the best next choice?",
      "choices": [
        {
          "id": "a",
          "text": "Another copy of the same technical leaflet without discussion"
        },
        {
          "id": "b",
          "text": "A trial forest plot without explanation"
        },
        {
          "id": "c",
          "text": "A list of brand names without the patient's regimen"
        },
        {
          "id": "d",
          "text": "A plain-language, language-appropriate pictorial schedule paired with demonstration and teach-back"
        }
      ],
      "correctId": "d",
      "explanation": "Materials should match language, literacy, vision, and the task the patient must perform. A pictorial schedule paired with demonstration tests practical understanding, whereas duplicating a difficult leaflet or providing research graphics does not correct the barrier. Written materials support, but do not replace, interactive teaching.",
      "teachingPoints": [
        "Readability and accessibility are selection criteria for educational materials.",
        "Understanding should be demonstrated rather than inferred from receiving a handout."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        56,
        51
      ]
    },
    {
      "id": "iii-27",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient cannot afford transportation to INR checks and has limited food access. Which community-support plan best reinforces anticoagulation care?",
      "choices": [
        {
          "id": "a",
          "text": "Connect the patient with social work, transport and food resources, and the clinic's feasible testing options, then confirm the referrals worked"
        },
        {
          "id": "b",
          "text": "Provide only a warning about nonadherence"
        },
        {
          "id": "c",
          "text": "Recommend unplanned skipped doses to stretch access"
        },
        {
          "id": "d",
          "text": "Replace the anticoagulant with an inexpensive supplement"
        }
      ],
      "correctId": "a",
      "explanation": "Community resources can address barriers that medication counseling alone cannot fix. Social work, transportation, food support, and feasible monitoring need coordinated referrals and confirmation of access. Blaming the patient or substituting skipped doses or supplements leaves both the barrier and thrombotic risk unresolved.",
      "teachingPoints": [
        "A resource referral should include a follow-up loop.",
        "Financial and practical barriers belong in the education assessment."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        58,
        23
      ]
    },
    {
      "id": "iii-28",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A clinic writes learning objectives for a patient's home INR device training. Which objective is best suited to verifying a practical skill?",
      "choices": [
        {
          "id": "a",
          "text": "The patient states that the meter is convenient"
        },
        {
          "id": "b",
          "text": "The patient demonstrates sample collection and testing, reports the result, and explains the response to an error or unexpected reading"
        },
        {
          "id": "c",
          "text": "The patient recognizes the device brand without using it"
        },
        {
          "id": "d",
          "text": "The patient reads a brochure without demonstrating a task"
        }
      ],
      "correctId": "b",
      "explanation": "A useful device-training objective describes observable performance: correct testing, result reporting, and a response to problems. Preference, brand recognition, and passive reading do not show competence. Demonstration and teach-back identify gaps before the patient relies on the device outside the clinic.",
      "teachingPoints": [
        "Learning objectives should be specific and observable.",
        "Reporting and escalation are device-learning tasks, not optional extras."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        59,
        55
      ]
    },
    {
      "id": "iii-29",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A clinic finds that staff still describe INR as a routine DOAC dose target. Which education strategy best addresses the prescriber and staff learning need?",
      "choices": [
        {
          "id": "a",
          "text": "A patient-only leaflet while leaving staff instructions unchanged"
        },
        {
          "id": "b",
          "text": "A reminder that every anticoagulant uses the same INR range"
        },
        {
          "id": "c",
          "text": "A case-based session contrasting VKA monitoring with DOAC assessment, followed by a competency check and updated materials"
        },
        {
          "id": "d",
          "text": "A list of drug prices without monitoring content"
        }
      ],
      "correctId": "c",
      "explanation": "Staff education should directly correct the misconception and verify transfer to practice. Contrasting VKA INR monitoring with drug-specific DOAC assessment and checking competence addresses the error. Patient-only material or unrelated information does not repair the clinical workflow, and a universal INR target is incorrect.",
      "teachingPoints": [
        "Education can target prescribers and staff as well as patients.",
        "Updated materials and observed competence support a durable practice change."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        },
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        60
      ]
    },
    {
      "id": "iii-30",
      "domainId": "III",
      "difficulty": "core",
      "stem": "A patient needs an interpreter and has reduced vision. The clinic has explained anticoagulation verbally but is unsure whether the patient can follow the plan at home. Which assessment best demonstrates readiness?",
      "choices": [
        {
          "id": "a",
          "text": "A family member nodding while the patient remains silent"
        },
        {
          "id": "b",
          "text": "Documentation that standard print instructions were handed over"
        },
        {
          "id": "c",
          "text": "Repeating unfamiliar medical terms more loudly"
        },
        {
          "id": "d",
          "text": "Accessible materials and professional interpretation followed by the patient's explanation and demonstration of the agreed plan"
        }
      ],
      "correctId": "d",
      "explanation": "Language and visual barriers require accessible communication, not louder jargon or passive confirmation. Professional interpretation, suitable materials, and teach-back let the team assess the patient's ability to execute the plan. A relative's nod or delivery of standard print does not establish comprehension or functional readiness.",
      "teachingPoints": [
        "Readiness includes cognition, vision, language, and practical function.",
        "Document the barrier, adaptation, and what the patient demonstrated."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        51,
        54,
        55
      ]
    },
    {
      "id": "iv-28",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A discharge list includes Eliquis and apixaban as if they were different medicines. Which statement correctly resolves the identity and common adult tablet forms?",
      "choices": [
        {
          "id": "a",
          "text": "Eliquis is apixaban; the adult oral tablets are available as 2.5 mg and 5 mg strengths"
        },
        {
          "id": "b",
          "text": "Eliquis is dabigatran and apixaban is its antidote"
        },
        {
          "id": "c",
          "text": "Eliquis is an injectable heparin product"
        },
        {
          "id": "d",
          "text": "Eliquis and apixaban have unrelated active ingredients"
        }
      ],
      "correctId": "a",
      "explanation": "Eliquis is the brand name for apixaban, a direct FXa inhibitor. Its adult oral tablets include 2.5 mg and 5 mg strengths; strength alone does not determine the indication-specific regimen. Duplicate brand and generic entries risk double exposure, whereas dabigatran and injectable heparin are different medicines.",
      "teachingPoints": [
        "Brand and generic reconciliation helps prevent duplication.",
        "Tablet strength, administered dose, and clinical indication are distinct concepts."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "Apixaban for Reduction in Stroke and Other Thromboembolic Events in Atrial Fibrillation"
        }
      ],
      "objectiveIds": [
        61,
        62
      ]
    },
    {
      "id": "iv-29",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A pediatric anticoagulation order specifies an apixaban preparation for oral suspension. Why should the dispensing team verify the exact product and administration instructions?",
      "choices": [
        {
          "id": "a",
          "text": "Every apixaban product is an injectable preparation"
        },
        {
          "id": "b",
          "text": "Pediatric formulations and preparation steps differ from adult film-coated tablets and are not interchangeable by appearance"
        },
        {
          "id": "c",
          "text": "Formulation has no effect on administration feasibility"
        },
        {
          "id": "d",
          "text": "Adult tablet splitting is the default for every pediatric prescription"
        }
      ],
      "correctId": "b",
      "explanation": "Apixaban labeling includes formulation-specific pediatric products as well as adult tablets. The correct product, preparation, route, and age- or weight-based plan must align. Neither appearance nor the active ingredient alone guarantees equivalent handling; an improvised adult-tablet method is not a substitute for product instructions.",
      "teachingPoints": [
        "Formulation-specific instructions matter even when the active ingredient is shared.",
        "Pediatric eligibility and administration require coordinated verification."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "acute-vte-doac",
          "label": "Which DOAC for acute VTE when bleeding risk matters?"
        }
      ],
      "objectiveIds": [
        62,
        26
      ]
    },
    {
      "id": "iv-30",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Two patients need anticoagulants with different onset characteristics. Which comparison best explains why an early INR rise on warfarin is not equivalent to a DOAC's direct action?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin directly neutralizes all thrombin immediately"
        },
        {
          "id": "b",
          "text": "DOACs require vitamin K depletion before any activity"
        },
        {
          "id": "c",
          "text": "Warfarin depends on turnover of functional clotting factors, whereas DOACs act directly on circulating target enzymes after absorption"
        },
        {
          "id": "d",
          "text": "INR directly measures the concentration of every DOAC"
        }
      ],
      "correctId": "c",
      "explanation": "Warfarin reduces production of functional vitamin K-dependent proteins, so its full effect depends on factor turnover. DOACs act on their target enzyme after absorption and have a different onset pattern. Neither immediate thrombin neutralization by warfarin nor vitamin K depletion by DOACs explains the pharmacology, and INR is not a DOAC concentration.",
      "teachingPoints": [
        "Mechanism helps explain onset and transition planning.",
        "An early laboratory response is not always the same as full clinical anticoagulant effect."
      ],
      "links": [
        {
          "kind": "tx-pathway",
          "id": "acute-vte",
          "label": "Acute VTE (DVT/PE)"
        }
      ],
      "objectiveIds": [
        64
      ]
    },
    {
      "id": "iv-31",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A patient with reduced-function cytochrome P450 2C9 variants has greater-than-expected warfarin sensitivity. Which mechanism best explains this finding?",
      "choices": [
        {
          "id": "a",
          "text": "Increased renal elimination of unchanged warfarin is the expected cause"
        },
        {
          "id": "b",
          "text": "The variants directly dissolve fibrin"
        },
        {
          "id": "c",
          "text": "The variants make INR monitoring unnecessary"
        },
        {
          "id": "d",
          "text": "Reduced metabolism of the more potent S-warfarin can lower dose requirements and prolong response"
        }
      ],
      "correctId": "d",
      "explanation": "Cytochrome P450 2C9 contributes to S-warfarin metabolism. Reduced-function variants can decrease clearance and alter dose requirements, but clinical factors and serial INR still guide therapy. They do not directly lyse clot or establish a fixed dose, and they do not remove the need for monitoring.",
      "teachingPoints": [
        "Pharmacogenetics informs expected response rather than replacing observation.",
        "Drug interactions and illness can modify response even with a known genotype."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        64
      ]
    },
    {
      "id": "iv-32",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A warfarin pharmacogenetic report includes variation in vitamin K epoxide reductase complex subunit 1. How does this differ from a cytochrome P450 2C9 result?",
      "choices": [
        {
          "id": "a",
          "text": "It concerns the drug's vitamin K recycling target, whereas cytochrome P450 2C9 concerns metabolism"
        },
        {
          "id": "b",
          "text": "Both reports directly measure current warfarin concentration"
        },
        {
          "id": "c",
          "text": "It indicates that warfarin has become a direct FXa inhibitor"
        },
        {
          "id": "d",
          "text": "It predicts an INR target independent of the treatment indication"
        }
      ],
      "correctId": "a",
      "explanation": "Variation in vitamin K epoxide reductase complex subunit 1 affects the target pathway and sensitivity to warfarin. Cytochrome P450 2C9 variation affects metabolism. Neither is a current drug concentration or an indication-specific INR target; genotype information supplements, rather than replaces, clinical assessment and INR follow-up.",
      "teachingPoints": [
        "Target sensitivity and drug clearance are different sources of dose variability.",
        "The indication determines the therapeutic goal, not the genotype alone."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        64
      ]
    },
    {
      "id": "iv-33",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "Renal function deteriorates in a patient taking dabigatran. Which pharmacokinetic concern best explains the need for reassessment?",
      "choices": [
        {
          "id": "a",
          "text": "Renal impairment reliably eliminates dabigatran's effect"
        },
        {
          "id": "b",
          "text": "Reduced clearance may increase exposure and bleeding risk, with management dependent on labeling and clinical context"
        },
        {
          "id": "c",
          "text": "Dietary vitamin K now becomes its specific antidote"
        },
        {
          "id": "d",
          "text": "The INR becomes a validated dose-adjustment target for dabigatran"
        }
      ],
      "correctId": "b",
      "explanation": "Dabigatran has substantial renal dependence, so impaired clearance can prolong exposure and increase bleeding risk. The regimen and interruption plan need reassessment using the label and clinical setting. Renal impairment does not abolish activity, and neither vitamin K nor INR becomes a specific dabigatran reversal or dosing tool.",
      "teachingPoints": [
        "Clearance changes affect both routine treatment and urgent procedural planning.",
        "Last-dose timing and current renal function belong in a bleeding assessment."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "re-ly",
          "label": "Randomized Evaluation of Long-term Anticoagulation Therapy"
        },
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ],
      "objectiveIds": [
        64,
        67
      ]
    },
    {
      "id": "iv-34",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A patient says that all oral FXa inhibitors must share rivaroxaban's food requirement. Which comparison is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Every oral FXa inhibitor requires an identical high-fat meal"
        },
        {
          "id": "b",
          "text": "Food reverses the anticoagulant effect of apixaban"
        },
        {
          "id": "c",
          "text": "Food effects differ by product and strength; rivaroxaban's higher-strength tablet teaching does not create the same rule for apixaban"
        },
        {
          "id": "d",
          "text": "Dietary vitamin K determines the absorption of all DOACs"
        }
      ],
      "correctId": "c",
      "explanation": "Shared target inhibition does not imply identical absorption. Rivaroxaban food requirements depend on strength and indication, while apixaban can be taken with or without food. Dietary vitamin K counseling belongs to VKA response, not a universal DOAC absorption rule. Product-specific instructions prevent class-based counseling errors.",
      "teachingPoints": [
        "Pharmacokinetics can differ within the same mechanistic class.",
        "Counseling should name the exact product and regimen."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "rocket-af",
          "label": "Rivaroxaban Once Daily Oral Direct Factor Xa Inhibition Compared with Vitamin K Antagonism for Prevention of Stroke and Embolism Trial in Atrial Fibrillation"
        },
        {
          "kind": "trial",
          "id": "aristotle",
          "label": "Apixaban for Reduction in Stroke and Other Thromboembolic Events in Atrial Fibrillation"
        }
      ],
      "objectiveIds": [
        64,
        69
      ]
    },
    {
      "id": "iv-35",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A learner compares unfractionated heparin with LMWH. Which distinction best links their pharmacology to clinical monitoring?",
      "choices": [
        {
          "id": "a",
          "text": "LMWH directly inhibits vitamin K recycling"
        },
        {
          "id": "b",
          "text": "Unfractionated heparin and LMWH have identical renal dependence in every patient"
        },
        {
          "id": "c",
          "text": "LMWH is a direct oral thrombin inhibitor"
        },
        {
          "id": "d",
          "text": "Both act through antithrombin, but their chain-length profiles, clearance, and response variability differ"
        }
      ],
      "correctId": "d",
      "explanation": "Heparins enhance antithrombin activity, but their molecular profiles lead to differences in anti-Xa versus anti-IIa activity, clearance, and variability. Unfractionated heparin commonly uses laboratory-guided titration, while LMWH monitoring is more selective. Neither vitamin K antagonism nor direct oral thrombin inhibition describes LMWH.",
      "teachingPoints": [
        "Similar class names do not mean identical monitoring requirements.",
        "Renal function and patient context influence parenteral-agent selection."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ],
      "objectiveIds": [
        63,
        64
      ]
    },
    {
      "id": "iv-36",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A patient taking fondaparinux has serious bleeding. Why is the assumption that protamine provides complete reversal incorrect?",
      "choices": [
        {
          "id": "a",
          "text": "Fondaparinux is an antithrombin-mediated selective FXa inhibitor without a known specific antidote"
        },
        {
          "id": "b",
          "text": "Fondaparinux directly inhibits thrombin and is specifically bound by idarucizumab"
        },
        {
          "id": "c",
          "text": "Protamine reverses every anticoagulant that is injected"
        },
        {
          "id": "d",
          "text": "Vitamin K immediately neutralizes fondaparinux"
        }
      ],
      "correctId": "a",
      "explanation": "Fondaparinux indirectly inhibits FXa through antithrombin and does not have the same neutralization profile as heparin. Protamine is not its labeled antidote, and neither idarucizumab nor vitamin K specifically reverses it. Bleeding care requires supportive measures and the institutional pathway rather than an assumed class-wide antidote.",
      "teachingPoints": [
        "Injection route does not define reversal strategy.",
        "The actual drug mechanism must be identified before reversal decisions."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ],
      "objectiveIds": [
        63,
        70
      ]
    },
    {
      "id": "iv-37",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A clinician compares the acute and extended apixaban VTE trials. Which regimen distinction is correctly described?",
      "choices": [
        {
          "id": "a",
          "text": "AMPLIFY-EXT tested reduced dosing as immediate treatment of every new PE"
        },
        {
          "id": "b",
          "text": "AMPLIFY used an initial higher-intensity phase followed by maintenance; AMPLIFY-EXT studied later secondary prevention after initial treatment"
        },
        {
          "id": "c",
          "text": "AMPLIFY studied only AF stroke prevention"
        },
        {
          "id": "d",
          "text": "The same treatment phase and patient selection applied to both trials"
        }
      ],
      "correctId": "b",
      "explanation": "AMPLIFY addressed acute VTE, whereas AMPLIFY-EXT addressed prevention of recurrence after completed initial therapy. A reduced extended regimen cannot be transferred to immediate acute treatment merely because the drug is the same. AF evidence and VTE phase-specific evidence answer different dosing questions.",
      "teachingPoints": [
        "Treatment phase is part of the regimen, not just the drug name.",
        "Trial population and prior therapy constrain dose extrapolation."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "amplify",
          "label": "Oral Apixaban for the Treatment of Acute Venous Thromboembolism"
        },
        {
          "kind": "trial",
          "id": "amplify-ext",
          "label": "Apixaban for Extended Treatment of Venous Thromboembolism"
        }
      ],
      "objectiveIds": [
        65
      ]
    },
    {
      "id": "iv-38",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A learner compares the acute VTE programs for edoxaban and rivaroxaban. Which statement correctly distinguishes their designs?",
      "choices": [
        {
          "id": "a",
          "text": "Both programs used immediate reduced-dose extended prevention at diagnosis"
        },
        {
          "id": "b",
          "text": "Neither program included anticoagulant treatment before maintenance"
        },
        {
          "id": "c",
          "text": "Hokusai-VTE used a parenteral lead-in before edoxaban, unlike the initial oral rivaroxaban regimen in EINSTEIN"
        },
        {
          "id": "d",
          "text": "Edoxaban's VTE program used the COMPASS vascular regimen"
        }
      ],
      "correctId": "c",
      "explanation": "Hokusai-VTE used parenteral anticoagulation before edoxaban, while EINSTEIN used rivaroxaban's oral initial treatment phase. These are different workflows with different evidence. Extended prevention and COMPASS vascular protection are not interchangeable with acute VTE treatment, even when an oral anticoagulant is involved.",
      "teachingPoints": [
        "The transition into oral therapy must match the specific regimen.",
        "A drug-class label alone does not establish an acute-treatment schedule."
      ],
      "links": [
        {
          "kind": "trial",
          "id": "hokusai-vte",
          "label": "Edoxaban versus Warfarin for the Treatment of Symptomatic Venous Thromboembolism"
        },
        {
          "kind": "trial",
          "id": "einstein-dvt",
          "label": "Oral Rivaroxaban for Symptomatic Venous Thromboembolism"
        }
      ],
      "objectiveIds": [
        65,
        64
      ]
    },
    {
      "id": "iv-39",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A patient taking an anticoagulant adds regular ibuprofen and develops melena. Which mechanism best explains why the new drug matters even without an altered anticoagulant concentration?",
      "choices": [
        {
          "id": "a",
          "text": "Ibuprofen is a specific anticoagulant antidote"
        },
        {
          "id": "b",
          "text": "Every such bleed requires a strong metabolic inhibitor"
        },
        {
          "id": "c",
          "text": "A stable INR excludes drug-related bleeding risk"
        },
        {
          "id": "d",
          "text": "Platelet and mucosal effects can add pharmacodynamic bleeding risk"
        }
      ],
      "correctId": "d",
      "explanation": "Nonsteroidal anti-inflammatory drugs can increase bleeding through platelet and GI mucosal effects, even when anticoagulant exposure is unchanged. This is a pharmacodynamic interaction, not necessarily a metabolic one. A stable INR does not eliminate bleeding risk, and ibuprofen is not a reversal agent.",
      "teachingPoints": [
        "Interaction review includes over-the-counter analgesics.",
        "Mechanistic overlap can matter without a measurable concentration change."
      ],
      "links": [
        {
          "kind": "ddi",
          "id": "apixaban-nsaids",
          "label": "Apixaban and nonsteroidal anti-inflammatory drugs"
        }
      ],
      "objectiveIds": [
        66,
        67
      ]
    },
    {
      "id": "iv-40",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A patient with a new VTE is pregnant and asks why warfarin is usually avoided for this indication while LMWH is commonly used. Which distinction is most accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin crosses the placenta and can harm the fetus, while heparins do not cross the placenta appreciably"
        },
        {
          "id": "b",
          "text": "LMWH provides no anticoagulant effect during pregnancy"
        },
        {
          "id": "c",
          "text": "Every oral anticoagulant has established fetal safety"
        },
        {
          "id": "d",
          "text": "Pregnancy removes the need to treat confirmed VTE"
        }
      ],
      "correctId": "a",
      "explanation": "Fetal exposure and safety differ across drug classes. Warfarin can cross the placenta and cause fetal harm, while LMWH is commonly used for pregnancy-associated VTE because it does not cross appreciably. DOACs do not have established pregnancy safety, and pregnancy does not eliminate the need for a VTE treatment plan.",
      "teachingPoints": [
        "Pregnancy-associated VTE needs coordinated obstetric and thrombosis care.",
        "Mechanical-valve pregnancy is a separate specialist decision, not a simple extension of VTE teaching."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "acute-vte-doac",
          "label": "Which DOAC for acute VTE when bleeding risk matters?"
        }
      ],
      "objectiveIds": [
        68,
        25
      ]
    },
    {
      "id": "iv-41",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A postpartum patient needs ongoing anticoagulation while breastfeeding. Which comparison best reflects the distinction between pregnancy and lactation teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin's placental risk means it is always forbidden during lactation"
        },
        {
          "id": "b",
          "text": "Warfarin and heparins have established lactation roles even though warfarin has important fetal risks during pregnancy"
        },
        {
          "id": "c",
          "text": "Every DOAC has the same established infant safety evidence as warfarin"
        },
        {
          "id": "d",
          "text": "Breastfeeding automatically removes the anticoagulant indication"
        }
      ],
      "correctId": "b",
      "explanation": "Pregnancy and breastfeeding are different exposure settings. Warfarin's fetal risks do not translate into an automatic lactation prohibition; warfarin and heparins have established breastfeeding roles. DOAC infant-safety evidence is not interchangeable, and the maternal indication still requires an appropriate treatment and follow-up plan.",
      "teachingPoints": [
        "Placental transfer and breast-milk exposure are different questions.",
        "Maternal benefit and infant safety need agent-specific review."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "acute-vte-doac",
          "label": "Which DOAC for acute VTE when bleeding risk matters?"
        }
      ],
      "objectiveIds": [
        68,
        25
      ]
    },
    {
      "id": "iv-42",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A patient on therapeutic anticoagulation for VTE has heavy menstrual bleeding and wants reliable contraception. Which option is particularly reasonable to discuss when no other contraindication exists?",
      "choices": [
        {
          "id": "a",
          "text": "A copper intrauterine device specifically because it reliably reduces menstrual blood loss"
        },
        {
          "id": "b",
          "text": "Routine cessation of anticoagulation during every menstrual period"
        },
        {
          "id": "c",
          "text": "A levonorgestrel-releasing intrauterine device, which can provide contraception and reduce bleeding"
        },
        {
          "id": "d",
          "text": "The assumption that hormonal contraception is uniformly prohibited during anticoagulation"
        }
      ],
      "correctId": "c",
      "explanation": "A levonorgestrel-releasing intrauterine device can help prevent pregnancy and manage heavy bleeding during anticoagulation. A copper device may worsen bleeding. Eligibility is method- and patient-specific; neither a blanket hormonal ban nor cyclic interruption of necessary anticoagulation is an appropriate substitute for coordinated care.",
      "teachingPoints": [
        "Contraceptive choice can also address anticoagulant-associated uterine bleeding.",
        "The future anticoagulation stop plan should be part of contraceptive counseling."
      ],
      "links": [],
      "objectiveIds": [
        71
      ]
    },
    {
      "id": "iv-43",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A patient with prior VTE remains on prophylactic-dose anticoagulation and asks whether all hormonal methods are now equally safe. Which counseling principle is most accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Prophylactic anticoagulation removes every estrogen-associated risk"
        },
        {
          "id": "b",
          "text": "All hormonal methods have identical thrombotic profiles"
        },
        {
          "id": "c",
          "text": "A copper device and a progestin-releasing device have identical effects on menstrual bleeding"
        },
        {
          "id": "d",
          "text": "Eligibility depends on contraceptive class, recurrence risk, and anticoagulant intensity, not simply whether any anticoagulant is prescribed"
        }
      ],
      "correctId": "d",
      "explanation": "Anticoagulant intensity and baseline recurrence risk affect contraceptive assessment, and progestin and estrogen-containing methods are not interchangeable. A levonorgestrel intrauterine device may also help bleeding. Any-anticoagulant status is not universal protection, and copper and hormonal devices can differ in bleeding effects.",
      "teachingPoints": [
        "Contraceptive assessment should be revisited when anticoagulation changes.",
        "Method-specific guidance is safer than a blanket hormone rule."
      ],
      "links": [],
      "objectiveIds": [
        71
      ]
    },
    {
      "id": "iv-44",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A learner sees milvexian and other FXI-pathway agents that are not yet approved on the site's future-trials page. Which description is appropriate for these investigational programs?",
      "choices": [
        {
          "id": "a",
          "text": "They are being studied for indication-specific efficacy and safety and are not approved substitutes merely because they appear in phase 3 trials"
        },
        {
          "id": "b",
          "text": "Phase 3 status itself proves FDA approval"
        },
        {
          "id": "c",
          "text": "A bleeding advantage in one program establishes efficacy for every indication"
        },
        {
          "id": "d",
          "text": "Every FXI agent is the same molecule as an approved FXa inhibitor"
        }
      ],
      "correctId": "a",
      "explanation": "Pipeline status is not regulatory approval, and results must be separated by agent, dose, and indication. OCEANIC-AF and AZALEA teaching illustrate why bleeding and efficacy cannot be collapsed into one class promise. A phase 3 listing does not authorize substitution for established treatment or prove benefit across programs.",
      "teachingPoints": [
        "Study phase and approval status are different concepts.",
        "Safety signals do not by themselves establish thromboembolic efficacy."
      ],
      "links": [
        {
          "kind": "pathway",
          "id": "whats-next",
          "label": "What's next (FXI / pending)"
        },
        {
          "kind": "nuance",
          "id": "oceanic-vs-azalea",
          "label": "OCEANIC-AF failure vs AZALEA bleeding signal"
        },
        {
          "kind": "trial",
          "id": "librexia-af",
          "label": "Milvexian versus Apixaban in Atrial Fibrillation"
        }
      ],
      "objectiveIds": [
        61,
        63
      ]
    },
    {
      "id": "iv-45",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "A major warfarin bleed is treated using a protocol that includes factor replacement and vitamin K. Why are both components included?",
      "choices": [
        {
          "id": "a",
          "text": "Vitamin K directly binds and clears all anticoagulants"
        },
        {
          "id": "b",
          "text": "Factor replacement supports rapid correction while vitamin K supports sustained production of functional factors"
        },
        {
          "id": "c",
          "text": "Factor replacement permanently eliminates the original thrombosis risk"
        },
        {
          "id": "d",
          "text": "Idarucizumab and vitamin K have the same target"
        }
      ],
      "correctId": "b",
      "explanation": "Rapid factor replacement and vitamin K address different aspects of VKA reversal: immediate factor availability and a sustained return of functional synthesis. Vitamin K is not a universal anticoagulant binder, and reversal does not erase the underlying thrombotic indication. Idarucizumab is specific to dabigatran rather than VKA metabolism.",
      "teachingPoints": [
        "Reversal onset and durability are separate considerations.",
        "The original indication still needs a later restart assessment."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ],
      "objectiveIds": [
        70
      ]
    },
    {
      "id": "iv-46",
      "domainId": "IV",
      "difficulty": "core",
      "stem": "During a heparin-bleeding review, a trainee says protamine is harmless because it is an antidote. Which statement best corrects that assumption?",
      "choices": [
        {
          "id": "a",
          "text": "Any reversal agent is free of adverse effects"
        },
        {
          "id": "b",
          "text": "Protamine completely reverses every LMWH effect"
        },
        {
          "id": "c",
          "text": "Protamine can cause serious hypotension and hypersensitivity-type reactions and requires protocol-directed administration"
        },
        {
          "id": "d",
          "text": "Protamine specifically binds dabigatran"
        }
      ],
      "correctId": "c",
      "explanation": "Antidotes can themselves cause harm. Protamine can produce hypotension and serious hypersensitivity-type reactions, so administration needs appropriate monitoring and readiness. It neutralizes heparin but only partly reverses LMWH and is not a dabigatran antidote; the indication and product-specific limits still matter.",
      "teachingPoints": [
        "Reversal risk must be weighed against bleeding severity.",
        "A reversal map is not a substitute for the institutional administration protocol."
      ],
      "links": [
        {
          "kind": "page",
          "id": "reversal",
          "label": "Bleed & reversal"
        }
      ],
      "objectiveIds": [
        70,
        66
      ]
    },
    {
      "id": "iv-47",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A strong inducer is discontinued in a patient whose warfarin regimen was adjusted during coadministration. Which time-course issue deserves attention?",
      "choices": [
        {
          "id": "a",
          "text": "Stopping an interacting drug can never alter INR"
        },
        {
          "id": "b",
          "text": "The INR immediately becomes irrelevant after the inducer is removed"
        },
        {
          "id": "c",
          "text": "Every interaction ends at the exact moment of the last dose"
        },
        {
          "id": "d",
          "text": "Enzyme induction can wane after discontinuation, so warfarin response may change and INR follow-up remains important"
        }
      ],
      "correctId": "d",
      "explanation": "Drug interactions may evolve during both initiation and discontinuation because enzyme activity does not necessarily normalize immediately. A regimen adjusted during induction may become excessive as induction wanes. Serial INR and patient-specific review are more useful than assuming that the effect disappears instantly or that monitoring is no longer needed.",
      "teachingPoints": [
        "Starting and stopping interacting medicines both belong in reconciliation.",
        "Interaction time course can differ from the interacting drug's dosing schedule."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        64,
        69
      ]
    },
    {
      "id": "iv-48",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A patient on an oral anticoagulant develops recurrent vomiting after major GI surgery. Which pharmacologic concern best supports reassessment?",
      "choices": [
        {
          "id": "a",
          "text": "Unreliable oral delivery or absorption can reduce effective exposure despite an apparently correct prescription"
        },
        {
          "id": "b",
          "text": "Vomiting reliably improves absorption of every DOAC"
        },
        {
          "id": "c",
          "text": "A normal INR proves adequate exposure to any oral anticoagulant"
        },
        {
          "id": "d",
          "text": "The prescription label alone confirms that each dose reached the circulation"
        }
      ],
      "correctId": "a",
      "explanation": "Oral treatment requires both administration and absorption. Vomiting and altered GI anatomy can undermine exposure even with a correct written regimen. A normal INR cannot certify DOAC delivery, and the drug label does not prove ingestion or absorption. A practical alternative or assessment plan needs specialist coordination.",
      "teachingPoints": [
        "Effective exposure is not guaranteed by a correct prescription.",
        "Route feasibility belongs alongside renal function and interactions in agent selection."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "cancer-vte",
          "label": "How do I treat cancer-associated VTE acutely and on extended therapy?"
        },
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        67,
        64
      ]
    },
    {
      "id": "v-20",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A health system is deciding whom a new anticoagulation service should initially prioritize. Which population best fits a monitoring and coordination need?",
      "choices": [
        {
          "id": "a",
          "text": "Only patients who already have perfect access and stable control"
        },
        {
          "id": "b",
          "text": "Patients with complex regimens, unstable control, high-risk transitions, or practical barriers to safe follow-up"
        },
        {
          "id": "c",
          "text": "Only patients taking aspirin without any anticoagulant indication"
        },
        {
          "id": "d",
          "text": "Every patient selected solely by drug cost regardless of clinical need"
        }
      ],
      "correctId": "b",
      "explanation": "Service design should identify patients whose monitoring, risk, regimen complexity, or transitions need coordinated support. Stable access alone does not define priority, and medication price cannot replace clinical assessment. A clear target population links service goals to staffing, workflow, and measurable safety outcomes.",
      "teachingPoints": [
        "Population selection should reflect unmet care needs.",
        "Service goals should specify how coordination improves safety and follow-up."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        },
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        72,
        74
      ]
    },
    {
      "id": "v-21",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A clinic has prescribers, pharmacists, nurses, and laboratory staff but no written assignment of critical-result responsibility. Which operational design best addresses the gap?",
      "choices": [
        {
          "id": "a",
          "text": "Assume the first person who notices the result will manage everything"
        },
        {
          "id": "b",
          "text": "Let the laboratory independently choose all long-term anticoagulant regimens"
        },
        {
          "id": "c",
          "text": "Defined roles for result review, patient contact, treatment authority, escalation, and communication to the primary clinician"
        },
        {
          "id": "d",
          "text": "Delegate every clinical decision to scheduling staff"
        }
      ],
      "correctId": "c",
      "explanation": "Team-based care needs explicit responsibilities and scope-appropriate authority. Result review, contact, prescribing, escalation, and communication should each have an owner and backup. An assumption that someone will act leaves gaps; laboratory and administrative roles do not automatically include anticoagulant treatment decisions.",
      "teachingPoints": [
        "Role clarity prevents unowned safety tasks.",
        "Communication should include indication, current regimen, monitoring, and unresolved concerns."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        73,
        80
      ]
    },
    {
      "id": "v-22",
      "domainId": "V",
      "difficulty": "core",
      "stem": "An anticoagulation program writes its policy and procedure manual. Which package best supports reliable clinical operations?",
      "choices": [
        {
          "id": "a",
          "text": "A formulary list with no follow-up procedures"
        },
        {
          "id": "b",
          "text": "Trial names without responsibility or implementation steps"
        },
        {
          "id": "c",
          "text": "A billing sheet without patient-care standards"
        },
        {
          "id": "d",
          "text": "Eligibility and referral rules, roles, monitoring and escalation workflows, transitions, quality systems, and staff training requirements"
        }
      ],
      "correctId": "d",
      "explanation": "A useful manual explains who the service serves, who does each task, how care is monitored and escalated, and how transitions and quality are handled. Training and competency maintain implementation. Drug lists, study names, or billing information alone do not define a functioning patient-care system.",
      "teachingPoints": [
        "Policies should describe actionable workflows and ownership.",
        "Revision and competency processes keep the manual usable as evidence and operations change."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "doac-appropriateness",
          "label": "Is this DOAC appropriate — and is the indication documented?"
        }
      ],
      "objectiveIds": [
        74,
        77
      ]
    },
    {
      "id": "v-23",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A clinic reports good INR control but receives complaints about inaccessible telephone advice. Which evaluation best measures patient experience rather than assuming laboratory performance equals satisfaction?",
      "choices": [
        {
          "id": "a",
          "text": "A structured survey of access, communication, understanding, and care burden, with an improvement and reassessment plan"
        },
        {
          "id": "b",
          "text": "Use INR control as the sole satisfaction measure"
        },
        {
          "id": "c",
          "text": "Count only returned prescription refills"
        },
        {
          "id": "d",
          "text": "Collect complaints without reviewing themes or acting on them"
        }
      ],
      "correctId": "a",
      "explanation": "Patient satisfaction addresses experience as well as clinical outcomes. Structured questions about access, clarity, and burden identify service defects that INR control may miss. Refill counts and unreviewed complaints are incomplete substitutes; findings should feed an improvement process and subsequent reassessment.",
      "teachingPoints": [
        "Patient experience complements safety and effectiveness metrics.",
        "Survey methods and response patterns affect interpretation."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        78,
        76
      ]
    },
    {
      "id": "v-24",
      "domainId": "V",
      "difficulty": "core",
      "stem": "An outside laboratory result is expected but never appears in the clinic inbox. Which workflow best prevents a missed monitoring event?",
      "choices": [
        {
          "id": "a",
          "text": "Assume that no posted result means the value was normal"
        },
        {
          "id": "b",
          "text": "An order-to-result tracking system with expected dates, missing-result reconciliation, critical escalation, and documented review"
        },
        {
          "id": "c",
          "text": "Wait until the patient requests a refill"
        },
        {
          "id": "d",
          "text": "Track only abnormal results after they arrive"
        }
      ],
      "correctId": "b",
      "explanation": "Laboratory safety begins with the order and ends with documented review and action. Tracking expected results identifies missing tests and interface failures, while escalation handles critical findings. Absence of a result is not reassurance, and an abnormal-only inbox cannot detect tests that were never obtained or transmitted.",
      "teachingPoints": [
        "Missing results and abnormal results are different safety problems.",
        "Reconciliation needs an owner and a backup process."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        81,
        79
      ]
    },
    {
      "id": "v-26",
      "domainId": "V",
      "difficulty": "core",
      "stem": "A clinic partners with an Independent Diagnostic Testing Facility for home INR testing. Which division of responsibilities is most appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "The facility's meter shipment automatically replaces a treating clinician's order"
        },
        {
          "id": "b",
          "text": "Every home result authorizes unsupervised patient dose changes"
        },
        {
          "id": "c",
          "text": "Vendor enrollment eliminates training and result-follow-up obligations"
        },
        {
          "id": "d",
          "text": "The facility supports authorized testing services and equipment or reporting workflows while the treating team retains clinical management responsibility"
        }
      ],
      "correctId": "d",
      "explanation": "An Independent Diagnostic Testing Facility can support the testing infrastructure under applicable requirements, but testing logistics do not replace clinical management. Orders, training, result transmission, and responsibility for interpretation must remain explicit. Shipment, enrollment, and a displayed result do not establish safe independent dosing.",
      "teachingPoints": [
        "The vendor-clinic interface needs a closed result-reporting loop.",
        "Coverage requirements and clinical suitability are related but separate checks."
      ],
      "links": [
        {
          "kind": "framework",
          "id": "ttr-vka-quality",
          "label": "Time in therapeutic range and VKA clinic quality"
        }
      ],
      "objectiveIds": [
        83,
        45
      ]
    }
  ]
}
