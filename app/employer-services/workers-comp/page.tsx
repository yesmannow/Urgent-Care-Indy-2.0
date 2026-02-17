import Link from "next/link";
import { CheckCircle2, Phone, FileText } from "lucide-react";

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
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <span className="text-teal-400 font-bold uppercase tracking-wider text-sm">
            Employer Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 max-w-3xl">
            {PAGE_DATA.title}
          </h1>
          <p className="text-slate-300 text-xl mt-4 max-w-2xl">{PAGE_DATA.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-[-40px] grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What to Expect</h2>
          <ul className="space-y-4 mb-8">
            {PAGE_DATA.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 shrink-0" />
                <span className="text-slate-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-slate-900 mb-3">Related Clinical Services</h3>
            <div className="flex flex-wrap gap-2">
              {PAGE_DATA.ancillaryServices.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <hr className="my-8 border-slate-100" />
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">{PAGE_DATA.mainContent}</p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/employer-services/contact"
                className="flex items-center justify-center w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-colors shadow-sm"
              >
                {PAGE_DATA.cta}
              </Link>
              <a
                href="tel:317-956-6288"
                className="flex items-center justify-center w-full py-3 bg-white border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 rounded-lg font-bold transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" /> (317) 956-6288
              </a>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Need Authorization Forms?</h3>
            <p className="text-blue-700 text-sm mb-4">
              Download our standard authorization form to send with your employee.
            </p>
            <Link
              href="/employer-services/resources"
              className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              <FileText className="w-4 h-4" /> Download PDF
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

