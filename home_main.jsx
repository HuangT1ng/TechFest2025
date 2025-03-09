import React from "react";
import News from "./News";
import map from "../assets/Truthmap.jpg";
import logo from "../assets/SentinelAI.png";
import { motion } from "framer-motion";
import "./css/card.css";

const Welcome = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 py-16 md:py-24">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            {/* Left Side - Text */}
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl xs:text-6xl md:text-8xl font-extrabold leading-tight">
                Real or <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-serif italic">Fake</span>?
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 font-medium mt-4">
                Learn to identify deepfakes with interactive tools, challenges, and AI-powered analysis.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition">
                  Try TruthScan
                </button>
                <button className="px-6 py-3 bg-white border border-indigo-300 text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Right Side - Image Animation */}
            <motion.div 
              className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={logo}
                alt="Sentinel AI"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
              <path fill="#ffffff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,112C384,107,480,117,576,133.3C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"></path>
            </svg>
          </div>
        </section>

        {/* TruthMap Feature Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">🔍 Introducing TruthMap</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              TruthMap is our AI-powered tool designed to detect and visualize misinformation in real-time.
            </p>

            {/* Map Image with Shadow and Refined Border */}
            <div className="flex justify-center items-center mt-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src={map}
                  alt="TruthMap"
                  className="relative w-full md:max-w-4xl h-auto rounded-lg shadow-lg border border-gray-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section - New Addition */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
              Powerful AI Detection Tools
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Image Analysis</h3>
                <p className="text-gray-600">
                  Advanced algorithms detect manipulated images and identify telltale signs of deepfakes.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Text Verification</h3>
                <p className="text-gray-600">
                  NLP models evaluate news articles and social media posts for misinformation patterns.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Real-time Alerts</h3>
                <p className="text-gray-600">
                  Stay informed with instant notifications when suspicious content is detected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fake vs. Real News Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
                📰 Spot the Difference: Real vs. Deepfake
              </h2>
              <News />
            </div>
          </div>
        </section>

        {/* Testimonial/Trust Section - New Addition */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Trusted by Educators & Journalists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-indigo-700 p-6 rounded-lg">
                <p className="italic mb-4">"An essential tool for helping students navigate today's complex information landscape."</p>
                <p className="font-semibold">- Media Literacy Institute</p>
              </div>
              
              <div className="bg-indigo-700 p-6 rounded-lg">
                <p className="italic mb-4">"Sentinel AI has transformed how we verify sources and protect against misinformation."</p>
                <p className="font-semibold">- Global News Network</p>
              </div>
              
              <div className="bg-indigo-700 p-6 rounded-lg">
                <p className="italic mb-4">"The most user-friendly fact-checking platform we've implemented in our newsroom."</p>
                <p className="font-semibold">- Digital Truth Alliance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Welcome;