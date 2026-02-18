import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Clock, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import BrandImage from "@/components/ui/BrandImage";

type EmployerSiloLayoutProps = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageQueries?: string[] | string;
  children: ReactNode;
};

export function EmployerSiloLayout({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imageQueries,
  children,
}: EmployerSiloLayoutProps) {
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/35" />
          <div className="absolute inset-0 bg-teal-900/10" aria-hidden />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-teal-300/90 mb-3">
              Occupational Health
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
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-14 md:py-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <main className="lg:col-span-8">{children}</main>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-[2.5rem] border-2 border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="flex items-center gap-2 text-teal-700 font-black text-xs mb-6 uppercase tracking-widest">
              <Clock size={18} aria-hidden /> <span>Same-Day Friendly</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              Need employer support?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Fast paperwork, clear communication, and return-to-work focus.
            </p>
            <Link
              href="/employer-services/contact"
              className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold transition-colors shadow-lg shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Request a Quote <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <a
              href="tel:+13179566288"
              className="mt-3 inline-flex items-center justify-center gap-2 w-full min-h-[52px] rounded-2xl bg-white border-2 border-slate-200 text-slate-900 font-extrabold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              <Phone className="h-5 w-5" aria-hidden /> Call (317) 956-6288
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}

