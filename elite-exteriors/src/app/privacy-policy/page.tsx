import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elite Exteriors",
  description:
    "Elite Exteriors Privacy Policy - How we collect, use, and protect your personal information.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 1, 2025
          </p>

          <p className="mb-6">
            At Elite Exteriors, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard the information
            you provide to us through our website and services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Service preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide and improve our pressure washing services</li>
            <li>Communicate with you about service requests</li>
            <li>Send updates or promotional offers (with your consent)</li>
            <li>Enhance our website and customer experience</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Protection of Phone Numbers and Consent
          </h2>
          <p className="mb-6">
            We assure you that the phone numbers and consent you provide will
            never be shared with third-party marketers. This information is
            solely for internal use to deliver our services and communicate
            directly with you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Data Security
          </h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Data Usage
          </h2>
          <p className="mb-6">
            We collect your phone number for service-related communication, such
            as quotes, appointment reminders, and updates.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Opt-Out
          </h2>
          <p className="mb-6">
            You can opt-out of receiving SMS updates at any time by replying
            STOP to any message.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="mb-6">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. You can adjust your browser
            settings to refuse cookies if you prefer. For more details, please
            see our{" "}
            <a href="/cookie-policy" className="text-blue-600 hover:underline">
              Cookie Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Third-Party Links
          </h2>
          <p className="mb-6">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. Your phone number and personal data will not be sold or
            shared with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="mb-6">
            Our services are not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the new policy on our
            website. You can view this policy at any time by visiting this
            Privacy Policy page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="mb-6">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:info@elitxteriors.com"
              className="text-blue-600 hover:underline"
            >
              info@elitxteriors.com
            </a>
            .
          </p>

          <p className="mb-6">
            By using our website and services, you agree to the terms of this
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
