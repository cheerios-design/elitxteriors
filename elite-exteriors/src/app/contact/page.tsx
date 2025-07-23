"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/ui/animated-section";

const contactInfo = [
  {
    icon: "📞",
    title: "Phone",
    details: "(757) 796-7240",
    description: "Call us for immediate assistance",
  },
  {
    icon: "📧",
    title: "Email",
    details: "info@elitxteriors.com",
    description: "Send us a detailed message",
  },
  {
    icon: "📍",
    title: "Service Area",
    details: "Hampton Roads, Virginia",
    description: "Virginia Beach, Chesapeake, Norfolk & more",
  },
  {
    icon: "🕒",
    title: "Business Hours",
    details: "Mon-Sat: 8:00 AM - 6:00 PM",
    description: "Closed Sundays",
  },
];

const services = [
  "Pressure Washing",
  "Gutter Cleaning",
  "Christmas Light Installation",
  "Lawn Care & Landscaping",
  "Deck & Patio Cleaning",
  "Driveway Cleaning",
  "Commercial Services",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        propertyType: "",
        message: "",
      });
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection animation="fadeUp">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-sky-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Contact
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
                  {" "}
                  Elite Exteriors
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your property? Contact Ahmet & Gaby&apos;s
                family-run business for a free estimate and experience the Elite
                Exteriors difference in Hampton Roads.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 0.2}
              >
                <Card className="p-6 text-center bg-gradient-to-br from-neutral-50 to-primary-50/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-primary-600 mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-neutral-600">{info.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <AnimatedSection animation="slideRight" delay={0.2}>
              <Card className="p-8 bg-white shadow-xl">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Get Your Free Estimate
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
                    <p className="text-sky-800">
                      Thank you! We&apos;ve received your message and will
                      contact you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project, property size, specific areas to be cleaned, and any special requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message & Get Free Estimate"}
                  </Button>

                  <p className="text-sm text-neutral-600 text-center">
                    * Required fields. We typically respond within 4 hours
                    during business hours.
                  </p>
                </form>
              </Card>
            </AnimatedSection>

            {/* Additional Info */}
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="space-y-8">
                <Card className="p-8 bg-primary-600 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Why Choose Elite Exteriors?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Family-run business founded by Ahmet & Gaby
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Free, no-obligation estimates
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Licensed & fully insured
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Professional-grade equipment
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Eco-friendly cleaning solutions
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      100% satisfaction guarantee
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Serving Hampton Roads since our founding
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-white shadow-lg">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Service Areas
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    We proudly serve the Hampton Roads area throughout Virginia.
                    Our service areas include:
                  </p>
                  <ul className="text-neutral-600 space-y-1">
                    <li>• Virginia Beach</li>
                    <li>• Chesapeake</li>
                    <li>• Norfolk</li>
                    <li>• Suffolk</li>
                    <li>• Newport News</li>
                    <li>• Hampton</li>
                    <li>• Williamsburg</li>
                  </ul>
                  <p className="text-sm text-neutral-500 mt-4">
                    Located at 109G Gainsborough Square #711, Chesapeake, VA
                    23320. Not sure if we service your area? Give us a call!
                  </p>
                </Card>

                <Card className="p-8 bg-sky-50 border-sky-200">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    Get Your Free Quote
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Ready to get started? Contact us today for your free,
                    no-obligation estimate and consultation.
                  </p>
                  <Button variant="primary" className="w-full mb-3">
                    <a href="tel:+17577967240" className="block w-full">
                      Call (757) 796-7240
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <a
                      href="mailto:info@elitxteriors.com"
                      className="block w-full"
                    >
                      Email Us
                    </a>
                  </Button>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
