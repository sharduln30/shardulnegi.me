"use client";

import { Reveal, scaleUp } from "./motion";

export default function Resume() {
  return (
    <section id="resume" className="section-indigo py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <Reveal variants={scaleUp}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Want the full picture?
          </h2>
          <p className="text-white/60 text-sm mb-10 max-w-md mx-auto">Experience, skills, and quantifiable impact — one page.</p>
          <a href="/Shardul_Negi_Resume.pdf" download className="btn-pill px-8 py-4 bg-white text-indigo text-sm font-bold hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
