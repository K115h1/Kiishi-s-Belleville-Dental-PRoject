import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Video,
  Microscope,
  Smile,
  Users,
  Scan,
} from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ProfessionalResource {
  id: number;
  title: string;
  type: string;
  tag: string;
  description: string;
  meta: string;
  icon: React.ReactElement;
  dark?: boolean;
  wide?: boolean;
  featured?: boolean;
}

const allResources: ProfessionalResource[] = [
  {
    id: 1,
    title: "Advanced Orthodontics Certification",
    type: "Course",
    tag: "CE Credits",
    description:
      "A rigorous 6-month hybrid program combining online lectures with clinical hands-on sessions led by board-certified orthodontists. Earn up to 40 CE credits upon completion.",
    meta: "40 CE Credits · 6 Months · Online + In-Person",
    icon: <BookOpen size={48} strokeWidth={1.5} />,
    featured: true,
  },
  {
    id: 2,
    title: "Clinical Guidelines PDF Library",
    type: "Document",
    tag: "Reference",
    description:
      "The complete, always up-to-date collection of ADA and AAP clinical guidelines covering all major procedures, materials, and patient management protocols.",
    meta: "Updated March 2026 · 120+ Documents",
    icon: <FileText size={48} strokeWidth={1.5} />,
    wide: true,
  },
  {
    id: 3,
    title: "Faculty Lecture Series",
    type: "Video Library",
    tag: "On-Demand",
    description:
      "Recorded webinars and live-streamed grand rounds from leading dental educators across Harvard, NYU, and the University of Michigan dental schools.",
    meta: "200+ Hours · New Uploads Weekly",
    icon: <Video size={48} strokeWidth={1.5} />,
    dark: true,
  },
  {
    id: 4,
    title: "Case Studies Database",
    type: "Resource",
    tag: "Clinical",
    description:
      "Explore 400+ real anonymous patient cases complete with radiographs, treatment plans, outcome data, and expert commentaries across every specialty.",
    meta: "400+ Cases · Searchable · Peer-Reviewed",
    icon: <Microscope size={48} strokeWidth={1.5} />,
    dark: true,
  },
  {
    id: 5,
    title: "Implantology Masterclass",
    type: "Course",
    tag: "Advanced",
    description:
      "Step-by-step surgical technique training with cadaver lab access. Covers immediate placement, bone grafting, sinus lifts, and full-arch rehabilitation.",
    meta: "28 CE Credits · Weekend Intensives",
    icon: <Smile size={48} strokeWidth={1.5} />,
    wide: true,
  },
  {
    id: 6,
    title: "Monthly Journal Club",
    type: "Community",
    tag: "Networking",
    description:
      "Join fellow clinicians every month to discuss and debate the most impactful recent publications in a moderated, peer-to-peer virtual setting.",
    meta: "Monthly · Free for Members",
    icon: <Users size={48} strokeWidth={1.5} />,
  },
  {
    id: 7,
    title: "Radiograph Interpretation Workshop",
    type: "Course",
    tag: "Diagnostic",
    description:
      "Sharpen your diagnostic accuracy with interactive CBCT and 2D radiograph interpretation exercises graded by oral radiologists.",
    meta: "12 CE Credits · Self-Paced",
    icon: <Scan size={48} strokeWidth={1.5} />,
  },
];

const categories = [
  "All",
  "Course",
  "Document",
  "Video Library",
  "Resource",
  "Community",
];

const typeStyles: Record<string, { pill: string; icon: string }> = {
  Course: { pill: "bg-sky-100 text-sky-700", icon: "bg-sky-100 text-sky-600" },
  Document: {
    pill: "bg-emerald-100 text-emerald-700",
    icon: "bg-emerald-100 text-emerald-600",
  },
  "Video Library": {
    pill: "bg-violet-100 text-violet-700",
    icon: "bg-violet-100 text-violet-600",
  },
  Resource: {
    pill: "bg-amber-100 text-amber-700",
    icon: "bg-amber-100 text-amber-600",
  },
  Community: {
    pill: "bg-rose-100 text-rose-700",
    icon: "bg-rose-100 text-rose-600",
  },
};

