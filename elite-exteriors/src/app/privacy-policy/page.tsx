import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Exteriors",
  description:
    "Elite Exteriors Privacy Policy - How we collect, use, and protect your personal information.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information.
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
              This policy is effective as of the date listed above and applies
              to all users of our website and services.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-900 text-lg leading-relaxed mb-8">
              At Elite Exteriors, we are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy outlines how we collect, use, and safeguard the
              information you provide to us through our website and services.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Information We Collect
            </h2>
            <p className="text-neutral-900 mb-6">
              We may collect the following types of information:
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Name
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Email address
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Phone number
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Address
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Service preferences
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              How We Use Your Information
            </h2>
            <p className="text-neutral-900 mb-6">
              We use the information we collect to:
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Provide and improve our pressure washing services
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Communicate with you about service requests
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Send updates or promotional offers (with your consent)
                </li>
                <li className="flex items-center text-neutral-900">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Enhance our website and customer experience
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Protection of Phone Numbers and Consent
            </h2>
            <div className="bg-green-50 rounded-xl p-6 mb-8 border border-green-200">
              <p className="text-neutral-900 leading-relaxed">
                We assure you that the phone numbers and consent you provide
                will never be shared with third-party marketers. This
                information is solely for internal use to deliver our services
                and communicate directly with you.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Data Security
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, or destruction.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Data Usage
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              We collect your phone number for service-related communication,
              such as quotes, appointment reminders, and updates.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Opt-Out
            </h2>
            <div className="bg-yellow-50 rounded-xl p-6 mb-8 border border-yellow-200">
              <p className="text-neutral-900 leading-relaxed">
                You can opt-out of receiving SMS updates at any time by replying
                <span className="bg-yellow-200 px-2 py-1 rounded font-semibold mx-1">
                  STOP
                </span>
                to any message.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-4">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience. You can adjust your browser
              settings to refuse cookies if you prefer.
            </p>
            <div className="bg-blue-50 rounded-xl p-4 mb-8 border border-blue-200">
              <p className="text-blue-800">
                📝 For more details, please see our{" "}
                <a
                  href="/cookie-policy"
                  className="text-primary-600 hover:text-primary-800 underline font-semibold"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Third-Party Links
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. Your phone number and personal data will not be sold or
              shared with third parties for marketing purposes.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Children&apos;s Privacy
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Changes to This Policy
            </h2>
            <p className="text-neutral-900 leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the new policy on
              our website. You can view this policy at any time by visiting this
              Privacy Policy page.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              Contact Us
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8 border border-neutral-200">
              <p className="text-neutral-900 leading-relaxed mb-4">
                If you have any questions or concerns about our Privacy Policy,
                please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-neutral-900">
                  📧 Email:{" "}
                  <a
                    href="mailto:info@elitxteriors.com"
                    className="text-primary-600 hover:text-primary-800 underline font-semibold"
                  >
                    info@elitxteriors.com
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
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 mt-8 border border-primary-200">
              <p className="text-primary-800 text-lg font-semibold">
                By using our website and services, you agree to the terms of
                this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
