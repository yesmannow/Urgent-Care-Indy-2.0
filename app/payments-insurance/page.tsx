import type { Metadata } from "next";
import Link from "next/link";
import { InsuranceSection } from "@/components/insurance/InsuranceSection";

export const metadata: Metadata = {
  title: "Insurance & Financial Guide | Urgent Care Indy",
  description:
    "Transparency is our policy. In-network insurance, medical sharing, self-pay rates. No hidden fees.",
};

export default function PaymentsInsurancePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Insurance & Financial Guide
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Transparency is our policy. No hidden fees.
          </p>
        </header>

        <InsuranceSection />

        {/* Self-Pay Pricing – summary + link to full tiers */}
        <section
          className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-100 p-8"
          aria-labelledby="self-pay-heading"
        >
          <h2
            id="self-pay-heading"
            className="text-2xl font-bold text-slate-900 mb-4"
          >
            Self-Pay Pricing
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            No insurance? No problem. We offer affordable self-pay rates for
            office visits and common services. Office visits start at $100 for
            common conditions and injuries (Level 1); tiered pricing applies for
            suturing, STI visits, pelvic exams, and more. Ask our front desk for
            a Good Faith Estimate before your visit.
          </p>
          <p className="text-slate-600 leading-relaxed">
            <Link
              href="/patient-resources/pricing#self-pay-tiers"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              View full self-pay tiers and fixed-price services →
            </Link>
          </p>
        </section>

        <p className="mt-10">
          <Link
            href="/"
            className="text-primary-blue font-medium hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
