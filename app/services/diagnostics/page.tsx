import Link from "next/link";
import Image from "next/image";

const gallery = [
  {
    src: "/images/services/diagnostics/blood%20pressure.jpg",
    alt: "On-site blood pressure and vitals monitoring",
    caption: "On-Site Vitals",
  },
  {
    src: "/images/services/diagnostics/rapid%20lab%20test.jpg",
    alt: "Rapid strep and flu testing",
    caption: "Rapid Strep & Flu Tests",
  },
  {
    src: "/images/services/diagnostics/thermometer1.jpg",
    alt: "Temperature and fever screening",
    caption: "Temperature & Fever Screening",
  },
];

export default function DiagnosticsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">
        Diagnostics & Testing
      </h1>
      <p className="text-slate-600 mb-12">
        On-site labs, X-ray, and rapid testing to get you answers quickly.
      </p>

      <section
        className="mb-12"
        aria-labelledby="gallery-heading"
      >
        <h2 id="gallery-heading" className="text-xl font-bold text-slate-900 mb-6">
          Services Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {gallery.map(({ src, alt, caption }) => (
            <figure key={caption} className="rounded-xl overflow-hidden shadow-medical bg-white border border-slate-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="p-4 text-center font-semibold text-slate-900 text-sm">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Link href="/services" className="text-primary-blue font-medium hover:underline">
        ← All services
      </Link>
    </div>
  );
}
