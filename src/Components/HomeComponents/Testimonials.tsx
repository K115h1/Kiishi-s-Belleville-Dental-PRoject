import React from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { Link } from "react-router";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Belleville, NJ",
    text: "I was terrified of the dentist my whole life. The team at Belleville Dental completely changed that. Gentle, patient, and so professional.",
    stars: 5,
    initials: "SM",
    color: "bg-sky-500",
  },
  {
    name: "James T.",
    location: "Newark, NJ",
    text: "Got my implants done here after years of putting it off. Couldn't be happier — it looks natural and the process was way easier than I expected.",
    stars: 5,
    initials: "JT",
    color: "bg-emerald-500",
  },
  {
    name: "Linda R.",
    location: "Bloomfield, NJ",
    text: "The Invisalign results are incredible. My teeth are perfectly straight and nobody even noticed I was wearing aligners during treatment!",
    stars: 5,
    initials: "LR",
    color: "bg-violet-500",
  },
  {
    name: "Marcus D.",
    location: "Belleville, NJ",
    text: "Came in for an emergency on a Sunday. They saw me within the hour and fixed the problem completely. 24/7 care is no joke — they actually mean it.",
    stars: 5,
    initials: "MD",
    color: "bg-amber-500",
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".testimonial-item",
    stagger: 0.1,
  }) as React.RefObject<HTMLDivElement>;

  return (
    <section
      className="py-28 bg-gradient-to-b from-white to-sky-50"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="testimonial-item text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-sky-600 font-semibold text-xs tracking-widest mb-6">
            PATIENT STORIES
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-sky-950 tracking-tight mb-5">
            Thousands of smiles, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">
              one clinic.
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            Don't just take our word for it — hear from the patients who trust
            us with their most important asset.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-item bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} strokeWidth={0} />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sky-950 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="testimonial-item mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Join 18,000+ patients who chose Belleville Dental
          </p>
          <a
            href=""
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-semibold text-base transition-all active:scale-95 shadow-lg shadow-sky-200"
          >
            <Link to={"/contact"}>Book Your Appointment →</Link>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
