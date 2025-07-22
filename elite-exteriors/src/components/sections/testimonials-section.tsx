"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Homeowner",
    rating: 5,
    text: "Elite Exteriors transformed our driveway completely! The team was professional, punctual, and the results exceeded our expectations. Highly recommend!",
  },
  {
    name: "Mike Thompson",
    location: "Business Owner",
    rating: 5,
    text: "Outstanding service for our commercial property. They cleaned our building exterior and parking lot perfectly. Great communication throughout the process.",
  },
  {
    name: "Lisa Chen",
    location: "Property Manager",
    rating: 5,
    text: "Reliable, efficient, and excellent quality work. We've used Elite Exteriors for multiple properties and they never disappoint. Fair pricing too!",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          },
        }
      );

      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".testimonials-grid",
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
      className="py-20 lg:py-32 bg-gradient-to-br from-white to-primary-50/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            What Our
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-neutral-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Get your free estimate today and discover why hundreds of
              customers choose Elite Exteriors for their property maintenance
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Estimate
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
