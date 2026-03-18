"use client";

import { motion } from "framer-motion";
import { LineReveal } from "./motion";
import Marquee from "./Marquee";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const TICKER = ["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Microservices", "System Design", "Docker"];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden section-dark">
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-lime opacity-20 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-pink opacity-15 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.05, 1], x: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content — pushed down from navbar, grows to fill */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-6 md:px-10 pb-8 pt-28">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,10rem)] font-extrabold tracking-[-0.05em] leading-[0.85] mb-8">
          <LineReveal delay={0.4}>I build</LineReveal>
          <LineReveal delay={0.55}>
            systems that{" "}
            <span className="text-lime">scale</span>
          </LineReveal>
        </h1>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.8 }}
        >
          <p className="text-text-muted-light text-base md:text-lg max-w-md leading-relaxed">
            Senior Software Engineer · 5+ years · Distributed systems & fintech infra.
            <span className="block mt-2 text-lime font-semibold">Currently at PayU</span>
          </p>
          <div className="flex gap-3">
            <a href="#about" className="btn-pill px-6 py-3 bg-text-light text-dark text-sm">
              Explore
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a href="/Shardul_Negi_Resume.pdf" download className="btn-pill px-6 py-3 border border-white/20 text-text-light text-sm hover:bg-white/10">
              Resume ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee — anchored to bottom, solid bg to avoid seam with next section */}
      <motion.div
        className="relative z-10 border-t border-white/[0.06] py-4 bg-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <Marquee speed={40} className="text-white/20">
          {TICKER.map((t, i) => (
            <span key={i} className="flex items-center gap-8 px-8 text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
              {t}
              <span className="w-1 h-1 rounded-full bg-lime/40" />
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
