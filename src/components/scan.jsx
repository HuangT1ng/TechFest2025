import React, { useState } from "react";
import faceswap from "../assets/face-swap.png";
const TruthScan = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle File Upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      setFileUploaded(true);
      analyzeContent(); // Directly trigger AI analysis
    }
  };

  // Simulated AI Analysis - Hardcoded Result for Given Image
  const analyzeContent = () => {
    setLoading(true);

    setTimeout(() => {
      setResult({
        status: "Fake",
        probability: 97,
        highlights: [
          "Inconsistencies detected in facial features and lighting.",
          "The face seems to have been altered.",
          "Metadata analysis shows possible AI alteration.",
        ],
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center px-6 py-12">
      {/* ✅ Header Section */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 flex items-center">
        🔍 TruthScan AI Detection
      </h1>
      <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl">
        Upload an image, and our AI will analyze it for misinformation.
      </p>

      {/* ✅ File Upload Section (Hides After Upload) */}
      {!fileUploaded && (
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg border border-gray-200 transition-transform transform hover:scale-105">
          <label className="block text-gray-800 font-semibold text-lg mb-3">
            Upload an Image:
          </label>
          <input
            type="file"
            accept=".jpg,.png"
            className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onChange={handleFileUpload}
          />
          <p className="text-gray-500 text-sm mt-2">Accepted formats: JPG, PNG</p>
        </div>
      )}

      {/* ✅ Loading Spinner */}
      {loading && (
        <div className="mt-8 flex items-center">
          <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <p className="ml-3 text-gray-700 text-lg font-medium">Analyzing...</p>
        </div>
      )}

      {/* ✅ AI Analysis Result Section (Shows After Processing) */}
      {result && (
        <div className="mt-10 p-6 bg-white shadow-xl rounded-lg max-w-4xl w-full flex flex-col md:flex-row border border-gray-200 transition-all transform hover:scale-105">
          {/* ✅ Left Section: Centered Image Preview */}
          <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
            <img
              src={faceswap}
              alt="Analyzed Content"
              className="rounded-lg shadow-md max-h-60 border border-gray-300"
            />
            <p className="mt-4 text-gray-600 text-sm text-center">Analyzed Image</p>
          </div>

          {/* ✅ Right Section: AI Verdict & Highlights */}
          <div className="md:w-1/2 p-6 text-center flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900">AI Verdict</h3>
            <p className="text-3xl font-semibold mt-3 text-red-600 animate-pulse">
              {result.status} Image
            </p>
            <p className="mt-2 text-gray-700 text-lg font-medium">
              Fake Probability: <span className="text-red-500 font-semibold">{result.probability}%</span>
            </p>

            <h4 className="mt-6 text-lg font-semibold text-gray-900">Key Findings:</h4>
            <ul className="mt-3 text-gray-700 text-sm space-y-2">
              {result.highlights.map((point, index) => (
                <li key={index} className="bg-yellow-200 px-3 py-2 rounded-lg text-gray-800 font-medium shadow-sm">
                  ⚠ {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TruthScan;
