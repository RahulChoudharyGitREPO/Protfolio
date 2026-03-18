"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.04,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-12"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full pt-20"
        style={{ opacity, scale }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-12 h-[1px] bg-foreground" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Main name */}
        <motion.div style={{ y: y1 }}>
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.04em] mb-2">
            <AnimatedText text="RAHUL" />
          </h1>
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.04em]">
            <AnimatedText text="CHOUDHARY" className="" />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-accent inline-block ml-2"
            >
              &copy;
            </motion.span>
          </h1>
        </motion.div>

        {/* Bottom info row */}
        <motion.div
          style={{ y: y2 }}
          className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <motion.div
            style={{ y: y3 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-md"
          >
            <p className="text-lg sm:text-xl text-secondary leading-relaxed">
              I build scalable backend systems
              <br />
              and modern mobile apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col gap-1 text-right"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Currently available for
            </span>
            <span className="text-sm font-medium text-foreground">
              Freelance & Full-Time Roles
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-foreground/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
