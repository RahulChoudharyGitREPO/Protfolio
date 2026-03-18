"use client";

export default function Marquee() {
  const items = [
    "BACKEND SYSTEMS",
    "REACT NATIVE",
    "NESTJS",
    "SCALABLE APIS",
    "MONGODB",
    "REAL-TIME APPS",
    "OPEN SOURCE",
    "DOCKER",
  ];

  const row = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 px-4">
      <span className="text-[clamp(2rem,5vw,5rem)] font-black tracking-tight whitespace-nowrap">
        {item}
      </span>
      <span className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
    </span>
  ));

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee w-max">
        {row}
        {row}
      </div>
    </section>
  );
}
