import type { Metadata } from "next";
import Link from "next/link";
import { PricingGrid } from "@/components/PricingGrid";

export const metadata: Metadata = {
  title: "Pricing & Self-Pay Rates",
  description:
    "Transparent pricing for sports physicals ($35), DOT physicals ($95), pre-employment physicals ($50), and TB skin tests ($25). No appointment needed. We accept most major insurance.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-4xl py-12 md:py-16 px-4">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Transparent Pricing
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Clear rates for self-pay and information on accepted insurance. No
            hidden fees.
          </p>
        </header>

        <PricingGrid />

        {/* Check Insurance CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-medical text-center">
          <p className="text-slate-700 font-medium mb-2">
            Not sure if you&apos;re covered?
          </p>
          <p className="text-slate-600">
            Call us at{" "}
            <a
              href="tel:+13179566288"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              (317) 956-6288
            </a>
          </p>
        </div>

        <p className="mt-8">
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
