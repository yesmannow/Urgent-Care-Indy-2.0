import Link from "next/link";

export default function PayBillPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Pay Bill</h1>
      <p className="text-slate-600 mb-6">
        Pay your bill online.
      </p>
      <Link href="/" className="text-primary-blue font-medium hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
