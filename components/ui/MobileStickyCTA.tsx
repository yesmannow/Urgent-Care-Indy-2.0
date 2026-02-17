"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { SaveSpotModal } from "@/components/SaveSpotModal";
import type { Language } from "@/lib/i18n";
import { getClinicStatus } from "@/lib/clinicHours";

const PHONE_NUMBER = "tel:+13179566288";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=7911+N+Michigan+Rd,+Indianapolis,+IN+46268";

export function MobileStickyCTA({ language = "en" }: { language?: Language }) {
  const [saveSpotOpen, setSaveSpotOpen] = useState(false);
  const [status, setStatus] = useState(() => getClinicStatus(language));

  useEffect(() => {
    Promise.resolve().then(() => setStatus(getClinicStatus(language)));
    const id = window.setInterval(() => setStatus(getClinicStatus(language)), 60_000);
    return () => window.clearInterval(id);
  }, [language]);

  const copy =
    language === "es"
      ? {
          call: "Llamar",
          directions: "Direcciones",
          save: "Reservar",
          address: "7911 N Michigan Rd",
        }
      : {
          call: "Call",
          directions: "Directions",
          save: "Save Spot",
          address: "7911 N Michigan Rd",
        };

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-50 sm:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
        role="complementary"
        aria-label="Quick actions"
      >
        <div className="flex items-center justify-between gap-3 px-1 pb-3">
          <div className="min-w-0">
            <p className="text-xs font-extrabold text-slate-900 truncate">{copy.address}</p>
            <p className="text-xs text-slate-600 truncate">{status.detailLabel}</p>
          </div>
          <span
            className={`shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold border ${
              status.isOpen ? "bg-emerald-100 text-emerald-900 border-emerald-200" : "bg-slate-100 text-slate-800 border-slate-200"
            }`}
            aria-label={status.statusLabel}
          >
            {status.statusLabel}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <a
            href={PHONE_NUMBER}
            className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-extrabold text-sm hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
            aria-label={language === "es" ? "Llamar a Urgent Care Indy" : "Call Urgent Care Indy"}
          >
            <Phone size={18} aria-hidden />
            {copy.call}
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-extrabold text-sm hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
            aria-label={language === "es" ? "Abrir direcciones en Google Maps" : "Open directions in Google Maps"}
          >
            <MapPin size={18} aria-hidden />
            {copy.directions}
          </a>

          <button
            type="button"
            onClick={() => setSaveSpotOpen(true)}
            className="flex items-center justify-center gap-2 bg-primary-blue text-white py-3 rounded-xl font-extrabold text-sm shadow-lg shadow-primary-blue/20 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
            aria-label={language === "es" ? "Reservar tu lugar" : "Save your spot"}
          >
            <Clock size={18} aria-hidden />
            {copy.save}
          </button>
        </div>
      </div>
      <SaveSpotModal isOpen={saveSpotOpen} onClose={() => setSaveSpotOpen(false)} />
    </>
  );
}
