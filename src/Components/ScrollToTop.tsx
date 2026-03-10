import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls to the top of the page on every route change,
 * UNLESS the new location has a hash (e.g. /#about).
 * When a hash is present we let the browser / manual scroll handle it.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
