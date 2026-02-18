import Link from "next/link";
import { Bandage, Compass, CreditCard, Thermometer } from "lucide-react";

const chips = [
  {
    label: "Injuries",
    href: "/services/urgent-care#injuries",
    icon: Bandage,
    tone: "bg-blue-50 text-blue-800 border-blue-100 hover:bg-blue-100",
  },
  {
    label: "Illnesses",
    href: "/services/urgent-care#illnesses",
    icon: Thermometer,
    tone: "bg-teal-50 text-teal-800 border-teal-100 hover:bg-teal-100",
  },
  {
    label: "Care Paths",
    href: "/care",
    icon: Compass,
    tone: "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200",
  },
  {
    label: "Pricing",
    href: "/patient-resources/pricing",
    icon: CreditCard,
    tone: "bg-amber-50 text-amber-900 border-amber-100 hover:bg-amber-100",
  },
] as const;

export function WhatWeTreatChips() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Start Here</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-2">
              What are you here for today?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => {
              const Icon = chip.icon;
              return (
                <Link
                  key={chip.href}
                  href={chip.href}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 ${chip.tone}`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {chip.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

