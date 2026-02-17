import Link from "next/link";
import { DynamicHero } from "@/components/ui/DynamicHero";

export default function PreventionPage() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicHero
        query="healthy lifestyle indianapolis"
        title="Prevention & Wellness"
        subtitle="Vaccines, physicals, and reproductive health services."
      />
      <div className="container py-16">
        <Link href="/services" className="text-primary-blue font-medium hover:underline">
          ← All services
        </Link>
      </div>
    </div>
  );
}
