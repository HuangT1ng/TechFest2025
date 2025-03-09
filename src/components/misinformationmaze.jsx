import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showInstructions, setShowInstructions] = useState(true);
  const [progress, setProgress] = useState(0);

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

  const cellVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        duration: 0.5
      }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const handleAnswer = (choice) => {
    if (choice === questions[currentStep].answer) {
      // ✅ Correct answer: Move to next step
      setStatus("correct");
      
      // Update progress
      const newProgress = ((currentStep + 1) / optimalPath.length) * 100;
      setProgress(newProgress);
      
      if (currentStep + 1 === optimalPath.length) {
        setTimeout(() => {
          setGameCompleted(true);
        }, 1000);
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
        // Update progress
        const newProgress = ((Math.max(currentStep - 1, 0)) / optimalPath.length) * 100;
        setProgress(newProgress);
      }, 1000);
    }
  };

  // Start game function
  const startGame = () => {
    setShowInstructions(false);
  };

  // Restart game function
  const restartGame = () => {
    setCurrentStep(0);
    setStatus(null);
    setGameCompleted(false);
    setProgress(0);
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
              CHALLENGE YOUR KNOWLEDGE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">
              Misinformation Maze Challenge
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate through the maze by correctly identifying real facts from fake news. Each correct answer moves you forward, while wrong answers set you back!
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {/* Instructions Screen */}
            {showInstructions && !gameCompleted && (
              <motion.div 
                key="instructions"
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6">
                  <h2 className="text-2xl font-bold">How to Play</h2>
                </div>
                <div className="p-8">
                  <div className="mb-6 space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold">1</div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Read Each Statement</h3>
                        <p className="text-gray-600">For each step, you'll be presented with a statement that may be true or false.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold">2</div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Choose Wisely</h3>
                        <p className="text-gray-600">Select "Real" if you think the statement is true, or "Fake" if you think it's false.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold">3</div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Navigate the Maze</h3>
                        <p className="text-gray-600">Correct answers move you forward in the maze. Wrong answers set you back one step.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-bold">4</div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Reach the Goal</h3>
                        <p className="text-gray-600">Navigate through all 10 steps to reach the finish line and complete the challenge!</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={startGame}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Start Challenge
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Game Completed Screen */}
            {gameCompleted && (
              <motion.div
                key="completed"
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-8 text-center">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20,
                      delay: 0.2
                    }}
                    className="w-24 h-24 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4"
                  >
                    <span className="text-5xl">🏆</span>
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
                  <p className="text-lg opacity-90">You've successfully navigated the Misinformation Maze!</p>
                </div>
                
                <div className="p-8 text-center">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Achievement</h3>
                    <p className="text-gray-600">
                      You've demonstrated excellent fact-checking skills by completing all 10 steps of the maze. 
                      Your ability to distinguish facts from fiction is crucial in today's information-saturated world.
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <motion.button
                      onClick={restartGame}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Play Again
                    </motion.button>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 border border-violet-300 text-violet-700 font-medium rounded-xl hover:bg-violet-50 transition-all duration-300"
                    >
                      Share Results
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Game Interface */}
            {!showInstructions && !gameCompleted && (
              <motion.div
                key="game"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  {/* Progress Bar */}
                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress: {currentStep}/{optimalPath.length-1} steps</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Maze Grid */}
                  <motion.div 
                    variants={itemVariants}
                    className="mb-8 overflow-x-auto py-4"
                  >
                    <div className="grid grid-cols-10 gap-1.5 md:gap-2 mx-auto" style={{ maxWidth: "fit-content" }}>
                      {maze.map((row, x) =>
                        row.map((cell, y) => {
                          const isPlayerPosition = x === optimalPath[currentStep].x && y === optimalPath[currentStep].y;
                          const isExit = cell === 3;
                          const isWall = cell === 1;
                          const isPath = !isWall && !isPlayerPosition && !isExit;
                          const isPast = optimalPath.some((pos, idx) => pos.x === x && pos.y === y && idx < currentStep);
                          const isFuture = optimalPath.some((pos, idx) => pos.x === x && pos.y === y && idx > currentStep);

                          return (
                            <motion.div
                              key={`${x}-${y}`}
                              variants={cellVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              whileHover={isPath ? "hover" : undefined}
                              className={`
                                w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-lg 
                                transition-all duration-300 shadow-sm
                                ${isWall 
                                  ? "bg-gray-700" 
                                  : isPlayerPosition
                                    ? "bg-gradient-to-r from-violet-500 to-purple-500 shadow-md" 
                                    : isExit
                                      ? "bg-gradient-to-r from-emerald-500 to-green-500 shadow-md" 
                                      : isPast
                                        ? "bg-violet-100 border border-violet-200" 
                                        : isFuture
                                          ? "bg-purple-50 border border-purple-100 opacity-70"
                                          : "bg-gray-100 border border-gray-200"
                                }
                              `}
                            >
                              {isPlayerPosition ? (
                                <span className="text-xl" role="img" aria-label="player">🚶</span>
                              ) : isExit ? (
                                <span className="text-xl" role="img" aria-label="finish">🏁</span>
                              ) : isPast ? (
                                <span className="text-xs text-violet-400">✓</span>
                              ) : ""}
                            </motion.div>
                          );
                        })
                      )}
                    </div>
                  </motion.div>

                  {/* Question & Answer Section */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-violet-50 rounded-xl p-6 mb-8"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Question {currentStep + 1}:
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 font-medium">
                      {questions[currentStep].text}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        onClick={() => handleAnswer("Real")}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        disabled={status !== null}
                      >
                        <span className="mr-2">✓</span> Real
                      </motion.button>
                      <motion.button
                        onClick={() => handleAnswer("Fake")}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        disabled={status !== null}
                      >
                        <span className="mr-2">✗</span> Fake
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Feedback Message */}
                  <AnimatePresence>
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-xl text-center ${
                          status === "correct" 
                            ? "bg-green-100 border border-green-200" 
                            : "bg-red-100 border border-red-200"
                        }`}
                      >
                        <p className={`text-lg font-medium ${
                          status === "correct" ? "text-green-700" : "text-red-700"
                        }`}>
                          {status === "correct" 
                            ? "✅ Correct! Moving forward!" 
                            : "❌ Incorrect! Moving back a step."
                          }
                        </p>
                        <p className="text-sm mt-1 text-gray-600">
                          The statement was {questions[currentStep].answer === "Real" ? "True" : "False"}.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default MisinformationMazeGame;
