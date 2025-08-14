import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for GSAP-heavy component
const AnimatedSection = dynamic(
  () => import("@/components/ui/animated-section"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-100 h-8 rounded mb-4" />
    ),
  }
);

export const metadata: Metadata = {
  title: "Handyman Services - The Handy Handyman | Elite Exteriors",
  description:
    "Professional handyman services including general contracting, painting, tiling, drywall, carpentry, electrical work, plumbing, and more. Licensed & insured.",
  keywords: [
    "handyman services Hampton Roads",
    "general contracting Virginia",
    "painting and tiling services",
    "drywall and carpentry",
    "electrical work Virginia",
    "plumbing services",
    "home repairs Chesapeake",
    "fixture installation",
    "project management",
    "yard work seasonal cleanup",
  ].join(", "),
  openGraph: {
    title: "Professional Handyman Services | The Handy Handyman",
    description:
      "Expert handyman services for all your home improvement needs in Hampton Roads. Licensed & insured.",
    type: "website",
  },
};

const residentialServices = [
  {
    title: "Painting & Tiling",
    description:
      "Professional interior and exterior painting, plus expert tile installation and repair.",
    icon: "🎨",
  },
  {
    title: "Drywall & Carpentry",
    description:
      "Expert drywall installation, repair, and finish carpentry work for any room.",
    icon: "🔨",
  },
  {
    title: "Fixture Install",
    description:
      "Professional installation of lighting fixtures, ceiling fans, and bathroom fixtures.",
    icon: "💡",
  },
  {
    title: "Framing",
    description:
      "Structural framing for additions, renovations, and new construction projects.",
    icon: "📐",
  },
  {
    title: "Electrical Work",
    description:
      "Licensed electrical services including outlets, switches, lighting, and panel upgrades.",
    icon: "⚡",
  },
  {
    title: "Site Supervision",
    description:
      "Professional oversight and coordination of construction and renovation projects.",
    icon: "👷",
  },
  {
    title: "Plumbing",
    description:
      "Plumbing repairs, installations, and maintenance for residential properties.",
    icon: "🔧",
  },
  {
    title: "Project Management",
    description:
      "Complete project coordination from planning to completion with timeline management.",
    icon: "📋",
  },
  {
    title: "Yard Work & Seasonal Cleanup",
    description:
      "Comprehensive outdoor maintenance including landscaping and seasonal property cleanup.",
    icon: "🌿",
  },
];

const benefits = [
  "Licensed & Insured",
  "Free Quotes",
  "Professional Quality",
  "Reliable Service",
  "Competitive Pricing",
  "Local Hampton Roads Expert",
];

export default function HandymanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                The Handy Handyman
                <span className="block text-blue-200">
                  Professional Home Services
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Expert handyman services for all your residential needs. From
                general contracting to electrical work, we&apos;ve got you
                covered with professional, licensed, and insured services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (757) 408-6186
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive handyman services to maintain, repair, and improve
              your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose The Handy Handyman?
              </h2>
              <p className="text-xl text-gray-600">
                Professional expertise you can trust for all your home
                improvement needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-xl text-blue-100">
                  Ready to start your project? Contact Anton Danobrega today!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-blue-200" />
                      <span className="text-lg">757-408-6186</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-blue-200" />
                      <span>info@elitxteriors.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Area</h3>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-blue-200 mt-1" />
                    <div>
                      <p className="text-lg font-medium">
                        109 Gainsborough Square G
                      </p>
                      <p className="text-lg font-medium">
                        #711, Chesapeake VA 23320
                      </p>
                      <p className="text-blue-100 mt-2">
                        Serving Hampton Roads Area
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now for Free Quote
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Integration with Elite Exteriors */}
        <AnimatedSection>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Part of Elite Exteriors Family
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Handy Handyman is proud to be part of the Elite Exteriors
                service family, offering comprehensive solutions for all your
                property maintenance needs.
              </p>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All Elite Exteriors Services
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
