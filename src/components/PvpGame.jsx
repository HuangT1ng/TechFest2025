import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaDragon, FaRobot, FaGhost, FaCrown, FaHeart, FaStar, FaGamepad, 
         FaPaw, FaRocket, FaFootballBall, FaBasketballBall, FaChess, FaCat, FaDog, 
         FaHippo, FaSpider, FaKiwiBird, FaFish, FaHorse, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PvpMatch from './PvpMatch';

const PvpGame = () => {
  const [playerName, setPlayerName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matchmakingTime, setMatchmakingTime] = useState(0);
  const [showMatchFound, setShowMatchFound] = useState(false);
  const [acceptTimer, setAcceptTimer] = useState(10);
  const timerIntervalRef = useRef(null);
  const acceptTimerRef = useRef(null);
  const iconsPerPage = 5;
  const [showGame, setShowGame] = useState(false);

  // Profile icon options - expanded to 20 icons
  const profileIcons = [
    { id: 1, icon: <FaUser className="text-3xl" />, name: 'User' },
    { id: 2, icon: <FaDragon className="text-3xl" />, name: 'Dragon' },
    { id: 3, icon: <FaRobot className="text-3xl" />, name: 'Robot' },
    { id: 4, icon: <FaGhost className="text-3xl" />, name: 'Ghost' },
    { id: 5, icon: <FaCrown className="text-3xl" />, name: 'Crown' },
    { id: 6, icon: <FaHeart className="text-3xl" />, name: 'Heart' },
    { id: 7, icon: <FaStar className="text-3xl" />, name: 'Star' },
    { id: 8, icon: <FaGamepad className="text-3xl" />, name: 'Gamepad' },
    { id: 9, icon: <FaPaw className="text-3xl" />, name: 'Paw' },
    { id: 10, icon: <FaRocket className="text-3xl" />, name: 'Rocket' },
    { id: 11, icon: <FaFootballBall className="text-3xl" />, name: 'Football' },
    { id: 12, icon: <FaBasketballBall className="text-3xl" />, name: 'Basketball' },
    { id: 13, icon: <FaChess className="text-3xl" />, name: 'Chess' },
    { id: 14, icon: <FaCat className="text-3xl" />, name: 'Cat' },
    { id: 15, icon: <FaDog className="text-3xl" />, name: 'Dog' },
    { id: 16, icon: <FaHippo className="text-3xl" />, name: 'Hippo' },
    { id: 17, icon: <FaSpider className="text-3xl" />, name: 'Spider' },
    { id: 18, icon: <FaKiwiBird className="text-3xl" />, name: 'Bird' },
    { id: 19, icon: <FaFish className="text-3xl" />, name: 'Fish' },
    { id: 20, icon: <FaHorse className="text-3xl" />, name: 'Horse' },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(profileIcons.length / iconsPerPage);
  
  // Get current icons to display
  const getCurrentIcons = () => {
    const start = currentPage * iconsPerPage;
    const end = start + iconsPerPage;
    return profileIcons.slice(start, end);
  };

  // Navigation functions
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Check if the Ready button should be enabled
  const isReadyEnabled = playerName.trim() !== '' && selectedIcon !== null;

  // Handle the Accept button click in match found popup
  const handleAccept = () => {
    console.log("Accepted!");
    // Clear the accept timer
    if (acceptTimerRef.current) {
      clearInterval(acceptTimerRef.current);
      acceptTimerRef.current = null;
    }
    // Reset states and show game
    setShowMatchFound(false);
    setIsMatchmaking(false);
    setAcceptTimer(10);
    setShowGame(true);
  };

  // Handle the Next time button click in match found popup
  const handleDecline = () => {
    // Clear the accept timer
    if (acceptTimerRef.current) {
      clearInterval(acceptTimerRef.current);
      acceptTimerRef.current = null;
    }
    // Reset states
    setShowMatchFound(false);
    setIsMatchmaking(false);
    setAcceptTimer(10);
  };

  // Matchmaking timer effect
  useEffect(() => {
    if (isMatchmaking) {
      // Clear any existing interval
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
      
      timerIntervalRef.current = setInterval(() => {
        setMatchmakingTime((prev) => {
          const newTime = prev + 1;
          if (newTime >= 3) {
            // If we reach 3 seconds, stop the timer and show the match found popup
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
            console.log('Matchmaking complete! Match found!');
            setShowMatchFound(true);
            return 3; // Cap the time at 3
          }
          return newTime;
        });
      }, 1000);
    } else {
      // Reset matchmaking time when not matchmaking
      setMatchmakingTime(0);
      // Clear interval if exists
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
    
    // Cleanup interval on unmount or when matchmaking state changes
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, [isMatchmaking]);

  // Match accept timer effect
  useEffect(() => {
    if (showMatchFound) {
      // Clear any existing interval
      if (acceptTimerRef.current) {
        clearInterval(acceptTimerRef.current);
      }
      
      // Set a new interval for the 10-second countdown
      acceptTimerRef.current = setInterval(() => {
        setAcceptTimer((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            // If we reach 0, auto decline the match
            clearInterval(acceptTimerRef.current);
            acceptTimerRef.current = null;
            console.log('Match auto-declined due to timeout');
            setShowMatchFound(false);
            setIsMatchmaking(false);
            return 10; // Reset timer to 10
          }
          return newTime;
        });
      }, 1000);
    } else {
      // Reset accept timer when not showing match found
      setAcceptTimer(10);
      // Clear interval if exists
      if (acceptTimerRef.current) {
        clearInterval(acceptTimerRef.current);
        acceptTimerRef.current = null;
      }
    }
    
    // Cleanup interval on unmount or when match found state changes
    return () => {
      if (acceptTimerRef.current) {
        clearInterval(acceptTimerRef.current);
        acceptTimerRef.current = null;
      }
    };
  }, [showMatchFound]);

  // Handle the Ready button click
  const handleReadyClick = () => {
    if (isMatchmaking) {
      // If already matchmaking, cancel it
      setIsMatchmaking(false);
    } else {
      // Start matchmaking
      setIsMatchmaking(true);
      console.log('Player ready:', { name: playerName, icon: selectedIcon + 1 });
    }
  };

  // Kahoot-style component style
  const kahootStyle = {
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif",
    borderRadius: "16px"
  };

  const inputStyle = {
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Arial Rounded MT Bold', sans-serif",
    borderRadius: "12px"
  };

  // Button style with conditional hover effect
  const buttonStyle = {
    ...kahootStyle,
    backgroundColor: isMatchmaking 
      ? 'rgb(239, 68, 68)' // red-500 (cancel button)
      : isReadyEnabled 
        ? 'rgb(34, 197, 94)' // green-500 (ready button)
        : isHovering 
          ? 'rgb(220, 38, 38)' // red-600 (hover on disabled)
          : 'rgb(156, 163, 175)' // gray-400 (disabled)
  };

  // Arrow button style
  const arrowStyle = {
    ...kahootStyle,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(251, 191, 36)', // yellow-400
    color: 'rgb(120, 53, 15)', // yellow-900
    width: '40px',
    height: '40px',
    cursor: 'pointer'
  };

  // Get the button text based on state
  const getButtonText = () => {
    if (isMatchmaking) {
      return `MatchMaking: ${matchmakingTime}s`;
    }
    return 'READY';
  };

  // Modal style
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalContentStyle = {
    ...kahootStyle,
    backgroundColor: 'white',
    padding: '2rem',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  // Get the current player's icon component
  const getCurrentPlayerIcon = () => {
    if (selectedIcon !== null) {
      return profileIcons[selectedIcon].icon;
    }
    return null;
  };

  // If showing game, render PvpMatch component
  if (showGame) {
    return (
      <PvpMatch
        playerName={playerName}
        playerIcon={getCurrentPlayerIcon()}
      />
    );
  }

  // Original return statement with matchmaking UI
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen flex items-start justify-center pt-12">
      <div className="w-full h-full flex flex-col items-center px-4">
        <h1 style={kahootStyle} className="text-center text-5xl font-medium text-yellow-800 mb-10 tracking-wide">PVP Arena</h1>
        
        <div style={kahootStyle} className="bg-white shadow-lg p-10 w-full max-w-2xl mx-auto flex flex-col justify-center">
          {/* Player Name Input */}
          <div className="mb-10">
            <label htmlFor="playerName" style={kahootStyle} className="block text-2xl font-medium text-yellow-800 mb-4">
              Enter your player name
            </label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="e.g. DragonSlayer99"
              style={inputStyle}
              className="w-full px-6 py-4 text-xl border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-yellow-800 font-medium"
              disabled={isMatchmaking}
            />
          </div>
          
          {/* Profile Icon Selection */}
          <div className="mb-10">
            <label style={kahootStyle} className="block text-2xl font-medium text-yellow-800 mb-6">
              Choose your profile icon
            </label>
            <div className="flex justify-center items-center space-x-4">
              {/* Left Arrow */}
              <div 
                style={arrowStyle} 
                onClick={!isMatchmaking ? goToPreviousPage : undefined}
                className={`transform hover:scale-110 transition-transform ${isMatchmaking ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaChevronLeft />
              </div>
              
              {/* Icons */}
              <div className="flex justify-center space-x-4 flex-grow">
                {getCurrentIcons().map((icon, index) => {
                  const actualIndex = currentPage * iconsPerPage + index;
                  return (
                    <div
                      key={icon.id}
                      onClick={!isMatchmaking ? () => setSelectedIcon(actualIndex) : undefined}
                      style={kahootStyle}
                      className={`cursor-pointer p-6 transition-all duration-200 
                        ${selectedIcon === actualIndex 
                          ? 'bg-yellow-400 text-yellow-900 transform scale-125 shadow-lg' 
                          : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'}
                        ${isMatchmaking ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      <div className="text-4xl">{icon.icon}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Right Arrow */}
              <div 
                style={arrowStyle} 
                onClick={!isMatchmaking ? goToNextPage : undefined}
                className={`transform hover:scale-110 transition-transform ${isMatchmaking ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaChevronRight />
              </div>
            </div>
            
            {/* Page indicator */}
            <div className="flex justify-center mt-4">
              <span style={kahootStyle} className="text-sm text-yellow-700">
                {currentPage + 1} of {totalPages}
              </span>
            </div>
          </div>
          
          {/* Ready/Matchmaking Button */}
          <button
            onClick={isReadyEnabled || isMatchmaking ? handleReadyClick : undefined}
            disabled={!isReadyEnabled && !isMatchmaking}
            style={buttonStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="w-full py-5 text-2xl transition-all duration-300 text-white font-medium tracking-wide"
          >
            {getButtonText()}
          </button>
        </div>
      </div>

      {/* Match Found Modal */}
      {showMatchFound && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={kahootStyle} className="text-center text-3xl font-bold text-yellow-800 mb-4">
              Match Found !
            </h2>
            <p className="text-center text-xl text-yellow-700 mb-6">
              {acceptTimer} seconds
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button
                onClick={handleAccept}
                style={{...kahootStyle, backgroundColor: 'rgb(34, 197, 94)'}} // green-500
                className="py-3 px-6 text-white text-xl font-medium transition-transform hover:scale-105 w-40 md:w-36"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                style={{...kahootStyle, backgroundColor: 'rgb(239, 68, 68)'}} // red-500
                className="py-3 px-6 text-white text-xl font-medium transition-transform hover:scale-105 w-40 md:w-36"
              >
                Next time
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PvpGame; 