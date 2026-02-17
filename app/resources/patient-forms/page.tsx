import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ExternalLink,
  ClipboardList,
  Building2,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { FormDownloadCard } from "@/components/forms/FormDownloadCard";

export const metadata: Metadata = {
  title: "Patient & Employer Forms | Urgent Care Indy",
  description:
    "Download patient forms, employer authorization, and DOT/CDL paperwork. New patient registration, HIPAA privacy policy, FMCSA medical form. Pre-register online to reduce paper waste.",
};

const dotWhatToBring = [
  "Valid photo ID (driver's license or state ID)",
  "Complete list of current medications (names and dosages)",
  "CPAP compliance report (if you use a CPAP for sleep apnea)",
  "Eyeglasses or contact lenses (if required for driving)",
  "Medical release from your doctor for any ongoing conditions, if applicable",
];

const formCategories = [
  {
    category: "General Patient Forms",
    icon: ClipboardList,
    forms: [
      {
        name: "New Patient Registration",
        description: "Basic info and medical history for your first visit.",
        fileUrl: "/forms/new-patient.pdf",
      },
      {
        name: "Privacy Policy (HIPAA)",
        description: "Our commitment to protecting your health information.",
        fileUrl: "/forms/hipaa.pdf",
      },
    ],
  },
  {
    category: "Occupational / Employer Forms",
    icon: Building2,
    forms: [
      {
        name: "Employer Authorization for Treatment",
        description: "Authorizes treatment and billing for workplace visits.",
        fileUrl: "/forms/auth.pdf",
        note: "Required for all workplace drug screens and occupational visits. Have your supervisor sign before sending employees.",
      },
    ],
  },
  {
    category: "DOT / CDL Paperwork",
    icon: Truck,
    forms: [
      {
        name: "FMCSA Medical Examination Report Form",
        description: "Official MCSA-5875 form for the DOT physical exam.",
        fileUrl: "/forms/fmcsa-medical.pdf",
      },
      {
        name: "Pre-Registration Checklist",
        description: "What to bring and how to prepare for your DOT physical.",
        fileUrl: "/forms/dot-checklist.pdf",
      },
    ],
  },
];

export default function PatientFormsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero – Pexels imagery (medical / office) */}
      <DynamicHero
        query="modern medical clinic office"
        title="Patient & Employer Forms"
        subtitle="Save time by downloading forms or pre-registering online before you arrive."
      />
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        {/* Intro */}
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16">
          Download PDFs below or use our secure digital portal to go paperless.
        </p>

        {/* Online Pre-Registration – prominent */}
        <section
          className="bg-white border-2 border-teal-500 rounded-2xl p-6 md:p-8 mb-12 md:mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          aria-labelledby="prereg-heading"
        >
          <div className="flex gap-4 items-center">
            <div className="bg-teal-100 p-3 rounded-full text-teal-600 shrink-0">
              <ExternalLink size={24} aria-hidden />
            </div>
            <div>
              <h2
                id="prereg-heading"
                className="text-xl font-bold text-slate-900"
              >
                Online Pre-Registration
              </h2>
              <p className="text-slate-600 mt-1">
                Complete your intake digitally and reduce paper waste. Choose
                DOT physical, sports physical, or new patient registration.
              </p>
            </div>
          </div>
          <Link
            href="/resources/forms"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 shrink-0"
          >
            <ExternalLink size={20} aria-hidden />
            Start Online Registration
          </Link>
        </section>

        {/* Three-column Resource Hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {formCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {cat.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.forms.map((form) => (
                    <FormDownloadCard
                      key={form.name}
                      title={form.name}
                      description={form.description}
                      fileUrl={form.fileUrl}
                      note={form.note}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* DOT: What to Bring */}
        <section
          className="mt-14 md:mt-16 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm"
          aria-labelledby="dot-bring-heading"
        >
          <h2
            id="dot-bring-heading"
            className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"
          >
            <Truck className="h-5 w-5 text-teal-600" aria-hidden />
            What to Bring (DOT Drivers)
          </h2>
          <p className="text-slate-600 mb-4">
            High-volume service at our clinic. Bring the following to speed your
            visit:
          </p>
          <ul className="space-y-2" role="list">
            {dotWhatToBring.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-start text-slate-700"
              >
                <CheckCircle2
                  className="h-5 w-5 text-teal-600 shrink-0 mt-0.5"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Support Note */}
        <div className="mt-12 md:mt-16 text-center text-slate-500 border-t border-slate-200 pt-8">
          <p className="text-sm md:text-base">
            Can&apos;t find the form you need? Call us at{" "}
            <a
              href="tel:+13179566288"
              className="font-bold text-slate-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            >
              (317) 956-6288
            </a>{" "}
            and we&apos;ll help you out.
          </p>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/resources/forms"
            className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
          >
            ← Back to Patient Resources
          </Link>
        </p>
      </div>
    </div>
  );
}
