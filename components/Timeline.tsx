"use client";

import { Reveal } from "./motion";

const JOURNEY = [
  {
    company: "PayU",
    role: "Senior Software Engineer",
    period: "May 2022 – Present",
    location: "Bengaluru, India",
    accent: "#CCFF00",
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    period: "Oct 2020 – May 2022",
    location: "Noida, India",
    accent: "#6C63FF",
  },
  {
    company: "Pepcoding Education",
    role: "Web Development Intern",
    period: "Jan 2021 – Jun 2021",
    location: "Delhi, India",
    accent: "#00D4AA",
  },
  {
    company: "HEIG-VD",
    role: "Business Engineering Intern",
    period: "Jul 2019",
    location: "Yverdon, Switzerland",
    accent: "#FF8C42",
  },
  {
    company: "CESI Ecole d'Ingénieurs",
    role: "Industrial Engineering Intern",
    period: "Jun 2019",
    location: "Nanterre, France",
    accent: "#FF3D71",
  },
  {
    company: "DRDO",
    role: "Software Engineering Intern",
    period: "May 2019 – Jun 2019",
    location: "Dehradun, India",
    accent: "#FFC800",
  },
];

function LocationIcon() {
  return (
    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TimelineCard({ item }: { item: (typeof JOURNEY)[number] }) {
  return (
    <div
      className="rounded-2xl bg-white/[0.03] backdrop-blur-sm p-6 transition-colors hover:bg-white/[0.06] h-full"
      style={{ borderWidth: 1, borderColor: `${item.accent}33` }}
    >
      <span
        className="inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full text-text-muted-light mb-3"
        style={{ backgroundColor: `${item.accent}18` }}
      >
        {item.period}
      </span>
      <h3 className="text-lg font-bold text-text-light mb-1">{item.company}</h3>
      <p className="text-sm text-text-muted-light mb-2">{item.role}</p>
      <p className="text-xs text-text-muted flex items-center gap-1.5">
        <LocationIcon />
        {item.location}
      </p>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="section-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-8 rounded-full bg-lime text-dark text-xs font-bold flex items-center justify-center">
              04
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted-light">
              Journey
            </span>
          </div>
        </Reveal>

        <Reveal custom={1}>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight mb-16 text-text-light">
            The road so far.
          </h2>
        </Reveal>

        {/* Mobile: single column with left line */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          {JOURNEY.map((item, idx) => (
            <Reveal key={idx} custom={idx + 2}>
              <div className="relative pl-12 mb-10 last:mb-0">
                <div
                  className="absolute left-4 -translate-x-1/2 top-2 z-10 w-3 h-3 rounded-full ring-4 ring-dark"
                  style={{ backgroundColor: item.accent }}
                />
                <TimelineCard item={item} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop: two-column alternating grid with center spine */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-px" />

          {JOURNEY.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <Reveal key={idx} custom={idx + 2}>
                <div className="grid grid-cols-[1fr_3rem_1fr] items-start mb-10 last:mb-0">
                  {/* Left column */}
                  <div className={isLeft ? "" : "invisible"}>
                    {isLeft && (
                      <div className="pr-4">
                        <TimelineCard item={item} />
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="flex justify-center pt-2">
                    <div
                      className="w-3.5 h-3.5 rounded-full ring-4 ring-dark z-10"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>

                  {/* Right column */}
                  <div className={isLeft ? "invisible" : ""}>
                    {!isLeft && (
                      <div className="pl-4">
                        <TimelineCard item={item} />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
