"use client";

import { useState, useEffect } from "react";

function getISTTime() {
  return new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// Working hours 9AM – 10PM IST → available
function isAvailable() {
  const now = new Date();
  const hour = parseInt(
    now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", hour12: false })
  );
  return hour >= 9 && hour < 22;
}

export default function AvailabilityStatus() {
  const [time, setTime] = useState(getISTTime());
  const [available, setAvailable] = useState(isAvailable());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getISTTime());
      setAvailable(isAvailable());
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-secondary border border-border px-3 py-1.5 rounded-full">
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            available ? "bg-green-400" : "bg-yellow-400"
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            available ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
      </span>
      <span>
        {available ? "Available" : "Away"} · IST {time}
      </span>
    </div>
  );
}
