import React, { useState } from "react";
import {
  Smile,
  Stethoscope,
  Sparkles,
  Baby,
  HeartPulse,
  Diamond,
  Heart,
  Siren,
} from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface PatientTopic {
  id: number;
  title: string;
  content: string;
  detail: string;
  icon: React.ReactElement;
  tag: string;
  category: string;
  featured?: boolean;
  dark?: boolean;
  wide?: boolean;
}

const topics: PatientTopic[] = [
  {
    id: 1,
    title: "Tooth Decay & How to Prevent It",
    content:
      "Brush twice daily with fluoride toothpaste, floss once a day, and limit sugary snacks and drinks between meals.",
    detail:
      "Tooth decay is the most common chronic disease, yet almost entirely preventable. Fluoride strengthens enamel, while daily flossing removes plaque from areas your brush can't reach. Reducing acidic and sugary foods dramatically cuts your risk.",
    icon: <Smile size={40} strokeWidth={1.5} />,
    tag: "Prevention",
    category: "Prevention",
    featured: true,
  },
  {
    id: 2,
    title: "Recognising Gum Disease",
    content:
      "Bleeding gums, persistent bad breath, or receding gum lines are early warning signs. Schedule a check-up as soon as possible.",
    detail:
      "Gum disease (periodontal disease) progresses silently. Early-stage gingivitis is fully reversible with professional cleaning and improved home care. Left untreated, it can lead to tooth loss and has been linked to heart disease and diabetes.",
    icon: <Stethoscope size={40} strokeWidth={1.5} />,
    tag: "Warning Signs",
    category: "Hygiene",
    dark: true,
  },
  {
    id: 3,
    title: "Proper Brushing Technique",
    content:
      "Hold your brush at a 45° angle to the gumline and use gentle circular motions for a full 2 minutes, twice a day.",
    detail:
      "Aggressive scrubbing damages enamel and gums. An electric toothbrush with a built-in timer is an excellent investment. Don't forget to gently brush your tongue — it harbours bacteria that cause bad breath.",
    icon: <Sparkles size={40} strokeWidth={1.5} />,
    tag: "Technique",
    category: "Hygiene",
    wide: true,
  },
  {
    id: 4,
    title: "Oral Health for Kids",
    content:
      "Start dental visits by age 1. Use a rice-sized smear of fluoride toothpaste for under-3s, pea-sized from ages 3–6.",
    detail:
      "Early childhood caries (baby bottle tooth decay) is a serious but preventable condition. Never put a child to bed with a bottle of milk or juice. Establishing positive dental habits early shapes a lifetime of good oral health.",
    icon: <Baby size={40} strokeWidth={1.5} />,
    tag: "Children",
    category: "Life Stages",
    dark: true,
  },
  {
    id: 5,
    title: "Dental Care During Pregnancy",
    content:
      "Hormonal changes increase gum sensitivity during pregnancy. Maintain regular check-ups and tell your dentist you're expecting.",
    detail:
      "Morning sickness can erode tooth enamel — rinse with water or a fluoride mouthwash rather than brushing immediately. Pregnancy gingivitis affects up to 70% of pregnant women and is easily managed with professional care.",
    icon: <HeartPulse size={40} strokeWidth={1.5} />,
    tag: "Pregnancy",
    category: "Life Stages",
  },
  {
    id: 6,
    title: "Understanding Teeth Whitening",
    content:
      "Professional whitening is safe and effective. Over-the-counter kits vary widely in quality — ask us before starting any treatment.",
    detail:
      "Whitening works best on natural enamel; it does not change the colour of crowns, veneers, or fillings. Temporary sensitivity is common and usually resolves within 48 hours. Maintaining results is as simple as limiting staining foods and beverages.",
    icon: <Diamond size={40} strokeWidth={1.5} />,
    tag: "Cosmetic",
    category: "Cosmetic",
    wide: true,
  },
  {
    id: 7,
    title: "Dental Anxiety — You're Not Alone",
    content:
      "Nearly 1 in 3 adults experience some level of dental anxiety. We offer sedation options and a gentle, patient-first approach.",
    detail:
      "Communicate your fears openly with your dentist. Techniques like deep breathing, listening to music, or nitrous oxide sedation can make all the difference. Avoiding the dentist because of anxiety typically leads to more complex — and more stressful — treatment down the line.",
    icon: <Heart size={40} strokeWidth={1.5} />,
    tag: "Wellbeing",
    category: "General",
  },
  {
    id: 8,
    title: "What to Do in a Dental Emergency",
    content:
      "Knocked-out tooth? Broken crown? Call us immediately. Time is critical — a displaced tooth can often be re-implanted within 60 minutes.",
    detail:
      "If a tooth is knocked out, keep it moist (in milk or between your cheek and gum) and call us right away. For a cracked tooth, rinse with warm water and apply a cold compress. Never use aspirin directly on gum tissue — it can cause burns.",
    icon: <Siren size={40} strokeWidth={1.5} />,
    tag: "Emergency",
    category: "General",
  },
];

