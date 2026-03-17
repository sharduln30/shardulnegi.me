"use client";

import { useInView } from "@/hooks/useInView";

const SKILL_GROUPS = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Java", level: 95 },
      { name: "SQL", level: 88 },
      { name: "HTML/CSS", level: 75 },
    ],
  },
  {
    category: "FRAMEWORKS",
    skills: [
      { name: "Spring Boot", level: 93 },
      { name: "Thymeleaf", level: 80 },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 82 },
      { name: "Kafka", level: 85 },
      { name: "Redis", level: 86 },
    ],
  },
  {
    category: "DATABASES",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MS SQL / Oracle", level: 78 },
      { name: "Azure SQL", level: 75 },
    ],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 bg-f1-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            03 — Telemetry
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-12">
            TECH <span className="text-f1-red">STACK</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.category}
              className={`fade-up ${isInView ? "visible" : ""}`}
              style={
                { "--delay": `${0.1 + gi * 0.1}s` } as React.CSSProperties
              }
            >
              <h3 className="font-[family-name:var(--font-orbitron)] text-xs tracking-[0.2em] text-f1-muted mb-5">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-f1-white">
                        {skill.name}
                      </span>
                      <span className="text-xs font-[family-name:var(--font-mono)] text-f1-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-f1-border rounded-full overflow-hidden">
                      <div
                        className={`skill-bar-fill h-full bg-gradient-to-r from-f1-red to-f1-red/70 rounded-full ${isInView ? "visible" : ""}`}
                        style={
                          {
                            "--skill-level": `${skill.level}%`,
                            "--delay": `${0.2 + gi * 0.15 + si * 0.1}s`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 fade-up ${isInView ? "visible" : ""}`}
          style={{ "--delay": "0.5s" } as React.CSSProperties}
        >
          <h3 className="font-[family-name:var(--font-orbitron)] text-xs tracking-[0.2em] text-f1-muted mb-4">
            ALSO PROFICIENT IN
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "REST APIs",
              "Microservices",
              "Event-Driven Architecture",
              "System Design",
              "Distributed Systems",
              "CI/CD",
              "Git",
              "Linux",
              "JIRA",
              "AWS SNS",
              "AWS SQS",
              "AWS SES",
              "AWS S3",
              "AWS EC2",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs bg-f1-card border border-f1-border rounded text-f1-muted hover:text-f1-white hover:border-f1-red/50 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
