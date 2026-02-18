import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Stethoscope,
  Briefcase,
  FlaskConical,
  ShieldCheck,
  Bone,
  Moon,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Urgent care, occupational health, diagnostics, prevention, and wellness services in Indianapolis. Walk-ins welcome.",
};

const SERVICE_LINKS = [
  {
    href: "/services/urgent-care",
    label: "Urgent Care",
    description: "Illness, injury, wellness, and labs. Walk-in or save your spot.",
    icon: Stethoscope,
  },
  {
    href: "/services/occupational-health",
    label: "Occupational Health",
    description: "DOT physicals, drug testing, workers' comp, and employer solutions.",
    icon: Briefcase,
  },
  {
    href: "/services/diagnostics",
    label: "Diagnostics",
    description: "X-ray, EKG, lab work, and on-site testing.",
    icon: FlaskConical,
  },
  {
    href: "/services/prevention",
    label: "Prevention & Wellness",
    description: "Screenings, vaccines, STI testing, and preventive care.",
    icon: ShieldCheck,
  },
  {
    href: "/services/bone-density",
    label: "Bone Density (DXA)",
    description: "Bone health screening and osteoporosis risk assessment.",
    icon: Bone,
  },
  {
    href: "/services/sleep-apnea",
    label: "Sleep Apnea Testing",
    description: "At-home and in-lab sleep studies.",
    icon: Moon,
  },
  {
    href: "/services/flu-faq",
    label: "Flu Season FAQ",
    description: "What to know about flu shots and flu care.",
    icon: Activity,
  },
  {
    href: "/resources/forms",
    label: "Patient Forms & Resources",
    description: "Intake forms, DOT and sports physical forms, and downloads.",
    icon: FileText,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs />

      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Services
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Urgent care, diagnostics, and wellness services. Walk-ins welcome—find the right care
            fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col p-6 rounded-2xl border border-slate-200 bg-white hover:border-teal-300 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                    <Icon className="w-5 h-5" aria-hidden />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.label}
                  </h2>
                </div>
                <p className="text-slate-600 text-sm flex-1">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-teal-600 font-semibold text-sm">
                  View service
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-slate-600 text-sm">
            Not sure what you need?{" "}
            <Link
              href="/care"
              className="font-semibold text-teal-600 hover:text-teal-700 underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            >
              Browse Care Paths by symptom
            </Link>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg shrink-0"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
