import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              Professional Services
            </span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive exterior cleaning and maintenance services designed to
            transform and protect your property investment.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      What&apos;s Included:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-neutral-600"
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

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start text-neutral-600"
                        >
                          <span className="text-primary-500 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button variant="primary">
                      Get Quote for {service.title}
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A simple, transparent process that ensures exceptional results
              every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate. We&apos;ll help
            you choose the right services for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100"
              >
                Get Free Estimate
              </Button>
            </Link>
            <Link href="tel:+15551234567">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call (555) 123-4567
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
