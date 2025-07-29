import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/animated-section";

export const metadata: Metadata = {
  title: "Services - Elite Exteriors",
  description:
    "Professional exterior cleaning services including pressure washing, gutter cleaning, commercial services, and lawn care. Quality results guaranteed.",
};

const services = [
  {
    title: "Pressure Washing",
    description:
      "Professional pressure washing services for driveways, sidewalks, decks, patios, and building exteriors.",
    image: "/assets/images/services/driveway-cleaning.jpg",
    features: [
      "Driveway & Sidewalk Cleaning",
      "Deck & Patio Restoration",
      "Building Exterior Washing",
      "Concrete Surface Cleaning",
      "Oil Stain Removal",
      "Graffiti Removal",
    ],
    benefits: [
      "Removes years of built-up dirt and grime",
      "Increases property curb appeal",
      "Prevents long-term damage",
      "Eco-friendly cleaning solutions",
    ],
  },
  {
    title: "Gutter Cleaning",
    description:
      "Complete gutter cleaning and maintenance services to protect your home's foundation and prevent water damage.",
    image: "/assets/images/services/gutter-cleaning.jpg",
    features: [
      "Gutter Cleaning & Debris Removal",
      "Downspout Cleaning",
      "Gutter Guard Installation",
      "Minor Gutter Repairs",
      "Gutter Inspection",
      "Preventive Maintenance",
    ],
    benefits: [
      "Prevents water damage to foundation",
      "Extends gutter system lifespan",
      "Improves water flow efficiency",
      "Reduces pest infestations",
    ],
  },
  {
    title: "Christmas Light Installation",
    description:
      "Professional Christmas light installation and removal services to make your holidays bright and stress-free.",
    image: "/assets/images/blog/christmas-lights-featured.jpg",
    features: [
      "Custom Light Design",
      "Professional Installation",
      "Seasonal Maintenance",
      "Safe Removal Service",
      "Storage Solutions",
      "Commercial & Residential",
    ],
    benefits: [
      "Stress-free holiday decorating",
      "Professional safety standards",
      "Custom design consultation",
      "Seasonal storage included",
    ],
  },
  {
    title: "Commercial Services",
    description:
      "Professional exterior cleaning services for commercial properties, retail spaces, and business facilities.",
    image: "/assets/images/services/commercial-pressure-washing.webp",
    features: [
      "Building Exterior Washing",
      "Parking Lot Cleaning",
      "Storefront Cleaning",
      "Loading Dock Cleaning",
      "Sidewalk & Walkway Cleaning",
      "Regular Maintenance Programs",
    ],
    benefits: [
      "Maintains professional appearance",
      "Creates positive first impressions",
      "Extends building material life",
      "Flexible scheduling options",
    ],
  },
  {
    title: "Lawn Care & Landscaping",
    description:
      "Complete lawn care and landscaping services to keep your outdoor spaces beautiful and well-maintained.",
    image: "/assets/images/services/lawncare.jpg",
    features: [
      "Regular Lawn Mowing",
      "Edging & Trimming",
      "Leaf Removal",
      "Seasonal Cleanup",
      "Basic Landscaping",
      "Mulching Services",
    ],
    benefits: [
      "Maintains healthy lawn growth",
      "Improves property aesthetics",
      "Seasonal maintenance included",
      "Reliable scheduled service",
    ],
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description:
      "We assess your property and provide a detailed, no-obligation estimate.",
  },
  {
    step: "2",
    title: "Customized Plan",
    description:
      "We create a tailored service plan that meets your specific needs and budget.",
  },
  {
    step: "3",
    title: "Professional Service",
    description:
      "Our trained team delivers exceptional results using professional equipment.",
  },
  {
    step: "4",
    title: "Quality Assurance",
    description:
      "We inspect our work and ensure you're completely satisfied with the results.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection animation="fadeUp">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-sky-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Our
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
                  {" "}
                  Professional Services
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive exterior cleaning and maintenance services
                designed to transform and protect your property investment.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.3}>
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Get Free Estimate
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Detail */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={0.1}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <AnimatedSection animation="fadeUp" delay={0.15}>
                      <h2 className="text-3xl lg:text-4xl font-bold text-sky-600 mb-6">
                        {service.title}
                      </h2>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeUp" delay={0.2}>
                      <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                    </AnimatedSection>

                    {/* Features */}
                    <AnimatedSection animation="fadeUp" delay={0.25}>
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                          What&apos;s Included:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors duration-300 cursor-default"
                              style={{
                                animationDelay: `${featureIndex * 0.1}s`,
                                animation: "fadeInUp 0.6s ease-out forwards",
                                opacity: 0,
                              }}
                            >
                              <svg
                                className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0"
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
                      </div>
                    </AnimatedSection>

                    {/* Benefits */}
                    <AnimatedSection animation="fadeUp" delay={0.3}>
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                          Key Benefits:
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-start text-neutral-600 hover:text-primary-600 transition-colors duration-300 cursor-default"
                              style={{
                                animationDelay: `${benefitIndex * 0.1}s`,
                                animation: "fadeInUp 0.6s ease-out forwards",
                                opacity: 0,
                              }}
                            >
                              <span className="text-primary-500 mr-2">•</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="scale" delay={0.35}>
                      <Link href="/contact">
                        <Button
                          variant="primary"
                          className="hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                          Get Quote for {service.title}
                        </Button>
                      </Link>
                    </AnimatedSection>
                  </div>

                  {/* Image */}
                  <AnimatedSection
                    animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                    delay={0.2}
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A simple, transparent process that ensures exceptional results
              every time
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.1}
              >
                <Card className="p-6 text-center bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="text-2xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="fadeUp">
        <section className="py-20 lg:py-32 bg-primary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Contact us today for a free, no-obligation estimate. We&apos;ll
                help you choose the right services for your property.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-neutral-100 hover:scale-105 transition-all duration-300"
                  >
                    Get Free Estimate
                  </Button>
                </Link>
                <Link href="tel:+17577967240">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-600 hover:scale-105 transition-all duration-300"
                  >
                    Call (757) 796-7240
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
