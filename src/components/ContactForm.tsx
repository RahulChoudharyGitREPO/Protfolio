"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/rahulrajwwe2@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <FadeIn delay={0.2}>
      <form onSubmit={handleSubmit} className="max-w-xl mt-12">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/40"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-secondary/40"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-secondary/40"
              placeholder="Tell me about your project..."
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          data-cursor-hover
          className="mt-8 inline-flex items-center gap-2 bg-foreground text-white px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] hover:bg-accent transition-colors duration-300 disabled:opacity-50"
        >
          {status === "sending" && "Sending..."}
          {status === "sent" && "Message Sent!"}
          {status === "error" && "Failed — Try Again"}
          {status === "idle" && (
            <>
              Send Message
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.833 14.167L14.167 5.833M14.167 5.833H7.5M14.167 5.833v6.667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </motion.button>
      </form>
    </FadeIn>
  );
}
