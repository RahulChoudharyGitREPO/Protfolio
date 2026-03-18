"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "wave" | "diagonal" | "angle";
  flip?: boolean;
  color?: string;
}

export default function SectionDivider({
  variant = "wave",
  flip = false,
  color = "#fafafa",
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathOffset = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const paths = {
    wave: (
      <motion.path
        d="M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,0 L0,0 Z"
        fill={color}
        style={{ translateY: pathOffset }}
      />
    ),
    diagonal: (
      <polygon points="0,0 1440,0 1440,80 0,0" fill={color} />
    ),
    angle: (
      <polygon points="0,0 1440,0 1440,0 0,80" fill={color} />
    ),
  };

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: -1, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 lg:h-20 block"
      >
        {paths[variant]}
      </svg>
    </div>
  );
}
