import React from "react";
import Layout from "../../components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              About SecureSteps
            </h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                SecureSteps is dedicated to enhancing community safety through
                transparency and accessible information. We believe that
                informed citizens make safer communities, and our platform
                provides real-time visualization of crime incidents to help you
                make better decisions about your daily routes and activities.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 mb-6">
                Our platform aggregates crime data from verified sources
                including news reports, police departments, and community
                submissions. Each incident is plotted on an interactive map with
                detailed information including crime type, description, and
                links to original sources.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Data Sources
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Local news organizations and media outlets</li>
                <li>Official police department reports</li>
                <li>Verified community submissions</li>
                <li>Public safety databases</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Privacy & Safety
              </h2>
              <p className="text-gray-600 mb-6">
                We prioritize user privacy and data security. All location data
                is anonymized, and we do not collect personal information from
                users. Our goal is to inform, not to compromise individual
                privacy.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Disclaimer
                </h3>
                <p className="text-blue-800 text-sm">
                  The information provided on SecureSteps is for general
                  awareness purposes only. Always rely on official sources and
                  law enforcement for critical safety decisions. Data accuracy
                  and timeliness may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
