"use client";

import { useRef, useEffect } from "react";
import { Reveal } from "./motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Centralized Notification Service",
    tag: "Distributed System",
    where: "PayU",
    desc: "Unified platform — DLQ retry, Kafka priority queues, dynamic templates. 10M+ events/day.",
    metrics: ["10M+/day", "99.9%", "<50ms"],
    bg: "bg-indigo",
    text: "text-white",
    link: "#",
  },
  {
    title: "Partner Integration Platform",
    tag: "API Gateway",
    where: "PayU",
    desc: "Resilient API layer for 6+ lending partners. Circuit breakers, rate limiting, 99.99% uptime.",
    metrics: ["99.99%", "Zero-downtime"],
    bg: "bg-lime",
    text: "text-dark",
    link: "#",
  },
  {
    title: "Online Doubt Support",
    tag: "Full Stack",
    where: "Personal Project",
    desc: "Real-time student-educator platform with Socket.IO, whiteboard, and code editor.",
    metrics: ["Real-time", "Scalable"],
    bg: "bg-pink",
    text: "text-white",
    link: "https://online-doubt-support-portal.onrender.com",
  },
  {
    title: "MS Excel Clone",
    tag: "Frontend",
    where: "Personal Project",
    desc: "Spreadsheet with formula eval, graph-based circular ref detection, topological sort.",
    metrics: ["Graph theory", "Infix eval"],
    bg: "bg-orange",
    text: "text-white",
    link: "https://github.com/sharduln30/Excel-Clone",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    const trigger = ScrollTrigger.create({
      trigger: container,
      pin: true,
      start: "top top",
      end: () => `+=${totalScroll}`,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        gsap.set(track, { x: -totalScroll * self.progress });
      },
    });

    return () => { trigger.kill(); };
  }, []);

  return (
    <section id="projects" ref={containerRef} className="section-dark min-h-screen overflow-hidden">
      <div className="h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 mb-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-8 rounded-full bg-lime text-dark text-xs font-bold flex items-center justify-center">05</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted-light">Projects</span>
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight text-text-light">
              Featured work.
            </h2>
          </Reveal>
        </div>

        <div ref={trackRef} className="flex gap-6 pl-6 md:pl-10 will-change-transform">
          {PROJECTS.map((p, i) => {
            const ext = p.link !== "#";
            return (
              <a
                key={i}
                href={p.link}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className={`group ${p.bg} ${p.text} rounded-3xl p-8 md:p-10 w-[85vw] md:w-[45vw] lg:w-[35vw] shrink-0 flex flex-col justify-between min-h-[50vh] relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold tracking-[0.15em] uppercase opacity-60">{p.tag}</span>
                      <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-black/10">{p.where}</span>
                    </div>
                    {ext && (
                      <svg className="w-4 h-4 opacity-40 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    )}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-extrabold tracking-tight mb-4">{p.title}</h3>
                  <p className="text-sm leading-[1.7] opacity-70 max-w-sm">{p.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {p.metrics.map((m) => (
                    <span key={m} className="px-3 py-1 text-[11px] font-bold rounded-full bg-black/15 backdrop-blur-sm">{m}</span>
                  ))}
                </div>
              </a>
            );
          })}
          <div className="w-10 shrink-0" />
        </div>
      </div>
    </section>
  );
}
