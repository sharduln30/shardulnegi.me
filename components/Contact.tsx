"use client";

import { Reveal } from "./motion";

const LINKS = [
  { label: "Email", value: "shardul.exe@gmail.com", href: "mailto:shardul.exe@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shardulnegi" },
  { label: "GitHub", href: "https://github.com/sharduln30" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-lime text-dark text-xs font-bold flex items-center justify-center">08</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted-light">Contact</span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-light leading-[1.05]">
              Let's build something{" "}
              <span className="text-lime">great</span>.
            </h2>
          </Reveal>

          <Reveal custom={1}>
            <div className="flex items-center gap-6 md:gap-8 pb-2">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-sm font-semibold text-text-muted-light hover:text-lime transition-colors duration-300">
                  {l.label}
                  <svg className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
