import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProviderTeam } from "@/components/clinic/ProviderTeam";
import { ValuesGrid } from "@/components/clinic/ValuesGrid";
import { DivisionCards } from "@/components/clinic/DivisionCards";

export const metadata: Metadata = {
  title: "About Our Clinic | Family-Owned, Faith-Rooted | Urgent Care Indy",
  description:
    "Family-owned, faith-rooted urgent care dedicated to Indianapolis since 2007. Compassion, devotion, and respect at the heart of everything we do.",
};

export default function OurClinicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        aria-label="About Our Clinic"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (2).jpg"
            alt="Urgent Care Indy clinic interior with clean, modern waiting area"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/50"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              A Different Kind of Urgent Care.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200">
              Family-owned, faith-rooted, and dedicated to Indianapolis since
              2007.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our space (interior + exterior) */}
      <section className="container py-12 md:py-16 border-b border-slate-200" aria-labelledby="our-space-heading">
        <h2 id="our-space-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Our Space
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-medical">
            <Image
              src="/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (5).jpg"
              alt="Urgent Care Indy interior, waiting area"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-medical">
            <Image
              src="/images/clinic/exterior/Screenshot of UrgentCare Indy - Google Maps (7).jpg"
              alt="Urgent Care Indy building exterior"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. Values Feature Section */}
      <section className="container py-12 md:py-16 border-b border-slate-200">
        <ValuesGrid />
      </section>

      {/* 4. Pike Medical Difference (Internal Linking Hub) */}
      <section
        id="pike-medical"
        className="container py-12 md:py-16 border-b border-slate-200"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          The Pike Medical Difference
        </h2>
        <div className="max-w-3xl prose prose-slate">
          <p className="text-slate-600 text-lg leading-relaxed">
            Urgent Care Indy is part of the{" "}
            <strong className="text-slate-900">Pike Medical Consultants</strong>{" "}
            family. Our same values of compassion, devotion, and respect guide
            every division—from urgent care to occupational health and beyond.
          </p>
          <p className="text-slate-600 mt-4">
            <a
              href="#divisions"
              className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              Learn about our other divisions →
            </a>
          </p>
        </div>
      </section>

      {/* 5. Team Integration */}
      <section className="container py-12 md:py-16 border-b border-slate-200">
        <ProviderTeam />
      </section>

      {/* Bottom CTA */}
      <section className="container py-12 md:py-16">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10 text-center">
          <p className="text-lg font-semibold text-slate-900 mb-4">
            Ready to visit?
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Check our Wait Times
          </Link>
        </div>
      </section>

      {/* Wellness Ecosystem – sister clinics (Pike Medical divisions) */}
      <DivisionCards />
    </div>
  );
}
