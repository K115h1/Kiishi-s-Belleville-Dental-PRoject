import { ResearchImages } from "@/images";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ResearchItem {
  id: number;
  title: string;
  summary: string;
  image: string;
}

const Research = () => {
  const researchItems: ResearchItem[] = [
    {
      id: 1,
      title: "AI in Early Caries Detection",
      summary:
        "New study shows 94% accuracy using deep learning on radiographs.",
      image: ResearchImages[0],
    },
    {
      id: 2,
      title: "Impact of Sugar Taxes on Oral Health",
      summary:
        "Countries with sugar taxes report 12% drop in childhood cavities.",
      image: ResearchImages[1],
    },
    {
      id: 3,
      title: "Regenerative Dentistry Breakthrough",
      summary: "Stem cell therapy restores tooth enamel in clinical trials.",
      image: ResearchImages[2],
    },
    {
      id: 4,
      title: "Tele-dentistry During Pandemics",
      summary: "Virtual consultations reduced emergency visits by 67%.",
      image: ResearchImages[3],
    },
    {
      id: 5,
      title: "3D Bioprinting Implants",
      summary: "Custom scaffolds promote 40% faster osseointegration.",
      image: ResearchImages[4],
    },
    {
      id: 6,
      title: "Microbiome Therapy",
      summary:
        "Probiotics effectively suppress cariogenic pathogens long-term.",
      image: ResearchImages[5],
    },
    {
      id: 7,
      title: "Nanotech Restoration",
      summary: "Biomimetic nanomaterials rebuild protective enamel naturally.",
      image: ResearchImages[6],
    },
    {
      id: 8,
      title: "VR in Dental Psychology",
      summary: "VR immersion reduces patient stress markers by over 50%.",
      image: ResearchImages[7],
    },
  ];

  const containerRef = useScrollReveal<HTMLElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  });

  return (
    <section
      ref={containerRef}
      id="research"
      className="relative py-30 sm:py-32 lg:py-40 bg-slate-50 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000 hidden md:block"></div>

      {/* Body */}
      <div className="relative w-full mx-auto px-6 lg:px-30 lg:px-8 z-10">
        {/* Header Section */}
        <div className="reveal-item flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-28 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-sky-600 font-bold tracking-[0.2em] text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
              SCIENCE &amp; INNOVATION
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-950 via-sky-800 to-indigo-900 leading-[1.1] tracking-tight">
              Pioneering the Future of Dental Care.
            </h2>
          </div>
          <div className="hidden lg:flex flex-col items-end max-w-sm text-right">
            <p className="text-lg text-slate-500 font-medium border-l-2 border-sky-300 pl-6 border-opacity-50">
              Discover the latest clinical breakthroughs and evidence-based
              methodologies advancing modern dentistry.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="">
          {/* Set 1 */}
          <section className="lg:mb-20 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
            {/* Featured Item */}
            <div className="reveal-item md:col-span-2 md:row-span-2 group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-end min-h-[450px]">
              <img
                src={researchItems[0].image}
                alt={researchItems[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02182b] via-[#02182b]/50 to-transparent"></div>

              <div className="relative p-8 md:p-12 z-10 w-full">
                <div className="mb-5 inline-block px-3 py-1 bg-sky-500 text-white rounded-md text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-sky-500/30">
                  Featured Study
                </div>
                <h3 className="font-bold text-3xl md:text-5xl text-white mb-5 leading-tight group-hover:text-sky-200 transition-colors duration-500">
                  {researchItems[0].title}
                </h3>
                <p className="text-slate-300 text-lg md:text-xl line-clamp-3 mb-8 max-w-xl font-medium">
                  {researchItems[0].summary}
                </p>
                <button className="flex items-center justify-center gap-3 bg-white text-sky-950 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 hover:shadow-xl transition-all duration-300 transform group-hover:translate-x-2">
                  Explore Findings <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="reveal-item md:col-span-2 md:row-span-1 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-100 flex flex-col sm:flex-row min-h-[300px]">
              <div className="w-full sm:w-2/5 h-64 sm:h-full relative overflow-hidden">
                <img
                  src={researchItems[1].image}
                  alt={researchItems[1].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sky-950/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center bg-white relative z-10">
                <h3 className="font-bold text-2xl md:text-3xl text-sky-950 mb-3 leading-tight group-hover:text-sky-700 transition-colors">
                  {researchItems[1].title}
                </h3>
                <p className="text-slate-600 text-base mb-6 flex-grow font-medium">
                  {researchItems[1].summary}
                </p>
                <button className="text-sky-600 font-bold uppercase tracking-wider text-sm inline-flex items-center gap-2 transition-all hover:text-sky-800 self-start group-hover:gap-4">
                  Read Publication <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Item 3*/}
            <div className="reveal-item md:col-span-1 md:row-span-1 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-100 min-h-[300px] flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={researchItems[2].image}
                  alt={researchItems[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80"></div>
              </div>
              <div className="px-6 pb-8 pt-2 flex flex-col flex-grow bg-white relative z-10 -mt-10">
                <span className="text-xs font-bold text-indigo-500 tracking-widest mb-2 uppercase">
                  Innovation
                </span>
                <h3 className="font-extrabold text-xl text-slate-800 mb-3 leading-snug">
                  {researchItems[2].title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 flex-grow">
                  {researchItems[2].summary}
                </p>
                <div className="w-10 h-1 bg-sky-200 mb-4 group-hover:w-full transition-all duration-500"></div>
                <button className="text-slate-800 font-bold text-sm inline-flex items-center gap-1 hover:text-sky-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Item 4 */}
            <div className="reveal-item md:col-span-1 md:row-span-1 group relative bg-gradient-to-br from-sky-900 to-indigo-950 rounded-[2rem] overflow-hidden shadow-xl min-h-[300px] flex flex-col hover:shadow-sky-900/40 transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="h-32 overflow-hidden relative opacity-40 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700">
                <img
                  src={researchItems[3].image}
                  alt={researchItems[3].title}
                  className="w-full h-full object-cover transform scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-900"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-8">
                <span className="inline-block w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-300 mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <h3 className="font-extrabold text-xl text-white mb-3 leading-snug">
                  {researchItems[3].title}
                </h3>
                <p className="text-sky-100/70 text-sm mb-6 flex-grow font-medium leading-relaxed">
                  {researchItems[3].summary}
                </p>
                <button className="w-full py-3 px-4 bg-white/10 hover:bg-white text-white hover:text-sky-950 backdrop-blur-md rounded-xl font-bold text-sm transition-all duration-300 group-hover:shadow-lg flex justify-between items-center">
                  <span>Read Paper</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </section>

          {/* Set 2 */}
          <section className="lg:mb-20 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
            {/* Item 5*/}
            <div className="reveal-item md:col-span-1 md:row-span-1 group relative bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] overflow-hidden shadow-xl min-h-[300px] flex flex-col hover:shadow-indigo-900/40 transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="h-32 overflow-hidden relative opacity-40 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700">
                <img
                  src={researchItems[4].image}
                  alt={researchItems[4].title}
                  className="w-full h-full object-cover transform scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-8">
                <span className="inline-block w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>
                <h3 className="font-extrabold text-xl text-white mb-3 leading-snug">
                  {researchItems[4].title}
                </h3>
                <p className="text-indigo-100/70 text-sm mb-6 flex-grow font-medium leading-relaxed">
                  {researchItems[4].summary}
                </p>
                <button className="w-full py-3 px-4 bg-white/10 hover:bg-white text-white hover:text-indigo-950 backdrop-blur-md rounded-xl font-bold text-sm transition-all duration-300 group-hover:shadow-lg flex justify-between items-center">
                  <span>Read Paper</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Item 6*/}
            <div className="reveal-item md:col-span-1 md:row-span-1 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-100 min-h-[300px] flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={researchItems[5].image}
                  alt={researchItems[5].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80"></div>
              </div>
              <div className="px-6 pb-8 pt-2 flex flex-col flex-grow bg-white relative z-10 -mt-10">
                <span className="text-xs font-bold text-sky-500 tracking-widest mb-2 uppercase">
                  Analysis
                </span>
                <h3 className="font-extrabold text-xl text-slate-800 mb-3 leading-snug">
                  {researchItems[5].title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 flex-grow">
                  {researchItems[5].summary}
                </p>
                <div className="w-10 h-1 bg-indigo-200 mb-4 group-hover:w-full transition-all duration-500"></div>
                <button className="text-slate-800 font-bold text-sm inline-flex items-center gap-1 hover:text-indigo-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Item 7 */}
            <div className="reveal-item md:col-span-2 md:row-span-1 group relative bg-white rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-100 flex flex-col sm:flex-row min-h-[300px]">
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center bg-white relative z-10 order-2 sm:order-1">
                <h3 className="font-bold text-2xl md:text-3xl text-sky-950 mb-3 leading-tight group-hover:text-indigo-700 transition-colors">
                  {researchItems[6].title}
                </h3>
                <p className="text-slate-600 text-base mb-6 flex-grow font-medium">
                  {researchItems[6].summary}
                </p>
                <button className="text-indigo-600 font-bold uppercase tracking-wider text-sm inline-flex items-center gap-2 transition-all hover:text-indigo-800 self-start group-hover:gap-4">
                  Read Publication <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
              <div className="w-full sm:w-2/5 h-64 sm:h-full relative overflow-hidden order-1 sm:order-2">
                <img
                  src={researchItems[6].image}
                  alt={researchItems[6].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-950/10 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </section>
          {/* set 3 */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto lg:mb-6">
            {/* Item 8*/}
            <div className="reveal-item md:col-span-2 md:row-span-2 group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col justify-end min-h-[450px]">
              <img
                src={researchItems[7].image}
                alt={researchItems[7].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010b14] via-[#010b14]/60 to-transparent"></div>

              <div className="relative p-8 md:p-12 z-10 w-full">
                <div className="mb-5 inline-block px-3 py-1 bg-indigo-500 text-white rounded-md text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-indigo-500/30">
                  Clinical Trial
                </div>
                <h3 className="font-bold text-3xl md:text-5xl text-white mb-5 leading-tight group-hover:text-indigo-200 transition-colors duration-500">
                  {researchItems[7].title}
                </h3>
                <p className="text-slate-300 text-lg md:text-xl line-clamp-3 mb-8 max-w-xl font-medium">
                  {researchItems[7].summary}
                </p>
                <button className="flex items-center justify-center gap-3 bg-white text-indigo-950 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 hover:shadow-xl transition-all duration-300 transform group-hover:translate-x-2">
                  Explore Findings <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Research;
