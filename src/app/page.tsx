"use client";

import React from "react";
import Layout from "../components/layout/Layout";
import MapContainer from "../components/map/MapContainer";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [videoError, setVideoError] = React.useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
          {/* Video Background */}
          {!videoError && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? "opacity-30" : "opacity-0"
              }`}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
                  🛡️ Community Safety Platform
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight">
                Stay
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Secure
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mt-2">
                  with SecureSteps
                </span>
              </h1>

              <p className="mt-8 max-w-3xl mx-auto text-xl lg:text-2xl text-white/80 font-light leading-relaxed">
                Interactive crime mapping platform providing real-time
                visualization of local security incidents to enhance community
                safety awareness.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  <span className="relative z-10">Explore Crime Map</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                  Learn More
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Interactive Crime Map
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore real-time crime data with our intuitive map interface
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 flex items-center px-6 z-10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="ml-6 text-sm text-gray-500 font-medium">
                SecureSteps Crime Map
              </div>
            </div>

            <div className="pt-16 h-[500px]">
              <MapContainer
                className="h-full"
                onMapLoad={(map) => {
                  console.log("Map loaded successfully!", map);
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Community Safety
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how SecureSteps helps you stay informed and make safer
              decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interactive Markers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Click on crime markers to view detailed information including
                  incident type, description, and news sources.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Filtering
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Filter crimes by type, date range, and severity level to focus
                  on information most relevant to you.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Real-time Updates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay informed with regularly updated crime data from verified
                  news sources and official reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
