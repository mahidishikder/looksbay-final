"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.12, margin: "0px 0px -8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
      animate={prefersReducedMotion || isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.85, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
