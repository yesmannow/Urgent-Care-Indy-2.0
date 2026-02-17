import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FlaskConical,
  Truck,
  BriefcaseMedical,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { CorporateQuote } from "@/components/forms/CorporateQuote";

export const metadata: Metadata = {
  title: "Occupational Health & Employer Services | Urgent Care Indy",
  description:
    "Reduce lost time and workers' comp costs. Drug screening, DOT physicals, workers' comp, on-site flu shots. Request corporate rates.",
};

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Drug Screening",
    description: "Fast, compliant screening for pre-employment and random testing.",
    icon: FlaskConical,
  },
  {
    title: "DOT Physicals",
    description: "Certified DOT exams to keep your drivers compliant and on the road.",
    icon: Truck,
  },
  {
    title: "Workers' Comp",
    description: "Streamlined injury care and digital reporting for faster resolution.",
    icon: BriefcaseMedical,
  },
  {
    title: "On-Site Flu Shots",
    description: "Convenient workplace flu vaccination programs for your team.",
    icon: Syringe,
  },
];

export default function EmployerServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero with background image */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/employers/louis-reed-pwcKF7L4-no-unsplash.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/60" aria-hidden />
        </div>
        <div className="container max-w-6xl mx-auto relative z-10">
          <header className="text-left max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Reduce Lost Time & Workers&apos; Comp Costs.
            </h1>
            <p className="mt-3 text-lg text-slate-200">
              Fast-track access for your employees. 100% Digital compliance tracking.
            </p>
          </header>
        </div>
      </section>

      {/* Two-Column Core */}
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Corporate Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon
                  className="h-8 w-8 text-primary-blue mb-3"
                  aria-hidden
                />
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {title}
                </h2>
                <p className="text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>

          {/* Right: Sticky lead capture card */}
          <div className="lg:sticky lg:top-24">
            <CorporateQuote />
          </div>
        </div>

        {/* DOT Physicals feature section with image */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-medical">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              DOT Physicals
            </h2>
            <p className="text-slate-600 mb-4">
              Certified DOT exams to keep your drivers compliant and on the road. We streamline the process so your team spends less time in the clinic and more time delivering.
            </p>
            <p className="text-sm text-slate-500">
              FMCSA-certified medical examiners. Same-day results when possible.
            </p>
          </div>
          <div className="relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shadow-medical bg-slate-100">
            <Image
              src="/images/employers/dot-truck.jpg"
              alt="DOT compliance – commercial driver and fleet safety"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Bottom Bar: Existing clients */}
      <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-lg font-medium text-white text-center sm:text-left">
            Already a partner? Access the Employer Portal.
          </p>
          <Link
            href="/portal"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white bg-transparent text-white font-bold hover:bg-white hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 shrink-0"
          >
            Portal Login
          </Link>
        </div>
      </section>
    </div>
  );
}
