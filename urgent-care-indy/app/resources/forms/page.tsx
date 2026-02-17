import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Truck, Activity, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Forms & Registration | Urgent Care Indy",
  description:
    "New patient registration, DOT physical pre-registration, sports physical form. Complete online before your visit.",
};

const formCards = [
  {
    title: "New Patient Registration",
    description: "Complete your intake before your first visit.",
    href: "/resources/forms/patient-intake",
    icon: FileText,
  },
  {
    title: "DOT Physical Form",
    description: "Pre-register for your commercial driver medical exam.",
    href: "/resources/forms/dot-physical",
    icon: Truck,
  },
  {
    title: "Sports Physical Form",
    description: "IHSAA pre-participation form for student athletes.",
    href: "/resources/forms/sports-physical",
    icon: Activity,
  },
];

export default function FormsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container px-4 py-12 md:py-16 max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Patient Forms & Registration
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Complete the right form online before your visit to save time.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formCards.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-medical hover:border-primary-blue/30 transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary-blue mb-6">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary-blue transition-colors">
                {title}
              </h2>
              <p className="mt-2 text-slate-600 text-sm flex-1">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-primary-blue font-semibold text-sm">
                Start Form
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
