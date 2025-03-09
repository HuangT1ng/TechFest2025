import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserFriends, FaCalendarAlt, FaSearch, FaRoute } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // Base server URL
  const API_URL = 'http://localhost:3001/api/game';
  
  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setLoading(true);
        // Fetch leaderboard data
        const leaderboardResponse = await fetch(`${API_URL}/leaderboard`);
        const leaderboardData = await leaderboardResponse.json();
        setLeaderboardData(leaderboardData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching game data:', err);
        setLoading(false);
      }
    };
    
    fetchGameData();
  }, []);
  
  const GameModeButton = ({ title, icon, description, onClick }) => (
    <div 
      className="game-mode-button bg-white hover:bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden h-full"
      onClick={onClick}
    >
      <div className="button-content p-6 flex flex-col items-center text-center">
        <div className="icon-container bg-yellow-100 p-4 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-yellow-800 mb-2">{title}</h3>
        <p className="text-yellow-700 text-sm">{description}</p>
      </div>
    </div>
  );
  
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold text-yellow-800 mb-8">Deepfake Detection Game</h1>
        
        {/* Game Modes 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-4xl">
          <div className="w-full">
            <GameModeButton 
              title="PvP" 
              icon={<FaUserFriends className="text-yellow-600 text-2xl" />}
              description="Challenge another player in real-time detection battles"
              onClick={() => navigate('/game/pvp')}
            />
          </div>
          <div className="w-full">
            <GameModeButton 
              title="Weekly Challenge" 
              icon={<FaCalendarAlt className="text-yellow-600 text-2xl" />}
              description="New challenges every week with special rewards"
              onClick={() => navigate('/game/weekly-challenge')}
            />
          </div>
          <div className="w-full">
            <GameModeButton 
              title="Misinformation Maze" 
              icon={<FaRoute className="text-yellow-600 text-2xl" />}
              description="Navigate through increasingly difficult fake content"
              onClick={() => console.log('Misinformation Maze selected')}
            />
          </div>
          <div className="w-full">
            <GameModeButton 
              title="Propaganda Decoder" 
              icon={<FaSearch className="text-yellow-600 text-2xl" />}
              description="Learn to identify and decode propaganda techniques"
              onClick={() => console.log('Propaganda Decoder selected')}
            />
          </div>
        </div>
        
        {/* Weekly Leaderboard */}
        <div className="weekly-leaderboard bg-white rounded-xl shadow-md p-6 mb-8 w-full max-w-3xl">
          <div className="leaderboard-header flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-yellow-800">Weekly Leaderboard</h2>
            <span className="text-sm text-yellow-600">
              Week of {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
          </div>
          
          {loading ? (
            <p className="text-center py-4">Loading leaderboard data...</p>
          ) : (
            <div className="leaderboard-list max-h-60 overflow-y-auto pr-2">
              {leaderboardData.map((player, index) => (
                <div key={player.id} className="leaderboard-item flex items-center p-3 border-b border-yellow-100 hover:bg-yellow-50 transition-colors">
                  <div className="rank w-10 font-bold text-xl text-yellow-600">{index + 1}</div>
                  <div className="avatar bg-yellow-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    {player.username.charAt(0).toUpperCase()}
                  </div>
                  <div className="player-info flex-grow">
                    <div className="username font-medium text-yellow-900">{player.username}</div>
                    <div className="additional-info text-xs text-yellow-600">Level {player.level}</div>
                  </div>
                  <div className="score font-bold text-lg text-yellow-800">{player.score}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game; 