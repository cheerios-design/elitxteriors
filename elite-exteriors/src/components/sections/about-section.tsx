"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    number: "A",
    label: "BBB Rating for our excellent service quality",
    isNumeric: false,
  },
  {
    number: 100,
    label: "Projects Completed with outstanding results",
    suffix: "+",
    isNumeric: true,
  },
  {
    number: 100,
    label: "Satisfaction Rate from our valued customers",
    suffix: "%",
    isNumeric: true,
  },
];

const values = [
  {
    icon: (
      <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
        </svg>
      </div>
    ),
    title: "Family Values",
    description:
      "As a family-run business, we treat every customer and their property with the care and respect we'd give our own family.",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      </div>
    ),
    title: "Local Expertise",
    description:
      "Deep knowledge of Virginia and Hampton Roads area properties, weather conditions, and specific cleaning needs.",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>
    ),
    title: "Quality Service",
    description:
      "Professional pressure washing, gutter cleaning, Christmas light installation, and lawn care & mulching services using proven techniques and equipment.",
  },
  {
    icon: (
      <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.284 22.158c.001.95.679 1.752 1.62 1.792 1.31.055 2.623.022 3.935.022.954 0 1.786-.865 1.76-1.954-.029-1.221.018-2.445.029-3.667l.045-4.988c.003-.305.046-.362.335-.44a4.242 4.242 0 0 1 2.013-.067c1.23.262 2.129 1.21 2.261 2.46.066.62.07 1.249.078 1.874.025 1.64.038 3.28.054 4.921.01 1.087.796 1.877 1.883 1.882 1.171.006 2.342.008 3.513.007 1.106-.002 1.895-.778 1.898-1.883.007-3.371.007-6.742.01-10.113 0-.052 0-.105-.005-.156-.03-.355-.169-.658-.483-.838a2.638 2.638 0 0 0-.695-.291 7.484 7.484 0 0 0-2.887-.123c-.743.113-1.476.293-2.213.442-.97.196-1.946.28-2.934.178-1.268-.129-2.37-.666-3.402-1.38a32.36 32.36 0 0 0-1.494-.984c-.62-.38-1.314-.505-2.03-.544-.77-.043-1.536-.063-2.293.111-.59.136-.899.479-.966 1.077a3.438 3.438 0 0 0-.021.379m7.337-6.184a3.675 3.675 0 1 0-7.35-.031 3.675 3.675 0 0 0 7.35.03zm8.335-1.81a3.673 3.673 0 0 0-3.69 3.652 3.672 3.672 0 0 0 3.67 3.697 3.678 3.678 0 0 0 3.68-3.665 3.677 3.677 0 0 0-3.66-3.685z" />
        </svg>
      </div>
    ),
    title: "Trusted Partner",
    description:
      "Building lasting relationships with our customers through reliable service, honest communication, and fair pricing.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const CountUpNumber = ({
    end,
    suffix = "",
    isNumeric = true,
  }: {
    end: number | string;
    suffix?: string;
    isNumeric?: boolean;
  }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!isNumeric) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate count up
            const duration = 2000; // 2 seconds
            const start = Date.now();
            const endValue =
              typeof end === "number" ? end : parseInt(end.toString());

            const animate = () => {
              const now = Date.now();
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(easeOutQuart * endValue);

              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(endValue);
              }
            };

            requestAnimationFrame(animate);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [end, isNumeric, hasAnimated]);

    return (
      <div
        ref={ref}
        className="heading-secondary text-5xl lg:text-7xl text-white mb-4 font-bold"
      >
        {isNumeric ? `${count}${suffix}` : end}
      </div>
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      // Values animation
      gsap.fromTo(
        ".value-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-sky-100 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
              Why Choose
              <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
                {" "}
                Elite Exteriors?
              </span>
            </h2>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              With years of experience in exterior cleaning and maintenance, we
              bring professional-grade equipment and expertise to every project.
              Our team is dedicated to transforming your property while
              protecting your investment.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              From residential homes to commercial properties, we take pride in
              delivering exceptional results that exceed expectations. Our
              eco-friendly approach ensures your property looks amazing while
              protecting the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button variant="primary" size="lg">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get Free Estimate
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/about-us.jpg"
                alt="Elite Exteriors team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats - Full Width with Blue Background */}
        <div className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="bg-primary-600 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div
                ref={statsRef}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item text-center">
                    <CountUpNumber
                      end={stat.number}
                      suffix={stat.suffix || ""}
                      isNumeric={stat.isNumeric}
                    />
                    <div className="text-white text-lg font-medium leading-relaxed mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values - Full Width with Blue Background */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div className="bg-primary-600 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div
                ref={valuesRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {values.map((value, index) => (
                  <div key={index} className="value-item text-center p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                        {index === 0 && (
                          <svg
                            className="w-8 h-8 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className="w-8 h-8 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className="w-8 h-8 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg
                            className="w-8 h-8 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.284 22.158c.001.95.679 1.752 1.62 1.792 1.31.055 2.623.022 3.935.022.954 0 1.786-.865 1.76-1.954-.029-1.221.018-2.445.029-3.667l.045-4.988c.003-.305.046-.362.335-.44a4.242 4.242 0 0 1 2.013-.067c1.23.262 2.129 1.21 2.261 2.46.066.62.07 1.249.078 1.874.025 1.64.038 3.28.054 4.921.01 1.087.796 1.877 1.883 1.882 1.171.006 2.342.008 3.513.007 1.106-.002 1.895-.778 1.898-1.883.007-3.371.007-6.742.01-10.113 0-.052 0-.105-.005-.156-.03-.355-.169-.658-.483-.838a2.638 2.638 0 0 0-.695-.291 7.484 7.484 0 0 0-2.887-.123c-.743.113-1.476.293-2.213.442-.97.196-1.946.28-2.934.178-1.268-.129-2.37-.666-3.402-1.38a32.36 32.36 0 0 0-1.494-.984c-.62-.38-1.314-.505-2.03-.544-.77-.043-1.536-.063-2.293.111-.59.136-.899.479-.966 1.077a3.438 3.438 0 0 0-.021.379m7.337-6.184a3.675 3.675 0 1 0-7.35-.031 3.675 3.675 0 0 0 7.35.03zm8.335-1.81a3.673 3.673 0 0 0-3.69 3.652 3.672 3.672 0 0 0 3.67 3.697 3.678 3.678 0 0 0 3.68-3.665 3.677 3.677 0 0 0-3.66-3.685z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h4 className="heading-secondary text-xl lg:text-2xl text-white mb-4 font-bold">
                      {value.title}
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
