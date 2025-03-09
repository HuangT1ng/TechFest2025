import React, { useState } from "react";
import { motion } from "framer-motion";

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

  // Function to Analyze Text (Simulated AI Logic)
  const analyzeText = () => {
    setLoading(true);

    setTimeout(() => {
      let newScore = 100;
      let newFeedback = [];

      // Detect biased words in user input
      const biasedWords = ["corrupt", "power-hungry", "exploit", "innocent", "unjust"];
      const words = userInput.toLowerCase().split(" ");

      biasedWords.forEach((word) => {
        if (words.includes(word)) {
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
      setFeedback(newFeedback.length > 0 ? newFeedback.join(" ") : "Great job! Your text is neutral.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 flex flex-col items-center justify-center px-6 py-12">
      {/* ✅ Header */}
      <motion.h1
        className="text-5xl font-extrabold text-indigo-800 mb-4 flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🧠 Propaganda Decoder
      </motion.h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">
        Rewrite the following biased text into <strong className="text-indigo-600">neutral language</strong> to score points!
      </p>

      {/* ✅ Biased Text Box */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl w-full border-l-8 border-red-400">
        <p className="text-red-600 font-semibold text-lg">{biasedText}</p>
      </div>

      {/* ✅ Input Box */}
      <textarea
        className="mt-6 p-4 w-full max-w-3xl rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow shadow-sm"
        rows="4"
        placeholder="Rewrite the paragraph in neutral language..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></textarea>

      {/* ✅ Submit Button */}
      <button
        onClick={analyzeText}
        className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
        disabled={loading || userInput.trim() === ""}
      >
        {loading ? "Analyzing..." : "Submit"}
      </button>

      {/* ✅ AI Analysis Result */}
      {score !== null && (
        <motion.div
          className="mt-8 p-6 bg-white shadow-lg rounded-xl max-w-lg border border-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-indigo-800">Your Score: {score}/100</h3>
          <p className={`mt-2 text-lg font-medium ${score >= 80 ? "text-green-600" : "text-red-600"}`}>
            {feedback}
          </p>
        </motion.div>
      )}

      {/* ✅ Streak Counter */}
      <div className="mt-6 text-indigo-700 font-medium text-lg">
        🔥 Current Streak: <span className="text-indigo-800 font-bold">{streak}</span>
      </div>
    </div>
  );
};

export default PropagandaDecoder;
