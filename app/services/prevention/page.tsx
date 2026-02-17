import Link from "next/link";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { VaccinesSection } from "@/components/sections/VaccinesSection";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";

export default function PreventionPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicHero
        query="healthy lifestyle indianapolis"
        title="Prevention & Wellness"
        subtitle="Vaccines, physicals, and reproductive health services."
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
      <div className="container py-8">
        <Link href="/services" className="text-primary-blue font-medium hover:underline">
          ← All services
        </Link>
      </div>
      <div className="container max-w-5xl">
        <VaccinesSection />
        <ServiceDetailSection
          id="dxa"
          title="Bone Density (DXA)"
          description="Our Hologic DXA system provides the gold standard in osteoporosis screening, measuring bone mineral density with precision."
          items={[
            "T-score and Z-score analysis",
            "Fracture risk assessment",
            "Quick 15-minute scan",
            "Comfortable open-table design",
          ]}
          ctaText="Call 317-956-6288"
        />
        <ServiceDetailSection
          id="sleep"
          title="Sleep Apnea Testing"
          description="We offer Home Sleep Testing (HST) kits, allowing you to screen for Obstructive Sleep Apnea (OSA) in the comfort of your own bed. FDA-approved monitoring equipment for accurate results."
          items={[
            "FDA-approved monitoring equipment",
            "Results reviewed by board-certified specialists",
            "Follow-up coordination for CPAP/treatment",
          ]}
          ctaText="Call 317-956-6288"
        />
        <ServiceDetailSection
          id="sti"
          title="STI Screening"
          description="Confidential & compassionate testing for sexually transmitted infections. We provide a safe, non-judgmental environment for your sexual health needs."
          items={[
            "HIV",
            "Syphilis",
            "Chlamydia & Gonorrhea",
            "Hepatitis B & C",
            "Symptomatic treatment",
            "Fast, secure digital results",
          ]}
          ctaText="Call 317-956-6288"
        />
      </div>
    </div>
  );
}
