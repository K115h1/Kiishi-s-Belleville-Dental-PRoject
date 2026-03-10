import React from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const stats = [
  {
    value: "25+",
    label: "Years of Care",
    sub: "Serving Belleville since 1998",
  },
  { value: "18K+", label: "Happy Patients", sub: "And counting every day" },
  { value: "18", label: "Specialists", sub: "Across all dental disciplines" },
  {
    value: "4.9",
    isRating: true,
    label: "Average Rating",
    sub: "Across 3,000+ reviews",
  },
];

const Stats: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".stat-item",
    stagger: 0.1,
  }) as React.RefObject<HTMLDivElement>;

  return (
    <section
      className="py-20 bg-sky-950 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-700/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="stat-item text-center group">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-emerald-300 mb-2 tabular-nums group-hover:scale-105 transition-transform duration-300 flex justify-center items-center">
                {s.value}
                {s.isRating && (
                  <Star
                    size={36}
                    fill="currentColor"
                    strokeWidth={0}
                    className="ml-2 text-amber-400"
                  />
                )}
              </div>
              <div className="text-white font-bold text-lg mb-1">{s.label}</div>
              <div className="text-sky-400 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
