"use client";

import { useInView } from "@/hooks/useInView";

const EXPERIENCES = [
  {
    company: "PayU",
    role: "Senior Software Engineer",
    location: "Gurugram, India",
    period: "May 2022 — Present",
    highlight:
      "Lending platform for GPay, PhonePe, Paytm, Meesho, Swiggy & BharatPe",
    bullets: [
      "Architected Centralized Notification Service (CNS) processing 10K-50K msgs/day with 98%+ delivery rate, ~40% fewer failures, and ~35% faster OTP delivery via Kafka priority queues.",
      "Built partner integration APIs across 6 major partners with 99.5%+ uptime and sub-200ms p95 latency.",
      "Designed eNACH mandate service achieving ~90% success rate, 3x throughput via Redis caching & async processing.",
      "Built document generation system reducing dev effort by 60% and processing time by 30%.",
      "Delivered V-KYC solution with intelligent method selection for compliance.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "AWS",
      "System Design",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    location: "Noida, India",
    period: "Oct 2020 — May 2022",
    highlight: null,
    bullets: [
      "Built microservice-based billing app with Spring Boot & MS SQL for accounting workflows.",
      "Led Oracle-to-Azure SQL migration across 50+ tables with zero data loss.",
      "Drove JUnit coverage from ~30% to 80%+, reducing production defects.",
    ],
    tags: ["Spring Boot", "MS SQL", "Azure", "JUnit", "REST APIs"],
  },
];

export default function Experience() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="section-label text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            04 — Lap History
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-16">
            RACE <span className="text-f1-red">CAREER</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className={`absolute left-4 md:left-8 top-0 bottom-0 w-px bg-f1-red/30 timeline-line ${isInView ? "visible" : ""}`}
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative pl-12 md:pl-20 fade-up ${isInView ? "visible" : ""}`}
                style={
                  { "--delay": `${0.2 + i * 0.15}s` } as React.CSSProperties
                }
              >
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-f1-red bg-f1-black flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-f1-red" />
                </div>

                <div className="bg-f1-card border border-f1-border rounded-lg p-6 md:p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold">
                        {exp.company}
                      </h3>
                      <p className="text-f1-red text-sm font-[family-name:var(--font-mono)]">
                        {exp.role}
                      </p>
                      <p className="text-f1-muted text-xs mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-f1-muted text-xs font-[family-name:var(--font-mono)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {exp.highlight && (
                    <p className="text-f1-green/80 text-xs font-[family-name:var(--font-mono)] mb-4 border-l-2 border-f1-green/30 pl-3">
                      {exp.highlight}
                    </p>
                  )}

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-f1-muted text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-f1-red shrink-0 mt-1.5">
                          ▸
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-mono)] bg-f1-red/10 text-f1-red border border-f1-red/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
