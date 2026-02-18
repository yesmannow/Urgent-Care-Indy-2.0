import Link from "next/link";
import Image from "next/image";
import { Clock, Video, CreditCard, Star } from "lucide-react";

const HERO_IMAGE = "/images/home/hero-bg.jpg";

export function HeroSection() {

  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Brand Promise */}
          <div className="space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-bold border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Current Wait: &lt; 15 Mins
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Urgent Care that <br />
              <span className="text-teal-600">respects your time.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Walk-ins welcome. X-Ray on-site. Family-owned and serving Indianapolis with
              hospital-grade care at a fraction of the cost.
            </p>

            {/* The "Get Care" Action Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule"
                className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-blue-900/10 transform hover:-translate-y-1"
              >
                Save Your Spot
              </Link>
              <Link
                href="https://www.mymedicallocker.com/"
                target="_blank"
                className="flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-teal-500 hover:text-teal-600 text-slate-700 font-bold rounded-xl transition-all"
              >
                <Video className="w-5 h-5 mr-2" /> Telehealth
              </Link>
            </div>

            <div className="flex gap-6 pt-4 text-slate-500 text-sm font-medium border-t border-slate-100 mt-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" /> Open 7 Days
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-teal-600" /> Most Insurance
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-600" /> 4.8/5 Reviews
              </div>
            </div>
          </div>

          {/* Right: Visual Hero (Using specific image) */}
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white lg:translate-x-10">
            <Image
              src={HERO_IMAGE}
              alt="Doctor attentively examining a patient with a stethoscope at UrgentCare Indy"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-950/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
