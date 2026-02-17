import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { OccMedFeature } from "@/components/services/OccMedFeature";

export const metadata: Metadata = {
  title: "Occupational Health & Employer Services | Urgent Care Indy",
  description:
    "Keep your workforce healthy, compliant, and productive. DOT physicals, drug screening, workers' comp. Fast access to care means less downtime.",
};

const occMedFeatures = [
  {
    title: "Drug & Alcohol Screening",
    description:
      "Comprehensive panels for pre-employment, post-accident, and random testing. We handle both DOT and Non-DOT protocols with chain-of-custody assurance.",
    imageSrc: "/images/services/diagnostics/drug testing kit.jpg",
    imageAlt: "Drug testing and screening services for employers",
    reversed: false,
  },
  {
    title: "Employee Health & Biometrics",
    description:
      "Proactive health monitoring to reduce insurance premiums. We offer blood pressure monitoring, diabetes screening, and annual physicals.",
    imageSrc: "/images/services/diagnostics/blood pressure.jpg",
    imageAlt: "Employee health and biometric screening",
    reversed: true,
  },
  {
    title: "Workers' Comp & Injury Management",
    description:
      "We prioritize 'Return-to-Work' strategies. With on-site X-Ray and suturing, we treat injuries effectively without the cost of the ER.",
    imageSrc: "/images/services/diagnostics/xray-service.jpg",
    imageAlt: "On-site X-ray and injury care for workers' comp",
    reversed: false,
  },
];

export default function EmployerServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        aria-label="Employer Services"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/occ-med/occupational health.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-slate-900/70"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-20 md:py-28 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            Keep Your Workforce Healthy, Compliant, and Productive.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
            Your local partner for DOT Physicals, Drug Screening, and
            Workers&apos; Comp. Fast access to care means less downtime for your
            team.
          </p>
        </div>
      </section>

      {/* 2. OccMed Suite – 3 feature blocks */}
      <section
        className="bg-white"
        aria-labelledby="occmed-suite-heading"
      >
        <h2 id="occmed-suite-heading" className="sr-only">
          Occupational Medicine Suite
        </h2>
        <div className="container mx-auto px-4 max-w-6xl pt-4">
          <p className="text-slate-600 text-sm md:text-base">
            Drivers can pre-register here:{" "}
            <Link
              href="/resources/forms/dot-physical"
              className="text-primary-blue font-semibold hover:underline"
            >
              Fill Out DOT Form Online
            </Link>
            .
          </p>
        </div>
        {occMedFeatures.map((feature) => (
          <OccMedFeature
            key={feature.title}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            reversed={feature.reversed}
          />
        ))}
      </section>

      {/* 3. Double CTA – Get Started */}
      <section
        className="py-16 md:py-24 bg-slate-50"
        aria-labelledby="get-started-heading"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <h2
            id="get-started-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: New Partners (Lead Gen) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-medical">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Set Up a Corporate Account
              </h3>
              <p className="text-slate-600 mb-6">
                Get preferred pricing and streamlined billing.
              </p>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center min-h-[48px] bg-primary-blue text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                Request a Quote
              </Link>
            </div>

            {/* Card 2: Current Partners (Utility) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-medical">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Manage Your Employees
              </h3>
              <p className="text-slate-600 mb-6">
                Access results and authorization forms instantly.
              </p>
              <Link
                href="/portal"
                className="flex w-full items-center justify-center min-h-[48px] border-2 border-slate-900 text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-slate-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Employer Portal Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
