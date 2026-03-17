"use client";

import RacingLights from "./RacingLights";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-f1-black via-transparent to-f1-black pointer-events-none" />
      <div className="hero-glow" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <RacingLights />

        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-[10px] font-[family-name:var(--font-orbitron)] tracking-[0.3em] text-f1-red border border-f1-red/30 rounded-full uppercase">
            Senior Software Engineer
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
          <span className="text-f1-white">SHARDUL</span>{" "}
          <span className="text-f1-red">NEGI</span>
        </h1>

        <p className="text-f1-muted text-sm md:text-base max-w-lg mb-10 font-[family-name:var(--font-mono)]">
          Building high-scale distributed systems at PayU
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#about"
            className="btn-press px-8 py-3 bg-f1-red text-white font-[family-name:var(--font-orbitron)] text-xs tracking-wider rounded hover:bg-f1-red-dark"
          >
            START RACE
          </a>
          <a
            href="#resume"
            className="btn-press px-8 py-3 border border-f1-border text-f1-white font-[family-name:var(--font-orbitron)] text-xs tracking-wider rounded hover:border-f1-red hover:text-f1-red"
          >
            VIEW LAP DATA
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-widest">
          SCROLL
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-f1-muted"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate
              attributeName="cy"
              values="8;16;8"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </section>
  );
}
