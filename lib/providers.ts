export type ProviderProfile = {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  imageSrc: string;
  shortBio: string;
  fullBio: string;
  specialties: string[];
  trustSignals: string[];
  sourceUrl: string;
};

export const providerProfiles: ProviderProfile[] = [
  {
    id: "james-pike",
    name: "James D. Pike",
    credentials: "D.O., FCCP, FACP",
    role: "Medical Director",
    imageSrc: "/images/clinic/providers/james-pike.jpg",
    shortBio: "Specialist-level training with decades of experience and weekly case review oversight.",
    fullBio:
      "Dr. James D. Pike brings over three decades of medical expertise, combining specialist-level training with a commitment to accessible primary care. A 1984 graduate of Kansas City University of Medicine and Biosciences, Dr. Pike served as a U.S. Army physician for 10 years. As Chief Medical Officer and Medical Director, he provides case reviews and clinical oversight.",
    specialties: [
      "Internal Medicine",
      "Pulmonary Medicine",
      "Critical Care Medicine",
      "Complex Chronic Disease Management",
      "COPD & Respiratory Conditions",
    ],
    trustSignals: [
      "30+ years of medical experience",
      "U.S. Army physician (10 years)",
      "Fellow, American College of Chest Physicians (FCCP)",
      "Fellow, American College of Physicians (FACP)",
      "Specialist oversight and case reviews",
    ],
    sourceUrl: "https://direct-care-indy-marketing.vercel.app/providers/james-pike",
  },
  {
    id: "karina-white",
    name: "Karina White",
    credentials: "PA-C, DMS",
    role: "Lead PA",
    imageSrc: "/images/clinic/providers/karina-white.webp",
    shortBio: "Doctor of Medical Science (DMS) with advanced clinical training and evidence-based focus.",
    fullBio:
      "Karina White, PA-C, DMS brings exceptional clinical expertise and academic leadership. As a Doctor of Medical Science (DMS), Karina represents the highest level of PA education, combining advanced clinical training with a deep focus on evidence-based medicine.",
    specialties: ["Primary Care", "Preventive Medicine", "Chronic Disease Management", "Women’s Health"],
    trustSignals: ["Doctor of Medical Science (DMS)", "Evidence-based care focus", "Clinical leadership"],
    sourceUrl: "https://direct-care-indy-marketing.vercel.app/providers/karina-white",
  },
  {
    id: "maddie-klinger",
    name: "Maddie Klinger",
    credentials: "PA-C, MPAS",
    role: "Lead PA",
    imageSrc: "/images/clinic/providers/maddie-klinger.webp",
    shortBio: "Whole-patient approach with a relationship-first care style and academic teaching role.",
    fullBio:
      "Maddie Klinger, PA-C, MPAS brings a whole-patient approach to primary care, focusing on building lasting relationships. Since joining in 2018, Maddie has been committed to treating the whole patient—addressing not just symptoms, but the full context of each person’s health journey. As a preceptor at Butler University, she helps train future clinicians while providing care.",
    specialties: ["Primary Care", "Preventive Medicine", "Wellness & Health Promotion", "Family Medicine"],
    trustSignals: ["In practice with the team since 2018", "Butler University preceptor", "Relationship-first, whole-patient approach"],
    sourceUrl: "https://direct-care-indy-marketing.vercel.app/providers/maddie-klinger",
  },
  {
    id: "chase-keirn",
    name: "Chase Keirn",
    credentials: "PA-C",
    role: "Lead PA",
    imageSrc: "/images/clinic/providers/chase-keirn.webp",
    shortBio: "Respiratory-focused expertise with leadership experience and complex case collaboration.",
    fullBio:
      "Chase Keirn, PA-C brings specialized expertise in general pulmonology with a focus on lung nodules and respiratory conditions. Working in tandem with Dr. James D. Pike on complex pulmonary cases, Chase provides evaluation and management for respiratory conditions. As the Health Center Director at Marian University, Chase combines clinical excellence with leadership responsibilities.",
    specialties: ["General Pulmonology", "Lung Nodule Evaluation", "Respiratory Medicine", "Primary Care"],
    trustSignals: ["Specialized respiratory focus", "Collaborative complex-case care", "Health Center Director at Marian University"],
    sourceUrl: "https://direct-care-indy-marketing.vercel.app/providers/chase-keirn",
  },
];

