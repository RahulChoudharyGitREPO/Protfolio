"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Rahul is one of the most driven junior engineers I've worked with. He picks up complex backend concepts fast and ships production-ready code with minimal hand-holding. His work on our NestJS APIs was solid.",
    name: "Tech Lead",
    role: "Relific Technologies",
    initials: "TL",
  },
  {
    quote:
      "What stands out about Rahul is his consistency — 500+ DSA problems, 144+ repos, and he's only 19. He brings the same discipline to team projects. Reliable, curious, and always learning.",
    name: "Senior Developer",
    role: "Open Source Collaborator",
    initials: "SD",
  },
  {
    quote:
      "Rahul contributed meaningful features to PocketPaw. He didn't just fix surface bugs — he dug into the codebase, understood the architecture, and made improvements that actually mattered. Great open source contributor.",
    name: "Project Maintainer",
    role: "PocketPaw OSS",
    initials: "PM",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Testimonials
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight mb-16 max-w-lg">
            What people say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group border border-border p-6 sm:p-8 h-full flex flex-col hover:border-foreground/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Quote icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent/20 mb-5"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-sm text-secondary leading-[1.8] mb-6 flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center text-xs font-bold">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-secondary">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
