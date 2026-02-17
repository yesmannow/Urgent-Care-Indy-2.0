"use client";

import Link from "next/link";
import { ShieldCheck, FlaskConical, Briefcase, LogIn } from "lucide-react";
import { employerServices } from "@/lib/navigation";

const iconMap = {
  "DOT Physicals": ShieldCheck,
  "Drug Screens": FlaskConical,
  "Workers Comp Injury Management": Briefcase,
} as const;

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columns 1–3: Employer service blocks with copy */}
          {employerServices.map(({ title, price, note, description, href }) => {
            const Icon = iconMap[title as keyof typeof iconMap] ?? Briefcase;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="group block p-5 rounded-xl border border-slate-200 hover:border-primary-blue/30 hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-primary-blue group-hover:bg-primary-blue/10 transition-colors">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold text-slate-900 group-hover:text-primary-blue transition-colors">
                        {title}
                      </span>
                      {price && (
                        <span className="text-sm font-bold text-primary-blue">
                          {price}
                        </span>
                      )}
                    </div>
                    {note && (
                      <p className="text-xs font-medium text-slate-500 mt-0.5">
                        {note}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Column 4: Portal CTA + Overview link */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <Link
              href="/portal"
              onClick={onClose}
              className="flex flex-col justify-center items-center gap-3 min-h-[120px] bg-primary-blue text-white rounded-xl px-6 py-6 text-center hover:bg-blue-700 transition-colors shadow-medical"
            >
              <LogIn className="h-8 w-8 text-white/90 shrink-0" aria-hidden />
              <span className="font-bold text-lg">Portal Login</span>
              <span className="text-sm text-white/90">Employer & patient access</span>
            </Link>
            <Link
              href="/services/occupational-health"
              onClick={onClose}
              className="text-center text-sm font-medium text-primary-blue hover:underline py-2"
            >
              View full Occupational Health page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
