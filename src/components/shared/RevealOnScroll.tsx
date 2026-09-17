"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "0px 0px 50px 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Safety fallback: ensure content is fully visible quickly
    const timer = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = prefersReducedMotion || isInView || mounted;

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: Math.min(delay / 1000, 0.2), ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
