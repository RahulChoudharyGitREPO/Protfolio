"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "OSS", label: "Contributor" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-12 h-[1px] bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              About
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — big statement */}
          <div>
            <FadeIn>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-8">
                A 19-year-old engineer
                <span className="text-stroke"> obsessed </span>
                with building systems that scale.
              </h2>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.2}>
              <div className="flex gap-12 mt-12 pt-8 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl sm:text-4xl font-black tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — description with parallax image placeholder */}
          <div>
            <motion.div
              style={{ y: imgY }}
              className="w-full aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 mb-8 overflow-hidden relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-black text-gray-300/50 tracking-tighter">
                  RC
                </span>
              </div>
            </motion.div>

            <FadeIn delay={0.1}>
              <p className="text-base text-secondary leading-[1.8] mb-5">
                Software Engineer Intern with 1+ years of hands-on experience
                building backend systems with NestJS. I focus on scalable
                architectures, real-time applications, and polished mobile
                experiences with React Native.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base text-secondary leading-[1.8]">
                Currently building a Train Booking System and a Real-Life RPG
                App. Open source contributor to{" "}
                <span className="text-foreground font-semibold">PocketPaw</span>.
                I believe in clean code and shipping software that works at
                scale.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
