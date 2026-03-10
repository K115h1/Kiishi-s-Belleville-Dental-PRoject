import { useEffect, useRef } from "react";
import herobg from "../../assets/content/img7.jpg";
import { Trophy, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 },
      );
      gsap.fromTo(
        ".hero-headline",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.25 },
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.45 },
      );
      gsap.fromTo(
        ".hero-btns",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.65 },
      );
      gsap.fromTo(
        ".hero-img",
        { opacity: 0, x: 60, scale: 0.97 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        },
      );
      gsap.fromTo(
        ".hero-review",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.9 },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="pt-20 min-h-screen bg-linear-to-br from-sky-50 via-white to-emerald-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div
            className="hero-badge inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-emerald-700"
            style={{ opacity: 0 }}
          >
            <Trophy size={16} strokeWidth={2} /> #1 Rated Dental Clinic in
            Belleville
          </div>
          <h1
            className="hero-headline text-6xl md:text-7xl font-bold tracking-tighter text-sky-950 leading-none"
            style={{ opacity: 0 }}
          >
            Your smile.
            <br />
            Our passion.
          </h1>
          <p
            className="hero-sub text-xl text-gray-600 max-w-md"
            style={{ opacity: 0 }}
          >
            State-of-the-art dental care with compassion. Advanced technology
            meets gentle treatment.
          </p>
          <div
            className="hero-btns flex flex-wrap gap-4"
            style={{ opacity: 0 }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-sky-200"
            >
              <Link to={"/contact"}>Book Your Appointment</Link>
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="px-8 py-4 border-2 border-sky-600 text-sky-700 hover:bg-sky-50 rounded-2xl font-semibold text-lg transition-all"
            >
              <Link to={"/products"}>Shop Products</Link>
            </button>
          </div>
        </div>
        <div className="hero-img relative" style={{ opacity: 0 }}>
          <img
            src={herobg}
            alt="Happy patient"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
          <div
            className="hero-review absolute -bottom-6 md:-left-6 right-2 bg-white p-6 rounded-3xl shadow-xl max-w-55"
            style={{ opacity: 0 }}
          >
            <div className="flex gap-1 text-amber-400 mb-3">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
            <p className="font-medium">"Best dental experience ever!"</p>
            <p className="text-sm text-gray-500 mt-1">- Sarah M., Belleville</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
