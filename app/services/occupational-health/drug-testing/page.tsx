import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, ArrowRight, Zap, ShieldCheck, Users } from "lucide-react";
import { EmployerSidebar } from "@/components/ui/EmployerSidebar";

export const metadata: Metadata = {
  title: "Employer Drug Testing | 5/10/12-Panel, eScreen, MRO | Urgent Care Indy",
  description:
    "Speed and compliance. 5/10/12-panel rapid tests, eScreen integration, MRO services, and random pool management for Indianapolis employers.",
};

const LAB_IMAGE = "/images/services/diagnostics/drug testing kit.jpg";

const features = [
  {
    title: "eScreen Integration",
    desc: "Paperless, rapid results. Order tests, manage collections, and receive results through eScreen—one platform for your entire drug and alcohol testing program. No paper chase, faster turnaround.",
    icon: Zap,
  },
  {
    title: "Panel Options",
    desc: "5-panel (Standard), 10-panel (Expanded), and 12-panel (Comprehensive) rapid tests for pre-employment, post-accident, and random testing. Chain-of-custody assured.",
    icon: ClipboardCheck,
  },
  {
    title: "MRO (Medical Review Officer) Services",
    desc: "All non-negative results are reviewed by a qualified Medical Review Officer for consistency and compliance. Clear documentation for your records and for DOT when applicable.",
    icon: ShieldCheck,
  },
  {
    title: "Random Pool Management",
    desc: "Support for DOT and non-DOT random testing programs. We help you maintain compliant pools and schedules.",
    icon: Users,
  },
];

export default function DrugTestingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-end md:items-center overflow-hidden"
        aria-label="Employer Drug Testing"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={LAB_IMAGE}
            alt="Drug testing collection supplies arranged for workplace compliance screening"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/50"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-2">
              Employer Solutions
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Speed and Compliance.
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Drug and alcohol testing for Indianapolis employers—5/10/12-panel
              rapid tests, eScreen, MRO services, and random pool management.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <main className="lg:col-span-2 space-y-10">
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
              >
                What We Offer
              </h2>
              <div className="space-y-6">
                {features.map(({ title, desc, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-medical"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <p className="text-slate-600 leading-relaxed">
              DOT and non-DOT testing available. Pre-employment, post-accident,
              reasonable suspicion, and random testing—all with clear
              documentation and fast results so your hiring and compliance
              stay on track.
            </p>

            {/* DOT vs. Non-DOT comparison */}
            <section
              className="rounded-2xl border-2 border-blue-600/20 bg-blue-50/50 p-6 shadow-medical"
              aria-labelledby="dot-vs-nondot-heading"
            >
              <h2
                id="dot-vs-nondot-heading"
                className="text-xl font-bold text-slate-900 mb-4"
              >
                DOT vs. Non-DOT: What&apos;s the Difference?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h3 className="font-bold text-slate-900 mb-2">DOT Testing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Required by the Federal Motor Carrier Safety Administration (FMCSA) for commercial drivers. Follows federal drug and alcohol testing rules: specific panels, MRO review, and strict chain-of-custody. We support full DOT compliance.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Non-DOT Testing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Employer-designed programs for non-DOT employees. Same quality collection and MRO review available; panel and frequency are up to your policy. Ideal for pre-employment, post-accident, and workplace safety programs.
                  </p>
                </div>
              </div>
            </section>
          </main>
          <aside className="lg:col-span-1">
            <EmployerSidebar />
          </aside>
        </div>
      </div>

      {/* B2B Footer CTA */}
      <section className="border-t border-slate-200 bg-slate-900 py-12 md:py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Talk to a Business Development Expert
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Set up a corporate drug testing account or learn about eScreen and
            random pool options.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
