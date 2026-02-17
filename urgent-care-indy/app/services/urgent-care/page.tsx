import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AilmentGrid } from "@/components/services/AilmentGrid";
import { PricingCard } from "@/components/services/PricingCard";

export const metadata: Metadata = {
  title: "Urgent Care Services | Walk-Ins Welcome | Urgent Care Indy",
  description:
    "Illness, injury, and wellness care—no appointment needed. $30 sports physicals, transparent pricing. Strep, flu, sprains, stitches, and more.",
};

export default function UrgentCarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with urgent-care imagery */}
      <section
        className="relative min-h-[40vh] flex items-center overflow-hidden"
        aria-label="Urgent Care Services"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-14 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Urgent Care Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200">
              Minor injuries and illnesses, no appointment needed. Walk-ins
              welcome.
            </p>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="container py-12 md:py-16 border-b border-slate-200">
        <AilmentGrid />
      </section>

      {/* Transparent Pricing – $30 Sports Physical (door opener) + $95 DOT */}
      <section
        className="container py-12 md:py-16 border-b border-slate-200"
        aria-labelledby="pricing-heading"
      >
        <h2
          id="pricing-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
        >
          Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <PricingCard
            title="Sports Physicals"
            price="$30"
            description="Fast, easy, and affordable. Get your student athlete ready for the season."
            features={["Walk-ins Welcome", "Paperwork Completed"]}
            ctaHref="/schedule"
            ctaLabel="Save Your Spot"
            secondaryLink={{
              href: "/resources/forms/sports-physical",
              label: "Fill Out Student Form Online",
            }}
            popular
            emphasis="primary"
          />
          <PricingCard
            title="DOT Physicals"
            price="$95"
            description="Certified DOT exams to keep commercial drivers compliant and on the road."
            features={["Certified Medical Examiner", "Same-day results"]}
            ctaHref="/schedule"
            ctaLabel="Save Your Spot"
            emphasis="secondary"
          />
        </div>
        <p className="mt-6 text-slate-600 text-sm md:text-base">
          We offer affordable self-pay rates for all other services.
        </p>
      </section>

      {/* Safety & Conversion CTAs */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl space-y-6">
          <p className="text-lg font-semibold text-slate-900">
            Not sure if you need Urgent Care?
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Use Our Triage Tool
          </Link>
          <p className="text-slate-600 pt-4 border-t border-slate-200">
            Need ongoing care?{" "}
            <a
              href="https://primarycareindy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              Visit Primary Care Indy
            </a>
          </p>
        </div>
      </section>

      <section className="container pb-12">
        <Link
          href="/services"
          className="text-primary-blue font-medium hover:underline"
        >
          ← All services
        </Link>
      </section>
    </div>
  );
}
