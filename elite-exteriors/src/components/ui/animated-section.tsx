"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    const getInitialState = () => {
      switch (animation) {
        case "fadeUp":
          return { opacity: 0, y: 50 };
        case "fadeIn":
          return { opacity: 0 };
        case "slideLeft":
          return { opacity: 0, x: -50 };
        case "slideRight":
          return { opacity: 0, x: 50 };
        case "scale":
          return { opacity: 0, scale: 0.8 };
        default:
          return { opacity: 0, y: 50 };
      }
    };

    const getFinalState = () => {
      switch (animation) {
        case "fadeUp":
          return { opacity: 1, y: 0 };
        case "fadeIn":
          return { opacity: 1 };
        case "slideLeft":
          return { opacity: 1, x: 0 };
        case "slideRight":
          return { opacity: 1, x: 0 };
        case "scale":
          return { opacity: 1, scale: 1 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    // Set initial state
    gsap.set(element, getInitialState());

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: triggerOnce
          ? "play none none none"
          : "play none none reverse",
        fastScrollEnd: true,
        preventOverlaps: true,
        refreshPriority: -1,
      },
    });

    tl.to(element, {
      ...getFinalState(),
      duration,
      delay,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
