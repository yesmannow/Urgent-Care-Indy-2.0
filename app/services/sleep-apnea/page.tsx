import type { Metadata } from "next";
import Link from "next/link";
import { ServiceDetailLayout } from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Sleep Apnea Testing | Urgent Care Indy",
  description:
    "At-home sleep apnea testing with ApneaLink Plus. Type III home sleep testing. Board certified physician review. Call to schedule.",
};

export default function SleepApneaPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceDetailLayout
        title="Sleep Apnea Testing"
        subtitle="At-home diagnostic testing with the ApneaLink Plus."
      >
        <p className="leading-relaxed">
          We offer Type III home sleep testing that provides reliable results
          without an overnight facility stay. You take the device home, wear it
          for one night, and return it—no need to spend the night in a lab.
        </p>

        <p className="leading-relaxed mt-4">
          Our Board Certified Physician reviews all results. You&apos;ll receive
          a clear report and, if needed, guidance on next steps (e.g., CPAP or
          other treatment).
        </p>

        <p className="leading-relaxed mt-4 font-medium text-slate-900">
          Call to schedule a screening:{" "}
          <a
            href="tel:+13179566288"
            className="text-primary-blue font-semibold hover:underline"
          >
            (317) 956-6288
          </a>
        </p>
      </ServiceDetailLayout>

      <div className="container mx-auto px-4 max-w-6xl pb-12">
        <Link
          href="/services"
          className="text-primary-blue font-medium hover:underline"
        >
          ← All services
        </Link>
      </div>
    </div>
  );
}
