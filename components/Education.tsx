"use client";

import { useInView } from "@/hooks/useInView";

export default function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="py-24 px-6 bg-f1-dark">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            07 — Race Academy
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-12">
            EDUCA<span className="text-f1-red">TION</span>
          </h2>
        </div>

        <div
          className={`fade-up ${isInView ? "visible" : ""}`}
          style={{ "--delay": "0.15s" } as React.CSSProperties}
        >
          <div className="bg-f1-card border border-f1-border rounded-lg p-8 card-hover">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-f1-red/10 border border-f1-red/20 flex items-center justify-center font-[family-name:var(--font-orbitron)] text-lg font-bold text-f1-red shrink-0">
                  MUJ
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-base font-bold">
                    Manipal University Jaipur
                  </h3>
                  <p className="text-f1-muted text-sm mt-0.5">
                    B.Tech, Computer Science & Communication Engineering
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="px-2 py-0.5 text-[10px] font-[family-name:var(--font-mono)] bg-f1-green/10 text-f1-green border border-f1-green/20 rounded">
                      CGPA: 8.75/10.0
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-f1-muted text-xs font-[family-name:var(--font-mono)] whitespace-nowrap">
                Aug 2016 — Jun 2020
              </span>
            </div>

            <div className="mt-6 pt-6 border-t border-f1-border/50">
              <h4 className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider mb-3">
                RELEVANT COURSEWORK
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming",
                  "Operating Systems",
                  "Database Systems",
                  "Computer Networks",
                  "Web Development",
                  "Distributed Systems",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-xs bg-f1-border/30 text-f1-muted rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
