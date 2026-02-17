import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";
import { DynamicHero } from "@/components/ui/DynamicHero";

// When adding a form list with FormDownloadCard, use PatientForm from @/components/forms/FormDownloadCard and pass note={form.note ?? undefined} so the build passes.

export const metadata: Metadata = {
  title: "Patient & Employer Forms | Urgent Care Indy",
  description:
    "Pre-register online before your visit. PDF forms will be available soon. Call (317) 956-6288 in the meantime.",
};

export default function PatientFormsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DynamicHero
        query="modern medical clinic office"
        title="Patient & Employer Forms"
        subtitle="Pre-register online to save time. PDF forms will be available soon."
      />
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-2xl">
        {/* Coming soon – no PDF downloads until forms are ready */}
        <section
          className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-8 text-center"
          aria-labelledby="forms-notice-heading"
        >
          <h2
            id="forms-notice-heading"
            className="text-xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-2"
          >
            <FileText className="h-5 w-5 text-teal-600" aria-hidden />
            PDF Forms Coming Soon
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Downloadable patient and employer forms will be available here soon.
            In the meantime, use our online pre-registration below or call us at{" "}
            <a
              href="tel:+13179566288"
              className="font-semibold text-slate-900 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            >
              (317) 956-6288
            </a>{" "}
            if you need a form.
          </p>
        </section>

        {/* Online Pre-Registration – keep this, it works */}
        <section
          className="bg-white border-2 border-teal-500 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
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
                Complete your intake digitally. Choose DOT physical, sports
                physical, or new patient registration.
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
