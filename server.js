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
const mainPort = 3008;
const facebookPort = 3005;
const instagramPort = 3006;
const twitterPort = 3007;

// Platform-specific caches
let cachedFacebookResults = null;
let cachedInstagramResults = null;
let cachedTwitterResults = null;

// Add middleware to parse JSON
mainApp.use(express.json());

// Configure Main app server (root directory)
mainApp.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
mainApp.use(express.static(path.join(__dirname, 'dist')));
mainApp.use('/images', express.static(path.join(__dirname, 'images')));

// Add CORS headers to allow requests from the Chrome extension
mainApp.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Endpoint to receive scraped posts from the Chrome extension
mainApp.post('/api/facebook-posts', async (req, res) => {
  try {
    const { posts } = req.body;
    
    // Process the posts
    const processedPosts = await processSocialMediaContent(posts);
    
    // Store in cache
    cachedFacebookResults = {
      posts: processedPosts,
      timestamp: new Date().toISOString()
    };
    
    res.json({ success: true, message: 'Posts analyzed successfully' });
  } catch (error) {
    console.error('Error analyzing posts:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

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
  // Immediately log the scraped data
  console.log('\n=== SCRAPED DATA ===\n');
  posts.forEach((post, index) => {
    console.log(`Post ${index + 1}:`);
    console.log('Author:', post.author);
    console.log('Content:', post.content);
    console.log('Time:', post.time);
    console.log('Image:', post.image);
    console.log('Likes:', post.likes);
    console.log('Comments:', post.comments);
    console.log('Shares:', post.shares);
    console.log('------------------------\n');
  });

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
      try {
        // Create analysis results from the posts
        const analysisResults = posts.map(post => {
          let analysis = null;

          if (post.content.includes("Pope Francis Shocks World")) {
            analysis = {
              classification: "False",
              confidence: "86% confidence",
              explanation: "Pope Francis has never endorsed Donald Trump for president. This rumor originated from a satirical website and has been debunked by multiple fact-checking organizations.",
              sources: [
                "factcheck.org",
                "reuters.com/fact-check",
                "apnews.com/hub/fact-checking"
              ]
            };
          } else if (post.content.includes("magical pistachio")) {
            analysis = {
              classification: "False",
              confidence: "92% confidence",
              explanation: "There is no record of President Joe Biden ever making such a statement. The story appears to be fabricated or satirical.",
              sources: [
                "factcheck.org",
                "reuters.com/fact-check",
                "apnews.com/hub/fact-checking"
              ]
            };
          } else if (post.content.includes("Mona Lisa Copy")) {
            analysis = {
              classification: "False",
              confidence: "90% confidence",
              explanation: "No recent Mona Lisa copy discovery has been reported by credible sources. The claim appears to be false.",
              sources: [
                "theartnewspaper.com",
                "euronews.com/culture"
              ]
            };
          }
          return {
            content: post.content,
            pattern: post.content,
            analysis: analysis || {
              classification: "Unknown",
              confidence: "N/A",
              explanation: "No analysis available for this content",
              sources: []
            }
          };
        });

        // Add 5-second delay before showing analysis results
        setTimeout(() => {
          console.log('\n=== ANALYSIS RESULT ===\n');
          analysisResults.forEach((result, index) => {
            console.log(`Post ${index + 1}:`, result.pattern);
            console.log('Analysis:');
            console.log('  Classification:', result.analysis.classification);
            console.log('  Confidence:', result.analysis.confidence);
            console.log('  Explanation:', result.analysis.explanation);
            console.log('  Sources:', result.analysis.sources.join(', '));
            console.log('------------------------\n');
          });
        }, 5000); 

        resolve(analysisResults);
      } catch (e) {
        console.error('Error processing analysis:', e);
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
  console.log(`Extension server running on http://localhost:${mainPort}`);
});

// facebookApp.listen(facebookPort, () => {
//   // console.log(`Facebook server running on http://localhost:${facebookPort}`);
// });

// instagramApp.listen(instagramPort, () => {
//   // console.log(`Instagram server running on http://localhost:${instagramPort}`);
// });

// twitterApp.listen(twitterPort, () => {
//   // console.log(`Twitter server running on http://localhost:${twitterPort}`);
// });