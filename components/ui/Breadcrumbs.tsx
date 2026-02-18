"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const segmentLabels: Record<string, string> = {
  services: "Services",
  "urgent-care": "Urgent Care",
  illness: "Illness",
  injury: "Injury",
  wellness: "Wellness",
  labs: "Labs & Diagnostics",
  "bone-density": "Bone Density (DXA)",
  "sleep-apnea": "Sleep Apnea Testing",
  "flu-faq": "Flu Season FAQ",
  diagnostics: "Diagnostics",
  prevention: "Prevention",
  "our-clinic": "Our Clinic",
  "employer-services": "Employer Services",
  "workers-comp": "Workers' Comp",
  "dot-physicals": "DOT Physicals",
  "drug-screening": "Drug Screening",
  contact: "Contact",
  careers: "Careers",
  insurance: "Insurance",
  "payments-insurance": "Insurance & Payments",
  portal: "Portal",
  schedule: "Schedule",
  "save-your-spot": "Save Your Spot",
  "pay-bill": "Pay Bill",
  "patient-services": "Patient Services",
  about: "About",
  resources: "Resources",
  "urgent-care-vs-er": "Urgent Care vs ER",
  forms: "Patient Forms",
  "patient-intake": "New Patient Registration",
  "dot-physical": "DOT Physical Form",
  "sports-physical": "Sports Physical Form",
  "patient-resources": "Patient Resources",
  pricing: "Pricing",
  "occupational-health": "Occupational Health",
  "workplace-injuries": "Workplace Injuries",
  "drug-testing": "Employer Drug Testing",
  "regulatory-evaluations": "Regulatory Evaluations",
  "onsite-clinic": "Onsite Clinic Services",
  "resources-forms": "Resources & Forms",
};

function getLabel(segment: string): string {
  return segmentLabels[segment] ?? segment.replace(/-/g, " ");
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const items: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
  ];
  let href = "";
  for (const segment of segments) {
    href += `/${segment}`;
    items.push({ href, label: getLabel(segment) });
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-slate-100 bg-slate-50/80"
    >
      <div className="container py-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-slate-300 select-none" aria-hidden>
                  ›
                </span>
              )}
              {i === items.length - 1 ? (
                <span className="text-slate-500 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-1 rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
