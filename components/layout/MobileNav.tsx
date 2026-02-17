"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Stethoscope,
  Microscope,
  HeartHandshake,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { patientServices, resourceLinks, employerServices } from "@/lib/navigation";

const iconMap: Record<(typeof patientServices)[number]["icon"], LucideIcon> = {
  Stethoscope,
  Microscope,
  HeartHandshake,
  FileText,
};

type MobileNavProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const EMPLOYER_ACCORDION_KEY = "Employer Services";

export function MobileNav({ isOpen, onOpen, onClose }: MobileNavProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [employerExpanded, setEmployerExpanded] = useState(false);

  const toggleCategory = (category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  const toggleEmployer = () => {
    setEmployerExpanded((prev) => !prev);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedCategory(null);
    setEmployerExpanded(false);
  };

  return (
    <>
      {/* Hamburger trigger – visible only on mobile */}
      <button
        type="button"
        onClick={onOpen}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>

      {/* Slide-over drawer */}
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

                {/* Accordion: Patient Services */}
                <div className="border-b border-slate-100">
                  <p className="py-3 text-slate-500 text-sm font-medium uppercase tracking-wide">
                    Patient Services
                  </p>
                  {patientServices.map(({ category, icon, links }) => {
                    const Icon = iconMap[icon];
                    const isExpanded = expandedCategory === category;
                    return (
                      <div key={category} className="border-b border-slate-100 last:border-b-0">
                        <button
                          type="button"
                          onClick={() => toggleCategory(category)}
                          className="flex items-center justify-between w-full py-3 text-left text-slate-700 font-medium"
                          aria-expanded={isExpanded}
                          aria-controls={`mobile-accordion-${category.replace(/\s+/g, "-")}`}
                          id={`mobile-accordion-trigger-${category.replace(/\s+/g, "-")}`}
                        >
                          <span className="flex items-center gap-2">
                            <Icon className="h-5 w-5 text-primary-blue shrink-0" aria-hidden />
                            {category}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            aria-hidden
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              id={`mobile-accordion-${category.replace(/\s+/g, "-")}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                              role="region"
                              aria-labelledby={`mobile-accordion-trigger-${category.replace(/\s+/g, "-")}`}
                            >
                              <ul className="pb-3 pl-7 space-y-2">
                                {links.map(({ name, href }) => (
                                  <li key={href}>
                                    <Link
                                      href={href}
                                      className="text-sm text-slate-600 hover:text-primary-blue transition-colors block py-1.5"
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
                </div>

                {/* Accordion: Employer Services */}
                <div className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={toggleEmployer}
                    className="flex items-center justify-between w-full py-3 text-left text-slate-700 font-medium"
                    aria-expanded={employerExpanded}
                    aria-controls="mobile-employer-accordion"
                    id="mobile-employer-trigger"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {EMPLOYER_ACCORDION_KEY}
                      <span className="rounded-full bg-primary-blue/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-blue">
                        B2B
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform ${employerExpanded ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {employerExpanded && (
                      <motion.div
                        id="mobile-employer-accordion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                        role="region"
                        aria-labelledby="mobile-employer-trigger"
                      >
                        <ul className="pb-3 pl-4 space-y-2">
                          {employerServices.map(({ title, href }) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className="text-sm text-slate-600 hover:text-primary-blue transition-colors block py-1.5"
                                onClick={handleLinkClick}
                              >
                                {title}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2">
                            <Link
                              href="/portal"
                              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                              onClick={handleLinkClick}
                            >
                              B2B Portal
                            </Link>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/employer-services"
                  className="block py-3 text-slate-700 font-medium border-b border-slate-100"
                  onClick={handleLinkClick}
                >
                  Employer Services (overview)
                </Link>

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
                          className="text-sm text-slate-600 hover:text-primary-blue transition-colors block py-1.5"
                          onClick={handleLinkClick}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 space-y-2">
                  <Link
                    href="/portal"
                    className="block py-3 text-slate-600 text-sm"
                    onClick={handleLinkClick}
                  >
                    Portal Login
                  </Link>
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
