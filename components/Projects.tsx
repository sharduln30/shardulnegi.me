"use client";

import { useInView } from "@/hooks/useInView";

const PROJECTS = [
  {
    title: "Centralized Notification Service",
    circuit: "PayU — System Design",
    description:
      "Unified multi-channel notification platform replacing fragmented SMS & Email infra. Kafka priority queues, retry engine with DLQ, template engine with schema validation, multi-vendor failover.",
    metrics: ["50K msgs/day", "98%+ delivery", "~90% faster onboarding"],
    tags: ["Java", "Kafka", "AWS SES", "Redis", "System Design"],
    featured: true,
  },
  {
    title: "Partner Integration Platform",
    circuit: "PayU — API Design",
    description:
      "Partner-facing APIs handling loan origination, disbursement, and mandates across GPay, PhonePe, Paytm, Meesho, Swiggy & BharatPe.",
    metrics: ["6 partners", "99.5% uptime", "<200ms p95"],
    tags: ["Spring Boot", "REST APIs", "Redis"],
    featured: true,
  },
  {
    title: "Online Doubt Support Portal",
    circuit: "Personal Project",
    description:
      "Real-time collaboration platform with integrated whiteboard, code editor, and live chat using Socket.IO for bidirectional messaging.",
    metrics: ["Real-time", "Multi-user", "WebSocket"],
    tags: ["HTML", "CSS", "JavaScript", "Socket.IO"],
    link: "https://online-doubt-support-portal.onrender.com",
  },
  {
    title: "MS-Excel Clone",
    circuit: "Personal Project",
    description:
      "Browser-based spreadsheet engine with formula evaluation, circular reference detection via graph theory, and topological sort for cell dependencies.",
    metrics: ["Graph Theory", "Topological Sort", "Stack-based Parsing"],
    tags: ["JavaScript", "Data Structures", "Electron"],
    link: "https://github.com/sharduln30/Excel-Clone",
  },
];

export default function Projects() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="projects" className="py-24 px-6 bg-f1-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            05 — Grands Prix
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-12">
            KEY <span className="text-f1-red">PROJECTS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`fade-up ${isInView ? "visible" : ""}`}
              style={
                { "--delay": `${0.1 + i * 0.1}s` } as React.CSSProperties
              }
            >
              <div
                className={`bg-f1-card border rounded-lg p-6 h-full card-hover flex flex-col ${
                  project.featured
                    ? "border-f1-red/30"
                    : "border-f1-border"
                }`}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-f1-red animate-pulse" />
                    <span className="text-[10px] font-[family-name:var(--font-orbitron)] text-f1-red tracking-wider">
                      FEATURED
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-base font-bold">
                      {project.title}
                    </h3>
                    <p className="text-f1-muted text-xs font-[family-name:var(--font-mono)] mt-0.5">
                      {project.circuit}
                    </p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-f1-muted hover:text-f1-red transition-colors duration-200 shrink-0 ml-3"
                      aria-label={`View ${project.title}`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-f1-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-mono)] bg-f1-green/10 text-f1-green border border-f1-green/20 rounded"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-mono)] text-f1-muted border border-f1-border rounded"
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
    </section>
  );
}
