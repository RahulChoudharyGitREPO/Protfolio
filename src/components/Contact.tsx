"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import MagneticButton from "./MagneticButton";

const contactLinks = [
  {
    label: "Email",
    value: "rahulrajwwe2@gmail.com",
    href: "mailto:rahulrajwwe2@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/RahulChoudharyGitREPO",
    href: "https://github.com/RahulChoudharyGitREPO",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rahul-choudhary",
    href: "https://www.linkedin.com/in/rahul-choudhary-0348b8296/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 border-t border-border relative overflow-hidden">
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
          <p className="text-lg text-secondary max-w-md mb-6 leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, or just a
            conversation about tech.
          </p>
        </FadeIn>

        {/* Resume download */}
        <FadeIn delay={0.25}>
          <MagneticButton strength={0.3}>
            <a
              href="/resume.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent transition-colors duration-300 mb-16"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </MagneticButton>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact form */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-bold tracking-tight mb-1">
                Send me a message
              </h3>
              <p className="text-sm text-secondary">
                I&apos;ll get back to you as soon as possible.
              </p>
            </FadeIn>
            <ContactForm />
          </div>

          {/* Right — Contact links */}
          <div className="space-y-4">
            <FadeIn delay={0.15}>
              <h3 className="text-xl font-bold tracking-tight mb-6">
                Or reach out directly
              </h3>
            </FadeIn>
            {contactLinks.map((link, i) => (
              <FadeIn key={link.label} delay={0.1 * i + 0.2}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group block border border-border p-6 hover:bg-foreground hover:text-white transition-colors duration-500"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary group-hover:text-white/50 transition-colors mb-3">
                    {link.label}
                  </p>
                  <p className="text-base font-semibold tracking-tight group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <svg
                      width="20"
                      height="20"
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
      </div>
    </section>
  );
}
