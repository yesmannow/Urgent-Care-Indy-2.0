// Data structure for Navigation – Patient Services
// Icon values are Lucide React icon names (use with icon map in components)

export const patientServices = [
  {
    category: "Urgent Care",
    icon: "Stethoscope",
    links: [
      { name: "Minor Injuries", href: "/services/urgent-care#injuries" },
      { name: "Minor Illnesses", href: "/services/urgent-care#illnesses" },
    ],
  },
  {
    category: "Diagnostics & Testing",
    icon: "Microscope",
    links: [
      { name: "On-Site Labs", href: "/services/diagnostics#labs" },
      { name: "EKG Services", href: "/services/diagnostics#ekg" },
    ],
  },
  {
    category: "Wellness & Prevention",
    icon: "HeartHandshake",
    links: [
      { name: "Vaccines & Shots", href: "/services/prevention#vaccines" },
      { name: "Sports Physicals", href: "/services/prevention#physicals" },
      { name: "Reproductive Health (STI)", href: "/services/prevention#sti" },
    ],
  },
] as const;
