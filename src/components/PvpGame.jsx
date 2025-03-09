import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaDragon, FaRobot, FaGhost, FaCrown, FaHeart, FaStar, FaGamepad, 
         FaPaw, FaRocket, FaFootballBall, FaBasketballBall, FaChess, FaCat, FaDog, 
         FaHippo, FaSpider, FaKiwiBird, FaFish, FaHorse, FaChevronLeft, FaChevronRight,
         FaSearch, FaUsers, FaUserFriends, FaTrophy } from 'react-icons/fa';
import PvpMatch from './PvpMatch';

const PvpGame = () => {
  const [playerName, setPlayerName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMatchmaking, setIsMatchmaking] = useState(false);
  const [matchmakingTime, setMatchmakingTime] = useState(0);
  const [showMatchFound, setShowMatchFound] = useState(false);
  const [matchAcceptCountdown, setMatchAcceptCountdown] = useState(10);
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
    setMatchAcceptCountdown(10);
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
    setMatchAcceptCountdown(10);
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
        setMatchAcceptCountdown((prev) => {
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
      setMatchAcceptCountdown(10);
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

  // Get the button text based on state
  const getButtonText = () => {
    if (isMatchmaking) {
      return `Finding Opponent... ${matchmakingTime}s`;
    }
    return 'START MATCHMAKING';
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

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Elements */}
          {[...Array(8)].map((_, i) => (
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
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <FaUserFriends className="text-3xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PVP <span className="bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">Challenge Arena</span>
            </h1>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
              Test your deepfake detection skills against other players in real-time PVP battles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            {/* Game Setup Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <FaUser className="mr-2 text-violet-600" />
                Player Setup
              </h2>

              {/* Player Name Input */}
              <div className="mb-8">
                <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your player name
                </label>
                <input
                  type="text"
                  id="playerName"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="e.g. TruthSeeker99"
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
                  disabled={isMatchmaking}
                />
              </div>
              
              {/* Icon Selection */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Choose your profile icon
                  </label>
                  <span className="text-xs text-gray-500">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  {/* Left Arrow */}
                  <button 
                    onClick={!isMatchmaking ? goToPreviousPage : undefined}
                    disabled={isMatchmaking}
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ${isMatchmaking ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  
                  {/* Icons */}
                  <div className="flex justify-center space-x-3 flex-1 py-2">
                    {getCurrentIcons().map((icon, index) => {
                      const actualIndex = currentPage * iconsPerPage + index;
                      return (
                        <motion.button
                          key={icon.id}
                          onClick={!isMatchmaking ? () => setSelectedIcon(actualIndex) : undefined}
                          disabled={isMatchmaking}
                          whileHover={!isMatchmaking ? { scale: 1.1 } : {}}
                          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 
                            ${selectedIcon === actualIndex 
                              ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                            ${isMatchmaking ? 'opacity-60 cursor-not-allowed' : ''}`}
                        >
                          {icon.icon}
                        </motion.button>
                      );
                    })}
                  </div>
                  
                  {/* Right Arrow */}
                  <button 
                    onClick={!isMatchmaking ? goToNextPage : undefined}
                    disabled={isMatchmaking}
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors ${isMatchmaking ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Player Preview */}
              {selectedIcon !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-10 p-4 bg-gray-50 rounded-lg flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-md">
                    {getCurrentPlayerIcon()}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {playerName || 'Player'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {profileIcons[selectedIcon].name}
                    </p>
                  </div>
                </motion.div>
              )}
              
              {/* Match Button */}
              <motion.button
                onClick={isReadyEnabled || isMatchmaking ? handleReadyClick : undefined}
                disabled={!isReadyEnabled && !isMatchmaking}
                whileHover={isReadyEnabled || isMatchmaking ? { scale: 1.02 } : {}}
                whileTap={isReadyEnabled || isMatchmaking ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center space-x-2
                  ${isMatchmaking 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : isReadyEnabled 
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg' 
                      : 'bg-gray-300 cursor-not-allowed'}`}
              >
                <span>{getButtonText()}</span>
                {isMatchmaking && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
              </motion.button>
            </motion.div>

            {/* Game Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FaTrophy className="mr-2 text-amber-500" />
                How It Works
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-3">
                    <FaSearch className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Analyze Content</h4>
                  <p className="text-sm text-gray-600">Identify if the content shown is real or fake</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-3">
                    <FaUsers className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Beat Opponents</h4>
                  <p className="text-sm text-gray-600">Win sections of the battlefield by answering correctly</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-3">
                    <FaTrophy className="text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Claim Victory</h4>
                  <p className="text-sm text-gray-600">Be the first to capture 6 sections to win the match</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Match Found Modal */}
      {showMatchFound && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUserFriends className="text-2xl" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Match Found!
              </h2>
              
              {/* Countdown Timer */}
              <div className="mb-6">
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">Auto-decline in {matchAcceptCountdown} seconds</p>
              </div>
              
              <div className="flex space-x-4">
                <motion.button
                  onClick={handleAccept}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Accept
                </motion.button>
                <button
                  onClick={handleDecline}
                  className="flex-1 py-3 px-4 text-gray-600 rounded-lg transition-colors hover:text-gray-900"
                >
                  Decline
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PvpGame; 