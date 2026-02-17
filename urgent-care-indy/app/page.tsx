import { HeroSection } from "@/components/home/HeroSection";
import { TrustSignals } from "@/components/home/TrustSignals";
import { TriageToggle } from "@/components/tools/TriageToggle";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { InsuranceSearchPreview } from "@/components/home/InsuranceSearchPreview";
import { ClinicMap } from "@/components/ui/ClinicMap";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <section className="container py-12 md:py-16">
        <TriageToggle />
      </section>
      <ServiceGrid />
      <InsuranceSearchPreview />
      {/* Find Us – above footer */}
      <section className="container py-12 md:py-16 border-t border-slate-200 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          Find Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <p className="text-lg font-bold text-slate-900 mb-2">
              7911 N Michigan Rd, Indianapolis, IN 46268
            </p>
            <p className="text-slate-600 mb-2">
              Mon–Fri: 8am–6:30pm | Sat: 8am–2:30pm
            </p>
            <p className="text-slate-600 mb-2">
              <a href="tel:+13179566288" className="text-primary-blue font-medium hover:underline">
                (317) 956-6288
              </a>
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Located near the intersection of N. Michigan Rd and 79th St
            </p>
          </div>
          <div className="min-h-[300px] w-full">
            <ClinicMap className="h-[300px] w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
