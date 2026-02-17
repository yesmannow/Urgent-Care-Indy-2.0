import { StickyAnnouncementBar } from "@/components/home/StickyAnnouncementBar";
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

export default async function Home() {
  return (
    <>
      <StickyAnnouncementBar />
      <HomePageWithSaveSpot
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
    </>
  );
}
