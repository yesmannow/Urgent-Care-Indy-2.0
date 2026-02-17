"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSignals } from "@/components/home/TrustSignals";
import { TriageToggle } from "@/components/tools/TriageToggle";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { ClinicMap } from "@/components/ui/ClinicMap";
import { DivisionCards } from "@/components/clinic/DivisionCards";
import { PrimaryCareBridge } from "@/components/sections/PrimaryCareBridge";
import { SaveSpotModal } from "@/components/SaveSpotModal";
import { FloatingActionButton } from "@/components/home/FloatingActionButton";

type Props = {
  insertAfterHero?: ReactNode;
  insertBeforeMain?: ReactNode;
  bottomSections?: ReactNode;
};

export function HomePageWithSaveSpot({
  insertAfterHero,
  insertBeforeMain,
  bottomSections,
}: Props = {}) {
  const [saveSpotModalOpen, setSaveSpotModalOpen] = useState(false);

  return (
    <>
      <HeroSection onSaveSpotClick={() => setSaveSpotModalOpen(true)} />
      <SaveSpotModal
        isOpen={saveSpotModalOpen}
        onClose={() => setSaveSpotModalOpen(false)}
      />
      <FloatingActionButton onSaveSpotClick={() => setSaveSpotModalOpen(true)} />
      {insertAfterHero}
      {insertBeforeMain}
      <TrustSignals />
      <section className="container py-12 md:py-16">
        <TriageToggle />
      </section>
      <ServiceGrid />
      {/* Find Us – clinic exterior + map */}
      <section className="container py-12 md:py-16 border-t border-slate-200 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Find Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-lg font-bold text-slate-900 mb-2">
                7911 N Michigan Rd, Indianapolis, IN 46268
              </p>
              <p className="text-slate-600 mb-2">
                Mon–Fri: 8am–6:30pm | Sat: 8am–2:30pm
              </p>
              <p className="text-slate-600 mb-2">
                <a
                  href="tel:+13179566288"
                  className="text-primary-blue font-medium hover:underline"
                >
                  (317) 956-6288
                </a>
              </p>
              <p className="text-slate-500 text-sm mt-4">
                Located near the intersection of N. Michigan Rd and 79th St
              </p>
              <a
                href="https://www.google.com/maps/dir//7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-4 min-h-[44px] px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Get Directions
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

      {/* Hyper-local SEO: Serving Northwest Indianapolis */}
      <section
        className="container py-12 md:py-16 border-t border-slate-200 bg-slate-50"
        aria-labelledby="serving-heading"
      >
        <h2
          id="serving-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
        >
          Serving Northwest Indianapolis
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Conveniently located on Michigan Rd, we are the preferred urgent care
          for residents in <strong className="text-slate-900">Pike Township</strong>,{" "}
          <strong className="text-slate-900">Zionsville</strong>,{" "}
          <strong className="text-slate-900">Carmel</strong>, and the surrounding
          Northwest Indy area. Just minutes from I-465.
        </p>
      </section>

      {/* Wellness Ecosystem – sister clinics (Pike Medical divisions) */}
      <DivisionCards />

      <PrimaryCareBridge />
      {bottomSections}
    </>
  );
}
