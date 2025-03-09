import React, { useState, useEffect } from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const WeeklyChallenge = () => {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState({});

  // Sample contest data - in a real app, this would come from an API
  useEffect(() => {
    const contestData = [
      {
        id: 1,
        title: "Weekly Contest #441",
        description: "Test your skills at identifying AI-generated text from human text",
        startTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000 + 21 * 60 * 60 * 1000), // 6 days, 21 hours from now
        difficulty: "Medium",
        participants: 342
      },
      {
        id: 2,
        title: "Celebrity Challenge #28",
        description: "Identify deepfake videos of popular celebrities",
        startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 2 days, 8 hours from now
        difficulty: "Hard", 
        participants: 523
      },
      {
        id: 3,
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

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen py-8">
      {/* Hero Section */}
      <div className="bg-yellow-800 text-white py-12 mb-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="mb-6">
            <FaTrophy className="text-6xl text-yellow-300" />
          </div>
          <h1 className="text-4xl font-bold mb-3 text-center">Weekly Contests</h1>
          <p className="text-xl text-center text-yellow-200 max-w-2xl">
            New contest every week. Compete and see your ranking on the leaderboard!
          </p>
        </div>
      </div>
      
      {/* Contests List */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">Upcoming Contests</h2>
        
        <div className="space-y-6">
          {contests.map(contest => (
            <div 
              key={contest.id}
              onClick={() => console.log(`Clicked ${contest.title}`)}
              className="contest-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-l-4 border-yellow-400"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-2">{contest.title}</h3>
                    <p className="text-yellow-700 mb-3">{contest.description}</p>
                    
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
                    <div className="bg-yellow-100 rounded-lg p-4 text-center">
                      <div className="text-sm text-yellow-600 mb-1">Starts in:</div>
                      <div className="text-lg font-bold text-yellow-800">
                        {formatCountdown(timeRemaining[contest.id])}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      {contest.startTime.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'short', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Past Contests Section (collapsed by default) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Past Contests</h2>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <FaMedal className="text-4xl text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">View Your Contest History</h3>
            <p className="text-yellow-700 mb-4">See your performance in previous contests and claim rewards.</p>
            <button 
              className="px-6 py-2 bg-yellow-300 text-yellow-800 rounded-full hover:bg-yellow-400 transition-colors"
              onClick={() => console.log("View history clicked")}
            >
              View History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChallenge; 