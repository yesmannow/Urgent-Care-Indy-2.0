import Link from "next/link";
import { CreditCard, ShieldCheck, ArrowRight } from "lucide-react";

const insuranceNames = ["Anthem", "UnitedHealthcare", "Cigna", "Aetna"];

type Props = {
  /** Optional starting price for this service (e.g. "$110", "$37") */
  servicePrice?: string;
  /** Optional CTA text override */
  pricingCtaText?: string;
  /** Optional id for anchor links (e.g. sticky nav) */
  id?: string;
};

export function InsurancePricingSection({
  servicePrice = "$110",
  pricingCtaText = "View Full Pricing Menu",
  id = "insurance-pricing",
}: Props) {
  return (
    <section
      id={id}
      className="py-16 bg-slate-50 border-y border-slate-100 scroll-mt-24"
      aria-labelledby="insurance-pricing-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="insurance-pricing-heading" className="sr-only">
          Insurance and self-pay pricing
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Insurance */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-teal-500 shrink-0" size={28} aria-hidden />
              <h3 className="text-2xl font-bold text-slate-900">Insurance We Accept</h3>
            </div>
            <p className="text-slate-600 mb-8 font-sans">
              We are in-network with most major providers. Most preventative services are covered 100% by your plan.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {insuranceNames.map((name) => (
                <div
                  key={name}
                  className="h-12 flex items-center justify-center font-bold text-slate-500 border border-slate-200 rounded-xl bg-white text-sm"
                >
                  {name}
                </div>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/insurance"
                className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
              >
                View Full Insurance List
                <ArrowRight size={18} className="text-teal-500" aria-hidden />
              </Link>
            </p>
          </div>

          {/* Self-Pay */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-teal-500 shrink-0" size={28} aria-hidden />
              <h3 className="text-2xl font-bold text-slate-900">Transparent Self-Pay</h3>
            </div>
            <p className="text-slate-600 mb-6 font-sans">
              No insurance? No problem. We offer flat-rate pricing for visits and procedures.
            </p>
            <div className="flex items-baseline gap-2 mb-8 text-slate-900">
              <span className="text-4xl font-bold">{servicePrice}</span>
              <span className="text-slate-500 font-medium">starting price</span>
            </div>
            <Link
              href="/patient-resources/pricing"
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            >
              {pricingCtaText}
              <ArrowRight size={18} className="text-teal-500" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
