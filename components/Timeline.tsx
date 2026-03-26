"use client";

import { Reveal } from "./motion";

type Milestone = {
  name: string;
  role: string;
  period: string;
  location: string;
  accent: string;
  type: "edu" | "work";
};

const MILESTONES: Milestone[] = [
  { name: "St. Thomas' College", role: "SSC", period: "2006 – 2014", location: "Dehradun", accent: "#FF8C42", type: "edu" },
  { name: "Doon International", role: "HSC", period: "2014 – 2016", location: "Dehradun", accent: "#00D4AA", type: "edu" },
  { name: "Manipal University", role: "B.Tech, CS & CE", period: "2016 – 2020", location: "Jaipur", accent: "#6C63FF", type: "edu" },
  { name: "DRDO", role: "SWE Intern", period: "May – Jun 2019", location: "Dehradun", accent: "#FFC800", type: "work" },
  { name: "CESI", role: "Industrial Eng Intern", period: "Jun 2019", location: "France", accent: "#FF3D71", type: "work" },
  { name: "HEIG-VD", role: "Business Eng Intern", period: "Jul 2019", location: "Switzerland", accent: "#FF8C42", type: "work" },
  { name: "Pepcoding", role: "Web Dev Intern", period: "Jan – Jul 2020", location: "Delhi", accent: "#00D4AA", type: "work" },
  { name: "TCS", role: "Systems Engineer", period: "2020 – 2022", location: "Noida", accent: "#0369D8", type: "work" },
  { name: "PayU", role: "Senior SWE", period: "2022 – Present", location: "Bengaluru", accent: "#CCFF00", type: "work" },
];

const STEP = 220;
const PAD = 120;
const TRACK_W = PAD * 2 + (MILESTONES.length - 1) * STEP;
const TRACK_H = 480;
const MID_Y = TRACK_H / 2;
const AMP = 70;

const POINTS = MILESTONES.map((_, i) => ({
  x: PAD + i * STEP,
  y: MID_Y + (i % 2 === 0 ? -AMP : AMP),
}));

function buildPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const cx = (pts[i].x + pts[i + 1].x) / 2;
    d += ` C ${cx} ${pts[i].y}, ${cx} ${pts[i + 1].y}, ${pts[i + 1].x} ${pts[i + 1].y}`;
  }
  return d;
}

const PATH_D = buildPath(POINTS);

function MapPin({ color }: { color: string }) {
  return (
    <svg width="24" height="30" viewBox="0 0 24 32" className="drop-shadow-lg">
      <path
        d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z"
        fill={color}
      />
      <circle cx="12" cy="12" r="4" fill="#0a0a0a" />
    </svg>
  );
}

export default function Timeline() {
  return (
    <section className="section-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
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
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-text-light">
            The road so far.
          </h2>
        </Reveal>
      </div>

      <Reveal custom={2}>
        <div className="relative">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          <div className="overflow-x-auto timeline-scroll pb-4">
            <div className="relative" style={{ width: TRACK_W, height: TRACK_H }}>
              {/* SVG trail */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width={TRACK_W}
                height={TRACK_H}
                viewBox={`0 0 ${TRACK_W} ${TRACK_H}`}
                fill="none"
              >
                {/* Glow under the trail */}
                <path
                  d={PATH_D}
                  stroke="rgba(204,255,0,0.06)"
                  strokeWidth={28}
                  strokeLinecap="round"
                />
                {/* Dashed adventure trail */}
                <path
                  d={PATH_D}
                  stroke="rgba(204,255,0,0.2)"
                  strokeWidth={2}
                  strokeDasharray="10 8"
                />
                {/* Arrow at the end */}
                {(() => {
                  const last = POINTS[POINTS.length - 1];
                  return (
                    <polygon
                      points={`${last.x + 14},${last.y} ${last.x + 6},${last.y - 5} ${last.x + 6},${last.y + 5}`}
                      fill="rgba(204,255,0,0.3)"
                    />
                  );
                })()}
              </svg>

              {/* Milestone pins and labels */}
              {MILESTONES.map((m, i) => {
                const above = i % 2 === 0;
                const px = POINTS[i].x;
                const py = POINTS[i].y;

                return (
                  <div key={i}>
                    {/* Connector line from pin to label */}
                    <div
                      className="absolute w-px opacity-40"
                      style={{
                        left: px,
                        top: above ? py - 68 : py + 2,
                        height: 40,
                        background: `linear-gradient(${above ? "to top" : "to bottom"}, ${m.accent}, transparent)`,
                      }}
                    />

                    {/* Pin */}
                    <div
                      className="absolute z-20"
                      style={{ left: px - 12, top: py - 28 }}
                    >
                      <MapPin color={m.accent} />
                    </div>

                    {/* Label */}
                    <div
                      className="absolute -translate-x-1/2 w-[10rem]"
                      style={{
                        left: px,
                        top: above ? py - 165 : py + 38,
                      }}
                    >
                      <div className="text-center">
                        <p
                          className="text-[10px] font-bold tracking-wider uppercase mb-1.5"
                          style={{ color: m.accent }}
                        >
                          {m.period}
                        </p>
                        <h4 className="text-[13px] font-bold text-text-light leading-tight mb-0.5">
                          {m.name}
                        </h4>
                        <p className="text-[11px] text-text-muted-light leading-tight mb-1">
                          {m.role}
                        </p>
                        <p className="text-[10px] text-text-muted flex items-center justify-center gap-1">
                          <svg className="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {m.location}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
