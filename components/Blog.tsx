"use client";

import { Reveal } from "./motion";

const MEDIUM_PROFILE = "https://medium.com/@shardul.pepcoding";

const POSTS = [
  {
    title: "I Built a Centralized Notification Service — Here's What I Learned",
    tag: "System Design",
    excerpt:
      "How I designed and built a centralized notification service handling 10M+ events/day with Kafka, DLQ retry, and dynamic templates.",
    link: "https://medium.com/@shardul.pepcoding/i-built-a-centralized-notification-service-heres-what-i-learned-53962927aa70",
  },
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
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-[0.15em] uppercase text-indigo bg-indigo/10 rounded-full mb-4">
                {p.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-dark group-hover:text-indigo transition-colors duration-300 mb-3">
                {p.title}
              </h3>
              <p className="text-sm md:text-[15px] text-text-muted leading-relaxed mb-6">
                {p.excerpt}
              </p>
              <div className="flex items-center gap-2 text-indigo font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Read on Medium
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </Reveal>
        ))}

        <Reveal custom={4}>
          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-text-muted">
            <span>More articles on</span>
            <a
              href={MEDIUM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-dark text-cream text-xs font-bold tracking-wide hover:bg-dark/80 transition-colors duration-300"
            >
              Medium
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
