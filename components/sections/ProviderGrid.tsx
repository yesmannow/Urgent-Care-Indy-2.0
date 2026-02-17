import Image from "next/image";

const providers = [
  {
    name: "Dr. James Pike",
    role: "Medical Director",
    img: "/images/clinic/providers/james-pike.jpg",
  },
  {
    name: "Chase Keirn",
    role: "Board Certified PA-C",
    img: "/images/clinic/providers/chase-keirn.webp",
  },
  {
    name: "Karina White",
    role: "Provider",
    img: "/images/clinic/providers/karina-white.webp",
  },
  {
    name: "Maddie Klinger",
    role: "Provider",
    img: "/images/clinic/providers/maddie-klinger.webp",
  },
];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {providers.map(({ name, role, img }, index) => (
          <div
            key={name}
            className="rounded-2xl overflow-hidden shadow-medical bg-white border border-slate-100"
          >
            <div className="relative aspect-square">
              <Image
                src={img}
                alt={`${name}, ${role}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 2}
              />
            </div>
            <div className="p-4 text-center">
              <p className="font-bold text-slate-900">{name}</p>
              <p className="text-sm text-slate-500 italic">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
