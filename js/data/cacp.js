/* Unofficial CACP exam-prep practice module — educational only. Not an AC Forum exam. */
window.ANTICOAG_CACP = {
  "meta": {
    "title": "CACP exam prep (unofficial)",
    "disclaimer": "Unofficial educational practice only. The Anticoagulation Forum (AC Forum) does not endorse this or any preparatory materials. These are not real CACP examination questions. The 2026 AC Forum Candidate Handbook names the credential Certified Antithrombotic Care Provider (CACP). Verify all clinical decisions with current guidelines, product labeling, and institutional protocols.",
    "handbookNote": "Practice logistics follow the 2026 AC Forum CACP Candidate Handbook (https://acforum.org/web/resource_files/1793672914-37806.pdf). That handbook describes 160 multiple-choice questions — 150 scored and 10 unidentified unscored pilots — with 2 hours 30 minutes allowed, and a pass line of 80% of the 150 scored items. Domain weights: I Applied Pathophysiology of Thromboembolic Disease 25%, II Patient Assessment and Management 35%, III Patient Education 10%, IV Applied Pharmacology of Antithrombotic Agents 25%, V Operational (Administrative) Procedures 5%. A 160-question practice sitting uses quotas I 40, II 56, III 16, IV 40, V 8. AC Forum does not endorse this or any preparatory materials. These are not real exam questions.",
    "version": "2026-11-10",
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
    "TTR and POC/CLIA concepts show up in the small but real Domain V slice.",
    "Many items are short cases. When age, weight, and serum creatinine are all given, creatinine clearance is part of the reasoning before a regimen is identified."
  ],
  "questions": [
    {
      "id": "i-01",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A 64-year-old man with hypertension and a 40-pack-year smoking history has abrupt chest pressure. Angiography shows an occluded coronary artery at a ruptured plaque. Hemoglobin is 13.8 g/dL. The same week, a 70-year-old woman develops a femoral-vein clot on day 3 after knee replacement, with leg swelling but no chest pain. Which description fits the coronary occlusion rather than the leg clot?",
      "choices": [
        {
          "id": "a",
          "text": "Platelet-rich material built under high arterial shear on a ruptured plaque, the white-thrombus pattern"
        },
        {
          "id": "b",
          "text": "Fibrin- and red-cell-rich material built in low-shear venous stasis, the red-thrombus pattern"
        },
        {
          "id": "c",
          "text": "A clot that requires venous stasis and cannot form on an arterial plaque at high shear"
        },
        {
          "id": "d",
          "text": "A thrombus with the same platelet and fibrin mix in arteries and veins, so one intensity fits both in clinic"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A matches the coronary event: arterial thrombi at ruptured plaques are typically platelet-rich under high shear. Choice B describes the postoperative venous clot, not the coronary occlusion. Choice C denies arterial thrombosis at high shear. Choice D erases the composition difference that separates antiplatelet-centered arterial disease from anticoagulant-centered venous and cardioembolic disease. Source: standard hemostasis teaching used to frame arterial versus venous thrombosis.",
      "teachingPoints": [
        "Arterial white thrombi are platelet-rich and form under high shear.",
        "Venous red thrombi are fibrin- and red-cell-rich and form in stasis."
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
      "difficulty": "advanced",
      "stem": "A 58-year-old man with an unprovoked proximal DVT starts warfarin alone. On day 3 his INR is 2.4. He then develops a painful dark skin lesion on the thigh, and duplex shows extension of thrombus. He takes no heparin, has a normal platelet count, and has no cough. Which mechanism best explains a transient prothrombotic window this early?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin raises protein C first, so the early INR rise is a bleeding signal rather than a clotting one today"
        },
        {
          "id": "b",
          "text": "Functional protein C falls early, before longer-lived prothrombin has fallen enough to protect the patient"
        },
        {
          "id": "c",
          "text": "Warfarin depletes antithrombin within hours, and that single loss explains the new skin lesion"
        },
        {
          "id": "d",
          "text": "Factor VII concentration rises during the first days, while factors II, IX, and X stay unchanged"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the initiation physiology: vitamin K antagonism lowers functional protein C, which has a short half-life, before prothrombin (about 60 hours) has declined. The CHEST VTE guideline describes parenteral overlap with warfarin for at least 5 days and until the INR is at least 2.0 for 24 hours. Choice A reverses the protein C direction. Choice C names antithrombin, which warfarin does not deplete. Choice D reverses the factor VII change; factor VII falls early and drives much of the first INR rise. Half-lives are approximate textbook values.",
      "teachingPoints": [
        "An early INR rise can reflect factor VII, not full prothrombin suppression.",
        "Acute warfarin starts for VTE use a parenteral overlap because of this lag."
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
      "difficulty": "advanced",
      "stem": "A 76-year-old woman with NVAF has hypertension, diabetes, and a prior ischemic stroke. She takes ibuprofen daily for knee pain. Blood pressure today is 168/96 mm Hg. Hemoglobin is 13 g/dL and she has no mechanical valve. Her clinician calculates a high CHA₂DS₂-VASc score and a high HAS-BLED score because of uncontrolled hypertension, prior stroke, age, and the anti-inflammatory drug. Which use of the two scores fits the 2023 AF guideline?",
      "choices": [
        {
          "id": "a",
          "text": "Cancel anticoagulation because a HAS-BLED score of 3 or more forbids a DOAC or warfarin"
        },
        {
          "id": "b",
          "text": "Use HAS-BLED to pick the DOAC molecule and ignore the stroke score once bleeding risk is high"
        },
        {
          "id": "c",
          "text": "Treat the stroke score as the indication for OAC, and use the bleeding score to fix modifiable risks"
        },
        {
          "id": "d",
          "text": "Replace the valve-thrombosis assessment with these scores if a mechanical mitral valve is later found"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches the 2023 ACC/AHA/ACCP/HRS atrial fibrillation guideline: an estimated annual stroke risk of at least 2%, corresponding to a CHA₂DS₂-VASc score of 2 or more in men or 3 or more in women, supports anticoagulation, and a bleeding score is used to address modifiable risks rather than to withhold indicated OAC. This woman's stroke history, hypertension, diabetes, age, and sex put her well above that threshold. Choice A uses HAS-BLED as a stop rule. Choice B uses a bleeding score to choose a molecule. Choice D misapplies the scores to a mechanical valve, which is outside this NVAF discussion.",
      "teachingPoints": [
        "HAS-BLED flags blood pressure, anti-inflammatory drugs, alcohol, and labile INR.",
        "A high bleeding score does not erase an indication for OAC."
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
      "difficulty": "advanced",
      "stem": "A 55-year-old woman has sudden pleuritic pain and dyspnea 10 days after pelvic surgery. Heart rate is 112 beats per minute. One calf is swollen. Hemoptysis is absent. She has no cancer and no prior VTE. The clinician judges PE more likely than an alternative diagnosis. Hemoglobin is 12 g/dL. Using the Wells PE items (leg findings 3, PE as leading diagnosis 3, heart rate above 100 gives 1.5, recent surgery 1.5), which next interpretation is sound?",
      "choices": [
        {
          "id": "a",
          "text": "A high Wells score is itself a prescription for systemic thrombolysis"
        },
        {
          "id": "b",
          "text": "A normal D-dimer alone can send her home without imaging when the score is already high"
        },
        {
          "id": "c",
          "text": "The score chooses apixaban versus rivaroxaban after imaging has already confirmed the PE now"
        },
        {
          "id": "d",
          "text": "The score is high enough that imaging, not a D-dimer rule-out, is the next diagnostic step"
        }
      ],
      "correctId": "d",
      "explanation": "Leg signs, PE as the leading diagnosis, tachycardia, and recent surgery sum to 9, which is a high Wells PE score. Choice D is the role of the score: high pretest probability moves to definitive imaging rather than a D-dimer exclusion. Choice A jumps from probability to reperfusion. Choice B misuses D-dimer, which is for lower probability. Choice C confuses a diagnostic score with a drug-choice tool. Source: Wells pretest-probability logic as used before D-dimer or imaging in suspected PE.",
      "teachingPoints": [
        "High pretest probability is an imaging pathway.",
        "D-dimer exclusion is for lower probability, not a high score."
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
      "stem": "A 45-year-old woman finished 4 months of apixaban for an unprovoked proximal DVT. Repeat testing 12 weeks apart shows a lupus anticoagulant, IgG anticardiolipin, and IgG anti-β2-glycoprotein I. She prefers a DOAC because the twice-daily schedule is easy. She is not pregnant, creatinine clearance is normal, and she has no mechanical valve. Which long-term strategy fits this triple-positive antiphospholipid phenotype?",
      "choices": [
        {
          "id": "a",
          "text": "Transition toward dose-adjusted warfarin, the strategy TRAPS compared favorably with rivaroxaban"
        },
        {
          "id": "b",
          "text": "Continue apixaban indefinitely because any VTE label covers triple-positive antiphospholipid syndrome"
        },
        {
          "id": "c",
          "text": "Switch to the COMPASS rivaroxaban 2.5 mg twice-daily plus aspirin regimen used for stable CAD"
        },
        {
          "id": "d",
          "text": "Stop anticoagulation at 6 months because the first clot was in a vein and antibodies do not change duration"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A fits high-risk triple-positive antiphospholipid syndrome. In TRAPS, rivaroxaban was stopped early against warfarin targeted to an INR of 2.5 after excess events, including arterial events, in the rivaroxaban group. Choice B treats this as ordinary VTE. Choice C imports a vascular-prevention dose from COMPASS, a different population. Choice D ignores the persistent high-risk antibody profile. Source: TRAPS and the site's triple-positive pathway, which frames warfarin rather than a DOAC.",
      "teachingPoints": [
        "TRAPS tested rivaroxaban against INR-targeted warfarin in triple-positive disease.",
        "Ordinary VTE DOAC evidence does not replace that high-risk phenotype."
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
      "difficulty": "advanced",
      "stem": "A 79-year-old man with NVAF and a prior embolic stroke has no palpitations today. Transesophageal echocardiography shows spontaneous contrast and a thrombus in the left atrial appendage. Left ventricular wall motion is normal. Leg veins are compressible. Coronary angiography last year showed mild plaque. Which site best explains this thrombus?",
      "choices": [
        {
          "id": "a",
          "text": "A high-shear coronary plaque, because AF thrombi form on ruptured arterial lesions"
        },
        {
          "id": "b",
          "text": "The left atrial appendage, where AF produces stasis in a blind pouch"
        },
        {
          "id": "c",
          "text": "A deep calf vein, because cardioembolic stroke begins as lower-extremity DVT"
        },
        {
          "id": "d",
          "text": "The aortic arch only, because AF does not alter left atrial flow"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the anatomic source: AF promotes stasis in the left atrial appendage, and the study shows thrombus there. Choice A describes typical atherosclerotic coronary thrombosis, and last year's angiogram showed only mild plaque. Choice C describes venous thromboembolism, not this echo. Choice D contradicts the finding of appendage stasis. Source: AF cardioembolic pathophysiology used on this site's stroke-prevention framework.",
      "teachingPoints": [
        "Appendage stasis is why OAC, not aspirin alone, is the stroke strategy when OAC is indicated.",
        "Absence of palpitations does not clear appendage thrombus."
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
      "difficulty": "advanced",
      "stem": "A 69-year-old woman starts warfarin for AF with a heparin overlap. On day 2 the INR is already 2.1, and a colleague says the anticoagulant effect is therefore complete. She has no bleeding, platelets are stable, and she is not on a DOAC. Which factor's long half-life means the INR can rise before warfarin anticoagulation is fully established?",
      "choices": [
        {
          "id": "a",
          "text": "Factor VII, because its long half-life is what delays the full warfarin effect for weeks"
        },
        {
          "id": "b",
          "text": "Antithrombin, because warfarin directly lengthens the half-life of antithrombin"
        },
        {
          "id": "c",
          "text": "Prothrombin (factor II), whose half-life is far longer than that of factor VII"
        },
        {
          "id": "d",
          "text": "Fibrinogen, because warfarin blocks hepatic fibrinogen synthesis on the first day"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is correct. Factor VII falls quickly (half-life about 6 hours) and moves the INR, while prothrombin's half-life is about 60 hours, so thrombin-generating potential lingers. Choice A assigns the long half-life to the short-lived factor. Choice B is wrong because warfarin does not act through antithrombin. Choice D is wrong because fibrinogen is not a vitamin K-dependent factor. Half-lives are approximate textbook values, not a label table.",
      "teachingPoints": [
        "The early INR is heavily influenced by factor VII.",
        "Full suppression tracks the slower fall in prothrombin."
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
      "stem": "A 63-year-old woman with metastatic pancreatic cancer has a port, started a new chemotherapy cycle, and has been in bed with a fever. Duplex confirms femoral DVT. She has no AF and no mechanical valve. A student asks whether one mechanism explains cancer-associated thrombosis. Which answer is the most accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Only the port matters, because cancer itself does not change coagulation at all"
        },
        {
          "id": "b",
          "text": "Only arterial plaque rupture matters, because cancer raises stroke risk and not VTE"
        },
        {
          "id": "c",
          "text": "Only a single inherited mutation matters, and the cancer history is incidental here"
        },
        {
          "id": "d",
          "text": "Tumor activity, the catheter, chemotherapy, and immobility all coexist"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches multifactorial cancer-associated thrombosis: tissue-factor-rich tumors, venous compression or stasis, chemotherapy, and catheters can operate together. Choice A ignores the cancer. Choice B turns this DVT into an arterial-plaque disease. Choice C invents a requirement for a hereditary mutation. Source: standard cancer-thrombosis pathophysiology consistent with this site's cancer-VTE teaching.",
      "teachingPoints": [
        "Cancer-associated VTE is not a single-pathway disease.",
        "A catheter can add local injury on top of the cancer-related risk."
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
      "difficulty": "advanced",
      "stem": "A 71-year-old man has been on unfractionated heparin for 8 days after a coronary stent. Platelets fell from 240 to 70 × 10⁹/L. The right leg is newly swollen and ultrasound shows femoral DVT. He has no schistocytes, no fever, and hemoglobin is unchanged. Which mechanism lets thrombosis occur despite thrombocytopenia?",
      "choices": [
        {
          "id": "a",
          "text": "Antibodies activate platelets and generate thrombin, so the low count is a clotting state"
        },
        {
          "id": "b",
          "text": "Platelets are absent, so thrombin cannot form and the leg swelling must be a bleed into the muscle"
        },
        {
          "id": "c",
          "text": "Heparin has caused immune thrombocytopenia, which raises bleeding and forbids any new clot"
        },
        {
          "id": "d",
          "text": "The count fell from dilution only, and the ultrasound clot is unrelated to the heparin exposure"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is heparin-induced thrombocytopenia: platelet-factor-4 antibodies activate platelets and drive thrombin, so thrombosis and a falling count occur together. Choice B treats thrombocytopenia as an inability to clot. Choice C names the bleeding phenotype of ordinary immune thrombocytopenia, not this day-8 pattern with a new DVT. Choice D dismisses the timing. Source: standard heparin-induced thrombocytopenia mechanism (platelet factor 4 and heparin antibodies).",
      "teachingPoints": [
        "The syndrome is a prothrombotic platelet-activation disorder.",
        "A new clot plus a falling count after heparin is not simple bleeding."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-10",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "Two patients have acute PE on computed tomography. Patient A has systolic blood pressure 78 mm Hg, lactate 4 mmol/L, and needs a vasopressor. Patient B has systolic blood pressure 128 mm Hg, a dilated right ventricle, and an elevated troponin, with hemoglobin 13 g/dL. Which severity statement is the sound one?",
      "choices": [
        {
          "id": "a",
          "text": "Both are high-risk PE because any right-ventricular abnormality equals shock"
        },
        {
          "id": "b",
          "text": "Only patient A is high-risk PE; patient B is intermediate-risk, not automatic thrombolysis"
        },
        {
          "id": "c",
          "text": "Only patient B needs reperfusion, because a normal blood pressure rules out a large clot"
        },
        {
          "id": "d",
          "text": "Neither patient needs anticoagulation once imaging has already shown the embolus"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B uses the hemodynamic split: sustained hypotension or shock defines high-risk PE, for which reperfusion is considered with anticoagulation. Patient B is normotensive with right-ventricular strain and biomarker injury, the intermediate-risk pattern, which is not treated as routine systemic thrombolysis. Choice A equates right-ventricular strain with shock. Choice C reverses the priority. Choice D drops anticoagulation. Source: the high-risk versus intermediate-risk distinction used on this site's PE materials and in the 2019 ESC PE guideline's hemodynamic classification.",
      "teachingPoints": [
        "Shock or sustained hypotension marks high-risk PE.",
        "Normotensive right-ventricular strain is intermediate-risk, not an automatic lysis case."
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
      "stem": "A 52-year-old woman with AF has moderate-to-severe rheumatic mitral stenosis and a dilated left atrium. She asks to switch from warfarin to apixaban because her sister with NVAF takes apixaban. Creatinine clearance is 78 mL/min, weight is 70 kg, and she has no mechanical prosthesis. Which interpretation fits this valve lesion?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban is preferred because every AF case with a normal creatinine clearance uses a DOAC"
        },
        {
          "id": "b",
          "text": "Rivaroxaban replaces warfarin here because INVICTUS showed rivaroxaban was superior to a VKA in clinic"
        },
        {
          "id": "c",
          "text": "This remains a VKA setting; INVICTUS did not support rivaroxaban in place of a VKA in rheumatic AF"
        },
        {
          "id": "d",
          "text": "The COMPASS 2.5 mg rivaroxaban dose plus aspirin treats rheumatic mitral stenosis"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches INVICTUS and the site's VKA niche: AF with moderate-to-severe rheumatic mitral stenosis is not treated as ordinary NVAF. INVICTUS did not support replacing a VKA with rivaroxaban in rheumatic heart disease with AF. Choice A applies NVAF DOAC preference to a lesion the trials excluded. Choice B reverses the INVICTUS result. Choice D uses a chronic CAD/PAD regimen. Source: INVICTUS, as summarized on this site.",
      "teachingPoints": [
        "Moderate-to-severe rheumatic mitral stenosis stays with a VKA.",
        "A family member's NVAF DOAC does not transfer to this lesion."
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
      "difficulty": "advanced",
      "stem": "A 40-year-old man has major trauma with extensive soft-tissue injury. A learner asks what starts coagulation at the wound, before any anticoagulant is chosen. His platelet count is normal and he has no lupus anticoagulant. Which process is the main in vivo trigger?",
      "choices": [
        {
          "id": "a",
          "text": "Contact activation by factor XII on glass, which is the dominant starter in a wound in clinic"
        },
        {
          "id": "b",
          "text": "Direct platelet destruction by warfarin, which is why trauma patients start a VKA"
        },
        {
          "id": "c",
          "text": "Isolated factor VIII release from muscle, without tissue factor or thrombin"
        },
        {
          "id": "d",
          "text": "Tissue factor exposed at the injury site, which starts the extrinsic pathway and thrombin"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the in vivo trigger: tissue factor on injured cells binds factor VII and starts thrombin generation. Choice A describes the contact pathway that matters more for laboratory activated partial thromboplastin time than for hemostasis after trauma. Choice B is not warfarin's action, and trauma is not a reason to start warfarin as the initiator of clotting. Choice C skips tissue factor. Source: standard in vivo coagulation model (tissue-factor pathway).",
      "teachingPoints": [
        "Tissue factor, not factor XII, is the main starter after injury.",
        "The contact pathway is more a laboratory issue than the wound trigger."
      ],
      "links": [],
      "objectiveIds": [
        1
      ]
    },
    {
      "id": "ii-01",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A 68-year-old man has NVAF, hypertension, and diabetes. He has no mechanical valve, no rheumatic mitral stenosis, and no antiphospholipid antibodies. Weight is 82 kg, serum creatinine is 0.9 mg/dL, and he takes no enzyme inducer. A sister takes aspirin for 'stroke prevention.' Which long-term strategy fits an otherwise eligible patient?",
      "choices": [
        {
          "id": "a",
          "text": "A treatment-dose DOAC, which the 2023 AF guideline prefers when no VKA-only condition is present"
        },
        {
          "id": "b",
          "text": "Aspirin alone, because AVERROES showed aspirin prevents as many strokes as apixaban does"
        },
        {
          "id": "c",
          "text": "Rivaroxaban 2.5 mg twice daily plus aspirin, the COMPASS dose, as if this were stable CAD without AF"
        },
        {
          "id": "d",
          "text": "No antithrombotic drug, because diabetes and hypertension cancel the AF indication entirely"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A matches the 2023 ACC/AHA/ACCP/HRS atrial fibrillation guideline: when moderate-to-severe rheumatic mitral stenosis and a mechanical valve are absent, a DOAC is preferred over warfarin for eligible patients, and this man's score (age 65 to 74, hypertension, diabetes) is in the range treated with anticoagulation. Choice B reverses AVERROES, in which apixaban was superior to aspirin. Choice C uses a vascular dose that does not replace AF treatment. Choice D drops indicated OAC. Cockcroft-Gault clearance with the stated weight is about 91 mL/min and is not the decision.",
      "teachingPoints": [
        "DOACs are preferred over warfarin in eligible NVAF.",
        "Aspirin is not the substitute when OAC is indicated."
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
      "difficulty": "advanced",
      "stem": "A 63-year-old woman has a mechanical mitral valve placed 18 months ago and is in sinus rhythm. Serum creatinine is 0.8 mg/dL. She asks for apixaban to avoid INR checks. She has no bleeding. A note mentions an On-X aortic protocol used for a different patient. Which strategy fits this prosthesis?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban 5 mg twice daily, because sinus rhythm removes the need for a VKA after valve surgery"
        },
        {
          "id": "b",
          "text": "Dose-adjusted warfarin with an INR target of 3.0 (range 2.5 to 3.5), not a DOAC and not an On-X aortic range"
        },
        {
          "id": "c",
          "text": "Warfarin with an INR target of 1.5 to 2.0, borrowing the On-X aortic strategy for this mitral prosthesis"
        },
        {
          "id": "d",
          "text": "Rivaroxaban 20 mg daily, because RE-ALIGN established dabigatran's target as safe for all mechanical valves now"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the 2020 ACC/AHA valvular guideline for a mechanical mitral valve: warfarin with an INR target of 3.0 (range 2.5 to 3.5). DOACs are not that niche. RE-ALIGN stopped dabigatran in mechanical valves for harm. The On-X lower INR strategy is an aortic-prosthesis label issue, not a mitral strategy. Choice A offers apixaban. Choice C transplants the On-X range. Choice D reverses RE-ALIGN and swaps in rivaroxaban.",
      "teachingPoints": [
        "Mechanical mitral valves stay on warfarin at a higher INR range.",
        "An On-X aortic range does not transfer to the mitral position."
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
      "difficulty": "advanced",
      "stem": "A 58-year-old man with acute PE has systolic blood pressure 76 mm Hg on a vasopressor, lactate 5 mmol/L, and a dilated right ventricle. Hemoglobin is 14 g/dL. He had a tooth extraction a year ago and takes no anticoagulant yet. A resident suggests discharging him on an oral lead-in dose because imaging already shows PE. Which priority fits this presentation?",
      "choices": [
        {
          "id": "a",
          "text": "Outpatient apixaban 10 mg twice daily, because any imaged PE is low risk once oxygen is available"
        },
        {
          "id": "b",
          "text": "A retrievable inferior vena cava filter first, and anticoagulation only if the filter cannot be placed"
        },
        {
          "id": "c",
          "text": "Anticoagulation plus urgent reperfusion consideration, because he is in shock from high-risk PE"
        },
        {
          "id": "d",
          "text": "The COMPASS regimen, because hypotension after PE is treated as stable PAD"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches high-risk PE: sustained hypotension and organ hypoperfusion make reperfusion, together with anticoagulation, the priority rather than an outpatient lead-in. Choice A sends a shocked patient home. Choice B substitutes a filter for reperfusion; PREPIC2 does not support routine filters in anticoagulated PE, and this patient is not yet anticoagulated and is unstable. Choice D uses a chronic vascular dose. Source: hemodynamic high-risk PE classification in the 2019 ESC PE guideline and this site's PE pathway.",
      "teachingPoints": [
        "Shock defines high-risk PE.",
        "An oral lead-in is not the first move in vasopressor-dependent PE."
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
      "difficulty": "advanced",
      "stem": "A 61-year-old woman with acute proximal DVT and a prior nonmajor gastrointestinal bleed asks how apixaban and rivaroxaban compare. Both labeled regimens are accessible. Creatinine clearance is 70 mL/min. She takes no inducer. Which COBRRA finding can inform the shared choice?",
      "choices": [
        {
          "id": "a",
          "text": "COBRRA showed rivaroxaban prevents more recurrent VTE, so bleeding differences are irrelevant here"
        },
        {
          "id": "b",
          "text": "COBRRA used the COMPASS 2.5 mg dose, so either drug is given at 2.5 mg twice daily for acute DVT"
        },
        {
          "id": "c",
          "text": "COBRRA found more recurrent VTE with apixaban and identical bleeding, so rivaroxaban is required"
        },
        {
          "id": "d",
          "text": "Clinically relevant bleeding was lower with apixaban, while recurrent VTE was about 1% in each arm"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the COBRRA result on this site: clinically relevant bleeding 3.3% with apixaban versus 7.1% with rivaroxaban (RR 0.46), and recurrent symptomatic VTE 1.1% versus 1.0%. That bleeding difference can inform a shared choice when both labeled regimens fit. Choice A invents an efficacy win for rivaroxaban. Choice B imports the COMPASS dose. Choice C reverses the bleeding finding and over-reads a similar VTE rate. The regimens in the trial were apixaban 10 mg twice daily for 7 days then 5 mg twice daily, and rivaroxaban 15 mg twice daily for 21 days then 20 mg daily.",
      "teachingPoints": [
        "Use COBRRA for the bleeding comparison, not as a ban on rivaroxaban.",
        "Both arms used full acute VTE regimens, not the vascular dose."
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
      "stem": "An 84-year-old frail woman with AF has been on warfarin with INR values mostly in range. Her Groningen Frailty Indicator is high. Her son asks to switch her to a DOAC before a holiday so INR checks can stop. She has no bleeding today and no mechanical valve. Which FRAIL-AF reading fits?",
      "choices": [
        {
          "id": "a",
          "text": "FRAIL-AF does not support a routine switch: bleeding was higher after the switch, without a thromboembolic gain"
        },
        {
          "id": "b",
          "text": "FRAIL-AF showed fewer bleeds after switching, so frailty itself is the indication to change"
        },
        {
          "id": "c",
          "text": "FRAIL-AF enrolled only mechanical valves, so it does not apply to AF on warfarin"
        },
        {
          "id": "d",
          "text": "Any frail adult must switch, because ELDERCARE-AF tested edoxaban against warfarin and found harm from continuing a VKA"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A matches FRAIL-AF on this site: frail older adults stable on a VKA had more major or clinically relevant nonmajor bleeding after switching to a DOAC (15.3% versus 9.4%; HR 1.69), and the trial does not support a routine switch. Choice B reverses the bleed result. Choice C invents a valve population. Choice D misstates ELDERCARE-AF, which is not a VKA-switch trial and is not a mandate to change a stable patient. Source: FRAIL-AF.",
      "teachingPoints": [
        "Stable INR control in frailty is not a reason to switch for convenience.",
        "The trial was stopped early for futility on the bleeding primary outcome."
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
      "difficulty": "advanced",
      "stem": "A 47-year-old man had a proximal DVT 10 days after knee replacement. He has now completed 3 months of anticoagulation. He is walking, the surgical risk has resolved, bleeding risk is ordinary, and a repeat ultrasound is not being used to set the stop date. Cancer screening is negative. Which duration principle fits?",
      "choices": [
        {
          "id": "a",
          "text": "Continue indefinitely, because every proximal DVT is extended once 3 months have passed"
        },
        {
          "id": "b",
          "text": "Stop at the end of a finite course, because major surgery was a transient provoking factor that has resolved"
        },
        {
          "id": "c",
          "text": "Switch to aspirin 100 mg forever, because EINSTEIN CHOICE showed aspirin beats a DOAC after provoked VTE today"
        },
        {
          "id": "d",
          "text": "Restart a 21-day rivaroxaban lead-in now, because month 3 is treated as a new acute clot"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the 2021 CHEST VTE guideline: VTE provoked by major transient surgery is treated for a finite period, typically 3 months, once that risk has resolved. Choice A extends every proximal clot. Choice C reverses EINSTEIN CHOICE, which found rivaroxaban superior to aspirin for extended prevention in patients who had already completed 6 to 12 months and were candidates for extension, not a reason to substitute aspirin for a completed provoked course. Choice D restarts acute dosing without a new event.",
      "teachingPoints": [
        "A resolved major surgical provocation supports a finite course.",
        "Aspirin is not the completion strategy for that course."
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
      "difficulty": "advanced",
      "stem": "A 72-year-old man with AF underwent PCI with a drug-eluting stent 12 days ago for ACS. He is on apixaban at his labeled AF dose plus clopidogrel and aspirin. Creatinine clearance is 62 mL/min. There is no stent thrombosis and no bleeding. Hemoglobin is 13 g/dL. Which combination best reflects the AUGUSTUS-era approach at this point?",
      "choices": [
        {
          "id": "a",
          "text": "Continue aspirin, clopidogrel, and apixaban together for a full year as the default in clinic"
        },
        {
          "id": "b",
          "text": "Stop apixaban and keep dual antiplatelet therapy, because a stent outranks AF"
        },
        {
          "id": "c",
          "text": "Drop aspirin after the brief peri-PCI window and continue the DOAC plus a P2Y12 inhibitor"
        },
        {
          "id": "d",
          "text": "Replace all three drugs with rivaroxaban 2.5 mg twice daily plus aspirin"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches AUGUSTUS, in which apixaban plus a P2Y12 inhibitor, with aspirin limited to a brief peri-PCI window, had less bleeding than regimens that continued aspirin, without a detected excess of ischemic events in the trial's design. Choice A extends triple therapy for a year by default. Choice B drops the AF anticoagulant. Choice D substitutes the COMPASS dose for an AF-plus-stent indication. Source: AUGUSTUS, as used on this site's AF-plus-PCI pathway.",
      "teachingPoints": [
        "The OAC stays. Aspirin is the drug that drops early.",
        "Triple therapy for many months is the bleeding problem AUGUSTUS addressed."
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
      "stem": "A 79-year-old man with AF and a CHA₂DS₂-VASc score of 5 had a spontaneous lobar intracranial hemorrhage 6 weeks ago. He has recovered enough to ask about restarting edoxaban 'because the score is high.' Blood pressure is now controlled. There is no mechanical valve. Which counseling point fits this site's ENRICH-AF teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Restart full-dose edoxaban today, because any high score after intracranial hemorrhage is a class effect win for a DOAC"
        },
        {
          "id": "b",
          "text": "Never discuss anticoagulation again, because a prior hemorrhage permanently cancels AF stroke risk"
        },
        {
          "id": "c",
          "text": "Use aspirin instead, because ENRICH-AF showed antiplatelet therapy superior to a DOAC after hemorrhage"
        },
        {
          "id": "d",
          "text": "Do not restart edoxaban routinely after unselected intracranial hemorrhage"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches ENRICH-AF on this site. The 29 August 2026 congress press release, which is not a peer-reviewed paper, reported stroke or systemic embolism 11.8% versus 12.8% (HR 0.88; 95% CI 0.61–1.26) and major bleeding 11.6% versus 5.2% (HR 2.23). That does not support routine edoxaban after unselected intracranial hemorrhage. Lobar hemorrhage enrollment had already been stopped for safety. Choice A restarts automatically. Choice B erases stroke risk. Choice C invents an antiplatelet win. Source: ENRICH-AF card.",
      "teachingPoints": [
        "Quote the press release as a press release, not as a journal result.",
        "Lobar hemorrhage is a higher-risk subtype, not a routine restart."
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
      "difficulty": "advanced",
      "stem": "A 77-year-old man on apixaban for AF has a sudden severe headache and vomiting. Computed tomography shows a cerebellar hemorrhage with early mass effect. Blood pressure is 188/100 mm Hg. He last took apixaban 4 hours ago. The hospital is in the United States. Which pathway matches current site teaching after the 22 December 2025 Andexxa withdrawal?",
      "choices": [
        {
          "id": "a",
          "text": "Supportive care plus institutional 4F-PCC for life-threatening factor Xa bleeding, not andexanet"
        },
        {
          "id": "b",
          "text": "Idarucizumab 5 g, because every DOAC-related hemorrhage uses the dabigatran reversal antibody"
        },
        {
          "id": "c",
          "text": "Andexanet alfa, because ANNEXA-I still makes it the current United States order for this bleed now"
        },
        {
          "id": "d",
          "text": "Vitamin K alone, because a normal INR would mean the recent apixaban dose has already cleared"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A matches this site after 22 December 2025: Andexxa is not available in the United States, and life-threatening factor Xa inhibitor bleeding is taught as supportive care plus an institutional 4F-PCC pathway, which is not an FDA-labeled specific factor Xa antidote. Choice B uses dabigatran's antibody for apixaban. Choice C writes an Andexxa order the FDA withdrawal removed. Choice D uses vitamin K, which does not reverse apixaban. Source: FDA safety communication and this site's reversal page. ANNEXA-I remains historical context for thrombosis risk, not a current United States order.",
      "teachingPoints": [
        "Name the drug first. Apixaban is not dabigatran.",
        "4F-PCC here is an institutional pathway, not a labeled specific antidote."
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
      "difficulty": "advanced",
      "stem": "A 70-year-old man with NVAF on warfarin, CHA₂DS₂-VASc score 3, is scheduled for elective colonoscopy with possible polypectomy. He has no mechanical valve, no VTE in the past year, and no prior stroke. The endoscopy note asks for 'a heparin bridge so he is never uncovered.' Which BRIDGE reading fits?",
      "choices": [
        {
          "id": "a",
          "text": "BRIDGE showed bridging lowers bleeding, so enoxaparin is routine for this AF warfarin interruption"
        },
        {
          "id": "b",
          "text": "BRIDGE does not support routine bridging: thromboembolism was similar and major bleeding was higher"
        },
        {
          "id": "c",
          "text": "BRIDGE enrolled mechanical mitral valves, so its no-bridge finding is the mitral-valve default"
        },
        {
          "id": "d",
          "text": "BRIDGE requires preoperative anti-Xa testing before any warfarin hold for colonoscopy"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is BRIDGE, as printed on this site: arterial thromboembolism 0.4% without bridging versus 0.3% with bridging (noninferior), and major bleeding 1.3% versus 3.2% (relative risk 0.41 for no bridging). Typical NVAF without a mechanical valve is that population. Choice A reverses the bleed finding. Choice C applies the trial to valves it excluded. Choice D invents a preoperative anti-Xa requirement. Whether polypectomy changes bleed risk enough to alter the hold is a proceduralist question; it does not create a routine bridge.",
      "teachingPoints": [
        "Similar thrombosis, more bleeding: that is the BRIDGE trade.",
        "A mechanical valve would be a different thrombotic-risk class."
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
      "difficulty": "advanced",
      "stem": "A 29-year-old woman who is 18 weeks pregnant has a new proximal DVT. Creatinine is normal. She has no mechanical valve and no antiphospholipid syndrome. She asks for the same apixaban regimen her mother takes for AF. Which class fits usual treatment, with obstetric coordination?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban at the acute VTE lead-in, because pregnancy does not change oral factor Xa inhibitor use"
        },
        {
          "id": "b",
          "text": "Warfarin through the rest of pregnancy, because an INR target avoids injections"
        },
        {
          "id": "c",
          "text": "LMWH, because DOAC labeling does not support pregnancy use and warfarin carries fetal risk"
        },
        {
          "id": "d",
          "text": "Aspirin 81 mg, because a pregnancy-associated DVT is treated as an antiplatelet condition"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches usual practice and product labeling: DOACs are not used for pregnancy-associated VTE, and warfarin labeling describes fetal harm, especially with exposure in early pregnancy. LMWH does not cross the placenta in a clinically important way and is the usual treatment class, coordinated with obstetric care. Choice A copies an AF relative's DOAC. Choice B makes warfarin the default for the rest of pregnancy. Choice D uses aspirin for an acute DVT. Source: DOAC and warfarin labeling on pregnancy, and this site's statement that pregnancy is an LMWH pathway rather than a DOAC.",
      "teachingPoints": [
        "Pregnancy is not an AF-DOAC niche.",
        "Obstetric co-management stays attached to the LMWH plan."
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
      "stem": "Which of these four people matches the COMPASS vascular regimen rather than a full-dose AF or VTE anticoagulant? All four have normal kidney function and no active bleeding.",
      "choices": [
        {
          "id": "a",
          "text": "A 74-year-old with AF and a prior stroke who needs long-term stroke prevention"
        },
        {
          "id": "b",
          "text": "A 55-year-old on day 2 of an acute proximal DVT"
        },
        {
          "id": "c",
          "text": "A 49-year-old with triple-positive antiphospholipid syndrome and a prior arterial clot"
        },
        {
          "id": "d",
          "text": "A 66-year-old with stable CAD, no AF, and no VTE, already taking aspirin"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the COMPASS population: stable atherosclerotic disease without an indication for full-intensity anticoagulation, in which rivaroxaban 2.5 mg twice daily was added to aspirin. Choice A needs an AF treatment dose, not 2.5 mg. Choice B needs acute VTE dosing. Choice C is a VKA phenotype (TRAPS), not COMPASS. Source: COMPASS, as kept separate from AF and VTE dosing on this site.",
      "teachingPoints": [
        "COMPASS is 2.5 mg twice daily plus aspirin in stable CAD or PAD.",
        "It does not treat AF, acute VTE, or triple-positive antiphospholipid syndrome."
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
      "difficulty": "advanced",
      "stem": "A 66-year-old man with new NVAF, hypertension, and diabetes weighs 88 kg. Serum creatinine is 0.7 mg/dL. He takes no inducer. A colleague reaches for edoxaban 60 mg daily because the serum creatinine 'looks low.' Hemoglobin is 14 g/dL and the INR is 1.0. Which assessment is the essential one before that choice?",
      "choices": [
        {
          "id": "a",
          "text": "Cockcroft-Gault clearance, which here is about 129 mL/min and crosses the edoxaban AF ceiling"
        },
        {
          "id": "b",
          "text": "A baseline INR target, because edoxaban is titrated until the INR sits between 2 and 3 in clinic"
        },
        {
          "id": "c",
          "text": "Hemoglobin alone, because a value above 13 g/dL is the edoxaban dose-reduction rule"
        },
        {
          "id": "d",
          "text": "A D-dimer, because AF stroke prevention is started only after a positive fibrin marker"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is required. Using actual body weight, creatinine clearance is (140−66)×88/(72×0.7) = 129 mL/min. The U.S. SAVAYSA label's boxed warning, quoted on this site, says edoxaban should not be used for NVAF when creatinine clearance is above 95 mL/min, because ischemic stroke was higher than with warfarin in that ENGAGE subgroup. A low serum creatinine is why clearance is high, not why the drug is safer. Choice B doses a DOAC to an INR. Choice C uses hemoglobin. Choice D uses a D-dimer. The sentence with 'should not' is the label's boxed warning as already quoted on this site.",
      "teachingPoints": [
        "A low serum creatinine can mean a high clearance.",
        "Edoxaban's AF ceiling is the fact a 'normal creatinine' skips."
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
      "stem": "A 54-year-old woman has an acute proximal DVT diagnosed this afternoon. Weight is 74 kg, creatinine clearance is 68 mL/min, and she takes no P-glycoprotein inhibitor. A discharge draft starts edoxaban 60 mg this evening with no heparin. She is not pregnant. Which sequence matches the pivotal edoxaban VTE program?",
      "choices": [
        {
          "id": "a",
          "text": "Edoxaban 60 mg on day 1, because Hokusai-VTE used an oral-only lead-in like rivaroxaban"
        },
        {
          "id": "b",
          "text": "At least 5 days of a parenteral anticoagulant, then edoxaban 60 mg daily"
        },
        {
          "id": "c",
          "text": "Edoxaban 30 mg on day 1, because every VTE start is half the AF dose for the first week"
        },
        {
          "id": "d",
          "text": "Rivaroxaban 2.5 mg twice daily plus aspirin, because an acute DVT uses the COMPASS sequence"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is Hokusai-VTE, as described on this site: parenteral heparin for at least 5 days, then edoxaban 60 mg daily, or 30 mg daily if reduction criteria are met. At 74 kg, a clearance of 68 mL/min, and no P-glycoprotein inhibitor, she meets no edoxaban dose-reduction criterion. Choice A copies the rivaroxaban or apixaban oral-only start. Choice C halves the dose without a criterion. Choice D uses a vascular regimen. Source: Hokusai-VTE regimen on this site.",
      "teachingPoints": [
        "Edoxaban for acute VTE is not an oral-only start.",
        "Parenteral lead-in of at least 5 days is the sequence the trial used."
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
      "difficulty": "advanced",
      "stem": "A 67-year-old man with esophageal cancer has acute PE. Platelets are 160 × 10⁹/L. Creatinine clearance is 64 mL/min. He is not bleeding today. A colleague defaults to rivaroxaban because it needs no heparin lead-in. Which management approach best fits the gastrointestinal bleeding concern?",
      "choices": [
        {
          "id": "a",
          "text": "Rivaroxaban is required, because SELECT-D showed less major bleeding in esophageal cancer than dalteparin"
        },
        {
          "id": "b",
          "text": "Full-dose warfarin with an INR target of 3.5 to 4.5, because cancer automatically raises the target"
        },
        {
          "id": "c",
          "text": "An apixaban or LMWH plan is the cautious choice here, given SELECT-D's esophageal bleeding experience"
        },
        {
          "id": "d",
          "text": "Stop after 2 weeks, because cancer-associated PE is treated for a shorter time than provoked DVT"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the cautious reading of SELECT-D on this site: major bleeding in esophageal or gastroesophageal cancer occurred in 4 of 11 patients on rivaroxaban versus 1 of 19 on dalteparin, and enrollment of those cancers later stopped as a precaution. Apixaban was studied against dalteparin in Caravaggio in cancer-associated VTE. Choice A reverses the SELECT-D caution. Choice B invents an INR range. Choice D shortens therapy while cancer is active. Source: SELECT-D figures on this site. No platelet threshold is used.",
      "teachingPoints": [
        "Luminal esophageal disease changes the oral-agent comfort level.",
        "A convenient once-daily start does not erase that bleeding experience."
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
      "difficulty": "advanced",
      "stem": "A 58-year-old woman completed 9 months of anticoagulation for unprovoked proximal DVT. Bleeding risk is low, kidney function is normal, and she agrees that extension is appropriate. She asks for aspirin 100 mg because a friend uses it 'to prevent clots.' Which comparison fits EINSTEIN CHOICE?",
      "choices": [
        {
          "id": "a",
          "text": "Aspirin prevented more recurrent VTE than rivaroxaban 10 mg, and with less major bleeding"
        },
        {
          "id": "b",
          "text": "Extension is impossible once 6 months have passed, so neither drug is evidence-based after that in clinic"
        },
        {
          "id": "c",
          "text": "The acute 15 mg twice-daily rivaroxaban lead-in is restarted for every extension year"
        },
        {
          "id": "d",
          "text": "Rivaroxaban 10 mg or 20 mg daily prevented more recurrent VTE than aspirin, with similar major bleeding"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is EINSTEIN CHOICE on this site: after 6 to 12 months of anticoagulation, rivaroxaban 20 mg or 10 mg daily was superior to aspirin 100 mg for recurrent VTE, and major bleeding was low and similar. The labeled extended dose often discussed from that trial is 10 mg daily, while 20 mg remains an option when recurrence risk is judged higher. Choice A reverses the trial. Choice B closes the door after 6 months. Choice C restarts acute lead-in dosing for extension. Source: EINSTEIN CHOICE and the 2021 CHEST support for low-dose rivaroxaban over aspirin when extension is chosen.",
      "teachingPoints": [
        "Aspirin is the weaker extended-prevention option.",
        "Extension dosing is not the 15 mg twice-daily acute lead-in."
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
      "stem": "A 75-year-old man on dabigatran 150 mg twice daily for AF presents with collapse. Computed tomography shows a large intracerebral hemorrhage. He took a dose 2 hours ago. Creatinine clearance is 40 mL/min. The hospital stocks idarucizumab. Which agent is the specific reversal option when reversal is indicated?",
      "choices": [
        {
          "id": "a",
          "text": "Idarucizumab 5 g intravenous, the antibody studied in RE-VERSE AD for dabigatran"
        },
        {
          "id": "b",
          "text": "Andexanet alfa, because dabigatran is a factor Xa inhibitor in current United States practice"
        },
        {
          "id": "c",
          "text": "Vitamin K and 4F-PCC as the specific dabigatran antidote pair"
        },
        {
          "id": "d",
          "text": "Protamine sulfate, because dabigatran's effect is the same as unfractionated heparin"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is specific reversal: RE-VERSE AD and the label studied idarucizumab 5 g intravenous for dabigatran in life-threatening bleeding or emergency surgery. Choice B names the withdrawn factor Xa binder and misclassifies dabigatran, which is a direct thrombin inhibitor. Choice C is the warfarin bundle. Choice D is heparin reversal. Source: RE-VERSE AD on this site and the idarucizumab program.",
      "teachingPoints": [
        "Identify dabigatran before choosing an antidote.",
        "Idarucizumab remains the United States-specific option for dabigatran."
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
      "difficulty": "advanced",
      "stem": "A 78-year-old woman with NVAF has a CHA₂DS₂-VASc score of 6 from age, hypertension, diabetes, and a prior stroke. HAS-BLED contributors include a blood pressure of 170/98 mm Hg and daily ibuprofen. Hemoglobin is 13 g/dL. She has no mechanical valve. How should the bleeding score shape the visit?",
      "choices": [
        {
          "id": "a",
          "text": "Withhold OAC, because any HAS-BLED total of 3 or more cancels a high stroke score"
        },
        {
          "id": "b",
          "text": "Start indicated OAC and treat the modifiable bleed risks, including pressure and the anti-inflammatory drug"
        },
        {
          "id": "c",
          "text": "Choose the DOAC with the shortest half-life solely from the HAS-BLED total"
        },
        {
          "id": "d",
          "text": "Switch the indication to aspirin, because a prior stroke plus a bleeding score favors an antiplatelet"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the 2023 ACC/AHA/ACCP/HRS atrial fibrillation guideline: her stroke score is well into the anticoagulation range, and a bleeding assessment is used to correct blood pressure and to stop a nonsteroidal anti-inflammatory drug, not to cancel OAC. Choice A uses HAS-BLED as a veto. Choice C uses it as a molecule picker. Choice D substitutes aspirin, which AVERROES does not support when OAC is indicated.",
      "teachingPoints": [
        "Fix the pressure and the anti-inflammatory drug.",
        "Do not let the bleeding score erase a prior stroke."
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
      "difficulty": "advanced",
      "stem": "A pharmacist is counseling a 72-year-old man starting rivaroxaban 20 mg daily for AF. He also has a neighbor's 2.5 mg rivaroxaban tablet used with aspirin, and he plans on bedtime dosing of his own 20 mg strength on an empty stomach because 'blood thinners cause nausea with food.' Which counseling point is the essential one for this tablet?",
      "choices": [
        {
          "id": "a",
          "text": "The 15 mg and 20 mg tablets are taken with food, and the AF dose is taken with the evening meal"
        },
        {
          "id": "b",
          "text": "The 20 mg tablet must be taken fasting, because food cuts rivaroxaban exposure by about half today"
        },
        {
          "id": "c",
          "text": "All rivaroxaban strengths, including 2.5 mg, have the same food rule and the same indication"
        },
        {
          "id": "d",
          "text": "The 20 mg dose is doubled on an empty stomach to replace the food effect"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A matches the XARELTO label as already stated on this site: 15 mg and 20 mg tablets are taken with food, and the AF dose is taken with the evening meal. The label reports that food raises 20 mg exposure (area under the curve up 39%). The 2.5 mg tablet, used with aspirin in COMPASS, is taken with or without food and is not this man's AF dose. Choice B reverses the food effect. Choice C equates strengths. Choice D doubles the dose. Source: XARELTO food effect as printed on this site.",
      "teachingPoints": [
        "Food raises, rather than lowers, 20 mg exposure.",
        "A neighbor's 2.5 mg tablet is not the AF prescription."
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
      "difficulty": "advanced",
      "stem": "A clinician finishes a warfarin start and asks, 'Any questions? Do you understand?' The patient nods. He cannot later state the tablet strength, what an INR is, or which bleeding should prompt a call. Which evaluation of understanding is the useful one?",
      "choices": [
        {
          "id": "a",
          "text": "A nod after a closed question is sufficient documentation of understanding"
        },
        {
          "id": "b",
          "text": "Teach-back: ask him to explain the dose, the INR plan, and the bleeding call in his own words"
        },
        {
          "id": "c",
          "text": "A written brochure handed over, with no check that he can actually use it at home"
        },
        {
          "id": "d",
          "text": "A family member's signature, which substitutes for the patient's own explanation of the plan now"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is teach-back. Understanding is demonstrated when the patient restates the plan, not when he agrees that he understands. Choice A accepts a nod. Choice C stops at the paper. Choice D replaces his explanation with someone else's signature. Source: teach-back as a health-literacy method.",
      "teachingPoints": [
        "Ask for a restatement. Do not ask only 'Do you understand?'",
        "The restatement has to include dose, monitoring, and a bleeding trigger."
      ],
      "links": [],
      "objectiveIds": [
        55
      ]
    },
    {
      "id": "iii-03",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A 64-year-old woman on apixaban 5 mg twice daily for AF asks about taking ibuprofen 400 mg three times daily for a month for a sprain. She also takes low-dose aspirin. Creatinine clearance is 55 mL/min. She has had no ulcer. Which education point explains the interaction that matters here?",
      "choices": [
        {
          "id": "a",
          "text": "Ibuprofen raises apixaban concentrations through CYP3A4 the way ketoconazole does, so the dose is halved automatically"
        },
        {
          "id": "b",
          "text": "Ibuprofen replaces apixaban on sprain days because both drugs block factor Xa"
        },
        {
          "id": "c",
          "text": "Regular ibuprofen adds bleeding risk on top of apixaban and aspirin, even when the apixaban level is unchanged"
        },
        {
          "id": "d",
          "text": "Over-the-counter pain medicines have no anticoagulant interaction, so no counseling is needed"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the pharmacodynamic point. Nonsteroidal anti-inflammatory drugs and aspirin impair platelet hemostasis and raise gastrointestinal bleeding risk alongside a DOAC without needing to change apixaban exposure. Choice A describes a strong combined CYP3A4 and P-glycoprotein inhibitor, which ibuprofen is not. Choice B treats ibuprofen as a factor Xa inhibitor. Choice D skips counseling. Source: pharmacodynamic bleeding interaction, as in this site's apixaban–anti-inflammatory teaching.",
      "teachingPoints": [
        "This is a bleeding interaction, not a ketoconazole-type exposure interaction.",
        "Aspirin plus ibuprofen plus a DOAC stacks three hemostatic insults."
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
      "difficulty": "advanced",
      "stem": "A 68-year-old man starting warfarin for AF says he will never eat spinach, broccoli, or kale so the INR 'cannot move.' His usual diet is otherwise steady. Which statement about dietary vitamin K is the accurate one to teach?",
      "choices": [
        {
          "id": "a",
          "text": "All vitamin K–containing foods are forbidden for the entire time he takes warfarin"
        },
        {
          "id": "b",
          "text": "One large spinach dinner after weeks of avoidance is harmless because warfarin erases dietary vitamin K"
        },
        {
          "id": "c",
          "text": "Vitamin K intake should swing widely from day to day so the INR is 'exercised'"
        },
        {
          "id": "d",
          "text": "A consistent intake of vitamin K foods is the goal; a sudden ban followed by a binge is what moves the INR"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the diet teaching. Warfarin antagonism is more stable when vitamin K intake is consistent. A total ban is hard to sustain, and the first large salad after avoidance can drop the INR. Choice A forbids the foods. Choice B denies the binge effect. Choice C prescribes swings. Source: warfarin dietary counseling. No specific salad size or INR change is invented.",
      "teachingPoints": [
        "Consistency beats prohibition.",
        "A binge after a ban is a common INR drop."
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
      "stem": "A clinic prints one missed-dose card for every DOAC: 'If you miss a dose, take two tablets tonight.' It is handed to a patient on rivaroxaban 20 mg daily and to a patient on apixaban 5 mg twice daily. Which principle is the safe one?",
      "choices": [
        {
          "id": "a",
          "text": "Missed-dose teaching must name the drug, because doubling tonight is wrong for both schedules"
        },
        {
          "id": "b",
          "text": "The card is correct for every DOAC, because all of them use a 15 mg twice-daily catch-up rule"
        },
        {
          "id": "c",
          "text": "Apixaban's missed dose is handled by taking 10 mg and skipping the next day, which the card captures"
        },
        {
          "id": "d",
          "text": "Rivaroxaban 20 mg is caught up by taking 40 mg the next evening, which is also the AF food rule"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A rejects a class-wide double-dose card. For once-daily rivaroxaban 20 mg, a missed dose is taken the same day if remembered then, and the next day's dose is not doubled. For apixaban, a missed dose is taken the same day and the dose is not doubled to catch up. The 'take two tonight' rule resembles only the separate 15 mg twice-daily VTE lead-in instruction, which is not either of these regimens. Choice B universalizes that lead-in. Choice C skips the next apixaban day. Choice D doubles the 20 mg dose. Source: XARELTO and ELIQUIS missed-dose labeling.",
      "teachingPoints": [
        "The 15 mg twice-daily catch-up rule is not the 20 mg rule.",
        "Name the regimen on the card."
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
      "difficulty": "advanced",
      "stem": "A 70-year-old man on dabigatran develops a life-threatening bleed. A learner reaches for the same reversal plan used for apixaban and says dabigatran, rivaroxaban, warfarin, and clopidogrel 'all block platelets the same way.' Which mechanism distinction is the correct one?",
      "choices": [
        {
          "id": "a",
          "text": "Dabigatran directly inhibits thrombin, unlike factor Xa inhibitors, warfarin, and P2Y12 blockers"
        },
        {
          "id": "b",
          "text": "Dabigatran blocks vitamin K epoxide reductase, the same enzyme target as warfarin"
        },
        {
          "id": "c",
          "text": "Dabigatran blocks glycoprotein IIb/IIIa, the same platelet target as therapeutic-dose aspirin today"
        },
        {
          "id": "d",
          "text": "Dabigatran inhibits factor Xa, so andexanet is its specific reversal antibody"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is dabigatran's target: thrombin (factor IIa). Apixaban, rivaroxaban, and edoxaban inhibit factor Xa. Warfarin inhibits vitamin K recycling. Clopidogrel blocks the platelet P2Y12 receptor. The specific reversal antibody idarucizumab applies to dabigatran, not to factor Xa inhibitors. Choice B assigns warfarin's target. Choice C assigns a platelet target. Choice D assigns factor Xa and the wrong antidote. Source: PRADAXA mechanism of action.",
      "teachingPoints": [
        "Name thrombin before choosing an antidote.",
        "Dabigatran is not a factor Xa inhibitor and not an antiplatelet drug."
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
      "difficulty": "advanced",
      "stem": "Three patients are on apixaban, rivaroxaban, and edoxaban. A slide says each drug has a different primary target, matching thrombin, platelets, and vitamin K. Which target do the three drugs actually share?",
      "choices": [
        {
          "id": "a",
          "text": "Thrombin, the same primary target as dabigatran"
        },
        {
          "id": "b",
          "text": "Factor Xa, which is why they are grouped as oral factor Xa inhibitors"
        },
        {
          "id": "c",
          "text": "The platelet P2Y12 receptor, the same primary target as clopidogrel now"
        },
        {
          "id": "d",
          "text": "Vitamin K epoxide reductase, the same primary target as warfarin"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the shared target. Apixaban, rivaroxaban, and edoxaban are direct factor Xa inhibitors. Dabigatran is the direct thrombin inhibitor in the DOAC class. Choice A assigns thrombin. Choice C assigns a platelet receptor. Choice D assigns warfarin's enzyme. Source: class pharmacology used throughout this site.",
      "teachingPoints": [
        "Three drug names, one enzyme.",
        "Dabigatran is the thrombin inhibitor that does not belong in this trio."
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
      "difficulty": "advanced",
      "stem": "A patient on apixaban for AF is started on rifampin for a staphylococcal infection. Weight, age, and serum creatinine still meet a 5 mg twice-daily AF plan. Two weeks later a clinician is surprised the anticoagulant 'should be stronger, not weaker.' What is the interaction?",
      "choices": [
        {
          "id": "a",
          "text": "Rifampin inhibits CYP3A4 and raises apixaban exposure the way ketoconazole does"
        },
        {
          "id": "b",
          "text": "Rifampin has no transporter or enzyme effect, so any new clot is unrelated to it"
        },
        {
          "id": "c",
          "text": "Rifampin induces CYP3A4 and P-glycoprotein, so the label avoids the pair"
        },
        {
          "id": "d",
          "text": "Rifampin raises the INR, and apixaban is increased until the INR exceeds 3"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the inducer problem. The ELIQUIS label says to avoid strong combined inducers of CYP3A4 and P-glycoprotein, and it names rifampin. Exposure falls, so the clinical surprise is breakthrough thrombosis, not excess anticoagulation. Choice A describes inhibition. Choice B denies the interaction. Choice D doses apixaban to an INR. Source: ELIQUIS drug interactions.",
      "teachingPoints": [
        "Induction lowers the DOAC. Inhibition raises it.",
        "A correct-looking renal dose does not survive rifampin."
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
      "stem": "Two laboratories report prothrombin times of 18 seconds and 26 seconds on the same warfarin plasma because their thromboplastin reagents differ. Both report an INR near 2.5. A learner wants to dose from the raw seconds. What is the INR doing in this comparison?",
      "choices": [
        {
          "id": "a",
          "text": "The INR is the activated partial thromboplastin time, so the raw seconds should have matched"
        },
        {
          "id": "b",
          "text": "The INR removes reagent differences by ignoring the International Sensitivity Index entirely"
        },
        {
          "id": "c",
          "text": "The INR is valid only for apixaban and should replace the prothrombin time in DOAC clinics"
        },
        {
          "id": "d",
          "text": "The INR uses the International Sensitivity Index so different reagents can match"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the definition. INR = (patient prothrombin time / mean normal prothrombin time) raised to the International Sensitivity Index of that reagent, which is why the seconds differ and the INRs agree. Choice A names the wrong clotting time. Choice B says the index is ignored. Choice C moves the INR to apixaban, which is not how that drug is dosed. Source: INR definition.",
      "teachingPoints": [
        "Raw seconds are reagent-specific. The INR is the comparable number.",
        "The sensitivity index is why the exponent exists."
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
      "difficulty": "advanced",
      "stem": "Four inpatients are on different anticoagulants. The protocol says to adjust the infusion using the activated partial thromboplastin time. Which drug is that protocol traditionally built for?",
      "choices": [
        {
          "id": "a",
          "text": "Unfractionated heparin by intravenous infusion"
        },
        {
          "id": "b",
          "text": "Rivaroxaban 20 mg, which is held for a high activated partial thromboplastin time"
        },
        {
          "id": "c",
          "text": "Warfarin, which is safer when dosed from the activated partial thromboplastin time than from the INR"
        },
        {
          "id": "d",
          "text": "Apixaban, which is reduced when that time is below the normal range"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the traditional use: intravenous unfractionated heparin is adjusted with a protocolized activated partial thromboplastin time or an anti-Xa assay. Choice B holds rivaroxaban for a clotting time that is not its dosing test. Choice C substitutes that time for the INR. Choice D uses a low result to cut apixaban. Source: unfractionated heparin monitoring.",
      "teachingPoints": [
        "Match the clotting time to the drug that is actually infused.",
        "DOACs and warfarin are not titrated to that time."
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
      "difficulty": "advanced",
      "stem": "A protocol allows an LMWH-calibrated anti-Xa level in selected patients, not in every prophylaxis prescription. A woman who is pregnant and on treatment-dose enoxaparin is one of the selected cases. What question can that level answer?",
      "choices": [
        {
          "id": "a",
          "text": "Whether her apixaban dose should be 2.5 mg or 5 mg"
        },
        {
          "id": "b",
          "text": "Whether the enoxaparin anti-Xa effect is in the range that protocol expects for that LMWH"
        },
        {
          "id": "c",
          "text": "Whether her INR should be raised above 3.5"
        },
        {
          "id": "d",
          "text": "Whether she has heparin-induced thrombocytopenia, which an anti-Xa level diagnoses"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the limited job of an LMWH-calibrated anti-Xa assay: it estimates that drug's anticoagulant effect when a protocol calls for it, such as pregnancy, extremes of weight, or reduced kidney function. It is not routine for every patient. Choice A uses it to pick an apixaban dose. Choice C turns it into an INR target. Choice D uses it to diagnose heparin-induced thrombocytopenia, which depends on the clinical pattern and antibody testing. Source: selective LMWH monitoring.",
      "teachingPoints": [
        "Calibrate the assay to the LMWH in use.",
        "A level is not a DOAC dose chart and not a platelet-antibody test."
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
      "stem": "A patient on warfarin has an intracranial hemorrhage and an INR of 4.8. The team gives 4F-PCC and wonders whether vitamin K is redundant because the INR will correct immediately. Which bundle is the one that covers both speed and duration?",
      "choices": [
        {
          "id": "a",
          "text": "Vitamin K only, because factor replacement adds nothing once this bleed's INR is known in clinic"
        },
        {
          "id": "b",
          "text": "Idarucizumab plus vitamin K, because every high INR is a dabigatran reversal problem"
        },
        {
          "id": "c",
          "text": "4F-PCC for immediate factor replacement plus vitamin K so new functional factors can be made"
        },
        {
          "id": "d",
          "text": "Protamine, because warfarin and unfractionated heparin share that same antidote"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the warfarin major-bleed bundle on this site's 2020 ACC pathway: 4-factor PCC replaces factors quickly, and vitamin K allows the liver to synthesize new functional factors while warfarin is still blocking vitamin K recycling. PCC factors are cleared over hours, so vitamin K is not redundant. Choice A skips the rapid replacement. Choice B uses dabigatran's antibody. Choice D uses heparin's antidote. No unit dose is stated. Source: 2020 ACC expert consensus decision pathway cited on this site.",
      "teachingPoints": [
        "PCC is the fast piece. Vitamin K is the durable piece.",
        "Neither one replaces the other."
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
      "difficulty": "advanced",
      "stem": "An 81-year-old woman with NVAF weighs 58 kg. Serum creatinine is 1.1 mg/dL. She takes no inducer or strong combined inhibitor. A colleague continues apixaban 5 mg twice daily because 'the creatinine is under 1.5, so no reduction is allowed.' Which statement is the safe one?",
      "choices": [
        {
          "id": "a",
          "text": "Creatinine clearance must be below 15 mL/min before any apixaban reduction is even discussed"
        },
        {
          "id": "b",
          "text": "One criterion, any criterion, is enough, and her creatinine of 1.1 alone forces 2.5 mg"
        },
        {
          "id": "c",
          "text": "The acute VTE lead-in, 10 mg twice daily for 7 days, is the AF starting dose at this age"
        },
        {
          "id": "d",
          "text": "Age and weight are two criteria, so the AF dose is 2.5 mg twice daily"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D applies the ELIQUIS AF rule as this site states it: 2.5 mg twice daily only when at least two of age 80 or older, weight 60 kg or less, and serum creatinine 1.5 mg/dL or higher are present. She meets age and weight. Creatinine clearance is about 37 mL/min by Cockcroft-Gault, (140−81)×58×0.85/(72×1.1), but that clearance is not the AF reduction rule. Choice A waits for dialysis-range function. Choice B reduces for a single creatinine that does not even meet 1.5. Choice C uses the VTE lead-in for AF. Source: ELIQUIS AF dose-reduction criteria, as printed on this site.",
      "teachingPoints": [
        "Count the three criteria. Creatinine is not a veto over the other two.",
        "Do not import the rivaroxaban clearance cutoff into apixaban."
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
      "difficulty": "advanced",
      "stem": "A patient on rivaroxaban 20 mg daily starts scheduled ibuprofen and develops melena. A level, if measured, would not be expected to show a ketoconazole-like jump in rivaroxaban exposure. Which outcome is the likely one?",
      "choices": [
        {
          "id": "a",
          "text": "More gastrointestinal bleeding from a platelet and mucosal effect, without a higher drug level"
        },
        {
          "id": "b",
          "text": "Loss of rivaroxaban efficacy, because scheduled ibuprofen induces CYP3A4 and drops the level now"
        },
        {
          "id": "c",
          "text": "A higher INR target, because ibuprofen is monitored and dose-adjusted exactly like warfarin"
        },
        {
          "id": "d",
          "text": "Protection from bleeding, because nonsteroidal drugs reverse factor Xa inhibition"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is a pharmacodynamic bleed. Ibuprofen impairs platelet function and injures gastric mucosa. It is not a strong CYP3A4 inducer and not a reversal agent. Choice B assigns induction. Choice C adds an INR target. Choice D reverses the direction. Source: pharmacodynamic interaction of nonsteroidal anti-inflammatory drugs with factor Xa inhibitors.",
      "teachingPoints": [
        "Exposure and bleeding are different axes.",
        "Melena can occur without a doubling of the rivaroxaban level."
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
      "stem": "A clinician is writing the first week of apixaban for acute PE, then asks what changes months later if extension is chosen. Which description matches AMPLIFY, as distinct from the extended-prevention dose?",
      "choices": [
        {
          "id": "a",
          "text": "Start 2.5 mg twice daily for 7 days, because extension dosing is also the acute dosing"
        },
        {
          "id": "b",
          "text": "Start 10 mg twice daily for 7 days, then 5 mg twice daily, which is the acute AMPLIFY regimen"
        },
        {
          "id": "c",
          "text": "Start 20 mg once daily with food, which is the apixaban acute regimen"
        },
        {
          "id": "d",
          "text": "Start 2.5 mg once daily, because AMPLIFY used the COMPASS schedule"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is AMPLIFY on this site: apixaban 10 mg twice daily for 7 days, then 5 mg twice daily. The 2.5 mg twice-daily dose is an extended-prevention dose after at least 6 months, not the acute start. Choice A swaps them. Choice C uses rivaroxaban's maintenance dose. Choice D uses a vascular idea and the wrong frequency. Source: AMPLIFY regimen on this site.",
      "teachingPoints": [
        "Acute apixaban is 10 mg then 5 mg, twice daily.",
        "2.5 mg twice daily belongs to the extension decision, later."
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
      "difficulty": "advanced",
      "stem": "A patient with acute proximal DVT is prescribed rivaroxaban. The prescription says 20 mg daily starting today, with no lead-in. It is day 1. Which regimen matches the EINSTEIN acute VTE program?",
      "choices": [
        {
          "id": "a",
          "text": "2.5 mg twice daily plus aspirin from day 1"
        },
        {
          "id": "b",
          "text": "20 mg daily from day 1, with a 15 mg twice-daily phase only if a PE is present"
        },
        {
          "id": "c",
          "text": "15 mg twice daily for 21 days, then 20 mg daily, taken with food"
        },
        {
          "id": "d",
          "text": "10 mg twice daily for 7 days, then 5 mg twice daily"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is EINSTEIN-DVT and EINSTEIN-PE on this site: rivaroxaban 15 mg twice daily for 21 days, then 20 mg daily. The 15 mg and 20 mg doses are taken with food. Choice A is the COMPASS regimen. Choice B skips the lead-in and invents a PE-only rule. Choice D is the apixaban acute regimen. Source: EINSTEIN regimen on this site.",
      "teachingPoints": [
        "Day 1 of rivaroxaban for VTE is 15 mg twice daily, not 20 mg once.",
        "Food applies to both of those tablet strengths."
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
      "stem": "A patient on rivaroxaban 20 mg daily for AF is prescribed ritonavir as part of an antiviral regimen. Creatinine clearance is 80 mL/min. Someone suggests the 15 mg renal tablet as the fix. What is the principal concern?",
      "choices": [
        {
          "id": "a",
          "text": "Ritonavir induces rivaroxaban clearance, so the AF dose should be raised to 40 mg daily in clinic"
        },
        {
          "id": "b",
          "text": "Ritonavir has no P-glycoprotein or CYP3A4 effect on rivaroxaban exposure at all"
        },
        {
          "id": "c",
          "text": "The 15 mg renal tablet fully corrects a strong combined inhibitor such as ritonavir"
        },
        {
          "id": "d",
          "text": "The label avoids ritonavir, a strong combined inhibitor, rather than using the 15 mg renal dose"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the inhibitor problem. Ritonavir can markedly raise rivaroxaban exposure. The renal 15 mg dose is for reduced creatinine clearance, not a substitute for avoiding a strong combined inhibitor. Choice A describes induction and a doubled dose. Choice B denies the interaction. Choice C trusts the renal tablet. Source: XARELTO drug interactions with combined P-glycoprotein and strong CYP3A4 inhibitors.",
      "teachingPoints": [
        "Inhibition is not a renal-dose problem.",
        "Do not 'fix' ritonavir by prescribing the 15 mg AF tablet."
      ],
      "links": [],
      "objectiveIds": [
        69
      ]
    },
    {
      "id": "iv-13",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A learner says enoxaparin and apixaban are interchangeable because both 'block Xa.' A patient is being switched from one to the other. Which mechanism distinction is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Enoxaparin inhibits factor Xa via antithrombin; apixaban inhibits factor Xa directly"
        },
        {
          "id": "b",
          "text": "Enoxaparin directly blocks thrombin's active site, the same site dabigatran blocks now"
        },
        {
          "id": "c",
          "text": "Enoxaparin blocks vitamin K epoxide reductase, the same enzyme warfarin inhibits"
        },
        {
          "id": "d",
          "text": "Enoxaparin is an antiplatelet drug and has no antithrombin-dependent effect at all"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the distinction. LMWH binds antithrombin and preferentially inhibits factor Xa, with less anti-IIa effect than unfractionated heparin. Apixaban binds factor Xa directly and does not require antithrombin. Choice B equates enoxaparin with dabigatran. Choice C equates it with warfarin. Choice D calls it an antiplatelet. Source: LMWH versus direct factor Xa inhibitor pharmacology.",
      "teachingPoints": [
        "Both affect factor Xa. Only one of them needs antithrombin.",
        "A switch is not a milligram-for-milligram exchange."
      ],
      "links": [],
      "objectiveIds": [
        63
      ]
    },
    {
      "id": "v-01",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "A quality committee asks what time in therapeutic range measures in the warfarin clinic and how to use it. A draft slide also calls it the DOAC success metric and prints a single national target the clinic has not adopted. Which description is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "The share of time a warfarin INR is in range; it is not a DOAC metric or a national percentage"
        },
        {
          "id": "b",
          "text": "It is the percentage of DOAC doses taken with food, and one national target percentage applies to every drug"
        },
        {
          "id": "c",
          "text": "It replaces individual INR follow-up, so out-of-range calls can stop once the clinic average looks acceptable"
        },
        {
          "id": "d",
          "text": "It measures enoxaparin anti-Xa levels and is improved by giving every warfarin patient vitamin K"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A defines time in therapeutic range for a vitamin K antagonist clinic: how much of the time the INR is in the chosen range, often by a linear interpolation method such as Rosendaal's. It supports case review. It is not defined for DOACs, and this site does not use a single national percentage cutoff. Choice B reassigns it to food. Choice C retires individual follow-up. Choice D mixes LMWH and vitamin K. Source: warfarin clinic quality measurement. No target percentage is stated.",
      "teachingPoints": [
        "Use it to find unstable warfarin management.",
        "Do not paste it onto a DOAC dashboard."
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
      "stem": "An anticoagulation clinic wants to add fingerstick INR testing next month. The plan buys meters and starts dosing from them on day 1. There is no quality-control schedule, no training record, and no rule for when a result is rejected. Which infrastructure is actually required?",
      "choices": [
        {
          "id": "a",
          "text": "Meters alone, because a waived test has no quality duties once the devices are purchased"
        },
        {
          "id": "b",
          "text": "Training, controls, storage rules, and a written response when a control fails"
        },
        {
          "id": "c",
          "text": "A policy that fingerstick results always override a same-day venous INR, even when they conflict"
        },
        {
          "id": "d",
          "text": "Removal of venous INR capability so the new meter can never be checked against the laboratory"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the infrastructure. Point-of-care INR is a test system: people are trained, controls are run, strips are stored as the manufacturer requires, and discordant or failed runs are not used for doses. Choice A stops at the purchase. Choice C biases the system toward the meter. Choice D removes the comparison method. Source: point-of-care quality operations. No regulatory section number is cited.",
      "teachingPoints": [
        "A meter without a control plan is not a clinic service.",
        "Discordant results need a rejection rule before go-live."
      ],
      "links": [],
      "objectiveIds": [
        74
      ]
    },
    {
      "id": "v-03",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "A new stewardship program lists its aims. One draft says the aim is to switch every warfarin patient to a DOAC and to keep every aspirin prescription. Which set of activities actually describes anticoagulation stewardship?",
      "choices": [
        {
          "id": "a",
          "text": "Maximize the number of anticoagulant starts, regardless of indication or bleeding risk"
        },
        {
          "id": "b",
          "text": "Remove INR monitoring so that no warfarin result can ever arrive late"
        },
        {
          "id": "c",
          "text": "Match indication, dose, and duration, and keep monitoring ownership clear"
        },
        {
          "id": "d",
          "text": "Adopt one national DOAC for every diagnosis, including mechanical valves and pregnancy"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is stewardship: the right anticoagulant for the indication, the labeled dose, a duration that matches the clot or the AF plan, removal of combinations such as a DOAC plus a leftover aspirin, and a named owner for monitoring and for procedure holds. Choice A counts starts. Choice B deletes warfarin safety. Choice D forces one drug into VKA niches and into pregnancy. Source: anticoagulation stewardship aims on this site.",
      "teachingPoints": [
        "Stewardship is indication, dose, and duration, not a switch quota.",
        "A mechanical valve and a pregnancy are not DOAC defaults."
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
      "difficulty": "advanced",
      "stem": "A 66-year-old man had a proximal DVT eight months ago and completed anticoagulation. He describes chronic evening swelling and heaviness in that leg, unchanged for months. Today the same leg is suddenly more painful, with new pitting edema and a larger calf than last month. Hemoglobin is 14 g/dL. Which distinction matters most?",
      "choices": [
        {
          "id": "a",
          "text": "Chronic heaviness can be post-thrombotic syndrome, but today's change needs a recurrence check"
        },
        {
          "id": "b",
          "text": "Any swelling years later is post-thrombotic syndrome, so imaging for a new clot is unnecessary"
        },
        {
          "id": "c",
          "text": "Post-thrombotic syndrome means the original clot is extending, so the INR target automatically rises"
        },
        {
          "id": "d",
          "text": "Chronic venous symptoms after DVT are arterial ischemia and are treated as acute limb ischemia"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A separates post-thrombotic syndrome (chronic dependent swelling and heaviness after DVT) from a new acute change that can be recurrence and needs diagnostic evaluation. Choice B misses the abrupt change. Choice C invents an INR intensification for chronic syndrome symptoms. Choice D calls venous skin and swelling an arterial emergency. Source: post-thrombotic syndrome as a chronic venous consequence of DVT, distinct from recurrent acute DVT.",
      "teachingPoints": [
        "Chronic venous symptoms are not automatically a new clot.",
        "A sudden change in pain or swelling still needs a recurrence assessment."
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
      "stem": "A clinic compares two patients who both ask about clot risk on the valve. Patient 1 has a mechanical mitral prosthesis placed two years ago and is in sinus rhythm. Patient 2 has a bioprosthetic aortic valve placed three years ago and is also in sinus rhythm, with no AF. Neither has active bleeding. Which comparison of thrombosis risk is sound?",
      "choices": [
        {
          "id": "a",
          "text": "The bioprosthetic aortic valve carries the higher long-term thrombosis risk and needs a higher INR than a mechanical mitral valve"
        },
        {
          "id": "b",
          "text": "The mechanical mitral prosthesis is the higher-risk position and is a VKA case, not a tissue aortic valve in sinus rhythm"
        },
        {
          "id": "c",
          "text": "Both valves have identical long-term clot risk, so a DOAC is appropriate for the mechanical mitral valve"
        },
        {
          "id": "d",
          "text": "Valve position does not matter once three months have passed, and both patients stop anticoagulation then"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches valve teaching: a mechanical mitral prosthesis has a higher thrombotic risk than a bioprosthetic aortic valve in sinus rhythm without another OAC indication, and mechanical valves are a VKA niche. The 2020 ACC/AHA valvular heart disease guideline describes a higher INR range for mechanical mitral valves (target 3.0, range 2.5 to 3.5) than for a bileaflet aortic valve without additional risk factors (target 2.5, range 2.0 to 3.0). Choice A reverses the positions. Choice C offers a DOAC for a mechanical valve. Choice D stops therapy on a calendar. Source: 2020 ACC/AHA valvular guideline and RE-ALIGN's failure of dabigatran on mechanical valves, as used on this site.",
      "teachingPoints": [
        "Mechanical mitral valves stay on a VKA with a higher INR range than a low-risk mechanical aortic valve.",
        "A tissue aortic valve in sinus rhythm is not that prosthesis."
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
      "difficulty": "advanced",
      "stem": "A 73-year-old man on warfarin for AF develops sudden right-arm weakness and aphasia 40 minutes ago. Blood pressure is 168/90 mm Hg. INR is 2.6. Glucose is 110 mg/dL. His daughter asks for immediate clot-busting medicine because the symptoms look like a stroke. Which distinction has to come before a reperfusion or reversal choice?",
      "choices": [
        {
          "id": "a",
          "text": "Symptoms on an anticoagulant are always hemorrhage, so imaging can wait until vitamin K is finished"
        },
        {
          "id": "b",
          "text": "Symptoms that sound cortical are always ischemic, so thrombolysis precedes any brain imaging"
        },
        {
          "id": "c",
          "text": "Brain imaging must separate hemorrhage from ischemia before thrombolysis or a reversal strategy is chosen"
        },
        {
          "id": "d",
          "text": "An INR inside 2 to 3 rules out intracranial bleeding, so reversal is never part of the pathway"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the first branch: sudden focal signs on an anticoagulant can be ischemic stroke or intracranial hemorrhage, and imaging separates them. Choice A skips imaging and assumes a bleed. Choice B skips imaging and assumes ischemia. Choice D treats a therapeutic INR as proof against hemorrhage. Source: emergency stroke assessment; anticoagulant use does not replace imaging.",
      "teachingPoints": [
        "Imaging distinguishes hemorrhage from ischemia.",
        "A therapeutic INR does not exclude intracranial bleeding."
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
      "difficulty": "advanced",
      "stem": "A learner is explaining a postoperative PE. The patient had pelvic surgery yesterday (vessel injury), is still immobile (stasis), and has metastatic cancer (a hypercoagulable state). She also has a penicillin allergy and a normal chest X-ray. Which set of mechanisms is Virchow's triad in this case?",
      "choices": [
        {
          "id": "a",
          "text": "Penicillin allergy, a normal chest X-ray, and recent surgery"
        },
        {
          "id": "b",
          "text": "High arterial shear, platelet count, and a therapeutic INR"
        },
        {
          "id": "c",
          "text": "Only cancer, because stasis and surgical injury do not contribute once a tumor is present"
        },
        {
          "id": "d",
          "text": "Stasis from immobility, endothelial injury from surgery, and hypercoagulability from cancer"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is Virchow's triad applied to the case: stasis, endothelial injury, and hypercoagulability. Choice A substitutes an allergy and an X-ray. Choice B lists arterial and laboratory items that are not the triad. Choice C drops two of the three elements that are present. Source: Virchow's triad as the organizing frame for venous thrombosis risk.",
      "teachingPoints": [
        "The triad is stasis, endothelial injury, and hypercoagulability.",
        "An allergy and a chest X-ray are not elements of the triad."
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
      "stem": "Four inpatients have low platelets. Which pattern most strongly suggests heparin-induced thrombocytopenia rather than ordinary immune thrombocytopenia or a dilutional drop?",
      "choices": [
        {
          "id": "a",
          "text": "Heparin started 8 days ago, platelets fell by half, and a new lower-extremity DVT is present"
        },
        {
          "id": "b",
          "text": "Petechiae, a platelet count of 12 × 10⁹/L, no heparin exposure, and no thrombosis"
        },
        {
          "id": "c",
          "text": "Platelets fell the hour after a 2-liter saline bolus, with no heparin and no new clot"
        },
        {
          "id": "d",
          "text": "Chronic thrombocytopenia for two years, unchanged, on no anticoagulant, and no new symptoms now"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the recognition pattern: a platelet fall typically 5 to 10 days after heparin plus a new thrombus. Choice B is the bleeding phenotype of immune thrombocytopenia without heparin. Choice C is dilution. Choice D is chronic and unrelated to a heparin clock. Source: clinical pattern of heparin-induced thrombocytopenia (timing plus thrombosis), as distinct from isolated immune thrombocytopenia.",
      "teachingPoints": [
        "Timing after heparin plus a new clot is the high-suspicion pattern.",
        "Petechiae without heparin point away from this syndrome."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-18",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A 59-year-old man with diabetes has rest chest pain, ST-segment depression, and a thrombotic coronary stenosis. He has no AF, no DVT, and a normal creatinine clearance. A colleague suggests that an anticoagulant alone can replace antiplatelet therapy because all clots are the same. Which interpretation fits typical atherosclerotic arterial thrombosis?",
      "choices": [
        {
          "id": "a",
          "text": "Antiplatelet therapy is irrelevant because coronary thrombi are purely venous red clots"
        },
        {
          "id": "b",
          "text": "Antiplatelet therapy is central, because the lesion is a platelet-rich thrombus on a ruptured plaque"
        },
        {
          "id": "c",
          "text": "The COMPASS 2.5 mg rivaroxaban regimen replaces antiplatelet therapy in acute coronary thrombosis today"
        },
        {
          "id": "d",
          "text": "Warfarin monotherapy is the evidence-based acute treatment of plaque-rupture thrombosis"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B fits high-shear platelet-rich arterial thrombus, which is why antiplatelet therapy is central in CAD and ACS. Choice A calls it a venous clot. Choice C misuses the COMPASS vascular regimen, which was not an acute ACS antiplatelet replacement and was added to aspirin in stable disease. Choice D substitutes warfarin monotherapy for acute plaque rupture. Source: arterial thrombosis pathophysiology and the distinction from COMPASS, which this site keeps separate from ACS treatment.",
      "teachingPoints": [
        "Platelet-rich arterial clot is why antiplatelet therapy is central in ACS.",
        "COMPASS is a chronic CAD or PAD regimen with aspirin, not acute plaque-rupture treatment."
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
      "stem": "On day 3 of warfarin for acute PE, started together with enoxaparin, a patient's INR is 2.3. He feels well, hemoglobin is stable, and a learner says the enoxaparin can stop because the INR is in range. Which explanation is the accurate one?",
      "choices": [
        {
          "id": "a",
          "text": "The INR fully reports antithrombin activity, so a value above 2 means every factor is already suppressed"
        },
        {
          "id": "b",
          "text": "Factor II is the first factor to disappear, so an early INR of 2.3 proves prothrombin is already gone"
        },
        {
          "id": "c",
          "text": "Much of this early INR is factor VII loss, and prothrombin may not yet be suppressed, so overlap continues"
        },
        {
          "id": "d",
          "text": "Protein C rises in the first days, so the patient is protected against extension as soon as the INR exceeds 2"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the teaching point. Factor VII's short half-life moves the INR early, while prothrombin declines over days. The CHEST VTE guideline describes continuing a parenteral anticoagulant with warfarin for at least 5 days and until the INR is at least 2.0 for 24 hours. Choice A misstates what the INR measures. Choice B reverses the order of factor loss. Choice D reverses the early protein C change. Half-lives are approximate textbook values.",
      "teachingPoints": [
        "Do not read a day-3 INR as full prothrombin suppression.",
        "CHEST overlap is at least 5 days and an INR of at least 2.0 for 24 hours."
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
      "difficulty": "advanced",
      "stem": "Two people finish an initial VTE course and feel well. Patient A is a 44-year-old man with a first proximal DVT that started 10 days after major hip surgery; the surgical recovery is complete and bleeding risk is ordinary. Patient B is a 50-year-old man with a first unprovoked proximal DVT, no bleeding history, and normal kidney function. Which pattern best supports considering extended anticoagulation?",
      "choices": [
        {
          "id": "a",
          "text": "Patient A, because every clot after surgery is treated indefinitely once the incision has healed"
        },
        {
          "id": "b",
          "text": "Both patients equally, because the initial clot site, not the provoking factor, sets the duration"
        },
        {
          "id": "c",
          "text": "Neither patient, because feeling well at three months means the recurrence risk has ended"
        },
        {
          "id": "d",
          "text": "Patient B, because an unprovoked proximal event is the pattern for which extended therapy is considered"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches duration physiology and the CHEST VTE guideline: a VTE provoked by major transient surgery is usually a finite course (about 3 months) once the provoking factor is gone, whereas unprovoked proximal VTE is the setting in which extended anticoagulation is considered if bleeding risk is not high. Choice A extends the surgical clot. Choice B ignores the provoking factor. Choice C treats symptom resolution as the end of recurrence risk. Source: 2021 CHEST VTE guideline duration framework.",
      "teachingPoints": [
        "Major surgery as a transient provoking factor points to a finite course.",
        "Unprovoked proximal VTE is the extended-therapy discussion when bleeding risk is acceptable."
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
      "difficulty": "advanced",
      "stem": "A 70-year-old woman with AF has a CHA₂DS₂-VASc score of 5 from age, hypertension, and a prior stroke. She has had no palpitations for a month and assumes stroke risk has ended. Echocardiography shows a dilated left atrium and dense spontaneous contrast in the appendage, with a normal aortic valve and no DVT. Which pathophysiology still favors thrombus?",
      "choices": [
        {
          "id": "a",
          "text": "Stasis in the left atrial appendage continues in AF even when palpitations are absent"
        },
        {
          "id": "b",
          "text": "High shear on a normal aortic valve is the main source of AF thrombus"
        },
        {
          "id": "c",
          "text": "Calf-vein stasis is required before an AF-related cardioembolic stroke can occur"
        },
        {
          "id": "d",
          "text": "A month without symptoms remodels the appendage so that OAC is no longer mechanistically relevant"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the mechanism: AF causes appendage stasis regardless of whether the patient feels palpitations, and the echo shows that stasis. The stroke score remains high. Choice B relocates the thrombus to a normal aortic valve under high shear. Choice C requires DVT for a cardioembolic stroke. Choice D treats a symptom-free month as biologic resolution. Source: AF appendage-stasis pathophysiology on this site's stroke framework.",
      "teachingPoints": [
        "Symptom-free intervals do not remove appendage stasis.",
        "The stroke score still reflects the prior stroke, age, and hypertension."
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
      "stem": "A 60-year-old man with gastric cancer has a mediastinal mass compressing the superior vena cava, a new central catheter, and started cisplatin this week. He is spending most of the day in a chair. Hemoglobin is 11 g/dL. Which combination best explains his elevated VTE risk?",
      "choices": [
        {
          "id": "a",
          "text": "Only the hemoglobin value, because anemia is the coagulant in solid tumors"
        },
        {
          "id": "b",
          "text": "Tumor-related procoagulant activity, venous compression, the catheter, and treatment-related stasis"
        },
        {
          "id": "c",
          "text": "Only inherited factor V Leiden, which must be present before a cancer patient can form a clot"
        },
        {
          "id": "d",
          "text": "Only arterial plaque, because cancer raises coronary risk and not venous risk"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B stacks the real mechanisms: cancer-cell procoagulants such as tissue factor, mechanical venous compression, catheter-related injury, and immobility. Choice A uses anemia as the cause. Choice C requires a hereditary mutation. Choice D converts the problem to arterial plaque. Source: multifactorial pathophysiology of cancer-associated VTE.",
      "teachingPoints": [
        "Tissue factor, stasis, catheters, and compression can operate at once.",
        "A normal thrombophilia test would not clear this risk."
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
      "difficulty": "advanced",
      "stem": "A 48-year-old woman has a three-day history of unilateral calf swelling after a long flight. She then has abrupt dyspnea and pleuritic pain, with normal blood pressure and a clear chest X-ray. She has no coronary history. Which statement best connects the leg findings to the chest symptoms?",
      "choices": [
        {
          "id": "a",
          "text": "The chest pain is in-situ pulmonary arterial plaque rupture, unrelated to the leg"
        },
        {
          "id": "b",
          "text": "Calf swelling after travel is arterial embolism from the foot to the lung"
        },
        {
          "id": "c",
          "text": "Lower-extremity DVT can embolize to the pulmonary arteries and produce PE"
        },
        {
          "id": "d",
          "text": "PE forms only in the arms, so a calf clot cannot explain dyspnea"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the embolic link: lower-extremity DVT is the usual source of PE. Choice A invents in-situ pulmonary arterial plaque rupture and ignores the acute leg clot. Choice B reverses arterial and venous directions. Choice D denies lower-extremity embolization. Source: venous thromboembolism as one disease in which DVT embolizes to the lung.",
      "teachingPoints": [
        "Most PE events arise from lower-extremity venous thrombus.",
        "A normal blood pressure does not mean the embolus is absent."
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
      "stem": "Patient 1 had a calf DVT two weeks after arthroscopy and has negative antiphospholipid tests. Patient 2 has had an unprovoked DVT and an arterial stroke, with lupus anticoagulant, IgG anticardiolipin, and IgG anti-β2-glycoprotein I persisting on repeat tests. Both feel well on an initial anticoagulant. Which comparison is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "The two histories are the same phenotype, so both stay on a standard VTE DOAC plan indefinitely today"
        },
        {
          "id": "b",
          "text": "Only patient 1 needs a VKA, because surgery raises the antiphospholipid risk"
        },
        {
          "id": "c",
          "text": "Patient 2 can use the COMPASS low dose, because triple-positive disease is a stable-CAD regimen"
        },
        {
          "id": "d",
          "text": "Patient 2 has a high-risk antiphospholipid phenotype that is not managed as a routine provoked DVT"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D separates a surgery-provoked VTE with negative antibodies from triple-positive antiphospholipid syndrome with both venous and arterial events. TRAPS compared rivaroxaban with warfarin in the triple-positive population and stopped early for excess events on rivaroxaban. Choice A collapses the phenotypes. Choice B assigns the VKA niche to the surgical clot. Choice C imports COMPASS. Source: TRAPS and this site's high-risk antiphospholipid pathway.",
      "teachingPoints": [
        "Provoked VTE with negative antibodies is not triple-positive disease.",
        "Arterial plus venous events and persistent triple positivity change the agent discussion."
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
      "difficulty": "advanced",
      "stem": "A teenager with severe hemophilia A bleeds into a joint after a minor twist. Platelets are normal and the first platelet plug can form. The bleeding continues because fibrin stabilization fails. Which process is the missing part of hemostasis?",
      "choices": [
        {
          "id": "a",
          "text": "Secondary hemostasis, in which thrombin generates fibrin that stabilizes the platelet plug"
        },
        {
          "id": "b",
          "text": "Only vasoconstriction, because fibrin is not part of joint hemostasis"
        },
        {
          "id": "c",
          "text": "Platelet adhesion to collagen, which is absent whenever factor VIII is low"
        },
        {
          "id": "d",
          "text": "Warfarin-sensitive protein C activation, which is the main clot stabilizer in hemophilia"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A names secondary hemostasis: thrombin converts fibrinogen to fibrin and stabilizes the initial platelet plug. Hemophilia A is a factor VIII defect in that thrombin burst, with a normal platelet count. Choice B drops fibrin. Choice C confuses a platelet step with a coagulation-factor defect. Choice D assigns clot stability to protein C, which is an anticoagulant. Source: primary versus secondary hemostasis.",
      "teachingPoints": [
        "Primary hemostasis is the platelet plug. Secondary hemostasis is fibrin.",
        "A normal platelet count does not replace factor VIII."
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
      "stem": "A 55-year-old man with acute proximal DVT weighs 138 kg. Height is 178 cm. Creatinine clearance using actual body weight is above 60 mL/min. He takes no interacting anticonvulsant, has no mechanical valve, and is not pregnant. A colleague proposes doubling whatever oral dose the label lists, solely because of the weight. Which assessment is sound?",
      "choices": [
        {
          "id": "a",
          "text": "Every DOAC is contraindicated once weight exceeds 100 kg, so no labeled regimen can be discussed"
        },
        {
          "id": "b",
          "text": "Extreme weight is a reason for a careful label and specialty review, not for inventing a double dose"
        },
        {
          "id": "c",
          "text": "The labeled dose is doubled in all adults above 120 kg because volume of distribution always doubles"
        },
        {
          "id": "d",
          "text": "Warfarin is mandatory at this weight even when no VKA-only condition is present"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches cautious obesity teaching: very high body weight is a pharmacokinetics concern and a specialty check, and it is not an instruction to invent an unlisted double dose. The 2021 ISTH SSC guidance on DOACs in obesity suggests that standard doses of rivaroxaban or apixaban are among appropriate options for VTE treatment regardless of high body mass index and weight, with fewer supporting data for apixaban; a standard dose is the labeled dose, not a doubled one. Choice A sets a 100 kg ban that the item does not support. Choice C invents a doubling rule. Choice D forces warfarin without a VKA niche. No off-label milligram amount is endorsed here.",
      "teachingPoints": [
        "Do not invent a double dose that the label does not list.",
        "Very high weight still deserves a deliberate agent review."
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
      "difficulty": "advanced",
      "stem": "A 71-year-old man on warfarin for AF wants home INR testing before a winter in another state. On a supervised attempt he cannot place the strip correctly, and he cannot explain whom he would call for an unexpected result. His daughter can. Vision is adequate. Which feature set actually supports a home program?",
      "choices": [
        {
          "id": "a",
          "text": "Owning a meter, even if he cannot obtain a sample or report an unexpected result"
        },
        {
          "id": "b",
          "text": "A normal hemoglobin, which by itself certifies home self-testing competence"
        },
        {
          "id": "c",
          "text": "Demonstrated technique plus a report path to a clinician who manages out-of-range values"
        },
        {
          "id": "d",
          "text": "A one-time class, after which he changes the weekly dose whenever the meter beeps in clinic"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the program: competence with the sample, a reporting path, and a named clinician for dose changes. Choice A treats purchase as competence. Choice B uses a laboratory value as a skills test. Choice D turns an untrained user into an unsupervised prescriber. Home testing and home dose self-management are different privileges. Source: anticoagulation-clinic operations for patient self-testing.",
      "teachingPoints": [
        "Technique and a closed reporting loop are the entry criteria.",
        "A meter shipment is not a dosing privilege."
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
      "difficulty": "advanced",
      "stem": "A 32-year-old woman is 3 weeks postpartum and needs ongoing anticoagulation for a DVT diagnosed in the third trimester. She is exclusively breastfeeding. Pregnancy itself has ended. She asks whether the drug rules are the same as they were at 20 weeks. Which comparison is the accurate one?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin remains forbidden, because fetal risk and breast-milk exposure are the same problem"
        },
        {
          "id": "b",
          "text": "Every DOAC has the same established infant-safety record as warfarin during lactation"
        },
        {
          "id": "c",
          "text": "Breastfeeding ends the indication, so anticoagulation stops on the day milk comes in"
        },
        {
          "id": "d",
          "text": "Warfarin and LMWH have established lactation roles, while a DOAC is not the breastfeeding default"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D separates pregnancy from lactation. Warfarin's fetal risk does not mean a lactation ban; warfarin and LMWH are the agents with established breastfeeding use. DOAC labeling does not support routine use during breastfeeding. Choice A equates placenta and milk. Choice B equates DOAC infant data with warfarin. Choice C drops the maternal indication. Source: product labeling distinction between pregnancy and lactation, consistent with this site's note that breastfeeding is not a DOAC pathway.",
      "teachingPoints": [
        "Placental transfer and breast-milk exposure are different questions.",
        "The postpartum indication can continue while the drug class changes."
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
      "stem": "A 7-year-old child with acute VTE cannot be assumed to use a parent's AF dose. Weight-based references exist for some anticoagulants, and the child spits out tablets. The parent asks to split an adult apixaban tablet 'the way the label does for grandma.' Which principle guides the choice?",
      "choices": [
        {
          "id": "a",
          "text": "Use a pediatric reference and a formulation the child can take, not a relative's AF dose"
        },
        {
          "id": "b",
          "text": "Adult NVAF dose-reduction criteria, age, weight, and serum creatinine, are the pediatric VTE rule"
        },
        {
          "id": "c",
          "text": "Doubling the adult dose is appropriate because children clear every anticoagulant faster"
        },
        {
          "id": "d",
          "text": "Aspirin replaces anticoagulation for pediatric VTE because injections are inconvenient for a child"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A keeps the decision in pediatric dosing references and an appropriate formulation, coordinated with a pediatric clinician. Adult AF criteria are not a child's VTE rule. Choice B transplants the apixaban 2-of-3 AF rule. Choice C invents a double dose. Choice D substitutes aspirin. U.S. labeling now has pediatric VTE dosing by weight (by age and weight for dabigatran pellets) with child-appropriate formulations for apixaban (tablets for oral suspension and sprinkle capsules), rivaroxaban (oral suspension, studied in EINSTEIN Junior), and dabigatran (oral pellets, studied in DIVERSITY); none uses a split adult AF tablet. No milligram amount is stated.",
      "teachingPoints": [
        "Adult AF doses are not a pediatric VTE schedule.",
        "Formulation and a pediatric reference come before any tablet is split."
      ],
      "links": [],
      "objectiveIds": [
        26
      ]
    },
    {
      "id": "ii-22",
      "domainId": "II",
      "difficulty": "advanced",
      "stem": "A 66-year-old man on warfarin for NVAF, INR 2.4 yesterday, needs extraction of one molar. The dentist can use local hemostatic measures and does not require a hold. There is no mechanical valve and no recent VTE. The patient expects heparin injections for five days around the visit. Which assessment fits?",
      "choices": [
        {
          "id": "a",
          "text": "BRIDGE requires a heparin bridge for every dental extraction in a patient with AF"
        },
        {
          "id": "b",
          "text": "Minor dental work can stay on warfarin with local hemostasis, without routine bridging"
        },
        {
          "id": "c",
          "text": "The INR must be driven below 1.2 with vitamin K before any dental instrument is used"
        },
        {
          "id": "d",
          "text": "Warfarin is stopped for 7 days and a DOAC is substituted for that one dental visit only"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the 2022 ACCP (CHEST) perioperative guideline, which suggests continuing a VKA with a prohemostatic agent for minor dental procedures, and a heparin bridge is not routine. BRIDGE, in a broader elective-procedure AF population, likewise does not support routine bridging. Choice A misreads BRIDGE. Choice C aims for a normal INR with vitamin K for a minor extraction. Choice D invents a one-visit DOAC. The stem states that the dentist can provide local hemostasis.",
      "teachingPoints": [
        "Ask whether interruption is required at all.",
        "A molar extraction with local hemostasis is not an automatic bridge."
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
      "stem": "A clinician is deciding on a heparin bridge for two elective holds. Patient A has typical NVAF, no prior stroke, and a colonoscopy. Patient B has a mechanical mitral valve and a major abdominal operation. Neither is bleeding. Which competing risks decide whether bridging fits?",
      "choices": [
        {
          "id": "a",
          "text": "Only the procedure's convenience, because thrombotic risk is the same for both of these patients"
        },
        {
          "id": "b",
          "text": "Only the patient's preference for injections, because the bleed risk of the bridge itself can be ignored"
        },
        {
          "id": "c",
          "text": "Thrombotic risk of the hold, bleed risk of the procedure, and bleed risk of the bridge"
        },
        {
          "id": "d",
          "text": "A normal hemoglobin, which permits a heparin bridge for every warfarin interruption"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the three-way balance. Patient A is the BRIDGE population: arterial thromboembolism was similar and major bleeding was higher with bridging (1.3% versus 3.2% on this site), so routine bridging does not fit. Patient B's mechanical mitral valve was not that population, and interruption planning is risk-stratified with the valve team rather than copied from BRIDGE. Choice A equates the patients. Choice B ignores bridge bleeding. Choice D uses hemoglobin as a bridge permit. Source: BRIDGE and this site's contrast with mechanical valves.",
      "teachingPoints": [
        "BRIDGE's no-routine-bridge finding is an AF finding.",
        "A mechanical mitral valve is a higher thrombotic-risk hold."
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
      "difficulty": "advanced",
      "stem": "A 42-year-old woman with antiphospholipid syndrome and a lupus anticoagulant is on warfarin after an arterial stroke. The INR has been erratic, and the laboratory warns that the lupus anticoagulant may be prolonging the prothrombin time. Chromogenic factor X activity is available. When is that assay the useful one?",
      "choices": [
        {
          "id": "a",
          "text": "Whenever a DOAC dose is being chosen, because chromogenic factor X sets the apixaban milligrams"
        },
        {
          "id": "b",
          "text": "Only during heparin therapy, because the assay is an anti-Xa test calibrated for enoxaparin"
        },
        {
          "id": "c",
          "text": "Never, because a lupus anticoagulant shortens the INR and cannot disturb warfarin monitoring"
        },
        {
          "id": "d",
          "text": "When a lupus anticoagulant makes the INR unreliable, factor X activity can reflect warfarin"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the niche: a lupus anticoagulant can prolong the prothrombin time and make the INR a poor guide to warfarin intensity, and a chromogenic factor X assay measures factor X activity without depending on that clot-based interference. Choice A uses it as a DOAC dosing calculator. Choice B confuses it with an LMWH anti-Xa level. Choice C says the inhibitor shortens the INR. Source: laboratory practice for warfarin monitoring in lupus anticoagulant–positive patients. No target activity percent is stated.",
      "teachingPoints": [
        "The INR can be the wrong yardstick in a lupus anticoagulant.",
        "Chromogenic factor X is not a DOAC dose table."
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
      "difficulty": "advanced",
      "stem": "A point-of-care INR is 4.8. A venous INR drawn an hour later is 2.6 and matches the last three weekly results. The operator then notices that morning's quality control was skipped. The patient has no bleeding and is due for a warfarin dose. Which understanding of the disagreement is sound?",
      "choices": [
        {
          "id": "a",
          "text": "Do not dose from the unchecked fingerstick; use the venous INR that fits the recent trend"
        },
        {
          "id": "b",
          "text": "The higher fingerstick is always right, because capillary blood is more sensitive than venous plasma"
        },
        {
          "id": "c",
          "text": "Average the two INRs and give vitamin K for a blended INR of about 3.7 with no bleeding"
        },
        {
          "id": "d",
          "text": "A skipped quality control makes the same-day venous laboratory INR invalid as well"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the operations rule: a point-of-care result without required quality control is not used for a dose, especially when it disagrees with a same-day venous INR and the recent trend. Choice B privileges the fingerstick. Choice C averages in a failed result and adds vitamin K for a value that is not a major-bleed INR. Choice D throws out the venous assay because a meter check was missed. Source: point-of-care INR quality practice.",
      "teachingPoints": [
        "Failed or skipped quality control removes the meter result from the dosing decision.",
        "A venous INR that matches the trend is the result to document."
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
      "stem": "A 70-year-old man with AF and a drug-eluting stent placed 3 weeks ago is still taking apixaban, clopidogrel, and aspirin. He has had no ischemic event and no bleeding. Stent placement was uncomplicated. Kidney function is stable. Which de-escalation fits the balance of stent and bleeding risk?",
      "choices": [
        {
          "id": "a",
          "text": "Continue all three drugs until month 12, because any earlier aspirin stop causes stent thrombosis"
        },
        {
          "id": "b",
          "text": "Stop aspirin and continue the labeled DOAC plus clopidogrel, rather than stopping the anticoagulant"
        },
        {
          "id": "c",
          "text": "Stop apixaban and clopidogrel and continue aspirin alone, because the stent is now 'stable'"
        },
        {
          "id": "d",
          "text": "Replace the regimen with rivaroxaban 2.5 mg twice daily plus aspirin"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the AUGUSTUS-era de-escalation: aspirin is limited to a brief peri-PCI window, and the oral anticoagulant plus a P2Y12 inhibitor continues. At 3 weeks an uncomplicated stent is past that brief window for most such patients. Choice A locks in a year of triple therapy. Choice C drops the AF drug. Choice D substitutes a vascular dose. Source: AUGUSTUS and this site's AF-plus-PCI pathway.",
      "teachingPoints": [
        "Aspirin is the usual drug to drop. The anticoagulant stays.",
        "Week 3 is not a reason to restart a year of triple therapy."
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
      "difficulty": "advanced",
      "stem": "A 64-year-old woman with cancer-associated femoral DVT has platelets of 28 × 10⁹/L after chemotherapy. She is not bleeding. Creatinine clearance is 70 mL/min. Yesterday's full-dose apixaban is due for refill. There is no esophageal lesion. Which influence of this blood count is the sound one?",
      "choices": [
        {
          "id": "a",
          "text": "Refill the full acute lead-in automatically, because platelets do not affect anticoagulant intensity"
        },
        {
          "id": "b",
          "text": "Transfuse platelets until the count exceeds 150 × 10⁹/L and only then allow any anticoagulant"
        },
        {
          "id": "c",
          "text": "Pause the automatic refill and make the intensity decision with oncology or hematology at this count"
        },
        {
          "id": "d",
          "text": "Switch to warfarin and aim for an INR above 4, because thrombocytopenia requires a higher target"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C refuses an automatic full-dose refill when platelets are 28 × 10⁹/L. Full-intensity anticoagulation at that count is a bleeding problem, and the adjustment belongs with the oncology and hematology clinicians rather than with a default refill or a homemade INR target. Choice A ignores the count. Choice B sets an unsupported transfusion goal of 150 × 10⁹/L before any anticoagulation. Choice D raises the INR. Source: cancer-VTE practice of individualizing intensity when platelets are very low. No single cutoff is declared as a universal rule.",
      "teachingPoints": [
        "A very low platelet count blocks autopilot refills.",
        "The specialist decision is not a higher INR target."
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
      "difficulty": "advanced",
      "stem": "A patient on anticoagulation is transferring from the hospital to a skilled-nursing facility tonight. The draft handoff says only 'blood thinner, see home meds.' The chart shows apixaban started yesterday for a new PE, a creatinine clearance of 28 mL/min, and a hemoglobin drop being watched. Which content is the important handoff?",
      "choices": [
        {
          "id": "a",
          "text": "The pharmacy phone number alone, without the drug, the indication, or the creatinine clearance"
        },
        {
          "id": "b",
          "text": "A statement that all anticoagulants are held on arrival at every skilled-nursing facility"
        },
        {
          "id": "c",
          "text": "The patient's preferred tablet color, which replaces both the dose and the indication"
        },
        {
          "id": "d",
          "text": "Drug, indication, last doses, clearance, the hemoglobin concern, and who decides next"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is a usable handoff: the agent, why it was started, where in the course the patient is, kidney function that may change eligibility, active bleeding concern, and a named owner. Choice A omits the clinical content. Choice B holds every anticoagulant by policy. Choice C substitutes appearance for the regimen. Source: transitions-of-care standard for anticoagulants.",
      "teachingPoints": [
        "Indication plus kidney function prevents a blind continuation.",
        "A hemoglobin drop needs an owner, not a one-line slogan."
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
      "stem": "Which of these situations is the specific role of idarucizumab, rather than a general hemostatic measure?",
      "choices": [
        {
          "id": "a",
          "text": "Life-threatening bleeding on dabigatran, with the 5 g intravenous dose studied in RE-VERSE AD"
        },
        {
          "id": "b",
          "text": "An elective tooth cleaning next month in a patient on apixaban who is anxious about bleeding"
        },
        {
          "id": "c",
          "text": "A therapeutic INR of 2.5 on warfarin with no bleeding before a routine clinic visit"
        },
        {
          "id": "d",
          "text": "Stable rivaroxaban use the day before a low-bleeding-risk skin biopsy that may not need a hold"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the indication RE-VERSE AD studied: idarucizumab 5 g intravenous for dabigatran when there is life-threatening bleeding or emergency surgery. Choice B uses it for anxiety before a minor procedure on the wrong drug. Choice C treats a therapeutic warfarin INR. Choice D is a possible no-hold factor Xa case, not a dabigatran reversal. Source: RE-VERSE AD and the idarucizumab label.",
      "teachingPoints": [
        "The antibody is for dabigatran, in bleeding or emergency surgery.",
        "It is not a calming measure before a minor procedure."
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
      "difficulty": "advanced",
      "stem": "A 73-year-old woman on warfarin for a mechanical mitral valve has hematemesis, heart rate 122 beats per minute, and blood pressure 82/50 mm Hg. INR is 6.4. Hemoglobin fell from 12 to 7 g/dL. She has not taken a DOAC. Which bundle fits this VKA bleed rather than a DOAC plan?",
      "choices": [
        {
          "id": "a",
          "text": "Idarucizumab, because a high INR means a thrombin inhibitor is on board"
        },
        {
          "id": "b",
          "text": "4F-PCC plus vitamin K, the warfarin major-bleed bundle, with the valve indication revisited after hemostasis"
        },
        {
          "id": "c",
          "text": "Andexanet alfa, because factor Xa reversal covers vitamin K antagonists"
        },
        {
          "id": "d",
          "text": "Oral vitamin K alone at home, because major gastrointestinal bleeding can wait for the INR to drift down"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the 2020 ACC expert consensus pathway cited on this site: 4-factor PCC plus vitamin K for warfarin-associated major bleeding. The mechanical valve means a later restart is a named decision, not an afterthought. Choice A uses dabigatran's antibody. Choice C uses a factor Xa agent that is also withdrawn in the United States. Choice D sends an unstable bleed home. Source: 2020 ACC expert consensus decision pathway on bleeding with oral anticoagulants, as cited on this site's reversal page. No unit-per-kilogram dose is stated.",
      "teachingPoints": [
        "Warfarin major bleeding is 4F-PCC plus vitamin K.",
        "The valve is why restart planning stays on the problem list."
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
      "stem": "A 69-year-old man on rivaroxaban 20 mg daily has ongoing melena, heart rate 118 beats per minute, and systolic blood pressure 86 mm Hg in a United States emergency department. He last took rivaroxaban 6 hours ago. Hemoglobin is 6.8 g/dL. Which strategy matches current site teaching for life-threatening factor Xa bleeding?",
      "choices": [
        {
          "id": "a",
          "text": "Andexanet alfa, because ANNEXA-I makes it the present United States standard"
        },
        {
          "id": "b",
          "text": "Idarucizumab 5 g, because rivaroxaban and dabigatran share that antibody"
        },
        {
          "id": "c",
          "text": "Supportive care plus the institutional 4F-PCC pathway, not andexanet after the December 2025 withdrawal"
        },
        {
          "id": "d",
          "text": "Vitamin K and a two-day clinic follow-up, because gastrointestinal blood is minor if the patient can speak"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is this site's United States teaching after 22 December 2025: Andexxa is withdrawn, and life-threatening factor Xa inhibitor bleeding is supportive care plus institutional 4F-PCC, an off-label pathway rather than a labeled specific antidote. Choice A orders the withdrawn drug. Choice B uses dabigatran's antibody. Choice D under-calls shock and melena. ANNEXA-I remains the trial that showed a thrombosis tradeoff and is not a current order set. Source: FDA safety communication as used on this site.",
      "teachingPoints": [
        "Rivaroxaban is a factor Xa inhibitor, not dabigatran.",
        "Shock and ongoing melena are major bleeding, not a clinic follow-up."
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
      "difficulty": "advanced",
      "stem": "A 57-year-old man with acute PE can take either apixaban or rivaroxaban. He had a gastrointestinal bleed a year ago that did not require transfusion. Creatinine clearance is 80 mL/min. He can take tablets with food. How can COBRRA inform the choice without over-reading it?",
      "choices": [
        {
          "id": "a",
          "text": "COBRRA proved rivaroxaban prevents more recurrent VTE, so the old bleed history is set aside now"
        },
        {
          "id": "b",
          "text": "COBRRA used a placebo comparator, so it cannot say anything about two active DOACs"
        },
        {
          "id": "c",
          "text": "COBRRA requires the COMPASS 2.5 mg rivaroxaban dose for every acute PE"
        },
        {
          "id": "d",
          "text": "Less clinically relevant bleeding with apixaban, and similar recurrent VTE, can favor apixaban"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D uses COBRRA as this site reports it: clinically relevant bleeding 3.3% with apixaban versus 7.1% with rivaroxaban, and recurrent symptomatic VTE 1.1% versus 1.0%. That supports a bleeding-sensitive shared choice. It does not ban rivaroxaban when apixaban is unsuitable, and it does not change the labeled regimens. Choice A invents an efficacy advantage. Choice B calls the comparator placebo. Choice C imports the vascular dose. Source: COBRRA card.",
      "teachingPoints": [
        "The primary contrast is bleeding, not a recurrence win.",
        "Both labeled acute regimens remain legitimate."
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
      "stem": "A 60-year-old man with a mechanical mitral valve needs elective open hernia repair that the surgeon classifies as high bleeding risk. He has been on warfarin, INR 3.0. A colleague says BRIDGE proved no one needs heparin around a warfarin hold, and suggests stopping warfarin for 5 days with no further plan. Which planning statement fits the prosthesis?",
      "choices": [
        {
          "id": "a",
          "text": "Do not copy the AF no-bridge default onto a mechanical mitral valve; plan the hold with the valve team"
        },
        {
          "id": "b",
          "text": "BRIDGE enrolled this mechanical valve, so skipping heparin is the proven mitral strategy"
        },
        {
          "id": "c",
          "text": "Stop warfarin permanently and start apixaban on the morning of the hernia repair"
        },
        {
          "id": "d",
          "text": "Continue warfarin straight through open hernia repair because no mechanical valve is ever interrupted now"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A keeps mechanical mitral valves outside BRIDGE. The trial excluded mechanical valves, and this site treats mitral prostheses as a higher thrombotic-risk class whose interruption is protocolized with the valve clinicians rather than defaulted to 'no heparin.' Choice B claims the trial included the valve. Choice C starts a DOAC, which RE-ALIGN-era mechanical-valve teaching rejects. Choice D says a high-bleed operation never interrupts warfarin. No heparin dose or stop-day count is printed. Source: BRIDGE exclusion and this site's valve-versus-AF contrast.",
      "teachingPoints": [
        "BRIDGE's population was AF without mechanical valves.",
        "A mitral prosthesis needs its own interruption plan."
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
      "difficulty": "advanced",
      "stem": "A 52-year-old man finished 6 months of anticoagulation for a first proximal DVT. The record calls it unprovoked. Before anyone agrees to extend therapy, which review is the one that changes the decision?",
      "choices": [
        {
          "id": "a",
          "text": "Only the calendar, because the word 'unprovoked' forbids any questions about cancer, bleeding, or adherence"
        },
        {
          "id": "b",
          "text": "Confirm it was unprovoked, and review bleeding risk, adherence, and kidney function before extending"
        },
        {
          "id": "c",
          "text": "A mandatory inferior vena cava filter, which replaces the whole extension decision"
        },
        {
          "id": "d",
          "text": "Restarting the acute 7-day apixaban lead-in, which is what extension means"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the pre-extension review. An event labeled unprovoked still needs a check for a missed provoking factor or cancer, a bleeding assessment, adherence, and renal eligibility, because the 2021 CHEST VTE guideline reserves extended therapy for patients whose recurrence risk outweighs bleeding. Choice A treats the label as self-sufficient. Choice C inserts a filter; PREPIC2 does not support routine filters on top of anticoagulation. Choice D restarts acute lead-in dosing. Source: 2021 CHEST VTE duration guidance.",
      "teachingPoints": [
        "Extension is a decision, not an automatic anniversary.",
        "Confirm the provocation story before promising indefinite therapy."
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
      "difficulty": "advanced",
      "stem": "A 78-year-old woman has been on rivaroxaban 20 mg daily with the evening meal for AF. She now weighs 64 kg and her serum creatinine is 1.2 mg/dL, up from 0.8 mg/dL last year. She takes no inducer and has no mechanical valve. Why does today's kidney function change the regimen assessment?",
      "choices": [
        {
          "id": "a",
          "text": "Rivaroxaban AF dosing ignores creatinine clearance, so 20 mg remains mandatory at any clearance"
        },
        {
          "id": "b",
          "text": "Serum creatinine of 1.2 mg/dL meets apixaban's two-criterion rule and is why rivaroxaban is stopped"
        },
        {
          "id": "c",
          "text": "Clearance is now about 39 mL/min, and the AF label uses 15 mg daily with the evening meal in that range"
        },
        {
          "id": "d",
          "text": "Clearance above 30 mL/min means the COMPASS 2.5 mg dose replaces full AF treatment"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the label consequence. Creatinine clearance = (140−78)×64×0.85/(72×1.2) = 39 mL/min. The U.S. XARELTO AF regimen is 20 mg daily with the evening meal when clearance is above 50 mL/min and 15 mg daily with the evening meal when clearance is 50 mL/min or less. Choice A freezes last year's dose. Choice B applies apixaban's serum creatinine criterion to a different drug; one laboratory value is not two apixaban criteria anyway. Choice D substitutes a vascular dose for AF. Source: U.S. XARELTO prescribing information, atrial fibrillation dosage. The label notes that ROCKET AF gave 15 mg at clearance 30 to 50 mL/min; the label cut point is 50 mL/min.",
      "teachingPoints": [
        "Recompute clearance when creatinine moves. Do not reuse last year's 20 mg by habit.",
        "The evening meal requirement still applies to the 15 mg AF dose."
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
      "stem": "A discharge list uses rivaroxaban 2.5 mg twice daily plus aspirin for three different labels: 'stable CAD,' 'AF stroke prevention,' and 'acute DVT day 2.' Which indication cannot be covered by the COMPASS regimen?",
      "choices": [
        {
          "id": "a",
          "text": "Stable CAD with no AF and no VTE, which is the population the COMPASS regimen studied"
        },
        {
          "id": "b",
          "text": "Stable PAD with no indication for full anticoagulation, another COMPASS-type population"
        },
        {
          "id": "c",
          "text": "Stable CAD together with PAD, with no AF and no VTE, also inside COMPASS enrollment"
        },
        {
          "id": "d",
          "text": "AF stroke prevention and acute DVT treatment, which need full anticoagulation, not 2.5 mg"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D names the mismatch. COMPASS studied rivaroxaban 2.5 mg twice daily plus aspirin in stable atherosclerotic disease and excluded patients who needed full-dose anticoagulation. AF treatment doses and acute VTE lead-in doses are different regimens on this site. Choices A, B, and C describe stable CAD, PAD, or both without an indication for full anticoagulation, the populations COMPASS enrolled. Source: COMPASS and this site's vascular-dose framework.",
      "teachingPoints": [
        "Write the indication before copying 2.5 mg.",
        "AF and acute VTE are full-dose problems."
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
      "difficulty": "advanced",
      "stem": "A 74-year-old man is newly prescribed apixaban 5 mg twice daily. He already forgets a once-daily vitamin. He lives alone, reads well, and has a phone. Which adherence plan actually matches a twice-daily drug?",
      "choices": [
        {
          "id": "a",
          "text": "Tell him twice daily is 'basically once daily' so he can take both tablets together at breakfast"
        },
        {
          "id": "b",
          "text": "Tie each dose to a daily event he never skips, and use teach-back to check which two events he named"
        },
        {
          "id": "c",
          "text": "Switch the prescription to every other day so the bottle lasts longer and adherence looks better"
        },
        {
          "id": "d",
          "text": "Rely on one sentence in the visit, with no reminder and no check that he can state both dose times now"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B builds two cues into an existing day and verifies them. Twice-daily DOACs fail when the second dose has no cue. Choice A collapses the schedule. Choice C changes the dose to stretch the bottle, which underdoses him. Choice D stops at information. Source: adherence support for twice-daily regimens.",
      "teachingPoints": [
        "A twice-daily drug needs two cues, not a slogan.",
        "Teach-back confirms the cues he actually named."
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
      "difficulty": "advanced",
      "stem": "A patient with limited health literacy is starting warfarin. The after-visit summary is four pages of unedited jargon, including 'titrate to a target international normalized ratio.' He cannot read it back. Which adaptation is the useful one?",
      "choices": [
        {
          "id": "a",
          "text": "Speak faster and add a second jargon sheet so more information is delivered in the same visit"
        },
        {
          "id": "b",
          "text": "Ask 'do you understand?' and accept a nod as proof that the warfarin plan is clear"
        },
        {
          "id": "c",
          "text": "Short words, a tablet plan, and teach-back of a missed dose and of bleeding that needs a call"
        },
        {
          "id": "d",
          "text": "Have him sign the long summary, which documents understanding even if he cannot explain the plan"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C adapts the counseling: plain language, a concrete dose plan, and a check that he can say what a miss and what bleeding mean. Choice A adds density. Choice B accepts a nod. Choice D treats a signature as comprehension. Source: health-literacy methods, including teach-back.",
      "teachingPoints": [
        "Plain language plus a restatement beats a longer packet.",
        "A signature is not teach-back."
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
      "stem": "A woman on warfarin asks whether she must drop all salads because her INR was 1.6 once after a holiday week of eating far more leafy greens than usual. Her usual diet is one small salad most days, and the INR is otherwise stable. Which explanation is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Any salad is prohibited from now on, including the small daily one that matched a stable INR"
        },
        {
          "id": "b",
          "text": "She should binge on greens the day before each INR so the test looks controlled"
        },
        {
          "id": "c",
          "text": "Vitamin K foods do not affect warfarin, so the holiday intake is irrelevant"
        },
        {
          "id": "d",
          "text": "Keep the usual small salad; the problem was the sudden large change, not the presence of vegetables"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D separates a consistent vitamin K intake, which her stable INRs reflect, from a holiday jump in intake, which can lower the INR. Choice A bans the pattern that was working. Choice B prescribes a binge. Choice C denies the interaction. One low INR after a high-intake week is explained by the change, not by the usual small salad. Source: warfarin diet counseling.",
      "teachingPoints": [
        "Teach consistency, not a permanent ban.",
        "One high-intake week is not a reason to eliminate the usual pattern."
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
      "difficulty": "advanced",
      "stem": "A patient on apixaban asks which bleeding can wait for a routine refill call and which needs urgent assessment. He mentions black stools, a mild paper cut, and a headache after hitting his head on a cabinet with subsequent drowsiness. Which grouping is the urgent one?",
      "choices": [
        {
          "id": "a",
          "text": "Black stools, and head impact followed by drowsiness, need urgent assessment; a stopped paper cut does not"
        },
        {
          "id": "b",
          "text": "A paper cut is the urgent finding, while black stools can wait because they are expected on a DOAC"
        },
        {
          "id": "c",
          "text": "Drowsiness after head impact can wait for the next INR, because apixaban is monitored that way"
        },
        {
          "id": "d",
          "text": "No bleeding symptom is urgent unless an INR is already known to be above 4"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A separates nuisance bleeding from signs of gastrointestinal or intracranial bleeding. Melena and progressive symptoms after head impact are urgent. A paper cut that has stopped is not. Choice B reverses the urgency. Choice C waits on an INR that does not monitor apixaban. Choice D requires an INR threshold for a DOAC emergency. Source: bleeding-precaution counseling.",
      "teachingPoints": [
        "Melena and neurologic change after head impact are urgent.",
        "A stopped paper cut is the comparison case, not the emergency."
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
      "difficulty": "advanced",
      "stem": "After a visit about OAC for NVAF, the note says only 'DOAC discussed, patient agreeable.' The clinician had actually covered stroke risk, bleeding risk, a warfarin alternative, and who to call for bleeding. The patient chose apixaban. Which record matches what a later clinician needs?",
      "choices": [
        {
          "id": "a",
          "text": "The single word 'agreeable,' because shared decision-making is a mood, not a clinical note"
        },
        {
          "id": "b",
          "text": "Indication, options discussed, risks named, the choice made, and the follow-up or bleeding plan"
        },
        {
          "id": "c",
          "text": "The drug name only, because the conversation cannot be documented without an audio recording"
        },
        {
          "id": "d",
          "text": "A statement that aspirin was selected, which does not match the apixaban choice from the visit"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the record of a shared decision: why anticoagulation was discussed, which options were on the table, which harms were named, what was chosen, and what happens next. Choice A keeps a mood word. Choice C claims the talk cannot be written down. Choice D documents a drug that was not chosen. Source: shared-decision documentation for AF anticoagulation, including the intermediate-risk context SINGLE-AF studied, where the note matters even more.",
      "teachingPoints": [
        "Write the choice and the alternatives, not only that the patient seemed agreeable.",
        "A later clinician should be able to see why apixaban, not aspirin, was chosen."
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
      "stem": "A missed-dose handout says the same thing for every anticoagulant. One reader is in week 1 of rivaroxaban for acute DVT (15 mg twice daily). Another is on rivaroxaban 20 mg daily for AF. A third missed warfarin last night. Why does one class-wide sentence fail?",
      "choices": [
        {
          "id": "a",
          "text": "Because all three regimens use the same 'take two tonight' rule, so the handout is efficient and correct"
        },
        {
          "id": "b",
          "text": "Because warfarin and rivaroxaban are both monitored with anti-Xa, so the miss is identical"
        },
        {
          "id": "c",
          "text": "Because the 15 mg twice-daily lead-in, the 20 mg daily dose, and warfarin do not share one catch-up rule"
        },
        {
          "id": "d",
          "text": "Because a missed dose is ignored for every anticoagulant until the next clinic month"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is why the handout has to name the drug. During the rivaroxaban 15 mg twice-daily lead-in, the label allows a same-day catch-up so the daily total stays 30 mg, which can mean two 15 mg tablets together. That instruction is not the 20 mg once-daily AF rule, and it is not a reason to double warfarin. Choice A universalizes the lead-in. Choice B invents anti-Xa monitoring for warfarin. Choice D ignores misses. Source: XARELTO missed-dose labeling versus warfarin counseling.",
      "teachingPoints": [
        "The lead-in catch-up is real and easy to misapply.",
        "Warfarin is not caught up by doubling."
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
      "stem": "A patient with NVAF and a CHA₂DS₂-VASc score of 4 takes carbamazepine for seizures. The proposed anticoagulant is apixaban 5 mg twice daily. Kidney function would otherwise fit that dose. Which interaction concern dominates?",
      "choices": [
        {
          "id": "a",
          "text": "Carbamazepine inhibits apixaban metabolism, so the 5 mg dose becomes an overdose"
        },
        {
          "id": "b",
          "text": "Carbamazepine induces clearance and the label avoids apixaban with this strong inducer"
        },
        {
          "id": "c",
          "text": "Carbamazepine only interacts with warfarin, so the DOAC needs no review"
        },
        {
          "id": "d",
          "text": "The interaction is solved by adding aspirin 81 mg"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the ELIQUIS label: carbamazepine is named among strong combined CYP3A4 and P-glycoprotein inducers to avoid, because exposure falls and efficacy can fail. Choice A reverses the direction. Choice C limits interactions to warfarin. Choice D adds an antiplatelet. Stopping carbamazepine is a neurology decision and is not required to identify the problem. Source: ELIQUIS interactions.",
      "teachingPoints": [
        "An inducer makes a textbook AF dose too small.",
        "Aspirin does not replace lost anticoagulant exposure."
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
      "stem": "A patient on apixaban 5 mg twice daily for AF develops a fungal infection and is prescribed oral ketoconazole. He is not on a reduced dose. Clearance is normal. How can this antifungal change the anticoagulant plan?",
      "choices": [
        {
          "id": "a",
          "text": "Ketoconazole induces apixaban clearance, so the 5 mg dose is doubled while the azole is on board"
        },
        {
          "id": "b",
          "text": "Azole antifungals have no effect on P-glycoprotein or on CYP3A4, so the dose is unchanged"
        },
        {
          "id": "c",
          "text": "Ketoconazole is a strong combined inhibitor; the label halves 5 mg and avoids an existing 2.5 mg dose"
        },
        {
          "id": "d",
          "text": "The fix is to add rivaroxaban 20 mg, because two factor Xa inhibitors cancel an azole interaction"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the ELIQUIS strong-inhibitor rule. Combined strong CYP3A4 and P-glycoprotein inhibitors such as ketoconazole raise exposure. If the patient is on 5 mg or 10 mg twice daily, the labeled response is a 50 percent dose reduction. If the patient is already on 2.5 mg twice daily, the combination is avoided. This patient is on 5 mg, so the interaction is a reduction question, not a doubling and not a second DOAC. Choice A describes induction. Choice B denies the effect. Choice D stacks factor Xa inhibitors. Source: ELIQUIS dose modification with strong dual inhibitors.",
      "teachingPoints": [
        "Inhibition raises exposure. The label's response is a lower dose or avoidance.",
        "Do not add a second factor Xa inhibitor."
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
      "difficulty": "advanced",
      "stem": "A patient bleeds on warfarin. A learner says warfarin 'directly blocks circulating thrombin the way dabigatran does,' so the effect should end when the tablet wears off in a few hours. Which process is the accurate one?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin directly occupies thrombin's active site and is gone within one dosing interval"
        },
        {
          "id": "b",
          "text": "Warfarin raises vitamin K recycling, which is why the INR falls after the very first dose"
        },
        {
          "id": "c",
          "text": "Warfarin blocks the platelet P2Y12 receptor and has no effect on clotting-factor synthesis now"
        },
        {
          "id": "d",
          "text": "Warfarin blocks vitamin K epoxide reductase, so new factors II, VII, IX, and X are not made"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the mechanism. Warfarin inhibits vitamin K epoxide reductase, so gamma-carboxylation of factors II, VII, IX, and X and of proteins C and S fails. Circulating factors persist until they are cleared, which is why the offset takes days and why vitamin K, not a short washout, is part of reversal. Choice A describes dabigatran. Choice B reverses the enzyme effect. Choice C describes a P2Y12 inhibitor. Source: warfarin mechanism.",
      "teachingPoints": [
        "Warfarin does not neutralize factors already in the blood.",
        "That is why the offset is slower than a DOAC's."
      ],
      "links": [],
      "objectiveIds": [
        63
      ]
    },
    {
      "id": "iv-17",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "Two patients are anticoagulated. One is on a fixed dose of apixaban. The other is on an intravenous unfractionated heparin infusion after a bolus. Only the infusion has a nursing protocol for repeated clotting times. Why does that drug, and not the DOAC, commonly need that monitoring?",
      "choices": [
        {
          "id": "a",
          "text": "Heparin's effect is variable and short, so a protocolized clotting time adjusts the infusion"
        },
        {
          "id": "b",
          "text": "Apixaban is adjusted to that same clotting time every 6 hours, just like the heparin infusion"
        },
        {
          "id": "c",
          "text": "Heparin has a 3-day half-life, so the infusion is monitored once a month, the way warfarin is"
        },
        {
          "id": "d",
          "text": "The infusion is monitored because heparin directly inhibits vitamin K epoxide reductase"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the pharmacology. Unfractionated heparin binds variably to plasma proteins, has a short half-life, and is adjusted with an activated partial thromboplastin time or anti-Xa protocol. Apixaban is a fixed oral dose within its label rules and is not titrated to a clotting time. Choice B applies the protocol to apixaban. Choice C assigns heparin a warfarin-like half-life. Choice D assigns warfarin's target. Source: unfractionated heparin pharmacokinetics.",
      "teachingPoints": [
        "Variable protein binding and a short half-life are why the protocol exists.",
        "A DOAC's label dose is not retitrated each shift."
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
      "stem": "A patient with a history of heparin-induced thrombocytopenia needs a parenteral anticoagulant. Fondaparinux is mentioned. A learner calls it 'an oral factor Xa inhibitor like apixaban, so idarucizumab reverses it.' Which distinction is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Fondaparinux is an oral direct thrombin inhibitor, in the same class as dabigatran"
        },
        {
          "id": "b",
          "text": "A parenteral pentasaccharide: it inhibits factor Xa through antithrombin and has no specific antidote"
        },
        {
          "id": "c",
          "text": "Fondaparinux is reversed completely by protamine, in the same way a full heparin dose is neutralized"
        },
        {
          "id": "d",
          "text": "Fondaparinux blocks platelets and is monitored and dose-adjusted with the INR"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches fondaparinux: a synthetic pentasaccharide given parenterally, antithrombin-dependent factor Xa inhibition, no direct thrombin effect, and, as this site quotes from the Arixtra overdosage text, no known antidote. Protamine is not its reversal. Choice A calls it oral dabigatran. Choice C promises complete protamine reversal. Choice D assigns an INR and a platelet target. Source: Arixtra overdosage statement on this site.",
      "teachingPoints": [
        "It is not a DOAC and not dabigatran.",
        "No specific antidote is the label statement."
      ],
      "links": [],
      "objectiveIds": [
        63
      ]
    },
    {
      "id": "iv-19",
      "domainId": "IV",
      "difficulty": "advanced",
      "stem": "A patient starts dabigatran etexilate. The capsule is swallowed whole. A learner says the capsule already contains active thrombin inhibitor and that opening it is a reasonable adherence plan. What does the prodrug status mean?",
      "choices": [
        {
          "id": "a",
          "text": "The capsule already contains active dabigatran, and opening it does not change absorption"
        },
        {
          "id": "b",
          "text": "The drug is activated by CYP3A4, so systemic ketoconazole is required before any effect appears"
        },
        {
          "id": "c",
          "text": "Etexilate is a prodrug that becomes dabigatran after absorption; capsules stay closed"
        },
        {
          "id": "d",
          "text": "The prodrug blocks platelets directly and never becomes a thrombin inhibitor at all"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the prodrug fact. Dabigatran etexilate is hydrolyzed to dabigatran, a direct thrombin inhibitor. It is a P-glycoprotein substrate and not a CYP3A4 substrate. Capsules are swallowed whole in ordinary use, which is why a weekly organizer or a sprinkle plan is the wrong adherence fix. Choice A says the capsule is already the active drug and may be opened. Choice B requires ketoconazole. Choice D keeps it a platelet drug. Source: PRADAXA clinical pharmacology.",
      "teachingPoints": [
        "Etexilate is not the active thrombin inhibitor.",
        "P-glycoprotein, not CYP3A4, is the relevant transport issue."
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
      "stem": "Two acute VTE orders are side by side. One starts rivaroxaban 15 mg twice daily today. The other starts edoxaban 60 mg today with no heparin. Both patients have normal kidneys and weigh more than 60 kg. Which sequence distinguishes the edoxaban program?",
      "choices": [
        {
          "id": "a",
          "text": "Both drugs require the same 7-day lead-in of 10 mg twice daily before any maintenance dose"
        },
        {
          "id": "b",
          "text": "Edoxaban is oral-only from the first hour, and rivaroxaban is the one that requires 5 days of heparin"
        },
        {
          "id": "c",
          "text": "Both require an INR of at least 2 before the first tablet of either drug is given"
        },
        {
          "id": "d",
          "text": "Edoxaban in Hokusai-VTE followed at least 5 days of heparin; rivaroxaban in EINSTEIN did not"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the design difference on this site. Hokusai-VTE used heparin for at least 5 days, then edoxaban. EINSTEIN started rivaroxaban 15 mg twice daily without a parenteral lead-in. Choice A assigns both the apixaban lead-in. Choice B swaps the lead-in. Choice C doses both to an INR. Source: Hokusai-VTE and EINSTEIN regimens on this site.",
      "teachingPoints": [
        "Same indication, different first week.",
        "Edoxaban's oral dose comes after the parenteral days."
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
      "difficulty": "advanced",
      "stem": "A patient on apixaban adds daily ibuprofen and also, in a separate scenario, is prescribed ketoconazole. Both combinations can bleed. Which statement correctly sorts them?",
      "choices": [
        {
          "id": "a",
          "text": "Ibuprofen is a pharmacodynamic bleeding risk; ketoconazole is a pharmacokinetic rise in exposure"
        },
        {
          "id": "b",
          "text": "Both drugs raise apixaban exposure by the same strong CYP3A4 and P-glycoprotein mechanism"
        },
        {
          "id": "c",
          "text": "Ketoconazole is only a platelet problem, and ibuprofen is the strong CYP3A4 inhibitor of the pair"
        },
        {
          "id": "d",
          "text": "Neither added drug matters unless the INR on apixaban has already exceeded 3"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A sorts the mechanisms. Ibuprofen adds platelet dysfunction and gastrointestinal injury without being a combined strong CYP3A4 and P-glycoprotein inhibitor. Ketoconazole is that inhibitor and raises apixaban exposure, which is why the label changes the dose. Choice B gives them one mechanism. Choice C swaps them. Choice D waits for an INR. Source: pharmacodynamic versus pharmacokinetic interaction definitions, applied to the ELIQUIS label.",
      "teachingPoints": [
        "Ask whether the level changes or the hemostatic system changes.",
        "Both can bleed. The reason is not the same."
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
      "stem": "Three bleeding patients need a reversal discussion: one on intravenous unfractionated heparin, one on enoxaparin, and one on apixaban. Someone orders protamine for all three. How do the effects differ?",
      "choices": [
        {
          "id": "a",
          "text": "Protamine fully reverses all three drugs, including the apixaban bleed"
        },
        {
          "id": "b",
          "text": "Protamine neutralizes heparin, only partly reverses LMWH, and does not reverse a DOAC"
        },
        {
          "id": "c",
          "text": "Protamine reverses apixaban only, and it has no neutralizing effect on heparin in clinic"
        },
        {
          "id": "d",
          "text": "Protamine is vitamin K and therefore reverses warfarin rather than heparin"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches this site. Heparin labeling: about 1 mg of protamine neutralizes about 100 units of heparin, with a cap of 50 mg in any 10-minute period. Lovenox overdosage text: anti-factor Xa activity is never completely neutralized (maximum about 60%). Protamine is not a DOAC reversal. Choice A promises full reversal of apixaban. Choice C reverses the heparin effect. Choice D confuses protamine with vitamin K. Source: heparin and Lovenox labeling as quoted on this site.",
      "teachingPoints": [
        "Heparin, LMWH, and a DOAC are three different protamine problems.",
        "Partial is not complete, and none is not partial."
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
      "difficulty": "advanced",
      "stem": "An 80-year-old woman with NVAF weighs 72 kg. Serum creatinine is 1.3 mg/dL. She takes no interacting antifungal. A colleague prescribes apixaban 2.5 mg twice daily 'because she is 80 and the clearance looks modest.' Which principle distinguishes the labeled AF dose from that empiric reduction?",
      "choices": [
        {
          "id": "a",
          "text": "Any single labeled criterion, including age alone, is enough to select 2.5 mg twice daily"
        },
        {
          "id": "b",
          "text": "Creatinine clearance below 50 mL/min is itself the apixaban AF reduction rule"
        },
        {
          "id": "c",
          "text": "Only one of three criteria is met, so the AF dose stays 5 mg, not empiric 2.5 mg"
        },
        {
          "id": "d",
          "text": "Acute VTE dosing, 10 mg twice daily for 7 days, is required for every new AF prescription"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C counts the criteria. Age 80 or older is present. Weight 72 kg is not 60 kg or less. Serum creatinine 1.3 mg/dL is not 1.5 or higher. One criterion does not select 2.5 mg. Cockcroft-Gault clearance is about 39 mL/min, (140−80)×72×0.85/(72×1.3), and that number is the rivaroxaban-style fact, not the apixaban rule. Choice A reduces for age alone. Choice B imports the rivaroxaban cutoff. Choice D starts VTE lead-in dosing for AF. Source: ELIQUIS AF criteria as printed on this site.",
      "teachingPoints": [
        "Count to two. Age alone is not enough.",
        "A clearance near 40 mL/min does not replace the three AF criteria."
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
      "stem": "A patient on dabigatran, last dose 4 hours ago, needs emergency surgery. The INR is 1.2. The activated partial thromboplastin time is prolonged. A thrombin time is available but not yet drawn. Which interpretation is sound?",
      "choices": [
        {
          "id": "a",
          "text": "A normal INR clears dabigatran, so surgery proceeds as if no anticoagulant dose was taken"
        },
        {
          "id": "b",
          "text": "The INR is the therapeutic target for dabigatran and is raised with vitamin K before the incision"
        },
        {
          "id": "c",
          "text": "A prolonged activated partial thromboplastin time is a precise dabigatran concentration in ng/mL"
        },
        {
          "id": "d",
          "text": "A normal INR does not clear dabigatran, and waiting for a level should not delay urgent reversal"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the emergency reading. Dabigatran is not dosed by the INR. A thrombin time is highly sensitive to dabigatran and a normal thrombin time argues against an important on-board effect, but waiting for that tube does not delay reversal before emergency surgery, where idarucizumab is the specific agent. A prolonged activated partial thromboplastin time suggests an effect and is not a quantitative level. Choice A clears the drug with the INR. Choice B gives vitamin K. Choice C treats a clotting time as a concentration. Source: dabigatran laboratory interpretation and RE-VERSE AD.",
      "teachingPoints": [
        "The INR is the wrong clearance test.",
        "Do not wait on a send-out level while a life-threatening bleed continues."
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
      "difficulty": "advanced",
      "stem": "A 78-year-old man weighs 80 kg. Serum creatinine is 2.4 mg/dL. He needs treatment-dose enoxaparin for acute VTE. A prior order from last year, when his creatinine was 0.9 mg/dL, says 1 mg/kg every 12 hours. Which renal concern changes that order?",
      "choices": [
        {
          "id": "a",
          "text": "Clearance is about 29 mL/min, so the labeled treatment dose is 1 mg/kg once daily"
        },
        {
          "id": "b",
          "text": "Enoxaparin is cleared entirely by the liver, so the old twice-daily order continues at any creatinine"
        },
        {
          "id": "c",
          "text": "Clearance below 30 mL/min means the milligram dose is doubled to overcome uremia"
        },
        {
          "id": "d",
          "text": "The renal adjustment is an INR target of 2 to 3, not a change in the injection interval"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the accumulation issue. Cockcroft-Gault clearance is (140−78)×80/(72×2.4) = 29 mL/min. The U.S. Lovenox treatment label uses 1 mg/kg once daily, rather than 1 mg/kg every 12 hours, when creatinine clearance is below 30 mL/min. Choice B denies renal clearance. Choice C doubles the dose. Choice D substitutes an INR. Source: Lovenox renal dosage adjustment. This dose is a label fact and is not a table on this site.",
      "teachingPoints": [
        "Recompute clearance before copying last year's twice-daily order.",
        "Below 30 mL/min is a longer interval, not a bigger dose."
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
      "stem": "A patient on apixaban starts St John's wort for sleep. No other interacting drug is present. The AF dose otherwise fits his age, weight, and creatinine. Why does this herbal product force an interaction review?",
      "choices": [
        {
          "id": "a",
          "text": "It inhibits CYP3A4 and is managed with the same dose cut used for ketoconazole"
        },
        {
          "id": "b",
          "text": "It induces CYP3A4 and P-glycoprotein, and the apixaban label says to avoid that inducer"
        },
        {
          "id": "c",
          "text": "It affects only warfarin, so a DOAC medication list needs no herbal section"
        },
        {
          "id": "d",
          "text": "It replaces anticoagulation, so apixaban is stopped in favor of the herbal product in clinic"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the ELIQUIS label, which names St John's wort with rifampin, carbamazepine, and phenytoin as a strong inducer combination to avoid. Choice A calls it an inhibitor and reaches for the half-dose rule. Choice C limits herbs to warfarin. Choice D treats the herb as an anticoagulant. Source: ELIQUIS inducer list.",
      "teachingPoints": [
        "An herbal inducer can look too mild to matter.",
        "The label lists it beside rifampin, not beside ketoconazole."
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
      "difficulty": "advanced",
      "stem": "A coder asks why the anticoagulation service cares that an encounter says 'coagulopathy' when the clinician treated acute PE, and 'history of anticoagulant use' when the patient has mechanical-valve AF. Which coding practice supports the service?",
      "choices": [
        {
          "id": "a",
          "text": "Choose the highest-paying code available, even when it names a different disease than the one treated"
        },
        {
          "id": "b",
          "text": "Leave the diagnosis blank so that coding cannot affect the clinical anticoagulation record"
        },
        {
          "id": "c",
          "text": "Code the anticoagulant's name as the disease and omit the indication that was actually treated"
        },
        {
          "id": "d",
          "text": "Code the condition that was treated, so the record and the bill describe the same event"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the documentation point. Accurate coding of acute PE, or of AF with a mechanical valve, keeps the clinical indication visible to the next clinician and supports honest compensation. Choice A is upcoding. Choice B hides the indication. Choice C replaces the disease with a drug name. No code number is stated. Source: diagnosis coding as part of anticoagulation documentation.",
      "teachingPoints": [
        "The indication in the note and the code should tell the same story.",
        "A vague 'coagulopathy' label loses the PE."
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
      "stem": "A warfarin clinic is building a safety dashboard. A vendor offers a single tile: average patient-satisfaction stars. Leadership wants measures that would actually show unsafe anticoagulation. Which set fits?",
      "choices": [
        {
          "id": "a",
          "text": "Time in range, extreme-INR follow-up, time to act on a critical result, and bleeding review"
        },
        {
          "id": "b",
          "text": "Only the number of warfarin tablets dispensed, with no INR data on the dashboard at all today"
        },
        {
          "id": "c",
          "text": "A DOAC INR target of 2 to 3, applied to the warfarin panel and the DOAC panel together"
        },
        {
          "id": "d",
          "text": "The count of patients switched off warfarin, used as the clinic's only safety metric"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is a warfarin safety set: control (time in therapeutic range), the tail of extreme INRs, whether a critical result was acted on, and whether bleeding was reviewed. Choice B counts bottles. Choice C gives DOACs an INR target. Choice D treats switching as safety and would misread FRAIL-AF, which did not support routine switching of stable frail patients. Source: warfarin clinic dashboard design. No percentage cutoff is set.",
      "teachingPoints": [
        "Look at the unsafe tail, not only a satisfaction star.",
        "A switch count is not a bleeding review."
      ],
      "links": [],
      "objectiveIds": [
        76
      ]
    },
    {
      "id": "v-06",
      "domainId": "V",
      "difficulty": "advanced",
      "stem": "A clinic performs point-of-care INR testing and assumes the manufacturer visit last year transferred all responsibility away from the staff. Controls have not been documented for a week. Which responsibilities remain with the clinic?",
      "choices": [
        {
          "id": "a",
          "text": "None, because a device manual replaces local duties"
        },
        {
          "id": "b",
          "text": "Training, quality control, result documentation, and a response when the test system fails"
        },
        {
          "id": "c",
          "text": "Only billing, because analytical quality belongs solely to the patient"
        },
        {
          "id": "d",
          "text": "A duty to release every result, including failed controls, so the dashboard stays full"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B keeps the duties local: competent operators, documented controls, a record of the result that was actually used, and a stop rule when the system fails. Choice A transfers the duty to a manual. Choice C assigns quality to the patient. Choice D releases failed runs. Source: point-of-care responsibilities that remain with the testing site. No regulation section is numbered.",
      "teachingPoints": [
        "A vendor visit does not absorb the daily control log.",
        "Failed controls are not reportable INRs."
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
      "difficulty": "advanced",
      "stem": "A man takes rivaroxaban 20 mg with the evening meal for AF and is flying east across several time zones. He proposes skipping two doses 'to reset' and then taking 40 mg with a breakfast when he lands. Which written plan is sound?",
      "choices": [
        {
          "id": "a",
          "text": "Skip two doses, then take 40 mg, because a time-zone change requires an AF loading dose"
        },
        {
          "id": "b",
          "text": "Switch the 20 mg tablet to an empty stomach for every travel day"
        },
        {
          "id": "c",
          "text": "Replace the AF dose with rivaroxaban 2.5 mg twice daily for the duration of the flight"
        },
        {
          "id": "d",
          "text": "Keep about a 24-hour interval, take 20 mg with an evening meal on local time, and do not double"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D keeps the once-daily AF regimen: about 24 hours between doses, with food, without a double dose to compensate for the flight. Choice A skips and then doubles. Choice B drops the food requirement. Choice C substitutes the COMPASS dose for AF. Source: XARELTO once-daily administration with the evening meal, and the missed-dose instruction not to double the next dose.",
      "teachingPoints": [
        "Time zones change the clock, not the daily dose.",
        "Doubling after a skip is the error to write down and forbid."
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
      "stem": "A woman on apixaban 5 mg twice daily, usually 8 a.m. and 8 p.m., will land after a long eastbound flight and be tempted to take both tablets at the new breakfast 'to get back on schedule.' Which counseling principle fits?",
      "choices": [
        {
          "id": "a",
          "text": "Keep two doses in the new day, separated, rather than swallowing 10 mg at once to reset the clock"
        },
        {
          "id": "b",
          "text": "Take 10 mg at the new breakfast and then skip the next two scheduled doses"
        },
        {
          "id": "c",
          "text": "Stop apixaban for the whole travel week because time zones inactivate factor Xa inhibitors"
        },
        {
          "id": "d",
          "text": "Switch to a morning INR check to decide the timing of the travel doses"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A preserves the twice-daily schedule without a doubled dose. The ELIQUIS missed-dose instruction is to take a missed dose the same day and not to double to make up. Choice B doubles and then skips. Choice C stops therapy for convenience. Choice D uses an INR to time apixaban. Source: ELIQUIS dosing and missed-dose labeling.",
      "teachingPoints": [
        "Two doses still happen. They are not combined into one.",
        "The INR does not time this drug."
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
      "difficulty": "advanced",
      "stem": "A patient on warfarin is packing for a two-week trip. He has an INR due in 10 days, one bottle of tablets, and no plan for a bleed in another city. Which travel point belongs in the counseling?",
      "choices": [
        {
          "id": "a",
          "text": "Leave the warfarin at home so that vacation bleeding risk falls to zero"
        },
        {
          "id": "b",
          "text": "Pack enough tablets, know where an INR can be drawn, and know where to go if bleeding starts"
        },
        {
          "id": "c",
          "text": "Double the dose on the day of departure so the two-week trip needs no INR monitoring in clinic"
        },
        {
          "id": "d",
          "text": "Cancel the trip if the destination is more than one time zone from home"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the travel bundle: an adequate supply, a way to get the scheduled INR, and an urgent-care destination if bleeding occurs. Choice A creates an intentional interruption. Choice C preloads the dose. Choice D treats a time zone as a contraindication. Source: travel counseling for warfarin.",
      "teachingPoints": [
        "Supply, monitoring, and a bleeding plan travel with the patient.",
        "A vacation is not a reason to stop or to double."
      ],
      "links": [],
      "objectiveIds": [
        52
      ]
    },
    {
      "id": "iii-15",
      "domainId": "III",
      "difficulty": "advanced",
      "stem": "A man on warfarin, usual INR around 2.4, plans to binge-drink at a wedding while traveling. He rarely drinks otherwise. He asks whether 'one big night' is fine because his INR was in range last month. Which response addresses the safety issue?",
      "choices": [
        {
          "id": "a",
          "text": "A binge is protective, because alcohol always lowers a warfarin INR into a safer range"
        },
        {
          "id": "b",
          "text": "Skip warfarin that night and double it the next day to compensate for the wedding alcohol"
        },
        {
          "id": "c",
          "text": "A binge can increase bleeding and move the INR, so last month's in-range value does not make it safe"
        },
        {
          "id": "d",
          "text": "Alcohol interacts only with DOACs, so a warfarin patient can binge without added bleeding risk"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the counseling. Heavy episodic drinking raises bleeding risk and can perturb INR control; last month's in-range value does not cover a binge. Choice A gives alcohol a protective direction. Choice B skips and doubles warfarin. Choice D confines the issue to DOACs. No drink-count threshold is stated. Source: alcohol as a bleeding and INR risk with warfarin, which is also a HAS-BLED element.",
      "teachingPoints": [
        "An old INR does not license a binge.",
        "Do not pair the binge with a skipped or doubled warfarin dose."
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
      "difficulty": "advanced",
      "stem": "A nurse catches a near-miss: a patient on rivaroxaban 20 mg almost leaves without being told to take it with the evening meal. She stopped the discharge. Which operational response best prevents the next miss?",
      "choices": [
        {
          "id": "a",
          "text": "Counsel the nurse for delaying discharge, and leave the after-visit summary exactly as it was"
        },
        {
          "id": "b",
          "text": "Add the food warning only to the 2.5 mg product, because food matters solely for the COMPASS dose"
        },
        {
          "id": "c",
          "text": "Put the 15 mg and 20 mg food rule in the discharge set and the teach-back, then watch for repeat misses"
        },
        {
          "id": "d",
          "text": "Remove food counseling, because one caught near-miss means the discharge process already works"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C turns the catch into a system change aimed at the doses that actually require food. This site states that 15 mg and 20 mg rivaroxaban tablets are taken with food, and the AF dose with the evening meal. Choice A punishes the interception. Choice B edits the wrong strength. Choice D treats one catch as proof the gap is closed. Source: near-miss response for a known label administration rule.",
      "teachingPoints": [
        "The near-miss names a missing hard stop.",
        "Fix the 15 mg and 20 mg discharge path, not the 2.5 mg path."
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
      "stem": "The pharmacy and therapeutics committee is reviewing anticoagulation order sets after Andexxa was withdrawn in the United States. Which activity shows the committee doing governance rather than filing a memo?",
      "choices": [
        {
          "id": "a",
          "text": "Leave the Andexxa order set active so prescribers can still see the historical option"
        },
        {
          "id": "b",
          "text": "Approve a DOAC order set that omits kidney function because the committee prefers shorter forms"
        },
        {
          "id": "c",
          "text": "Adopt one dose for mechanical valves and for pregnancy in order to shorten the monograph"
        },
        {
          "id": "d",
          "text": "Retire the withdrawn order, and require an indication, a dose, and a current reversal path"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is governance: the committee removes a product the FDA withdrawal took off the United States market effective 22 December 2025, and it requires order sets to carry the indication, the labeled dose, and a reversal path that matches current teaching (idarucizumab for dabigatran; supportive care plus institutional 4F-PCC for factor Xa inhibitors). Choice A keeps a dangerous order live. Choice B drops kidney function. Choice C collapses VKA niches. Source: formulary governance after the Andexxa withdrawal, as framed on this site.",
      "teachingPoints": [
        "An order set is a clinical instruction, not an archive.",
        "Indication and kidney function belong in the set the committee approves."
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
      "difficulty": "advanced",
      "stem": "A service adds three new nurses and asks them to run the warfarin panel immediately. They have not been observed obtaining a point-of-care INR or acting on a critical result. Which process establishes competence?",
      "choices": [
        {
          "id": "a",
          "text": "Training plus direct observation of the test and the critical-result action before independent practice"
        },
        {
          "id": "b",
          "text": "A self-attestation email, with no one watching the task, accepted as full competence"
        },
        {
          "id": "c",
          "text": "Competence assumed from a general nursing license, with no anticoagulation-specific check"
        },
        {
          "id": "d",
          "text": "Observation scheduled only after the first dosing error, and that error is the training program in clinic"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is competence: training plus observed performance of the actual tasks, recorded before independent practice, and repeated when the process changes. Choice B accepts a self-report. Choice C treats a license as task-specific skill. Choice D waits for harm. Source: staff-competence process for an anticoagulation service.",
      "teachingPoints": [
        "Watch the task. Do not infer it from a license.",
        "Record the observation before independent dosing."
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
      "stem": "It is January 2026 in a United States hospital. The electronic Andexxa order is still selectable for rivaroxaban-associated intracranial hemorrhage. Which operational response prevents an outdated order?",
      "choices": [
        {
          "id": "a",
          "text": "Add a tooltip that says Andexxa is preferred, so the old order looks current"
        },
        {
          "id": "b",
          "text": "Hard-stop the order, point to the institutional 4F-PCC pathway, and audit any remaining use"
        },
        {
          "id": "c",
          "text": "Keep the order for clinicians who trained before 2025, as a standing grandfather exception now"
        },
        {
          "id": "d",
          "text": "Replace the Andexxa order with idarucizumab for every factor Xa inhibitor bleed"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the system fix after the 22 December 2025 withdrawal: the order cannot be selected, the current pathway is the one that opens, and an audit checks for stragglers. Choice A refreshes the wrong message. Choice C grandfathers a withdrawn drug. Choice D uses dabigatran's antibody for rivaroxaban. Source: this site's operational teaching after the Andexxa withdrawal.",
      "teachingPoints": [
        "A selectable order is an instruction.",
        "Audit after the hard stop, because old favorites linger."
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
      "difficulty": "advanced",
      "stem": "Patient 1 is in sinus rhythm one month after TAVI, with no AF, no recent stent, and no other OAC indication. Patient 2 has a mechanical mitral valve. A neighbor tells patient 1 that all valve patients take warfarin for life, and tells patient 2 that a DOAC is simpler. Which comparison is sound?",
      "choices": [
        {
          "id": "a",
          "text": "Both patients share one lifelong warfarin plan, because TAVI and a mechanical mitral valve are the same prosthesis"
        },
        {
          "id": "b",
          "text": "The mechanical-valve patient may take a DOAC, and the TAVI patient needs the GALILEO rivaroxaban strategy"
        },
        {
          "id": "c",
          "text": "A mechanical mitral valve stays a VKA case, and GALILEO did not support a routine post-TAVI DOAC"
        },
        {
          "id": "d",
          "text": "Neither patient needs any antithrombotic plan after the first month, including antiplatelet therapy"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C separates the prostheses. Mechanical valves are a VKA niche (RE-ALIGN stopped dabigatran for harm). GALILEO tested a rivaroxaban-based strategy after TAVI in people without an OAC indication and stopped early, with more death or thromboembolism than an antiplatelet strategy. Choice A equates the valves. Choice B offers a DOAC for the mechanical valve and adopts the GALILEO strategy that did not succeed. Choice D drops therapy entirely. Source: GALILEO and RE-ALIGN, as on this site.",
      "teachingPoints": [
        "Mechanical valves are not a DOAC niche.",
        "GALILEO does not make a DOAC the default after TAVI in sinus rhythm."
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
      "stem": "Three weeks after TAVI, a 78-year-old man is in sinus rhythm with no AF, no recent coronary stent, and no other OAC indication. A clinic note starts rivaroxaban plus aspirin 'to prevent leaflet thrombus,' modeled on a neighbor's AF prescription. Hemoglobin is 13 g/dL. Which interpretation fits GALILEO?",
      "choices": [
        {
          "id": "a",
          "text": "GALILEO stopped rivaroxaban early for harm versus antiplatelets when no other OAC indication existed"
        },
        {
          "id": "b",
          "text": "GALILEO made rivaroxaban plus aspirin the default after every TAVI, including mechanical mitral valves"
        },
        {
          "id": "c",
          "text": "GALILEO enrolled only mechanical valves, so a tissue valve in sinus rhythm should use dabigatran"
        },
        {
          "id": "d",
          "text": "Leaflet concern means the acute VTE lead-in, 15 mg twice daily for 21 days, starts after every implant"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A matches GALILEO on this site: patients after TAVI without an established OAC indication were randomized to a rivaroxaban-based strategy (rivaroxaban 10 mg daily plus aspirin for 3 months) or an antiplatelet strategy. The trial stopped early. Death or thromboembolism was higher with rivaroxaban (9.8 versus 7.2 per 100 person-years; HR 1.35). Choice B extends that strategy and even to mechanical valves. Choice C misstates the population and offers dabigatran. Choice D uses acute VTE dosing. Source: GALILEO card.",
      "teachingPoints": [
        "No AF and no stent is the GALILEO population, not an AF prescription.",
        "A neighbor's DOAC does not transfer to this implant."
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
      "difficulty": "advanced",
      "stem": "A 73-year-old woman with typical NVAF on warfarin is booked for elective colonoscopy. She has no mechanical valve, no recent VTE, and no prior stroke. The pre-procedure message says heparin shots will be given for the whole time warfarin is held. How should routine bridging be viewed?",
      "choices": [
        {
          "id": "a",
          "text": "As required, because BRIDGE showed that bridging cuts major bleeding roughly in half in clinic"
        },
        {
          "id": "b",
          "text": "As unsupported here: thromboembolism was similar and major bleeding was higher with bridging"
        },
        {
          "id": "c",
          "text": "As mandatory, because colonoscopy of any kind was an exclusion from the BRIDGE trial"
        },
        {
          "id": "d",
          "text": "As a reason to switch her to a DOAC for the single night before the procedure"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is BRIDGE on this site. Arterial thromboembolism was 0.4% without bridging and 0.3% with bridging. Major bleeding was 1.3% versus 3.2%. Typical NVAF is that population. Choice A reverses the bleeding result. Choice C claims an exclusion the trial did not use for colonoscopy in general. Choice D adds an unplanned one-night DOAC. Whether the endoscopy requires a hold at all is a separate proceduralist question. Source: BRIDGE.",
      "teachingPoints": [
        "Name the phenotype before writing heparin.",
        "More bleeding with similar thrombosis is the BRIDGE result."
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
      "stem": "A 46-year-old man has been on rivaroxaban for 6 weeks after an unprovoked DVT. Repeat labs confirm lupus anticoagulant, IgG anticardiolipin, and IgG anti-β2-glycoprotein I. He feels well and wants to finish a standard 3-month DOAC course and stop. Creatinine clearance is normal. He is not a surgical provocation case. Which long-term strategy fits?",
      "choices": [
        {
          "id": "a",
          "text": "Stop at 3 months, because triple-positive antibodies shorten VTE therapy"
        },
        {
          "id": "b",
          "text": "Continue rivaroxaban 20 mg, because TRAPS found fewer arterial events than with warfarin"
        },
        {
          "id": "c",
          "text": "Transition to dose-adjusted warfarin, the comparator that TRAPS did not find inferior in this phenotype"
        },
        {
          "id": "d",
          "text": "Switch to rivaroxaban 2.5 mg twice daily plus aspirin, the COMPASS regimen, for antiphospholipid syndrome"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches the high-risk phenotype. TRAPS, in triple-positive patients, was stopped early because events were more frequent with rivaroxaban than with warfarin targeted to an INR of 2.5 (19% versus 3% on this site), and the thromboembolic events were in the rivaroxaban group. A short DOAC course does not fit persistent triple positivity with a clot. Choice A shortens therapy. Choice B reverses TRAPS. Choice D uses a CAD regimen. Source: TRAPS and this site's triple-positive pathway.",
      "teachingPoints": [
        "Confirm the antibodies, then change the long-term agent.",
        "Feeling well does not convert this into a provoked 3-month clot."
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
      "difficulty": "advanced",
      "stem": "A 70-year-old man with typical NVAF expects heparin shots for every warfarin hold around colonoscopy. He has no mechanical valve and no recent VTE. He says, 'I was told I am never safe unless I am on shots.' Which counseling response explains the evidence?",
      "choices": [
        {
          "id": "a",
          "text": "Agree with him, because BRIDGE showed that heparin shots prevent bleeding during a hold"
        },
        {
          "id": "b",
          "text": "Tell him shots are required only for a diagnostic colonoscopy and not if a polyp might be removed"
        },
        {
          "id": "c",
          "text": "Promise that heparin removes all stroke risk during the hold and adds no bleeding of its own"
        },
        {
          "id": "d",
          "text": "In BRIDGE, skipping a heparin bridge did not raise arterial events and caused less major bleeding"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the counseling version of BRIDGE. Arterial thromboembolism was 0.4% without bridging and 0.3% with bridging. Major bleeding was 1.3% versus 3.2%. 'Never uncovered' was not safer. Choice A reverses the bleed finding. Choice B invents a rule that only diagnostic studies skip the bridge; polyp removal changes bleed risk of the procedure, not the BRIDGE population. Choice C denies bridge bleeding. Source: BRIDGE card.",
      "teachingPoints": [
        "Use the trial numbers in plain language.",
        "Shots are not the definition of safety for this phenotype."
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
      "difficulty": "advanced",
      "stem": "A woman in sinus rhythm after TAVI, with no AF and no stent, asks for a DOAC because her neighbor takes one for AF 'and we both have heart valves now.' Which counseling distinction is the one to make?",
      "choices": [
        {
          "id": "a",
          "text": "The neighbor's AF dose is not hers, and GALILEO did not support that post-TAVI plan"
        },
        {
          "id": "b",
          "text": "Any valve procedure means a lifelong DOAC, so the neighbor's AF dose is copied onto this TAVI"
        },
        {
          "id": "c",
          "text": "TAVI in sinus rhythm is managed as a mechanical mitral valve, with an INR target above 3.5"
        },
        {
          "id": "d",
          "text": "Antiplatelet therapy is forbidden after TAVI, so a DOAC is the only remaining option"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A separates indications. GALILEO tested a rivaroxaban-based strategy after TAVI in patients without an OAC indication and stopped early, with more death or thromboembolism than antiplatelet therapy (9.8 versus 7.2 per 100 person-years; HR 1.35). Choice B copies the neighbor. Choice C applies a mechanical-valve target she does not have. Choice D bans antiplatelet therapy, which was the comparator strategy. Source: GALILEO and this site's post-TAVI framework.",
      "teachingPoints": [
        "Ask why the neighbor takes the drug before copying it.",
        "Sinus rhythm after TAVI is not AF and is not a mechanical mitral valve."
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
      "difficulty": "advanced",
      "stem": "A patient with typical NVAF on apixaban, creatinine clearance 70 mL/min, is told to stop the DOAC for 5 days and to use heparin shots before a low-bleeding-risk procedure. Why does that plan misunderstand onset and offset?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban's offset is as slow as warfarin's, so 5 days plus a heparin bridge is the pharmacokinetic minimum"
        },
        {
          "id": "b",
          "text": "A DOAC hold always needs heparin because the oral drug has no offset until vitamin K is given"
        },
        {
          "id": "c",
          "text": "Apixaban's offset is short, and PAUSE did not use a heparin bridge for this low-bleeding-risk hold"
        },
        {
          "id": "d",
          "text": "Low-bleeding-risk procedures require a longer hold than high-bleeding-risk procedures do"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C combines the pharmacology with PAUSE. Apixaban's half-life supports a short interruption, and PAUSE omitted the DOAC for 1 day before a low-bleeding-risk procedure and 2 days before a high-bleeding-risk procedure, without heparin bridging. A 5-day warfarin-style hold plus shots copies the wrong drug. Choice A equates the offsets. Choice B requires vitamin K. Choice D reverses the risk-based timing. Source: PAUSE protocol on this site and DOAC half-life teaching. No numeric half-life is asserted.",
      "teachingPoints": [
        "Do not paste a warfarin hold onto a DOAC.",
        "Low bleeding risk is the shorter omission in PAUSE, not the longer one."
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
      "difficulty": "advanced",
      "stem": "Before elective colonoscopy, three services have written in the chart. Gastroenterology says 'hold blood thinners.' The anticoagulation clinic has not been notified. The patient uses warfarin for typical NVAF. Which documentation establishes ownership?",
      "choices": [
        {
          "id": "a",
          "text": "The phrase 'hold blood thinners,' with no drug name, no dates, and no restart owner in clinic"
        },
        {
          "id": "b",
          "text": "A heparin-bridge order copied from a mechanical-valve protocol and left unsigned"
        },
        {
          "id": "c",
          "text": "Name the drug, whether a hold is required, the timing, and which clinician owns the restart"
        },
        {
          "id": "d",
          "text": "A reminder that the patient should decide alone on the morning of the colonoscopy"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the peri-procedural record this site's framework asks for: the agent, whether interruption is even needed, the timing, and a named owner for the restart. For this typical AF patient, BRIDGE does not support routine heparin bridging, so a copied valve bridge does not belong in the note. Choice A is not an order a pharmacist can act on. Choice B imports the wrong protocol. Choice D leaves the decision at the bedside without a plan. Source: peri-procedural documentation and BRIDGE.",
      "teachingPoints": [
        "Name the owner of the restart before the procedure day.",
        "A valve bridge is not the default documentation for this AF patient."
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
      "stem": "A man newly started on dabigatran twice daily wants to pour the capsules into a weekly pill organizer 'so I will not forget.' The bottle was opened today. Which counseling is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "The weekly organizer is preferred, because dabigatran is more stable in a box than in its bottle"
        },
        {
          "id": "b",
          "text": "Keep the capsules in the original bottle, and do not pour them into a weekly organizer"
        },
        {
          "id": "c",
          "text": "Open each capsule and sprinkle the pellets on food every morning so the doses are easier to remember"
        },
        {
          "id": "d",
          "text": "The moisture warning applies only to warfarin tablets and not to dabigatran capsules"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches dabigatran handling on this site: the product is moisture-sensitive and stays in the original bottle. Standard labeling also tells patients not to put the capsules in pill boxes. Choice A reverses the stability. Choice C opens capsules for routine dosing. Choice D assigns the warning to warfarin. Source: this site's dabigatran practical note and the PRADAXA storage labeling.",
      "teachingPoints": [
        "Adherence help cannot ignore the bottle.",
        "A weekly box is the wrong fix for this capsule."
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
      "stem": "A patient on rivaroxaban 20 mg once daily with the evening meal calls the next morning: 'I missed last night. I will take two tablets with dinner tonight to catch up.' Which education response fits the once-daily AF dose?",
      "choices": [
        {
          "id": "a",
          "text": "Agree, because the 15 mg twice-daily lead-in rule is to take two 20 mg tablets the next night"
        },
        {
          "id": "b",
          "text": "Tell him to take 40 mg this morning on an empty stomach and skip dinner"
        },
        {
          "id": "c",
          "text": "Take the usual 20 mg with tonight's meal, and do not double to replace last night"
        },
        {
          "id": "d",
          "text": "Stop rivaroxaban for a week so the missed dose can 'wash out'"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the once-daily instruction. A dose missed yesterday is not replaced by doubling tonight. The separate rule that can put two 15 mg tablets together applies only to the acute VTE lead-in, not to 20 mg AF dosing. Choice A mixes those rules and the strengths. Choice B doubles on an empty stomach. Choice D stops therapy. Source: XARELTO once-daily missed-dose labeling.",
      "teachingPoints": [
        "Last night's miss is not tonight's double.",
        "The lead-in catch-up rule is a different regimen."
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
      "stem": "A patient on apixaban 5 mg twice daily remembers at the evening dose that the morning dose was missed. He wants to swallow 10 mg now and skip tomorrow morning. Which response fits?",
      "choices": [
        {
          "id": "a",
          "text": "Agree, because a twice-daily drug is caught up by taking 10 mg now and skipping tomorrow morning"
        },
        {
          "id": "b",
          "text": "Tell him to take 10 mg now and another 10 mg tomorrow night as the new permanent schedule"
        },
        {
          "id": "c",
          "text": "Stop apixaban until a measured INR is below 1.0, then restart the usual dose"
        },
        {
          "id": "d",
          "text": "Take the usual 5 mg this evening, do not take 10 mg, and take tomorrow morning's dose on schedule"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D refuses the doubled dose and the skipped next morning. The ELIQUIS instruction is to take a missed dose as soon as possible on the same day and not to double to make up. Swallowing 10 mg now specifically 'to catch up,' then skipping tomorrow, is the double-and-skip plan. Choice A endorses it. Choice B makes 10 mg the new dose. Choice C inserts an INR stop rule apixaban does not use. Source: ELIQUIS missed-dose labeling.",
      "teachingPoints": [
        "Do not turn a miss into 10 mg and a skipped morning.",
        "The usual evening tablet still happens."
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
      "stem": "A patient on warfarin for AF missed last night's tablet and plans to take two tonight 'so the level does not drop.' The INR was 2.3 four days ago. There is no bleeding. Which counseling fits?",
      "choices": [
        {
          "id": "a",
          "text": "Do not double tonight; ask the clinic, and do not replace a missed warfarin tablet with an extra one"
        },
        {
          "id": "b",
          "text": "Take two tonight and skip the next two nights, which keeps the weekly milligram total identical in clinic"
        },
        {
          "id": "c",
          "text": "Take vitamin K tonight so the single missed tablet cannot cause a clot by morning"
        },
        {
          "id": "d",
          "text": "Double the dose for the rest of the week because one miss resets the INR to 1.0"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the warfarin miss rule: an extra tablet tonight can overshoot the INR later, and the clinic gives the make-up plan rather than the patient inventing one. A single miss does not drop the INR to 1.0 the next morning, because warfarin's effect lags. Choice B rearranges several days without a plan. Choice C gives vitamin K for a missed dose. Choice D extends the double. Source: warfarin missed-dose counseling.",
      "teachingPoints": [
        "A missed warfarin tablet is not replaced by a double.",
        "The effect lags, so one miss is not an INR of 1.0 in the morning."
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
      "stem": "After rivaroxaban is started for AF, teach-back shows the patient can say 'blood thinner' but cannot state once daily, with food, or what bleeding should prompt a call. He nods that the leaflet was helpful. Which conclusion is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "The nod plus the words 'blood thinner' are enough to document that he understands the plan"
        },
        {
          "id": "b",
          "text": "Not adequate until he can state the schedule, the food rule, and a bleeding trigger"
        },
        {
          "id": "c",
          "text": "Failure to restate the plan means rivaroxaban is stopped and aspirin is substituted the same day"
        },
        {
          "id": "d",
          "text": "Teach-back is only for warfarin, so a nod is enough documentation for any DOAC start"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the point of teach-back. A category name plus a nod does not show he knows the once-daily evening-meal schedule or a bleeding trigger. Choice A accepts the nod. Choice C stops indicated therapy because education is incomplete. Choice D limits teach-back to warfarin. Source: teach-back applied to a new DOAC.",
      "teachingPoints": [
        "'Blood thinner' is not a schedule.",
        "Keep teaching. Do not convert a failed restatement into an aspirin switch."
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
      "stem": "A patient on apixaban says they take it every other day 'so the bottle lasts.' They feel well and have had no clot. Cost is the stated reason. Which adherence counseling is appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Praise the every-other-day plan, because a lower average dose is always safer and still fully protective"
        },
        {
          "id": "b",
          "text": "Tell them to take two days of tablets every Sunday so the same number of tablets is saved"
        },
        {
          "id": "c",
          "text": "Every-other-day use is not the regimen; address the cost without the patient changing the schedule alone"
        },
        {
          "id": "d",
          "text": "Switch the off days to aspirin, which AVERROES supports as an equivalent stroke-prevention plan"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C names the behavior as underdosing and moves the cost problem to a legitimate assistance path rather than a homemade schedule. Choice A endorses the skip. Choice B bunches tablets. Choice D uses aspirin on alternate days; AVERROES found aspirin inferior to apixaban for stroke prevention. Source: adherence counseling and AVERROES.",
      "teachingPoints": [
        "Stretching the bottle changes the dose.",
        "Cost is a real barrier and is not fixed by skipping."
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
      "difficulty": "advanced",
      "stem": "The quality committee proposes a 'DOAC time in therapeutic range' tile and a single national target percentage for the public dashboard. Which operational response fits?",
      "choices": [
        {
          "id": "a",
          "text": "Publish the tile, because every anticoagulant, including each DOAC, has an INR range of 2 to 3"
        },
        {
          "id": "b",
          "text": "Set the national target at whatever percentage the dashboard vendor uses as its default"
        },
        {
          "id": "c",
          "text": "Apply the tile only to edoxaban, because of the AF clearance ceiling above 95 mL/min"
        },
        {
          "id": "d",
          "text": "Reject it: time in therapeutic range is a warfarin metric, not a national DOAC percentage"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D keeps the metric on warfarin. DOACs are not dosed to an INR, so a time-in-range percentage has no denominator. This site deliberately does not use a single cutoff percentage even for warfarin quality slogans. Choice A invents an INR target for DOACs. Choice B adopts a vendor default as a national standard. Choice C mixes the edoxaban clearance ceiling into a fake time-in-range tile. Source: this site's time-in-range teaching.",
      "teachingPoints": [
        "No INR target means no time-in-range tile.",
        "Do not let a dashboard default become a clinical standard."
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
      "stem": "A warfarin panel's time in therapeutic range has fallen over two quarters. The patients are mostly frail and older, and many INRs are now low after a switch campaign was proposed. No numeric cutoff is used. Which operations response fits?",
      "choices": [
        {
          "id": "a",
          "text": "Review causes of the unstable INRs and do not launch a routine switch of stable frail patients off warfarin"
        },
        {
          "id": "b",
          "text": "Switch every frail patient to a DOAC this week, because a falling percentage is itself the FRAIL-AF indication"
        },
        {
          "id": "c",
          "text": "Stop all INR checks until the percentage improves on its own"
        },
        {
          "id": "d",
          "text": "Adopt a single national cutoff and discharge patients who miss it"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the operations response. A falling time in range triggers a look at missed tests, interacting drugs, diet, and access. FRAIL-AF on this site found more bleeding when frail older adults who were stable on a VKA were switched to a DOAC (15.3% versus 9.4%; HR 1.69), so the campaign is not the remedy. Choice B makes the trial run backwards. Choice C stops measurement. Choice D invents a cutoff this site does not use. Source: FRAIL-AF and this site's quality teaching.",
      "teachingPoints": [
        "Find why the INRs moved before changing the drug class.",
        "FRAIL-AF is a reason not to switch stable frail patients routinely."
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
      "difficulty": "advanced",
      "stem": "An INR of 7.4 posts late Friday from an outside laboratory. The patient is not bleeding. The clinic closes until Monday and has no on-call coverage. Which design is the operations standard?",
      "choices": [
        {
          "id": "a",
          "text": "A policy that Friday afternoon results are not reviewed until the following Tuesday"
        },
        {
          "id": "b",
          "text": "A covered path so a critical INR is seen the day it posts, including before the weekend"
        },
        {
          "id": "c",
          "text": "Automatic vitamin K for every Friday result above 2, released by the laboratory with no clinician"
        },
        {
          "id": "d",
          "text": "Deletion of after-hours results so Monday's inbox does not contain a Friday INR"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the design: critical results need a same-day owner, including Friday afternoon. An INR of 7.4 without bleeding is not ignored until Monday and is not an automatic reversal protocol fired by the laboratory. The 2012 CHEST suggestion against routine vitamin K for a nonbleeding INR between 4.5 and 10 still leaves a clinician to hold or adjust the dose. Choice A delays review. Choice C automates vitamin K. Choice D hides the result. Source: critical-result coverage.",
      "teachingPoints": [
        "The clock starts when the result posts, not when the clinic reopens.",
        "A nonbleeding high INR still needs a person."
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
      "stem": "A point-of-care INR is 5.1 and a same-day venous INR is 2.5. Required quality control on the meter was missed. The dose would change if 5.1 were believed. Which response addresses both the disagreement and the missed control?",
      "choices": [
        {
          "id": "a",
          "text": "Dose from the fingerstick of 5.1, because a higher meter result outranks venous plasma now"
        },
        {
          "id": "b",
          "text": "Average 5.1 and 2.5 and give vitamin K for a blended INR near 3.8"
        },
        {
          "id": "c",
          "text": "Do not use the unchecked meter; document the missed control and dose from the venous INR"
        },
        {
          "id": "d",
          "text": "Report both INRs to the patient and ask the patient to choose today's warfarin dose"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the operations response. A missed control removes the meter result from use, the event is documented, and the venous INR is the dosing result once the specimen is confirmed. Choice A privileges the higher number. Choice B invents a midpoint and adds vitamin K. Choice D delegates the dose to the patient. Source: point-of-care nonconformance handling.",
      "teachingPoints": [
        "A missed control is a failed run, not a second opinion.",
        "Document it so the next shift does not reuse the strips blindly."
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
      "difficulty": "advanced",
      "stem": "An audit finds two recurring patterns. Patients with AF are on rivaroxaban 2.5 mg twice daily plus aspirin. Other charts labeled 'COMPASS' were written for rivaroxaban 20 mg daily with no aspirin and no CAD. Which response fits stewardship?",
      "choices": [
        {
          "id": "a",
          "text": "Leave both patterns, because any rivaroxaban strength treats AF and stable CAD equally well"
        },
        {
          "id": "b",
          "text": "Move every patient to 20 mg daily, including those with stable CAD, no AF, and aspirin already on board"
        },
        {
          "id": "c",
          "text": "Move every patient to 2.5 mg twice daily, including those with AF and a prior stroke"
        },
        {
          "id": "d",
          "text": "Correct each chart to the regimen for its indication, and block the swap in the order set"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D separates the regimens this site keeps apart. COMPASS is rivaroxaban 2.5 mg twice daily plus aspirin for stable CAD or PAD, not for AF. AF uses a treatment dose, 20 mg or 15 mg with the evening meal based on creatinine clearance, not 2.5 mg. A chart labeled COMPASS that contains 20 mg and no vascular indication is the opposite error. Choice A accepts both. Choices B and C impose one strength on both populations. Source: COMPASS versus AF dosing on this site.",
      "teachingPoints": [
        "Read the indication off the dose, then fix the order set.",
        "2.5 mg plus aspirin is not an AF plan, and 20 mg is not COMPASS."
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
      "stem": "The clinic wants to offer INR patient self-testing. A vendor can ship meters next week. No competency checklist, no reporting pathway, and no clinician coverage for after-hours results exist yet. Which package is required before go-live?",
      "choices": [
        {
          "id": "a",
          "text": "Training, competency, a reporting path, quality control, and a clinician for each result before go-live"
        },
        {
          "id": "b",
          "text": "Meter shipment alone, because the device manual is the entire home-testing program"
        },
        {
          "id": "c",
          "text": "A public announcement of the service, which substitutes for competency checks and for after-hours coverage"
        },
        {
          "id": "d",
          "text": "Permission for patients to change their own doses as soon as the meter arrives at the house"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the go-live package. Hardware without a competency check, a way for the result to reach a person, and a person responsible for the dose is not a program. Choice B stops at shipping. Choice C announces an unsafe service. Choice D gives dose authority to an untrained user. Source: home INR program operations on this site.",
      "teachingPoints": [
        "Do not ship a program you cannot receive results from.",
        "Competency is part of go-live, not a later upgrade."
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
      "difficulty": "advanced",
      "stem": "An auditor opens a routine anticoagulation stewardship note. What should be findable without reading the entire hospital chart?",
      "choices": [
        {
          "id": "a",
          "text": "Only the brand name, with no indication, no dose, and no review date"
        },
        {
          "id": "b",
          "text": "Indication, regimen, a relevant renal or interaction check, and the next review date"
        },
        {
          "id": "c",
          "text": "A statement that all DOACs are interchangeable, with no reason recorded for the one in use"
        },
        {
          "id": "d",
          "text": "The auditor's preferred drug, copied into every note regardless of the indication"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the auditable note: why the drug is used, exactly what is being taken, whether kidney function or a major interaction was considered when that would change the dose, and when someone looks again. Choice A cannot be audited. Choice C asserts interchangeability. Choice D standardizes the auditor's preference. Source: stewardship documentation.",
      "teachingPoints": [
        "A note that cannot show the indication cannot show appropriateness.",
        "The next review date is what makes the plan ongoing."
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
      "difficulty": "advanced",
      "stem": "A 74-year-old man with AF had a coronary stent 3 years ago, with no stent thrombosis and no ischemic event since. He takes a DOAC at his AF dose plus aspirin 81 mg. Kidney function is stable. There is no recent ACS. Which statement best fits AFIRE and AQUATIC?",
      "choices": [
        {
          "id": "a",
          "text": "Add clopidogrel now, because a stent placed 3 years ago returns the patient to triple therapy"
        },
        {
          "id": "b",
          "text": "Stop the DOAC and continue aspirin, because stable coronary disease outranks AF"
        },
        {
          "id": "c",
          "text": "Increase to the acute VTE lead-in, because a remote stent is managed as a new PE"
        },
        {
          "id": "d",
          "text": "Continue the anticoagulant and stop aspirin, the stable-disease direction of AFIRE and AQUATIC"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D fits the stable AF-plus-CAD evidence on this site. AFIRE found rivaroxaban alone noninferior to rivaroxaban plus one antiplatelet for efficacy and superior for major bleeding, and it stopped early for higher mortality on combination therapy. AQUATIC, in chronic coronary syndrome with a stent more than 6 months old, found more ischemic events, death, and major bleeding when aspirin was added to oral anticoagulation, and stopped early for excess death. Choice A rebuilds triple therapy. Choice B drops the AF drug. Choice C uses VTE dosing. Source: AFIRE and AQUATIC cards.",
      "teachingPoints": [
        "Remote from the stent, the antiplatelet is the drug under question.",
        "The oral anticoagulant for AF stays."
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
      "stem": "A 70-year-old woman with AF is on day 4 of a medically managed non-ST-elevation myocardial infarction. She did not go to the catheterization laboratory. She is prescribed a P2Y12 inhibitor. A slide says AUGUSTUS proved that OAC alone is enough and that aspirin clearly increased bleeding in the 1097-patient medically managed subgroup. Which reading respects what that subgroup can support?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban bled less than a VKA; aspirin's bleeding trend was not significant; OAC alone was not tested"
        },
        {
          "id": "b",
          "text": "The medically managed subgroup proved that dual therapy is superior to anticoagulation alone after ACS"
        },
        {
          "id": "c",
          "text": "Aspirin reduced ischemic events in that subgroup enough to offset the extra bleeding it caused"
        },
        {
          "id": "d",
          "text": "Medically managed ACS forbids any antiplatelet drug alongside an oral anticoagulant"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A states what the subgroup can support. Every AUGUSTUS patient was on a P2Y12 inhibitor, so there was no OAC-alone arm. In the medically managed subgroup, major or clinically relevant nonmajor bleeding was lower with apixaban than with a VKA (HR 0.44; 95% CI 0.28–0.68). Aspirin versus placebo showed a nonsignificant trend toward more bleeding (HR 1.49; 95% CI 0.98–2.26). Choice B claims a comparison the trial did not randomize. Choice C claims an ischemic offset the subgroup was not powered to prove. Choice D bans antiplatelet therapy. Source: AUGUSTUS prespecified subgroups (ACS treated medically, ACS treated with PCI, and elective PCI; Windecker et al., Circulation 2019;140(23):1921–1932, doi 10.1161/CIRCULATIONAHA.119.043308) and the trial's factorial design.",
      "teachingPoints": [
        "No OAC-alone arm means no OAC-alone conclusion.",
        "A confidence interval that crosses 1 is not a clear aspirin-bleeding win in that subgroup."
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
      "stem": "A 76-year-old man with AF has a stent that is 2 years old, chronic coronary syndrome, and no recent ACS. He is on warfarin and aspirin. Someone cites AQUATIC as a reason to continue both because 'more antiplatelet is more protection.' What did AQUATIC find?",
      "choices": [
        {
          "id": "a",
          "text": "Aspirin reduced the primary ischemic composite and also reduced major bleeding"
        },
        {
          "id": "b",
          "text": "Adding aspirin raised ischemic events, bleeding, and death, and the trial stopped early"
        },
        {
          "id": "c",
          "text": "AQUATIC was a trial of triple therapy in the first week after stent placement"
        },
        {
          "id": "d",
          "text": "AQUATIC showed aspirin and placebo were identical on every endpoint that was counted today"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is AQUATIC on this site. In chronic coronary syndrome with a stent placed more than 6 months earlier, adding aspirin 100 mg to ongoing oral anticoagulation increased the primary composite (16.9% versus 12.1%; adjusted HR 1.53), major bleeding (10.2% versus 3.4%), and all-cause death (13.4% versus 8.4%), and the trial stopped early for excess death. Choice A reverses the direction. Choice C relocates the trial to the first week after PCI. Choice D calls the endpoints identical. Source: AQUATIC card.",
      "teachingPoints": [
        "This is stable disease, not the peri-PCI week.",
        "Added aspirin was harmful on ischemia, bleeding, and death in this trial."
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
      "stem": "A colleague's slide says, 'OAC alone reduces mortality compared with OAC plus an antiplatelet in stable coronary disease,' and cites AFIRE, AQUATIC, and OAC-ALONE as if they were one result. Which description of that evidence is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "OAC-ALONE met noninferiority and is the mortality proof, while AFIRE and AQUATIC were neutral trials"
        },
        {
          "id": "b",
          "text": "All three trials were stopped because oral anticoagulation alone increased death"
        },
        {
          "id": "c",
          "text": "AFIRE and AQUATIC signal harm from an added antiplatelet; OAC-ALONE did not prove a mortality cut"
        },
        {
          "id": "d",
          "text": "The three trials forbid any antiplatelet drug during the first month after PCI"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C separates the trials on this site. AFIRE stopped early for higher mortality with combination therapy in stable AF and CAD. AQUATIC found higher all-cause death with aspirin added. OAC-ALONE did not meet noninferiority for its primary composite (HR 1.16; 95% CI 0.79–1.72), stopped near a third of planned enrollment, and is described on this site as inconclusive, not as proof that OAC alone reduces mortality. Choice A assigns the proof to the inconclusive trial. Choice B reverses the direction of the mortality signals. Choice D applies stable-disease trials to the first month after PCI. Source: AFIRE, AQUATIC, and OAC-ALONE cards.",
      "teachingPoints": [
        "Do not collapse three designs into one mortality slogan.",
        "OAC-ALONE's noninferiority test was not met."
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
      "difficulty": "advanced",
      "stem": "A patient on a DOAC for a prior VTE has taken aspirin 81 mg for years. No stent, no coronary disease, and no other aspirin indication is in the record. They ask, 'Should I just stop the aspirin today?' Which response is the sound one?",
      "choices": [
        {
          "id": "a",
          "text": "Stop the aspirin this minute, with no note, because every aspirin tablet taken with a DOAC is an error now"
        },
        {
          "id": "b",
          "text": "Continue aspirin for life, because a DOAC prescription is incomplete without an antiplatelet drug"
        },
        {
          "id": "c",
          "text": "Double the DOAC on the day aspirin is stopped, to replace the lost platelet effect"
        },
        {
          "id": "d",
          "text": "Aspirin may be leftover, but stopping it is a reconciled decision, not an unsupervised phone-call change"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D keeps the likely right clinical direction and the right process. Unindicated aspirin adds bleeding risk beside a DOAC, which is the deprescribing problem on this site, but a same-minute stop with no record can miss an indication the chart failed to show. Choice A skips reconciliation. Choice B makes aspirin mandatory. Choice C raises the DOAC to replace platelets. Source: DOAC-plus-aspirin deprescribing practice on this site, distinct from the early period after a stent.",
      "teachingPoints": [
        "Look for a reason before celebrating a stop.",
        "Do not replace aspirin by increasing the DOAC."
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
      "difficulty": "advanced",
      "stem": "The clinic wants fewer unindicated DOAC-plus-aspirin combinations. Several patients have AF, a stent from five years ago, and no documented aspirin indication after that. Which operational step fits the evidence and the clinic's scope?",
      "choices": [
        {
          "id": "a",
          "text": "Stop every antiplatelet in the health system, including during the first week after a new stent"
        },
        {
          "id": "b",
          "text": "Ignore DOAC-plus-aspirin combinations, because aspirin does not add bleeding on a DOAC"
        },
        {
          "id": "c",
          "text": "Review whether any aspirin indication remains, then a reconciled stop, tracked as stewardship"
        },
        {
          "id": "d",
          "text": "Double the DOAC whenever aspirin is continued, as the safety compensation for the combination"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is an operational deprescribing step within clinic scope: find the combination, confirm the stent is remote and no other aspirin indication exists, stop in a documented way, and count the reviews. AFIRE and AQUATIC on this site support dropping the antiplatelet in stable disease, not during the early post-PCI window. Choice A is too broad and would hit new stents. Choice B denies the bleeding interaction. Choice D raises the DOAC. Source: this site's deprescribing pathway and AFIRE/AQUATIC.",
      "teachingPoints": [
        "Scope the review to unindicated aspirin, not to every antiplatelet in the building.",
        "Track the reconciliations so the work is visible."
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
      "difficulty": "advanced",
      "stem": "A cook sustains a small clean cut. Bleeding slows within minutes as a platelet plug forms, before a firm fibrin clot is obvious. Platelet count is normal. She takes no anticoagulant. Which sequence best describes that early platelet response?",
      "choices": [
        {
          "id": "a",
          "text": "Fibrin polymer forms first, and platelets attach only after factor XIII has finished cross-linking"
        },
        {
          "id": "b",
          "text": "Protein C activation is the first step, and platelets adhere only if warfarin is present"
        },
        {
          "id": "c",
          "text": "Factor XII activation on the skin surface is required before any platelet can stick"
        },
        {
          "id": "d",
          "text": "Platelets adhere to exposed collagen and von Willebrand factor, activate, and aggregate"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is primary hemostasis: adhesion (collagen and von Willebrand factor), activation, and aggregation via fibrinogen and glycoprotein IIb/IIIa, before a stable fibrin mass dominates. Choice A reverses the order. Choice B starts with an anticoagulant protein. Choice C requires contact activation for a skin cut. Source: primary hemostasis sequence.",
      "teachingPoints": [
        "Adhesion, activation, and aggregation precede a stable fibrin clot.",
        "von Willebrand factor and collagen anchor the first platelets."
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
      "stem": "A 46-year-old woman has a platelet count of 18 × 10⁹/L, fragmented red cells, rising creatinine, and new confusion. She has not received heparin. Temperature is 37.9 °C and blood pressure is 150/92 mm Hg. The team wonders whether this is ordinary immune thrombocytopenia. Which process needs urgent consideration?",
      "choices": [
        {
          "id": "a",
          "text": "A thrombotic microangiopathy such as thrombotic thrombocytopenic purpura, not a heparin platelet syndrome"
        },
        {
          "id": "b",
          "text": "Heparin-induced thrombocytopenia, because confusion plus a low platelet count defines that syndrome in clinic"
        },
        {
          "id": "c",
          "text": "Isolated immune thrombocytopenia, because schistocytes are expected in that bleeding disorder"
        },
        {
          "id": "d",
          "text": "Warfarin-induced skin necrosis, because fragmented red cells are the skin finding of a VKA"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A fits thrombocytopenia, microangiopathic hemolysis, organ injury, and neurologic change without heparin: a thrombotic microangiopathy, including thrombotic thrombocytopenic purpura, until proven otherwise. Choice B requires heparin exposure that is absent. Choice C is a bleeding phenotype and does not produce schistocytes and organ ischemia as the core picture. Choice D is a skin lesion of warfarin initiation, not this blood film. Source: clinical distinction between thrombotic microangiopathy and heparin-induced thrombocytopenia.",
      "teachingPoints": [
        "Schistocytes plus organ injury point to a microangiopathy.",
        "No heparin exposure argues against heparin-induced thrombocytopenia."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-30",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A 28-year-old woman has petechiae and a platelet count of 14 × 10⁹/L. Hemoglobin, creatinine, and the blood film are normal. She has not received heparin and has no thrombosis. Which comparison with heparin-induced thrombocytopenia is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Both illnesses are clotting disorders, so a new DVT is expected with this petechial picture"
        },
        {
          "id": "b",
          "text": "A bleeding platelet disorder, unlike heparin-induced thrombocytopenia after heparin"
        },
        {
          "id": "c",
          "text": "Both conditions begin 5 to 10 days after heparin, so a missing heparin history can be ignored"
        },
        {
          "id": "d",
          "text": "Both are treated by adding unfractionated heparin in order to raise the platelet count"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B separates isolated thrombocytopenia with petechiae and no heparin from heparin-induced thrombocytopenia, which follows heparin and causes thrombosis. Choice A expects a DVT from a petechial illness. Choice C invents a heparin timeline. Choice D adds the drug that causes the clotting syndrome. Source: immune thrombocytopenia versus heparin-induced thrombocytopenia.",
      "teachingPoints": [
        "Petechiae and an isolated low count are a bleeding pattern.",
        "Heparin-induced thrombocytopenia is a prothrombotic pattern after heparin."
      ],
      "links": [],
      "objectiveIds": [
        5
      ]
    },
    {
      "id": "i-31",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A 74-year-old man is admitted with pneumonia. He has active lymphoma on chemotherapy and has been in bed for two days. He had an appendectomy 20 years ago. There is no bleeding. The team wants a prophylaxis assessment rather than anticoagulation for every admission. Which tool use is appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "A surgical Caprini score, because every hospitalized adult is scored as a surgical case"
        },
        {
          "id": "b",
          "text": "No score, because active cancer means treatment-dose anticoagulation for VTE that has not been diagnosed"
        },
        {
          "id": "c",
          "text": "A medical-inpatient risk tool such as Padua, which gives weight to cancer and immobility"
        },
        {
          "id": "d",
          "text": "A CHA₂DS₂-VASc score, because pneumonia admission is scored as AF stroke risk"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C fits a medical inpatient: the Padua score assigns 3 points to active cancer and 3 to reduced mobility, and a total of 4 or more marks high VTE risk for a prophylaxis decision, not a treatment dose for an undiagnosed clot. Active cancer (3), age 70 or older (1), and acute infection (1) already total 5; Padua's 3 points for reduced mobility require bed rest of at least 3 days. Choice A uses a surgical score. Choice B jumps to treatment intensity without a VTE diagnosis. Choice D uses an AF stroke score. Source: Padua prediction score for medical inpatients.",
      "teachingPoints": [
        "Padua gives 3 points to active cancer and 3 to reduced mobility.",
        "A high prophylaxis score is not a diagnosis of DVT or PE."
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
      "difficulty": "advanced",
      "stem": "A surgical service uses a Caprini score. A 68-year-old woman awaiting cancer surgery scores in a high stratum because of cancer, age, and a planned major operation. She is also vomiting blood this morning. Hemoglobin fell from 12 to 8 g/dL. Which safeguard matters when the score is applied?",
      "choices": [
        {
          "id": "a",
          "text": "A high Caprini score overrides active bleeding and requires an immediate treatment-dose DOAC"
        },
        {
          "id": "b",
          "text": "Caprini is a medical-inpatient tool, so a surgical patient cannot be scored"
        },
        {
          "id": "c",
          "text": "The score chooses the AF dose of apixaban for the operating room"
        },
        {
          "id": "d",
          "text": "The score supports a prophylaxis plan only after bleeding risk is judged"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the safeguard: Caprini stratifies surgical VTE risk and does not override active bleeding. Pharmacologic prophylaxis is reconsidered when bleeding is active, and mechanical prophylaxis is the alternative to evaluate. Choice A lets the score override hematemesis. Choice B swaps Caprini with a medical score. Choice C imports an AF dose. Source: Caprini score as a surgical risk stratifier, not a bleeding waiver.",
      "teachingPoints": [
        "A high surgical risk score does not cancel active bleeding.",
        "Mechanical prophylaxis is the path to evaluate when a drug is unsafe."
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
      "difficulty": "advanced",
      "stem": "A 36-year-old woman has three days of unilateral calf pain and swelling after a 12-hour car ride. She has no dyspnea, no chest pain, and normal blood pressure. Oxygen saturation is 98 percent on room air. She takes an oral contraceptive. Which interpretation best fits the presentation?",
      "choices": [
        {
          "id": "a",
          "text": "Suspected leg DVT: pretest probability, then ultrasound or D-dimer, is the diagnostic path"
        },
        {
          "id": "b",
          "text": "This is high-risk PE, so systemic thrombolysis comes before any imaging of the leg"
        },
        {
          "id": "c",
          "text": "Travel plus a swollen calf is acute arterial limb ischemia and needs an emergency embolectomy"
        },
        {
          "id": "d",
          "text": "A normal oxygen saturation excludes DVT, so no further diagnostic test is useful"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A keeps the problem in the leg: unilateral symptoms after stasis are suspected DVT, and a probability score then selects D-dimer or ultrasound. There are no chest symptoms and no hypotension to make this high-risk PE. Choice B starts lysis. Choice C calls a venous picture acute arterial ischemia. Choice D uses oxygen saturation to exclude a leg clot. Source: suspected DVT diagnostic sequence (pretest probability, then D-dimer or compression ultrasound).",
      "teachingPoints": [
        "No chest symptoms means this is not a reperfusion PE case.",
        "A normal saturation does not clear a symptomatic calf."
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
      "difficulty": "advanced",
      "stem": "A 57-year-old man who has been immobilized after a fracture has sudden dyspnea, pleuritic pain, and a brief syncopal spell. Blood pressure is 110/70 mm Hg. Heart rate is 108 beats per minute. He has no fever and no purulent sputum. Which explanation best ties the symptoms to PE pathophysiology?",
      "choices": [
        {
          "id": "a",
          "text": "Fever and sputum are required, so this pattern is bacterial pneumonia rather than vascular obstruction"
        },
        {
          "id": "b",
          "text": "Embolic obstruction raises dead space and can drop cardiac output enough to cause syncope"
        },
        {
          "id": "c",
          "text": "Pleuritic pain means the clot formed in a coronary artery under high shear"
        },
        {
          "id": "d",
          "text": "Syncope means the event is intracranial hemorrhage, so the lungs are not involved"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B connects acute pulmonary vascular obstruction to ventilation-perfusion mismatch, dead space, and a fall in left-heart filling that can cause syncope even before sustained shock. Choice A requires infectious findings he does not have. Choice C places the clot in a coronary artery. Choice D equates syncope with intracranial bleeding. Source: PE pathophysiology (increased dead space and acute right-ventricular pressure overload).",
      "teachingPoints": [
        "Syncope can be the cardiac-output consequence of a large embolus.",
        "Pleuritic pain does not relocate the clot to a coronary plaque."
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
      "difficulty": "advanced",
      "stem": "A 78-year-old woman with AF not on anticoagulation develops a suddenly painful, pale, cold right foot. Sensation is reduced and the dorsalis pedis pulse is absent. The other foot is warm with a palpable pulse. She can usually walk two blocks. Which interpretation distinguishes this from chronic stable claudication?",
      "choices": [
        {
          "id": "a",
          "text": "Reproducible calf pain on walking that resolves with rest, which is the definition of this pulseless foot"
        },
        {
          "id": "b",
          "text": "Chronic PAD treated with the COMPASS regimen, with no need for an urgent vascular assessment"
        },
        {
          "id": "c",
          "text": "Acute limb ischemia from cardioembolism, a vascular emergency rather than stable walking claudication"
        },
        {
          "id": "d",
          "text": "Venous DVT, because a pale cold foot with a missing pulse is the classic venous pattern"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C fits acute limb ischemia: sudden pain, pallor, coldness, sensory loss, and a missing pulse in a patient with AF, consistent with embolism. Chronic claudication is reproducible exertional pain that resolves with rest and does not present as an acutely cold pulseless foot. Choice A describes claudication. Choice B applies a chronic CAD/PAD regimen to an acute occlusion. Choice D calls an arterial emergency a venous clot. Source: acute limb ischemia versus chronic atherosclerotic claudication.",
      "teachingPoints": [
        "The five-P arterial emergency is not stable walking pain.",
        "AF supplies a cardioembolic source for an acute arterial occlusion."
      ],
      "links": [],
      "objectiveIds": [
        10
      ]
    },
    {
      "id": "i-36",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A 66-year-old man who smokes reports calf tightness after one block that resolves within a few minutes of standing still. The foot is warm, pulses are present, and there is no rest pain and no wound. Blood pressure is 138/80 mm Hg. Which disease process best explains the pattern?",
      "choices": [
        {
          "id": "a",
          "text": "Acute cardioembolic occlusion, because walking pain always means an absent pulse"
        },
        {
          "id": "b",
          "text": "PE, because calf symptoms after smoking are pulmonary emboli"
        },
        {
          "id": "c",
          "text": "Chronic venous insufficiency only, because arterial disease does not cause exertional calf pain"
        },
        {
          "id": "d",
          "text": "Flow-limiting atherosclerotic PAD, the chronic exertional pattern rather than an acute embolus"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is chronic stable claudication from atherosclerotic PAD: reproducible exertional pain, relief with rest, and a viable warm foot. Choice A describes acute ischemia, which this exam does not show. Choice B moves the symptom to the lung. Choice C denies arterial claudication. Source: pathophysiology of stable atherosclerotic PAD, the population context for vascular regimens such as COMPASS, which is not an acute-limb regimen.",
      "teachingPoints": [
        "Claudication is exertional and relieved by rest.",
        "A warm foot with pulses argues against acute limb ischemia."
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
      "difficulty": "advanced",
      "stem": "A 74-year-old man on warfarin for AF has been in the therapeutic INR range for months. He now has worsening orthopnea, edema, and several days of poor intake during a heart-failure exacerbation. He was also prescribed a course of trimethoprim-sulfamethoxazole for bronchitis. There is no bleeding. Why should the anticoagulation plan be reassessed rather than assuming the old dose still fits?",
      "choices": [
        {
          "id": "a",
          "text": "Illness, poor intake, and the new antibiotic can move the INR off the old stable pattern"
        },
        {
          "id": "b",
          "text": "Heart failure permanently eliminates vitamin K stores, so warfarin is stopped for good"
        },
        {
          "id": "c",
          "text": "An exacerbation converts AF into a mechanical-valve indication and the INR goal becomes 4 to 5"
        },
        {
          "id": "d",
          "text": "Poor intake lowers the INR by increasing dietary vitamin K, so tonight's dose is doubled"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the interaction of illness, reduced vitamin K intake, hepatic congestion, and trimethoprim-sulfamethoxazole, which can potentiate warfarin. The dose that held a therapeutic INR last month is not assumed to hold today. Choice B stops warfarin forever. Choice C invents an INR target of 4 to 5. Choice D reverses the direction of poor intake and endorses a doubled dose. Source: warfarin sensitivity during heart-failure decompensation and with trimethoprim-sulfamethoxazole, a known potentiating antibiotic.",
      "teachingPoints": [
        "A previously stable weekly dose is not protected from acute illness.",
        "Trimethoprim-sulfamethoxazole is a classic warfarin potentiator."
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
      "difficulty": "advanced",
      "stem": "A 70-year-old man in sinus rhythm has chronic heart failure with reduced ejection fraction and known CAD. He has no AF, no VTE, and no PAD symptoms. He asks whether low-dose rivaroxaban is automatically indicated to prevent cardiovascular events. Which interpretation fits COMMANDER HF?",
      "choices": [
        {
          "id": "a",
          "text": "COMMANDER HF showed that rivaroxaban 2.5 mg twice daily reduced death, MI, or stroke in this sinus-rhythm population"
        },
        {
          "id": "b",
          "text": "COMMANDER HF did not show that benefit, so low-dose rivaroxaban is not an automatic heart-failure prescription"
        },
        {
          "id": "c",
          "text": "The COMPASS regimen is mandated for every patient with a reduced ejection fraction, with or without CAD"
        },
        {
          "id": "d",
          "text": "Sinus rhythm with heart failure is treated with an AF-treatment-dose DOAC to prevent cardioembolism"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches COMMANDER HF on this site: rivaroxaban 2.5 mg twice daily did not significantly reduce death, MI, or stroke versus placebo in worsening heart failure, sinus rhythm, and CAD. Choice A reverses the primary result. Choice C turns COMPASS into a heart-failure rule. Choice D gives an AF dose to a patient in sinus rhythm without an AF indication. Source: COMMANDER HF, as summarized on this site.",
      "teachingPoints": [
        "A negative primary trial is not an automatic prescription.",
        "Sinus rhythm plus heart failure is not an AF anticoagulation niche."
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
      "difficulty": "advanced",
      "stem": "A 67-year-old woman with diabetes and known CAD calls to report 20 minutes of chest pressure, sweating, and breathlessness at rest. The pain is not reproducible by pressing on the chest wall. She is not hypotensive on her home cuff. Which interpretation is the appropriate one?",
      "choices": [
        {
          "id": "a",
          "text": "Reproducible walking calf pain, so this is chronic claudication and can wait for a routine clinic visit"
        },
        {
          "id": "b",
          "text": "Pleuritic pain with calf swelling only, so the call is low-risk DVT and the chest symptoms are ignored"
        },
        {
          "id": "c",
          "text": "Rest chest pressure with sweating in known CAD is assessed as possible ACS, not as stable exertional disease"
        },
        {
          "id": "d",
          "text": "A completed stroke, because sweating and new breathlessness are focal neurologic signs"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C recognizes rest chest pressure with autonomic symptoms in CAD as a possible ACS presentation, which is unstable and not the same as exertional stable angina or claudication. Choice A describes leg claudication she did not report. Choice B describes a venous pattern. Choice D turns nonfocal symptoms into a completed stroke. Source: clinical pattern of ACS (rest ischemic pain) versus stable exertional atherosclerosis.",
      "teachingPoints": [
        "Rest pain with sweating is not a routine stable-angina story.",
        "Musculoskeletal pain is usually reproducible by palpation, which this is not."
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
      "stem": "A healthy 30-year-old woman with no VTE history receives a genetic report: homozygous factor V Leiden. Her sister is heterozygous for the same variant and also has no clot history. Both ask what the zygosity difference means for counseling. Which interpretation is sound?",
      "choices": [
        {
          "id": "a",
          "text": "Homozygous and heterozygous states carry the same clot risk, so zygosity can be left out of counseling"
        },
        {
          "id": "b",
          "text": "Heterozygous factor V Leiden is the higher-risk genotype of the two results"
        },
        {
          "id": "c",
          "text": "Either genotype means anticoagulation starts today, despite no personal clot and no other indication"
        },
        {
          "id": "d",
          "text": "Homozygosity carries higher risk than heterozygosity, but the genotype alone is not a VTE diagnosis"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the counseling point. Homozygous factor V Leiden carries a substantially higher relative risk of VTE than the heterozygous state, and neither genotype is itself a DVT or an automatic start of anticoagulation in an asymptomatic person. Choice A equates the risks. Choice B reverses them. Choice C starts an anticoagulant without an indication. Source: factor V Leiden gene-dose relationship; anticoagulation is for a clinical indication, not for a genotype alone. Relative-risk multiples are not printed here.",
      "teachingPoints": [
        "Zygosity changes the magnitude of risk.",
        "A genotype is not a diagnosis of current thrombosis."
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
      "stem": "A 49-year-old man is admitted with acute DVT. Warfarin was started yesterday with a heparin overlap. Protein C activity comes back low. He has no family history on file, and the sample was drawn while the INR was already rising. Which interpretation should come before anyone labels him with hereditary protein C deficiency?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin lowers functional protein C, so a low level during initiation does not prove a hereditary deficiency"
        },
        {
          "id": "b",
          "text": "A low protein C on day 1 of warfarin is diagnostic of homozygous deficiency and of skin necrosis already in progress"
        },
        {
          "id": "c",
          "text": "Heparin raises protein C, so a low value means the assay was run on the wrong drug"
        },
        {
          "id": "d",
          "text": "Protein C activity is unaffected by warfarin, vitamin K, or acute thrombosis"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the pre-analytical point: warfarin reduces vitamin K-dependent protein C, and acute thrombosis can also consume natural anticoagulants, so a low level during initiation is not a hereditary diagnosis. Choice B over-reads one value as homozygous deficiency. Choice C reverses heparin's effect; heparin does not raise protein C. Choice D denies the warfarin effect. Source: vitamin K-dependent synthesis of protein C and the requirement to interpret levels off warfarin, away from the acute clot.",
      "teachingPoints": [
        "Do not diagnose hereditary protein C deficiency from a level drawn on warfarin.",
        "Repeat testing belongs off anticoagulation and away from the acute event."
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
      "difficulty": "advanced",
      "stem": "A patient with the prothrombin G20210A variant asks how it differs from protein C deficiency. She is not currently anticoagulated. Her INR is 1.0 and she has no clot today. Which comparison is the accurate one?",
      "choices": [
        {
          "id": "a",
          "text": "Both are vitamin K-dependent protein deficiencies, so warfarin raises activity of the prothrombin variant"
        },
        {
          "id": "b",
          "text": "G20210A is a gain-of-function prothrombin mutation; protein C deficiency is loss of a natural anticoagulant"
        },
        {
          "id": "c",
          "text": "Both block platelet glycoprotein IIb/IIIa, so the only difference between them is tablet color"
        },
        {
          "id": "d",
          "text": "G20210A lowers factor II, and protein C deficiency raises factor II production"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the mechanistic contrast. Prothrombin G20210A increases prothrombin levels (a gain of function). Protein C deficiency removes a natural anticoagulant that inactivates factors Va and VIIIa. Choice A calls the mutation a vitamin K-dependent deficiency. Choice C turns both into antiplatelet targets. Choice D reverses both directions. Source: standard thrombophilia mechanisms.",
      "teachingPoints": [
        "G20210A raises prothrombin. Protein C deficiency lowers an inhibitor.",
        "They are not two names for one vitamin K problem."
      ],
      "links": [],
      "objectiveIds": [
        18
      ]
    },
    {
      "id": "i-43",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A learner points at factor Xa on a coagulation diagram while discussing a patient on apixaban for NVAF. Platelet count is normal. The learner asks why fibrin formation falls even though apixaban does not directly bind the platelet receptor blocked by aspirin. Which connection is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban blocks glycoprotein IIb/IIIa, so the factor Xa label on the diagram is decorative in clinic"
        },
        {
          "id": "b",
          "text": "Apixaban raises thrombin generation, and fibrin falls because platelets are lysed"
        },
        {
          "id": "c",
          "text": "Apixaban inhibits factor Xa, so less thrombin is generated and less fibrin is formed downstream"
        },
        {
          "id": "d",
          "text": "Apixaban inhibits vitamin K epoxide reductase, the same target as warfarin"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C follows the cascade: factor Xa converts prothrombin to thrombin, and thrombin converts fibrinogen to fibrin. Apixaban is a direct factor Xa inhibitor, not an antiplatelet drug and not a vitamin K antagonist. Choice A assigns it the glycoprotein IIb/IIIa target. Choice B reverses the thrombin effect. Choice D assigns it warfarin's target. Source: apixaban mechanism (direct factor Xa inhibition), as in the ARISTOTLE-era pharmacology on this site.",
      "teachingPoints": [
        "Factor Xa sits upstream of thrombin and fibrin.",
        "Apixaban is not an aspirin-like platelet blocker."
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
      "difficulty": "advanced",
      "stem": "Eight months after a proximal DVT, a 62-year-old man has chronic dependent swelling and aching that are worse at the end of the day and better after elevation. Those symptoms have been stable. This morning the thigh became abruptly more painful, with 4 cm of new calf asymmetry. Which distinction is the important one?",
      "choices": [
        {
          "id": "a",
          "text": "The entire months-long story is one recurrent DVT, because any symptom after a clot is a new event"
        },
        {
          "id": "b",
          "text": "The entire story is post-thrombotic syndrome, so today's new calf asymmetry can be ignored"
        },
        {
          "id": "c",
          "text": "The new thigh pain is arterial ischemia, because venous disease does not cause asymmetric swelling"
        },
        {
          "id": "d",
          "text": "Stable aching can be post-thrombotic syndrome; today's abrupt asymmetry needs a recurrence check"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D splits the timeline. Chronic dependent aching relieved by elevation fits post-thrombotic syndrome. An abrupt increase in pain and calf size can be recurrent DVT and is evaluated rather than folded into the chronic syndrome. Choice A calls months of stable symptoms a single recurrence. Choice B ignores the acute change. Choice C relabels venous swelling as arterial ischemia. Source: post-thrombotic syndrome versus suspected recurrence.",
      "teachingPoints": [
        "Chronic venous symptoms and an acute change are different questions.",
        "New asymmetry is not dismissed as the old syndrome."
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
      "difficulty": "advanced",
      "stem": "A 72-year-old man with AF, hypertension, and diabetes feels well and reports no palpitations at a clinic visit. He stopped his DOAC last month because the rhythm 'feels normal.' Heart rate is 88 beats per minute and irregular. Blood pressure is 136/78 mm Hg. There is no valve disease. Which interpretation of stroke risk is sound?",
      "choices": [
        {
          "id": "a",
          "text": "Appendage stasis and the clinical risk factors persist whether or not he feels palpitations today"
        },
        {
          "id": "b",
          "text": "A week without palpitations resets his CHA₂DS₂-VASc score to zero"
        },
        {
          "id": "c",
          "text": "Stroke risk in AF exists only during an hour when the patient can feel the irregular rhythm"
        },
        {
          "id": "d",
          "text": "Feeling well converts the indication to aspirin alone, which AVERROES showed can replace an OAC"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the mechanism and the score: AF-related stasis does not require perceived palpitations, and hypertension plus diabetes plus age still count. AVERROES found apixaban superior to aspirin for stroke prevention in AF when a vitamin K antagonist was unsuitable, so aspirin is not the substitute once OAC is indicated. Choice B zeros the score. Choice C limits risk to symptomatic minutes. Choice D reverses AVERROES. Source: AF pathophysiology and AVERROES, as on this site.",
      "teachingPoints": [
        "Asymptomatic AF still stasis-prone.",
        "Aspirin did not match apixaban in AVERROES."
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
      "difficulty": "advanced",
      "stem": "A 68-year-old woman on apixaban for AF had 15 minutes of unilateral arm weakness and trouble finding words. The deficits have resolved by the time she is assessed. Glucose is 102 mg/dL. Blood pressure is 150/88 mm Hg. She wants to go home because the episode ended. Why does resolution not close the evaluation?",
      "choices": [
        {
          "id": "a",
          "text": "Resolved arm weakness is always a seizure, so vascular imaging and stroke pathways are irrelevant in clinic"
        },
        {
          "id": "b",
          "text": "A transient ischemic attack is a warning ischemic event, and being on apixaban does not make it benign"
        },
        {
          "id": "c",
          "text": "Resolution proves the cause was an intracranial hemorrhage that has already reabsorbed"
        },
        {
          "id": "d",
          "text": "A deficit lasting under one hour is musculoskeletal, so no vascular cause is still possible"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B treats a focal deficit that resolves as a TIA, which carries short-term stroke risk and still needs urgent evaluation. Being on apixaban does not make the episode meaningless, and it does not distinguish ischemia from hemorrhage without assessment. Choice A assumes a seizure. Choice C assumes a bleed that vanished. Choice D dismisses a focal pattern as musculoskeletal. Source: TIA as a medical emergency despite symptom resolution.",
      "teachingPoints": [
        "Resolution is the definition of a TIA, not a reason to skip care.",
        "Anticoagulant use does not identify the cause."
      ],
      "links": [],
      "objectiveIds": [
        14
      ]
    },
    {
      "id": "i-47",
      "domainId": "I",
      "difficulty": "advanced",
      "stem": "A 61-year-old woman with active pancreatic cancer walks her dog daily and is between chemotherapy cycles. She has no clot history and no bleeding. She asks whether every outpatient on cancer treatment needs prophylactic anticoagulation. Which interpretation matches a risk-based approach?",
      "choices": [
        {
          "id": "a",
          "text": "Every outpatient prescription for any cancer drug includes a treatment-dose DOAC from day 1"
        },
        {
          "id": "b",
          "text": "No outpatient with cancer is ever considered for prophylaxis, regardless of cancer site or other risk"
        },
        {
          "id": "c",
          "text": "Risk varies by cancer, treatment, and mobility, so prophylaxis is not automatic for every outpatient"
        },
        {
          "id": "d",
          "text": "Cancer prophylaxis is the same as treating an acute DVT, so lead-in doses start without a diagnosed clot"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the risk-based reading. Ambulatory cancer prophylaxis was tested in selected high-risk patients (AVERT used apixaban 2.5 mg twice daily in higher-risk outpatients; CASSINI used rivaroxaban 10 mg daily and did not meet its primary endpoint). It is not a rule that every mobile outpatient starts anticoagulation, and it is not acute VTE treatment dosing. Choice A uses treatment intensity for everyone. Choice B forbids any prophylaxis. Choice D confuses prophylaxis with acute treatment. Source: AVERT and CASSINI, as carried on this site, which show selected outpatient strategies rather than a universal rule.",
      "teachingPoints": [
        "Khorana-type risk and cancer site change the question.",
        "A prophylaxis study is not an acute VTE lead-in regimen."
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
      "difficulty": "advanced",
      "stem": "A 76-year-old man with AF has a bioprosthetic mitral valve placed 14 months ago. He asks whether the anticoagulant restrictions of a mechanical valve automatically apply, because both devices are 'valve surgery.' Kidney function is stable and there is no antiphospholipid syndrome. Which distinction anchors the discussion?",
      "choices": [
        {
          "id": "a",
          "text": "A tissue valve is managed exactly as a mechanical mitral valve, including a ban on every DOAC and an INR target of 3.5 to 4.5"
        },
        {
          "id": "b",
          "text": "AF with a tissue mitral valve forbids anticoagulation of any kind once 3 months have passed"
        },
        {
          "id": "c",
          "text": "Rivaroxaban is contraindicated in AF with a bioprosthetic mitral valve because RIVER favored warfarin"
        },
        {
          "id": "d",
          "text": "A mechanical prosthesis and a tissue valve are different niches, and RIVER did not treat the tissue valve as mechanical"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the distinction this site draws with RIVER: AF with a bioprosthetic mitral valve is not the mechanical-valve ban, and RIVER compared rivaroxaban with warfarin in that bioprosthetic population. Mechanical valves remain a VKA niche (RE-ALIGN). Choice A invents an INR range of 3.5 to 4.5 and applies the mechanical ban to tissue. Choice B drops the AF indication. Choice C reverses the reason RIVER is cited. Source: RIVER and the mechanical-valve contrast on this site.",
      "teachingPoints": [
        "Read the prosthesis before applying a mechanical-valve rule.",
        "AF can still be an OAC indication after a tissue valve."
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
      "difficulty": "advanced",
      "stem": "A new anticoagulation service is building the intake record for a 69-year-old starting therapy. The clerk saved the medication name only. The patient has AF, a prior bleed, a serum creatinine drawn last week, and a P-glycoprotein inhibitor on the list. Which information actually supports longitudinal management?",
      "choices": [
        {
          "id": "a",
          "text": "Tablet color and pharmacy brand, with no indication, no dose, and no kidney function in clinic"
        },
        {
          "id": "b",
          "text": "A signed brochure, which replaces both the indication and the interaction check"
        },
        {
          "id": "c",
          "text": "The time of day the patient prefers phone calls, recorded as the only clinical field"
        },
        {
          "id": "d",
          "text": "Indication, dose, kidney function, bleed history, interacting drugs, and the monitoring plan"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the problem-oriented intake: why the anticoagulant exists, the exact regimen, whether kidney function still fits that regimen, prior bleeding, interacting drugs, and who monitors. Choice A keeps the commercial appearance. Choice B treats education paperwork as the clinical record. Choice C keeps a logistics preference and drops the medicine. Source: anticoagulation-service documentation practice on this site's appropriateness framework.",
      "teachingPoints": [
        "The indication is what later tells you whether a dose still fits.",
        "An interacting drug and a creatinine belong in the first note."
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
      "stem": "A 63-year-old man on apixaban for AF is admitted with new ascites, jaundice, and an INR of 1.8 that he did not have last month. He is not on warfarin. Bilirubin and the prothrombin time are both newly abnormal. The refill is due. Which assessment comes before the previous regimen is renewed?",
      "choices": [
        {
          "id": "a",
          "text": "New coagulopathy with decompensated liver disease is not an automatic DOAC renewal"
        },
        {
          "id": "b",
          "text": "Double the apixaban dose, because ascites dilutes every oral anticoagulant equally"
        },
        {
          "id": "c",
          "text": "Ignore the liver disease and titrate apixaban until the INR returns to 1.0"
        },
        {
          "id": "d",
          "text": "Switch to rivaroxaban 20 mg solely because factor Xa inhibitors are safer in hepatic failure"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A stops the autopilot refill. Decompensated cirrhosis with new coagulopathy changes bleeding risk and falls under labeled hepatic cautions and exclusions for oral factor Xa inhibitors, so the prior dose is not renewed until that eligibility is rechecked. Choice B invents a double dose. Choice C uses the INR as a DOAC target. Choice D switches factor Xa inhibitors as if hepatic failure were a reason to prefer one. Source: product labeling on hepatic impairment for factor Xa inhibitors. No Child-Pugh letter is used as the key.",
      "teachingPoints": [
        "New coagulopathy plus decompensated liver disease reopens the drug choice.",
        "An INR is not the apixaban dose knob."
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
      "difficulty": "advanced",
      "stem": "A 79-year-old man on warfarin has missed three INR visits. The only bus route to the clinic was canceled. He is taking the tablets and has no bleeding. A note calls him nonadherent and discharges him from the service. Which plan addresses the barrier that is actually present?",
      "choices": [
        {
          "id": "a",
          "text": "Discharge him, because three missed visits mean he does not want anticoagulation"
        },
        {
          "id": "b",
          "text": "Restore a way to get INRs, and keep a clinician responsible for the result"
        },
        {
          "id": "c",
          "text": "Stop warfarin permanently and name no replacement, because lack of a bus route is a contraindication"
        },
        {
          "id": "d",
          "text": "Double the home dose so he no longer needs INR checks at the clinic"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B treats a canceled bus route as an access failure, not as a refusal of therapy. The service arranges another way to obtain INRs and keeps a clinician responsible for the result. Choice A closes the chart. Choice C drops the indication because of transit. Choice D removes monitoring by escalating the dose. Source: adherence and access practice for warfarin monitoring.",
      "teachingPoints": [
        "Name the barrier before labeling the patient.",
        "Monitoring has to move with the patient, not disappear."
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
      "stem": "A 58-year-old woman with controlled focal seizures takes carbamazepine. She has new NVAF, a CHA₂DS₂-VASc score of 4, weight 70 kg, and creatinine clearance 78 mL/min. A colleague orders apixaban 5 mg twice daily on top of the antiseizure drug. Which plan handles both conditions?",
      "choices": [
        {
          "id": "a",
          "text": "Continue both, because carbamazepine changes warfarin exposure and does not affect any DOAC"
        },
        {
          "id": "b",
          "text": "Stop the antiseizure drug today, with no neurology input, so the DOAC can be started"
        },
        {
          "id": "c",
          "text": "Do not pair apixaban with this inducer; follow the label, and ask neurology before changing the seizure drug"
        },
        {
          "id": "d",
          "text": "Use rivaroxaban 2.5 mg twice daily plus aspirin, which avoids the inducer restriction and still treats AF"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C follows the apixaban label: strong combined CYP3A4 and P-glycoprotein inducers, including carbamazepine, are avoided because they lower exposure. Stopping carbamazepine abruptly is a seizure risk and is a neurology decision, not an anticoagulation shortcut. Choice A denies the induction. Choice B stops the seizure drug unilaterally. Choice D uses a vascular dose that does not treat AF and does not solve an inducer problem for a full-dose factor Xa inhibitor. Source: ELIQUIS prescribing information, drug interactions, strong inducers.",
      "teachingPoints": [
        "An inducer can make a correct-looking AF dose too small.",
        "An abrupt stop of the seizure drug is a neurology decision, not an anticoagulation shortcut."
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
      "stem": "A 6-year-old with acute VTE gags on tablets. A parent proposes opening dabigatran capsules into applesauce, using a relative's AF dose. The child has normal kidneys and no mechanical valve. Which assessment best supports anticoagulant selection?",
      "choices": [
        {
          "id": "a",
          "text": "Opening dabigatran capsules into food is always acceptable, and the adult AF dose is used unchanged in clinic"
        },
        {
          "id": "b",
          "text": "Aspirin is substituted for anticoagulation until the child is old enough to swallow tablets"
        },
        {
          "id": "c",
          "text": "The adult 2-of-3 apixaban rule is applied using the child's age in years as one of the criteria"
        },
        {
          "id": "d",
          "text": "Use a formulation and a pediatric reference the child can take, not an opened adult capsule at an AF dose"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D keeps selection inside a pediatric reference and a formulation that can be administered. Dabigatran capsules are swallowed whole in ordinary adult use, and an adult AF dose is not this child's VTE dose. Choice A opens the capsule and copies the adult dose. Choice B substitutes aspirin. Choice C applies an older-adult dose-reduction rule to a child. No milligram dose is stated. Source: dabigatran capsule-handling principle and the separation of pediatric VTE dosing from adult AF dosing.",
      "teachingPoints": [
        "Formulation and a pediatric reference come before the first dose.",
        "An adult AF regimen is the wrong template."
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
      "difficulty": "advanced",
      "stem": "An 82-year-old patient on a stable warfarin dose develops poor intake during a viral illness and starts trimethoprim-sulfamethoxazole. The INR today is 6.8. There is no bleeding, no fall, and hemoglobin is unchanged. Which reasoning fits the INR?",
      "choices": [
        {
          "id": "a",
          "text": "The antibiotic and poor intake explain the INR of 6.8, and this nonbleeding value is not a 4F-PCC case"
        },
        {
          "id": "b",
          "text": "An INR of 6.8 with no bleeding is major hemorrhage and is treated with idarucizumab"
        },
        {
          "id": "c",
          "text": "Poor intake always lowers the INR, so tonight's warfarin dose is doubled"
        },
        {
          "id": "d",
          "text": "Trimethoprim-sulfamethoxazole induces warfarin metabolism, so the INR rise must be a laboratory error"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A links two potentiators: less vitamin K intake and trimethoprim-sulfamethoxazole. An INR of 6.8 without bleeding is not major hemorrhage and is not treated with a PCC reversal bundle or with dabigatran's antibody. The 2012 CHEST suggestion is against routine vitamin K when the INR is between 4.5 and 10 and there is no bleeding; the warfarin dose is reassessed instead. Choice B calls a nonbleeding INR major bleeding and picks the wrong antidote. Choice C reverses the effect of poor intake. Choice D reverses the antibiotic's direction. Source: warfarin interaction teaching and the 2012 CHEST suggestion on nonbleeding supratherapeutic INRs.",
      "teachingPoints": [
        "Name the interacting antibiotic before calling the INR a lab error.",
        "No bleeding means this is not a PCC case."
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
      "difficulty": "advanced",
      "stem": "A fingerstick INR is 5.2. The patient's last four venous INRs were 2.2 to 2.6 on a stable dose. A same-day venous INR is 2.4. The fingerstick was done with a cold hand and a small sample. There is no bleeding. What is the best interpretation of the disagreement?",
      "choices": [
        {
          "id": "a",
          "text": "The fingerstick of 5.2 is the new baseline, and vitamin K is given even though it sits outside the recent trend"
        },
        {
          "id": "b",
          "text": "The venous INR fits the trend and the fingerstick is the outlier, so today's dose is not taken from the meter"
        },
        {
          "id": "c",
          "text": "Average 5.2 and 2.4 and aim the next warfarin dose at a blended INR of 3.8"
        },
        {
          "id": "d",
          "text": "Any disagreement between meter and laboratory means warfarin is stopped permanently"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B treats the venous INR that continues the trend as the dosing result and the poorly obtained fingerstick as the outlier. Choice A acts on the outlier and adds vitamin K. Choice C invents a target between the two. Choice D stops a needed anticoagulant because two methods disagreed once. Source: interpretation of discordant point-of-care and venous INRs.",
      "teachingPoints": [
        "Look at the trend before reacting to one meter result.",
        "Technique (cold hand, small sample) is a reason to distrust the outlier."
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
      "difficulty": "advanced",
      "stem": "A 68-year-old man on apixaban 5 mg twice daily, last dose 3 hours ago, has a normal INR of 1.1 before emergency surgery. The team documents that anticoagulation has worn off because the INR is normal. He has normal kidney function. Which conclusion is appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "A normal INR proves apixaban is absent and surgery can ignore the last dose"
        },
        {
          "id": "b",
          "text": "The INR should be raised with vitamin K before any DOAC case goes to the operating room"
        },
        {
          "id": "c",
          "text": "A normal INR does not measure apixaban, and a dose 3 hours ago is still clinically relevant"
        },
        {
          "id": "d",
          "text": "Apixaban is monitored by the activated partial thromboplastin time, and a normal INR sets that time"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the laboratory point. The INR is insensitive to apixaban and is not used to declare the effect gone. A dose taken 3 hours ago is near peak effect. Choice A clears the drug with the wrong test. Choice B gives vitamin K for a drug that is not a vitamin K antagonist. Choice D confuses the INR with an activated partial thromboplastin time monitoring plan used for unfractionated heparin. Source: apixaban labeling and standard DOAC laboratory teaching: routine INR monitoring is not the dosing method.",
      "teachingPoints": [
        "Do not clear a factor Xa inhibitor with an INR.",
        "Timing of the last dose still matters when the INR is normal."
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
      "stem": "A 44-year-old woman with a first unprovoked proximal DVT, now on apixaban for 2 weeks, asks for a full inherited thrombophilia panel today. She has no family history in the chart yet. Which approach keeps the testing interpretable?",
      "choices": [
        {
          "id": "a",
          "text": "Draw protein C, protein S, and antithrombin today, because a DOAC does not affect activity assays"
        },
        {
          "id": "b",
          "text": "Draw a clot-based lupus anticoagulant today and treat a positive result as diagnostic"
        },
        {
          "id": "c",
          "text": "Start lifelong warfarin solely because the panel has not been drawn yet"
        },
        {
          "id": "d",
          "text": "Defer activity and clot-based assays until she is off anticoagulation and away from the acute clot"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D respects assay interference. Apixaban can disturb clot-based lupus anticoagulant tests and other clot-based assays, and acute thrombosis plus anticoagulation distorts protein C, protein S, and antithrombin interpretation. Factor V Leiden and prothrombin G20210A are DNA tests and are not cleared by stopping a DOAC, but they are not the whole panel she requested. Choice A draws the activity assays on therapy. Choice B treats a DOAC-era clot-based result as definitive. Choice C starts warfarin because a tube has not been sent. Source: thrombophilia testing practice and known DOAC interference with clot-based assays.",
      "teachingPoints": [
        "Acute thrombosis and a DOAC both spoil parts of the panel.",
        "A DNA test is not the same as a protein activity."
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
      "stem": "Four days after warfarin is started for acute VTE, with a heparin overlap, a 55-year-old woman develops painful, dark, well-demarcated skin lesions on the thigh. External bleeding is absent. Platelets are stable. INR is 2.2. Which assessment fits this finding?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin-associated skin necrosis, a serious nonbleeding complication, not a bruise to watch at home"
        },
        {
          "id": "b",
          "text": "Expected heparin bruising, which is ignored because the INR is already in the target range"
        },
        {
          "id": "c",
          "text": "A minor local allergic rash, treated by increasing the daily warfarin dose"
        },
        {
          "id": "d",
          "text": "Heparin-induced thrombocytopenia, diagnosed from skin color alone without any fall in the platelet count"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A recognizes warfarin-associated skin necrosis: painful dark lesions early in therapy, classically when protein C falls before prothrombin, and not dependent on external bleeding. It is a stop-and-reassess emergency, not a home observation. Choice B calls it ordinary bruising. Choice C increases the warfarin dose. Choice D diagnoses heparin-induced thrombocytopenia without a platelet fall. Source: warfarin-induced skin necrosis as a nonhemorrhagic adverse event of initiation.",
      "teachingPoints": [
        "Painful dark plaques in the first days are not routine bruising.",
        "An in-range INR does not make the lesions benign."
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
      "difficulty": "advanced",
      "stem": "A hospitalized patient with active cancer and markedly reduced mobility has a high medical VTE risk score. He is also passing melena, and the hemoglobin fell from 11 to 7 g/dL overnight. Which prevention approach is the one to evaluate?",
      "choices": [
        {
          "id": "a",
          "text": "Treatment-dose apixaban, because a high risk score means a clot is already present"
        },
        {
          "id": "b",
          "text": "Mechanical prophylaxis, because pharmacologic prophylaxis is a poor fit during active bleeding"
        },
        {
          "id": "c",
          "text": "An inferior vena cava filter as the default prevention device for every high score"
        },
        {
          "id": "d",
          "text": "Aspirin 325 mg, because gastrointestinal bleeding is a reason to choose an antiplatelet in clinic"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B separates risk from bleeding: the patient may still need mechanical prophylaxis (intermittent pneumatic compression) while melena and a falling hemoglobin make a pharmacologic dose unsafe. Choice A treats a risk score as a diagnosed clot and uses treatment intensity. Choice C makes a filter the default; filters are not routine prophylaxis. Choice D adds an antiplatelet during gastrointestinal bleeding. Source: VTE prevention principles when pharmacologic prophylaxis is contraindicated.",
      "teachingPoints": [
        "A high risk score does not override active bleeding.",
        "Mechanical measures are the alternative to evaluate, not a filter by default."
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
      "difficulty": "advanced",
      "stem": "A hospital changes a patient from enoxaparin to apixaban at discharge for acute PE. The discharge summary lists both 'enoxaparin 1 mg/kg twice daily' and 'apixaban 5 mg twice daily' as active. The patient is on day 8, after a completed lead-in. Which action prevents an unintended overlap?",
      "choices": [
        {
          "id": "a",
          "text": "Continue both, because two anticoagulants are safer than one during the first outpatient week"
        },
        {
          "id": "b",
          "text": "Stop apixaban and restart the acute 10 mg lead-in, because any list that mentions heparin cancels the oral drug"
        },
        {
          "id": "c",
          "text": "Reconcile to a single active anticoagulant and remove the parenteral order once the oral regimen is the plan"
        },
        {
          "id": "d",
          "text": "Add warfarin the same day, because three agents are the standard handoff"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the reconciliation: two full-intensity anticoagulants at once are a bleeding error, and the summary has to show one active plan. On day 8 the apixaban lead-in is already behind the patient if it was completed, so the maintenance oral regimen is the one to keep and the enoxaparin order is the one to retire. Choice A overlaps them. Choice B restarts a lead-in because of a documentation artifact. Choice D adds a third agent. Source: anticoagulation discharge reconciliation.",
      "teachingPoints": [
        "One intended anticoagulant should appear as the active drug.",
        "A copied order is not a reason to double the class."
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
      "difficulty": "advanced",
      "stem": "After a major nosebleed, the emergency clinician tells a patient on warfarin to stop for 3 days. The anticoagulation clinic's note, written the same afternoon, says continue and recheck the INR tomorrow. The patient calls, confused. Which follow-up design fixes this?",
      "choices": [
        {
          "id": "a",
          "text": "Whichever instruction the patient remembers last becomes the plan, and no clinician owns it in clinic"
        },
        {
          "id": "b",
          "text": "The emergency note always overrides, and the anticoagulation clinic then closes the chart"
        },
        {
          "id": "c",
          "text": "The clinic note always overrides, and the emergency visit is left out of the record"
        },
        {
          "id": "d",
          "text": "One reconciled plan with a named owner, covering the bleed, the next INR, and when therapy resumes"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the design: conflicting instructions are a safety event, and the cure is a single plan with a named owner that accounts for the bleed and the original indication. Choice A leaves the patient as the tie-breaker. Choice B or C lets one service erase the other without a conversation. Source: post-bleed transitions practice.",
      "teachingPoints": [
        "Two truthful-sounding notes can still harm if they disagree.",
        "The resume decision needs an owner and a time."
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
      "difficulty": "advanced",
      "stem": "A 60-year-old woman is at a planned stop visit after 3 months of anticoagulation for a DVT that followed ankle surgery. The surgery has healed. This week she was diagnosed with pancreatic cancer. She is not bleeding. Which reassessment fits?",
      "choices": [
        {
          "id": "a",
          "text": "Do not stop on the old surgical date; active cancer reopens duration and is managed as cancer-associated VTE"
        },
        {
          "id": "b",
          "text": "Stop today, because the original provocation was surgery and a new cancer diagnosis does not count"
        },
        {
          "id": "c",
          "text": "Place an inferior vena cava filter and stop anticoagulation, because cancer forbids anticoagulant drugs"
        },
        {
          "id": "d",
          "text": "Restart an acute lead-in dose every 3 months for life, with no further duration review"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A updates the phenotype. A transient surgical provocation would have supported a finite course, but new active cancer is a persistent risk, and cancer-associated VTE is not stopped at the original 3-month date by reflex. Choice B follows the outdated calendar. Choice C substitutes a filter for anticoagulation. Choice D restarts acute dosing on a loop. Source: 2021 CHEST and cancer-VTE duration practice: active cancer is not a resolved transient risk.",
      "teachingPoints": [
        "A new cancer diagnosis changes the stop decision.",
        "The original surgical story is no longer the whole risk."
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
      "difficulty": "advanced",
      "stem": "A man on a previously stable warfarin dose starts a diet that removes most green vegetables and also starts St John's wort for mood. The INR swings from 1.6 to 3.9 over two weeks. He reports no missed doses. Which review best addresses the likely causes?",
      "choices": [
        {
          "id": "a",
          "text": "Adherence only, because diet and herbal products cannot move the INR when every dose was taken"
        },
        {
          "id": "b",
          "text": "Both the drop in dietary vitamin K and the inducing herb, which can pull the INR in opposite directions"
        },
        {
          "id": "c",
          "text": "St John's wort alone, on the assumption that it always raises the INR the way an antibiotic does"
        },
        {
          "id": "d",
          "text": "A permanent INR target of 3.5 to 4.5, because any supplement turns AF into a mechanical-valve problem now"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B reviews both exposures. Cutting vitamin K–rich foods can raise the INR. St John's wort induces warfarin metabolism and can lower the INR. Together they make a swinging INR without missed doses. Choice A ignores both. Choice C gives the herb the wrong direction. Choice D invents a valve-range target. Source: warfarin interactions with dietary vitamin K and with St John's wort.",
      "teachingPoints": [
        "A stable pill count does not clear diet and herb effects.",
        "Inducers and vitamin K deficiency move the INR in opposite directions."
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
      "difficulty": "advanced",
      "stem": "A 71-year-old man on rivaroxaban has ongoing melena, systolic blood pressure 84 mm Hg, and a hemoglobin of 6.5 g/dL in a United States hospital. He is dizzy and last took the tablet 5 hours ago. Which pathway matches this site's current teaching?",
      "choices": [
        {
          "id": "a",
          "text": "Andexanet alfa, ordered as the current United States antidote for this factor Xa bleed"
        },
        {
          "id": "b",
          "text": "Idarucizumab, because gastrointestinal bleeding on any oral anticoagulant uses that antibody"
        },
        {
          "id": "c",
          "text": "Supportive resuscitation plus the institutional 4F-PCC pathway for this life-threatening factor Xa bleed"
        },
        {
          "id": "d",
          "text": "A clinic visit in 48 hours and no reversal talk, because melena with hypotension is always minor in clinic"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C matches post-withdrawal United States teaching on this site: life-threatening rivaroxaban bleeding is supportive care plus institutional 4F-PCC, not andexanet, which was withdrawn effective 22 December 2025. Choice A orders the withdrawn product. Choice B uses dabigatran's specific antibody. Choice D delays care of shock. Source: FDA safety communication as used on this site's major-bleed framework.",
      "teachingPoints": [
        "Hypotension and ongoing melena define major bleeding.",
        "Name rivaroxaban before picking an antidote."
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
      "difficulty": "advanced",
      "stem": "A patient on apixaban for AF is scheduled for a cataract extraction that the ophthalmologist classifies as low bleeding risk. The generic instruction says stop all blood thinners for 5 days and use heparin shots. Creatinine clearance is 70 mL/min. There is no mechanical valve. Which planning step should occur first?",
      "choices": [
        {
          "id": "a",
          "text": "Give heparin for 5 days, because PAUSE bridged every cataract extraction in patients with AF"
        },
        {
          "id": "b",
          "text": "Stop apixaban for 5 days even though the ophthalmologist does not require a hold for this extraction"
        },
        {
          "id": "c",
          "text": "Order an anti-Xa level the morning of surgery, because the PAUSE protocol required a drug level"
        },
        {
          "id": "d",
          "text": "If a hold is needed, PAUSE omitted the DOAC for 1 day before this low-risk procedure, with no bridge"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D follows the order of operations on this site and in PAUSE. First ask whether the low-risk procedure requires a hold. If it does, PAUSE omitted apixaban, dabigatran, or rivaroxaban for 1 day before a low-bleeding-risk procedure and for 2 days before a high-bleeding-risk procedure (2 and 4 days for dabigatran with a creatinine clearance below 50 mL/min), without heparin bridging and without preoperative coagulation testing. Choice A adds a bridge PAUSE did not use. Choice B imposes a 5-day hold. Choice C invents a required anti-Xa. Edoxaban was not in PAUSE. Source: PAUSE, as summarized on this site.",
      "teachingPoints": [
        "Many low-risk procedures never needed a hold.",
        "PAUSE's low-risk omission was 1 day, without a heparin bridge."
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
      "difficulty": "advanced",
      "stem": "A patient performs home INR testing with good technique and reports results reliably. She now wants to change the warfarin dose herself whenever a result 'looks high,' without a written plan. Which distinction should the clinic explain?",
      "choices": [
        {
          "id": "a",
          "text": "Self-testing reports a result to a clinician who adjusts the dose"
        },
        {
          "id": "b",
          "text": "Any successful fingerstick authorizes unsupervised dose changes that same day"
        },
        {
          "id": "c",
          "text": "Home testing replaces the need for a clinician entirely, including for bleeding calls"
        },
        {
          "id": "d",
          "text": "A single class certificate from another disease makes her a warfarin prescriber"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A separates patient self-testing from patient self-management. She has shown the testing half. Dose changes remain with the clinician unless a formal self-management program and a dosing algorithm are in place. Choice B treats technique as prescribing authority. Choice C removes the clinician. Choice D imports an unrelated certificate. Source: home INR program design on this site.",
      "teachingPoints": [
        "Getting a drop of blood is not the same as changing the dose.",
        "The reporting path she already uses is the self-testing model."
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
      "difficulty": "advanced",
      "stem": "During home INR training, a patient cannot obtain an adequate sample after coaching and does not know how an unexpected result would reach the clinic. He is eager and owns the meter. What is the eligibility conclusion?",
      "choices": [
        {
          "id": "a",
          "text": "Eagerness plus a purchased meter is enough to start unsupervised testing tonight"
        },
        {
          "id": "b",
          "text": "He is not eligible yet, because both technique and a reporting plan are unmet"
        },
        {
          "id": "c",
          "text": "He may test at home if he promises to double the dose when the meter errors"
        },
        {
          "id": "d",
          "text": "Failed training means warfarin is stopped and a DOAC is mandatory the same day"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the eligibility conclusion: home testing requires a demonstrated sample and a known reporting path. Neither is present. Choice A substitutes motivation. Choice C builds an error into a dose increase. Choice D converts a training failure into an immediate drug-class change that has not been clinically assessed. Source: home INR competency criteria.",
      "teachingPoints": [
        "Competence is demonstrated, not promised.",
        "A meter in the home is not a passed competency."
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
      "difficulty": "advanced",
      "stem": "A point-of-care INR operator finds that the test strips were left in a hot car, outside the manufacturer's storage range. A patient is in the chair expecting a warfarin dose. Controls have not been run on this lot today. Which procedure protects the result?",
      "choices": [
        {
          "id": "a",
          "text": "Run the patient now, because a person waiting in the chair outranks the storage rules"
        },
        {
          "id": "b",
          "text": "Use the hot-car strips if the first number looks close to last month's INR"
        },
        {
          "id": "c",
          "text": "Quarantine the strips, release no result from them, and get a venous INR if a dose is due"
        },
        {
          "id": "d",
          "text": "Average a result from the overheated strips with last month's venous INR and dose from that"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C protects the patient from a result the storage conditions do not support. The strips are quarantined, no INR is released from them, and a venous sample is the route to a dose today. Choice A prioritizes throughput. Choice B uses a plausible-looking number as quality control. Choice D mixes a bad sample with an old result. Source: point-of-care storage and quality-control practice.",
      "teachingPoints": [
        "Manufacturer storage limits are part of the test.",
        "A convenient number is not a control."
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
      "difficulty": "advanced",
      "stem": "A 76-year-old man on warfarin calls after a fall with head impact. He is increasingly drowsy, vomited once, and has a new headache. The family asks whether this can wait for tomorrow's INR. Which triage response fits?",
      "choices": [
        {
          "id": "a",
          "text": "Wait for tomorrow's scheduled INR, because drowsiness after a head strike is expected and benign"
        },
        {
          "id": "b",
          "text": "Have him take an extra warfarin dose tonight in case the fall was an embolic event"
        },
        {
          "id": "c",
          "text": "Reassure by phone if the last INR was in range, because a therapeutic INR excludes intracranial bleeding"
        },
        {
          "id": "d",
          "text": "Emergency assessment now: head impact plus worsening alertness on an anticoagulant can be intracranial bleeding"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the triage: progressive drowsiness, vomiting, and headache after head impact on an anticoagulant are emergency features of possible intracranial hemorrhage. An in-range historical INR does not exclude bleeding, and tomorrow's blood draw is the wrong clock. Choice A delays. Choice B adds warfarin. Choice C uses the last INR as proof. Source: post-trauma anticoagulant triage.",
      "teachingPoints": [
        "Worsening alertness after head impact is not a next-day lab.",
        "A past INR does not rule out bleeding tonight."
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
      "stem": "A 59-year-old man on apixaban for a prior PE reports a newly painful, swollen leg. He has missed several doses during a trip, and his weight and serum creatinine have not been rechecked in a year. Cancer screening is not documented. Which evaluation precedes a declaration of anticoagulant failure?",
      "choices": [
        {
          "id": "a",
          "text": "Check missed doses and whether the dose still fits before calling the drug a failure"
        },
        {
          "id": "b",
          "text": "Label the drug a failure immediately and add aspirin plus a second full-dose DOAC"
        },
        {
          "id": "c",
          "text": "Place an inferior vena cava filter and stop anticoagulation, because one new swollen leg proves drug failure"
        },
        {
          "id": "d",
          "text": "Ignore the leg, because symptoms that appear while a DOAC is prescribed cannot be new VTE"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the workup before the word 'failure.' Missed doses are a common reason for a new clot on therapy. Kidney function and, for apixaban, the labeled AF or VTE dose rules may have changed. A new cancer or antiphospholipid syndrome can present as breakthrough thrombosis. Choice B stacks drugs. Choice C jumps to a filter; PREPIC2 does not support routine filters in anticoagulated PE, and this symptom has not even been imaged. Choice D denies that breakthrough VTE exists. Source: assessment of suspected anticoagulant failure.",
      "teachingPoints": [
        "Missed doses are the common 'failure.'",
        "Recompute eligibility before adding a second anticoagulant."
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
      "difficulty": "advanced",
      "stem": "A hemodynamically stable patient with PE is started on anticoagulation and asks for a retrievable inferior vena cava filter 'for extra protection.' There is no contraindication to anticoagulation and no planned interruption. Which PREPIC2 reading fits?",
      "choices": [
        {
          "id": "a",
          "text": "PREPIC2 showed filters cut recurrent PE in half when added to anticoagulation"
        },
        {
          "id": "b",
          "text": "Adding a retrievable filter to anticoagulation did not reduce symptomatic recurrent PE at 3 months"
        },
        {
          "id": "c",
          "text": "PREPIC2 forbids anticoagulation once a filter is placed"
        },
        {
          "id": "d",
          "text": "Filters are mandatory for every stable PE because the trial excluded anticoagulated patients"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is PREPIC2 on this site: symptomatic recurrent PE at 3 months was 3.0% with a filter plus anticoagulation versus 1.5% with anticoagulation alone (relative risk 2.00; 95% CI 0.51 to 7.89; P = .50). Adding a filter did not reduce recurrent PE. Choice A reverses the result. Choice C stops the drug the trial continued. Choice D claims the trial excluded anticoagulated patients; both arms were anticoagulated. Source: PREPIC2 card.",
      "teachingPoints": [
        "Anticoagulation is the treatment. A filter is not routine extra protection.",
        "The confidence interval and the point estimates do not show a benefit."
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
      "stem": "A PE team is discussing catheter options for a normotensive patient with right-ventricular strain who is already on anticoagulation and is not bleeding. One clinician uses 'thrombectomy' and 'catheter-directed thrombolysis' as synonyms. Which distinction is essential before either is selected?",
      "choices": [
        {
          "id": "a",
          "text": "They are the same procedure, so the two names do not change bleeding risk or the consent"
        },
        {
          "id": "b",
          "text": "Either catheter treatment is mandatory for every normotensive PE that has any biomarker rise"
        },
        {
          "id": "c",
          "text": "Device removal and catheter thrombolysis differ, and risk class comes before either is chosen"
        },
        {
          "id": "d",
          "text": "Catheter therapy replaces anticoagulation, so the heparin or DOAC stops as soon as a device is mentioned"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C separates the procedures. Catheter-directed thrombolysis infuses a fibrinolytic; mechanical thrombectomy removes clot with a device and does not automatically include that infusion. They are not synonyms, and choosing either still depends on whether the patient is high-risk, intermediate-risk, or low-risk, plus local expertise. This patient is normotensive with right-ventricular strain, which is intermediate-risk, not an automatic catheter case and not a reason to stop anticoagulation. Choice A collapses the procedures. Choice B mandates a procedure for every biomarker. Choice D stops the anticoagulant. Source: distinction between catheter modalities in PE, consistent with this site's intermediate-PE teaching that systemic lysis is not routine in normotensive patients.",
      "teachingPoints": [
        "Name the procedure. Lytic infusion and device extraction are not the same consent.",
        "Intermediate-risk PE is not an automatic catheter indication."
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
      "stem": "A 77-year-old woman with AF and recurrent major gastrointestinal bleeding is considering left atrial appendage occlusion. She declines follow-up imaging and says she will not take the post-implant antithrombotic regimen because she wants to be 'done with blood thinners.' Which concern is the central one?",
      "choices": [
        {
          "id": "a",
          "text": "The implant erases stroke risk the moment it is placed, so follow-up imaging is optional marketing"
        },
        {
          "id": "b",
          "text": "Post-implant antithrombotic therapy and imaging surveillance are optional if bleeding was the reason for referral"
        },
        {
          "id": "c",
          "text": "Appendage occlusion is a treatment for acute DVT and does not involve the left atrium"
        },
        {
          "id": "d",
          "text": "Device-related thrombus surveillance and the post-implant regimen are part of candidacy, not optional extras"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches this site's appendage-occlusion teaching: the procedure trades procedural and post-implant antithrombotic risk against long-term oral anticoagulation, and it is not 'set and forget.' Inability to complete imaging surveillance or the planned post-implant regimen is a candidacy problem. Choice A treats placement as the end of risk. Choice B drops the follow-up because bleeding was the indication. Choice C relocates the procedure to the leg. Source: left atrial appendage occlusion framework on this site.",
      "teachingPoints": [
        "Bleeding may be why she was referred. It does not erase the aftercare.",
        "Device-related thrombus is why imaging is part of the plan."
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
      "difficulty": "advanced",
      "stem": "A patient with declining memory wants to manage warfarin independently. A family member already fills the other medicine boxes and is present for the visit. The patient can state the indication but cannot recall yesterday's dose. Which plan respects both autonomy and safety?",
      "choices": [
        {
          "id": "a",
          "text": "Keep him in the decision and use the family member who already handles medicines, with support"
        },
        {
          "id": "b",
          "text": "Exclude him from the conversation, because declining memory voids any consent about warfarin"
        },
        {
          "id": "c",
          "text": "Let him keep dosing independently, because he can still say the word 'warfarin'"
        },
        {
          "id": "d",
          "text": "Stop anticoagulation so that nobody has to manage a dose or an INR schedule"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A shares the work: he remains the decision-maker he can still be, and the person who already manages medicines is built into the plan with his agreement. Choice B erases him. Choice C treats one correct word as dosing competence. Choice D removes the indication to avoid a logistics problem. Source: supported decision-making when cognition is declining.",
      "teachingPoints": [
        "Autonomy and a safe medication system can be combined.",
        "Saying the drug name is not the same as managing the dose."
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
      "difficulty": "advanced",
      "stem": "A patient with limited reading ability is given a six-page anticoagulant leaflet in small type and cannot explain the schedule afterward. Which material is the better next step?",
      "choices": [
        {
          "id": "a",
          "text": "The same leaflet, printed smaller so it looks shorter"
        },
        {
          "id": "b",
          "text": "A short plain-language sheet, or a spoken teach-back, that he can restate"
        },
        {
          "id": "c",
          "text": "A statistical methods appendix from a trial, to raise the reading level"
        },
        {
          "id": "d",
          "text": "No material at all, because limited reading means education is impossible"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B changes the tool to something he can use and then checks learning. Choice A worsens access. Choice C raises the reading burden. Choice D abandons education. Source: health-literacy material design.",
      "teachingPoints": [
        "Match the material to the reading barrier.",
        "A restatement shows whether the new tool worked."
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
      "difficulty": "advanced",
      "stem": "A patient cannot afford transportation to INR checks and has unreliable access to food, including the meals that usually supply vitamin K. The INR has started to swing. Which community-support plan reinforces the anticoagulation care?",
      "choices": [
        {
          "id": "a",
          "text": "Discharge him until he can pay for both the bus fare and the groceries"
        },
        {
          "id": "b",
          "text": "Double the warfarin dose so that fewer INR visits are required"
        },
        {
          "id": "c",
          "text": "Arrange transport and food support, and keep INR checks while that is set up"
        },
        {
          "id": "d",
          "text": "Tell him vitamin K intake does not affect warfarin, so the food problem can be ignored"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C treats transportation and food as clinical problems: missed INRs and an unstable vitamin K intake will move the INR, so the supports are part of the anticoagulation plan. Choice A withholds monitoring. Choice B escalates the dose to avoid visits. Choice D denies the diet effect. Source: social-needs support as part of warfarin safety.",
      "teachingPoints": [
        "An unstable diet and a missed INR are medical problems.",
        "The dose is not increased to avoid the visit."
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
      "difficulty": "advanced",
      "stem": "A clinic writes learning objectives for home INR device training. Which objective is the one that can verify a practical skill?",
      "choices": [
        {
          "id": "a",
          "text": "The patient will appreciate the importance of anticoagulation in general terms"
        },
        {
          "id": "b",
          "text": "The patient will understand quality well enough to feel confident about the meter in clinic"
        },
        {
          "id": "c",
          "text": "The patient will know about the INR as a concept mentioned during the class"
        },
        {
          "id": "d",
          "text": "The patient obtains an adequate sample and states whom to call for an unexpected result"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is observable. A preceptor can watch the sample and hear the reporting plan. Choices A, B, and C use verbs that cannot be checked. Source: objective-writing for skills training.",
      "teachingPoints": [
        "A skill objective names an action a trainer can watch.",
        "'Understand' and 'appreciate' do not verify the device skill."
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
      "difficulty": "advanced",
      "stem": "Chart audits show staff still telling DOAC patients to 'keep the INR between 2 and 3' as the dose target. Which education strategy addresses that staff learning need?",
      "choices": [
        {
          "id": "a",
          "text": "Retrain with a case showing the INR is not a DOAC dose target, then audit what staff say"
        },
        {
          "id": "b",
          "text": "Add an INR target of 2 to 3 to the DOAC after-visit summary so the old script becomes official"
        },
        {
          "id": "c",
          "text": "Teach that every DOAC is adjusted until the activated partial thromboplastin time is exactly 60 seconds"
        },
        {
          "id": "d",
          "text": "Remove INR teaching from the warfarin clinic so one sentence can cover both drug classes"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A uses a concrete error, an INR target written for a DOAC that is not dosed to the INR, and then checks what staff actually say. Choice B codifies the mistake. Choice C invents an activated partial thromboplastin time target for DOACs. Choice D damages warfarin teaching to hide a DOAC error. Source: staff education on what the INR does not do.",
      "teachingPoints": [
        "Teach the misread INR as the case.",
        "A warfarin target pasted onto a DOAC is the sentence to retire."
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
      "difficulty": "advanced",
      "stem": "A patient needs an interpreter and has reduced vision. The clinic explained anticoagulation verbally. Staff are unsure he can follow the plan at home. Which assessment answers that question?",
      "choices": [
        {
          "id": "a",
          "text": "Assume he understood, because an interpreter was present in the room for the explanation"
        },
        {
          "id": "b",
          "text": "Through the interpreter, have him restate the dose times and the bleeding plan"
        },
        {
          "id": "c",
          "text": "Hand him a small-print English leaflet and end the visit without a restatement"
        },
        {
          "id": "d",
          "text": "Skip the check, because using an interpreter makes teach-back invalid"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B checks follow-through in his language and fixes the visual barrier. Presence of an interpreter does not prove he can restate the plan. Choice A assumes it. Choice C uses a format he cannot read. Choice D abandons the check. Source: teach-back with an interpreter and an accessible format.",
      "teachingPoints": [
        "The interpreter is how teach-back happens, not a reason to skip it.",
        "Vision changes the format, not the need to verify."
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
      "difficulty": "advanced",
      "stem": "A discharge list prints both 'Eliquis 5 mg twice daily' and 'apixaban 5 mg twice daily' as if they were two anticoagulants to take together. Which resolution is correct?",
      "choices": [
        {
          "id": "a",
          "text": "Give both lines, because a brand name and a generic name are two different molecules"
        },
        {
          "id": "b",
          "text": "Eliquis is rivaroxaban, so the list is an intended pair of factor Xa inhibitors"
        },
        {
          "id": "c",
          "text": "Eliquis is warfarin, so an INR target is added beside the apixaban line"
        },
        {
          "id": "d",
          "text": "Eliquis is apixaban; adult tablets are 2.5 mg and 5 mg, not two drugs taken together"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D collapses the duplicate. Eliquis is the brand of apixaban. Taking both lines would double the dose. U.S. adult tablets are 2.5 mg and 5 mg, and a 10 mg dose in acute VTE is two 5 mg tablets, not a second drug; the 0.5 mg tablet for oral suspension and the 0.15 mg sprinkle capsule are pediatric presentations. Choice A gives both. Choice B renames the brand. Choice C adds warfarin monitoring. Source: apixaban identity and usual adult tablet strengths.",
      "teachingPoints": [
        "A brand and a generic on the same list are one medicine.",
        "Two lines of 5 mg would be 10 mg twice daily."
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
      "stem": "A pediatric order says 'apixaban for oral suspension' for a child who cannot swallow tablets. The dispensing team has adult 5 mg tablets and a bottle labeled as a different apixaban preparation. Why verify the exact product and the administration instructions?",
      "choices": [
        {
          "id": "a",
          "text": "Those apixaban products are not interchangeable, and a child's order is not an adult AF dose"
        },
        {
          "id": "b",
          "text": "Any adult apixaban tablet can be crushed into the suspension volume without changing the delivered dose"
        },
        {
          "id": "c",
          "text": "The adult 2-of-3 reduction rule sets the child's dose in milligrams per year of age"
        },
        {
          "id": "d",
          "text": "The suspension is reversed with vitamin K, so the product check is really an INR check"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the dispensing safety point. Pediatric apixaban products and adult tablets do not share one administration instruction, and an adult AF dose is not a child's VTE dose. Choice B crushes whatever is on the shelf. Choice C applies the older-adult reduction rule. Choice D uses vitamin K. U.S. ELIQUIS labeling lists pediatric presentations (a 0.15 mg sprinkle capsule and a 0.5 mg tablet for oral suspension) with weight-tiered dosing, and describes crushing adult 2.5 mg or 5 mg tablets only for patients weighing at least 35 kg. No pediatric milligram dose is stated. Source: ELIQUIS prescribing information, dosage and administration.",
      "teachingPoints": [
        "Read the preparation named on the order.",
        "Do not convert an adult tablet into a pediatric dose at the counter."
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
      "difficulty": "advanced",
      "stem": "Patient A starts warfarin for AF and has an INR of 2.0 on day 2 while still on heparin overlap. Patient B took a first apixaban dose 3 hours ago. A learner says the two drugs are now 'equally on board' because both have a number in the chart. Which comparison is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Both drugs inhibit vitamin K epoxide reductase, so day 2 is full effect for warfarin and for apixaban"
        },
        {
          "id": "b",
          "text": "The early INR is mostly factor VII loss, whereas apixaban directly inhibits factor Xa within hours of a dose"
        },
        {
          "id": "c",
          "text": "Apixaban's full effect waits for an INR of 2, just as warfarin's full effect does"
        },
        {
          "id": "d",
          "text": "Warfarin directly inhibits factor Xa on day 1, and apixaban waits for protein C to fall"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B separates onset. Warfarin's early INR rise is driven largely by the short half-life of factor VII and does not prove prothrombin is fully suppressed. Apixaban inhibits factor Xa directly and does not wait for that synthesis lag. Choice A gives them one target. Choice C doses apixaban to an INR. Choice D swaps the mechanisms. Source: warfarin onset versus direct factor Xa inhibition. Half-lives are approximate.",
      "teachingPoints": [
        "An INR of 2 on day 2 is not proof of a completed warfarin effect.",
        "A DOAC dose this morning is already a direct enzyme effect."
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
      "stem": "A warfarin pharmacogenetic report shows reduced-function CYP2C9 variants. The patient's INR rose faster than expected on a usual start. A colleague says the gene means the patient is resistant and needs a higher dose. Which mechanism is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "CYP2C9 reduced function clears S-warfarin faster, so doses must rise"
        },
        {
          "id": "b",
          "text": "The variant blocks platelet P2Y12, so warfarin is stopped"
        },
        {
          "id": "c",
          "text": "S-warfarin is cleared more slowly, so the same dose produces a higher INR than expected"
        },
        {
          "id": "d",
          "text": "CYP2C9 is the vitamin K epoxide reductase target, so the finding is a VKORC1 result under another name"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the direction. S-warfarin is the more potent enantiomer and a CYP2C9 substrate. Reduced-function variants slow clearance and increase sensitivity. Choice A reverses the clearance. Choice B assigns a platelet target. Choice D confuses CYP2C9 with VKORC1, the drug target, which is a different sensitivity mechanism. Source: warfarin pharmacokinetics. No genotype-to-milligram table is stated.",
      "teachingPoints": [
        "Reduced clearance means more sensitive, not resistant.",
        "CYP2C9 is metabolism. VKORC1 is the target."
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
      "stem": "A report lists both a CYP2C9 variant and a VKORC1 variant for a patient starting warfarin. The clinician asks how the two lines differ. Which comparison is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "They are two names for one enzyme, so only one of the lines on the report is real"
        },
        {
          "id": "b",
          "text": "VKORC1 clears S-warfarin, and CYP2C9 is a receptor on the platelet surface"
        },
        {
          "id": "c",
          "text": "Either variant means warfarin cannot be used and a DOAC must be started the same day"
        },
        {
          "id": "d",
          "text": "CYP2C9 clears S-warfarin; VKORC1 is the sensitivity of warfarin's target enzyme"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D separates metabolism from target. CYP2C9 variants change how fast S-warfarin is cleared. VKORC1 variants change the sensitivity of vitamin K epoxide reductase, the enzyme warfarin inhibits. Choice A collapses them. Choice B swaps the jobs and adds a platelet receptor. Choice C converts a sensitivity report into an automatic DOAC start without an indication review. Source: warfarin pharmacogenetics, mechanism only. No dosing algorithm is applied.",
      "teachingPoints": [
        "One gene is clearance. The other is the drug target.",
        "A genotype does not by itself pick the drug class."
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
      "difficulty": "advanced",
      "stem": "An 84-year-old woman has been on dabigatran 150 mg twice daily for AF. She now weighs 50 kg and the serum creatinine is 2.0 mg/dL. She is not bleeding. Which pharmacokinetic concern forces a reassessment?",
      "choices": [
        {
          "id": "a",
          "text": "Clearance is about 17 mL/min and dabigatran is mostly renal, so 150 mg is no longer automatic"
        },
        {
          "id": "b",
          "text": "Dabigatran is cleared by CYP3A4, so the serum creatinine does not change exposure"
        },
        {
          "id": "c",
          "text": "A creatinine of 2.0 mg/dL is a reason to add ketoconazole in order to boost absorption in clinic"
        },
        {
          "id": "d",
          "text": "Idarucizumab is started as a daily oral anticoagulant once clearance falls this low"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the concern. Cockcroft-Gault clearance is (140−84)×50×0.85/(72×2.0) = 17 mL/min. Dabigatran is about 80 percent renally excreted, so exposure rises as clearance falls, and a dose chosen when clearance was higher is reassessed rather than continued by habit. Choice B assigns CYP3A4 clearance. Choice C adds an inhibitor. Choice D turns the reversal antibody into a daily anticoagulant. The item does not select a 75 mg dose, because regional labels differ below 30 mL/min and this site tells clinicians to recheck the label. Source: dabigatran renal clearance.",
      "teachingPoints": [
        "Most of the drug leaves through the kidney.",
        "Seventeen milliliters per minute is not a 'continue 150 mg' result."
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
      "difficulty": "advanced",
      "stem": "A patient says every oral factor Xa inhibitor requires a full meal because that is the rivaroxaban 20 mg rule. He is actually being counseled on apixaban 5 mg and, separately, on edoxaban 60 mg. Which comparison is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Apixaban and edoxaban also require a large meal, and a fasting dose of either is subtherapeutic"
        },
        {
          "id": "b",
          "text": "Rivaroxaban 15 mg and 20 mg are taken with food; apixaban and edoxaban are taken with or without food"
        },
        {
          "id": "c",
          "text": "Only edoxaban requires food, and rivaroxaban 20 mg is taken on an empty stomach"
        },
        {
          "id": "d",
          "text": "Food rules apply only to warfarin and never to any oral factor Xa inhibitor"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the labels as this site states them for rivaroxaban and the with-or-without-food administration for apixaban and edoxaban. The site notes that food raises rivaroxaban 20 mg exposure (area under the curve) by 39 percent. Choice A extends the food mandate. Choice C swaps it. Choice D confines food to warfarin. Source: administration sections cited on this site's practical pages.",
      "teachingPoints": [
        "Copy the food rule from the drug in front of you, not from rivaroxaban's 20 mg tablet.",
        "A full meal is not a class law."
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
      "difficulty": "advanced",
      "stem": "A learner compares an unfractionated heparin infusion with enoxaparin injections. Both are heparins. Which distinction best links the pharmacology to monitoring?",
      "choices": [
        {
          "id": "a",
          "text": "They have identical half-lives and both infusions or injections are titrated to a daily INR"
        },
        {
          "id": "b",
          "text": "Enoxaparin is a direct thrombin inhibitor and unfractionated heparin is an oral factor Xa inhibitor"
        },
        {
          "id": "c",
          "text": "Unfractionated heparin is protocol-monitored because its effect is variable and short; routine LMWH is not"
        },
        {
          "id": "d",
          "text": "Neither heparin involves antithrombin, so an anti-Xa level has no meaning for either drug"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C links pharmacology to the ward routine. Unfractionated heparin needs a protocolized activated partial thromboplastin time or anti-Xa because of variable binding and a short half-life. LMWH has more predictable anti-Xa effect, is cleared by the kidney, and is monitored with anti-Xa only in selected cases. Choice A uses an INR for both. Choice B renames both drugs. Choice D removes antithrombin, which both depend on. Source: heparin versus LMWH pharmacology.",
      "teachingPoints": [
        "Routine clotting times follow the unpredictable infusion.",
        "Renal clearance is the LMWH issue, not a daily INR."
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
      "difficulty": "advanced",
      "stem": "A patient on fondaparinux has a serious bleed. The team assumes protamine will completely reverse it because protamine is 'the heparin antidote.' Why is that assumption wrong?",
      "choices": [
        {
          "id": "a",
          "text": "Protamine completely neutralizes fondaparinux anti-Xa activity within about 10 minutes in clinic"
        },
        {
          "id": "b",
          "text": "Fondaparinux is reversed by vitamin K because it is a vitamin K antagonist"
        },
        {
          "id": "c",
          "text": "Fondaparinux is dabigatran, so idarucizumab and protamine are the same decision"
        },
        {
          "id": "d",
          "text": "Fondaparinux has no known specific antidote, and protamine is not a complete reversal for it"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches the Arixtra overdosage statement on this site: there is no known antidote. Protamine is the heparin neutralization class and only a partial approach for enoxaparin, not a labeled fondaparinux reversal. Choice A promises complete neutralization. Choice B uses vitamin K. Choice C renames the drug. Source: Arixtra text on this site.",
      "teachingPoints": [
        "No specific antidote means supportive care and the institutional bleed pathway.",
        "Protamine's heparin role does not transfer."
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
      "difficulty": "advanced",
      "stem": "A clinician confuses the acute and extended apixaban VTE regimens and writes 2.5 mg twice daily on day 1 of a new PE. Which distinction is the correct one?",
      "choices": [
        {
          "id": "a",
          "text": "AMPLIFY used 10 mg twice daily for 7 days then 5 mg twice daily"
        },
        {
          "id": "b",
          "text": "AMPLIFY-EXT used 10 mg twice daily as the acute treatment of a new PE"
        },
        {
          "id": "c",
          "text": "Both trials used 2.5 mg twice daily from the hour of diagnosis"
        },
        {
          "id": "d",
          "text": "Acute treatment is 20 mg once daily, and extension is the COMPASS dose"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A separates the trials on this site. AMPLIFY treated acute VTE with 10 mg twice daily for 7 days, then 5 mg twice daily. AMPLIFY-EXT and the label's extended-prevention dose use 2.5 mg twice daily after at least 6 months, not on day 1. Choice B assigns the lead-in to the extension trial. Choice C uses 2.5 mg for both from the start. Choice D imports other drugs. Source: AMPLIFY and AMPLIFY-EXT regimens on this site.",
      "teachingPoints": [
        "Day 1 is the 10 mg dose. Month 7 may be the 2.5 mg dose.",
        "The smaller tablet is not safer on the first day of a new PE."
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
      "difficulty": "advanced",
      "stem": "A learner writes identical day-1 orders for edoxaban and rivaroxaban for two patients with acute DVT and normal kidneys. Which statement distinguishes the programs?",
      "choices": [
        {
          "id": "a",
          "text": "Both drugs start with edoxaban 60 mg on day 1, and neither acute regimen uses heparin"
        },
        {
          "id": "b",
          "text": "Rivaroxaban starts at 15 mg twice daily; edoxaban in Hokusai-VTE started after at least 5 days of heparin"
        },
        {
          "id": "c",
          "text": "Both acute regimens require a parenteral lead-in lasting 21 days before any tablet"
        },
        {
          "id": "d",
          "text": "Edoxaban uses the 15 mg twice-daily lead-in, and rivaroxaban is the drug that needs a heparin lead-in today"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the distinction on this site. EINSTEIN starts rivaroxaban at 15 mg twice daily. Hokusai-VTE places edoxaban after at least 5 days of heparin. Choice A starts edoxaban immediately. Choice C gives both a 21-day injection lead-in. Choice D swaps the designs. Source: Hokusai-VTE and EINSTEIN cards.",
      "teachingPoints": [
        "Same diagnosis, different first five days.",
        "Edoxaban's 60 mg dose is not a day-1 oral-only start."
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
      "difficulty": "advanced",
      "stem": "A patient stable on warfarin develops melena a week after starting scheduled ibuprofen. The INR is unchanged at 2.4. A colleague says the new drug is irrelevant because the INR did not rise. Which mechanism explains the melena?",
      "choices": [
        {
          "id": "a",
          "text": "Ibuprofen induces warfarin clearance, which always raises the INR before any gastrointestinal bleed"
        },
        {
          "id": "b",
          "text": "Ibuprofen inhibits vitamin K epoxide reductase, so it must move the INR before melena appears"
        },
        {
          "id": "c",
          "text": "Ibuprofen can cause gastrointestinal bleeding by a platelet and mucosal effect even if the INR is unchanged"
        },
        {
          "id": "d",
          "text": "An unchanged INR of 2.4 proves the black stool is not gastrointestinal blood"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the pharmacodynamic point. Ibuprofen impairs platelets and injures the gastric mucosa. A bleed can occur without a change in the INR. Some patients also have an INR interaction, but this case's unchanged INR does not make the drug innocent. Choice A says induction raises the INR, which is the wrong direction for induction. Choice B makes ibuprofen a vitamin K antagonist. Choice D says a stable INR excludes melena. Source: nonsteroidal anti-inflammatory drug bleeding risk on warfarin.",
      "teachingPoints": [
        "The INR is not a full description of hemostasis.",
        "A new gastric injury can bleed at a therapeutic INR."
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
      "difficulty": "advanced",
      "stem": "A pregnant patient with a new VTE asks why warfarin is usually avoided and LMWH is the common choice. She is in the first trimester. She also asks about apixaban. Which distinction is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Warfarin does not cross the placenta, and LMWH is the teratogen"
        },
        {
          "id": "b",
          "text": "Apixaban is preferred in pregnancy because it does not cross the placenta"
        },
        {
          "id": "c",
          "text": "All three classes are equivalent for the fetus, and the choice is only about injections"
        },
        {
          "id": "d",
          "text": "Warfarin crosses the placenta and labeling describes fetal harm"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches labeling and usual practice. Warfarin crosses the placenta and is associated with fetal harm, particularly with early exposure. LMWH does not cross in a clinically important way and is the usual treatment for pregnancy-associated VTE. DOAC labeling does not support pregnancy use. Choice A swaps the placental facts. Choice B prefers apixaban. Choice C calls the classes equivalent. No milligram dose is stated. Source: warfarin and DOAC pregnancy labeling and this site's pregnancy pathway.",
      "teachingPoints": [
        "The placenta is the reason the classes separate.",
        "An injection is not the indication. Fetal exposure is."
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
      "difficulty": "advanced",
      "stem": "The same patient is now 4 weeks postpartum, breastfeeding, and still needs anticoagulation. She says, 'If warfarin was dangerous for the fetus, it must be dangerous in milk, so start the DOAC my sister takes.' Which comparison is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Lactation differs from pregnancy: warfarin and LMWH have lactation roles; a DOAC is not the default"
        },
        {
          "id": "b",
          "text": "Warfarin is forbidden in milk for the same weeks it is a fetal teratogen, with no lactation exception"
        },
        {
          "id": "c",
          "text": "Every DOAC has the same published human-milk evidence as warfarin does"
        },
        {
          "id": "d",
          "text": "Breastfeeding ends the VTE indication, so every anticoagulant stops on that day"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A separates the two exposures. Warfarin's fetal toxicity does not equal a lactation ban; warfarin and LMWH are the agents with established breastfeeding use. Apixaban, dabigatran, and edoxaban labeling say breastfeeding is not recommended, rivaroxaban labeling cites insufficient data, and the 2018 ASH pregnancy guideline recommends against DOACs in breastfeeding women. Choice B equates milk with the placenta. Choice C equates the evidence. Choice D stops treatment because of feeding. Source: labeling distinction between pregnancy and lactation.",
      "teachingPoints": [
        "Ask where the drug would go: placenta or milk.",
        "The sister's DOAC is an AF story, not a lactation study."
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
      "stem": "A patient on therapeutic anticoagulation for VTE has heavy menstrual bleeding and wants effective contraception. She has no other contraindication to an intrauterine device. Which option is the reasonable one to discuss?",
      "choices": [
        {
          "id": "a",
          "text": "A copper intrauterine device, chosen because it reliably lightens menstrual blood loss"
        },
        {
          "id": "b",
          "text": "A levonorgestrel intrauterine device, which can contracept and reduce menstrual bleeding"
        },
        {
          "id": "c",
          "text": "Stopping anticoagulation for the five heaviest days of every menstrual cycle"
        },
        {
          "id": "d",
          "text": "A combined estrogen pill, as the only contraceptive that is safe once an anticoagulant is prescribed"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is the method that can address both fertility and bleeding: a levonorgestrel-releasing intrauterine device reduces menstrual blood loss and provides contraception. A copper device can increase bleeding. Stopping anticoagulation cyclically leaves the VTE untreated for those days. Estrogen-containing pills are not made safe by an anticoagulant. Source: contraceptive practice in anticoagulated patients with heavy menstrual bleeding. No Medical Eligibility Criteria category number is printed.",
      "teachingPoints": [
        "The device that lightens bleeding is the levonorgestrel device, not the copper one.",
        "Cyclic interruption of the anticoagulant is not the contraceptive plan."
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
      "stem": "A patient with prior VTE is on a prophylactic-dose anticoagulant and asks whether every hormonal method is now equally safe. She is choosing between a combined estrogen pill and a levonorgestrel intrauterine device. Which principle is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Prophylactic anticoagulation cancels the thrombotic risk of estrogen"
        },
        {
          "id": "b",
          "text": "All hormonal methods have the same clot risk once any anticoagulant is prescribed"
        },
        {
          "id": "c",
          "text": "Estrogen-containing methods and a levonorgestrel device are not interchangeable"
        },
        {
          "id": "d",
          "text": "A copper device and a levonorgestrel device have the same effect on menstrual bleeding"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C keeps method-specific risk. Combined estrogen contraception raises thrombotic risk and is not rendered equivalent to a levonorgestrel intrauterine device by a prophylactic anticoagulant dose. Choice A treats prophylaxis as a permit for estrogen. Choice B equates methods. Choice D equates bleeding effects; copper devices can increase bleeding and levonorgestrel devices can reduce it. Source: contraceptive-method differences during anticoagulation. No category number is stated.",
      "teachingPoints": [
        "Intensity of anticoagulation does not flatten contraceptive risk.",
        "Name the hormone and the route, not just 'a hormone.'"
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
      "stem": "A 74-year-old man with AF and a prior stroke asks for asundexian (Sunharbo) because it was approved on 9 November 2026 and 'works for stroke.' He has no recent non-cardioembolic stroke and his AF is the reason for anticoagulation. A second patient, after a mild non-cardioembolic ischemic stroke with an NIHSS of 6 and no AF, is being discussed for the same drug. Which description is appropriate?",
      "choices": [
        {
          "id": "a",
          "text": "Asundexian replaces apixaban for AF because OCEANIC-AF showed fewer strokes with asundexian than with apixaban"
        },
        {
          "id": "b",
          "text": "Milvexian is FDA-approved for AF, so either factor XI drug can be substituted for apixaban today"
        },
        {
          "id": "c",
          "text": "Approval of one factor XI drug means every factor XI program, including milvexian, is approved for every indication now"
        },
        {
          "id": "d",
          "text": "Asundexian 50 mg with an antiplatelet is approved after recent non-cardioembolic stroke or high-risk TIA, not for AF"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D matches the OCEANIC-STROKE caveat on this site. The FDA approved asundexian (Sunharbo) 50 mg with antiplatelet therapy on 9 November 2026 for adults after a recent mild-to-moderate non-cardioembolic ischemic stroke (NIHSS 15 or lower) or high-risk TIA. It is not approved for AF. OCEANIC-AF was stopped early because stroke or systemic embolism was higher with asundexian than with apixaban (1.3% versus 0.4%; HR 3.79). Milvexian is not that approval; LIBREXIA ACS was stopped for futility. Choice A reverses OCEANIC-AF. Choice B invents an AF approval for milvexian. Choice C treats one approval as a class license. Source: FDA press release of 9 November 2026, which states that SUNHARBO is not approved for stroke prevention in patients with AF.",
      "teachingPoints": [
        "Read the indication. Stroke add-on is not AF replacement.",
        "One approval is not a class approval."
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
      "difficulty": "advanced",
      "stem": "During a major warfarin bleed, 4F-PCC is given and the INR falls. A learner says vitamin K can be skipped because the factors have been replaced. Why are both components in the pathway?",
      "choices": [
        {
          "id": "a",
          "text": "PCC replaces factors now; vitamin K lets the liver make new factors while warfarin remains"
        },
        {
          "id": "b",
          "text": "Vitamin K works in minutes and PCC works only after several days, so the usual order is reversed"
        },
        {
          "id": "c",
          "text": "PCC permanently removes the thrombotic indication, and vitamin K in this pathway is an antibiotic"
        },
        {
          "id": "d",
          "text": "Vitamin K is the specific antibody for dabigatran, and PCC is another name for protamine"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A is the time course. PCC supplies factors now. Those factors are cleared, and warfarin continues to block vitamin K recycling until vitamin K repletion and a fall in warfarin effect allow new gamma-carboxylated factors. Choice B reverses the speeds. Choice C says the indication disappears. Choice D renames both products. Source: 2020 ACC pathway cited on this site.",
      "teachingPoints": [
        "Immediate replacement and sustained synthesis are different jobs.",
        "A corrected INR after PCC can rise again if vitamin K was omitted."
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
      "difficulty": "advanced",
      "stem": "A trainee about to give protamine says it is harmless because it is an antidote. The patient is on an unfractionated heparin infusion and is bleeding. Which correction is accurate?",
      "choices": [
        {
          "id": "a",
          "text": "Protamine has no cardiovascular effects and can be injected as fast as the syringe allows"
        },
        {
          "id": "b",
          "text": "Protamine can cause hypotension and anaphylaxis-like reactions, so it is given slowly"
        },
        {
          "id": "c",
          "text": "Protamine is harmless only when the dose exceeds 50 mg inside a 10-minute period"
        },
        {
          "id": "d",
          "text": "Protamine fully reverses DOACs, which is why the infusion rate does not matter"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B matches the heparin label text on this site: protamine is infused slowly, no more than 50 mg in any 10-minute period, and fatal reactions resembling anaphylaxis are described, so resuscitation has to be available. Choice A says to push it. Choice C makes the excess dose the safe zone. Choice D claims DOAC reversal. Source: heparin sodium neutralization text quoted on this site.",
      "teachingPoints": [
        "An antidote can still harm.",
        "The 50 mg in 10 minutes limit is a safety limit, not a target to exceed."
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
      "stem": "A patient's warfarin dose was increased while rifampin was coadministered. Rifampin has now been stopped. The higher warfarin dose is still in the pillbox. Which time course deserves attention?",
      "choices": [
        {
          "id": "a",
          "text": "The INR stays exactly where it was, because enzyme induction ends the hour rifampin is stopped in clinic"
        },
        {
          "id": "b",
          "text": "The INR falls further, because stopping an inducer is the same as adding a second inducer"
        },
        {
          "id": "c",
          "text": "The INR may rise over days as induction wears off, so the higher warfarin dose needs closer follow-up"
        },
        {
          "id": "d",
          "text": "Rifampin inhibits warfarin clearance, so stopping it removes a cause of high INRs"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C is the offset of induction. Rifampin induces warfarin metabolism; while it is present, a higher warfarin dose may have been required. After it stops, enzyme induction declines over days and the same higher dose can push the INR up. Choice A says the effect ends immediately. Choice B predicts a further fall. Choice D calls rifampin an inhibitor. Source: warfarin–rifampin time course.",
      "teachingPoints": [
        "Induction has an offset measured in days, not in one dose interval.",
        "The dose that was 'right' last week may now be too high."
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
      "stem": "A patient on apixaban for AF has recurrent vomiting on the first day after major gastrointestinal surgery. Two doses have been 'given' and immediately vomited. Kidney function is unchanged. Which concern supports reassessment?",
      "choices": [
        {
          "id": "a",
          "text": "Vomiting raises apixaban exposure by inhibiting CYP3A4, so the dose is cut in half"
        },
        {
          "id": "b",
          "text": "A tablet that is vomited immediately still counts as a fully absorbed dose"
        },
        {
          "id": "c",
          "text": "The oral route does not matter, because apixaban is effective when worn as a skin patch"
        },
        {
          "id": "d",
          "text": "Vomited doses are not absorbed reliably, so the AF plan may need a non-oral route"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D is the absorption problem. A DOAC that is vomited is not a dose the patient received, and repeated vomiting is a reason to reassess the route with the surgical and anticoagulation teams rather than to document the oral dose as given. Choice A treats vomiting as enzyme inhibition. Choice B counts a vomited tablet. Choice C invents a patch. No parenteral dose is stated. Source: oral DOAC absorption and postoperative vomiting.",
      "teachingPoints": [
        "A dose that comes back up is not on board.",
        "The indication can still be present when the route is not."
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
      "difficulty": "advanced",
      "stem": "A health system can initially staff a small anticoagulation service and must choose whom to enroll first. Which population best matches a monitoring and coordination need?",
      "choices": [
        {
          "id": "a",
          "text": "People who take no anticoagulant, enrolled so the new panel looks larger"
        },
        {
          "id": "b",
          "text": "Every adult who reports a bruise, whether or not an anticoagulant is on the list"
        },
        {
          "id": "c",
          "text": "Patients whose only need is one dietary question and who need no follow-up visit"
        },
        {
          "id": "d",
          "text": "Warfarin patients, complex DOAC regimens, and procedure holds that need an owner"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D uses the scarce service for people whose safety depends on monitoring, interaction checks, or a peri-procedural owner. Choice A inflates the roster. Choice B has no anticoagulant focus. Choice C spends the panel on a question that does not need longitudinal management. Source: service-prioritization for an anticoagulation clinic.",
      "teachingPoints": [
        "Enroll the patients a missed result would harm.",
        "Panel size is not the safety goal."
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
      "difficulty": "advanced",
      "stem": "A clinic has prescribers, pharmacists, nurses, and a laboratory, and no document that says who must act when a critical INR arrives. Two results sat overnight. Which design closes that gap?",
      "choices": [
        {
          "id": "a",
          "text": "A named owner for critical INRs whenever the lab releases them, plus a backup"
        },
        {
          "id": "b",
          "text": "A shared inbox that no person is assigned to open on any shift"
        },
        {
          "id": "c",
          "text": "A rule that the patient calls the clinic if the patient suspects the INR is high"
        },
        {
          "id": "d",
          "text": "A decision to stop measuring INRs so the question of who owns the result disappears"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A assigns a person and a backup to the hours when results actually post. Choice B is an inbox without a human. Choice C transfers surveillance to the patient. Choice D abandons the test. Source: critical-result responsibility design.",
      "teachingPoints": [
        "Name the person. Name the backup. Name the hours.",
        "An unowned inbox is not a coverage system."
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
      "difficulty": "advanced",
      "stem": "An anticoagulation program is writing its policy manual. Staff disagree about which pile of documents counts as a usable manual. Which package supports reliable operations?",
      "choices": [
        {
          "id": "a",
          "text": "A brand-name formulary list and no procedures for how the service actually works"
        },
        {
          "id": "b",
          "text": "Procedures for dosing, critical results, meter failures, handoffs, and competency"
        },
        {
          "id": "c",
          "text": "A folder of published trial PDFs and no local workflow for nights or weekends"
        },
        {
          "id": "d",
          "text": "A statement that each clinician will improvise, filed as the service's only policy"
        }
      ],
      "correctId": "b",
      "explanation": "Choice B is a manual someone can follow on a weekend: how doses are managed, what happens to a critical INR, what happens when a meter fails, how a procedure hold is communicated, and how competency is recorded. Choice A is a shopping list. Choice C is a library. Choice D institutionalizes improvisation. Source: anticoagulation policy content. No regulation number is cited.",
      "teachingPoints": [
        "A manual is a set of actions, not a reading list.",
        "Competency and critical results belong in it."
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
      "difficulty": "advanced",
      "stem": "A clinic reports acceptable INR control and receives repeated complaints that nobody answers the anticoagulation phone line. Patients delay calling about bleeding. Which evaluation measures experience rather than assuming the laboratory figure is the whole story?",
      "choices": [
        {
          "id": "a",
          "text": "The time-in-range figure alone, reported as proof that telephone access does not matter"
        },
        {
          "id": "b",
          "text": "A count of abandoned calls, collected and then left unchanged with no staffing response"
        },
        {
          "id": "c",
          "text": "Time in range plus whether a bleeding call actually reaches a person"
        },
        {
          "id": "d",
          "text": "Removal of the phone line, because an acceptable INR distribution makes advice unnecessary"
        }
      ],
      "correctId": "c",
      "explanation": "Choice C keeps the laboratory measure and adds the experience measure the complaints describe: whether a person answers, and whether a bleeding concern connects to that person. Choice A declares access irrelevant. Choice B counts failure and does not treat it as a result. Choice D removes the path. Source: patient-experience measurement alongside warfarin quality.",
      "teachingPoints": [
        "An acceptable INR distribution does not answer the phone.",
        "Bleeding calls are part of the outcome, not a nuisance statistic."
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
      "difficulty": "advanced",
      "stem": "An outside laboratory was supposed to send an INR. It never appears in the clinic inbox. The patient assumes silence means the dose is unchanged. Which workflow prevents a missed monitoring event?",
      "choices": [
        {
          "id": "a",
          "text": "Treat a result that never arrives as a normal INR and continue the same dose indefinitely"
        },
        {
          "id": "b",
          "text": "Ask the patient to guess the INR from symptoms and then dose from that guess"
        },
        {
          "id": "c",
          "text": "Stop tracking expected outside draws, because the outside laboratory owns the clinic inbox in clinic"
        },
        {
          "id": "d",
          "text": "An expected-result list flags a missing INR the day it is due, and someone obtains it or a repeat"
        }
      ],
      "correctId": "d",
      "explanation": "Choice D closes the loop. An expected draw that does not arrive is an event, not a normal result. Someone retrieves it or redraws it. Choice A treats silence as therapeutic. Choice B uses symptoms as an INR. Choice C assigns the clinic's inbox to the outside laboratory without a chase step. Source: closed-loop laboratory tracking.",
      "teachingPoints": [
        "No news is not a therapeutic INR.",
        "The due date belongs on a work queue."
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
      "difficulty": "advanced",
      "stem": "A clinic partners with an Independent Diagnostic Testing Facility for home INR meters. The facility will ship devices and transmit numbers. Which division of responsibilities fits?",
      "choices": [
        {
          "id": "a",
          "text": "The facility handles testing logistics; clinicians keep dosing, eligibility, and follow-up"
        },
        {
          "id": "b",
          "text": "A meter shipment from the facility replaces the clinician's order and the dose decision"
        },
        {
          "id": "c",
          "text": "Every number the facility transmits authorizes the patient to change the dose with no clinic"
        },
        {
          "id": "d",
          "text": "Enrollment with the facility cancels the clinic's duty to notice that a result never arrived"
        }
      ],
      "correctId": "a",
      "explanation": "Choice A splits the work the way this service should: the testing facility can supply meters and transmit results under its own requirements, and the treating clinicians remain responsible for who is eligible, what the dose becomes, and what happens when a result is unexpected or missing. Choice B lets a shipment become an order. Choice C hands over the dose. Choice D drops the chase for missing results. Source: division of responsibility for home INR testing. No coverage-policy number is cited.",
      "teachingPoints": [
        "Logistics are not prescribing.",
        "A transmitted number still needs a clinical owner."
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
