import React from "react";
import Layout from "../../components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-600 text-lg">
                Last updated: June 30, 2025
              </p>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">
                  Welcome to SecureSteps
                </h2>
                <p className="text-blue-800 text-sm">
                  By using our platform, you agree to these terms. Please read
                  them carefully to understand your rights and responsibilities
                  while using SecureSteps.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-6">
                By accessing and using SecureSteps, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Description of Service
              </h2>
              <p className="text-gray-600 mb-4">
                SecureSteps is a community safety platform that provides:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Interactive crime mapping and visualization</li>
                <li>Access to publicly available crime data</li>
                <li>Location-based safety information</li>
                <li>News article links and incident details</li>
                <li>Filtering and search capabilities</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                User Responsibilities
              </h2>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Acceptable Use
              </h3>
              <p className="text-gray-600 mb-4">
                You agree to use SecureSteps only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Use the service for any unlawful purpose or to solicit others
                  to perform unlawful acts
                </li>
                <li>
                  Violate any local, state, national, or international law or
                  regulation
                </li>
                <li>Harass, abuse, or harm another person or group</li>
                <li>
                  Use the service to transmit or procure the sending of spam or
                  unsolicited messages
                </li>
                <li>
                  Interfere with or disrupt the service or servers or networks
                  connected to the service
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Information Accuracy
              </h3>
              <p className="text-gray-600 mb-6">
                While we strive to provide accurate and up-to-date information,
                SecureSteps does not guarantee the accuracy, completeness, or
                timeliness of any information displayed on our platform.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data and Privacy
              </h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the service, to
                understand our practices regarding the collection and use of
                your information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Disclaimers
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  Important Safety Notice
                </h3>
                <p className="text-yellow-800 text-sm mb-4">
                  SecureSteps is an informational tool only. It should not be
                  used as the sole basis for personal safety decisions. Always
                  rely on official sources and law enforcement for critical
                  safety information.
                </p>
                <ul className="list-disc list-inside text-yellow-800 text-sm space-y-1">
                  <li>Data may not reflect the most current crime activity</li>
                  <li>
                    Not all crimes may be reported or included in our database
                  </li>
                  <li>Location accuracy may vary</li>
                  <li>Service availability is not guaranteed</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                No Warranty
              </h3>
              <p className="text-gray-600 mb-6">
                SecureSteps is provided "as is" and "as available" without any
                representations or warranties, express or implied. We make no
                representations or warranties in relation to this service or the
                information and materials provided on this service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-6">
                In no event shall SecureSteps, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of the service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 mb-6">
                The service and its original content, features, and
                functionality are and will remain the exclusive property of
                SecureSteps and its licensors. The service is protected by
                copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 mb-6">
                Our service may contain links to third-party websites or
                services that are not owned or controlled by SecureSteps. We
                have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any third-party
                websites or services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Termination
              </h2>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 mb-6">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be interpreted and governed by the laws of the
                jurisdiction in which SecureSteps operates, without regard to
                its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 font-medium mb-2">
                  SecureSteps Legal Team
                </p>
                <p className="text-gray-600 mb-1">
                  Email: legal@securesteps.app
                </p>
                <p className="text-gray-600 mb-1">
                  Support: support@securesteps.app
                </p>
                <p className="text-gray-600">
                  Response time: Within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
