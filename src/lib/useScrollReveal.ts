import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  /** Direction the element slides from. Default: "up" */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Distance in px to travel. Default: 48 */
  distance?: number;
  /** Duration in seconds. Default: 0.8 */
  duration?: number;
  /** Stagger for children (if selector given). Default: 0 */
  stagger?: number;
  /** CSS selector for child targets inside the ref. Animate children individually when set. */
  childSelector?: string;
  /** Easing. Default: "power3.out" */
  ease?: string;
  /** Delay in seconds. Default: 0 */
  delay?: number;
  /** ScrollTrigger start. Default: "top 88%" */
  start?: string;
}

/**
 * Attach this hook to a container ref.
 * The container (or its children if childSelector is given) will fade + slide in
 * when scrolled into view.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);

  const {
    from = "up",
    distance = 48,
    duration = 0.8,
    stagger = 0,
    childSelector,
    ease = "power3.out",
    delay = 0,
    start = "top 88%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = childSelector
      ? Array.from(el.querySelectorAll<HTMLElement>(childSelector))
      : el;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y: from === "up" ? distance : from === "down" ? -distance : 0,
      x: from === "left" ? distance : from === "right" ? -distance : 0,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      ease,
      delay,
      stagger: stagger > 0 ? stagger : undefined,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    };

    const tween = gsap.fromTo(targets, fromVars, toVars);

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === el)
        .forEach((t) => t.kill());
    };
  }, [from, distance, duration, stagger, childSelector, ease, delay, start]);

  return ref;
}
