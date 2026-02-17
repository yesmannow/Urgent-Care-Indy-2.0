import Link from "next/link";

export default function UrgentCarePage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Urgent Care</h1>
      <p className="text-slate-600 mb-6">
        Minor injuries and illnesses, no appointment needed.
      </p>
      <Link href="/services" className="text-primary-blue font-medium hover:underline">
        ← All services
      </Link>
    </div>
  );
}
