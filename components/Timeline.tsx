"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Reveal } from "./motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Milestone = {
  name: string;
  role: string;
  period: string;
  location: string;
  accent: string;
};

const MILESTONES: Milestone[] = [
  { name: "St. Thomas' College", role: "SSC", period: "2006 – 2014", location: "Dehradun", accent: "#FF8C42" },
  { name: "Doon International", role: "HSC", period: "2014 – 2016", location: "Dehradun", accent: "#00D4AA" },
  { name: "Manipal University", role: "B.Tech CS & CE", period: "2016", location: "Jaipur", accent: "#6C63FF" },
  { name: "DRDO", role: "SWE Intern", period: "May – Jun 2019", location: "Dehradun", accent: "#FFC800" },
  { name: "CESI", role: "Industrial Eng Intern", period: "Jun 2019", location: "France", accent: "#FF3D71" },
  { name: "HEIG-VD", role: "Business Eng Intern", period: "Jul 2019", location: "Switzerland", accent: "#FF8C42" },
  { name: "Pepcoding", role: "Web Dev Intern", period: "Jan – Jul 2020", location: "Delhi", accent: "#00D4AA" },
  { name: "Manipal University", role: "Graduated", period: "2020", location: "Jaipur", accent: "#6C63FF" },
  { name: "TCS", role: "Software Engineer", period: "2020 – 2022", location: "Noida", accent: "#0369D8" },
  { name: "PayU", role: "Senior SWE", period: "2022 – Present", location: "Bengaluru", accent: "#CCFF00" },
];

const STEP = 260;
const PAD = 180;

function buildPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const cx = (pts[i].x + pts[i + 1].x) / 2;
    d += ` C ${cx} ${pts[i].y}, ${cx} ${pts[i + 1].y}, ${pts[i + 1].x} ${pts[i + 1].y}`;
  }
  return d;
}

