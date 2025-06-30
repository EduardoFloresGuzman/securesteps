import React from "react";
import Layout from "../../components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>

            <div className="prose max-w-none">
              <p className="text-sm text-gray-500 mb-8">
                Last updated: June 30, 2025
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">
                  Your Privacy Matters
                </h2>
                <p className="text-blue-800 text-sm">
                  SecureSteps is committed to protecting your privacy while
                  providing valuable community safety information. This policy
                  explains how we collect, use, and protect your information.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>IP address (anonymized for privacy)</li>
                <li>General location data (city/region level only)</li>
                <li>Usage patterns and interaction data</li>
                <li>Device information (screen size, device type)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Optional Information
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Location preferences (if you choose to set them)</li>
                <li>Filter preferences (crime types, date ranges)</li>
                <li>Map display preferences</li>
                <li>Feedback and contact information (if you contact us)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Do NOT Collect
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  Personal identification information (name, address, phone)
                </li>
                <li>Precise location tracking or GPS coordinates</li>
                <li>Personal browsing history outside our platform</li>
                <li>Financial or payment information</li>
                <li>Social media profiles or personal accounts</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  <strong>Service Provision:</strong> Display relevant crime
                  data for your area
                </li>
                <li>
                  <strong>Performance:</strong> Optimize map loading and
                  responsiveness
                </li>
                <li>
                  <strong>Analytics:</strong> Understand usage patterns to
                  improve the service
                </li>
                <li>
                  <strong>Security:</strong> Detect and prevent abuse or
                  malicious activity
                </li>
                <li>
                  <strong>Communication:</strong> Respond to your inquiries and
                  feedback
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Sources and Attribution
              </h2>
              <p className="text-gray-600 mb-4">
                Crime data displayed on SecureSteps is sourced from:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Public news organizations and media outlets</li>
                <li>Official police department reports and press releases</li>
                <li>Verified community submissions</li>
                <li>Public safety databases and government sources</li>
              </ul>
              <p className="text-gray-600 mb-6">
                All crime data is publicly available information. We do not
                collect or store private victim information, and all data is
                presented for general awareness purposes only.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your
                information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Encrypted data transmission (HTTPS)</li>
                <li>Secure cloud infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to data on a need-to-know basis</li>
                <li>Anonymization of personal identifiers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 mb-4">
                SecureSteps uses the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>
                  <strong>Google Maps:</strong> For map display and location
                  services
                </li>
                <li>
                  <strong>MongoDB Atlas:</strong> For secure data storage
                </li>
                <li>
                  <strong>Vercel:</strong> For application hosting and delivery
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                These services have their own privacy policies, and we recommend
                reviewing them.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cookies and Local Storage
              </h2>
              <p className="text-gray-600 mb-6">
                We use minimal cookies and local storage to enhance your
                experience:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Essential cookies for basic functionality</li>
                <li>Preference cookies to remember your settings</li>
                <li>Analytics cookies to understand usage (anonymized)</li>
              </ul>
              <p className="text-gray-600 mb-6">
                You can control cookies through your browser settings, though
                some functionality may be limited.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access the information we have about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics and non-essential cookies</li>
                <li>Request a copy of your data</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Retention
              </h2>
              <p className="text-gray-600 mb-6">
                We retain data only as long as necessary to provide our
                services. Analytics data is anonymized and may be retained
                longer for service improvement purposes. Crime data from public
                sources is retained to maintain historical context for community
                safety.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-600 mb-6">
                SecureSteps is designed for general audiences and does not
                knowingly collect information from children under 13. If you are
                a parent and believe your child has provided information to us,
                please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-6">
                We may update this privacy policy from time to time. We will
                notify users of significant changes by posting the updated
                policy on this page with a new "last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700 font-medium">
                  SecureSteps Privacy Team
                </p>
                <p className="text-gray-600">Email: privacy@securesteps.app</p>
                <p className="text-gray-600">Response time: Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
