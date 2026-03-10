import React from "react";
import {  Heart, Globe } from "lucide-react";
import { FaTooth } from "react-icons/fa6";
import { useScrollReveal } from "@/lib/useScrollReveal";

const pillars = [
  {
    icon: <FaTooth size={48} strokeWidth={1.5} />,
    title: "Clinical Excellence",
    description:
      "We stay at the forefront of dental science, continuously investing in advanced technology and ongoing education to deliver the highest standard of care.",
  },
  {
    icon: <Heart size={48} strokeWidth={1.5} />,
    title: "Patient-First Compassion",
    description:
      "Every patient deserves to feel safe, heard, and respected. We take the time to understand your needs and customize every treatment plan around you.",
  },
  {
    icon: <Globe size={48} strokeWidth={1.5} />,
    title: "Community Commitment",
    description:
      "Belleville is our home. We give back through free dental screenings, school programs, and partnering with local health initiatives year-round.",
  },
];

const Mission: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".reveal-item",
    stagger: 0.15,
  }) as React.RefObject<HTMLDivElement>;

  return (
    <section
      className="py-28 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-80" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-80" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal-item flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-sky-400" />
          <span className="text-sky-500 font-semibold tracking-widest text-xs uppercase">
            Our Mission
          </span>
        </div>

        {/* Headline */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <h2 className="reveal-item text-5xl md:text-6xl font-extrabold text-sky-950 leading-tight tracking-tight">
            Healthier smiles,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">
              brighter lives.
            </span>
          </h2>
          <p className="reveal-item text-lg text-gray-500 leading-relaxed md:pt-4">
            At Belleville Dental, our mission is simple: to provide exceptional,
            accessible dental care that improves the quality of life for every
            patient we serve — from their first visit to their last.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="reveal-item group relative bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 text-4xl font-black text-sky-100 select-none group-hover:text-sky-200 transition-colors">
                0{i + 1}
              </div>
              <div className="text-sky-600 mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-sky-950 mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="reveal-item mt-20 bg-sky-950 rounded-3xl px-10 py-12 text-white text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #38bdf8 0%, transparent 50%), radial-gradient(circle at 80% 50%, #34d399 0%, transparent 50%)",
            }}
          />
          <p className="relative text-2xl md:text-3xl font-light italic text-sky-100 max-w-3xl mx-auto leading-relaxed">
            "We don't just treat teeth — we build lasting relationships built on
            trust, respect, and a shared commitment to your wellbeing."
          </p>
          <p className="relative mt-6 text-sky-400 font-semibold tracking-widest text-xs uppercase">
            — Dr. Amara Belleville, Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
