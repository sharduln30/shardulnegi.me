"use client";

import { Reveal } from "./motion";

const ROLES = [
  {
    company: "PayU",
    loc: "Gurugram",
    role: "Senior Software Engineer",
    period: "May 2022 – Present",
    color: "bg-lime",
    bullets: [
      "Architected CNS — 10M+ events/day, 98%+ delivery, DLQ retry, Kafka priority queues cutting OTP latency ~35%.",
      "Partner integration APIs for GPay, PhonePe, Paytm, Meesho, Swiggy, BharatPe — 99.5% uptime, sub-200ms p95.",
      "eNACH mandate service — Redis + async processing, 90% success, 3x throughput.",
      "Template-based doc generation — 60% less dev effort, near-zero errors.",
    ],
    tech: ["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Microservices"],
  },
  {
    company: "TCS",
    loc: "Noida",
    role: "Software Engineer",
    period: "Oct 2020 – May 2022",
    color: "bg-indigo",
    bullets: [
      "Built microservice billing app — Spring Boot & MS SQL for accounting workflows.",
      "Led Oracle-to-Azure SQL migration — 50+ tables, zero data loss.",
      "JUnit coverage 30% → 80%+, reduced production defects.",
    ],
    tech: ["Java", "Spring Boot", "MS SQL", "Azure", "JUnit"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-dark text-cream text-xs font-bold flex items-center justify-center">04</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">Experience</span>
          </div>
        </Reveal>
        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-dark">
            Where I've worked.
          </h2>
        </Reveal>

        <div className="space-y-6">
          {ROLES.map((r, idx) => (
            <Reveal key={idx} custom={idx + 2}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${r.color}`} />
                    <div>
                      <h3 className="text-xl font-bold text-dark">{r.role}</h3>
                      <span className="text-sm text-text-muted">{r.company} · {r.loc}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-text-muted bg-cream px-3 py-1.5 rounded-full shrink-0">{r.period}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="flex items-start text-text-muted text-[14px] leading-[1.75]">
                      <span className={`mr-2 mt-[9px] w-1.5 h-1.5 rounded-full ${r.color} shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {r.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[11px] font-semibold rounded-full bg-dark/5 text-dark/60">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
