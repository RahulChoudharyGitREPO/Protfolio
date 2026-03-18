"use client";

import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Education
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight mb-16">
            Academic background
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-border p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-accent font-semibold text-base mt-1">
                  Amity University
                </p>
                <p className="text-sm text-secondary mt-1">
                  Noida, India
                </p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-secondary border border-border px-4 py-2">
                  Expected 06/2026
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-4">
                Key Focus Areas
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Operating Systems",
                  "Computer Networks",
                  "Software Engineering",
                  "Web Development",
                ].map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center gap-2 text-sm text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
