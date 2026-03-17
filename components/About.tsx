"use client";

import { useInView } from "@/hooks/useInView";

const STATS = [
  { label: "YEARS EXP", value: "5+" },
  { label: "PARTNERS", value: "6" },
  { label: "DAILY TXN", value: "50K+" },
  { label: "UPTIME", value: "99.5%" },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`fade-up ${isInView ? "visible" : ""}`}>
          <span className="text-f1-red font-[family-name:var(--font-orbitron)] text-[10px] tracking-[0.3em] uppercase">
            02 — Driver Profile
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-4xl font-bold mt-2 mb-12">
            ABOUT <span className="text-f1-red">ME</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`md:col-span-2 fade-up ${isInView ? "visible" : ""}`}
            style={{ "--delay": "0.1s" } as React.CSSProperties}
          >
            <div className="bg-f1-card border border-f1-border rounded-lg p-8 carbon-fiber">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-f1-gray border-2 border-f1-red flex items-center justify-center font-[family-name:var(--font-orbitron)] text-2xl font-bold text-f1-red shrink-0">
                  SN
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold">
                    Shardul Negi
                  </h3>
                  <p className="text-f1-red text-sm font-[family-name:var(--font-mono)]">
                    Senior Software Engineer @ PayU
                  </p>
                  <p className="text-f1-muted text-xs mt-1">
                    Gurugram, India
                  </p>
                </div>
              </div>

              <p className="text-f1-muted leading-relaxed text-sm">
                Senior Software Engineer with 5+ years of experience designing
                and building high-scale distributed backend systems in fintech.
                At PayU, I architect services processing tens of thousands of
                daily transactions across lending integrations with GPay,
                PhonePe, Paytm, Meesho, Swiggy, and BharatPe. Deep expertise in
                Java, Spring Boot, AWS, Kafka, microservices, and event-driven
                architectures.
              </p>
            </div>
          </div>

          <div
            className={`fade-up ${isInView ? "visible" : ""}`}
            style={{ "--delay": "0.2s" } as React.CSSProperties}
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-f1-card border border-f1-border rounded-lg p-4 flex flex-col items-center justify-center text-center"
                >
                  <span className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-f1-red">
                    {stat.value}
                  </span>
                  <span className="text-f1-muted text-[10px] font-[family-name:var(--font-orbitron)] tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
