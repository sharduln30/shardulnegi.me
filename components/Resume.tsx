"use client";

import { useInView } from "@/hooks/useInView";

export default function Resume() {
  const { ref, isInView } = useInView();

  return (
    <section id="resume" className="py-24 px-6 bg-f1-dark">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="section-label text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            09 — Pit Data
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-6">
            DOWNLOAD <span className="text-f1-red">RESUME</span>
          </h2>
          <p className="text-f1-muted text-sm mb-10 max-w-lg mx-auto">
            Full career data sheet — experience, projects, skills, and
            achievements in one page.
          </p>
        </div>

        <div
          className={`fade-up ${isInView ? "visible" : ""}`}
          style={{ "--delay": "0.15s" } as React.CSSProperties}
        >
          <div className="inline-flex flex-col items-center gap-6 bg-f1-card border border-f1-border rounded-lg p-10">
            <div className="grid grid-cols-3 gap-6 text-center mb-4">
              <div>
                <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-f1-red block">
                  5+
                </span>
                <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider">
                  YEARS
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-f1-red block">
                  6
                </span>
                <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider">
                  PARTNERS
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-f1-red block">
                  2
                </span>
                <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider">
                  COMPANIES
                </span>
              </div>
            </div>

            <a
              href="/Shardul_Negi_Resume.pdf"
              download
              className="btn-press inline-flex items-center gap-3 px-10 py-4 bg-f1-red text-white font-[family-name:var(--font-orbitron)] text-sm tracking-wider rounded hover:bg-f1-red-dark"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD PIT DATA
            </a>

            <span className="text-f1-muted text-[10px] font-[family-name:var(--font-mono)]">
              PDF • 1 page • ATS optimized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