const ProfessionalEducation = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? allResources
      : allResources.filter((r) => r.type === active);

  const containerRef = useScrollReveal<HTMLElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  });

  return (
    <>
      <section
        ref={containerRef}
        id="professional"
        className="relative py-28 lg:py-36 bg-slate-50 overflow-hidden"
      >
        {/* Background Decor */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse hidden md:block" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ── Header ── */}
          <div className="reveal-item flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-sky-600 font-bold tracking-[0.2em] text-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                FOR PROFESSIONALS
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-950 via-sky-800 to-indigo-900 leading-[1.1] tracking-tight">
                Elevate Your Clinical Practice.
              </h2>
            </div>
            <div className="hidden lg:flex flex-col items-end max-w-sm text-right">
              <p className="text-lg text-slate-500 font-medium border-l-2 border-sky-300 pl-6">
                Curated courses, reference materials, and community resources
                designed to keep dental professionals at the forefront of their
                field.
              </p>
            </div>
          </div>

          {/* ── Category Filter ── */}
          <div className="reveal-item flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  active === cat
                    ? "bg-sky-950 text-white border-sky-950 shadow-lg shadow-sky-950/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((res) => {
              const styles = typeStyles[res.type] ?? {
                pill: "bg-slate-100 text-slate-600",
                icon: "bg-slate-100 text-slate-600",
              };

              /* Featured card — spans full width on lg */
              if (res.featured) {
                return (
                  <div
                    key={res.id}
                    className="reveal-item lg:col-span-3 group relative bg-sky-950 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[280px]"
                  >
                    {/* Ambient glow */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at 20% 50%, #38bdf8, transparent 60%), radial-gradient(circle at 80% 50%, #818cf8, transparent 60%)",
                      }}
                    />
                    <div className="relative z-10 flex flex-col justify-center p-10 md:p-14 md:w-2/3 gap-5">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-md bg-sky-500 text-white text-[10px] font-bold tracking-widest uppercase shadow shadow-sky-500/40">
                          Featured Program
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-sky-200 text-[10px] font-bold tracking-widest uppercase">
                          {res.tag}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight group-hover:text-sky-200 transition-colors duration-500">
                        {res.title}
                      </h3>
                      <p className="text-sky-100/70 text-base leading-relaxed max-w-xl">
                        {res.description}
                      </p>
                      <p className="text-sky-400 text-xs font-semibold tracking-widest uppercase">
                        {res.meta}
                      </p>
                      <div>
                        <button className="inline-flex items-center gap-3 bg-white text-sky-950 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 hover:shadow-xl transition-all duration-300 group-hover:translate-x-1 transform">
                          Enroll Now <span>→</span>
                        </button>
                      </div>
                    </div>
                    <div className="hidden md:flex md:w-1/3 items-center justify-center opacity-30 select-none text-sky-400">
                      {React.cloneElement(res.icon as React.ReactElement<any>, {
                        size: 140,
                      })}
                    </div>
                  </div>
                );
              }

              /* Dark card */
              if (res.dark) {
                return (
                  <div
                    key={res.id}
                    className="reveal-item group relative bg-gradient-to-br from-sky-900 to-indigo-950 rounded-[2rem] overflow-hidden shadow-xl min-h-[280px] flex flex-col p-8 hover:shadow-sky-900/40 transition-shadow duration-500"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-15 transition-opacity duration-700" />
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sky-300 mb-5 bg-white/10`}
                    >
                      {React.cloneElement(res.icon as React.ReactElement<any>, {
                        size: 24,
                      })}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-white/10 text-sky-300 text-[10px] font-bold tracking-widest uppercase">
                        {res.tag}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-xl text-white mb-3 leading-snug group-hover:text-sky-200 transition-colors duration-300">
                      {res.title}
                    </h3>
                    <p className="text-sky-100/60 text-sm leading-relaxed flex-grow">
                      {res.description}
                    </p>
                    <p className="text-sky-400/70 text-xs mt-4 mb-5 font-medium">
                      {res.meta}
                    </p>
                    <button className="w-full py-3 px-4 bg-white/10 hover:bg-white text-white hover:text-sky-950 backdrop-blur-md rounded-xl font-bold text-sm transition-all duration-300 flex justify-between items-center">
                      <span>Access Now</span>
                      <span>→</span>
                    </button>
                  </div>
                );
              }

              /* Wide card — spans 2 cols on md+ */
              if (res.wide) {
                return (
                  <div
                    key={res.id}
                    className="reveal-item md:col-span-2 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-100 flex flex-col sm:flex-row min-h-[240px] hover:-translate-y-1 transition-transform duration-300"
                  >
                    {/* Icon panel */}
                    <div className="sm:w-48 shrink-0 bg-gradient-to-br from-sky-50 to-indigo-50 flex items-center justify-center p-10 text-sky-600">
                      {res.icon}
                    </div>
                    <div className="flex flex-col justify-center p-8 gap-3 flex-grow">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${styles.pill}`}
                        >
                          {res.type}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {res.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-2xl text-sky-950 leading-tight group-hover:text-sky-700 transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {res.description}
                      </p>
                      <p className="text-slate-400 text-xs font-medium">
                        {res.meta}
                      </p>
                      <button className="self-start text-sky-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-sky-800">
                        Access Resource →
                      </button>
                    </div>
                  </div>
                );
              }

              /* Standard card */
              return (
                <div
                  key={res.id}
                  className="reveal-item group bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${styles.icon}`}
                  >
                    {React.cloneElement(res.icon as React.ReactElement<any>, {
                      size: 24,
                    })}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${styles.pill}`}
                    >
                      {res.type}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {res.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-sky-950 mb-2 leading-snug group-hover:text-sky-700 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {res.description}
                  </p>
                  <p className="text-slate-400 text-xs mt-4 mb-5 font-medium">
                    {res.meta}
                  </p>
                  <div className="w-8 h-0.5 bg-sky-200 mb-4 group-hover:w-full transition-all duration-500" />
                  <button className="text-sky-600 font-bold text-sm inline-flex items-center gap-1 hover:gap-2 hover:text-sky-800 transition-all">
                    Access Now →
                  </button>
                </div>
              );
            })}
          </div>

          {/* ── Bottom CTA Banner ── */}
          <div className="reveal-item mt-20 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-600 to-indigo-600 px-10 py-14 text-white text-center shadow-2xl">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at top left, white, transparent 60%), radial-gradient(ellipse at bottom right, white, transparent 60%)",
              }}
            />
            <p className="relative text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
              Ready to grow?
            </p>
            <h3 className="relative text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Join 1,200+ dental professionals{" "}
              <br className="hidden md:block" />
              already learning with us.
            </h3>
            <p className="relative text-sky-100/80 text-base max-w-xl mx-auto mb-8">
              Get unlimited access to all courses, documentation, and live
              events with a Belleville Professional Membership.
            </p>
            <button className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-xl font-bold text-base hover:bg-sky-50 hover:shadow-xl transition-all duration-300">
              Get Full Access →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalEducation;
