import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Activity,
  HeartPulse,
  Thermometer,
  Stethoscope,
  Bone,
  Syringe,
  Eye,
  ShieldCheck,
  Clock,
  DollarSign,
  Users,
  AlertCircle,
} from "lucide-react";
import { SaveSpotCtaSection } from "@/components/sections/SaveSpotCtaSection";
import { SymptomCheckerCTA } from "@/components/ui/SymptomCheckerCTA";

export const metadata: Metadata = {
  title: "Urgent Care vs ER | When to Go Where | Urgent Care Indy",
  description:
    "Know when to choose urgent care vs the ER. For Indianapolis and Pike Township: minor injuries, fever, burns—we're here. Life-threatening? Call 911.",
};

const HERO_IMAGE = "/images/clinic/providers/chase-keirn.webp";

const quickFacts = [
  {
    stat: "160M",
    label: "People treated annually at Urgent Care facilities",
    icon: Users,
  },
  {
    stat: "10–15x",
    label: "Urgent Care is often cheaper than a Free-Standing ER",
    icon: DollarSign,
  },
  {
    stat: "74%",
    label: "Of patients find Urgent Care costs highly reasonable",
    icon: Clock,
  },
  {
    stat: "3%",
    label: "Only 3% of Urgent Care patients need diversion to an ER",
    icon: ShieldCheck,
  },
];

type ConditionRow = {
  name: string;
  uc: string;
  er: string;
  freestanding: string;
  icon: React.ComponentType<{ className?: string }>;
};

const conditions: ConditionRow[] = [
  {
    name: "Cuts needing stitches",
    uc: "Yes — Fast",
    er: "Yes — Expensive",
    freestanding: "Yes — 10–15x cost",
    icon: Scissors,
  },
  {
    name: "Broken bones (simple)",
    uc: "Yes — On-site X-Ray",
    er: "Yes — High cost",
    freestanding: "Yes — High cost",
    icon: Activity,
  },
  {
    name: "Sprains & strains",
    uc: "Yes",
    er: "Yes",
    freestanding: "Yes — Much higher cost",
    icon: Bone,
  },
  {
    name: "Flu & high fever",
    uc: "Yes — Rapid testing",
    er: "Yes — Long wait",
    freestanding: "Yes — Long wait, high cost",
    icon: Thermometer,
  },
  {
    name: "Minor burns",
    uc: "Yes",
    er: "Yes",
    freestanding: "Yes — Higher cost",
    icon: AlertCircle,
  },
  {
    name: "Stomach bug / vomiting",
    uc: "Yes",
    er: "Yes",
    freestanding: "Yes",
    icon: Stethoscope,
  },
  {
    name: "Pink eye / minor eye issues",
    uc: "Yes",
    er: "Yes",
    freestanding: "Yes",
    icon: Eye,
  },
  {
    name: "Animal bite / insect sting",
    uc: "Yes",
    er: "Yes",
    freestanding: "Yes",
    icon: Syringe,
  },
  {
    name: "Heart attack / stroke",
    uc: "No — Go to ER",
    er: "Yes — Specialized",
    freestanding: "May transfer — Delayed care",
    icon: HeartPulse,
  },
];

