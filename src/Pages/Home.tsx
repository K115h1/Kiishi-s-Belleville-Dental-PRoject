import React from "react";
import Hero from "@/Components/HomeComponents/Hero";
import About from "@/Components/HomeComponents/About";
import Mission from "@/Components/HomeComponents/Mission";
import Services from "@/Components/HomeComponents/Services";
import Stats from "@/Components/HomeComponents/Stats";
import Testimonials from "@/Components/HomeComponents/Testimonials";

// Navigation items
export const navItems = [
  { label: "Home", id: "home", path: "/" },
  {
    label: "Professional Education",
    id: "professional",
    path: "/professional-education",
  },
  { label: "Patient Education", id: "patient", path: "/patient-education" },
  { label: "Research", id: "research", path: "/research" },
  { label: "Products", id: "products", path: "/products" },
  { label: "Gallery", id: "gallery", path: "/gallery" },
  { label: "About Us", id: "about", path: "" },
  { label: "Contact Us", id: "contact", path: "/contact" },
];

// Main App
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <Hero />

      {/* STATS BAR */}
      <Stats />

      {/* MISSION */}
      <Mission />

      {/* SERVICES */}
      <Services />

      {/* ABOUT US */}
      <About />

      {/* TESTIMONIALS */}
      <Testimonials />

    </div>
  );
};

export default Home;
