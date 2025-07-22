"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "5+", label: "Years Experience" },
  { number: "1000+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: "⚡",
    title: "Quality Work",
    description:
      "We deliver exceptional results using professional-grade equipment and techniques.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured",
    description:
      "Licensed and insured for your peace of mind and property protection.",
  },
  {
    icon: "💚",
    title: "Eco-Friendly",
    description:
      "Environmentally safe cleaning solutions that protect your landscape.",
  },
  {
    icon: "📞",
    title: "Reliable Service",
    description:
      "On-time service with clear communication throughout the process.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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
      className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Why Choose
              <span className="text-gradient bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Elite Exteriors?
              </span>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              With years of experience in exterior cleaning and maintenance, we
              bring professional-grade equipment and expertise to every project.
              Our team is dedicated to transforming your property while
              protecting your investment.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
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

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-neutral-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">5.0</div>
                  <div className="text-sm text-neutral-600">
                    Customer Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-6 bg-white rounded-2xl shadow-lg border border-neutral-200"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            What sets us apart and drives our commitment to excellence
          </p>
        </div>

        <div
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="value-item text-center p-6 bg-white rounded-2xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                {value.title}
              </h4>
              <p className="text-neutral-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
