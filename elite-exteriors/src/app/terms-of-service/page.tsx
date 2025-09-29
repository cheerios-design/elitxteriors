import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Elite Exteriors",
  description:
    "Elite Exteriors Terms of Service - Our terms and conditions for using our services.",
  robots: "index, follow",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Our terms and conditions for using Elite Exteriors services and
              website.
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
              These terms are effective as of the date listed above and govern
              your use of our services.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-700 text-lg leading-relaxed mb-8">
              Welcome to Elite Exteriors. These Terms of Service {`("Terms")`}{" "}
              govern your use of our website and services. By accessing our
              website or using our pressure washing services, you agree to be
              bound by these Terms.
            </p>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              1. Services
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <p className="text-neutral-700 leading-relaxed">
                Elite Exteriors provides professional exterior cleaning services
                including pressure washing, soft washing, and related cleaning
                services for residential and commercial properties in
                Chesapeake, Virginia Beach, Hampton, Norfolk, Suffolk, Newport
                News, and Williamsburg areas.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              2. Acceptance of Terms
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <p className="text-neutral-700 leading-relaxed">
                By using our website, requesting quotes, or engaging our
                services, you acknowledge that you have read, understood, and
                agree to be bound by these Terms and our
                <a
                  href="/privacy-policy"
                  className="text-primary-600 hover:text-primary-800 underline font-semibold mx-1"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <h2 className="text-3xl font-bold text-neutral-900 mt-12 mb-6 pb-3 border-b-2 border-primary-200">
              3. Service Agreements
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  All service estimates are valid for 30 days from the date
                  issued
                </li>
                <li className="flex items-center text-neutral-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Services must be scheduled in advance and are subject to
                  weather conditions
                </li>
                <li className="flex items-center text-neutral-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Property access and water availability must be provided by the
                  customer
                </li>
                <li className="flex items-center text-neutral-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  Payment is due upon completion of services unless other
                  arrangements are made
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Customer Responsibilities
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Ensure safe and reasonable access to areas to be cleaned</li>
              <li>Remove or secure fragile items near work areas</li>
              <li>
                Notify us of any special conditions or concerns before service
              </li>
              <li>
                Provide accurate contact information for service coordination
              </li>
              <li>
                Be present or designate an authorized representative during
                service
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Liability and Insurance
            </h2>
            <p className="mb-6">
              Elite Exteriors carries appropriate insurance coverage for our
              services. We are committed to providing professional services with
              care and attention. Our liability is limited to the cost of the
              services provided.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Cancellation and Rescheduling
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Services may be rescheduled due to weather conditions at no
                additional charge
              </li>
              <li>
                Customer cancellations with less than 24 hours notice may incur
                a service fee
              </li>
              <li>
                We reserve the right to cancel services for safety reasons
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Payment Terms
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Payment is due upon completion of services unless prior
                arrangements are made
              </li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Late payment fees may apply to overdue accounts</li>
              <li>
                Estimates do not include applicable taxes unless specified
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Website Use
            </h2>
            <p className="mb-6">
              Our website is provided for informational purposes and to
              facilitate service requests. You agree not to misuse our website
              or attempt to access unauthorized areas.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Communication Consent
            </h2>
            <p className="mb-6">
              By providing your contact information, you consent to receive
              communications from us regarding your service requests,
              appointments, and updates. You may opt-out of promotional
              communications at any time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Intellectual Property
            </h2>
            <p className="mb-6">
              All content on our website, including text, images, logos, and
              designs, is the property of Elite Exteriors and is protected by
              copyright and trademark laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              11. Modifications to Terms
            </h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. Changes
              will be posted on our website with an updated effective date. Your
              continued use of our services constitutes acceptance of any
              modifications.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              12. Governing Law
            </h2>
            <p className="mb-6">
              These Terms are governed by the laws of the Commonwealth of
              Virginia. Any disputes shall be resolved in the appropriate courts
              of Virginia.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              13. Severability
            </h2>
            <p className="mb-6">
              If any provision of these Terms is found to be unenforceable, the
              remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="mb-6">
              If you have any questions about these Terms of Service, please
              contact us:
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
                By using our services, you acknowledge that you have read and
                understood these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
