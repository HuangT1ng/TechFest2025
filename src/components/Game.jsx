import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaCalendarAlt, FaSearch, FaRoute, FaTrophy, FaChevronRight } from 'react-icons/fa';
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
        // Fallback data for demo purposes
        setLeaderboardData([
          { id: 1, username: 'TruthSeeker', level: 8, score: 950 },
          { id: 2, username: 'FactChecker', level: 7, score: 875 },
          { id: 3, username: 'DeepDetector', level: 6, score: 820 },
          { id: 4, username: 'RealityGuard', level: 5, score: 790 },
          { id: 5, username: 'FakeBuster', level: 5, score: 765 },
        ]);
        setLoading(false);
      }
    };
    
    fetchGameData();
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
  
  const GameModeButton = ({ title, icon, description, onClick, color, delay }) => (
    <motion.div 
      className="group relative bg-white rounded-xl overflow-hidden h-full transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"></div>
      <div 
        className={`absolute bottom-0 left-0 w-full h-1.5 ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10`}
      ></div>
      
      <div 
        className="relative z-20 p-8 flex flex-col h-full cursor-pointer"
        onClick={onClick}
      >
        <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 ${color.replace('bg-', 'bg-').replace('600', '100')} text-${color.replace('bg-', '').replace('-600', '-600')} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-violet-700 transition-colors duration-300">{title}</h3>
        
        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
        
        <div className="flex items-center text-sm font-medium text-violet-600 mt-auto">
          <span>Start Game</span>
          <FaChevronRight className="ml-1 text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
  
  const LeaderboardItem = ({ player, index }) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg ${index < 3 ? 'bg-gray-50/50' : ''}`}
    >
      <div className={`rank w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm ${
        index === 0 ? 'bg-amber-100 text-amber-700' : 
        index === 1 ? 'bg-gray-200 text-gray-700' : 
        index === 2 ? 'bg-orange-100 text-orange-700' : 
        'bg-violet-50 text-violet-700'
      }`}>
        {index + 1}
      </div>
      
      <div className="avatar bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 shadow-sm">
        {player.username.charAt(0).toUpperCase()}
      </div>
      
      <div className="player-info flex-grow">
        <div className="username font-medium text-gray-900">{player.username}</div>
        <div className="additional-info text-xs text-gray-500">Level {player.level}</div>
      </div>
      
      <div className="score font-bold text-lg text-violet-700 flex items-center">
        {player.score}
        {index < 3 && <FaTrophy className={`ml-2 text-sm ${
          index === 0 ? 'text-amber-500' : 
          index === 1 ? 'text-gray-500' : 
          'text-orange-500'
        }`} />}
      </div>
    </motion.div>
  );
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-violet-200 opacity-20"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">TruthQuest</span> Games
            </h1>
            <p className="text-lg text-gray-700 mb-8">Challenge yourself with our collection of deepfake detection games and sharpen your digital literacy skills.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Game Modes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Challenge</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto">Pick your favorite game mode and start training your deepfake detection skills</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GameModeButton 
              title="PvP Battle" 
              icon={<FaUserFriends className="text-2xl" />}
              description="Challenge another player in real-time detection battles. Test your skills against human opponents and climb the ranks."
              onClick={() => navigate('/game/pvp')}
              color="bg-violet-600"
              delay={0.1}
            />
            <GameModeButton 
              title="Weekly Challenge" 
              icon={<FaCalendarAlt className="text-2xl" />}
              description="New challenges every week with special rewards. Complete time-limited tasks and earn unique badges."
              onClick={() => navigate('/game/weekly-challenge')}
              color="bg-purple-600"
              delay={0.2}
            />
            <GameModeButton 
              title="Misinformation Maze" 
              icon={<FaRoute className="text-2xl" />}
              description="Navigate through increasingly difficult fake content. Train your detection skills with progressively challenging content."
              onClick={() => navigate('/game/misinformationMaze')}
              color="bg-indigo-600"
              delay={0.3}
            />
            <GameModeButton 
              title="Propaganda Decoder" 
              icon={<FaSearch className="text-2xl" />}
              description="Learn to identify and decode propaganda techniques. Understand manipulation strategies used in modern media."
              onClick={() => navigate('/game/propagandaDecoder')}
              color="bg-fuchsia-600"
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Leaderboard Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Weekly Leaderboard</h2>
                <p className="text-gray-600">Top performers for the week of {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
              </div>
              <div className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <FaTrophy className="mr-2" />
                Rankings
              </div>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-4 border-b border-gray-100 bg-gray-50 text-sm text-gray-500 font-medium grid grid-cols-12">
                <div className="col-span-1">#</div>
                <div className="col-span-7">Player</div>
                <div className="col-span-4 text-right">Score</div>
              </div>
              
              <div className="divide-y divide-gray-50">
                {loading ? (
                  <div className="py-12">
                    <div className="loader w-12 h-12 border-4 border-gray-200 border-t-violet-600 rounded-full animate-spin mx-auto"></div>
                    <p className="text-center text-gray-500 mt-4">Loading leaderboard...</p>
                  </div>
                ) : (
                  leaderboardData.map((player, index) => (
                    <LeaderboardItem key={player.id} player={player} index={index} />
                  ))
                )}
              </div>
              
              <div className="p-4 bg-gray-50 text-center">
                <button
                  className="px-6 py-2 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-full text-violet-700 font-medium text-sm hover:shadow-md hover:border-violet-300 transition-all duration-300 flex items-center mx-auto"
                  onClick={() => {/* View full leaderboard */}}
                >
                  <FaTrophy className="mr-2 text-violet-500" />
                  View full leaderboard
                  <FaChevronRight className="ml-2 text-xs" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-12 text-center text-white max-w-4xl mx-auto shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Test Your Skills?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Jump into one of our games and start your journey to becoming a deepfake detection expert.
            </p>
            <button 
              onClick={() => navigate('/game/pvp')} 
              className="px-8 py-3 bg-white text-violet-700 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Playing Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Game; 