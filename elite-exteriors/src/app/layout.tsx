import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/layout/layout";
import SmoothScroll from "@/components/ui/smooth-scroll";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitexteriorsva.com"),
  title: {
    default:
      "Elite Exteriors - Professional Pressure Washing & Exterior Services in Hampton Roads, VA",
    template: "%s | Elite Exteriors",
  },
  description:
    "Elite Exteriors is a trusted family-run business providing top-notch pressure washing, gutter cleaning, handyman services, Christmas light installation, and lawn care services in Hampton Roads, Virginia. Founded by Matt & Gaby, serving Virginia Beach, Chesapeake, Norfolk, Suffolk, Newport News, and Williamsburg.",
  keywords: [
    "pressure washing",
    "gutter cleaning",
    "handyman services",
    "Christmas lights",
    "lawn care",
    "exterior cleaning",
    "Hampton Roads",
    "Virginia Beach",
    "Chesapeake",
    "Norfolk",
    "Suffolk",
    "Newport News",
    "Williamsburg",
    "family business",
    "property maintenance",
  ],
  authors: [{ name: "Elite Exteriors" }, { name: "Matt" }, { name: "Gaby" }],
  creator: "Elite Exteriors - Matt & Gaby",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitexteriorsva.com",
    siteName: "Elite Exteriors",
    title:
      "Elite Exteriors - Professional Pressure Washing Services in Hampton Roads",
    description:
      "Family-run business providing exceptional pressure washing, gutter cleaning, Christmas light installation, and lawn care services in Virginia. Founded by Matt & Gaby, serving Hampton Roads area.",
    images: [
      {
        url: "https://elitexteriorsva.com/images/elite-exteriors-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Exteriors - Professional Exterior Cleaning Hampton Roads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Exteriors - Professional Pressure Washing Services",
    description:
      "Trusted family-run pressure washing business in Hampton Roads, VA. Professional exterior cleaning services.",
    images: [
      "https://elitexteriorsva.com/images/elite-exteriors-twitter-image.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/assets/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/favicon/apple-icon-precomposed.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts */}
        <link rel="stylesheet" href="https://use.typekit.net/tok5xha.css" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Elite Exteriors",
              description:
                "Professional pressure washing, gutter cleaning, Christmas light installation, and lawn care services in Hampton Roads, Virginia",
              url: "https://elitexteriorsva.com",
              telephone: "+1-757-796-7240",
              email: "info@elitexteriorsva.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "109G Gainsborough Square #711",
                addressLocality: "Chesapeake",
                addressRegion: "VA",
                postalCode: "23320",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "36.7402068",
                longitude: "-76.2457907",
              },
              openingHours: "Mo-Sa 08:00-18:00",
              priceRange: "$$",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "36.7402068",
                  longitude: "-76.2457907",
                },
                geoRadius: "50000",
              },
              areaServed: [
                "Hampton Roads",
                "Virginia Beach",
                "Chesapeake",
                "Norfolk",
                "Suffolk",
                "Newport News",
                "Hampton",
                "Williamsburg",
              ],
              sameAs: [
                "https://www.facebook.com/people/Elite-Exteriors-Pressure-Washing-Services/61571075571156/",
                "https://www.linkedin.com/company/elite-exteriors-pressure-washing-services",
                "https://www.instagram.com/elit_xteriors/",
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Matt",
                  nationality: "Turkish",
                },
                {
                  "@type": "Person",
                  name: "Gaby",
                  nationality: "Zimbabwean",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Elite Exteriors Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pressure Washing",
                      description:
                        "Professional pressure washing for homes and businesses",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gutter Cleaning",
                      description:
                        "Complete gutter cleaning and maintenance services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Handyman Services",
                      description:
                        "Professional handyman services including general contracting, painting, electrical, and carpentry work",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Christmas Light Installation",
                      description:
                        "Professional Christmas light hanging and removal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lawn Care",
                      description:
                        "Professional lawn care and maintenance services",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* MS Application Config */}
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta
          name="msapplication-TileImage"
          content="/assets/favicon/ms-icon-144x144.png"
        />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml"
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-navbutton-color" content="#0ea5e9" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Elite Exteriors" />
        <meta name="application-name" content="Elite Exteriors" />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <SmoothScroll>
          <Layout>{children}</Layout>
        </SmoothScroll>
        <BackToTop />
      </body>
    </html>
  );
}
