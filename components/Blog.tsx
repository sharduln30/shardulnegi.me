"use client";

import { useInView } from "@/hooks/useInView";

const POSTS = [
  {
    title: "Designing a Centralized Notification Service",
    excerpt:
      "How we replaced fragmented SMS & Email infra at PayU with a unified, multi-channel platform processing 50K+ notifications daily.",
    date: "2025",
    circuit: "System Design",
    readTime: "8 min",
  },
  {
    title: "Kafka Priority Queues in Production",
    excerpt:
      "Lessons learned implementing 4-tier priority queuing for real-time OTP delivery alongside bulk transactional notifications.",
    date: "2025",
    circuit: "Backend",
    readTime: "6 min",
  },
  {
    title: "Building Retry Engines with DLQ",
    excerpt:
      "A practical guide to exponential backoff, dead letter queues, and one-click replay for notification delivery at scale.",
    date: "2024",
    circuit: "Reliability",
    readTime: "5 min",
  },
];

export default function Blog() {
  const { ref, isInView } = useInView();

  return (
    <section id="blog" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            08 — Race Reports
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-4">
            BLOG <span className="text-f1-red">POSTS</span>
          </h2>
          <p className="text-f1-muted text-sm mb-12">
            Coming soon — technical deep dives into systems I&apos;ve built.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <div
              key={post.title}
              className={`fade-up ${isInView ? "visible" : ""}`}
              style={
                { "--delay": `${0.1 + i * 0.1}s` } as React.CSSProperties
              }
            >
              <div className="bg-f1-card border border-f1-border rounded-lg p-6 h-full card-hover flex flex-col opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-orbitron)] bg-f1-red/10 text-f1-red border border-f1-red/20 rounded">
                    {post.circuit}
                  </span>
                  <span className="text-f1-muted text-[10px] font-[family-name:var(--font-mono)]">
                    {post.date}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-bold mb-2">
                  {post.title}
                </h3>

                <p className="text-f1-muted text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-f1-muted text-[10px] font-[family-name:var(--font-mono)]">
                    {post.readTime} read
                  </span>
                  <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
