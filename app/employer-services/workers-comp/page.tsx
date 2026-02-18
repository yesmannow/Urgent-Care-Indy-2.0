import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { EmployerSiloLayout } from "@/components/services/employer/EmployerSiloLayout";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildFaqPageJsonLd, buildMedicalBusinessJsonLd } from "@/lib/seo/structuredData";

const PAGE_DATA = {
  title: "Workers' Compensation & Injury Care",
  subtitle: "Aggressive Return-to-Work Protocols for Indianapolis Businesses",
  features: [
    "Direct communication with insurance adjusters",
    "Digital status updates immediately after the visit",
    "On-site X-Ray to reduce downtime",
    "Modified duty coordination and documentation",
  ],
  mainContent:
    "Accidents happen. When they do, you need a medical partner that understands workers’ compensation, documentation, and the urgency of getting employees safely back to work. Our team treats common workplace injuries on-site and provides clear visit summaries and restrictions so HR and supervisors can act fast.",
  ancillaryServices: ["Laceration Repair", "Eye Injury Treatment", "Burn Care", "Tetanus Boosters"],
  cta: "Report an Injury Now",
};

export default function Page() {
  const pagePath = "/employer-services/workers-comp";
  const businessJsonLd = buildMedicalBusinessJsonLd({
    pagePath,
    pageName: "Workers' Compensation & Injury Care",
    services: [
      { name: "Workers' Compensation Injury Evaluation" },
      { name: "Work Status Documentation" },
      { name: "Return-to-Work Coordination" },
      { name: "On-site X-Ray (when appropriate)" },
    ],
  });
  const faqJsonLd = buildFaqPageJsonLd({
    pagePath,
    questions: [
      {
        question: "Do you accept walk-ins for workplace injuries?",
        answer:
          "Yes—walk-ins are welcome for many non-emergency injuries. If there is a life-threatening emergency, call 911 or go to the nearest ER.",
      },
      {
        question: "Can you provide work restrictions and documentation?",
        answer:
          "Yes—we provide clear work-status documentation and can support modified duty and return-to-work planning based on the visit.",
      },
      {
        question: "Do you coordinate with adjusters and employers?",
        answer:
          "We support timely communication and documentation workflows so employers and adjusters can make decisions quickly.",
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
        imageSrc="/images/employers/workplace-injuries.webp"
        imageAlt="Workplace safety scene representing workers' compensation injury care"
        imageQueries={["construction worker hard hat safety vest", "workplace injury care"]}
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
