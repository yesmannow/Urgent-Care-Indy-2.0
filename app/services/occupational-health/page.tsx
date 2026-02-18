import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  FileText,
  ClipboardCheck,
  Truck,
  LogIn,
  ArrowRight,
  DollarSign,
  Clock,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Occupational Health | Employer Solutions | Urgent Care Indy",
  description:
    "Open when you need us, where you need us. Workplace injuries, DOT physicals, drug & alcohol testing, regulatory evaluations. Modified duty & early return-to-work. Indianapolis B2B occupational health.",
};

const HERO_IMAGE = "/images/employers/louis-reed-pwcKF7L4-no-unsplash.jpg";
const DOT_IMAGE = "/images/employers/dot-truck.jpg";
const LAB_IMAGE = "/images/services/diagnostics/drug testing kit.jpg";

const employerServiceCards = [
  {
    id: "injury-management",
    title: "Workplace Injuries",
    desc: "Rapid injury management with a focus on modified duty and early return-to-work protocols. We coordinate with workers' comp and help get your employees back safely.",
    icon: Building2,
    features: [
      "Modified duty programs",
      "Early return-to-work strategies",
      "Workers' comp coordination",
      "On-site evaluation & imaging",
    ],
  },
  {
    id: "regulatory-testing",
    title: "Regulatory & Testing",
    desc: "Certified DOT physicals, pulmonary function testing, respirator fit testing, and audiograms (hearing tests). TB testing and other regulatory evaluations.",
    icon: Truck,
    features: [
      "DOT/CDL physicals ($95)",
      "Pulmonary function testing",
      "Respirator fit testing",
      "Audiograms (hearing tests)",
      "TB skin testing",
    ],
  },
  {
    id: "drug-alcohol",
    title: "Drug & Alcohol Testing",
    desc: "Comprehensive DOT and non-DOT screening including 5-, 10-, and 12-panel rapid tests. eScreen integration for streamlined results.",
    icon: ClipboardCheck,
    features: [
      "DOT & non-DOT panels",
      "5-, 10-, 12-panel screens",
      "eScreen integration",
      "Pre-employment, post-accident, random",
    ],
  },
];

const whyPartnerPillars = [
  {
    title: "Reduced Costs",
    desc: "Avoid expensive ER visits for non–life-threatening workplace injuries. Get quality care at a fraction of the cost.",
    icon: DollarSign,
  },
  {
    title: "Extended Hours",
    desc: "Open M–F 8am–6:30pm and Saturdays so evening and weekend shift workers can get care without missing work.",
    icon: Clock,
  },
  {
    title: "Direct Communication",
    desc: "Direct access to our care team for results, injury updates, and work-status documentation when you need it.",
    icon: MessageSquare,
  },
];

export default function OccupationalHealthPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Business-First Hero */}
      <section
        className="relative min-h-[55vh] flex items-end md:items-center overflow-hidden"
        aria-label="Employer Solutions"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Industrial workplace setting representing occupational health and employer services"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-blue/90 mb-2">
              Employer Solutions
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Keeping Your Workforce Healthy, Productive, and Compliant.
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Open when you need us, where you need us. Avoid expensive ER
              visits for workplace injuries—get rapid treatment and clear
              documentation under one roof.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Talk to a Business Development Expert
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Main content: Services Matrix + Why Partner */}
          <div className="lg:col-span-2 space-y-14">
            {/* Services Matrix – 3-column grid of cards */}
            <section
              id="services-matrix"
              className="scroll-mt-24"
              aria-labelledby="services-heading"
            >
              <h2
                id="services-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
              >
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {employerServiceCards.map(({ id, title, desc, icon: Icon, features }, idx) => {
                  const navId = ["workers-comp", "regulatory-testing", "drug-screens"][idx];
                  return (
                  <div
                    key={id}
                    id={navId}
                    className="rounded-2xl bg-white border border-slate-200 shadow-medical overflow-hidden scroll-mt-24"
                  >
                    <div className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                        {desc}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-sm text-slate-700"
                          >
                            <ShieldCheck className="h-4 w-4 text-primary-blue shrink-0" aria-hidden />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`#${navId}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-blue hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                  );
                })}
              </div>
            </section>

            {/* DOT Section – visual + copy */}
            <section
              id="dot-physicals"
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-medical scroll-mt-24"
              aria-labelledby="dot-heading"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[220px]">
                  <Image
                    src={DOT_IMAGE}
                    alt="Commercial driver and DOT physicals"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h2
                    id="dot-heading"
                    className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2"
                  >
                    <Truck className="h-6 w-6 text-primary-blue" aria-hidden />
                    DOT & CDL Physicals
                  </h2>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    FMCSA-certified medical examinations for commercial
                    drivers. Fast turnaround and clear documentation for your
                    fleet. $95 per exam.
                  </p>
                  <Link
                    href="/resources/forms/dot-physical"
                    className="mt-4 inline-flex items-center gap-2 text-primary-blue font-semibold hover:underline"
                  >
                    DOT physical form
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </section>

            {/* Drug Testing – visual + copy */}
            <section
              className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-medical"
              aria-labelledby="drug-heading"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[220px] order-2 md:order-1">
                  <Image
                    src={LAB_IMAGE}
                    alt="Drug and alcohol testing"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center order-1 md:order-2">
                  <h2
                    id="drug-heading"
                    className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2"
                  >
                    <ClipboardCheck className="h-6 w-6 text-primary-blue" aria-hidden />
                    Drug & Alcohol Testing
                  </h2>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    Pre-employment, post-accident, and random testing. 5-, 10-,
                    and 12-panel options with eScreen integration. DOT and
                    non-DOT.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-primary-blue font-semibold hover:underline"
                  >
                    Set up corporate testing
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </section>

            {/* Why Partner With Us – 3 pillars */}
            <section
              className="scroll-mt-24"
              aria-labelledby="why-partner-heading"
            >
              <h2
                id="why-partner-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
              >
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whyPartnerPillars.map(({ title, desc, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-xl bg-white border border-slate-200 p-6 shadow-medical"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Employer Resource Sidebar – B2B Quick Resources (glassmorphism) */}
          <aside
            className="lg:col-span-1"
            aria-labelledby="employer-resources-heading"
          >
            <div className="lg:sticky lg:top-24 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-medical p-6 space-y-4">
              <h2
                id="employer-resources-heading"
                className="text-lg font-bold text-slate-900 flex items-center gap-2"
              >
                <FileText className="h-5 w-5 text-primary-blue" aria-hidden />
                Quick Resources
              </h2>
              <Link
                href="/forms/auth.pdf"
                className="flex items-center justify-center gap-2 w-full min-h-[48px] px-4 py-3 rounded-xl bg-primary-blue text-white font-semibold hover:bg-blue-700 transition-colors shadow-medical focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <FileText className="h-5 w-5" aria-hidden />
                Download Employer Authorization Form
              </Link>
              <Link
                href="/portal"
                className="flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-primary-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <LogIn className="h-5 w-5" aria-hidden />
                Access Employer Results Portal
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-primary-blue/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                Setup a Corporate Account
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-white py-12 md:py-16">
        <div className="container text-center">
          <p className="text-lg font-semibold text-slate-900 mb-2">
            Ready to streamline your occupational health?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 min-h-[48px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors"
          >
            Talk to a Business Development Expert
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>

      <div className="container pb-12">
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
