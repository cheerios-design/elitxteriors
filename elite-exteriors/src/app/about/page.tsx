import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us - Elite Exteriors",
  description:
    "Learn about Elite Exteriors - your trusted partner for professional exterior cleaning and maintenance services. Family-owned business with years of experience.",
};

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & Owner",
    image: "/assets/images/team/john.jpg", // Placeholder
    bio: "With over 10 years of experience in exterior cleaning, John founded Elite Exteriors to provide top-quality services to homeowners and businesses.",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager",
    image: "/assets/images/team/sarah.jpg", // Placeholder
    bio: "Sarah ensures every project runs smoothly and customers receive exceptional service from start to finish.",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "We use professional-grade equipment and proven techniques to deliver exceptional results every time.",
    icon: "⭐",
  },
  {
    title: "Integrity",
    description:
      "Honest pricing, transparent communication, and reliable service you can count on.",
    icon: "🤝",
  },
  {
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
    icon: "❤️",
  },
  {
    title: "Environmental Care",
    description:
      "Eco-friendly cleaning solutions that protect your property and the environment.",
    icon: "🌱",
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
                We&apos;re a family-owned business dedicated to transforming
                properties through professional exterior cleaning and
                maintenance services.
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
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p className="mb-6">
                Elite Exteriors was founded with a simple mission: to provide
                exceptional exterior cleaning services that transform and
                protect properties while delivering outstanding customer
                service.
              </p>
              <p className="mb-6">
                What started as a small local business has grown into a trusted
                name in exterior maintenance, serving hundreds of satisfied
                customers across the region. Our commitment to quality,
                reliability, and customer satisfaction has been the foundation
                of our success.
              </p>
              <p>
                Today, we continue to uphold these values while expanding our
                services and investing in the latest equipment and training to
                ensure we deliver the best possible results for every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
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
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The dedicated professionals behind Elite Exteriors
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
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Elite Exteriors for
            their exterior cleaning needs.
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
