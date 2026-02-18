"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Globe, Phone } from "lucide-react";
import { EmployerMegaMenuES } from "./EmployerMegaMenuES";

export function HeaderES() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const { scrollY } = useScroll();
  const hiddenRef = useRef(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      if (hiddenRef.current) {
        hiddenRef.current = false;
        setHidden(false);
      }
      return;
    }
    const previous = scrollY.getPrevious() ?? 0;
    const nextHidden = latest > previous && latest > 150;
    if (nextHidden !== hiddenRef.current) {
      hiddenRef.current = nextHidden;
      setHidden(nextHidden);
    }
  });

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/es" className="flex-shrink-0">
          <Image
            src="/images/branding/urgent-care-indy-main-logo.png"
            alt="Urgent Care Indy - Atención de Urgencia"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/es/services"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            Servicios Clínicos
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-teal-600 focus:outline-none py-4">
              Salud Ocupacional (Empresas) <ChevronDown className="h-4 w-4" />
            </button>
            <EmployerMegaMenuES isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} />
          </div>

          <Link
            href="/es/contact"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="tel:+13179566288"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            aria-label="Llamar a Urgent Care Indy"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </Link>

          <Link
            href="/"
            className="hidden md:flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-blue-600"
          >
            <Globe className="h-4 w-4" /> English
          </Link>

          <Link
            href="/es/schedule"
            className="hidden md:inline-flex bg-blue-600 text-white rounded-full px-5 py-2.5 text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-900/10"
          >
            Reserva tu Lugar
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
