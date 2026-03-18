"use client";

import { Reveal, scaleUp } from "./motion";

const GROUPS = [
  {
    title: "Backend",
    color: "bg-indigo",
    textColor: "text-white",
    skills: ["Java", "Spring Boot", "Microservices", "System Design", "REST APIs", "gRPC"],
  },
  {
    title: "Data & Messaging",
    color: "bg-lime",
    textColor: "text-dark",
    skills: ["MySQL", "Redis", "Kafka", "RabbitMQ", "Event-Driven Arch"],
  },
  {
    title: "Cloud & DevOps",
    color: "bg-pink",
    textColor: "text-white",
    skills: ["AWS (SES/SNS/SQS/S3)", "Docker", "Kubernetes", "CI/CD", "Datadog"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-lime text-dark text-xs font-bold flex items-center justify-center">02</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted-light">Skills</span>
          </div>
        </Reveal>
        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-text-light">
            Technical arsenal.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} variants={scaleUp} custom={i}>
              <div className={`${g.color} ${g.textColor} rounded-3xl p-8 h-full`}>
                <h3 className="text-lg font-bold mb-6">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-black/10 backdrop-blur-sm">
                      {s}
                    </span>
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
