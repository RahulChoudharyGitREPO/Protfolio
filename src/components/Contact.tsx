"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const contactLinks = [
  {
    label: "Email",
    value: "rahul@example.com",
    href: "mailto:rahul@example.com",
  },
  {
    label: "GitHub",
    value: "github.com/rahul",
    href: "https://github.com/rahul",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rahul",
    href: "https://linkedin.com/in/rahul",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Contact
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-black tracking-[-0.03em] leading-[0.95] mb-8">
            LET&apos;S BUILD
            <br />
            <span className="text-stroke">SOMETHING</span>
            <br />
            TOGETHER
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-secondary max-w-md mb-16 leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a
            conversation about tech.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <FadeIn key={link.label} delay={0.1 * i + 0.3}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group block border border-border p-8 hover:bg-foreground hover:text-white transition-colors duration-500"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary group-hover:text-white/50 transition-colors mb-4">
                  {link.label}
                </p>
                <p className="text-lg font-semibold tracking-tight group-hover:text-white transition-colors">
                  {link.value}
                </p>
                <div className="mt-6 flex justify-end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-secondary group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      d="M7 17L17 7M17 7H10M17 7v7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
