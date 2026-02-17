"use client";

import Link from "next/link";
import {
  ShieldAlert,
  Activity,
  FlaskConical,
  Truck,
  FileText,
  Download,
  LogIn,
  ChevronRight,
  Phone,
  type LucideIcon,
} from "lucide-react";

type EmployerMegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function EmployerMegaMenu({ isOpen, onClose, onMouseEnter, onMouseLeave }: EmployerMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full z-50 border-t border-slate-200 bg-white/98 backdrop-blur-xl shadow-2xl rounded-b-3xl transform origin-top animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-12 gap-8 divide-x divide-slate-100">
          {/* Col 1: Clinical Services (The "What") */}
          <div className="col-span-12 lg:col-span-5 pr-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Clinical Services
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <MenuLink
                href="/employer-services/workers-comp"
                icon={ShieldAlert}
                title="Workers' Comp & Injury Care"
                desc="Aggressive return-to-work protocols."
                onClose={onClose}
              />
              <MenuLink
                href="/employer-services/dot-physicals"
                icon={Truck}
                title="DOT Physicals (FMCSA)"
                desc="Certified examiners on-staff daily."
                onClose={onClose}
              />
              <MenuLink
                href="/employer-services/drug-screening"
                icon={FlaskConical}
                title="Drug & Alcohol Screening"
                desc="5/10/12-Panel, eScreen, & Hair Testing."
                onClose={onClose}
              />
              <MenuLink
                href="/employer-services/physicals"
                icon={Activity}
                title="Occupational Health"
                desc="Fit-for-Duty, Respirator Fit, & Audiograms."
                onClose={onClose}
              />
            </div>
          </div>

          {/* Col 2: HR Tools & Forms (The "Utility") */}
          <div className="col-span-12 lg:col-span-4 px-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">HR Toolbox</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/employer-services/resources"
                  onClick={onClose}
                  className="flex items-center gap-3 text-slate-700 hover:text-teal-600 font-medium group"
                >
                  <span className="p-2 bg-slate-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                    <FileText className="h-4 w-4" />
                  </span>
                  Authorization Forms (PDF)
                </Link>
              </li>
              <li>
                <Link
                  href="/employer-services/resources"
                  onClick={onClose}
                  className="flex items-center gap-3 text-slate-700 hover:text-teal-600 font-medium group"
                >
                  <span className="p-2 bg-slate-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                    <Download className="h-4 w-4" />
                  </span>
                  New Account Setup
                </Link>
              </li>
              <li>
                <Link
                  href="https://portal.urgentcareindy.com"
                  target="_blank"
                  className="flex items-center gap-3 text-slate-700 hover:text-teal-600 font-medium group"
                >
                  <span className="p-2 bg-slate-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                    <LogIn className="h-4 w-4" />
                  </span>
                  Employer Results Portal
                </Link>
              </li>
            </ul>

            <div className="mt-8 bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-blue-900 font-bold text-sm mb-1">Client Service Center</p>
              <p className="text-blue-600 text-xs mb-3">Dedicated support for HR Managers.</p>
              <a href="tel:317-956-6288" className="flex items-center gap-2 text-sm font-bold text-blue-700">
                <Phone className="h-4 w-4" /> (317) 956-6288
              </a>
            </div>
          </div>

          {/* Col 3: Call to Action */}
          <div className="col-span-12 lg:col-span-3 pl-6 flex flex-col justify-center">
            <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Setup a Corporate Account</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Streamline billing, get results faster, and ensure OSHA compliance for your fleet.
                </p>
                <Link
                  href="/employer-services/contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-900/20"
                >
                  Request Quote <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -mr-10 -mt-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuLink({
  href,
  icon: Icon,
  title,
  desc,
  onClose,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
    >
      <div className="mt-1 p-2 rounded-lg bg-white border border-slate-100 shadow-sm text-slate-500 group-hover:text-teal-600 group-hover:border-teal-100 transition-all">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
      </div>
    </Link>
  );
}
