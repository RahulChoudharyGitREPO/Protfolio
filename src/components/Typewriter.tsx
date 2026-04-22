"use client";

import { useState, useEffect } from "react";

const ROLES = [
  "Backend Engineer",
  "React Native Developer",
  "Open Source Contributor",
  "NestJS Specialist",
  "Full Stack Developer",
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export default function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, displayed.length + 1);
          setDisplayed(next);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
          }
        } else {
          const next = current.slice(0, displayed.length - 1);
          setDisplayed(next);
          if (next === "") {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % ROLES.length);
            setTimeout(() => {}, PAUSE_AFTER_DELETE);
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-accent font-semibold">{displayed}</span>
      <span className="inline-block w-[2px] h-[1.1em] bg-accent animate-pulse align-middle" />
    </span>
  );
}
