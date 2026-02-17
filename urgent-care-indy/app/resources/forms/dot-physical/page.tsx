import type { Metadata } from "next";
import Link from "next/link";
import { DOTPhysicalForm } from "@/components/forms/FormBuilders";

export const metadata: Metadata = {
  title: "DOT Physical Pre-Registration | Urgent Care Indy",
  description:
    "Pre-register for your commercial driver DOT physical. Save time at your appointment.",
};

export default function DOTPhysicalFormPage() {
  return (
    <div className="bg-slate-50 py-12 min-h-screen">
      <div className="container px-4 max-w-3xl mx-auto">
        <DOTPhysicalForm />
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
