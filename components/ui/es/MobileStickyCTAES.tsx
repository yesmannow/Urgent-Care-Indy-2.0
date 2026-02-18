"use client";

import { useEffect, useState } from "react";
import { ClipboardCheck, Clock, MapPin, Phone } from "lucide-react";
import { getClinicStatus } from "@/lib/clinicHours";

const PHONE_NUMBER = "tel:+13179566288";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=7911+N+Michigan+Rd,+Indianapolis,+IN+46268";
const CHECK_IN_URL = "/es/schedule";
const HOURS_URL = "/es#visitenos";

export function MobileStickyCTAES() {
  const [status, setStatus] = useState(() => getClinicStatus("es"));

  useEffect(() => {
    Promise.resolve().then(() => setStatus(getClinicStatus("es")));
    const id = window.setInterval(() => setStatus(getClinicStatus("es")), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const statusPill = status.isOpen ? status.statusLabel : "Cerrado—Horario";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-50 sm:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
      role="complementary"
      aria-label="Acciones rápidas"
    >
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <div className="min-w-0">
          <p className="text-xs font-extrabold text-slate-900 truncate">7911 N Michigan Rd</p>
          <p className="text-xs text-slate-600 truncate">{status.detailLabel}</p>
        </div>
        <span
          className={`shrink-0 inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold border ${
            status.isOpen
              ? "bg-emerald-100 text-emerald-900 border-emerald-200"
              : "bg-slate-100 text-slate-800 border-slate-200"
          }`}
          aria-label={statusPill}
        >
          {statusPill}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <a
          href={PHONE_NUMBER}
          className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-extrabold text-sm hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
          aria-label="Llamar a Urgent Care Indy"
        >
          <Phone size={18} aria-hidden />
          Llamar
        </a>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-extrabold text-sm hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
          aria-label="Abrir direcciones en Google Maps"
        >
          <MapPin size={18} aria-hidden />
          Mapa
        </a>

        {status.isOpen ? (
          <a
            href={CHECK_IN_URL}
            className="flex items-center justify-center gap-2 bg-primary-blue text-white py-3 rounded-xl font-extrabold text-sm shadow-lg shadow-primary-blue/20 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
            aria-label="Hacer check-in"
          >
            <ClipboardCheck size={18} aria-hidden />
            Check-in
          </a>
        ) : (
          <a
            href={HOURS_URL}
            className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-extrabold text-sm hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 min-h-[48px]"
            aria-label="Ver horario"
          >
            <Clock size={18} aria-hidden />
            Horario
          </a>
        )}
      </div>
    </div>
  );
}

