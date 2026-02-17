"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image + heavy overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-slate-900/70"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Messaging */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Urgent Care that Respects Your Time.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-4 text-lg md:text-xl text-slate-200"
            >
              In and out in under 45 minutes. No appointment needed.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/schedule"
                className="btn-primary-pulse min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Save My Spot
              </Link>
              <Link
                href="/portal"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/80 bg-transparent text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Telemedicine Check-in
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Hero image with glass card over (human connection) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:justify-self-end relative w-full max-w-sm"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg"
                alt="Provider and patient – Urgent Care Indy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-slate-900/30" aria-hidden />
            </div>
            <motion.div
              variants={item}
              className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              <p className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                Live Status
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-200">Current Wait Time</span>
                  <span className="flex items-center gap-2 font-bold text-white">
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0"
                      aria-hidden
                    />
                    15 mins
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-200">Open Until</span>
                  <span className="flex items-center gap-2 font-bold text-white">
                    <Clock className="h-5 w-5 text-white/80 shrink-0" aria-hidden />
                    8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-200">Insurance</span>
                  <span className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" aria-hidden />
                    Accepted
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
