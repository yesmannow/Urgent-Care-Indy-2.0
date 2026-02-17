import { ExpandableProviderGrid } from "@/components/ui/ExpandableProviderGrid";

export function ProviderGrid() {
  return (
    <section
      className="py-12 md:py-16"
      aria-labelledby="providers-heading"
    >
      <h2
        id="providers-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
      >
        Meet Our Providers
      </h2>
      <ExpandableProviderGrid headingId="providers-heading" />
    </section>
  );
}
