import Link from "next/link";
import { InsuranceSearch } from "@/components/tools/InsuranceSearch";

export default function InsurancePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const initialQuery = typeof searchParams?.q === "string" ? searchParams.q : "";

  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Insurance We Accept</h1>
      <p className="text-slate-600 mb-8">
        Search our published list. Coverage varies by plan and may change—call to confirm.
      </p>
      <InsuranceSearch initialQuery={initialQuery} />
      <p className="mt-8">
        <Link href="/" className="text-primary-blue font-medium hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
