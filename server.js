// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create servers for each platform
const mainApp = express();
const facebookApp = express();
const instagramApp = express();
const twitterApp = express();

// Set ports for each platform
const mainPort = 3000;
const facebookPort = 3001;
const instagramPort = 3002;
const twitterPort = 3003;

// Configure Main app server (root directory)
mainApp.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
mainApp.use(express.static(path.join(__dirname, 'dist')));
mainApp.use('/images', express.static(path.join(__dirname, 'images')));
mainApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Configure Facebook server
facebookApp.use(express.static(path.join(__dirname, 'facebook')));
facebookApp.use('/images', express.static(path.join(__dirname, 'images')));
facebookApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'facebook', 'facebook.html'));
});

// Configure Instagram server
instagramApp.use(express.static(path.join(__dirname, 'instagram')));
instagramApp.use('/images', express.static(path.join(__dirname, 'images')));
instagramApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'instagram', 'instagram.html'));
});

// Configure Twitter server
twitterApp.use(express.static(path.join(__dirname, 'twitter')));
twitterApp.use('/images', express.static(path.join(__dirname, 'images')));
twitterApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'twitter', 'twitter.html'));
});

// Start all servers
mainApp.listen(mainPort, () => {
  console.log(`Main app running on http://localhost:${mainPort}`);
});

facebookApp.listen(facebookPort, () => {
  console.log(`Facebook server running on http://localhost:${facebookPort}`);
});

instagramApp.listen(instagramPort, () => {
  console.log(`Instagram server running on http://localhost:${instagramPort}`);
});

twitterApp.listen(twitterPort, () => {
  console.log(`Twitter server running on http://localhost:${twitterPort}`);
}); 