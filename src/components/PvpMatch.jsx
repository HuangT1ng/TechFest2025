import React, { useState } from 'react';
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
    }, 1000);
  };

  // Calculate progress bar sections and VS position
  const getProgressBarStyle = () => {
    const totalSections = 6;
    const playerWidth = (playerSections / totalSections) * 100;
    const opponentWidth = (opponentSections / totalSections) * 100;
    
    return {
      player: { width: `${playerWidth}%` },
      opponent: { width: `${opponentWidth}%` },
      vs: { left: `${playerWidth}%` } // VS follows the division between sections
    };
  };

  const progressStyles = getProgressBarStyle();

  // Styles
  const progressBarStyle = {
    height: '30px',
    width: '100%',
    display: 'flex',
    borderRadius: '15px',
    position: 'relative',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    // overflow: 'h'
  };

  const vsStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    backgroundColor: '#FF6B00',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'white',
    boxShadow: '0 0 20px rgba(255, 107, 0, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.5)',
    zIndex: 2,
    transition: 'left 0.5s ease-in-out'
  };

  const flameStyles = `
    .flame-effect span {
      position: relative;
      z-index: 3;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    }
  `;

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto bg-white rounded-2xl p-12 shadow-xl">
          <div className="text-center space-y-8">
            {/* Trophy Icon */}
            <div className="text-8xl mb-8 flex justify-center">
              {winner === 'draw' ? '🤝' : winner === 'player' ? '🏆' : '🎮'}
            </div>

            {/* Game Over Text */}
            <h2 className="text-6xl font-bold mb-6 text-yellow-800" style={{
              fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif"
            }}>
              Game Over!
            </h2>

            {/* Winner Announcement */}
            <div className="space-y-4">
              <p className="text-4xl font-bold mb-4" style={{
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif",
                color: winner === 'draw' ? '#4B5563' : winner === 'player' ? '#2563EB' : '#DC2626'
              }}>
                {winner === 'draw' 
                  ? "Draw !" 
                  : winner === 'player' 
                    ? `${playerName} Wins!` 
                    : `${opponent.name} Wins!`}
              </p>
            </div>

            {/* Play Again Button */}
            <button
              onClick={() => window.location.reload()}
              className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-2xl font-bold py-6 px-12 rounded-xl 
                hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              style={{
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif"
              }}
            >
              Play Again!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 p-6">
      <style>{flameStyles}</style>
      <div className="max-w-4xl mx-auto">
        {/* Top Section with Players */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            {/* Player Info */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                {playerIcon}
              </div>
              <span className="font-medium text-lg text-blue-800">{playerName}</span>
            </div>

            {/* Opponent Info */}
            <div className="flex items-center space-x-3">
              <span className="font-medium text-lg text-red-800">{opponent.name}</span>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">
                {opponent.icon}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={progressBarStyle}>
            <div 
              className="bg-blue-500 transition-all duration-500" 
              style={{
                ...progressStyles.player,
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px'
              }}
            />
            <div 
              className="bg-red-500 transition-all duration-500" 
              style={{
                ...progressStyles.opponent,
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px'
              }}
            />
            <div style={{...vsStyle, ...progressStyles.vs}} className="flame-effect">
              <span>VS</span>
            </div>
          </div>
        </div>

        {/* Question Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg relative">
          <div className="mb-8">
            <span className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {gameQuestions.length}</span>
          </div>
          
          {/* Question Image/Video */}
          <div className="mb-8 flex justify-center">
            {currentQuestion.imageUrl?.endsWith('.mp4') ? (
              <div className="relative">
                <video 
                  controls
                  preload="metadata"
                  className="rounded-lg shadow-md max-h-96 object-contain"
                  style={{ maxWidth: "100%", width: "560px" }}
                  onError={(e) => {
                    console.error("Video error:", e);
                    e.target.onerror = null;
                    e.target.classList.add("video-error"); // Add class when error occurs
                  }}
                >
                  <source src={currentQuestion.imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Only show error message when video has error class */}
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
          
          <h2 className="text-2xl font-medium text-yellow-800 mb-8 text-center whitespace-pre-line">
            {currentQuestion.question}
          </h2>

          {/* Answer Buttons */}
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => handleAnswer('Real')}
              className="bg-green-500 text-white text-xl font-medium py-4 px-8 rounded-xl hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
            >
              Real
            </button>
            <button
              onClick={() => handleAnswer('Fake')}
              className="bg-red-500 text-white text-xl font-medium py-4 px-8 rounded-xl hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
            >
              Fake
            </button>
          </div>

          {/* Feedback Overlay */}
          {showFeedback && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
              <div className={`text-9xl animate-bounce ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? '✓' : '✗'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PvpMatch; 