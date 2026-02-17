"use client";

import { useState } from "react";
import Image from "next/image";
import { SaveSpotModal } from "@/components/SaveSpotModal";

const CTA_BG =
  "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

export function SaveSpotCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-16 md:py-24"
        aria-labelledby="uc-vs-er-cta-heading"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={CTA_BG}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-slate-900/75"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2
            id="uc-vs-er-cta-heading"
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Know where to go? Save your spot now.
          </h2>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Save your spot at our Michigan Road clinic"
          >
            Save Your Spot
          </button>
        </div>
      </section>
      <SaveSpotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
