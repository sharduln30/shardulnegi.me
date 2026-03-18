"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Smart monogram instead of full name */}
        <a href="#home" className="group flex items-center gap-0">
          <span className="font-[family-name:var(--font-display)] text-xl font-extrabold text-white tracking-tighter">S</span>
          <span className="font-[family-name:var(--font-display)] text-xl font-extrabold text-lime tracking-tighter">N</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white hover:opacity-50 transition-opacity duration-300">
              {l.label}
            </a>
          ))}
          <a href="/Shardul_Negi_Resume.pdf" download className="btn-pill px-4 py-2 bg-white text-[11px] font-bold tracking-[0.15em] uppercase text-dark hover:opacity-80 transition-opacity">
            Resume
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden relative z-50 p-2 -mr-2" aria-label="Menu">
          <div className="w-6 flex flex-col gap-[6px]">
            <motion.span className="h-[2px] bg-white block origin-center" animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
            <motion.span className="h-[2px] bg-white block" animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} />
            <motion.span className="h-[2px] bg-white block origin-center" animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-display)] text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
