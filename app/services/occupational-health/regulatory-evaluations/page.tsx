import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wind, Ear, Stethoscope, ShieldAlert, CheckCircle2 } from "lucide-react";
import { EmployerSidebar } from "@/components/ui/EmployerSidebar";

export const metadata: Metadata = {
  title: "Regulatory Evaluations | Respirator Fit, PFT, Audiograms, TB | Urgent Care Indy",
  description:
    "Compliance with OSHA and DOT. Respirator fit testing, pulmonary function testing (PFT), audiograms (hearing tests), and TB screening for Indianapolis employers.",
};

const HERO_IMAGE = "/images/services/diagnostics/blood pressure.jpg";

const services = [
  {
    title: "Respirator Fit Testing",
    desc: "Qualitative and quantitative fit testing for N95 and other respirators. OSHA-compliant to ensure proper seal and protection.",
    icon: Wind,
  },
  {
    title: "Pulmonary Function Testing (PFT)",
    desc: "Spirometry and lung function testing for baseline and periodic surveillance. Required for certain respirator use and occupational exposures.",
    icon: Stethoscope,
  },
  {
    title: "Audiograms (Hearing Tests)",
    desc: "Baseline and annual hearing tests for OSHA hearing conservation programs. Clear documentation for your records.",
    icon: Ear,
  },
  {
    title: "TB (Tuberculosis) Screening",
    desc: "TB skin tests and screening for healthcare, education, and other high-risk workforce settings. Fast turnaround.",
    icon: ShieldAlert,
  },
];

const complianceServices = [
  {
    title: "Respirator Fit Testing",
    detail: "Qualitative and Quantitative testing per OSHA 1910.134.",
  },
  {
    title: "Pulmonary Function Testing (PFT)",
    detail: "To determine if employees can safely wear respirators.",
  },
  {
    title: "Audiograms",
    detail: "Baseline and annual hearing tests for noise-exposed workers.",
  },
  {
    title: "Vision Screening",
    detail: "Snellen, Ishihara, and Titmus testing.",
  },
];

export default function RegulatoryEvaluationsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-end md:items-center overflow-hidden"
        aria-label="Regulatory Evaluations"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Clinical screening equipment representing OSHA and DOT regulatory evaluations"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/50"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
              Employer Solutions
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Compliance with OSHA and DOT.
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Respirator fit testing, pulmonary function testing (PFT),
              audiograms (hearing tests), and TB screening—all in one place for
              Indianapolis employers.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <main className="lg:col-span-2 space-y-10">
            <section aria-labelledby="services-heading">
              <h2
                id="services-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
              >
                What We Offer
              </h2>
              <div className="space-y-6">
                {services.map(({ title, desc, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-medical"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Compliance Services – icon-based list */}
            <section aria-labelledby="compliance-heading">
              <h2
                id="compliance-heading"
                className="text-2xl font-bold text-slate-900 mb-6"
              >
                Compliance Services (Detailed)
              </h2>
              <ul className="rounded-2xl border border-slate-200 bg-white p-6 shadow-medical space-y-4">
                {complianceServices.map(({ title, detail }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <span className="font-semibold text-slate-900">{title}</span>
                      <p className="text-slate-600 text-sm mt-0.5">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <p className="text-slate-600 leading-relaxed">
              DOT physicals ($95) and certified medical examinations for
              commercial drivers are also available. We help you meet
              regulatory requirements with clear documentation and consistent
              service.
            </p>
          </main>
          <aside className="lg:col-span-1">
            <EmployerSidebar />
          </aside>
        </div>
      </div>

      {/* B2B Footer CTA */}
      <section className="border-t border-slate-200 bg-slate-900 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Talk to a Business Development Expert
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Schedule respirator fit testing, PFT, audiograms, or TB screening
            for your workforce.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
