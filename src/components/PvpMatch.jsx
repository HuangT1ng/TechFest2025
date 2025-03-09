import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gameQuestions, opponentAnswers } from '../data/gameQuestions';

const PvpMatch = ({ playerName, playerIcon }) => {
  // Game state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerSections, setPlayerSections] = useState(3);
  const [opponentSections, setOpponentSections] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Placeholder opponent data
  const opponent = {
    name: "Biden",
    icon: "👴🏻"
  };

  // Get current question
  const currentQuestion = gameQuestions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswer = (answer) => {
    const playerCorrect = answer === currentQuestion.correctAnswer;
    const opponentCorrect = opponentAnswers[currentQuestion.id] === currentQuestion.correctAnswer;

    let newPlayerSections = playerSections;
    let newOpponentSections = opponentSections;

    // Update sections based on answers
    if (playerCorrect !== opponentCorrect) {
      if (playerCorrect) {
        newPlayerSections = playerSections + 1;
        newOpponentSections = opponentSections - 1;
      } else {
        newPlayerSections = playerSections - 1;
        newOpponentSections = opponentSections + 1;
      }
      setPlayerSections(newPlayerSections);
      setOpponentSections(newOpponentSections);
    }

    // Show feedback
    setIsCorrect(playerCorrect);
    setShowFeedback(true);

    // Check for game over or proceed to next question after delay
    setTimeout(() => {
      setShowFeedback(false);
      if (newPlayerSections >= 6 || newOpponentSections >= 6 || currentQuestionIndex === gameQuestions.length - 1) {
        setGameOver(true);
        if (newPlayerSections === newOpponentSections) {
          setWinner('draw');
        } else {
          setWinner(newPlayerSections > newOpponentSections ? 'player' : 'opponent');
        }
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 1500);
  };

  // Calculate progress bar sections and VS position
  const getProgressBarStyle = () => {
    const totalSections = 6;
    const playerWidth = (playerSections / totalSections) * 100;
    const opponentWidth = (opponentSections / totalSections) * 100;
    
    return {
      player: { width: `${playerWidth}%` },
      opponent: { width: `${opponentWidth}%` },
      vs: { left: `${playerWidth}%` }
    };
  };

  const progressStyles = getProgressBarStyle();

  // Game Over Screen
  if (gameOver) {
    return (
      <div className="min-h-screen bg-white">
        <div className="relative pt-20 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center"
            >
              {/* Trophy Icon */}
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="mb-8 flex justify-center"
              >
                <div className={`w-32 h-32 rounded-full flex items-center justify-center text-7xl
                  ${winner === 'draw' 
                    ? 'bg-gray-100' 
                    : winner === 'player'
                      ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white' 
                      : 'bg-gradient-to-r from-red-500 to-orange-500 text-white'}`}
                >
                  {winner === 'draw' ? '🤝' : winner === 'player' ? '🏆' : '🎮'}
                </div>
              </motion.div>

              {/* Game Over Text */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-4xl font-bold mb-6 text-gray-900"
              >
                Game Over!
              </motion.h2>

              {/* Winner Announcement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mb-8"
              >
                <h3 className={`text-3xl font-bold mb-4 
                  ${winner === 'draw' 
                    ? 'text-gray-700' 
                    : winner === 'player'
                      ? 'bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent'}`}
                >
                  {winner === 'draw' 
                    ? "It's a Draw!" 
                    : winner === 'player' 
                      ? `${playerName} Wins!` 
                      : `${opponent.name} Wins!`}
                </h3>
                
                <p className="text-gray-600">
                  {winner === 'draw' 
                    ? "Both players showed equal skill in detecting deepfakes!" 
                    : winner === 'player' 
                      ? "Congratulations! Your deepfake detection skills prevailed!" 
                      : "Better luck next time. Keep practicing your deepfake detection skills!"}
                </p>
              </motion.div>

              {/* Final Score */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-xl mb-10"
              >
                <h4 className="font-medium text-gray-900 mb-4">Final Score</h4>
                <div className="flex justify-center items-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      {playerIcon || '👤'}
                    </div>
                    <p className="font-medium text-gray-900">{playerName}</p>
                    <p className="text-2xl font-bold text-violet-700">{playerSections}/6</p>
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-400">vs</div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      {opponent.icon}
                    </div>
                    <p className="font-medium text-gray-900">{opponent.name}</p>
                    <p className="text-2xl font-bold text-red-500">{opponentSections}/6</p>
                  </div>
                </div>
              </motion.div>

              {/* Play Again Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Play Again
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Battle Header with Players */}
            <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  {/* Player Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-md">
                      {playerIcon}
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{playerName}</span>
                      <div className="text-xs text-gray-500">
                        {playerSections}/6 sections
                      </div>
                    </div>
                  </div>

                  {/* VS Badge */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full font-bold shadow-md z-10">
                    VS
                  </div>

                  {/* Opponent Info */}
                  <div className="flex items-center space-x-3">
                    <div>
                      <span className="font-medium text-gray-900 text-right block">{opponent.name}</span>
                      <div className="text-xs text-gray-500 text-right">
                        {opponentSections}/6 sections
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center shadow-md">
                      {opponent.icon}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-8 bg-gray-100 rounded-full relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out" 
                    style={progressStyles.player}
                  ></div>
                  <div 
                    className="absolute top-0 right-0 h-full bg-gradient-to-l from-red-500 to-orange-500 transition-all duration-700 ease-out" 
                    style={progressStyles.opponent}
                  ></div>
                  
                  {/* Center VS Badge (Mobile) */}
                  <div 
                    className="absolute top-1/2 transform -translate-y-1/2 md:hidden w-8 h-8 bg-gray-800 text-white rounded-full text-xs flex items-center justify-center font-bold transition-all duration-700 shadow-md z-10"
                    style={progressStyles.vs}
                  >
                    VS
                  </div>
                  
                  {/* Battlefield Divider */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-gray-800 transform -translate-x-1/2 transition-all duration-700"
                    style={progressStyles.vs}
                  ></div>
                </div>
              </div>
              
              {/* Round Counter */}
              <div className="bg-gray-50 py-2 px-6 text-center border-t border-gray-100">
                <span className="text-sm font-medium text-gray-700">
                  Question {currentQuestionIndex + 1} of {gameQuestions.length}
                </span>
              </div>
            </div>

            {/* Question Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={currentQuestionIndex}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative"
            >
              {/* Question Section */}
              <div className="p-8">
                {/* Question Image/Video */}
                <div className="mb-8 flex justify-center bg-gray-50 p-4 rounded-lg">
                  {currentQuestion.imageUrl?.endsWith('.mp4') ? (
                    <div className="relative w-full">
                      <video 
                        controls
                        preload="metadata"
                        className="rounded-lg shadow-md max-h-96 object-contain mx-auto"
                        style={{ maxWidth: "100%", width: "560px" }}
                        onError={(e) => {
                          console.error("Video error:", e);
                          e.target.onerror = null;
                          e.target.classList.add("video-error");
                        }}
                      >
                        <source src={currentQuestion.imageUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p id="video-error-message" className="hidden video-error-message text-red-500 text-center mt-2">
                        Video file not found or cannot be played.
                      </p>
                      <style jsx>{`
                        video.video-error + p.video-error-message {
                          display: block;
                        }
                      `}</style>
                    </div>
                  ) : currentQuestion.imageUrl && currentQuestion.imageUrl !== "" ? (
                    <img 
                      src={currentQuestion.imageUrl} 
                      alt="Question" 
                      className="rounded-lg shadow-md max-h-96 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      }}
                    />
                  ) : null}
                </div>
                
                {/* Question Text */}
                <div className="bg-violet-50 p-6 rounded-xl mb-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-2">Question:</h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {currentQuestion.question}
                  </p>
                </div>

                {/* Answer Buttons */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.button
                    onClick={() => handleAnswer('Real')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xl font-medium py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="mr-2">✓</span> Real
                  </motion.button>
                  <motion.button
                    onClick={() => handleAnswer('Fake')}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl font-medium py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="mr-2">✗</span> Fake
                  </motion.button>
                </div>
              </div>
              
              {/* Answer Explanation (only shown after answering) */}
              <div className="bg-gray-50 border-t border-gray-100 py-3 px-6 text-sm text-center">
                <p className="text-gray-600">
                  Choose wisely! Your opponent is also answering this question.
                </p>
              </div>

              {/* Feedback Overlay */}
              {showFeedback && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl mb-4
                      ${isCorrect ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 'bg-gradient-to-r from-red-500 to-orange-500'}`}
                  >
                    {isCorrect ? '✓' : '✗'}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mt-2"
                  >
                    The correct answer was: {currentQuestion.correctAnswer}
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PvpMatch; 