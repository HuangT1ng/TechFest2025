// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { extractFacebookPosts } from './extractors/facebookExtractor.js';
import { extractTwitterPosts } from './extractors/twitterExtractor.js';
import { extractInstagramPosts } from './extractors/instagramExtractor.js';
import { spawn } from 'child_process';

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

// Platform-specific caches
let cachedFacebookResults = null;
let cachedInstagramResults = null;
let cachedTwitterResults = null;

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

// API routes should come before the catch-all route
facebookApp.get('/api/analysis', (req, res) => {
  if (!cachedFacebookResults) {
    return res.status(404).json({ error: 'No analysis results available' });
  }
  res.json(cachedFacebookResults);
});

// Serve the HTML page only for the root route
facebookApp.get('/', async (req, res) => {
  console.log('Facebook page accessed, extracting posts...');
  try {
    const posts = extractFacebookPosts();
    const postsWithPlatform = posts.map(post => ({ ...post, platform: 'facebook' }));
    
    cachedFacebookResults = await processSocialMediaContent(postsWithPlatform);
    console.log('Facebook analysis results stored:', cachedFacebookResults.length);
    
    res.sendFile(path.join(__dirname, 'facebook', 'facebook.html'));
  } catch (error) {
    console.error('Processing failed:', error);
    res.status(500).send('Analysis failed');
  }
});

// Configure Instagram server
instagramApp.use(express.static(path.join(__dirname, 'instagram')));
instagramApp.use('/images', express.static(path.join(__dirname, 'images')));

// API routes should come before the catch-all route
instagramApp.get('/api/analysis', (req, res) => {
  if (!cachedInstagramResults) {
    return res.status(404).json({ error: 'No Instagram analysis available' });
  }
  res.json(cachedInstagramResults);
});

// Serve the HTML page only for the root route
instagramApp.get('/', async (req, res) => {
  try {
    console.log('Instagram page accessed, extracting posts...');
    const posts = extractInstagramPosts();
    // Add platform field to each post
    const postsWithPlatform = posts.map(post => ({ ...post, platform: 'instagram' }));
    
    // Process and store results
    cachedInstagramResults = await processSocialMediaContent(postsWithPlatform);
    console.log('Instagram analysis results stored:', cachedInstagramResults.length);
    console.log('Stored Instagram results:', JSON.stringify(cachedInstagramResults, null, 2));
    
    // Serve the page
    res.sendFile(path.join(__dirname, 'instagram', 'instagram.html'));
  } catch (error) {
    console.error('Instagram processing failed:', error);
    res.status(500).send('Analysis failed');
  }
});

// Configure Twitter server
twitterApp.use(express.static(path.join(__dirname, 'twitter')));
twitterApp.use('/images', express.static(path.join(__dirname, 'images')));

// API routes should come before the catch-all route
twitterApp.get('/api/analysis', (req, res) => {
  if (!cachedTwitterResults) {
    return res.status(404).json({ error: 'No Twitter analysis available' });
  }
  res.json(cachedTwitterResults);
});

// Serve the HTML page only for the root route
twitterApp.get('/', async (req, res) => {
  try {
    console.log('Twitter page accessed, extracting posts...');
    const posts = extractTwitterPosts();
    // Add platform field to each post
    const postsWithPlatform = posts.map(post => ({ ...post, platform: 'twitter' }));
    
    // Process and store results
    cachedTwitterResults = await processSocialMediaContent(postsWithPlatform);
    console.log('Twitter analysis results stored:', cachedTwitterResults.length);
    console.log('Stored Twitter results:', JSON.stringify(cachedTwitterResults, null, 2));
    
    // Serve the page
    res.sendFile(path.join(__dirname, 'twitter', 'twitter.html'));
  } catch (error) {
    console.error('Twitter processing failed:', error);
    res.status(500).send('Analysis failed');
  }
});

// Process posts using Python
function processSocialMediaContent(posts) {
  console.log(`Processing ${posts.length} posts`);
  return new Promise((resolve, reject) => {
    const python = spawn('python3', ['processors/mainProcessor.py']);
    
    let dataString = '';
    
    python.stdout.on('data', (data) => {
      dataString += data.toString();
    });
    
    python.stderr.on('data', (data) => {
      console.error(`Python error: ${data}`);
    });
    
    python.on('close', (code) => {
      console.log(`Analysis process completed with code ${code}`);
      try {
        const results = JSON.parse(dataString);
        resolve(results);
      } catch (e) {
        console.error('Error parsing Python output:', e);
        reject(e);
      }
    });
    
    // Send data to Python process
    python.stdin.write(JSON.stringify(posts));
    python.stdin.end();
  });
}

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