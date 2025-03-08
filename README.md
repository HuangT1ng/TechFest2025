# Deepfake Detection Game

An educational web application to help users identify and understand deepfakes through interactive challenges and game modes.

## Overview

This project includes:
- A React frontend for the user interface
- An Express backend for game logic and API endpoints
- Interactive game modes to test users' abilities to identify deepfakes
- Leaderboard system to track scores

## Features

- **Multiple Game Modes**:
  - PvP: Challenge another player in real-time detection battles
  - Weekly Challenge: New challenges every week with special rewards
  - Misinformation Maze: Navigate through increasingly difficult fake content
  - Propaganda Decoder: Learn to identify and decode propaganda techniques
  
- **Weekly Leaderboard**: Track top performers and scores
- **Modern UI**: Clean, responsive design with subtle animations
- **Educational Content**: Learn to spot deepfakes through gameplay

## Project Structure

```
/
├── node_modules/      # Frontend dependencies
├── public/            # Static assets
├── server/            # Backend server
│   ├── node_modules/  # Server dependencies
│   ├── routes/        # API routes
│   │   └── game.js    # Game-related endpoints
│   ├── index.js       # Server entry point
│   └── .env           # Server environment variables
├── src/               # Frontend source code
│   ├── assets/        # Images and media
│   ├── components/    # React components
│   │   ├── Game.jsx   # Game page component
│   │   ├── Home.jsx   # Homepage component
│   │   └── ...        # Other components
│   └── App.js         # Main React component
└── package.json       # Frontend dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```
git clone <repository-url>
cd deepfake
```

2. Install frontend dependencies:
```
npm install
```

3. Install backend dependencies:
```
cd server
npm install
cd ..
```

### Running the Application

You can run both the frontend and backend concurrently with a single command:
```
npm run dev
```

Or run them individually:

**Frontend (React):**
```
npm start
```
Frontend runs on: http://localhost:3000

**Backend (Express):**
```
cd server
npm run dev
```
Backend runs on: http://localhost:3001

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/game` - Get main game data
- `GET /api/game/status` - Check game server status
- `GET /api/game/leaderboard` - Get leaderboard data
- `POST /api/game/start` - Start a new game session
- `POST /api/game/submit` - Submit game results

## Development

- The frontend uses React with React Router for navigation
- Styling is done with Tailwind CSS
- The backend is built with Express.js
- Data is currently mocked in the backend and will be replaced with a database connection in future releases

## Future Enhancements

- User authentication system
- Persistent storage with database integration
- More advanced game modes and challenges
- User profile and history tracking

## Troubleshooting

**Port Conflicts:**
- The React app uses port 3000 by default
- The Express server uses port 3001 by default
- If you encounter port conflicts, update the `.env` file in the server directory or the `package.json` start scripts

**API Connection Issues:**
- Check that both frontend and backend are running
- Verify the API_URL in the Game.jsx component points to the correct server address
- Check browser console for CORS or network errors
