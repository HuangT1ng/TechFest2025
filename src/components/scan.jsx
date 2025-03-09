import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import faceswap from "../assets/face-swap.png";

const TruthScan = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Handle File Upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      setFileUploaded(true);
      analyzeContent(); // Directly trigger AI analysis
    }
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload({ target: { files: e.dataTransfer.files } });
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Reset scan
  const resetScan = () => {
    setFileUploaded(false);
    setResult(null);
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
          "The face seems to have been altered or swapped.",
          "Metadata analysis shows possible AI manipulation patterns.",
          "Unnatural shadows and reflections detected in the image."
        ],
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Elements */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-violet-200 opacity-20"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 8 + 8,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">TruthScan</span> AI Detection
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Upload any image, video, or document, and our advanced AI will analyze it for signs of manipulation or deepfake content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* File Upload Area */}
            {!fileUploaded && (
              <motion.div 
                className={`bg-white border-2 ${dragActive ? 'border-violet-500 bg-violet-50' : 'border-gray-200'} rounded-xl shadow-sm p-10 text-center transition-all duration-300`}
                whileHover={{ boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center">
                  <div 
                    className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${dragActive ? 'bg-violet-100 scale-110' : 'bg-gray-100'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-14 w-14 transition-colors duration-300 ${dragActive ? 'text-violet-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dragActive ? 'Drop your file here' : 'Drag & drop or browse'}
                  </h3>
                  
                  <p className="text-gray-500 mb-6">
                    Supported formats: JPG, PNG, MP4, PDF
                  </p>
                  
                  <button
                    onClick={triggerFileInput}
                    className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Browse Files
                  </button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.png,.mp4,.pdf"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </motion.div>
            )}

            {/* Loading State */}
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16"
              >
                <div className="w-20 h-20 border-4 border-gray-200 border-t-violet-600 rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analyzing your content</h3>
                <p className="text-gray-500">Our AI is examining the file for signs of manipulation...</p>
              </motion.div>
            )}

            {/* Results Section */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Top Banner with Result Status */}
                <div className={`w-full px-6 py-4 ${result.status === "Fake" ? "bg-red-100" : "bg-green-100"} flex items-center justify-between`}>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${result.status === "Fake" ? "bg-red-200 text-red-600" : "bg-green-200 text-green-600"} mr-3`}>
                      {result.status === "Fake" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className={`font-bold ${result.status === "Fake" ? "text-red-700" : "text-green-700"}`}>
                        {result.status === "Fake" ? "Manipulated Content Detected" : "Authentic Content"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Confidence: <span className="font-medium">{result.probability}%</span>
                      </p>
                    </div>
                  </div>
                  
                </div>
                
                {/* Main Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left: Image Preview */}
                  <div className="flex flex-col items-center">
                    <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
                      <img
                        src={faceswap}
                        alt="Analyzed Content"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm text-gray-500">Analyzed Image</p>
                  </div>
                  
                  {/* Right: Analysis Results */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Detection Analysis</h4>
                    
                    {/* Key Findings */}
                    <div className="space-y-3 mb-6">
                      {result.highlights.map((point, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="mr-3 mt-0.5 text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Additional Info */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-2">Recommendation</h5>
                      <p className="text-gray-600 text-sm">
                        This image shows clear signs of manipulation. Be cautious about sharing or using this content as it may contain deepfake elements or other alterations.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                  <button 
                    onClick={resetScan}
                    className="px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg mr-3 hover:bg-gray-50 transition-colors"
                  >
                    Scan Another
                  </button>
                  <button className="px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
                    Download Report
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Info Section */}
      {!fileUploaded && !loading && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How TruthScan Works</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
                <p className="text-gray-600">Our AI detection system analyzes multiple aspects of your content to identify potential manipulation</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Advanced Analysis",
                    description: "Our AI examines visual inconsistencies, metadata, and digital fingerprints",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Manipulation Detection",
                    description: "Identifies common deepfake signs like unnatural lighting, edge errors, and blending issues",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    )
                  },
                  {
                    title: "Detailed Reports",
                    description: "Get comprehensive explanations about why content may be manipulated",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TruthScan;
