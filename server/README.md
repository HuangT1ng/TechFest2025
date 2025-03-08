# Deepfake Detection Game API

This is the backend server for the Deepfake Detection Game.

## API Endpoints

### Game

- `GET /api/game` - Get main game data
- `GET /api/game/status` - Check game server status
- `GET /api/game/leaderboard` - Get leaderboard data
- `POST /api/game/start` - Start a new game session
- `POST /api/game/submit` - Submit game results

## Development

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm run dev
```

The server runs on port 3001 by default.

## Environment Variables

Create a `.env` file with the following variables:

```
PORT=3001
NODE_ENV=development
```

## Project Structure

```
server/
├── node_modules/     # Dependencies
├── routes/           # API route handlers
│   └── game.js       # Game-related routes
├── .env              # Environment variables
├── index.js          # Main server entry point
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
``` 