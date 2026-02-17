import { HomePageWithSaveSpot } from "@/components/home/HomePageWithSaveSpot";
import { AboutClinicSection } from "@/components/sections/AboutClinicSection";

export default async function Home() {
  return (
    <>
      <HomePageWithSaveSpot />
      <AboutClinicSection />
    </>
  );
}
