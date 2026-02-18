import Link from "next/link";
import Image from "next/image";
import { Microscope, Activity, Moon, ArrowUpRight } from "lucide-react";
import { getPexelsImageUrl } from "@/lib/pexels";

const FALLBACK = "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

const bentoItems = [
  {
    title: "On-Site Labs",
    desc: "Results in minutes for Strep, Flu, and Mono.",
    icon: Microscope,
    href: "/services/diagnostics#labs",
    size: "md:col-span-2",
    imgQuery: "modern medical lab",
    imgAlt: "Modern clinical laboratory with microscope and testing equipment",
  },
  {
    title: "Bone Density",
    desc: "Hologic DXA osteoporosis screening.",
    icon: Activity,
    href: "/services/prevention#dxa",
    size: "md:col-span-1",
    imgQuery: "bone scan medical",
    imgAlt: "Blue-toned medical imaging display showing a bone scan",
  },
  {
    title: "Sleep Testing",
    desc: "FDA-approved Home Sleep Testing (HST).",
    icon: Moon,
    href: "/services/prevention#sleep",
    size: "md:col-span-1",
    imgQuery: "sleep clinic",
    imgAlt: "Comfortable sleep clinic testing setup",
  },
  {
    title: "STI Screening",
    desc: "Confidential sexual health services.",
    icon: Activity,
    href: "/services/prevention#sti",
    size: "md:col-span-2",
    imgQuery: "medical consultation",
    imgAlt: "Provider speaking with a patient in a private medical consultation",
  },
];

export async function DiagnosticsBento() {
  const imageUrls = await Promise.all(
    bentoItems.map((item) =>
      getPexelsImageUrl(item.imgQuery, { orientation: "landscape" })
    )
  );

  return (
    <section
      className="py-16 md:py-20 bg-slate-50"
      aria-labelledby="diagnostics-bento-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2
          id="diagnostics-bento-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 md:mb-12 text-center"
        >
          Advanced Diagnostics & Prevention
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, i) => {
            const Icon = item.icon;
            const imgSrc = imageUrls[i] ?? FALLBACK;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${item.size} group relative overflow-hidden rounded-3xl border border-slate-200 h-[300px] md:h-[320px] transition-all hover:shadow-2xl hover:border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={imgSrc}
                    alt={item.imgAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors"
                    aria-hidden
                  />
                </div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-teal-500" aria-hidden />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-200 mt-2 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 font-bold text-teal-300 group-hover:text-teal-200 transition-colors">
                    Explore
                    <ArrowUpRight size={18} aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
