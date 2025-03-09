import React from "react";
import masteringAI from "../assets/MasteringAICourse.jpeg";

const TruthAcademy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 flex flex-col items-center px-6 py-12">
      {/* ✅ Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-900">
          🎓 Welcome to <span className="text-yellow-800">TruthAcademy</span>
        </h1>
        <p className="text-lg text-yellow-800 mt-3 max-w-2xl mx-auto">
          Learn how to detect deepfakes, misinformation, and AI-generated content. Enroll in our expert-led courses today!
        </p>
        <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 shadow-md transition">
          Browse Courses
        </button>
      </div>

      {/* ✅ Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
  {[
    { title: "🔍 AI & Misinformation", desc: "Understand how AI generates misinformation and ways to detect fake content." },
    { title: "🎥 Deepfake Detection", desc: "Learn how to analyze images & videos to detect AI-generated fakes." },
    { title: "📰 Media Literacy & Fact-Checking", desc: "Strengthen your ability to verify sources & identify biases." }
  ].map((course, index) => (
    <div 
      key={index} 
      className="bg-white shadow-lg rounded-xl p-6 border border-yellow-300 hover:shadow-xl transition-all transform hover:scale-105 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-yellow-900 mb-2">{course.title}</h3>
      <p className="text-yellow-800 text-sm flex-grow">{course.desc}</p>
      <button className="mt-auto bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
        Learn More
      </button>
    </div>
  ))}
</div>


      {/* ✅ Featured Course Section */}
      <div className="mt-16 bg-white shadow-lg rounded-xl p-8 max-w-6xl w-full flex flex-col md:flex-row items-center border border-yellow-300 hover:shadow-2xl transition-all">
  {/* ✅ Left Section: Text Content */}
  <div className="w-full md:w-3/5 text-left px-6">
    <h2 className="text-4xl font-extrabold text-yellow-900 flex items-center">
      ⭐ <span className="ml-2">Featured Course: Mastering AI Detection</span>
    </h2>
    <p className="text-yellow-800 mt-4 text-lg leading-relaxed">
      Dive deep into AI-powered misinformation detection. Learn from industry experts and gain hands-on experience with cutting-edge tools.
    </p>

    {/* ✅ Enroll Button with a More Modern Look */}
    <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 shadow-md transition-all flex items-center">
      🚀 Enroll Now
    </button>
  </div>

  {/* ✅ Right Section: Image */}
  <div className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0">
    <img
      src={masteringAI}
      alt="Featured Course"
      className="rounded-lg shadow-lg border border-yellow-300 transform hover:scale-105 transition-all"
    />
  </div>
</div>


      {/* ✅ Testimonials */}
      <div className="mt-16 max-w-6xl w-full">
        <h2 className="text-3xl font-extrabold text-center text-yellow-900">What Our Students Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { text: "This course changed how I see online content. Now I can spot fake news easily!", name: "— Alex T." },
            { text: "The deepfake detection techniques were mind-blowing. Highly recommend for anyone in media.", name: "— Sophie L." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-yellow-300 hover:shadow-xl transition-all">
              <p className="text-yellow-800 italic">“{testimonial.text}”</p>
              <h4 className="mt-4 text-yellow-900 font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-yellow-900">Start Learning Today!</h2>
        <p className="text-yellow-800 mt-3">Join thousands of learners in mastering the skills to fight misinformation.</p>
        <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 shadow-md transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TruthAcademy;
