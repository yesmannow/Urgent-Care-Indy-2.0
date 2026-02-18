import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { EmployerSiloLayout } from "@/components/services/employer/EmployerSiloLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildFaqPageJsonLd, buildMedicalBusinessJsonLd } from "@/lib/seo/structuredData";

const PAGE_DATA = {
  title: "DOT Physicals (FMCSA)",
  subtitle: "Certified Examiners On-Staff - Walk-In Friendly and Fast Paperwork",
  features: [
    "FMCSA certified medical examiners",
    "Clear guidance for drivers with common medical conditions",
    "Documentation ready for NRCME reporting workflows",
    "Fast turnaround to get drivers back on the road",
  ],
  mainContent:
    "Keep your fleet compliant and moving. Our certified examiners complete DOT physicals with efficient workflows and clear next steps, including when additional documentation may be required.",
  ancillaryServices: ["Vision Screening", "Urinalysis", "Vitals & History", "Follow-Up Guidance"],
  cta: "Book a DOT Physical",
};

export default function Page() {
  const pagePath = "/employer-services/dot-physicals";
  const businessJsonLd = buildMedicalBusinessJsonLd({
    pagePath,
    pageName: "DOT Physicals (FMCSA)",
    services: [
      { name: "DOT Physical (FMCSA)" },
      { name: "Vision Screening" },
      { name: "Urinalysis" },
      { name: "Vitals & History" },
    ],
  });
  const faqJsonLd = buildFaqPageJsonLd({
    pagePath,
    questions: [
      {
        question: "Do you have FMCSA-certified DOT physical examiners?",
        answer:
          "Yes—DOT physicals are performed by certified medical examiners. Walk-in friendly depending on volume.",
      },
      {
        question: "What should drivers bring to a DOT physical?",
        answer:
          "Bring a valid ID, any required paperwork, and information about current medications and relevant medical history.",
      },
      {
        question: "How fast is the paperwork turnaround?",
        answer:
          "Many drivers receive documentation the same day, depending on required forms and any needed follow-up information.",
      },
    ],
  });

  return (
    <>
      <JsonLdScript data={businessJsonLd} />
      <JsonLdScript data={faqJsonLd} />
      <EmployerSiloLayout
        title={PAGE_DATA.title}
        subtitle={PAGE_DATA.subtitle}
        description={PAGE_DATA.mainContent}
        imageSrc="/images/employers/dot-truck.jpg"
        imageAlt="Commercial driver and logistics scene representing DOT physicals"
        imageQueries={["truck driver semi truck", "logistics fleet manager"]}
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-extrabold text-slate-900">What to Expect</h2>
            <Link
              href="/employer-services/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              {PAGE_DATA.cta}
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAGE_DATA.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" aria-hidden />
                <p className="text-slate-800 font-semibold leading-snug">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6">
            <h3 className="font-extrabold text-slate-900 mb-3">Related Clinical Services</h3>
            <div className="flex flex-wrap gap-2">
              {PAGE_DATA.ancillaryServices.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-semibold"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
            <h3 className="font-extrabold text-blue-900 mb-2">Need Authorization Forms?</h3>
            <p className="text-blue-800/80 text-sm mb-4">
              Download our standard authorization form to send with your driver.
            </p>
            <Link
              href="/employer-services/resources"
              className="text-sm font-extrabold text-blue-700 hover:underline inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
            >
              <FileText className="w-4 h-4" aria-hidden /> Download PDF
            </Link>
          </div>
        </div>
      </EmployerSiloLayout>
    </>
  );
}
