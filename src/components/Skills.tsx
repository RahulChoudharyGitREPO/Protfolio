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
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiGrafana,
  SiExpress,
  SiAuth0,
  SiJavascript,
  SiTypescript,
  SiLinux,
  SiClerk,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import FadeIn from "./FadeIn";

interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

const allSkills: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
  { name: "Express.js", icon: <SiExpress />, color: "#333333" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "REST APIs", icon: <TbApi />, color: "#6B7280" },
  { name: "WebSockets", icon: <SiSocketdotio />, color: "#333333" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#333333" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Terraform", icon: <SiTerraform />, color: "#844FBA" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#d63aff" },
  { name: "Auth0", icon: <SiAuth0 />, color: "#EB5424" },
  { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
  { name: "Grafana", icon: <SiGrafana />, color: "#F46800" },
  { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
  { name: "Clerk", icon: <SiClerk />, color: "#6C47FF" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Skills
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight mb-16 max-w-2xl">
            Technologies & tools I work with every day.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allSkills.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.03}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative border border-border bg-white p-5 flex flex-col items-center gap-3 cursor-default hover:border-foreground/30 hover:shadow-md transition-all duration-300"
              >
                <span
                  className="text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-secondary group-hover:text-foreground transition-colors text-center">
                  {skill.name}
                </span>

                {/* Glow on hover */}
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
