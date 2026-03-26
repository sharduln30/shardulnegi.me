"use client";

import { Reveal } from "./motion";

export default function Education() {
  return (
    <section id="education" className="section-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-lime text-dark text-xs font-bold flex items-center justify-center">07</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted-light">Education</span>
          </div>
        </Reveal>
        <Reveal custom={1}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-3">
              <div>
                <h3 className="text-xl font-bold text-text-light mb-1">B.Tech — CS & Communication Engineering</h3>
                <span className="text-sm text-text-muted-light">Manipal University, Jaipur · CGPA: 8.75/10</span>
              </div>
              <span className="text-xs font-semibold text-text-muted-light bg-white/[0.05] px-3 py-1.5 rounded-full shrink-0">2016 – 2020</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["DSA", "OOP", "Operating Systems", "Database Systems", "Computer Networks"].map((c) => (
                <span key={c} className="px-3 py-1 text-xs font-medium rounded-full bg-lime/10 text-lime">{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
