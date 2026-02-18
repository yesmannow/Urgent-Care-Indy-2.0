"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionPresets";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Optional id for the element */
  id?: string;
};

export function ScrollRevealSection({
  children,
  className = "",
  id,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
