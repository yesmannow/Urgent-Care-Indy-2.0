import { ExpandableProviderGrid } from "@/components/ui/ExpandableProviderGrid";

export function ProviderTeam() {
  return (
    <section
      className="py-12 md:py-16"
      aria-labelledby="team-heading"
    >
      <h2 id="team-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Meet Our Team
      </h2>
      <ExpandableProviderGrid headingId="team-heading" />
    </section>
  );
}
