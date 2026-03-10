import { useEffect, useState } from "react";
import { navItems } from "@/Pages/Home";

const FooterTicker: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // To prevent build errors
  console.log(activeSection);
  console.log(mobileMenuOpen);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Detecting location...");

  // Live clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      );
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(
            `Lat: ${latitude.toFixed(2)}°, Lon: ${longitude.toFixed(2)}°`,
          );
        },
        () => {
          setLocation("Location services unavailable (Lagos, NG)");
        },
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-sky-950 text-sky-200 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 text-white mb-6">
              <div className="w-9 h-9 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">
                🦷
              </div>
              <div className="text-3xl font-bold tracking-tighter">
                Belleville Dental
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Proudly serving the community since 1998.
            </p>
          </div>

          <div>
            <div className="font-medium text-white mb-6">Quick Links</div>
            <div className="space-y-3 text-sm">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-medium text-white mb-6">Sitemap</div>
            <ul className="text-sm space-y-3">
              <li>Home</li>
              <li>Services</li>
              <li>Insurance</li>
              <li>New Patients</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-6">Connect</div>
            <div className="flex gap-6 text-3xl">
              <span>📘</span>
              <span>📸</span>
              <span>𝕏</span>
            </div>
            <div className="mt-8 text-xs leading-loose">
              © 2026 Belleville Dental Clinic.
              <br />
              All rights reserved.
            </div>
          </div>
        </div>

        {/* Scrolling Ticker */}
        <div className="mt-16 border-t border-sky-900 pt-6 overflow-hidden bg-sky-950">
          <div className="flex animate-marquee whitespace-nowrap text-sm font-mono tracking-widest text-sky-400">
            {Array.from({ length: 3 }).map((_, idx) => (
              <span key={idx}>
                &nbsp;&nbsp;•&nbsp;&nbsp;{currentDate}&nbsp;&nbsp;|&nbsp;&nbsp;
                {currentTime}&nbsp;&nbsp;|&nbsp;&nbsp;{location}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTicker;
