import Link from "next/link";
import { FileText, HelpCircle } from "lucide-react";

export function PatientResourceSection() {
  return (
    <section
      className="py-12 md:py-16 bg-slate-50 border-t border-slate-200"
      aria-labelledby="patient-resources-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          id="patient-resources-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
        >
          Patient Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/resources/forms"
            className="group flex items-center gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
              <FileText className="h-6 w-6 text-teal-500" aria-hidden />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700">
                Patient Forms
              </h3>
              <p className="text-slate-600 text-sm mt-0.5">
                Pre-register online for your visit.
              </p>
            </div>
          </Link>
          <Link
            href="/resources/flu-faq"
            className="group flex items-center gap-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
              <HelpCircle className="h-6 w-6 text-teal-500" aria-hidden />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-700">
                Flu Season FAQ
              </h3>
              <p className="text-slate-600 text-sm mt-0.5">
                2025–26 flu shot info, pricing, and hours.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
