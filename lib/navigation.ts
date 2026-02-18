// Data structure for Navigation – Patient Services
// Icon values are Lucide React icon names (use with icon map in components)

export const patientServices = [
  {
    category: "Urgent Care",
    icon: "Stethoscope",
    links: [
      { name: "Illness & Infection", href: "/services/urgent-care/illness" },
      { name: "Injury & Trauma", href: "/services/urgent-care/injury" },
      { name: "Wellness & Vaccines", href: "/services/urgent-care/wellness" },
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
      { name: "Flu Season FAQ", href: "/resources/flu-faq" },
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
  { name: "Patient Portal (MyMedicalLocker)", href: "/resources/patient-portal" },
  { name: "Flu Season FAQ", href: "/resources/flu-faq" },
  { name: "Urgent Care vs ER", href: "/resources/urgent-care-vs-er" },
  { name: "Should I Come In? (Quiz)", href: "/resources/should-i-come-in" },
  { name: "Pricing", href: "/patient-resources/pricing" },
  { name: "Insurance Guide", href: "/payments-insurance" },
] as const;

// Employer Services mega menu – Occupational Health hub + sub-pages
export const employerServices = [
  {
    id: "occupational-health",
    title: "Occupational Health",
    description: "Overview of employer solutions.",
    href: "/services/occupational-health",
  },
  {
    id: "workplace-injuries",
    title: "Workplace Injuries",
    description: "First aid, modified duty, workers' comp coordination.",
    href: "/services/occupational-health/workplace-injuries",
  },
  {
    id: "drug-testing",
    title: "Employer Drug Testing",
    description: "5/10/12-panel, eScreen, MRO, random pool management.",
    href: "/services/occupational-health/drug-testing",
  },
  {
    id: "regulatory-evaluations",
    title: "Regulatory Evaluations",
    description: "Respirator fit, PFT, audiograms, TB screening.",
    href: "/services/occupational-health/regulatory-evaluations",
  },
  {
    id: "onsite-clinic",
    title: "Onsite Clinic Services",
    description: "Onsite drug testing, flu shots, biometric screenings.",
    href: "/services/occupational-health/onsite-clinic",
  },
  {
    id: "resources-forms",
    title: "Resources & Forms",
    description: "PDFs, DOT/OSHA links, treatment authorization.",
    href: "/services/occupational-health/resources-forms",
  },
] as const;
