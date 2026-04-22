"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold tracking-tighter text-foreground"
          >
            RAHUL
            <span className="text-accent">.</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-[13px] font-medium uppercase tracking-[0.15em] text-secondary hover:text-foreground transition-colors duration-300 link-underline"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="/Rahul_Choudhary_Resume.pdf"
                download="Rahul_Choudhary_Resume.pdf"
                className="text-[13px] font-medium uppercase tracking-[0.15em] text-secondary hover:text-foreground transition-colors duration-300 link-underline"
              >
                Resume
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <MagneticButton strength={0.25}>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, "#contact")}
                  className="text-[13px] font-medium uppercase tracking-[0.15em] bg-foreground text-white px-5 py-2.5 hover:bg-accent transition-colors duration-300 inline-block"
                >
                  Let&apos;s Talk
                </a>
              </MagneticButton>
            </motion.li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center z-[210]"
            aria-label="Toggle menu"
          >
            <span
              className={`block absolute w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block absolute w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block absolute w-6 h-[1.5px] bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu — OUTSIDE motion.nav so fixed positioning works ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-0 bg-white z-[200] md:hidden flex flex-col justify-center items-center"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-foreground"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <ul className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { scrollTo(e, link.href); setMobileOpen(false); }}
                    className="text-4xl font-black tracking-tight text-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: links.length * 0.07, duration: 0.35 }}
              >
                <a
                  href="/Rahul_Choudhary_Resume.pdf"
                  download="Rahul_Choudhary_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl font-black tracking-tight text-foreground hover:text-accent transition-colors duration-200"
                >
                  Resume
                </a>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: (links.length + 1) * 0.07, duration: 0.35 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => { scrollTo(e, "#contact"); setMobileOpen(false); }}
                  className="inline-block bg-foreground text-white text-lg font-bold uppercase tracking-[0.15em] px-8 py-4 hover:bg-accent transition-colors duration-300"
                >
                  Let&apos;s Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

