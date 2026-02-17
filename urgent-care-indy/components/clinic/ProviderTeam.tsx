import Image from "next/image";

const providers = [
  {
    name: "Chase Keirn",
    title: "Nurse Practitioner",
    image: "/images/clinic/providers/chase-keirn.webp",
  },
  {
    name: "James Pike",
    title: "Nurse Practitioner",
    image: "/images/clinic/providers/james-pike.jpg",
  },
  {
    name: "Karina White",
    title: "Nurse Practitioner",
    image: "/images/clinic/providers/karina-white.webp",
  },
  {
    name: "Maddie Klinger",
    title: "Nurse Practitioner",
    image: "/images/clinic/providers/maddie-klinger.webp",
  },
];

export function ProviderTeam() {
  return (
    <section
      className="py-12 md:py-16"
      aria-labelledby="team-heading"
    >
      <h2 id="team-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {providers.map(({ name, title, image }) => (
          <div
            key={name}
            className="rounded-2xl overflow-hidden shadow-medical bg-white border border-slate-100"
          >
            <div className="relative aspect-square">
              <Image
                src={image}
                alt={`${name}, ${title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-slate-900">{name}</p>
              <p className="text-sm text-slate-500 italic">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
