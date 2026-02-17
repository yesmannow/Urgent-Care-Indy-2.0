"use client";

import { Phone } from "lucide-react";

const PHONE = "tel:+13179566288";

export function RapidInfoBar() {
  return (
    <div
      className="sticky top-0 z-30 md:hidden w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
      role="region"
      aria-label="Quick info"
    >
      <div className="container px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"
            aria-hidden
          />
          <span className="text-sm font-bold text-slate-900">Wait: ~15 min</span>
        </div>
        <a
          href={PHONE}
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Call (317) 956-6288"
        >
          <Phone size={18} aria-hidden />
          Call Now
        </a>
      </div>
    </div>
  );
}
