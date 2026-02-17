"use client";

import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  Activity,
  Building2,
} from "lucide-react";

const menuData = [
  {
    category: "Urgent Care",
    icon: Stethoscope,
    links: [
      { name: "Minor Injuries", href: "/services/urgent-care#injuries" },
      { name: "Minor Illnesses", href: "/services/urgent-care#illnesses" },
      { name: "Sports Physicals", href: "/services/urgent-care" },
    ],
  },
  {
    category: "Employer Services",
    icon: Building2,
    links: [
      { name: "DOT Physicals", href: "/employer-services#physicals" },
      { name: "Drug Screening", href: "/employer-services#drug-testing" },
      { name: "Workers' Comp", href: "/employer-services#workers-comp" },
      { name: "Employer Overview", href: "/employer-services" },
    ],
  },
  {
    category: "Diagnostics & Prevention",
    icon: Microscope,
    links: [
      { name: "On-Site Labs", href: "/services/diagnostics#labs" },
      { name: "EKG Services", href: "/services/diagnostics#ekg" },
      { name: "Vaccines & Shots", href: "/services/prevention#vaccines" },
      { name: "STI Screening", href: "/services/prevention#sti" },
      { name: "Patient Forms", href: "/resources/patient-forms" },
    ],
  },
];

type ServicesMegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function ServicesMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ServicesMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[min(96vw,640px)] rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-lg py-6 px-6 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave ?? onClose}
      role="menu"
      aria-label="Services"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {menuData.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.category}>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Icon className="h-4 w-4 text-teal-600 shrink-0" aria-hidden />
                {section.category}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-3 text-slate-600 hover:text-teal-600 font-medium text-sm group/item transition-colors"
                    >
                      <span className="p-1.5 bg-slate-50 group-hover/item:bg-teal-50 rounded-lg text-slate-400 group-hover/item:text-teal-600 transition-colors shrink-0">
                        <Activity className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Featured footer */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-900">
            Need a DOT Physical?
          </p>
          <p className="text-xs text-slate-500">
            FMCSA certified examiners on staff daily.
          </p>
        </div>
        <Link
          href="/schedule"
          onClick={onClose}
          className="inline-flex items-center justify-center text-sm font-bold bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-teal-600 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Save Your Spot
        </Link>
      </div>
    </div>
  );
}
