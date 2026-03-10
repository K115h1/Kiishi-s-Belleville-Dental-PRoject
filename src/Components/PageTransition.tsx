import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router";
import gsap from "gsap";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wraps page content with a GSAP fade-in on mount.
 * Place inside each page's top-level element, or wrap around <Routes> in App.
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fade in
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
    );
  }, [location.pathname]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default PageTransition;
