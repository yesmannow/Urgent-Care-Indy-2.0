import Link from "next/link";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { VaccinesSection } from "@/components/sections/VaccinesSection";
import { ServiceDetailSection } from "@/components/sections/ServiceDetailSection";
import { InsurancePricingSection } from "@/components/sections/InsurancePricingSection";
import { StickySubNav } from "@/components/ui/StickySubNav";
import { ScrollRevealSection } from "@/components/ui/ScrollRevealSection";

const PREVENTION_NAV_LINKS = [
  { label: "Vaccines", href: "#vaccines" },
  { label: "Bone Density", href: "#dxa" },
  { label: "Sleep Testing", href: "#sleep" },
  { label: "STI Screening", href: "#sti" },
  { label: "Pricing", href: "#insurance-pricing" },
];

export default function PreventionPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicHero
        query="healthy lifestyle indianapolis"
        title="Prevention & Wellness"
        subtitle="Vaccines, physicals, and reproductive health services."
      />
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
            className="font-semibold text-teal-300 hover:text-teal-200 underline focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
          >
            Check your symptoms for free
          </a>
          {" "}or{" "}
          <Link
            href="/patient-resources/pricing"
            className="font-semibold text-teal-300 hover:text-teal-200 underline focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
          >
            view our transparent pricing
          </Link>
          .
        </p>
      </div>

      <StickySubNav links={PREVENTION_NAV_LINKS} label="Prevention sections" />

      <div className="container py-8 max-w-6xl">
        <Link
          href="/services"
          className="text-teal-600 font-semibold hover:text-teal-700 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
        >
          ← All services
        </Link>
      </div>

      <div className="container max-w-6xl pb-12">
        <ScrollRevealSection>
          <VaccinesSection />
        </ScrollRevealSection>
        <ScrollRevealSection>
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
        </ScrollRevealSection>
        <ScrollRevealSection>
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
        </ScrollRevealSection>
        <ScrollRevealSection>
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
        </ScrollRevealSection>
      </div>

      <InsurancePricingSection
        servicePrice="$37"
        pricingCtaText="View Full Pricing Menu (Flu, B12, and more)"
      />

      <div className="container max-w-6xl py-8">
        <Link
          href="/services"
          className="text-teal-600 font-semibold hover:text-teal-700 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
        >
          ← All services
        </Link>
      </div>
    </div>
  );
}
