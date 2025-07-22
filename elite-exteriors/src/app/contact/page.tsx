"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: "📞",
    title: "Phone",
    details: "(555) 123-4567",
    description: "Call us for immediate assistance",
  },
  {
    icon: "📧",
    title: "Email",
    details: "info@eliteexteriors.com",
    description: "Send us a detailed message",
  },
  {
    icon: "📍",
    title: "Service Area",
    details: "Greater Metropolitan Area",
    description: "We serve a 50-mile radius",
  },
  {
    icon: "🕒",
    title: "Business Hours",
    details: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    description: "Emergency services available",
  },
];

const services = [
  "Pressure Washing",
  "Gutter Cleaning",
  "Commercial Services",
  "Lawn Care",
  "Deck Cleaning",
  "Driveway Cleaning",
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Contact
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              Elite Exteriors
            </span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your property? Get in touch for a free estimate
            and let us show you the Elite Exteriors difference.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gradient-to-br from-neutral-50 to-primary-50/20 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-primary-600 mb-2">
                  {info.details}
                </p>
                <p className="text-sm text-neutral-600">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="p-8 bg-white shadow-xl">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Get Your Free Estimate
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you! We&apos;ve received your message and will contact
                    you within 24 hours.
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
                  * Required fields. We typically respond within 4 hours during
                  business hours.
                </p>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-primary-600 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
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
                    Emergency services available
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Service Areas
                </h3>
                <p className="text-neutral-600 mb-4">
                  We proudly serve the greater metropolitan area within a
                  50-mile radius. Service areas include:
                </p>
                <ul className="text-neutral-600 space-y-1">
                  <li>• Downtown & City Center</li>
                  <li>• Suburban Communities</li>
                  <li>• Commercial Districts</li>
                  <li>• Industrial Areas</li>
                  <li>• Surrounding Counties</li>
                </ul>
                <p className="text-sm text-neutral-500 mt-4">
                  Not sure if we service your area? Give us a call and
                  we&apos;ll let you know!
                </p>
              </Card>

              <Card className="p-8 bg-emerald-50 border-emerald-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Emergency Services
                </h3>
                <p className="text-neutral-600 mb-4">
                  Need immediate assistance? We offer emergency cleaning
                  services for urgent situations.
                </p>
                <Button variant="primary" className="w-full">
                  Call Emergency Line: (555) 123-4567
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
