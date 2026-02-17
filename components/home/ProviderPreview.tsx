import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

const providers = [
  {
    name: "James D. Pike, D.O.",
    role: "Medical Director",
    specialty: "Triple Board Certified",
    bio: "Over 3 decades of expertise. U.S. Army physician (10 yrs). Specialist in Internal, Pulmonary, and Critical Care Medicine.",
    img: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
  },
  {
    name: "Karina White, DMS",
    role: "PA-C",
    specialty: "Doctor of Medical Science",
    bio: "Highest level of PA education (DMS) with advanced clinical training and academic leadership.",
    img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
  },
  {
    name: "Chase Keirn, PA-C",
    role: "Clinical Director",
    specialty: "Pulmonology Specialist",
    bio: "Expert in lung nodules and complex respiratory care. Health Center Director at Marian University.",
    img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
  },
];

export function ProviderPreview() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200" aria-labelledby="care-team-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 id="care-team-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
              Specialist-Led Urgent Care
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our clinic is powered by board-certified physicians and doctoral-level clinicians, bringing hospital-grade diagnostics to a walk-in setting.
            </p>
          </div>
          <Link
            href="/our-clinic"
            className="text-teal-600 font-bold flex items-center gap-2 hover:underline group shrink-0"
          >
            Meet the Full Team
            <ArrowRight size={20} className="text-teal-500 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {providers.map((p) => (
            <div
              key={p.name}
              className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-teal-100">
                  <ShieldCheck size={14} className="text-teal-500 shrink-0" aria-hidden />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">{p.specialty}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                <p className="text-teal-600 font-semibold text-sm mb-4">{p.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
