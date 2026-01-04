import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import AnimatedSection from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const locations = {
  "virginia-beach": {
    name: "Virginia Beach",
    title: "Pressure Washing Virginia Beach VA | Elite Exteriors",
    description:
      "Professional pressure washing services in Virginia Beach, VA. Elite Exteriors provides residential and commercial exterior cleaning and gutter cleaning. Free estimates!",
    population: "459,470",
    zipCodes: [
      "23450",
      "23451",
      "23452",
      "23453",
      "23454",
      "23455",
      "23456",
      "23457",
      "23458",
      "23459",
      "23460",
      "23461",
      "23462",
      "23463",
      "23464",
      "23465",
    ],
    neighborhoods: [
      "Oceanfront",
      "Hilltop",
      "Red Mill",
      "Princess Anne",
      "Kempsville",
      "Lynnhaven",
      "Great Neck",
    ],
    keyServices: [
      "Residential Pressure Washing",
      "Commercial Building Cleaning",
      "Driveway Cleaning",
      "Deck & Patio Cleaning",
    ],
    localInfo:
      "Virginia Beach is the most populous city in Virginia and a major tourist destination. Elite Exteriors serves all Virginia Beach neighborhoods, from the Oceanfront district to suburban areas like Hilltop and Great Neck.",
  },
  chesapeake: {
    name: "Chesapeake",
    title: "Pressure Washing Chesapeake VA | Elite Exteriors",
    description:
      "Expert pressure washing services in Chesapeake, VA. Elite Exteriors offers house washing, gutter cleaning, and exterior maintenance for Chesapeake homes and businesses. Call today!",
    population: "249,422",
    zipCodes: ["23320", "23321", "23322", "23323", "23324", "23325"],
    neighborhoods: [
      "Great Bridge",
      "Western Branch",
      "Deep Creek",
      "South Norfolk",
      "Crestwood",
    ],
    keyServices: [
      "House Washing",
      "Gutter Cleaning",
      "Driveway Pressure Washing",
      "Commercial Services",
    ],
    localInfo:
      "Chesapeake is the second-largest city in Virginia by land area. Elite Exteriors is locally based in Chesapeake and provides comprehensive exterior cleaning services throughout the city's diverse neighborhoods.",
  },
  norfolk: {
    name: "Norfolk",
    title: "Pressure Washing Norfolk VA | Elite Exteriors",
    description:
      "Professional pressure washing and exterior cleaning in Norfolk, VA. Elite Exteriors serves Norfolk homes and businesses with reliable, quality cleaning services. Get your free quote!",
    population: "238,005",
    zipCodes: [
      "23503",
      "23504",
      "23505",
      "23507",
      "23508",
      "23509",
      "23510",
      "23511",
      "23513",
      "23517",
      "23518",
      "23519",
    ],
    neighborhoods: [
      "Ghent",
      "Colonial Place",
      "Ocean View",
      "Wards Corner",
      "Military Circle",
      "Downtown Norfolk",
    ],
    keyServices: [
      "Historic Home Cleaning",
      "Commercial Property Maintenance",
      "Apartment Complex Washing",
      "Sidewalk Cleaning",
    ],
    localInfo:
      "Norfolk is home to the world's largest naval base and Norfolk Botanical Garden. Elite Exteriors provides specialized cleaning services for Norfolk's mix of historic and modern properties.",
  },
  suffolk: {
    name: "Suffolk",
    title: "Pressure Washing Suffolk VA | Elite Exteriors",
    description:
      "Reliable pressure washing services in Suffolk, VA. Elite Exteriors offers professional exterior cleaning and gutter maintenance for Suffolk properties. Free estimates!",
    population: "94,324",
    zipCodes: ["23434", "23435", "23436", "23437", "23438", "23439"],
    neighborhoods: [
      "Downtown Suffolk",
      "Harbour View",
      "Kings Fork",
      "Nansemond",
      "Whaleyville",
    ],
    keyServices: [
      "Rural Property Cleaning",
      "Farm Building Washing",
      "Residential Services",
      "Commercial Cleaning",
    ],
    localInfo:
      "Suffolk is Virginia's largest city by land area, known for its peanut farming heritage. Elite Exteriors serves Suffolk's mix of rural and suburban properties with tailored cleaning solutions.",
  },
  "newport-news": {
    name: "Newport News",
    title: "Pressure Washing Newport News VA | Elite Exteriors",
    description:
      "Expert pressure washing in Newport News, VA. Elite Exteriors provides house washing, commercial cleaning, and exterior maintenance services throughout Newport News. Call now!",
    population: "186,247",
    zipCodes: [
      "23601",
      "23602",
      "23603",
      "23604",
      "23605",
      "23606",
      "23607",
      "23608",
    ],
    neighborhoods: [
      "City Center",
      "Denbigh",
      "East End",
      "North End",
      "Port Warwick",
      "Riverside",
    ],
    keyServices: [
      "Shipyard Area Cleaning",
      "Industrial Washing",
      "Residential Services",
      "Marina Cleaning",
    ],
    localInfo:
      "Newport News is home to one of the largest shipbuilding companies in the world. Elite Exteriors serves the city's industrial, residential, and waterfront areas with professional cleaning services.",
  },
  hampton: {
    name: "Hampton",
    title: "Pressure Washing Hampton VA | Elite Exteriors",
    description:
      "Professional pressure washing services in Hampton, VA. Elite Exteriors offers residential and commercial exterior cleaning, gutter services, and property maintenance in Hampton.",
    population: "137,148",
    zipCodes: ["23663", "23664", "23665", "23666", "23667", "23668", "23669"],
    neighborhoods: [
      "Downtown Hampton",
      "Buckroe Beach",
      "Fox Hill",
      "Phoebus",
      "Langley",
    ],
    keyServices: [
      "Beach Property Cleaning",
      "Historic District Services",
      "Military Housing Cleaning",
      "Waterfront Properties",
    ],
    localInfo:
      "Hampton is one of America's oldest continuously inhabited English-speaking settlements. Elite Exteriors provides specialized services for Hampton's historic properties and waterfront homes.",
  },
  williamsburg: {
    name: "Williamsburg",
    title: "Pressure Washing Williamsburg VA | Elite Exteriors",
    description:
      "Quality pressure washing in Williamsburg, VA. Elite Exteriors serves Williamsburg with professional exterior cleaning, historic property care, and maintenance services. Free quotes!",
    population: "15,425",
    zipCodes: ["23185", "23186", "23187", "23188"],
    neighborhoods: [
      "Colonial Williamsburg",
      "New Town",
      "Ford's Colony",
      "Governor's Land",
      "Kingsmill",
    ],
    keyServices: [
      "Historic Property Cleaning",
      "Colonial Style Homes",
      "Resort Property Maintenance",
      "Gentle Cleaning Methods",
    ],
    localInfo:
      "Williamsburg is famous for Colonial Williamsburg, the restored 18th-century capital. Elite Exteriors provides gentle, specialized cleaning services appropriate for historic and luxury properties.",
  },
};

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location: location,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const locationData = locations[location as keyof typeof locations];

  if (!locationData) {
    return {
      title: "Page Not Found | Elite Exteriors",
    };
  }

  return {
    title: locationData.title,
    description: locationData.description,
    keywords: [
      `pressure washing ${locationData.name}`,
      `${locationData.name} pressure washing`,
      `exterior cleaning ${locationData.name}`,
      `house washing ${locationData.name}`,
      `gutter cleaning ${locationData.name}`,
      `${locationData.name} VA pressure washing`,
      "Hampton Roads pressure washing",
      "Virginia exterior cleaning",
    ],
    openGraph: {
      title: locationData.title,
      description: locationData.description,
      url: `https://www.elitexteriorsva.com/locations/${location}`,
      siteName: "Elite Exteriors",
      images: [
        {
          url: `https://www.elitexteriorsva.com/assets/images/${location}-pressure-washing.jpg`,
          width: 1200,
          height: 630,
          alt: `Pressure Washing Services in ${locationData.name}, VA`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const locationData = locations[location as keyof typeof locations];

  if (!locationData) {
    notFound();
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection animation="fadeUp">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-sky-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedSection animation="slideRight" delay={0.1}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                    Pressure Washing
                    <span className="text-gradient bg-gradient-to-r from-primary-600 to-sky-600 bg-clip-text text-transparent">
                      {" "}
                      {locationData.name}
                    </span>
                    <br />
                    Virginia
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="slideRight" delay={0.2}>
                  <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                    Professional pressure washing and exterior cleaning services
                    in {locationData.name}, VA. Elite Exteriors provides
                    reliable, high-quality cleaning solutions for homes and
                    businesses throughout {locationData.name} and the Hampton
                    Roads area.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="slideRight" delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg">
                      <a href="tel:+17577967240">Call (757) 796-7240</a>
                    </Button>
                    <Button variant="outline" size="lg">
                      <a href="/contact">Get Free Quote</a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              <div className="relative">
                <AnimatedSection animation="slideLeft" delay={0.2}>
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={`/assets/images/services/pressure-washing-service.jpg`}
                      alt={`Pressure washing services in ${locationData.name}, Virginia`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Location Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection animation="scale" delay={0.1}>
              <Card className="p-6 bg-primary-50 border-primary-200">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">
                  {locationData.population}
                </h3>
                <p className="text-neutral-600">Population Served</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={0.2}>
              <Card className="p-6 bg-sky-50 border-sky-200">
                <h3 className="text-2xl font-bold text-sky-600 mb-2">
                  {locationData.neighborhoods.length}+
                </h3>
                <p className="text-neutral-600">Neighborhoods</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={0.3}>
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  5 Years+
                </h3>
                <p className="text-neutral-600">Serving {locationData.name}</p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Our Services in {locationData.name}
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Comprehensive exterior cleaning solutions tailored for{" "}
                {locationData.name} properties
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationData.keyServices.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {service}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    Professional {service.toLowerCase()} services for{" "}
                    {locationData.name} properties
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Why Choose Elite Exteriors in {locationData.name}?
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  {locationData.localInfo}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Local family-owned business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Licensed and insured in Virginia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>
                      Free estimates for {locationData.name} residents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Eco-friendly cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft">
              <Card className="p-8 bg-primary-50 border-primary-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {locationData.name} Neighborhoods We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {locationData.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="text-neutral-700 text-sm">
                      • {neighborhood}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    ZIP Codes Served:
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {locationData.zipCodes.join(", ")}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Clean Your {locationData.name} Property?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Contact Elite Exteriors today for your free estimate. We&apos;re
              ready to make your
              {locationData.name} property look its best with our professional
              cleaning services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <a href="tel:+17577967240">Call Now: (757) 796-7240</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary-600"
              >
                <a href="/contact">Get Free Quote</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
