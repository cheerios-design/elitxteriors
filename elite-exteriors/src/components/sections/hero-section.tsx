"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { gsap } from "gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-primary-900/40 z-10" />

        {/* Show particles on mobile, video on desktop */}
        {isMobile ? (
          <ParticlesBackground />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/images/hero-poster.jpg"
          >
            <source src="/assets/videos/overview.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Content */}
      <div className="relative top-45 w-fit z-20 container rounded-2xl bg-sky-100/10 backdrop-blur-sm mx-auto py-2 px-2 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your
            <span className="block text-gradient bg-gradient-to-r from-primary-400 to-sky-400 bg-clip-text text-transparent">
              Exterior Spaces
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Professional pressure washing, gutter cleaning, and exterior
            maintenance services that bring new life to your property.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button variant="primary" size="xl" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="xl"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-sky-500/20 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-20 w-16 h-16 bg-primary-400/20 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
