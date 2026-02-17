"use client";

import { useState } from "react";
import { Clock, ArrowRight } from "lucide-react";
import { SaveSpotModal } from "@/components/SaveSpotModal";

export function HeroStatusTicker() {
  const [saveSpotOpen, setSaveSpotOpen] = useState(false);

  return (
    <>
      <div
        className="absolute bottom-8 left-4 md:left-8 z-20"
        role="complementary"
        aria-label="Current wait and hours"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-3 md:py-2 md:px-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3 shrink-0" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <p className="text-white font-bold text-sm">Wait Time: 15 Mins</p>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/20 shrink-0" aria-hidden />
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-300 shrink-0" aria-hidden />
            <p className="text-white/90 text-sm">Open until 6:30 PM</p>
          </div>
          <button
            type="button"
            onClick={() => setSaveSpotOpen(true)}
            className="flex items-center justify-center gap-1.5 bg-primary-blue hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 md:ml-1"
            aria-label="Save your spot at our Michigan Road clinic"
          >
            Save My Spot
            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
          </button>
        </div>
      </div>
      <SaveSpotModal isOpen={saveSpotOpen} onClose={() => setSaveSpotOpen(false)} />
    </>
  );
}
