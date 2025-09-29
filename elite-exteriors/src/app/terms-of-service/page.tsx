import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Elite Exteriors",
  description:
    "Elite Exteriors Terms of Service - Our terms and conditions for using our services.",
  robots: "index, follow",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> January 1, 2025
          </p>

          <p className="mb-6">
            Welcome to Elite Exteriors. These Terms of Service ("Terms") govern
            your use of our website and services. By accessing our website or
            using our pressure washing services, you agree to be bound by these
            Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            1. Services
          </h2>
          <p className="mb-6">
            Elite Exteriors provides professional exterior cleaning services
            including pressure washing, soft washing, and related cleaning
            services for residential and commercial properties in Chesapeake,
            Virginia Beach, Hampton, Norfolk, Suffolk, Newport News, and
            Williamsburg areas.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            2. Acceptance of Terms
          </h2>
          <p className="mb-6">
            By using our website, requesting quotes, or engaging our services,
            you acknowledge that you have read, understood, and agree to be
            bound by these Terms and our
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              {" "}
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            3. Service Agreements
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li>
              All service estimates are valid for 30 days from the date issued
            </li>
            <li>
              Services must be scheduled in advance and are subject to weather
              conditions
            </li>
            <li>
              Property access and water availability must be provided by the
              customer
            </li>
            <li>
              Payment is due upon completion of services unless other
              arrangements are made
            </li>
          </ul>

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
              Customer cancellations with less than 24 hours notice may incur a
              service fee
            </li>
            <li>We reserve the right to cancel services for safety reasons</li>
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
            <li>Estimates do not include applicable taxes unless specified</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            8. Website Use
          </h2>
          <p className="mb-6">
            Our website is provided for informational purposes and to facilitate
            service requests. You agree not to misuse our website or attempt to
            access unauthorized areas.
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
            We reserve the right to modify these Terms at any time. Changes will
            be posted on our website with an updated effective date. Your
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

          <p className="mb-6">
            By using our services, you acknowledge that you have read and
            understood these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
