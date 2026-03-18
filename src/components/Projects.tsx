"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Train Booking System",
    description:
      "Backend-heavy booking platform — auth, seat management, real-time availability, and transactional booking logic.",
    stack: ["NestJS", "MongoDB", "JWT", "REST API"],
    github: "#",
    number: "01",
  },
  {
    title: "Real-Life RPG App",
    description:
      "Mobile app that gamifies daily life — complete quests, earn XP, level up with real-time tracking and push notifications.",
    stack: ["React Native", "Node.js", "WebSockets", "MongoDB"],
    github: "#",
    number: "02",
  },
  {
    title: "PocketPaw",
    description:
      "Open source contribution to a community pet care platform. Features, bug fixes, and developer experience improvements.",
    stack: ["Open Source", "React", "Node.js"],
    github: "#",
    number: "03",
  },
  {
    title: "Neighbourhood Work Finder",
    description:
      "Connecting people with local service providers and odd jobs. Clean UX with reliable matching algorithms.",
    stack: ["React", "NestJS", "MongoDB", "REST API"],
    github: "#",
    number: "04",
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
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-16 border-b border-border items-start ${
        index === 0 ? "border-t" : ""
      }`}
    >
      {/* Number + Title */}
      <div className="lg:col-span-1">
        <span className="text-xs font-mono text-secondary">{project.number}</span>
      </div>

      <div className="lg:col-span-5">
        <motion.div style={{ y }}>
          <FadeIn>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 group">
              <a
                href={project.github}
                className="hover:text-accent transition-colors duration-300"
                data-cursor-hover
              >
                {project.title}
              </a>
            </h3>
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
          <a
            href={project.github}
            data-cursor-hover
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <span className="link-underline">View Project</span>
            <motion.svg
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
            </motion.svg>
          </a>
        </FadeIn>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-foreground" />
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
