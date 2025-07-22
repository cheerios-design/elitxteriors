import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AboutSection } from "@/components/sections/about-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Elite Exteriors - Professional pressure washing, gutter cleaning, and exterior maintenance services that transform your property.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BeforeAfterSection />
      <TestimonialsSection />
    </>
  );
}
