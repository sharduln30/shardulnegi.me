"use client";

import { Reveal } from "./motion";

const ITEMS = [
  { metric: "10M+", label: "Events/Day", color: "text-lime" },
  { metric: "35%", label: "Latency Cut", color: "text-pink" },
  { metric: "3x", label: "Throughput", color: "text-indigo" },
  { metric: "99.9%", label: "Delivery", color: "text-orange" },
];

export default function Achievements() {
  return (
    <section className="section-lime py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-dark text-lime text-xs font-bold flex items-center justify-center">05</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-dark/50">Impact</span>
          </div>
        </Reveal>
        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight text-dark mb-12">
            Numbers that matter.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ITEMS.map((item, i) => (
            <Reveal key={i} custom={i + 2}>
              <div className="bg-dark rounded-3xl p-6 md:p-8 text-center aspect-square flex flex-col items-center justify-center">
                <div className={`text-3xl sm:text-4xl md:text-5xl font-black ${item.color} tracking-tight mb-2`}>{item.metric}</div>
                <div className="text-[10px] md:text-[11px] font-bold text-text-muted-light uppercase tracking-[0.15em]">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
