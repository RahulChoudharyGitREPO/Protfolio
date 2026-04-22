"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Each avatar: DiceBear URL, color, position, rotation, size, float params
const AVATARS = [
  {
    seed: "rahul-hero",
    style: "adventurer",
    bg: "#fef3c7",
    size: 76,
    top: "8vh",
    left: "4vw",
    rotate: -12,
    floatY: 18,
    duration: 4.1,
    delay: 0.8,
    scrollFactor: -0.08,
  },
  {
    seed: "coder-night",
    style: "fun-emoji",
    bg: "#ede9fe",
    size: 70,
    top: "6vh",
    right: "5vw",
    rotate: 9,
    floatY: 14,
    duration: 3.7,
    delay: 1.1,
    scrollFactor: -0.05,
  },
  {
    seed: "nestjs-guru",
    style: "micah",
    bg: "#d1fae5",
    size: 64,
    top: "30vh",
    left: "2vw",
    rotate: 6,
    floatY: 20,
    duration: 5.2,
    delay: 1.4,
    scrollFactor: -0.12,
  },
  {
    seed: "backend-beast",
    style: "lorelei",
    bg: "#fce7f3",
    size: 68,
    top: "28vh",
    right: "3vw",
    rotate: -8,
    floatY: 16,
    duration: 4.6,
    delay: 1.6,
    scrollFactor: -0.09,
  },
  {
    seed: "dsa-500",
    style: "avataaars",
    bg: "#e0f2fe",
    size: 62,
    top: "52vh",
    left: "3vw",
    rotate: 11,
    floatY: 22,
    duration: 4.9,
    delay: 0.9,
    scrollFactor: -0.06,
  },
  {
    seed: "react-native",
    style: "fun-emoji",
    bg: "#fef9c3",
    size: 72,
    top: "55vh",
    right: "4vw",
    rotate: -6,
    floatY: 16,
    duration: 4.3,
    delay: 1.3,
    scrollFactor: -0.1,
  },
  {
    seed: "open-source",
    style: "micah",
    bg: "#dcfce7",
    size: 66,
    top: "74vh",
    left: "5vw",
    rotate: -10,
    floatY: 18,
    duration: 5.5,
    delay: 1.0,
    scrollFactor: -0.07,
  },
  {
    seed: "mongodb-dev",
    style: "adventurer",
    bg: "#fee2e2",
    size: 60,
    top: "76vh",
    right: "6vw",
    rotate: 14,
    floatY: 12,
    duration: 3.9,
    delay: 1.5,
    scrollFactor: -0.04,
  },
  {
    seed: "fullstack-pro",
    style: "lorelei",
    bg: "#e0e7ff",
    size: 58,
    top: "90vh",
    left: "8vw",
    rotate: 7,
    floatY: 20,
    duration: 4.7,
    delay: 0.7,
    scrollFactor: -0.11,
  },
  {
    seed: "hire-me",
    style: "fun-emoji",
    bg: "#fdf4ff",
    size: 64,
    top: "92vh",
    right: "7vw",
    rotate: -9,
    floatY: 15,
    duration: 4.0,
    delay: 1.2,
    scrollFactor: -0.08,
  },
  {
    seed: "agile-sprint",
    style: "micah",
    bg: "#fff7ed",
    size: 56,
    top: "115vh",
    right: "3vw",
    rotate: 5,
    floatY: 18,
    duration: 4.4,
    delay: 0.6,
    scrollFactor: -0.06,
  },
  {
    seed: "git-commit",
    style: "adventurer",
    bg: "#f0fdf4",
    size: 60,
    top: "118vh",
    left: "2vw",
    rotate: -14,
    floatY: 14,
    duration: 5.0,
    delay: 0.4,
    scrollFactor: -0.09,
  },
];

function AvatarItem({
  avatar,
}: {
  avatar: (typeof AVATARS)[0];
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 3000], [0, 3000 * (avatar.scrollFactor ?? -0.08)]);

  const src = `https://api.dicebear.com/8.x/${avatar.style}/svg?seed=${avatar.seed}&radius=20`;
  const radius = avatar.size * 0.22;

  return (
    <motion.div
      className="fixed pointer-events-none select-none z-[5]"
      style={{
        top: avatar.top,
        left: avatar.left,
        right: avatar.right,
        y,
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: (avatar.rotate ?? 0) - 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: avatar.rotate ?? 0,
      }}
      transition={{
        opacity: { delay: avatar.delay, duration: 0.7, ease: "easeOut" },
        scale: { delay: avatar.delay, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
        rotate: { delay: avatar.delay, duration: 0.7, ease: "easeOut" },
      }}
    >
      {/* Float loop */}
      <motion.div
        animate={{ y: [0, -(avatar.floatY ?? 14), 0] }}
        transition={{
          delay: (avatar.delay ?? 0) + 0.7,
          duration: avatar.duration ?? 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* App-icon shell */}
        <div
          style={{
            width: avatar.size,
            height: avatar.size,
            borderRadius: radius,
            background: avatar.bg,
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.13), 0 3px 10px rgba(0,0,0,0.09)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            width={avatar.size}
            height={avatar.size}
            style={{ display: "block" }}
            loading="lazy"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PageAvatars() {
  return (
    <>
      {AVATARS.map((avatar) => (
        <AvatarItem key={avatar.seed} avatar={avatar} />
      ))}
    </>
  );
}
