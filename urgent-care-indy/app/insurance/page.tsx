import Link from "next/link";
import { InsuranceSearch } from "@/components/tools/InsuranceSearch";

export default function InsurancePage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Insurance We Accept
      </h1>
      <p className="text-slate-600 mb-8">
        Check your plan and coverage. Most major plans accepted.
      </p>
      <InsuranceSearch />
      <p className="mt-8">
        <Link href="/" className="text-primary-blue font-medium hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
