"use client";

import { useState } from "react";
import { Phone, Clock } from "lucide-react";
import { SaveSpotModal } from "@/components/SaveSpotModal";

const PHONE_NUMBER = "tel:3179566288";

export function MobileStickyCTA() {
  const [saveSpotOpen, setSaveSpotOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 grid grid-cols-2 gap-4 z-50 sm:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
        role="complementary"
        aria-label="Quick actions"
      >
        <a
          href={PHONE_NUMBER}
          className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          aria-label="Call Urgent Care Indy now"
        >
          <Phone size={18} aria-hidden />
          Call Now
        </a>
        <button
          type="button"
          onClick={() => setSaveSpotOpen(true)}
          className="flex items-center justify-center gap-2 bg-primary-blue text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary-blue/20 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          aria-label="Save your spot at our Michigan Road clinic"
        >
          <Clock size={18} aria-hidden />
          Save Spot
        </button>
      </div>
      <SaveSpotModal isOpen={saveSpotOpen} onClose={() => setSaveSpotOpen(false)} />
    </>
  );
}
