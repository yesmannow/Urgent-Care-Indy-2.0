"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Urgent Care",
    description: "Fevers, Flu, Sprains.",
    href: "/services/urgent-care",
    image: "/images/services/urgent-care/alexandr-podvalny-tE7_jvK-_YU-unsplash.jpg",
    imageAlt: "Urgent care – exam and treatment",
  },
  {
    title: "Diagnostics",
    description: "On-site X-Ray, STIs, Strep Tests.",
    href: "/services/diagnostics",
    image: "/images/services/diagnostics/xray-service.jpg",
    imageAlt: "On-site X-ray and diagnostic imaging",
  },
  {
    title: "OccMed",
    description: "Drug Screens, DOT Physicals.",
    href: "/employer-services",
    image: "/images/services/occ-med/occupational%20health.jpg",
    imageAlt: "Occupational health and workplace wellness",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function ServiceGrid() {
  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <motion.h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          What We Offer
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {services.map(({ title, description, href, image, imageAlt }) => (
            <motion.div key={title} variants={item}>
              <Link
                href={href}
                className="group block rounded-xl bg-white border-2 border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-blue transition-colors">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    {description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
