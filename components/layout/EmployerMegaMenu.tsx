"use client";

import Link from "next/link";
import { Building2, ShieldAlert, FileStack, Truck, LogIn, ChevronRight, ExternalLink } from "lucide-react";
import { employerServices } from "@/lib/navigation";

const iconMap: Record<(typeof employerServices)[number]["id"], typeof Building2> = {
  "occupational-health": Building2,
  "workplace-injuries": Building2,
  "drug-testing": ShieldAlert,
  "regulatory-evaluations": Truck,
  "onsite-clinic": Building2,
  "resources-forms": FileStack,
};

type EmployerMegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function EmployerMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: EmployerMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full z-40 border-t border-slate-200 bg-white shadow-medical rounded-b-xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave ?? onClose}
      role="menu"
      aria-label="Employer services"
    >
      <div className="container py-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-blue mb-4">
          Employers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columns 1–2: Structured list of B2B pages */}
          <div className="md:col-span-2">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {employerServices.map(({ id, title, description, href }) => {
                const Icon = iconMap[id] ?? Building2;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-600/30 hover:bg-slate-50/80 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-primary-blue group-hover:bg-blue-600/10 transition-colors">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-slate-900 group-hover:text-primary-blue transition-colors block">
                          {title}
                        </span>
                        <p className="mt-0.5 text-sm text-slate-500 line-clamp-2">
                          {description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: B2B Portal CTA (external portal) */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <Link
              href="/portal"
              onClick={onClose}
              className="flex flex-col justify-center items-center gap-3 min-h-[140px] rounded-xl px-6 py-6 text-center bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-medical border border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              aria-label="B2B Portal — opens patient and employer portal in same tab"
            >
              <LogIn className="h-8 w-8 text-blue-400 shrink-0" aria-hidden />
              <span className="font-bold text-lg inline-flex items-center gap-1.5">
                B2B Portal
                <ExternalLink className="h-4 w-4 text-slate-400 shrink-0" aria-hidden />
              </span>
              <span className="text-sm text-slate-300">External portal — employer & patient access</span>
            </Link>
            <Link
              href="/services/occupational-health"
              onClick={onClose}
              className="text-center text-sm font-medium text-primary-blue hover:underline py-2"
            >
              View all Occupational Health services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
