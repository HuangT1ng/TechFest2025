import React, { useState, useEffect } from 'react';
import { FaTrophy, FaMedal, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const WeeklyChallenge = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState({});
  const [contestHistory, setContestHistory] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedContest, setSelectedContest] = useState(null);

  // Load contest history on component mount - only tracks current session attempts
  useEffect(() => {
    const history = JSON.parse(sessionStorage.getItem('contestHistory')) || {};
    setContestHistory(history);

    // Set up event listener for storage changes (in case attempt is made in another component)
    const handleStorageChange = () => {
      const updatedHistory = JSON.parse(sessionStorage.getItem('contestHistory')) || {};
      setContestHistory(updatedHistory);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Clean up event listener
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Sample contest data - in a real app, this would come from an API
  useEffect(() => {
    const contestData = [
      {
        id: 1,
        contestId: '441',
        title: "Weekly Contest #441",
        description: "Test your skills at identifying AI-generated text from human text",
        startTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Started 2 days ago
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Ends in 1 day
        status: "active",
        difficulty: "Medium",
        participants: 342
      },
      {
        id: 2,
        contestId: '28',
        title: "Celebrity Challenge #28",
        description: "Identify deepfake videos of popular celebrities",
        startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 2 days, 8 hours from now
        difficulty: "Hard", 
        participants: 523
      },
      {
        id: 3,
        contestId: '15',
        title: "Audio Deepfake Contest #15",
        description: "Can you spot AI-generated voices from real human recordings?",
        startTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        difficulty: "Easy",
        participants: 187
      }
    ];
    
    setContests(contestData);
  }, []);

  // Calculate and update time remaining for each contest
  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date();
      const newTimeRemaining = {};
      
      contests.forEach(contest => {
        if (contest.endTime) {
          // For contests with an end time (active contests)
          const diff = contest.endTime - now;
          if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            newTimeRemaining[contest.id] = { days, hours, minutes, seconds };
          } else {
            newTimeRemaining[contest.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }
        } else {
          // For contests with only start times (upcoming contests)
          const diff = contest.startTime - now;
          if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            newTimeRemaining[contest.id] = { days, hours, minutes, seconds };
          } else {
            newTimeRemaining[contest.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          }
        }
      });
      
      setTimeRemaining(newTimeRemaining);
    };
    
    // Run immediately
    updateCountdowns();
    
    // Update every second
    const intervalId = setInterval(updateCountdowns, 1000);
    
    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, [contests]);

  // Format countdown text
  const formatCountdown = (timeObj) => {
    if (!timeObj) return "";
    return `${timeObj.days}d ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s`;
  };

  // Get appropriate background color based on difficulty
  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle contest click
  const handleContestClick = (contest) => {
    // Check if the contest has already been attempted
    if (isContestAttempted(contest.contestId)) {
      // If already attempted, show the modal with contest details
      setSelectedContest(contest);
      setShowModal(true);
      return; // Don't navigate
    }
    
    // If not attempted, navigate to the contest
    if (contest.status === 'active') {
      // Navigate to weeklycontest441 page for active contests
      navigate('/game/weeklycontest441');
    } else {
      // Just log for upcoming contests
      console.log(`Clicked ${contest.title}`);
    }
  };

  // Check if a contest has been attempted
  const isContestAttempted = (contestId) => {
    return !!contestHistory[contestId];
  };

  // Get user's score for a contest if attempted
  const getContestScore = (contestId) => {
    if (contestHistory[contestId]) {
      return {
        score: contestHistory[contestId].score,
        maxScore: contestHistory[contestId].maxScore
      };
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-purple-100 min-h-screen py-8">
      {/* Hero Section */}
      <div className="bg-indigo-800 text-white py-12 mb-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mb-6">
            <FaTrophy className="text-6xl text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold mb-3 text-center">Weekly Contests</h1>
          <p className="text-xl text-center text-indigo-200 max-w-2xl">
            New contest every week. Compete and see your ranking on the leaderboard!
          </p>
        </div>
      </div>
      
      {/* Contests List */}
      <div className="container mx-auto px-4 mb-16">
        {/* Current Contests Section */}
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Current Contests</h2>
        
        <div className="space-y-6 mb-12">
          {contests.filter(contest => contest.status === 'active').map(contest => (
            <div 
              key={contest.id}
              onClick={() => handleContestClick(contest)}
              className={`contest-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-green-500 ${
                isContestAttempted(contest.contestId) 
                  ? 'cursor-not-allowed opacity-80' 
                  : 'cursor-pointer'
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-indigo-800 mr-3">{contest.title}</h3>
                      {isContestAttempted(contest.contestId) && (
                        <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-800 font-medium">
                          Attempted
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-700 mb-3">{contest.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(contest.difficulty)}`}>
                        {contest.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                      <span className="text-sm text-gray-600">
                        {contest.participants} participants
                      </span>
                    </div>
                    
                    {/* Show score if contest was attempted */}
                    {isContestAttempted(contest.contestId) && (
                      <div className="mt-3 bg-indigo-50 p-2 rounded-lg inline-block">
                        <span className="text-indigo-800">
                          Your score: <span className="font-semibold">{getContestScore(contest.contestId).score}/{getContestScore(contest.contestId).maxScore}</span>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="rounded-lg p-4 text-center bg-green-100">
                      <div className="text-sm text-green-600 mb-1">
                        Ends in:
                      </div>
                      <div className="text-lg font-bold text-green-800">
                        {formatCountdown(timeRemaining[contest.id])}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      {`Ends: ${contest.endTime.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Upcoming Contests Section */}
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Upcoming Contests</h2>
        
        <div className="space-y-6">
          {contests.filter(contest => !contest.status || contest.status !== 'active').map(contest => (
            <div 
              key={contest.id}
              onClick={() => handleContestClick(contest)}
              className="contest-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-l-4 border-indigo-400"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-2">{contest.title}</h3>
                    <p className="text-indigo-700 mb-3">{contest.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(contest.difficulty)}`}>
                        {contest.difficulty}
                      </span>
                      <span className="text-sm text-gray-600">
                        {contest.participants} participants
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="rounded-lg p-4 text-center bg-indigo-100">
                      <div className="text-sm text-indigo-600 mb-1">
                        Starts in:
                      </div>
                      <div className="text-lg font-bold text-indigo-800">
                        {formatCountdown(timeRemaining[contest.id])}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      {`Starts: ${contest.startTime.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Past Contests Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">Past Contests</h2>
          
          {Object.keys(contestHistory).length > 0 ? (
            <div className="space-y-6">
              {/* Past Contest Records */}
              {Object.values(contestHistory).map((record) => (
                <div 
                  key={record.contestId}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row justify-between items-center"
                >
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center">
                      <FaMedal className="text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-indigo-800">{record.contestName}</h3>
                    </div>
                    <p className="text-indigo-700 mt-2">
                      Completed on: {new Date(record.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <div className="bg-indigo-100 rounded-lg p-4">
                      <p className="text-sm text-indigo-600 mb-1">Your Score</p>
                      <p className="text-2xl font-bold text-indigo-800">
                        {record.score} / {record.maxScore}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <FaMedal className="text-4xl text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">No Contest History Yet</h3>
              <p className="text-indigo-700 mb-4">Complete contests to see your performance history here.</p>
              <button 
                className="px-6 py-2 bg-indigo-300 text-indigo-800 rounded-full hover:bg-indigo-400 transition-colors"
                onClick={() => console.log("View active contests")}
              >
                Try Active Contests
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Attempted Contest */}
      {showModal && selectedContest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
          >
            {/* Content */}
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-2xl text-indigo-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-indigo-800 mb-2">Contest Already Completed</h2>
              <p className="text-indigo-600 mb-6">
                You've already participated in <span className="font-semibold">{selectedContest.title}</span>
              </p>
              
              <div className="bg-indigo-50 p-5 rounded-lg mb-6">
                <p className="text-xl text-indigo-800">
                  Your Score: <span className="font-bold">{getContestScore(selectedContest.contestId).score}/{getContestScore(selectedContest.contestId).maxScore}</span>
                </p>
              </div>
              
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default WeeklyChallenge; 