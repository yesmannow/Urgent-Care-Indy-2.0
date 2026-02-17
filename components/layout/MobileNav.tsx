"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Stethoscope,
  Building2,
  Microscope,
} from "lucide-react";
import { resourceLinks } from "@/lib/navigation";

/** Matches ServicesMegaMenu structure for consistent nav */
const servicesMobileSections = [
  {
    category: "Urgent Care",
    icon: Stethoscope,
    links: [
      { name: "Minor Injuries", href: "/services/urgent-care#injuries" },
      { name: "Minor Illnesses", href: "/services/urgent-care#illnesses" },
      { name: "Sports Physicals", href: "/services/urgent-care" },
    ],
  },
  {
    category: "Employer Services",
    icon: Building2,
    links: [
      { name: "DOT Physicals", href: "/employer-services#physicals" },
      { name: "Drug Screening", href: "/employer-services#drug-testing" },
      { name: "Workers' Comp", href: "/employer-services#workers-comp" },
      { name: "Employer Overview", href: "/employer-services" },
    ],
  },
  {
    category: "Diagnostics & Prevention",
    icon: Microscope,
    links: [
      { name: "On-Site Labs", href: "/services/diagnostics#labs" },
      { name: "EKG Services", href: "/services/diagnostics#ekg" },
      { name: "Vaccines & Shots", href: "/services/prevention#vaccines" },
      { name: "STI Screening", href: "/services/prevention#sti" },
      { name: "Patient Forms", href: "/resources/forms" },
    ],
  },
];

type MobileNavProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function MobileNav({ isOpen, onOpen, onClose }: MobileNavProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleServices = () => setServicesExpanded((prev) => !prev);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const handleLinkClick = () => {
    onClose();
    setServicesExpanded(false);
    setExpandedCategory(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={onClose}
              aria-hidden
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-xl md:hidden flex flex-col"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200 shrink-0">
                <span className="font-bold text-slate-900">Menu</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" aria-hidden />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-4" aria-label="Mobile navigation">
                <Link
                  href="/our-clinic"
                  className="block py-3 text-slate-700 font-medium border-b border-slate-100"
                  onClick={handleLinkClick}
                >
                  Our Clinic
                </Link>

                {/* Accordion: Services (Urgent Care, Employer, Diagnostics & Prevention) */}
                <div className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={toggleServices}
                    className="flex items-center justify-between w-full py-3 text-left text-slate-700 font-medium"
                    aria-expanded={servicesExpanded}
                    aria-controls="mobile-services-accordion"
                    id="mobile-services-trigger"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {servicesExpanded && (
                      <motion.div
                        id="mobile-services-accordion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                        role="region"
                        aria-labelledby="mobile-services-trigger"
                      >
                        <div className="pb-3 pl-2">
                          {servicesMobileSections.map(({ category, icon: Icon, links }) => {
                            const isExpanded = expandedCategory === category;
                            return (
                              <div key={category} className="border-b border-slate-100 last:border-b-0">
                                <button
                                  type="button"
                                  onClick={() => toggleCategory(category)}
                                  className="flex items-center justify-between w-full py-3 text-left text-slate-600 font-medium text-sm"
                                  aria-expanded={isExpanded}
                                  aria-controls={`mobile-services-${category.replace(/\s+/g, "-")}`}
                                  id={`mobile-services-trigger-${category.replace(/\s+/g, "-")}`}
                                >
                                  <span className="flex items-center gap-2">
                                    <Icon className="h-4 w-4 text-teal-600 shrink-0" aria-hidden />
                                    {category}
                                  </span>
                                  <ChevronDown
                                    className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                    aria-hidden
                                  />
                                </button>
                                <AnimatePresence initial={false}>
                                  {isExpanded && (
                                    <motion.div
                                      id={`mobile-services-${category.replace(/\s+/g, "-")}`}
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                      role="region"
                                      aria-labelledby={`mobile-services-trigger-${category.replace(/\s+/g, "-")}`}
                                    >
                                      <ul className="pb-3 pl-6 space-y-1">
                                        {links.map(({ name, href }) => (
                                          <li key={href}>
                                            <Link
                                              href={href}
                                              className="text-sm text-slate-600 hover:text-teal-600 transition-colors block py-2"
                                              onClick={handleLinkClick}
                                            >
                                              {name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                          <Link
                            href="/schedule"
                            className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-teal-600 transition-colors"
                            onClick={handleLinkClick}
                          >
                            Need a DOT Physical? Save Your Spot
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources */}
                <div className="border-b border-slate-100 py-3">
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">
                    Resources
                  </p>
                  <ul className="space-y-1 pl-0">
                    {resourceLinks.map(({ name, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-sm text-slate-600 hover:text-teal-600 transition-colors block py-1.5"
                          onClick={handleLinkClick}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href="https://www.mymedicallocker.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 text-slate-600 text-sm hover:text-teal-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Login to Portal
                  </a>
                  <Link
                    href="/schedule"
                    className="block w-full text-center bg-primary-blue text-white rounded-full px-5 py-3 font-bold hover:bg-blue-700 transition-colors shadow-medical"
                    onClick={handleLinkClick}
                    aria-label="Save your spot at our Michigan Road clinic"
                  >
                    Save Your Spot
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
