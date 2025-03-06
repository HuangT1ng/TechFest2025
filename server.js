// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve images from images directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running on http://localhost:${port}`);
}); 