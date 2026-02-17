import type { Metadata } from "next";
import Link from "next/link";
import { DynamicHero } from "@/components/ui/DynamicHero";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "2025-2026 Flu Season FAQ | Urgent Care Indy",
  description:
    "Flu vaccines: Quadrivalent and High-Dose for 65+. Walk-ins only. Most insurance covers 100%. Self-pay $37 standard, $55 high-dose. Walk in 8am–6:30pm.",
};

const faqs = [
  {
    question: "What flu vaccines are you carrying?",
    answer:
      "We carry Quadrivalent flu vaccine for the general population and High-Dose flu vaccine for adults 65 and older, which is designed to create a stronger immune response.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No. We are walk-ins only for flu shots. Come in anytime during our hours and we'll get you vaccinated.",
  },
  {
    question: "Is it covered by insurance?",
    answer:
      "Yes. Most major plans cover the flu shot 100% as preventative care. We'll verify your benefits at the visit.",
  },
  {
    question: "What is the self-pay price?",
    answer:
      "Standard Quadrivalent: $37. High-Dose (for 65+): $55. Pay at time of service.",
  },
];

export default function FluFaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicHero
        query="flu vaccine clinic"
        title="2025-2026 Flu Season FAQ"
        subtitle="Walk in for your flu shot. No appointment needed."
      />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <div className="space-y-2" role="list">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-teal-600 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="border-t border-slate-100 px-5 py-4 text-slate-600 leading-relaxed">
                {answer}
              </div>
            </details>
          ))}
        </div>

        {/* Footer CTA */}
        <section
          className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center"
          aria-labelledby="flu-cta-heading"
        >
          <h2
            id="flu-cta-heading"
            className="text-xl font-bold text-slate-900 mb-2"
          >
            Protect yourself today.
          </h2>
          <p className="text-slate-700 font-medium">
            Walk in between 8:00 AM and 6:30 PM.
          </p>
          <p className="text-slate-600 text-sm mt-2">
            Mon–Fri 8am–6:30pm · Sat 8am–2:30pm
          </p>
          <a
            href="tel:+13179566288"
            className="mt-4 inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Call (317) 956-6288
          </a>
        </section>

        <p className="mt-8">
          <Link
            href="/services/prevention#vaccines"
            className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
          >
            ← Vaccines & Shots
          </Link>
        </p>
      </div>
    </div>
  );
}
