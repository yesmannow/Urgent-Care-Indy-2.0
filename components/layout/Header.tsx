"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { EmployerMegaMenu } from "./EmployerMegaMenu";
import { MobileNav } from "./MobileNav";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ServiceFinderPalette } from "@/components/ui/ServiceFinderPalette";
import { resourceLinks } from "@/lib/navigation";
import type { Language } from "@/lib/i18n";

const MEGA_MENU_LEAVE_DELAY_MS = 150;

type NavLink = {
  href: string;
  label: string;
  hasServicesMega?: boolean;
  hasEmployerMega?: boolean;
  hasResourcesDropdown?: boolean;
};

export function Header({ language }: { language: Language }) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [servicesMegaOpen, setServicesMegaOpen] = useState(false);
  const [servicesAutoFocus, setServicesAutoFocus] = useState(false);
  const servicesMegaCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [employerMegaOpen, setEmployerMegaOpen] = useState(false);
  const employerMegaCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [resourcesAutoFocus, setResourcesAutoFocus] = useState(false);
  const resourcesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const openServicesMega = (options?: { autoFocus?: boolean }) => {
    if (servicesMegaCloseTimeoutRef.current) {
      clearTimeout(servicesMegaCloseTimeoutRef.current);
      servicesMegaCloseTimeoutRef.current = null;
    }
    if (employerMegaCloseTimeoutRef.current) {
      clearTimeout(employerMegaCloseTimeoutRef.current);
      employerMegaCloseTimeoutRef.current = null;
    }
    setEmployerMegaOpen(false);
    setResourcesOpen(false);
    setResourcesAutoFocus(false);
    setServicesAutoFocus(Boolean(options?.autoFocus));
    setServicesMegaOpen(true);
  };

  const closeServicesMegaDelayed = () => {
    servicesMegaCloseTimeoutRef.current = setTimeout(() => {
      setServicesMegaOpen(false);
      servicesMegaCloseTimeoutRef.current = null;
    }, MEGA_MENU_LEAVE_DELAY_MS);
  };

  const closeServicesMega = () => {
    if (servicesMegaCloseTimeoutRef.current) {
      clearTimeout(servicesMegaCloseTimeoutRef.current);
      servicesMegaCloseTimeoutRef.current = null;
    }
    setServicesMegaOpen(false);
    setServicesAutoFocus(false);
  };

  const openEmployerMega = () => {
    if (employerMegaCloseTimeoutRef.current) {
      clearTimeout(employerMegaCloseTimeoutRef.current);
      employerMegaCloseTimeoutRef.current = null;
    }
    if (servicesMegaCloseTimeoutRef.current) {
      clearTimeout(servicesMegaCloseTimeoutRef.current);
      servicesMegaCloseTimeoutRef.current = null;
    }
    setServicesMegaOpen(false);
    setServicesAutoFocus(false);
    setResourcesOpen(false);
    setResourcesAutoFocus(false);
    setEmployerMegaOpen(true);
  };

  const closeEmployerMegaDelayed = () => {
    employerMegaCloseTimeoutRef.current = setTimeout(() => {
      setEmployerMegaOpen(false);
      employerMegaCloseTimeoutRef.current = null;
    }, MEGA_MENU_LEAVE_DELAY_MS);
  };

  const closeEmployerMega = () => {
    if (employerMegaCloseTimeoutRef.current) {
      clearTimeout(employerMegaCloseTimeoutRef.current);
      employerMegaCloseTimeoutRef.current = null;
    }
    setEmployerMegaOpen(false);
  };

  const openResources = () => {
    if (resourcesCloseTimeoutRef.current) {
      clearTimeout(resourcesCloseTimeoutRef.current);
      resourcesCloseTimeoutRef.current = null;
    }
    if (servicesMegaCloseTimeoutRef.current) {
      clearTimeout(servicesMegaCloseTimeoutRef.current);
      servicesMegaCloseTimeoutRef.current = null;
    }
    if (employerMegaCloseTimeoutRef.current) {
      clearTimeout(employerMegaCloseTimeoutRef.current);
      employerMegaCloseTimeoutRef.current = null;
    }
    setServicesMegaOpen(false);
    setServicesAutoFocus(false);
    setEmployerMegaOpen(false);
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
    setResourcesAutoFocus(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeServicesMega();
        closeEmployerMega();
        closeResources();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!resourcesOpen || !resourcesAutoFocus) return;
    const el = document.querySelector<HTMLAnchorElement>("#resources-menu a[href]");
    el?.focus();
  }, [resourcesAutoFocus, resourcesOpen]);

  useEffect(() => {
    if (!servicesMegaOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeServicesMega();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [servicesMegaOpen]);

  useEffect(() => {
    if (!employerMegaOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEmployerMega();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [employerMegaOpen]);

  useEffect(() => {
    if (!resourcesOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResources();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [resourcesOpen]);

  const navLinks = useMemo<NavLink[]>(
    () => [
      { href: "/our-clinic", label: language === "es" ? "Nuestra clínica" : "Our Clinic" },
      {
        href: "/services",
        label: language === "es" ? "Atención urgente" : "Urgent Care",
        hasServicesMega: true,
      },
      {
        href: "/employer-services",
        label: language === "es" ? "Salud ocupacional" : "Occupational Health",
        hasEmployerMega: true,
      },
      { href: "#", label: language === "es" ? "Recursos" : "Resources", hasResourcesDropdown: true },
    ],
    [language]
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
    >
      <Breadcrumbs />

      <div className="relative">
        <div className="container flex items-center justify-between h-16 gap-6">
          <Link
            href="/"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            aria-label="UrgentCare Indy — Home"
          >
            <Image
              src="/images/branding/urgent-care-indy-main-logo.png"
              alt="UrgentCare Indy — Immediate Care & Occupational Health"
              width={200}
              height={48}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label, hasServicesMega, hasEmployerMega, hasResourcesDropdown }) => {
              if (hasServicesMega) {
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => openServicesMega({ autoFocus: false })}
                    onMouseLeave={closeServicesMegaDelayed}
                  >
                    <div className="inline-flex items-center gap-1">
                      <Link
                        href={href}
                        className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                      >
                        {label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          if (servicesMegaOpen) closeServicesMega();
                          else openServicesMega({ autoFocus: true });
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openServicesMega({ autoFocus: true });
                          }
                        }}
                        className="p-1.5 rounded-md text-slate-500 hover:text-teal-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                        aria-label="Open urgent care menu"
                        aria-haspopup="true"
                        aria-expanded={servicesMegaOpen}
                        aria-controls="services-mega-menu"
                      >
                        <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
                      </button>
                    </div>
                  </div>
                );
              }

              if (hasEmployerMega) {
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={openEmployerMega}
                    onMouseLeave={closeEmployerMegaDelayed}
                  >
                    <div className="inline-flex items-center gap-1">
                      <Link
                        href={href}
                        className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                      >
                        {label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          if (employerMegaOpen) closeEmployerMega();
                          else openEmployerMega();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openEmployerMega();
                          }
                        }}
                        className="p-1.5 rounded-md text-slate-500 hover:text-teal-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                        aria-label="Open occupational health menu"
                        aria-haspopup="true"
                        aria-expanded={employerMegaOpen}
                        aria-controls="employer-mega-menu"
                      >
                        <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
                      </button>
                    </div>
                  </div>
                );
              }

              if (hasResourcesDropdown) {
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => {
                      setResourcesAutoFocus(false);
                      openResources();
                    }}
                    onMouseLeave={closeResourcesDelayed}
                  >
                    <button
                      type="button"
                      className="text-sm font-medium text-slate-600 hover:text-primary-blue transition-colors inline-flex items-center gap-0.5 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                      onClick={() => {
                        if (resourcesOpen) closeResources();
                        else {
                          setResourcesAutoFocus(true);
                          openResources();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setResourcesAutoFocus(true);
                          openResources();
                        }
                      }}
                      aria-haspopup="true"
                      aria-expanded={resourcesOpen}
                      aria-controls="resources-menu"
                    >
                      {label}
                      <ChevronDown className="h-4 w-4" aria-hidden />
                    </button>
                    {resourcesOpen && (
                      <div
                        id="resources-menu"
                        className="absolute left-0 top-full pt-1"
                        aria-label="Resources"
                        onMouseEnter={() => {
                          setResourcesAutoFocus(false);
                          openResources();
                        }}
                        onMouseLeave={closeResourcesDelayed}
                      >
                        <div className="bg-white border border-slate-200 rounded-xl shadow-medical py-2 min-w-[180px]">
                          {resourceLinks.map(({ name, href: linkHref }) => (
                            <Link
                              key={linkHref}
                              href={linkHref}
                              onClick={closeResources}
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

          <div className="flex items-center gap-3 shrink-0">
            <ServiceFinderPalette variant="icon" />
            <LanguageToggle language={language} size="sm" />
            <Link
              href="https://www.mymedicallocker.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              {language === "es" ? "Portal" : "Login to Portal"}
            </Link>
            <Link
              href="/schedule"
              className="hidden md:inline bg-primary-blue text-white rounded-full px-5 py-2 text-sm font-bold hover:bg-blue-700 transition-all shadow-medical"
              aria-label="Save your spot at our Michigan Road clinic"
            >
              {language === "es" ? "Reserva tu lugar" : "Save Your Spot"}
            </Link>
            <MobileNav
              isOpen={mobileNavOpen}
              onOpen={() => setMobileNavOpen(true)}
              onClose={() => setMobileNavOpen(false)}
            />
          </div>
        </div>

        <div className="hidden md:block absolute left-0 right-0 top-full pt-0">
          <ServicesMegaMenu
            isOpen={servicesMegaOpen}
            onClose={closeServicesMega}
            onMouseEnter={() => openServicesMega({ autoFocus: false })}
            onMouseLeave={closeServicesMegaDelayed}
            id="services-mega-menu"
            autoFocus={servicesAutoFocus}
          />
        </div>

        <div className="hidden md:block absolute left-0 right-0 top-full pt-0">
          <div id="employer-mega-menu">
            <EmployerMegaMenu
              isOpen={employerMegaOpen}
              onClose={closeEmployerMega}
              onMouseEnter={openEmployerMega}
              onMouseLeave={closeEmployerMegaDelayed}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
