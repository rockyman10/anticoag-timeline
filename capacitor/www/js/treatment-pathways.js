/* Interactive anticoagulation treatment pathways — teaching algorithms */
window.ANTICOAG_TX_PATHWAYS = {
  "meta": {
    "title": "Interactive treatment pathways",
    "disclaimer": "Educational algorithms — not institutional protocols or medical advice. Verify guidelines, labels, and local pathways. NNTs shown only when derived from published absolute rates on this site’s trial cards; otherwise omitted.",
    "version": "2026-09-23"
  },
  "pathways": [
    {
      "id": "af-stroke",
      "title": "AF stroke prevention",
      "indication": "Nonvalvular atrial fibrillation",
      "summary": "Who needs OAC, DOAC vs warfarin niches, intermediate risk, frailty, LAAO.",
      "guidelineSources": [
        {
          "society": "ACC/AHA",
          "note": "DOAC preferred over warfarin in eligible NVAF"
        },
        {
          "society": "ESC",
          "note": "DOAC-over-VKA preference for eligible patients"
        },
        {
          "society": "EHRA",
          "note": "Practical dosing / DDI guidance"
        }
      ],
      "startNodeId": "af-start",
      "nodes": [
        {
          "id": "af-start",
          "type": "start",
          "title": "Start: Patient with AF",
          "body": "Confirm AF (or atrial flutter) and decide whether oral anticoagulation is indicated for stroke prevention.",
          "why": "Stroke risk is estimated with CHA₂DS₂-VASc (or regional equivalent); bleeding risk informs shared decision, not automatic withholding.",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "af-stroke-prevention",
              "label": "AF framework"
            }
          ],
          "choices": [
            {
              "label": "Continue — assess valve / absolute contraindications",
              "nextNodeId": "af-valve"
            }
          ]
        },
        {
          "id": "af-valve",
          "type": "question",
          "title": "Mechanical valve or moderate–severe mitral stenosis?",
          "body": "These remain warfarin (VKA) territory — DOACs are not substitutes.",
          "why": "Pivotal DOAC AF trials excluded significant rheumatic mitral stenosis / mechanical valves.",
          "evidence": [],
          "caveats": [
            "RE-LY/ROCKET/ARISTOTLE/ENGAGE populations = NVAF"
          ],
          "links": [],
          "choices": [
            {
              "label": "Yes — mechanical valve or mod–severe MS",
              "nextNodeId": "af-vka-valve"
            },
            {
              "label": "No — nonvalvular AF pathway",
              "nextNodeId": "af-risk"
            }
          ]
        },
        {
          "id": "af-vka-valve",
          "type": "recommendation",
          "title": "Dose-adjusted warfarin is what this niche’s evidence uses",
          "body": "Mechanical valves and moderate–severe mitral stenosis sat outside the pivotal DOAC AF trials. Teaching example, not an order: dose-adjusted warfarin, with the INR target taken from the valve or guideline table. A switch to a DOAC is outside that evidence.",
          "why": "ACC/AHA valvular heart disease guideline Class 1 (verify current table) for mechanical valves / moderate–severe MS.",
          "evidence": [],
          "caveats": [
            "DOAC trials do not apply here"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "invictus",
              "label": "INVICTUS (rheumatic)"
            },
            {
              "kind": "tx",
              "id": "mechanical-valve",
              "label": "Mechanical valve pathway"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-risk",
          "type": "question",
          "title": "Estimated annual stroke risk / CHA₂DS₂-VASc?",
          "body": "Men ≥2 or women ≥3 (or regional threshold) usually warrant OAC. Score 1 (men) / 2 (women) is shared-decision / intermediate zone.",
          "why": "Guidelines prefer OAC over aspirin when OAC is indicated.",
          "evidence": [
            {
              "trial": "averroes",
              "effect": "Apixaban superior to aspirin for stroke prevention in patients unsuitable for VKA"
            }
          ],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "OAC clearly indicated (elevated score)",
              "nextNodeId": "af-doac"
            },
            {
              "label": "Intermediate / borderline risk",
              "nextNodeId": "af-intermediate"
            },
            {
              "label": "Very low risk — OAC not clearly indicated",
              "nextNodeId": "af-low"
            }
          ]
        },
        {
          "id": "af-low",
          "type": "recommendation",
          "title": "No routine OAC; revisit if risk rises",
          "body": "Aspirin alone is generally not a stroke-prevention substitute when OAC is indicated — here OAC is not indicated.",
          "why": "Document shared decision; reassess after aging/new risk factors.",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-intermediate",
          "type": "caution",
          "title": "Intermediate risk — shared decision (SINGLE-AF nuance)",
          "body": "SINGLE-AF suggests selected intermediate-risk patients may benefit from DOAC vs no OAC, with attention to bleeding.",
          "why": "Not a mandate to anticoagulate every CHA₂DS₂-VASc 1 — document values and bleed risk.",
          "evidence": [
            {
              "trial": "single-af",
              "effect": "Composite stroke/SE/major bleed/CV death 0.5% vs 1.5% at 24 mo (HR 0.31)",
              "nnt": "≈100",
              "arr": "≈1.0% absolute over 24 mo",
              "note": "NNT ≈ 1/0.01 for the trial composite — not stroke alone; population carefully selected"
            }
          ],
          "caveats": [
            "Enrichment / selection limits generalizability",
            "Bleeding still matters in shared decision"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "single-af",
              "label": "SINGLE-AF"
            }
          ],
          "choices": [
            {
              "label": "Proceed with DOAC after shared decision",
              "nextNodeId": "af-doac"
            },
            {
              "label": "Defer OAC with documented plan",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-doac",
          "type": "question",
          "title": "Eligible for a labeled DOAC?",
          "body": "Default guideline preference: DOAC over warfarin when eligible (renal function, drug access, adherence, no interacting red flags).",
          "why": "Landmark evidence underpins DOAC preference.",
          "evidence": [
            {
              "trial": "aristotle",
              "effect": "Stroke/SE 1.27%/y vs 1.60%/y warfarin (HR 0.79)",
              "nnt": "≈303 per year",
              "arr": "0.33%/y",
              "note": "NNT ≈ 1/0.0033 per year of therapy for stroke/SE — from published annualized rates"
            },
            {
              "trial": "re-ly",
              "effect": "Dabigatran 150 mg superior for stroke/SE vs warfarin in pivotal analysis"
            },
            {
              "trial": "rocket-af",
              "effect": "Rivaroxaban noninferior for stroke/SE in higher-risk NVAF"
            },
            {
              "trial": "engage-af",
              "effect": "Edoxaban noninferior regimens vs warfarin"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            },
            {
              "kind": "framework",
              "id": "af-stroke-prevention",
              "label": "AF framework"
            }
          ],
          "choices": [
            {
              "label": "Yes — start/continue labeled DOAC",
              "nextNodeId": "af-doac-pick"
            },
            {
              "label": "Currently stable on VKA and frail",
              "nextNodeId": "af-frail"
            },
            {
              "label": "Cannot take long-term OAC (bleed/contraindication)",
              "nextNodeId": "af-laao"
            },
            {
              "label": "Warfarin niche (not valve) — e.g. cost/access/preference with good TTR",
              "nextNodeId": "af-vka-ok"
            }
          ]
        },
        {
          "id": "af-doac-pick",
          "type": "recommendation",
          "title": "Prescribe labeled-dose DOAC; verify dose-reduction criteria",
          "body": "Apixaban, rivaroxaban, edoxaban, or dabigatran per label, renal function, and DDIs. Do not under-dose 'for safety' without meeting criteria.",
          "why": "ARISTOTLE supports apixaban efficacy + bleed profile; all four agents are guideline options.",
          "evidence": [
            {
              "trial": "aristotle",
              "effect": "First-line apixaban option in eligible NVAF"
            }
          ],
          "caveats": [
            "Check CrCl, age/weight/Cr for apixaban 2.5 mg rules",
            "Food with rivaroxaban 15–20 mg",
            "See DDI library for inducers/inhibitors"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "aristotle",
              "label": "ARISTOTLE"
            },
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            }
          ],
          "choices": [
            {
              "label": "Check renal / dose-reduction criteria",
              "nextNodeId": "af-renal"
            }
          ]
        },
        {
          "id": "af-frail",
          "type": "caution",
          "title": "FRAIL-AF: do not auto-switch stable frail VKA → DOAC",
          "body": "FRAIL-AF found more bleeding when frail older adults stable on VKA were switched to DOAC, without a clear efficacy upside in that design.",
          "why": "ELDERCARE-AF addresses carefully selected initiation of low-dose edoxaban — different question than switching.",
          "evidence": [
            {
              "trial": "frail-af",
              "effect": "Major/CRNM bleed 15.3% vs 9.4% with switch to DOAC (HR 1.69)",
              "arr": "ARI ≈5.9%",
              "nnt": "NNH ≈17 (harm from switch)",
              "note": "NNH ≈ 17 for major/CRNM bleed from switching — derived from 15.3−9.4%; not an efficacy NNT"
            }
          ],
          "caveats": [
            "Stable TTR on VKA is a feature",
            "Unstable INR / access issues may still favor DOAC"
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
              "kind": "framework",
              "id": "frail-elderly-vka-doac",
              "label": "Frail framework"
            }
          ],
          "choices": [
            {
              "label": "Remain on VKA with monitoring",
              "nextNodeId": "af-end"
            },
            {
              "label": "Switch for specific clinical reason (document)",
              "nextNodeId": "af-doac-pick"
            }
          ]
        },
        {
          "id": "af-vka-ok",
          "type": "recommendation",
          "title": "Warfarin with excellent TTR can be reasonable",
          "body": "When DOAC ineligible or patient preference/cost with reliable INR control, warfarin remains acceptable.",
          "why": "Still prefer DOAC when eligible per major guidelines.",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-laao",
          "type": "recommendation",
          "title": "Consider LAAO referral — shared decision",
          "body": "Percutaneous LAAO is an alternative when long-term OAC is contraindicated, refused, or repeatedly interrupted for bleeding.",
          "why": "CHAMPION-AF supports modern LAAO as a credible alternative to long-term DOAC in selected anticoagulated patients — not for everyone.",
          "evidence": [
            {
              "trial": "champion-af",
              "effect": "CV death/stroke/SE noninferior vs DOAC at 3 y in selected patients"
            }
          ],
          "caveats": [
            "Procedural risk, DRT, peri-device leak",
            "Post-implant antithrombotic regimens still needed initially"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "champion-af",
              "label": "CHAMPION-AF"
            },
            {
              "kind": "framework",
              "id": "laao-vs-oac",
              "label": "LAAO framework"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-renal",
          "type": "question",
          "title": "Renal function compatible with a labeled DOAC dose?",
          "body": "Estimate CrCl (Cockcroft–Gault per many labels). Apply agent-specific dose-reduction criteria (e.g., apixaban 2.5 mg rules when age/weight/Cr criteria met; rivaroxaban/edoxaban/dabigatran renal cutoffs per label). Prefer qualitative label check over memorized cutoffs from memory.",
          "why": "Under-dosing “for safety” without meeting criteria loses stroke protection; over-dosing in advanced CKD increases bleed risk.",
          "evidence": [],
          "caveats": [
            "Verify current US/EU label for the chosen agent — do not invent cutoffs",
            "Severe CKD may push toward warfarin or agent-specific labeled options"
          ],
          "links": [
            {
              "kind": "case",
              "id": "af-renal-bleed",
              "label": "Case: AF + CKD"
            },
            {
              "kind": "trial",
              "id": "aristotle",
              "label": "ARISTOTLE"
            }
          ],
          "choices": [
            {
              "label": "Yes — labeled dose available",
              "nextNodeId": "af-ddi"
            },
            {
              "label": "Borderline / severe CKD — warfarin or specialty plan",
              "nextNodeId": "af-vka-ok"
            }
          ]
        },
        {
          "id": "af-ddi",
          "type": "question",
          "title": "Clinically important P-gp / CYP3A4 interaction?",
          "body": "Screen strong inhibitors/inducers (azoles, certain HIV boosters, rifampin, carbamazepine, St John’s wort, etc.). Use the DDI library — do not rely on EHR flags alone.",
          "why": "Inducers risk thrombosis via ↓ DOAC exposure; strong inhibitors may require avoid/adjust strategies.",
          "evidence": [],
          "caveats": [
            "PD bleed stacks (NSAID/antiplatelet) matter even without PK change"
          ],
          "links": [
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            },
            {
              "kind": "ddi",
              "id": "",
              "label": "Open DDI home"
            }
          ],
          "choices": [
            {
              "label": "No major red-flag DDI — continue",
              "nextNodeId": "af-special-pop"
            },
            {
              "label": "Red-flag interaction — adjust agent or use VKA",
              "nextNodeId": "af-vka-ok"
            }
          ]
        },
        {
          "id": "af-special-pop",
          "type": "question",
          "title": "Pregnancy, extremes of body weight, or other exclusion?",
          "body": "Pregnancy/breastfeeding → not DOAC. Very high BMI / bariatric surgery may need PK caution and agent selection per specialty guidance. Mechanical valve / mod–severe MS already diverted earlier.",
          "why": "Labels and pregnancy pharmacology exclude DOACs from obstetric care; obesity extremes are a stewardship check, not automatic failure.",
          "evidence": [],
          "caveats": [
            "FRAIL-AF switch caution is a separate node if currently stable on VKA"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "frail-af",
              "label": "FRAIL-AF"
            },
            {
              "kind": "framework",
              "id": "frail-elderly-vka-doac",
              "label": "Frail framework"
            }
          ],
          "choices": [
            {
              "label": "Pregnancy / breastfeeding — LMWH pathway",
              "nextNodeId": "af-preg"
            },
            {
              "label": "Eligible — finalize labeled DOAC",
              "nextNodeId": "af-doac-final"
            },
            {
              "label": "Stable frail on VKA — revisit FRAIL-AF",
              "nextNodeId": "af-frail"
            }
          ]
        },
        {
          "id": "af-preg",
          "type": "recommendation",
          "title": "Therapeutic LMWH for pregnancy-associated AF anticoagulation needs",
          "body": "DOACs are not used in pregnancy in usual practice. Coordinate maternal-fetal medicine; warfarin has embryopathy risk in critical windows and is generally avoided for this indication in pregnancy.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-doac-final",
          "type": "recommendation",
          "title": "Start labeled-dose DOAC; counsel adherence and bleed precautions",
          "body": "Apixaban, rivaroxaban, edoxaban, or dabigatran per label. Food with rivaroxaban 15–20 mg. Schedule renal/CBC follow-up and medication reconciliation.",
          "why": "Landmark NVAF programs underpin DOAC preference when eligible.",
          "evidence": [
            {
              "trial": "aristotle",
              "effect": "Stroke/SE 1.27%/y vs 1.60%/y warfarin (HR 0.79)",
              "nnt": "≈303 per year",
              "arr": "0.33%/y",
              "note": "NNT ≈ 1/0.0033 per year of therapy for stroke/SE — from published annualized rates"
            },
            {
              "trial": "re-ly",
              "effect": "Dabigatran 150 mg superior for stroke/SE vs warfarin in pivotal analysis"
            },
            {
              "trial": "rocket-af",
              "effect": "Rivaroxaban noninferior for stroke/SE in higher-risk NVAF"
            },
            {
              "trial": "engage-af",
              "effect": "Edoxaban noninferior regimens vs warfarin"
            }
          ],
          "caveats": [
            "Document CHA₂DS₂-VASc, CrCl, DDIs, and follow-up owner"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "aristotle",
              "label": "ARISTOTLE"
            },
            {
              "kind": "framework",
              "id": "af-stroke-prevention",
              "label": "AF framework"
            },
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "af-end"
            }
          ]
        },
        {
          "id": "af-end",
          "type": "end",
          "title": "Pathway complete — AF stroke prevention",
          "body": "Document indication, agent/dose, renal function, DDIs, and follow-up. Educational only — verify local protocols.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": []
        }
      ]
    },
    {
      "id": "acute-vte",
      "title": "Acute VTE (DVT/PE)",
      "indication": "Acute deep-vein thrombosis / pulmonary embolism",
      "summary": "Hemodynamic triage, DOAC choice (COBRRA), dosing, cancer/APS/pregnancy exclusions.",
      "guidelineSources": [
        {
          "society": "CHEST",
          "note": "DOAC options for eligible acute VTE"
        },
        {
          "society": "ASH",
          "note": "DOAC preferred for many acute VTE patients"
        },
        {
          "society": "ESC",
          "note": "PE risk stratification / reperfusion"
        }
      ],
      "startNodeId": "vte-start",
      "nodes": [
        {
          "id": "vte-start",
          "type": "start",
          "title": "Acute VTE suspected/confirmed",
          "body": "Ensure diagnosis, hemodynamics, and contraindications to anticoagulation.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "acute-vte-doac",
              "label": "Acute VTE DOAC framework"
            }
          ],
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "vte-shock"
            }
          ]
        },
        {
          "id": "vte-shock",
          "type": "question",
          "title": "High-risk PE with shock / need for reperfusion?",
          "body": "Massive PE follows systemic thrombolysis / advanced reperfusion algorithms — not outpatient DOAC start.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Yes — high-risk PE pathway",
              "nextNodeId": "vte-highrisk"
            },
            {
              "label": "No — stable DVT or low/intermediate-risk PE",
              "nextNodeId": "vte-exclude"
            }
          ]
        },
        {
          "id": "vte-highrisk",
          "type": "recommendation",
          "title": "Stabilize; anticoagulation + reperfusion per PE protocol",
          "body": "Use institutional PE response pathway. Oral DOAC alone is not the initial strategy in shock.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "intermediate-pe",
              "label": "Intermediate-risk PE pathway"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "vte-end"
            }
          ]
        },
        {
          "id": "vte-exclude",
          "type": "question",
          "title": "Any DOAC exclusion niche?",
          "body": "Pregnancy, severe renal impairment below labels, mechanical valves, APS (esp. triple-positive) → usually LMWH/VKA pathways.",
          "why": "",
          "evidence": [],
          "caveats": [
            "Cancer VTE has its own pathway — still often DOAC-eligible"
          ],
          "links": [],
          "choices": [
            {
              "label": "Pregnancy / breastfeeding",
              "nextNodeId": "vte-lmwh"
            },
            {
              "label": "APS / mechanical valve / severe renal",
              "nextNodeId": "vte-special"
            },
            {
              "label": "Active cancer — go to cancer VTE thinking",
              "nextNodeId": "vte-to-cancer"
            },
            {
              "label": "None of the above — DOAC-eligible",
              "nextNodeId": "vte-doac"
            }
          ]
        },
        {
          "id": "vte-lmwh",
          "type": "recommendation",
          "title": "Therapeutic LMWH (pregnancy pathway)",
          "body": "Therapeutic LMWH is standard for pregnancy-associated VTE. DOACs are not used in pregnancy in usual practice. Coordinate obstetrics; plan postpartum transition carefully.",
          "why": "Pregnancy excludes DOACs; warfarin embryopathy risk windows apply if VKA considered postpartum/elsewhere.",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "vte-end"
            }
          ]
        },
        {
          "id": "vte-special",
          "type": "recommendation",
          "title": "VKA or LMWH per specialty pathway",
          "body": "Route to specialty pathways: APS (especially triple-positive) → VKA; mechanical valves → VKA; severe renal → label / often VKA or LMWH.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "aps",
              "label": "APS pathway"
            },
            {
              "kind": "tx",
              "id": "mechanical-valve",
              "label": "Mechanical valve pathway"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "vte-end"
            }
          ]
        },
        {
          "id": "vte-to-cancer",
          "type": "recommendation",
          "title": "Use cancer-associated VTE pathway",
          "body": "Acute cancer VTE often still uses DOACs (Caravaggio era) with GI-cancer caveats.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "cancer-vte",
              "label": "Cancer VTE pathway"
            }
          ],
          "choices": [
            {
              "label": "Open cancer VTE pathway",
              "nextNodeId": "vte-end"
            }
          ]
        },
        {
          "id": "vte-doac",
          "type": "question",
          "title": "Bleeding risk a major shared-decision driver?",
          "body": "All major DOAC VTE regimens are guideline options. COBRRA informs apixaban vs rivaroxaban when both fit and bleeding matters.",
          "why": "",
          "evidence": [
            {
              "trial": "cobrra",
              "effect": "Clinically relevant bleeding 3.3% apixaban vs 7.1% rivaroxaban (RR 0.46)",
              "nnt": "≈26",
              "arr": "3.8%",
              "note": "NNT ≈ 1/0.038 to prevent one clinically relevant bleed with apixaban vs rivaroxaban in COBRRA"
            },
            {
              "trial": "amplify",
              "effect": "Apixaban single-drug VTE regimen; lower major bleeding vs warfarin in pivotal program"
            },
            {
              "trial": "einstein-pe",
              "effect": "Rivaroxaban for PE after ambulatory/oral pathway eligibility"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "cobrra",
              "label": "COBRRA"
            }
          ],
          "choices": [
            {
              "label": "Yes — prefer apixaban if both fit",
              "nextNodeId": "vte-apix"
            },
            {
              "label": "Once-daily preference / rivaroxaban logistics fit",
              "nextNodeId": "vte-riva"
            },
            {
              "label": "Edoxaban after heparin lead-in preferred",
              "nextNodeId": "vte-edo"
            }
          ]
        },
        {
          "id": "vte-apix",
          "type": "recommendation",
          "title": "AMPLIFY used apixaban 10 mg twice daily for 7 days, then 5 mg twice daily",
          "body": "Teaching example, not an order. The trial’s load-then-maintenance calendar is what the evidence used. Renal and hepatic limits come from the label.",
          "why": "",
          "evidence": [
            {
              "trial": "amplify",
              "effect": "Pivotal acute VTE regimen"
            },
            {
              "trial": "cobrra",
              "effect": "Bleed advantage vs rivaroxaban when choice is otherwise equal"
            }
          ],
          "caveats": [
            "Not for high-risk PE needing reperfusion"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "amplify",
              "label": "AMPLIFY"
            }
          ],
          "choices": [
            {
              "label": "Verify renal dose, DDIs, weight extremes",
              "nextNodeId": "vte-checks"
            }
          ]
        },
        {
          "id": "vte-riva",
          "type": "recommendation",
          "title": "EINSTEIN used rivaroxaban 15 mg twice daily for 21 days, then 20 mg daily with food",
          "body": "Teaching example, not an order. EINSTEIN-DVT and EINSTEIN-PE dosed the 15 mg and 20 mg tablets with food.",
          "why": "",
          "evidence": [
            {
              "trial": "einstein-dvt",
              "effect": "DVT program"
            },
            {
              "trial": "einstein-pe",
              "effect": "PE program"
            }
          ],
          "caveats": [],
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
          "choices": [
            {
              "label": "Verify renal dose, DDIs, weight extremes",
              "nextNodeId": "vte-checks"
            }
          ]
        },
        {
          "id": "vte-edo",
          "type": "recommendation",
          "title": "Hokusai-VTE used parenteral heparin for at least 5 days, then edoxaban 60 mg or 30 mg daily",
          "body": "Teaching example, not an order. That program was not a single-drug start from diagnosis.",
          "why": "",
          "evidence": [
            {
              "trial": "hokusai-vte",
              "effect": "Edoxaban after heparin lead-in"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "hokusai-vte",
              "label": "Hokusai-VTE"
            }
          ],
          "choices": [
            {
              "label": "Verify renal dose, DDIs, weight extremes",
              "nextNodeId": "vte-checks"
            }
          ]
        },
        {
          "id": "vte-checks",
          "type": "question",
          "title": "Renal function, DDIs, and body-weight extremes OK for the chosen regimen?",
          "body": "Confirm labeled dosing for CrCl, interacting drugs (P-gp/CYP3A4), and obesity/bariatric caveats. Edoxaban still needs the parenteral lead-in completed.",
          "why": "Most acute VTE DOAC failures in teaching are wrong niche (APS/pregnancy) or wrong dose/DDI — not “DOACs don’t work.”",
          "evidence": [],
          "caveats": [
            "Cancer → prefer cancer VTE pathway thinking even if DOAC-eligible"
          ],
          "links": [
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            },
            {
              "kind": "case",
              "id": "vte-doac-choice",
              "label": "Case: apixaban vs rivaroxaban"
            }
          ],
          "choices": [
            {
              "label": "Yes — proceed to duration planning",
              "nextNodeId": "vte-ext-link"
            },
            {
              "label": "Problem found — revise agent / use LMWH or VKA",
              "nextNodeId": "vte-special"
            }
          ]
        },
        {
          "id": "vte-ext-link",
          "type": "recommendation",
          "title": "Initial 3 months, then reassess extension",
          "body": "Provoked vs unprovoked, sex, residual risk → see Extended VTE pathway.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "extended-vte",
              "label": "Extended VTE pathway"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "vte-end"
            }
          ]
        },
        {
          "id": "vte-end",
          "type": "end",
          "title": "Pathway complete — acute VTE",
          "body": "Educational only. Verify dosing, renal cutoffs, and cancer screening as indicated.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": []
        }
      ]
    },
    {
      "id": "cancer-vte",
      "title": "Cancer-associated VTE",
      "indication": "Cancer-associated thrombosis",
      "summary": "Acute DOAC vs LMWH → extended API-CAT step-down; GI cancer caveats.",
      "guidelineSources": [
        {
          "society": "ASH",
          "note": "DOAC options for many CAT patients"
        },
        {
          "society": "CHEST",
          "note": "DOAC alternative to LMWH"
        },
        {
          "society": "AC Forum",
          "note": "Practice resources for CAT"
        }
      ],
      "startNodeId": "cat-start",
      "nodes": [
        {
          "id": "cat-start",
          "type": "start",
          "title": "Cancer-associated VTE",
          "body": "Active cancer with acute or recently treated VTE.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "cancer-vte",
              "label": "Cancer VTE framework"
            },
            {
              "kind": "playlist",
              "id": "cancer-vte",
              "label": "Cancer trial playlist"
            }
          ],
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "cat-phase"
            }
          ]
        },
        {
          "id": "cat-phase",
          "type": "question",
          "title": "Acute treatment phase or already ≥6 months?",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Acute / first months",
              "nextNodeId": "cat-gi"
            },
            {
              "label": "Extended phase after ≥6 months",
              "nextNodeId": "cat-extend"
            }
          ]
        },
        {
          "id": "cat-gi",
          "type": "question",
          "title": "Luminal GI/GU cancer with high mucosal bleed risk, severe thrombocytopenia, or major DDI?",
          "body": "Caravaggio-era DOACs are fine for many solid tumors; GI luminal disease needs extra caution.",
          "why": "",
          "evidence": [],
          "caveats": [
            "Drug–drug interactions with oral anticancer agents — use DDI/oncology cards"
          ],
          "links": [
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI / oncology chips"
            }
          ],
          "choices": [
            {
              "label": "Yes — prefer LMWH or specialty plan",
              "nextNodeId": "cat-lmwh"
            },
            {
              "label": "No — DOAC-eligible acute CAT",
              "nextNodeId": "cat-doac"
            }
          ]
        },
        {
          "id": "cat-lmwh",
          "type": "recommendation",
          "title": "Therapeutic LMWH (or carefully selected DOAC with heme-onc)",
          "body": "CATCH-era LMWH remains important when oral therapy is unsafe.",
          "why": "",
          "evidence": [
            {
              "trial": "catch",
              "effect": "LMWH reference era for CAT"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "catch",
              "label": "CATCH"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "cat-end"
            }
          ]
        },
        {
          "id": "cat-doac",
          "type": "recommendation",
          "title": "Prefer apixaban (or edoxaban after heparin; rivaroxaban) over indefinite LMWH for many",
          "body": "Caravaggio: apixaban noninferior for recurrent VTE vs dalteparin without excess major bleeding in the primary analysis framework.",
          "why": "",
          "evidence": [
            {
              "trial": "caravaggio",
              "effect": "Recurrent VTE 5.6% vs 7.9% (noninferior vs dalteparin)"
            },
            {
              "trial": "hokusai-vte-cancer",
              "effect": "Edoxaban after LMWH lead-in"
            },
            {
              "trial": "select-d",
              "effect": "Rivaroxaban vs dalteparin — efficacy with bleed nuance in GI cancers"
            }
          ],
          "caveats": [
            "Individualize GI cancers",
            "Check platelets and interactions"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "caravaggio",
              "label": "Caravaggio"
            }
          ],
          "choices": [
            {
              "label": "Check platelets, CrCl, oral anticancer DDIs",
              "nextNodeId": "cat-checks"
            }
          ]
        },
        {
          "id": "cat-extend",
          "type": "recommendation",
          "title": "After ≥6 months: consider API-CAT reduced-dose apixaban if still needing AC",
          "body": "API-CAT supports reduced-dose apixaban for extended prevention in selected patients after initial therapy.",
          "why": "",
          "evidence": [
            {
              "trial": "api-cat",
              "effect": "Recurrent VTE 2.1% vs 2.8% (noninferior reduced vs full dose in extended phase)"
            }
          ],
          "caveats": [
            "Not automatic for every cancer type/bleed phenotype",
            "Reassess cancer activity"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "api-cat",
              "label": "API-CAT"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "cat-end"
            }
          ]
        },
        {
          "id": "cat-checks",
          "type": "caution",
          "title": "Before DOAC: platelets, renal dose, and oral anticancer interactions",
          "body": "Severe thrombocytopenia, active luminal bleeding, or strong inducer/inhibitor anticancer therapy may preclude a DOAC. Use the DDI library (oncology chips) and heme-onc partnership.",
          "why": "Caravaggio-era eligibility assumed manageable bleed risk and workable oral therapy.",
          "evidence": [],
          "caveats": [
            "Enzalutamide and other strong inducers — prefer LMWH when interaction dominates (see DDI cards)"
          ],
          "links": [
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI / oncology chips"
            },
            {
              "kind": "case",
              "id": "cancer-stepdown",
              "label": "Case: API-CAT step-down"
            },
            {
              "kind": "trial",
              "id": "caravaggio",
              "label": "Caravaggio"
            }
          ],
          "choices": [
            {
              "label": "Still DOAC-eligible — plan acute regimen",
              "nextNodeId": "cat-doac-final"
            },
            {
              "label": "Unsafe oral path — LMWH",
              "nextNodeId": "cat-lmwh"
            }
          ]
        },
        {
          "id": "cat-doac-final",
          "type": "recommendation",
          "title": "Use labeled CAT DOAC regimen; set reassessment at cancer transitions",
          "body": "Apixaban (Caravaggio), edoxaban after LMWH lead-in (Hokusai Cancer), or rivaroxaban (SELECT-D) with GI-cancer caution. Document duration review at ~6 months for possible API-CAT step-down.",
          "why": "",
          "evidence": [
            {
              "trial": "caravaggio",
              "effect": "Recurrent VTE 5.6% vs 7.9% (noninferior vs dalteparin)"
            },
            {
              "trial": "hokusai-vte-cancer",
              "effect": "Edoxaban after LMWH lead-in"
            },
            {
              "trial": "select-d",
              "effect": "Rivaroxaban vs dalteparin — efficacy with bleed nuance in GI cancers"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "caravaggio",
              "label": "Caravaggio"
            },
            {
              "kind": "trial",
              "id": "api-cat",
              "label": "API-CAT"
            },
            {
              "kind": "framework",
              "id": "cancer-vte",
              "label": "Cancer VTE framework"
            }
          ],
          "choices": [
            {
              "label": "Extended phase later?",
              "nextNodeId": "cat-extend"
            }
          ]
        },
        {
          "id": "cat-end",
          "type": "end",
          "title": "Pathway complete — cancer VTE",
          "body": "Reassess at cancer transitions. Educational only.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": []
        }
      ]
    },
    {
      "id": "extended-vte",
      "title": "Extended VTE secondary prevention",
      "indication": "After initial VTE anticoagulation",
      "summary": "Who extends, aspirin vs low-dose DOAC, cancer step-down.",
      "guidelineSources": [
        {
          "society": "ASH/CHEST",
          "note": "Extend when unprovoked / persistent risk outweighs bleed"
        }
      ],
      "startNodeId": "ext-start",
      "nodes": [
        {
          "id": "ext-start",
          "type": "start",
          "title": "Completed initial anticoagulation (≈3 months)",
          "body": "Decide stop vs extend based on provocation, sex, residual VTE risk, and bleed risk.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "acute-vte-doac",
              "label": "Acute VTE framework"
            }
          ],
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "ext-who"
            }
          ]
        },
        {
          "id": "ext-who",
          "type": "question",
          "title": "Indication to extend?",
          "body": "Major transient provocation with resolved risk → often stop. Unprovoked or persistent risk → consider extension.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Stop — provoked, risk resolved",
              "nextNodeId": "ext-stop"
            },
            {
              "label": "Extend — unprovoked / persistent risk",
              "nextNodeId": "ext-dose"
            },
            {
              "label": "Active cancer still needing AC",
              "nextNodeId": "ext-cancer"
            }
          ]
        },
        {
          "id": "ext-stop",
          "type": "recommendation",
          "title": "Discontinue AC; counsel on recurrent VTE symptoms",
          "body": "No indefinite therapy without indication.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ext-end"
            }
          ]
        },
        {
          "id": "ext-cancer",
          "type": "recommendation",
          "title": "Follow cancer VTE extended pathway (API-CAT)",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "cancer-vte",
              "label": "Cancer VTE pathway"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ext-end"
            }
          ]
        },
        {
          "id": "ext-dose",
          "type": "recommendation",
          "title": "Prefer low-dose DOAC over aspirin for extension when choosing drug therapy",
          "body": "EINSTEIN-CHOICE: rivaroxaban 20 or 10 mg superior to aspirin for preventing recurrent VTE. AMPLIFY-EXT: apixaban 2.5 or 5 mg vs placebo.",
          "why": "",
          "evidence": [
            {
              "trial": "einstein-choice",
              "effect": "Both rivaroxaban doses superior to aspirin for recurrent VTE"
            },
            {
              "trial": "amplify-ext",
              "effect": "Apixaban 2.5 mg BID reduced recurrent VTE vs placebo"
            }
          ],
          "caveats": [
            "Aspirin is inferior to low-dose DOAC for this indication when extension is chosen",
            "Bleed risk still individualize"
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
            }
          ],
          "choices": [
            {
              "label": "Choose apixaban 2.5 mg BID extension framing",
              "nextNodeId": "ext-apix"
            },
            {
              "label": "Choose rivaroxaban 10 mg daily extension framing",
              "nextNodeId": "ext-riva"
            },
            {
              "label": "Bleed-dominant — consider stop vs aspirin only with counseling",
              "nextNodeId": "ext-bleed"
            }
          ]
        },
        {
          "id": "ext-apix",
          "type": "recommendation",
          "title": "Apixaban 2.5 mg BID for extended prevention when extending",
          "body": "AMPLIFY-EXT supports reduced-dose apixaban vs placebo after initial therapy. Reassess annually for bleed vs VTE balance.",
          "why": "",
          "evidence": [
            {
              "trial": "amplify-ext",
              "effect": "Apixaban 2.5 mg BID reduced recurrent VTE vs placebo"
            }
          ],
          "caveats": [
            "Not a COMPASS vascular regimen; different indication"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "amplify-ext",
              "label": "AMPLIFY-EXT"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ext-end"
            }
          ]
        },
        {
          "id": "ext-riva",
          "type": "recommendation",
          "title": "Rivaroxaban 10 mg daily (or 20 mg) beats aspirin for extension",
          "body": "EINSTEIN-CHOICE: both rivaroxaban doses superior to aspirin for preventing recurrent VTE when extension is chosen.",
          "why": "",
          "evidence": [
            {
              "trial": "einstein-choice",
              "effect": "Both rivaroxaban doses superior to aspirin for recurrent VTE"
            }
          ],
          "caveats": [
            "Food counseling if using 20 mg"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "einstein-choice",
              "label": "EINSTEIN-CHOICE"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ext-end"
            }
          ]
        },
        {
          "id": "ext-bleed",
          "type": "caution",
          "title": "If bleed risk dominates, stopping may be safer than aspirin-as-compromise",
          "body": "Aspirin is inferior to low-dose DOAC for VTE extension when drug therapy is chosen. If the decision is truly “no anticoagulant,” document stop — do not assume aspirin fully closes the gap.",
          "why": "",
          "evidence": [
            {
              "trial": "einstein-choice",
              "effect": "Rivaroxaban superior to aspirin for recurrent VTE prevention"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "einstein-choice",
              "label": "EINSTEIN-CHOICE"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ext-end"
            }
          ]
        },
        {
          "id": "ext-end",
          "type": "end",
          "title": "Pathway complete — extended VTE",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": []
        }
      ]
    },
    {
      "id": "af-pci",
      "title": "AF + ACS/PCI dual pathway",
      "indication": "AF requiring OAC with ACS and/or PCI",
      "summary": "AUGUSTUS template: DOAC + P2Y12, early ASA drop; duration nuances.",
      "guidelineSources": [
        {
          "society": "ACC/AHA & ESC",
          "note": "Dual pathway preferred over prolonged triple therapy"
        }
      ],
      "startNodeId": "pci-start",
      "nodes": [
        {
          "id": "pci-start",
          "type": "start",
          "title": "AF + recent ACS/PCI",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "af-pci-dual-pathway",
              "label": "AF+PCI framework"
            },
            {
              "kind": "playlist",
              "id": "af-pci",
              "label": "AF+PCI playlist"
            }
          ],
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "pci-default"
            }
          ]
        },
        {
          "id": "pci-default",
          "type": "recommendation",
          "title": "Default: apixaban (or other DOAC) + P2Y12 (prefer clopidogrel); aspirin only briefly peri-PCI",
          "body": "AUGUSTUS: apixaban superior to VKA for bleeding; aspirin increased bleeding vs placebo on P2Y12 background.",
          "why": "",
          "evidence": [
            {
              "trial": "augustus",
              "effect": "Apixaban superior to VKA for major/CRNM bleed; aspirin increased bleeding vs placebo"
            },
            {
              "trial": "pioneer-af-pci",
              "effect": "Rivaroxaban strategies less bleed than VKA triple"
            },
            {
              "trial": "re-dual-pci",
              "effect": "Dabigatran dual therapy less bleed than VKA triple"
            }
          ],
          "caveats": [
            "Early ASA still individualized after complex stenting",
            "Prefer clopidogrel over potent P2Y12 in most OAC combinations"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "augustus",
              "label": "AUGUSTUS"
            },
            {
              "kind": "ddi",
              "id": "aspirin",
              "label": "Aspirin DDI card"
            }
          ],
          "choices": [
            {
              "label": "Confirm OAC choice & P2Y12",
              "nextNodeId": "pci-oac"
            }
          ]
        },
        {
          "id": "pci-duration",
          "type": "caution",
          "title": "Duration is risk-tiered — OPTIMA-AF / EPIDAURUS refine intensity",
          "body": "Shorter dual pathway for average risk; longer if complex PCI / high ischemic risk. Drop ASA early; do not drop judgment.",
          "why": "",
          "evidence": [
            {
              "trial": "optima-af",
              "effect": "Duration refinement — see trial card"
            },
            {
              "trial": "epidaurus",
              "effect": "Duration/intensity nuance — see trial card"
            },
            {
              "trial": "afire",
              "effect": "Stable AF+CAD remote from PCI: DOAC monotherapy beats long-term combination"
            }
          ],
          "caveats": [
            "Open-label / exclusion limits blanket 1-month rules"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "afire",
              "label": "AFIRE"
            },
            {
              "kind": "nuance",
              "id": "dual-pathway-duration",
              "label": "Duration nuance card"
            }
          ],
          "choices": [
            {
              "label": "Remote from PCI — consider AFIRE-style DOAC monotherapy",
              "nextNodeId": "pci-afire"
            },
            {
              "label": "Done with dual-pathway plan",
              "nextNodeId": "pci-end"
            }
          ]
        },
        {
          "id": "pci-oac",
          "type": "question",
          "title": "Which OAC backbone?",
          "body": "AUGUSTUS favors apixaban over VKA for bleeding on a P2Y12 background. PIONEER/RE-DUAL/ENTRUST support other DOAC dual-pathway strategies vs VKA triple.",
          "why": "",
          "evidence": [
            {
              "trial": "augustus",
              "effect": "Apixaban superior to VKA for major/CRNM bleed; aspirin increased bleeding vs placebo"
            },
            {
              "trial": "pioneer-af-pci",
              "effect": "Rivaroxaban strategies less bleed than VKA triple"
            },
            {
              "trial": "re-dual-pci",
              "effect": "Dabigatran dual therapy less bleed than VKA triple"
            }
          ],
          "caveats": [
            "Mechanical valves remain VKA-based — not this dual-pathway template"
          ],
          "links": [
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
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            }
          ],
          "choices": [
            {
              "label": "DOAC + clopidogrel dual pathway",
              "nextNodeId": "pci-asa"
            },
            {
              "label": "Must use VKA (niche) — still minimize triple duration",
              "nextNodeId": "pci-asa"
            }
          ]
        },
        {
          "id": "pci-asa",
          "type": "question",
          "title": "Aspirin duration after PCI?",
          "body": "Default teaching: peri-PCI aspirin, then drop early when bleed risk favors dual pathway (OAC+P2Y12). Complex PCI / high ischemic risk may justify a short extension — document why.",
          "why": "AUGUSTUS factorial: aspirin increased bleeding vs placebo on P2Y12 + OAC background.",
          "evidence": [
            {
              "trial": "augustus",
              "effect": "Aspirin increased bleeding vs placebo on P2Y12 background"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "nuance",
              "id": "dual-pathway-duration",
              "label": "Duration nuance"
            },
            {
              "kind": "ddi",
              "id": "aspirin",
              "label": "Aspirin DDI card"
            }
          ],
          "choices": [
            {
              "label": "Set dual-pathway duration",
              "nextNodeId": "pci-duration"
            }
          ]
        },
        {
          "id": "pci-afire",
          "type": "recommendation",
          "title": "Stable AF + CAD remote from PCI: DOAC monotherapy often beats long-term combination",
          "body": "AFIRE supports OAC monotherapy over combination with antiplatelet in stable AF+CAD remote from intervention — do not keep lifelong OAC+ASA by inertia.",
          "why": "",
          "evidence": [
            {
              "trial": "afire",
              "effect": "Stable AF+CAD remote from PCI: DOAC monotherapy beats long-term combination"
            }
          ],
          "caveats": [
            "Not for acute post-stent window"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "afire",
              "label": "AFIRE"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "pci-end"
            }
          ]
        },
        {
          "id": "pci-end",
          "type": "end",
          "title": "Pathway complete — AF+PCI",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "af-pci-dual-pathway",
              "label": "Framework: AF + PCI dual pathway"
            },
            {
              "kind": "case",
              "id": "af-pci-week2",
              "label": "Case: AF + PCI week 2"
            },
            {
              "kind": "nuance",
              "id": "dual-pathway-duration",
              "label": "Nuance: Dual-pathway duration"
            }
          ],
          "choices": []
        }
      ]
    },
    {
      "id": "intermediate-pe",
      "title": "Intermediate-risk PE — CDT vs anticoagulation",
      "indication": "Acute PE without shock",
      "summary": "Anticoagulation default; HI-PEITHO enrichment for CDT.",
      "guidelineSources": [
        {
          "society": "ESC",
          "note": "Risk-stratify PE; reperfusion for high-risk"
        }
      ],
      "startNodeId": "pe-start",
      "nodes": [
        {
          "id": "pe-start",
          "type": "start",
          "title": "Acute PE, hemodynamically stable",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "pe-enrich"
            }
          ]
        },
        {
          "id": "pe-enrich",
          "type": "question",
          "title": "Matches HI-PEITHO-style enrichment (RV dysfunction + biomarker/clinical severity) AND center has CDT expertise?",
          "body": "Most intermediate-risk PE still does well on anticoagulation alone.",
          "why": "",
          "evidence": [
            {
              "trial": "hi-peitho",
              "effect": "7-day PE death/decompensation/recurrent PE 4.0% vs 10.3% (RR 0.39)",
              "nnt": "≈16",
              "arr": "6.3%",
              "note": "NNT ≈ 1/0.063 for the trial composite in the enriched population — do not extrapolate to all intermediate-risk PE"
            },
            {
              "trial": "einstein-pe",
              "effect": "Oral anticoagulation pathway for eligible PE"
            }
          ],
          "caveats": [
            "Enrichment criteria are the teaching point",
            "Not for massive PE shock first-line CDT marketing"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "hi-peitho",
              "label": "HI-PEITHO"
            },
            {
              "kind": "nuance",
              "id": "hi-peitho-enrichment",
              "label": "Enrichment nuance"
            },
            {
              "kind": "case",
              "id": "intermediate-pe-pert",
              "label": "Case: call for CDT?"
            }
          ],
          "choices": [
            {
              "label": "Yes — discuss CDT via PERT",
              "nextNodeId": "pe-cdt"
            },
            {
              "label": "No — anticoagulation alone",
              "nextNodeId": "pe-ac"
            }
          ]
        },
        {
          "id": "pe-cdt",
          "type": "recommendation",
          "title": "PERT-guided ultrasound-facilitated CDT in capable centers",
          "body": "Offer only to enriched phenotypes similar to the trial.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "hi-peitho",
              "label": "HI-PEITHO"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "pe-end"
            }
          ]
        },
        {
          "id": "pe-ac",
          "type": "recommendation",
          "title": "Therapeutic anticoagulation alone (DOAC when eligible)",
          "body": "Do not escalate to CDT by default.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "acute-vte",
              "label": "Acute VTE pathway"
            }
          ],
          "choices": [
            {
              "label": "Choose DOAC when eligible",
              "nextNodeId": "pe-doac"
            }
          ]
        },
        {
          "id": "pe-doac",
          "type": "recommendation",
          "title": "Transition to labeled DOAC when stable and eligible",
          "body": "After parenteral start if used, move to an acute VTE DOAC pathway (watch pregnancy/APS/cancer exclusions). CDT does not replace the need for anticoagulation.",
          "why": "",
          "evidence": [
            {
              "trial": "einstein-pe",
              "effect": "Oral anticoagulation pathway for eligible PE"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "acute-vte",
              "label": "Acute VTE pathway"
            },
            {
              "kind": "trial",
              "id": "einstein-pe",
              "label": "EINSTEIN-PE"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "pe-end"
            }
          ]
        },
        {
          "id": "pe-end",
          "type": "end",
          "title": "Pathway complete — intermediate PE",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": []
        }
      ]
    },
    {
      "id": "post-ich",
      "title": "Post-ICH anticoagulation in AF",
      "indication": "AF after intracranial hemorrhage",
      "summary": "ENRICH-AF caution; ASPIRE pending; LAAO option.",
      "guidelineSources": [
        {
          "society": "Multidisciplinary",
          "note": "Neurology + cardiology shared decisions; location/timing specific"
        }
      ],
      "startNodeId": "ich-start",
      "nodes": [
        {
          "id": "ich-start",
          "type": "start",
          "title": "AF survivor after ICH",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "post-ich-anticoagulation",
              "label": "Post-ICH framework"
            },
            {
              "kind": "nuance",
              "id": "enrich-vs-aspire",
              "label": "ENRICH vs ASPIRE nuance"
            },
            {
              "kind": "case",
              "id": "post-ich-af",
              "label": "Case: Post-ICH AF"
            }
          ],
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "ich-acute"
            }
          ]
        },
        {
          "id": "ich-acute",
          "type": "question",
          "title": "Is the bleed secured / acute management complete?",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Still acute / untreated lesion",
              "nextNodeId": "ich-wait"
            },
            {
              "label": "Secured — considering restart months later",
              "nextNodeId": "ich-enrich"
            }
          ]
        },
        {
          "id": "ich-wait",
          "type": "recommendation",
          "title": "Do not restart OAC during acute unmanaged ICH",
          "body": "Secure etiology; neurology/neurosurgery lead.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ich-end"
            }
          ]
        },
        {
          "id": "ich-enrich",
          "type": "caution",
          "title": "ENRICH-AF: do not assume net benefit from routine restart",
          "body": "Stroke/SE 11.8% vs 12.8% (HR 0.88, NS). Individualize by ICH location (lobar/CAA), timing, and cardioembolic risk.",
          "why": "",
          "evidence": [
            {
              "trial": "enrich-af",
              "effect": "Stroke/SE not significantly reduced with edoxaban restart strategy (HR 0.88, P=NS)"
            }
          ],
          "caveats": [
            "ASPIRE pending may refine subtypes",
            "LAAO may enter conversation if long-term OAC looks prohibitive"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "enrich-af",
              "label": "ENRICH-AF"
            },
            {
              "kind": "trial",
              "id": "aspire",
              "label": "ASPIRE (pending)"
            }
          ],
          "choices": [
            {
              "label": "Lobar / CAA-predominant — extra caution",
              "nextNodeId": "ich-lobar"
            },
            {
              "label": "Deep / hypertensive ICH — still individualized",
              "nextNodeId": "ich-deep"
            },
            {
              "label": "Multidisciplinary restart with documented why",
              "nextNodeId": "ich-restart"
            },
            {
              "label": "Defer / pursue LAAO evaluation",
              "nextNodeId": "ich-laao"
            }
          ]
        },
        {
          "id": "ich-restart",
          "type": "recommendation",
          "title": "If restarting: named owner, timing, agent — document",
          "body": "Not aspirin-as-placebo when the question is OAC vs none.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "af-stroke",
              "label": "AF pathway"
            },
            {
              "kind": "page",
              "id": "reversal",
              "label": "Bleed & reversal"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ich-end"
            }
          ]
        },
        {
          "id": "ich-laao",
          "type": "recommendation",
          "title": "Consider LAAO shared decision",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "af-stroke",
              "label": "AF pathway (LAAO node)"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "ich-end"
            }
          ]
        },
        {
          "id": "ich-lobar",
          "type": "caution",
          "title": "Lobar ICH / probable CAA: restart threshold is high",
          "body": "Lobar location and cerebral amyloid angiopathy markers raise recurrent ICH concern. ENRICH-AF did not show a clear stroke/SE win for routine restart — document neurology ownership and consider LAAO when long-term OAC looks prohibitive.",
          "why": "",
          "evidence": [
            {
              "trial": "enrich-af",
              "effect": "Stroke/SE not significantly reduced with edoxaban restart strategy (HR 0.88, P=NS)"
            }
          ],
          "caveats": [
            "ASPIRE may refine subtypes — pending"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "enrich-af",
              "label": "ENRICH-AF"
            },
            {
              "kind": "nuance",
              "id": "enrich-vs-aspire",
              "label": "ENRICH vs ASPIRE"
            },
            {
              "kind": "case",
              "id": "post-ich-af",
              "label": "Case: post-lobar ICH"
            }
          ],
          "choices": [
            {
              "label": "Consider LAAO",
              "nextNodeId": "ich-laao"
            },
            {
              "label": "Still restart after MDT — document",
              "nextNodeId": "ich-restart"
            }
          ]
        },
        {
          "id": "ich-deep",
          "type": "recommendation",
          "title": "Deep ICH: still shared decision — not automatic restart",
          "body": "Hypertensive deep ICH may have a different recurrent-ICH story than lobar/CAA, but ENRICH-AF overall cautions against assuming net benefit. Time from ICH, BP control, and CHA₂DS₂-VASc inform MDT discussion.",
          "why": "",
          "evidence": [
            {
              "trial": "enrich-af",
              "effect": "Stroke/SE not significantly reduced with edoxaban restart strategy (HR 0.88, P=NS)"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "post-ich-anticoagulation",
              "label": "Post-ICH framework"
            },
            {
              "kind": "trial",
              "id": "aspire",
              "label": "ASPIRE (pending)"
            }
          ],
          "choices": [
            {
              "label": "MDT restart",
              "nextNodeId": "ich-restart"
            },
            {
              "label": "Defer / LAAO",
              "nextNodeId": "ich-laao"
            }
          ]
        },
        {
          "id": "ich-end",
          "type": "end",
          "title": "Pathway complete — post-ICH AF",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": []
        }
      ]
    },
    {
      "id": "doac-bleed-us",
      "title": "Major bleed on DOAC (U.S.)",
      "indication": "Life-threatening bleeding / emergency surgery",
      "summary": "ABCs; dabigatran→idarucizumab; FXa→supportive care + 4F-PCC after Andexxa U.S. withdrawal.",
      "guidelineSources": [
        {
          "society": "FDA",
          "note": "Andexxa U.S. withdrawn Dec 22, 2025"
        },
        {
          "society": "Institutional",
          "note": "Follow hospital hemorrhage pathway"
        }
      ],
      "startNodeId": "bld-start",
      "nodes": [
        {
          "id": "bld-start",
          "type": "start",
          "title": "Major bleed on oral anticoagulant",
          "body": "ABCs, localize bleed, stop anticoagulant, reverse when life-threatening or emergency surgery requires.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "page",
              "id": "reversal",
              "label": "Bleed & reversal page"
            },
            {
              "kind": "framework",
              "id": "doac-major-bleed-us",
              "label": "Framework: DOAC major bleed (U.S.)"
            }
          ],
          "choices": [
            {
              "label": "Continue",
              "nextNodeId": "bld-agent"
            }
          ]
        },
        {
          "id": "bld-agent",
          "type": "question",
          "title": "Which agent?",
          "body": "",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [],
          "choices": [
            {
              "label": "Dabigatran",
              "nextNodeId": "bld-dabi"
            },
            {
              "label": "Apixaban / rivaroxaban / edoxaban (FXa)",
              "nextNodeId": "bld-fxa"
            },
            {
              "label": "Warfarin",
              "nextNodeId": "bld-vka"
            }
          ]
        },
        {
          "id": "bld-dabi",
          "type": "recommendation",
          "title": "Idarucizumab 5 g IV when indicated",
          "body": "RE-VERSE AD supports specific dabigatran reversal.",
          "why": "",
          "evidence": [
            {
              "trial": "re-verse-ad",
              "effect": "Rapid dabigatran reversal in emergencies"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "re-verse-ad",
              "label": "RE-VERSE AD"
            }
          ],
          "choices": [
            {
              "label": "Time since last dose / renal clearance matters",
              "nextNodeId": "bld-timing"
            },
            {
              "label": "Plan restart timing",
              "nextNodeId": "bld-restart"
            }
          ]
        },
        {
          "id": "bld-fxa",
          "type": "caution",
          "title": "U.S.: Andexxa not available after Dec 22, 2025 — supportive care + institutional 4F-PCC",
          "body": "AstraZeneca voluntarily withdrew the BLA / ended U.S. sales Dec 22, 2025 after FDA concluded risks outweighed benefits (TE signal). Ondexxya may remain outside U.S. — verify formulary. ANNEXA-4/I are historical for TE teaching, not a U.S. order set. U.S. 4F-PCC for FXa-inhibitor bleed is an institutional/off-label pathway — not an FDA-labeled specific FXa antidote (Andexxa was the labeled agent; now unavailable in U.S.).",
          "why": "",
          "evidence": [
            {
              "trial": "annexa-i",
              "effect": "FDA AC Day 30: thrombosis 14.6% vs 6.9%; TE deaths 2.5% vs 0.9% — context for U.S. withdrawal"
            }
          ],
          "caveats": [
            "Do not write 'give Andexxa' in U.S. practice after Dec 2025",
            "U.S. 4F-PCC for FXa bleed = institutional/off-label pathway (Andexxa was the labeled agent)",
            "Geographic nuance: not global withdrawal"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "annexa-i",
              "label": "ANNEXA-I"
            },
            {
              "kind": "page",
              "id": "reversal",
              "label": "#/reversal"
            },
            {
              "kind": "framework",
              "id": "doac-major-bleed-us",
              "label": "Framework: DOAC major bleed (U.S.)"
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
          "choices": [
            {
              "label": "Review supportive measures checklist",
              "nextNodeId": "bld-support"
            },
            {
              "label": "Plan restart timing",
              "nextNodeId": "bld-restart"
            }
          ]
        },
        {
          "id": "bld-vka",
          "type": "recommendation",
          "title": "Warfarin major-bleed teaching: 4F-PCC plus IV vitamin K",
          "body": "Teaching example, not an order. Warfarin ICH and major-bleed bundles describe 4-factor PCC plus IV vitamin K. Fresh frozen plasma is the fallback when 4F-PCC is unavailable.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "page",
              "id": "reversal",
              "label": "Bleed & reversal"
            }
          ],
          "choices": [
            {
              "label": "Plan restart timing",
              "nextNodeId": "bld-restart"
            }
          ]
        },
        {
          "id": "bld-restart",
          "type": "recommendation",
          "title": "After hemostasis: scheduled restart decision with named owner",
          "body": "Indication severity × bleed source fixed? × anatomy (CNS vs GI). Post-ICH differs from post-GI.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "post-ich",
              "label": "Post-ICH pathway"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "bld-end"
            }
          ]
        },
        {
          "id": "bld-support",
          "type": "recommendation",
          "title": "FXa bleed bundle (U.S.): stop agent, local control, reverse coagulopathy contributors, 4F-PCC per protocol",
          "body": "After Andexxa U.S. withdrawal (Dec 22, 2025; AstraZeneca voluntary BLA withdrawal after FDA risk–benefit conclusion), do not order andexanet. Use supportive care and institutional 4F-PCC guidance for life-threatening FXa-inhibitor bleeding — an institutional/off-label pathway, not an FDA-labeled specific FXa antidote (Andexxa was the labeled agent; now unavailable in U.S.). Activated charcoal if very recent ingestion per protocol. Correct anemia/platelets/calcium as indicated.",
          "why": "FDA concluded risks outweighed benefits for Andexxa; ANNEXA-I TE signal informs why U.S. practice changed.",
          "evidence": [
            {
              "trial": "annexa-i",
              "effect": "FDA AC Day 30: thrombosis 14.6% vs 6.9%; TE deaths 2.5% vs 0.9% — context for U.S. withdrawal"
            }
          ],
          "caveats": [
            "Ondexxya may remain outside the U.S. — verify formulary geography",
            "4F-PCC for FXa-inhibitor bleed is institutional/off-label — not an FDA-labeled FXa antidote",
            "4F-PCC dosing is institutional — not invented here"
          ],
          "links": [
            {
              "kind": "page",
              "id": "reversal",
              "label": "#/reversal"
            },
            {
              "kind": "trial",
              "id": "annexa-i",
              "label": "ANNEXA-I"
            },
            {
              "kind": "playlist",
              "id": "reversal",
              "label": "Reversal playlist"
            },
            {
              "kind": "framework",
              "id": "doac-major-bleed-us",
              "label": "Framework: DOAC major bleed (U.S.)"
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
          "choices": [
            {
              "label": "Plan restart timing",
              "nextNodeId": "bld-restart"
            }
          ]
        },
        {
          "id": "bld-timing",
          "type": "caution",
          "title": "Last-dose timing and renal function change urgency of specific reversal",
          "body": "Idarucizumab remains appropriate for dabigatran when bleed is life-threatening or emergency surgery cannot wait. If dabigatran effect has likely cleared (time + renal function), focus on supportive care — still follow institutional criteria for praxbind use.",
          "why": "",
          "evidence": [
            {
              "trial": "re-verse-ad",
              "effect": "Rapid dabigatran reversal in emergencies"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "re-verse-ad",
              "label": "RE-VERSE AD"
            }
          ],
          "choices": [
            {
              "label": "Plan restart timing",
              "nextNodeId": "bld-restart"
            }
          ]
        },
        {
          "id": "bld-end",
          "type": "end",
          "title": "Pathway complete — DOAC bleed (U.S.)",
          "body": "Verify institutional protocol. Educational only.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "framework",
              "id": "doac-major-bleed-us",
              "label": "Framework: DOAC major bleed (U.S.)"
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
            },
            {
              "kind": "page",
              "id": "reversal",
              "label": "Bleed & reversal page"
            }
          ],
          "choices": []
        }
      ]
    },
    {
      "id": "mechanical-valve",
      "title": "Mechanical heart valve",
      "indication": "Mechanical prosthetic valve",
      "summary": "Warfarin INR by valve type/position; bridging considerations; DOAC contraindication (RE-ALIGN-era teaching).",
      "guidelineSources": [
        {
          "society": "ACC/AHA",
          "note": "VKA for mechanical valves; INR target by position and thrombogenicity"
        },
        {
          "society": "ESC",
          "note": "VKA mandatory for mechanical prostheses; DOACs not indicated"
        }
      ],
      "startNodeId": "mv-start",
      "nodes": [
        {
          "id": "mv-start",
          "type": "start",
          "title": "Start: Mechanical prosthetic valve",
          "body": "Confirm prosthesis type (bileaflet, On-X, older generation), position (aortic vs mitral), and additional thromboembolic risk factors (AF, prior embolus, hypercoagulability, LV dysfunction, older-generation valve).",
          "why": "INR intensity and peri-procedural planning depend on valve thrombogenicity and position — not a one-size target.",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": [
            {
              "label": "Continue — confirm DOAC is off the table",
              "nextNodeId": "mv-doac-ban"
            }
          ]
        },
        {
          "id": "mv-doac-ban",
          "type": "caution",
          "title": "DOACs are contraindicated for mechanical valves",
          "body": "Do not substitute a DOAC for warfarin in a mechanical prosthesis. Landmark DOAC AF/VTE trials excluded mechanical valves. RE-ALIGN stopped early after more ischemic or unspecified stroke and more major bleeding with dabigatran than with warfarin. PROACT Xa did not show apixaban noninferior to warfarin for an On-X mechanical aortic valve. Treat mechanical valves as VKA-only territory.",
          "why": "ACC/AHA valvular heart disease guideline Class 1 (verify current table) for VKA; DOAC labels and pivotal programs do not support mechanical valves.",
          "evidence": [],
          "caveats": [
            "Read the RE-ALIGN, PROACT, and PROACT Xa cards before quoting valve rates. PROACT is warfarin-based. PROACT Xa is apixaban and was stopped early.",
            "GALILEO addressed rivaroxaban after TAVR (bioprosthetic pathway), not mechanical valves"
          ],
          "links": [
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
              "id": "galileo",
              "label": "GALILEO (TAVR — contrast)"
            },
            {
              "kind": "trial",
              "id": "invictus",
              "label": "INVICTUS (rheumatic MS)"
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
          "choices": [
            {
              "label": "Set INR target by valve position",
              "nextNodeId": "mv-position"
            }
          ]
        },
        {
          "id": "mv-position",
          "type": "question",
          "title": "Valve position and thrombogenicity?",
          "body": "Use current ACC/AHA or ESC INR tables for the specific prosthesis. Soft teaching ranges below are guideline-aligned starting frames — verify the exact valve and latest society table before prescribing.",
          "why": "Mitral and older/more thrombogenic valves generally need higher intensity than contemporary bileaflet aortic valves without extra risk factors.",
          "evidence": [],
          "caveats": [
            "Always confirm institutional / manufacturer / guideline table for the implanted model"
          ],
          "links": [],
          "choices": [
            {
              "label": "Mechanical aortic, low additional risk (bileaflet / On-X per label path)",
              "nextNodeId": "mv-inr-aortic"
            },
            {
              "label": "Mechanical mitral, or aortic with higher thrombotic risk factors",
              "nextNodeId": "mv-inr-mitral"
            },
            {
              "label": "On-X aortic — considering lower-INR protocol after transition",
              "nextNodeId": "mv-onx"
            }
          ]
        },
        {
          "id": "mv-inr-aortic",
          "type": "recommendation",
          "title": "Typical teaching: INR 2.0–3.0 for many bileaflet aortic valves without extra risk",
          "body": "Dose-adjusted warfarin to the guideline target for that valve. Add low-dose aspirin when society guidance and bleed risk support it. Schedule reliable INR follow-up and TTR stewardship.",
          "why": "Lower thrombogenicity of contemporary bileaflet aortic valves underpins the usual 2–3 target when no additional risk factors are present — confirm current table.",
          "evidence": [],
          "caveats": [
            "Additional risk factors (AF, prior embolus, hypercoagulable state, LV dysfunction) often push intensity upward — treat like higher-risk pathway",
            "Do not invent patient-specific targets outside guideline tables"
          ],
          "links": [],
          "choices": [
            {
              "label": "Peri-procedural / bridging considerations",
              "nextNodeId": "mv-bridge"
            }
          ]
        },
        {
          "id": "mv-inr-mitral",
          "type": "recommendation",
          "title": "Typical teaching: INR 2.5–3.5 for mechanical mitral (and many higher-risk aortic)",
          "body": "Dose-adjusted warfarin to the higher guideline intensity appropriate for mitral position or higher-risk aortic prostheses. Coordinate cardiology/valve clinic follow-up.",
          "why": "Mitral mechanical valves carry higher thromboembolic risk; guidelines generally recommend higher INR intensity than low-risk aortic bileaflet valves.",
          "evidence": [],
          "caveats": [
            "Verify exact range for the implanted prosthesis and concurrent AF"
          ],
          "links": [],
          "choices": [
            {
              "label": "Peri-procedural / bridging considerations",
              "nextNodeId": "mv-bridge"
            }
          ]
        },
        {
          "id": "mv-onx",
          "type": "caution",
          "title": "On-X aortic lower-INR protocols are specialized — not a DOAC invitation",
          "body": "Selected On-X aortic pathways allow a lower INR target after an initial higher-intensity transition period, usually with aspirin, under protocol. This remains warfarin-based. It does not authorize a DOAC.",
          "why": "The PROACT card reports the 2018 On-X lower-INR comparison. Follow the labeled protocol and surgical/cardiology ownership. PROACT Xa does not turn that pathway into a DOAC.",
          "evidence": [],
          "caveats": [
            "Not applicable to mitral On-X or off-label DOAC substitution",
            "Confirm timing of transition phase and concomitant aspirin",
            "PROACT Xa tested apixaban in On-X aortic valves and did not meet noninferiority"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "proact",
              "label": "PROACT"
            },
            {
              "kind": "trial",
              "id": "proact-xa",
              "label": "PROACT Xa"
            }
          ],
          "choices": [
            {
              "label": "Peri-procedural / bridging considerations",
              "nextNodeId": "mv-bridge"
            }
          ]
        },
        {
          "id": "mv-bridge",
          "type": "caution",
          "title": "Bridging: mechanical valves ≠ BRIDGE trial AF population",
          "body": "BRIDGE showed routine LMWH bridging was harmful in typical AF warfarin interruptions without valves. Mechanical valves are a different thrombotic risk class — interruption and bridging are risk-stratified by valve position, time from surgery, and procedure bleed risk. Prefer institutional valve-bridging protocols; involve the valve clinic.",
          "why": "Extrapolating “never bridge” from BRIDGE to mechanical mitral valves is unsafe teaching.",
          "evidence": [
            {
              "trial": "bridge",
              "effect": "In nonvalvular AF, routine bridging increased bleeding without reducing thromboembolism — do not generalize to mechanical valves"
            }
          ],
          "caveats": [
            "High thrombotic risk interruptions (e.g., mechanical mitral, recent implant) often need parenteral coverage per protocol",
            "Low-bleed procedures may not need interruption at all"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "bridge",
              "label": "BRIDGE (AF — contrast)"
            },
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "mv-end"
            }
          ]
        },
        {
          "id": "mv-end",
          "type": "end",
          "title": "Pathway complete — mechanical valve",
          "body": "Document prosthesis, INR target, aspirin status, and who owns peri-procedural planning. Educational only.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": []
        }
      ]
    },
    {
      "id": "aps",
      "title": "Antiphospholipid syndrome",
      "indication": "APS with thrombosis",
      "summary": "Antibody profile → triple-positive VKA preference; DOAC caution; arterial vs venous nuance.",
      "guidelineSources": [
        {
          "society": "ISTH / rheumatology guidance",
          "note": "VKA preferred in high-risk / triple-positive APS"
        },
        {
          "society": "ASH/CHEST (context)",
          "note": "Standard DOAC VTE pathways do not replace APS specialty care"
        }
      ],
      "startNodeId": "aps-start",
      "nodes": [
        {
          "id": "aps-start",
          "type": "start",
          "title": "Start: Suspected or confirmed APS with thrombosis",
          "body": "Confirm persistent antiphospholipid antibodies (LA, aCL, anti-β2GP1) on repeat testing ≥12 weeks apart when classifying APS. Acute treatment still needs prompt anticoagulation while workup proceeds.",
          "why": "Classification and risk tier (especially triple-positive) drive long-term agent choice.",
          "evidence": [],
          "caveats": [
            "Do not delay therapeutic anticoagulation for incomplete serology in acute VTE"
          ],
          "links": [
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
          "choices": [
            {
              "label": "Assess antibody risk tier",
              "nextNodeId": "aps-tier"
            }
          ]
        },
        {
          "id": "aps-tier",
          "type": "question",
          "title": "Triple-positive (LA + aCL + anti-β2GP1) or high-risk APS phenotype?",
          "body": "Triple-positive and many arterial APS phenotypes are high-risk for DOAC failure in specialty guidance.",
          "why": "TRAPS/RAPS-era literature (not curated as trial cards on this site) informs caution against DOACs in high-risk APS — prefer primary papers / specialty guidelines when teaching details.",
          "evidence": [],
          "caveats": [
            "TRAPS and RAPS are not timeline cards here — no invented event rates",
            "Single-positive lower-risk phenotypes still need individualized specialty input"
          ],
          "links": [
            {
              "kind": "tx",
              "id": "acute-vte",
              "label": "Acute VTE pathway"
            }
          ],
          "choices": [
            {
              "label": "Yes — triple-positive / high-risk APS",
              "nextNodeId": "aps-vka"
            },
            {
              "label": "Lower-risk or incomplete profile — still specialty decision",
              "nextNodeId": "aps-caution-doac"
            },
            {
              "label": "Arterial thrombosis phenotype (stroke/MI) dominant",
              "nextNodeId": "aps-arterial"
            }
          ]
        },
        {
          "id": "aps-vka",
          "type": "recommendation",
          "title": "Prefer dose-adjusted warfarin (typical INR 2–3 unless specialty targets otherwise)",
          "body": "Long-term VKA is the default teaching for triple-positive APS after acute therapy. Avoid switching to a DOAC for convenience. Ensure reliable INR monitoring and contraception counseling when relevant.",
          "why": "High-risk APS guidance prioritizes VKA; DOAC VTE programs were not built as dedicated high-risk APS replacement strategies.",
          "evidence": [],
          "caveats": [
            "Some arterial APS regimens use higher INR or add antiplatelet — specialty-owned",
            "Pregnancy: LMWH pathways, not DOAC/warfarin embryopathy risk window"
          ],
          "links": [
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
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
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "aps-end"
            }
          ]
        },
        {
          "id": "aps-caution-doac",
          "type": "caution",
          "title": "DOAC only with explicit specialty rationale — not default",
          "body": "If antibodies are single-positive, transient, or APS is uncertain, a labeled DOAC for standard VTE may be considered in selected cases after hematology/rheumatology input — document why VKA was not chosen and plan serology follow-up.",
          "why": "Avoid reflexive DOAC use the moment “APS” appears in the chart without risk-tiering.",
          "evidence": [],
          "caveats": [
            "Reclassify if repeat testing confirms triple-positive — revisit agent"
          ],
          "links": [
            {
              "kind": "tx",
              "id": "acute-vte",
              "label": "Acute VTE pathway"
            },
            {
              "kind": "trial",
              "id": "amplify",
              "label": "AMPLIFY (standard VTE — not APS)"
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
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "aps-end"
            }
          ]
        },
        {
          "id": "aps-arterial",
          "type": "caution",
          "title": "Arterial APS: do not treat like routine venous DOAC VTE",
          "body": "Arterial events in APS often need VKA ± antiplatelet strategies directed by specialty clinics. Standard venous DOAC dosing is not an automatic substitute.",
          "why": "Arterial thrombus biology and APS trial signals differ from unprovoked DVT pathways.",
          "evidence": [],
          "caveats": [
            "Stroke workup must exclude competing mechanisms"
          ],
          "links": [
            {
              "kind": "framework",
              "id": "aps-triple-positive-vka",
              "label": "Framework: APS triple-positive VKA"
            }
          ],
          "choices": [
            {
              "label": "Back to VKA default teaching",
              "nextNodeId": "aps-vka"
            }
          ]
        },
        {
          "id": "aps-end",
          "type": "end",
          "title": "Pathway complete — APS",
          "body": "Document antibody profile, target INR, and specialty follow-up. Educational only.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": []
        }
      ]
    },
    {
      "id": "compass-vascular",
      "title": "Stable CAD/PAD — COMPASS regimen",
      "indication": "Stable atherosclerotic disease (no AF full-dose OAC mandate)",
      "summary": "Who qualifies for rivaroxaban 2.5 BID + ASA; exclude full-dose AF OAC; bleeding caveats; VOYAGER PAD context.",
      "guidelineSources": [
        {
          "society": "ACC/ESC vascular",
          "note": "Selected chronic CAD/PAD — dual pathway vascular dose"
        },
        {
          "society": "Label",
          "note": "Rivaroxaban 2.5 mg BID + aspirin — not AF stroke-prevention dosing"
        }
      ],
      "startNodeId": "cv-start",
      "nodes": [
        {
          "id": "cv-start",
          "type": "start",
          "title": "Start: Stable atherosclerotic disease — COMPASS-style question",
          "body": "This pathway is for chronic CAD and/or PAD decisions about low-dose rivaroxaban plus aspirin — not for atrial fibrillation stroke prevention.",
          "why": "Dose, population, and endpoint (MACE / limb events) differ from full-dose DOAC AF care.",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "compass",
              "label": "COMPASS"
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
          "choices": [
            {
              "label": "Screen exclusions first",
              "nextNodeId": "cv-exclude"
            }
          ]
        },
        {
          "id": "cv-exclude",
          "type": "question",
          "title": "Any absolute mismatch for the COMPASS regimen?",
          "body": "Full-dose OAC already indicated (AF, mechanical valve, acute VTE), high bleeding risk / recent major bleed, dual potent P2Y12 needs, or need for therapeutic anticoagulation → do not layer COMPASS dosing on top.",
          "why": "COMPASS studied rivaroxaban 2.5 mg BID + aspirin vs aspirin alone in selected stable CAD/PAD — not as an add-on to full-dose OAC.",
          "evidence": [],
          "caveats": [
            "Uncontrolled BP and prior hemorrhagic stroke phenotypes need careful bleed review"
          ],
          "links": [
            {
              "kind": "tx",
              "id": "af-stroke",
              "label": "AF stroke pathway"
            },
            {
              "kind": "ddi",
              "id": "aspirin-compass",
              "label": "COMPASS ASA DDI card"
            }
          ],
          "choices": [
            {
              "label": "Needs full-dose OAC (AF / valve / VTE) — stop here",
              "nextNodeId": "cv-wrong-path"
            },
            {
              "label": "Prohibitive bleed phenotype — aspirin or specialty plan only",
              "nextNodeId": "cv-bleed-out"
            },
            {
              "label": "No — possible COMPASS candidate",
              "nextNodeId": "cv-who"
            }
          ]
        },
        {
          "id": "cv-wrong-path",
          "type": "recommendation",
          "title": "Use the AF / valve / VTE pathway — not COMPASS 2.5 mg",
          "body": "Do not replace therapeutic AF anticoagulation with vascular-dose rivaroxaban 2.5 mg BID. Do not combine full-dose DOAC with COMPASS dual pathway without a specific protocol.",
          "why": "Different indication and dose intensity.",
          "evidence": [],
          "caveats": [],
          "links": [
            {
              "kind": "tx",
              "id": "af-stroke",
              "label": "AF pathway"
            },
            {
              "kind": "tx",
              "id": "af-pci",
              "label": "AF+PCI pathway"
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
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "cv-end"
            }
          ]
        },
        {
          "id": "cv-bleed-out",
          "type": "recommendation",
          "title": "Defer combination; optimize single antiplatelet / risk factors",
          "body": "COMPASS reduces ischemic events but increases major bleeding — net benefit requires a bleed-tolerant phenotype and controlled BP.",
          "why": "",
          "evidence": [
            {
              "trial": "compass",
              "effect": "CV death/MI/stroke reduced vs aspirin alone; major bleeding increased; net clinical benefit favored combination in primary analyses"
            }
          ],
          "caveats": [],
          "links": [
            {
              "kind": "trial",
              "id": "compass",
              "label": "COMPASS"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "cv-end"
            }
          ]
        },
        {
          "id": "cv-who",
          "type": "question",
          "title": "Which vascular phenotype?",
          "body": "COMPASS enrolled chronic CAD and/or PAD with enrichment features (age, atherosclerosis burden). PAD limb outcomes also informed by VOYAGER PAD (post-revascularization vascular dose).",
          "why": "Match the regimen to a COMPASS-like chronic atheroid risk patient — not every aspirin user.",
          "evidence": [
            {
              "trial": "compass",
              "effect": "Primary MACE benefit vs aspirin alone in eligible stable CAD/PAD"
            },
            {
              "trial": "voyager-pad",
              "effect": "Rivaroxaban 2.5 mg BID + aspirin after lower-extremity revascularization — ALI/limb/MACE teaching (see trial card)"
            }
          ],
          "caveats": [],
          "links": [
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
          ],
          "choices": [
            {
              "label": "Stable CAD and/or PAD — COMPASS-eligible",
              "nextNodeId": "cv-rec"
            },
            {
              "label": "Recent lower-extremity revascularization — see VOYAGER framing",
              "nextNodeId": "cv-voyager"
            }
          ]
        },
        {
          "id": "cv-rec",
          "type": "recommendation",
          "title": "Rivaroxaban 2.5 mg BID + low-dose aspirin when net benefit favors combination",
          "body": "Counsel bleeding (GI especially), BP control, and that this is not AF dosing. Reassess if AF develops — escalate to full-dose OAC pathway.",
          "why": "COMPASS primary analyses favored combination for ischemic outcomes despite more major bleeds in selected patients.",
          "evidence": [
            {
              "trial": "compass",
              "effect": "CV death/MI/stroke reduced vs aspirin alone; major bleeding increased; net benefit favored combination in primary analyses"
            }
          ],
          "caveats": [
            "Bleed phenotype and BP control matter",
            "Do not confuse 2.5 mg BID with 15/20 mg VTE/AF regimens"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "compass",
              "label": "COMPASS"
            },
            {
              "kind": "ddi",
              "id": "aspirin-compass",
              "label": "COMPASS ASA DDI card"
            },
            {
              "kind": "page",
              "id": "ddi",
              "label": "DDI library"
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
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "cv-end"
            }
          ]
        },
        {
          "id": "cv-voyager",
          "type": "recommendation",
          "title": "Post PAD revascularization: vascular-dose rivaroxaban + ASA per VOYAGER-style care",
          "body": "After lower-extremity revascularization, rivaroxaban 2.5 mg BID + aspirin is a labeled/studied strategy for ALI and limb/MACE prevention in eligible patients — still not an AF substitute.",
          "why": "",
          "evidence": [
            {
              "trial": "voyager-pad",
              "effect": "See trial card for ALI / composite limb outcomes vs aspirin alone"
            }
          ],
          "caveats": [
            "Bleed risk heightened early after procedures — follow local vascular protocol"
          ],
          "links": [
            {
              "kind": "trial",
              "id": "voyager-pad",
              "label": "VOYAGER PAD"
            },
            {
              "kind": "framework",
              "id": "compass-vascular-dose",
              "label": "Framework: COMPASS vascular dose"
            }
          ],
          "choices": [
            {
              "label": "Done",
              "nextNodeId": "cv-end"
            }
          ]
        },
        {
          "id": "cv-end",
          "type": "end",
          "title": "Pathway complete — COMPASS vascular",
          "body": "Educational only. Verify label and local vascular pathways.",
          "why": "",
          "evidence": [],
          "caveats": [],
          "links": [
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
          "choices": []
        }
      ]
    }
  ]
};
