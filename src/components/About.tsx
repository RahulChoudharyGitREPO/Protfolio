"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "144+", label: "Repositories" },
  { value: "500+", label: "DSA Problems" },
  { value: "OSS", label: "Contributor" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);

  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-16">
            <span className="w-12 h-px bg-foreground" />
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

            <FadeIn delay={0.1}>
              <p className="text-base text-secondary leading-[1.8] mb-5">
                Software Engineer with 1+ years of hands-on experience
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
                Solved 500+ DSA problems. I believe in clean code and shipping
                software that works at scale.
              </p>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 pt-8 border-t border-border">
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

          {/* Right — profile photo with parallax */}
          <div>
            <motion.div
              style={{ y: imgY, rotate: imgRotate }}
              className="relative w-full aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/rahul.jpg"
                alt="Rahul Choudhary"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay border frame */}
              <div className="absolute inset-4 border border-white/30 pointer-events-none" />
            </motion.div>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Rahul Choudhary</p>
                  <p className="text-xs text-secondary">Jaipur, India</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/RahulChoudharyGitREPO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-foreground transition-colors"
                    data-cursor-hover
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
