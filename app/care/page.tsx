import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { carePaths } from "@/lib/carePaths";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Care Paths (Symptom Guides)",
  description:
    "Symptom-based guides to help you understand what we treat, what testing is available, and when to go to the ER.",
};

export default function CarePathsIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-white border-b border-slate-200">
        <div className="container py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Care Paths
          </h1>
          <p className="text-slate-600 text-lg mt-4 max-w-3xl">
            Symptom-based guides to help you decide if urgent care is right for you, what we can test for, and when you should go to the ER.
          </p>
        </div>
      </section>

      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carePaths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.slug}
                href={`/care/${path.slug}`}
                className="group focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded-[var(--radius-xl)]"
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-[var(--radius-lg)] bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <CardTitle className="mt-4">{path.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{path.summary}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-teal-700 font-semibold">
                      View guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

