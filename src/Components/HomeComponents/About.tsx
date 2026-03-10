import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-label",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-label", start: "top 88%" },
        },
      );
      gsap.fromTo(
        ".about-headline",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-headline", start: "top 88%" },
        },
      );
      gsap.fromTo(
        ".about-text p",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: { trigger: ".about-text", start: "top 85%" },
        },
      );
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-card", start: "top 85%" },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="py-24 bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div
              className="about-label text-sky-400 text-sm tracking-[3px] mb-4"
              style={{ opacity: 0 }}
            >
              SINCE 1998
            </div>
            <h2
              className="about-headline text-6xl font-bold leading-none"
              style={{ opacity: 0 }}
            >
              Caring for Belleville smiles for over 25 years
            </h2>
            <div className="about-text mt-12 space-y-8 text-lg text-sky-100">
              <p style={{ opacity: 0 }}>
                At Belleville Dental, we combine the latest technology with
                genuine compassion. Our team of 18 specialists is committed to
                making every visit comfortable and effective.
              </p>
              <p style={{ opacity: 0 }}>
                From routine cleanings to complex implant procedures, your oral
                health is our top priority.
              </p>
            </div>
          </div>

          <div
            className="about-card md:col-span-7 bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20"
            style={{ opacity: 0 }}
          >
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="font-mono uppercase text-xs text-sky-400 mb-2">
                  Address
                </div>
                <div>
                  456 Belleville Avenue
                  <br />
                  Belleville, NJ 07109
                </div>
              </div>
              <div>
                <div className="font-mono uppercase text-xs text-sky-400 mb-2">
                  Contact
                </div>
                <div>
                  (973) 555-0123
                  <br />
                  <a
                    href="mailto:info@bellevilledental.com"
                    className="hover:underline"
                  >
                    info@bellevilledental.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-white/20 text-sm flex flex-col md:flex-row gap-8">
              <div>
                <div className="font-medium">Monday – Friday</div>
                <div>8:00 AM – 7:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Saturday</div>
                <div>9:00 AM – 3:00 PM</div>
              </div>
              <div className="text-emerald-400">
                Emergency care available 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
