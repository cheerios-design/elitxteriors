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
    details: "info@elitexteriorsva.com",
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
  "Handyman Services",
  "Lawn Care & Mulching",
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

    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      const body = new URLSearchParams();

      formData.forEach((value, key) => {
        body.append(key, value.toString());
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          propertyType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Contact
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
                  {" "}
                  Elite Exteriors
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your property? Contact Matt & Gaby&apos;s
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
                delay={index * 0.1}
              >
                <div className="text-center p-6 bg-sky-600 rounded-2xl shadow-lg hover:bg-sky-800 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    {info.title === "Phone" && (
                      <svg
                        className="w-8 h-8 text-sky-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                      </svg>
                    )}
                    {info.title === "Email" && (
                      <svg
                        className="w-8 h-8 text-sky-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                      </svg>
                    )}
                    {info.title === "Service Area" && (
                      <svg
                        className="w-8 h-8 text-sky-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                      </svg>
                    )}
                    {info.title === "Business Hours" && (
                      <svg
                        className="w-8 h-8 text-sky-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-sky-200 mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-sky-100">{info.description}</p>
                </div>
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
            <AnimatedSection animation="slideRight" delay={0.1}>
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

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      Sorry, there was an error submitting your message. Please
                      try again or call us directly.
                    </p>
                  </div>
                )}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6 text-sky-600"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input name="bot-field" style={{ display: "none" }} />

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
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <div className="space-y-8">
                <Card className="p-8 bg-primary-600 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Why Choose Elite Exteriors?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-200 mr-2">✓</span>
                      Family-run business founded by Matt & Gaby
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
                      href="mailto:info@elitexteriorsva.com"
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
