export type ServiceFinderRecommendation = "urgent-care" | "er-911" | "info";

export type ServiceFinderItem = {
  id: string;
  label: string;
  keywords: string[];
  recommendation: ServiceFinderRecommendation;
  description: string;
  href: string;
};

const BASE_ITEMS: ServiceFinderItem[] = [
  {
    id: "sore-throat",
    label: "Sore throat / strep",
    keywords: ["sore throat", "strep", "tonsils", "swallow", "throat pain"],
    recommendation: "urgent-care",
    description: "Evaluation and rapid testing when appropriate.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "fever-flu",
    label: "Fever / flu symptoms",
    keywords: ["fever", "flu", "chills", "body aches", "influenza", "covid", "sick"],
    recommendation: "urgent-care",
    description: "Rapid tests and treatment options for common respiratory illnesses.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "cough-cold",
    label: "Cough / cold",
    keywords: ["cough", "cold", "congestion", "sinus", "runny nose", "bronchitis"],
    recommendation: "urgent-care",
    description: "Rule out common causes and help you recover faster.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "ear-infection",
    label: "Ear pain / ear infection",
    keywords: ["ear", "earache", "otitis", "ear infection", "pressure"],
    recommendation: "urgent-care",
    description: "Assessment and treatment when needed.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "pink-eye",
    label: "Pink eye",
    keywords: ["pink eye", "conjunctivitis", "eye redness", "eye discharge"],
    recommendation: "urgent-care",
    description: "Evaluation and treatment guidance.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "uti",
    label: "Urinary tract infection (UTI)",
    keywords: ["uti", "urinary", "burning", "painful urination", "frequent urination"],
    recommendation: "urgent-care",
    description: "Testing and treatment when appropriate.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "sprain-strain",
    label: "Sprain / strain",
    keywords: ["sprain", "strain", "ankle", "wrist", "knee", "swollen", "twisted"],
    recommendation: "urgent-care",
    description: "Evaluation and imaging options when needed.",
    href: "/services/urgent-care/injury",
  },
  {
    id: "minor-cut-stitches",
    label: "Cut (may need stitches)",
    keywords: ["cut", "laceration", "stitches", "bleeding", "wound"],
    recommendation: "urgent-care",
    description: "Wound care and closure for many minor cuts.",
    href: "/services/urgent-care/injury",
  },
  {
    id: "possible-fracture",
    label: "Possible broken bone",
    keywords: ["broken", "fracture", "x-ray", "bone", "hurt to move", "deformity"],
    recommendation: "urgent-care",
    description: "On-site evaluation; escalation if severe or complex.",
    href: "/services/urgent-care/labs",
  },
  {
    id: "allergies-asthma",
    label: "Allergies / mild asthma flare",
    keywords: ["allergy", "allergies", "asthma", "wheezing", "inhaler", "seasonal"],
    recommendation: "urgent-care",
    description: "Treatment for many non-severe symptoms.",
    href: "/services/urgent-care/illness",
  },
  {
    id: "sti-screening",
    label: "STI screening",
    keywords: ["sti", "std", "screening", "testing", "sexual health"],
    recommendation: "urgent-care",
    description: "Confidential testing options.",
    href: "/services/prevention#sti",
  },
  {
    id: "vaccines",
    label: "Vaccines / shots",
    keywords: ["vaccine", "shot", "flu shot", "immunization", "tetanus"],
    recommendation: "urgent-care",
    description: "Common adult vaccines and seasonal options.",
    href: "/services/urgent-care/wellness",
  },
  {
    id: "sports-physical",
    label: "Sports physical",
    keywords: ["sports physical", "physical", "school", "athlete"],
    recommendation: "info",
    description: "Quick turnaround; walk-ins welcome.",
    href: "/services/urgent-care/wellness",
  },
  {
    id: "dot-physical",
    label: "DOT physical",
    keywords: ["dot", "cdl", "driver", "dot physical", "fmcsa"],
    recommendation: "info",
    description: "Certified medical examiner appointments available.",
    href: "/services/occupational-health",
  },

  // ER / 911 guidance (safe, non-diagnostic, red-flag oriented)
  {
    id: "chest-pain",
    label: "Chest pain / pressure",
    keywords: ["chest pain", "pressure", "heart", "tightness"],
    recommendation: "er-911",
    description: "Potential emergency. If severe or sudden, call 911.",
    href: "/resources/urgent-care-vs-er",
  },
  {
    id: "trouble-breathing",
    label: "Severe trouble breathing",
    keywords: ["trouble breathing", "can't breathe", "shortness of breath", "blue lips", "severe wheezing"],
    recommendation: "er-911",
    description: "If breathing is difficult or worsening, call 911.",
    href: "/resources/urgent-care-vs-er",
  },
  {
    id: "stroke-signs",
    label: "Possible stroke symptoms",
    keywords: ["stroke", "face droop", "slurred speech", "weakness", "numb", "confusion"],
    recommendation: "er-911",
    description: "Time-sensitive emergency. Call 911.",
    href: "/resources/urgent-care-vs-er",
  },
  {
    id: "heavy-bleeding",
    label: "Heavy bleeding / deep wound",
    keywords: ["heavy bleeding", "won't stop", "deep cut", "spurting", "bleeding a lot"],
    recommendation: "er-911",
    description: "Seek emergency care; call 911 if uncontrolled bleeding.",
    href: "/resources/urgent-care-vs-er",
  },
  {
    id: "head-injury",
    label: "Severe head injury / loss of consciousness",
    keywords: ["head injury", "passed out", "unconscious", "seizure", "confused"],
    recommendation: "er-911",
    description: "Emergency evaluation is recommended.",
    href: "/resources/urgent-care-vs-er",
  },
  {
    id: "severe-allergic-reaction",
    label: "Severe allergic reaction",
    keywords: ["anaphylaxis", "swelling", "throat swelling", "hives", "allergic reaction", "epi pen"],
    recommendation: "er-911",
    description: "If swelling or breathing issues, call 911.",
    href: "/resources/urgent-care-vs-er",
  },
];

export type ServiceFinderResult = ServiceFinderItem & {
  score: number;
};

function normalize(input: string) {
  return input.trim().toLowerCase();
}

function scoreItem(query: string, item: ServiceFinderItem): number {
  if (!query) return 0;
  const q = normalize(query);
  const label = item.label.toLowerCase();
  if (label === q) return 100;
  if (label.startsWith(q)) return 80;
  if (label.includes(q)) return 60;

  const keywordHits = item.keywords.reduce((acc, kw) => {
    const k = kw.toLowerCase();
    if (k === q) return acc + 40;
    if (k.startsWith(q)) return acc + 25;
    if (k.includes(q)) return acc + 15;
    return acc;
  }, 0);

  return keywordHits;
}

export function getServiceFinderResults(query: string, limit = 12): ServiceFinderResult[] {
  const q = normalize(query);

  const scored = BASE_ITEMS.map((item) => ({
    ...item,
    score: q ? scoreItem(q, item) : 0,
  }));

  if (!q) {
    // Default ordering: urgent care first, then ER, then info
    const rank = (rec: ServiceFinderRecommendation) =>
      rec === "urgent-care" ? 0 : rec === "er-911" ? 1 : 2;
    return scored
      .sort((a, b) => rank(a.recommendation) - rank(b.recommendation))
      .slice(0, limit);
  }

  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
