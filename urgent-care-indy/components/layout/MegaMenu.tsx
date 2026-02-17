"use client";

import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { patientServices } from "@/lib/navigation";

const iconMap: Record<(typeof patientServices)[number]["icon"], LucideIcon> = {
  Stethoscope,
  Microscope,
  HeartHandshake,
};

type MegaMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function MegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full z-40 border-t border-slate-200 bg-white shadow-medical rounded-b-xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave ?? onClose}
      role="menu"
      aria-label="Patient services"
    >
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columns 1–3: Category blocks */}
          {patientServices.map(({ category, icon, links }) => {
            const Icon = iconMap[icon];
            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Icon className="h-5 w-5 text-primary-blue shrink-0" aria-hidden />
                  <span>{category}</span>
                </div>
                <ul className="space-y-2">
                  {links.map(({ name, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-slate-600 hover:text-primary-blue transition-colors block py-1"
                        onClick={onClose}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Column 4: CTA card */}
          <div className="md:col-span-1">
            <Link
              href="/schedule"
              onClick={onClose}
              className="flex flex-col justify-center items-center gap-3 h-full min-h-[140px] bg-primary-blue text-white rounded-xl px-6 py-6 text-center hover:bg-blue-700 transition-colors shadow-medical"
            >
              <span className="font-bold text-lg">Save Your Spot</span>
              <span className="text-sm text-white/90">Schedule a visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
