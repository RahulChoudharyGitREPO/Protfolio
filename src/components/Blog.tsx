"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const articles = [
  {
    title: "Building Scalable REST APIs with NestJS & MongoDB",
    excerpt:
      "Lessons learned from building production-grade APIs — modular architecture, DTOs, guards, interceptors, and how to structure a NestJS project that doesn't fall apart at scale.",
    date: "Feb 2026",
    readTime: "6 min read",
    tags: ["NestJS", "Backend", "Architecture"],
  },
  {
    title: "JWT Auth Done Right: Refresh Tokens, RBAC & Security Pitfalls",
    excerpt:
      "A deep dive into implementing secure authentication — access/refresh token rotation, role-based access control, and the common mistakes that leave APIs vulnerable.",
    date: "Jan 2026",
    readTime: "8 min read",
    tags: ["Security", "JWT", "Auth"],
  },
  {
    title: "From 0 to 500+ LeetCode Problems: My DSA Journey",
    excerpt:
      "How I approached Data Structures & Algorithms as a self-taught developer — the study plan, patterns I focused on, and how consistent problem-solving changed my thinking.",
    date: "Dec 2025",
    readTime: "5 min read",
    tags: ["DSA", "LeetCode", "Growth"],
  },
  {
    title: "Why I Switched from Express to NestJS (And Never Looked Back)",
    excerpt:
      "Express is great for small projects, but when your codebase grows, you need structure. Here's why NestJS's opinionated approach saved my sanity on production projects.",
    date: "Nov 2025",
    readTime: "4 min read",
    tags: ["NestJS", "Express", "Opinion"],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-foreground" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Blog & Articles
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight max-w-lg">
              Thoughts & learnings
            </h2>
            <p className="text-sm text-secondary max-w-sm">
              Writing about backend architecture, authentication, DSA, and
              lessons from building real-world software.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group border border-border p-6 sm:p-8 h-full flex flex-col hover:border-foreground/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-secondary">{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs text-secondary">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight mb-3 group-hover:text-accent transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="text-sm text-secondary leading-relaxed mb-5 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium border border-border text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
