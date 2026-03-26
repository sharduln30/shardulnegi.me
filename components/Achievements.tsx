"use client";

import { useState, useEffect } from "react";
import { Reveal } from "./motion";

const ITEMS = [
  {
    metric: "10M+",
    label: "Events/Day",
    color: "text-lime",
    accent: "#CCFF00",
    back: "Architected Centralized Notification Service with Kafka priority queues, DLQ retry, and dynamic templates",
  },
  {
    metric: "35%",
    label: "Latency Cut",
    color: "text-pink",
    accent: "#FF3D71",
    back: "Implemented Kafka priority queues for OTP delivery, slashing end-to-end notification latency",
  },
  {
    metric: "3x",
    label: "Throughput",
    color: "text-indigo",
    accent: "#6C63FF",
    back: "Built eNACH mandate service with Redis caching and async processing pipelines",
  },
  {
    metric: "99.9%",
    label: "Delivery",
    color: "text-orange",
    accent: "#FF8C42",
    back: "Designed DLQ-based retry with exponential backoff ensuring near-perfect notification delivery",
  },
];

export default function Achievements() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const toggle = (idx: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="section-lime py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-dark text-lime text-xs font-bold flex items-center justify-center">06</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-dark/50">Impact</span>
          </div>
        </Reveal>
        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight text-dark mb-12">
            Numbers that matter.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ITEMS.map((item, i) => {
            const isFlipped = flipped.has(i);
            return (
              <Reveal key={i} custom={i + 2}>
                <div
                  className="aspect-square cursor-pointer"
                  style={{ perspective: 1000 }}
                  onClick={() => isTouch && toggle(i)}
                  onMouseEnter={() => !isTouch && toggle(i)}
                  onMouseLeave={() => !isTouch && setFlipped((prev) => { const next = new Set(prev); next.delete(i); return next; })}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500 ease-out"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front face */}
                    <div
                      className="absolute inset-0 bg-dark rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className={`text-3xl sm:text-4xl md:text-5xl font-black ${item.color} tracking-tight mb-2`}>
                        {item.metric}
                      </div>
                      <div className="text-[10px] md:text-[11px] font-bold text-text-muted-light uppercase tracking-[0.15em]">
                        {item.label}
                      </div>
                    </div>

                    {/* Back face */}
                    <div
                      className="absolute inset-0 bg-dark rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center text-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div
                        className="w-10 h-0.5 rounded-full mb-4"
                        style={{ backgroundColor: item.accent }}
                      />
                      <p
                        className="text-[11px] md:text-[13px] leading-relaxed font-medium mb-4"
                        style={{ color: "rgba(245,240,232,0.85)" }}
                      >
                        {item.back}
                      </p>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: item.accent }}
                      >
                        {item.metric} {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
