"use client";

import { useInView } from "@/hooks/useInView";

const PODIUM = [
  {
    position: "P1",
    title: "Centralized Notification Service",
    description:
      "Architected from design doc to production — now the backbone of all lending communication across 6 major partners.",
  },
  {
    position: "P2",
    title: "INNOVRITI 4.0 Finalist",
    description:
      "Qualified for the final round of the annual B-PLAN competition at Manipal University Jaipur — top 5 out of 100+ teams.",
  },
  {
    position: "P3",
    title: "International Team Leadership",
    description:
      "Led cross-cultural team as head during Business Engineering program at Heig-vd, Switzerland.",
  },
];

const STATS = [
  { label: "Years of Experience", value: "5+" },
  { label: "Partner Integrations", value: "6" },
  { label: "Systems Architected", value: "4" },
  { label: "Daily Notifications", value: "50K+" },
];

export default function Achievements() {
  const { ref, isInView } = useInView();

  return (
    <section id="achievements" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            06 — Podium
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-12">
            ACHIEVE<span className="text-f1-red">MENTS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PODIUM.map((item, i) => (
            <div
              key={item.position}
              className={`fade-up ${isInView ? "visible" : ""}`}
              style={
                { "--delay": `${0.1 + i * 0.1}s` } as React.CSSProperties
              }
            >
              <div
                className={`bg-f1-card border rounded-lg p-6 h-full card-hover relative overflow-hidden ${
                  i === 0 ? "border-f1-red/40" : "border-f1-border"
                }`}
              >
                <span
                  className={`font-[family-name:var(--font-orbitron)] text-6xl font-bold absolute -top-2 -right-1 ${
                    i === 0
                      ? "text-f1-red/15"
                      : i === 1
                        ? "text-f1-white/8"
                        : "text-f1-white/5"
                  }`}
                >
                  {item.position}
                </span>
                <div className="relative z-10">
                  <span
                    className={`inline-block px-2 py-0.5 text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider rounded mb-3 ${
                      i === 0
                        ? "bg-f1-red/20 text-f1-red"
                        : "bg-f1-border text-f1-muted"
                    }`}
                  >
                    {item.position}
                  </span>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-f1-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-up ${isInView ? "visible" : ""} text-center p-6 bg-f1-card border border-f1-border rounded-lg`}
              style={
                { "--delay": `${0.3 + i * 0.08}s` } as React.CSSProperties
              }
            >
              <span className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-f1-red block">
                {stat.value}
              </span>
              <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
