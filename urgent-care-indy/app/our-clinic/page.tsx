import Link from "next/link";
import { ProviderTeam } from "@/components/clinic/ProviderTeam";

export default function OurClinicPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Our Clinic</h1>
      <p className="text-slate-600 mb-12">
        Learn about Urgent Care Indy and our team.
      </p>

      <ProviderTeam />

      <p className="mt-12">
        <Link href="/" className="text-primary-blue font-medium hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
