"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/our-clinic", label: "Our Clinic" },
  { href: "/patient-services", label: "Patient Services", hasMegaMenu: true },
  { href: "/employer-services", label: "Employer Services" },
];

const MEGA_MENU_LEAVE_DELAY_MS = 150;

export function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const megaMenuCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMegaMenu = () => {
    if (megaMenuCloseTimeoutRef.current) {
      clearTimeout(megaMenuCloseTimeoutRef.current);
      megaMenuCloseTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const closeMegaMenuDelayed = () => {
    megaMenuCloseTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
      megaMenuCloseTimeoutRef.current = null;
    }, MEGA_MENU_LEAVE_DELAY_MS);
  };

  const closeMegaMenu = () => {
    if (megaMenuCloseTimeoutRef.current) {
      clearTimeout(megaMenuCloseTimeoutRef.current);
      megaMenuCloseTimeoutRef.current = null;
    }
    setMegaMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="relative">
        <div className="container flex items-center justify-between h-16 gap-6">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            aria-label="UrgentCare Indy – Home"
          >
            <Image
              src="/images/branding/urgent-care-indy-main-logo.png"
              alt="UrgentCare Indy – Immediate Care & Occupational Health"
              width={200}
              height={48}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </Link>

          {/* Center: Desktop nav (hidden on mobile) */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map(({ href, label, hasMegaMenu }) =>
              hasMegaMenu ? (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenuDelayed}
                >
                  <Link
                    href={href}
                    className="text-sm font-medium text-slate-600 hover:text-primary-blue transition-colors"
                  >
                    {label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-blue transition-colors"
                >
                  {label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Portal + CTA on desktop; Mobile nav trigger on mobile */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/portal"
              className="hidden md:inline text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Portal Login
            </Link>
            <Link
              href="/save-your-spot"
              className="hidden md:inline bg-primary-blue text-white rounded-full px-5 py-2 text-sm font-bold hover:bg-blue-700 transition-all shadow-medical"
            >
              Save Your Spot
            </Link>
            <MobileNav
              isOpen={mobileNavOpen}
              onOpen={() => setMobileNavOpen(true)}
              onClose={() => setMobileNavOpen(false)}
            />
          </div>
        </div>

        {/* Mega menu (desktop only, toggled by Patient Services hover) */}
        <div className="hidden md:block">
          <MegaMenu
            isOpen={megaMenuOpen}
            onClose={closeMegaMenu}
            onMouseEnter={openMegaMenu}
            onMouseLeave={closeMegaMenuDelayed}
          />
        </div>
      </div>
    </header>
  );
}
