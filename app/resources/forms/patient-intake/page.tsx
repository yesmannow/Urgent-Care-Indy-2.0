import type { Metadata } from "next";
import Link from "next/link";
import { PatientIntakeForm } from "@/components/forms/FormBuilders";

export const metadata: Metadata = {
  title: "New Patient Registration | Urgent Care Indy",
  description:
    "Complete your new patient registration online before your visit. Reduce wait times.",
};

export default function PatientIntakeFormPage() {
  return (
    <div className="bg-slate-50 py-12 min-h-screen">
      <div className="container px-4 max-w-3xl mx-auto">
        <PatientIntakeForm />
        <p className="mt-8 text-center">
          <Link
            href="/resources/forms"
            className="text-primary-blue font-medium hover:underline"
          >
            ← All forms
          </Link>
        </p>
      </div>
    </div>
  );
}
