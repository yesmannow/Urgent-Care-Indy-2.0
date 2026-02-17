"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const logos = [
  "Anthem",
  "UnitedHealthcare",
  "Cigna",
  "Aetna",
  "Indiana University Health",
  "Eskenazi Health",
  "Community Health",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export function TrustSignals() {
  return (
    <section
      className="py-12 md:py-16 border-y border-slate-200 bg-white"
      aria-labelledby="trust-heading"
    >
      <div className="container">
        <h2 id="trust-heading" className="sr-only">
          Trusted by patients and employers
        </h2>

        {/* Scrolling marquee */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden mb-10"
        >
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-slate-400 font-semibold text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Featured review */}
        <motion.blockquote
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-slate-700 font-medium italic mb-3">
            &ldquo;Best urgent care in Indy. I was seen in 10 minutes.&rdquo;
          </p>
          <footer className="flex items-center justify-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-900">Sarah J.</span>
            <span className="flex items-center gap-1 text-amber-500" aria-label="5 stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="h-5 w-5 fill-current" aria-hidden />
              ))}
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
