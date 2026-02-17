import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, Award, ArrowRight } from "lucide-react";
import { getPexelsImageUrl } from "@/lib/pexels";

const FALLBACK_FEATURE =
  "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion First",
    desc: "We treat the person, not just the symptom, with kindness and empathy in every interaction.",
  },
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "We adhere to the highest ethical standards, ensuring honest and transparent care.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Our board-certified team is committed to continuous learning and top-tier medical outcomes.",
  },
];

export async function AboutClinicSection() {
  const [featureUrl, ...valueUrls] = await Promise.all([
    getPexelsImageUrl("doctor smiling with patient in modern clinic", {
      orientation: "landscape",
    }),
    getPexelsImageUrl("medical teamwork", { orientation: "landscape" }),
    getPexelsImageUrl("ethical doctor", { orientation: "landscape" }),
    getPexelsImageUrl("high-quality medical care", { orientation: "landscape" }),
  ]);

  const featureImage = featureUrl ?? FALLBACK_FEATURE;
  const valueImages = valueUrls.map((url) => url ?? FALLBACK_FEATURE);

  return (
    <section
      className="py-16 md:py-24 bg-white overflow-hidden"
      aria-labelledby="about-clinic-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2
              id="about-clinic-heading"
              className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4"
            >
              Our Story
            </h2>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your Trusted, Locally-Owned Partner in Health.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Serving the community for over a decade, UrgentCare Indy is your
              neighborhood clinic. We&apos;re committed to compassionate,
              accessible care—because great care starts with a personal
              connection.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Our mission is simple: to get you back to feeling your best, as
              quickly and safely as possible. When you walk through our doors,
              you&apos;re treated like family by a team that truly cares.
            </p>
            <Link
              href="/our-clinic"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Meet Our Team
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden
              />
            </Link>
          </div>

          {/* Feature Image */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[560px] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <Image
              src={featureImage}
              alt="Doctor and patient in a warm, modern clinic setting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"
              aria-hidden
            />
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            const bgImage = valueImages[idx];
            return (
              <div
                key={value.title}
                className="relative bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 overflow-hidden group hover:shadow-lg hover:border-slate-200 transition-all duration-300"
              >
                {/* Subtle background image – more visible on hover */}
                {bgImage && (
                  <div
                    className="absolute inset-0 opacity-[0.06] group-hover:opacity-20 transition-opacity duration-500"
                    aria-hidden
                  >
                    <Image
                      src={bgImage}
                      alt=""
                      fill
                      className="object-cover grayscale"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="bg-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl shadow-sm mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-teal-600" aria-hidden />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
