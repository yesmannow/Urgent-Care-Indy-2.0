"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { itemFadeInUp, staggerChildren } from "@/lib/motionPresets";

export function TriageToggle() {
  const [isMajor, setIsMajor] = useState(false);

  return (
    <motion.section
      variants={staggerChildren()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`rounded-2xl p-8 md:p-10 transition-colors duration-300 ${
        isMajor ? "bg-red-50" : "bg-white"
      }`}
      aria-labelledby="triage-heading"
    >
      <div className="container max-w-2xl mx-auto">
        <h2 id="triage-heading" className="sr-only">
          Is urgent care right for you?
        </h2>

        <motion.div variants={itemFadeInUp} className="flex flex-col gap-6">
          <p className="text-sm font-medium text-slate-600">
            I have a{" "}
            <span className="text-slate-900 font-semibold">Minor Injury</span> /{" "}
            <span className="text-slate-900 font-semibold">Major Emergency</span>
          </p>

          {/* Slider switch */}
          <button
            type="button"
            onClick={() => setIsMajor(!isMajor)}
            className="relative h-12 w-full max-w-[280px] rounded-full bg-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            aria-pressed={isMajor}
            aria-label={isMajor ? "Switch to minor injury" : "Switch to major emergency"}
          >
            <span className="sr-only">
              {isMajor ? "Major emergency selected" : "Minor injury selected"}
            </span>
            <motion.span
              className="absolute top-1 left-1 h-10 w-[calc(50%-4px)] rounded-full bg-primary-blue shadow-md"
              animate={{
                x: isMajor ? "calc(100% + 4px)" : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <span
              className={`absolute inset-y-0 left-0 flex w-1/2 items-center justify-center text-sm font-semibold z-10 transition-colors ${
                isMajor ? "text-slate-600" : "text-white"
              }`}
              aria-hidden
            >
              Minor
            </span>
            <span
              className={`absolute inset-y-0 right-0 flex w-1/2 items-center justify-center text-sm font-semibold z-10 transition-colors ${
                isMajor ? "text-white" : "text-slate-600"
              }`}
              aria-hidden
            >
              Major
            </span>
          </button>

          {/* Message + CTA */}
          {isMajor ? (
            <>
              <p className="text-lg font-semibold text-red-800">
                Please call 911 or go to the ER.
              </p>
              <a
                href="tel:911"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent-red text-white font-bold shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden />
                Dial 911
              </a>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-slate-900">
                Urgent Care is perfect for you.
              </p>
              <Link
                href="/schedule"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 w-fit"
              >
                Book Now
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
