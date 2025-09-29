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
        <div className="container mx-auto px-4 py-20">
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
            <p className="mb-6">
              This Cookie Policy explains how Elite Exteriors{" "}
              {`("we," "us," or
            "our")`}{" "}
              uses cookies and similar tracking technologies on our website.
              This policy should be read alongside our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              What Are Cookies?
            </h2>
            <p className="mb-6">
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              browsing experience by remembering your preferences and improving
              website functionality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Essential Cookies
            </h3>
            <p className="mb-4">
              These cookies are necessary for our website to function properly.
              They enable basic features like page navigation, form submissions,
              and secure areas access. The website cannot function properly
              without these cookies.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Session management</li>
              <li>Security features</li>
              <li>Form functionality</li>
              <li>Basic website operations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Performance and Analytics Cookies
            </h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously. This
              helps us improve our website&apos;s performance and user
              experience.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Website traffic analysis</li>
              <li>Page performance monitoring</li>
              <li>User behavior insights</li>
              <li>Error tracking and debugging</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Functional Cookies
            </h3>
            <p className="mb-4">
              These cookies allow our website to remember choices you make and
              provide enhanced, more personalized features.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Language preferences</li>
              <li>Region selection</li>
              <li>User interface customizations</li>
              <li>Accessibility features</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Marketing and Advertising Cookies
            </h3>
            <p className="mb-4">
              These cookies may be used to track visitors across websites to
              display relevant advertisements and measure the effectiveness of
              advertising campaigns.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Targeted advertising</li>
              <li>Social media integration</li>
              <li>Marketing campaign tracking</li>
              <li>Conversion measurement</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Third-Party Cookies
            </h2>
            <p className="mb-6">
              Our website may use third-party services that place their own
              cookies on your device. These may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Google Analytics:</strong> For website analytics and
                performance tracking
              </li>
              <li>
                <strong>Google Maps:</strong> For location services and
                directions
              </li>
              <li>
                <strong>Social Media Platforms:</strong> For social sharing and
                integration features
              </li>
              <li>
                <strong>Contact Forms:</strong> For form processing and spam
                protection
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Managing Your Cookie Preferences
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Browser Settings
            </h3>
            <p className="mb-4">
              You can control and manage cookies in various ways. Most web
              browsers allow you to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies individually or all at once</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Set preferences for accepting cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
              Browser-Specific Instructions
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security →
                Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Options → Privacy & Security → Cookies
                and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website
                Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions →
                Cookies and site data
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Impact of Disabling Cookies
            </h2>
            <p className="mb-6">
              While you can browse our website with cookies disabled, please
              note that some features and functionality may not work properly,
              including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Contact form submissions</li>
              <li>Quote request functionality</li>
              <li>Personalized content</li>
              <li>Website performance optimization</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Cookie Retention
            </h2>
            <p className="mb-6">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Session cookies:</strong> Deleted when you close your
                browser
              </li>
              <li>
                <strong>Persistent cookies:</strong> Remain on your device for a
                set period or until manually deleted
              </li>
              <li>
                <strong>Essential cookies:</strong> Typically expire after your
                browsing session
              </li>
              <li>
                <strong>Analytics cookies:</strong> Usually expire after 1-2
                years
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Updates to This Cookie Policy
            </h2>
            <p className="mb-6">
              We may update this Cookie Policy from time to time to reflect
              changes in technology, law, or our business practices. We will
              post any updates on this page with a revised &quot;Last
              Updated&quot; date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about our Cookie Policy or how we use
              cookies, please contact us:
            </p>
            <ul className="list-none mb-6">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@elitxteriors.com"
                  className="text-blue-600 hover:underline"
                >
                  info@elitxteriors.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:757-796-7240"
                  className="text-blue-600 hover:underline"
                >
                  757-796-7240
                </a>
              </li>
              <li>
                <strong>Address:</strong> 109G Gainsborough Square #711,
                Chesapeake, VA 23320
              </li>
            </ul>

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
