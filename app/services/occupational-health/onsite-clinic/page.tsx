import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FlaskConical, Syringe, Activity } from "lucide-react";
import { EmployerSidebar } from "@/components/ui/EmployerSidebar";

export const metadata: Metadata = {
  title: "Onsite Clinic Services | Flu Shots, Drug Testing, Biometric Screenings | Urgent Care Indy",
  description:
    "Bringing the clinic to the employer. Onsite drug testing, flu shot clinics, and biometric screenings for large Indy-area workforces.",
};

const HERO_IMAGE = "/images/employers/tommao-wang-dA4DdZxLPU4-unsplash.jpg";

const services = [
  {
    title: "Onsite Drug Testing",
    desc: "Mobile collection at your location for pre-employment, post-accident, or random testing. Same chain-of-custody and compliance as in-clinic.",
    icon: FlaskConical,
  },
  {
    title: "Flu Shot Clinics",
    desc: "Onsite flu vaccination events for your workforce. Reduce absenteeism and keep your team healthy during flu season.",
    icon: Syringe,
  },
  {
    title: "Biometric Screenings",
    desc: "Onsite health screenings—blood pressure, glucose, cholesterol, and more—to support wellness programs and early detection.",
    icon: Activity,
  },
];

export default function OnsiteClinicPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-end md:items-center overflow-hidden"
        aria-label="Onsite Clinic Services"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Mobile onsite clinic setup representing employer health services"
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
              Bringing the Clinic to the Employer.
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Onsite drug testing, flu shot clinics, and biometric screenings
              for large Indianapolis-area workforces. We come to you.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <main className="lg:col-span-2 space-y-10">
            <section aria-labelledby="services-heading">
              <h2
                id="services-heading"
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
              >
                What We Offer
              </h2>
              <div className="space-y-6">
                {services.map(({ title, desc, icon: Icon }) => (
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
              Ideal for employers with large or distributed teams who want
              minimal disruption and maximum convenience. Schedule a single
              event or recurring onsite services—we work with you to design
              a program that fits your needs.
            </p>

            {/* We Come To You */}
            <section
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical"
              aria-labelledby="we-come-to-you-heading"
            >
              <h2
                id="we-come-to-you-heading"
                className="text-2xl font-bold text-slate-900 mb-6"
              >
                We Come To You
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                For large-scale hiring events and ongoing workforce health in the Indianapolis area, we bring the clinic to you. Minimize time off-site and keep your operations running.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold" aria-hidden>1</span>
                  <div>
                    <strong className="text-slate-900">Mobile Flu Shot Clinics</strong>
                    <p className="text-slate-600 text-sm mt-1">Onsite flu vaccination events for your workforce. Reduce absenteeism and keep your team healthy during flu season.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold" aria-hidden>2</span>
                  <div>
                    <strong className="text-slate-900">Biometric Screenings</strong>
                    <p className="text-slate-600 text-sm mt-1">Onsite health screenings—blood pressure, glucose, cholesterol, and more—to support wellness programs and early detection.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold" aria-hidden>3</span>
                  <div>
                    <strong className="text-slate-900">Onsite Drug Testing</strong>
                    <p className="text-slate-600 text-sm mt-1">Mobile collection at your location for large-scale hiring events in the Indianapolis area. Same chain-of-custody and compliance as in-clinic.</p>
                  </div>
                </li>
              </ul>
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
            Get a quote for onsite flu shots, drug testing, or biometric
            screenings at your location.
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
