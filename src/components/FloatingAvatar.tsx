"use client";

import { motion } from "framer-motion";

interface FloatingAvatarProps {
  seed: string;
  style?: "adventurer" | "fun-emoji" | "lorelei" | "micah" | "avataaars";
  size?: number;
  bg?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay?: number;
  rotate?: number;
  floatY?: number;
  floatDuration?: number;
  className?: string;
}

export default function FloatingAvatar({
  seed,
  style = "adventurer",
  size = 64,
  bg = "#f0f4ff",
  top,
  bottom,
  left,
  right,
  delay = 0,
  rotate = -8,
  floatY = 12,
  floatDuration = 4,
  className = "",
}: FloatingAvatarProps) {
  const src = `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}&radius=20`;

  return (
    <motion.div
      className={`absolute pointer-events-none select-none z-10 ${className}`}
      style={{ top, bottom, left, right }}
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
        y: [0, -floatY, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.6, ease: "easeOut" },
        scale: { delay, duration: 0.6, ease: "easeOut" },
        rotate: { delay, duration: 0.6, ease: "easeOut" },
        y: {
          delay: delay + 0.6,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* App-icon wrapper */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.22,
          background: bg,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`avatar-${seed}`}
          width={size}
          height={size}
          style={{ display: "block" }}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
