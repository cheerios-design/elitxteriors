import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "About Us - Elite Exteriors - Professional Pressure Washing & Exterior Services in Hampton Roads, VA",
  description:
    "Elite Exteriors is a trusted family-run business providing top-notch pressure washing, gutter cleaning, Christmas light installation, and lawn care services in Hampton Roads, Virginia. Founded by Matt & Gaby, serving Virginia Beach, Chesapeake, Norfolk, Suffolk, Newport News, and Williamsburg.",
};

const teamMembers = [
  {
    name: "Matt",
    role: "Co-Founder & Owner",
    image: "/assets/images/team/matt.jpg", // Placeholder
    bio: "Co-founder of Elite Exteriors, Matt brings international perspective and dedication to quality service. Originally from Turkey, he's committed to building a trusted family business in Hampton Roads.",
  },
  {
    name: "Gaby",
    role: "Co-Founder & Owner",
    image: "/assets/images/team/gaby.jpg", // Placeholder
    bio: "Co-founder of Elite Exteriors, Gaby brings diverse experience and customer-focused approach to the business. Originally from Zimbabwe, she ensures every customer receives exceptional service.",
  },
];

const values = [
  {
    title: "Family Values",
    description:
      "As a family-run business, we treat every customer and their property with the care and respect we'd give our own family.",
    icon: (
      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Local Expertise",
    description:
      "Deep knowledge of Virginia and Hampton Roads area properties, weather conditions, and specific cleaning needs.",
    icon: (
      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Quality Service",
    description:
      "Professional pressure washing, gutter cleaning, Christmas light installation, and lawn care services using proven techniques and equipment.",
    icon: (
      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Trusted Partner",
    description:
      "Building lasting relationships with our customers through reliable service, honest communication, and fair pricing.",
    icon: (
      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-700"
          fill="currentColor"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.284 22.158c.001.95.679 1.752 1.62 1.792 1.31.055 2.623.022 3.935.022.954 0 1.786-.865 1.76-1.954-.029-1.221.018-2.445.029-3.667l.045-4.988c.003-.305.046-.362.335-.44a4.242 4.242 0 0 1 2.013-.067c1.23.262 2.129 1.21 2.261 2.46.066.62.07 1.249.078 1.874.025 1.64.038 3.28.054 4.921.01 1.087.796 1.877 1.883 1.882 1.171.006 2.342.008 3.513.007 1.106-.002 1.895-.778 1.898-1.883.007-3.371.007-6.742.01-10.113 0-.052 0-.105-.005-.156-.03-.355-.169-.658-.483-.838a2.638 2.638 0 0 0-.695-.291 7.484 7.484 0 0 0-2.887-.123c-.743.113-1.476.293-2.213.442-.97.196-1.946.28-2.934.178-1.268-.129-2.37-.666-3.402-1.38a32.36 32.36 0 0 0-1.494-.984c-.62-.38-1.314-.505-2.03-.544-.77-.043-1.536-.063-2.293.111-.59.136-.899.479-.966 1.077a3.438 3.438 0 0 0-.021.379m7.337-6.184a3.675 3.675 0 1 0-7.35-.031 3.675 3.675 0 0 0 7.35.03zm8.335-1.81a3.673 3.673 0 0 0-3.69 3.652 3.672 3.672 0 0 0 3.67 3.697 3.678 3.678 0 0 0 3.68-3.665 3.677 3.677 0 0 0-3.66-3.685z" />
        </svg>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                About
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
                  {" "}
                  Elite Exteriors
                </span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Elite Exteriors is a trusted family-run business founded by Matt
                & Gaby, dedicated to providing top-notch pressure washing,
                gutter cleaning, Christmas light installation, and lawn care
                services in Hampton Roads, Virginia. We proudly serve Virginia
                Beach, Chesapeake, Norfolk, Suffolk, Newport News, Hampton, and
                Williamsburg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Get Free Estimate
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/about-us.jpg"
                alt="Elite Exteriors team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <div className="text-xl text-neutral-600 mb-8 leading-relaxed">
              <p className="mb-6">
                Elite Exteriors is a trusted family-run business founded by Matt
                and Gaby, proudly serving Virginia and the Hampton Roads area.
                Founded by a diverse international couple - Matt from Turkey and
                Gaby from Zimbabwe - we bring a unique perspective and
                unwavering commitment to excellence in every service we provide.
              </p>
              <p className="mb-6">
                We specialize in providing top-notch pressure washing, gutter
                cleaning, Christmas light installation, and lawn care services
                with a personal touch that only a family business can provide.
                Our service area includes Virginia Beach, Chesapeake, Norfolk,
                Suffolk, Newport News, Hampton, and Williamsburg.
              </p>
              <p className="mb-6">
                What started as a small local family business has grown into a
                trusted name in exterior maintenance throughout the Hampton
                Roads region. Our commitment to quality workmanship, honest
                pricing, and treating every customer like family has been the
                foundation of our success in the Virginia community.
              </p>
              <p>
                As a family-run operation with international roots, we
                understand the importance of taking care of your property as if
                it were our own. We take pride in building lasting relationships
                with our customers and contributing to the beauty and value of
                properties throughout Hampton Roads, Virginia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-sky-100 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-sky-700 rounded-2xl shadow-lg hover:bg-sky-800 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sky-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder for now */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Meet Our Founders
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The international family team behind Elite Exteriors in Hampton
              Roads, Virginia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-neutral-50 to-primary-50/20 rounded-2xl"
              >
                <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-primary-600">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Hampton Roads Property?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join families throughout Virginia Beach, Chesapeake, Norfolk,
            Suffolk, Newport News, Hampton, and Williamsburg who trust Elite
            Exteriors for their pressure washing, gutter cleaning, Christmas
            light installation, and lawn care needs.
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
            <Link href="tel:+17577967240">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call (757) 796-7240
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
