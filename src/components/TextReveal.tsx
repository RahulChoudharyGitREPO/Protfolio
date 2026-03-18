"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextReveal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

  return (
    <section
      ref={ref}
      className="py-24 overflow-hidden border-y border-border"
    >
      <motion.div style={{ x: x1 }} className="mb-4">
        <p className="text-[clamp(3rem,8vw,8rem)] font-black tracking-[-0.04em] leading-none whitespace-nowrap text-foreground">
          BACKEND · MOBILE · DEVOPS · SYSTEMS
        </p>
      </motion.div>
      <motion.div style={{ x: x2 }}>
        <p className="text-[clamp(3rem,8vw,8rem)] font-black tracking-[-0.04em] leading-none whitespace-nowrap text-stroke">
          DESIGN · SCALE · SHIP · REPEAT
        </p>
      </motion.div>
    </section>
  );
}
