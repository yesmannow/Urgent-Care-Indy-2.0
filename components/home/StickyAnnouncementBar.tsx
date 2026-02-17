"use client";

import Link from "next/link";
import type { Language } from "@/lib/i18n";

export function StickyAnnouncementBar({ language = "en" }: { language?: Language }) {
  const copy =
    language === "es"
      ? { msg: "¡Ya llegaron las vacunas contra la gripe! Disponibles dosis alta y estándar en la clínica.", cta: "Ver precios" }
      : { msg: "Flu shots are here! High-dose & standard quadrivalent available in-house.", cta: "View Pricing" };
  return (
    <div
      className="sticky top-0 z-[100] w-full bg-teal-600 text-white py-2.5 px-4 text-center text-sm font-medium shadow-md"
      role="region"
      aria-label="Seasonal announcement"
    >
      {copy.msg}{" "}
      <Link
        href="/patient-resources/pricing"
        className="underline font-bold hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 rounded"
      >
        {copy.cta}
      </Link>
    </div>
  );
}
