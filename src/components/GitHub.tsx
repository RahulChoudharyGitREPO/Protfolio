"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const pinnedRepos = [
  {
    name: "TrainApp",
    description:
      "Full-stack train booking system with auth, seat management & transactions",
    language: "JavaScript",
    stars: 1,
  },
  {
    name: "SephoraClone",
    description:
      "E-commerce clone with product browsing, cart & checkout flow",
    language: "JavaScript",
    stars: 0,
  },
  {
    name: "restaurantAppbackend",
    description:
      "Scalable restaurant ordering backend with real-time order updates",
    language: "JavaScript",
    stars: 0,
  },
  {
    name: "neighborhood",
    description:
      "Local services & odd-jobs finder connecting communities",
    language: "JavaScript",
    stars: 1,
  },
];

const highlights = [
  { label: "Total Repos", value: "144+" },
  { label: "Achievements", value: "Pair Extraordinaire" },
  { label: "DSA Solved", value: "500+" },
  { label: "Focus", value: "Full Stack + DevOps" },
];

function ContributionGraph() {
  const [cells, setCells] = useState<number[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 364 }, () => Math.random());
    setCells(generated);
  }, []);

  if (cells.length === 0) return null;

  return (
    <div className="grid grid-cols-[repeat(52,1fr)] gap-[3px]">
      {cells.map((intensity, i) => {
        let bg = "#f0f0f0";
        if (intensity > 0.8) bg = "#2563EB";
        else if (intensity > 0.6) bg = "rgba(37,99,235,0.55)";
        else if (intensity > 0.4) bg = "rgba(37,99,235,0.25)";
        else if (intensity > 0.25) bg = "#e0e0e0";
        return (
          <div
            key={i}
            className="aspect-square rounded-[2px]"
            style={{ backgroundColor: bg }}
          />
        );
      })}
    </div>
  );
}

export default function GitHub() {
  return (
    <section className="py-32 px-6 lg:px-12 overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Open Source
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight max-w-xl text-foreground">
              Building in public on{" "}
              <a
                href="https://github.com/RahulChoudharyGitREPO"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-accent hover:underline underline-offset-4"
              >
                GitHub
              </a>
            </h2>
            <a
              href="https://github.com/RahulChoudharyGitREPO"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-colors shrink-0"
            >
              <span className="link-underline">View Full Profile</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
          </div>
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16 bg-border">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-[#fafafa] p-6 sm:p-8 text-center"
              >
                <p className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-1">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Pinned repos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo, i) => (
            <FadeIn key={repo.name} delay={i * 0.08}>
              <motion.a
                href={`https://github.com/RahulChoudharyGitREPO/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group block p-6 sm:p-8 border border-border hover:border-foreground/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-secondary group-hover:text-accent transition-colors"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {repo.name}
                    </h3>
                  </div>

                  <p className="text-sm text-secondary leading-relaxed mb-5">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-secondary">
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      {repo.language}
                    </span>
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1 text-xs text-secondary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                        {repo.stars}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        {/* Contribution graph */}
        <FadeIn delay={0.3}>
          <div className="mt-16 p-6 sm:p-8 border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-6">
              Contribution Activity
            </p>
            <ContributionGraph />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
