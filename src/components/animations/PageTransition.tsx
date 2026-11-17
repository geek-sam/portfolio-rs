import React, { useLayoutEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname } = useLocation();

  const previousPath = useRef(pathname);
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    // Ignore initial render
    if (previousPath.current === pathname) {
      return;
    }

    // Update previous route
    previousPath.current = pathname;

    // Scroll to top on page navigation
    window.scrollTo(0, 0);

    // Trigger circle reveal
    setAnimate(true);

    const timer = window.setTimeout(() => {
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div key={pathname} className={animate ? "page-circle-reveal" : ""}>
      {children}
    </div>
  );
};

export default PageTransition;
