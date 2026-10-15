/* Clinical decision frameworks — teaching aids, not protocols */
window.ANTICOAG_FRAMEWORKS = [
  {
    id: "acute-vte-doac",
    question: "Which DOAC for acute VTE when bleeding risk matters?",
    reasoning: "All major DOAC VTE programs support oral therapy in eligible patients. When major bleeding risk is a primary concern—especially in younger adults or when GI/GU bleeding history is prominent—prefer regimens with the strongest bleeding advantage signals vs warfarin or among DOACs in head-to-head teaching contexts (AMPLIFY bleeding profile; COBRRA apixaban vs rivaroxaban). Match load→maintenance to the drug’s pivotal design (apixaban 10→5; rivaroxaban 15 BID→20 daily; edoxaban after heparin lead-in).",
    trialIds: ["amplify", "einstein-pe", "einstein-dvt", "hokusai-vte", "cobrra", "hi-pro"],
    appliesTo: [
      "Hemodynamically stable acute DVT/PE without cancer-driven pathway",
      "Patients who can adhere to BID or QD regimens and afford/access the drug",
      "Settings where early oral therapy (or short heparin lead-in for edoxaban) is feasible"
    ],
    doesNotApply: [
      "Mechanical heart valves or moderate–severe mitral stenosis (VKA territory)",
      "Antiphospholipid syndrome (especially triple-positive) — prefer VKA in most guidance",
      "Pregnancy / breastfeeding — LMWH (not DOAC) in usual practice",
      "Severe renal impairment below labeled thresholds — check product labeling and local protocol",
      "High-risk PE needing reperfusion / hemodynamic support — stabilize first"
    ],
    pearl: "Pick the DOAC you can dose correctly and the patient can take—then use bleeding-risk nuance (e.g., COBRRA teaching) only when choice among DOACs is otherwise equal. Verify renal cutoffs locally.",
    links: [
      { kind: "tx-pathway", id: "acute-vte", label: "TX: Acute VTE" },
      { kind: "case", id: "vte-doac-choice", label: "Case: Acute DVT drug choice" },
      { kind: "trial", id: "amplify", label: "Trial: AMPLIFY" },
      { kind: "trial", id: "einstein-dvt", label: "Trial: EINSTEIN-DVT" },
      { kind: "trial", id: "einstein-pe", label: "Trial: EINSTEIN-PE" },
      { kind: "trial", id: "hokusai-vte", label: "Trial: Hokusai-VTE" },
      { kind: "trial", id: "cobrra", label: "Trial: COBRRA" },
      { kind: "trial", id: "hi-pro", label: "Trial: HI-PRO" }
    ]
  },
  {
    id: "cancer-vte",
    question: "How do I treat cancer-associated VTE acutely and on extended therapy?",
    reasoning: "Acute phase: DOACs (apixaban, edoxaban after heparin, rivaroxaban) are acceptable alternatives to LMWH for many solid tumors (Hokusai VTE Cancer, SELECT-D, ADAM-VTE, Caravaggio). Individualize for luminal GI/GU cancers and drug–drug interactions. Extended phase: after ≥6 months, API-CAT supports reduced-dose apixaban for many who need ongoing anticoagulation—step-down is a shared decision, not automatic for every cancer type or bleeding phenotype.",
    trialIds: ["catch", "hokusai-vte-cancer", "select-d", "adam-vte", "caravaggio", "canvas", "api-cat"],
    appliesTo: [
      "Active cancer with acute VTE when oral therapy is appropriate and interactions are manageable",
      "Extended secondary prevention after initial treatment when cancer-related risk persists"
    ],
    doesNotApply: [
      "Selected GI cancers with high mucosal bleeding risk — LMWH or careful DOAC choice with oncology input",
      "Severe thrombocytopenia or active major bleeding — hold/bridge per heme-onc protocols",
      "Pregnancy-associated cancer VTE — specialist pathways",
      "Patients unable to take oral meds or with unresolved vomiting"
    ],
    pearl: "Acute: DOAC vs LMWH is preference-sensitive after Caravaggio-era data. Extended: think API-CAT-style step-down only after adequate acute therapy and ongoing risk—reassess bleeding and cancer status.",
    links: [
      { kind: "tx-pathway", id: "cancer-vte", label: "TX: Cancer VTE" },
      { kind: "pathway", id: "cancer-vte", label: "Playlist: Cancer-associated VTE" },
      { kind: "case", id: "cancer-stepdown", label: "Case: Cancer step-down" },
      { kind: "trial", id: "catch", label: "Trial: CATCH" },
      { kind: "trial", id: "hokusai-vte-cancer", label: "Trial: Hokusai VTE Cancer" },
      { kind: "trial", id: "select-d", label: "Trial: SELECT-D" },
      { kind: "trial", id: "adam-vte", label: "Trial: ADAM-VTE" },
      { kind: "trial", id: "caravaggio", label: "Trial: Caravaggio" },
      { kind: "trial", id: "canvas", label: "Trial: CANVAS" },
      { kind: "trial", id: "api-cat", label: "Trial: API-CAT" }
    ]
  },
  {
    id: "af-stroke-prevention",
    question: "How do I choose anticoagulation for AF stroke prevention—including intermediate-risk nuance?",
    reasoning: "For most eligible NVAF with elevated stroke risk, guidelines prefer a DOAC over VKA (RE-LY, ROCKET-AF, ARISTOTLE, ENGAGE). Dose-reduce only when labeled criteria are met. Intermediate-risk / shared-decision zones (including SINGLE-AF–type nuance for lower-risk or carefully selected populations) require explicit risk–benefit discussion, not reflexive full-dose therapy or reflexive aspirin. Aspirin alone is generally not a stroke-prevention substitute when OAC is indicated.",
    trialIds: ["active-w", "bafta", "re-ly", "rocket-af", "aristotle", "engage-af", "averroes", "single-af", "eldercare-af"],
    appliesTo: [
      "Nonvalvular AF with guideline-elevated stroke risk and acceptable bleeding risk",
      "Elderly patients who meet labeled dosing (including carefully selected very elderly programs such as ELDERCARE-AF context)"
    ],
    doesNotApply: [
      "Mechanical valves / moderate–severe rheumatic mitral stenosis — VKA",
      "AF with recent ACS/PCI — use dual-pathway frameworks, not AF-alone dosing logic",
      "Severe renal failure below DOAC labels — often VKA or specialist dosing",
      "Absolute contraindication to anticoagulation — consider LAAO pathways instead"
    ],
    pearl: "Default: labeled-dose DOAC for indicated NVAF. Intermediate risk and SINGLE-AF–style questions are shared decisions—document CHA₂DS₂-VASc, bleeding risk, and patient values.",
    links: [
      { kind: "tx-pathway", id: "af-stroke", label: "TX: AF stroke prevention" },
      { kind: "case", id: "af-renal-bleed", label: "Case: CKD with GI bleed" },
      { kind: "trial", id: "active-w", label: "Trial: ACTIVE-W" },
      { kind: "trial", id: "bafta", label: "Trial: BAFTA" },
      { kind: "trial", id: "re-ly", label: "Trial: RE-LY" },
      { kind: "trial", id: "rocket-af", label: "Trial: ROCKET-AF" },
      { kind: "trial", id: "aristotle", label: "Trial: ARISTOTLE" },
      { kind: "trial", id: "engage-af", label: "Trial: ENGAGE AF" },
      { kind: "trial", id: "averroes", label: "Trial: AVERROES" },
      { kind: "trial", id: "single-af", label: "Trial: SINGLE-AF" },
      { kind: "trial", id: "eldercare-af", label: "Trial: ELDERCARE-AF" }
    ]
  },
  {
    id: "af-pci-dual-pathway",
    question: "After ACS/PCI in AF, how long is dual pathway (OAC + P2Y12) and when do I drop aspirin?",
    reasoning: "AUGUSTUS-era evidence favors a DOAC (often apixaban) plus a P2Y12 inhibitor, with aspirin limited to the peri-PCI/early window rather than prolonged triple therapy. WOEST → PIONEER / RE-DUAL / ENTRUST → AUGUSTUS define the dual-pathway template. Newer OPTIMA-AF / EPIDAURUS-type readouts refine duration intensity—treat duration as risk-tiered (stent complexity, ACS vs elective, bleeding) and verify with the latest institutional ACS/AF pathway.",
    trialIds: ["woest", "pioneer-af-pci", "re-dual-pci", "entrust-af-pci", "augustus", "afire", "optima-af", "epidaurus"],
    appliesTo: [
      "AF requiring OAC who undergo PCI or present with ACS managed with stenting",
      "Patients who can take a P2Y12 inhibitor and a DOAC without prohibitive interaction"
    ],
    doesNotApply: [
      "AF without coronary stenting/ACS — do not add antiplatelet without indication",
      "Mechanical valves — VKA-based strategies",
      "Patients with very high stent thrombosis risk in the first days — early aspirin still individualized"
    ],
    pearl: "Monday morning template: DOAC + P2Y12, drop aspirin early when feasible. Triple therapy is a short bridge, not a lifestyle.",
    links: [
      { kind: "tx-pathway", id: "af-pci", label: "TX: AF + PCI" },
      { kind: "case", id: "af-pci-week2", label: "Case: AF + PCI week 2" },
      { kind: "nuance", id: "dual-pathway-duration", label: "Nuance: Dual-pathway duration" }
    ]
  },
  {
    id: "intermediate-pe-cdt",
    question: "Who with intermediate-risk PE is a candidate for catheter-directed therapy?",
    reasoning: "Stable low/intermediate-risk PE is usually anticoagulation alone (EINSTEIN-PE era). HI-PEITHO enriched for higher-risk intermediate phenotypes (RV strain + biomarkers / clinical severity) when comparing catheter-directed therapy strategies vs anticoagulation alone. Do not extrapolate CDT to undifferentiated intermediate-risk PE or to patients who need systemic thrombolysis for hypotension.",
    trialIds: ["einstein-pe", "hi-peitho"],
    appliesTo: [
      "Enriched intermediate-high–risk PE phenotypes similar to HI-PEITHO entry criteria",
      "Centers with PE response team / CDT expertise and rescue pathways"
    ],
    doesNotApply: [
      "Massive/high-risk PE with shock — systemic reperfusion algorithms first",
      "Low-risk PE — anticoagulation alone",
      "Centers without CDT capability — do not delay transfer decisions for experimental framing",
      "Absolute contraindications to the planned lytic/device strategy"
    ],
    pearl: "CDT is for enriched intermediate-risk PE in capable centers—not a default upgrade from anticoagulation alone. Match the patient to the trial’s enrichment, not the marketing slide.",
    links: [
      { kind: "pathway", id: "intermediate-pe", label: "TX: Intermediate PE" },
      { kind: "case", id: "intermediate-pe-pert", label: "Case: Intermediate PE / PERT" },
      { kind: "nuance", id: "hi-peitho-enrichment", label: "Nuance: HI-PEITHO enrichment" }
    ]
  },
  {
    id: "laao-vs-oac",
    question: "When is left atrial appendage occlusion reasonable versus long-term OAC?",
    reasoning: "PROTECT-AF / PREVAIL established percutaneous LAAO as an alternative stroke-prevention strategy with procedure risk traded against long-term bleeding on OAC. PRAGUE-17, LAAOS III (surgical), OPTION (post-ablation), and CHAMPION-AF refine who benefits. LAAO is not “set and forget”—periprocedural antithrombotic regimens and device-related thrombus surveillance matter. Shared decision when OAC is contraindicated, poorly tolerated, or patient priorities favor procedural risk over indefinite drug therapy.",
    trialIds: ["protect-af", "prevail", "prague-17", "laaos-iii", "option", "champion-af"],
    appliesTo: [
      "NVAF with stroke risk where long-term OAC is contraindicated, refused, or repeatedly interrupted for bleeding",
      "Selected post-ablation discussions (OPTION-type) when ongoing OAC vs LAAO is in equipoise"
    ],
    doesNotApply: [
      "Patients who tolerate and prefer guideline-directed OAC without bleeding burden",
      "Valvular AF requiring VKA for valve indication — LAAO does not replace VKA for the valve",
      "Inability to complete periprocedural antithrombotic / follow-up imaging"
    ],
    pearl: "LAAO trades procedural risk for drug exposure—consent must include DRT, peri-device leaks, and the fact that some patients still need antithrombotic therapy afterward.",
    links: [
      { kind: "pathway", id: "laao", label: "Playlist: LAAO vs OAC" },
      { kind: "case", id: "laao-candidate", label: "Case: LAAO candidate" },
      { kind: "trial", id: "protect-af", label: "Trial: PROTECT-AF" },
      { kind: "trial", id: "prevail", label: "Trial: PREVAIL" },
      { kind: "trial", id: "prague-17", label: "Trial: PRAGUE-17" },
      { kind: "trial", id: "laaos-iii", label: "Trial: LAAOS III" },
      { kind: "trial", id: "option", label: "Trial: OPTION" },
      { kind: "trial", id: "champion-af", label: "Trial: CHAMPION-AF" }
    ]
  },
  {
    id: "frail-elderly-vka-doac",
    question: "Should frail older adults on stable VKA switch to a DOAC?",
    reasoning: "ELDERCARE-AF supports carefully selected very elderly Japanese patients with low-dose edoxaban in a specific risk context. FRAIL-AF cautioned against routine switching from stable VKA to DOAC in frail older adults—bleeding rose without a clear efficacy upside in that design. Net: do not auto-switch stable frail VKA patients; initiate DOAC thoughtfully in OAC-naïve elderly who meet labels; deprescribe aspirin when OAC alone is indicated.",
    trialIds: ["eldercare-af", "frail-af"],
    appliesTo: [
      "Frail older adults already stable on VKA with acceptable TTR — pause before switching",
      "OAC-naïve very elderly NVAF when a labeled (sometimes reduced) DOAC is appropriate"
    ],
    doesNotApply: [
      "Unstable INR, recurrent thromboembolism on VKA, or drug access barriers favoring a DOAC switch for safety/adherence reasons — individualized",
      "Patients who fail VKA for logistic reasons — DOAC may still be preferred",
      "Mechanical valves — remain on VKA"
    ],
    pearl: "FRAIL-AF: stable frail VKA ≠ automatic DOAC upgrade. ELDERCARE: low-dose DOAC can still be right at initiation in selected very elderly—different question than switching.",
    links: [
      { kind: "case", id: "frail-vka-switch", label: "Case: Frail VKA switch" },
      { kind: "framework", id: "ttr-vka-quality", label: "Framework: What ‘acceptable TTR’ means — without a fake clinic %" }
    ]
  },
  {
    id: "post-ich-anticoagulation",
    question: "If AF (or VTE) coexists with prior ICH, when do I restart anticoagulation?",
    reasoning: "ENRICH-AF informs risk–benefit after intracranial hemorrhage in AF populations and tempers enthusiasm for routine early restart in all ICH subtypes. PRESTIGE-AF and pending ASPIRE address related post-ICH / secondary prevention questions—treat this as active equipoise by ICH location, marker of amyloid angiopathy, time since bleed, and stroke risk. LAAO may enter the conversation when long-term OAC looks prohibitive. Multidisciplinary (neurology/neurosurgery/cardiology) decision.",
    trialIds: ["enrich-af", "prestige-af", "aspire", "option"],
    appliesTo: [
      "AF or other strong OAC indication after ICH once acute bleed is secured",
      "Shared decisions months after ICH when stroke risk remains high"
    ],
    doesNotApply: [
      "Active untreated aneurysm / vascular lesion awaiting securement",
      "Very recent ICH still in acute management — not a clinic ‘restart tomorrow’ reflex",
      "Patients with low thromboembolic risk where antiplatelet or no antithrombotic may be preferred"
    ],
    pearl: "Post-ICH OAC is location- and timing-specific. Use ENRICH-AF as a cautionary frame; do not wait passively forever if cardioembolic risk is extreme—document the multidisciplinary plan.",
    links: [
      { kind: "pathway", id: "post-ich", label: "TX: Post-ICH" },
      { kind: "case", id: "post-ich-af", label: "Case: Post-ICH AF" },
      { kind: "nuance", id: "enrich-vs-aspire", label: "Nuance: ENRICH vs ASPIRE" }
    ]
  },
  {
    id: "doac-major-bleed-us",
    question: "Life-threatening bleed on a DOAC (U.S.) — what do I reverse with?",
    reasoning: "Stabilize ABCs, stop the anticoagulant, localize and control the bleed, then reverse when the bleed is life-threatening or emergency surgery cannot wait. Branch by agent: dabigatran has a specific reversal option (idarucizumab; RE-VERSE AD teaching). For apixaban, rivaroxaban, or edoxaban in U.S. practice after Dec 22, 2025, Andexxa (andexanet alfa) is not available — teach supportive care plus your institution’s 4F-PCC pathway for FXa-inhibitor major bleeding. That 4F-PCC use is an institutional/off-label pathway, not an FDA-labeled specific FXa antidote (Andexxa was the labeled agent and is withdrawn in the U.S.). ANNEXA-4 and ANNEXA-I remain historically important for hemostasis-vs-thrombosis teaching and for why U.S. practice changed; they are not a current U.S. Andexxa order set. Warfarin major bleed remains 4F-PCC plus IV vitamin K per institutional bundle. After hemostasis, schedule a named-owner restart decision (indication × bleed source × anatomy — CNS differs from GI).",
    trialIds: ["re-verse-ad", "annexa-4", "annexa-i"],
    appliesTo: [
      "U.S. practice settings after Dec 22, 2025 for oral anticoagulant major bleed / emergency reversal decisions",
      "Life-threatening bleeding or emergency surgery that cannot wait on a DOAC or VKA",
      "Teaching contrasts between dabigatran-specific reversal and FXa-inhibitor supportive + institutional 4F-PCC pathways"
    ],
    doesNotApply: [
      "Non-U.S. formularies where andexanet (Ondexxya) may still be available — verify country labeling and local protocol",
      "Minor bleeding that does not require specific reversal or PCC pathways",
      "Mechanical-valve or other VKA niches when the agent is warfarin — use the VKA bleed bundle, not a DOAC FXa script",
      "Invented 4F-PCC doses or timing — dosing is institutional and not specified on this teaching card"
    ],
    pearl: "Say the agent out loud first. Dabigatran → idarucizumab when indicated. U.S. FXa DOAC major bleed → supportive care + institutional/off-label 4F-PCC — do not write Andexxa after Dec 22, 2025. Restart is a separate named decision.",
    links: [
      { kind: "pathway", id: "doac-bleed-us", label: "TX: Major bleed on DOAC (U.S.)" },
      { kind: "case", id: "fxa-ich-post-andexxa", label: "Case: ICH on apixaban" },
      { kind: "nuance", id: "annexa-historical-vs-us-4fpcc", label: "Nuance: ANNEXA vs U.S. 4F-PCC" },
      { kind: "page", id: "reversal", label: "Bleed & reversal page" }
    ]
  },
  {
    id: "mechanical-valve-vka",
    question: "How do I anticoagulate a mechanical heart valve?",
    reasoning: "Mechanical prosthetic valves are VKA territory. Do not substitute a DOAC — landmark DOAC AF/VTE programs excluded mechanical valves, and the RE-ALIGN card is the dabigatran mechanical-valve trial that stopped early for harm. PROACT is the warfarin-based On-X trial. PROACT Xa is the apixaban On-X trial and did not meet noninferiority. Confirm prosthesis type, position (aortic vs mitral), and extra thromboembolic risk factors (AF, prior embolus, hypercoagulability, LV dysfunction, older-generation valve). Set INR intensity from current ACC/AHA or ESC tables for that valve — soft teaching frame on this site: many contemporary bileaflet aortic valves without extra risk use INR 2.0–3.0; soft teaching frame also used on this site: mechanical mitral (and many higher-risk aortic) often INR 2.5–3.5 — still verify the current society table for that prosthesis. On-X aortic lower-INR protocols are label/transition-path specific — verify, do not improvise. Add low-dose aspirin when society guidance and bleed risk support it. Plan reliable INR follow-up and TTR stewardship; peri-procedural bridging is institutional.",
    trialIds: ["re-align", "proact", "proact-xa", "invictus", "galileo"],
    appliesTo: [
      "Patients with a mechanical prosthetic valve requiring long-term anticoagulation",
      "Teaching contrasts with DOAC-eligible NVAF / bioprosthetic or TAVI pathways"
    ],
    doesNotApply: [
      "Bioprosthetic valves or TAVI without a separate OAC indication — different pathways (do not import mechanical-valve DOAC bans into every TAVI case without reading the indication)",
      "Rheumatic moderate–severe mitral stenosis without a mechanical prosthesis — related VKA niche (INVICTUS-era teaching) but not this card’s prosthesis logic",
      "Invented INR targets or bridging doses — use current society tables and institutional protocols"
    ],
    pearl: "Mechanical valve → warfarin. Say DOAC is off the table first, then set INR from the society table for that valve’s position and risk — not from AF DOAC habit.",
    links: [
      { kind: "pathway", id: "mechanical-valve", label: "TX: Mechanical heart valve" },
      { kind: "case", id: "mechanical-avr-doac-request", label: "Case: Mechanical AVR DOAC request" },
      { kind: "framework", id: "ttr-vka-quality", label: "Framework: TTR / VKA quality — INR follow-up literacy (not a DOAC metric)" }
    ]
  },
  {
    id: "aps-triple-positive-vka",
    question: "How do I choose long-term anticoagulation in antiphospholipid syndrome?",
    reasoning: "Risk-tier APS before picking an oral agent. Confirm persistent antibodies (lupus anticoagulant, anticardiolipin, anti-β2-glycoprotein I) on repeat testing ≥12 weeks apart when classifying disease — but do not delay therapeutic anticoagulation in acute VTE for incomplete serology. Triple-positive and many high-risk / arterial APS phenotypes are taught as VKA-preferring: dose-adjusted warfarin (typical INR 2–3 unless a specialty clinic sets otherwise). Do not switch high-risk APS to a DOAC for convenience. Standard DOAC VTE programs (e.g., AMPLIFY-era teaching) were not built as dedicated high-risk APS replacement strategies — use them as contrast, not as APS order sets. Lower-risk or incomplete antibody profiles may still need hematology/rheumatology input before any DOAC rationale is documented. Arterial APS (stroke/MI phenotype) is not routine venous DOAC VTE — specialty pathways may use VKA ± antiplatelet. Pregnancy: LMWH pathways, not DOAC / warfarin embryopathy windows.",
    trialIds: ["amplify"],
    appliesTo: [
      "Confirmed or suspected APS with thrombosis when long-term agent choice is the question",
      "Teaching contrasts between high-risk APS VKA defaults and standard DOAC VTE care"
    ],
    doesNotApply: [
      "Unprovoked VTE without APS features — use acute VTE / extended VTE frameworks",
      "Invented TRAPS/RAPS event rates — those programs are not curated trial cards here; cite primary specialty guidance when teaching details",
      "Pregnancy-associated thrombosis — LMWH specialty pathways",
      "Mechanical prosthetic valves — separate VKA niche (mechanical-valve framework)"
    ],
    pearl: "Say the antibody tier out loud. Triple-positive / high-risk APS → warfarin is the default teaching — a DOAC is not a lifestyle upgrade.",
    links: [
      { kind: "pathway", id: "aps", label: "TX: APS" },
      { kind: "case", id: "aps-triple-positive-doac", label: "Case: Triple-positive APS DOAC request" }
    ]
  },
  {
    id: "compass-vascular-dose",
    question: "When is rivaroxaban 2.5 mg BID + aspirin appropriate — and when is it the wrong dose?",
    reasoning: "COMPASS-style dual pathway is for selected stable CAD and/or PAD: vascular-dose rivaroxaban 2.5 mg BID plus low-dose aspirin (COMPASS studied 100 mg) when net ischemic benefit is expected and bleeding risk is acceptable (including blood-pressure control). VOYAGER PAD extends the same vascular-dose + aspirin idea after lower-extremity revascularization for eligible patients. Screen exclusions first: anyone who already needs full-dose oral anticoagulation (AF stroke prevention, mechanical valve, acute/therapeutic VTE) belongs on those pathways — do not replace therapeutic OAC with 2.5 mg BID, and do not casually stack COMPASS dosing on top of full-dose DOAC. Counsel that GI bleeding risk rises with the combination and that this is not AF dosing; if AF develops, escalate to the full-dose OAC pathway. Label and indication differ from 15/20 mg rivaroxaban VTE/AF regimens.",
    trialIds: ["compass", "voyager-pad"],
    appliesTo: [
      "Stable atherosclerotic CAD and/or PAD decisions about vascular-dose rivaroxaban + aspirin",
      "Post PAD revascularization dual-pathway teaching in VOYAGER-eligible phenotypes",
      "Explicit contrast teaching vs full-dose AF/VTE DOAC regimens"
    ],
    doesNotApply: [
      "Atrial fibrillation stroke prevention — use full-dose labeled DOAC / AF pathway",
      "Mechanical valves or therapeutic VTE — not COMPASS dosing",
      "Prohibitive bleeding phenotype or uncontrolled hypertension where combination net benefit is unlikely",
      "Heart failure with sinus rhythm without a COMPASS-eligible stable CAD/PAD phenotype — COMMANDER-HF does not support routine vascular-dose rivaroxaban",
      "Invented event rates or doses other than the labeled 2.5 mg BID vascular regimen"
    ],
    pearl: "Say the indication before the dose. COMPASS/VOYAGER = rivaroxaban 2.5 mg BID + aspirin for selected vascular disease — never a quiet substitute for full-dose AF anticoagulation.",
    links: [
      { kind: "pathway", id: "compass-vascular", label: "TX: COMPASS vascular" },
      { kind: "case", id: "compass-vs-af-dose-trap", label: "Case: COMPASS vs AF dose trap" }
    ]
  },
  {
    id: "post-tavi-antithrombotic",
    question: "How do I choose antithrombotic therapy after TAVI?",
    reasoning: "Fork first on whether the patient has a separate oral anticoagulation indication (most often atrial fibrillation), then on coronary stent / recent ACS needs. Without another OAC indication, do not start a routine DOAC ‘for the valve’ or for leaflet-thrombosis prophylaxis as default practice. GALILEO: a rivaroxaban-based strategy after TAVI without another OAC indication was stopped early for higher death or thromboembolic events versus an antiplatelet strategy. ATLANTIS: overall net outcome was not improved with apixaban; the no-indication stratum showed concerning signals versus antiplatelet care and reinforces avoiding routine DOAC without a separate anticoagulation indication. NOTION-4 teaches that a short post-TAVR DOAC HALT effect is not durable and supports avoiding routine DOAC without indication; the site caveat also notes the clinical composite was numerically unfavorable with the DOAC strategy (no effect size claimed here). ACASA-TAVI reports a HALT imaging signal with ongoing DOAC versus aspirin in selected patients without long-term OAC indication, but the site takeaway is suggestive imaging — not a mandate for routine post-TAVI OAC (clinical outcomes underpowered). For antiplatelet choice without OAC, prefer single antiplatelet therapy over routine DAPT when there is no separate dual-therapy indication (POPular TAVI teaching). When the patient is already on oral anticoagulation, the separate POPular TAVI OAC card compared anticoagulation alone with anticoagulation plus clopidogrel. With AF or another clear OAC indication, anticoagulate for that indication; layer antiplatelet duration from coronary disease / stent timing, not from a universal TAVI cocktail. Do not import mechanical-valve DOAC bans into every TAVI case, and do not import NVAF DOAC habits into sinus-rhythm TAVI without an OAC indication. Read ACASA and NOTION-4 as population-specific, not as universal TAVI law.",
    trialIds: ["galileo", "popular-tavi", "popular-tavi-oac", "atlantis", "acasa-tavi", "notion-4"],
    appliesTo: [
      "Antithrombotic decisions after successful TAVI / TAVR",
      "Teaching contrasts between no-OAC-indication and AF/OAC-indication strata",
      "Contrast teaching vs mechanical-valve VKA pathways"
    ],
    doesNotApply: [
      "Mechanical prosthetic valves — separate VKA niche (mechanical-valve-vka framework); DOAC contraindicated there",
      "Bioprosthetic mitral valve + AF (RIVER-era teaching) — related bioprosthetic niche, not this TAVI card",
      "Invented HALT treatment algorithms, DOAC doses, or DAPT durations — use labeled regimens, society guidance, and institutional protocols",
      "Peri-procedural interruption / bridging recipes — not opened in this teaching drop"
    ],
    pearl: "Say the OAC indication out loud before you write anything for the valve. No separate indication → antiplatelet pathway (usually SAPT) — not a routine DOAC for HALT. AF or other OAC indication → anticoagulate for that reason, then tailor antiplatelet.",
    links: [
      { kind: "case", id: "tavi-sinus-routine-doac", label: "Case: TAVI sinus — routine DOAC?" },
      { kind: "nuance", id: "acasa-vs-notion4", label: "Nuance: ACASA vs NOTION-4" },
      { kind: "framework", id: "mechanical-valve-vka", label: "Framework: Mechanical valve (contrast)" }
    ]
  },
  {
    id: "peri-procedural-oac",
    question: "How do I plan anticoagulation around an elective procedure?",
    reasoning: "Build a peri-procedural plan in four named steps — not a reflexive hold-and-bridge. (1) Decide whether interruption is needed at all: many low-bleed-risk procedures (e.g., many dental procedures with local hemostasis) can proceed without stopping therapeutic anticoagulation; higher-bleed procedures usually need a hold. (2) Name the agent class: warfarin/VKA vs DOAC — clocks and restart rules differ; use institutional checklists and product monographs (site practical heuristics are teaching patterns only, not protocols). (3) Name thrombotic risk of holding: typical nonvalvular AF on warfarin is the BRIDGE population — arterial thromboembolism 0.4% (no bridging) vs 0.3% (bridging), risk difference 0.1 percentage points (95% CI −0.6 to 0.8), P=0.01 for noninferiority; major bleeding 1.3% (no bridging) vs 3.2% (bridging), relative risk 0.41 (95% CI 0.20 to 0.78), P=0.005 for superiority — so skip routine LMWH bridging for warfarin interruptions in typical AF. Very high thrombotic-risk phenotypes (mechanical valves — especially mitral / recent implant — recent VTE, some high-risk APS) are not the BRIDGE default; use valve-clinic or specialty bridging protocols. (4) Name procedure bleed risk and who owns restart: plan the first post-procedure dose when hemostasis allows; DOAC interruptions in typical AF generally do not need a heparin ‘bridge’ while the oral agent is held. Emergency life-threatening bleed or crash surgery is a reversal/hemostasis pathway (U.S. FXa: supportive care + institutional/off-label 4F-PCC — not Andexxa after Dec 22, 2025; dabigatran: idarucizumab when indicated), not this elective planning card. Post-ICH restart timing is a separate framework.",
    trialIds: ["bridge"],
    appliesTo: [
      "Elective peri-procedural planning for patients on oral anticoagulation (especially AF on VKA or DOAC)",
      "Teaching contrasts between typical AF (BRIDGE) and high thrombotic-risk VKA niches (mechanical valve, recent VTE)",
      "Deciding whether low-bleed procedures need interruption at all"
    ],
    doesNotApply: [
      "Invented hold-day recipes, LMWH doses, or restart hours — use institutional protocols and product labeling",
      "Mechanical-valve interruption details as a full protocol — use mechanical-valve framework / TX mv-bridge teaching and valve-clinic protocols",
      "Emergency major bleed reversal — use doac-major-bleed-us / bleed page (Andexxa not available U.S. after Dec 22, 2025)",
      "Post-ICH anticoagulation restart timing — use post-ich-anticoagulation framework",
      "AF + ACS/PCI antithrombotic duration — use af-pci-dual-pathway (different ‘bridge’ meaning)"
    ],
    pearl: "Say three things out loud before you write LMWH: Must I interrupt? What is the thrombotic risk of the hold? What is the bleed risk of the procedure — and of bridging itself? Typical AF on warfarin → BRIDGE: arterial thromboembolism 0.4% vs 0.3% (noninferior), major bleeding 1.3% vs 3.2% — skip routine bridging.",
    links: [
      { kind: "tx-pathway", id: "peri-procedural-oac", label: "TX: Peri-procedural OAC" },
      { kind: "case", id: "af-warfarin-bridge-reflex", label: "Case: AF warfarin — reflexive bridge?" },
      { kind: "trial", id: "bridge", label: "Trial: BRIDGE" },
      { kind: "framework", id: "mechanical-valve-vka", label: "Framework: Mechanical valve (high-risk contrast)" },
      { kind: "framework", id: "af-stroke-prevention", label: "Framework: AF stroke prevention" },
      { kind: "framework", id: "doac-major-bleed-us", label: "Framework: U.S. DOAC major bleed (emergency fork)" }
    ]
  },

  {
    id: "doac-appropriateness",
    question: "Is this DOAC appropriate — and is the indication documented?",
    deck: "Stewardship checklist: right niche · right dose family · right documentation",
    reasoning: "Anticoagulation stewardship starts before the first capsule: confirm the patient is in a DOAC-eligible niche, pick the correct dose family for that indication (AF stroke-prevention ≠ acute/therapeutic VTE ≠ COMPASS vascular-dose), screen label-directed renal/age/weight and drug–drug issues, and document why this regimen exists. This card ships with no numeric renal, age, or weight cutoffs — confirm current product labeling and local protocol only; do not memorize informal slide cutoffs. Use this checklist as a teach-back frame with the linked frameworks and cases — not as auto-approval CDS. When the niche is mechanical valve, moderate–severe rheumatic mitral stenosis, or high-risk / triple-positive APS, pivot to VKA frameworks instead of forcing a DOAC. For U.S. major bleed on an FXa inhibitor, teach current institutional pathways — do not present Andexxa as default care.",
    trialIds: ["re-ly", "rocket-af", "aristotle", "engage-af", "amplify", "einstein-dvt", "einstein-pe", "hokusai-vte", "compass", "frail-af", "eldercare-af"],
    appliesTo: [
      "New DOAC starts (AF, VTE, selected cancer-VTE when oral pathway chosen)",
      "Dose or agent switches (including “someone ordered low-dose Eliquis for PAD”)",
      "Clinic / discharge reconciliation and shared-clinic teach-backs",
      "Unofficial CACP Domain II/V stewardship practice (see links)"
    ],
    doesNotApply: [
      "Writing institutional protocols or auto-verifying orders",
      "Inventing clinic quality scores or comparing “your TTR” to a fake benchmark",
      "Replacing specialty pathways (pregnancy, HIT, massive PE reperfusion, post-ICH restart timing)",
      "Using COMPASS 2.5 mg BID rivaroxaban as AF or therapeutic VTE coverage"
    ],
    pearl: "Appropriateness is indication + dose family + labeled eligibility — not “newer is better.” Write Indication · Planned duration · Dose rationale before you walk away.",
    checklist: [
      { id: "niche", label: "Indication niche confirmed (DOAC-eligible vs VKA-only)" },
      { id: "dose-family", label: "Dose family named (AF / VTE / COMPASS / dual-pathway)" },
      { id: "renal-age-weight", label: "Labeled renal/age/weight criteria verified — no numeric cutoffs on this card", reviewerGate: true, help: "No numeric renal, age, or weight cutoffs ship with this card — label and local protocol only. Confirm labeled criteria for this DOAC and indication — do not memorize informal cutoffs from slides." },
      { id: "ddi", label: "DDI screen via library + label" },
      { id: "bleed", label: "Bleed history + mitigation; major bleed → U.S. bleed framework" },
      { id: "doc-indication", label: "Documented: Indication" },
      { id: "doc-duration", label: "Documented: Planned duration" },
      { id: "doc-rationale", label: "Documented: Dose rationale" }
    ],
    checklistSections: [
      {
        title: "Indication niche — stop if not DOAC",
        body: "Confirm one primary teaching niche before dosing: NVAF stroke prevention; acute/therapeutic VTE; cancer-associated VTE (oral vs LMWH individualized); COMPASS vascular-dose (not an AF/VTE dose); AF with recent PCI/ACS (dual pathway, short triple at most). Mechanical valve, moderate–severe rheumatic mitral stenosis, and high-risk / triple-positive APS are VKA territory. Pregnancy / breastfeeding is LMWH usual practice, not a DOAC. If the niche is VKA-only or non-DOAC, stop — do not finish DOAC dose-family checks."
      },
      {
        title: "Dose family — name one, do not mix",
        body: "AF stroke-prevention DOAC (labeled AF regimen — not a VTE load “just in case”). Acute/therapeutic VTE DOAC (drug-specific load → maintenance). Extended VTE secondary prevention (reduced- vs full-dose questions after initial therapy — qualitative only; not the same as an acute start). COMPASS/vascular: rivaroxaban 2.5 mg BID + aspirin — not AF or therapeutic VTE coverage, and not stacked on full-dose DOAC. AF + antiplatelet dual pathway: OAC + P2Y12, aspirin in an early window only."
      }
    ],
    docTemplate: "Indication:     ________________________________\nPlanned duration: _____________________________\nDose rationale: _______________________________\n(Reviewed when / by: __________________________)",
    links: [
      { kind: "framework", id: "af-stroke-prevention", label: "Framework: AF stroke prevention" },
      { kind: "framework", id: "acute-vte-doac", label: "Framework: Acute VTE DOAC" },
      { kind: "framework", id: "cancer-vte", label: "Framework: Cancer-associated VTE" },
      { kind: "framework", id: "compass-vascular-dose", label: "Framework: COMPASS vascular dose" },
      { kind: "framework", id: "mechanical-valve-vka", label: "Framework: Mechanical valve (VKA)" },
      { kind: "framework", id: "aps-triple-positive-vka", label: "Framework: APS triple-positive (VKA)" },
      { kind: "framework", id: "af-pci-dual-pathway", label: "Framework: AF + PCI dual pathway" },
      { kind: "framework", id: "doac-major-bleed-us", label: "Framework: U.S. DOAC major bleed" },
      { kind: "framework", id: "peri-procedural-oac", label: "Framework: Peri-procedural OAC" },
      { kind: "pathway", id: "doac-landmarks", label: "Playlist: DOAC landmarks" },
      { kind: "pathway", id: "cancer-vte", label: "Playlist: Cancer-associated VTE" },
      { kind: "pathway", id: "af-pci", label: "Playlist: AF + PCI" },
      { kind: "pathway", id: "reversal", label: "Playlist: Reversal / bleed trials" },
      { kind: "case", id: "vte-doac-choice", label: "Case: VTE DOAC choice" },
      { kind: "case", id: "compass-vs-af-dose-trap", label: "Case: COMPASS vs AF dose trap" },
      { kind: "case", id: "mechanical-avr-doac-request", label: "Case: Mechanical AVR DOAC request" },
      { kind: "case", id: "aps-triple-positive-doac", label: "Case: Triple-positive APS DOAC request" },
      { kind: "case", id: "af-pci-week2", label: "Case: AF + PCI week 2" },
      { kind: "case", id: "fxa-ich-post-andexxa", label: "Case: FXa ICH after Andexxa withdrawal" },
      { kind: "nuance", id: "annexa-historical-vs-us-4fpcc", label: "Nuance: ANNEXA historical vs U.S. 4F-PCC" },
      { kind: "nuance", id: "dual-pathway-duration", label: "Nuance: Dual-pathway duration" },
      { kind: "tx-pathway", id: "af-stroke", label: "TX: AF stroke prevention" },
      { kind: "cacp-domain", id: "II", label: "CACP Domain II" },
      { kind: "cacp-domain", id: "V", label: "CACP Domain V" },
      { kind: "cacp", id: "v-03", label: "CACP: Stewardship aims" },
      { kind: "cacp", id: "ii-12", label: "CACP: COMPASS appropriateness" },
      { kind: "cacp", id: "ii-36", label: "CACP: COMPASS is not an AF/VTE substitute" },
      { kind: "cacp", id: "iii-10", label: "CACP: Shared-decision documentation" }
    ]
  },
  {
    id: "ttr-vka-quality",
    question: "What is TTR — and how do VKA clinics use it without turning it into a fake scoreboard?",
    deck: "Warfarin-clinic quality literacy · Domain V crosswalk · calm teaching, not a dashboard",
    reasoning: "Time in Therapeutic Range (TTR) estimates the proportion of time a patient’s INR is within the prescribed target range while on warfarin (VKA). Clinics use TTR as a process/quality signal for anticoagulation services: persistently low TTR should trigger review of adherence, diet/drug interactions, visit cadence, lab/POC processes, and whether a DOAC-eligible patient might be better served on a labeled DOAC pathway — or, conversely, whether a stable frail patient with acceptable TTR should not be auto-switched (FRAIL-AF teaching via frail-elderly-vka-doac). Method literacy (concept only): many programs summarize TTR with approaches such as Rosendaal linear interpolation between INR dates (a common teaching name). Exact clinic software formulas, inclusion/exclusion of extreme gaps, and target-range definitions are institutional — this card teaches the idea, not a calculable protocol. Hard limits: TTR does not apply to DOACs (no INR target). Do not display “your clinic vs national” figures on this site. Do not invent a target % for learners to memorize. Mechanical-valve and other niche INR intensities still come from society tables — TTR assumes a named target range first. Trial-reported warfarin TTRs on live cards are study descriptors, not clinic goals.",
    trialIds: ["frail-af", "eldercare-af"],
    appliesTo: [
      "Warfarin / VKA clinic teaching and unofficial CACP Domain V prep",
      "Interpreting “acceptable TTR” language in frail-switch / mechanical-valve stewardship",
      "Explaining why DOAC patients are not managed with TTR"
    ],
    doesNotApply: [
      "DOAC adherence “TTR equivalents” or invented surrogate scores",
      "Fake dashboards, App Store–style rankings, or national benchmark widgets",
      "Replacing product labels, society INR tables, or local QI protocols",
      "Pregnancy, HIT, or other specialty pathways"
    ],
    pearl: "TTR measures how often INR stays in range for people on warfarin — use it to improve monitoring and adherence conversations, not to invent a DOAC “TTR” or a national leaderboard.",
    teachBack: "In one sentence: who is TTR for, and name one thing it is not.",
    teachingBlocks: [
      {
        title: "What TTR is",
        bullets: [
          "A summary of how much time INR values (and the intervals between them) are estimated to fall inside the prescribed INR target for a patient on warfarin.",
          "Usually discussed at patient and clinic-panel levels as a quality lens.",
          "Requires a named INR target (e.g. typical AF 2–3 teaching vs valve-specific targets — verify society/label tables elsewhere)."
        ]
      },
      {
        title: "Common method name",
        bullets: [
          "Rosendaal linear interpolation is a common method name used in TTR teaching.",
          "Your clinic software may differ on gaps, exclusions, and range definitions.",
          "No formula, worked numeric example, or “calculate TTR here” widget ships on this card."
        ]
      },
      {
        title: "Uses (stewardship — still no %)",
        body: "When TTR looks poor (qualitative teaching — no cutoff % on this card): recheck adherence, vitamin K diet pattern, alcohol, new drugs/herbals, dosing errors; recheck visit / lab follow-up after out-of-range INRs; recheck whether the patient is DOAC-eligible and might benefit from a labeled DOAC pathway; escalate messy panels to clinic pharmacist / MD pathways. When TTR looks acceptable and the patient is stable on VKA: do not auto-switch to a DOAC solely because DOACs exist — see frail-elderly-vka-doac / FRAIL-AF teaching; keep documenting indication · duration · regimen."
      },
      {
        title: "Limits (must teach)",
        bullets: [
          "Not a DOAC metric — DOACs have no INR therapeutic range → no TTR.",
          "Not a stroke-risk score — CHA₂DS₂-VASc ≠ TTR.",
          "Not a national leaderboard — this site will not show fake “top quartile” or U.S. average TTR.",
          "Method-dependent — different software/rules → different TTR for the same INRs.",
          "Target-range dependent — wrong assumed range → meaningless TTR.",
          "Trial TTR ≠ clinic goal — published trial warfarin TTRs describe those trials; open live cards if curious; do not memorize as clinic targets."
        ]
      }
    ],
    links: [
      { kind: "framework", id: "frail-elderly-vka-doac", label: "Framework: Frail elderly VKA ↔ DOAC" },
      { kind: "framework", id: "mechanical-valve-vka", label: "Framework: Mechanical valve (VKA)" },
      { kind: "framework", id: "af-stroke-prevention", label: "Framework: AF stroke prevention" },
      { kind: "framework", id: "doac-appropriateness", label: "Framework: DOAC appropriateness" },
      { kind: "framework", id: "peri-procedural-oac", label: "Framework: Peri-procedural OAC" },
      { kind: "case", id: "frail-vka-switch", label: "Case: Frail VKA switch" },
      { kind: "case", id: "mechanical-avr-doac-request", label: "Case: Mechanical AVR DOAC request" },
      { kind: "cacp-domain", id: "V", label: "CACP Domain V" },
      { kind: "cacp-domain", id: "II", label: "CACP Domain II" },
      { kind: "cacp", id: "v-01", label: "CACP: v-01 TTR literacy", caption: "Warfarin-clinic TTR literacy — not a DOAC metric; no clinic TTR% on this card." },
      { kind: "cacp", id: "v-02", label: "CACP: v-02 POC INR / QC" },
      { kind: "cacp", id: "v-03", label: "CACP: v-03 Stewardship aims" },
      { kind: "cacp", id: "ii-05", label: "CACP: ii-05 FRAIL-AF + acceptable TTR" }
    ]
  }
];
