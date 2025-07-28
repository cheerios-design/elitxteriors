"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-16 left-1/2 transform -translate-x-1/2 md:bottom-15 md:left-auto md:transform-none z-50 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-80 scale-100"
          : "translate-y-16 opacity-0 scale-75 pointer-events-none"
      }`}
      style={{ right: windowWidth >= 768 ? "220px" : "auto" }}
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        variant="primary"
        className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 bg-primary-600 hover:bg-primary-700"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Button>
    </div>
  );
}
