"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { resourceLinks } from "@/lib/navigation";

const navLinks = [
  { href: "/our-clinic", label: "Our Clinic" },
  { href: "/patient-services", label: "Patient Services", hasMegaMenu: true },
  { href: "/employer-services", label: "Employer Services" },
  { href: "#", label: "Resources", hasResourcesDropdown: true },
];

const MEGA_MENU_LEAVE_DELAY_MS = 150;

export function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const megaMenuCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMegaMenu = () => {
    if (megaMenuCloseTimeoutRef.current) {
      clearTimeout(megaMenuCloseTimeoutRef.current);
      megaMenuCloseTimeoutRef.current = null;
    }
    setResourcesOpen(false);
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

  const openResources = () => {
    if (resourcesCloseTimeoutRef.current) {
      clearTimeout(resourcesCloseTimeoutRef.current);
      resourcesCloseTimeoutRef.current = null;
    }
    setMegaMenuOpen(false);
    setResourcesOpen(true);
  };

  const closeResourcesDelayed = () => {
    resourcesCloseTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
      resourcesCloseTimeoutRef.current = null;
    }, MEGA_MENU_LEAVE_DELAY_MS);
  };

  const closeResources = () => {
    if (resourcesCloseTimeoutRef.current) {
      clearTimeout(resourcesCloseTimeoutRef.current);
      resourcesCloseTimeoutRef.current = null;
    }
    setResourcesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <Breadcrumbs />
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
            {navLinks.map(({ href, label, hasMegaMenu, hasResourcesDropdown }) => {
              if (hasMegaMenu) {
                return (
                  <div
                    key={label}
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
                );
              }
              if (hasResourcesDropdown) {
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={openResources}
                    onMouseLeave={closeResourcesDelayed}
                  >
                    <span className="text-sm font-medium text-slate-600 hover:text-primary-blue transition-colors cursor-default inline-flex items-center gap-0.5">
                      {label}
                      <ChevronDown className="h-4 w-4" aria-hidden />
                    </span>
                    {resourcesOpen && (
                      <div
                        className="absolute left-0 top-full pt-1"
                        onMouseEnter={openResources}
                        onMouseLeave={closeResourcesDelayed}
                      >
                        <div className="bg-white border border-slate-200 rounded-xl shadow-medical py-2 min-w-[180px]">
                          {resourceLinks.map(({ name, href: linkHref }) => (
                            <Link
                              key={linkHref}
                              href={linkHref}
                              className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-blue transition-colors"
                            >
                              {name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-blue transition-colors"
                >
                  {label}
                </Link>
              );
            })}
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
              href="/schedule"
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
