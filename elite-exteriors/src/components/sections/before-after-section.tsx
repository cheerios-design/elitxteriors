"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const beforeAfterImages = [
  {
    before: "/assets/images/before1.jpg",
    after: "/assets/images/after1.jpg",
    title: "Driveway Pressure Washing",
    description: "Complete transformation of oil-stained concrete driveway",
  },
  // Add more before/after pairs as needed
];

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
        ".before-after-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".before-after-container",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-emerald-600/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See the
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              {" "}
              Transformation
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Witness the dramatic difference our professional cleaning services
            make. Move the slider to see the incredible before and after
            results.
          </p>
        </div>

        {/* Before/After Gallery */}
        <div className="before-after-container max-w-4xl mx-auto">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="before-after-item mb-12">
              {/* Image Comparison */}
              <div
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {/* After Image (Background) */}
                <Image
                  src={item.after}
                  alt={`${item.title} - After`}
                  fill
                  className="object-cover"
                />

                {/* Before Image (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={item.before}
                    alt={`${item.title} - Before`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-col-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Handle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-neutral-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  After
                </div>
              </div>

              {/* Description */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid for additional images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
          {[
            "/assets/images/gallery1(1).JPG",
            "/assets/images/gallery1(2).JPG",
            "/assets/images/gallery1(3).JPG",
            "/assets/images/gallery1(4).jpg",
            "/assets/images/gallery1(5).jpg",
            "/assets/images/gallery1(6).jpg",
            "/assets/images/gallery1(7).jpg",
            "/assets/images/gallery1(8).JPG",
          ].map((image, index) => (
            <div
              key={index}
              className="relative h-32 lg:h-40 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-300 mb-6">
            Ready to transform your property? Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Quote
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
