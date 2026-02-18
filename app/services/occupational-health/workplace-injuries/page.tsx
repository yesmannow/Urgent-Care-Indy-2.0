import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building2, ArrowRight, Stethoscope, FileCheck, Handshake } from "lucide-react";
import { EmployerSidebar } from "@/components/ui/EmployerSidebar";

export const metadata: Metadata = {
  title: "Workplace Injuries | Modified Duty & Return-to-Work | Urgent Care Indy",
  description:
    "We care for your workforce. First aid, modified duty, early return-to-work, and workers' comp coordination. Cost savings vs. the ER for Indianapolis employers.",
};

const HERO_IMAGE = "/images/employers/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg";
const TREATMENT_ROOMS_IMAGE = "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (2).jpg";

const workflows = [
  {
    title: "First Aid & Rapid Treatment",
    desc: "Immediate evaluation and treatment for non–life-threatening workplace injuries. We document everything your adjuster needs and get your employee on a path to recovery.",
    icon: Stethoscope,
  },
  {
    title: "Modified Duty & Early Return-to-Work",
    desc: "We design modified duty and light-duty plans so employees can return to work safely and sooner. Clear work-status documentation and ongoing communication with your team.",
    icon: FileCheck,
  },
  {
    title: "Workers' Comp Coordination",
    desc: "Direct coordination with workers' comp adjusters and case managers. Timely reports, imaging when needed, and consistent updates so you stay in the loop.",
    icon: Handshake,
  },
];

export default function WorkplaceInjuriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-end md:items-center overflow-hidden"
        aria-label="Workplace Injuries"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Workplace safety and injury care scene representing workers' compensation services"
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
              We Care For Your Workforce.
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Cost savings vs. the ER. Rapid treatment, modified duty programs,
              and early return-to-work—with clear coordination for workers&apos;
              comp.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <main className="lg:col-span-2 space-y-10">
            <section aria-labelledby="workflows-heading">
              <h2
                id="workflows-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
              >
                How We Support Your Team
              </h2>
              <div className="space-y-6">
                {workflows.map(({ title, desc, icon: Icon }) => (
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
              Early return-to-work programs reduce lost time and keep your
              workforce productive. We focus on safe, documented transitions
              from injury to modified duty to full duty—so Indianapolis
              businesses can count on consistent care and communication.
            </p>

            {/* The Urgent Care Indy Advantage for Workers' Comp */}
            <section
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-medical"
              aria-labelledby="advantage-heading"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:min-h-[280px]">
                  <Image
                    src={TREATMENT_ROOMS_IMAGE}
                    alt="Urgent Care Indy treatment rooms for workplace injury care"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h2
                    id="advantage-heading"
                    className="text-2xl font-bold text-slate-900 mb-6"
                  >
                    The Urgent Care Indy Advantage for Workers&apos; Comp
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                        <FileCheck className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <strong className="text-slate-900">Aggressive Return-to-Work</strong>
                        <p className="mt-1 text-slate-600 text-sm leading-relaxed">
                          We focus on Modified Duty so employees stay productive while healing. Clear work-status documentation and light-duty plans get people back safely—sooner.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                        <Handshake className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <strong className="text-slate-900">Streamlined Communication</strong>
                        <p className="mt-1 text-slate-600 text-sm leading-relaxed">
                          Immediate digital status reports sent to the employer and adjuster after every visit. No chasing paperwork—you stay in the loop.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                        <Building2 className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <strong className="text-slate-900">Cost Control</strong>
                        <p className="mt-1 text-slate-600 text-sm leading-relaxed">
                          Avoid the 10x–15x markup of ER visits for non-emergency injuries like lacerations, sprains, and minor burns. Same quality care at a fraction of the cost.
                        </p>
                      </div>
                    </li>
                  </ul>
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
            Set up a corporate account, learn about our modified duty programs,
            or get your team scheduled for injury care.
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
