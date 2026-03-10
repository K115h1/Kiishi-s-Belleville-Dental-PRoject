import React from "react";
import {
  Sparkles,
  Smile,
  ShieldCheck,
  Palette,
  Siren,
} from "lucide-react";
import { FaTooth } from "react-icons/fa6";
import { useScrollReveal } from "@/lib/useScrollReveal";

const services = [
  {
    icon: <Sparkles size={40} strokeWidth={1.5} />,
    title: "Teeth Whitening",
    desc: "Professional-grade whitening that delivers up to 8 shades brighter in a single session.",
    color: "from-yellow-50 to-amber-50",
    border: "border-amber-100",
    badge: "bg-amber-100 text-amber-700",
    tag: "Most Popular",
  },
  {
    icon: <FaTooth size={40} strokeWidth={1.5} />,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements anchored directly to the jawbone.",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    badge: "bg-sky-100 text-sky-700",
    tag: "Premium",
  },
  {
    icon: <Smile size={40} strokeWidth={1.5} />,
    title: "Invisalign & Braces",
    desc: "Discreet, comfortable orthodontic options for teens and adults.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
    tag: "Orthodontics",
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    title: "Preventive Care",
    desc: "Routine cleanings, X-rays, and check-ups to keep dental problems at bay.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    tag: "Recommended",
  },
  {
    icon: <Palette size={40} strokeWidth={1.5} />,
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, and smile makeovers tailored to your unique facial aesthetics.",
    color: "from-pink-50 to-rose-50",
    border: "border-pink-100",
    badge: "bg-pink-100 text-pink-700",
    tag: "Cosmetic",
  },
  {
    icon: <Siren size={40} strokeWidth={1.5} />,
    title: "Emergency Dental",
    desc: "Same-day appointments for toothaches, broken teeth, and dental trauma — 24/7.",
    color: "from-red-50 to-orange-50",
    border: "border-red-100",
    badge: "bg-red-100 text-red-700",
    tag: "24/7",
  },
];

const Services: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  }) as React.RefObject<HTMLDivElement>;

  return (
    <section
      className="py-28 bg-gradient-to-b from-sky-50 to-white"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal-item text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sky-600 font-semibold text-xs tracking-widest mb-6">
            WHAT WE OFFER
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-sky-950 tracking-tight mb-5">
            World-class dental services
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            From a simple cleaning to a complete smile transformation — our
            comprehensive treatment menu has you covered at every stage of life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal-item group relative bg-gradient-to-br ${s.color} border ${s.border} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-6 ${s.badge}`}
              >
                {s.tag}
              </div>
              <div className="text-slate-700 mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-sky-950 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center gap-1 text-sky-600 text-sm font-semibold group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
