import Link from "next/link";
import { AlertTriangle, ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import type { CarePath } from "@/lib/carePaths";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type Props = {
  path: CarePath;
  extra?: ReactNode;
};

export function CarePathPage({ path, extra }: Props) {
  const Icon = path.icon;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-white border-b border-slate-200">
        <div className="container py-12 md:py-16">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-[var(--radius-lg)] bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-teal-700 uppercase tracking-wider">Care Path</p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
                {path.title}
              </h1>
              <p className="text-slate-600 text-lg mt-4 max-w-3xl">{path.summary}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-700">
              <Clock className="h-4 w-4" aria-hidden /> Walk-in friendly
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-700">
              <MapPin className="h-4 w-4" aria-hidden /> Michigan Rd clinic
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 text-slate-700">
              <Phone className="h-4 w-4" aria-hidden /> (317) 956-6288
            </span>
          </div>
        </div>
      </section>

      <div className="container py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>We Can Help With</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                {path.treatedHere.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Testing & Services (When Appropriate)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                {path.testing.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-blue shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="h-10 w-10 rounded-[var(--radius-lg)] bg-red-50 text-red-700 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5" aria-hidden />
                </span>
                Go to the ER Now If You Have
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                {path.whenToGoEr.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-4">
                Not sure?{" "}
                <Link href="/resources/urgent-care-vs-er" className="text-teal-700 font-semibold hover:underline">
                  Learn when to choose urgent care vs. ER
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Bring</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                {path.whatToBring.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {extra}

          <div className="pt-2">
            <Link
              href="/care"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:underline"
            >
              Browse all care paths <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-24">
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ButtonLink href="/schedule" className="w-full">
                Check In / Schedule
              </ButtonLink>
              <a
                href="tel:+13179566288"
                className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] rounded-[var(--radius-md)] bg-white border-2 border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call (317) 956-6288
              </a>
              <a
                href="https://www.google.com/maps/dir//7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] rounded-[var(--radius-md)] bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                Get Directions
              </a>
              <p className="text-xs text-slate-500">
                This information is general and not a substitute for medical advice. For life-threatening emergencies, call 911.
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

