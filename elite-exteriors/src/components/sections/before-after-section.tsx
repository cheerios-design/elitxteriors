"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const beforeAfterImages = [
  {
    before: "/assets/images/gallery/before1.jpg",
    after: "/assets/images/gallery/after1.jpg",
    title: "Pressure Washing",
    description: "Complete transformation of moss-stained wooden deck",
  },
  // Add more before/after pairs as needed
];

const galleryImages = [
  {
    src: "/assets/images/gallery/gallery1(1).JPG",
    title: "Professionals at Work",
  },
  {
    src: "/assets/images/gallery/gallery1(2).JPG",
    title: "Planning Before Work",
  },
  { src: "/assets/images/gallery/gallery1(3).JPG", title: "Exterior Cleaning" },
  { src: "/assets/images/gallery/gallery1(4).jpg", title: "Driveway Cleaning" },
  { src: "/assets/images/gallery/gallery1(5).jpg", title: "Exterior Cleaning" },
  { src: "/assets/images/gallery/gallery1(6).jpg", title: "Patio Restoration" },
  { src: "/assets/images/gallery/gallery1(7).jpg", title: "Exterior Cleaning" },
  { src: "/assets/images/gallery/gallery1(8).JPG", title: "Pressure Washing" },
];

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageTitle, setImageTitle] = useState<string>("");

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

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    e.preventDefault(); // Prevent scrolling while dragging
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const position = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setImageTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setImageTitle("");
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-neutral-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-sky-600/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            See the
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-sky-400 bg-clip-text text-transparent">
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
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none touch-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onClick={handleClick}
                onTouchStart={() => setIsDragging(true)}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => setIsDragging(false)}
                onPointerMove={handlePointerMove}
                onPointerDown={() => setIsDragging(true)}
                onPointerUp={() => setIsDragging(false)}
                onPointerLeave={() => setIsDragging(false)}
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
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-32 lg:h-40 rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => openModal(image.src, image.title)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300" />

              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-3 w-full text-center">
                  {image.title}
                </p>
              </div>

              {/* View icon */}
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
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
            <Link
              href="/gallery"
              className="border border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div
              className="relative w-full h-full max-w-5xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={imageTitle}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Image title */}
            {imageTitle && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full">
                <p className="text-lg font-medium">{imageTitle}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