export default function UrgentCareVsErPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero: split layout */}
      <section
        className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden"
        aria-label="Urgent Care vs ER"
      >
        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-24">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              If you don&apos;t need an ambulance, why go to an ER?
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Urgent Care Indy helps fill the gap when you&apos;re sick or hurt
              and your regular doctor isn&apos;t available. Cuts, sprains, fever,
              flu—we can get you on the road to healing.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-medical">
            <Image
              src={HERO_IMAGE}
              alt="Chase Keirn, PA-C at Urgent Care Indy"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Symptom triage CTA (2026 Speed-to-Lead) */}
      <section className="container py-8">
        <SymptomCheckerCTA />
      </section>

      {/* Stat Grid: Did You Know? */}
      <section
        className="py-12 md:py-16 border-y border-slate-200 bg-blue-50/80"
        aria-labelledby="did-you-know-heading"
      >
        <div className="container">
          <h2
            id="did-you-know-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
          >
            Did You Know?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map(({ stat, label, icon: Icon }) => (
              <div
                key={stat}
                className="rounded-xl bg-white border border-slate-200 p-6 shadow-medical text-center"
              >
                <Icon
                  className="h-8 w-8 text-primary-blue mx-auto mb-3"
                  aria-hidden
                />
                <p className="text-2xl md:text-3xl font-bold text-slate-900">
                  {stat}
                </p>
                <p className="mt-2 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to go to ER (educational) */}
      <section
        className="container py-12 md:py-16 border-b border-slate-200"
        aria-labelledby="when-er-heading"
      >
        <h2
          id="when-er-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
        >
          When do you go to an emergency room?
        </h2>
        <div className="max-w-3xl prose prose-slate">
          <p className="text-slate-600 text-lg leading-relaxed">
            Call 911 or go to the emergency room if you&apos;re{" "}
            <strong className="text-slate-900">systemically sick</strong>—when
            an illness affects your whole body, with severe pain or sudden
            severe symptoms, a fever that won&apos;t break, or something that
            doesn&apos;t work (e.g., you can&apos;t move an arm or leg or breathe
            normally). Hospital ERs are equipped for life-threatening
            emergencies: heart attack, stroke, seizures, and traumatic injuries
            from serious accidents.
          </p>
        </div>
      </section>

      {/* Freestanding ER (educational) */}
      <section
        className="container py-12 md:py-16 border-b border-slate-200 bg-slate-50/50"
        aria-labelledby="freestanding-er-heading"
      >
        <h2
          id="freestanding-er-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
        >
          What about freestanding emergency rooms?
        </h2>
        <div className="max-w-3xl prose prose-slate">
          <p className="text-slate-600 text-lg leading-relaxed">
            Freestanding ERs have appeared in many neighborhoods. They&apos;re
            not connected to a full-service hospital. Their fees are often as
            high as a hospital ER, but they lack proximity to definitive care
            for stroke, heart attack, or trauma requiring immediate surgery.
            Very sick patients may need to be transported to a hospital—adding
            cost and risk. For non–life-threatening conditions,{" "}
            <strong className="text-slate-900">
              urgent care is safer and far more cost-effective
            </strong>
            , often 10–15x cheaper than a freestanding ER.
          </p>
        </div>
      </section>

      {/* Local scenarios */}
      <section
        className="container py-12 md:py-16 border-b border-slate-200"
        aria-labelledby="local-scenarios-heading"
      >
        <h2
          id="local-scenarios-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
        >
          Choosing Urgent Care Indy
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-6">
          Maybe you tripped on a step at Eagle Creek Park and can&apos;t put
          weight on a swollen ankle. Perhaps your child spiked a fever on a
          Saturday night in Pike Township and the pediatrician&apos;s office is
          closed. Or you had a minor kitchen burn at home. In these situations,
          urgent care is the right choice—walk in, get seen, and get back to
          your day.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          Patients choose urgent care when a primary care doctor isn&apos;t
          available, for minor emergencies like sprains, cuts needing stitches,
          and common illnesses like colds, flu, and allergies—and for shorter
          wait times and lower costs than freestanding or hospital ERs.
        </p>
      </section>

      {/* Condition Comparison Matrix */}
      <section
        className="container py-12 md:py-16 border-b border-slate-200"
        aria-labelledby="comparison-heading"
      >
        <h2
          id="comparison-heading"
          className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
        >
          Urgent Care, Emergency Room, or Freestanding ER?
        </h2>
        <p className="text-slate-600 mb-8 max-w-3xl">
          A quick guide to where you can get the right care for common
          conditions.
        </p>

        {/* Desktop: table with horizontal scroll on small */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full min-w-[640px] border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-medical">
            <thead>
              <tr className="bg-slate-100">
                <th
                  scope="col"
                  className="text-left p-4 text-sm font-semibold text-slate-900 border-b border-slate-200"
                >
                  Condition
                </th>
                <th
                  scope="col"
                  className="text-left p-4 text-sm font-semibold text-primary-blue bg-primary-blue/10 border-b border-l border-slate-200"
                >
                  Urgent Care Indy
                </th>
                <th
                  scope="col"
                  className="text-left p-4 text-sm font-semibold text-slate-900 border-b border-l border-slate-200"
                >
                  Hospital ER
                </th>
                <th
                  scope="col"
                  className="text-left p-4 text-sm font-semibold text-slate-900 border-b border-l border-slate-200"
                >
                  Free-Standing ER
                </th>
              </tr>
            </thead>
            <tbody>
              {conditions.map(({ name, uc, er, freestanding, icon: Icon }) => (
                <tr
                  key={name}
                  className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50/50"
                >
                  <td className="p-4 border-r border-slate-200 text-slate-700">
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-5 w-5 text-slate-500 shrink-0" aria-hidden />
                      {name}
                    </span>
                  </td>
                  <td className="p-4 border-r border-slate-200 bg-primary-blue/5 font-medium text-primary-blue">
                    {uc}
                  </td>
                  <td className="p-4 border-r border-slate-200 text-slate-600">
                    {er}
                  </td>
                  <td className="p-4 text-slate-600">{freestanding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: cards (same data, card per condition) */}
        <div className="mt-8 md:hidden space-y-4">
          {conditions.map(({ name, uc, er, freestanding, icon: Icon }) => (
            <div
              key={name}
              className="rounded-xl border border-slate-200 p-4 shadow-medical bg-white"
            >
              <div className="flex items-center gap-2 text-slate-900 font-medium mb-3">
                <Icon className="h-5 w-5 text-primary-blue shrink-0" aria-hidden />
                {name}
              </div>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Urgent Care Indy</dt>
                  <dd className="font-medium text-primary-blue">{uc}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Hospital ER</dt>
                  <dd className="text-slate-600">{er}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Free-Standing ER</dt>
                  <dd className="text-slate-600">{freestanding}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA with parallax + iSalus modal */}
      <SaveSpotCtaSection />

      {/* Secondary CTA */}
      <section className="container py-12 md:py-16">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10 text-center">
          <p className="text-lg font-semibold text-slate-900 mb-4">
            Need help deciding? We&apos;re here.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
