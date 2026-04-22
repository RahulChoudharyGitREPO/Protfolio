"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-foreground mb-20">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-l-2 border-accent pl-8 sm:pl-12 py-8 relative"
          >
            <div className="absolute left-[-7px] top-8 w-3 h-3 rounded-full bg-accent" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Software Engineer
                </h3>
                <p className="text-accent font-semibold text-lg mt-1">
                  Gig Tech Orbit
                </p>
                <p className="text-xs text-secondary mt-1">
                  Delhi, India
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary border border-border px-4 py-2 self-start">
                Jan 2023 — Feb 2025
              </span>
            </div>

            <ul className="space-y-4 text-secondary leading-relaxed">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Developed and maintained scalable REST APIs using NestJS, Node.js, and MongoDB
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Implemented JWT-based auth and Role-Based Access Control (RBAC) systems
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Designed and optimized database schemas for performance and data consistency
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Collaborated on mobile app features using React Native (Expo)
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Integrated AI-assisted workflows (Claude Code) to improve productivity and delivery time
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Worked in an agile environment, delivering features under tight deadlines
              </li>
            </ul>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border-l-2 border-accent pl-8 sm:pl-12 py-8 relative mt-8"
          >
            <div className="absolute left-[-7px] top-8 w-3 h-3 rounded-full bg-accent" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Software Engineer
                </h3>
                <p className="text-accent font-semibold text-lg mt-1">
                  Relific Technologies
                </p>
                <p className="text-xs text-secondary mt-1">
                  Forbes Top 100 Startup &middot; Remote
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary border border-border px-4 py-2 self-start">
                Apr 2025 — Apr 2026
              </span>
            </div>

            <ul className="space-y-4 text-secondary leading-relaxed">
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Developed and maintained scalable REST APIs using NestJS, Node.js, and MongoDB
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Implemented JWT-based auth and Role-Based Access Control (RBAC) systems
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Integrated AI-assisted workflows (Claude Code) to improve productivity and delivery time
              </li>
              <li className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0 text-accent">
                  <path d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Worked in an agile environment, delivering features under tight deadlines
              </li>
            </ul>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
