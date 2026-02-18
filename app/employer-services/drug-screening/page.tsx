import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { EmployerSiloLayout } from "@/components/services/employer/EmployerSiloLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildFaqPageJsonLd, buildMedicalBusinessJsonLd } from "@/lib/seo/structuredData";

const PAGE_DATA = {
  title: "Drug & Alcohol Screening",
  subtitle: "Rapid, Compliant Testing Programs for Indianapolis Employers",
  features: [
    "5/10/12-panel urine drug screens",
    "Chain-of-custody workflows built for compliance",
    "eScreen and lab confirmations available",
    "Clear reporting protocols for designated HR contacts",
  ],
  mainContent:
    "Build a screening program that protects your workforce and reduces risk. We support common occupational testing workflows and coordinate reporting based on your organization’s policies and designated recipients.",
  ancillaryServices: ["Breath Alcohol Testing", "Rapid Screening", "Lab Confirmation", "Random Testing Support"],
  cta: "Set Up Screening",
};

export default function Page() {
  const pagePath = "/employer-services/drug-screening";
  const businessJsonLd = buildMedicalBusinessJsonLd({
    pagePath,
    pageName: "Drug & Alcohol Screening",
    services: [
      { name: "5/10/12-panel Drug Screening" },
      { name: "Chain-of-Custody Collection" },
      { name: "Lab Confirmation (when needed)" },
      { name: "Breath Alcohol Testing" },
    ],
  });
  const faqJsonLd = buildFaqPageJsonLd({
    pagePath,
    questions: [
      {
        question: "Do you offer DOT and non-DOT drug screening?",
        answer:
          "Yes—we support common occupational testing workflows for DOT and non-DOT programs, including compliant chain-of-custody processes.",
      },
      {
        question: "Do you support random testing programs?",
        answer:
          "We can support random and scheduled screening workflows depending on your program needs and reporting requirements.",
      },
      {
        question: "How are results reported?",
        answer:
          "Reporting is coordinated based on your organization’s designated contacts and compliance requirements.",
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
        imageSrc="/images/services/diagnostics/drug testing kit.jpg"
        imageAlt="Drug screening collection supplies arranged for compliant workplace testing"
        imageQueries={["laboratory technician testing", "blood test vials"]}
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
              Download our standard authorization form to send with your employee.
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
