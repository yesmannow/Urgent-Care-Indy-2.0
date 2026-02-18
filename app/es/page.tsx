import { HeroSectionES } from "@/components/home/es/HeroSectionES";
import { ServiceSplitterES } from "@/components/home/es/ServiceSplitterES";
import { ValuePropsES } from "@/components/home/es/ValuePropsES";
import { LocationSectionES } from "@/components/home/es/LocationSectionES";

export default function HomeES() {
  return (
    <main className="min-h-screen" lang="es">
      <HeroSectionES />
      <ValuePropsES />
      <ServiceSplitterES />
      <LocationSectionES />
    </main>
  );
}

