"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Home, Stethoscope, Briefcase, Menu, Clock, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLinkItem = { name: string; href: string; icon: LucideIcon };
type NavActionItem = { name: string; action: () => void; icon: LucideIcon };
type NavItem = NavLinkItem | NavActionItem;

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide on Scroll Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "Urgent Care", href: "/services/diagnostics", icon: Stethoscope },
    // Center "FAB" is handled separately below
    { name: "Occ Health", href: "/employer-services", icon: Briefcase },
    { name: "Menu", action: () => setIsMenuOpen(true), icon: Menu },
  ];

  return (
    <>
      {/* Bottom Nav Container */}
      <motion.div
        variants={{ visible: { y: 0 }, hidden: { y: "100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden"
      >
        {/* Glassmorphism Background */}
        <div className="mx-auto max-w-[520px] px-3 pb-3">
          <div className="relative rounded-[26px] border border-white/40 bg-white/70 shadow-[0_-8px_30px_rgba(15,23,42,0.14)] backdrop-blur-md">
            <div
              className="relative flex items-center justify-around h-[80px] px-2 pb-[env(safe-area-inset-bottom)]"
            >
              {/* Left Icons */}
              {(navItems.slice(0, 2) as NavLinkItem[]).map((item) => (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className="flex flex-col items-center justify-center w-16 space-y-1"
                >
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "p-1 rounded-xl",
                      pathname === item.href ? "text-teal-600 bg-teal-50" : "text-slate-400"
                    )}
                  >
                    <item.icon size={24} strokeWidth={pathname === item.href ? 2.5 : 2} />
                  </motion.div>
                  <span
                    className={cn(
                      "text-[10px] font-medium",
                      pathname === item.href ? "text-teal-600" : "text-slate-400"
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Center "FAB" - Save Your Spot */}
              <div className="relative -top-6">
                <Link
                  href="https://www.clockwisemd.com/hospitals/2072/visits/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    animate={{ boxShadow: "0px 0px 20px rgba(20, 184, 166, 0.4)" }}
                    className="flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-tr from-teal-500 to-teal-400 rounded-full shadow-xl border-4 border-white"
                  >
                    <Clock className="text-white" size={28} />
                  </motion.div>
                </Link>
                <span className="absolute -bottom-5 w-full text-center text-[10px] font-bold text-teal-600">
                  Check In
                </span>
              </div>

              {/* Right Icons */}
              {navItems.slice(2).map((item) => {
                if ("action" in item) {
                  return (
                    <button
                      key={item.name}
                      onClick={item.action}
                      className="flex flex-col items-center justify-center w-16 space-y-1"
                      type="button"
                    >
                      <motion.div whileTap={{ scale: 0.9 }} className="p-1 text-slate-400">
                        <item.icon size={24} />
                      </motion.div>
                      <span className="text-[10px] font-medium text-slate-400">{item.name}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex flex-col items-center justify-center w-16 space-y-1"
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "p-1 rounded-xl",
                        pathname === item.href ? "text-teal-600 bg-teal-50" : "text-slate-400"
                      )}
                    >
                      <item.icon size={24} strokeWidth={pathname === item.href ? 2.5 : 2} />
                    </motion.div>
                    <span
                      className={cn(
                        "text-[10px] font-medium",
                        pathname === item.href ? "text-teal-600" : "text-slate-400"
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full Screen Menu Overlay (Bottom Sheet) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[10001] bg-white rounded-t-[30px] p-6 pb-24 shadow-2xl"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Link
                  href="tel:3179566288"
                  className="flex items-center justify-center gap-3 p-4 bg-teal-50 rounded-2xl border border-teal-100"
                >
                  <Phone className="text-teal-600" size={20} />
                  <span className="font-semibold text-teal-900">Call Now</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="text-slate-600" size={20} />
                  <span className="font-semibold text-slate-900">Directions</span>
                </Link>
              </div>
              {/* Add your main menu links list here for full navigation */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
