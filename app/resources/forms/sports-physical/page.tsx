import type { Metadata } from "next";
import Link from "next/link";
import { SportsPhysicalForm } from "@/components/forms/FormBuilders";

export const metadata: Metadata = {
  title: "Sports Physical Registration | Urgent Care Indy",
  description:
    "IHSAA pre-participation physical evaluation form. Complete online before your $30 sports physical.",
};

export default function SportsPhysicalFormPage() {
  return (
    <div className="bg-slate-50 py-12 min-h-screen">
      <div className="container px-4 max-w-3xl mx-auto">
        <SportsPhysicalForm />
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
