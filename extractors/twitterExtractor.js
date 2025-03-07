import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function extractTwitterPosts() {
  try {
    console.log('Extracting Twitter posts from frontend file...');
    const twitterJsPath = path.join(__dirname, '../twitter', 'twitter.js');
    const fileContent = fs.readFileSync(twitterJsPath, 'utf8');
    
    // Extract the tweets array using regex
    const postsRegex = /const\s+tweets\s*=\s*(\[[\s\S]*?\]);/;
    const match = fileContent.match(postsRegex);
    
    if (match && match[1]) {
      const postsArray = eval(match[1]);
      console.log('Extracted Twitter posts:', JSON.stringify(postsArray, null, 2));
      
      console.log(`Successfully extracted ${postsArray.length} Twitter posts`);
      return postsArray;
    } else {
      console.error('Failed to extract Twitter posts data');
      return [];
    }
  } catch (error) {
    console.error('Error reading Twitter posts data:', error);
    return [];
  }
} 