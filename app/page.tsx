import { HeroSection } from "@/components/home/HeroSection";
import { ServiceSplitter } from "@/components/home/ServiceSplitter";
import { ValueProps } from "@/components/home/ValueProps";
import { WhatWeTreatChips } from "@/components/home/WhatWeTreatChips";
import { DiagnosticCommandCenter } from "@/components/home/DiagnosticCommandCenter";
import { LocationSection } from "@/components/home/LocationSection";
import { TriageMatrix } from "@/components/home/TriageMatrix";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValueProps />
      <WhatWeTreatChips />
      <ServiceSplitter />
      <DiagnosticCommandCenter />
      <TriageMatrix />
      <LocationSection />
    </div>
  );
}
