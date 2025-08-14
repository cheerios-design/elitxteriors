"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Pressure Washing",
    description:
      "Professional pressure washing for driveways, sidewalks, decks, and exterior surfaces.",
    image: "/assets/images/services/driveway-cleaning.jpg",
    href: "/services",
    features: ["Driveway Cleaning", "Deck & Patio", "Sidewalk Cleaning"],
  },
  {
    title: "Gutter Cleaning",
    description:
      "Complete gutter cleaning and maintenance to protect your home's foundation.",
    image: "/assets/images/services/gutter-cleaning.jpg",
    href: "/services",
    features: ["Gutter Cleaning", "Downspout Service", "Gutter Guards"],
  },
  {
    title: "Handyman Services",
    description:
      "Professional handyman services including general contracting, painting, electrical, and more.",
    image: "/assets/images/services/commercial-pressure-washing.webp",
    href: "/handyman",
    features: ["General Contracting", "Painting & Tiling", "Electrical Work"],
  },
  {
    title: "Lawn Care",
    description:
      "Complete lawn care and landscaping services to keep your property beautiful.",
    image: "/assets/images/services/lawncare.jpg",
    href: "/services",
    features: ["Mowing", "Landscaping", "Seasonal Cleanup"],
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-primary-50/20" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="heading-secondary text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            Our
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
              {" "}
              Professional Services
            </span>
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            From pressure washing to gutter cleaning, we provide comprehensive
            exterior maintenance services that transform and protect your
            property.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-neutral-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-secondary text-xl text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-neutral-700"
                    >
                      <svg
                        className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button variant="primary" size="lg" className="px-8">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
