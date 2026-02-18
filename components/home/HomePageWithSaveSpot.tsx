"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { DiagnosticCommandCenter } from "@/components/home/DiagnosticCommandCenter";
import { FloatingActionButton } from "@/components/home/FloatingActionButton";
import { HeroSection } from "@/components/home/HeroSection";
import { SaveSpotModal } from "@/components/SaveSpotModal";
import { TrustSignals } from "@/components/home/TrustSignals";
import { TriageToggle } from "@/components/tools/TriageToggle";
import { ClinicMap } from "@/components/ui/ClinicMap";
import { DivisionCards } from "@/components/clinic/DivisionCards";
import { PrimaryCareBridge } from "@/components/sections/PrimaryCareBridge";
import type { Language } from "@/lib/i18n";

type Props = {
  insertAfterHero?: ReactNode;
  insertBeforeMain?: ReactNode;
  bottomSections?: ReactNode;
  language?: Language;
};

export function HomePageWithSaveSpot({
  insertAfterHero,
  insertBeforeMain,
  bottomSections,
  language = "en",
}: Props = {}) {
  const [saveSpotModalOpen, setSaveSpotModalOpen] = useState(false);

  const copy =
    language === "es"
      ? {
          findUs: "Encuéntranos",
          hours: "Lun–Vie: 8am–6:30pm | Sáb: 8am–2:30pm",
          nearby: "Cerca de la intersección de N. Michigan Rd y 79th St",
          directions: "Cómo llegar",
          serving: "Atendemos el noroeste de Indianápolis",
          servingBody:
            "Convenientemente ubicados en Michigan Rd, somos la opción preferida para residentes de Pike Township, Zionsville, Carmel y el noroeste de Indy. A minutos de I-465.",
        }
      : {
          findUs: "Find Us",
          hours: "Mon-Fri: 8am-6:30pm | Sat: 8am-2:30pm",
          nearby: "Located near the intersection of N. Michigan Rd and 79th St",
          directions: "Get Directions",
          serving: "Serving Northwest Indianapolis",
          servingBody:
            "Conveniently located on Michigan Rd, we are the preferred urgent care for residents in Pike Township, Zionsville, Carmel, and the surrounding Northwest Indy area. Just minutes from I-465.",
        };

  return (
    <>
      <HeroSection language={language} onSaveSpotClick={() => setSaveSpotModalOpen(true)} />
      <SaveSpotModal isOpen={saveSpotModalOpen} onClose={() => setSaveSpotModalOpen(false)} />
      <FloatingActionButton onSaveSpotClick={() => setSaveSpotModalOpen(true)} />

      {insertAfterHero}
      {insertBeforeMain}

      <TrustSignals />

      <section className="container py-12 md:py-16">
        <TriageToggle />
      </section>

      <DiagnosticCommandCenter />

      <section className="container py-12 md:py-16 border-t border-slate-200 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{copy.findUs}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-lg font-bold text-slate-900 mb-2">
                7911 N Michigan Rd, Indianapolis, IN 46268
              </p>
              <p className="text-slate-600 mb-2">{copy.hours}</p>
              <p className="text-slate-600 mb-2">
                <a href="tel:+13179566288" className="text-primary-blue font-medium hover:underline">
                  (317) 956-6288
                </a>
              </p>
              <p className="text-slate-500 text-sm mt-4">{copy.nearby}</p>
              <a
                href="https://www.google.com/maps/dir//7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-4 min-h-[44px] px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {copy.directions}
              </a>
            </div>
            <div className="relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-medical">
              <Image
                src="/images/clinic/exterior/Screenshot of UrgentCare Indy - Google Maps (4).jpg"
                alt="Urgent Care Indy building exterior, N Michigan Rd"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="min-h-[300px] w-full">
            <ClinicMap className="h-[300px] w-full rounded-xl overflow-hidden" />
          </div>
        </div>
      </section>

      <section
        className="container py-12 md:py-16 border-t border-slate-200 bg-slate-50"
        aria-labelledby="serving-heading"
      >
        <h2 id="serving-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          {copy.serving}
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">{copy.servingBody}</p>
      </section>

      <DivisionCards />
      <PrimaryCareBridge />
      {bottomSections}
    </>
  );
}

