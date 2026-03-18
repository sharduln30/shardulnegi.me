"use client";

import { Reveal } from "./motion";
import Marquee from "./Marquee";

const STATS = [
  { val: "5+", label: "Years" },
  { val: "10M+", label: "Events/Day" },
  { val: "99.9%", label: "Uptime" },
  { val: "6+", label: "Partners" },
  { val: "3x", label: "Scale" },
  { val: "35%", label: "Latency ↓" },
];

export default function About() {
  return (
    <section id="about" className="section-cream section-rounded py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-dark text-cream text-xs font-bold flex items-center justify-center">01</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">About</span>
          </div>
        </Reveal>

        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6 max-w-5xl text-dark">
            Hey, I'm <span className="text-indigo">Shardul Negi</span>.
          </h2>
        </Reveal>

        <Reveal custom={2}>
          <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-[1.3] mb-14 max-w-4xl text-dark/60">
            Senior Engineer who architects fault-tolerant distributed systems, event-driven platforms, and APIs that serve millions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <Reveal custom={3}>
            <p className="text-text-muted text-[15px] leading-[1.9]">
              At PayU, I own core lending infra — from the Centralized Notification Service
              to partner integrations with GPay, PhonePe, Paytm, Meesho, Swiggy, and BharatPe.
            </p>
          </Reveal>
          <Reveal custom={4}>
            <p className="text-text-muted text-[15px] leading-[1.9]">
              Previously at TCS building billing microservices and leading database migrations.
              Clean architecture, measurable impact, systems that recover gracefully.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal custom={5} className="mt-16">
        <div className="border-y border-dark/10 py-6">
          <Marquee speed={30}>
            {STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-10 whitespace-nowrap">
                <span className="text-3xl md:text-4xl font-black text-dark tracking-tight">{s.val}</span>
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.15em]">{s.label}</span>
                <span className="w-2 h-2 rounded-full bg-lime ml-4" />
              </div>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
