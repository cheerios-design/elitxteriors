"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
  smoothness?: number;
}

export default function SmoothScroll({
  children,
  smoothness = 1,
}: SmoothScrollProps) {
  useEffect(() => {
    // Enhanced smooth scrolling with GSAP
    const ctx = gsap.context(() => {
      // Create a more responsive scroll experience
      ScrollTrigger.config({
        limitCallbacks: true,
        syncInterval: 150,
      });

      // Add momentum scrolling for better mobile experience
      const addMomentumScrolling = () => {
        if (typeof window !== "undefined") {
          document.body.style.setProperty(
            "-webkit-overflow-scrolling",
            "touch"
          );
          document.documentElement.style.setProperty(
            "-webkit-overflow-scrolling",
            "touch"
          );
        }
      };

      addMomentumScrolling();

      // Smooth scroll to anchor links
      const smoothScrollToAnchor = (e: Event) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute("href");

        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);

          if (element) {
            // Calculate target position with offset
            const targetPosition =
              element.getBoundingClientRect().top + window.pageYOffset - 80;

            // Use native smooth scroll with enhanced easing
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }
      };

      // Apply smooth scrolling to all anchor links
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach((link) => {
        link.addEventListener("click", smoothScrollToAnchor);
      });

      // Cleanup function
      return () => {
        anchorLinks.forEach((link) => {
          link.removeEventListener("click", smoothScrollToAnchor);
        });
      };
    });

    return () => ctx.revert();
  }, [smoothness]);

  useEffect(() => {
    // Refresh ScrollTrigger when page loads
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <>{children}</>;
}
