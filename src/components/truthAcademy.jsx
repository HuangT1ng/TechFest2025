import React from "react";
import masteringAI from "../assets/MasteringAICourse.jpeg";

const TruthAcademy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-900">
          🎓 Welcome to <span className="text-indigo-600">TruthAcademy</span>
        </h1>
        <p className="text-lg text-blue-800 mt-3 max-w-2xl mx-auto">
          Learn how to detect deepfakes, misinformation, and AI-generated content. Enroll in our expert-led courses today!
        </p>
        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 shadow-md transition">
          Browse Courses
        </button>
      </div>

      {/* Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          { title: "🔍 AI & Misinformation", desc: "Understand how AI generates misinformation and ways to detect fake content." },
          { title: "🎥 Deepfake Detection", desc: "Learn how to analyze images & videos to detect AI-generated fakes." },
          { title: "📰 Media Literacy & Fact-Checking", desc: "Strengthen your ability to verify sources & identify biases." }
        ].map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 hover:shadow-xl transition-all transform hover:scale-105 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
            <p className="text-blue-800 text-sm flex-grow">{course.desc}</p>
            <button className="mt-auto bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Featured Course Section - "Real or Fake?" styling to match the image */}
      <div className="mt-16 bg-white shadow-lg rounded-xl p-8 max-w-6xl w-full flex flex-col md:flex-row items-center border border-blue-200 hover:shadow-2xl transition-all">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-3/5 text-left px-6">
          <h2 className="text-6xl font-extrabold">
            <span className="text-blue-900">Real or </span>
            <span className="text-indigo-600 italic">Fake</span>
            <span className="text-indigo-600">?</span>
          </h2>
          <p className="text-blue-800 mt-4 text-lg leading-relaxed">
            Learn to identify deepfakes with interactive tools, challenges, and AI-powered analysis.
          </p>

          {/* Buttons styled to match the image */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 shadow-md transition-all flex items-center">
              Try TruthScan
            </button>
            <button className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 shadow-sm transition-all flex items-center">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
          <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">SENTINEL AI</h3>
                <p className="text-2xl font-bold text-pink-600">DEFEND TRUTH</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16 max-w-6xl w-full">
        <h2 className="text-3xl font-extrabold text-center text-blue-900">What Our Students Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { text: "This course changed how I see online content. Now I can spot fake news easily!", name: "— Alex T." },
            { text: "The deepfake detection techniques were mind-blowing. Highly recommend for anyone in media.", name: "— Sophie L." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-blue-200 hover:shadow-xl transition-all">
              <p className="text-blue-800 italic">"{testimonial.text}"</p>
              <h4 className="mt-4 text-indigo-900 font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-blue-900">Start Learning Today!</h2>
        <p className="text-blue-800 mt-3">Join thousands of learners in mastering the skills to fight misinformation.</p>
        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 shadow-md transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TruthAcademy;