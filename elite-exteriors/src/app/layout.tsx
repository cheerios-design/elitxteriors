import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Exteriors - Premium Exterior Cleaning Services",
    template: "%s | Elite Exteriors",
  },
  description:
    "Professional pressure washing, gutter cleaning, deck restoration, and exterior maintenance services. Transform your property with Elite Exteriors' expert care.",
  keywords: [
    "pressure washing",
    "gutter cleaning",
    "exterior cleaning",
    "deck cleaning",
    "driveway cleaning",
    "commercial cleaning",
    "residential cleaning",
    "property maintenance",
  ],
  authors: [{ name: "Elite Exteriors" }],
  creator: "Elite Exteriors",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eliteexteriors.com",
    siteName: "Elite Exteriors",
    title: "Elite Exteriors - Premium Exterior Cleaning Services",
    description:
      "Professional pressure washing, gutter cleaning, deck restoration, and exterior maintenance services.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Exteriors - Professional Exterior Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Exteriors - Premium Exterior Cleaning Services",
    description:
      "Professional pressure washing, gutter cleaning, deck restoration, and exterior maintenance services.",
    images: ["/assets/images/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