const categories = [
  "All",
  "Prevention",
  "Hygiene",
  "Life Stages",
  "Cosmetic",
  "General",
];

const tagStyles: Record<string, string> = {
  Prevention: "bg-emerald-100 text-emerald-700",
  "Warning Signs": "bg-red-100 text-red-700",
  Technique: "bg-sky-100 text-sky-700",
  Children: "bg-violet-100 text-violet-700",
  Pregnancy: "bg-pink-100 text-pink-700",
  Cosmetic: "bg-amber-100 text-amber-700",
  Wellbeing: "bg-blue-100 text-blue-700",
  Emergency: "bg-rose-100 text-rose-700",
};

const PatientEducationPreview = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? topics
      : topics.filter((t) => t.category === activeCategory);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);
  const containerRef = useScrollReveal<HTMLElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  });

  return (
    <section
      ref={containerRef}
      id="patient"
      className="relative py-28 lg:py-36 bg-slate-50 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse hidden md:block" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-200/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="reveal-item flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-emerald-600 font-bold tracking-[0.2em] text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              FOR PATIENTS
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-950 via-sky-800 to-emerald-700 leading-[1.1] tracking-tight">
              Know Your Smile Inside Out.
            </h2>
          </div>
          <div className="hidden lg:flex flex-col items-end max-w-sm text-right">
            <p className="text-lg text-slate-500 font-medium border-l-2 border-emerald-300 pl-6">
              Practical, evidence-based guidance to help you take control of
              your oral health — at every stage of life.
            </p>
          </div>
        </div>

        {/* ── Category Filter ── */}
        <div className="reveal-item flex flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-sky-950 text-white border-sky-950 shadow-lg shadow-sky-950/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((topic) => {
            const pillStyle =
              tagStyles[topic.tag] ?? "bg-slate-100 text-slate-600";
            const isOpen = openId === topic.id;

            /* Featured card — full width */
            if (topic.featured) {
              return (
                <div
                  key={topic.id}
                  className="reveal-item lg:col-span-3 group relative bg-sky-950 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                >
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 15% 50%, #34d399, transparent 55%), radial-gradient(circle at 85% 50%, #38bdf8, transparent 55%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col justify-center p-10 md:p-14 md:w-2/3 gap-5">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase shadow shadow-emerald-500/40">
                        Start Here
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/10 text-emerald-200`}
                      >
                        {topic.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight group-hover:text-emerald-200 transition-colors duration-500">
                      {topic.title}
                    </h3>
                    <p className="text-sky-100/70 text-base leading-relaxed max-w-xl">
                      {topic.detail}
                    </p>
                    <button
                      onClick={() => toggle(topic.id)}
                      className="self-start inline-flex items-center gap-3 bg-white text-sky-950 px-7 py-3 rounded-xl font-bold hover:bg-emerald-50 hover:shadow-xl transition-all duration-300"
                    >
                      {isOpen ? "Show Less ↑" : "Read More ↓"}
                    </button>
                    {isOpen && (
                      <p className="text-emerald-200/80 text-sm leading-relaxed max-w-xl border-t border-white/10 pt-4 mt-1">
                        {topic.content}
                      </p>
                    )}
                  </div>
                  <div className="hidden md:flex md:w-1/3 items-center justify-center text-9xl text-emerald-400 opacity-20 select-none p-10">
                    {React.cloneElement(topic.icon as React.ReactElement<any>, {
                      size: 140,
                    })}
                  </div>
                </div>
              );
            }

            /* Dark card */
            if (topic.dark) {
              return (
                <div
                  key={topic.id}
                  className="reveal-item group relative bg-gradient-to-br from-sky-900 to-emerald-950 rounded-[2rem] overflow-hidden shadow-xl min-h-[280px] flex flex-col p-8 hover:shadow-emerald-900/40 transition-shadow duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-15 transition-opacity duration-700" />
                  <div className="mb-5 text-emerald-400">{topic.icon}</div>
                  <span
                    className={`self-start px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 text-[10px] font-bold tracking-widest uppercase mb-3`}
                  >
                    {topic.tag}
                  </span>
                  <h3 className="font-extrabold text-xl text-white mb-3 leading-snug group-hover:text-emerald-200 transition-colors duration-300">
                    {topic.title}
                  </h3>
                  <p className="text-sky-100/60 text-sm leading-relaxed flex-grow">
                    {topic.content}
                  </p>
                  <button
                    onClick={() => toggle(topic.id)}
                    className="mt-6 w-full py-3 px-4 bg-white/10 hover:bg-white text-white hover:text-sky-950 backdrop-blur-md rounded-xl font-bold text-sm transition-all duration-300 flex justify-between items-center"
                  >
                    <span>{isOpen ? "Show Less" : "Learn More"}</span>
                    <span
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "none",
                        display: "inline-block",
                        transition: "transform 0.3s",
                      }}
                    >
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-emerald-200/70 text-sm leading-relaxed border-t border-white/10 pt-4">
                      {topic.detail}
                    </p>
                  )}
                </div>
              );
            }

            /* Wide card — spans 2 cols */
            if (topic.wide) {
              return (
                <div
                  key={topic.id}
                  className="reveal-item md:col-span-2 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-100 flex flex-col sm:flex-row min-h-[220px] hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="sm:w-44 shrink-0 bg-gradient-to-br from-sky-50 to-emerald-50 flex items-center justify-center p-10 text-emerald-600">
                    {React.cloneElement(topic.icon as React.ReactElement<any>, {
                      size: 64,
                    })}
                  </div>
                  <div className="flex flex-col justify-center p-8 gap-3 flex-grow">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${pillStyle}`}
                      >
                        {topic.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {topic.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-2xl text-sky-950 leading-tight group-hover:text-emerald-700 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {topic.content}
                    </p>
                    <button
                      onClick={() => toggle(topic.id)}
                      className="self-start text-sky-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-emerald-700"
                    >
                      {isOpen ? "Show Less ↑" : "Read More →"}
                    </button>
                    {isOpen && (
                      <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-100 pt-4 mt-1">
                        {topic.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            /* Standard card */
            return (
              <div
                key={topic.id}
                className="reveal-item group bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="mb-5 text-emerald-600">{topic.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${pillStyle}`}
                  >
                    {topic.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {topic.category}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-sky-950 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {topic.content}
                </p>
                <button
                  onClick={() => toggle(topic.id)}
                  className="mt-5 self-start text-sky-600 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 hover:text-emerald-700 transition-all"
                >
                  {isOpen ? "Show Less ↑" : "Read More →"}
                </button>
                {isOpen && (
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {topic.detail}
                  </p>
                )}
                <div className="w-8 h-0.5 bg-emerald-200 mt-5 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* ── CTA Banner ── */}
        <div className="reveal-item mt-20 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-600 to-sky-600 px-10 py-14 text-white text-center shadow-2xl">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top left, white, transparent 60%), radial-gradient(ellipse at bottom right, white, transparent 60%)",
            }}
          />
          <p className="relative text-xs font-bold tracking-widest uppercase text-emerald-200 mb-3">
            Your health, simplified
          </p>
          <h3 className="relative text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Questions about your oral health? <br className="hidden md:block" />
            We're here to help.
          </h3>
          <p className="relative text-sky-100/80 text-base max-w-xl mx-auto mb-8">
            Book a consultation and our team will walk you through anything on
            this page in person — at no extra cost.
          </p>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold text-base hover:bg-emerald-50 hover:shadow-xl transition-all duration-300"
          >
            Book a Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PatientEducationPreview;
