import { HomePageWithSaveSpot } from "@/components/home/HomePageWithSaveSpot";
import { DiagnosticsBento } from "@/components/home/DiagnosticsBento";
import { ProviderPreview } from "@/components/home/ProviderPreview";
import { MembershipTransition } from "@/components/home/MembershipTransition";
import { Testimonials } from "@/components/home/Testimonials";
import { ERvsUrgentCare } from "@/components/home/ERvsUrgentCare";
import { EmployerServiceBar } from "@/components/home/EmployerServiceBar";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";
import { CorporateQuoteSection } from "@/components/home/CorporateQuoteSection";
import { AboutClinicSection } from "@/components/sections/AboutClinicSection";
import { PatientResourceSection } from "@/components/home/PatientResourceSection";
import { TriageMatrix } from "@/components/home/TriageMatrix";
import { cookies } from "next/headers";
import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE, normalizeLanguage } from "@/lib/i18n";

export default async function Home() {
  const language = normalizeLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value ?? DEFAULT_LANGUAGE);
  return (
    <>
      <HomePageWithSaveSpot
        language={language}
        insertAfterHero={
          <>
            <DiagnosticsBento />
            <ProviderPreview />
            <MembershipTransition />
            <Testimonials />
            <ERvsUrgentCare />
            <EmployerServiceBar />
            <WhyPartnerSection />
            <CorporateQuoteSection />
          </>
        }
        insertBeforeMain={<AboutClinicSection />}
        bottomSections={<PatientResourceSection />}
      />
      <TriageMatrix />
    </>
  );
}