function MapPin({ color, active }: { color: string; active: boolean }) {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 32"
      className="transition-all duration-300 ease-out"
      style={{
        transform: active ? "scale(1.2)" : "scale(1)",
        filter: active
          ? `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 10px ${color})`
          : "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
      }}
    >
      <path
        d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z"
        fill={color}
      />
      <circle cx="12" cy="12" r="4" fill="#0a0a0a" />
    </svg>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const highlightPathRef = useRef<SVGPathElement>(null);
  const highlightGlowRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGCircleElement>(null);
  const travelerGlowRef = useRef<SVGCircleElement>(null);
  const pathLenRef = useRef(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerHeight < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const trackH = isMobile ? 360 : 520;
  const midY = isMobile ? 180 : 260;
  const amp = isMobile ? 55 : 75;

  const points = useMemo(
    () =>
      MILESTONES.map((_, i) => ({
        x: PAD + i * STEP,
        y: midY + (i % 2 === 0 ? -amp : amp),
      })),
    [midY, amp]
  );

  const trackW = PAD * 2 + (MILESTONES.length - 1) * STEP;
  const pathD = useMemo(() => buildPath(points), [points]);
  const lastPt = points[points.length - 1];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const hlPath = highlightPathRef.current;
    const hlGlow = highlightGlowRef.current;
    const traveler = travelerRef.current;
    const tGlow = travelerGlowRef.current;
    if (!container || !track || !hlPath) return;

    const totalScroll = trackW - window.innerWidth;
    if (totalScroll <= 0) return;

    const len = hlPath.getTotalLength();
    pathLenRef.current = len;
    hlPath.style.strokeDasharray = String(len);
    hlPath.style.strokeDashoffset = String(len);
    hlPath.style.opacity = "1";

    if (hlGlow) {
      hlGlow.style.strokeDasharray = String(len);
      hlGlow.style.strokeDashoffset = String(len);
      hlGlow.style.opacity = "1";
    }

    if (traveler && tGlow) {
      const startPt = hlPath.getPointAtLength(0);
      traveler.setAttribute("cx", String(startPt.x));
      traveler.setAttribute("cy", String(startPt.y));
      tGlow.setAttribute("cx", String(startPt.x));
      tGlow.setAttribute("cy", String(startPt.y));
    }

    const trigger = ScrollTrigger.create({
      trigger: container,
      pin: true,
      anticipatePin: 1,
      start: "top top",
      end: () => `+=${totalScroll}`,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        gsap.set(track, { x: -totalScroll * self.progress });

        const drawn = len * self.progress;

        hlPath.style.strokeDashoffset = String(len - drawn);
        if (hlGlow) {
          hlGlow.style.strokeDashoffset = String(len - drawn);
        }

        if (traveler && tGlow) {
          const pt = hlPath.getPointAtLength(drawn);
          traveler.setAttribute("cx", String(pt.x));
          traveler.setAttribute("cy", String(pt.y));
          tGlow.setAttribute("cx", String(pt.x));
          tGlow.setAttribute("cy", String(pt.y));

          let closest = 0;
          let minDist = Infinity;
          for (let i = 0; i < points.length; i++) {
            const d = Math.abs(points[i].x - pt.x);
            if (d < minDist) {
              minDist = d;
              closest = i;
            }
          }
          setActiveIdx(closest);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [points, trackW, pathD]);

  return (
    <section
      ref={containerRef}
      className="section-dark min-h-screen overflow-hidden"
    >
      <div className="h-screen flex flex-col justify-center relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 mb-6 shrink-0">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-lime text-dark text-xs font-bold flex items-center justify-center">
                02
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-muted-light">
                Journey
              </span>
            </div>
          </Reveal>
          <Reveal custom={1}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-extrabold tracking-tight text-text-light">
              The road so far.
            </h2>
          </Reveal>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-30 pointer-events-none" />

        <div
          ref={trackRef}
          className="relative will-change-transform shrink-0"
          style={{ width: trackW, height: trackH }}
        >
          <svg
            className="absolute inset-0 pointer-events-none"
            width={trackW}
            height={trackH}
            viewBox={`0 0 ${trackW} ${trackH}`}
            fill="none"
          >
            <defs>
              <filter id="timelineTrailGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>
              <filter id="timelineTravelerGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
            </defs>

            <path
              d={pathD}
              stroke="rgba(204,255,0,0.04)"
              strokeWidth={28}
              strokeLinecap="round"
            />
            <path
              d={pathD}
              stroke="rgba(204,255,0,0.12)"
              strokeWidth={2}
              strokeDasharray="10 8"
            />

            <path
              ref={highlightGlowRef}
              d={pathD}
              stroke="rgba(204,255,0,0.25)"
              strokeWidth={22}
              strokeLinecap="round"
              filter="url(#timelineTrailGlow)"
              style={{ opacity: 0 }}
            />
            <path
              ref={highlightPathRef}
              d={pathD}
              stroke="rgba(204,255,0,0.75)"
              strokeWidth={2.5}
              strokeLinecap="round"
              style={{ opacity: 0 }}
            />

            <circle
              ref={travelerGlowRef}
              cx={points[0].x}
              cy={points[0].y}
              r={18}
              fill="rgba(204,255,0,0.35)"
              filter="url(#timelineTravelerGlow)"
            />
            <circle
              ref={travelerRef}
              cx={points[0].x}
              cy={points[0].y}
              r={5}
              fill="#CCFF00"
            />

            <polygon
              points={`${lastPt.x + 16},${lastPt.y} ${lastPt.x + 6},${lastPt.y - 6} ${lastPt.x + 6},${lastPt.y + 6}`}
              fill="rgba(204,255,0,0.3)"
            />
          </svg>

          {MILESTONES.map((m, i) => {
            const above = i % 2 === 0;
            const px = points[i].x;
            const py = points[i].y;
            const active = i === activeIdx;
            const labelTop = above
              ? isMobile ? py - 130 : py - 155
              : py + (isMobile ? 30 : 40);

            return (
              <div key={i}>
                <div
                  className="absolute rounded-full pointer-events-none transition-opacity duration-300 ease-out -translate-x-1/2 -translate-y-1/2 blur-3xl"
                  style={{
                    left: px,
                    top: py,
                    width: 100,
                    height: 100,
                    backgroundColor: m.accent,
                    opacity: active ? 0.3 : 0,
                  }}
                />
                <div
                  className="absolute rounded-full pointer-events-none transition-opacity duration-300 ease-out -translate-x-1/2 -translate-y-1/2 blur-xl"
                  style={{
                    left: px,
                    top: py,
                    width: 40,
                    height: 40,
                    backgroundColor: m.accent,
                    opacity: active ? 0.4 : 0,
                  }}
                />

                <div
                  className="absolute w-px transition-opacity duration-300"
                  style={{
                    left: px,
                    top: above ? py - 68 : py + 2,
                    height: isMobile ? 30 : 40,
                    opacity: active ? 0.8 : 0.2,
                    background: `linear-gradient(${
                      above ? "to top" : "to bottom"
                    }, ${m.accent}, transparent)`,
                  }}
                />

                <div
                  className="absolute z-20"
                  style={{ left: px - 12, top: py - 28 }}
                >
                  <MapPin color={m.accent} active={active} />
                </div>

                <div
                  className="absolute -translate-x-1/2 w-[10rem] z-20 transition-opacity duration-300"
                  style={{
                    left: px,
                    top: labelTop,
                    opacity: active ? 1 : 0.5,
                  }}
                >
                  <div className="text-center">
                    <p
                      className="text-[10px] font-bold tracking-wider uppercase mb-1.5 transition-all duration-300"
                      style={{
                        color: m.accent,
                        textShadow: active
                          ? `0 0 8px ${m.accent}, 0 0 20px ${m.accent}`
                          : "none",
                      }}
                    >
                      {m.period}
                    </p>
                    <h4
                      className="text-[13px] font-bold leading-tight mb-0.5 transition-all duration-300"
                      style={{
                        color: active ? "#ffffff" : "rgba(245,240,232,0.85)",
                        textShadow: active
                          ? `0 0 6px ${m.accent}`
                          : "none",
                      }}
                    >
                      {m.name}
                    </h4>
                    <p
                      className="text-[11px] leading-tight mb-1 transition-colors duration-300"
                      style={{
                        color: active
                          ? "rgba(245,240,232,0.9)"
                          : "rgba(245,240,232,0.55)",
                      }}
                    >
                      {m.role}
                    </p>
                    <p className="text-[10px] text-text-muted flex items-center justify-center gap-1">
                      <svg
                        className="w-2.5 h-2.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
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
    </section>
  );
}
