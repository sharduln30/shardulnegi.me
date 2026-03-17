"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "GRID", href: "#home" },
  { label: "DRIVER", href: "#about" },
  { label: "TELEMETRY", href: "#skills" },
  { label: "LAPS", href: "#experience" },
  { label: "GRANDS PRIX", href: "#projects" },
  { label: "PODIUM", href: "#achievements" },
  { label: "ACADEMY", href: "#education" },
  { label: "PIT DATA", href: "#resume" },
  { label: "RADIO", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-f1-black/80 backdrop-blur-xl border-b border-f1-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="font-[family-name:var(--font-orbitron)] text-sm font-bold tracking-wider text-f1-red"
        >
          SN<span className="text-f1-white">/30</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-[11px] font-[family-name:var(--font-orbitron)] tracking-wider transition-colors duration-200 rounded ${
                active === link.href
                  ? "text-f1-red bg-f1-red/10"
                  : "text-f1-muted hover:text-f1-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-f1-white transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-f1-white transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-f1-white transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-f1-black/95 backdrop-blur-xl border-t border-f1-border/50 mt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-xs font-[family-name:var(--font-orbitron)] tracking-wider border-b border-f1-border/20 ${
                active === link.href
                  ? "text-f1-red bg-f1-red/5"
                  : "text-f1-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
