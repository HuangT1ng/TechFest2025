const express = require('express');
const router = express.Router();

// Main game endpoint - returns all game data
router.get('/', (req, res) => {
  // This is the endpoint that will be accessed via /api/game
  const gameData = {
    title: "Deepfake Detection Challenge",
    description: "Test your ability to identify deepfakes from real content",
    levels: [
      {
        id: 1,
        name: "Beginner",
        description: "Simple deepfakes that are easier to spot",
        challenges: 5
      },
      {
        id: 2,
        name: "Intermediate",
        description: "More convincing deepfakes that require careful analysis",
        challenges: 7
      },
      {
        id: 3,
        name: "Expert",
        description: "Advanced deepfakes that are very difficult to distinguish",
        challenges: 10
      }
    ],
    currentPlayers: 42,
    status: "active"
  };
  
  res.json(gameData);
});

// Game status endpoint
router.get('/status', (req, res) => {
  res.json({
    status: 'active',
    message: 'Game server is running'
  });
});

// Leaderboard data endpoint
router.get('/leaderboard', (req, res) => {
  // Mock data for now, later you can connect to a database
  const leaderboardData = [
    { id: 1, username: 'Trump', score: 1, level: 999 },
    { id: 2, username: 'Elon', score: 0, level: 998 },
    { id: 3, username: 'Joe', score: 0, level: 3 },
  ];
  
  res.json(leaderboardData);
});

// Start a new game session
router.post('/start', (req, res) => {
  // Here you would typically create a new game session
  const gameId = Math.floor(Math.random() * 1000000);
  
  res.json({
    gameId: gameId,
    status: 'started',
    startTime: new Date().toISOString()
  });
});

// Submit game results
router.post('/submit', (req, res) => {
  const { userId, score, answers } = req.body;
  
  // Here you would validate and store the results
  // This is just a mock response
  res.json({
    success: true,
    message: 'Score submitted successfully',
    newRank: Math.floor(Math.random() * 100) + 1
  });
});

module.exports = router; 