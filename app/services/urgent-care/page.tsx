import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { AilmentGrid } from "@/components/services/AilmentGrid";
import { PricingCard } from "@/components/services/PricingCard";
import { SymptomCheckerCTA } from "@/components/ui/SymptomCheckerCTA";
import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE, normalizeLanguage } from "@/lib/i18n";
import { INSURANCES, SELF_PAY_TIERS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Urgent Care Services | Walk-Ins Welcome | Urgent Care Indy",
  description:
    "Illness, injury, and wellness care—no appointment needed. Transparent self-pay pricing and most major insurance accepted.",
};

export default async function UrgentCarePage() {
  const language = normalizeLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value ?? DEFAULT_LANGUAGE);

  const copy =
    language === "es"
      ? {
          heroTitle: "Servicios de atención urgente",
          heroSubtitle: "Lesiones y enfermedades leves, sin cita previa. Te atendemos hoy.",
          pricingHeading: "Precios transparentes",
          pricingNotePrefix:
            "Las visitas sin seguro (self-pay) comienzan desde $100 para condiciones comunes. También aceptamos la mayoría de los seguros médicos. ",
          pricingNoteLink: "Ver niveles de self-pay y servicios de precio fijo",
          insuranceHeading: "Aceptamos seguros",
          insuranceBody:
            "La mayoría de los planes principales son aceptados. Confirma tu cobertura en la visita.",
          insuranceCta: "Verificar tu seguro",
          selfPayHeading: "Niveles de self-pay",
          selfPayBody: "Resumen rápido. Consulta los detalles completos en precios.",
          selfPayCta: "Ver precios completos",
          symptomBridge: "¿Necesitas atención continua?",
          primaryCareLink: "Visita Primary Care Indy",
          allServices: "← Todos los servicios",
          sportsTitle: "Examen físico deportivo",
          sportsDesc: "Rápido, sencillo y accesible. Prepara a tu estudiante atleta para la temporada.",
          sportsFeatures: ["Sin cita previa", "Completamos el formulario"],
          sportsCta: "Reserva tu lugar",
          sportsSecondary: "Completar el formulario en línea",
          dotTitle: "Examen físico DOT",
          dotDesc: "Exámenes DOT certificados para mantener a los conductores comerciales en regla.",
          dotFeatures: ["Examinador certificado", "Resultados el mismo día"],
          dotCta: "Reserva tu lugar",
        }
      : {
          heroTitle: "Urgent Care Services",
          heroSubtitle: "Minor injuries and illnesses, no appointment needed. Walk-ins welcome.",
          pricingHeading: "Transparent Pricing",
          pricingNotePrefix:
            "Self-pay office visits start at $100 for common conditions. We also accept most major insurance plans. ",
          pricingNoteLink: "See full self-pay tiers and fixed-price services",
          insuranceHeading: "Insurance Accepted",
          insuranceBody: "Most major plans accepted. Verify your benefits at visit.",
          insuranceCta: "Check your insurance",
          selfPayHeading: "Self-Pay Tiers",
          selfPayBody: "Quick summary. See full details in pricing.",
          selfPayCta: "See full pricing",
          symptomBridge: "Need ongoing care?",
          primaryCareLink: "Visit Primary Care Indy",
          allServices: "← All services",
          sportsTitle: "Sports Physicals",
          sportsDesc: "Fast, easy, and affordable. Get your student athlete ready for the season.",
          sportsFeatures: ["Walk-ins welcome", "Paperwork completed"],
          sportsCta: "Save Your Spot",
          sportsSecondary: "Fill out student form online",
          dotTitle: "DOT Physicals",
          dotDesc: "Certified DOT exams to keep commercial drivers compliant and on the road.",
          dotFeatures: ["Certified medical examiner", "Same-day results"],
          dotCta: "Save Your Spot",
        };

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative min-h-[40vh] flex items-center overflow-hidden"
        aria-label="Urgent Care Services"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg"
            alt="Urgent care provider taking notes during a patient visit"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" aria-hidden />
        </div>
        <div className="container relative z-10 py-14 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {copy.heroTitle}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200">{copy.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16 border-b border-slate-200">
        <AilmentGrid />
      </section>

      <section className="container py-12 md:py-16 border-b border-slate-200" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          {copy.pricingHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <PricingCard
            title={copy.sportsTitle}
            price="$30"
            description={copy.sportsDesc}
            features={copy.sportsFeatures}
            ctaHref="/schedule"
            ctaLabel={copy.sportsCta}
            secondaryLink={{
              href: "/resources/forms/sports-physical",
              label: copy.sportsSecondary,
            }}
            popular
            emphasis="primary"
          />
          <PricingCard
            title={copy.dotTitle}
            price="$95"
            description={copy.dotDesc}
            features={copy.dotFeatures}
            ctaHref="/schedule"
            ctaLabel={copy.dotCta}
            emphasis="secondary"
          />
        </div>

        <p className="mt-6 text-slate-600 text-sm md:text-base">
          {copy.pricingNotePrefix}
          <Link
            href="/patient-resources/pricing#self-pay-tiers"
            className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
          >
            {copy.pricingNoteLink}
          </Link>
          .
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-extrabold text-slate-900">{copy.insuranceHeading}</h3>
            <p className="text-sm text-slate-600 mt-2">{copy.insuranceBody}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {INSURANCES.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white text-slate-700 text-sm font-medium border border-slate-200/80"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/insurance"
                className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                {copy.insuranceCta}
              </Link>
              <a
                href="tel:+13179566288"
                className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl bg-white border-2 border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                (317) 956-6288
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-extrabold text-slate-900">{copy.selfPayHeading}</h3>
            <p className="text-sm text-slate-600 mt-2">{copy.selfPayBody}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {SELF_PAY_TIERS.map((tier) => (
                <div key={tier.level} className="rounded-xl bg-white border border-slate-200 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{tier.level}</p>
                  <p className="text-xl font-extrabold text-primary-blue mt-1">{tier.price}</p>
                  <p className="text-xs text-slate-500">{tier.perVisit}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/patient-resources/pricing#self-pay-tiers"
                className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl bg-primary-blue text-white font-bold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                {copy.selfPayCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <SymptomCheckerCTA />
        <p className="text-slate-600 mt-6">
          {copy.symptomBridge}{" "}
          <a
            href="https://primarycareindy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
          >
            {copy.primaryCareLink}
          </a>
        </p>
      </section>

      <section className="container pb-12">
        <Link href="/services" className="text-primary-blue font-medium hover:underline">
          {copy.allServices}
        </Link>
      </section>
    </div>
  );
}
