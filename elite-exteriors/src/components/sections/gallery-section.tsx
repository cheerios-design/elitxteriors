"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages, galleryCategories } from "@/data/gallery-config";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageTitle, setImageTitle] = useState<string>("");
  const [filteredImages, setFilteredImages] = useState(galleryImages);

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
          },
        }
      );

      // Gallery items animation
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Filter images by category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setImageTitle(title);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setImageTitle("");
  };

  // Close modal on escape key and handle focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        closeModal();
      }
      
      // Arrow key navigation
      if (selectedImage) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          navigatePrevious();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          navigateNext();
        }
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      
      // Focus management: move focus to close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const navigatePrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage
    );
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    const prevImage = filteredImages[prevIndex];
    setSelectedImage(prevImage.src);
    setImageTitle(prevImage.title);
  };

  const navigateNext = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage
    );
    const nextIndex =
      currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    const nextImage = filteredImages[nextIndex];
    setSelectedImage(nextImage.src);
    setImageTitle(nextImage.title);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-neutral-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Our Work
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
              {" "}
              Gallery
            </span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our extensive portfolio of completed projects. From pressure
            washing to restoration, see the quality and transformation we bring
            to every property.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Gallery category filters">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-600 shadow-md"
                }`}
                title={category.description}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="gallery-grid">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="gallery-item break-inside-avoid mb-4"
              >
                <div
                  className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-lg overflow-hidden"
                  onClick={() => openModal(image.src, image.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(image.src, image.title);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${image.title} in full size`}
                >
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {galleryCategories.find(
                            (cat) => cat.id === image.category
                          )?.name || image.category}
                        </p>
                        {image.description && (
                          <p className="text-white/70 text-xs mt-1 line-clamp-2">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* View icon */}
                    <div className="absolute top-4 right-4 bg-black/40 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5 text-white"
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-neutral-300 mb-4">📷</div>
            <h3 className="text-2xl font-semibold text-neutral-700 mb-2">
              No images found
            </h3>
            <p className="text-neutral-500">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have experienced the Elite
            Exteriors difference. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg inline-block text-center"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close gallery (press Escape)"
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

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image (press Left arrow)"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image (press Right arrow)"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
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

            {/* Image title and info */}
            <div 
              id="modal-title"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full max-w-md text-center"
            >
              <p className="font-semibold">{imageTitle}</p>
              <p id="modal-description" className="text-sm text-white/80 mt-1" role="status" aria-live="polite">
                Image {filteredImages.findIndex((img) => img.src === selectedImage) + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
