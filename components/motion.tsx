"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 1, ease, delay: i * 0.1 },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 1, ease, delay: i * 0.1 },
  }),
};

export const slideUp: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.8, ease, delay: i * 0.06 },
  }),
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  custom?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({ children, className = "", variants = fadeUp, custom = 0, once = true, amount = 0.2 }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants} custom={custom} className={className}>
      {children}
    </motion.div>
  );
}

export function LineReveal({ children, className = "", delay = 0, once = true }: { children: ReactNode; className?: string; delay?: number; once?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.5 });
  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "100%" }}
        animate={inView ? { y: "0%" } : { y: "100%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export { motion };
