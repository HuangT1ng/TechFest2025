import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PropagandaDecoder = () => {
  const biasedText =
    "The corrupt and power-hungry government continues to exploit innocent citizens, forcing them into unjust conditions.";
  const neutralText =
    "The government has implemented policies that some citizens perceive as unfair.";

  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [feedbackItems, setFeedbackItems] = useState([]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.1,
        duration: 0.6 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Function to Analyze Text (Simulated AI Logic)
  const analyzeText = () => {
    setLoading(true);

    setTimeout(() => {
      let newScore = 100;
      let newFeedback = [];

      // Detect biased words in user input
      const biasedWords = ["corrupt", "power-hungry", "exploit", "innocent", "unjust"];
      const words = userInput.toLowerCase().split(/\s+/);

      biasedWords.forEach((word) => {
        if (words.includes(word.toLowerCase())) {
          newScore -= 20;
          newFeedback.push(`"${word}" is emotionally charged.`);
        }
      });

      if (newScore >= 80) {
        setStreak(streak + 1);
      } else {
        setStreak(0);
      }

      setScore(newScore);
      setFeedbackItems(newFeedback);
      setFeedback(newFeedback.length > 0 
        ? "Your text contains biased language. See below for details." 
        : "Great job! Your text is neutral.");
      setLoading(false);
    }, 1500);
  };

  const toggleExample = () => {
    setShowExample(!showExample);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <span className="inline-block px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-4">
              CRITICAL THINKING SKILLS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
              Propaganda Decoder
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Train your ability to detect and neutralize biased language. Rewrite propaganda into factual, neutral language to score points!
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
            variants={itemVariants}
          >
            {/* Biased Text Box */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center mr-3">
                    !
                  </span>
                  Biased Statement
                </h2>
                <motion.button
                  onClick={toggleExample}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm bg-violet-50 text-violet-600 px-3 py-1.5 rounded-lg flex items-center hover:bg-violet-100 transition-colors duration-200"
                >
                  {showExample ? "Hide Example" : "See Neutral Example"} 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showExample ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </motion.button>
              </div>
              
              <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-400 mb-4">
                <p className="text-gray-800 font-medium">{biasedText}</p>
              </div>

              <AnimatePresence>
                {showExample && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-400">
                      <h3 className="text-sm font-medium text-green-700 mb-1">Neutral Version:</h3>
                      <p className="text-gray-800">{neutralText}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Section */}
            <div className="p-6 md:p-8 bg-gray-50">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Neutral Rewrite</h2>
              <textarea
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow shadow-sm"
                rows="4"
                placeholder="Rewrite the paragraph in neutral, objective language..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>

              <div className="mt-6 flex justify-end">
                <motion.button
                  onClick={analyzeText}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                  disabled={loading || userInput.trim() === ""}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing
                    </>
                  ) : (
                    "Analyze Text"
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <AnimatePresence>
            {score !== null && (
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`p-6 ${score >= 80 ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'} text-white`}>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-3xl mr-4">
                      {score >= 80 ? '✓' : '!'}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">Your Score: {score}/100</h3>
                      <p className="opacity-90">{feedback}</p>
                    </div>
                  </div>
                </div>

                {feedbackItems.length > 0 && (
                  <div className="p-6 md:p-8">
                    <h3 className="font-semibold text-gray-800 mb-4">Detailed Feedback:</h3>
                    <ul className="space-y-2">
                      {feedbackItems.map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🔥</span>
                      <div>
                        <p className="text-sm text-gray-500">Current Streak</p>
                        <p className="text-2xl font-bold text-violet-700">{streak}</p>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => {
                        setUserInput('');
                        setScore(null);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-violet-50 text-violet-700 font-medium rounded-xl hover:bg-violet-100 transition-all duration-300"
                    >
                      Try Another Rewrite
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tips Card (Only shown when no results are displayed) */}
          {score === null && (
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md border border-violet-100"
            >
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-violet-500 mr-2">💡</span>
                Tips for Neutral Writing
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  <span className="text-gray-600">Remove emotionally charged words and adjectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  <span className="text-gray-600">Present only verifiable facts, not opinions or assumptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  <span className="text-gray-600">Use objective language that doesn't assume intent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2">•</span>
                  <span className="text-gray-600">Consider multiple perspectives when appropriate</span>
                </li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PropagandaDecoder;
