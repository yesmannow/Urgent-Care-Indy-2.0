"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

const HERO_IMAGE = "/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg";

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

interface HeroSectionProps {
  onSaveSpotClick?: () => void;
  language?: import("@/lib/i18n").Language;
}

function useCurrentTime(intervalMs = 60_000) {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const format = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }));
    };
    format();
    const id = setInterval(format, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return currentTime;
}

export function HeroSection({ onSaveSpotClick, language = "en" }: HeroSectionProps) {
  const lastUpdated = useCurrentTime();
  const copy =
    language === "es"
      ? {
          h1: "Urgencias que respetan tu tiempo.",
          sub: "Entra y sal en menos de 45 minutos. Sin cita previa.",
          ctaSave: "Reservar mi lugar",
          ctaTele: "Registro de telemedicina",
          status: "Estado en vivo",
          wait: "Tiempo de espera",
          updated: "Actualizado:",
          openUntil: "Abierto hasta",
          insurance: "Seguro",
          insuranceAccepted: "Aceptado",
          call: "Llamar (317) 956-6288",
        }
      : {
          h1: "Urgent Care that Respects Your Time.",
          sub: "In and out in under 45 minutes. No appointment needed.",
          ctaSave: "Save My Spot",
          ctaTele: "Telemedicine Check-in",
          status: "Live Status",
          wait: "Current Wait Time",
          updated: "Last updated:",
          openUntil: "Open Until",
          insurance: "Insurance",
          insuranceAccepted: "Accepted",
          call: "Call (317) 956-6288",
        };
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background: hero image + gradient overlay (slate-900/90 → slate-900/40) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Medical professional in blue scrubs writing on a clipboard with a stethoscope"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"
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
              {copy.h1}
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-4 text-lg md:text-xl text-slate-200"
            >
              {copy.sub}
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-4"
            >
              {onSaveSpotClick ? (
                <button
                  type="button"
                  onClick={onSaveSpotClick}
                  className="btn-primary-pulse min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-blue text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Save your spot at our Michigan Road clinic"
                >
                  {copy.ctaSave}
                </button>
              ) : (
                <Link
                  href="/schedule"
                  className="btn-primary-pulse min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-blue text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Save your spot at our Michigan Road clinic"
                >
                  {copy.ctaSave}
                </Link>
              )}
              <Link
                href="/portal"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/80 bg-transparent text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                {copy.ctaTele}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Live Status glass card – prominent Open Until & Wait Time with green "Live" dot */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:justify-self-end w-full max-w-sm"
          >
            <motion.div
              variants={item}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse"
                  aria-hidden
                />
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                  {copy.status}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-200">{copy.wait}</span>
                    <span className="flex items-center gap-2 font-bold text-white text-lg">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse"
                        aria-hidden
                      />
                      <span className="status-pulse">15 mins</span>
                    </span>
                  </div>
                  {lastUpdated && (
                    <p className="text-xs text-white/70">
                      {copy.updated} {lastUpdated}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-200">{copy.openUntil}</span>
                  <span className="flex items-center gap-2 font-bold text-white text-lg">
                    <Clock className="h-5 w-5 text-white/80 shrink-0" aria-hidden />
                    6:30 PM
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-slate-200">{copy.insurance}</span>
                  <span className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" aria-hidden />
                    {copy.insuranceAccepted}
                  </span>
                </div>
                <a
                  href="tel:+13179566288"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Call (317) 956-6288"
                >
                  {copy.call}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
