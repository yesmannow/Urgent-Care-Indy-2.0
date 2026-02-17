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
    ],
  },
] as const;

export const resourceLinks = [
  { name: "Patient Forms", href: "/resources/forms" },
  { name: "Insurance Guide", href: "/payments-insurance" },
] as const;
