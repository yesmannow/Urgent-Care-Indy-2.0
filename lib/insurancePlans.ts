export type InsurancePlan = {
  carrier: string;
  plan: string;
  keywords?: string[];
};

export type InsuranceMatch = {
  type: "exact-plan" | "carrier" | "none";
  carrier?: string;
  plan?: string;
};

export const acceptedInsurancePlans: InsurancePlan[] = [
  { carrier: "Anthem Blue Cross Blue Shield", plan: "PPO / HMO / EPO", keywords: ["anthem", "bcbs", "blue cross", "blue shield"] },
  { carrier: "UnitedHealthcare", plan: "Choice Plus", keywords: ["uhc", "united", "choice plus"] },
  { carrier: "UnitedHealthcare", plan: "Navigate / HMO", keywords: ["uhc", "united", "navigate"] },
  { carrier: "Aetna", plan: "Choice POS II", keywords: ["aetna", "choice pos ii", "pos"] },
  { carrier: "Cigna", plan: "Open Access Plus", keywords: ["cigna", "oap", "open access"] },
  { carrier: "Humana", plan: "ChoiceCare", keywords: ["humana", "choicecare"] },
  { carrier: "Medicare", plan: "Part B", keywords: ["medicare", "part b"] },
  { carrier: "Indiana Medicaid", plan: "Medicaid", keywords: ["medicaid", "hip", "indiana"] },
  { carrier: "TRICARE", plan: "TRICARE", keywords: ["tricare", "military"] },
  { carrier: "Blue Cross Blue Shield (Federal)", plan: "FEP", keywords: ["fep", "federal", "bcbs federal"] },
];

function normalize(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatInsuranceLabel(p: InsurancePlan) {
  return `${p.carrier} — ${p.plan}`;
}

export function searchInsurancePlans(query: string, limit = 12) {
  const q = normalize(query);
  if (!q) return acceptedInsurancePlans.slice(0, limit);

  const scored = acceptedInsurancePlans
    .map((p) => {
      const haystack = normalize([p.carrier, p.plan, ...(p.keywords ?? [])].join(" "));
      const label = normalize(formatInsuranceLabel(p));
      let score = 0;
      if (label === q) score = 100;
      else if (label.startsWith(q)) score = 80;
      else if (haystack.includes(q)) score = 60;
      else {
        // token match boosts
        const tokens = q.split(" ");
        const tokenHits = tokens.reduce((acc, t) => (haystack.includes(t) ? acc + 8 : acc), 0);
        score = tokenHits;
      }
      return { plan: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map((x) => x.plan);
}

export function matchInsurance(query: string): InsuranceMatch {
  const q = normalize(query);
  if (!q) return { type: "none" };

  const exact = acceptedInsurancePlans.find((p) => normalize(formatInsuranceLabel(p)) === q);
  if (exact) return { type: "exact-plan", carrier: exact.carrier, plan: exact.plan };

  const carrier = acceptedInsurancePlans.find((p) => normalize(p.carrier) === q);
  if (carrier) return { type: "carrier", carrier: carrier.carrier };

  const carrierContains = acceptedInsurancePlans.find((p) => normalize(p.carrier).includes(q));
  if (carrierContains) return { type: "carrier", carrier: carrierContains.carrier };

  return { type: "none" };
}

