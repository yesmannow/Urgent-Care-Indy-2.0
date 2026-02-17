// Data structure for Navigation – Patient Services
// Icon values are Lucide React icon names (use with icon map in components)

export const patientServices = [
  {
    category: "Urgent Care",
    icon: "Stethoscope",
    links: [
      { name: "Minor Injuries", href: "/services/urgent-care#injuries" },
      { name: "Minor Illnesses", href: "/services/urgent-care#illnesses" },
      { name: "Sports Physicals", href: "/services/urgent-care" },
    ],
  },
  {
    category: "Diagnostics & Testing",
    icon: "Microscope",
    links: [
      { name: "On-Site Labs", href: "/services/diagnostics#labs" },
      { name: "EKG Services", href: "/services/diagnostics#ekg" },
      { name: "Bone Density (DXA)", href: "/services/bone-density" },
      { name: "Sleep Apnea Testing", href: "/services/sleep-apnea" },
    ],
  },
  {
    category: "Wellness & Prevention",
    icon: "HeartHandshake",
    links: [
      { name: "Vaccines & Shots", href: "/services/prevention#vaccines" },
      { name: "Flu Season FAQ", href: "/services/flu-faq" },
      { name: "STI Screening", href: "/services/prevention#sti" },
    ],
  },
  {
    category: "Forms & Registration",
    icon: "FileText",
    links: [
      { name: "Patient Forms", href: "/resources/forms" },
      { name: "Pricing", href: "/patient-resources/pricing" },
    ],
  },
] as const;

export const resourceLinks = [
  { name: "Patient Forms", href: "/resources/forms" },
  { name: "Insurance Guide", href: "/payments-insurance" },
] as const;

// Employer Services mega menu – Occupational Health + Portal
export const employerServices = [
  {
    id: "dot-physicals",
    title: "DOT Physicals",
    price: "$95",
    note: "Certified Providers",
    description:
      "FMCSA-certified medical examinations for commercial drivers. Fast turnaround, clear documentation for your fleet.",
    href: "/services/occupational-health#dot-physicals",
  },
  {
    id: "drug-screens",
    title: "Drug Screens",
    price: null,
    note: "5-panel, 10-panel, eScreen",
    description:
      "Pre-employment, post-accident, and random testing. Chain-of-custody assured. DOT and non-DOT panels available.",
    href: "/services/occupational-health#drug-screens",
  },
  {
    id: "workers-comp",
    title: "Workers Comp Injury Management",
    price: null,
    note: "Return-to-Work focus",
    description:
      "On-site evaluation, imaging, and treatment. We prioritize timely care and clear work-status documentation.",
    href: "/services/occupational-health#workers-comp",
  },
] as const;
