import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, FlaskConical, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Workplace Wellness & Compliance | Occupational Health",
  description:
    "DOT physicals ($95), drug screens (5-panel, 10-panel, eScreen), workers comp injury management. Certified providers. Download employer authorization form.",
};

const SERVICES = [
  {
    title: "DOT Physicals",
    price: "$95",
    note: "Certified Providers",
    icon: ShieldCheck,
    description:
      "FMCSA-certified medical examinations for commercial drivers. Fast turnaround, clear documentation for your fleet.",
  },
  {
    title: "Drug Screens",
    price: null,
    note: "5-panel, 10-panel, eScreen",
    icon: FlaskConical,
    description:
      "Pre-employment, post-accident, and random testing. Chain-of-custody assured. DOT and non-DOT panels available.",
  },
  {
    title: "Workers Comp Injury Management",
    price: null,
    note: "Return-to-Work focus",
    icon: Briefcase,
    description:
      "On-site evaluation, imaging, and treatment. We prioritize timely care and clear work-status documentation.",
  },
];

export default function OccupationalHealthPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero – Business/Corporate tone */}
      <section
        className="bg-slate-800 text-white py-16 md:py-24"
        aria-label="Occupational Health"
      >
        <div className="container max-w-4xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-3">
            Occupational Health
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Workplace Wellness & Compliance
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl">
            Keep your workforce safe, compliant, and productive. DOT physicals,
            drug screening, and workers comp injury management—all under one
            roof.
          </p>
        </div>
      </section>

      {/* Services – structured, formal */}
      <section
        className="container max-w-4xl px-4 py-12 md:py-16"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>
        <ul className="space-y-6">
          {SERVICES.map(({ title, price, note, icon: Icon, description }) => (
            <li
              key={title}
              className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    {price && (
                      <span className="text-lg font-bold text-primary-blue">
                        {price}
                      </span>
                    )}
                  </div>
                  {note && (
                    <p className="text-sm font-medium text-slate-500 mt-0.5">
                      {note}
                    </p>
                  )}
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA – Employer Authorization Form */}
      <section
        className="border-t border-slate-200 bg-white py-12 md:py-16"
        aria-labelledby="auth-form-heading"
      >
        <div className="container max-w-4xl px-4 text-center">
          <h2
            id="auth-form-heading"
            className="text-2xl font-bold text-slate-900 mb-2"
          >
            Employer Authorization Form
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Download the form your team needs to authorize employee visits for
            physicals, drug screens, or injury care.
          </p>
          <Link
            href="/forms/auth.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-blue text-white font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 transition-colors"
          >
            <FileText className="h-5 w-5" aria-hidden />
            Download Authorization Form
          </Link>
        </div>
      </section>

      <div className="container max-w-4xl px-4 pb-12">
        <Link
          href="/services"
          className="text-primary-blue font-medium hover:underline"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
