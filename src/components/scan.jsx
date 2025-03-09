import React, { useState, useRef } from "react";
import faceswap from "../assets/face-swap.png";

const TruthScan = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Handle File Upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      setFileUploaded(true);
      analyzeContent(); // Directly trigger AI analysis
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col items-center pt-20 px-6">
      {/* ✅ Header Section */}
      <h1 className="text-5xl font-extrabold text-indigo-900 mb-4 flex items-center">
        🔍 TruthScan AI Detection
      </h1>
      <p className="text-indigo-700 text-lg mb-6 text-center max-w-2xl">
        Upload any image, video, or document, and our AI will analyze it for you !
      </p>

      {/* ✅ File Upload Section (Hides After Upload) */}
      {!fileUploaded && (
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg border border-indigo-200 mt-4 h-64 flex items-center justify-center">
          <div className="text-center">
            <div 
              className="cursor-pointer transform transition-transform hover:scale-110 mb-3"
              onClick={triggerFileInput}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-indigo-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-800 mb-1">Click Folder To Upload</h3>
            <p className="text-indigo-500 text-sm">Accepted formats: jpg, png, mp4, pdf</p>
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.png"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      )}

      {/* ✅ Loading Spinner */}
      {loading && (
        <div className="mt-6 flex items-center">
          <svg className="animate-spin h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <p className="ml-3 text-indigo-700 text-lg font-medium">Analyzing...</p>
        </div>
      )}

      {/* ✅ AI Analysis Result Section (Shows After Processing) */}
      {result && (
        <div className="mt-8 p-6 bg-white shadow-xl rounded-lg max-w-4xl w-full flex flex-col md:flex-row border border-indigo-200 transition-all transform hover:scale-105">
          {/* ✅ Left Section: Centered Image Preview */}
          <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
            <img
              src={faceswap}
              alt="Analyzed Content"
              className="rounded-lg shadow-md max-h-60 border border-indigo-300"
            />
            <p className="mt-3 text-indigo-600 text-sm text-center">Analyzed Image</p>
          </div>

          {/* ✅ Right Section: AI Verdict & Highlights */}
          <div className="md:w-1/2 p-4 text-center flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-indigo-900">AI Verdict</h3>
            <p className="text-3xl font-semibold mt-2 text-red-600 animate-pulse">
              {result.status} Image
            </p>
            <p className="mt-2 text-indigo-700 text-lg font-medium">
              Fake Probability: <span className="text-red-500 font-semibold">{result.probability}%</span>
            </p>

            <h4 className="mt-4 text-lg font-semibold text-indigo-900">Key Findings:</h4>
            <ul className="mt-2 text-indigo-700 text-sm space-y-2">
              {result.highlights.map((point, index) => (
                <li key={index} className="bg-purple-100 px-3 py-2 rounded-lg text-indigo-800 font-medium shadow-sm">
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
