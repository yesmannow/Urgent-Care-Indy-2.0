import Link from "next/link";

export default function PatientServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Patient Services
      </h1>
      <p className="text-slate-600 mb-6">
        Explore our urgent care, diagnostics, and wellness services.
      </p>
      <Link
        href="/"
        className="text-primary-blue font-medium hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}
