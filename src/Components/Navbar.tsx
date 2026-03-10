import { useEffect, useState } from "react";
import { navItems } from "@/Pages/Home";
import { useNavigate } from "react-router";
import { FaTooth } from "react-icons/fa6";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStateClasses = `max-w-screen lg:px-10 py-4 ease-in-out transition-all duration-500 fixed w-full flex items-center justify-between z-5000 ${
    scrolled
      ? "backdrop-blur-lg bg-[#F5F5F5] text-slate-800"
      : "bg-transparent text-[#C4C5C6]"
  }`;

  /**
   * Handles nav-item clicks:
   * - "about" → navigate to Home (/), then after mount scroll to #about
   * - all others → navigate to their path; ScrollToTop handles scrolling to top
   */
  const handleNavClick = (item: (typeof navItems)[0]) => {
    setMobileMenuOpen(false);
    setActiveSection(item.id);

    if (item.id === "about") {
      navigate("/");
      // Give the Home page a moment to mount before scrolling
      setTimeout(() => {
        const el = document.getElementById("about");
        if (el) {
          const offsetPosition =
            el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 120);
    } else {
      navigate(item.path);
    }
  };

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("bellevilleVisitorCount");
    let count = stored ? parseInt(stored, 10) : 12456;
    count++;
    setVisitorCount(count);
    localStorage.setItem("bellevilleVisitorCount", count.toString());
  }, []);

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 shadow-md border-b border-sky-100" +
        navStateClasses
      }
    >
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-evenly relative">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white text-2xl">
            <FaTooth />
          </div>
          <div>
            <div
              className="text-2xl font-bold tracking-tight text-sky-900 hover:cursor-pointer mx-6"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Belleville Dental
            </div>
            <div className="text-xs text-sky-600 -mt-1">Est. 1998</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`transition-all duration-200 hover:text-sky-600 pb-1 border-b-2 ${
                activeSection === item.id
                  ? "border-sky-600 text-sky-600"
                  : "border-transparent hover:border-sky-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Visitor Count */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600">
          <div className="px-3 py-1 bg-sky-50 rounded-full flex items-center gap-1">
            👥{" "}
            <span className="font-mono">{visitorCount.toLocaleString()}</span>{" "}
            visitors
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-3xl text-sky-700"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-20 right-4 border-t py-6 px-6 shadow-xl">
          <div className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="text-left font-medium text-sky-800 hover:text-sky-600"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t text-sm text-gray-500">
              👥 {visitorCount.toLocaleString()} visitors today
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
