"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import MagneticButton from "./MagneticButton";
import FloatingAvatar from "./FloatingAvatar";

const contactLinks = [
  {
    label: "Email",
    value: "rahulrajwwe2@gmail.com",
    href: "mailto:rahulrajwwe2@gmail.com",
    highlight: false,
  },
  {
    label: "GitHub",
    value: "github.com/RahulChoudharyGitREPO",
    href: "https://github.com/RahulChoudharyGitREPO",
    highlight: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rahul-choudhary",
    href: "https://www.linkedin.com/in/rahul-choudhary-0348b8296/",
    highlight: false,
  },
  {
    label: "📞 Call Me",
    value: "+91 83406 15526",
    href: "tel:+918340615526",
    highlight: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-12 border-t border-border relative overflow-hidden">
      {/* Floating avatars */}
      <FloatingAvatar seed="lets-connect" style="fun-emoji" bg="#fce7f3" size={64} top="5%" left="4%" rotate={-9} delay={0.2} floatDuration={4.3} />
      <FloatingAvatar seed="hire-me-now" style="micah" bg="#dcfce7" size={56} bottom="10%" right="3%" rotate={7} delay={0.5} floatDuration={5.4} />
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
              href="/Rahul_Choudhary_Resume.pdf"
              download="Rahul_Choudhary_Resume.pdf"
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
                {link.highlight ? (
                  <motion.a
                    href={link.href}
                    data-cursor-hover
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center justify-between border-2 border-green-400 bg-green-50 p-6 hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700 group-hover:text-white/80 transition-colors">
                          {link.label}
                        </p>
                      </div>
                      <p className="text-lg font-black tracking-tight text-green-900 group-hover:text-white transition-colors">
                        {link.value}
                      </p>
                      <p className="text-xs text-green-600 group-hover:text-white/70 transition-colors mt-0.5">
                        Available for calls — tap to dial
                      </p>
                    </div>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 group-hover:text-white transition-colors shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </motion.a>
                ) : (
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
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-secondary group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <path d="M7 17L17 7M17 7H10M17 7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </motion.a>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
