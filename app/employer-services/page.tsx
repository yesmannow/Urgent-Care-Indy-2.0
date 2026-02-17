import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  HardHat,
  FileText,
  Clock,
  DollarSign,
  MessageSquare,
  Phone,
  ArrowRight,
} from "lucide-react";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";

export const metadata: Metadata = {
  title: "Occupational Health & Employer Services | Indianapolis",
  description:
    "DOT physicals and drug testing in Indy. Workers' comp, return-to-work focus, on-site X-ray. Fast turnaround, cost savings vs. ER. Call 317-956-6288 or request a quote.",
};

const employerHighlights = [
  {
    title: "DOT Physicals",
    desc: "Certified FMCSA examiners to keep your drivers on the road.",
    icon: Truck,
    link: "#physicals",
  },
  {
    title: "Drug Screening",
    desc: "5, 10, and 12-panel tests with rapid results available.",
    icon: ShieldCheck,
    link: "#drug-testing",
  },
  {
    title: "Workers' Comp",
    desc: "Aggressive return-to-work focus for workplace injuries.",
    icon: HardHat,
    link: "#workers-comp",
  },
];

const whyPartnerItems = [
  {
    title: "Fast Turnaround",
    desc: "Average door-to-door time is under 60 minutes. Less downtime for your team.",
    icon: Clock,
  },
  {
    title: "Cost Savings vs. ER",
    desc: "We cost significantly less than an Emergency Room visit for non–life-threatening injuries.",
    icon: DollarSign,
  },
  {
    title: "Dedicated Account Management",
    desc: "Status updates to employers immediately after the visit. Direct communication with HR and adjusters.",
    icon: MessageSquare,
  },
];

export default function EmployerServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero – Pexels imagery (occupational health / modern office) */}
      <section className="relative min-h-[50vh]" aria-label="Employer Services">
        <DynamicHero
          query="occupational health modern office"
          title="Keep Your Workforce Healthy, Compliant, and Productive."
          subtitle="Fast, reliable care for your team. From DOT physicals to injury management, we help Indianapolis businesses reduce downtime and stay compliant."
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-8">
          <div className="container px-4 max-w-6xl flex flex-wrap gap-4">
            <a
              href="tel:+13179566288"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Phone size={20} aria-hidden />
              Set Up Corporate Account
            </a>
            <Link
              href="#forms"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl font-bold transition-colors min-h-[48px] border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <FileText size={20} aria-hidden />
              Fill Out DOT Form Online
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Quick Highlights Grid */}
      <section
        className="py-12 md:py-16 bg-slate-50"
        aria-labelledby="highlights-heading"
      >
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 id="highlights-heading" className="sr-only">
            Employer service highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {employerHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-medical border border-slate-200 hover:border-teal-500/50 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-4">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    {item.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-teal-600 font-semibold text-sm">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Forms / DOT Form – prominent CTA */}
      <section
        id="forms"
        className="py-8 md:py-10 bg-white border-y border-slate-200 scroll-mt-24"
        aria-labelledby="forms-heading"
      >
        <div className="container px-4 max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2
              id="forms-heading"
              className="text-xl md:text-2xl font-bold text-slate-900"
            >
              Fill Out DOT Form Online
            </h2>
            <p className="text-slate-600 mt-1">
              Pre-register for your commercial driver medical exam and save time
              at your visit.
            </p>
          </div>
          <Link
            href="/resources/forms/dot-physical"
            className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold min-h-[48px] shadow-medical transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <FileText size={20} aria-hidden />
            Start DOT Form
          </Link>
        </div>
      </section>

      {/* 4. Detailed Service Blocks – ServiceDetailSection */}
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="pb-2">
          <ServiceDetailSection
            id="drug-testing"
            title="Drug & Alcohol Screening"
            description="We provide comprehensive screening services designed to maintain a safe and drug-free workplace. Our clinic follows strict chain-of-custody protocols for both DOT and non-DOT testing."
            items={[
              "DOT & Non-DOT Urine Drug Screens",
              "Breath Alcohol Testing (BAT)",
              "Pre-employment, Random, and Post-accident",
              "MRO (Medical Review Officer) services available",
              "Rapid/Instant testing for immediate results",
              "Hair Follicle testing available upon request",
            ]}
            ctaText="Call 317-956-6288"
          />
          <p className="text-slate-600 text-sm mt-2 px-0">
            Or{" "}
            <Link
              href="/contact"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              request a quote
            </Link>{" "}
            for corporate testing.
          </p>
        </div>

        <div className="pb-2">
          <ServiceDetailSection
            id="workers-comp"
            title="Workers' Comp & Injury Care"
            description="When an injury happens on the clock, we prioritize getting your employee treated and back to work safely. Our on-site diagnostic suite allows for immediate assessment without ER wait times."
            items={[
              "On-site Digital X-Ray & Diagnostics",
              "Laceration repair and minor surgical procedures",
              "Direct communication with adjusters and HR",
              "Return-to-work evaluations and light-duty coordination",
              "Case management support to reduce OSHA recordables",
            ]}
            ctaText="Report an Injury: Call 317-956-6288"
          />
          <p className="text-slate-600 text-sm mt-2 px-0">
            Or{" "}
            <Link
              href="/contact"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              request a quote
            </Link>{" "}
            for employer injury programs.
          </p>
        </div>

        <div className="pb-4">
          <ServiceDetailSection
            id="physicals"
            title="Physicals & Employee Health"
            description="From regulatory compliance to general wellness, we offer a full suite of physical examinations tailored to your industry requirements."
            items={[
              "FMCSA/DOT Physical Exams",
              "Respirator Fit Testing (Qualitative)",
              "Lift Testing & Physical Agility Tests",
              "Tuberculosis (TB) Skin Testing",
              "Hepatitis B & Tdap Vaccinations",
              "Biometric Screenings (Blood Pressure, Glucose, Cholesterol)",
            ]}
            ctaText="Schedule Physicals: Call 317-956-6288"
          />
          <p className="text-slate-600 text-sm mt-2 px-0">
            Or{" "}
            <Link
              href="/contact"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              request a quote
            </Link>{" "}
            for group physicals.
          </p>
        </div>
      </div>

      {/* 5. Why Partner With Us – B2B Features */}
      <section
        className="py-12 md:py-16 bg-slate-50 border-t border-slate-200"
        aria-labelledby="why-partner-heading"
      >
        <div className="container px-4 max-w-6xl mx-auto">
          <h2
            id="why-partner-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
          >
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyPartnerItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-medical"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-4">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-slate-600 text-center">
            Call{" "}
            <a
              href="tel:+13179566288"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              (317) 956-6288
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-primary-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              request a quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 6. Corporate CTA – Streamline Billing */}
      <section
        className="py-12 md:py-16 bg-teal-600 text-white text-center"
        aria-labelledby="corporate-cta-heading"
      >
        <div className="container px-4 max-w-3xl mx-auto">
          <h2
            id="corporate-cta-heading"
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Streamline Your Billing
          </h2>
          <p className="text-lg text-teal-50 mb-8">
            Open a corporate account to receive monthly itemized billing,
            preferred pricing, and priority access for your employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13179566288"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              <Phone size={20} aria-hidden />
              Call 317-956-6288
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-bold hover:bg-teal-50 transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <div className="container px-4 max-w-6xl mx-auto py-8">
        <Link
          href="/services"
          className="text-primary-blue font-medium hover:underline"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
