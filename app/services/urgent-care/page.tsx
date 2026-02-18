import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ClipboardList, Stethoscope, Syringe } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import BrandImage from "@/components/ui/BrandImage";
import { IconTile } from "@/components/ui/IconTile";

export const metadata: Metadata = {
  title: "Urgent Care | Walk-In Services Hub | Urgent Care Indy",
  description:
    "Find the right urgent care service fast. Explore Illness, Injury, Wellness, and Labs & Diagnostics—all walk-in friendly with on-site testing in Indianapolis.",
};

export default function UrgentCareHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      <header className="relative overflow-hidden" aria-label="Urgent Care Hub">
        <div className="absolute inset-0">
          <BrandImage
            src="/images/services/urgent-care/towfiqu-barbhuiya-UXAPylyDWlw-unsplash.jpg"
            queries={["clinic exam room", "medical clinic interior"]}
            alt="Modern urgent care clinic interior"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b4d]/95 via-[#0b1b4d]/75 to-[#0b1b4d]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-teal-300/90 mb-3">
              Triage Hub
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.05]">
              Find the right care fast.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-100 font-semibold">
              Four focused service silos—so you don&apos;t have to scroll to find what you need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.clockwisemd.com/hospitals/2072/visits/new"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold transition-colors shadow-lg shadow-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-[#0b1b4d]"
              >
                Save Your Spot
              </a>
              <a
                href="tel:+13179566288"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b1b4d]"
              >
                Call (317) 956-6288
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="container py-14 md:py-16" aria-labelledby="hub-heading">
        <h2 id="hub-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Choose a service silo
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Each page is designed around high-intent needs—illness, injury, wellness, or diagnostics—with clear next steps.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <HubCard
            title="Illness"
            desc="Cold & flu, strep, sinus, UTI, and more."
            href="/services/urgent-care/illness"
            icon={Stethoscope}
            image="/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg"
          />
          <HubCard
            title="Injury"
            desc="Stitches, sprains, minor fractures, wound care."
            href="/services/urgent-care/injury"
            icon={Activity}
            image="/images/services/urgent-care/national-cancer-institute-BxXgTQEw1M4-unsplash.jpg"
          />
          <HubCard
            title="Wellness"
            desc="Sports physicals, vaccines, TB testing, B12."
            href="/services/urgent-care/wellness"
            icon={Syringe}
            image="/images/home/patient-care.jpg"
          />
          <HubCard
            title="Labs"
            desc="Rapid tests, X-ray, EKG, glucose, mono."
            href="/services/urgent-care/labs"
            icon={ClipboardList}
            image="/images/home/dr-pike-xray.jpg"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                Not sure?
              </p>
              <p className="mt-1 text-lg font-extrabold text-slate-900">
                Start with Illness for symptoms, Injury for accidents.
              </p>
              <p className="mt-1 text-slate-600">
                For pricing transparency, visit Labs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://symptomate.com/interview/0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Start Free Symptom Check
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-2xl bg-[#1e3a8a] hover:bg-[#1b3380] text-white font-extrabold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                View all services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-slate-500">
              Fast Access
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              Check in online and get seen sooner.
            </h3>
            <p className="mt-2 text-slate-600">
              Skip the waiting room. Save your spot for today&apos;s visit.
            </p>
            <div className="mt-6">
              <a
                href="https://www.clockwisemd.com/hospitals/2072/visits/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center min-h-[52px] px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold transition-colors shadow-lg shadow-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2"
              >
                Save Your Spot
              </a>
              <p className="mt-3 text-xs text-slate-500">
                Walk-ins welcome. Online check-in reduces time on-site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HubCard({
  title,
  desc,
  href,
  icon: Icon,
  image,
}: {
  title: string;
  desc: string;
  href: string;
  icon: typeof Stethoscope;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    >
      <div className="absolute inset-0" aria-hidden>
        <BrandImage
          src={image}
          alt={`${title} urgent care background`}
          fill
          className="object-cover object-center opacity-35 group-hover:opacity-45 transition-opacity"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b4d]/85 via-[#0b1b4d]/55 to-transparent" />
      </div>

      <div className="relative z-10 p-7 md:p-8 min-h-[180px] flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <IconTile icon={Icon} className="text-teal-700" />
          <h3 className="text-2xl font-extrabold text-white">{title}</h3>
        </div>
        <p className="mt-3 text-slate-100/90 font-medium max-w-sm">{desc}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-teal-200 font-extrabold">
          Explore {title}
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
