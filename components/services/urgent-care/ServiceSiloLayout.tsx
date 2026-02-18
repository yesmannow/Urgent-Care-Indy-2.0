import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import BrandImage from "@/components/ui/BrandImage";

type ServiceSiloLayoutProps = {
  title: string;
  subtitle: string;
  description: string;
  conditions: string[];
  imageSrc: string;
  imageAlt: string;
  imageQueries?: string[] | string;
  pricingBlock?: ReactNode;
};

const SAVE_SPOT_URL = "https://www.clockwisemd.com/hospitals/2072/visits/new";

export function ServiceSiloLayout({
  title,
  subtitle,
  description,
  conditions,
  imageSrc,
  imageAlt,
  imageQueries,
  pricingBlock,
}: ServiceSiloLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      <header className="relative overflow-hidden" aria-label={title}>
        <div className="absolute inset-0">
          <BrandImage
            src={imageSrc}
            queries={imageQueries}
            alt={imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b4d]/95 via-[#0b1b4d]/75 to-[#0b1b4d]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-teal-300/90 mb-3">
              Urgent Care
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-100 font-semibold">
              {subtitle}
            </p>
            <p className="mt-4 text-slate-200 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={SAVE_SPOT_URL}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold transition-colors shadow-lg shadow-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 focus:ring-offset-[#0b1b4d]"
              >
                Save Your Spot <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="tel:+13179566288"
                className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b1b4d]"
              >
                Call (317) 956-6288
              </a>
            </div>
            <div className="mt-4">
              <Link
                href="/services/urgent-care"
                className="text-sm font-bold text-white/90 hover:text-white underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b1b4d] rounded"
              >
                Back to Urgent Care Hub
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-10 lg:gap-16">
        <div className="md:col-span-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            Conditions & Services
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Walk-in friendly care with clear next steps. Many common conditions can be evaluated, treated, and supported with on-site diagnostics.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {conditions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-colors"
              >
                <CheckCircle2 className="text-teal-600 shrink-0" size={22} aria-hidden />
                <span className="font-semibold text-slate-900">{item}</span>
              </div>
            ))}
          </div>

          {pricingBlock && <div className="mt-12">{pricingBlock}</div>}
        </div>

        <aside className="md:col-span-4">
          <div className="sticky top-28 p-8 rounded-[2.5rem] bg-white border-2 border-slate-200 shadow-2xl shadow-slate-900/10">
            <div className="flex items-center gap-2 text-teal-700 font-black text-xs mb-6 uppercase tracking-widest">
              <Clock size={18} aria-hidden /> <span>Wait Time: ~15 Mins</span>
            </div>
            <h3 className="text-3xl font-extrabold text-blue-900 mb-3 leading-tight">
              Ready to feel better?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Check in online to reduce time in the waiting room.
            </p>
            <a
              href={SAVE_SPOT_URL}
              className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-5 rounded-2xl shadow-lg shadow-red-900/20 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2"
            >
              Save Your Spot <ArrowRight size={20} aria-hidden />
            </a>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Location
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                7911 N Michigan Rd
              </p>
              <a
                href="tel:+13179566288"
                className="mt-3 inline-flex items-center justify-center w-full min-h-[44px] rounded-xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                Call (317) 956-6288
              </a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
