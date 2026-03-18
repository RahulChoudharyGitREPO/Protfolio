"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiJsonwebtokens,
  SiGithubactions,
  SiSocketdotio,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import FadeIn from "./FadeIn";

interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

const allSkills: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "REST APIs", icon: <TbApi />, color: "#6B7280" },
  { name: "WebSockets", icon: <SiSocketdotio />, color: "#010101" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000" },
  { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-white/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Skills
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight mb-16 max-w-2xl">
            Technologies & tools I work with every day.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allSkills.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col items-center gap-3 cursor-default hover:border-white/25 transition-colors duration-300"
              >
                <span
                  className="text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${skill.color}15 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
