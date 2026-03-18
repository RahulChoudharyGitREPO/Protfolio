"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-white/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight mb-20">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-l-2 border-accent pl-8 sm:pl-12 py-8 relative"
          >
            {/* Dot on timeline */}
            <div className="absolute left-[-7px] top-8 w-3 h-3 rounded-full bg-accent" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Software Engineer Intern
                </h3>
                <p className="text-accent font-semibold text-lg mt-1">Relific</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 bg-white/[0.05] px-4 py-2 self-start">
                Present
              </span>
            </div>

            <ul className="space-y-4 text-white/60 leading-relaxed">
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 shrink-0 text-accent"
                >
                  <path
                    d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Designed and built backend APIs powering real-world production features
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 shrink-0 text-accent"
                >
                  <path
                    d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Implemented complex business logic for scalable, high-traffic systems
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 shrink-0 text-accent"
                >
                  <path
                    d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Worked with NestJS, MongoDB, and modern backend tooling in a fast-paced startup
              </li>
            </ul>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
