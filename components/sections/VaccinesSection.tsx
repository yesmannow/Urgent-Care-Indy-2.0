"use client";

import Link from "next/link";
import { Phone, AlertCircle, Syringe } from "lucide-react";

const vaccineData = {
  common: [
    { name: "Meningococcal Virus", brand: "Menactra", price: "$130" },
    { name: "TDAP", brand: "ADACEL", price: "$65" },
    { name: "MMR", brand: "Measles, mumps, and rubella", price: "$85" },
    { name: "Seasonal Flu Vaccine", brand: "Quadrivalent", price: "$37" },
    { name: "Seasonal Flu Vaccine", brand: "High dose", price: "$55" },
    { name: "Chicken Pox", brand: "Varivax", price: "$140" },
    { name: "Pneumonia", brand: "Pneumovax", price: "$100" },
    { name: "Pneumonia", brand: "Prevnar", price: "$200" },
    { name: "Shingles", brand: "Zostavax", price: "$220" },
    {
      name: "Hepatitis A (Adults)",
      note: "Set of 3 shots required",
      price: "$85 ea",
    },
    {
      name: "Hepatitis B (Adults)",
      note: "Set of 3 shots required",
      price: "$75 ea",
    },
    {
      name: "Hepatitis A (Children)",
      note: "Set of 3 shots required",
      price: "$50 ea",
    },
    {
      name: "Hepatitis B (Children)",
      note: "Set of 3 shots required",
      price: "$35 ea",
    },
  ],
  other: [
    { name: "Vitamin B12", price: "$25" },
    { name: "Kenalog", price: "$25" },
    { name: "TB", brand: "PPD", price: "$25" },
    { name: "Testosterone", price: "$25" },
    {
      name: "HPV (Gardasil)",
      note: "Set of 3 shots required",
      price: "$190 ea",
    },
  ],
};

export function VaccinesSection() {
  return (
    <section
      id="vaccines"
      className="py-12 md:py-16 space-y-8 scroll-mt-24"
      aria-labelledby="vaccines-heading"
    >
      {/* Flu Season Alert Banner */}
      <div
        className="bg-red-50 border-l-4 border-red-500 p-4 md:p-5 rounded-r-lg flex items-start gap-4"
        role="region"
        aria-label="Flu season alert"
      >
        <AlertCircle
          className="text-red-600 shrink-0 mt-0.5"
          size={22}
          aria-hidden
        />
        <div>
          <p className="text-red-800 font-semibold">
            It&apos;s time for your annual flu shots!
          </p>
          <p className="text-red-700 text-sm mt-1">
            Get ready for the 2025–26 season. Walk in today or visit our{" "}
            <Link
              href="/resources/flu-faq"
              className="underline font-medium hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-50 rounded"
            >
              Flu FAQ
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Section header */}
      <div>
        <h2
          id="vaccines-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight"
        >
          Vaccines and Shots
        </h2>
        <p className="text-slate-600 mt-2">
          All vaccines, shots, and labs are available in-house. No appointment
          necessary—walk in anytime.
        </p>
      </div>

      {/* Pricing Grid: Common Vaccines | Other Shots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Common Vaccines */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Syringe className="h-5 w-5 text-primary-blue" aria-hidden />
            Common Vaccines
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-medical">
            {vaccineData.common.map((v, i) => (
              <div
                key={`common-${i}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 py-3 sm:p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="font-semibold text-slate-800">{v.name}</div>
                  {v.brand && (
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                      {v.brand}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end shrink-0 sm:ml-4">
                  <span className="font-bold text-teal-600">{v.price}</span>
                  {v.note && (
                    <span className="text-xs text-slate-500 mt-0.5">
                      {v.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Shots + CTA */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Syringe className="h-5 w-5 text-primary-blue" aria-hidden />
              Other Shots
            </h3>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-medical">
              {vaccineData.other.map((v, i) => (
                <div
                  key={`other-${i}`}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-4 py-3 sm:p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800">{v.name}</div>
                    {v.brand && (
                      <div className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">
                        {v.brand}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end shrink-0 sm:ml-4">
                    <span className="font-bold text-teal-600">{v.price}</span>
                    {v.note && (
                      <span className="text-xs text-slate-500 mt-0.5 text-right">
                        {v.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer – Call Now */}
          <div
            className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-medical"
            role="region"
            aria-label="Call to schedule or verify availability"
          >
            <h4 className="text-lg font-bold mb-2">Ready to visit?</h4>
            <p className="text-slate-400 text-sm mb-4">
              Please call to confirm vaccine availability before walking in.
            </p>
            <a
              href="tel:+13179566288"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-colors w-full min-h-[48px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Phone size={20} aria-hidden />
              (317) 956-6288
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
