"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import FloatingAvatar from "./FloatingAvatar";

const projects = [
  {
    title: "ClientStream",
    description:
      "AI-powered Lead Discovery & CRM platform. Automates finding, extracting, and managing high-quality business leads using real-time web scraping and advanced AI extraction. Used by hundreds of real users in production.",
    stack: ["Next.js", "NestJS", "OpenAI", "Playwright", "MongoDB"],
    github: "https://github.com/RahulChoudharyGitREPO/LeadAI",
    live: "https://lead-ai-d9na.vercel.app/",
    number: "01",
    status: "Live",
    isOSS: false,
  },
  {
    title: "Train Booking System",
    description:
      "Backend-heavy booking platform — auth, seat management, real-time availability, and transactional booking logic.",
    stack: ["NestJS", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/RahulChoudharyGitREPO/TrainApp",
    live: null,
    number: "02",
    status: null,
    isOSS: false,
  },
  {
    title: "Real-Life RPG App",
    description:
      "Mobile app that gamifies daily life — complete quests, earn XP, level up with real-time tracking and push notifications.",
    stack: ["React Native", "Node.js", "WebSockets", "MongoDB"],
    github: "#",
    live: null,
    number: "03",
    status: "Coming Soon",
    isOSS: false,
  },
  {
    title: "Sephora Clone",
    description:
      "Full-featured e-commerce clone with product browsing, cart, checkout, and payment integration. Pixel-perfect UI with robust backend.",
    stack: ["JavaScript", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/RahulChoudharyGitREPO/SephoraClone",
    live: null,
    number: "04",
    status: null,
    isOSS: false,
  },
  {
    title: "Restaurant App Backend",
    description:
      "Scalable backend for a restaurant ordering system — menu management, order flow, real-time status updates, and admin dashboard APIs.",
    stack: ["NestJS", "MongoDB", "JWT", "WebSockets"],
    github: "https://github.com/RahulChoudharyGitREPO/restaurantAppbackend",
    live: null,
    number: "05",
    status: null,
    isOSS: false,
  },
  {
    title: "Neighbourhood Work Finder",
    description:
      "Connecting people with local service providers and odd jobs. Clean UX with reliable matching algorithms.",
    stack: ["React", "NestJS", "MongoDB", "REST API"],
    github: "https://github.com/RahulChoudharyGitREPO/neighborhood",
    live: null,
    number: "06",
    status: null,
    isOSS: false,
  },
  {
    title: "PocketPaw (OSS)",
    description:
      "Fixed critical LLM crash scenarios from malformed API responses. Built fallback mechanisms, added validation & audit logging in the guardian module, and wrote unit tests for security-critical paths.",
    stack: ["Open Source", "LLM", "Node.js", "Testing"],
    github: "#",
    live: null,
    number: "07",
    status: null,
    isOSS: true,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-16 border-b border-border items-start relative ${
        index === 0 ? "border-t" : ""
      } ${
        project.isOSS
          ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-l-4 border-l-emerald-500 pl-6 rounded-sm"
          : ""
      }`}
    >
      {/* OSS Banner */}
      {project.isOSS && (
        <div className="lg:col-span-12 flex items-center gap-2 -mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600 border border-emerald-400 bg-emerald-50 px-3 py-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            Open Source Contributor
          </span>
          <span className="text-[11px] text-emerald-600/70">— Real contribution to a production codebase</span>
        </div>
      )}
      {/* Number */}
      <div className="lg:col-span-1">
        <span className="text-xs font-mono text-secondary">{project.number}</span>
      </div>

      {/* Title + Description */}
      <div className="lg:col-span-5">
        <motion.div style={{ y }}>
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                  data-cursor-hover
                >
                  {project.title}
                </a>
              </h3>
              {project.status === "Live" && (
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-green-500 text-white">
                  ● Live
                </span>
              )}
              {project.status === "Coming Soon" && (
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-accent text-white animate-pulse">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-base text-secondary leading-relaxed">
              {project.description}
            </p>
          </FadeIn>
        </motion.div>
      </div>

      {/* Stack */}
      <div className="lg:col-span-3">
        <FadeIn delay={0.1}>
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium border border-border text-foreground hover:bg-foreground hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Links */}
      <div className="lg:col-span-3 flex lg:justify-end items-start">
        <FadeIn delay={0.2}>
          {project.status === "Coming Soon" ? (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
              In Development
            </span>
          ) : project.live ? (
            <div className="flex flex-col gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group inline-flex items-center gap-2 text-sm font-medium text-white bg-accent px-4 py-2"
              >
                <span>↗ View Live</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="link-underline">GitHub</span>
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
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="link-underline">View Project</span>
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
          )}
        </FadeIn>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Floating avatars */}
      <FloatingAvatar seed="fullstack-rahul" style="fun-emoji" bg="#fef9c3" size={62} top="5%" right="3%" rotate={6} delay={0.2} floatDuration={4.8} />
      <FloatingAvatar seed="dsa-500" style="micah" bg="#fee2e2" size={54} bottom="5%" left="1%" rotate={-8} delay={0.4} floatDuration={3.9} />
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Projects
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight max-w-lg">
              Selected work
            </h2>
            <p className="text-sm text-secondary max-w-sm">
              A collection of projects I&apos;ve built — from backend-heavy systems to
              mobile apps and open source contributions.
            </p>
          </div>
        </FadeIn>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
