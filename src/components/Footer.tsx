"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border text-white" style={{ backgroundColor: "#0F172A" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40 tracking-wide">
          &copy; {new Date().getFullYear()} Rahul Choudhary. All rights reserved.
        </p>
        <p className="text-xs text-white/40 tracking-wide">
          Crafted with Next.js, Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
