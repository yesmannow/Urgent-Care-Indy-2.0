import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
import { RapidInfoBar } from "@/components/ui/RapidInfoBar";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { InsurancePricingSection } from "@/components/sections/InsurancePricingSection";
import { ScrollRevealSection } from "@/components/ui/ScrollRevealSection";

export const metadata: Metadata = {
  title: "Occupational Health & Employer Services | Indianapolis",
  description:
    "DOT physicals and drug testing in Indy. Workers' comp, return-to-work focus, on-site X-ray. Fast turnaround, cost savings vs. ER. Call 317-956-6288 or request a quote.",
};

const BENTO_ITEMS = [
  {
    title: "DOT Physicals",
    desc: "Certified FMCSA examiners to keep your drivers on the road.",
    href: "#physicals",
    img: "/images/employers/dot-truck.jpg",
    icon: Truck,
  },
  {
    title: "Drug Screening",
    desc: "5, 10, and 12-panel tests with rapid results available.",
    href: "#drug-testing",
    img: "/images/employers/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Workers' Comp & Injury",
    desc: "Aggressive return-to-work focus for workplace injuries.",
    href: "#workers-comp",
    img: "/images/employers/workplace-injuries.webp",
    icon: HardHat,
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
      {/* 1. Hero – local employer image */}
      <section className="relative min-h-[50vh]" aria-label="Employer Services">
        <DynamicHero
          title="Keep Your Workforce Healthy, Compliant, and Productive."
          subtitle="Fast, reliable care for your team. From DOT physicals to injury management, we help Indianapolis businesses reduce downtime and stay compliant."
          imageSrc="/images/employers/occ-med-page-top.webp"
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

      <RapidInfoBar />

      {/* 2. Bento Grid – DOT, Drug Testing, Injury */}
      <section
        className="py-12 md:py-16 bg-slate-50 border-b border-slate-100"
        aria-labelledby="employer-highlights-heading"
      >
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 id="employer-highlights-heading" className="sr-only">
            Employer service highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {BENTO_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-teal-500" aria-hidden />
                      </div>
                      <span className="font-bold text-white text-lg">{item.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight size={16} className="text-teal-500" aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Forms / DOT Form CTA */}
      <section
        id="forms"
        className="py-8 md:py-10 bg-white border-y border-slate-200 scroll-mt-24"
        aria-labelledby="forms-heading"
      >
        <div className="container px-4 max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 id="forms-heading" className="text-xl md:text-2xl font-bold text-slate-900">
              Fill Out DOT Form Online
            </h2>
            <p className="text-slate-600 mt-1">
              Pre-register for your commercial driver medical exam and save time at your visit.
            </p>
          </div>
          <Link
            href="/resources/forms/dot-physical"
            className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold min-h-[48px] shadow-medical transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <FileText size={20} aria-hidden />
            Start DOT Form
          </Link>
        </div>
      </section>

      {/* 4. Insurance & Self-Pay + Employer-Specific Pricing */}
      <InsurancePricingSection
        servicePrice="$65"
        pricingCtaText="View Full Pricing Menu"
      />

      {/* Employer-specific rates card */}
      <section
        className="py-10 bg-white border-b border-slate-100"
        aria-labelledby="employer-rates-heading"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 id="employer-rates-heading" className="text-2xl font-bold text-slate-900 mb-6">
            Employer Pricing (Sample Rates)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-1">DOT Physical</h3>
              <p className="text-3xl font-bold text-teal-600">$110</p>
              <p className="text-slate-600 text-sm mt-1">FMCSA-certified exam, same-day results.</p>
            </div>
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-1">Basic Drug Screening</h3>
              <p className="text-3xl font-bold text-teal-600">$65</p>
              <p className="text-slate-600 text-sm mt-1">5-panel urine drug screen, chain of custody.</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            <Link href="/contact" className="text-teal-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
              Request a quote
            </Link>{" "}
            for volume or custom panels.
          </p>
        </div>
      </section>

      {/* 5. Detailed Service Blocks */}
      <div className="container px-4 max-w-6xl mx-auto">
        <ScrollRevealSection>
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
        </ScrollRevealSection>
        <p className="text-slate-600 text-sm mt-2 px-0 pb-8">
          Or{" "}
          <Link href="/contact" className="text-teal-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
            request a quote
          </Link>{" "}
          for corporate testing.
        </p>

        <ScrollRevealSection>
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
        </ScrollRevealSection>
        <p className="text-slate-600 text-sm mt-2 px-0 pb-8">
          Or{" "}
          <Link href="/contact" className="text-teal-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
            request a quote
          </Link>{" "}
          for employer injury programs.
        </p>

        <ScrollRevealSection>
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
        </ScrollRevealSection>
        <p className="text-slate-600 text-sm mt-2 px-0 pb-8">
          Or{" "}
          <Link href="/contact" className="text-teal-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
            request a quote
          </Link>{" "}
          for group physicals.
        </p>
      </div>

      {/* 6. Why Partner With Us – with Indy metric */}
      <section
        className="py-12 md:py-16 bg-slate-50 border-t border-slate-200 relative overflow-hidden"
        aria-labelledby="why-partner-heading"
      >
        {/* Optional subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url(/images/employers/bgrd-icons.webp)" }}
          aria-hidden
        />
        <div className="container px-4 max-w-6xl mx-auto relative">
          <h2 id="why-partner-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Why Partner With Us
          </h2>
          <p className="text-slate-700 font-medium mb-8 max-w-2xl">
            Reducing Workers&apos; Comp costs for Indianapolis small businesses by up to 30% versus ER alternatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyPartnerItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-500 mb-4">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
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
              className="text-teal-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            >
              (317) 956-6288
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-teal-600 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            >
              request a quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7. Corporate CTA */}
      <section
        className="py-12 md:py-16 bg-teal-600 text-white text-center"
        aria-labelledby="corporate-cta-heading"
      >
        <div className="container px-4 max-w-3xl mx-auto">
          <h2 id="corporate-cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
            Streamline Your Billing
          </h2>
          <p className="text-lg text-teal-50 mb-8">
            Open a corporate account to receive monthly itemized billing, preferred pricing, and priority access for your employees.
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
          className="text-teal-600 font-semibold hover:text-teal-700 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
