import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { AilmentGrid } from "@/components/services/AilmentGrid";
import { PricingCard } from "@/components/services/PricingCard";
import { SymptomCheckerCTA } from "@/components/ui/SymptomCheckerCTA";
import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE, normalizeLanguage } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Urgent Care Services | Walk-Ins Welcome | Urgent Care Indy",
  description:
    "Illness, injury, and wellness care-no appointment needed. $30 sports physicals, transparent pricing. Strep, flu, sprains, stitches, and more.",
};

export default async function UrgentCarePage() {
  const language = normalizeLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value ?? DEFAULT_LANGUAGE);

  const copy =
    language === "es"
      ? {
          heroTitle: "Servicios de urgencias",
          heroSubtitle: "Lesiones y enfermedades leves, sin cita previa. Te atendemos hoy.",
          pricingHeading: "Precios transparentes",
          pricingNotePrefix:
            "Las visitas sin seguro (self-pay) empiezan desde $100 para condiciones comunes. Ofrecemos precios escalonados para suturas, visitas por ITS y más. ",
          pricingNoteLink: "Ver precios escalonados y servicios a precio fijo",
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
            "Self-pay office visits start at $100 for common conditions. We offer tiered self-pay pricing for suturing, STI visits, and more. ",
          pricingNoteLink: "See full self-pay tiers and fixed-price services",
          symptomBridge: "Need ongoing care?",
          primaryCareLink: "Visit Primary Care Indy",
          allServices: "← All services",
          sportsTitle: "Sports Physicals",
          sportsDesc: "Fast, easy, and affordable. Get your student athlete ready for the season.",
          sportsFeatures: ["Walk-ins Welcome", "Paperwork Completed"],
          sportsCta: "Save Your Spot",
          sportsSecondary: "Fill Out Student Form Online",
          dotTitle: "DOT Physicals",
          dotDesc: "Certified DOT exams to keep commercial drivers compliant and on the road.",
          dotFeatures: ["Certified Medical Examiner", "Same-day results"],
          dotCta: "Save Your Spot",
        };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden" aria-label="Urgent Care Services">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg"
            alt=""
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

