"use client";

import { Reveal } from "./motion";

const POSTS = [
  { title: "Designing a Fault-Tolerant Notification Service", tag: "System Design", link: "#" },
  { title: "Optimizing DB Queries for High-Throughput APIs", tag: "Performance", link: "#" },
  { title: "Microservices vs Monolith: A Practical Take", tag: "Architecture", link: "#" },
];

export default function Blog() {
  return (
    <section className="section-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-dark text-cream text-xs font-bold flex items-center justify-center">08</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted">Writing</span>
          </div>
        </Reveal>
        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight text-dark mb-12">Notes.</h2>
        </Reveal>

        {POSTS.map((p, i) => (
          <Reveal key={i} custom={i + 2}>
            <a href={p.link} className="group flex items-center justify-between py-5 border-b border-dark/10">
              <div>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-indigo mr-3">{p.tag}</span>
                <h3 className="text-base md:text-lg font-semibold text-dark group-hover:text-indigo transition-colors duration-300 mt-1">{p.title}</h3>
              </div>
              <svg className="w-4 h-4 text-dark/30 -rotate-45 group-hover:rotate-0 group-hover:text-dark transition-all duration-500 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
