import Link from "next/link";
import Image from "next/image";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";

const gallery = [
  {
    src: "/images/services/diagnostics/blood%20pressure.jpg",
    alt: "On-site blood pressure and vitals monitoring",
    caption: "On-Site Vitals",
  },
  {
    src: "/images/services/diagnostics/rapid%20lab%20test.jpg",
    alt: "Rapid strep and flu testing",
    caption: "Rapid Strep & Flu Tests",
  },
  {
    src: "/images/services/diagnostics/thermometer1.jpg",
    alt: "Temperature and fever screening",
    caption: "Temperature & Fever Screening",
  },
];

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicHero
        query="modern clinical laboratory"
        title="Advanced Diagnostics"
        subtitle="On-site labs, X-ray, and rapid testing to get you answers quickly."
      />
      {/* Triage banner: reduce interior-page bounce */}
      <div
        className="bg-slate-900 text-white py-3 px-4 text-center text-sm"
        role="region"
        aria-label="Quick actions"
      >
        <p className="max-w-2xl mx-auto">
          Unsure if you need an appointment?{" "}
          <a
            href="https://symptomate.com/interview/0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-300 hover:text-blue-200 underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
          >
            Check your symptoms for free
          </a>
          {" "}or{" "}
          <Link
            href="/patient-resources/pricing"
            className="font-semibold text-blue-300 hover:text-blue-200 underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
          >
            view our transparent pricing
          </Link>
          .
        </p>
      </div>
      <div className="container py-12 md:py-16 max-w-5xl">
        <section
          className="mb-12"
          aria-labelledby="gallery-heading"
        >
          <h2 id="gallery-heading" className="text-xl font-bold text-slate-900 mb-6">
            Services Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {gallery.map(({ src, alt, caption }) => (
              <figure key={caption} className="rounded-xl overflow-hidden shadow-medical bg-white border border-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="p-4 text-center font-semibold text-slate-900 text-sm">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <ServiceDetailSection
          id="labs"
          title="On-Site Labs"
          description="Skip the wait for outside labs. We process critical tests in-house so you get answers during your visit. Results in minutes for Strep, Flu, Mono, and Urinalysis—no waiting for an outside lab."
          items={[
            "Rapid Strep A — results in minutes",
            "Influenza A & B — results in minutes",
            "Mononucleosis — results in minutes",
            "Urinalysis — same-visit results",
            "Glucose levels",
            "Pregnancy tests (HCG)",
          ]}
          ctaText="Call 317-956-6288"
        />

        <ServiceDetailSection
          id="ekg"
          title="EKG Services"
          description="We provide resting electrocardiograms (EKG/ECG) to monitor heart health and evaluate chest pain or shortness of breath. Immediate physician interpretation so you leave with clarity."
          items={[
            "Immediate physician interpretation for chest pain or heart health",
            "Digital results for your primary care",
            "Non-invasive 12-lead testing",
          ]}
          ctaText="Call 317-956-6288"
        />

        <Link href="/services" className="text-primary-blue font-medium hover:underline inline-block mt-8">
          ← All services
        </Link>
      </div>
    </div>
  );
}
