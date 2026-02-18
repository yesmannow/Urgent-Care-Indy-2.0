export const SELF_PAY_TIERS = [
  {
    level: "Level 1",
    price: "$100",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for common conditions & injuries",
      "Up to two in-house labs and/or medications*",
    ],
  },
  {
    level: "Level 2",
    price: "$200",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for STI, suturing, pelvic exam, incisions & drainage",
      "STI visits include prescriptive treatment within 7 days of positive test",
    ],
  },
  {
    level: "Level 3",
    price: "$250",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for STI including 1 additional test (BV / yeast / blood work)",
      "STI visits include prescriptive treatment within 7 days of positive test",
    ],
  },
  {
    level: "Level 4",
    price: "$300",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for STI including 2 additional tests (BV / yeast / blood work)",
      "STI visits include prescriptive treatment within 7 days of positive test",
    ],
  },
] as const;

export const FIXED_PRICES = [
  { service: "Sports Physical", price: "$30", note: "No appointment needed" },
  { service: "DOT Physical", price: "$95", note: "Certified examiners" },
  { service: "Pre-employment Physical", price: "$50", note: "Includes paperwork" },
  { service: "TB Skin Test", price: "$25", note: "Results in 48-72 hrs" },
] as const;

export const INSURANCES = [
  "Anthem",
  "UnitedHealthcare",
  "Cigna",
  "Aetna",
  "Medicare",
  "Medicaid",
  "Tricare",
] as const;
