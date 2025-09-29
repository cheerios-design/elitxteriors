import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Elite Exteriors",
  description:
    "Elite Exteriors Cookie Policy - How we use cookies and tracking technologies on our website.",
  robots: "index, follow",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 mt-20 flex items-center min-h-[40vh]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Learn how we use cookies and tracking technologies to enhance your
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-8 md:p-12">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 mb-8 border border-primary-200">
            <p className="text-primary-800 text-lg font-semibold mb-2">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
            <p className="text-primary-700">
              This policy explains our use of cookies and similar technologies
              on our website.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-900 text-lg leading-relaxed mb-8">
              This Cookie Policy explains how Elite Exteriors{" "}
              {`("we," "us," or
            "our")`}{" "}
              uses cookies and similar tracking technologies on our website.
              This policy should be read alongside our{" "}
              <a
                href="/privacy-policy"
                className="text-primary-600 hover:text-primary-800 underline font-semibold"
              >
                Privacy Policy
              </a>
              .
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              What Are Cookies?
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              browsing experience by remembering your preferences and improving
              website functionality.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Types of Cookies We Use
            </h2>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
              Essential Cookies
            </h3>
            <p className="text-neutral-900 leading-relaxed mb-4">
              These cookies are necessary for our website to function properly.
              They enable basic features like page navigation, form submissions,
              and secure areas access. The website cannot function properly
              without these cookies.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Session management
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Security features
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Form functionality
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Basic website operations
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
              Performance and Analytics Cookies
            </h3>
            <p className="text-neutral-900 leading-relaxed mb-4">
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. This
              helps us improve our website&apos;s performance and user
              experience.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Website traffic analysis
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Page performance monitoring
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  User behavior insights
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Error tracking and debugging
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
              Functional Cookies
            </h3>
            <p className="text-neutral-900 leading-relaxed mb-4">
              These cookies allow our website to remember choices you make and
              provide enhanced, more personalized features.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Language preferences
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Region selection
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  User interface customizations
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Accessibility features
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
              Marketing and Advertising Cookies
            </h3>
            <p className="text-neutral-900 leading-relaxed mb-4">
              These cookies may be used to track visitors across websites to
              display relevant advertisements and measure the effectiveness of
              advertising campaigns.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Targeted advertising
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Social media integration
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Marketing campaign tracking
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Conversion measurement
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Third-Party Cookies
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-6">
              Our website may use third-party services that place their own
              cookies on your device. These may include:
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Google Analytics:</strong> For website analytics and
                  performance tracking
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Google Maps:</strong> For location services and
                  directions
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Social Media Platforms:</strong> For social sharing
                  and integration features
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Contact Forms:</strong> For form processing and spam
                  protection
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Managing Your Cookie Preferences
            </h2>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
              Browser Settings
            </h3>
            <p className="text-neutral-900 leading-relaxed mb-6">
              You can control and manage cookies in various ways. Most web
              browsers allow you to:
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  View what cookies are stored on your device
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Delete cookies individually or all at once
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Block cookies from specific websites
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Block all cookies from being set
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Set preferences for accepting cookies
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
              Browser-Specific Instructions
            </h3>
            <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Chrome:</strong> Settings → Privacy and security →
                  Cookies and other site data
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Firefox:</strong> Options → Privacy & Security →
                  Cookies and Site Data
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Safari:</strong> Preferences → Privacy → Manage
                  Website Data
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Edge:</strong> Settings → Cookies and site permissions
                  → Cookies and site data
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Impact of Disabling Cookies
            </h2>
            <div className="bg-red-50 rounded-xl p-6 mb-8 border border-red-200">
              <p className="text-neutral-900 leading-relaxed mb-4">
                While you can browse our website with cookies disabled, please
                note that some features and functionality may not work properly,
                including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  Contact form submissions
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  Quote request functionality
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  Personalized content
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  Website performance optimization
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Cookie Retention
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-6">
              Different cookies have different retention periods:
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Session cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Persistent cookies:</strong> Remain on your device for
                  a set period or until manually deleted
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Essential cookies:</strong> Typically expire after
                  your browsing session
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  <strong>Analytics cookies:</strong> Usually expire after 1-2
                  years
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Updates to This Cookie Policy
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, law, or our business practices. We will
              post any updates on this page with a revised &quot;Last
              Updated&quot; date.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Contact Us
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8 border border-neutral-200">
              <p className="text-neutral-900 leading-relaxed mb-4">
                If you have any questions about our Cookie Policy or how we use
                cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-neutral-900">
                  📧 Email:{" "}
                  <a
                    href="mailto:info@elitexteriorsva.com"
                    className="text-primary-600 hover:text-primary-800 underline font-semibold"
                  >
                    info@elitexteriorsva.com
                  </a>
                </p>
                <p className="text-neutral-900">
                  📞 Phone:{" "}
                  <a
                    href="tel:757-796-7240"
                    className="text-primary-600 hover:text-primary-800 underline font-semibold"
                  >
                    757-796-7240
                  </a>
                </p>
                <p className="text-neutral-900">
                  📍 Address: 109G Gainsborough Square #711, Chesapeake, VA
                  23320
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 mt-8 border border-primary-200">
              <p className="text-primary-800 text-lg font-semibold">
                By continuing to use our website, you acknowledge that you have
                read and understood this Cookie Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
