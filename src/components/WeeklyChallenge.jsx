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
        startTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Started 2 days ago
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Ends in 1 day
        status: "active",
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
    if (contest.status === 'active') {
      // Navigate to weeklycontest441 page for active contests
      navigate('/game/weeklycontest441');
    } else {
      // Just log for upcoming contests
      console.log(`Clicked ${contest.title}`);
    }
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
        <h2 className="text-2xl font-bold text-indigo-800 mb-6">Upcoming Contests</h2>
        
        <div className="space-y-6">
          {contests.map(contest => (
            <div 
              key={contest.id}
              onClick={() => handleContestClick(contest)}
              className={`contest-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border-l-4 ${contest.status === 'active' ? 'border-green-500' : 'border-indigo-400'}`}
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
                      {contest.status === 'active' && (
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      )}
                      <span className="text-sm text-gray-600">
                        {contest.participants} participants
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className={`rounded-lg p-4 text-center ${contest.status === 'active' ? 'bg-green-100' : 'bg-indigo-100'}`}>
                      <div className="text-sm text-indigo-600 mb-1">
                        {contest.status === 'active' ? 'Ends in:' : 'Starts in:'}
                      </div>
                      <div className="text-lg font-bold text-indigo-800">
                        {formatCountdown(timeRemaining[contest.id])}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      {contest.endTime ? 
                        `Ends: ${contest.endTime.toLocaleDateString('en-US', { 
                          weekday: 'long',
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}` :
                        `Starts: ${contest.startTime.toLocaleDateString('en-US', { 
                          weekday: 'long',
                          month: 'short', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}`
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Past Contests Section (collapsed by default) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">Past Contests</h2>
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <FaMedal className="text-4xl text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">View Your Contest History</h3>
            <p className="text-indigo-700 mb-4">See your performance in previous contests and claim rewards.</p>
            <button 
              className="px-6 py-2 bg-indigo-300 text-indigo-800 rounded-full hover:bg-indigo-400 transition-colors"
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