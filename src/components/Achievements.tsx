"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const achievements = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-2 5l9-9h-5l2-5l-9 9h5z" />
      </svg>
    ),
    title: "500+ DSA Problems Solved",
    description:
      "Consistently solving problems on LeetCode across arrays, trees, graphs, DP, and system design. Building strong algorithmic thinking.",
    link: "https://leetcode.com/u/rahulrajwwe2/",
    linkLabel: "LeetCode Profile",
    highlight: "500+",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    title: "Open Source Contributor — PocketPaw",
    description:
      "Fixed critical crash scenarios from malformed LLM API responses. Implemented robust fallback mechanisms, added validation & audit logging in the guardian module, and wrote unit tests for security-critical edge cases.",
    link: "https://github.com/RahulChoudharyGitREPO",
    linkLabel: "GitHub Profile",
    highlight: "OSS",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: "Pair Extraordinaire — GitHub",
    description:
      "Earned the GitHub Pair Extraordinaire achievement for collaborative coding through co-authored commits and active open source participation.",
    link: "https://github.com/RahulChoudharyGitREPO",
    linkLabel: "View Achievement",
    highlight: "Badge",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "144+ GitHub Repositories",
    description:
      "Shipped 144+ repositories spanning full-stack apps, backend APIs, mobile apps, DevOps configs, and algorithm solutions. Building in public every day.",
    link: "https://github.com/RahulChoudharyGitREPO",
    linkLabel: "View Repos",
    highlight: "144+",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Relific — Forbes Top 100 Startup",
    description:
      "Worked as a Software Engineer at Relific Technologies, a Forbes Top 100 Startup in India. Built scalable REST APIs and production features used by real users.",
    link: "#experience",
    linkLabel: "View Experience",
    highlight: "Forbes 100",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Achievements
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight mb-16 max-w-xl">
            Milestones & recognition
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group border border-border p-6 sm:p-8 h-full flex flex-col hover:border-foreground/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-accent">{item.icon}</span>
                  <span className="text-2xl font-black text-foreground/10 group-hover:text-accent/20 transition-colors">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-base font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-secondary leading-relaxed mb-5 flex-1">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-cursor-hover
                  className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  <span className="link-underline">{item.linkLabel}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  >
                    <path
                      d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
