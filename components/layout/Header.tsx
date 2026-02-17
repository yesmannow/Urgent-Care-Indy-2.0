"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { MobileNav } from "./MobileNav";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { resourceLinks } from "@/lib/navigation";
import { EmergencyToggleBar } from "@/components/ui/EmergencyToggleBar";
import { ServiceFinderPalette } from "@/components/ui/ServiceFinderPalette";

const navLinks = [
  { href: "/our-clinic", label: "Our Clinic" },
  { href: "/services", label: "Services", hasServicesMega: true },
  { href: "#", label: "Resources", hasResourcesDropdown: true },
];

const MEGA_MENU_LEAVE_DELAY_MS = 150;

export function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [servicesMegaOpen, setServicesMegaOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesAutoFocus, setServicesAutoFocus] = useState(false);
  const [resourcesAutoFocus, setResourcesAutoFocus] = useState(false);
  const servicesMegaCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServicesMega = (options?: { autoFocus?: boolean }) => {
    if (servicesMegaCloseTimeoutRef.current) {
      clearTimeout(servicesMegaCloseTimeoutRef.current);
      servicesMegaCloseTimeoutRef.current = null;
    }
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

  const openResources = () => {
    if (resourcesCloseTimeoutRef.current) {
      clearTimeout(resourcesCloseTimeoutRef.current);
      resourcesCloseTimeoutRef.current = null;
    }
    setServicesMegaOpen(false);
    setServicesAutoFocus(false);
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
    if (!resourcesOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResources();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [resourcesOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200"
    >
      <Breadcrumbs />
      <EmergencyToggleBar />
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
            {navLinks.map(({ href, label, hasServicesMega, hasResourcesDropdown }) => {
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
                        aria-label="Open services menu"
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

          {/* Right: Portal + CTA on desktop; Mobile nav trigger on mobile */}
          <div className="flex items-center gap-4 shrink-0">
            <ServiceFinderPalette />
            <Link
              href="https://www.mymedicallocker.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Login to Portal
            </Link>
            <Link
              href="/schedule"
              className="hidden md:inline bg-primary-blue text-white rounded-full px-5 py-2 text-sm font-bold hover:bg-blue-700 transition-all shadow-medical"
              aria-label="Save your spot at our Michigan Road clinic"
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

        {/* Services mega menu (desktop only) – no overflow-hidden so menu is not clipped */}
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
      </div>
    </header>
  );
}
