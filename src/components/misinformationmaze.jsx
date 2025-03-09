import React, { useState } from "react";
import { motion } from "framer-motion";

// Define the 10-step optimal path
const optimalPath = [
  { x: 9, y: 0 }, // Start
  { x: 7, y: 0 },
  { x: 7, y: 2 },
  { x: 7, y: 4 },
  { x: 7, y: 6 },
  { x: 6, y: 6 },
  { x: 4, y: 6 },
  { x: 2, y: 6 },
  { x: 1, y: 7 },
  { x: 0, y: 7 }, // Goal 🏁
];

// Define the maze grid (0 = open path, 1 = wall, 2 = player, 3 = exit)
const maze = [
  [0, 0, 1, 0, 0, 0, 1, 0, 3, 0],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Player starts at (9,0)
];

// Define 10 questions
const questions = [
  { text: "The Eiffel Tower is taller than the Statue of Liberty.", answer: "Real" },
  { text: "The Great Wall of China is visible from the Moon.", answer: "Fake" },
  { text: "Humans share 98% of their DNA with chimpanzees.", answer: "Real" },
  { text: "A man survived 30 days eating only candy.", answer: "Fake" },
  { text: "Sharks have been on Earth longer than trees.", answer: "Real" },
  { text: "The Bermuda Triangle makes ships disappear due to magnetic fields.", answer: "Fake" },
  { text: "Octopuses have three hearts.", answer: "Real" },
  { text: "Dinosaurs and humans coexisted 10,000 years ago.", answer: "Fake" },
  { text: "Bananas are berries, but strawberries are not.", answer: "Real" },
  { text: "Goldfish have a memory span of only 3 seconds.", answer: "Fake" },
];

const MisinformationMazeGame = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleAnswer = (choice) => {
    if (choice === questions[currentStep].answer) {
      // ✅ Correct answer: Move to next step
      setStatus("correct");
      if (currentStep + 1 === optimalPath.length) {
        setGameCompleted(true);
      } else {
        setTimeout(() => {
          setStatus(null);
          setCurrentStep((prev) => Math.min(prev + 1, optimalPath.length - 1));
        }, 1000);
      }
    } else {
      // ❌ Wrong answer: Move back one step
      setStatus("wrong");
      setTimeout(() => {
        setStatus(null);
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-purple-50 px-6 py-12">
      {/* ✅ Header */}
      <motion.h1
        className="text-5xl font-extrabold text-indigo-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🏆 Misinformation Maze Challenge
      </motion.h1>

      {/* ✅ Game Completed Screen */}
      {gameCompleted ? (
        <motion.div
          className="p-8 bg-white shadow-lg rounded-xl text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-600">🎉 You Escaped the Maze!</h2>
          <p className="text-gray-700 mt-4 text-lg">
            You completed the **Misinformation Maze**!  
            **Next maze challenge releases next week. Stay sharp!**
          </p>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center w-full">
          {/* ✅ Maze Grid */}
          <div className="grid grid-cols-10 gap-1 mb-6">
            {maze.map((row, x) =>
              row.map((cell, y) => (
                <motion.div
                  key={`${x}-${y}`}
                  className={`w-8 h-8 flex items-center justify-center border rounded-lg ${
                    cell === 1
                      ? "bg-gray-700"
                      : x === optimalPath[currentStep].x &&
                        y === optimalPath[currentStep].y
                      ? "bg-blue-500 text-white font-bold"
                      : cell === 3
                      ? "bg-green-500 text-white font-bold"
                      : "bg-gray-200"
                  }`}
                >
                  {x === optimalPath[currentStep].x &&
                  y === optimalPath[currentStep].y
                    ? "🚶"
                    : cell === 3
                    ? "🏁"
                    : ""}
                </motion.div>
              ))
            )}
          </div>

          {/* ✅ Question */}
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              {questions[currentStep].text}
            </h3>

            {/* ✅ Answer Buttons */}
            <div className="mt-4 flex space-x-4 justify-center">
              <button
                onClick={() => handleAnswer("Real")}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                ✅ Real
              </button>
              <button
                onClick={() => handleAnswer("Fake")}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                ❌ Fake
              </button>
            </div>
          </div>

          {/* ✅ Status Message */}
          {status && (
            <motion.p
              className={`mt-4 text-lg font-semibold ${
                status === "correct" ? "text-green-600" : "text-red-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {status === "correct" ? "✅ Correct! Moving forward!" : "❌ Wrong! Falling back!"}
            </motion.p>
          )}
        </div>
      )}
    </div>
  );
};

export default MisinformationMazeGame;
