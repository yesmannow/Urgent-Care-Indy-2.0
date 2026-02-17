import type { Metadata } from "next";
import Link from "next/link";
import { ServiceDetailLayout } from "@/components/services/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Bone Density Scanning (DXA) | Urgent Care Indy",
  description:
    "Non-invasive DXA bone density scanning for osteoporosis. Women over 50, men with risk factors. Medicare covers qualified patients.",
};

export default function BoneDensityPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceDetailLayout
        title="Bone Density Scanning (DXA)"
        subtitle="Non-invasive diagnosis for osteoporosis."
      >
        <p className="leading-relaxed">
          DXA (dual-energy X-ray absorptiometry) measures bone mineral content
          and density. It is the gold standard for diagnosing osteoporosis and
          assessing fracture risk. The scan is quick, painless, and uses minimal
          radiation.
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">
          Who needs it?
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-slate-600">
          <li>Women over 50 (especially postmenopausal)</li>
          <li>Men with risk factors (family history, low body weight, steroid use)</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">
          Preparation
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Avoid vitamins and calcium on the day of the exam. Wear clothing
          without metal zippers or buttons (e.g., sweatpants and a sports bra
          or loose top).
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-2">
          Insurance
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Medicare covers one DXA scan every two years for qualified patients.
          Other plans may vary—call us to verify your coverage.
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
