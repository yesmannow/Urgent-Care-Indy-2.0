"use client";

import { Stethoscope, ExternalLink } from "lucide-react";

const SYMPTOM_CHECKER_URL = "https://symptomate.com/interview/0";

export function SymptomCheckerCTA() {
  return (
    <section
      className="rounded-2xl border-2 border-primary-blue/20 bg-slate-50 p-6 md:p-8 shadow-medical"
      aria-labelledby="symptom-checker-heading"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
          <Stethoscope className="h-6 w-6" aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <h2
            id="symptom-checker-heading"
            className="text-xl font-bold text-slate-900 mb-1"
          >
            Not sure if you need Urgent Care?
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Use a free symptom checker to triage yourself before you visit. When in doubt, we&apos;re here—walk in anytime.
          </p>
        </div>
        <a
          href={SYMPTOM_CHECKER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 shrink-0"
        >
          Start Free Symptom Check
          <ExternalLink className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </section>
  );
}
