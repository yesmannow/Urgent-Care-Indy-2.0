import type { Metadata } from "next";
import Link from "next/link";
import { FileText, FileStack, ArrowRight, ExternalLink } from "lucide-react";
import { EmployerSidebar } from "@/components/ui/EmployerSidebar";

export const metadata: Metadata = {
  title: "Resources & Forms | Employer B2B | Urgent Care Indy",
  description:
    "Frictionless B2B operations. Download treatment authorization form, DOT regulations, OSHA links, and employer resources for Indianapolis businesses.",
};

const pdfResources = [
  { title: "Employer Authorization (General)", href: "/forms/auth.pdf", primary: false },
];

const complianceLinks = [
  { title: "FMCSA DOT Regulations", href: "https://www.fmcsa.dot.gov/", description: "Federal Motor Carrier Safety Administration" },
  { title: "OSHA Recordkeeping", href: "https://www.osha.gov/recordkeeping", description: "OSHA injury and illness recordkeeping" },
  { title: "ODAPC (Drug & Alcohol)", href: "https://www.transportation.gov/odapc", description: "Office of Drug & Alcohol Policy & Compliance" },
];

export default function ResourcesFormsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative py-16 md:py-24 bg-slate-900"
        aria-label="Resources & Forms"
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Employer Solutions
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Resources & Forms
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Frictionless B2B operations. Download forms, access regulations,
            and get your team set up quickly.
          </p>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <main className="lg:col-span-2 space-y-10">
            {/* Employer Authorization Form – absolute center of attention */}
            <section
              className="rounded-2xl border-2 border-blue-600 bg-blue-600 p-8 md:p-10 shadow-xl text-center"
              aria-labelledby="employer-auth-heading"
            >
              <h2
                id="employer-auth-heading"
                className="text-2xl md:text-3xl font-bold text-white mb-3"
              >
                Employer Authorization Form
              </h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Authorize employee visits for physicals, drug screens, or injury care. Download once and use for your entire team.
              </p>
              <Link
                href="/forms/auth.pdf"
                className="inline-flex items-center justify-center gap-3 min-h-[56px] px-10 py-4 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                <FileText className="h-8 w-8 shrink-0" aria-hidden />
                Download Employer Authorization Form
              </Link>
            </section>

            {/* Compliance Links grid – external, open in new tab */}
            <section aria-labelledby="compliance-links-heading">
              <h2
                id="compliance-links-heading"
                className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"
              >
                <ExternalLink className="h-6 w-6 text-blue-600" aria-hidden />
                Compliance Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {complianceLinks.map(({ title, href, description }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-600/30 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    <span className="font-semibold text-slate-900">{title}</span>
                    <span className="text-sm text-slate-500 mt-1">{description}</span>
                    <ExternalLink className="h-4 w-4 text-slate-400 mt-2 self-start" aria-hidden />
                  </a>
                ))}
              </div>
            </section>

            {/* Other forms */}
            <section aria-labelledby="forms-heading">
              <h2
                id="forms-heading"
                className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"
              >
                <FileStack className="h-6 w-6 text-blue-600" aria-hidden />
                Other Forms & Documents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pdfResources.map(({ title, href, primary }) => (
                  <Link
                    key={title + href}
                    href={href}
                    className={`flex items-center gap-3 rounded-xl border p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                      primary
                        ? "border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-100"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <FileText className="h-5 w-5 shrink-0" aria-hidden />
                    <span className="font-medium">{title}</span>
                  </Link>
                ))}
              </div>
            </section>
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
            New account setup, bulk form needs, or questions about our B2B
            process—we&apos;re here to help.
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
