"use client";

import { useEffect, useState } from "react";

type Phase = "off" | "sequence" | "allOn" | "out" | "done";

export default function RacingLights() {
  const [phase, setPhase] = useState<Phase>("off");
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setPhase("sequence"), 400));

    for (let i = 1; i <= 5; i++) {
      timers.push(
        setTimeout(() => setLitCount(i), 400 + i * 400)
      );
    }

    timers.push(setTimeout(() => setPhase("allOn"), 400 + 5 * 400 + 200));
    timers.push(setTimeout(() => setPhase("out"), 400 + 5 * 400 + 800));
    timers.push(setTimeout(() => setPhase("done"), 400 + 5 * 400 + 1400));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  return (
    <div className="flex items-center gap-4 mb-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div
            className={`w-5 h-5 md:w-7 md:h-7 rounded-full border border-f1-red/30 transition-all duration-200 ${
              phase === "out"
                ? "bg-f1-red/5 opacity-10"
                : litCount >= i
                  ? "bg-f1-red shadow-[0_0_20px_6px_rgba(225,6,0,0.6)]"
                  : "bg-f1-red/10"
            }`}
          />
          <div
            className={`w-5 h-5 md:w-7 md:h-7 rounded-full border border-f1-red/30 transition-all duration-200 ${
              phase === "out"
                ? "bg-f1-red/5 opacity-10"
                : litCount >= i
                  ? "bg-f1-red shadow-[0_0_20px_6px_rgba(225,6,0,0.6)]"
                  : "bg-f1-red/10"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
